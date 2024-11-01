var char = prompt("Enter one character").toLowerCase();

var message;

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    message = "The Letter is a vowel.";
} else if (char.length === 1 && char.match(/[a-z]/i)) {
    message = "The Letter is a consonant.";
} else {
    message = "Invalid input. Please enter a single alphabetic Letter.";
}

console.log(message);