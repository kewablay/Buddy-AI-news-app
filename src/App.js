import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import GetNews from "./pages/GetNews";
import Results from "./pages/Results";

function App() {
  const Alan_api_key =
    "35bcaa59be0774e7a44d1609670243b82e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: Alan_api_key,
      onCommand: ({ command, articles }) => {
        if (command === "Start App") {
          alert("Application started");
        }
        if (command === "newHeadlines") {
          console.log(articles);
          setAllArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/news" element={<GetNews articles={allArticles} />} />
          <Route path="/results" element={<Results articles={allArticles} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
