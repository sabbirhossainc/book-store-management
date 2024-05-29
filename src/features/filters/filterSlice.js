const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = { status: "All", search: "" };

// The slice
const filterSlice = createSlice({
  name: "filterBook",
  initialState,
  reducers: {
    statusChanged: (state, action) => {
      state.status = action.payload;
    },
    searched: (state, action) => {
      state.search = action.payload.toLowerCase();
    },
  },
});

export default filterSlice.reducer;
export const { statusChanged, searched } = filterSlice.actions;
