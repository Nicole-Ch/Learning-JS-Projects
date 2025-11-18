const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider)
function initializeSlider(){
    if(slides.length > 0){
         slides[slideIndex].classList.add("displaySlide");
         intervalid = setInterval(nextSlide, 5000); //setInterval calls nextSlide every 5000 milliseconds (5 seconds).
                                                    //It returns an id that we store in intervalid so we can stop the timer later with clearInterval(intervalid).
    }
   
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
    slideIndex = slides.length = 1;
}
     slides.forEach(slide => {
        slide.classList.remove("displaySlide");
     })
     slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalid);
     slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}