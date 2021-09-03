import React, { useState } from 'react';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasChar, setHasChar] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setPassword(input);
    const lastDigit = input.substr(input.length - 1);
    //alert(lastDigit);
    if (/[a-z]/.test(lastDigit) || /[A-Z]/.test(lastDigit)) {
      setHasChar(true);
    }
    if (/[0-9]/.test(lastDigit)) {
      setHasNumber(true);
    }
  }

  const validateForm = () => {

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert('Insira um e-mail válido.')
    }

    if (password.length < 7) {
      alert('Senha deve ter no mínimo 7 caracteres.');
    }
    if (!hasChar) {
      alert('Senha deve conter pelo menos 1 letra.');
    }
    if (!hasNumber) {
      alert('Senha deve conter pelo menos 1 número.');
    }
  };
 
  const handleSubmit = (event: React.FormEvent) => {
    validateForm();
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
          <input type='password' name='password' onChange={handlePasswordChange} />
        </label>
        <br />
        <input type='submit' name='submit' />
      </form>
    </div>
  );
};

export default LoginScreen;
