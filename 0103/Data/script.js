let weekday = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];

let months = ["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"];


function getDateText(inputDay) {
    let date = new Date();
    if (inputDay) {
       date = new Date(date.getFullYear(),date.getMonth(),date.getDay()+parseInt(inputDay));
    } 
    let savaitesDiena = date.getDay()
    let menuo = months[date.getMonth()];
    let diena = weekday[savaitesDiena - 1];
    return `${diena},${menuo} ${savaitesDiena}`
}

console.log(getDateText(prompt("Kiek dienu prideti?")));