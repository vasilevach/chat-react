import * as React from 'react';
import { connect } from 'react-redux';
import { Bubble, Flex, Field } from './components/ui';

import './chat-app.scss';


class ChatApp extends React.Component {
  render(){
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
          <Field fieldType="textarea" onChange={() => null}/>
        </Flex>
      </Flex>
    )
  }
}

export default connect(null, null)(ChatApp)