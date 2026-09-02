//Create a function that grabs the number of snacks from the input and tells you to stop that many times



// Listen for a click on "Click for help!"
document.querySelector('#help').addEventListener('click', stopSnacking)

// Create a function that grabs the number of snacks from the input
function stopSnacking() {
  const numberOfSnacks = Number(document.querySelector('#snackCount').value)

  // Clear the previous result
  document.querySelector('#stops').innerText = ''

  // Tell the user to stop once for every snack
  for (let i = 0; i < numberOfSnacks; i++) {
    document.querySelector('#stops').innerText += 'STOP! '
  }
}