import { combineReducers } from 'redux';
import game from '../game/reducer/Reducer';

export default () => combineReducers({ game });
