import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
