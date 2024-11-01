var name = prompt("Enter your name");
var totalTuitionFees = parseFloat(prompt("Enter your total tuition fees"));
var birthYear = parseInt(prompt("Enter your birth year"));

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

var discount = 0;
if (totalTuitionFees > 50000 && age > 21) {
    discount = totalTuitionFees * 0.15; //15% discount
} else if (totalTuitionFees > 40000 && age > 20) {
    discount = totalTuitionFees * 0.10; //10% discount
} else if (totalTuitionFees > 30000 && age > 19) {
    discount = totalTuitionFees * 0.05; //5% discount
} else {
    discount = totalTuitionFees * 0.02; //2% discount
}

var payableFees = totalTuitionFees - discount;
//Display
console.log("Name: " + name);
console.log("Total Tuition Fees: $" + totalTuitionFees.toFixed(2));
console.log("Discount Amount: $" + discount.toFixed(2));
console.log("Payable Tuition Fees: $" + payableFees.toFixed(2));