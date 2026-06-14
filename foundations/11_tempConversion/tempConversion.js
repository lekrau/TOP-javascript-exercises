const convertToCelsius = function(fahrenheitTemperature) {
  const exactConversion = (fahrenheitTemperature - 32) * 5 / 9;
  return Math.round(exactConversion * 10) / 10;
};

const convertToFahrenheit = function(celsiusTemperature) {
  const exactConversion = celsiusTemperature * 9 / 5 + 32;
  return Math.round(exactConversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
