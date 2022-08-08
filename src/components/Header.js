import React from "react";
import Button from "./Button";
import heroImage from "../Images/Buddy.gif";
import heroBg from "../Images/circle.png";

function Header() {
  return (
    <header className="grid grid-cols-2 px-16 mx-auto pt-[5.75rem]">
      <div className="pt-20">
        <h1 className="font-[600] text-6xl leading-[75px]">
          Hi I'm Buddy your personal assistant
        </h1>
        <p className="text-gray-700 text-lg w-10/12 my-5 mb-7">
          Magic everything easily, getl all your favorite news with just a vioce
          command 😇
        </p>
        <div>
          <Button text={"Explore more"} px={"1.7rem"} py={"1rem"} />
        </div>
      </div>

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
