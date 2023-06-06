import React from "react";
import logoCutout from "../assets/logoCutout.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container bg-[#2c2525] drop-shadow-xl w-screen flex justify-center">
      <div className="flex justify-between h-[5rem] w-[80%]">
        {/* <a className="typeof text-3xl  font-bold">Typeof.</a> */}
        <Link to="/">
          <img
            src={logoCutout}
            alt="TypeiLogo"
            className="typei-logo max-w-[200px] pt-4 max-h-[80%] drop-shadow-lg"
          />
        </Link>
        <ul className="navegation-shit flex text-xl items-center space-x-12 basic-tc">
          <Link to="/"><li className="cursor-pointer transition">Home</li></Link>
          <Link to="/Dashboard"><li className="cursor-pointer transition">Dashboard</li></Link>
          <Link to="/SignIn"><li className="cursor-pointer transition">Sign up</li></Link>
          <Link to="/Premium"><li
            className=" access cursor-pointer transition bg-[#fd5c58] p-2 text-[#2c2525]
            drop-shadow-lg active:bg-[#2c2525] border-solid border-[1px]
           border-[#fd5c58] rounded-sm"
          >
            Get all-access
          </li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
