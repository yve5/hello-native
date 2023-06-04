import React, { useMemo } from 'react';
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Text } from '@pixi/react';

import Bunnies from './Bunnies';
import { HEIGHT, WIDTH } from './constants';

const First = () => {
  const blurFilter = useMemo(() => new BlurFilter(3), []);

  return (
    <Stage
      options={{ backgroundColor: 0x00ff00 }}
      height={HEIGHT}
      width={WIDTH}
    >
      <Bunnies />

      <Container x={120} y={100}>
        <Text
          text="Example..."
          anchor={{ x: 0.5, y: 0.5 }}
          filters={[blurFilter]}
        />
      </Container>
    </Stage>
  );
};

export default First;
