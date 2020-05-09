import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams  } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import './index.css';





ReactDOM.render(

  <Router>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/:id" component={ App } />
    </Switch>
  </Router>


, document.getElementById('root'));
console.log(useParams());
