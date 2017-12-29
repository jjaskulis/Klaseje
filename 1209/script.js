"use strict";

//========== 1 ===========
// let vartotojas = {
//     vardas : "Jonas",
//     pavarde : "Jonaitis",
//     amzius : 29,
//     spausdink : function(){
//         console.log(this.vardas);
//     },

// };

// vartotojas.pastas = "jonas.jonaitis@gmail.com"
// vartotojas.telefonai = ["86748196143", "8621569898"] 
// console.log(vartotojas.vardas);
// console.log(vartotojas.amzius);

// vartotojas.spausdink();

//========== 2 ===========
// Sukurkite funkcijas, kurios grazintu:
// - aliu saraa <array>
// - vidutini zmoniu amziu <number>
// - tik zmones, kurie aktyvus <array> [{}, {}]
// - atsitiktini zmogu "Vardas Pavade"


function getCountryList(list) {
    let countries = [];
    for (let x = 0; x < list.length; x++) {
        countries.push(list[x].country);
    }
    return countries;
}


function getAverageAge(list) {
    let ageSum = 0;
    for (let x = 0; x < list.length; x++) {
        ageSum += list[x].age;
    }
    return ageSum / list.length;
}

function getActive(list) {
    let active = [];
    for (let x = 0; x < list.length; x++) {
        if (list[x].isActive) {
            active.push(list[x]);
        }
    }
    return active;
}

function getRandom(list) {
    let randomNum = Math.round(Math.random()*(list.length-1));
    return list[randomNum].name + " " + list[randomNum].surname
}

console.log(getCountryList(testData));
console.log(getAverageAge(testData));
console.log(getActive(testData));
console.log(getRandom(testData));