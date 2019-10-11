import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Post from "./Component/Post/index";

class App extends Component {
    render() {
    return (
      <Router>
        <Route path="/" exact component={Post} />
      </Router>
    );
  }
}

export default App;
