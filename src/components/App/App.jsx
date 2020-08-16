import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Projects from '../Projects';
import Home from '../Home';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
