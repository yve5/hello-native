import React, { useEffect, useRef } from 'react';
import { AUTO, Game } from 'phaser';

import Scene from './Scene';

const Container = () => {
  const container = useRef(null);
  const game = useRef(null);

  useEffect(() => {
    if (!game.current) {
      game.current = new Game({
        type: AUTO,
        width: 800,
        height: 600,
        parent: container.current,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 },
          },
        },
        scene: [Scene],
        banner: {
          hidePhaser: true,
        },
      });
    }

    return () => {
      if (!game.current) {
        game.current.destroy(true);
        game.current = null;
      }
    };
  }, []);

  return <div className="game" ref={container} />;
};

export default Container;
