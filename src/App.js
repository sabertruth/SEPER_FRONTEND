/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  //Redirect,
} from 'react-router-dom';

import Home from './pages/home';
import Articles from './components/Articles';
import AddArticles from './components/AddArticles';

const App = () => (
  <Router>
    <div className="container">
      <h1 align="center">
        {' '}
        👉SEPER👈
        <hr />
      </h1>

      <ul className="header">
        <h1>
          <NavLink exact to="">
            Home
          </NavLink>
        </h1>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/Articles" component={Articles} />
        <Route path="/create-book" component={AddArticles} />

        {/* <Redirect to="/home" /> */}
      </div>
    </div>
  </Router>
);

export default App;
