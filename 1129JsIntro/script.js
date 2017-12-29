/*let vardas = "Andrius";
let pavarde = "Stonys";

let pilnasVardas = vardas + pavarde
console.log(typeof(pilnasVardas));
document.write(pilnasVardas);*/

const BUDGET = 8487000000;
const WORK_POPULATION = 1761463;
let basicIncome;
let result;
let totalPayments;

basicIncome = parseFloat(prompt("Iveskit bazinio atlygio dydi:"));

if( !basicIncome){ 

    alert("Ivesta neteisinga reiskme");
}
else{
    totalPayments 


    else{
        result = parseInt(basicIncome)  * WORK_POPULATION * 12 / BUDGET*100;
        result = result.toFixed(2);
        document.write(`   
        <p>Valstybės biudžetas: <b> ${BUDGET}</b></p>
        <p>Gyventojų skaičius: <b> ${WORK_POPULATION} </b></p>
        <p>Bazinis užmokestis: <b> ${basicIncome}</b></p>
        <p>Tai sudarytų <b>${result} %</b> viso biudžeto</p>
        `);
    }
}

//output

