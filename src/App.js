import { Provider } from "react-redux";
import store from "./redux/store";
import Route from "./utils/Route";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Wishlist from "./components/Wishlist/Wishlist";
import Collection from "./components/Collection/Collection";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/wishlist">
        <Wishlist />
      </Route>
      <Route path="/collection">
        <Collection />
      </Route>
    </Provider>
  );
}
