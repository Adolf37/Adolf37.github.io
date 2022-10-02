//jon a szorakozas

const X_CLASS='x';
const CIRCLE_CLASS ='circle';

let circleTurn;
const board = document.getElementById('board')
const cellElements = document.querySelectorAll('[data-cell]');
const winningMessageTextElement = document.querySelector('[data-text]')
const uzenet = document.querySelector('[data-uzenet]');
const gomb = document.querySelector('[data-gomb]');
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
console.log(WINNING_COMBINATIONS)
startGame();

gomb.addEventListener('click',startGame);

function startGame(){
    uzenet.classList.remove('show')
    circleTurn = false;
    cellElements.forEach(cell=>{
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click',handleClick);
        cell.addEventListener('click',handleClick, {once:true});
    })
    setBoardHoverClass();
}


function handleClick(e){
    let cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell,currentClass);
    if(checkWin(currentClass)){
        endGame(false);
    } else if(isDraw()){
        endGame(true)
    } else {
        swapTurns();
        setBoardHoverClass();
    }
    
    
}

function checkWin(kiAz){
    return WINNING_COMBINATIONS.some(combination=>{
        return combination.every(index =>{
            return cellElements[index].classList.contains(kiAz)
        })
    })
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = 'Dontetlen';
        uzenet.classList.add('show')
    } else {
        winningMessageTextElement.innerText =` ${circleTurn ? 'O' : 'X'} nyert!`;
        uzenet.classList.add('show')
    }

}

function placeMark(cell,classname){
    cell.classList.add(classname);
}

function isDraw() {
    return [...cellElements].every(cell =>{
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
  }

function swapTurns(){
    circleTurn = !circleTurn;
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}