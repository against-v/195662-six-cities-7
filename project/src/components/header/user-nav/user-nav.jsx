import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../../store/api-actions';
import {getUserEmail} from '../../../store/user/selectors';

function UserNav() {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="/">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
        </a>
      </li>
      <li className="header__nav-item">
        <a
          href="/"
          className="header__nav-link"
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </ul>
  );
}

export default UserNav;
