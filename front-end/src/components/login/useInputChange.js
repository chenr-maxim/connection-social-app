import {useState} from 'react'

export const useInputChange = () => {
  const [userInput, setUserInput] = useState({username: '', password: ''});

  const handleInputChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    })
  }

  console.log(userInput);

  return [userInput, handleInputChange]
}