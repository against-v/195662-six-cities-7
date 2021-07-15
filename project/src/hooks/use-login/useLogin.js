import {useRef} from 'react';

export const useLogin = (onSubmit) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return [loginRef, passwordRef, handleSubmit];
};
