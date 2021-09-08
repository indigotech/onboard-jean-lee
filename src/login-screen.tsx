import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { data, loading, error }] = useMutation(LOGIN, { 
    errorPolicy: 'none',
    onError(error) {
      alert(error.message);
    },
    onCompleted(data) { 
      alert('Login efetuado com sucesso.');
    },
  });

  const validateEmail = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert('O e-mail está com formato inválido. Por favor, corrija.');
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = () => {
    let validPassword = true;
    if (password.length < 7) {
      alert('Senha deve ter no mínimo 7 caracteres.');
      validPassword = false;
    }
    if (!/[a-z]|[A-Z]/.test(password)) {
      alert('Senha deve conter pelo menos 1 letra.');
      validPassword = false;
    }
    if (!/[0-9]/.test(password)) {
      alert('Senha deve conter pelo menos 1 número.');
      validPassword = false;
    }
    return validPassword;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    if (validEmail && validPassword) {
      login({
        variables: {
          email: email,
          password: password,
        },
      });
    }
  };

  return (
    <div>
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
