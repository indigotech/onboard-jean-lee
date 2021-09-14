import { gql, useMutation } from '@apollo/client';

const ADD_USER = gql`
  mutation ($name: String!, $phone: String!, $birthDate: Date!, $email: String!, $role: UserRole!) {
    createUser(data: { name: $name, phone: $phone, birthDate: $birthDate, email: $email, role: $role }) {
      id
      name
    }
  }
`;

interface UserAdderTypes {
  loading: boolean;
  addUser: (name: string, phone: string, birthDate: string, email: string, role: string) => Promise<void>;
}

const useAddUser = (): UserAdderTypes => {
  const [mutate, { loading }] = useMutation(ADD_USER);

  const addUser = async (name: string, phone: string, birthDate: string, email: string, role: string) => {
    await mutate({
      variables: {
        name,
        phone,
        birthDate,
        email,
        role,
      },
    });
  };

  return { addUser, loading };
};

export default useAddUser;
