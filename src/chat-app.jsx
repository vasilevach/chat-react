import * as React from 'react';
import { connect } from 'react-redux';
import { Bubble, Flex } from './components/ui';


class ChatApp extends React.Component {
  render(){
    return (
      <Flex className="chat-body">
        <Bubble author="Chris" time="1529739254">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis tincidunt ex et arcu laoreet suscipit.
          Sed non viverra diam. Phasellus eleifend pretium mi et blandit.
          Ut augue nisl, luctus et justo non, molestie blandit purus.
        </Bubble>
      </Flex>
    )
  }
}

export default connect(null, null)(ChatApp)