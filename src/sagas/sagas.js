import { takeLatest, select, call, put } from 'redux-saga/effects';
import { ActionTypes } from '../types/types';
import { delay } from 'redux-saga';
import { initCounter, removeCounter } from '../actions/actions';

import {
  getCountdownCommand, getMessageIfIsValidCommand, getMessageFromValidCommandWithMessage,
  openDataLink
} from '../utils/utils';

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
      case 'think':
      case 'highlight': {
        const result = getMessageFromValidCommandWithMessage(message);
        socket.send(JSON.stringify({
          type: validCommandType,
          id: store.user,
          timestamp: new Date(),
          message: result
        }));
      }
      case 'countdown' : {
        const result = getCountdownCommand(message);
        if (result) {
          socket.send(JSON.stringify({
            type: 'countdown',
            id: store.user,
            message: result
          }));
        } else {
          // error handling :)))
          alert('Format must be ex: /countdown 5 http://www.google.com')
        }
      }
        break;
      case 'fadelast':
        socket.send(JSON.stringify({
          type: 'fadelast',
          id: store.user
        }));
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

function* handleOnMessageType(socket) {
  const store = yield select();

  socket.send(JSON.stringify({
    type: 'typing',
    userId: store.user
  }));
}

function* handleCountdown ({payload}) {
  const store = yield select();

  if (store.user !== payload.id) {
    // than this is not me...continue with countdown
    yield(put(initCounter(Number(payload.message.time))));
    yield call(delay, payload.message.time * 1000);
    openDataLink(payload.message.url);
    yield(put(removeCounter()));
  }
}

export default function* messages (socket) {
  yield takeLatest(ActionTypes.onMessageSubmit, (action) => handleOnMessageSubmit(action, socket));
  yield takeLatest(ActionTypes.onMessageType, () => handleOnMessageType(socket));
  yield takeLatest(ActionTypes.countdownToNewWebsite, handleCountdown);
}
