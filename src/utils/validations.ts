import { ITriangle } from 'types/common';
import { ICreateTriangleFormState } from 'components/forms/types';

// Check if we have at least one side
export const checkSidePresent = (values: ICreateTriangleFormState): boolean => {
  const { sideA, sideB, sideC } = values;

  return Boolean(sideA || sideB || sideC);
};

// Check if we have three values and at least one side
export const checkThreeValuesOneSide = (values: ICreateTriangleFormState) => {
  if (checkSidePresent(values)) {
    const { sideA, sideB, sideC, angleA, angleB, angleC } = values;
    const sides = [sideA, sideB, sideC];
    const angles = [angleA, angleB, angleC];

    return sides.filter(Boolean).length + angles.filter(Boolean).length >= 3 ? true : false;
  }
  // Side not present
  return false;
};

// Check if we have one side and two angles
export const checkOneSideTwoAngles = (values: ICreateTriangleFormState) => {
  if (checkSidePresent(values)) {
    const { angleA, angleB, angleC } = values;
    const angles = [angleA, angleB, angleC];

    return angles.filter(Boolean).length >= 2 ? true : false;
  }
  // Side not present
  return false;
};

// Check if we have two sides and one angle
export const checkTwoSidesOneAngle = (values: ICreateTriangleFormState) => {
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
export const checkThreeSides = (values: ICreateTriangleFormState) => {
  if (checkSidePresent(values)) {
    const { sideA, sideB, sideC } = values;
    const sides = [sideA, sideB, sideC];

    return sides.filter(Boolean).length >= 3 ? true : false;
  }
  // Side not present
  return false;
};

// Check if generated triangle is valid
export const checkGeneratedTriangle = (triangle: ITriangle) => {
  return triangle.area ? true : false;
};
