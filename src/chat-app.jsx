import * as React from 'react';
import { connect } from 'react-redux';
import { Bubble, Flex, Field } from './components/ui';

import { getUserById, getDateByTimestamp, getUserStatusById } from './utils/utils';

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
    const { messages, users, user } = this.props;
    const { message } = this.state;
    return (
      <Flex className="chat-body" margin="none">
        <Flex className="conversation" direction="column-reverse">
          {
            messages.map((message, i) => (
              <Bubble
                key={i}
                author={getUserById(message.user, users)}
                time={getDateByTimestamp(message.timestamp)}
                state={getUserStatusById(message.user, user)}>
                {message.message}
              </Bubble>
            ))
          }
        </Flex>
        <Flex className="editor-space" margin="none" padding="none" align="center" justify="center">
          <Field
            fieldType="textarea"
            value={message}
            onChange={this.handleMessageType}
            onKeyDown={this.handleKeyDown}
          />
        </Flex>
      </Flex>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  users: state.users,
  user: state.user
});

export default connect(mapStateToProps, Actions)(ChatApp)