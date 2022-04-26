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
    createGrid();
})

// black button
const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', () => {
    color = 'black';
});

// random button
function randomRGB(){
    return Math.floor(Math.random()*255)
};

const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', () => {
    let r = randomRGB();
    let g = randomRGB();
    let b = randomRGB();
    color = `rgb(${r} ${g} ${b} / 100%)`
})
