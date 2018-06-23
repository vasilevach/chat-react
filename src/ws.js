import { ActionTypes } from './types/types';
import { onMessageRecieve, changeNickname, addUser } from './actions/actions';

const setupSocket = (dispatch) => {
  const socket = new WebSocket('ws://localhost:8999')

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: 'newUser',
      name: `user${Math.random() * 100}`
    }))
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case 'newUser':
        dispatch(addUser(data.name));
        break;
      case 'nickname':
        dispatch(changeNickname(data.from, data.newNickname));
        break;
      case 'message':
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