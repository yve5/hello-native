import Matter from 'matter-js';

import Plane from '../components/Plane';
import Floor from '../components/Floor';
import Ceiling from '../components/Ceiling';
import Obstacle from '../components/Obstacle';

import { TOP_PIPE_WIDTH, BOTTOM_PIPE_WIDTH } from '../utils/constants';
import { height, width, heightRatio, widthRatio } from '../utils/styleSheet';
import {
  getRandom,
  topObstacleHeight,
  bottomObstacleHeight,
} from '../utils/random';

// Overriding this function because the original references HTMLElement
// Matter.Common.isElement = () => false;

export default (restart) => {
  // Cleanup existing entities...
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  const engine = Matter.Engine.create({ enableSleeping: false });
  const { world } = engine;
  world.gravity.y = 0.25;

  return {
    physics: { engine, world },
    Plane: Plane(
      world,
      'pink',
      { x: width / 2, y: height / 2 },
      { height: heightRatio * 50, width: widthRatio * 70 }
    ),
    Floor: Floor(
      world,
      'white',
      { x: width / 2, y: height - heightRatio * 40 },
      { height: heightRatio * 90, width }
    ),
    Ceiling: Ceiling(
      world,
      'white',
      // { x: width / 2, y: -heightRatio * 120 },
      { x: width / 2, y: 0 },
      { height: heightRatio * 120, width }
    ),
    Obstacle1: Obstacle(
      world,
      'top',
      {
        x: width * 2 - TOP_PIPE_WIDTH / 2,
        y: getRandom(heightRatio * 100, heightRatio * 300),
      },
      { height: topObstacleHeight, width: TOP_PIPE_WIDTH }
    ),
    Obstacle2: Obstacle(
      world,
      'bottom',
      {
        x: width * 3 - BOTTOM_PIPE_WIDTH / 2,
        y: getRandom(heightRatio * 300, heightRatio * 500),
      },
      { height: bottomObstacleHeight, width: BOTTOM_PIPE_WIDTH }
    ),
  };
};
