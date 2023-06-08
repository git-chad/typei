import React, { useState } from "react";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
import AuthLogic from "../components/auth/AuthLogic";

const SignIn = () => {
  const [signToggle, setSignToggle] = useState(false);

  const handleSignToggle = () => {
    setSignToggle(!signToggle);
  };

  return (
    <div className="signup-container">
      <div className="forms-container">
        {signToggle ? (
          <RegisterForm handleSignToggle={handleSignToggle} />
        ) : (
          <LoginForm handleSignToggle={handleSignToggle} />
        )}
      </div>
    </div>
  );
};

export default SignIn;
