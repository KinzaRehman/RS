// *Variables*

// Create a variable and console log the value

let color = "pink";

console.log(color);


// Create a variable, add 10 to it, and alert the value

let var2 = 30;

let var3 = var2 + 10;

alert(var3);


// *Functions*

// Create a function that subtracts 4 numbers and alerts the difference

function subtract(n1, n2, n3, n4) {
  let difference = n1 - n2 - n3 - n4;

  alert(difference);
}

subtract(10, 2, 3, 4);


// Create a function that divides one number by another and returns the remainder

function division(num1, num2) {
  let remainder = num1 % num2;

  return remainder;
}

console.log(division(10, 3));


// *Conditionals*

// Create a function that adds two numbers and if the sum is greater than 50 alert JUMANJI

function twoNums(num1, num2) {
  let sum = num1 + num2;

  if (sum > 50) {
    alert("JUMANJI");
  }
}

twoNums(24, 1);

twoNums(30, 40);


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply(num1, num2, num3) {
  let product = num1 * num2 * num3;

  if (product % 3 === 0) {
    alert("ZEBRA");
  }
}

multiply(9, 9, 9);


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function swag(word, num) {
  for (let count = 0; count < num; count++) {
    console.log(word);
  }
}

swag("pink", 3);
// recursion 
// for loops 
// return
// how to implement
// how to use modulous 
// algorhythm
// operands 
// concatenation 
