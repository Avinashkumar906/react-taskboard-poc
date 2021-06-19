import * as ACTIONCONST from '../action/actionConstant'

const findAndUpdate = (state, note, action) => {
  let updatedList = [...state];
  let index = updatedList.findIndex((item) => item._id === note._id);
  switch (action) {
    case ACTIONCONST.UPDATE_TASKBOARD:{
      if(index >= 0){
        updatedList.splice(index, 1, note);
      } else {
        updatedList.splice(0, 0, note);
      }
      break
    }
    case ACTIONCONST.DELETE_TASKBOARD: {
      if(index >= 0) {
        updatedList.splice(index, 1);
      }
    }
    default:
      break;
  }
  return updatedList;
}

const reducer = (state = [], action) =>{
  switch (action.type) {
    case ACTIONCONST.ADD_TASKBOARD:
      return action.payload;
    case ACTIONCONST.UPDATE_TASKBOARD:
      return findAndUpdate(state, action.payload, action.type);
    case ACTIONCONST.DELETE_TASKBOARD:
      return findAndUpdate(state, action.payload, action.type);
    default:
      return state;
  }
}

export default reducer;