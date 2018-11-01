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
  // this.addCookieSale();
  // this.addAvgCookiesSoldPerCust();
  this.addCookiesPerHour();
  this.render();
}

Store.prototype.addCustPerHour = function(min, max) {
  for (var i = 0; i < openHours.length; i++) {
    var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randomCustPerHour);
    console.log("customers per hour", randomCustPerHour);
  }
};

Store.prototype.addCookiesPerHour = function() {
  //this.addCustPerHour(this.minCusPerhr, this.maxCusPerhr);
  for (var i = 0; i < openHours.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesSoldPerCust);
    this.cookiesPerHour.push(perHour);
    //console.log("cookies per hour", this.cookiesPerHour);
    // creates a total amount of cookies for the whole day by adding up each cookies per hour amount
    this.dailyTotal += perHour;
  }
};



Store.prototype.render = function() {
  var theadEl = document.getElementById("head");
  var trEl = document.createElement("tr");
  var thEl = document.createElement("th");
  
  trEl.appendChild(thEl);
  theadEl.textContent = openHours;
  //starting our loop
  for (var i = 0; i < openHours.length; i++) {
    var td = document.createElement("td");

    trEl.appendChild(td);
  }
  theadEl.appendChild(trEl);

  var tbodyEl = document.getElementById("main-content");
  var trEl = document.createElement("tr");
  var thEl = document.createElement("th");

  thEl.textContent = this.nameOfStore;
  trEl.appendChild(thEl);
  //starting our loop
  for (var i = 0; i < openHours.length; i++) {
    var td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    trEl.appendChild(td);
  }
  tbodyEl.appendChild(trEl);
  
};




function createTable() {
  var mainEl = document.getElementById("main-content");
  var tblEl = document.createElement("table");
  var theadEl = document.createElement("thead");
  var tbodyEl = document.createElement("tbody");
  var tFootEl = document.createElement("foot");

  mainEl.appendChild(tblEl); //append table as a child to the
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tFootEl);

  tblEl.id = "table";
  theadEl.id = "head";
  tbodyEl.id = "body";
  tFootEl.id = "foot";
}

createTable();

//console.log("array of stores", store);

new Store("1st and Pike", 23, 65, 6.3);
new Store("Sea-Tac Airport", 3, 24, 1.2);
new Store("Seattle Center", 11, 38, 3.7);
new Store("Capitol Hill", 20, 38, 2.3);
new Store("Alki", 2, 16, 4.6);





// STARTING ON FORMS

var pEl = document.getElementById('p-click');

function changeColor(event) {
  // console.log(event);
  if (event.target.className === 'plum') {
    event.target.className = 'black';
  } else {
    event.target.className = 'plum';
  }
}

pEl.addEventListener('click', changeColor);


// FORM DATA
var formEl = document.getElementById('form-data');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  // console.log(event.target.ta.value);
  var textInput = event.target.t.value;
  var numberInput = event.target.n.value;
  var passwordInput = event.target.p.value;
  var emailInput = event.target.e.value;

  var pText = document.createElement('p');
  var pNumber = document.createElement('p');
  var pPassword = document.createElement('p');
  var pEmail = document.createElement('p');

  pText.textContent = textInput;
  pNumber.textContent = numberInput;
  pPassword.textContent = passwordInput;
  pEmail.textContent = emailInput;

  var resultsEl = document.getElementById('results');
  resultsEl.appendChild(pText);
  resultsEl.appendChild(pNumber);
  resultsEl.appendChild(pPassword);
  resultsEl.appendChild(pEmail);


  event.target.t.value = '';
  event.target.n.value = '';
  event.target.p.value = '';
  event.target.e.value = '';
});









//   var tableHeadEl = document.createElement("th");
//   tblEl.appendChild(nameOfStoreEl);
//   nameOfStoreEl.textContent = this.nameofStore;

//   tblEl.appendChild(minCusPerhrEl);
//   minCusPerhrEl.textContent = this.minCusPerhr;

//   tblEl.appendChild(maxCusPerhrEl);

//   maxCusPerhrEl.textContent = this.maxCusPerhr;
//   tblEl.appendChild(avgCookiesPerCust);

//   tblEl.appendChild(avgCookiesPerCust);
//   avgCookiesSoldPerCust.textContent = this.avgCookiesSoldPerCust;

//   tblEl.appendChild(this.cookiesPerHour);
//   cookiesPerHourEl.textContent = this.cookiesPerHour;

//   tblEl.appendChild(openHoursEl);
//   openHoursEl.textContent = openHours;

//   tblEl.appendChild(custPerHour);
//   custPerHourEl = this.custPerHour;

//   tblEl.appendChild(dailyTotal);
//   dailyTotalEl.textContent = this.dailyTotal;

