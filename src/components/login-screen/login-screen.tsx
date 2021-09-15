import React, { useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { useAuthenticator } from './authenticator';
import { getAuthToken, validateEmail, validatePassword } from 'utils';
import loadingSpinner from 'loading.gif';
import 'app.css';
import { H1 } from 'shared/text-styles/text-styles';
import FormButton from 'shared/form-button/form-button';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { loading, authenticate } = useAuthenticator();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);
    if (validEmail && validPassword) {
      authenticate(email, password)
        .then(() => history.push('/user-list'))
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div>
      <Route path='/login'>{getAuthToken() && <Redirect to='/user-list' />}</Route>
      <H1>Bem vindo(a) à Taqtile!</H1>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input type='text' name='email' onChange={(event) => setEmail(event.target.value)} required/>
        </label>
        <br />
        <label>
          Senha
          <input type='password' name='password' onChange={(event) => setPassword(event.target.value)} required/>
        </label>
        <br />
        <FormButton loading={loading}>
          Entrar
        </FormButton>
      </form>
    </div>
  );
};

export default LoginScreen;
