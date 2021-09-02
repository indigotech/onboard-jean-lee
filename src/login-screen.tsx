import React from 'react';

function LoginScreen() {
  return (
    <div>
      <h1>Bem vindo(a) à Taqtile!</h1>
      <form>
        <label>
          E-mail
          <input type='text' name='email' />
        </label>
        <label>
          Senha
          <input type='password' name='senha' />
        </label>
        <input type='submit' name='submit'/>
      </form>
    </div>
  );
}

export default LoginScreen;
