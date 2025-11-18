//STATIC KEYWORD

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius *2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));

//Example2

class User{
    static UserCount = 0;

    constructor(username){
        this.username = username;
        User.UserCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.UserCount} users online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Ashley");
const user2 = new User("Talia");
user1.sayHello();

console.log(user2.username);
console.log(User.UserCount);
User.getUserCount();

//INHERITANCE
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = 'Rabbit';
    
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = 'Fish';

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

const rabbit = new Rabbit();
const  fish = new Fish();

console.log(rabbit.alive);
rabbit.eat();
rabbit.run();
fish.sleep();

//SUPER KEYWORD

class Animal2{
      constructor(name, age){
         this.name = name;
         this.age = age;
      }

      move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
      }
}
class Rabbit2 extends Animal2{
    
    constructor(name,age,runSpeed){
        super(name,age);
        
        this.runSpeed = runSpeed;
    }

     run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
   
}

class Fish2 extends Animal2{
    constructor(name,age,swimSpeed){
        super(name,age);
        
        this.swimSpeed = swimSpeed;
    }
    
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
    
}

const rabbit2 = new Rabbit2("rabbit", 1, 25);
const fish2 = new Fish2("fish", 2, 12);

console.log(fish2.name);
rabbit2.run();


//GETTER AND SETTER
class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
       if (newWidth > 0){
        this._width = newWidth;
       }
       else{
        console.error('Width must be a positive number');
       }
    }

    set height(newHeight){
       if (newHeight > 0){
        this._height = newHeight;
       }
       else{
        console.error('Height must be a positive number');
       }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height
    }
}

const rectangle = new Rectangle(3,4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.height);
console.log(rectangle.width);

// DESTRUCTURING 
//Example 1 = swap 2 elements in an array
const colors = ['red', 'green', 'blue', 'black','white'];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

//Example 2 = Assign array elements to variables
const colors2 = ['red', 'green', 'blue', 'black','white'];
const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors2;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

//Example 3 = Extract values from objects

const person1 = {
    firstName : "Spongebob",
    secondName: "Squarepants",
    age : 30,
    job :"Fry Cook",
}

const person2 = {
    firstName : "Patrick",
    secondName: "Star",
    age : 34,
    
}

const {firstName, secondName, age, job} = person1;

console.log(firstName);
console.log(secondName);
console.log(age);

//NESTED OBJECTS

const student = {
    fullName : "Imani",
    age: 30,
    isStudent : true,
    hobbies: ["Karate", "Jellyfishing", "cooking"],
    address:{
        street: "124 side street",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
} 

//looping inside a nested object
for(const property in student.address){
    console.log(student.address[property]);

}

console.log(student.fullName);
console.log(student.hobbies[1]);
console.log(student.address.street);

//Example 2 - creating a class that utilizes nested objects
class Human{
    constructor(name,age,...address){
          this.name = name;
          this.age = age;
          this.address = new Address(...address)
    }
}
class Address{
     
    constructor(street, city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const human1 = new Human("William", 30, "124 Street" , "Bikini City" , "India");
const human2 = new Human("Talia", 20, "124 Street" , "Bikini City" , "India");
const human3 = new Human("Ashley", 33, "124 Street" , "Bikini City" , "India");

console.log(human1.address);
console.log(human2.address.country);

//ARRAY OF OBJECTS

const fruits = [{name:"apple", color:"red",calories:95},
                {name:"orange", color:"orange",calories:45},
                {name:"banana", color:"yellow",calories:105},
                {name:"pineapple", color:"yellow",calories:37}];

                fruits.push({name:"grapes", color:"purple",calories:37});

fruits.forEach(fruits => console.log(fruits.color));  
fruits.sort((a,b) => a.calories - b.calories); //sorting as done below              

console.log(fruits[0].name);
console.log(fruits);
                  

//SORTING AN ARRAY

let numbers = [1,10,2,9,3,8,4,7,5,6];

numbers.sort((a,b) => a-b);
console.log(numbers);

//DATE OBJECTS

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
console.log(date);
console.log(month);
console.log(year);

//CLOSURE

function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

//Example2

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
      return score;
    }

    return {increaseScore,decreaseScore,getScore}; //referencing our functions
}
const game =  createGame();
game.increaseScore(8);
game.decreaseScore(6)
console.log(`The finale score is ${game.getScore()}pts`);


//SETTIMEOUT()
function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello,3000);

