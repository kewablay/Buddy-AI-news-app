import React from "react";
import technicalRobot from "../Images/cuteRobot.png";
import resultsBg from "../Images/resultsBg.jpg";

import sources from "../Images/sources.png";
import Article from "./Article";
import { useNavigate } from "react-router-dom";

function Results({ articles }) {
  const navigate = useNavigate();
  const banner = articles[Math.floor(Math.random() * articles.length - 1)];
  console.log("Banner article: ", banner);
  return (
    <div className="px-8 md:px-8 py-16">
      <button
        className="fixed top-3 left-3 bg-blue-600 text-white p-2 rounded-xl"
        onClick={() => navigate("/news")}
      >
        Back
      </button>
      {/* banner */}
      <div className="grid md:grid-cols-[2.5fr_1fr] md:space-x-8 mb-12">
        {/* Main Banner */}
        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-xl">
          {/* overlay */}
          <div className="absolute left-0 bottom-0 z-30 w-full h-full opacity-50 bg-gradient-to-t from-black to-gray-700 "></div>
          <div className="absolute left-0 bottom-0 z-30 w-full h-36 opacity-90 bg-gradient-to-t from-black  "></div>
          {/* Banner image */}
          <img
            src={banner?.urlToImage}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Banner contents */}
          <div className="absolute left-0 bottom-0 z-50 p-4 h-full flex flex-col justify-between md:px-12 text-gray-100">
            <div className="flex space-x-5">
              <p>{banner?.author}</p>
              <p>24/09/2022</p>
            </div>
            <div>
              {/* source badge */}
              <p
                className={`${
                  banner &&
                  "p-[1px] px-2 bg-green-500 opacity-70 text-white w-fit rounded-sm text-sm"
                }`}
              >
                {banner?.source.name}
              </p>
              {/* aticle title */}
              <h2 className="text-white text-2xl mb-4">{banner?.title}</h2>
            </div>
          </div>
        </div>
        {/* side Banner */}
        <div className="relative bg-gradient-to-t from-black to-blue-900  rounded-lg overflow-hidden">
          <img
            className="w-full z-50 object-cover"
            src={technicalRobot}
            alt=""
          />
          <img
            src={resultsBg}
            alt=""
            className="absolute top-0 left-0 object-cover opacity-10 h-full"
          />
        </div>
      </div>

      {/* All news Articles */}
      <div className="grid grid-cols-4 gap-12">
        {articles.map((article, key) => (
          <Article
            img={article?.urlToImage}
            title={article?.title}
            date={"10/9/2020"}
            author={article?.author}
            source={article?.source.name}
            num={key + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Results;
