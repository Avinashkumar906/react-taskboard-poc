import * as ACTIONCONST from '../action/actionConstant';

const STATE = {
  loader: false,
  toast: []
}

const reducer = (state = STATE, action) =>{
  switch (action.type) {
    case ACTIONCONST.HIDE_LOADER:
      return {...state, loader: false};
    case ACTIONCONST.SHOW_LOADER:
      return {...state, loader: true};
    case ACTIONCONST.SHOW_TOAST:
      return {...state, toast: [...state.toast, action.payload]};
    case ACTIONCONST.HIDE_TOAST:
      const [ ,...toast] = state.toast;
      return {...state, toast};
    default:
      return state;
  }
}

export default reducer;