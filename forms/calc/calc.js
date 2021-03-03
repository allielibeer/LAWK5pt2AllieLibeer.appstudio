num1 = Number(prompt("Give me a number",""));
num2= Number(prompt("Give me another number",""));

function calculate(x, y) {
  var answer = (x + y)
  return answer
}


var summedNumbers = calculate(num1, num2)
console.log(`The sum of ${num1} and ${num2} is ${summedNumbers}`);

