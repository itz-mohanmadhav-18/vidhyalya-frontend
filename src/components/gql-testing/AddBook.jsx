import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Get_authors, ADD_BOOK, GET_BOOKS } from "../../queries/queries";

const AddBook = () => {
  const [addBook] = useMutation(ADD_BOOK);
  const [name, setName] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [authorId, setAuthorId] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries:[{query:GET_BOOKS}]
    });
  };
  const { loading, error, data } = useQuery(Get_authors);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      {/* <select
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
        >
            {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
                {author.name}
            </option>
            ))}
        </select> */}
      <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
        <option value="" disabled>
          Select an author
        </option>
        {data.authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
