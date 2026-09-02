document.querySelector('#finalRose').addEventListener('click', hide)

function hide(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}

document.querySelector('#finalRose').addEventListener('click', show)


//another solution but more work? 
function show(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
	document.querySelector('#nikki').style.display = 'block'  
	// you have to explicietly remove the other two 
}
