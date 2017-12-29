let h1Element = document.querySelector(".my-heading");
let inputEl = document.querySelector("input");

inputEl.placeholder = "0.00"
console.log(h1Element);
console.log(inputEl);

let infoEl = document.createElement("div");
infoEl.className = "info info-text";
infoEl.innerText = "Iveskite skaiciu ir paspauskite mygtuka, kad pakelti kvadratu";


let formEl = document.querySelector("form");
formEl.after(infoEl);


function kelkKvadratu(){
    let a = parseFloat(inputEl.value);
    a = a * a;
    inputEl.value  = a;
}

function valom(){
    inputEl.value ="";
}

function parodyk(){
    infoEl.style.display = "block";  
}

infoEl.style.display = "none";

let newBtn = document.createElement("button");
new
