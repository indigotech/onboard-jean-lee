import { useMutation, gql, ApolloError } from '@apollo/client';
import { createContext } from 'react';

const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        id
      }
      token
    }
  }
`;

type AuthContextTypes = {
  loading: boolean;
  error: ApolloError | undefined;
  authenticate: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextTypes);

export const AuthProvider: React.FC = ({ children }) => {
  const [login, { loading, error }] = useMutation(LOGIN);

  const authenticate = async (email: string, password: string) => {
    await login({
      variables: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        const token = response.data.login.token.split(' ')[1];
        localStorage.setItem('auth-token', token);
      })
      .catch(err => console.log(err))
  };

  return <AuthContext.Provider value={{ loading, error, authenticate }}>{children}</AuthContext.Provider>;
};
