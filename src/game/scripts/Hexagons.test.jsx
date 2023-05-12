import { generateHexagons, getRandomInt, insidePolygon } from './Hexagons';

describe('insidePolygon', () => {
  const hexagon = {
    coordinates: [
      { x: 6, y: 8 },
      { x: 8, y: 8 },
      { x: 10, y: 6 },
      { x: 10, y: 4 },
      { x: 8, y: 2 },
      { x: 6, y: 2 },
      { x: 4, y: 4 },
      { x: 4, y: 6 },
    ],
  };

  it('should handle case 1', () => {
    expect(insidePolygon({ x: 3, y: 3 }, hexagon)).toEqual(false);
  });

  it('should handle case 2', () => {
    expect(insidePolygon({ x: 3, y: 7 }, hexagon)).toEqual(false);
  });

  it('should handle case 3', () => {
    expect(insidePolygon({ x: 6, y: 6 }, hexagon)).toEqual(true);
  });

  it('should handle case 4', () => {
    expect(insidePolygon({ x: 7, y: 3 }, hexagon)).toEqual(true);
  });

  it('should handle case 5', () => {
    expect(insidePolygon({ x: 6, y: 8 }, hexagon)).toEqual(false);
  });

  it('should handle case 6', () => {
    expect(insidePolygon({ x: 11.5, y: 8 }, hexagon)).toEqual(false);
  });

  it('should handle case 7', () => {
    expect(insidePolygon({ x: 10, y: 2 }, hexagon)).toEqual(false);
  });

  it('should handle case 8', () => {
    expect(insidePolygon({ x: 11, y: 4 }, hexagon)).toEqual(false);
  });

  it('should handle case 9', () => {
    expect(insidePolygon({ x: 9.5, y: 7 }, hexagon)).toEqual(false);
  });

  it('should handle case 10', () => {
    expect(insidePolygon({ x: 9, y: 5.5 }, hexagon)).toEqual(true);
  });
});

describe('generateHexagons', () => {
  it('should generate hexagons', () => {
    const hexagons = generateHexagons();
    expect(hexagons.length).toEqual(10);
    expect(hexagons[3].length).toEqual(5);
  });
});
