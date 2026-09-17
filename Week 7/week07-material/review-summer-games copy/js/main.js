//Create a function that takes in an array of numbers.
//  Multiply each number together and alert the product. 

// {
// function multiply(arr) {
//     let product = 1; 
    
//     for ( 
//         let i = 0; 
//         i <= arr.length -1;
//         i++ 
//      ) {
//         product *= arr[i]
//      } 
// console.log(arr);
// alert(product);
// }

// console.log(multiply([2, 3, 4])); 
// }

function multiplying(arr) {
    let starting = 1; 
    for ( let i = 0; i <= arr.length -1; i++ ) {
        starting *= arr[i];
    }

console.log(arr); 
console.log(starting);
}
multiplying([3,4,5])