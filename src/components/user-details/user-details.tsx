import { gql, useQuery } from '@apollo/client';
import React from 'react';
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
  const { data, loading, error } = useQuery(USER, {
    variables: { id },
  });

  if (error) {
    alert(error.message);
  }

  return loading ? (
    <img src={loadingSpinner} height='20px' width='20px' />
  ) : (
    <div>
      <Route path='/user-details'>{!getAuthToken() && <Redirect to='/login' />}</Route>
      <h1>{data.user.name}</h1>
      <h4>Telefone: {data.user.phone}</h4>
      <h4>Data de nascimento: {data.user.birthDate}</h4>
      <h4>E-mail: {data.user.email}</h4>
      <h4>Role: {data.user.role}</h4>
    </div>
  );
};

export default UserDetails;
