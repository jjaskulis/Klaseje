"use strict";
// Įterpkite "Rio de Janeiro" po "Sochi"
// Pridėkite "Athens", "Turin", "Beijing" į sarašo priekį
// Išsaugokite naują masyvą su paskutiniais 3 miestais į kintamąjį:

let olympicCities = ["Vancouver", "London", "Sochi", "Pyeongchang", "Tokyo", "Beijing", "Paris"];

olympicCities.splice(olympicCities.indexOf("Sochi") + 1, 0, "Rio de Janeiro");

olympicCities.splice(0, 0, "Athens", "Turin", "Beijing")
console.log(olympicCities.toString());
console.log("");

let lastCities = olympicCities.splice(-3,3);
console.log("Paskutiniai miestai: " + lastCities);

let vaisiai = ["Ananasas","Kriaušė","Pomidoras"];
console.log(vaisiai.sort());


let number = ["1","2","3","4"];

console.log(number.sort());

let miestas = prompt("Iveskite olimpini miesta:");

if(!olympicCities.includes(miestas)){
    console.log("Miestas " + miestas + " nėra olimpinis miestas");
}
else{
    console.log("Miestas " + miestas + " yra olimpinis miestas!");
}
