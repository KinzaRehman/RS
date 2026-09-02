// *Variables*

// Declare a variable, assign it a value, and alert the value

let favoriteNumber = 21;

alert(favoriteNumber);


// Create a variable, divide it by 10, and console log the value

let numberToDivide = 100;

numberToDivide = numberToDivide / 10;

console.log(numberToDivide);


// *Functions*

// Create a function that multiplys 3 numbers and alerts the product

function multiplyThreeNumbers(num1, num2, num3) {
  let product = num1 * num2 * num3;

  alert(product);
}

multiplyThreeNumbers(2, 3, 4);


// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function calculateFourNumbers(num1, num2, num3, num4) {
  let result = num1 + num2 - num3 - num4;

  console.log(result);
}

calculateFourNumbers(20, 10, 5, 2);


// *Conditionals*

// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function checkWinner(num1, num2, num3) {
  let result = (100 + num1 - num2) / num3;

  if (result > 25) {
    console.log("WE HAVE A WINNNA");
  }
}

checkWinner(50, 10, 2);


// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function checkDay(day) {
  day = day.toLowerCase();

  if (day === "saturday" || day === "sunday") {
    alert("weekend");
  } else if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
  ) {
    alert("week day");
  } else {
    alert("Try again!");
  }
}

checkDay("Saturday");


//*Loops*

//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function countByThree(number) {
  for (let i = 1; i <= number; i += 3) {
    console.log(i);
  }
}

countByThree(10);