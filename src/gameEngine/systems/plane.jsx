import Matter from 'matter-js';

const UpdatePlane = (entities, { touches, time }) => {
  const {
    physics: { engine },
  } = entities;

  touches
    .filter(({ type }) => type === 'press')
    .forEach(() => {
      Matter.Body.setVelocity(entities.Plane.body, {
        x: entities.Plane.body.velocity.x,
        y: -3,
      });
    });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default UpdatePlane;
