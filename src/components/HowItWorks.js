import React from "react";
import Step from "./Step";
import record from "../Images/record.png";
import buddyButton from "../Images/buddyButton.png";
import hero from "../Images/howitworks.gif";
import search from "../Images/search.png";
import open from "../Images/open.png";

function HowItWorks() {
  return (
    <div className="p-10 bg-white text-center md:text-left md:p-16">
      <h1 className="text-[32px] font-[400] md:text-[40px] ">How It Works</h1>
      <div className="py-5 flex flex-col-reverse md:grid grid-cols-2 ">
        <div className="space-y-12 relative mx-auto">
          {/* Line */}
          <div className="w-[2px] h-3/4 bg-gray-300 absolute sm:left-3 md:top-16 top-20 left-2"></div>
          <Step
            img={buddyButton}
            content={
              "Click on the Buddy Button on the right button corner of the screen."
            }
            number={"1"}
          />
          <Step
            img={record}
            content={"Initiate a vioce command -eg Give me news from BBC news."}
            number={"2"}
          />
          <Step
            img={search}
            content={"Buddy now searches for the news and displays the results"}
            number={"3"}
          />
          <Step
            img={open}
            content={"You can open articles by saying, 'Open article no. #'"}
            number={"4"}
          />

          {/* steps content */}
        </div>
        <div className="flex justify-center items-center">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
