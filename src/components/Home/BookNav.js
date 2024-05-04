import { useDispatch } from "react-redux";
import { statusChanged } from "../../redux/filters/actions";

const BookNav = ({ status }) => {
  const dispatch = useDispatch();

  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${status === "All" && "active-filter"}`}
          id="lws-filterAll"
          onClick={() => handleStatusChanged("All")}
        >
          All
        </button>
        <button
          className={`filter-btn ${status === "Featured" && "active-filter"}`}
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
