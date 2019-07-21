import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { notEmpty } from '../../utils/array';
import { getNotification } from '../../redux/selectors/notification';
import { Wrapper } from './NotificationStyle';

const mapStateToProps = state => ({
	notification: getNotification(state),
});

const Notification = props => {
  const { notification } = props;

  return notEmpty(notification)
    && createPortal(
      <Wrapper>
        { notification['[Trainer]'].message }
      </Wrapper>,
      document.querySelector('#notification')
    );
}

export default connect(mapStateToProps)(Notification);
