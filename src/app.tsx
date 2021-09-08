import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './app.css';
import LoginScreen from './components/login-screen/login-screen';

const App: React.FC = () => {
  const getAuthToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('auth-token'));
    
  console.log(getAuthToken);
  return (
    <div className='app'>
      <Switch>
        <Route path='/login' component={LoginScreen} />
        <Route path='/home' />
        <Route
          path='/'
          render={() => {
            return getAuthToken ? <Redirect to='/home' /> : <Redirect to='/login' />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
