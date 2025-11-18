/* console.log(`Hello`);
console.log(`Hello`);

window.alert(`This is an alert`);
console.log(`I like pizza`);

document.getElementById('myH1').textContent = `Hello`;
document.getElementById('myP').textContent = `I like Pizza`; */


/*********START 2 */
//Variable
/* let age = 25;
let price = 10.99;
let gpa = 3.8
let fiestName = "Nicole";
let online = true;

console.log(typeof age)
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Bro is online: ${online}`);


let fullName = "Nicole Nereah"
let age1 = 25;
let isStudent = false

document.getElementById('P1').textContent = `Your name is ${fullName}`;
document.getElementById('P2').textContent = `You are ${age} years old`;
document.getElementById('P3').textContent = `Enrolled: ${isStudent}`; */

/*****FINISH 2 */


/*****START 3 */
//Arithmetic operators
/* let students = 30;
students = students + 1;
students = students - 1;
students = students * 1;
students = students / 1;
students = students ** 1;
let extreStudents = students % 3; */

//console.log(students);
/*****FINISH 3 */


//*********START 4 **/
//How to accept user input
//Easy way
/* let username;

username = window.prompt('Whats your username? ');

//usermame 
console.log(username); */

//Professional way
/* document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById('myText').value;
    //console.log(username);
    document.getElementById('myH12').textContent = `Hello ${username}`;
} */

/***** FINISH 4*/

/*****START 5 */
//type Conversion
/* let age = window.prompt('How old are you?');
age = Number(age)
age += 1;
console.log(age); */
/***** FINISH 5*/




/*****START 6 */
//const variable

/* const pi = 3.14159;
let radius;
let circumference;


document.getElementById('mySubmit2').onclick = function(){
      radius = document.getElementById('myText2').value;
      radius = Number(radius);
      circumference = 2 * pi * radius ;
      document.getElementById('myH3').textContent = circumference + 'cm'


} */
/****FINISH 6 */



/*****START 7 */

//Math object

/* let x = 8.9;
let y = 2;
let z;

z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);
z = Math.trunc(x);
z = Math.pow(x);
z = Math.sqrt(x);
z = Math.log(x);

let max = Math.max(x,y,z);


console.log(z); */

/****FINISH 7 */



/****START 8 */
//IF STATEMENTS

const mytext3 = document.getElementById("mytext3");
const mySubmit3 = document.getElementById("mySubmit3");
const resultElement = document.getElementById("resultElement");
let age ;


mySubmit3.onclick = function(){
    age = mytext3.value;
    age = Number(age);

     if(age >=100){
            
            resultElement.textContent = `You are TOO Old to vote physically`;
        }else if(age == 0){
            
            resultElement.textContent = `You cant.You were just born`;
        }else if(age >= 18){
            
            resultElement.textContent = `You are old enough to vote`;

        }else if(age < 0){
            resultElement.textContent = `Your age cant be below zero`;

        }
        else{
            
            resultElement.textContent = `You must be 18+ to vote`
        }
}
/****FINISH 8 */



/* et age2;
const resultElement2 = document.getElementById("resultElement2");

document.getElementById("mySubmit4").onclick = function(){
    age2 = document.getElementById("mytext4").value;
    age2 = Number(age2)
    if (age2 >= 18){
        resultElement2.textContent = `You are an Adult`;
    }  else{
        resultElement2.textContent = `You are still children`;
    } 
    
} */


//string slicing

const fullName = "Bro Code"

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4,8);
console.log(firstName);
console.log(lastName);



//NO METHOD CHAINING
/* let username = window.prompt("Enter your username: ");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;

console.log(username);
 */



//METHOD CHAINING
/* username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username); */


//STRING EQUALLY OPERATOR

const PI = 3.14;

if(PI === "3.14"){
    console.log("That is Pi");
}
else{
     console.log("That is not Pi");
}


//WHILE LOOP

/* let loggedin = false;
let usermame;
let password;

while(!loggedin){
    username = window.prompt('Enter your username: ');
    password = window.prompt('Enter your password: ');

    if(username === "myUsername" && password === "myPassword"){
        loggedin = true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid credentials");
    }
} */

//DO WHILE
/* do{
    username = window.prompt('Enter your username: ');
    password = window.prompt('Enter your password: ');

    if(username === "myUsername" && password === "myPassword"){
        loggedin = true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid credentials");
    }
}while(!loggedin) */


//FOR LOOP

for(let i = 0; i<10; i++){
    console.log(i);
}


//ARRAYS

let fruits = ['apple', 'orange', 'banana'];

fruits.push('coconut');

for(let i =0 ; i< fruits.length; i++){
    console.log(fruits[i]);
}

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//spread operator
let numbers = [1,2,3,4,5];
let maximum =  Math.max(...numbers);

console.log(maximum);

let username = 'Nicole Chao';
let letters = [...username].join('-')

console.log(letters);

//Rest parameter

function openFridge(...foods){
    console.log(foods)
}
const food1 = 'pizza';
const food2 = 'hamburger';
const food3 = 'hotdog';
const food4 = 'sushi';

openFridge(food1, food2, food3, food4);

//Example 2
function combineString(...strings){
    return strings.join(" ");
}

const fullname3 = combineString("Mr.", "Alexandar", "Hamilton", "III");
console.log(fullname3);





async function demo() {
  console.log("A: before await");
  const value = await new Promise(resolve => setTimeout(() => resolve(42), 2000));
  console.log("B: after await, value =", value);
}
demo();
console.log("C: this runs while demo is waiting");
