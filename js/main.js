const pastries = document.querySelectorAll(".clickable");

pastries.forEach((pastry) => {
  const image = pastry.querySelector("img");
  const defaultImage = pastry.dataset.default;
  const biteImage = pastry.dataset.bite;

  let isBitten = false;
  let firstTap = true;

  pastry.addEventListener("click", () => {
    const isTouchScreen = window.innerWidth <= 768;

    if (isTouchScreen && firstTap) {
      pastry.classList.add("show-tag");
      firstTap = false;
      return;
    }

    if (isBitten) {
      image.src = defaultImage;
      isBitten = false;
    } else {
      image.src = biteImage;
      isBitten = true;
    }
  });
});

document.querySelectorAll(".pastry").forEach((pastry) => {
  const biteSrc = pastry.dataset.bite;

  pastry.addEventListener("click", () => {
    if (pastry.classList.contains("bitten")) return;

    pastry.src = biteSrc;
    pastry.classList.add("bitten");
  });
});

const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

toggleBtn.addEventListener("click", () => {

  if (music.paused) {
    music.play();
    toggleBtn.classList.remove("muted");
  } else {
    music.pause();
    toggleBtn.classList.add("muted");
  }

});