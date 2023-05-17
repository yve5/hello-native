export const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const topObstacleHeight = getRandom(150, 300);
export const bottomObstacleHeight = getRandom(200, 300);
