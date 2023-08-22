export function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function radiansToDegrees(radians: number) {
  return (radians * 180) / Math.PI;
}

export function roundToTwoDecimalPlaces(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
