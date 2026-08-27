//create a function that adds two numbers and alerts the sum

//create a function that multiplys three numbers and console logs the product

//create a function that divides two numbers and returns the ???
document.querySelector('#addButton').addEventListener('click', add)

document.querySelector('#multiplyButton').addEventListener('click', multiply)

document.querySelector('#divideButton').addEventListener('click', divide)


function add() {
  let num1 = Number(document.querySelector('#addNum1').value)
  let num2 = Number(document.querySelector('#addNum2').value)

  alert(num1 + num2)
}


function multiply() {
  let num1 = Number(document.querySelector('#multiplyNum1').value)
  let num2 = Number(document.querySelector('#multiplyNum2').value)
  let num3 = Number(document.querySelector('#multiplyNum3').value)

  console.log(num1 * num2 * num3)
}


function divide() {
  let num1 = Number(document.querySelector('#divideNum1').value)
  let num2 = Number(document.querySelector('#divideNum2').value)

  let quotient = num1 / num2

  document.querySelector('#divisionResult').innerText = quotient

  return quotient
}