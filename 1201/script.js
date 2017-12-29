const DARBINGI_ZMONES = 1761463;
const LIETUVOS_BIUDZETAS_2017 = 8487300000;

let bazinisUzmokestis;
let bazinisUzmokestisZmogui;
let bazinisUzmokestisVisiems;
let biudzetoDalis;
let alertString ="";

userInput = prompt("Įveskite bazinio užmokesčio dydį, €");
bazinisUzmokestis = parseFloat(userInput);

if (!bazinisUzmokestis) {
    alert("Skaičius įvestas neteisingai");
} 

else {

    bazinisUzmokestisZmogui = bazinisUzmokestis * 12;
    bazinisUzmokestisVisiems = bazinisUzmokestisZmogui * DARBINGI_ZMONES;
    biudzetoDalis = bazinisUzmokestisVisiems * 100 / LIETUVOS_BIUDZETAS_2017;

    if(biudzetoDalis> 100){
        document.write(`
        <p> Nera tiek pinigu ant Lietuvos!</p>
        <img src="nomoney.jpg"`)        
    }
    else{
        if(biudzetoDalis>=50){
            alertString = "<h1>Biški čia daugoka tų išmokų.</h1>"
        }
    document.write(`
        <p>${alertString}</p>
        <p>Darbingi žmonės Lietuvoje: ${ DARBINGI_ZMONES }</p>
        <p>Bazinis užmokestis žmogui: ${ bazinisUzmokestis }</p>
        <p>Lietuvos biudžetas: ${ (LIETUVOS_BIUDZETAS_2017/1000000).toFixed(2) } mln. €</p>
        <p>Išmokos sudarytų <strong> ${ biudzetoDalis.toFixed(2) } %</strong> Lietuvos biudžeto.</p>
    `);
    }
}