module.exports = function multiply(first, second) {
  let multiplication = [];
  let firstNumber = [];
  let secondNumber = [];
  
    firstNumber.push(first.substr(0, first.length));
    console.log(firstNumber);
  
    secondNumber.push(second.substr(0, second.length));
    console.log(secondNumber);

    
    multiplication = ""+BigInt(firstNumber*secondNumber)+"";
    console.log(multiplication);
  return multiplication;
}
