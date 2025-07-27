// src/Posts.js
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const postList = data.map((item) => {
          return new Post(item.userId, item.id, item.title, item.body);
        });
        this.setState({ posts: postList });
      })
      .catch((error) => {
        this.setState({ error });
        console.error('Error fetching posts:', error);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2>Something went wrong: {error.message}</h2>;
    }

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>All Blog Posts</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                marginBottom: '10px',
                padding: '15px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h2 style={{ fontSize: '20px', marginBottom: '5px' }}>{post.title}</h2>
              <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{post.body}</p>
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    );
  }
}

export default Posts;
