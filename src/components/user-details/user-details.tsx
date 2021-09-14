import React from 'react';
import { useParams } from 'react-router-dom';

interface UserDetailsParams {
  id: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams<UserDetailsParams>();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default UserDetails;
