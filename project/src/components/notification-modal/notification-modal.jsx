import React from 'react';
import './notification-modal.css';
import {useDispatch, useSelector} from 'react-redux';
import {hideNotificationModal} from '../../store/action';
import {getNotificationText} from '../../store/other/selectors';

function NotificationModal() {
  const dispatch = useDispatch();
  const text = useSelector(getNotificationText);
  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(hideNotificationModal());
  };
  return (
    <div className="notification-modal-wrapper">
      <div className="notification-modal">
        <p className="notification-modal__text">{text}</p>
        <button
          className="notification-modal__button button"
          onClick={(e) => handleButtonClick(e)}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default NotificationModal;
