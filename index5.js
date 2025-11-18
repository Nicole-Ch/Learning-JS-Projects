//Asynchronous

function func1(callback){
    setTimeout(() => {console.log("Task 1"); callback()}, 3000);

}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");

}

func1(func2);

//ERROR HANDLING
try{
    console.lag('Hello!');
}
catch(error){
    console.error(error);
}
finally{
    //close files
    //close connections
    //Release Resources
    console.log('This always executes');
}
console.log("We have handled the error now this executes!");

//Example 2
/* try{
      const dividend =Number(window.prompt("Enter a dividend: ")) ;
      const divisor = Number(window.prompt("Enter a divisor: "));

      if (divisor == 0){
        throw new Error("You cant divide by Zero");
      }
      if(isNaN(dividend) || isNaN(divisor)){ //isNaN is a function used to determine whether a value is "Not a Number.
        throw new Error("Values must be a Number");
      }



      const result = dividend/divisor;
      console.log(result);
}
catch(error){
    console.error(error);
} */

//ELEMENT SELECTORS
const myHeading = document.getElementById('my-heading');
myHeading.style.backgroundColor = "yellow";

//getelementbyclassname
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "red";

for(let fruit of fruits){
    fruit.style.backgroundColor = "pink";
}

//getelementbyTagName
const h4Elements = document.getElementsByTagName("h4");
//h4Elements[0].style.backgroundColor = "orange"

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "orange";
}

//DOM NAVIGATION

//-----firselementchild
const element = document.getElementById("vegetables");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

//Example 2
const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement => {
                const firstChild2 = ulElement.firstElementChild;
                firstChild2.style.backgroundColor = "aqua";
})



//ADD AND CHANGE HTML
//step 1 : Create The Element
const newH1 = document.createElement("h1");

//Step 2: Add Attributes/Properties
newH1.textContent = "I Like Pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";

//Step 3: Append Element to DOM
document.body.append(newH1);
document.getElementById("box1").append(newH1);

//Remove HTML Element
document.getElementById("box1").removeChild(newH1);

//Example 2
/* const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); */


//EVENT LISTENER
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


function changeColor(event){
   myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕"
}
myButton.addEventListener("click", changeColor);

function mouseOver(event){
     //event.target.style.backgroundColor = "Yellow";
     myBox.style.backgroundColor = "Yellow";
    myBox.textContent = "Don't do it! 😲";
}

myButton.addEventListener("mouseover",mouseOver );

myButton.addEventListener("mouseout",event => {
     myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😃";
})