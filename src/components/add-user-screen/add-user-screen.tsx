import React, { FormEvent, useState } from 'react';
import { Route, Redirect } from 'react-router';
import { getAuthToken, validateBirthdate, validateEmail, validateNotEmpty, validatePhone } from 'utils';
import loadingSpinner from 'loading.gif';
import { AddUserWrapper } from './styles';

const AddUserScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validName = validateNotEmpty(name);
    const validPhone = validatePhone(phone);
    const validEmail = validateEmail(email);
    const validRole = validateNotEmpty(role);
    const validBirthdate = validateBirthdate(birthdate);

    if (validName && validPhone && validEmail && validRole && validBirthdate) {
      alert('Submetido');
    }
  };

  return (
    <AddUserWrapper>
      <Route path='/add-user'>{!getAuthToken() && <Redirect to='/login' />}</Route>
      <h1>Novo usuário</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome
          <input type='text' name='name' onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Telefone
          <input type='text' name='phone' onChange={(event) => setPhone(event.target.value)} />
        </label>
        <br />
        <label>
          Data de nascimento
          <input type='date' name='birthdate' onChange={(event) => setBirthdate(event.target.value)} />
        </label>
        <br />
        <label>
          E-mail
          <input type='text' name='email' onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Role
          <input type='text' name='role' onChange={(event) => setRole(event.target.value)} />
        </label>
        <br />
        <button type='submit' name='submit' >
          Entrar
        </button>
      </form>
    </AddUserWrapper>
  );
};

export default AddUserScreen;