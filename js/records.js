var calcButton = document.querySelector("#calc-button");
var saveButton = document.querySelector("#save-button");

var rowCounter = 1;
var distances = [];

//localStorage.clear();

preparePage();


function newRow() {
    // making container div
    var divContainer = document.createElement("div");
    rowCounter++;

    divContainer.id = "destinations" + rowCounter;
    divContainer.classList.add("row");
    divContainer.classList.add("destinations");
    document.getElementById('destinationList').appendChild(divContainer);

    // making first column
    var divDest1 = document.createElement("div");
    divDest1.classList.add("col-5");
    divContainer.appendChild(divDest1);

    // making first input
    var inputDest1 = document.createElement("input");
    inputDest1.id = "begin-dest" + rowCounter;
    inputDest1.type = "text";
    inputDest1.placeholder = "Zadejte město"
    inputDest1.classList.add("form-control");
    inputDest1.setAttribute("onchange", "checkInputs()");
    divDest1.appendChild(inputDest1);

    // making second column
    var divDest2 = document.createElement("div");
    divDest2.classList.add("col-5");
    divContainer.appendChild(divDest2);

    // making second input
    var inputDest2 = document.createElement("input");
    inputDest2.id = "final-dest" + rowCounter;
    inputDest2.type = "text";
    inputDest2.placeholder = "Zadejte město"
    inputDest2.classList.add("form-control");
    inputDest2.setAttribute("onchange", "checkInputs()");
    divDest2.appendChild(inputDest2);

    // buttons manipulation
    var divButton = document.querySelector("#button-div");
    divContainer.appendChild(divButton);

    if (rowCounter > 1) {
        document.querySelector("#remove-row-button").removeAttribute("disabled");
    }

    divContainer.classList.add("animate__animated");
    divContainer.classList.add("animate__backInRight");
    divContainer.style.animation = "backInRight";
    divContainer.style.animationDuration = "0.6s";

    checkInputs();
}

function removeRow() {
    if (rowCounter <= 2) {
        document.querySelector("#remove-row-button").setAttribute("disabled", "disabled");
    } 

    var divRemove = document.querySelector("#destinations" + rowCounter);
    var divButton = document.querySelector("#button-div");
    var divContainer = document.querySelector("#destinations" + (rowCounter - 1));

    // buttons manipulation
    divContainer.appendChild(divButton);

    // make animation
    divRemove.classList.add("animate__animated");
    divRemove.classList.add("animate__backOutLeft");
    divRemove.style.animation = "backOutLeft";
    divRemove.style.animationDuration = "0.6s";

    // wait until animation ends
    setTimeout(function () {
        divRemove.remove();
    }, 600);

    rowCounter--;
    checkInputs();
}


// Calculates assumed trip distance
function calculateDistance() {
    var consumption = localStorage.getItem("cons");
    var volume = document.querySelector('#volume').value;

    console.log("Spotreba: " + consumption);
    console.log("Objem: " + volume);
    res = (volume / consumption) * 100;
    res = res.toFixed(2);
    console.log("Vysledek: " + res);

    //distanceChangeColor(res);

    document.querySelector('#trip-distance-value').innerHTML = res + ' km';
    document.querySelector('#trip-distance-remaining').innerHTML = res + ' km';

    return res;
}

/*
function distanceChangeColor(remainingDistance){
    if (remainingDistance > 0) 
    {
        
        elementDistance = document.querySelector("#trip-distance-remaining");
        elementDistance.style.animation = "example 2s forwards";        
    }
}*/

function saveRecords() {
    // disable button to prevent saving the same values twice
    document.getElementById('save-button').setAttribute('disabled', 'disabled');
    var i = 0;

    while (i < rowCounter) {
        storageLenght = getRecordNumber();
        //save value of begin, final destination, tacho before and tacho after to local storage
        localStorage.setItem("rec-begin" + (storageLenght), document.querySelector("#begin-dest" + (i + 1)).value);
        localStorage.setItem("rec-final" + (storageLenght), document.querySelector("#final-dest" + (i + 1)).value);
        localStorage.setItem("rec-distance" + (storageLenght), distances[i]);
        if (storageLenght < 1) {
            localStorage.setItem("rec-tacho-before" + (storageLenght), localStorage.getItem("tacho"));
        }
        else {
            localStorage.setItem("rec-tacho-before" + (storageLenght), localStorage.getItem("rec-tacho-after" + (storageLenght - 1)));
        }
        localStorage.setItem("rec-tacho-after" + storageLenght, (Number(localStorage.getItem("rec-tacho-before" + storageLenght)) + Number(distances[i])).toFixed(2));
        incrementRecordNumber();
        i++;
    }

    // additionally save value gas bought/volume    
    localStorage.setItem("rec-gas-bought" + (storageLenght - i + 1), document.querySelector("#volume").value);

    // show alert
    document.querySelector("#alert-book").classList.remove("alert-warning");
    document.querySelector("#alert-book").classList.add("alert-success");
    showAlertBook("Záznamy byly uloženy do knihy jízd.");
    
    setTimeout(function () {
        location.reload();
    }, 3000);
}

