export const organicCoefficients = {
  a: 2.4,
  b: 1.05,
  c: 2.5,
  d: 0.38,
};

export const semiDetachedCoefficients = {
  a: 3.0,
  b: 1.12,
  c: 2.5,
  d: 0.35,
};

export const embeddedCoefficients = {
  a: 3.6,
  b: 1.2,
  c: 2.5,
  d: 0.32,
};

export function getOrganicResult(size) {
  const effort = organicCoefficients.a * Math.pow(size, organicCoefficients.b);
  const time = organicCoefficients.c * Math.pow(effort, organicCoefficients.d);
  return { effort, time };
}

export function getSemiDetachedResult(size) {
  const effort = semiDetachedCoefficients.a * Math.pow(size, semiDetachedCoefficients.b);
  const time = semiDetachedCoefficients.c * Math.pow(effort, semiDetachedCoefficients.d);
  return { effort, time };
}

export function getEmbeddedResult(size) {
  const effort = embeddedCoefficients.a * Math.pow(size, embeddedCoefficients.b);
  const time = embeddedCoefficients.c * Math.pow(effort, embeddedCoefficients.d);
  return { effort, time };
}
