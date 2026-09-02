//Write your pseduo code first! 
//inital temperature
//math to convert from celcius to farhenheit

document.querySelector('#convert').addEventListener('click', convertTemp)

function convertTemp() {

    let celsius = document.querySelector('#celsius').value

    let fahrenheit = (celsius * 9 / 5) + 32

    document.querySelector('#convertedTemp').innerText = fahrenheit + '°F'

}