import React, {useState} from 'react';
import { useInputChange } from './useInputChange'


const Login = () => {
  const [userInfo, handleInputChange] = useInputChange();
  
  const login = () => {
    if(userInfo.username === '' || userInfo.password === '') {
      alert('username or password cannot be empty');
    }
    console.log(userInfo);
  }

  return (
    <>
      <h4>Login page</h4>
      {/* <form> */}
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={userInfo.username}
          placeholder="enter username"
        >
        </input>
        <input
          type="text"
          name="password"
          onChange={handleInputChange}
          value={userInfo.password}
          placeholder="enter password"
        >
        </input>
        <button
          onClick={login}
        >
          login
        </button>
      {/* </form> */}
    </>
  );
};

export default Login;