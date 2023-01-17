// Shrink Navigation Menu
const getElement = function (selector) {
  return document.querySelector(selector);
};

var moneyArr = [];
var typeCar;
var valueRow_2;
var valueRow_3;
var distanceRow_2;

// select kind of car service
getElement("#grabX").onclick = function () {
  moneyArr = [8000, 12000, 10000, 2000];
  typeCar = "Grab X";
  return moneyArr, typeCar;
};

getElement("#grabSUV").onclick = function () {
  moneyArr = [9000, 14000, 12000, 3000];
  typeCar = "Grab SUV";
  return moneyArr, typeCar;
};

getElement("#grabBlack").onclick = function () {
  moneyArr = [10000, 16000, 14000, 4000];
  typeCar = "Grab Black";
  return moneyArr, typeCar;
};

// count total money
getElement("#totalMoney").onclick = function () {
  const distance = getElement("#distance").value * 1;
  const timeWait = getElement("#time").value * 1;
  var sumMoney;
  var waitMoney;
  if (distance > 0 && distance <= 1) {
    sumMoney = moneyArr[0];
    getElement("#row-1").style = "display: table-row";
  } else if (distance > 1 && distance <= 20) {
    distanceRow_2 = distance - 1;
    valueRow_2 = moneyArr[1] * distanceRow_2;
    sumMoney = moneyArr[0] + valueRow_2;

    getElement("#row-1").style = "display: table-row";
    getElement("#row-2").style = "display: table-row";
  } else if (distance > 20) {
    valueRow_3 = moneyArr[2] * (distance - 21);
    valueRow_2 = moneyArr[1] * 20;
    distanceRow_2 = 20;
    sumMoney = moneyArr[0] + valueRow_2 + valueRow_3;
    getElement("#row-1").style = "display: table-row";
    getElement("#row-2").style = "display: table-row";
    getElement("#row-3").style = "display: table-row";
  } else {
    console.log("Error value! Please retype it");
  }
  if (timeWait >= 1) {
    waitMoney = timeWait * moneyArr[3];
  } else {
    waitMoney = 0;
  }
  getElement("#row-4").style = "display: table-row";
  var total = sumMoney + waitMoney;

  if (total >= 0) {
    getElement("#xuatTien").innerHTML = total + "vnd";
    getElement("#divThanhTien").style = "display: block";
    getElement("#valueTotal").innerHTML = total;
  } else {
    getElement("#xuatTien").innerHTML = "Your input is incorrect";
    getElement("#divThanhTien").style = "display: block";
  }
  billTable(moneyArr, distance, timeWait, waitMoney, valueRow_2, valueRow_3);
};

// display bill table
var billTable = function (
  moneyArr,
  distance,
  time,
  waitMoney,
  valueRow_2,
  valueRow_3
) {
  // row 1
  getElement("#row-1").innerHTML = "<td>" + typeCar + "</td>";
  getElement("#row-1").innerHTML += "<td>1 km</td>";
  getElement("#row-1").innerHTML += "<td>" + moneyArr[0] + "</td>";
  getElement("#row-1").innerHTML += "<td>" + moneyArr[0] + "</td>";
  // row 2
  getElement("#row-2").innerHTML = "<td>" + typeCar + "</td>";
  getElement("#row-2").innerHTML += "<td>" + distanceRow_2 + " km</td>";
  getElement("#row-2").innerHTML += "<td>" + moneyArr[1] + "</td>";
  getElement("#row-2").innerHTML += "<td>" + valueRow_2 + "</td>";
  // row 3
  getElement("#row-3").innerHTML = "<td>" + typeCar + "</td>";
  getElement("#row-3").innerHTML += "<td>" + (distance - 21) + " km</td>";
  getElement("#row-3").innerHTML += "<td>" + moneyArr[2] + "</td>";
  getElement("#row-3").innerHTML += "<td>" + valueRow_3 + "</td>";
  // row 4
  getElement("#row-4").innerHTML = "<td>Thời gian chờ</td>";
  getElement("#row-4").innerHTML += "<td>" + time + " phút</td>";
  getElement("#row-4").innerHTML += "<td>" + moneyArr[3] + "</td>";
  getElement("#row-4").innerHTML += "<td>" + waitMoney + "</td>";
};
