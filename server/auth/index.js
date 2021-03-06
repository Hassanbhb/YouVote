const express = require("express");
const Joi = require("joi");
const Users = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().email({
    minDomainAtoms: 2
  }),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{8,30}$/)
    .required()
  // - at least 12 characters
  // - can contain letters or numbers
});

const createTokenSendResponse = (user, res, next) => {
  //if they match then create a payload and use to generate the token
  const payload = {
    _id: user._id,
    username: user.username
  };
  //generate token
  jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    {
      expiresIn: "5h"
    },
    (err, token) => {
      if (err) {
        next(err);
      } else {
        res.json({
          id: user._id,
          username: user.username,
          token
        });
      }
    }
  );
};

router.get("/", (req, res) => {
  res.send({
    message: "hello router"
  });
});

router.post("/signup", (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error === null) {
    //make sure username is unique
    Users.findOne({
      username: req.body.username
    }).then(user => {
      //if user exists then username is a duplicate
      if (user) {
        //respond with error
        const err = new Error("username already taken, try another one");
        res.status(409);
        next(err);
      } else {
        // else it's unique
        //hash the password
        bcrypt.genSalt(12, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            //create a new user with the hashed password
            const newUser = new Users({
              username: req.body.username,
              email: req.body.email,
              password: hash
            });
            // save to db
            newUser
              .save()
              .then(user => {
                createTokenSendResponse(user, res, next);
              })
              .catch(err => {
                res.status(500);
                next(new Error("something went wrong"));
              });
          });
        });
      }
    });
  } else {
    //send error
    res.status(400);
    next(result.error);
  }
});

router.post("/login", (req, res, next) => {
  const result = Joi.validate(
    {
      username: req.body.username,
      password: req.body.password
    },
    schema
  );

  if (result.error === null) {
    //search this username
    Users.findOne({
      username: req.body.username
    }).then(user => {
      //if found
      if (user) {
        // compare the passwords
        bcrypt.compare(req.body.password, user.password).then(result => {
          //if match
          if (result) {
            createTokenSendResponse(user, res, next);
          } else {
            res.status(401);
            next(new Error("Invalid password or username !!"));
          }
        });
      } else {
        //if not found send error
        res.status(401);
        next(new Error("Username does not exist !"));
      }
    });
  } else {
    res.status(401);
    next(new Error("Invalid username or password !"));
  }
});

module.exports = router;
