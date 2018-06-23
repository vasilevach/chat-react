import { ActionTypes } from '../types/types';

const defaultState = '';

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.setCurrentUser:
      return action.payload.name;
      break;
    default:
      return state;
  }
}

export default userReducer;