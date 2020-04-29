import { LOGIN, LOGOUT } from "../constants";

const initialState = {
  userObj: null,
  isUser: false
};

function rootReducer(state = initialState, action) {
  if (action.type === LOGIN) {
    return Object.assign({}, state, {
      userObj: action.userObj,
      isUser: true
    });
  } else if (action.type === LOGOUT) {
    return Object.assign({}, state, {
      userObj: null,
      isUser: false
    });
  }
  return state;
}

export default rootReducer;
