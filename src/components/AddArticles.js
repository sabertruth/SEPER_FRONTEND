import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class AddArticles extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      source: '',
      yop: '',
      doi: '',
      description: '',
      claim: '',
      evidence: '',
      sepractice: '',
      isSubmitted: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('XXX: onSubmit')

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      yop: this.state.yop,
      doi: this.state.doi,
      description: this.state.description,
      claim: this.state.claim,
      evidence: this.state.description,
      sepractice: this.state.description,
    };

    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          author: '',
          source: '',
          yop: '',
          doi: '',
          description: '',
          claim: '',
          evidence: '',
          sepractice: '',
        })
        this.setState({ isSubmitted: true })
        // this.props.history.push('/');
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
                    placeholder='Source'
                    name='source'
                    className='form-control'
                    value={this.state.source}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Publication Year'
                    name='yop'
                    className='form-control'
                    value={this.state.yop}
                    onChange={this.onChange}
                  />
                </div>


                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='DOI'
                    name='doi'
                    className='form-control'
                    value={this.state.doi}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Description'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Claim'
                    name='claim'
                    className='form-control'
                    value={this.state.claim}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Evidence'
                    name='evidence'
                    className='form-control'
                    value={this.state.evidence}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='SE Practice'
                    name='sepractice'
                    className='form-control'
                    value={this.state.sepractice}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
            {/* TODO: msg after submitting */}
            {this.state.isSubmitted && 'Your Article has been submitted successfully.'}
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticles;