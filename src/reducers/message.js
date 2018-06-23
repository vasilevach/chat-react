import { ActionTypes } from '../types/types';
const initialState = [];

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.addMessage: {
      const stateClone = [].concat(state);
      stateClone.unshift(action.payload);
      return stateClone;
    }
    case ActionTypes.removeLastMessage: {
      const stateClone = [].concat(state);
      const lastIndexOfOccurance = stateClone.map((item) => item.user === action.payload.user).indexOf(true);
      stateClone.splice(lastIndexOfOccurance, 1);
      return stateClone;
    }
      break;
    default:
      return state;
  }
}

export default messagesReducer;