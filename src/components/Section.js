import React from "react";
import Card from "./Card";
import sourcesImg from "../Images/sources.png";
import termsImg from "../Images/terms.png";
import categoryImg from "../Images/category.png";

function Section() {
  return (
    <div className="grid grid-cols-3 p-28">
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
