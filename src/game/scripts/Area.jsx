import { getRandomInt } from './Random';
import { selectOneAndRelatives } from './Relatives';
import { getAvailablesTiles } from './Available';

export const getNearestArea = (hexagons, xZero, yZero) => {
  const clone = JSON.parse(JSON.stringify(hexagons));
  let searchIndex = 1;
  let path = [];

  if (clone[xZero][yZero].area === 0) {
    return path;
  }

  clone[xZero][yZero].searchId = searchIndex;
  clone[xZero][yZero].path = [{ x: xZero, y: yZero }];

  let loopIndex = searchIndex;
  let xSel = 0;
  let ySel = 0;

  const incrementSearchIndex = (condition, xToSet, yToSet, pathToUse) => {
    if (
      condition &&
      !clone[xToSet][yToSet].searchId &&
      clone[xToSet][yToSet].area
    ) {
      clone[xToSet][yToSet].searchId = searchIndex;
      clone[xToSet][yToSet].path = [...pathToUse, { x: xToSet, y: yToSet }];

      searchIndex += 1;
    }
  };

  while (loopIndex <= searchIndex && !path.length) {
    for (let x = 0; x < clone.length; x += 1) {
      for (let y = 0; y < clone[x].length; y += 1) {
        if (clone[x][y].searchId === loopIndex) {
          xSel = x;
          ySel = y;
        }
      }
    }

    const pathSel = clone[xSel][ySel].path;

    if (clone[xSel][ySel].area > 1) {
      path = pathSel;
    }

    incrementSearchIndex(
      xSel + 1 < clone.length && ySel - 1 >= 0,
      xSel + 1,
      ySel - 1,
      pathSel
    );

    incrementSearchIndex(
      xSel + 1 < clone.length && ySel + 1 < clone[xSel].length,
      xSel + 1,
      ySel + 1,
      pathSel
    );

    incrementSearchIndex(xSel + 1 < clone.length, xSel + 1, ySel, pathSel);

    incrementSearchIndex(
      xSel - 1 >= 0 && ySel - 1 >= 0,
      xSel - 1,
      ySel - 1,
      pathSel
    );

    incrementSearchIndex(
      ySel + 1 < clone[xSel].length,
      xSel,
      ySel + 1,
      pathSel
    );

    incrementSearchIndex(xSel - 1 >= 0, xSel - 1, ySel, pathSel);

    if (ySel % 2) {
      incrementSearchIndex(
        xSel - 1 >= 0 && ySel + 1 < clone[xSel].length,
        xSel - 1,
        ySel + 1,
        pathSel
      );
    } else {
      incrementSearchIndex(ySel - 1 >= 0, xSel, ySel - 1, pathSel);

      incrementSearchIndex(
        xSel - 1 >= 0 && ySel + 1 < clone[0].length,
        xSel - 1,
        ySel + 1,
        pathSel
      );
    }

    loopIndex += 1;
  }

  return path;
};
