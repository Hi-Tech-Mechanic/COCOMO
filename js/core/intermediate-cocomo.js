const organicCoefficients = {
  a: 3.2,
  b: 1.05,
};

const semiDetachedCoefficients = {
  a: 3.0,
  b: 1.12,
};

const embeddedCoefficients = {
  a: 2.8,
  b: 1.2,
};

const PM = document.getElementById("People-Month");

const KSLOC = document.getElementById("KiloOfSourceLineOfCode");
KSLOC.addEventListener("input", calculateAndDisplayResult);

const projectTypeList = document.getElementById("ProjectType");
projectTypeList.addEventListener("change", calculateAndDisplayResult);

const radioButtons = document.getElementsByClassName("table__handler-holder");
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].children[0].addEventListener("click", calculateAndDisplayResult);
}

function calculateAndDisplayResult() {
  let effort;
  let size = Number(KSLOC.value);
  let multiplier = 1;
  let effortMultipliers = [];

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].children[0].checked == true) {
      effortMultipliers.push(Number(radioButtons[i].children[1].textContent));
      continue;
    }
  }

  for (let i = 0; i < effortMultipliers.length; i++) {
    multiplier *= effortMultipliers[i];
  }

  switch (projectTypeList.value) {
    case "Organic":
      effort = multiplier * organicCoefficients.a * Math.pow(size, organicCoefficients.b);
      break;
    case "Semidetached":
      effort = multiplier * semiDetachedCoefficients.a * Math.pow(size, semiDetachedCoefficients.b);
      break;
    case "Embedded":
      effort = multiplier * embeddedCoefficients.a * Math.pow(size, embeddedCoefficients.b);
      break;
  }

  PM.textContent = effort.toFixed(2);
}
