


function rollDice(){
    const numofDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i=0; i < numofDice; i++){
        const value =Math.floor(Math.random() * 6) + 1; 
        //Math.random() returns a floating number in the range [0, 1) (0 inclusive, 1 exclusive).
         // Multiplying by 6 gives a number in [0, 6). + 1 shifts the range to 1..6
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice ${value}">`);//adds that string to the images array.
    }

    diceResult.textContent = `dice: ${values.join(`, `)}`;

    diceImages.innerHTML = images.join('');
}