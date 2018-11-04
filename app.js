"use strict";

var store = [];
var openHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm"
];

function Store(nameOfStore, minCusPerhr, maxCusPerhr, avgCookiesSoldPerCust) {
  this.nameOfStore = nameOfStore;
  this.minCusPerhr = minCusPerhr;
  this.maxCusPerhr = maxCusPerhr;
  this.avgCookiesSoldPerCust = avgCookiesSoldPerCust;
  this.cookiesPerHour = [];
  this.custPerHour = [];
  this.dailyTotal = 0;
  store.push(this);

  this.addCustPerHour(this.minCusPerhr, this.maxCusPerhr);
  this.generateHourlySales();
  this.render();
  createTableFooter();
}

Store.prototype.addCustPerHour = function(min, max) {
  for (var i = 0; i < openHours.length; i++) {
    var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randomCustPerHour);
    console.log("customers per hour", randomCustPerHour);
  }
};
Store.prototype.generateHourlySales = function() {
  // Line below will populate custPerHour array
  this.addCustPerHour(this.min, this.max);

  for (var i = 0; i < openHours.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesSoldPerCust);
    this.cookiesPerHour.push(perHour);

    // this.dailyTotal = this.dailyTotal + perHour;
    this.dailyTotal += perHour;
  }
};

Store.prototype.render = function() {
  this.generateHourlySales();

  var tbodyEl = document.getElementById("tbl-body");
  var trEl = document.createElement("tr");

  // tbodyEl.id = this.nameOfStore.toLowerCase().split("").join(_);

  var thEl = document.createElement("th");
  thEl.textContent = this.nameOfStore;
  trEl.appendChild(thEl);

  for (var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement("td");
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var totalEl = document.createElement("td");
  totalEl.textContent = this.dailyTotal;
  trEl.appendChild(totalEl);

  tbodyEl.appendChild(trEl);
};

function createTable() {
  var mainEl = document.getElementById("main-content");
  var tblEl = document.createElement("table");
  tblEl.id = "sales-table";
  mainEl.appendChild(tblEl);
}

function createTableHeader() {
  var tblEl = document.getElementById("sales-table");
  var theadEl = document.createElement("thead");
  var trEl = document.createElement("tr");
  var emptyTh = document.createElement("th");

  trEl.appendChild(emptyTh);

  for (var i = 0; i < openHours.length; i++) {
    var thEl = document.createElement("th");
    thEl.textContent = openHours[i];
    trEl.appendChild(thEl);
  }

  var totalEl = document.createElement("th");
  totalEl.textContent = "Daily Total";
  trEl.appendChild(totalEl);

  theadEl.appendChild(trEl);
  tblEl.appendChild(theadEl);
}

function createTableBody() {
  var tblEl = document.getElementById("sales-table");
  var tbodyEl = document.createElement("tbody");
  tbodyEl.id = "tbl-body";
  tblEl.appendChild(tbodyEl);
}

function createTableFooter() {
  var tfootElCheck = document.getElementById("tbl-foot");

  if (tfootElCheck) {
    tfootElCheck.remove();
  }

  var tblEl = document.getElementById("sales-table");
  var tfootEl = document.createElement("tfoot");
  var trEl = document.createElement("tr");

  tfootEl.id = "tbl-foot";

  var total2 = document.createElement("th");
  total2.textContent = "Total";
  trEl.appendChild(total2);

  var grandTotal = 0;
  for (var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement("td");
    var totals = 0;
    for (var j = 0; j < store.length; j++) {
      totals += store[j].cookiesPerHour[i];
    }

    tdEl.textContent = totals;
    trEl.appendChild(tdEl);

    grandTotal += totals;
  }

  var grandTotalEl = document.createElement("td");
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);

  tfootEl.appendChild(trEl);
  tblEl.appendChild(tfootEl);
}

(function run() {
  createTable();
  createTableHeader();
  createTableBody();
})();

new Store("1st and Pike", 23, 65, 6.3);
new Store("Sea-Tac Airport", 3, 24, 1.2);
new Store("Seattle Center", 11, 38, 3.7);
new Store("Capitol Hill", 20, 38, 2.3);
new Store("Alki", 2, 16, 4.6);

// STARTING ON FORMS

var pEl = document.getElementById("p-click");

function changeColor(event) {
  // console.log(event);
  if (event.target.className === "plum") {
    event.target.className = "black";
  } else {
    event.target.className = "plum";
  }
}

pEl.addEventListener("click", changeColor);

// FORM DATA
var formEl = document.getElementById("form-data");
formEl.addEventListener("submit", function(event) {
  event.preventDefault();

  // console.log(event.target.ta.value);
  var textInput = event.target.t.value;
  var numberInput = event.target.n.value;

  var pText = document.createElement("p");
  var pNumber = document.createElement("p");

  pText.textContent = textInput;
  pNumber.textContent = numberInput;
  pNumber.textContent = numberInput;
  pNumber.textContent = numberInput;

  var resultsEl = document.getElementById("results");
  resultsEl.appendChild(pText);
  resultsEl.appendChild(pNumber);
  resultsEl.appendChild(pNumber);
  resultsEl.appendChild(pNumber);

  event.target.t.value = "";
  event.target.n.value = "";
  event.target.n.value = "";
  event.target.n.value = "";
});
