const videos = document.getElementsByClassName("background-video");
const backgroundVideo = videos[0];

const bulb = document.getElementById("light-bulb");
const bulbGlow = bulb.children[0];
const bulbIcon = bulb.children[1];

let isActive = false;

bulb.addEventListener("click", changeBulbStatus);

function changeBulbStatus() {
  if (isActive) {
    bulbGlow.style.display = "none";
    bulbIcon.src = "./images/light-bulb-2.png";
    backgroundVideo.style.display = "none";
  } else {
    bulbGlow.style.display = "block";
    bulbIcon.src = "./images/active-light-bulb-2.png";
    backgroundVideo.style.display = "block";
  }

  isActive = !isActive;
}
