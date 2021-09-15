import AddUserScreen from 'components/add-user-screen/add-user-screen';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './app.css';
import LoginScreen from './components/login-screen/login-screen';
import UserListScreen from './components/user-list/user-list-screen';
import { getAuthToken } from './utils';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Switch>
        <Route path='/login' component={LoginScreen} />
        <Route path='/user-list'  component={UserListScreen} />
        <Route path='/add-user' component={AddUserScreen} />
        <Route
          path='/'
          render={() => {
            return getAuthToken() ? <Redirect to='/user-list' /> : <Redirect to='/login' />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
