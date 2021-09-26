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
    const url = !!params ? 'http://localhost:8082/api/books/' + this.props.match.params.id : 'http://localhost:8082/api/books/';

    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(url)
      .then(res => {
        console.log("Print-showBookDetails-API-response: ", res.data);
        this.setState({
          books: res.data
        })
      })
      .catch(err => {
        console.log("Error from Articles");
      })
  };

  onDeleteClick(id) {
    axios
      .delete('http://localhost:8082/api/books/' + id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form Articles_deleteClick");
      })
  };

  render() {

    const renderBookItem = () => {
      // added the sort method here by author----------------------
      return this.state.books.sort((a, b) => a.author > b.author ? 1 : -1).map((book) => {

        return (
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.source}</td>
            <td>{book.yop}</td>
            <td>{book.doi}</td>
            <td>{book.description}</td>
            <td>{book.claim}</td>
            <td>{book.evidence}</td>
            <td>{book.sepractice}</td>
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
                {/* ---------------dropdown implemented ---------------- */}
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select SE Practice
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" value="title" href="#">TDD</a>
                    <a class="dropdown-item" value="author" href="#">Extreme Programming</a>
                    <a class="dropdown-item" value="year" href="#">Mob Programming</a>
                  </div>
                  <select name="selectList" id="selectList">
                    <option value="option 1">Author</option>
                    <option value="option 2">Title</option>
                    <option value="option 2">Year</option>
                  </select>

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
                  <th scope="col">Year Published</th>
                  <th scope="col">DOI</th>
                  <th scope="col">Description</th>
                  <th scope="col">Claim</th>
                  <th scope="col">Evidence Level</th>
                  <th scope="col">SE Practice</th>
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