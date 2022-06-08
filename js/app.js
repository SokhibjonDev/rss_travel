const slider = document.querySelectorAll(".slide");

for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("click", () => {
    if(slider[i].className !== 'active_slide'){
        for (let j = 0; j < slider.length; j++) {
            slider[j].classList.remove('active_slide')            
        }
        slider[i].classList.add('active_slide')
    }
  });
}
