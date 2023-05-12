import { cyan500, deepPurpleA200, orange500 } from './colors';

describe('Constants', () => {
  it('should handle orange500', () => {
    expect(orange500).toEqual('#FF9800');
  });

  it('should handle deepPurpleA200', () => {
    expect(deepPurpleA200).toEqual('#7C4DFF');
  });

  it('should handle cyan500', () => {
    expect(cyan500).toEqual('#00BCD4');
  });
});
