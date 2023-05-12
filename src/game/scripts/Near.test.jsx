import { isNearToCenter } from './Near';

describe('isNearToCenter', () => {
  it('should handle hexagons. default', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        0,
        0
      )
    ).toEqual(false);
  });

  it('should handle hexagons. odd [x][y - 1]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true, id: 42 }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        1,
        1
      )
    ).toEqual(true);
  });

  it('should handle hexagons. odd [x + 1][y + 1]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true, id: 42 }, { isLand: true }, { isLand: true }],
        ],
        1,
        1
      )
    ).toEqual(true);
  });

  it('should handle hexagons. odd [x + 1][y]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true, id: 42 }, { isLand: true }],
        ],
        1,
        1
      )
    ).toEqual(true);
  });

  it('should handle hexagons. odd [x + 1][y + 1]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true, id: 42 }],
        ],
        1,
        1
      )
    ).toEqual(true);
  });

  it('should handle hexagons. odd [x][y + 1]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true, id: 42 }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        1,
        1
      )
    ).toEqual(true);
  });

  it('should handle hexagons. odd [x - 1][y]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true, id: 42 }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        1,
        1
      )
    ).toEqual(true);
  });

  it('should handle hexagons. even [x - 1][y - 1]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true, id: 42 }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        1,
        2
      )
    ).toEqual(true);
  });

  it('should handle hexagons. even [x][y - 1]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true, id: 42 }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        1,
        2
      )
    ).toEqual(true);
  });

  it('should handle hexagons. even [x + 1][y]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true, id: 42 }, { isLand: true }, { isLand: true }],
        ],
        1,
        0
      )
    ).toEqual(true);
  });

  it('should handle hexagons. even [x + 1][y]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true, id: 42 }, { isLand: true }, { isLand: true }],
        ],
        1,
        0
      )
    ).toEqual(true);
  });

  it('should handle hexagons. even [x][y + 1]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true, id: 42 }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        1,
        0
      )
    ).toEqual(true);
  });

  it('should handle hexagons. even [x - 1][y + 1]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true }, { isLand: true, id: 42 }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        1,
        0
      )
    ).toEqual(true);
  });

  it('should handle hexagons. even [x - 1][y]', () => {
    expect(
      isNearToCenter(
        [
          [{ isLand: true, id: 42 }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
          [{ isLand: true }, { isLand: true }, { isLand: true }],
        ],
        1,
        0
      )
    ).toEqual(true);
  });
});
