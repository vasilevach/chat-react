import { ActionTypes } from './types/types';
import {
  onMessageRecieve, changeNickname, addUser, setCurrentUser, addMessage, removeLastMessage
} from './actions/actions';
import { getUserObjectById } from './utils/utils';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const setupSocket = (dispatch, store) => {
  const socket = new WebSocket('ws://localhost:8999');
  const random5digitNumber = Math.floor(Math.random()*90000) + 10000;

  socket.onopen = () => {
    const myGuid = guid();
    const userName = `user${random5digitNumber}`;

    socket.send(JSON.stringify({
      type: 'newUser',
      name: userName,
      id: myGuid
    }));
    dispatch(setCurrentUser(myGuid));
  };

  socket.onmessage = (event) => {
    const currentStore = store.getState();
    const data = JSON.parse(event.data);
    switch (data.type) {
      case 'newUser':
        dispatch(addUser(data.id, data.name));
        if (data.id !== currentStore.user) {
          socket.send(JSON.stringify({
            type: 'userHandshakeResponse',
            ...getUserObjectById(currentStore.user, currentStore.users)
          }));
        }
        break;
      case 'userHandshakeResponse':
        if (!getUserObjectById(data.id, currentStore.users)) {
          dispatch(addUser(data.id, data.name));
        }
        break;
      case 'nickname':
        dispatch(changeNickname(data.id, data.nickname));
        break;
      case 'message':
        dispatch(addMessage(data.id, data.message, data.timestamp));
        break;
      case 'think':
        const format = 'think';
        dispatch(addMessage(data.id, data.message, data.timestamp, format));
        break;
      case 'oops':
        dispatch(removeLastMessage(data.id));
        break;
      case 'typing':
        break;
      default:
        break
    }
  }

  return socket;
}

export default setupSocket