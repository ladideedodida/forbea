const envelope = document.getElementById("envelope");
const envelopeSection = document.getElementById("envelopeSection");
const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const enterBtn = document.getElementById("enterBtn");
const letterContainer = document.getElementById("letterContainer");
const letter1 = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");
const music = document.getElementById("bgMusic");
const errorMsg = document.getElementById("errorMsg");

const PASSWORD = "mahika";

let currentPage = 1;

/* envelope click */
envelope.addEventListener("click", () => {
  envelopeSection.style.opacity = "0";
  setTimeout(() => {
    passwordScreen.classList.remove("hidden");
  }, 400);
});

/* password */
enterBtn.addEventListener("click", checkPassword);
passwordInput.addEventListener("keydown", e => {
  if (e.key === "Enter") checkPassword();
});

function checkPassword() {
  if (passwordInput.value.toLowerCase() === PASSWORD) {
    passwordScreen.classList.add("hidden");
    fadeInMusic();
    letterContainer.classList.add("open");
  } else {
    errorMsg.textContent = "try again 💭";
  }
}

/* fade music */
function fadeInMusic() {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.05;
    music.volume = vol;
    if (vol >= 1) clearInterval(fade);
  }, 100);
}

/* toggle pages (forward + back) */
letterContainer.addEventListener("click", () => {
  if (currentPage === 1) {
    letter1.classList.add("hideFirst");
    letter2.classList.remove("hiddenPage");
    letter2.classList.add("showSecond");
    currentPage = 2;
  } else {
    letter2.classList.remove("showSecond");
    letter2.classList.add("hiddenPage");
    letter1.classList.remove("hideFirst");
    letter1.classList.add("showFirst");
    currentPage = 1;
  }
});