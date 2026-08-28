// *Variables*
// Create a variable and console log the value
let color = "pink"
console.log(color); 

// Create a variable, add 10 to it, and alert the value
let var2 = 30
let var3 = var2 + 10;
alert(var3); 

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract (n1,n2,n3,n4){
    let difference = n1 - n1 - n3 - n4
    alert(difference)
}

subtract(10, 2, 3, 4);

// Create a function that divides one number by another and returns the remainder

function division(num1, num2) {
    let div = (num1 % num2)
    return(div)
}
console.log(division(10,3)); 


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function twonums(num1, num2) { 
    num1 += num2; 

    if (num2 > 50) {
        alert('JUMANJI')
    } 

}
console.log(twonums(24, 1));
console.log(twonums(30,40));


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function Multi(num1, num2, num3) { 
    let multiply = num1 * num2 * num3
    if (multiply % 3 ===0) {
        alert('ZEBRA')
    }
    else {
        alert('not zerba')
    }
}

console.log(Multi(9,9,9)); 


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function swag(word, num) {
    for (let count = 0;
        count < num; 
        count++) {
            console.log(word)
        }
// return(word('picnic', 4))
}
console.log(swag('pink',3));

// recursion 
// for loops 
// return
// how to implement
// how to use modulous 
// algorhythm
// operands 
// concatenation 
