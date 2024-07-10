// var value = prompt("Enter value");
// var numberArr = [];
// var string = [];

// if (isNaN(value)) {
//   numberArr.push(value);
// } else {
//   string.push(value);
// }

// console.log(numberArr, string);

var num = prompt("Enter sum");

var usdRate = 12700;
var euroRate = 13700;
var rubRate = 143;
var inrRate = 151;

var usd = num / usdRate;
var euro = num / euroRate;
var rub = num / rubRate;
var inr = num / inrRate;
console.log(usd + " " + "USD");
console.log(euro + " " + "EURO");
console.log(rub + " " + "RUB");
console.log(inr + " " + "RUPIYA");
