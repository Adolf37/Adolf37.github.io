const pyCode = document.querySelector("#pyCode");
const jsCode = document.querySelector("#jsCode");


const printt = document.querySelector("#print");
const printVar = document.querySelector('#printVar');

const mkv = document.querySelector("#mkv");

const showV = document.querySelector('#showV');
const variabelsField = document.querySelector("#variabels");

const userInput = document.querySelector('#userInput');

const mka = document.querySelector("#mka");

mka.addEventListener('click',()=>{
    let regex = /^\d+$/;
    let elements = prompt("give a name and the elements (separated with space)");
    let el = elements.split(" ");
    
    let pyA = document.createElement('p');
    let jsA = document.createElement('p');
    pyA.innerHTML=`${el[0]} = [`
    for(let i=1;i<el.length;i++){
        if(i==el.length-1){
            if(regex.test(el[i])){
                pyA.innerHTML+=`${el[i]}]`
            }else{
                pyA.innerHTML+=`"${el[i]}"]`
            }
           
        }else{
            if(regex.test(el[i])){
                pyA.innerHTML+=`${el[i]},`
            }else{
                pyA.innerHTML+=`"${el[i]}",`
            }
        }
        
    }
    jsA.innerHTML='let ';
    jsA.innerHTML += pyA.innerHTML;
    pyCode.append(pyA);
    jsCode.append(jsA);
})

userInput.addEventListener('click',()=>{
    let pyInput = document.createElement('p');
    pyInput.innerHTML = 'val = input("Enter your value:")';
    pyCode.append(pyInput);

    let jsInput = document.createElement('p');
    jsInput.innerHTML = 'val = prompt("Enter your value:")';
    jsCode.append(jsInput);
})

showV.addEventListener('click',()=>{
    variabelsField.classList.toggle('show');
    if(variabelsField.classList.contains('show')){
        showV.innerHTML = 'hide variabels';
    }else{
        showV.innerHTML = 'show variabels';
    }
})

const refreshVariabels = ()=>{
    variabelsField.innerHTML = ''
    for(k in variabels){
        let p = document.createElement('p');
        p.innerHTML=`${k}`
        variabelsField.append(p);
    }
}


let variabels = {};
//variabels.x = 37;
//console.log(variabels)

printt.addEventListener("click",()=>{
    let response = prompt('give me a string or a number!');

    let regex = /^\d+$/;
    if(regex.test(response)){
        response = parseInt(response);
        let py = document.createElement('p');
        py.innerHTML = `print(${response});`;
        let js = document.createElement('p');
        js.innerHTML = `console.log(${response});`;
        
        pyCode.append(py);
        jsCode.append(js);
    }else{
        let py = document.createElement('p');
        py.innerHTML = `print("${response}");`;
        let js = document.createElement('p');
        js.innerHTML = `console.log("${response}");`;
        
        pyCode.append(py);
        jsCode.append(js);
    }

});

printVar.addEventListener("click",()=>{
    let wh = prompt('Which variabel do you want to print to the console?');
    if(variabels[wh]){
        //console.log('have') ok
        let ppV = document.createElement('p');
        ppV.innerHTML = `print(${wh});`
        pyCode.append(ppV);

        let pjsV = document.createElement('p');
        pjsV.innerHTML = `console.log(${wh})`;
        jsCode.append(pjsV);
    }else{
       // console.log('dont have') ok
       alert(`Sorry don't have ${wh} variabel`);
    }
    
})


mkv.addEventListener("click",()=>{ // ready
    let nV = prompt('Give a name and a value');
    let nvA = nV.split(" ");
    console.log(nvA)
    let tn = nvA[0];
    let tv = nvA[1];
    let regex = /^\d+$/;
    if(regex.test(tv)){
       // console.log('szam'); ok
       tv = parseInt(tv);
       variabels[tn]=tv;
       let pyV = document.createElement('p');
        pyV.innerHTML = `${tn} = ${tv};`
        pyCode.append(pyV);

        let jsV = document.createElement('p');
        jsV.innerHTML = `let ${tn} = ${tv};`
        jsCode.append(jsV);
       
    }else{
       // console.log('nem szam') ok
       variabels[tn]=tv;
       let pyV = document.createElement('p');
        pyV.innerHTML = `${tn} = "${tv}";`
        pyCode.append(pyV);

        let jsV = document.createElement('p');
        jsV.innerHTML = `let ${tn} = "${tv}"';`
        jsCode.append(jsV);
    }
    refreshVariabels();
    
    
})