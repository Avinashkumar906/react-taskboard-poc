import * as ACTIONCONST from '../action/actionConstant'

function findandUpdate(list, _id, progress) {
  const updatedState = [...list]
  const indexToUpdate = updatedState.findIndex(item => item._id === _id)
  if(indexToUpdate >= 0){
    const item = updatedState[indexToUpdate];
    item.progress = progress;
    updatedState[indexToUpdate] = item;
  }
  return updatedState;
}

const reducer = (state = [], action) =>{
  // console.log("User reducer in action.")
  switch (action.type) {
    case ACTIONCONST.ADD_TODO:{
      return action.payload;
    }
    case ACTIONCONST.UPDATE_TODO:{
      return findandUpdate(state, action.payload._id, action.payload.progress)
    }
    default:
      return state;
  }
}

export default reducer;