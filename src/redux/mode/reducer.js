export const modeChanged = (mode, targetBook) => {
  return {
    type: "mode/location",
    payload: { mode, targetBook },
  };
};

export const modeReducer = (state = { mode: "Add", book: [] }, action) => {
  switch (action.type) {
    case "mode/location":
      return {
        ...state,
        mode: action.payload.mode,
        book: action.payload.targetBook,
      };

    default:
      return state;
  }
};
