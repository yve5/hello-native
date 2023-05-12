export const isNearToCenter = (hexagons, x, y) => {
  let nearToCenter = false;

  if (y % 2) {
    if (y - 1 >= 0 && hexagons[x][y - 1].id) {
      nearToCenter = true;
    }

    if (x + 1 < hexagons.length && y - 1 >= 0 && hexagons[x + 1][y - 1].id) {
      nearToCenter = true;
    }

    if (x + 1 < hexagons.length && hexagons[x + 1][y].id) {
      nearToCenter = true;
    }

    if (
      x + 1 < hexagons.length &&
      y + 1 < hexagons[x].length &&
      hexagons[x + 1][y + 1].id
    ) {
      nearToCenter = true;
    }

    if (y + 1 < hexagons[x].length && hexagons[x][y + 1].id) {
      nearToCenter = true;
    }

    if (x - 1 >= 0 && hexagons[x - 1][y].id) {
      nearToCenter = true;
    }
  } else {
    if (x - 1 >= 0 && y - 1 >= 0 && hexagons[x - 1][y - 1].id) {
      nearToCenter = true;
    }

    if (y - 1 >= 0 && hexagons[x][y - 1].id) {
      nearToCenter = true;
    }

    if (x + 1 < hexagons.length && hexagons[x + 1][y].id) {
      nearToCenter = true;
    }

    if (y + 1 < hexagons[x].length && hexagons[x][y + 1].id) {
      nearToCenter = true;
    }

    if (x - 1 >= 0 && y + 1 < hexagons[x].length && hexagons[x - 1][y + 1].id) {
      nearToCenter = true;
    }

    if (x - 1 >= 0 && hexagons[x - 1][y].id) {
      nearToCenter = true;
    }
  }

  return nearToCenter;
};
