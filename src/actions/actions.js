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

export const addMessage = (user, message, timestamp, format = null) => ({
  type: ActionTypes.addMessage,
  payload: { user, message, timestamp, format }
});

export const removeLastMessage = (user) => ({
  type: ActionTypes.removeLastMessage,
  payload: { user }
});

export const fadeLastMessage = (user) => ({
  type: ActionTypes.fadeLastMessage,
  payload: { user }
});

export const addTypingNotification = (id, userId) => ({
  type: ActionTypes.addTypingNotification,
  payload: { id, userId }
});

export const removeTypingNotification = () => ({
  // I will just remove the whole notification, because we have 2 ppl. If they were more, I would remove it by id
  type: ActionTypes.removeTypingNotification
});