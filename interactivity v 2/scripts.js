// Interactivity demo 2

var body = document.querySelector('body')
var trigger = document.querySelector('.trigger')
var	audio = document.querySelector('audio')
var	audioinverted = document.querySelector('.audioinverted')


trigger.addEventListener('click', zoom)

function zoom() {
	if (body.id != 'zoom') {
		body.id = 'zoom'
		audio.play()
		audioinverted.pause()
		audioinverted.currentTime = 0
	} else {
		body.id = ''
		audio.pause()
		audio.currentTime = 0
		audioinverted.play()
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