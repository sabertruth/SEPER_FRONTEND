import React, { Component } from "react";

class Home extends Component {
    render() {
      return (
        <div >

        <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search An Article"/>

        <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
      </form>

      
          <br></br>
         <br></br>
         <br></br>
          <button onClick={() => {this.props.history.replace('/AddArticles')}} type="button" class="btn btn-info">Add New Article</button>
         <br></br>
         <br></br>
         <br></br>
         <button onClick={() => {this.props.history.replace('/Articles')}} type="button" class="btn btn-danger">Show All Available Articles</button>

       
         
        </div>
      );
    }
  }
  export default Home;