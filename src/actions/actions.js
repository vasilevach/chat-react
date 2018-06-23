import { ActionTypes } from '../types/types';

export const onMessageType = () => ({
  type: ActionTypes.onMessageType
});

export const onMessageSubmit = (message) => ({
  type: ActionTypes.onMessageSubmit,
  payload: { message }
});