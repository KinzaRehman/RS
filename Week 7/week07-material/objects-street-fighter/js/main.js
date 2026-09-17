//Create a street fighter character class that makes fighting game
//  characters with 4 properties and 3 methods


// class streetfighter {
//     constructor(name, move, health, strength){
//         this.name = name;
//         this.move = move;
//         this.health= health;
//         this.strength = strength
//     }


//     theirName() {
//         console.log(`this is their name` + this.name)
//     }
//     theirmove() {
//         console.log(`power move` + move)
//     }
//     theirhealth() {
//         console.log(`health` + health)
//     }

// }

//leons 
class StreetFighters {
    constructor(rainbow, move, health, strength){
        this.name = rainbow;
        this.move = move;
        this.health= health;
        this.strength = strength
    }

    popOff() {
        alert(`$rainbow}`)
    }
    attack() {
        alert(`you cant handle my ${this.move}`)
    }
    spin(){
        alert('weee')
    }

} 

let ryu = new StreetFighters('high', 'low', 90, 'no strength')

let pig = new StreetFighters('low', 'punch kick', 100, 'alot of strength')

