import { generateLand } from './Land';

describe('generateLand', () => {
  it('should generate randomly land. default', () => {
    expect(
      generateLand([
        [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        [
          {},
          {},
          {},
          { isLand: true },
          { isLand: true },
          { isLand: true },
          {},
          {},
          {},
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
          {},
          {},
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
          {},
          {},
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
          {},
          {},
          {},
        ],
        [{}, {}, {}, {}, { isLand: true }, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      ])
    ).toEqual(expect.any(Array));
  });

  it('should generate randomly land. default', () => {
    expect(
      generateLand(
        [
          [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
          [
            {},
            {},
            {},
            { isLand: true },
            { isLand: true },
            { isLand: true },
            {},
            {},
            {},
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
            {},
            {},
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
            {},
            {},
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
            {},
            {},
            {},
          ],
          [{}, {}, {}, {}, { isLand: true }, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
          [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        ],
        10
      )
    ).toEqual(expect.any(Array));
  });
});
