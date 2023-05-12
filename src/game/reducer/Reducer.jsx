import { GAME_HOVER_POLYGON, GAME_SET_POLYGONS } from '../resources/constants';

const initialState = {
  polygons: [],
  target: undefined,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_HOVER_POLYGON:
    case GAME_SET_POLYGONS:
      return {
        ...state,
        ...action,
      };

    default:
      return state;
  }
};

export default reducer;
