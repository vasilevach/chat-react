import { call, takeLatest, put, cancel } from 'redux-saga/effects';
import { ActionTypes } from '../types/types';

import { getMessageIfIsValidCommand, getMessageFromValidCommandWithMessage } from '../utils/utils';

function* handleOnMessageSubmit({ payload }) {
  const { message } = payload;
  const validCommandType = getMessageIfIsValidCommand(message);

  // first check if the message we try to send is a valid command:
  if (validCommandType) {
    switch(validCommandType) {
      case 'nick':
        const result = getMessageFromValidCommandWithMessage(message);
        debugger;
      default:
        break;
    }
  }

}

export default function* messages () {
  yield takeLatest(ActionTypes.onMessageSubmit, handleOnMessageSubmit);
}
