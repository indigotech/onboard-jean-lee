import React from 'react';
import { Wrapper } from './styles';
import { useQuery, gql } from '@apollo/client';
import { getAuthToken } from '../../utils';
import { Redirect, Route } from 'react-router-dom';
import loadingSpinner from '../../loading.gif';
import ListMap from './list-map';

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

const UserList: React.FC = () => {
  const { loading, error, data } = useQuery(USER_LIST);

  if (error) {
    alert(error.message);
  }

  return (
    <Wrapper>
      <Route path='/user-list'>{!getAuthToken() && <Redirect to='/login' />}</Route>
      <h1>Lista de usuários</h1>
      {loading ? <img src={loadingSpinner} height='20px' /> : !error && <ListMap list={data.users.nodes} />}
    </Wrapper>
  );
};

export default UserList;
