import {
  GAME_HOVER_POLYGON,
  GAME_SET_POLYGONS,
} from '../resources/constants';

export const setPolygons = (polygons) => ({
  type: GAME_SET_POLYGONS,
  polygons,
});

export const hoverPolygon = (target) => ({
  type: GAME_HOVER_POLYGON,
  target,
});
