const headerExtraLow = document.getElementsByName("extra-low");
const headerVeryLow = document.getElementsByName("very-low");
const headerLow = document.getElementsByName("low");
const headerMiddle = document.getElementsByName("middle");
const headerHight = document.getElementsByName("hight");
const headerVeryHight = document.getElementsByName("very-hight");
const headerExtraHight = document.getElementsByName("extra-hight");
const headerCritical = document.getElementsByName("critical");

const headersArr = [
  headerExtraLow,
  headerVeryLow,
  headerLow,
  headerMiddle,
  headerHight,
  headerVeryHight,
  headerExtraHight,
  headerCritical,
];

let textIsCompressed = false;

function getScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return { width, height };
}

function handleResize() {
  const screenSize = getScreenSize();

  if (screenSize.width <= 520) {
    updateText("compress");
  } else {
    updateText("decompress");
  }
}

function updateText(state) {
  let messages = [];
  if (state == "compress") {
    messages = [
      "Сверх низ.",
      "Оч. низ.",
      "Низ.",
      "Сред.",
      "Выс.",
      "Оч. выс.",
      "Сверх выс.",
      "Крит.",
    ];
  } else {
    messages = [
      "Сверх низкий",
      "Очень низкий",
      "Низкий",
      "Средний",
      "Высокий",
      "Очень высокий",
      "Сверх высокий",
      "Критический",
    ];
  }

  for (let i = 0; i < headersArr.length; i++) {
    if (headersArr[i] != undefined && headersArr[i] != null)
      headersArr[i].forEach((element) => {
        element.textContent = messages[i];
      });
  }
}

window.addEventListener("resize", handleResize);

handleResize();
