import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

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
      <h1>Welcome to Buddy AI newsapp </h1>
    </div>
  );
}

export default App;
