import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const AuthLogic = () => {
  const [authUser, setAuthUser] = useState(null);
  

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        redirect('/');
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <div className="space-x-12">
      {authUser ? (
        <>
          <Link to="/Account">
            <button className="cursor-pointer">Account</button>
          </Link>
          <Link to="/">
            <button
              className="cursor-pointer transition-color text-[#fd5c58]"
              onClick={userSignOut}
            >
              Sign Out
            </button>
          </Link>  
        </>
      ) : (
        <Link to="/SignIn">
          <li className="cursor-pointer transition">Sign in</li>
        </Link>
      )}
    </div>
  );
};

export default AuthLogic;
