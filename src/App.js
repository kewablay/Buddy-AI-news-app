import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Nav from "./components/Nav";
import Section from "./components/Section";

function App() {
  const Alan_api_key =
    "35bcaa59be0774e7a44d1609670243b82e956eca572e1d8b807a3e2338fdd0dc/stage";

  useEffect(() => {
    alanBtn({
      key: Alan_api_key,
      onCommand: ({ command, articles }) => {
        if (command === "Start App") {
          alert("Application started");
        }
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Header />
      <Section />
      <HowItWorks />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
