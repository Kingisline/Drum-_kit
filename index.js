// jshint esversion:6

// Detecting Button press

var numberOFDrumButtons  = document.querySelectorAll(".drum").length; 

for (var i=0; i<numberOFDrumButtons; i++) {   

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {   
       
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);  // click press innerHTMl

        buttonAnimation(buttonInnerHTML); //  Button animation 

    });

}

// detecting Keyboard press


document.addEventListener("keypress", function(event){

    makeSound(event.key);  // sound from Keyboard

    buttonAnimation(event.key); // button animation

});




function makeSound(key) {



    switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "a":
           var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;

        case "s":
           var tom3 = new Audio("sounds/tom-3.mp3")
           tom3.play()
           break;

        case "d":
           var tom4 = new Audio("sounds/tom-4.mp3")
           tom4.play()
           break;

        case "j":
           var kick = new Audio("sounds/kick-bass.mp3")
           kick.play()
           break;

        case "k":
           var crash = new Audio("sounds/crash.mp3")
           crash.play()
           break;

        case "l":
           var snare = new Audio("sounds/snare.mp3")
           snare.play()
           break;

           default: console.log(butttonInnderHTML);


}
}

// button aniamtion from css .pressed

function buttonAnimation(currentkey) {

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);                                            // 100 for 0.01 s
}



    
       