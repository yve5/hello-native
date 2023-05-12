import { hoverPolygon, setPolygons } from './All';

describe('Actions', () => {
  it('should handle GAME_SET_POLYGONS', () => {
    expect(setPolygons(undefined)).toEqual({
      type: 'GAME_SET_POLYGONS',
      polygons: undefined,
    });
  });

  it('should handle GAME_HOVER_POLYGON', () => {
    expect(hoverPolygon(undefined)).toEqual({
      type: 'GAME_HOVER_POLYGON',
      target: undefined,
    });

    expect(hoverPolygon(42)).toEqual({
      type: 'GAME_HOVER_POLYGON',
      target: 42,
    });
  });
});
