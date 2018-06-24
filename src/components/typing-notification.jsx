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
    const { notifications, user } = this.props;
    return Object.keys(notifications).length && !isTheUserPrimeryUser(notifications.typing.userId, user);
  }

  componentDidUpdate(prevProps) {
    const { notifications, user } = this.props;

    if (!Object.keys(notifications).length || !Object.keys(prevProps.notifications).length) {
      return;
    }

    if (prevProps.notifications.typing.id !== notifications.typing.id) {
      // this will remove the notification 1 second after the user has stopped typing.
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.props.removeTypingNotification();
      }, NOTIFICATION_DELAY);
    }
  }

  render() {
    const { notifications, users } = this.props;

    if (this.shouldAddNotification()) {
      return (
        <Text size="x-small" color="light">{getUserNameById(notifications.typing.userId, users)} is typing...</Text>
      )
    }

    return null;
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  user: state.user,
  users: state.users
});

export default connect(mapStateToProps, Actions)(TypingNotification);

TypingNotification.propTypes = {
  notification: PropTypes.any,
  user: PropTypes.string,
  users: PropTypes.array,
  removeTypingNotification: PropTypes.func
};