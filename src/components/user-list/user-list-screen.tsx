import React from 'react';
import { UserListWrapper } from './styles';
import { useQuery, gql } from '@apollo/client';
import { getAuthToken } from '../../utils';
import { Redirect, Route } from 'react-router-dom';
import loadingSpinner from '../../loading.gif';
import UserList from './user-list';

const USER_LIST = gql`
  query {
    users(pageInfo: { limit: 250 }) {
      count
      nodes {
        id
        name
        email
      }
    }
  }
`;

const UserListScreen: React.FC = () => {
  const { loading, error, data } = useQuery(USER_LIST);

  if (error) {
    alert(error.message);
  }

  return (
    <UserListWrapper>
      <Route path='/user-list'>{!getAuthToken() && <Redirect to='/login' />}</Route>
      <h1>Lista de usuários</h1>
      {loading ? <img src={loadingSpinner} height='20px' /> : !error && <UserList list={data.users.nodes} />}
    </UserListWrapper>
  );
};

export default UserListScreen;
