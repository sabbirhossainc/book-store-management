import { showLoading } from "../../filters/actions";
import { loadBook } from "../actions";

const fetchBooks = async (dispatch) => {
  const response = await fetch("https://book-server-6clx.onrender.com/books");
  const books = await response.json();
  // loading
  dispatch(showLoading(false));
  dispatch(loadBook(books));
};

export default fetchBooks;
