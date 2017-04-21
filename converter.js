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


