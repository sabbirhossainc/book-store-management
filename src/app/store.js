import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
