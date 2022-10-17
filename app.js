const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => playNote(button));
});

function playNote(button) {
  const playAudio = document.getElementById(button.dataset.note);
  playAudio.currentTime = 0;
  playAudio.play();
}
