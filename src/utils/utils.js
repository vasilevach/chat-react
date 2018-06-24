export const getMessageIfIsValidCommand = (message) => {
  const commandsRegexString = /\/(nick|think|oops|fadelast|highlight|countdown)/;
  const commandsRegex = new RegExp(commandsRegexString);

  if (message.startsWith("\/") && commandsRegex.exec(message)) {
    return commandsRegex.exec(message)[1];
  }
  return false;
};

export const getMessageFromValidCommandWithMessage = (command) => command.substring(command.indexOf(' ') + 1)

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

  return {};
};

export const getUserObjectById = (id, users) => users.find((u) => u.id === id);
