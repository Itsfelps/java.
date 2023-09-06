const img = document.getElementById('img');
const buttons = document.getElementById('buttons')

let colorIndex = 0;
let intervalId = null;


const trafficLight = (event)=>{
    StopAutomatic();
    turn0n[event.target.id]();
    
}

const nextIndex = ()=> colorIndex = colorIndex < 2 ? ++colorIndex: 0;

const changeColor = () =>{
    const colors = ['red', 'yellow','green']
const color = colors[colorIndex];
 turn0n[color]();
nextIndex();
}
const StopAutomatic = ()=>{
     clearInterval(intervalId);
}

const turn0n ={
    'red': ()=> img.src = './img/vermelho.png',
    'yellow': ()=> img.src = './img/amarelo.png',
    'green': ()=> img.src = './img/verde.png',
    'automatic': ()=> intervalId = setInterval(changeColor,1500)

}

buttons.addEventListener('click', trafficLight );