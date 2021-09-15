import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

const ADD_USER = gql`
  mutation ($data: UserInputType!) {
    createUser(data: $data) {
      id
      name
    }
  }
`;

interface UserInput {
  name: string;
  phone: string;
  birthDate: string;
  email: string;
  role: string;
}

interface UserAdderTypes {
  loading: boolean;
  addUser: (data: UserInput) => Promise<void>;
}

const useAddUser = (): UserAdderTypes => {
  const [mutate, { loading }] = useMutation(ADD_USER);

  const addUser = useCallback(
    async (data: UserInput) => {
      await mutate({
        variables: {
          data,
        },
      });
    },
    [mutate],
  );

  return { addUser, loading };
};

export default useAddUser;
