import * as React from 'react';
import { connect } from 'react-redux';
import { Bubble, Flex, Field } from './components/ui';

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
        this.props.onMessageSubmit(message);
      }
    }
  }

  render() {
    return (
      <Flex className="chat-body" margin="none">
        <Flex className="conversation" direction="column-reverse">
          <Bubble author="Chris" time="1529739254" state="self">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis tincidunt ex et arcu laoreet suscipit.
            Sed non viverra diam. Phasellus eleifend pretium mi et blandit.
            Ut augue nisl, luctus et justo non, molestie blandit purus.
          </Bubble>
          <Bubble author="Mike" time="1529739254" state="other">
            Phasellus eleifend pretium mi et blandit.
            Ut augue nisl, luctus et justo non, molestie blandit purus.
          </Bubble>
          <Bubble author="Mike" time="1529739254" state="other">
            Phasellus eleifend pretium mi et blandit.
            Ut augue nisl, luctus et justo non, molestie blandit purus.
          </Bubble>
          <Bubble author="Mike" time="1529739254" state="other">
            Phasellus eleifend pretium mi et blandit.
            Ut augue nisl, luctus et justo non, molestie blandit purus.
          </Bubble>
        </Flex>
        <Flex className="editor-space" margin="0" padding="0" align="center" justify="center">
          <Field
            fieldType="textarea"
            onChange={this.handleMessageType}
            onKeyDown={this.handleKeyDown}
          />
        </Flex>
      </Flex>
    )
  }
}

export default connect(null, Actions)(ChatApp)