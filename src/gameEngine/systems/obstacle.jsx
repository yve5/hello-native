import Matter from 'matter-js';
import { TOP_PIPE_WIDTH, BOTTOM_PIPE_WIDTH } from '../utils/constants';
import { getRandom } from '../utils/random';
import { width, heightRatio } from '../utils/styleSheet';

const UpdateObstacle = (entities, { time, dispatch }) => {
  const {
    physics: { engine },
  } = entities;

  for (let i = 1; i <= 2; i += 1) {
    const obstacle = entities[`Obstacle${i}`];

    if (
      obstacle.type === 'top' &&
      obstacle.body.position.x <= -1 * (TOP_PIPE_WIDTH / 2)
    ) {
      obstacle.scored = false;
      Matter.Body.setPosition(obstacle.body, {
        x: width * 2 - TOP_PIPE_WIDTH / 2,
        y: getRandom(heightRatio * 100, heightRatio * 300),
      });
    } else if (
      obstacle.type === 'bottom' &&
      obstacle.body.position.x <= -1 * (BOTTOM_PIPE_WIDTH / 2)
    ) {
      obstacle.scored = false;
      Matter.Body.setPosition(obstacle.body, {
        x: width * 2 - BOTTOM_PIPE_WIDTH / 2,
        y: getRandom(heightRatio * 300, heightRatio * 500),
      });
    } else {
      Matter.Body.translate(obstacle.body, { x: -4, y: 0 });
    }
  }

  Matter.Engine.update(engine, time.delta);

  for (let i = 1; i <= 2; i += 1) {
    const obstacle = entities[`Obstacle${i}`];

    if (
      obstacle.body.position.x <= entities.Plane.body.position.x &&
      !obstacle.scored
    ) {
      obstacle.scored = true;
      dispatch({ type: 'score' });
    }
  }
  return entities;
};

export default UpdateObstacle;
