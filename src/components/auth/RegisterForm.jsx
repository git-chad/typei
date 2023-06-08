import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const RegisterForm = ({ handleSignToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="register-form-container">
        <form
          onSubmit={handleRegister}
          className="w-[50%] h-[calc(100vh-80px)] bg-black flex flex-col justify-center"
        >
          <h1>Create an account</h1>
          <div className="flex flex-col w-[33%] p-2">
            <label>Email</label>
            <input
              className=""
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="flex flex-col w-[33%] p-2"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
          <button onClick={handleSignToggle} className="toggle-button">
            Sign in instead
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
