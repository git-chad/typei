import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
import AuthLogic from "../components/auth/AuthLogic";

const SignIn = () => {
  return (
    <div className="signup-container">
      <div className="form-container">
        <RegisterForm/>
        <LoginForm/>
        <AuthLogic/>
      </div>
    </div>
  );
};

export default SignIn;
