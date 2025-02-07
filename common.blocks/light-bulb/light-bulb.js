const bulbImg_On = "./images/active-light-bulb-2.png";
const bulbImg_Off = "./images/light-bulb-2.png";

const videos = document.getElementsByClassName("background-video");
const backgroundVideo = videos[0];

const bulb = document.getElementById("light-bulb");
const bulbGlow = bulb.children[0];
const bulbIcon = bulb.children[1];

let isActive = false;

init();

function init(){
  preloadImage("./images/light-bulb-2.png");
  preloadImage("./images/active-light-bulb-2.png");
  
  bulb.addEventListener("click", changeBulbStatus);
}

function changeBulbStatus() {
  if (isActive) {
    bulbGlow.style.display = "none";
    bulbIcon.src = bulbImg_Off;
    backgroundVideo.style.display = "none";
  } else {
    bulbGlow.style.display = "block";
    bulbIcon.src = bulbImg_On;
    backgroundVideo.style.display = "block";
  }

  isActive = !isActive;
}

function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
  });
}
