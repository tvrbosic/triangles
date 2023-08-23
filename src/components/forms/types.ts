export interface ICreateTriangleFormState {
  name: string;
  sideA: string;
  sideB: string;
  sideC: string;
  angleA: string;
  angleB: string;
  angleC: string;
  perimeter: string;
  area: string;
  typeBySides: string;
  typeByAngles: string;
}

export enum ECreateTriangleFormActions {
  SET_NAME = 'SET_NAME',
  SET_SIDE_A = 'SET_SIDE_A',
  SET_SIDE_B = 'SET_SIDE_B',
  SET_SIDE_C = 'SET_SIDE_C',
  SET_ANGLE_A = 'SET_ANGLE_A',
  SET_ANGLE_B = 'SET_ANGLE_B',
  SET_ANGLE_C = 'SET_ANGLE_C',
  SET_PERIMETER = 'SET_PERIMETER',
  SET_AREA = 'SET_AREA',
  SET_TYPE_BY_SIDES = 'SET_TYPE_BY_SIDES',
  SET_TYPE_BY_ANGLES = 'SET_TYPE_BY_ANGLES',
}

export interface ICreateTriangleFormActions {
  type: ECreateTriangleFormActions;
  payload: string;
}

export interface ILabeledInput {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}