function calculateTripsTotal() {
    var promises = [];
    for (i = 0; i < rowCounter; i++) {
        promises[i] = calculateTrip(i + 1);
    }

    var totalDistance = 0;

    // wait until all promises have result and then parse them into "distances" IN ORDER as requests were called!
    Promise.all(promises).then((distancesValue) => {
        for (i = 0; i < rowCounter; i++) {
            distances[i] = distancesValue[i].toFixed(2);
            totalDistance += Number(distances[i]);
        }
        console.log(distances);
        console.log(totalDistance);


        originalDistance = calculateDistance();
        document.querySelector("#trip-distance-remaining").innerHTML = (originalDistance - totalDistance).toFixed(2) + " km";
        checkInputs();
    });

}
function calculateTrip(inputNumber) {
    var beginDestination = document.querySelector("#begin-dest" + inputNumber);
    var finalDestination = document.querySelector("#final-dest" + inputNumber);
    var places = replaceSpacesAndRemoveDiacritics(beginDestination.value, finalDestination.value);

    console.log('3 Pocatecni bod final test: ' + places[0]);
    console.log('3 Konecny bod final test: ' + places[1]);

    var url = 'http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=' + places[0] + '&Waypoint.2=' + places[1] + '&optimize=time&maxSolutions=1&distanceUnit=km&key=AomUCywDKP50khDZ3d68CPxwdhrWSVFROmuSoMvjrfqIITdxPPmDi7EEoDTb3fNY';
    var distance;

    // create the GET request against API to obtain JSON result
    return fetch(url)
        .then(function (response) {
            // server returns the response, parse it to JSON
            return response.json();
        })
        .then(function (myJson) {
            // get distance value from JSON
            distance = myJson.resourceSets[0].resources[0].travelDistance;
            return distance;
        });
}

function replaceSpacesAndRemoveDiacritics(beginValue, destinationValue) {
    beginValue = _.deburr(beginValue);
    destinationValue = _.deburr(destinationValue);

    console.log('1 Pocatecni bod bez diakritiky: ' + beginValue);
    console.log('1 Konecny bod bez diakritiky: ' + destinationValue);

    resBegin = beginValue.replace(" ", "%20");
    resFinal = destinationValue.replace(" ", "%20");

    console.log('2 Pocatecni bod bez mezer: ' + resBegin);
    console.log('2 Konecny bod bez mezer: ' + resFinal);

    return [resBegin, resFinal];
}

function checkInputs() {
    var volumeInput = document.querySelector('#volume').value;
    var isEmpty = false;

    if (volumeInput == '') {
        calcButton.setAttribute('disabled', 'disabled');
        saveButton.setAttribute('disabled', 'disabled');
        return;
    }
    else {
        for (i = 0; i < rowCounter; i++) {
            if (document.getElementById("begin-dest" + (i + 1)).value == "" || document.getElementById("final-dest" + (i + 1)).value == "") {
                isEmpty = true;
                break;
            }
            else {
                isEmpty = false;
            }
        }
    }

    if (isEmpty) {
        calcButton.setAttribute('disabled', 'disabled');
        saveButton.setAttribute('disabled', 'disabled');
        return;
    }
    else {
        calcButton.removeAttribute('disabled');
    }

    if (distances.length != rowCounter) {
        saveButton.setAttribute('disabled', 'disabled');
    }
    else {
        saveButton.removeAttribute('disabled');
    }
}

function preparePage() {
    showBookAppeal();
    document.querySelector("#remove-row-button").setAttribute("disabled", "disabled");
    calcButton.setAttribute('disabled', 'disabled');
    saveButton.setAttribute('disabled', 'disabled');
}

function showBookAppeal() {
    if (localStorage.length < 8) {
        return;
    }
    // show div when book is made
    document.querySelector("#make-records").style.display = "block";
    document.querySelector("#appeal-make-book").style.display = "none";
}
