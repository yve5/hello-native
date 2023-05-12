import { getRandomInt } from './Random';
import { selectOneAndRelatives } from './Relatives';
import { getAvailablesTiles } from './Available';

export const generateLand = (hexagons, limit = 1, count = 0) => {
  let selection = JSON.parse(JSON.stringify(hexagons));
  let total = count;

  if (!total) {
    const minMaxBorder = 2;
    const x = getRandomInt(minMaxBorder, selection.length - 1 - minMaxBorder);
    const y = getRandomInt(
      minMaxBorder,
      selection[0].length - 1 - minMaxBorder
    );

    selection = selectOneAndRelatives(selection, x, y);
    total += 1;
  }

  const availableTiles = getAvailablesTiles(selection);

  if (total < limit && availableTiles.length) {
    const random = getRandomInt(0, availableTiles.length - 1);
    const { x, y } = availableTiles[random];

    selection = selectOneAndRelatives(selection, x, y);
    total += 1;
    selection = generateLand(selection, limit, total);
  }

  return selection;
};
