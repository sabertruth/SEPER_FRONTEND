import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//import '../App.css';
import axios from 'axios';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/books/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
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

    // Garry's Changes From Here
    const book = this.state.book;
    let BookItem = <div>
      <table className="table table-hover table-dark">
        <thead>
          <tr> 
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Source</th>
            <th scope="col">Y.O.P</th>
            <th scope="col">DOI</th>
            <th scope="col">Claimed Benifits</th>
          </tr>
        </thead>
        
        <tbody>
         
           <tr>
            
            <td>{ book.title }</td>
            <td>{ book.isbn }</td>
            <td>{ book.source }</td>
            <td>{ book.publisher }</td>
            <td>{ book.published_date }</td>
            <td>{ book.description }</td>
         </tr>
          
        </tbody>
      </table>
    </div>
// Ends Here




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
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
     
      </div>
  </div>
</div>
    );
  }
}

export default Articles;