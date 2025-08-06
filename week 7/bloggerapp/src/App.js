import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

const App = () => {
  const [showComponent, setShowComponent] = useState('books');

  const books = [
    { id: 1, bname: "React 101", price: "$20" },
    { id: 2, bname: "Learning JS", price: "$25" }
  ];

  const blogs = [
    { id: 1, title: "React vs Angular", content: "Detailed comparison..." },
    { id: 2, title: "Functional Components", content: "Why use them..." }
  ];

  const courses = [
    { id: 1, name: "React Bootcamp", duration: "6 weeks" },
    { id: 2, name: "Node.js Essentials", duration: "4 weeks" }
  ];

  const boxStyle = {
    border: "2px solid #4A90E2",
    borderRadius: "12px",
    padding: "30px",
    marginTop: "25px",
    backgroundColor: "#f0f8ff",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontSize: "1.2rem"
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4A90E2",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>BloggerApp</h1>
      <div>
        <button style={buttonStyle} onClick={() => setShowComponent('books')}>Show Books</button>
        <button style={buttonStyle} onClick={() => setShowComponent('blogs')}>Show Blogs</button>
        <button style={buttonStyle} onClick={() => setShowComponent('courses')}>Show Courses</button>
      </div>

      <div style={boxStyle}>
        {showComponent === 'books' && books.map(book => (
          <div key={book.id} style={{ marginBottom: "20px" }}>
            <strong>Book Name:</strong> {book.bname}<br />
            <strong>Price:</strong> {book.price}
          </div>
        ))}

        {showComponent === 'blogs' && blogs.map(blog => (
          <div key={blog.id} style={{ marginBottom: "20px" }}>
            <strong>Title:</strong> {blog.title}<br />
            <strong>Content:</strong> {blog.content}
          </div>
        ))}

        {showComponent === 'courses' && courses.map(course => (
          <div key={course.id} style={{ marginBottom: "20px" }}>
            <strong>Course Name:</strong> {course.name}<br />
            <strong>Duration:</strong> {course.duration}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
