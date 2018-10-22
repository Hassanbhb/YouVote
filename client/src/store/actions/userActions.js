export const createUser = user => {
  return (dispatch, getState) => {
    //make async Call to db
    dispatch({
      type: "CREATE_USER",
      user
    });
  };
};
