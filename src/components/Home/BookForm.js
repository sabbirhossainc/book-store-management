import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBookToDb from "../../redux/books/thunk/addBookToDb";
import updateBookToDb from "../../redux/books/thunk/updateBookToDb";
import { modeChanged } from "../../redux/mode/reducer";
import fetchBooks from "../../redux/books/thunk/fetchBooks";

const BookForm = () => {
  const modes = useSelector((state) => state.modes);
  const [bookData, setBookData] = useState({});
  const [bookToUpdate, setBookToUpdate] = useState({});
  const dispatch = useDispatch();

  // Reset form values
  const name = useRef("");
  const author = useRef("");
  const thumbnail = useRef("");
  const price = useRef("");
  const rating = useRef("");
  const featured = useRef("");

  const resetForm = () => {
    name.current.value = "";
    author.current.value = "";
    thumbnail.current.value = "";
    price.current.value = "";
    rating.current.value = "";
    featured.current.checked = false;
  };

  const handelChange = (e) => {
    const formInputValue = e.target.type !== "checkbox" ? e.target.value : "";
    const formCheckedValue =
      e.target.type === "checkbox"
        ? e.target.checked
        : featured.current.checked;
    const newBookData = {
      ...bookData,
      [e.target.name]: formInputValue,
      featured: formCheckedValue,
    };
    const updatedBookData = {
      ...bookToUpdate,
      [e.target.name]: formInputValue,
      featured: formCheckedValue,
    };
    modes.mode === "Update"
      ? setBookToUpdate(updatedBookData)
      : setBookData(newBookData);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookToDb(bookData));
    resetForm();
  };

  const handelUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBookToDb(modes.book.id, bookToUpdate));
    dispatch(modeChanged("Add", bookToUpdate));
    dispatch(fetchBooks);
    resetForm();
  };

  useEffect(() => {
    const updateForm = () => {
      name.current.value = modes.book.name;
      author.current.value = modes.book.author;
      thumbnail.current.value = modes.book.thumbnail;
      price.current.value = modes.book.price;
      rating.current.value = modes.book.rating;
      featured.current.checked = modes.book.featured;
    };
    if (modes.mode === "Update") {
      updateForm();
    }
  }, [modes]);

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      {modes.mode === "Update" ? (
        <h4 className="mb-8 text-xl font-bold text-center">Update Book</h4>
      ) : (
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      )}
      <form
        className="book-form"
        onSubmit={modes.mode === "Update" ? handelUpdate : handelSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            onChange={(e) => handelChange(e)}
            ref={name}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            onChange={(e) => handelChange(e)}
            ref={author}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            onChange={(e) => handelChange(e)}
            ref={thumbnail}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              onChange={(e) => handelChange(e)}
              ref={price}
              min={0}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              onChange={(e) => handelChange(e)}
              ref={rating}
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            onChange={(e) => handelChange(e)}
            ref={featured}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button
          type="submit"
          className={`${modes.mode === "Update" ? "update" : "submit"}`}
          id="submit"
        >
          {modes.mode === "Update" ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
