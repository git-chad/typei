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
        redirect("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="space-x-12">
      {authUser ? (
        <div className="flex space-x-12">
          <Link to="/Dashboard">
            <button className="btn-nav cursor-pointer transition-colors">
              Dashboard
            </button>
          </Link>
          <Link to="/Account">
            <button className="btn-nav cursor-pointer transition-colors">
              Account
            </button>
          </Link>
          <Link to="/">
            <button
              className="btn-nav-signout transition-colors cursor-pointer text-[#fd5c58]"
              onClick={userSignOut}
            >
              Sign Out
            </button>
          </Link>
        </div>
      ) : (
        <Link to="/SignIn">
          <li className="btn-nav cursor-pointer transition-colors">Sign in</li>
        </Link>
      )}
    </div>
  );
};

export default AuthLogic;
