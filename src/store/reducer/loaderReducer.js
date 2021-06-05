import * as ACTIONCONST from '../action/actionConstant';

const reducer = (state = {show:false}, action) =>{
  switch (action.type) {
    case ACTIONCONST.HIDE_LOADER:
      return {show: false};
    case ACTIONCONST.SHOW_LOADER:
      return {show: true};
    default:
      return state;
  }
}

export default reducer;