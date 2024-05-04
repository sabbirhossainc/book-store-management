import CurrentPath from "./CurrentPath";

const Route = ({ path, children }) => {
  return CurrentPath.apply() === path ? children : null;
};

export default Route;
