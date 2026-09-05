// alert('works')
//please note i got major help in the Javascript and had to remove alot of my html 
//determining my minimum and miximum bets as 5 and 50

const minBet = 5;
const maxBet = 15; 
let balance = 500;

//I need the balance to load on laod rather than later on 
document.querySelector('#starting-balance').innerText = balance; 
document.querySelector('#output-message').innerText = balance; 
 


// button variables so what will the big and small number equal 

let bigNum = document.querySelector('#max')
let smalNum = document.querySelector('#min')

//emojis for the slot machine
const emojis = ['🍓', '🍍', '🍉', '🍑', '🍎']

//what is betting and its logic 
function slotmachine(bet) {
    
    let myReels = document.querySelectorAll('.reel');
    console.log(myReels);

    let outputMsg = document.getElementById('output-message');
    console.log(outputMsg); 

    if (bet > balance) { 
        outputMsg.innerText = "No balance"
    }
    else {
    balance -= bet;
//for the nodelist stuff we take the 3 emojis and use the mathfloor and mathrandom to ranomzie the output and the length is like per thing
    let first = emojis[Math.floor(Math.random() * emojis.length)];
    let second = emojis[Math.floor(Math.random() * emojis.length)];
    let third = emojis[Math.floor(Math.random() * emojis.length)]; 
//recalling the array 0 1 2 is like reel1, reel2, reel3
    myReels[0].innerText = first;
    myReels[1].innerText = second;
    myReels[2].innerText = third;
    //if theyre equal
        if (first === second && second === third) {
            let winnings = bet * 5;
            balance += winnings
            outputMsg.innerText = `You won $${winnings}`
        } 
    /iftheyre not equal
        else {
            outputMsg.innerText = `You lost $${bet}`
        }
    //what is the balance
    document.querySelector('#starting-balance').innerText = balance; 
    }
}
// based on the buttons , this takes the input and then this is saying the big number = 50 and the small number is 5 
bigNum.addEventListener('click', function () {
    slotmachine(50)
})
smalNum.addEventListener('click', function () {
    slotmachine(5)
})
