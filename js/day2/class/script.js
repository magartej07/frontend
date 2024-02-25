// let greeting = "hello";
// let name = "john";
// let message = greeting +" " + name;

// console.log(message);


// function
function sayHello(){
    console.log("hello")
}
sayHello()

// arrow function
const sayHello2 = () => {
    console.log("hello2")
}
sayHello2()

// function with parameter
function sayHelloTo(name){
    console.log(`HELLO ${name}`)
}
sayHelloTo("Hari")

// Template string  string interpolation backtick used

let greeting = "hello";
let name = "john";
let message = `${greeting} ${name}`;

console.log(message);


// srting properties and method
let string = "hello world!"
// length
console.log(string.length);
// to uppercase
console.log(string.toUpperCase());
// to lowercase
console.log(string.toLowerCase());
// charAt{}
console.log(string[4]);
console.log(string.charAt(4));
// substring
console.log(string.substring(0,7));


// array and its method and properties
let fruit = ["apple", "ball", "cat","dog"];
// length
console.log(fruit.length)
// push last ma add hunxa
fruit.push("pear");
console.log(fruit)
// pop last ko hatau xa
fruit.pop();
console.log(fruit);
// unshift first ma add hunxa
fruit.unshift("cow");
console.log(fruit)
// shift first ko hatau xa
fruit.shift();
console.log(fruit)
// indexOf() 
console.log(fruit.indexOf("ball"))
// splice()
fruit.splice(1,2)
console.log(fruit)
fruit.splice(1,0)
console.log(fruit)
fruit.splice(1,0, "banana", "orange")
console.log(fruit)
// concat()
let vegetables = ["potato", "tomato", "onion"]
let fruitAndVegetable = fruit.concat(vegetables)
console.log(fruitAndVegetable)
// slice()
let fruitCopy = fruit.slice(1,4)
console.log(fruitCopy)
// sort
fruit.sort();
console.log(fruit)
const arr2 = [1,11,2,22]
arr2.sort() // [1, 11, 14, 2, 22, 3, 5]
console.log(arr2)
arr2.sort((a, b) => a - b) // [1, 2, 3, 5, 11, 14, 22]
console.log(arr2)
arr2.sort((a, b) => b - a) // [22, 14, 11, 5, 3, 2, 1]
console.log(arr2)
// reverse()
fruit.reverse() // ["orange", "mango", "banana", "apple"]