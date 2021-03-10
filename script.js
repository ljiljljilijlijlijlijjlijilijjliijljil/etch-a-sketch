let container = document.querySelector('.grid-container');

window.addEventListener('load', setDefault);

function getRandomColor() {
    let r  = Math.floor(Math.random() * 255);
    let g  = Math.floor(Math.random() * 255);
    let b  = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`; 
}


let reset_btn = document.querySelector('.reset');

reset_btn.addEventListener('click', function(){
    let cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach(cell => {
        cell.style.backgroundColor = 'azure';
    })
})

let setNewSizeBtn = document.querySelector('.set-new-size');

setNewSizeBtn.addEventListener('click', function(){
    let size = prompt('Please set a new size (2-64)');
    if (size > 1 && size < 65) {
        clearGrid();
        setColumns(size);
        setGrid(size);
        makeGridChangeColor();
    }
    else {
        alert('Please enter the integer between 2 and 64');
    }
    
})

function setColumns (size) {
    container.style.gridTemplateColumns = `repeat(${size}, 2fr)`;
}

function setGrid (size) {
    for (c = 0; c < size * size; c++){
        cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell); 
    }    
}

function makeGridChangeColor () {
    let cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(){
            cell.style.backgroundColor = getRandomColor();
        })
    });
}

function setDefault() {
    setColumns(16);
    setGrid(16);
    makeGridChangeColor();
}


function clearGrid() {
    children = Array.from(container.childNodes);
    children.forEach(child => {
        container.removeChild(child);
    });
}