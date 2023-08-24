import { useEffect, useRef, useCallback } from 'react';

import { ITriangleCanvas } from 'components/canvas/types';

function TriangleCanvas({ triangle, width, height }: ITriangleCanvas) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Calculate scaling factor for triangle to better fit on canvas
  const determineScailingFactor = useCallback(() => {
    const scalingFactor = Math.sqrt(height / triangle.circumradius);
    return scalingFactor;
  }, [triangle, height]);

  // Re-calculate vertices for shape to be centered on canvas
  const recalculateVertices = useCallback(() => {
    const canvasCenterX = width / 2 - (triangle.circumradius / 2) * determineScailingFactor();
    const canvasCenterY = height / 2 - (triangle.circumradius / 2) * determineScailingFactor();
    const calculatedVertices = triangle.vertices.map((vertex) => [
      vertex[0] * determineScailingFactor() + canvasCenterX,
      vertex[1] * determineScailingFactor() + canvasCenterY,
    ]);
    calculatedVertices[0][0] = canvasCenterX;
    calculatedVertices[0][1] = canvasCenterY;
    return calculatedVertices;
  }, [triangle, width, height, determineScailingFactor]);

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

export default TriangleCanvas;
