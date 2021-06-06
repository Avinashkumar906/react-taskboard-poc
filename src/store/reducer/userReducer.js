import * as ACTIONCONST from '../action/actionConstant';

const STATE = { token : localStorage.getItem('token')}
const reducer = (state = STATE, action) =>{
  switch (action.type) {
    case ACTIONCONST.ADD_USER:
      return {...state,...action.payload};
    case ACTIONCONST.REMOVE_USER:
      localStorage.removeItem('token');
      return { token : null };
    default:
      return state;
  }
}

export default reducer;