import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import CurrentPath from "../utils/CurrentPath";
import Link from "../utils/Link";
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../redux/filters/actions";

const Header = () => {
  const path = CurrentPath.apply().split("/")[1];
  const filters = useSelector((state) => state.filters);
  const { search } = filters;
  const dispatch = useDispatch();
  const searchRef = useRef("");

  const [searchText, setSearchText] = useState(search);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  
  useEffect(() => {
    searchRef.current.value = searchText;
    dispatch(searchQuery(searchText));
  }, [searchText,dispatch]);

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <a href="/">
        <img src={logo} alt="logo" width="150px" className="object-contain" />
        </a>

        <ul className="hidden md:flex items-center space-x-6">
          <Link href={"/"}>
            <li className={`cursor-pointer ${path === "" && "font-semibold"}`}>
              Book Store
            </li>
          </Link>
          <Link href={"/wishlist"}>
            <li
              className={`cursor-pointer ${
                path === "wishlist" && "font-semibold"
              }`}
            >
              Wishlist
            </li>
          </Link>
          <Link href={"/collection"}>
            <li
              className={`cursor-pointer ${
                path === "collection" && "font-semibold"
              }`}
            >
              My Collection
            </li>
          </Link>
        </ul>

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-searchBook"
              ref={searchRef}
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;
