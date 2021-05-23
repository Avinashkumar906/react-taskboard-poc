import { combineReducers } from 'redux';

import userReducer from './userReducer';
import taskboardReducer from './taskboardReducer';
import toDoReducer from './todoReducer';

const rootReducer = combineReducers(
  { user: userReducer, tasksboard: taskboardReducer, todos: toDoReducer }
)

export default rootReducer;