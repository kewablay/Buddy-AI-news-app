import React from "react";

function Article({ img, title, content, url, date, source, author, num }) {
  return (
    <div className="border-4 rounded-lg overflow-hidden shadow-lg">
      <div className="h-[11.5rem] overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-3 h-[12.5rem] flex flex-col justify-between">
        <div>
          <div className="flex justify-between text-sm mb-3 mt-2 pr-1">
            <p>{author}</p>
            <p>{date}</p>
          </div>
          <h2 className="text-gray-800">{title}</h2>
        </div>
        <div>
          {/* <p>{content}</p> */}
          <div className="flex justify-between ">
            <p>{source}</p>
            <p>{num}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
