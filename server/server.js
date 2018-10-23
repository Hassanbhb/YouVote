const express = require("express");
const mongoose = require("mongoose");

//require middleware
const helmet = require("helmet");
const volleyball = require("volleyball");
const cors = require("cors");
const middlewares = require("./auth/middlewares");

const app = express();

//auth routes
const auth = require("./auth/index");
const polls = require("./polls/polls-api");

//use middlewares
app.use(helmet());
app.use(volleyball);
app.use(express.json());
app.use(cors());
require("dotenv").config();
app.use(middlewares.checkTokenSetUser);

//connect to database
mongoose
  .connect(
    "mongodb+srv://hassan:1A2Z3E4R5T@youvote-nqxqi.gcp.mongodb.net/YouVote?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => console.log("db connected ..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  console.log(req.user);
  res.json({
    message: "Welcome to server",
    user: req.user
  });
});

//use routes
app.use("/auth", auth);
app.use("/polls", middlewares.isLoggedIn, polls);

//error handlers
function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found - " + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(8080, () => console.log("Server is Running at locathost:8080"));
