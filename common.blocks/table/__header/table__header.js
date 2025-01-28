const headerVeryLow = document.getElementById("VeryLow");
const headerLow = document.getElementById("Low");
const headerMiddle = document.getElementById("Middle");
const headerHight = document.getElementById("Hight");
const headerVeryHight = document.getElementById("VeryHight");
const headerCritical = document.getElementById("Critical");

function getScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return { width, height };
}

function handleResize() {
  const screenSize = getScreenSize();

  if (screenSize.width <= 520){
    headerVeryLow.textContent = "Оч. низ.";
    headerLow.textContent = "Низ.";
    headerMiddle.textContent = "Сред.";
    headerHight.textContent = "Выс.";
    headerVeryHight.textContent = "Оч. выс.";
    headerCritical.textContent = "Крит.";
  }
  else{
    headerVeryLow.textContent = "Очень низкий";
    headerLow.textContent = "Низкий";
    headerMiddle.textContent = "Средний";
    headerHight.textContent = "Высокий";
    headerVeryHight.textContent = "Очень высокий";
    headerCritical.textContent = "Критический";
  }
}

window.addEventListener("resize", handleResize);

handleResize();

