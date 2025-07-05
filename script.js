        // Sliders

let sliderLeft =document.getElementById("left-slider");
let sliderRight =document.getElementById("right-slider");
let imageSlider =document.querySelectorAll(".img-items");
console.log(imageSlider.length-1);

let startSlider =0;
let endslider = (imageSlider.length-1)*100;

sliderLeft.addEventListener("click",()=>{
    if(startSlider <0){
        startSlider= startSlider + 100;

    }

    imageSlider.forEach(element => {
        element.style.transform=`translateX(${startSlider}%)`;
    });

});

sliderRight.addEventListener("click",()=>{
    if(startSlider >= -endslider + 100){
        startSlider= startSlider - 100;

    }

    imageSlider.forEach(element => {
        element.style.transform=`translateX(${startSlider}%)`;
    });
    
    
});

