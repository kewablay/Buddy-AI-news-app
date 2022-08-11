import React from "react";
import { useNavigate } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import buddyBg from "../Images/bg.gif";
import realBuddy from "../Images/Cute.png";

function GetNews({ articles }) {
  console.log(articles);
  const navigate = useNavigate();
  if (articles) {
    navigate("/results");
  }
  return (
    <div className="flex flex-col md:grid grid-cols-3 space-y-10 md:space-y-0 md:space-x-3 p-16 sm:p-20 md:px-8">
      <div className="space-y-16">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-red-200  p-2">
          {/* news Card  */}
          <NewsCard
            title={"Latest News"}
            voiceCommand={"the latest news"}
            subtitle={"Gives you: "}
            content={"Top trending news"}
          />
        </div>
        <div className="rounded-xl bg-gradient-to-r  from-purple-500 to-blue-200 p-2">
          <NewsCard
            title={"News by Term"}
            voiceCommand={"updates on Iphone"}
            subtitle={"Terms: "}
            content={"Sumsung, Iphone, Bitcoin, Donald Trump, Liverpool, Tesla"}
          />
        </div>
      </div>
      {/* Buddy iamge */}
      <div className="flex justify-center items-center ">
        <div className="relative rounded-xl overflow-hidden">
          <img
            className="w-full h-full absolute object-cover -z-10 opacity-5"
            src={buddyBg}
            alt=""
          />
          <img src={realBuddy} alt="" className="top-[15%] w-4/5 mx-auto" />
        </div>
      </div>

      <div className="space-y-16">
        <div className="rounded-xl bg-gradient-to-r  from-orange-500 to-purple-200 p-2 ">
          <NewsCard
            title={"News by Sources "}
            voiceCommand={"news from CNN"}
            subtitle={"Sources: "}
            content={
              "BBC News, CNN, ESPN, Fox News, ABC News, Techcrunch,Aljazeera English, Focus, Fox Sports"
            }
          />
        </div>
        <div className="rounded-xl bg-gradient-to-r  from-cyan-600 to-yellow-200 p-2">
          <NewsCard
            title={"News by Category: "}
            voiceCommand={"the latest Technology news"}
            subtitle={"Categories:"}
            content={
              "Technology, Business, Health, Entertainment, Science, Sport"
            }
          />
        </div>
      </div>
      {/* {articles.map((article, key) => (
        <h1>
          {key + 1 + ")" + " "}
          {article.description}
        </h1>
      ))} */}
    </div>
  );
}

export default GetNews;
