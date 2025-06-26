import React from 'react'
import { Button } from 'react-bootstrap'
import './CSS/LoginSignUp.css'
import { useState } from 'react'

const LoginSignUp = () => {
  // If login page showing email&pass fields only|If signup showing all fields
  const [state, setState] = useState("Login")

  //Input field 
  const [formData, setFormDate] = useState({
    username: "",
    password: "",
    email: ""
  })
  const onChangeHandler = (e) => {
    setFormDate({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("login success", formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/formData',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.error)
    }

  }
  const signup = async () => {
    console.log("sign success", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/formData',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.error)
    }
  }
  return (
    <>
      <div className="loginSignup">
        <div className="loginSignup-container">
          <h1>{state}</h1>
          <div className="loginSignup-fields">
            {state === "Sign Up" ? <input type='text' name='username'
              value={formData.username} onChange={onChangeHandler} placeholder='Enter Name' />
              : <></>}
            <input type='email' name='email' value={formData.email}
              onChange={onChangeHandler} placeholder='Email Address' />
            <input type='password' name='password' value={formData.password}
              onChange={onChangeHandler} placeholder='Enter Password' />
          </div>
          <div className="continue-btn">
            <button className='continue-btn' onClick={() => { state === "Login" ? login() : signup() }}>Login Here</button>
          </div>
          {state === "Sign Up" ? <p className="loginSignup-login">Already hav an account? <span onClick={() => { setState("Login") }}>Login Here</span></p>
            :
            <p className="loginSignup-login">Create an Account? <span onClick={() => { setState("Sign Up") }}>Sign Up Here</span></p>
          }
          <div className="loginSignup-agree">
            <input type="checkbox" name='' id='' className='agree-checkbox' />
            <p>By continue, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSignUp
