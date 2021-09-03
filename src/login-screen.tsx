import React, { useState } from 'react';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert('Insira um e-mail válido.');
    }
  }

  const validatePassword = () => {
    if (password.length < 7) {
      alert('Senha deve ter no mínimo 7 caracteres.');
    }
    if (!/[a-z]|[A-Z]/.test(password)) {
      alert('Senha deve conter pelo menos 1 letra.');
    }
    if (!/[0-9]/.test(password)) {
      alert('Senha deve conter pelo menos 1 número.');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    validateEmail();
    validatePassword();
    event.preventDefault();
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
