let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button =>{
    button.style.backgroundColor = "tomato";
    button.textContent += "😊";
})

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "yellow";
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsl(9, 57%, 40%)";
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
       event.target.style.backgroundColor = "tomato";
       button.classList.add("enabled");
    })
})

//ADD AN ELEMENT
const newButton = document.createElement("button");
newButton.textContent = "Button 5😁";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

//CLASS LIST
const myH1 = document.getElementById("myH1");
myH1.classList.add("enabled");



//PROMISES

function walkDog(){
    
    return new Promise((resolve, reject) =>{
    setTimeout(() =>{

        const walkedDog = true;
        if(walkedDog){
              resolve("Take out the dog");
        }else{
            reject("You didn't take the dog out")
        }
        
    } , 1500);

    });
}

function cleanKitchen(){
    
    return new Promise((resolve, reject) =>{
     setTimeout(() =>{

        const cleanedKitchen = true;
        if(cleanedKitchen){
              resolve("Clean the kitchen");
        }else{
            reject("You didn't clean the kitchen")
        }
       
        
    } , 1500);

    })
}
function takeoutTrash(){
    

    return new Promise((resolve, reject) =>{
    setTimeout(() =>{

       const tookOutTrash = true;
        if(tookOutTrash){
              resolve("Take out the trash");
        }else{
            reject("You didn't take the trash out")
        }
        
    } , 1500);
    })
}

//CALLBACK HELL
/* walkDog(() =>{
    cleanKitchen(() => {
        takeoutTrash(() => {
            console.log("You finished all the chores!");
        })
    })
}) */

//using promises
    /* walkDog().then(value => {console.log(value); return cleanKitchen()})
             .then(value => {console.log(value); return takeoutTrash()})
             .then(value => {console.log(value); console.log("You finished all the chores")})
             .catch(error => console.error(error)); */

 //USING ASYNC/AWAIT
 async function dochores(){

    try{
            const walkdogresult = await walkDog();
            console.log(walkdogresult);

            const cleankitchenResult = await cleanKitchen();
            console.log(cleankitchenResult);

            const takeTrashResult = await takeoutTrash();
            console.log(takeTrashResult);

            console.log("You finished all the chores");
    }
    catch(error){
         console.error(error);
    }
 }            

 dochores();



 //FETCH IN JSON
 fetch("people.json")
      .then(Response => Response.json())
      .then(values => values.forEach(value => console.log(value)))