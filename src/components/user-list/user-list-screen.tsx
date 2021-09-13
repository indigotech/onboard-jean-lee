import React, { useState } from 'react';
import { RoundButton, UserListWrapper } from './styles';
import { useQuery, gql } from '@apollo/client';
import { getAuthToken } from 'utils';
import { Redirect, Route } from 'react-router-dom';
import loadingSpinner from 'loading.gif';
import UserList from './user-list';
import Paginator from 'components/paginator/paginator';

const limit = 10;

const USER_LIST = gql`
  query Users($limit: Int, $offset: Int) {
    users(pageInfo: { limit: $limit, offset: $offset }) {
      count
      nodes {
        id
        name
        phone
        birthDate
        email
        role
      }
    }
  }
`;

const UserListScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const { loading, error, data } = useQuery(USER_LIST, {
    variables: { limit, offset },
    onCompleted(data) {
      setLastPage(Math.ceil(data.users.count / limit));
    }
  });

  if (error) {
    alert('Favor logar novamente.');
    localStorage.removeItem('auth-token');
  }

  const onRightClick = async () => {
    if (currentPage < lastPage) {
      setCurrentPage((prev) => prev + 1);
      setOffset((prev) => prev + limit);
    }
  };

  const onLeftClick = async () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setOffset((prev) => prev - limit);
    }
  };

  return (
    <div>
      <Route path='/user-list'>{!getAuthToken() && <Redirect to='/login' />}</Route>
      <h1>Lista de usuários</h1>
      {loading ? (
        <img src={loadingSpinner} height='20px' width='20px' />
      ) : data && (
        <UserListWrapper>
          <UserList list={data.users.nodes} />
          <Paginator
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
            currentPage={currentPage}
            lastPage={lastPage}
          />
          <RoundButton>+</RoundButton>
        </UserListWrapper>
      )}
    </div>
  );
};

  export default UserListScreen;