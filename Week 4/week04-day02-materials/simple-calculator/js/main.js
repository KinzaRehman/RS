let total = 0

document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#pumpkin').addEventListener('click', pumpkin)
document.querySelector('#zebra').addEventListener('click', zebra)
document.querySelector('#cantThinkOfAnything').addEventListener('click', cantThinkOfAnything)




function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function pumpkin() {
  total= 0
  document.querySelector('#placeToPutResult').innerText = total
}

function zebra() {
  total= total + 9
  document.querySelector('#placeToPutResult').innerText = total
}

function cantThinkOfAnything() {
  total= total - 2
  document.querySelector('#placeToPutResult').innerText = total
}