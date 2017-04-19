//variables assigned to DOM ID's

var tempNumber = document.getElementById("tempNumber");
var celciusTemp = document.getElementById("celcius");
var farTemp = document.getElementById("farenHeight");
var inputDiv = document.getElementById("something");
var button = document.getElementById("converter");
var clearButton = document.getElementById("clear");
button.addEventListener("click", determineConverter);

// Adding event listeners to buttons


function toCelsius () {
	return (tempNumber.value - 32)/1.8;
}

function toFahrenheit () {
	return (tempNumber.value * 1.8) + 32;
}
// Clear fields with click
clearButton.addEventListener("click", clearField);
function clearField (clickEvent) {
	tempNumber.value = "";
}
tempNumber.addEventListener("keypress", function(e) {
	var key = e.keyCode;
	if (e.keyCode === 13) {
		determineConverter();
	}
});



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
if(celciusTemp.checked === true) {
	var celzius = toCelsius();
	inputDiv.innerHTML = celzius;
	console.log(celciusTemp.checked);
} if (farTemp.checked === true); {
	var faren = toFahrenheit();
	inputDiv.innerHTML = faren;
}
  console.log("event", clickEvent);
  console.log(tempNumber.value)
};


//adding event listener and handler for return key and assigning anonymous function



// Assign a function to be executed when the button is clicked

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.