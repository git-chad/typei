import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ handleSignToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container flex flex-col">
      <div className="login-form-container flex flex-row justify-start">
        <form
          onSubmit={handleLogin}
          className="w-[50%] max-w-[800px] h-[calc(100vh-80px)] bg-[#211c1c] flex flex-col justify-center p-12"
        >
          <h1 className="pb-10 text-5xl font-bold basic-tc self-center">
            Log into your account
          </h1>
          <div className="p-5 space-y-3 self-center">
            <label className="basic-tc text-lg">Email</label>
            <input
              className="flex flex-col w-[23rem] p-2 rounded-sm bg-[#3a3f3e77]"
              type="email"
              placeholder="Enter your email"
              value={email}
              autoComplete="username"
              required
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
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 transition-colors mt-12 p-2 rounded-sm basic-tc w-[250px] self-center"
            type="submit"
          >
            Log In
          </button>
          <button
            className="basic-tc opacity-80 pt-2 self-center  transition-colors hover:text-teal-500"
            onClick={handleSignToggle}
          >
            Create an account instead
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
