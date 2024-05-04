import { updateBook } from "../actions";

const updateBookToDb = (id, book) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://book-server-6clx.onrender.com/books/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          name: book.name,
          author: book.author,
          thumbnail: book.thumbnail,
          price: book.price,
          rating: book.rating,
          featured: book.featured,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const updatedBook = await response.json();
    dispatch(updateBook(updatedBook.id, updatedBook));
  };
};

export default updateBookToDb;
