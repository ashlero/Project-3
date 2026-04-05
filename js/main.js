
const pastries = document.querySelectorAll(".clickable");
const resetBtn = document.getElementById("resetBtn");

let bittenCount = 0;

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

    if (isBitten) return;

    image.src = biteImage;
    isBitten = true;
    pastry.classList.add("bitten");
    bittenCount++;

    if (bittenCount === pastries.length) {
      resetBtn.classList.add("show");
    }
  });

  pastry.resetPastry = () => {
    image.src = defaultImage;
    isBitten = false;
    firstTap = true;
    pastry.classList.remove("bitten", "show-tag");
  };
});

resetBtn.addEventListener("click", () => {
  pastries.forEach((pastry) => {
    pastry.resetPastry();
  });

  bittenCount = 0;
  resetBtn.classList.remove("show");
});

const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

toggleBtn.classList.add("muted");

toggleBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      toggleBtn.classList.remove("muted");
    } else {
      music.pause();
      toggleBtn.classList.add("muted");
    }
  } catch (error) {
    console.log("Playback failed:", error);
  }
});

const title = document.querySelector(".bounce-title");

title.innerHTML = title.textContent
  .split("")
  .map((letter, i, arr) => {
    const isLast = i === arr.length - 1;
    const delay = isLast ? (i * 0.08) + 0.25 : i * 0.08;

    return `<span style="animation-delay:${delay}s">${
      letter === " " ? "&nbsp;" : letter
    }</span>`;
  })
  .join("");