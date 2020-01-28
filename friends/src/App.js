import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
