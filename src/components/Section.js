import React from "react";
import Card from "./Card";
import sourcesImg from "../Images/sources.png";
import termsImg from "../Images/terms.png";
import categoryImg from "../Images/category.png";

function Section() {
  return (
    <div className="section flex flex-col p-16 mt-28 space-y-48 sm:grid-cols-2 sm:grid sm:px-4  sm:space-y-0 md:grid-cols-3 md:py-0 lg:p-0 lg:mt-20 xl-mt-2 xl:px-24 ">
      <Card
        title={"News by Sources"}
        content={"Get the latest news from your favorite sources"}
        imageUrl={sourcesImg}
      />
      <Card
        title={"News by Term"}
        imageUrl={termsImg}
        content={"Get the latest news updates on a search a term eg. Iphone"}
      />
      <Card
        title={"News by Category"}
        imageUrl={categoryImg}
        content={"Get the latest news by categories eg. Technology"}
      />
    </div>
  );
}

export default Section;
