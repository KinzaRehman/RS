// Create a function that takes in an array. If the first number,
//  is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye".
//  If they are equal, alert "We close in an hour".


function myFirstArray(arr) {
    let firstArr = arr[0]
    let lastArr = arr[arr.length -1];

    if (firstArr < lastArr ){
        alert('HI')
    } else if (firstArr > lastArr){
        alert('bye')
    } else {
        alert(' we close in an hour')
    }
}


myFirstArray([0,1,2,3,4,5,5,6]);
myFirstArray([10,,4,5,5,6]);
myFirstArray([1,2,3,4,5,5,1]);


?