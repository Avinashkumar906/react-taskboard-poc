import * as ACTIONCONST from '../action/actionConstant';

const Default = {
  name:'Sandy',
  email:'sandy@gmail.com'
}

const reducer = (state = Default, action) =>{
  // console.log("User reducer in action.")
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