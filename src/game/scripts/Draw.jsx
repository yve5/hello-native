import { WORLD_WATER } from '../resources/constants';
import {
  amber400,
  blue700,
  green600,
  pink500,
  red500,
  yellow700,
} from '../resources/colors';

export const drawPolygon = (ctx, polygon, selected = false) => {
  const { category, coordinates, id, isLand } = polygon;
  ctx.beginPath();

  for (let i = 0; i < coordinates.length; i += 1) {
    const { x, y } = coordinates[i];
    if (i) {
      ctx.lineTo(x, y);
    } else {
      ctx.moveTo(x, y);
    }
  }

  ctx.closePath();
  ctx.strokeStyle = '';

  if (selected) {
    ctx.fillStyle = red500;
  } else if (category === 1) {
    ctx.fillStyle = yellow700;
  } else if (category === 2) {
    ctx.fillStyle = blue700;
  } else if (category === 3) {
    ctx.fillStyle = pink500;
  } else if (category === 4) {
    ctx.fillStyle = green600;
  } else if (category === WORLD_WATER) {
    ctx.fillStyle = amber400;
  } else if (isLand) {
    ctx.fillStyle = amber400;
  } else {
    ctx.fillStyle = blue700;
  }

  ctx.fill();
  ctx.stroke();

  if (id) {
    const { x, y } = coordinates[4];
    ctx.fillStyle = '#000';
    ctx.font = '14px serif';
    ctx.fillText(id, x + 5, y);
  }
};
