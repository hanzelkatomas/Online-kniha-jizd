// alerts
var alertBook = document.querySelector('#alert-book');
var alertBookText = document.querySelector("#alert-book-text");

var alertBook1 = document.querySelector('#alert-book1');
var alertBookText1 = document.querySelector("#alert-book-text1");

// show alert in book page
function showAlertBook(alertText){
    alertBookText.innerHTML = alertText;
    alertBook.style.display = "block";    
}

function showAlertBookGreen(alertText){
    alertBookText1.innerHTML = alertText;
    alertBook1.style.display = "block";    
}

// hide alert in book page
function hideAlertBook(){
    alertBook.style.display = "none";   
}

function hideAlertBookGreen(){
    alertBook1.style.display = "none";   
}

function getRecordNumber() {
    if (localStorage.getItem("records-count") == null) {
        return 0;
    }

    return Number(localStorage.getItem("records-count"));
}

function incrementRecordNumber(){
    var recordCount = getRecordNumber();
    localStorage.setItem("records-count", recordCount + 1);
}