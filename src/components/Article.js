import React from "react";

function Article({ img, title, content, url, date, source, author, num }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="border-4 rounded-lg overflow-hidden shadow-lg grid grid-cols-2 h-[11.5rem] sm:h-auto sm:flex flex-col">
      <div className=" overflow-hidden sm:h-[11.5rem]">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-3 flex flex-col justify-between sm:h-[12.5rem]">
        <div>
          <div className="flex justify-between text-sm mb-3 mt-2 pr-1">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis mr-8">
              {author}
            </p>
            <p>{date}</p>
          </div>
          <h2 className="text-gray-800">{truncate(title, 80)}</h2>
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
