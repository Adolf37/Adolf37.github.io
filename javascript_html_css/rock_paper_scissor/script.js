console.log(window.innerWidth)

const result = document.querySelector("#result");
const computerPoint = document.querySelector("#computerPoint");
let pcPointCnt=0;
const yourPoint = document.querySelector("#yourPoint");
let yourPointCnt = 0;

const rock = document.querySelector(".rock")
console.log(rock)
rock.style.width = (window.innerWidth / 3) - 21 + 'px';
rock.style.height = window.innerHeight / 3 +'px';

const paper = document.querySelector(".paper")
paper.style.width = (window.innerWidth / 3) - 21 + 'px';
paper.style.height = window.innerHeight / 3 +'px';

const scissor = document.querySelector(".scissor")
scissor.style.width = (window.innerWidth / 3) - 21 + 'px';
scissor.style.height = window.innerHeight / 3 +'px';


const rock2 = document.querySelector(".rock2")
console.log(rock)
rock2.style.width = (window.innerWidth / 3) - 21 + 'px';
rock2.style.height = window.innerHeight / 3 +'px';
rock2.addEventListener('click',()=>{
    myPick = 'rock';
    //clearInterval(visszaSzamlal);
    myChose.textContent = myPick;
    aiPick()
    whoWin();
})

const paper2 = document.querySelector(".paper2")
paper2.style.width = (window.innerWidth / 3) - 21 + 'px';
paper2.style.height = window.innerHeight / 3 +'px';
paper2.addEventListener('click',()=>{
    myPick = 'paper';
    //clearInterval(visszaSzamlal);
    myChose.textContent = myPick;
    aiPick()
    whoWin();
})

const scissor2 = document.querySelector(".scissor2")
scissor2.style.width = (window.innerWidth / 3) - 21 + 'px';
scissor2.style.height = window.innerHeight / 3 +'px';
scissor2.addEventListener('click',()=>{
    myPick = 'scissor';
    //clearInterval(visszaSzamlal);
    myChose.textContent = myPick;
    aiPick()
    whoWin();
})

const myChose = document.querySelector("#myPick");
const pcChoice = document.querySelector("#computerPick");


//const counter = document.querySelector("#counter")
//console.log(counter.innerText)

/*
const visszaSzamlal = setInterval(()=>{
    counter.innerText = counter.innerText - 1
   
    if(counter.innerText == 0){
        clearInterval(visszaSzamlal);
        myChose.textContent = myPick;
        aiPick()
    } 
    
},1000)
*/

let myPick = '';

let computerPick = '';

let options = ['paper','rock','scissor'];

const aiPick = () =>{
    let r = Math.floor(Math.random()*10) % 3 //0,1,2
    computerPick = options[r];
    console.log(computerPick)
    if(computerPick == 'rock'){
        rock.style.border = "5px solid red";
        paper.style.border = 'none';
        scissor.style.border = 'none';
    }
    if(computerPick == 'paper'){
        rock.style.border = "none";
        paper.style.border = "5px solid red";
        scissor.style.border = 'none';
    }
    if(computerPick == 'scissor'){
        rock.style.border = "none";
        paper.style.border = 'none';
        scissor.style.border = "5px solid red";
    }
    pcChoice.textContent = computerPick;
    
}

const whoWin = ()=>{
    if(myPick == computerPick){
        result.textContent = 'Draw';
    }
    if(myPick=='scissor' && computerPick=='paper'){
        result.textContent = 'You won';
        yourPointCnt++;
        yourPoint.textContent = `Your Point: ${yourPointCnt}`;
    }
    if(myPick=='scissor' && computerPick=='rock'){
        result.textContent = 'You lost';
        pcPointCnt++;
       computerPoint.textContent = `PC Point: ${pcPointCnt}`;
    }
    if(myPick=='rock' && computerPick=='paper'){
        result.textContent = 'You lost';
        pcPointCnt++;
       computerPoint.textContent = `PC Point: ${pcPointCnt}`;
    }
    if(myPick=='rock' && computerPick=='scissor'){
        result.textContent = 'You won';
        yourPointCnt++;
        yourPoint.textContent = `Your Point: ${yourPointCnt}`;
    }
    if(myPick=='paper' && computerPick=='rock'){
        result.textContent = 'You won';
        yourPointCnt++;
        yourPoint.textContent = `Your Point: ${yourPointCnt}`;
    }
    if(myPick=='paper' && computerPick=='scissor'){
        result.textContent = 'You lost';
        pcPointCnt++;
       computerPoint.textContent = `PC Point: ${pcPointCnt}`;
    }

}








