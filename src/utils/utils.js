export const validateUrl = (value) => {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

export const getMessageIfIsValidCommand = (message) => {
  const commandsRegexString = /\/(nick|think|oops|fadelast|highlight|countdown)/;
  const commandsRegex = new RegExp(commandsRegexString);

  if (message.startsWith("\/") && commandsRegex.exec(message)) {
    return commandsRegex.exec(message)[1];
  }
  return false;
};

export const getMessageFromValidCommandWithMessage = (command) => command.substring(command.indexOf(' ') + 1);

export const getCountdownCommand = (command) => {
  let result = {};
  const commandArray = command.split(' ');

  commandArray.forEach((item) => {
    if (!isNaN(item)) {
      result.time = item;
    }
    if (validateUrl(item)) {
      result.url = item;
    }
  });

  if (!result.time || !result.url ) {
    // we assume this is not correct
    return null;
  }

  return result;
}

export const getUserNameById = (userId, usersList) => usersList.find((u) => u.id === userId).name;

export const getDateByTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const isTheUserPrimeryUser = (userId, user) => userId === user;

export const getUserStatusById = (userId, user) => {
  if (isTheUserPrimeryUser(userId, user)) {
    return 'self';
  }

  return 'other';
};

export const getPropsByMessageFormat = (format) => {

  if (format === 'think') {
    return {
      color: 'dark-grey',
      style: 'italic'
    }
  }

  if (format === 'highlight') {
    return {
      size: 'large'
    }
  }

  return {};
};

export const getUserObjectById = (id, users) => users.find((u) => u.id === id);

export const formatEmojiMessage = (message) => {
  const emojiObject = {
    ':)': "😊",
    '(smile)': "😊",
    ';)': "😉",
    '(wink)': "😉"
  };
  return message.replace(/:\)|\(smile\)|;\)|\(wink\)/gi, (matched) => emojiObject[matched]);
};

export const openDataLink = (url) => {
  const link = document.createElement('a');

  link.style.display = 'none';
  link.href = url;
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
};
