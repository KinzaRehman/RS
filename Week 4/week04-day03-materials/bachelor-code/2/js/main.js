//the goal is if they select andi then the other two disappear
//same for claire
//same for sharleen
//so who evers selected their img pops up

const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext )

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

function claireNext(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}



//
// function show(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// 	document.querySelector('#nikki').style.display = 'block'  
// 	// you have to explicietly remove the other two 
// }
