"use strict";

function Store(nameOfStore, minCusPerhr, maxCusPerhr, avgCookieSale) {
  this.nameOfStore = nameOfStore;
  this.minCusPerhr = minCusPerhr;
  this.maxCusPerhr = maxCusPerhr;
  this.avgCookiePerCus = avgCookiePerCus;
  this.avgCookieSale = avgCookieSale;
  this.openHours = [];
  this.custPerHour = [];
  this.dailyTotal = dailyTotal;

  Store.push(this);
  this.render();
}

Store.prototype.addHours = function(storeHours) {
  this.openHours.push(
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
  );
  this.openHours.push(storeHours);
};

Store.prototype.randomCust = function(generateRandomCustPerHour) {
  for(var i = 0; i < this.openHours.length; i++) {
        var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
        this.custPerHour.push(randomCust);
};
Store.prototype.dailyTotal 



Store.prototype.avgCookieSale = function (generateAvgCookieSale) {
  for(var i = 0; i < this.openHours.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal += perHour;
  }
  // Line below will generate hourly sales, which also generates customers per hour
  this.render.generateAvgCookieSale();

  var ranNum = Math.floor(
    Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
  );
  return Math.floor(ranNum * this.avgCookieSale);
};
var totalCookies = 0;
for (var i = 0; i < this.openHours.length; i++) {
  var ret = this.randomN();
  totalCookies += ret;
  var txtOut = document.createElement("li");
  txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
  salesList.appendChild(txtOut);
}

Store.prototype.render = function createTable() {
  var mainEl = document.getElementById("main-content");
  var tblEl = document.getElementById("table");
  var theadEl = document.getElementById("thead");
  var tbodyEl = document.getElementById("tbody");
  var tFootEl = document.getElementById("foot");

  tl.textContent = this.name;
  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tFootEl);

  var nameOfStoreEl = document.createElement("td");
  var minCusPerhrEl = document.createElement("td");
  var maxCusPerhrEl = document.createElement("td");
  var avgCookiePerCus = document.createElement("td");
  var avgCookieSaleEl = document.createElement("td");
  var openHoursEl = document.createElement("td");
  var custPerHourEl = document.createElement("td");
  var dailyTotalEl = document.createElement("td");

  nameOfStoreEl.textContent = this.nameofStore;
  minCusPerhrEl.textContent = this.minCusPerhr;
  maxCusPerhrEl.textContent = this.maxCusPerhr;
  avgCookiePerCus.textContent = this.avgCookiePerCus;
  avgCookieSaleEl.textContent = this.avgCookieSale;
  openHoursEl.textContent = this.openHours;
  custPerHourEl = this.custPerHour;
  dailyTotalEl.textContent = this.dailyTotal;

  tblEl.appendChild(nameOfStoreEl);
  tblEl.appendChild(minCusPerhrEl);
  tblEl.appendChild(maxCusPerhrEl);
  tblEl.appendChild(avgCookieSaleEl);
  tblEl.appendChild(openHoursEl);
  tblEl.appendChild(custPerHour);
  tblEl.appendChild(dailyTotal);

  tblEl.id = "table";
  theadEl.id = "head";
  tbodyEl.id = "body";
  tFootEl.id = "foot";
};

createTable();

new Store("1st and Pike", 23, 65, 6.3, [storeHours.length]);
new Store("SeaTac Airport", 3, 24, [storeHours.length]);
new Store("Seattle Center", 11, 38, [storeHours.length]);
new Store("Capitol Hill", 20, 38, [storeHours.length]);
new Store("Alki", 2, 16, 4.6, [storeHours.length]);

console.log(store);
createTable();
console.log(Store);

// generateRandomCustPerHour: function (min, max) {
//   for(var i = 0; i < this.openHours.length; i++) {
//     var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//     this.custPerHour.push(randomCust);
//   }
// }

// generateHourlySales: function () {
//   // Line below will populate custPerHour array
//   this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

//   for(var i = 0; i < this.openHours.length; i++) {
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
//   return Math.floor(ranNum * this.avgCookieSale);
// };
// var totalCookies = 0;
// for (var i = 0; i < this.openHours.length; i++) {
//   var ret = this.randomN();
//   totalCookies += ret;
//   var txtOut = document.createElement("li");
//   txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
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
//   avgCookieSale: 1.2,
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
//     return Math.floor(ranNum * this.avgCookieSale);
//   },

//   render() {
//     var container = document.createElement("section");
//     var NameStore = document.createElement("h3");
//     var salesList = document.createElement("ul");

//     NameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement("li");
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
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
//   avgCookieSale: 2.3,
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
//     return Math.floor(ranNum * this.avgCookieSale);
//   },

//   render() {
//     var container = document.createElement("section");
//     var NameStore = document.createElement("h3");
//     var salesList = document.createElement("ul");

//     NameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement("li");
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
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
//   avgCookieSale: 2.3,
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
//     return Math.floor(ranNum * this.avgCookieSale);
//   },

//   render() {
//     var container = document.createElement("section");
//     var NameStore = document.createElement("h3");
//     var salesList = document.createElement("ul");

//     NameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement("li");
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
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
//   avgCookieSale: 2.3,
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
//     return Math.floor(ranNum * this.avgCookieSale);
//   },

//   render() {
//     var container = document.createElement("section");
//     var NameStore = document.createElement("h3");
//     var salesList = document.createElement("ul");

//     NameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement("li");
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
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
