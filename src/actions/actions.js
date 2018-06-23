import { ActionTypes } from '../types/types';

export const onFieldChange = (message) => ({
  type: ActionTypes.onFieldChange,
  payload: { message }
});