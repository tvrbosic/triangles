import { ITriangleData } from 'types/triangle';
import { IGenerateTriangleFormState } from 'components/forms/types';

export function validateEmail(email: string): boolean {
  const re =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// ########### Triangle generation form validations
// Check if we have at least one side
export const checkSidePresent = (values: IGenerateTriangleFormState): boolean => {
  const { sideA, sideB, sideC } = values;

  return Boolean(sideA || sideB || sideC);
};

// Check if we have three values and at least one side
export const checkThreeValuesOneSide = (values: IGenerateTriangleFormState) => {
  if (checkSidePresent(values)) {
    const { sideA, sideB, sideC, angleA, angleB, angleC } = values;
    const sides = [sideA, sideB, sideC];
    const angles = [angleA, angleB, angleC];

    return sides.filter(Boolean).length + angles.filter(Boolean).length >= 3 ? true : false;
  }
  // Side not present
  return false;
};

// Check if we have too many entered values (more than 3)
export const checkTooManyValues = (values: IGenerateTriangleFormState) => {
  const { sideA, sideB, sideC, angleA, angleB, angleC } = values;
  const sides = [sideA, sideB, sideC];
  const angles = [angleA, angleB, angleC];

  return sides.filter(Boolean).length + angles.filter(Boolean).length > 3 ? true : false;
};

// Check if we have one side and two angles
export const checkOneSideTwoAngles = (values: IGenerateTriangleFormState) => {
  if (checkSidePresent(values)) {
    const { angleA, angleB, angleC } = values;
    const angles = [angleA, angleB, angleC];

    return angles.filter(Boolean).length >= 2 ? true : false;
  }
  // Side not present
  return false;
};

// Check if we have two sides and one angle
export const checkTwoSidesOneAngle = (values: IGenerateTriangleFormState) => {
  if (checkSidePresent(values)) {
    const { sideA, sideB, sideC, angleA, angleB, angleC } = values;
    const sides = [sideA, sideB, sideC];

    const angles = [angleA, angleB, angleC];

    return sides.filter(Boolean).length >= 2 && angles.filter(Boolean).length >= 1 ? true : false;
  }
  // Side not present
  return false;
};

// Check if we have three sides
export const checkThreeSides = (values: IGenerateTriangleFormState) => {
  if (checkSidePresent(values)) {
    const { sideA, sideB, sideC } = values;
    const sides = [sideA, sideB, sideC];

    return sides.filter(Boolean).length >= 3 ? true : false;
  }
  // Side not present
  return false;
};

// Check if generated triangle is valid
export const checkGeneratedTriangle = (triangle: ITriangleData) => {
  return triangle.area ? true : false;
};
