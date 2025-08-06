import React from 'react';

const BlogDetails = ({ blogs }) => (
  <div>
    <h2>Blog Details</h2>
    <ul>
      {blogs.map(blog => (
        <li key={blog.id}>
          <strong>{blog.title}</strong>
          <p>{blog.content}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogDetails;
