import { useDispatch } from "react-redux";
import { statusChanged } from "../../features/filters/filterSlice";
import { useEffect } from "react";
import { useDeleteBookMutation } from "../../features/api/api";

const BookNav = ({ status }) => {
  //
  const [deleteBook, { isLoading, isError, isSuccess, error }] =
    useDeleteBookMutation({
      fixedCacheKey: "shared-update-post",
    });

  const dispatch = useDispatch();

  const handleStatusChanged = (param) => {
    dispatch(statusChanged(param));
  };

  useEffect(() => {
    console.log(deleteBook);
    const deleteMessage = document.getElementById("delete-message");
    if (isSuccess) {
      setTimeout(() => {
        deleteMessage.classList.add("hidden");
      }, 3000);
    }
  });

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      {isLoading && <div>Loading...</div>}
      {isError && <div className="flex items-center">{error}</div>}
      {isSuccess && (
        <div className="flex justify-center success" id="delete-message">
          Book Deleted Successfully!
        </div>
      )}
      <div className="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${status === "All" && "active-filter"}`}
          id="lws-filterAll"
          onClick={() => handleStatusChanged("All")}
        >
          All
        </button>
        <button
          className={`lws-filter-btn ${
            status === "Featured" && "active-filter"
          }`}
          id="lws-filterFeatured"
          onClick={() => handleStatusChanged("Featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookNav;
