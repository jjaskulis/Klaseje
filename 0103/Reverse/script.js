let stringArray = prompt("Iveskite zodi");
console.log(reverseString(stringArray));

function reverseString(input){
	return input.split("").reverse().join("");
}