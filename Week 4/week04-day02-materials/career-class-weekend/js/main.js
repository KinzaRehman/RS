document.querySelector('#check').addEventListener('click', check)

function check() {
  
  const day = document.querySelector('#day').value.toLowerCase()

  if (day ==='monday') {
    document.querySelector('#placeToSee').innerText = 'Career Day with Sarah'
  } else if (day ==='tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
    document.querySelector('#placeToSee').innerText = 'Hudde or learning day'
  } else if (day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerText = "Its the weekend do your reading!"
  } else {
    document.querySelector('#placeToSee').innerText = "dis not a weekday, or its misspelled"
  }

}



// if = monday = career day 

//else if= satruday and sunday is weekend 

//else if   tuesday, wednesday, thursday friday is class day 
