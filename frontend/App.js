import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={AuthForm} />
          <Route path="/register" component={AuthForm} />
          <Route path="/entries" component={EntryList} />
          <Route path="/new-entry" component={EntryForm} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
