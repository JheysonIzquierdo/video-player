//Variables
const video = document.querySelector('video')
const play = document.querySelector('#play')
const pausa = document.querySelector('#pausa')
const atras = document.querySelector('#atras')
const adelantar = document.querySelector('#adelantar')
const progreso = document.querySelector('#progres')

//Eventos
play.addEventListener('click', Darleplay )
pausa.addEventListener("click", Darlepausa)
atras.addEventListener("click", retroceder)
adelantar.addEventListener("click", avanzar)
video.addEventListener('loadedmetadata', progreso)
video.addEventListener('timeupdate', tiempo)
progreso.addEventListener('input', inputavanzar)

//Funciones
function Darleplay() {
video.play()
play.hidden=true
pausa.hidden=false
}

function Darlepausa(){
    video.pause()
    pausa.hidden=true
    play.hidden=false
}

function avanzar(){
video.currentTime += 10
}

function retroceder(){
video.currentTime -= 10
}

function progresotiempo(){
video.duration()
progreso.max=video.duration
}

function tiempo(){
    progreso.value=video.currentTime
}

function inputavanzar(){
video.currentTime=progreso.value
}
