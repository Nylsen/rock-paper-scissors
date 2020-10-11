let hasPicked = false;
const picks = ["rock", "paper", "scissors"];
const cpPicks = ["cp-rock", "cp-paper", "cp-scissors"];

const selectBadge = (id) => {
  if (hasPicked) return;
  hasPicked = true;
  let selectedBadge = document.getElementById(id);
  let pickBackground = document.getElementById("pick-bg");
  let pickPlayerTitle = document.getElementsByClassName("pick-title--player")[0];
  let pickComputerTitle = document.getElementsByClassName("pick-title--cp")[0];

  // if (resultTitle) {
  //   resultTitle.innerHTML = "you win";
  // }

  pickBackground.classList.add("hidden");
  let badges = document.getElementsByClassName("badge");
  [].forEach.call(badges, (badge) => {
    badge.classList.remove("selected");
    badge.classList.add("hidden");
  });
  selectedBadge.classList.remove("hidden");
  selectedBadge.classList.add("selected");
  pickPlayerTitle.classList.add("picked");

  setTimeout(() => {
    let cpBadge = document.getElementById(cpPicks[getRandomInt(3)]);
    cpBadge.classList.add("selected");
    pickComputerTitle.classList.add("picked");
    let resultTitle = document.getElementsByClassName("result-zone")[0];
    resultTitle.classList.add("visible");
  }, 600);
};

const playAgain = () => {
  hasPicked = false;
  let pickBackground = document.getElementById("pick-bg");
  let pickPlayerTitle = document.getElementsByClassName("pick-title--player")[0];
  let pickComputerTitle = document.getElementsByClassName("pick-title--cp")[0];
  let resultTitle = document.getElementsByClassName("result-zone")[0];

  resultTitle.classList.remove("visible");
  pickPlayerTitle.classList.remove("picked");
  pickComputerTitle.classList.remove("picked");
  pickBackground.classList.remove("hidden");
  let badges = document.getElementsByClassName("badge");
  [].forEach.call(badges, (badge) => {
    badge.classList.remove("selected");
    badge.classList.remove("hidden");
    badge.classList.remove("picked");
  });
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
