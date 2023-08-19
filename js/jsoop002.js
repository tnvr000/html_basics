function Employee(firstName, lastName, dept) {
  this.firstName = firstName || "unknown";
  this.lastName = lastName || "unknown";
  this.dept = dept || "general";

  this.sayName = function () {
    return "My name is " + firstName + " " + lastName;
  }
}
Employee.prototype.sayDept = function () {
  return "I an in " + this.dept + " department";
}

function Manager(firstName, lastName, dept, reports) {
  Employee.call(this, firstName, lastName, dept);
  this.reports = reports || [];
}
Manager.prototype = new Employee();
Manager.prototype.constructor = Manager;

var kiran = new Manager("Tanveer", "Ahmad Khan", "Dev", ["bachan", "abhishek"]);
console.log(kiran.sayName());
console.log(kiran.sayDept());
console.log(kiran.constructor);
console.log(kiran.reports);
