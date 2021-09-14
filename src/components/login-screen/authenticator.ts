import { useMutation, gql } from '@apollo/client';

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

type AuthenticatorTypes = {
  loading: boolean;
  authenticate: (email: string, password: string) => Promise<void>;
};

export const useAuthenticator = (): AuthenticatorTypes => {
  const [login, { loading }] = useMutation(LOGIN);

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
  };

  return { loading, authenticate };
};
