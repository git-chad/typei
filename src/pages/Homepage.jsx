import React from "react";
import logoBigRed from "../assets/logoBigRed.png";
import AsciiArt from "../components/AsciiArt";
import Asciitest from "../components/Asciitest";

const Homepage = () => {
  return (
    <div className="hero-container flex max-h-screen max-w-[100%] h-[calc(100vh-80px)] ">
      <div className="hero-side left flex flex-col items-center justify-center bg-[#211c1c] w-[50%] p-10">
        <img src={logoBigRed} className="m-10"></img>
        <div className="paragraph-description flex flex-col space-y-5 m-10 basic-tc">
          <p className="text-3xl py-5">
            <b>Typei </b>is the most shitty markdown text editor you'll ever
            see.
          </p>
          <p className="text-2xl py-5">
            <b>Unlimited notes</b> notes, with markdown support.
          </p>
          <p className="text-2xl py-5 italic">Oh, and you gotta pay for it.</p>
          <div className="self-center py-5">
            <button
              className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 
            w-40 h-12  transition-colors rounded-sm text-lg"
            >
              Try it out.
            </button>
          </div>
        </div>
      </div>

      <div className="hero-side right flex bg-[#211c1c] w-[50%] min-h-screen">
        <div className="ascii flex w-full h-full">
          <div
            className="flex flex-col text-xl text-[1rem]"
            style={{ whiteSpace: "pre" }}
          >
            {/* <AsciiArt/> */}
            <Asciitest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
