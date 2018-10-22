const saveUser = (method, path, state) => {
  return fetch(`http://localhost:8080/${path}`, {
    method: `${method}`,
    body: JSON.stringify(state),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      //if res is not 200
      return res.json().then(err => {
        throw new Error(err.message);
      });
    })
    .then(response => {
      //change the state to display the loader
      return response;
    })
    .catch(err => {
      return err;
    });
};

export default saveUser;
