const initState = {
  user: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        user: { ...action.user }
      };
    default:
      return state;
  }
};

export default authReducer;
