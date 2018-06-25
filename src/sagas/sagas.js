import { takeLatest, select, call, put } from 'redux-saga/effects';
import { ActionTypes, CommandTypes } from '../types/types';
import { delay } from 'redux-saga';
import { initCounter, removeCounter } from '../actions/actions';

import * as API from '../api';

import { getMessageIfIsValidCommand, openDataLink } from '../utils/utils';

function* handleOnMessageSubmit({ payload }, socket) {
  const store = yield select();
  const { message } = payload;
  const validCommandType = getMessageIfIsValidCommand(message);

  // first check if the message we try to send is a valid command:
  switch (validCommandType) {
    case CommandTypes.NICK:
      API.changeNickName(socket, message, store.user);
      break;
    case CommandTypes.THINK:
    case CommandTypes.HIGHTLIGHT:
      API.changeMessageTheme(socket, validCommandType, message, store.user);
      break;
    case CommandTypes.COUNTDOWN:
      API.initCountdown(socket, message, store.user);
      break;
    case CommandTypes.FADELAST:
      API.changeLastMessageTheme(socket, store.user);
      break;
    case CommandTypes.OOPS:
      API.removeLastMessageSend(socket, store.user);
      break;
    default:
      API.sendMessage(socket, message, store.user);
      break;
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
