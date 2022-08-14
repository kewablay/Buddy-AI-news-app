import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import GetNews from "./pages/GetNews";
import Results from "./pages/Results";
import wordsToNumbers from "words-to-numbers";

function App() {
  const Alan_api_key =
    "35bcaa59be0774e7a44d1609670243b82e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [allArticles, setAllArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => {
    alanBtn({
      key: Alan_api_key,
      onCommand: ({ command, articles, number }) => {
        if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "newHeadlines") {
          console.log(articles);
          setAllArticles(articles);
        } else if (command === "done") {
          setActiveArticle(0);
        } else if (command === "back") {
        } else if (command === "Open") {
          console.log(number);
          // fuzzy helps us capture the number if we get instances like "for" instead of "four or 4"
          const parsedNum = isNaN(number)
            ? wordsToNumbers(number, { fuzzy: true })
            : number;
          // console.log("parsed num: ", parsedNum);
          const num = parsedNum - 1;
          console.log(num);
          const article = articles[num].url;
          window.open(article, "_tab");
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/news"
            element={
              <GetNews articles={allArticles} activeArticle={activeArticle} />
            }
          />
          {/* <Route
            path="/results"
            element={
              <Results articles={allArticles} activeArticle={activeArticle} />
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
