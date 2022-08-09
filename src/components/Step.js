import React from "react";

function Step({ img, content, number }) {
  return (
    <div className=" step group flex align-middle">
      <div className="w-7 h-7 rounded-full bg-orange-400 my-auto mr-4 z-10 text-center text-white font-bold pt-[2px] group-hover:scale-150">
        {number}
      </div>
      <div className="flex space-x-4 p-2 rounded-full bg-white shadow-md border-2 border-blue-700  border-y-cyan-200 border-r-8 border-r-blue-200 hover:hover:border-r-blue-700 ">
        <div>
          <img className="w-10" src={img} alt="" />
        </div>
        <p className="my-auto">{content}</p>
      </div>
    </div>
  );
}

export default Step;
