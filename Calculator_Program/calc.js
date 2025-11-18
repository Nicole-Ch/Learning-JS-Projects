const display = document.getElementById('display');


function appendToDisplay(input){  //appendToDisplay takes a string (for example '7' or '+') and concatenates it to the current display.value.
    display.value += input;
}

function clearDisplay(){
     display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
  
}

//eval returns a number and you store that number back as the display.value