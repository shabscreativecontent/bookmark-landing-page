let simple = document.querySelector('#st-div1')
let speedy = document.querySelector('#st-div2')
let easy = document.querySelector('#st-div3')
let onDefault = document.querySelector('#default')

document.getElementById('simple').addEventListener('click', simpleElement)
document.getElementById('speedy').addEventListener('click', speedyElement)
document.getElementById('easy').addEventListener('click', easyElement)


function simpleElement(){
   simple.classList.toggle("hidden")
	speedy.classList.add('hidden')
	easy.classList.add('hidden')
   onDefault.classList.add('hidden')
}

function speedyElement(){
	simple.classList.add('hidden')
	speedy.classList.toggle('hidden')
	easy.classList.add('hidden')
   onDefault.classList.add('hidden')
}

function easyElement(){
	simple.classList.add('hidden')
	speedy.classList.add('hidden')
	easy.classList.toggle('hidden')
   onDefault.classList.add('hidden')
}