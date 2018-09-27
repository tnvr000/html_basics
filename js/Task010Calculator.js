/*
Button type index
0 : number
1 : unary operator
2 : binary operator
3 : equals
4 : clear
*/
var txtExp = document.getElementById("txt-exp");
var txtResult = document.getElementById("txt-result");
var operator = "+";
var isResultShowing = false;

console.log(txtExp);
console.log(txtResult);

function typeThis(button, buttonType) {
	if(buttonType == 0) {
		type(button.value);
	} else if (buttonType == 1) {
		calculateUnary();
	} else if (buttonType == 2) {
		calculateBinary();
		operator = button.value;
	} else if (buttonType == 3) {
		calculate();
	} else if (buttonType == 4) {
		clear(button.value);
	}

}

function type(value) {
	if(isResultShowing == true) {
		txtResult.value = 0;
		isResultShowing = false;
	}

	if(value == '.') {
		if(indexOf(txtExp.value, '.') != -1) {
			return;
		} else {
			txtExp.value = txtExp.value + value;
			return;
		}
	}

	if(txtExp.value == "0") {
		txtExp.value = "";
	}

	txtExp.value = txtExp.value + value;
}
function clear(value) {
	if(value == "C") {
		operator = '+';
		isResultShowing = false;
		txtResult.value = 0;
		txtExp.value = 0;
		return;
	}
	txtExp.value = subString(txtExp.value, 0, txtExp.value.length - 1);
	if(txtExp.value == "") {
		txtExp.value = "0";
	}
}
function calculate() {
	calculateBinary();
	operator = '+';
	isResultShowing = true;
}
function calculateUnary() {
	txtResult.value = txtExp.value * txtExp.value;
	txtExp.value = 0;
}
function calculateBinary() {
	var result = txtResult.value;
	switch(operator) {
	case '+' :
		result = parseFloat(txtResult.value) + parseFloat(txtExp.value);
		break;
	case '-' :
		result = parseFloat(txtResult.value) - parseFloat(txtExp.value);
		break;
	case '*' :
		result = parseFloat(txtResult.value) * parseFloat(txtExp.value);
		break;
	case '/' :
		if(parseFloat(txtExp.value) != 0)
			result = parseFloat(txtResult.value) / parseFloat(txtExp.value);
		break;
	case '%' : 
		result = parseFloat(txtResult.value) % parseFloat(txtExp.value);
		break;
	case '^' :
		result = power(parseFloat(txtResult.value), parseFloat(txtExp.value));
		break;
	}
	txtResult.value = result;
	txtExp.value = 0;
}
function power(base, exponent) {
	console.log("here 1" + base);
	var result = 1;
	while(exponent-- > 0) {
		result *= base;
	}
	return result;
}
function subString(str, startIndex, length) {
	var tempStr = "";
	var strLength = str.length;
	for(index = startIndex; length > 0 && index < strLength; --length) {
		tempStr = tempStr + str[index++];
	}
	return tempStr;
}
function indexOf(str, key) {
	index = -1;
	var strLength = str.length;
	for(i = 0; i < strLength; ++i) {
		if(str[i] == key) {
			index = i;
		}
	}
	return index;
}