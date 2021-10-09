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
import team10 from './images/team10.png';
import home from './images/home.png';
const App = () => (
  <Router>
   
    <div className="container">
      <h1 align="center">
      <NavLink exact to="">
           
         
        <div className='logo'>
        <img src={team10} width="250" height="100" />
        </div> </NavLink>
        <hr />
      </h1>

      <ul className="header">
        <h1>
          <NavLink exact to="">
          <img src={home} width="150" height="30" />
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
