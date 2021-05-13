import { combineReducers } from 'redux';

import userReducer from './userReducer';
import taskboardReducer from './taskboardReducer';

const rootReducer = combineReducers(
  { user: userReducer, tasksboard: taskboardReducer }
)

export default rootReducer;