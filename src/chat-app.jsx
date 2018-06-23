import * as React from 'react';
import { connect } from 'react-redux';


class ChatApp extends React.Component {
  render(){
    return <h1>hi from chat app</h1>
  }
}

export default connect(null, null)(ChatApp)