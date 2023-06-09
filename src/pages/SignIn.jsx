import React, { useState } from "react";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
import AuthLogic from "../components/auth/AuthLogic";
import testVideo from "../assets/testVideoTeal.mp4";

const SignIn = () => {
  const [signToggle, setSignToggle] = useState(false);

  const handleSignToggle = () => {
    setSignToggle(!signToggle);
  };

  return (
    <div className="signup-container flex flex-row">
      <div className="forms-container z-10 w-full">
        {signToggle ? (
          <RegisterForm handleSignToggle={handleSignToggle} />
        ) : (
          <LoginForm handleSignToggle={handleSignToggle} />
        )}
      </div>

      <div className="video-background-container">
        <div className="video-overlay">
          <video
            className="-z-10 top-0 left-0 absolute object-fill"
            src={testVideo}
            controls
            autoPlay muted loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
