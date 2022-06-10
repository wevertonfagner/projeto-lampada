const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('Quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/lampadaLigada-removebg-preview.png';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/lampadaDesligada-removebg-preview.png'
    }
}

function lampBroken() {
    lamp.src = './img/lampadaQuebrada-removebg-preview.png'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken);
