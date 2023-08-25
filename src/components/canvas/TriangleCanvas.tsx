import { useEffect, useRef, useCallback } from 'react';

import { ITriangleCanvas } from 'components/canvas/types';

export default function TriangleCanvas({ triangle, width, height }: ITriangleCanvas) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Calculate bounding rectangle
  const calculateBoundingRectangle = useCallback(() => {
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = Number.MIN_VALUE;
    let maxY = Number.MIN_VALUE;

    triangle.vertices.forEach((vertex) => {
      minX = Math.min(minX, vertex[0]);
      minY = Math.min(minY, vertex[1]);
      maxX = Math.max(maxX, vertex[0]);
      maxY = Math.max(maxY, vertex[1]);
    });

    return {
      width: maxX - minX,
      height: maxY - minY,
      area: (maxX - minX) * (maxY - minY),
    };
  }, [triangle]);

  // Calculate scaling factor for triangle to better fit on canvas
  const determineScailingFactor = useCallback(() => {
    const boundingRectangle = calculateBoundingRectangle();

    const scalingFactor = Math.sqrt((width * height) / boundingRectangle.area) * 0.4;
    return scalingFactor;
  }, [width, height, calculateBoundingRectangle]);

  // Re-calculate vertices for shape to be centered on canvas
  const recalculateVertices = useCallback(() => {
    const canvasCenterX = width / 2 - calculateBoundingRectangle().width;
    const canvasCenterY = height / 2 - calculateBoundingRectangle().height;
    const scalingFactor = determineScailingFactor();

    const calculatedVertices = triangle.vertices.map((vertex) => [
      vertex[0] * scalingFactor + canvasCenterX,
      vertex[1] * scalingFactor + canvasCenterY,
    ]);

    return calculatedVertices;
  }, [triangle, width, height, determineScailingFactor, calculateBoundingRectangle]);

  // Draw triangle on canvas
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    const context = canvas.getContext('2d');

    if (!context) return;
    const calculatedVertices = recalculateVertices();

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(calculatedVertices[0][0], calculatedVertices[0][1]);
    context.lineTo(calculatedVertices[1][0], calculatedVertices[1][1]);
    context.lineTo(calculatedVertices[2][0], calculatedVertices[2][1]);
    context.closePath();

    // Style shape (stroke and fill)
    context.strokeStyle = '#975A16';
    context.stroke();
    context.fillStyle = '#FAF089';
    context.fill();
  }, [triangle, recalculateVertices]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}
