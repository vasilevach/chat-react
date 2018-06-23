import { call, takeLatest, put, cancel } from 'redux-saga/effects';
import { ActionTypes } from '../types/types';

function* handleOnMessageSubmit({ payload }) {
  const { message } = payload;

  debugger;
}

export default function* messages () {
  yield takeLatest(ActionTypes.onMessageSubmit, handleOnMessageSubmit);
}
