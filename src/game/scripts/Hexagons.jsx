export const insidePolygon =
  function checkIfPointIsInsidePolygonThanksToRayCastingAlgorithm(
    { x, y },
    polygon
  ) {
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    const { coordinates } = polygon;
    let inside = false;

    for (
      let i = 0, j = coordinates.length - 1;
      i < coordinates.length;
      j = i, i += 1
    ) {
      const xi = coordinates[i].x;
      const yi = coordinates[i].y;

      const xj = coordinates[j].x;
      const yj = coordinates[j].y;

      const cond11 = yi > y;
      const cond12 = yj > y;

      const cond21 = xj - xi;
      const cond22 = y - yi;
      const cond23 = yj - yi;

      if (cond11 !== cond12 && x < (cond21 * cond22) / cond23 + xi) {
        inside = !inside;
      }
    }

    return inside;
  };

export const generateHexagons = (
  width = 500,
  columns = 10,
  rows = 5,
  top = 0,
  left = 0
) => {
  const hexagons = [];
  const dimension = width / columns;
  const thirtyDegreesInRadians = 0.523598776;
  const adjacent = dimension / 2;
  const side = adjacent / Math.cos(thirtyDegreesInRadians);
  const opposite = side * Math.sin(thirtyDegreesInRadians);

  for (let i = 0; i < columns; i += 1) {
    hexagons[i] = [];

    for (let j = 0; j < rows; j += 1) {
      const x = left + i * dimension + (j % 2) * adjacent;
      const y = top + j * (opposite + side);

      hexagons[i][j] = {
        coordinates: [
          { x: x + adjacent, y },
          { x: x + dimension, y: y + opposite },
          { x: x + dimension, y: y + opposite + side },
          { x: x + adjacent, y: y + side + 2 * opposite },
          { x, y: y + opposite + side },
          { x, y: y + opposite },
        ],
      };
    }
  }

  return hexagons;
};
