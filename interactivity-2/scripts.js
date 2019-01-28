// Interactivity demo 2

var body = document.querySelector('body')
var trigger = document.querySelector('.trigger')
var	audio = document.querySelector('audio')

trigger.addEventListener('click', zoom)

function zoom() {
	if (body.id != 'zoom') {
		body.id = 'zoom'
		audio.play()
	} else {
		body.id = ''
		audio.pause()
		audio.currentTime = 0
	}
}

var moon = document.querySelector('.moon')

moon.addEventListener('mouseenter', showShadow)
moon.addEventListener('mouseleave', hideShadow)

function showShadow(){
	moon.classList.add('eclipse')
}
function hideShadow(){
	moon.classList.remove('eclipse')
}