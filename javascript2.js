const container = document.querySelector('.container');
let color = 'black'

function createGrid(sides){
    if (!sides){
        do {sides = prompt('Input number less than or equal 100',16)
    } while (sides > 100 || sides <= 0)
    }


    let side = sides;
    for (i=1; i<=sides*sides; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }

    document.documentElement.setAttribute('style',`--varHeight:${100/side}%; --varWidth:${100/side}%`)

    const allBox = document.querySelectorAll('.box');
    allBox.forEach(box => box.addEventListener('mouseover', draw));
    
}

function draw(){
    this.style.setProperty('background-color', `${color}`);
}

createGrid(16);

// reset button
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    container.textContent='';
    color = 'black'
    createGrid();
    
})

// black button
const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', () => {
    color = 'black'
    const allBox = document.querySelectorAll('.box');
    allBox.forEach(box => box.removeEventListener('mouseover', randomColor));
    
});

// random button
function randomRGB(){
    return Math.floor(Math.random()*255)
};

function randomColor(){
    let r = randomRGB();
    let g = randomRGB();
    let b = randomRGB();
    color = `rgb(${r} ${g} ${b} / 100%)`
};

function rainbow(){
    const allBox = document.querySelectorAll('.box');
    allBox.forEach(box => box.addEventListener('mouseover', randomColor));
}

const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', () => {
    randomColor()
    rainbow()});

//fade button


let initial = 100;

function fadeRGB(){
    
    if (initial<0){
        initial = 100;
    }
    console.log(initial)
    initial = initial - 10
    
};

function fadeColor(){
    fadeRGB()
    let r = 0;
    let g = 0;
    let b = 0;
    color = `rgb(${r} ${g} ${b} / ${initial}%)`
};

function fading(){
    const allBox = document.querySelectorAll('.box');
    allBox.forEach(box => box.addEventListener('mouseover', fadeColor));
}

const fadeButton = document.querySelector('.fade');
fadeButton.addEventListener('click', fading);