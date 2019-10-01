import React, { Component } from 'react';
import APIContext from '../context/APIContext';
import './Post.css';

export default class Post extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = APIContext;

  render() {

    const { postId } = this.props.match.params;
    console.log(postId)
    const post = this.context.posts[postId] || {
      title: '',
      user: '',
      date_created: '',
      content: ''
    }

    return (
      <div className='post'>
        <h3>{post.title}</h3>
        <span>{post.user}</span>
        <span>{post.date_created}</span>
        <p>{post.content}</p>
      </div>
    )
  }

}
