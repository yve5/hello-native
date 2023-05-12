import { getCenterId } from './Center';

describe('getCenterId', () => {
  it('should handle hexagons. default', () => {
    expect(
      getCenterId(
        [
          [{}, {}, {}],
          [{}, { id: 2 }, {}],
          [{}, { id: 3 }, { id: 1 }],
        ],
        0,
        0
      )
    ).toEqual(2);
  });

  it('should handle hexagons. equality', () => {
    expect(
      getCenterId(
        [
          [{}, { id: 1 }, {}],
          [{}, {}, { id: 2 }],
          [{}, { id: 3 }, {}],
        ],
        1,
        1
      )
    ).toEqual(1);
  });

  it('should handle hexagons. equality', () => {
    expect(
      getCenterId(
        [
          [{}, {}, {}, {}, { category: 4, id: 1, isLand: true }, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, { category: 4, id: 2, isLand: true }, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, { category: 4, id: 3, isLand: true }, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}],
        ],
        5,
        6
      )
    ).toEqual(3);
  });
});
