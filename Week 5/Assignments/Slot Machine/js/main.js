// alert('works')
const minBet = 5;
const maxBet = 15; 
let balance = 100;

function slotmachine(bet) {
    //check our inut 
    if bet <= 0 {
        throw new Error("Bet must be greater than 0");
    }

}