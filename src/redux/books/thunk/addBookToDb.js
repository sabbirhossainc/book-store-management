import { addBook } from "../actions";

const addBookToDb = (bookData) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://book-server-6clx.onrender.com/books",
      {
        method: "POST",
        body: JSON.stringify({
          ...bookData,
        }),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const book = await response.json();
    dispatch(addBook(book));
  };
};

export default addBookToDb;
