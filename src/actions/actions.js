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

export const changeNickname = (id, name) => ({
  type: ActionTypes.changeNickname,
  payload: { id, name }
});

export const addUser = (id, name) => ({
  type: ActionTypes.addUser,
  payload: { id, name }
});

export const setCurrentUser = (name) => ({
  type: ActionTypes.setCurrentUser,
  payload: { name }
});

export const addMessage = (user, message, timestamp) => ({
  type: ActionTypes.addMessage,
  payload: { user, message, timestamp }
});