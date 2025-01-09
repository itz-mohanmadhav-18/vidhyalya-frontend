import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS_DETAILS } from '../../queries/queries';

const BookDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_BOOKS_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.book.name}</h2>
      <p>{data.book.genre}</p>
      <p>{data.book.author.name}</p>
      <p>All books by this author:</p>
      <ul className="list-disc">
        {data.book.author.books.map((book) => (
          <li key={book.id}>
            <strong>{book.name}</strong> (Genre: {book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails; // Correct export
