import * as ACTIONCONST from '../action/actionConstant';

const reducer = (state = null, action) =>{
  switch (action.type) {
    case ACTIONCONST.ADD_USER:
      return action.payload;
    case ACTIONCONST.REMOVE_USER:
      localStorage.removeItem('token');
      return null;
    default:
      return state;
  }
}

export default reducer;