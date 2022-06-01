const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        count: state.count + 1
      };
    case "DECREASE":
      return {
        count: state.count !== 0 ? state.count - 1 : (state.count = 0)
      };
    default:
      return state;
  }
};

export { counterReducer };
