const initState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        user: { ...action.user }
      };
    case "LOGIN_USER":
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        user: { ...action.user }
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        user: {}
      };
    default:
      return state;
  }
};

export default authReducer;
