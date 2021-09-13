import React, { useContext, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { AuthContext } from 'context/auth-context';
import { getAuthToken, validateEmail, validatePassword } from 'utils';
import loadingSpinner from 'loading.gif';
import 'app.css';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { loading, authenticate } = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);
    if (validEmail && validPassword) {
      authenticate(email, password)
        .then(() => history.push('/home'))
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div>
      <Route path='/login'>{getAuthToken() && <Redirect to='/home' />}</Route>
      <h1>Bem vindo(a) à Taqtile!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input type='text' name='email' onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Senha
          <input type='password' name='password' onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type='submit' name='submit' disabled={loading}>
          {loading && <img src={loadingSpinner} height='20px' />}
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
