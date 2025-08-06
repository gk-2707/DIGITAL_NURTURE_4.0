import React from 'react';

const BookDetails = ({ books }) => (
  <div>
    <h2>Book Details</h2>
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.bname}</strong> - {book.price}
        </li>
      ))}
    </ul>
  </div>
);

export default BookDetails;
