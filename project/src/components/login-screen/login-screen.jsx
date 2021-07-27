import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {AppRoute} from '../../const';
import {useLogin} from '../../hooks/use-login/useLogin';
import {getIsAuthorized} from '../../store/user/selectors';

function LoginScreen() {
  const isAuthorized = useSelector(getIsAuthorized);
  const dispatch = useDispatch();
  const onSubmit = (authData) => {
    dispatch(login(authData));
  };

  const [loginRef, passwordRef, handleSubmit] = useLogin(onSubmit);

  if (isAuthorized) {
    return (
      <Redirect
        to={AppRoute.ROOT}
      />
    );
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="/">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
