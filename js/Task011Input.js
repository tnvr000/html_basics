/*
0 : number
1 : unary operator
2 : binary operator
3 : equals
4 : clear
5 : invalid
*/
var txtExp = document.getElementById("txtExp");
var result = 0.0;
var isResultShowing = false;
var operator = "+";

function typeThis(value, buttonType) {
	if(txtExp.value == "error") {
		resetCal();
	}
	if(buttonType == 0) {
		if(operator === null) {
			resetCal();
		}
		if(isResultShowing) {
			txtExp.value = "";
			isResultShowing = false;
		}
		typeNumber(value);
	} else if(buttonType == 1) {
		if(!isResultShowing) {
			calculate();
		}
		operator = "x2";
		calculate();
	} else if(buttonType == 2) {
		if(!isResultShowing) {
			calculate();
			operator = value;
		} else {
			operator = value;
		}
	} else if(buttonType == 3) {
		if(!isResultShowing) {
			calculate();
		}
	} else if (buttonType == 4) {
		clear(value);
	}
}
function typeNumber(value) {
	if(value == ".") {
		//if there is no .(dot) present
		if(txtExp.value.indexOf(".") != -1) {
			return;
		} else {
			txtExp.value += value;
			return;
		}
	}

	if(txtExp.value == "0") {
		txtExp.value = "";
	}
	txtExp.value += value;
}
function clear(value) {
	if (value == "C") {
		resetCal();
	} else {
		//start index to end index-1. the method exclude the last index
		txtExp.value = txtExp.value.substring(0, txtExp.value.length-1); 
	}
	if(txtExp.value == "") {
		txtExp.value = "0";
	}
}
function calculate() {
	txtExp.value = result = calc.calculate(result, parseFloat(txtExp.value), operator);
	isResultShowing = true;
	operator = null;
}
function resetCal() {
	txtExp.value = "0";
	isResultShowing = false;
	operator = "+";
	result = 0;
}