


var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Bonsoir !';
} else if (hourNow > 12) {
    greeting = 'Bon après-midi !';
} else if (hourNow > 0) {
    greeting = 'Bonjour !';
} else {
    greeting = "Bienvenue !";
}

document.write('<h3>' + greeting + '</h3>');