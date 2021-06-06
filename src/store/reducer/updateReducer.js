import * as ACTIONCONST from '../action/actionConstant';

const STATE = {
  loader: false,
}

const reducer = (state = STATE, action) =>{
  switch (action.type) {
    case ACTIONCONST.HIDE_LOADER:
      return {...state, loader: false};
    case ACTIONCONST.SHOW_LOADER:
      return {...state, loader: true};
    default:
      return state;
  }
}

export default reducer;