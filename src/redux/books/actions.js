import { LOAD_BOOK, ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./actionTypes";

export const loadBook = (book) => {
  return {
    type: LOAD_BOOK,
    payload: book,
  };
};

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: bookId,
  };
};

export const updateBook = (id, updatedBook) => {
  return {
    type: UPDATE_BOOK,
    payload: {
      id,
      updatedBook,
    },
  };
};
