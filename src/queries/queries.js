import {gql} from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      genre
      author {
        name
        age
        id
      }
    }
  }
`;


  const Get_authors = gql`
    query GetAuthors {
      authors {
        id
        name
      }
    }
  `;
  const ADD_BOOK = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
      addBook(name: $name, genre: $genre, authorId: $authorId) {
        name
        genre
  }
        }`

    const GET_BOOKS_DETAILS = gql`
    query GetBookDetails($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
        age
        books {
          name
          genre
          id
          }
    }
}
}
    `    


export {GET_BOOKS, Get_authors, ADD_BOOK, GET_BOOKS_DETAILS};     