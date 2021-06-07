import * as ACTIONCONST from '../action/actionConstant'

function findandUpdate(list, data) {
  const updatedState = [...list]
  const indexToUpdate = updatedState.findIndex(item => item._id === data._id)
  indexToUpdate >= 0 && (updatedState[indexToUpdate] = data );
  return updatedState;
}

const reducer = (state = [], action) =>{
  switch (action.type) {
    case ACTIONCONST.ADD_TODO:{
      return action.payload;
    }
    case ACTIONCONST.UPDATE_TODO:{
      return findandUpdate(state, action.payload)
    }
    default:
      return state;
  }
}

export default reducer;