//   var nameOfStoreEl = document.textContent("td");
//   var minCusPerhrEl = document.textContent("td");
//   var maxCusPerhrEl = document.textContent("td");
//   var avgCookiesSoldPerCust = document.textContent("td");
//   var cookiesPerHourEl = document.textContent("td");
//   var openHoursEl = document.textContent("td");
//   var custPerHourEl = document.textContent("td");
//   var dailyTotalEl = document.textContent("td");
// }

// console.log(Store);

// generaterandomCustPerHourPerHour: function (min, max) {
//   for(var i = 0; i < openHours.length; i++) {
//     var randomCustPerHour = Math.floor(Math.random() * (max - min + 1) + min);
//     this.custPerHour.push(randomCustPerHour);
//   }
// }

// generateHourlySales: function () {
//   // Line below will populate custPerHour array
//   this.generaterandomCustPerHourPerHour(this.minCustPerHour, this.maxCustPerHour);

//   for(var i = 0; i < openHours.length; i++) {
//     var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
//     this.cookiesPerHour.push(perHour);

//     // this.dailyTotal = this.dailyTotal + perHour;
//     this.dailyTotal += perHour;
//   }
// render: function() {
//   // Line below will generate hourly sales, which also generates customers per hour
//   this.generateHourlySales();

//   var ranNum = Math.floor(
//     Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//   );
//   return Math.floor(ranNum * this.cookiesPerHour);
// };
// var totalCookies = 0;
// for (var i = 0; i < openHours.length; i++) {
//   var ret = this.randomN();
//   totalCookies += ret;
//   var txtOut = document.createElement("li");
//   txtOut.textContent = `${openHours[i]}: ${ret} cookies`;
//   salesList.appendChild(txtOut);
// }
// var totaltxt = document.createElement("li");
// totaltxt.textContent = `Total: ${totalCookies} cookies`;

// var main = document.getElementById("cookiesCalculated");
// main.appendChild(container);

// var seaTac = {
//   nameofStore: "SeaTac Airport",
//   minCusPerhr: 3,
//   maxCusPerhr: 24,
//   cookiesPerHour: 1.2,
//   openHours: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm"
//   ],
//   randomN: function() {
//     var ranNum = Math.floor(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.floor(ranNum * this.cookiesPerHour);
//   },

//   render() {
//     var container = document.createElement("section");
//     var NameStore = document.createElement("h3");
//     var salesList = document.createElement("ul");

//     NameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement("li");
//       txtOut.textContent = `${openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement("li");
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(NameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById("cookiesCalculated");
//     main.appendChild(container);
//   }
// };
// seaTac.render();

// //TEST

// var seattle = {
//   nameofStore: "Seattle Center",
//   minCusPerhr: 20,
//   maxCusPerhr: 38,
//   cookiesPerHour: 2.3,
//   openHours: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm"
//   ],
//   randomN: function() {
//     var ranNum = Math.floor(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.floor(ranNum * this.cookiesPerHour);
//   },

//   render() {
//     var container = document.createElement("section");
//     var NameStore = document.createElement("h3");
//     var salesList = document.createElement("ul");

//     NameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement("li");
//       txtOut.textContent = `${openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement("li");
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(NameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById("cookiesCalculated");
//     main.appendChild(container);
//   }
// };
// seattle.render();

// var capHill = {
//   nameofStore: "Capital Hill",
//   minCusPerhr: 20,
//   maxCusPerhr: 38,
//   cookiesPerHour: 2.3,
//   openHours: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm"
//   ],
//   randomN: function() {
//     var ranNum = Math.floor(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.floor(ranNum * this.cookiesPerHour);
//   },

//   render() {
//     var container = document.createElement("section");
//     var NameStore = document.createElement("h3");
//     var salesList = document.createElement("ul");

//     NameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement("li");
//       txtOut.textContent = `${openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement("li");
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(NameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById("cookiesCalculated");
//     main.appendChild(container);
//   }
// };
// capHill.render();

// var alki = {
//   nameofStore: "Alki",
//   minCusPerhr: 20,
//   maxCusPerhr: 38,
//   cookiesPerHour: 2.3,
//   openHours: [
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12pm",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//     "7pm",
//     "8pm"
//   ],
//   randomN: function() {
//     var ranNum = Math.floor(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.floor(ranNum * this.cookiesPerHour);
//   },

//   render() {
//     var container = document.createElement("section");
//     var NameStore = document.createElement("h3");
//     var salesList = document.createElement("ul");

//     NameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement("li");
//       txtOut.textContent = `${openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement("li");
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(NameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById("cookiesCalculated");
//     main.appendChild(container);
//   }
// };
// alki.render();
