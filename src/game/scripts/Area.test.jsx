import { getNearestArea } from './Area';

describe('getNearestArea', () => {
  const defaultSample = [
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 2 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 0 },
      { area: 0 },
      { area: 0 },
      { area: 0 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 3 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 5 },
    ],
  ];

  /*
      -1   1   1   -0   1   3
        1   -1   -1   0   1   1
      1   1   1   0   1   1
        2   1   1   0   1   1
      1   1   1   1   1   1
        1   1   1   1   1   5
  */

  xit('should handle hexagons. two', () => {
    expect(getNearestArea(defaultSample, 0, 0)).toEqual(2);
  });

  xit('should handle hexagons. undefined', () => {
    expect(getNearestArea(defaultSample, 3, 0)).toEqual([]);
  });

  xit('should handle hexagons. two again', () => {
    expect(getNearestArea(defaultSample, 2, 0)).toEqual(2);
  });

  xit('should handle hexagons. five', () => {
    expect(getNearestArea(defaultSample, 4, 3)).toEqual(5);
  });

  xit('should handle hexagons. two again again', () => {
    expect(getNearestArea(defaultSample, 2, 3)).toEqual(2);
  });

  const noCenterSample = [
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 0 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 0 },
      { area: 0 },
      { area: 0 },
      { area: 0 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
    ],
    [
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
      { area: 1 },
    ],
  ];

  /*
      1   1   1   0   1   1
        1   1   1   0   1   1
      1   1   1   0   1   1
        0   1   1   0   1   1
      1   1   1   1   1   1
        1   1   1   1   1   1
  */

  xit('should handle hexagons. no center', () => {
    expect(getNearestArea(noCenterSample, 1, 0)).toEqual(undefined);
  });
});
