const B = 0.91;
const preliminaryAssessment = 2.94;
const detailedAssessment = 2.45;
// const effortMultiplier = [(preliminaryAssessment = 7), (detailedAssessment = 17)];

let size;
let scaleFactors;
let effortAdjustmentFactor;
//todo
// const KSLOC = document.getElementById("KiloOfSourceLineOfCode");
// KSLOC.addEventListener("change", calculateAndDisplayResult);

// const projectTypeList = document.getElementById("ProjectType");
// projectTypeList.addEventListener("change", calculateAndDisplayResult);

// const TM = document.getElementById("TimeAtMonth");
// const PM = document.getElementById("People-Month");

// const radioButtons = document.getElementsByName(""); //todo

// let currentProjectType = projectTypeList.value;
// let effortMultipliers = [];

// function calculateAndDisplayResult() {
//   let effort;
//   let size = Number(KSLOC.value);
//   let multiplier = 1;
//   let effortMultipliers = [];

//   for (let i = 0; i < radioButtons.length; i++) {
//     if (radioButtons[i].children[0].checked == true) {
//       effortMultipliers.push(Number(radioButtons[i].children[1].textContent));
//       continue;
//     }
//   }

//   for (let i = 0; i < effortMultipliers.length; i++) {
//     multiplier *= effortMultipliers[i];
//   }

//   switch (projectTypeList.value) {
//     case "Organic":
//       effort = multiplier * organicCoefficients.a * Math.pow(size, organicCoefficients.b);
//       break;
//     case "Semidetached":
//       effort = multiplier * semiDetachedCoefficients.a * Math.pow(size, semiDetachedCoefficients.b);
//       break;
//     case "Embedded":
//       effort = multiplier * embeddedCoefficients.a * Math.pow(size, embeddedCoefficients.b);
//       break;
//   }

//   PM.textContent = effort.toFixed(2);
// }

