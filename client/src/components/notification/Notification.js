import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { getNotificationsArray } from '../../redux/selectors/notification';
import { Wrapper } from './NotificationStyle';

const mapStateToProps = state => ({
	notifications: getNotificationsArray(state),
});

const Notification = props => {
  const { notifications } = props;

  if (isEmpty(notifications)) {
    return null;
  }

  return notifications.map(notification => {
    const { number, type = 'error', message = '' } = notification;

    return createPortal(
      <Wrapper
        number={ number }
        type={ type }
      >
        { message }
      </Wrapper>,
      document.querySelector('#notification')
    )
  });
}

export default connect(mapStateToProps)(Notification);
