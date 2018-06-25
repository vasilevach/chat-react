import { getMessageFromValidCommandWithMessage, getCountdownCommand } from './utils/utils';

export const pushMessageToSocket = (socket, payload) => (
  socket.send(JSON.stringify(payload))
);

export const changeNickName = (socket, message, user) => {
  const result = getMessageFromValidCommandWithMessage(message);
  pushMessageToSocket(socket, {
    type: 'nickname',
    id: user,
    nickname: result
  });
};

export const changeMessageTheme = (socket, type, message, user) => {
    const result = getMessageFromValidCommandWithMessage(message);
    pushMessageToSocket(socket, {
      type,
      id: user,
      timestamp: new Date(),
      message: result
    });
};

export const changeLastMessageTheme = (socket, user) => (
  pushMessageToSocket(socket, {
    type: 'fadelast',
    id: user
  })
);

export const initCountdown = (socket, message, user) => {
  const result = getCountdownCommand(message);

  if (result) {
    pushMessageToSocket(socket, {
      type: 'countdown',
      id: user,
      message: result
    });
  } else {
    // error handling :)))
    alert('Format must be ex: /countdown 5 http://www.google.com')
  }
};

export const removeLastMessageSend = (socket, user) => (
  pushMessageToSocket(socket, {
    type: 'oops',
    id: user
  })
);

export const sendMessage = (socket, message, user) => (
  pushMessageToSocket(socket, {
    type: 'message',
    id: user,
    timestamp: new Date(),
    message
  })
);

export const sendUserTypingEvent = (socket, user) => (
  pushMessageToSocket(socket, {
    type: 'typing',
    userId: user
  })
);

export const handshakeNewUser = (socket, userData) => (
  pushMessageToSocket(socket, {
    type: 'userHandshakeResponse',
    ...userData
  })
);
