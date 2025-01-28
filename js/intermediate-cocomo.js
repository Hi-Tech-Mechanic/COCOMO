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

export function calculateEffort(size, effortMultiplier, projectType) {
  let effort;
  switch (projectType) {
    case "Organic":
      effort =
        effortMultiplier * semiDetachedCoefficients.a * Math.pow(size, semiDetachedCoefficients.b);
      break;
    case "Semidetached":
      effort =
        effortMultiplier * semiDetachedCoefficients.a * Math.pow(size, semiDetachedCoefficients.b);
      break;
    case "Embedded":
      effort = effortMultiplier * embeddedCoefficients.a * Math.pow(size, embeddedCoefficients.b);
      break;
  }

  return effort;
}

function calculateTime(effort, C, D) {
  return C * Math.pow(effort, D);
}

// Пример использования
const size = 100; // Размер проекта в KLOC
const A = 2.94; // Коэффициент для типа проекта (например, органический)
const B = 0.91; // Показатель масштаба для типа проекта (например, органический)
const effortMultipliers = [
  1.0, 1.1, 0.9, 1.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
]; // Пример множителей усилий

const effort = calculateEffort(size, A, B, effortMultipliers);
console.log("Effort:", effort);

const C = 3.67; // Коэффициент для типа проекта (например, органический)
const D = 0.28 + 0.2 * (B - 0.91); // Показатель масштаба для типа проекта (например, органический)

const time = calculateTime(effort, C, D);
console.log("Time:", time);
