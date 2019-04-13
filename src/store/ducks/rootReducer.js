import { combineReducers } from 'redux';
import repositories from './repos/reducer';

export default combineReducers({
  repositories,
});
