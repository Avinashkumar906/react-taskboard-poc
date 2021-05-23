import * as ACTIONCONST from '../action/actionConstant'

const reducer = (state = [], action) =>{
  // console.log("User reducer in action.")
  switch (action.type) {
    case ACTIONCONST.ADD_TODO:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;