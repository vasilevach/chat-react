import { ActionTypes } from '../types/types';

export const onMessageType = () => ({
  type: ActionTypes.onMessageType
});

export const onMessageSubmit = (message) => ({
  type: ActionTypes.onMessageSubmit,
  payload: { message }
});

export const onMessageRecieve = (message) => ({
  type: ActionTypes.onMessageReceive,
  payload: { message }
});

export const changeNickname = (id, nickname) => ({
  type: ActionTypes.changeNickname,
  payload: { id, nickname }
});

export const addUser = (id, name) => ({
  type: ActionTypes.addUser,
  payload: { id, name }
});

export const setCurrentUser = (name) => ({
  type: ActionTypes.setCurrentUser,
  payload: { name }
});