import { CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';

describe('Constants', () => {
  it('should handle CANVAS_WIDTH', () => {
    expect(CANVAS_WIDTH).toEqual(800);
  });

  it('should handle CANVAS_HEIGHT', () => {
    expect(CANVAS_HEIGHT).toEqual(800);
  });
});
