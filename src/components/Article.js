import React, { createRef, useEffect, useState } from "react";

function Article({
  img,
  title,
  url,
  date,
  source,
  author,
  num,
  activeArticle,
}) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 80);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (num === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [num, activeArticle, elRefs]);

  return (
    <div
      ref={elRefs[num]}
      className={`article border-4 rounded-lg overflow-hidden shadow-lg grid grid-cols-2 h-[11.5rem] sm:h-auto sm:flex flex-col  hover:shadow-cyan-400 hover:scale-105 transition-all duration-300 ${
        activeArticle === num && " shadow-cyan-400 scale-105"
      }`}
    >
      <div className=" overflow-hidden sm:h-[11.5rem]">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-3 flex flex-col justify-between sm:h-[12.5rem]">
        <div>
          <div className="flex justify-between text-xs mb-3 pr-1 sm:mt-2 sm:text-sm">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis mr-8">
              {author}
            </p>
            <p>{date}</p>
          </div>
          <h2 className="text-gray-800 text-sm sm:text-base hover:text-green-600">
            {truncate(title, 80)}
          </h2>
        </div>
        <div>
          {/* <p>{content}</p> */}
          <div className="flex justify-between text-xs md:text-sm">
            <p>{source}</p>
            <p>{num}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
