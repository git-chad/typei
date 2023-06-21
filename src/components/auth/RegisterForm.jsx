import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase"

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
      <div className="register-form-container flex flex-row justify-start">
        <form
          onSubmit={handleRegister}
          className="w-[50%] max-w-[800px] h-[calc(100vh-80px)] bg-[#211c1c] flex flex-col justify-center p-12"
        >
          <h1 className="pb-10 text-5xl font-bold basic-tc self-center">Create an account</h1>

          <div className="p-5 space-y-3 self-center">
            <label className="basic-tc text-lg">Email</label>
            <input
              className="flex flex-col w-[23rem] p-2 rounded-sm bg-[#3a3f3e77]"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="p-5 space-y-3 self-center">
            <label className="basic-tc text-lg">Password</label>
            <input
              className="flex flex-col w-[23rem] p-2 rounded-sm bg-[#3a3f3e77]"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 transition-colors mt-12 p-2 rounded-sm basic-tc w-[250px] self-center" type="submit">Sign Up</button>
          <button className="basic-tc opacity-80 pt-2 self-center transition-colors hover:text-teal-500"  onClick={handleSignToggle}>
            Sign in instead
          </button>
        </form>
        <div className="art-container max-w-[50%]">
          
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
