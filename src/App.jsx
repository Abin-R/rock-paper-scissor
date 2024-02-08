import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Play from "./components/Play";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(() => {
    return localStorage.getItem("score")
      ? parseInt(localStorage.getItem("score"))
      : 0;
  });

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <>
      <div className="container flex  justify-center bg-custom  text-white ">
        <div className="flex flex-col h-screen">
          <div className="flex justify-center w-full">
            <Header score={score} />
          </div>

          <Router>
            <Routes>
              <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
              <Route
                path="/game"
                element={
                  <Game myChoice={myChoice} score={score} setScore={setScore} />
                }
              />
            </Routes>
          </Router>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
