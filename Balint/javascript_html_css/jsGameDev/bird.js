
const birdElement = document.querySelector('[data-bird]');
const BIRD_SPEED = 0.5;
let timeSinceLastJump = Number.POSITIVE_INFINITY;
let JUMP_DURATION = 125 ; //125ms fog tartani az ugras

//madar elhelyezese a kepernyo felenel kezdeskor
export function setupBird(){
    setTop(window.innerHeight / 2);
    document.removeEventListener('keydown', handleJump) //kezdeskor ne legyen
    document.addEventListener('keydown', handleJump)
}

export function updateBird(delta){
    if(timeSinceLastJump <JUMP_DURATION){
        setTop(getTop() - BIRD_SPEED * delta)//felfele
    }else{
        setTop(getTop() + BIRD_SPEED * delta)//lefele
    }
    
    //console.log(getTop());
    timeSinceLastJump += delta;
}

export function getBirdRect(){
    return birdElement.getBoundingClientRect()
}


//madar felso poziciojanak beallitasa
function setTop(top){
    birdElement.style.setProperty("--bird-top",top) //css tulajdonsag beallitasa
}

function getTop(){
    //css tulajdonsag lekerese es parseFloat hogy ne legyen string
    return parseFloat(getComputedStyle(birdElement).getPropertyValue("--bird-top"))
}

function handleJump(e){
    if(e.code !=='Space'){
        return
    }
    timeSinceLastJump = 0;
}