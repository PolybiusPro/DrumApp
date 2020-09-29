// Detect Button Press
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //Selects inner HTML of button and adds it to variable
    var buttonInnerHtml = this.innerHTML;

    //Passes which key when button is clicked to makeSound()
    makeSound(buttonInnerHtml);

    //Passes which key when button is clicked to buttonAnimation()
    buttonAnimation(buttonInnerHtml);

  });
}

// Detect Keyboard Press
document.addEventListener("keydown", function(event){

  //Passes which key when keyboard is pressed to makeSound()
  makeSound(event.key);

  //Passes which key when keyboard is pressed to buttonAnimation()
  buttonAnimation(event.key);
})

//Function that switches what happens depending on which key is pressed
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    break;
    case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    break;
    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;
    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
    case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;
    default: console.log(buttonInnerHtml);

  }
}

//Button Animation
function buttonAnimation(currentKey) {
  //Creates a variable called active button for the class of the current key
  var activeButton = document.querySelector("." + currentKey);

  //adds the pressed class to the button
  activeButton.classList.add("pressed");

  //Timeout function for removing the class pressed after 100ms
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
