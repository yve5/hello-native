import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Sprite, withPixiApp } from '@pixi/react';

import Bunny from './bunny.png';
import { HEIGHT, WIDTH } from './constants';

const Bunnies = ({ app }) => {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  let i = 0;

  const tick = (delta) => {
    i += 0.05 * delta;
    setRotate((Math.cos(i) * WIDTH) / 200);
    setScale(1 + Math.sin(i) * 0.4);
  };

  useEffect(() => {
    app.ticker.add(tick);

    return () => {
      app.ticker.remove(tick);
    };
  }, []);

  return (
    <Container
      rotation={rotate}
      pivot={50}
      position={[WIDTH / 2, HEIGHT / 2]}
      scale={scale}
    >
      <Sprite anchor={0.5} image={Bunny} x={0} y={0} />
      <Sprite anchor={0.5} image={Bunny} x={50} y={50} />
      <Sprite anchor={0.5} image={Bunny} x={100} y={100} />
    </Container>
  );
};

Bunnies.propTypes = {
  app: PropTypes.object,
};

Bunnies.defaultProps = {
  app: {},
};

export default withPixiApp(Bunnies);
