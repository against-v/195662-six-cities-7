import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {showNotificationModal} from '../../store/action';
import {login} from '../../store/api-actions';
import {LoginNotification} from '../../const';

export const useLogin = () => {
  const loginRef = useRef();
  const passwordRef = useRef();
  let passwordIsValid = true;
  const dispatch = useDispatch();

  const validatePassword = (password) => !/^ *$/.test(password);


  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;

    passwordIsValid = validatePassword(password);

    if (passwordIsValid) {
      dispatch(login({
        login: loginRef.current.value,
        password,
      }));
    } else {
      dispatch(showNotificationModal(LoginNotification.PASSWORD));
    }
  };

  return [loginRef, passwordRef, handleSubmit, passwordIsValid];
};
