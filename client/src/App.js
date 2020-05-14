import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from './components/Main';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Route exact path="/" component={Main} />
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
