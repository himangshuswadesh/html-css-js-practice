// foreach
const array1 = ['a', 'b', 'c'];
console.log({ array1 });
array1.forEach(element => console.log(element));

// map method
const array = [1, 4, 9, 16];

console.log({ array });
const newArray = array.map(value => value * 2);
console.log({ newArray });

// function
function myFunc() {
	console.log('hello world');
}
myFunc();

function add(a, b) {
	console.log(a + b);
}

add(2, 5);
add(2, 15);
