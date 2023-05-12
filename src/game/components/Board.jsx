import React, { useEffect, useRef, useState } from 'react';

import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../resources/constants';
import { generateHexagons, insidePolygon } from '../scripts/Hexagons';
import { drawPolygon } from '../scripts/Draw';
import { generateLand } from '../scripts/Land';
import { getCities } from '../scripts/Cities';

import FRAMES_GRADIENT from '../resources/frame-gradient.svg';

const Board = () => {
  const canvasRef = useRef();
  const requestRef = useRef();

  const [polygons, setPolygons] = useState([]);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let results = generateLand(generateHexagons(700, 25, 25, 10, 20), 40);
    // let results = generateLand(generateHexagons(700, 7, 7, 10, 20), 2);
    results = getCities(results);
    setPolygons(results);
  }, []);

  const [mousePosition, setMousePosition] = useState({});

  const updateMousePosition = ({ layerX, layerY, offsetX, offsetY }) => {
    setMousePosition({
      x: offsetX || layerX,
      y: offsetY || layerY,
    });
  };

  const picture = new Image();
  const [increment, setIncrement] = useState(1);

  const onLoad = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.drawImage(
      picture,
      0,
      (increment * 100) % 10100,
      100,
      100,
      650,
      650,
      100,
      100
    );

    setIncrement(increment + 1);
  };

  const drawBoard = () => {
    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = mousePosition;

    // Drawing
    ctx.strokeStyle = '';
    ctx.fillStyle = '#69F0AE';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let i = 0; i < polygons.length; i += 1) {
      for (let j = 0; j < polygons[i].length; j += 1) {
        drawPolygon(ctx, polygons[i][j], i === target?.x && j === target.y);
      }
    }

    ctx.fillStyle = '#000';
    ctx.font = '48px serif';
    ctx.fillText('Hello World', 50, 700);

    // Hover effect
    let found = false;
    let i = 0;
    let j;

    while (i < polygons.length && !found) {
      j = 0;
      while (j < polygons[i].length && !found) {
        if (insidePolygon({ x, y }, polygons[i][j])) {
          setTarget({ x: i, y: j });
          found = !found;
        }
        j += 1;
      }
      i += 1;
    }

    if (!found) {
      setTarget({});
    }

    // Picture
    picture.src = FRAMES_GRADIENT;
    picture.onload = onLoad();
  };

  const animate = () => {
    drawBoard();
    requestRef.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('mousemove', updateMousePosition);
    requestRef.current = window.requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', updateMousePosition);
    };
  });

  return (
    <canvas
      data-testid="main-canvas"
      height={CANVAS_HEIGHT}
      ref={canvasRef}
      width={CANVAS_WIDTH}
    />
  );
};

export default Board;
