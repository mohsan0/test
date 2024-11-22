let countEl = document.getElementById("counting");
let increseBTn = document.getElementById("incremint-btn");
let saveEl = document.getElementById("save-btn");
let previous= document.getElementById("pre-count");
let resetBtn =document.getElementById("reset-btn");


let count = 0;

function incremint() {
    count ++;
    countEl.innerText = count;
   
}

function save() {
    previous.innerText += count + " -";
    count = 0;
    countEl.innerText = count;
}


function reset(){
    count = 0;
    countEl.innerText = count;
    previous.innerText = "previous count:";
}