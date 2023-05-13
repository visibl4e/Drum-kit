function soundPlusAnimation(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function soundMinusAnimation(event) {
  const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
}

// function removeTransition(event) {
//   console.log(event.propertyName);
//   if (event.propertyName !== "transform") return;
//   this.classList.remove("playing");
// }
// const keys = document.querySelectorAll("key");
// keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", soundPlusAnimation);
window.addEventListener("keyup", soundMinusAnimation);
