//Create a function that takes in an array of numbers.
//  Multiply each number together and alert the product. 


function alertProduct(arr) {
        let prod = 1
        for( let i = 0; i <= arr.length -1; i++) {
            prod *= arr[i]
        }
        alert(prod)
}
alertProduct([2,3,4,4,4])
