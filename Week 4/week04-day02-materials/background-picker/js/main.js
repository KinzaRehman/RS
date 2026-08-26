document.getElementById('purple').onclick = partyPurple

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

document.getElementById('green').onclick = partyGreen

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgb(63, 247, 118)'
  document.querySelector('body').style.color = 'blue'
}

document.getElementById('blue').onclick = partyBlue

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgb(63, 226, 247)'
  document.querySelector('body').style.color = 'red'
  document.querySelector('header').style.backgroundColor = 'rgb(63, 247, 118)'
}

