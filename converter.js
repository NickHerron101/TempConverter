//variables in global space
var tempInput= document.getElementById("temp-input");
var fSelected = document.getElementById("f-selected");
var cSelected = document.getElementById("c-selected");
var convertedTemp = document.getElementById("converted-temp");
var submitButton = document.getElementById("submit-btn");
var clearButton = document.getElementById("clear-btn");


//Functions:
//Check with radio is selected
function determineConverter () {
	if(fSelected.checked){
		toFahrenheit(tempInput.value);
	} else {
		toCelsius(tempInput.value);
	}
}
//validate input field check that something's in there
// function fieldValidate() {
// 	if(typeof(parseInt(tempInput.value)) != "number") {
// 		alert("Aww snap, that's not a number");
// 	} else {
// 		determineConverter();
// 	}
// }
//Clear field
function clearField() {
	textInput.value = "";
}

function toFahrenheit (temp) {
	console.log("here");
	var cTemp = (temp * 1.8) + 32;
	changeColor(cTemp,"f");
}

function toCelsius (temp) {
	console.log("yes");
	var fTemp = (temp - 32) / 1.8;
	changeColor(fTemp, "c");
}

//change color baded on temp, doin so for each temp scale F/C
function changeColor (temp, scale) {
	console.log("temp", temp, "scale", scale);
	convertedTemp.classList.remove("red", "blue", "green");
	if(scale === "f") {
		if(temp > 90){
			convertedTemp.classList.add("red");
		} else if (temp < 32){
			convertedTemp.classList.add("blue");
		} else {
			convertedTemp.classList.add("green");
		}
	} else {
		if(temp > 32){
			convertedTemp.classList.add("red");
		} else if (temp < 0){
			convertedTemp.classList.add("blue");
		} else {
			convertedTemp.classList.add("green");
		}
	}
	outputResult(temp);
}

function outputResult(temp) {
	convertedTemp.innerHTML = `<p>${temp}</p>`;
}


submitButton.addEventListener("click", determineConverter);

tempInput.addEventListener("keypress", function(e) {
	var key = e.keyCode;
	if (e.keyCode === 13) {
		determineConverter();
	}
});


// // Clear fields with click
// clearButton.addEventListener("click", clearField);
// function clearField (clickEvent) {
// 	tempNumber.value = "";
// }



// // This function should determine which conversion should
// // happen based on which radio button is selected.

// function determineConverter (clickEvent) {
// if (celciusTemp.checked === true) {
// 	var celzius = toCelsius();
// 	inputDiv.innerHTML = celzius;
// 	console.log(celciusTemp.checked);
// }
// // } else if (celciusTemp.checked === true); {
// // 	var faren = toFahrenheit();
// // 	inputDiv.innerHTML = faren;
// // }
//   console.log("event", clickEvent);
//   console.log(tempNumber.value)
// };


// //adding event listener and handler for return key and assigning anonymous function



// // Assign a function to be executed when the button is clicked

// // In the HTML, have one input field where someone can enter in a temperature.
// // Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// // Create a block level element that will hold the text of the converted temperature.
// // Create a button that, when clicked, displays the converted temperature.
// // Create another button that, when clicked, clears any text in the input field.
// // Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// // If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// // If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// // For any other temperature, the color should be green.