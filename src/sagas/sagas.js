import { takeLatest, select } from 'redux-saga/effects';
import { ActionTypes } from '../types/types';

import { getMessageIfIsValidCommand, getMessageFromValidCommandWithMessage } from '../utils/utils';

function* handleOnMessageSubmit({ payload }, socket) {
  const store = yield select();
  const { message } = payload;
  const validCommandType = getMessageIfIsValidCommand(message);

  // first check if the message we try to send is a valid command:
  if (validCommandType) {
    switch(validCommandType) {
      // TODO: REFACTOR:
      case 'nick': {
        const result = getMessageFromValidCommandWithMessage(message);
        socket.send(JSON.stringify({
          type: 'nickname',
          id: store.user,
          nickname: result
        }));
      }
        break;
      case 'think': {
        const result = getMessageFromValidCommandWithMessage(message);
        socket.send(JSON.stringify({
          type: 'think',
          id: store.user,
          timestamp: new Date(),
          message: result
        }));
      }
        break;
      case 'oops': {
        socket.send(JSON.stringify({
          type: 'oops',
          id: store.user
        }));
      }
        break;
      default:
        break;
    }
  } else {
    // we send a regular message:
    socket.send(JSON.stringify({
      type: 'message',
      id: store.user,
      timestamp: new Date(),
      message
    }));
  }

}

export default function* messages (socket) {
  yield takeLatest(ActionTypes.onMessageSubmit, (action) => handleOnMessageSubmit(action, socket));
}
