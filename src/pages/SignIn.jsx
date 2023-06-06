import React from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const SignIn = () => {
  return (
    <div className="signup-container">
      <div className="form-container">
        <RegisterForm/>
        <LoginForm/>
      </div>
    </div>
  );
};

export default SignIn;
