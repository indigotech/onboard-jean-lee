import React, { useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { useAuthenticator } from './authenticator';
import { getAuthToken, validateEmail, validatePassword } from 'utils';
import 'app.css';
import { H1 } from 'shared/text-styles/text-styles';
import FormButton from 'shared/form-button/form-button';
import FormField from 'shared/form-item/form-field';
import { LoginScreenWrapper } from './styles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useHistory();

  const { loading, authenticate } = useAuthenticator();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const emailHasError = validateEmail(email);
    setEmailError(emailHasError);

    const passwordHasError = validatePassword(password);
    setPasswordError(passwordHasError);

    if (!emailHasError && !passwordHasError) {
      authenticate(email, password)
        .then(() => history.push('/user-list'))
        .catch((err) => alert(err.message));
    }
  };

  return (
    <LoginScreenWrapper>
      <Route path='/login'>{getAuthToken() && <Redirect to='/user-list' />}</Route>
      <H1>Bem vindo(a) à Taqtile!</H1>
      <form onSubmit={handleSubmit}>
        <FormField 
          type='text'
          name='e-mail' 
          onChange={(input) => setEmail(input)}
          errorMessage={emailError} 
        />
        <FormField
          type='password'
          name='password'
          onChange={(input) => setPassword(input)}
          errorMessage={passwordError}
        />
        <FormButton loading={loading}>Entrar</FormButton>
      </form>
    </LoginScreenWrapper>
  );
};

export default LoginScreen;
