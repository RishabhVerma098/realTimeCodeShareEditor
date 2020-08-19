export const resultReducer = (state = {}, action) => {
  switch (action.type) {
    case "RESULT":
      return { ...action.payload };

    default:
      return state;
  }
};
