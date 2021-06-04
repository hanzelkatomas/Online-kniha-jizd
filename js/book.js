showBook();
generateRecords();
//
function makeBook() {
    var manufacturer = document.querySelector("#manufacturer").value;
    var model = document.querySelector("#model").value;
    var consumption = document.querySelector("#consumption").value;
    var spz = document.querySelector("#spz").value;
    var company = document.querySelector("#company").value;
    var tachometer = document.querySelector("#tachometer").value;
    var year = document.querySelector("#year").value;
    var month = document.querySelector("#month").value;

    if (manufacturer == '') {
        showAlertBook("Políčko \"Výrobce vozu\" nesmí být prázdné");
        return;
    }

    if (model == '') {
        showAlertBook("Políčko \"Model vozu\" nesmí být prázdné");
        return;
    }

    if (consumption == '') {
        showAlertBook("Políčko \"Spotřeba vozu\" nesmí být prázdné");
        return;
    }

    if (spz == '') {
        showAlertBook("Políčko \"SPZ\" nesmí být prázdné");
        return;
    }

    if (company == '') {
        showAlertBook("Políčko \"Název firmy/společnosti\" nesmí být prázdné");
        return;
    }

    if (tachometer == '') {
        showAlertBook("Políčko \"Počáteční stav tachometru\" nesmí být prázdné");
        return;
    }

    if (year == '') {
        showAlertBook("Políčko \"Rok\" nesmí být prázdné");
        return;
    }

    if (month == '') {
        showAlertBook("Políčko \"Měsíc\" nesmí být prázdné");
        return;
    }

    // hiding
    document.querySelector("#make-book").style.display = "none";

    localStorage.setItem("manu", manufacturer);
    localStorage.setItem("mode", model);
    localStorage.setItem("cons", consumption);
    localStorage.setItem("spz", spz);
    localStorage.setItem("comp", company);
    localStorage.setItem("tacho", tachometer);
    localStorage.setItem("year", year);
    localStorage.setItem("month", month);


    // animate book
    document.querySelector("#book").classList.add("animate__animated");
    document.querySelector("#book").classList.add("animate__slideInUp");
    showBook();
}

function showBook() {
    // when book isnt made yet
    if (localStorage.length < 8) {
        return;
    }

    document.querySelector("#book").style.display = "block";
    document.querySelector("#make-book").style.display = "none";

    var manuHeader = document.querySelector("#manu-header");
    var modelHeader = document.querySelector("#model-header");
    var consumptionHeader = document.querySelector("#consumption-header");
    var spzHeader = document.querySelector("#spz-header");
    var companyHeader = document.querySelector("#company-header");
    var tachoHeader = document.querySelector("#tacho-header");
    var yearHeader = document.querySelector("#year-header");
    var monthHeader = document.querySelector("#month-header");

    manuHeader.innerHTML = "Výrobce vozu: " + localStorage.getItem("manu");
    modelHeader.innerHTML = "Model vozu: " + localStorage.getItem("mode");
    consumptionHeader.innerHTML = "Průměrná norma spotřeby: " + localStorage.getItem("cons") + " l/100 km"
    spzHeader.innerHTML = "SPZ: " + localStorage.getItem("spz");
    companyHeader.innerHTML = "Firma: " + localStorage.getItem("comp");
    tachoHeader.innerHTML = "Počáteční stav tachometru: " + localStorage.getItem("tacho") + " km";
    yearHeader.innerHTML = "Rok: " + localStorage.getItem("year");
    monthHeader.innerHTML = "Měsíc: " + localStorage.getItem("month");
}

