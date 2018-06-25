import { Reducer } from 'redux-testkit';
import * as Actions from '../../actions/actions';
import messageReducer from '../message';
import notificationReducer from '../notifications';
import usersReducer from '../users';

describe('Message Reducer', () => {
  test('should have default state', () => {
    Reducer(messageReducer)
      .expect({
        type: 'UNKNOWN'
      })
      .toReturnState([])
  });
  test('should properly add new message to the array', () => {
    const mockedMessage = {
      user: "1",
      message: "new message",
      timestamp: "2018-06-25T12:00:19.691Z",
      format: null
    };

    Reducer(messageReducer)
      .withState([])
      .expect(
        Actions.addMessage("1", "new message", "2018-06-25T12:00:19.691Z")
      )
      .toReturnState([mockedMessage])
  });
});

describe('Notification Reducer', () => {
  test('should have default state', () => {
    Reducer(notificationReducer)
      .expect({
        type: 'UNKNOWN'
      })
      .toReturnState({
        typing: {},
        counter: {}
      })
  });
  test('should properly add notification', () => {
    const mockedNotification = {
      id: 1,
      userId: "2"
    };

    Reducer(notificationReducer)
      .withState({
        typing: {},
        counter: {}
      })
      .expect(
        Actions.addTypingNotification(1, "2")
      )
      .toReturnState({
        typing: mockedNotification,
        counter: {}
      })
  });
});

describe('Users Reducer', () => {
  test('should have default state', () => {
    Reducer(usersReducer)
      .expect({
        type: 'UNKNOWN'
      })
      .toReturnState([])
  });
  test('should properly add new message to the array', () => {
    const mockedUser = {
      id: '1',
      name: 'chris'
    };

    Reducer(usersReducer)
      .withState([])
      .expect(
        Actions.addUser("1", "chris")
      )
      .toReturnState([mockedUser])
  });
});