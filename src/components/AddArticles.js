import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class AddArticles extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isbn:'',
      author:'',
      description:'',
      published_date:'',
      publisher:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };

    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          isbn:'',
          author:'',
          description:'',
          published_date:'',
          publisher:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in AddArticles!");
      })
  };

  render() {
    return (
      <div className="AddArticles">
        <div className="container">
          <div className="row">
           
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Articles</h1>
              <p className="lead text-center">
                  Add Required Information About The Artcile
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Source'
                    name='isbn'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Publication Year'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                {/* <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div> */}
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='DOI'
                    name='publisher'
                    className='form-control'
                    value={this.state.publisher}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                    alert ="You have submited"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticles;