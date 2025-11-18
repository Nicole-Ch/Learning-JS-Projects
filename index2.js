//CALLBACK

hello(wait);

function hello(callback){
    console.log("Hello!");
    callback(); //calling the callback
}

function wait(){
    console.log("Wait");
}

function goodbye(){
    console.log("Goodbye!");
}

//Example2

sum(displaypage, 7,8);
function sum(callback, x,y ){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displaypage(result){
   document.getElementById("myH1").textContent = result;
}


//FOR EACH()
let numbers = [1,2,3,4,5];

numbers.forEach(triple);
numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}
function display(element){
    console.log(element);
}

//Example2

let fruits = ["apples", "bananas", "coconut","grapes"];


fruits.forEach(capitalize);
fruits.forEach(display);

function UpperCase(element,index,array){
    array[index] = element.toUpperCase();
    

}

function capitalize(element, index, array){
    array[index]  = element.charAt(0).toUpperCase() + element.slice(1);
   
}

function display(element){
    console.log(element);
}

//.map()

const numbers2 = [1,2,3,4,5];
const squares = numbers2.map(square);
const cubes =numbers2.map(cube);

console.log(cubes);


function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

//filter()

let numbers3 = [1,2,3,4,5,6,7];
let evenNums = numbers3.filter(isEven);
let oddNums = numbers3.filter(isOdd);

console.log(oddNums);

function isEven(element){
    return element % 2 ===0;
}

function isOdd(element){
    return element % 2 !==0;
}

//reduce()

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`)
function sum(accumulator, element){
    return accumulator + element;

}

//Example2
const grades = [75,50,90,80,65,95];
const maximum = grades.reduce(getmax);

console.log(maximum);

function getmax(accumulator,element){
    return Math.max(accumulator, element);
}

//FUNCTION EXPRESSIONS
const hello2 = function(){
    console.log("Hello!");
}
hello2();

//Example2

const numbers4 = [1,2,3,4,5,6];
const squares2 = numbers4.map( function(element){
                                return Math.pow(element, 2);
                                });

console.log(squares2);

//ARROW FUNCTIONS
const hello4 = (firstname) => console.log(`Hello ${firstname}!`);


hello4("Nicole");

//Example2

setTimeout( () => console.log("Hello"), 3000);

//Example3

const numbers5 = [1,2,3,4,5,6];
const squares5 = numbers5.map((element)=> Math.pow(element, 2));
console.log(squares5);
            


//OBJECTS

const person ={
    firstname2: "spongebob",
    lastname2: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi!I am Spongebob")},
}

const person2 ={
    firstname2: "Edwin",
    lastname2: "Malia",
    age: 20,
    isEmployed: false,
    sayHello: () => console.log("Hi!I am Malia"),
}
console.log(person.age);
console.log(person2.age);
person.sayHello();
person2.sayHello();

//THIS Keyword
const person3 ={
    firstname2: "Edwin",
    lastname2: "Malia",
    age: 20,
    isEmployed: false,
    favfood: 'pizza',
    sayHello: function(){ console.log(`Hi!I am ${this.lastname2}`)},
    eat: function(){ console.log(`${this.lastname2} is eating ${this.favfood}`)},
}

person3.sayHello();
person3.eat();


//CONSTRUCTOR
function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}

}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camero", 2025, "blue");

console.log(car1.make);
console.log(car2.model);
car1.drive();

//CLASSES
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);

    }

    calculateTotal(salesTax){
        return this.price + (this.price *this.salesTax);
    }
}


const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("Pants", 22.50);

product1.displayProduct();
product2.displayProduct();

const total4 = product1.calculateTotal(salesTax);
console.log(`Total price (with Tax): $${total.toFixed(2)}`);


