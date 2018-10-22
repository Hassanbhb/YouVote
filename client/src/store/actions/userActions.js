export const createUser = user => {
  return (dispatch, getState) => {
    //make async Call to db
    dispatch({
      type: "CREATE_USER",
      user
    });
  };
};

export const loginUser = user => {
  return (dispatch, getState) => {
    dispatch({
      type: "LOGIN_USER",
      user
    });
  };
};

export const deleteUser = user => {
  return (dispatch, getState) => {
    dispatch({
      type: "DELETE_USER",
      user
    });
  };
};
