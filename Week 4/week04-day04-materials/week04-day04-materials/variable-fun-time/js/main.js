//--- Easy
//create a variable and assign it a number
const newVar = 20;
//minus 10 from that number
let coconut = newVar - 10;

//print that number to the console
console.log(coconut); 

//--- Medium
//create a variable that holds a value from the input
const dance = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
let danceResult = dance + 25;
//alert that number
alert(danceResult);
//--- Hard
//create a variable that holds the h1
const clickMe = document.querySelector('h1');


//add an event listener to that element that console logs the sum of the two previous variables
clickMe.addEventListener('click', add) {
    console.log(coconut + danceResult); 

}