import axios from "axios";
import React, { Component } from "react";

const Home = (props) => {
  const [search, setSearch] = React.useState();
  const [showSearch, setShowSearch] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    if (search == null) return;
    const url = `http://localhost:8082/api/books/find?author=${search}`;
    axios
      .get(url)
      .then((newBooks) => {
        if (newBooks.data == null || newBooks.data.books == null) return;
        setBooks(newBooks.data.books);
      })
      .catch((e) => console.log(e));
  }, [search]);

  const renderBooks = () => {
    if (showSearch == false) return;

    return (
      <table className="">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Source</th>
            <th scope="col">Description</th>
            <th scope="col">Claimed</th>
            <th scope="col">Evidence</th>
            <th scope="col">Se Practice</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => {
            return (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.source}</td>
                <td>{book.description}</td>
                <td>{book.claim}</td>
                <td>{book.evidence}</td>
                <td>{book.sepractice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <input
        class="form-control me-sm-2"
        type="text"
        value={search}
        onChange={(s) => setSearch(s.target.value)}
        placeholder="Search An Article"
      />

      <button
        class="btn btn-warning my-2 my-sm-0"
        onClick={() => setShowSearch(true)}
        style={{float: 'right'}}
      >
        Search
      </button>
      {renderBooks()}

      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          props.history.replace("/create-book");
        }}
        type="button"
        class="btn btn-info"
      >
        Add New Article
      </button>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          props.history.replace("/Articles");
        }}
        type="button"
        class="btn btn-danger"
      >
        Show All Available Articles
      </button>
    </div>
  );
};
export default Home;
