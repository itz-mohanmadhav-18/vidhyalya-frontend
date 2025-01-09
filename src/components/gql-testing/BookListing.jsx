import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../queries/queries';
import BookDetails from './BookDetails'; // Correct import with capital D


const handleClick = 

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.books.map((book) => (
        <div key={book.id}>
          <li><strong>{book.name}</strong>
            
          </li>
        </div>
      ))}
    </ul>
  );
};

export default BookList;
