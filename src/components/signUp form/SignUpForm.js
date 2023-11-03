import { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = (props) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isEmpty, setIsEmpty] = useState(false);
  const [isMatched, setIsMatched] = useState(true);

  const emailHandler = (event) => {
    setInput((prevInput) => ({
      ...prevInput,
      email: event.target.value,
    }));
  };
  const passwordHandler = (event) => {
    setInput((prevInput) => ({
      ...prevInput,
      password: event.target.value,
    }));
  };
  const confirmPasswordHandler = (event) => {
    setInput((prevInput) => ({
      ...prevInput,
      confirmPassword: event.target.value,
    }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      input.email.trim() === '' ||
      input.password.trim() === '' ||
      input.confirmPassword.trim() === ''
    ) {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 3000);
      return;
    }

    if (input.password !== input.confirmPassword) {
      setIsMatched(false);
      setTimeout(() => {
        setIsMatched(true);
      }, 3000);
      return;
    }

    console.log(
      `Email : ${input.email} , password : ${input.password} , confirmed Password : ${input.confirmPassword}`
    );
    localStorage.setItem('Email : ', input.email);
    localStorage.setItem('Password : ', input.password);
    localStorage.setItem('Confirmed Password : ', input.confirmPassword);
    props.closeForm();
  };

  return (
    <form className="form" onSubmit={submitFormHandler}>
      <label>Email</label>
      <input
        type="text"
        placeholder="Enter your email"
        value={input.email}
        className="formInputs"
        onChange={emailHandler}
      ></input>
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={input.password}
        className="formInputs"
        onChange={passwordHandler}
      ></input>
      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm your password"
        value={input.confirmPassword}
        className="formInputs"
        onChange={confirmPasswordHandler}
      ></input>
      <button type="submit" className="formInputs btnForm">
        Sign Up
      </button>
      {isEmpty && (
        <div className="errorMessage">Input field cannot be empty</div>
      )}
      {!isMatched && (
        <div className="errorMessage">Passwords do not match!</div>
      )}
    </form>
  );
};

export default SignUpForm;
