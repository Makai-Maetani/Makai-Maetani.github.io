// 🔍 Part 1 error

let fullName = "Patricia Juarez";
let currentYear = "2016";
let userName = "Moroni";
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('#year');
const imageElement = document.getElementById('Makai.jpg');

nameElement.innerHTML = <strong>${fullName}</strong>;
yearElement.textContent = <strong>${currentYear}</strong>;
imageElement.setAttribute('src', Makai.jpg);


console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = new Date();
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error. The following statement calls a function named total that accepts any number of arguments and returns the sum. The returned value is stored in a variable named theTotal. 1-10 are the arguments.

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
	let sum = 0;
	for (let aNumber of theNumbers) {
		sum += aNumber * 1; // Why do we use * 1? It implicitly converts a string to a number.
	}
	return sum
}
