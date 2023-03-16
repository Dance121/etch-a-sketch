let color = 'black';
document.addEventListener('DOMContentLoaded', function(){
    createBoard(16);
    let btn_popup = document.getElementById('popup');
    btn_popup.addEventListener('click', function(){
        let size = getSize();
        createBoard(size);
        reset();
    });
    console.log('hi')
});


const blackBtn = document.querySelector('.black-btn');
let board = document.querySelector('.etch-div');
function createBoard(size){
    let board = document.querySelector('.etch-div');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numOfSections = size * size;
    for(let i = 0; i < numOfSections; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let input = prompt('What board size do you want?');
    let message = document.querySelector('.paragraph');
    if(input == ""){
        message.innerHTML = "Please provide a number";
    } else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100"
    }
    else {
        message.innerHTML = "You can draw!";
        return input;
    } 
}
function colorDiv(){
    if(color == 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}
else {
    this.style.backgroundColor = 'black';
}
}
function setColor(colorChoice){
    color = colorChoice;
}
function reset(){
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}
