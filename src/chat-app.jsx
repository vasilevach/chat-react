import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bubble, Flex, Field, Text, cn } from './components/ui';
import { Counter, TypingNotification } from './components';

import {
  getUserNameById, getDateByTimestamp, getUserStatusById, getPropsByMessageFormat, formatEmojiMessage
} from './utils/utils';

import * as Actions from './actions/actions';

import './chat-app.scss';

const KEY = {
  ENTER: 'Enter'
};

class ChatApp extends React.Component {
  state = {
    message: ''
  };

  handleMessageType = (event) => {
    this.setState({
      message: event.target.value
    }, () => this.props.onMessageType());
  }

  handleKeyDown = (event) => {
    const { message } = this.state;

    if (event.key === KEY.ENTER) {
      event.preventDefault();
      if (message !== '') {
        this.setState({
          message: ''
        }, () => this.props.onMessageSubmit(message));
      }
    }
  }

  render() {
    const { countNotification, messages, users, user } = this.props;
    const { message } = this.state;
    const addCountNotification = Boolean(Object.keys(countNotification).length);
    return (
      <React.Fragment>
        {addCountNotification && <Counter />}
        <Flex className="chat-body" margin="none">
          <Flex className="conversation" direction="column-reverse">
            {
              messages.map((message, i) => (
                <Bubble
                  key={i}
                  author={getUserNameById(message.user, users)}
                  time={getDateByTimestamp(message.timestamp)}
                  state={getUserStatusById(message.user, user)}
                  className={cn(message.format && `bubble--${message.format}`)}
                >
                  <Text {...getPropsByMessageFormat(message.format)}>
                    {formatEmojiMessage(message.message)}
                  </Text>
                </Bubble>
              ))
            }
          </Flex>
          <Flex className="editor-space" margin="none" padding="none" align="center" justify="center">
            <div className="editor-textarea-wrapper">
              <TypingNotification />
              <Field
                fieldType="textarea"
                value={message}
                onChange={this.handleMessageType}
                onKeyDown={this.handleKeyDown}
              />
            </div>
          </Flex>
        </Flex>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  users: state.users,
  user: state.user,
  countNotification: state.notifications.counter
});

ChatApp.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.string,
  users: PropTypes.array,
  countNotification: PropTypes.any
};

export default connect(mapStateToProps, Actions)(ChatApp)