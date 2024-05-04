import { SEARCH, STATUS_CHANGED, LOADING} from "./actionTypes";

export const statusChanged = (status) => {
  return {
    type: STATUS_CHANGED,
    payload: status,
  };
};

export const searchQuery = (search) => {
  return {
    type: SEARCH,
    payload: search,
  };
};

export const showLoading = (loadingState) => {
  return {
    type: LOADING,
    payload: loadingState,
  };
};
