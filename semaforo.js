const img = document.getElementById ('img')
const buttons = document.getElementById ('buttons')

let colorIndex = 0
let interValid = null


const trafficLight = (event) => {
    stopAutomatic ()
    turnOn[event.target.id]()
}

const nextIndex = () => colorIndex = colorIndex < 2  ? ++colorIndex : 0

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = color [colorIndex]
    turnOn [color] ()
    nextIndex()
}

const stopAutomatic = () => {
   clearInterval (interValid)
}

const turnOn = {
    'red' :() => img.src = './img/vermelho (1).png',
    'yellow' : () => img.src = './img/amarelo (1).png',
    'green' : () => img.src = './img/verde (1).png',
    'automatic' : () => {
        interValid = setInterval (changeColor, 1000)
        buttons.children.automatic.id = 'stop'
    },
    'stop' : () => {
        stopAutomatic ()
        buttons.children.stop.id = 'automatic'
    }

}



buttons.addEventListener ('click', trafficLight)
