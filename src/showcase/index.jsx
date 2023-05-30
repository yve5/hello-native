import React, { useEffect, useRef } from 'react';
// import { AUTO, Game } from 'phaser';
import { Text } from 'react-native';

// import Scene from './Scene';

const Container = () => {
  const container = useRef(null);
  const game = useRef(null);

  useEffect(() => {
    if (!game.current) {
      console.log('Hello World');

      //     game.current = new Game({
      //       type: AUTO,
      //       width: 800,
      //       height: 600,
      //       parent: container.current,
      //       physics: {
      //         default: 'arcade',
      //         arcade: {
      //           gravity: { y: 200 },
      //         },
      //       },
      //       scene: [Scene],
      //       banner: {
      //         hidePhaser: true,
      //       },
      //     });
    }

    //   return () => {
    //     if (!game.current) {
    //       game.current.destroy(true);
    //       game.current = null;
    //     }
    //   };
  }, []);

  // return <div className="game" ref={container} />;

  return (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  );
};

export default Container;
