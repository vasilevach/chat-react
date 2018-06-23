import { ActionTypes } from '../types/types';

const defaultState = [];

function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.addUser: {
      const stateClone = [].concat(state);
      stateClone.push(action.payload);
      return stateClone;
    }
      break;
    case ActionTypes.changeNickname: {
      const stateClone = [].concat(state);
      stateClone[stateClone.findIndex((el) => el.id === action.payload.id)] = action.payload;
      return stateClone;
      }
      break;
    default:
      return state;
  }
}

export default usersReducer;