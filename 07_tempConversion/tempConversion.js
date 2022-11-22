const convertToCelsius = function(temp) {
  var converted = (temp - 32) / 1.8;
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  var converted = (temp * 1.8) + 32;
  return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C
//Celsius to Fahrenheit : (°C × 1.8) + 32 = °F
