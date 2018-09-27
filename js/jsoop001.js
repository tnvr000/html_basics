function Human(firstName, lastName, age) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.age = age,

	this.sayName = function() {
		console.log("I am " + firstName + " " + lastName);
	}
}
var tanveer = new Human("Tanveer", "Ahmad Khan", 23);
var abhishek = new Human("abhishek", "Mishra", 23);
tanveer.sayName();
abhishek.sayName();
function isValid(a , b) {
	if(isNaN(a) || isNaN(b)) {
		return false;
	} else {
		return true;
	}
}

console.log(isValid('a', 6));