function updateRecord(recordNumber) {

    if (confirm('Jste si jistý, že chcete uložit provedené změny v záznamu #' + recordNumber + '?')) {
        var elementValue = document.querySelector("#date" + recordNumber).value
        localStorage.setItem("rec-date" + (recordNumber - 1), elementValue);
        // when someone wants to remove information from record
        if (elementValue == "" && localStorage.getItem("rec-date" + (recordNumber - 1)) != null) localStorage.removeItem("rec-date" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#driver" + recordNumber).value
        localStorage.setItem("rec-driver" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-driver" + (recordNumber - 1)) != null) localStorage.removeItem("rec-driver" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#type" + recordNumber).value
        localStorage.setItem("rec-type" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-type" + (recordNumber - 1)) != null) localStorage.removeItem("rec-type" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#purpose" + recordNumber).value
        localStorage.setItem("rec-purpose" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-purpose" + (recordNumber - 1)) != null) localStorage.removeItem("rec-purpose" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#from" + recordNumber).value
        localStorage.setItem("rec-begin" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-begin" + (recordNumber - 1)) != null) localStorage.removeItem("rec-begin" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#to" + recordNumber).value
        localStorage.setItem("rec-final" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-final" + (recordNumber - 1)) != null) localStorage.removeItem("rec-final" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#begin-time" + recordNumber).value
        localStorage.setItem("rec-begin-time" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-begin-time" + (recordNumber - 1)) != null) localStorage.removeItem("rec-begin-time" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#final-time" + recordNumber).value
        localStorage.setItem("rec-final-time" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-final-time" + (recordNumber - 1)) != null) localStorage.removeItem("rec-final-time" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#distance" + recordNumber).value
        localStorage.setItem("rec-distance" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-distance" + (recordNumber - 1)) != null) localStorage.removeItem("rec-distance" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#tachometer-before" + recordNumber).value
        localStorage.setItem("rec-tacho-before" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-tacho-before" + (recordNumber - 1)) != null) localStorage.removeItem("rec-tacho-before" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#tachometer-after" + recordNumber).value
        localStorage.setItem("rec-tacho-after" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-tacho-after" + (recordNumber - 1)) != null) localStorage.removeItem("rec-tacho-after" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#gas-bought" + recordNumber).value
        localStorage.setItem("rec-gas-bought" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-gas-bought" + (recordNumber - 1)) != null) localStorage.removeItem("rec-gas-bought" + (recordNumber - 1), elementValue);

        elementValue = document.querySelector("#price-per-liter" + recordNumber).value
        localStorage.setItem("rec-price-per-liter" + (recordNumber - 1), elementValue);
        if (elementValue == "" && localStorage.getItem("rec-price-per-liter" + (recordNumber - 1)) != null) localStorage.removeItem("rec-price-per-liter" + (recordNumber - 1), elementValue);

        showAlertBookGreen("Změna záznamu byla uložena.");
    }
}


function generateRecords() {
    // when book is made but has no records
    if (localStorage.length < 9) return;

    document.querySelector("#records-info").style.display = "none";
    document.querySelector("#record1").style.display = "block";
    document.querySelector("#total-info").style.display = "block"
    var recordsDiv = document.querySelector("#records");
    var recordCount = getRecordNumber();

    // copying and updating ID of each new made record
    for (i = 0; i < recordCount - 1; i++) {
        // copy elemen which will be copied
        var copyRecord = document.querySelector("#record1").cloneNode(true);
        // create element in DOM
        var newRecord = recordsDiv.appendChild(copyRecord);
        // update ID of element    
        newRecord.id = "record" + (i + 2);

        // get all childs of new made element
        var childNodes = newRecord.childNodes;
        // update ID of header
        childNodes[1].id = "record-header" + (i + 2);
        console.log(childNodes)

        // get child of the child...
        var recordRow = childNodes[1].childNodes;

        // another layer
        var recordHeaderCol1 = recordRow[1].childNodes;
        // update ID and innerHTML of "record number"
        recordHeaderCol1[1].innerHTML = "#" + (i + 2);
        recordHeaderCol1[1].id = "record-number" + (i + 2);

        // get child of second column in header row
        var recordHeaderCol2 = recordRow[3].childNodes;
        // change onlick method of button "save"
        recordHeaderCol2[1].setAttribute("onclick", "updateRecord(" + (i + 2) + ")");


        // child with first row of inputs
        var informationRow1 = childNodes[5].childNodes;

        // Updating ID to every input and label in first row
        var date = informationRow1[1].childNodes;
        // updating values
        date[3].id = "date" + (i + 2);
        date[1].setAttribute("for", "date" + (i + 2));

        var driver = informationRow1[3].childNodes;
        // updating values
        driver[3].id = "driver" + (i + 2);
        driver[1].setAttribute("for", "driver" + (i + 2));

        var type = informationRow1[5].childNodes;
        // updating values
        type[3].id = "type" + (i + 2);
        type[1].setAttribute("for", "type" + (i + 2));

        var purpose = informationRow1[7].childNodes;
        // updating values
        purpose[3].id = "purpose" + (i + 2);
        purpose[1].setAttribute("for", "purpose" + (i + 2));

        var from = informationRow1[9].childNodes;
        // updating values
        from[3].id = "from" + (i + 2);
        from[1].setAttribute("for", "from" + (i + 2));

        var to = informationRow1[11].childNodes;
        // updating values
        to[3].id = "to" + (i + 2);
        to[1].setAttribute("for", "to" + (i + 2));


        // child with second row of inputs
        var informationRow2 = childNodes[7].childNodes;
        console.log(informationRow2);

        // Updating ID to every input and label in second row
        var beginTime = informationRow2[1].childNodes;
        // updating values
        beginTime[3].id = "begin-time" + (i + 2);
        beginTime[1].setAttribute("for", "begin-time" + (i + 2));

        var finalTime = informationRow2[3].childNodes;
        // updating values
        finalTime[3].id = "final-time" + (i + 2);
        finalTime[1].setAttribute("for", "final-time" + (i + 2));

        var distance = informationRow2[5].childNodes;
        // updating values
        distance[3].id = "distance" + (i + 2);
        distance[1].setAttribute("for", "distance" + (i + 2));

        var tachometerBefore = informationRow2[7].childNodes;
        // updating values
        tachometerBefore[3].id = "tachometer-before" + (i + 2);
        tachometerBefore[1].setAttribute("for", "tachometer-before" + (i + 2));

        var tachometerAfter = informationRow2[9].childNodes;
        // updating values
        tachometerAfter[3].id = "tachometer-after" + (i + 2);
        tachometerAfter[1].setAttribute("for", "tachometer-after" + (i + 2));

        var gasBought = informationRow2[11].childNodes;
        // updating values
        gasBought[3].id = "gas-bought" + (i + 2);
        gasBought[1].setAttribute("for", "gas-bought" + (i + 2));

        var priceLiter = informationRow2[13].childNodes;
        // updating values
        priceLiter[3].id = "price-per-liter" + (i + 2);
        priceLiter[1].setAttribute("for", "price-per-liter" + (i + 2));
    }
    // fill records with values
    loadRecordsValues();
}

function loadRecordsValues() {
    var recordCount = getRecordNumber();
    // loading values from local storage to records
    for (i = 0; i < recordCount; i++) {
        document.getElementById("date" + (i + 1)).value = localStorage.getItem("rec-date" + i);
        document.getElementById("driver" + (i + 1)).value = localStorage.getItem("rec-driver" + i);
        document.getElementById("type" + (i + 1)).value = localStorage.getItem("rec-type" + i);
        document.getElementById("purpose" + (i + 1)).value = localStorage.getItem("rec-purpose" + i);
        document.getElementById("from" + (i + 1)).value = localStorage.getItem("rec-begin" + i);
        document.getElementById("to" + (i + 1)).value = localStorage.getItem("rec-final" + i);
        document.getElementById("purpose" + (i + 1)).value = localStorage.getItem("rec-purpose" + i);
        document.getElementById("begin-time" + (i + 1)).value = localStorage.getItem("rec-begin-time" + i);
        document.getElementById("final-time" + (i + 1)).value = localStorage.getItem("rec-final-time" + i);
        document.getElementById("distance" + (i + 1)).value = localStorage.getItem("rec-distance" + i);
        document.getElementById("tachometer-before" + (i + 1)).value = localStorage.getItem("rec-tacho-before" + i);
        document.getElementById("tachometer-after" + (i + 1)).value = localStorage.getItem("rec-tacho-after" + i);
        document.getElementById("gas-bought" + (i + 1)).value = localStorage.getItem("rec-gas-bought" + i);
        document.getElementById("price-per-liter" + (i + 1)).value = localStorage.getItem("rec-price-per-liter" + i);
    }
    // show total distances etc.
    showTotalDistances();
}

function showTotalDistances() {
    var totalValues = calculateTotalDistances();
    document.getElementById("tacho-total").innerHTML = totalValues[0] + " km";
    document.getElementById("distance-total").innerHTML = totalValues[1].toFixed(2) + " km";
}

function showEditBook() {
    // hide book info
    document.querySelector("#book-info").style.display = "none";

    // show book edit
    document.querySelector("#book-edit").style.display = "block";

    // load values from local storage to elements
    document.getElementById("manufacturer-edit").value = localStorage.getItem("manu");
    document.getElementById("model-edit").value = localStorage.getItem("mode");
    document.getElementById("consumption-edit").value = localStorage.getItem("cons");
    document.getElementById("spz-edit").value = localStorage.getItem("spz");
    document.getElementById("company-edit").value = localStorage.getItem("comp");
    document.getElementById("tachometer-edit").value = localStorage.getItem("tacho");
    document.getElementById("year-edit").value = localStorage.getItem("year");
    document.getElementById("month-edit").value = localStorage.getItem("month");
}

function updateBook() {
    var manufacturer = document.getElementById("manufacturer-edit").value;
    var model = document.getElementById("model-edit").value;
    var consumption = document.getElementById("consumption-edit").value;
    var spz = document.getElementById("spz-edit").value;
    var company = document.getElementById("company-edit").value;
    var tachometer = document.getElementById("tachometer-edit").value;
    var year = document.getElementById("year-edit").value;
    var month = document.getElementById("month-edit").value;

    if (manufacturer == '') {
        showAlertBook("Políčko \"Výrobce vozu\" nesmí být prázdné");
        return;
    }

    if (model == '') {
        showAlertBook("Políčko \"Model vozu\" nesmí být prázdné");
        return;
    }

    if (consumption == '') {
        showAlertBook("Políčko \"Spotřeba vozu\" nesmí být prázdné");
        return;
    }

    if (spz == '') {
        showAlertBook("Políčko \"SPZ\" nesmí být prázdné");
        return;
    }

    if (company == '') {
        showAlertBook("Políčko \"Název firmy/společnosti\" nesmí být prázdné");
        return;
    }

    if (tachometer == '') {
        showAlertBook("Políčko \"Počáteční stav tachometru\" nesmí být prázdné");
        return;
    }

    if (year == '') {
        showAlertBook("Políčko \"Rok\" nesmí být prázdné");
        return;
    }

    if (month == '') {
        showAlertBook("Políčko \"Měsíc\" nesmí být prázdné");
        return;
    }

    if (confirm('Opravdu chcete změnit údaje v knize jízd?')) {
        // update book info
        localStorage.setItem("manu", manufacturer);
        localStorage.setItem("mode", model);
        localStorage.setItem("cons", consumption);
        localStorage.setItem("spz", spz);
        localStorage.setItem("comp", company);
        localStorage.setItem("year", year);
        localStorage.setItem("month", month);
        if (tachometer != localStorage.getItem("tacho")) {
            if (confirm("Změnou počátečního stavu techometru se musí přepočítat všechny pole v záznamu s názvem: \"Stav tachometru před\" a \"Stav tachometru po\". Jinak by údaje o tachometru nebyly správné. Chcete pokračovat?")) {
                localStorage.setItem("tacho", tachometer);
                updateTacho();
                loadRecordsValues();
            }
        }

        // hide book edit div
        var bookEdit = document.querySelector("#book-edit");
        bookEdit.classList.add("animate__animated");
        bookEdit.classList.add("animate__fadeOut");
        bookEdit.classList.add("animate__faster");

        // wait until animation is showed and make another animation
        setTimeout(function () {
            bookEdit.style.display = "none";
            bookEdit.classList.remove("animate__animated");
            bookEdit.classList.remove("animate__fadeOut");
            bookEdit.classList.remove("animate__faster");
            var bookInfo = document.querySelector("#book-info");
            bookInfo.classList.add("animate__animated");
            bookInfo.classList.add("animate__fadeIn");
            bookInfo.classList.add("animate__faster");
            bookInfo.style.display = "block";
        }, 500);

        showBook();
    }
}

function eraseBook() {
    if (confirm('Opravdu chcete smazat celou knihu? Smazáním knihy ztratíte veškeré informace o záznamech.')) {
        localStorage.clear();
        location.reload();
    }
}

function deleteRecords() {
    var recordCount = getRecordNumber();
    if (recordCount < 1) {
        showAlertBook('Nelze smazat záznamy, protože zatím nebyly žádné vytvořeny')
        return;
    }
    if (confirm('Opravdu chcete smazat všechny údaje o cestách v knize jízd?')) {
        for (i = 0; i < recordCount; i++) {
            localStorage.removeItem("rec-driver" + i);
            localStorage.removeItem("rec-begin" + i);
            localStorage.removeItem("rec-final" + i);
            localStorage.removeItem("rec-date" + i);
            localStorage.removeItem("rec-type" + i);
            localStorage.removeItem("rec-purpose" + i);
            localStorage.removeItem("rec-begin-time" + i);
            localStorage.removeItem("rec-final-time" + i);
            localStorage.removeItem("rec-distance" + i);
            localStorage.removeItem("rec-tacho-before" + i);
            localStorage.removeItem("rec-tacho-after" + i);
            localStorage.removeItem("rec-gas-bought" + i);
            localStorage.removeItem("rec-price-per-liter" + i);
        }
        localStorage.removeItem("records-count");
        location.reload();
    }
}

function updateTacho() {
    var recordCount = getRecordNumber();
    var tachoStart = Number(localStorage.getItem("tacho"));

    localStorage.setItem("rec-tacho-before0", tachoStart);
    localStorage.setItem("rec-tacho-after0", (tachoStart + Number(localStorage.getItem("rec-distance0"))).toFixed(2));

    for (i = 1; i < recordCount; i++) {
        tachoStart = Number(localStorage.getItem("rec-tacho-after" + (i - 1)));
        localStorage.setItem("rec-tacho-before" + i, tachoStart);
        localStorage.setItem("rec-tacho-after" + i, (tachoStart + Number(localStorage.getItem("rec-distance" + i))).toFixed(2));
    }
}

function calculateTotalDistances() {
    var recordCount = getRecordNumber();
    var total = [];
    total[0] = localStorage.getItem("rec-tacho-after" + (recordCount - 1));
    total[1] = 0;

    for (i = 0; i < recordCount; i++) {
        total[1] += Number(localStorage.getItem("rec-distance" + i));
    }
    return total;
}

function calculateTotalGasBought() {
    var recordCount = getRecordNumber();
    var gasBought = 0;
    var pricePerLiter = 0;
    var totalGas = 0;
    var totalGasPrice = 0;
    var i = 0;
    var countTanking = 0;

    while (i < recordCount) {
        gasBought = Number(localStorage.getItem('rec-gas-bought' + i));
        totalGas += gasBought;
        if (gasBought != 0) countTanking++;
        pricePerLiter = localStorage.getItem('rec-price-per-liter' + i);
        if (pricePerLiter != null) {
            totalGasPrice += pricePerLiter * gasBought;
        }
        i++;
    }

    // return total gas bought (litres), total price of gas and count of tanking
    return [totalGas, totalGasPrice, countTanking]
}


function makePDF() {
    var recordCount = getRecordNumber();
    var record = [];
    var records = [];
    var date;
    var shortDate;

    records.push([{ text: "Datum", style: "tableHeader" }, { text: "Řidič", style: "tableHeader" }, { text: "Účel", style: "tableHeader" }, { text: "Důvod cesty", style: "tableHeader" }, { text: "Počáteční destinace", style: "tableHeader" }, { text: "Cílová destinace", style: "tableHeader" }, { text: "Odjezd Příjezd", style: "tableHeader" }, { text: "Délka", style: "tableHeader" }, { text: "Tachometr před", style: "tableHeader" }, { text: "Tachometr po", style: "tableHeader" }, { text: "Tankování [litry]", style: "tableHeader" }, { text: "Cena paliva [Kč/l]", style: "tableHeader" }]);
    for (i = 0; i < recordCount; i++) {
        date = new Date(document.getElementById("date" + (i + 1)).value);
        date = date.toLocaleDateString();
        if (date != "Invalid Date") {
            shortDate = date.slice(0, 2) + ". " + date.slice(3, 5) + ".";
        }
        else {
            shortDate = "";
        }
        record.push(shortDate);
        record.push(document.getElementById("driver" + (i + 1)).value);
        record.push(document.getElementById("type" + (i + 1)).value);
        record.push(document.getElementById("purpose" + (i + 1)).value);
        record.push(document.getElementById("from" + (i + 1)).value);
        record.push(document.getElementById("to" + (i + 1)).value);
        record.push(document.getElementById("begin-time" + (i + 1)).value + " " + document.getElementById("final-time" + (i + 1)).value);
        record.push(Number(document.getElementById("distance" + (i + 1)).value).toFixed(0) + " km");
        record.push(Number(document.getElementById("tachometer-before" + (i + 1)).value).toFixed(0) + " km");
        record.push(Number(document.getElementById("tachometer-after" + (i + 1)).value).toFixed(0) + " km");
        record.push(document.getElementById("gas-bought" + (i + 1)).value);
        record.push(document.getElementById("price-per-liter" + (i + 1)).value);

        records.push(record);
        record = [];
    }

    var totalDistance = calculateTotalDistances();
    var totalGasBought = calculateTotalGasBought();
    var totalTrips = getRecordNumber();

    var doc = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        header: {
            text: 'Vygenerováno pomocí www.onlineknihajizd.cz',
            style: 'topHeader'
        },
        footer: function (currentPage, pageCount) { return currentPage.toString() + ' z ' + pageCount; },
        
        content: [
            {
                columns: [
                    {
                        text: 'Kniha jízd',
                        style: 'header'
                    },
                    {
                        text: localStorage.getItem('month') + ' ' + localStorage.getItem('year'),
                        style: 'headerDateLeft'
                    }
                ]
            },
            {
                columns: [
                    {
                        text: 'Firma: ' + localStorage.getItem('comp') + '\n',
                        style: 'carInfo'
                    },
                    {
                        text: 'Vozidlo: ' + localStorage.getItem("manu") + ' ' + localStorage.getItem('mode') + '\nSPZ: ' + localStorage.getItem('spz') + '\nPrůměrná norma spotřeby: ' + localStorage.getItem('cons') + ' l/100 km\n\n',
                        style: ['carInfo', 'toLeft']
                    }
                ]
            },
            {
                style: 'table',
                table: {
                    headerRows: 1,
                    widths: [35, 60, 55, 90, 70, 70, 40, 45, 52, 52, 50, 37],

                    body: records,
                },
                layout: {
                    hLineWidth: function (i, node) {
                        return (i === 0 || i === 1 || i === node.table.body.length) ? 2 : 1;
                    },
                    vLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                    },
                    hLineColor: function (i, node) {
                        return (i === 0 || i === 1 || i === node.table.body.length) ? 'black' : 'gray';
                    },
                    vLineColor: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                    },
                }
            },
            {
                text: "Shrnutí",
                style: "header"
            },
            {
                columns: [
                    {
                        text: 'Počáteční stav tachometru: ' + localStorage.getItem('tacho') + ' km' + '\nKonečný stav tachometru: ' + Number(totalDistance[0]).toFixed(0) + ' km\n' + 'Celkově najeto: ' + totalDistance[1].toFixed(0) + ' km\n' + 'Celkový počet jízd: ' + totalTrips,
                        style: 'carInfo'
                    },
                    {
                        text: 'Celkově natankováno: ' + totalGasBought[0] + ' l\n' + 'Celková cena za tankování: ' + totalGasBought[1] + ' Kč\n' + 'Počet proběhlých tankování: ' + totalGasBought[2],
                        style: ['toLeft', 'carInfo']
                    }
                ]
            }
        ],

        defaultStyle: {
            fontSize: 11
        },
        styles: {
            header: {
                fontSize: 19,
                bold: true,
                margin: [0, 0, 0, 5]
            },
            headerDateLeft: {
                fontSize: 19,
                bold: true,
                margin: [250, 0, 0, 0]
            },
            carInfo: {
                fontSize: 12
            },
            toLeft: {
                margin: [150, 0, 0, 0]
            },
            topHeader: {
                margin: [300, 10, 0, 0]
            },           
            tableHeader: {
                bold: true,
                alignment: 'center'
            },
            table: {
                margin: [0, 10, 0, 20]
            }
        }
    } 
    pdfMake.createPdf(doc).download('Kniha-jízd_' + localStorage.getItem('month') + '-' + localStorage.getItem('year') + '.pdf');
}
