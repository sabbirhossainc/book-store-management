import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/api";
import BookCard from "../Book/BookCard";
import BookNav from "../Book/BookNav";
import Loading from '../../ui/Loading'

const Home = () => {
  const { data: books, isLoading, isError, error } = useGetBooksQuery();
  const { status, search, mode } = useSelector((state) => state.filters);

  // filter by status
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

  // filter by search
  const filterBySearch = (book) => {
    const targetBook = book.name.toLowerCase().includes(search);
    if (targetBook) {
      return true;
    }
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <Loading times={5}/>;
  }
  if (!isLoading && isError) {
    content = (
      <div>
        {error}
        {"!"}
      </div>
    );
  }
  if (!isLoading && !isError && books?.length === 0) {
    content = <div>No books found!</div>;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books
      ?.filter(filterByStatus)
      ?.filter(filterBySearch)
      ?.map((book, index) => <BookCard key={index} book={book} mode={mode} />);
  }
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <BookNav status={status} />
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          {content}
        </div>
      </div>
    </main>
  );
};
export default Home;
