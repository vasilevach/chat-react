export const getMessageIfIsValidCommand = (message) => {
  const commandsRegexString = /\/(nick|think|oops|fadelast|highlight|countdown)/;
  const commandsRegex = new RegExp(commandsRegexString);

  if (message.startsWith("\/") && commandsRegex.exec(message)) {
    return commandsRegex.exec(message)[1];
  }
  return false;
};

export const getMessageFromValidCommandWithMessage = (command) => {
  return command.substring(command.indexOf(' ') + 1);
};