import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import BookNav from "./BookNav";
import { useEffect } from "react";
import fetchBooks from "../../redux/books/thunk/fetchBooks";
import Loading from "../../utils/Loading";

const Home = () => {
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  const { status, search, loading } = filters;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const filterByStatus = (book) => {
    switch (status) {
      case "All":
        return true;
      case "Featured":
        return book.featured;

      default:
        return true;
    }
  };

  const filterBySearch = (book) => {
    const targetBook = book.name.toLowerCase().includes(search);
    if (targetBook) {
      return true;
    }
  };

  const checkFilter = books
    ?.filter(filterBySearch)
    ?.filter(filterByStatus).length;

  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          {/* Books nav */}
          <BookNav status={status} />
          {/* loading */}
          {loading === true ? <Loading times={5} /> : null}
          {/* Books */}
          {books?.length > 0 && checkFilter > 0 ? (
            <div className="lws-bookContainer">
              {books
                ?.filter(filterByStatus)
                ?.filter(filterBySearch)
                .map((book) => (
                  <BookCard book={book} key={book.id} />
                ))}
            </div>
          ) : (
            <div className="lws-bookContainer">
              {loading === false ? "No book found! But you can add." : null}
            </div>
          )}
        </div>
        <div className="lws-formContainer">
          <BookForm />
        </div>
      </div>
    </main>
  );
};
export default Home;
