const organicCoefficients = {
  a: 2.4,
  b: 1.05,
  c: 2.5,
  d: 0.38,
};

const semiDetachedCoefficients = {
  a: 3.0,
  b: 1.12,
  c: 2.5,
  d: 0.35,
};

const embeddedCoefficients = {
  a: 3.6,
  b: 1.2,
  c: 2.5,
  d: 0.32,
};

const KSLOC = document.getElementById("KiloOfSourceLineOfCode");
KSLOC.addEventListener("input", calculateAndDisplayResult);

const projectTypeList = document.getElementById("ProjectType");
projectTypeList.addEventListener("change", calculateAndDisplayResult);

const TM = document.getElementById("time-at-month");
const PM = document.getElementById("people-month");
const employees = document.getElementById("employees");

function calculateAndDisplayResult() {
  let result;

  switch (projectTypeList.value) {
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
  employees.textContent = (result.effort / result.time).toFixed(2);
}

function getOrganicResult(size) {
  const effort = organicCoefficients.a * Math.pow(size, organicCoefficients.b);
  const time = organicCoefficients.c * Math.pow(effort, organicCoefficients.d);
  return { effort, time };
}

function getSemiDetachedResult(size) {
  const effort = semiDetachedCoefficients.a * Math.pow(size, semiDetachedCoefficients.b);
  const time = semiDetachedCoefficients.c * Math.pow(effort, semiDetachedCoefficients.d);
  return { effort, time };
}

function getEmbeddedResult(size) {
  const effort = embeddedCoefficients.a * Math.pow(size, embeddedCoefficients.b);
  const time = embeddedCoefficients.c * Math.pow(effort, embeddedCoefficients.d);
  return { effort, time };
}
