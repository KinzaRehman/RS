//alert('works')

// Addition takes id add to add the two numbers
//subtractions takes id sub to subtract num 1 from num 2,
//multiplication takes id mul ti multiple two values 
//division takes id div to divide two values using operands? %

document.querySelector('#add').addEventListener('click', addTwoNums);
document.querySelector('#sub').addEventListener('click', subTwonums);
document.querySelector('#mul').addEventListener('click', mulTwoNums );
document.querySelector('#div').addEventListener('click', divTwoNums);




//addution of two numbers
function addTwoNums(){
    let num1 = Number(document.querySelector('#num1').value);
    let num2 =Number(document.querySelector('#num2').value);

    let sum = num1 + num2 ;
    document.querySelector('#theAnswer').innerText = sum;
}

//subtraction two numbers
function subTwonums(){
    let num1 = Number(document.querySelector('#num1').value);
    let num2 =Number(document.querySelector('#num2').value);

    let diff = num1 - num2 ;
    document.querySelector('#theAnswer').innerText = diff;
}

//Multiplication fo two numbers 
function mulTwoNums() {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value)

    let multi = num1 * num2; 
    document.querySelector('#theAnswer').innerText = multi; 
}

//dividing two numbers 
function divTwoNums() {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);

    let div = num1 / num2 ;
    document.querySelector('#theAnswer').innerText = div; 
}
