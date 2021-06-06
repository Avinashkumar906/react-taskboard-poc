import { combineReducers } from 'redux';

import userReducer from './userReducer';
import taskboardReducer from './taskboardReducer';
import toDoReducer from './todoReducer';
import updateReducer from './updateReducer';

const rootReducer = combineReducers(
  { user: userReducer, tasksboard: taskboardReducer, todos: toDoReducer, update: updateReducer }
)

export default rootReducer;