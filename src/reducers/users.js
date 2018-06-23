import { ActionTypes } from '../types/types';

const defaultState = [];

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.addUser: {
      const stateClone = [].concat(state);
      stateClone.push(action.payload.name);
      return stateClone;
    }
    default:
      return state;
  }
}

export default userReducer;