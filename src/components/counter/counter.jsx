import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import cn from '../utils';

class Counter extends React.Component {
  interval = null;

  state = {
    countDown: this.props.time
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ countDown : this.state.countDown - 1 })
    }, 1000)
  }

  render() {

    return (
      <h1>{this.state.countDown}</h1>
    )
  }

  componentWillUnmount() {
    this.removeCounter();
  }
}

Counter.propTypes = {
};

Counter.defaultProps = {
};

const mapStateToProps = (state) => ({
  time: state.notifications.counter.time
});

export default connect(mapStateToProps, Actions)(Counter);