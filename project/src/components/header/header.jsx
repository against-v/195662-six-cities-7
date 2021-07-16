import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import GuestNav from './guest-nav/guest-nav';
import UserNav from './user-nav/user-nav';
import {getIsAuthorized} from '../../store/user/selectors';

function Header() {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={AppRoute.ROOT}
              className="header__logo-link header__logo-link--active"
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {isAuthorized ? <UserNav/>: <GuestNav/>}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
