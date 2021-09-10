import React, { useContext, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { getAuthToken, validateEmail, validatePassword } from '../../utils';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { loading, error, authenticate } = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);
    if (validEmail && validPassword) {
      await authenticate(email, password).then(() => history.push('/home'));
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
        <input type='submit' name='submit' />
      </form>
    </div>
  );
};

export default LoginScreen;
