import { getCities } from './Cities';

describe('getCities', () => {
  it('should get randomly city centers', () => {
    expect(
      getCities(
        [
          [
            {},
            {},
            {},
            { isLand: true },
            { isLand: true },
            { isLand: true },
            {},
          ],
          [
            {},
            {},
            { isLand: true },
            { isLand: true },
            { isLand: true },
            { isLand: true },
            { isLand: true },
          ],
          [
            {},
            {},
            { isLand: true },
            { isLand: true },
            { isLand: true },
            { isLand: true },
            { isLand: true },
          ],
          [
            {},
            {},
            { isLand: true },
            { isLand: true },
            { isLand: true },
            { isLand: true },
            { isLand: true },
          ],
          [
            {},
            {},
            {},
            {},
            { isLand: true },
            { isLand: true },
            { isLand: true },
          ],
          [
            {},
            {},
            {},
            {},
            { isLand: true },
            { isLand: true },
            { isLand: true },
          ],
          [{}, {}, {}, {}, {}, {}, { isLand: true }],
        ],
        true
      )
    ).toEqual([
      [
        {},
        {},
        {},
        { id: 1, isLand: true },
        { category: 4, id: 1, isLand: true },
        { id: 1, isLand: true },
        {},
      ],
      [
        {},
        {},
        { id: 1, isLand: true },
        { id: 1, isLand: true },
        { id: 1, isLand: true },
        { id: 1, isLand: true },
        { id: 1, isLand: true },
      ],
      [
        {},
        {},
        { id: 2, isLand: true },
        { id: 2, isLand: true },
        { category: 4, id: 2, isLand: true },
        { id: 2, isLand: true },
        { id: 2, isLand: true },
      ],
      [
        {},
        {},
        { id: 2, isLand: true },
        { id: 2, isLand: true },
        { id: 2, isLand: true },
        { id: 2, isLand: true },
        { id: 2, isLand: true },
      ],
      [
        {},
        {},
        {},
        {},
        { category: 4, id: 3, isLand: true },
        { id: 3, isLand: true },
        { id: 3, isLand: true },
      ],
      [
        {},
        {},
        {},
        {},
        { id: 3, isLand: true },
        { id: 3, isLand: true },
        { id: 3, isLand: true },
      ],
      [{}, {}, {}, {}, {}, {}, { id: 3, isLand: true }],
    ]);
  });
});
