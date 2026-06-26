const add = function(addend1, addend2) {
  return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function(array) {
  return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function(array) {
  return array.reduce((product, number) => product * number);
};

const power = function(base, exponent) {
  let result = base;
  for (let i = 0; i < exponent - 1; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
