import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Friends from './pages/Friends';
import Friend from './pages/Friend';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends/:id" component={Friend} />
          <PrivateRoute path="/friends" component={Friends} />
          <Route component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
