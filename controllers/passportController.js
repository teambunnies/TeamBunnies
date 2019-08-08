const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/User");

passport.use(new LocalStrategy(
    // simple, static login strategy based on the username
    // "baduser" will be rejected and invalid username, everyone else has a password of "password"
    {
        username: "email"
      },
      function(email, password, done) {
        // When a user tries to sign in this code runs
        User.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          // If there's no user with the given email
          if (!user) {
            return done(null, false, {
              message: "Incorrect email."
            });
          }
          // If there is a user with the given email, but the password the user gives us is incorrect
          else if (!user.validPassword(password)) {
            return done(null, false, {
              message: "Incorrect password."
            });
          }
          // If none of the above, return the user
          return done(null, user);
        });
      }
    ));
  // In order to help keep authentication state across HTTP requests,
  // passport needs methods to serialize and deseralize the user
  // this is a simple example, the serialzed user is the username -- which is stored in the session.
  passport.serializeUser(function(user, callback) {
    callback(null, user.username);
  });
  
  // the deserialized user is an object with a username property -- which is availabe as request.user
  passport.deserializeUser(function(username, callback) {
    callback(null, {username});
  });

  

  module.exports = passport;