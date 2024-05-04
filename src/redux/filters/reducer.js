import { SEARCH, STATUS_CHANGED ,LOADING} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case SEARCH:
      return {
        ...state,
        search: action.payload.toLowerCase(),
      };

      case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
