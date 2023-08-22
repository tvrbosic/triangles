import {
  TVertex,
  ITriangle,
  EGenerateTriangleMethods,
  ETypesBySides,
  ETypesByAngles,
} from 'types/common';
import { degreesToRadians, radiansToDegrees } from 'utils/numbers';

export class Triangle {
  vertex: [TVertex, TVertex, TVertex] = [
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  sides: [number, number, number] = [0, 0, 0];
  angles: [number, number, number] = [0, 0, 0];
  perimeter: number = 0;
  area: number = 0;
  typeBySides: ETypesBySides = ETypesBySides.NOT_A_TRIANGLE;
  typeByAngles: ETypesByAngles = ETypesByAngles.NOT_A_TRIANGLE;

  constructor(
    input1: number,
    input2: number,
    input3: number,
    generateMethod: EGenerateTriangleMethods
  ) {
    let triangleData: ITriangle | undefined;

    switch (generateMethod) {
      case EGenerateTriangleMethods.SSA:
        triangleData = Triangle.generateFromSSA(input1, input2, input3);
        break;
      case EGenerateTriangleMethods.AAS:
        triangleData = Triangle.generateFromAAS(input1, input2, input3);
        break;
      case EGenerateTriangleMethods.SSS:
        triangleData = Triangle.generateFromSSS(input1, input2, input3);
        break;
      default:
        break;
    }

    if (!triangleData) return;

    // Set the properties
    this.sides = triangleData.sides;
    this.angles = triangleData.angles;
    this.vertex = triangleData.vertex;
    this.perimeter = triangleData.perimeter;
    this.area = triangleData.area;
    this.typeBySides = triangleData.typeBySides;
    this.typeByAngles = triangleData.typeByAngles;
  }

  private static generateFromSSA(a: number, b: number, angleC: number): ITriangle {
    const radAngleC = degreesToRadians(angleC);

    // Calculate the third side using the Law of Cosines
    const c = Math.sqrt(b ** 2 + a ** 2 - 2 * b * a * Math.cos(radAngleC));

    // Calculate the angles using the Law of Sines
    const radAngleA = Math.asin((a * Math.sin((angleC * Math.PI) / 180)) / c);
    const radAngleB = Math.asin((b * Math.sin((angleC * Math.PI) / 180)) / c);

    // Calculate the vertices
    const vertexA: TVertex = [0, 0];
    const vertexB: TVertex = [a, 0];
    const vertexC: TVertex = [b * Math.cos(radAngleA), b * Math.sin(radAngleB)];

    return {
      sides: [a, b, c],
      angles: [radAngleA, radAngleB, radAngleC],
      vertex: [vertexA, vertexB, vertexC],
      perimeter: Triangle.calculatePerimeter([a, b, c]),
      area: Triangle.calculateArea([a, b, c], [radAngleA, radAngleB, radAngleC]),
      typeBySides: Triangle.determineTypeBySides([a, b, c]),
      typeByAngles: Triangle.determineTypeByAngles([radAngleA, radAngleB, radAngleC]),
    };
  }

  private static generateFromAAS(angleA: number, angleC: number, b: number): ITriangle {
    const radAngleA = degreesToRadians(angleA);
    const radAngleC = degreesToRadians(angleC);

    // Calculate the third angle using the Triangle Angle Sum Theorem
    const radAngleB = Math.PI - radAngleA - radAngleC;

    // Calculate sides using the Law of Sines
    const a = (b * Math.sin(radAngleA)) / Math.sin(radAngleB);
    const c = (b * Math.sin(radAngleC)) / Math.sin(radAngleB);

    // Calculate the vertices
    const vertexA: TVertex = [0, 0];
    const vertexB: TVertex = [a, 0];
    const vertexC: TVertex = [b * Math.cos(radAngleA), b * Math.sin(radAngleB)];

    return {
      sides: [a, b, c],
      angles: [radAngleA, radAngleB, radAngleC],
      vertex: [vertexA, vertexB, vertexC],
      perimeter: Triangle.calculatePerimeter([a, b, c]),
      area: Triangle.calculateArea([a, b, c], [radAngleA, radAngleB, radAngleC]),
      typeBySides: Triangle.determineTypeBySides([a, b, c]),
      typeByAngles: Triangle.determineTypeByAngles([radAngleA, radAngleB, radAngleC]),
    };
  }

  private static generateFromSSS(a: number, b: number, c: number): ITriangle {
    // Calculate angles using the Law of Cosines
    const radAngleA = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c));
    const radAngleB = Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c));
    const radAngleC = Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));

    // Calculate the vertices
    const vertexA: TVertex = [0, 0];
    const vertexB: TVertex = [a, 0];
    const vertexC: TVertex = [b * Math.cos(radAngleA), b * Math.sin(radAngleB)];

    return {
      sides: [a, b, c],
      angles: [radAngleA, radAngleB, radAngleC],
      vertex: [vertexA, vertexB, vertexC],
      perimeter: Triangle.calculatePerimeter([a, b, c]),
      area: Triangle.calculateArea([a, b, c], [radAngleA, radAngleB, radAngleC]),
      typeBySides: Triangle.determineTypeBySides([a, b, c]),
      typeByAngles: Triangle.determineTypeByAngles([radAngleA, radAngleB, radAngleC]),
    };
  }

  static calculatePerimeter(sides: [number, number, number]): number {
    if (!sides) return 0;
    else return sides[0] + sides[1] + sides[2];
  }

  static calculateArea(sides: [number, number, number], angles: [number, number, number]): number {
    if (!sides || !angles) return 0;
    else return (sides[0] * sides[1] * Math.sin(angles[2])) / 2;
  }

  static determineTypeBySides = (sides: [number, number, number]): ETypesBySides => {
    const [a, b, c] = sides;

    if (a === b && b === c) return ETypesBySides.EQUILATERAL;
    else if (a === b || b === c || a === c) return ETypesBySides.ISOSCELES;
    else return ETypesBySides.SCALENE;
  };

  static determineTypeByAngles = (angles: [number, number, number]): ETypesByAngles => {
    const a = radiansToDegrees(angles[0]);
    const b = radiansToDegrees(angles[1]);
    const c = radiansToDegrees(angles[2]);

    if (a === 90 || b === 90 || c === 90) return ETypesByAngles.RIGHT;
    else if (a > 90 || b > 90 || c > 90) return ETypesByAngles.OBLIQUE;
    else return ETypesByAngles.ACUTE;
  };
}
