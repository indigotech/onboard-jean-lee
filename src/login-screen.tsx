import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        name
        phone
        email
        role
      }
    }
  }
`;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const [login, { data, loading, error }] = useMutation(LOGIN, { 
    errorPolicy: 'all',
  });

  const validateEmail = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert('O e-mail está com formato inválido. Por favor, corrija.');
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const validatePassword = () => {
    setValidPassword(true);
    if (password.length < 7) {
      alert('Senha deve ter no mínimo 7 caracteres.');
      setValidPassword(false);
    }
    if (!/[a-z]|[A-Z]/.test(password)) {
      alert('Senha deve conter pelo menos 1 letra.');
      setValidPassword(false);
    }
    if (!/[0-9]/.test(password)) {
      alert('Senha deve conter pelo menos 1 número.');
      setValidPassword(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    validateEmail();
    validatePassword();
    
    if (validEmail && validPassword) {
      login({
        variables: {
          email: email,
          password: password,
        },
      });
      if (error) {
        alert(error.message);
      } else {
        alert('Login efetuado com sucesso.')
        console.log(data);
      }
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
