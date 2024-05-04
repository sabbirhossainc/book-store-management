import nextBookId from "../nextId";
import { ADD_BOOK, DELETE_BOOK, LOAD_BOOK, UPDATE_BOOK } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOK:
      return action.payload;

    case ADD_BOOK:
      return [
        ...state,
        {
          id: nextBookId(state),
          ...action.payload,
          price: parseFloat(action.payload.price),
          rating: parseInt(action.payload.rating),
          featured: action.payload.featured,
        },
      ];

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case UPDATE_BOOK:
      const { id, updatedBook } = action.payload;
      return state.map((book) => {
        if (book.id !== id) {
          return book;
        }
        return {
          ...book,
          name: updatedBook.name,
          author: updatedBook.author,
          thumbnail: updatedBook.thumbnail,
          price: updatedBook.price,
          rating: updatedBook.rating,
          featured: updatedBook.featured,
        };
      });

    default:
      return state;
  }
};

export default reducer;
