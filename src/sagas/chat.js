import { call, takeLatest, put } from 'redux-saga/effects';
import { ActionTypes } from '../types/types';

function* handleOnFieldChange(action) {
  debugger;
}

export default function* chat () {
  yield takeLatest(ActionTypes.onFieldChange, handleOnFieldChange);
}
