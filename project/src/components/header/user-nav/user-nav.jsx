import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../store/api-actions';
import {getUserEmail} from '../../../store/user/selectors';

function UserNav(props) {
  const {
    email,
    handleLogout,
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

const mapStateToProps = (state) => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout() {
    dispatch(logout());
  },
});

UserNav.propTypes = {
  email: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export {UserNav};
export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
