const add = function (a, b) {
  result = a + b;
  return result;
};

const subtract = function (a, b) {
  result = a - b;
  return result;
};

const sum = function ([...nums]) {
  return ([...nums].reduce((a, b) => a + b, 0));
};

const multiply = function ([...nums]) {
  return ([...nums].reduce((a, b) => a * b, 1));
};

const power = function (a, b) {
  result = Math.pow(a, b);
  return result;
};

const factorial = function(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}

  // Do not edit below this line
  module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  };
