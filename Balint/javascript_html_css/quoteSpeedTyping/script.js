const RANDOM_QUOTE_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timer = document.getElementById('timer')


quoteInputElement.addEventListener('input', () =>{
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true
    arrayQuote.forEach((charachterSpan, index) => {
        const charachter = arrayValue[index]
        if(charachter == null){
            charachterSpan.classList.remove('correct')
            charachterSpan.classList.remove('incorrect')
            correct = false
        } else if(charachter === charachterSpan.innerText){
            charachterSpan.classList.add('correct')
            charachterSpan.classList.remove('incorrect')
        } else {
            charachterSpan.classList.remove('correct')
            charachterSpan.classList.add('incorrect')
            correct = false
        }
    })
    if(correct)  renderNextQuote()

})

function getQuote(){
   return fetch(RANDOM_QUOTE_URL)
    .then(response => response.json())
    .then(data=> data.content)
}

async function renderNextQuote(){
    const quote = await getQuote();
    console.log(quote)
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(caharchter =>{
        const charachterSpan = document.createElement('span')
        charachterSpan.innerText = caharchter
        quoteDisplayElement.appendChild(charachterSpan)
        
    })

    quoteInputElement.value = null
    startTimer()
}

let startTime
function startTimer(){
    timer.innerText = 0
    startTime = new Date()
    // a setInterval nem eleg pontos eze kell a datumokkal jastzani mert az milisecundumig pontos
    setInterval(()=>{
        timer.innerText = getTimerTime()
    },1000)
}

function getTimerTime(){
    return Math.floor((new Date() - startTime) / 1000)
}


renderNextQuote()