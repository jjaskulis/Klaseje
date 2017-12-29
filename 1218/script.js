let paragrafas = document.querySelector("p");

gaukTeksta().then(function(result){
    paragrafas.innerText = result;
}).catch(function(error){
    paragrafas.innerText = error;
})


function gaukTeksta(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve("Uzhkrove");
        },2000)
    });

    return promise;
}
