var calc = {
  isValid: function (a, b) {
    if (isNaN(a) || isNaN(b)) {
      return false;
    } else {
      return true;
    }
  },
  add: function (a, b) {
    if (!this.isValid(a, b)) {
      return "error";
    }
    return a + b;
  },
  sub: function (a, b) {
    if (!this.isValid(a, b)) {
      return "error";
    }
    return a - b;
  },
  mul: function (a, b) {
    if (!this.isValid(a, b)) {
      return "error";
    }
    return a * b;
  },
  div: function (divident, divisor) {
    if (!this.isValid(divident, divisor)) {
      return "error";
    }
    if (divisor == 0) {
      return "error";
    }
    return divident / divisor;
  },
  rem: function (divident, divisor) {
    if (!this.isValid(divident, divisor)) {
      return "error";
    }
    return divident % divisor;
  },
  pow: function (base, exponent) {
    if (!this.isValid(base, exponent)) {
      return "error";
    }
    var result = 1;
    while (exponent-- > 0) {
      result *= base;
    }
    return result;
  },
  sqr: function (a) {
    if (!this.isValid(a, a)) {
      return "error";
    }
    return a * a;
  },
  calculate: function (op1, op2, operator) {
    switch (operator) {
      case "+":
        return this.add(op1, op2);
      case "-":
        return this.sub(op1, op2);
      case "*":
        return this.mul(op1, op2);
      case "/":
        return this.div(op1, op2);
      case "5":
        return this.rem(op1, op2);
      case "^":
        return this.pow(op1, op2);
      case "x2":
        return this.sqr(op2);
    }
  }
}