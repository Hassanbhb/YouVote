const jwt = require("jsonwebtoken");

const checkTokenSetUser = (req, res, next) => {
  //get authorisation header
  const authHeader = req.get("Authorization");
  //if it exists
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token) {
      //check if it's valid token
      jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) console.log(err.message);
        req.user = user;
        next();
      });
    } else {
      next();
    }
  } else {
    //else continue
    next();
  }
};

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    const error = new Error("🚫Un-Authorized🚫");
    res.status(403);
    next(error);
  }
};

module.exports = {
  checkTokenSetUser,
  isLoggedIn
};
