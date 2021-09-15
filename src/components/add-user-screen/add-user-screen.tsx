import React, { FormEvent, useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router';
import { getAuthToken, validateBirthDate, validateEmail, validatePhone } from 'utils';
import loadingSpinner from 'loading.gif';
import { AddUserWrapper } from './styles';
import useAddUser from './user-adder';
import { H1 } from 'shared/text-styles/text-styles';
import FormButton from 'shared/form-button/form-button';

const AddUserScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const history = useHistory();

  const { loading, addUser } = useAddUser();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validPhone = validatePhone(phone);
    const validEmail = validateEmail(email);
    const validBirthdate = validateBirthDate(birthDate);
    if (validPhone && validEmail && validBirthdate) {
      addUser({ name: name, phone: phone, birthDate: birthDate, email: email, role: role })
        .then(() => history.push('/user-list'))
        .catch((error) => alert(error.message));
    }
  };

  return (
    <AddUserWrapper>
      <Route path='/add-user'>{!getAuthToken() && <Redirect to='/login' />}</Route>
      <H1>Novo usuário</H1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome
          <input type='text' name='name' onChange={(event) => setName(event.target.value)} required />
        </label>
        <br />
        <label>
          Telefone
          <input type='text' name='phone' onChange={(event) => setPhone(event.target.value)} required />
        </label>
        <br />
        <label>
          Data de nascimento
          <input type='date' name='birthdate' onChange={(event) => setBirthDate(event.target.value)} required />
        </label>
        <br />
        <label>
          E-mail
          <input type='text' name='email' onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <br />
        <label>
          Role
          <select name='role' onChange={(event) => setRole(event.target.value)}>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select>
        </label>
        <br />
        <FormButton loading={loading}>
          Cadastrar
        </FormButton>
      </form>
    </AddUserWrapper>
  );
};

export default AddUserScreen;
