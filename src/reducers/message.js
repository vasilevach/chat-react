import { ActionTypes } from '../types/types';
const initialState = [];

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.addMessage: {
      const stateClone = [].concat(state);
      stateClone.unshift(action.payload);
      return stateClone;
    }
      break;
    default:
      return state;
  }
}

export default messagesReducer;