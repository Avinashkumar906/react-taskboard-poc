import { ADD_USER, REMOVE_USER } from '../action/action'

const reducer = (state = {'name':'Sandy'}, action) =>{
  // console.log("User reducer in action.")
  switch (action.type) {
    case ADD_USER:
      console.log("User Added to Store", action.payload);
      return action.payload;
    case REMOVE_USER:
      console.log("User Removed from Store", action.payload);
      return action.payload;
    default:
      return state;
  }
}

export default reducer;