import React from "react";
import sources from "../Images/sources.png";

function NewsCard({ title, subtitle, content, voiceCommand }) {
  return (
    <div className="relative newsCard group rounded-xl shadow-xl bg-white space-y-8 p-4 text-center">
      <div>
        <p>{title}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute -top-8 w-0 h-56 rounded-lg bg-emerald-50 flex justify-center items-center text-gray-700 text-[14.5px] group-hover:w-44 group-hover:p-2 group-hover:border-2  group-hover:border-gray-400 group-hover:delay-200">
          {/* content */}
          <div className="opacity-0 group-hover:opacity-100 group-hover:delay-500">
            <h2 className="mb-4">{subtitle} </h2>
            <p>{content}</p>
          </div>

          {/* sliders */}
          <div className="absolute  w-2 h-7 rounded-tl-full rounded-bl-full bg-gradient-to-r from-blue-600 to-cyan-900 top-24 -left-2 group-hover:w-[.4rem] duration-200"></div>
          <div className="absolute  w-2 h-7 rounded-tr-full rounded-br-full bg-gradient-to-l from-blue-600 to-cyan-900 top-24 -right-2 group-hover:w-[.4rem] duration-200"></div>
        </div>
      </div>
      <div>
        <h1>Try Saying: </h1>
        <p>Give me {voiceCommand}</p>
      </div>
    </div>
  );
}

export default NewsCard;
