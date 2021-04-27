"use strict";

// Selectors
const partyButton = document.querySelector(".party-button");
const displayTime = document.querySelector(".clock");
const dudePhotos = document.getElementById("dude-photos");
// different times selectors
const wakeUpTimeSelector = document.getElementById("wakeUpTime");
const studyTimeSelector = document.getElementById("studyTime");
const workTimeSelector = document.getElementById("workTime");

const currentTime = function () {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  let time = h + " : " + m + " : " + s;
  // console.log(time);

  displayTime.innerHTML = time;
};

currentTime();
const loopTime = setInterval(currentTime, 1000);

///////////////////////////////////////////////////////////
// Changing the meme guy picture as needed (when the time of a certain task comes)
let wakeUpTime = 8;
let studyTime = 10;
let workTime = 14;
let partyTime = 0;

const changingPicture = function () {
  const now = new Date().getHours();

  if (partyTime == 1) {
    dudePhotos.src = "pictures/party.png";
  } else if (wakeUpTime == now) {
    dudePhotos.src = "pictures/morning.png";
  } else if (studyTime == now) {
    dudePhotos.src = "pictures/study.png";
  } else if (workTime == now) {
    dudePhotos.src = "pictures/work.png";
  } else {
    dudePhotos.src = "pictures/kalm.png";
  }
};
changingPicture();

////////////////////////////////////
// activate different time selectors
// wake up time
const wakeUpTimeChange = function () {
  wakeUpTime = wakeUpTimeSelector.value;
  changingPicture();
};

wakeUpTimeSelector.addEventListener("change", wakeUpTimeChange);

// study time
const studyTimeChange = function () {
  studyTime = studyTimeSelector.value;
  changingPicture();
};

studyTimeSelector.addEventListener("change", studyTimeChange);

// work time
const workTimeChange = function () {
  workTime = workTimeSelector.value;
  changingPicture();
};

workTimeSelector.addEventListener("change", workTimeChange);
////////////////////////////////////

// Party time mode
const switchPartyMode = function () {
  if (partyTime == 0) {
    partyTime++;
    partyButton.textContent = "End the party";
    partyButton.className = partyButton.className + " selected";
    changingPicture();
  } else {
    partyTime--;
    partyButton.textContent = "Let's go party !!!";
    partyButton.classList.remove("selected");
    changingPicture();
  }
};
partyButton.addEventListener("click", switchPartyMode);
