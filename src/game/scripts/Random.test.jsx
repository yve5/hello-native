import { getRandomInt } from './Random';

describe('getRandomInt', () => {
  it('should generate random integer. default', () => {
    const integer = getRandomInt();
    expect(integer).toBeGreaterThanOrEqual(0);
    expect(integer).toBeLessThanOrEqual(10);
  });

  it('should generate random integer. custom range', () => {
    const integer = getRandomInt(100, 200);
    expect(integer).toBeGreaterThanOrEqual(100);
    expect(integer).toBeLessThanOrEqual(200);
  });
});
