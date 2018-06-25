import * as utils from '../utils';

describe('Common Utils For the Chat App', () => {
  describe('validateUrl', () => {
    test('should be a function', () => {
      expect(utils.validateUrl).toBeInstanceOf(Function);
    });
    test('should return false when not a valid url', () => {
      expect(utils.validateUrl('absdfg')).toEqual(false);
    });
    test('should return true when a valid', () => {
      expect(utils.validateUrl('http://www.google.com')).toEqual(true);
    });
  });
  describe('getMessageIfIsValidCommand', () => {
    test('should return true value', () => {
      expect(utils.getMessageIfIsValidCommand('/nick chris')).toEqual('nick');
    })
  });
  describe('getMessageFromValidCommandWithMessage', () => {
    test('should return true value', () => {
      expect(utils.getMessageFromValidCommandWithMessage('/nick chris')).toEqual('chris');
    })
  });
  describe('getCountdownCommand', () => {
    test('should return true value', () => {
      expect(utils.getCountdownCommand('/countdown 5 http://www.google.com')).toEqual({ time: "5", url: 'http://www.google.com' });
      expect(utils.getCountdownCommand('/countdown 5 hgdahgdja')).toEqual(null);
    })
  });
  describe('getUserNameById', () => {
    test('should return true value', () => {
      const usersList = [{id: 1, name: 'chris'}, {id: 2, name: 'mike'}];
      expect(utils.getUserNameById(2, usersList)).toEqual('mike');
    })
  });
  describe('isTheUserPrimeryUser', () => {
    test('should return true value', () => {
      const user = "111";
      expect(utils.isTheUserPrimeryUser("111", user)).toEqual(true);
    })
  });
  describe('getUserObjectById', () => {
    test('should return true value', () => {
      const usersList = [{id: 1, name: 'chris'}, {id: 2, name: 'mike'}];
      expect(utils.getUserObjectById(1, usersList)).toEqual({id: 1, name: 'chris'});
    })
  });
  describe('formatEmojiMessage', () => {
    test('should return true value', () => {
      const message = "This is definitely my favorite test (wink) :)";
      expect(utils.formatEmojiMessage(message)).toEqual("This is definitely my favorite test 😉 😊");
    })
  })
});