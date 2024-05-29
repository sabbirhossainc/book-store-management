import { useEffect, useState } from "react";
import { useAddBookMutation } from "../../features/api/api";
import { useMatch, useNavigate } from "react-router-dom";

const AddBookForm = () => {
  const [addBook, { isLoading, isError, isSuccess, error }] =
    useAddBookMutation();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  //location
  const match = useMatch("/");
  const navigate = useNavigate();
  const resetForm = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    });
    resetForm();
  };

  useEffect(() => {
    if (isSuccess) {
      if (!match) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }
  }, [isSuccess, match, navigate]);
  
  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          name="name"
          id="lws-bookName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input
          required
          className="text-input"
          type="text"
          name="author"
          id="lws-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          name="thumbnail"
          id="lws-thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input
            required
            className="text-input"
            type="number"
            name="price"
            min="0"
            id="lws-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input
            required
            className="text-input"
            type="number"
            name="rating"
            min="1"
            max="5"
            id="lws-rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          id="lws-featured"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>
      <button
        type="submit"
        className="submit"
        id="lws-submit"
        disabled={isLoading}
      >
        Add Book
      </button>
      {isError && <div className="flex items-center">{error}</div>}
      {isSuccess && (
        <div className="flex justify-center success">
          Book added Successfully!
        </div>
      )}
    </form>
  );
};

export default AddBookForm;
