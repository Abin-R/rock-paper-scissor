import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { rock, paper, scissors } from "../constants/constant";

function Game({ myChoice, score, setScore }) {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newHousePick = () => {
    if (myChoice) {
        const choices = ["rock", "paper", "scissor"];
        setHouse(choices[Math.floor(Math.random() * 3)]);
    }
};


  const Result = () => {
    if (myChoice === "rock" && house === "scissor") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("Lose");
      setScore(score - 1);
    } else if (myChoice === "rock" && house === "rock") {
      setPlayerWin("Draw");
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "scissor") {
      setPlayerWin("Lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && house === "paper") {
      setPlayerWin("Draw");
    } else if (myChoice === "scissor" && house === "paper") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (myChoice === "scissor" && house === "rock") {
      setPlayerWin("Lose");
      setScore(score - 1);
    } else if (myChoice === "scissor" && house === "scissor") {
      setPlayerWin("Draw");
    }
  };

  useEffect(() => {
    Result();
  }, [house]);

  useEffect(() => {
    newHousePick();
  }, [myChoice]);

  const getImageSrc = (choice) => {
    switch (choice) {
      case "rock":
        return rock;
      case "paper":
        return paper;
      case "scissor":
        return scissors;
      default:
        return null;
    }
  };

  const getBorderColor = (choice) => {
    switch (choice) {
      case "rock":
        return "border-red-500";
      case "paper":
        return "border-blue-500";
      case "scissor":
        return "border-yellow-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col md:flex-row  sm:mt-10 mt-6 items-center justify-center">
      <div className="my-10 text-center flex ">
        {myChoice ? (
          <div className="sm:px-0 px-8">
            <span className="sm:font-bold sm:text-xl">You picked</span>
            <div
              className={`bg-white w-32 my-4 mx-auto h-32 rounded-full border-8 ${getBorderColor(
                myChoice
              )}`}
            >
              <img
                className="mx-auto py-6"
                src={getImageSrc(myChoice)}
                alt="Your choice"
              />
            </div>
          </div>
        ):(
            <div className="sm:px-0 px-8">
          <span className="sm:font-bold sm:text-xl ">The house picked</span>
          <div
            className={`bg-black w-32 my-4 mx-auto h-32 rounded-full border-8 ${getBorderColor(
              house
            )}`}
          >
            
          </div>
        </div>
        )}
        {house ? (

        <div className="sm:px-0 px-8  sm:pl-52">
          <span className="sm:font-bold sm:text-xl">The house picked</span>
          <div
            className={`bg-white w-32 my-4 mx-auto h-32 rounded-full border-8 ${getBorderColor(
              house
            )}`}
          >
            <img
              className="mx-auto py-6"
              src={getImageSrc(house)}
              alt="House's choice"
            />
          </div>
        </div>
        ):(
            <div className="sm:px-0 px-8 sm:pl-52">
          <span className="sm:font-bold sm:text-xl ">The house picked</span>
          <div
            className={`bg-black w-32 my-4 mx-auto h-32 rounded-full border-8 ${getBorderColor(
              house
            )}`}
          >
            
          </div>
        </div>
        )}
      </div>
      <div className="text-center mt-10 md:mt-0 sm:absolute">
        {playerWin && (
          <div className="result-message">
            <h2 className="font-bold text-4xl">{`You ${playerWin}`}</h2>
          </div>
        )}
        <Link to="/" onClick={() => setHouse("")}>
          <button className="focus:outline-none text-black my-4 bg-white font-medium rounded-lg text-sm px-6 py-2">
            Play Again
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
