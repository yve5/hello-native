import { drawPolygon } from './Draw';

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

const context = {
  beginPath: jest.fn(),
  closePath: jest.fn(),
  lineTo: jest.fn(),
  moveTo: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
};

describe('drawPolygon', () => {
  it('should handle color. default', () => {
    expect(drawPolygon(context, hexagon)).toEqual(undefined);
  });

  it('should handle color. selected', () => {
    expect(drawPolygon(context, hexagon, true)).toEqual(undefined);
  });

  it('should handle color. category 1', () => {
    expect(drawPolygon(context, { ...hexagon, category: 1 })).toEqual(
      undefined
    );
  });

  it('should handle color. category 2', () => {
    expect(drawPolygon(context, { ...hexagon, category: 2 })).toEqual(
      undefined
    );
  });

  it('should handle color. category 3', () => {
    expect(drawPolygon(context, { ...hexagon, category: 3 })).toEqual(
      undefined
    );
  });

  it('should handle color. category 4', () => {
    expect(drawPolygon(context, { ...hexagon, category: 4 })).toEqual(
      undefined
    );
  });

  it('should handle color. WORLD_WATER', () => {
    expect(
      drawPolygon(context, { ...hexagon, category: 'WORLD_WATER' })
    ).toEqual(undefined);
  });

  it('should handle color. isLand', () => {
    expect(drawPolygon(context, { ...hexagon, isLand: true })).toEqual(
      undefined
    );
  });
});
