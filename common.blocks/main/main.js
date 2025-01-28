import {
  getOrganicResult,
  getSemiDetachedResult,
  getEmbeddedResult,
} from "../../js/basic-cocomo.js";

import { calculateEffort } from "../../js/intermediate-cocomo.js";

let currentProjectType;
let effortMultipliers = 1;

// const radioButtons = document.getElementsByClassName("table__handler-holder"); cocomo 2
// for (let i = 0; i < radioButtons.length; i++) {
//   radioButtons[i].children[0].addEventListener("click", () => {
//     effortMultipliers = Number(radioButtons[i].children[1].textContent);
//     console.log(calculateEffort(KSLOC.value, A, B, effortMultipliers));
//   });
// }

const radioButtons = document.getElementsByClassName("table__handler-holder");
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].children[0].addEventListener("click", () => {
    effortMultipliers = Number(radioButtons[i].children[1].textContent);
    let result = calculateEffort(KSLOC.value, effortMultipliers, currentProjectType);
    PM.textContent = Number(result.toFixed(2)); //todo
    // TM.textContent = Number(result.effort.toFixed(2));
    // console.log(calculateEffort(KSLOC.value, effortMultipliers, currentProjectType));
  });
}

const KSLOC = document.getElementById("KiloOfSourceLineOfCode");
KSLOC.addEventListener("change", calculateResult);

const projectTypeList = document.getElementById("ProjectType");
projectTypeList.addEventListener("change", calculateResult);

const TM = document.getElementById("TimeAtMonth");
const PM = document.getElementById("People-Month");

function calculateResult() {
  let result;
  currentProjectType = projectTypeList.value;

  switch (currentProjectType) {
    case "Organic":
      result = getOrganicResult(KSLOC.value);
      break;
    case "Semidetached":
      result = getSemiDetachedResult(KSLOC.value);
      break;
    case "Embedded":
      result = getEmbeddedResult(KSLOC.value);
      break;
  }

  TM.textContent = Number(result.time.toFixed(2));
  PM.textContent = Number(result.effort.toFixed(2));
}
