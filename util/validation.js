module.exports.validateRegistration = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if(username.trim() === '') {
    errors.username = 'username can not be empty';
  }
  if(email.trim() === '') {
    errors.email = 'username can not be empty';
  } else {
    const emailValidation = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/
    if(!email.match(emailValidation)) {
      errors.email = 'Email must be in a valid format';
    }
  }
  if(password.trim() === '') {
    errors.password = 'password can not be empty';
  } else if(password !== confirmPassword) {
    errors.confirmPassword = 'passwords must match';
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if(username.trim() === '') {
    errors.username = 'username can not be empty';
  }
  if(password.trim() === '') {
    errors.password = 'password can not be empty';
  } 
  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
}