// //Create a conditonal that checks their age
// function checkAge(age) { 
// //If under 16, tell them they can not drive
//     if (age <16) {
//         return "You're too young to drive"
//     }

// //If under 18, tell them they can't hate from outside the club, because they can't even get in
//     else if (age < 18) {
//         return "You can't hate from outside the club, because they can't even get in"
//     }
// //If under 21, tell them they can not drink
//     else if (age < 21) {
//         return "You can not drink"
//     }
// //If under 25, tell them they can not rent cars affordably
//     else if (age < 25) {
//         return "cant rent cars affordably"
//     }

// //If under 30, tell them they can not rent fancy cars affordably
//     else if (age < 30) {
//         return "You cant rent fancy cars affordably"
//     }
// //If under over 30, tell them there is nothing left to look forward too
//     else if (age > 30) {
//         return "theres nothing left to look forward to "
//     }
//     else () {
//         console.log('more than 30 huh')
//     }

// }
// //--- Harder
// //On click of the h1
// document.querySelector('h1').addEventListener('click', showResult)


//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', checkAge)

function checkAge() {
    const age = Number(document.querySelector('input').value);
    console.log(age)
      if (age <16) {
        console.log( "You're too young to drive")
    }

    else if (age < 18) {
        console.log( "You can't hate from outside the club, because they can't even get in")
    }
    else if (age < 21) {
        console.log( "You can not drink")
    }
    else if (age < 25) {
        console.log( "cant rent cars affordably")
    }

    else if (age < 30) {
        console.log( "You cant rent fancy cars affordably")
    }
    else if (age > 30) {
        console.log( "theres nothing left to look forward to ")
    }
    else {
        console.log('more than 30 huh')
    }
 
}


