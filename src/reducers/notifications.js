import { ActionTypes } from '../types/types';
const initialState = {
  typing: {},
  counter: {}
};

function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.addTypingNotification:
      return {
        ...state,
        typing: action.payload
      };
      break;
    case ActionTypes.initCounterNotification:
      return {
        ...state,
        counter: action.payload
      };
      break;
    case ActionTypes.removeTypingNotification:
      return {
        ...state,
        typing: {}
      };
    case ActionTypes.removeCounterNotification:
      return {
        ...state,
        counter: {}
      };
    default:
      return state;
  }
}

export default notificationsReducer;