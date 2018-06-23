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

export const changeNickname = (from, newNickname) => ({
  type: ActionTypes.changeNickname,
  payload: { from, newNickname }
});

export const addUser = (name) => ({
  type: ActionTypes.addUser,
  payload: { name }
});