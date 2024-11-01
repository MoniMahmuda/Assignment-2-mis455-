var num1 = parseFloat(prompt("Enter the first number"));
var num2 = parseFloat(prompt("Enter the second number"));
var num3 = parseFloat(prompt("Enter the third number"));

var maxNumber;
if (num1 >= num2 && num1 >= num3) {
    maxNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maxNumber = num2;
} else {
    maxNumber = num3;
}
console.log("The greatest number is: " + maxNumber);