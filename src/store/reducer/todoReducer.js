import * as ACTIONCONST from '../action/actionConstant'

function findandUpdate(list, data) {
  const updatedState = [...list]
  const indexToUpdate = updatedState.findIndex(item => item._id === data._id)
  indexToUpdate >= 0 && (updatedState[indexToUpdate] = data );
  return updatedState;
}
function findandDelete(list, data) {
  const updatedState = [...list]
  const indexToUpdate = updatedState.findIndex(item => item._id === data._id)
  indexToUpdate >= 0 && (updatedState.splice(indexToUpdate, 1) );
  return updatedState;
}

const reducer = (state = [], action) =>{
  switch (action.type) {
    case ACTIONCONST.ADD_TODO_LIST:{
      return action.payload;
    }
    case ACTIONCONST.ADD_TODO:{
      return [...state, action.payload];
    }
    case ACTIONCONST.UPDATE_TODO:{
      return findandUpdate(state, action.payload)
    }
    case ACTIONCONST.DELETE_TODO:{
      return findandDelete(state, action.payload)
    }
    case ACTIONCONST.CLEAN_TODO:
      return [];
    default:
      return state;
  }
}

export default reducer;