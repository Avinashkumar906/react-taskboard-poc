import { combineReducers } from 'redux';

import userReducer from './userReducer';
import taskboardReducer from './taskboardReducer';
import toDoReducer from './todoReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers(
  { user: userReducer, tasksboard: taskboardReducer, todos: toDoReducer, loader: loaderReducer }
)

export default rootReducer;