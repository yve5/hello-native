export const getAvailablesTiles = (hexagons) => {
  const alreadyTaken = [];

  for (let i = 0; i < hexagons.length; i += 1) {
    for (let j = 0; j < hexagons[i].length; j += 1) {
      if (hexagons[i][j].isLand) {
        alreadyTaken.push({ x: i, y: j });
      }
    }
  }

  const firstRound = [];

  for (let k = 0; k < alreadyTaken.length; k += 1) {
    const { x, y } = alreadyTaken[k];

    if (y % 2) {
      if (y - 1 >= 0 && !hexagons[x][y - 1].isLand) {
        firstRound.push({ x, y: y - 1 });
      }

      if (
        x + 1 < hexagons.length &&
        y - 1 >= 0 &&
        !hexagons[x + 1][y - 1].isLand
      ) {
        firstRound.push({ x: x + 1, y: y - 1 });
      }

      if (x + 1 < hexagons.length && !hexagons[x + 1][y].isLand) {
        firstRound.push({ x: x + 1, y });
      }

      if (
        x + 1 < hexagons.length &&
        y + 1 < hexagons[x].length &&
        !hexagons[x + 1][y + 1].isLand
      ) {
        firstRound.push({ x: x + 1, y: y + 1 });
      }

      if (y + 1 < hexagons[x].length && !hexagons[x][y + 1].isLand) {
        firstRound.push({ x, y: y + 1 });
      }

      if (x - 1 >= 0 && !hexagons[x - 1][y].isLand) {
        firstRound.push({ x: x - 1, y });
      }
    } else {
      if (x - 1 >= 0 && y - 1 >= 0 && !hexagons[x - 1][y - 1].isLand) {
        firstRound.push({ x: x - 1, y: y - 1 });
      }

      if (y - 1 >= 0 && !hexagons[x][y - 1].isLand) {
        firstRound.push({ x, y: y - 1 });
      }

      if (x + 1 < hexagons.length && !hexagons[x + 1][y].isLand) {
        firstRound.push({ x: x + 1, y });
      }

      if (y + 1 < hexagons[x].length && !hexagons[x][y + 1].isLand) {
        firstRound.push({ x, y: y + 1 });
      }

      if (
        x - 1 >= 0 &&
        y + 1 < hexagons[x].length &&
        !hexagons[x - 1][y + 1].isLand
      ) {
        firstRound.push({ x: x - 1, y: y + 1 });
      }

      if (x - 1 >= 0 && !hexagons[x - 1][y].isLand) {
        firstRound.push({ x: x - 1, y });
      }
    }
  }

  const secondRound = [];

  firstRound.forEach(({ x: xFirst, y: yFirst }) => {
    if (!secondRound.find(({ x, y }) => x === xFirst && y === yFirst)) {
      secondRound.push({ x: xFirst, y: yFirst });
    }
  });

  // // colorize available tiles
  // for (let i = 0; i < hexagons.length; i += 1) {
  //   for (let j = 0; j < hexagons[i].length; j += 1) {
  //     for (let k = 0; k < secondRound.length; k += 1) {
  //       const { x, y } = secondRound[k];
  //       if (i === x && j === y) {
  //         hexagons[i][j].category = 3;
  //       }
  //     }
  //   }
  // }

  return secondRound;
};
