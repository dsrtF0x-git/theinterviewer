import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import About from './components/About/About';
import AddQuestion from './components/AddQuestion/AddQuestion';
import axios from "axios";

const App = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get-questions")
      .then(res => console.log(res.data));
  }, []);

  return (
    <Router>
      <div className="container-fluid p-0 m-0 App">
        <Header />
        <Route exact path="/" component={Main} />
        <Switch>
          <Route exact path="/add-question" component={AddQuestion} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
