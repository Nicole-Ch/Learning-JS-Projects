const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit4 = document.getElementById("mySubmit4");
const subResults = document.getElementById("subResults");
const paymentResult = document.getElementById("paymentResult");


mySubmit4.onclick = function(){

    if(myCheckbox.checked){
          subResults.textContent = `You are subscribed!`;
    }
    else{
        subResults.textContent = `You are not subscribed!`;
    }

    if(visaBtn.checked){
         paymentResult.textContent = `You are paying with Visa!`;
    }else if(masterCardBtn.checked){
           paymentResult.textContent = `You are paying with MasterCard!`;
    }else if(payPalBtn.checked){
         paymentResult.textContent = `You are paying with PayPal!`;

    }else{
         paymentResult.textContent = `You must select a payment type!`;
    }
}
