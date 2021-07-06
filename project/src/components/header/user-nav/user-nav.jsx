import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';
import {logout} from '../../../store/api-actions';

function UserNav(props) {
  const {
    email,
    logout,
  } = props;

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
        <Link
          to={AppRoute.ROOT}
          className="header__nav-link"
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(logout());
  },
});

UserNav.propTypes = {
  email: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export {UserNav};
export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
