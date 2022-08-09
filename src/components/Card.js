import React from "react";

function Card({ imageUrl, title, content }) {
  return (
    <div className="card group bg-white w-[20rem] h-[16rem] rounded-lg shadow-xl p-3 pt-28 relative border-2 border-gray-200 hover:h-[16rem] hover:shadow-cyan-300 ">
      <div className="absolute top-4 left-10 bg-white p-3 shadow-2xl rounded-lg group-hover:-top-28 group-hover:scale-105">
        <img className="w-full" src={imageUrl} alt="" />
      </div>
      <div className="px-8 space-y-4">
        <h2 className="text-[25px] font-[500] text-gray-800">{title}</h2>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
}

export default Card;
