"use strict";

//========== 1 ===========

// function printText(text){
//     console.log(text);
// }

// printText("tekstukas");

//========== 2 ===========

// let a = 10;
// let b = 20;

// function getSum (a,b){
//     return  a + b;
// }

// console.log(getSum(a,30));

//========== 3 ===========
// Parašykite funkciją checkAge(), kuri atspauspintų nepilnametis/pilnametis. Funkcija priima vieną argumentą.
// Pakvieskite funkciją, kad patikrinti:
// checkAge(10);
// checkAge(18);
// checkAge(21); (edited)

// function checkAge(age) {
//     if (age >= 18) {
//         return "Pilnametis";
//     } else {
//         return "NEPILNAMETIS!";
//     }
// }

// console.log(checkAge(10));
// console.log(checkAge(18));
// console.log(checkAge(21));

//========== 4 ===========
// Paraykime funkcija, kuri priimtu viena argumenta - masyva, ir:
// Jei tai ne masyvas - atspausdintu praneima: neteisingas duomenu tipas
// Jei masyvo ilgis 1 - grazintu pirma elementa
// Jei ilgis > uz 1 - grazintu priespaskutini masyvo elementa

// function checkArr(array) {
//     let result;
//     if (!array.splice || array.length == 0) {
//         return;
//     } 
//     else {
//         result = (array.length == 1) ? array[0] : getBeforeLastNumber(array);
//     }
//     console.log(result);
// }

// function getBeforeLastNumber(array) {
//     return array[array.length - 2];
// }

// //checks
// checkArr(["Vienas", "Du", "Petras"]);
// checkArr(["Vienas"]);
// checkArr([]);

//========== 5 ===========
// Paraykite funkcija getWordCount, kurios pirmas argumentas ilgas tekstas, antras argumentas - iekomas ˛odis.
// Antras argumentas neprivalomas, tada yra gra˛imas visu ˛od˛iu skaicius.
// Funkcija atspausdina toki rezultata:
// "Tekste suradome X ˛od˛ius <ivestas ˛odis>"
// "Tekstas sudarytas ir x ˛od˛iu".

// function getWordCount(input, searchString) {
//     let searchArr;
//     let wordCount = 0;
//     if(!searchString){
//         return;
//     }
//     else{
//         searchArr = input.split(/[\s,]+/);
//         for(let x = 0; x < searchArr.length; x++){
//             if(searchArr[x].indexOf(searchString) != -1 && searchArr[x].length === searchString.length){
//             wordCount++;
//             };
//         }
//         return `
//         Įvestas tekstas - ${input}
//         Tekste suradome ${wordCount} žodžius "${searchString}"
//         Tekstas sudarytas iš ${searchArr.length} žodžių
//         `
//     }
// }

// console.log(getWordCount("Jau saulele beatkopdama budino svieta, bet svieta nesibudino.","svieta"));
