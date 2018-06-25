import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';
import { Flex } from '../ui';

import './counter.scss';

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
      <Flex justify="center" align="center" className="counter">
        <h1>{this.state.countDown}</h1>
      </Flex>
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.props.removeCounter();
  }
}

Counter.propTypes = {
  removeCounter: PropTypes.func
};

const mapStateToProps = (state) => ({
  time: state.notifications.counter.time
});

export default connect(mapStateToProps, Actions)(Counter);