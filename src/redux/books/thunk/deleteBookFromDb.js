import { deleteBook } from "../actions";

const deleteBookFromDb = (id) => {
  return async (dispatch) => {
    await fetch(`https://book-server-6clx.onrender.com/books/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteBook(id));
  };
};

export default deleteBookFromDb;
