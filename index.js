
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0 ; i < numberOfDrumButtons; i++) {
   document.querySelectorAll(".drum")[i].addEventListener('click' , function() {
      this.style.color = "black";
  });
}

  // let audio = new Audio('sounds/tom-1.mp3');
  // audio.play();
