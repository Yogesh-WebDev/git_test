const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a,b) {
	return a+b;
};

const multiply = function(a,b) {
  return a*b;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if (a === 1) {
    return;
  }
  let result=1;
  result=a*factorial(a-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
