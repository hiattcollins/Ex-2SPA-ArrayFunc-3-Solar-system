var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var element1 = document.getElementById("planets");

planets.forEach(function(element) {
	element1.innerHTML += `<p>${element}</p>`;

});

// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalizedPlanets = planets.map(function (element) {
	let capitalizedString = element.charAt(0).toUpperCase() + element.slice(1);
	return capitalizedString;
});

var element2 = document.getElementById("capitalizedPlanets");

capitalizedPlanets.forEach(function(element) {
	element2.innerHTML += `<p>${element}</p>`;
});

// Use the filter method to create a new array that contains planets with the letter 'e'

var planetsWithE = capitalizedPlanets.filter(function(element) {
	if (element.includes("e" || "E") === true) {
		return element;
	}
});

var element3 = document.getElementById("planetsWithE");

planetsWithE.forEach(function(element) {
	element3.innerHTML += `<p>${element}</p>`;
});

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var totalSentence = words.reduce(function (sentence, word) {
	return (sentence + " " + word);
});

var element4 = document.getElementById("totalSentence");
element4.innerHTML = `<p>${totalSentence}</p>`;