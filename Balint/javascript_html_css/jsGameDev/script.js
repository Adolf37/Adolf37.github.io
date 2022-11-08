
import {updateBird,setupBird,getBirdRect} from './bird.js'
import {updatePipes, setupPipes,getPassedPipesCount, getPipeRects} from './pipe.js'


document.addEventListener('keypress',handleStart,{once:true})
//csak 1-szer akarjuk futtatni
const title = document.querySelector("[data-title]")
const subtitle = document.querySelector("[data-subtitle]")
//jatek elkezdese => jatek ciklus kell legtobbszor
//vegtelenszer fog futni, szamolgatni
//window.reaquestAnimationFrame et hasznalunk
// masik opcio a setInterval de az nem valami jo

let lastTime;

function updateLoop(time){
    //elso rendereles skip-elese
    if(lastTime ==null){ //hogy az elso ertek ne legyen nan
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return
    }
    //console.log(time-lastTime) //x_ms : mennyi ido utan kezdett futni, time-lastTime= eltelt ido a renderlesek kozott
    const delta = time-lastTime // ido az animacios keretek kozt
    updateBird(delta)
    updatePipes(delta)
    if(checkLose()){
        return handleLose() //aze return hogy ne menjen tovabb a kod
    }
    lastTime = time;
    window.requestAnimationFrame(updateLoop);
}

function checkLose(){
    const birdRect = getBirdRect();
    const insidePipe = getPipeRects().some(rect=> isCollision(birdRect,rect))
    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight
    //kepernyo teteje mindig 0 vagy az alja nagyobb mint maga a kepernyo magassaga
    return outsideWorld || insidePipe;
}

function isCollision(rect1,rect2){
    return (
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom > rect2.top
    )
}

function handleStart(){
    title.classList.add("hide")
    setupBird();
    setupPipes();
    lastTime = null; //hogy ne vigye magaval az erteke a kovetkezo kezdesre
    window.requestAnimationFrame(updateLoop)
}



function handleLose(){
    setTimeout(()=>{
        title.classList.remove('hide');
        subtitle.classList.remove('hide');
        subtitle.textContent = `${getPassedPipesCount()} Pipes`;
        document.addEventListener('keypress',handleStart,{once:true})
    },100)
    
}