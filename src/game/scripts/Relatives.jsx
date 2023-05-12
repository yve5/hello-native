export const selectOneAndRelatives = (hexagons, x, y) => {
  const result = JSON.parse(JSON.stringify(hexagons));

  result[x][y].isLand = true;

  if (y % 2) {
    result[x][y - 1].isLand = true;

    if (x + 1 < result.length && y - 1 >= 0) {
      result[x + 1][y - 1].isLand = true;
    }

    if (x + 1 < result.length) {
      result[x + 1][y].isLand = true;
    }

    if (x + 1 < result.length && y + 1 < result[x].length) {
      result[x + 1][y + 1].isLand = true;
    }

    if (y + 1 < result[x].length) {
      result[x][y + 1].isLand = true;
    }

    if (x - 1 >= 0) {
      result[x - 1][y].isLand = true;
    }

    if (y - 2 >= 0) {
      result[x][y - 2].isLand = true;
    }

    if (x + 1 < result.length && y - 2 >= 0) {
      result[x + 1][y - 2].isLand = true;
    }

    if (x + 2 < result.length && y - 1 >= 0) {
      result[x + 2][y - 1].isLand = true;
    }

    if (x + 2 < result.length) {
      result[x + 2][y].isLand = true;
    }

    if (x + 2 < result.length && y + 1 < result[x].length) {
      result[x + 2][y + 1].isLand = true;
    }

    if (x + 1 < result.length && y + 2 < result[x].length) {
      result[x + 1][y + 2].isLand = true;
    }

    if (y + 2 < result[x].length) {
      result[x][y + 2].isLand = true;
    }

    if (x - 1 >= 0 && y + 2 < result[x].length) {
      result[x - 1][y + 2].isLand = true;
    }

    if (x - 1 >= 0 && y + 1 < result[x].length) {
      result[x - 1][y + 1].isLand = true;
    }

    if (x - 2 >= 0) {
      result[x - 2][y].isLand = true;
    }

    if (x - 1 >= 0 && y - 1 >= 0) {
      result[x - 1][y - 1].isLand = true;
    }

    if (x - 1 >= 0 && y - 2 >= 0) {
      result[x - 1][y - 2].isLand = true;
    }
  } else {
    if (x - 1 >= 0 && y - 1 >= 0) {
      result[x - 1][y - 1].isLand = true;
    }

    if (y - 1 >= 0) {
      result[x][y - 1].isLand = true;
    }

    if (x + 1 < result.length) {
      result[x + 1][y].isLand = true;
    }

    if (y + 1 < result[x].length) {
      result[x][y + 1].isLand = true;
    }

    if (x - 1 >= 0 && y + 1 < result[0].length) {
      result[x - 1][y + 1].isLand = true;
    }

    if (x - 1 >= 0) {
      result[x - 1][y].isLand = true;
    }

    if (y - 2 >= 0) {
      result[x][y - 2].isLand = true;
    }

    if (x + 1 < result.length && y - 2 >= 0) {
      result[x + 1][y - 2].isLand = true;
    }

    if (x + 1 < result.length && y - 1 >= 0) {
      result[x + 1][y - 1].isLand = true;
    }

    if (x + 2 < result.length) {
      result[x + 2][y].isLand = true;
    }

    if (x + 1 < result.length && y + 1 < result[x].length) {
      result[x + 1][y + 1].isLand = true;
    }

    if (x + 1 < result.length && y + 2 < result[x].length) {
      result[x + 1][y + 2].isLand = true;
    }

    if (y + 2 < result[x].length) {
      result[x][y + 2].isLand = true;
    }

    if (x - 1 >= 0 && y + 2 < result[x].length) {
      result[x - 1][y + 2].isLand = true;
    }

    if (x - 2 >= 0 && y + 1 < result[x].length) {
      result[x - 2][y + 1].isLand = true;
    }

    if (x - 2 >= 0) {
      result[x - 2][y].isLand = true;
    }

    if (x - 2 >= 0 && y - 1 >= 0) {
      result[x - 2][y - 1].isLand = true;
    }

    if (x - 1 >= 0 && y - 2 >= 0) {
      result[x - 1][y - 2].isLand = true;
    }
  }

  return result;
};
