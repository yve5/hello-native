export const getCenterId = (hexagons, x0, y0) => {
  const firstRound = JSON.parse(JSON.stringify(hexagons));
  let nearestId = 0;
  let hypoMin = -1;
  let hypo;

  for (let x = 0; x < firstRound.length; x += 1) {
    for (let y = 0; y < firstRound[x].length; y += 1) {
      if (firstRound[x][y].id) {
        hypo = Math.round(Math.sqrt((x - x0) ** 2 + (y - y0) ** 2) * 100) / 100;

        if (hypoMin === -1 || hypoMin > hypo) {
          nearestId = firstRound[x][y].id;
          hypoMin = hypo;
        }
      }
    }
  }

  return nearestId;
};
