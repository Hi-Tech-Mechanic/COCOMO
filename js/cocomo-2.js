import { organicCoefficients, semiDetachedCoefficients, embeddedCoefficients } from "./coefficients.js";

export function calculateEffort(size, A, B, effortMultiplier) {
  let effort = A * Math.pow(size, B);

  // for (let i = 0; i < effortMultipliers.length; i++) {
  //   effort *= effortMultipliers[i];
  // }
  
  return effort * effortMultiplier;
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
