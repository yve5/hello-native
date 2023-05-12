import reducer from './Reducer';

describe('The reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      polygons: [],
      target: undefined,
    });
  });
});
