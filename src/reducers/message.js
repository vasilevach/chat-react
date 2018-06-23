import { ActionTypes } from '../types/types';
const initialState = [];

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.addMessage: {
      const stateClone = [].concat(state);
      stateClone.push(action.payload);
      return stateClone;
    }
      break;
    default:
      return state;
  }
}

export default messagesReducer;