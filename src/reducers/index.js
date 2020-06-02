import { combineReducers } from 'redux';
import name from './name';
import info from './info';

const reducers = combineReducers({
  name,
  info
});

export default reducers;
