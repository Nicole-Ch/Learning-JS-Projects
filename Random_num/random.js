const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("label1");
const Label2 = document.getElementById("label2");
const Label3 = document.getElementById("label3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max);
    randomNum2 = Math.floor(Math.random() * max);
    randomNum3 = Math.floor(Math.random() * max);
    Label1.textContent = randomNum1
    Label2.textContent = randomNum2
    Label3.textContent = randomNum3
}
