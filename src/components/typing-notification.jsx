import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTypingNotification } from '../actions/actions';
import { isTheUserPrimeryUser, getUserNameById } from '../utils/utils';

import { Text } from './ui';

const NOTIFICATION_DELAY = 1000;

class TypingNotification extends React.Component {

  componentDidUpdate(prevProps) {
    console.log(this.props.notifications.typing.id)
  }

  render() {
    const { notifications, user, users } = this.props;

    if (!Object.keys(notifications).length || isTheUserPrimeryUser(notifications.typing.userId, user)) {
      return null;
    }

    return (
      <Text size="x-small" color="light">{getUserNameById(notifications.typing.userId, users)} is typing...</Text>
    )
  }
}

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  user: state.user,
  users: state.users
});

export default connect(mapStateToProps, removeTypingNotification)(TypingNotification);

TypingNotification.propTypes = {
  notification: {
    id: PropTypes.string,
    userId: PropTypes.string
  },
  user: PropTypes.string,
  users: PropTypes.array,
  removeTypingNotification: PropTypes.func
};