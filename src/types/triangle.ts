import { degreesToRadians } from 'utils/numbers';

interface IVertex {
  x: number;
  y: number;
}

export enum EGenerateTriangleMethods {
  SSA = 'sidesAndAngle',
  AAS = 'anglesAndSide',
  SSS = 'sides',
}

export class Triangle {
  vertex: [IVertex, IVertex, IVertex] | undefined;
  sides: [number, number, number] | undefined;
  angles: [number, number, number] | undefined;

  perimeter: number | undefined;
  area: number | undefined;

  constructor(
    input1: number,
    input2: number,
    input3: number,
    generateMethod: EGenerateTriangleMethods
  ) {
    switch (generateMethod) {
      case EGenerateTriangleMethods.SSA:
        this.generateFromSSA(input1, input2, input3);
        break;
      case EGenerateTriangleMethods.AAS:
        this.generateFromAAS(input1, input2, input3);
        break;
      case EGenerateTriangleMethods.SSS:
        this.generateFromSSS(input1, input2, input3);
        break;
      default:
        break;
    }

    this.calculatePerimeter();
    this.calculateArea();
  }

  generateFromSSA(a: number, b: number, angleC: number) {
    const radAngleC = degreesToRadians(angleC);

    // Calculate the third side using the Law of Cosines
    const c = Math.sqrt(b ** 2 + a ** 2 - 2 * b * a * Math.cos(radAngleC));

    // Calculate the angles using the Law of Sines
    const radAngleA = Math.asin((a * Math.sin((angleC * Math.PI) / 180)) / c);
    const radAngleB = Math.asin((b * Math.sin((angleC * Math.PI) / 180)) / c);

    // Calculate the vertices
    const vertexA: IVertex = { x: 0, y: 0 };
    const vertexB: IVertex = { x: a, y: 0 };
    const vertexC: IVertex = {
      x: b * Math.cos(radAngleA),
      y: b * Math.sin(radAngleB),
    };

    // Set the properties
    this.sides = [a, b, c];
    this.angles = [radAngleA, radAngleB, radAngleC];
    this.vertex = [vertexA, vertexB, vertexC];
  }

  generateFromAAS(angleA: number, angleC: number, b: number) {
    // TODO: Implement
    const radAngleA = degreesToRadians(angleA);
    const radAngleC = degreesToRadians(angleC);

    // Calculate the third angle using the Triangle Angle Sum Theorem
    const radAngleB = Math.PI - radAngleA - radAngleC;

    // Calculate sides using the Law of Sines
    const a = (b * Math.sin(radAngleA)) / Math.sin(radAngleB);
    const c = (b * Math.sin(radAngleC)) / Math.sin(radAngleB);

    // Calculate the vertices
    const vertexA: IVertex = { x: 0, y: 0 };
    const vertexB: IVertex = { x: a, y: 0 };
    const vertexC: IVertex = {
      x: b * Math.cos(radAngleA),
      y: b * Math.sin(radAngleB),
    };

    // Set the properties
    this.sides = [a, b, c];
    this.angles = [radAngleA, radAngleB, radAngleC];
    this.vertex = [vertexA, vertexB, vertexC];
  }

  generateFromSSS(a: number, b: number, c: number) {
    // Calculate angles using the Law of Cosines
    const radAngleA = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c));
    const radAngleB = Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c));
    const radAngleC = Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));

    // Calculate the vertices
    const vertexA: IVertex = { x: 0, y: 0 };
    const vertexB: IVertex = { x: a, y: 0 };
    const vertexC: IVertex = {
      x: b * Math.cos(radAngleA),
      y: b * Math.sin(radAngleB),
    };

    // Set the properties
    this.sides = [a, b, c];
    this.angles = [radAngleA, radAngleB, radAngleC];
    this.vertex = [vertexA, vertexB, vertexC];
  }

  calculatePerimeter() {
    if (!this.sides) this.perimeter = 0;
    else this.perimeter = this.sides[0] + this.sides[1] + this.sides[2];
  }

  calculateArea() {
    if (!this.sides || !this.angles) this.area = 0;
    else this.area = (this.sides[0] * this.sides[1] * Math.sin(this.angles[2])) / 2;
  }
}
