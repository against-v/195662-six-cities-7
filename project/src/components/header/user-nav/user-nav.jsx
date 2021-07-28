import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../../store/api-actions';
import {getUserEmail} from '../../../store/user/selectors';
import {AppRoute} from '../../../const';

function UserNav() {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.FAVORITES}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
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
