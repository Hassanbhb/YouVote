export const createUser = user => {
  return (dispatch, getState) => {
    //make async Call to db
    localStorage.token = user.token;
    dispatch({
      type: "CREATE_USER",
      isAuthenticated: true,
      user
    });
  };
};

export const loginUser = user => {
  return (dispatch, getState) => {
    localStorage.token = user.token;
    dispatch({
      type: "LOGIN_USER",
      isAuthenticated: true,
      user
    });
  };
};

export const logoutUser = user => {
  return (dispatch, getState) => {
    delete localStorage.token;
    dispatch({
      type: "LOGOUT_USER",
      isAuthenticated: false,
      user
    });
  };
};
