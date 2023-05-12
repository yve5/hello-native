import { getRandomInt } from './Random';
import { isNearToCenter } from './Near';
import { getCenterId } from './Center';

export const getCities = (hexagons, testing = false) => {
  const primary = JSON.parse(JSON.stringify(hexagons));
  let id = 1;

  for (let x = 0; x < primary.length; x += 1) {
    for (let y = 0; y < primary[x].length; y += 1) {
      if (
        !isNearToCenter(primary, x, y) &&
        primary[x][y].isLand &&
        ((testing && !(y % 4)) || (!testing && getRandomInt(1, 8) === 5))
      ) {
        primary[x][y].id = id;
        primary[x][y].category = 4;
        id += 1;
      }
    }
  }

  const secondary = JSON.parse(JSON.stringify(primary));

  for (let x = 0; x < secondary.length; x += 1) {
    for (let y = 0; y < secondary[x].length; y += 1) {
      if (secondary[x][y].isLand && !secondary[x][y].id) {
        secondary[x][y].id = getCenterId(primary, x, y);
      }
    }
  }

  return secondary;
};
