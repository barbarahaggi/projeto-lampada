const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken ())
    lamp.src = '/assets/ligada.jpg'
}

function lampOff () {
    if (!isLampBroken ())
    lamp.src = '/assets/desligada.jpg'
}

function lampBreak() {
    lamp.src = '/assets/quebrada.jpg'
}




turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBreak)
