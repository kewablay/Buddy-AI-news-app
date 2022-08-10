import React from "react";
import Button from "./Button";
import ReadyImg from "../Images/ready.png";

function Explore() {
  return (
    <div className="p-10 pt-6  md:h-[43rem] flex flex-col-reverse text-center md:text-left md:p-16 md:grid grid-cols-2">
      <div className="">
        <img
          className="w-4/5 mx-auto md:w-fit translate-y-[2.88rem] md:translate-y-24"
          src={ReadyImg}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-2/4 space-y-6 md:space-y-8 h-fit">
          <h2 className="text-[40px] md:text-6xl text-gray-800">Ready?</h2>
          <p className="text-gray-600 text-[14px]">
            Let's jump straight into the app. Click on Let's go button or click
            the Buddy button and say "Get Started".
          </p>
          <div>
            <Button text={"Let's Go"} px={"1.7rem"} py={"1rem"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
