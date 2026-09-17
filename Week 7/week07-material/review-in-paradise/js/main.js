// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "Beef Biryani"
food = 'biryani'
alert(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let breakfast = "Paratha Anda Chai"
alert(breakfast[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function calcuationNumas(x,y,z) {
    let total = ( x / y) * z;
    alert(total);
}

calcuationNumas(6, 4, 2)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function one(x){
    console.log( Math.cbrt(x))
}
one(27);



// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month() {
    if (month === 'june' || month === 'july' || month === 'august') {
        alert("yay")
    } else {
        alert("boo")
    }
}
function checSummer(month) {
    month = month.toLowerCase();
     if (month === 'june' || month === 'july' || month === 'august') {
        alert("yay")
    } else if ( month === 'january' || month === 'february' || month === 'march' || month === 'april' || month === 'may' || month === 'september' || month === 'october' || month === 'november' || month === 'december') {
        alert("boo")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipping(x) {
    for(let i = 1; i <= x; i++) {
        if(i % 5 !== 0){
            console.log(i)
        }
    }
}
skipping(14);
