const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 5 / 9;
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = temp * 9 / 5 + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
