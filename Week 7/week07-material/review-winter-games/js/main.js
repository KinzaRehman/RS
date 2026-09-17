//Create a function that takes in an array of numbers.
// Return a new array containing every even number from the original array 
// (do not use map or filter)

function onlyEven(arr) {
    let evenArr = []
    arr.forEach((x) => {
        if(x % 2 === 0) {
            evenArr.push(x)
        }
    })
    return evenArr;
}
console.log(onlyEven([1,2,3,4,5,6,7,8,9,10, 999, 998]))