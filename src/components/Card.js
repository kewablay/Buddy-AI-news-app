import React from "react";

function Card({ imageUrl, title, content }) {
  return (
    <div className="card group bg-white w-[16rem] h-[14rem] rounded-lg shadow-xl p-3 pt-24 relative border-2 mx-auto border-gray-200 hover:shadow-cyan-300 lg:pt-28 lg:h-[16rem] lg:w-[20rem]">
      <div className="absolute -top-24 w-[12rem] left-7 bg-white p-2 shadow-2xl rounded-lg lg:w-fit lg:left-10 lg:p-3 lg:top-4 lg:group-hover:-top-28 group-hover:scale-105">
        <img className="w-full" src={imageUrl} alt="" />
      </div>
      <div className="px-8 space-y-2 md:space-y-4">
        <h2 className="font-[500] text-lg text-gray-800 lg:text-[25px]">
          {title}
        </h2>
        <p className="text-sm text-gray-500">{content}</p>
      </div>
    </div>
  );
}

export default Card;
