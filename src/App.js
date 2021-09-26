// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';

// import CreateBook from './components/CreateBook';
// import ShowBookList from './components/ShowBookList';
// import ShowBookDetails from './components/ShowBookDetails';
// import UpdateBookInfo from './components/UpdateBookInfo';


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>

       
//           <Route exact path='/' component={ShowBookList} />
//           <Route path='/create-book' component={CreateBook} />
//           <Route path='/edit-book/:id' component={UpdateBookInfo} />
//           <Route path='/show-book/:id' component={ShowBookDetails} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

import React from "react";

import './App.css';




import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";


import Home from "./pages/home";
import Articles from "./components/Articles";
import AddArticles from './components/AddArticles';




const App = () =>  {
    return (
        <Router>
        <div class="container">
         
          <h1> 👉SEPER👈<hr></hr></h1>
          
            <ul className="header">
            <li ><NavLink exact to = "" >Home</NavLink></li>


            </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route  path="/Articles" component={Articles}/>
          <Route path='/create-book' component={AddArticles} />
          
          
            <Redirect to="/home" />
          </div>
        </div>
        </Router>
    );
}
 
export default App;
