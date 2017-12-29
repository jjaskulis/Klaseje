"use strict";
//uzduotis 1
// let num = 20;

// while(num > 0){
//     console.log(num);
//     num--;
// }
//uzduotis 2
// let skaiciuMasyvas = [];
// let input = 0;
// let skVidurkis;
// let skSuma;

// while(true){
//     input = parseFloat(prompt("Iveskite skaiciu: "));

//     if (isNaN(input)){
//         skSuma = skaiciuMasyvas.reduce(function(a,b){
//             return a+b;
//         });
//         skVidurkis = skSuma / skaiciuMasyvas.length;
//         break;
//     }
//     else{
//         skaiciuMasyvas.push(input);
//     }
// }
// console.log("Įvesti skaičiai " + skaiciuMasyvas);
// console.log("Įvesta viso skaičių :" + skaiciuMasyvas.length);
// console.log("Jų vidurkis yra " + skVidurkis);
// console.log("Jų bendra suma yra " + skSuma);


// let olympicCities = ["Vancouver", "London", "Sochi", "Pyeongchang", "Tokyo", "Beijing", "Paris"];

// for(let a = 0; a < olympicCities.length; a++){
//     console.log(olympicCities[a]);
// }
//atvirkstinis ciklas

// let olympicCities = ["Vancouver", "London", "Sochi", "Pyeongchang", "Tokyo", "Beijing", "Paris"];

// for(let a = olympicCities.length - 1; a >= 0 ; a--){
//     console.log(olympicCities[a]);
// }

//uzduotis 3
// Atspausdinkite masyve esančia informaciją
// "Jonas yra iš Jonavos, jam 25, el. pašto adresas: jonas@gmail.com"
// Kur nenurodytas miestas rašykite:
// "Jonas nenurodė iš kurio miesto jis yra. Jam 25, el. pašto adresas: jonas@gmail.com"
let vartotojai = [
    ["Jonas", 25, "jonas@gmail.com", 1, "Jonavos"],
    ["Lukas", 18, "lukas@gmail.com", 1, "Kėdainių"],
    ["Petras", 21, "petras@gmail.com", 1],
    ["Danguolė", 23, "danguolė@gmail.com", 0, "Kupiškio"],
    ["Stasys", 17, "petras@gmail.com", 1],
    ["Renata", 20, "renata@gmail.com", 1]
];

for(let x = 0; x < vartotojai.length; x++){
        let elem = vartotojai[x];
        if(elem[4] === undefined){
            console.log(`${elem[0]} jam ${elem[1]}, el.pašto adresas: ${elem[2]} ` );
        }else{
            console.log(`${elem[0]} yra iš ${elem[4]}, jam ${elem[1]}, el.pašto adresas: ${elem[2]} ` );
        }
}