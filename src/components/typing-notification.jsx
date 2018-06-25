import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
import { isTheUserPrimeryUser, getUserNameById } from '../utils/utils';

import { Text } from './ui';

const NOTIFICATION_DELAY = 1000;

class TypingNotification extends React.Component {
  timeout = null;

  shouldAddNotification = () => {
    const { typing, user } = this.props;
    return Object.keys(typing).length && !isTheUserPrimeryUser(typing.userId, user);
  }

  componentDidUpdate(prevProps) {
    const { typing } = this.props;

    if (!Object.keys(typing).length || !Object.keys(prevProps.typing).length) {
      return;
    }

    if (typing.id !== prevProps.typing.id) {
      // this will remove the notification 1 second after the user has stopped typing.
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.props.removeTypingNotification();
      }, NOTIFICATION_DELAY);
    }
  }

  render() {
    const { typing, users } = this.props;

    if (this.shouldAddNotification()) {
      return (
        <Text size="x-small" color="light">{getUserNameById(typing.userId, users)} is typing...</Text>
      )
    }

    return null;
  }
}

const mapStateToProps = (state) => ({
  typing: state.notifications.typing,
  user: state.user,
  users: state.users
});

export default connect(mapStateToProps, Actions)(TypingNotification);

TypingNotification.propTypes = {
  typing: PropTypes.any,
  user: PropTypes.string,
  users: PropTypes.array,
  removeTypingNotification: PropTypes.func
};