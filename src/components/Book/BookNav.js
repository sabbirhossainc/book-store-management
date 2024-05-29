import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../../features/filters/filterSlice";
import { useEffect } from "react";
import { apiSlice } from "../../features/api/api";

const BookNav = ({ status }) => {
  //
  const { isLoading, isError, isSuccess, error } = useSelector(apiSlice.endpoints.deleteBook.select());

  const dispatch = useDispatch();

  const handleStatusChanged = (param) => {
    dispatch(statusChanged(param));
  };

  useEffect(()=>{
    console.log(isError,isSuccess,isLoading);
  })

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      {isLoading && <div>Loading...</div>}
      {isError && <div className="flex items-center">{error}</div>}
      {isSuccess && (
        <div className="flex items-center success">
          Book id:{""} Deleted Successfully!
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
