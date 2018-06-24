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
    case ActionTypes.fadeLastMessage: {
      const stateClone = [].concat(state);
      // find returns the first value, with is exactly my "last" message:
      const lastOccuranceOf = stateClone.find((item) => item.user === action.payload.user);
      lastOccuranceOf.format = 'fadelast';
      return stateClone;
    }
      break;
    default:
      return state;
  }
}

export default messagesReducer;