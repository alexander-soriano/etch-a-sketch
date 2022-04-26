const container = document.querySelector('.container')

function createGrid(numberOfGrid){
    for (i=1; i<=numberOfGrid; i++){
        const box = document.createElement('div');
        box.classList.add(`box`);
        container.appendChild(box);
    }

function adaptSquare(box){
    box.style.cssText=`height: ${100/side}%; width: ${100/side}%;`
}

    let side = Math.sqrt(numberOfGrid);
    const allBox = container.querySelectorAll('.box');
    allBox.forEach(adaptSquare)

    allBox.forEach(box => box.addEventListener('mouseover', (e) => {
            e.target.classList.add('open');
        }));    
    
};

createGrid(16*16);

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', (e) => {
    container.textContent = '';
    do {
        square = prompt("Enter a number less than or equal 100?", 16);
      } while (square > 100 && square);
    createGrid(square*square)
})


const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', () => {
    document.documentElement.style.setProperty('--baseColor', 'black')
});

const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', () => {
    function randomRGB(){
        return Math.floor(Math.random()*255)
    };
    let r = randomRGB();
    let g = randomRGB();
    let b = randomRGB();
    document.documentElement.style.setProperty('--baseColor', `rgb(${r} ${g} ${b} / 100%)`)
});