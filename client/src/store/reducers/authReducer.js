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
    case "LOGIN_USER":
      return {
        ...state,
        user: { ...action.user }
      };
    case "DELETE_USER":
      return {
        ...state,
        user: {}
      };
    default:
      return state;
  }
};

export default authReducer;
