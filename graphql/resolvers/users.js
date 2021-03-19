const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const {UserInputError} = require('apollo-server');
const {validateRegistration} = require('../../util/validation');


  const Mutation = {
    async registerUser(_, {registerInput : {username, email, password, confirmPassword}}, context, info) {
      //validate user data
      //make sure user doesn't already exist
      const {valid, errors} = validateRegistration(username, email, password, confirmPassword);
      if(!valid) {
        throw new UserInputError('Errors', {errors})
      }
      const user = await User.findOne({username});
      if(user) {
        throw new UserInputError('username is taken', {
          errors: {
            username: 'This username is taken'
          }
        })
      }
      const userEmail = await User.findOne({email});
      if(userEmail) {
        throw new UserInputError('email already in use', {
          errors: {
            email: 'email is already taken'
          }
        })
      }
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      });

      const result = await newUser.save();
      const token = jwt.sign({
        id: result.id,
        email: result.email,
        username: result.username,
      }, keys.jwt_secret, { expiresIn: '1h'});

      return {
        ...result._doc,
        id: result._id,
        token
      };
    }
  }

  module.exports = {Mutation}