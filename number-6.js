var temperature = parseFloat(prompt("Enter the temperature in centigrade"));

var message;
if (temperature < 0) {
    message = "Freezing weather";
} else if (temperature >= 0 && temperature < 10) {
    message = "Very Cold weather";
} else if (temperature >= 10 && temperature < 20) {
    message = "Cold weather";
} else if (temperature >= 20 && temperature < 30) {
    message = "Normal in Temp";
} else if (temperature >= 30 && temperature < 40) {
    message = "It's Hot";
} else {
    message = "It's Very Hot";
}

console.log("Temperature: " + temperature + "°C");
console.log(message);