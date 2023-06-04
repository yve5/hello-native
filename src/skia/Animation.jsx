import React, { useState } from 'react';
import { Canvas, Rect, useSpring } from '@shopify/react-native-skia';
import { Button, StyleSheet } from 'react-native';

const Animation = () => {
  const [toggled, setToggled] = useState(false);
  const position = useSpring(toggled ? 100 : 0);

  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Rect x={position} y={100} width={10} height={10} color={'red'} />
      </Canvas>
      <Button title="Toggle" onPress={() => setToggled((p) => !p)} />
    </>
  );
};

export default Animation;
