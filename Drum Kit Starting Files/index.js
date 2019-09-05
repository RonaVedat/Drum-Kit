const buttons = document.querySelectorAll(".drum");
let i = 0;


// Looping through buttons which have drum class

for (i; i < buttons.length; i += 1) {
  document.querySelectorAll(".drum")[i].addEventListener("onclick", function () {
    let buttonInner = this.innerHTML;
    createSound(buttonInner);
    animateButton(buttonInner);
  });
}

// Keyboard Listener

document.addEventListener("keypress", function (event) {
  createSound(event.key);
  animateButton(event.key);
});


// Function Declarations

function createSound (key) {
  switch (key) {
    case 'w':
      const tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play ();
      break;
    case 'a':
      const tom2 = new Audio ("sounds/tom-2.mp3");
      tom2.play ();
      break;
    case 's':
      const tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play ();
      break;
    case 'd':
      const tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play ();
      break;
    case 'j':
      const crash = new Audio ("sounds/crash.mp3");
      crash.play ();
      break;
    case 'k':
      const kick = new Audio ("sounds/kick-bass.mp3");
      kick.play ();
      break;
    case 'l':
      const snare = new Audio ("sounds/snare.mp3");
      snare.play ();
      break;
    default:
      break;
  }
}

function animateButton (currentKey) {
  const activeButton = document.querySelector ("." + currentKey);

  if (activeButton) {
    activeButton.classList.add ("pressed");

    setTimeout (() => {
      activeButton.classList.toggle ("pressed");
    }, 100);
  }
}
