const pastryButtons = document.querySelectorAll(".hot");

pastryButtons.forEach((button) => {
  let tappedOnce = false;

  button.addEventListener("click", () => {
    const biteClass = button.dataset.bite;
    const biteImage = document.querySelector("." + biteClass);

    if (!biteImage) {
      console.log("No bite image found for:", biteClass);
      return;
    }

    if (window.innerWidth <= 768 && !tappedOnce) {
      button.classList.add("show-tag");
      tappedOnce = true;
      return;
    }

    biteImage.classList.toggle("show");
  });
});

const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");

music.volume = 0.5;

window.addEventListener("load", () => {
  music.play().catch(() => {
    console.log("Autoplay was blocked by the browser.");
  });
});

playBtn.addEventListener("click", () => {
  music.muted = false;
  music.play();
});

muteBtn.addEventListener("click", () => {
  music.muted = true;
});