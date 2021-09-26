import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//import '../App.css';
import axios from 'axios';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    const params = this.props.match.params.id
    const url = !!params ? 'http://localhost:8082/api/books/'+this.props.match.params.id : 'http://localhost:8082/api/books/';

    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(url)
      .then(res => {
        console.log("Print-showBookDetails-API-response: " ,res.data);
        this.setState({
          books: res.data
        })
      })
      .catch(err => {
        console.log("Error from Articles");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/books/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form Articles_deleteClick");
      })
  };

  render() {

    const renderBookItem = () => {
      return this.state.books.map((book)=>{

        return (
          <tr> 
          <td>{ book.title }</td>
          <td>{ book.author }</td>
          <td>{ book.source }</td>
          <td>{ book.yop }</td>
          <td>{ book.doi }</td>
          <td>{ book.description }</td>
       </tr>
        )
      })
    }
    return (
      <div className="Articles">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              {/* <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link> */}
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">All Articles</h1>
              <p className="lead text-center">
                  List of All Available Articles In The Databse
                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Title</a>
    <a class="dropdown-item" href="#">Author</a>
    <a class="dropdown-item" href="#">Year</a>
  </div>
</div>
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            <table className="table table-hover table-dark">
        <thead>
          <tr> 
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Source</th>
            <th scope="col">Y.O.P</th>
            <th scope="col">DOI</th>
            <th scope="col">Description</th>
            {/* <th scope="col">Claimed Benifits</th> */}
          </tr>
        </thead>
        
        <tbody>

              {renderBookItem()}
        </tbody>
      </table>
     
      </div>
  </div>
</div>
    );
  }
}

export default Articles;