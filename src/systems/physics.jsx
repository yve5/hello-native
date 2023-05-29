import Matter from 'matter-js';

const Physics = (entities, { time, dispatch }) => {
  const {
    physics: { engine },
  } = entities;

  Matter.Engine.update(engine, time.delta);
  Matter.Events.on(engine, 'collisionStart', () => {
    dispatch({ type: 'gameOver' });
  });

  return entities;
};

export default Physics;
