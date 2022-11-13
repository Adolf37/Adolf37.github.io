let playerState= 'idle'
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change',(e)=>{
    playerState = e.target.value 
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
//console.log(ctx)

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575; //teljes kep/ oszlop szam
const spriteHeight = 523; //teljes kep/ sor szam
//let frameX=0;
//let frameY=0;

let gameFrame = 0;
let staggerFrame = 5; //ennyivel lassitom a kepeket
const spriteAnimations = [];//minden animacio adatai, sorba hany kep van stb.
const animationStates = [
    {
        name:'idle',
        frames:7
    },
    {
        name:'jump',
        frames:7
    },
    {
        name:'fall',
        frames: 7
    },
    {
        name:'run',
        frames: 9
    },
    {
        name:'dizzy',
        frames: 11
    },
    {
        name:'sit',
        frames:5
    },
    {
        name:'roll',
        frames:7
    },
    {
        name:'bite',
        frames:7
    },
    {
        name:'ko',
        frames:12
    },
    {
        name:'getHit',
        frames:4
    }
];
//x es y koordinatat szamol, objektumokat csinal pozicioval es nevvel
animationStates.forEach((state,index)=>{
    let frames = {
        loc: []
    }
    for(let j =0;j<state.frames;j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX, y:positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations)

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); //regi kitorlese, koordinatak hogy honnan toroljon
    //ctx.fillRect(50,50,100,100); //50-50 koordinatara 100px-es haromszog
    //ctx.drawOmage(playerImage,sx,sy,sw,sh,dx,dy,dw,dh);
    //kep->kivett resz a keprol -> hova akarom rakni
    
    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimations[playerState].loc.length
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage,frameX, frameY,
         spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
   
    //egszeru megoldas
    /*
    if(gameFrame % staggerFrame===0){
        if(frameX <4) frameX++;
        else frameX = 0;
    }
    */

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();
