import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Redirect, Route, useParams } from 'react-router-dom';
import loadingSpinner from 'loading.gif';
import { getAuthToken } from 'utils';

interface UserDetailsParams {
  id: string;
}

const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;

const UserDetails: React.FC = () => {
  const { id } = useParams<UserDetailsParams>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const { loading, error } = useQuery(USER, {
    variables: { id },
    onCompleted(data) {
      console.log(data);
      const { name, phone, birthDate, email, role } = data.user;
      setName(name);
      setPhone(phone);
      setBirthDate(birthDate);
      setEmail(email);
      setRole(role);
    },
  });

  if (error) {
    alert(error.message);
  }

  return loading ? (
    <img src={loadingSpinner} height='20px' width='20px' />
  ) : (
    <div>
      <Route path='/user-details'>{!getAuthToken() && <Redirect to='/login' />}</Route>
      <h1>{name}</h1>
      <h4>Telefone: {phone}</h4>
      <h4>Data de nascimento: {birthDate}</h4>
      <h4>E-mail: {email}</h4>
      <h4>Role: {role}</h4>
    </div>
  );
};

export default UserDetails;
