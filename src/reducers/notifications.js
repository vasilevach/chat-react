import { ActionTypes } from '../types/types';
const initialState = {};

function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.addTypingNotification:
      return {
        ...state,
        typing: action.payload
      };
      break;
    case ActionTypes.removeTypingNotification:
      return initialState;
    default:
      return state;
  }
}

export default notificationsReducer;