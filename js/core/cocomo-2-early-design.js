const B = 0.91;
const A = 2.94;

const KSLOC = document.getElementById("KiloOfSourceLineOfCode");
KSLOC.addEventListener("input", calculateAndDisplayResult);

const PM = document.getElementById("people-month");

const radioButtons = document.getElementsByClassName("table__handler-holder");
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].children[0].addEventListener("click", calculateAndDisplayResult);
}

let effortMultipliers = [];
let scaleFactors = [];

function calculateAndDisplayResult() {
  let effort;
  let size = Number(KSLOC.value);
  let EM = 1;
  let EAF = 1;
  let effortMultipliers = [];

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].children[0].checked == true) {
      if (
        radioButtons[i].children[0].name == "PERS" ||
        radioButtons[i].children[0].name == "PREX" ||
        radioButtons[i].children[0].name == "RCPX" ||
        radioButtons[i].children[0].name == "RUSE" ||
        radioButtons[i].children[0].name == "FCIL"
      ) {
        scaleFactors.push(Number(radioButtons[i].children[1].textContent));
        continue;
      } else {
        effortMultipliers.push(Number(radioButtons[i].children[1].textContent));
        continue;
      }
    }
  }

  for (let i = 0; i < scaleFactors.length; i++) {
    EM *= scaleFactors[i];
  }

  for (let i = 0; i < effortMultipliers.length; i++) {
    EAF *= effortMultipliers[i];
  }

  effort = A + 0.01 * Math.pow(size, B) * EM * EAF;
  PM.textContent = effort.toFixed(2);
}
