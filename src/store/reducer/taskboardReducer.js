import { ADD_TASKBOARD } from '../action/action'

const reducer = (state = [], action) =>{
  // console.log("User reducer in action.")
  switch (action.type) {
    case ADD_TASKBOARD:
      console.log("Taskboard Added to Store", action.payload);
      return action.payload;
    // case REMOVE_USER:
    //   console.log("User Removed from Store", action.payload);
    //   return action.payload;
    default:
      return state;
  }
}

export default reducer;