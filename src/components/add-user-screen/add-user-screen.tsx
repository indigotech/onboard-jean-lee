import React, { FormEvent, useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router';
import { getAuthToken, validateBirthDate, validateEmail, validateName, validatePhone, validateRole } from 'utils';
import { AddUserWrapper } from './styles';
import useAddUser from './user-adder';
import { H1 } from 'shared/text-styles/text-styles';
import FormField from 'shared/form-field/form-field';
import FormButton from 'shared/form-button/form-button';

const AddUserScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    phone: '',
    birthDate: '',
    email: '',
    role: '',
  });

  const history = useHistory();

  const { loading, addUser } = useAddUser();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nameHasError = validateName(name);

    const phoneHasError = validatePhone(phone);

    const emailHasError = validateEmail(email);

    const birthDateHasError = validateBirthDate(birthDate);

    const roleHasError = validateRole(role);

    setErrorMessages({
      ...errorMessages,
      name: nameHasError,
      phone: phoneHasError,
      birthDate: birthDateHasError,
      email: emailHasError,
      role: roleHasError,
    });

    if (!nameHasError && !phoneHasError && !emailHasError && !birthDateHasError && !roleHasError) {
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
        <FormField type='text' name='name' onChange={(input) => setName(input)} errorMessage={errorMessages.name} />
        <FormField type='tel' name='phone' onChange={(input) => setPhone(input)} errorMessage={errorMessages.phone} />
        <FormField type='date' name='data de nascimento' onChange={(input) => setBirthDate(input)} errorMessage={errorMessages.birthDate} />
        <FormField type='text' name='email' onChange={(input) => setEmail(input)} errorMessage={errorMessages.email} />
        <FormField type='text' name='role' onChange={(input) => setRole(input)} errorMessage={errorMessages.role} />
        <FormButton loading={loading}>
          Cadastrar
        </FormButton>
      </form>
    </AddUserWrapper>
  );
};

export default AddUserScreen;
 