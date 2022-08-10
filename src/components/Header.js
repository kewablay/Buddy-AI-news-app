import React from "react";
import Button from "./Button";
import heroImage from "../Images/Buddy.gif";
import heroBg from "../Images/circle.png";

function Header() {
  return (
    <header className="flex flex-col-reverse md:grid sm:grid-cols-2 relative px-16  pt-[3.75rem]">
      {/* Intro TExt */}
      <div className=" pt-4 md:pt-20 text-center md:text-left">
        <h1 className="font-[600] text-[35px] mt-8 md:text-6xl md:leading-[75px] ">
          Hi I'm Buddy your personal assistant
        </h1>
        <p className="text-gray-700 text-md my-5 mb-7 md:w-10/12 md:text-lg">
          Magic everything easily, getl all your favorite news with just a vioce
          command.
        </p>
        <div>
          <Button text={"Explore more"} px={"1.7rem"} py={"1rem"} />
        </div>
      </div>
      {/* hero image */}
      <div className="relative ">
        <img
          src={heroBg}
          alt=""
          className="absolute bottom-28 left-0 opacity-20 -z-10 w-11/12"
        />
        <img src={heroImage} alt="" />
      </div>
    </header>
  );
}

export default Header;
