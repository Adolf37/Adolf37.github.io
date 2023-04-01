
let elemek = document.getElementsByClassName('tantargy');
const close = document.getElementById('close');
const beallitas = document.getElementsByClassName('beallitas')[0];
const kesz = document.getElementById('kesz')
let tantargy = document.getElementById('nev');
let terem = document.getElementById('terem');
const torol = document.getElementById('torol')
//console.log(elemek)


let jelenlegi = 0;

for(let elem of elemek){
    elem.addEventListener('click',()=>{
        beallitas.classList.remove('elrejt')
        jelenlegi = elem.dataset.index;
        
    })
}

close.addEventListener('click',()=>{
    beallitas.classList.add('elrejt')
})

kesz.addEventListener('click',()=>{
    
    //console.log(elemek[jelenlegi-1].innerText)
   // console.log(tantargy.value,terem.value)

   let ujszoveg = document.createElement('span');
   ujszoveg.innerText = tantargy.value;
   ujszoveg.id = 'szoveg'
   elemek[jelenlegi-1].append(ujszoveg)

   let ujTerem = document.createElement('div')
   ujTerem.innerText = terem.value;
   elemek[jelenlegi-1].append(ujTerem)

    tantargy.value = ''
    terem.value = null;

})

torol.addEventListener('click',()=>{
    elemek[jelenlegi-1].innerText = ' '
    let ujdiv = document.createElement('div')
    ujdiv.innerText = elemek[jelenlegi-1].dataset.time
    elemek[jelenlegi-1].append(ujdiv)
    
    
})