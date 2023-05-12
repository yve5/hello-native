import { getLogger } from './store';

describe('store', () => {
  it('should handle getLogger. default', () => {
    expect(getLogger()).toEqual(undefined);
  });

  it('should handle getLogger. actived', () => {
    expect(getLogger('true')).toEqual(expect.any(Function));
  });
});
