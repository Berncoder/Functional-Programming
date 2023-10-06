//functional programming
function getTotal(a,b) {
    return a + b;
} 
var num1 = 2;
var num2 = 4;

var total = getTotal(num1, num2);
console.log(total)
//console output: 6

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);
//console output: 120