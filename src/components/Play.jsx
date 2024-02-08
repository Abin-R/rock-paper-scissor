import Triangle from "../assets/bg-triangle.svg";
import { Link } from "react-router-dom";

import scissors from "../assets/icon-scissors.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";


// eslint-disable-next-line react/prop-types
function Play({ setMyChoice }) {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
    console.log(e.target.dataset.id);
  };

  return (
    <div className="relative h-96 sm:mt-5 mt-12 sm:mx-5  ">
      {/* Triangle Image */}
      <img
        className="absolute top-0 left-0 sm:my-10 sm:mt-20 my-20 lg:h-52 h-72 sm:w-80 sm:mx-2 mx-10 w-60"
        src={Triangle}
        alt="Triangle Background"
      />

      {/* Rock Div */}
      <Link to="/game">
        <div
          id="rockDiv"
          onClick={setChoice}
          data-id="rock"
          className="bg-white w-32 h-32 absolute  sm:-bottom-9 -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-red-500 border-8"
        >
          <img
          id="rockDiv"
          onClick={setChoice}
          data-id="rock"
            className="flex justify-center align-middle mx-7 py-7"
            src={rock}
            alt="Rock"
          />
        </div>
      </Link>

      {/* Paper Div */}
      <Link to="/game">
        <div
          id="paperDiv"
          onClick={setChoice}
          data-id="paper"
          className="bg-white w-32 h-32 absolute  bottom-44 left-72 transform sm:-translate-x-1/2 -translate-x-2/3  -translate-y-1/2 rounded-full border-blue-700 border-8"
        >
          <img
          id="paperDiv"
          onClick={setChoice}
          data-id="paper"
            className="flex justify-center align-middle mx-7 py-7"
            src={paper}
            alt="Paper"
          />
        </div>
      </Link>

      {/* Scissor Div */}
      <Link to="/game">
        <div
          id="scissorDiv"
          onClick={setChoice}
          data-id="scissor"
          className="bg-white w-32 h-32 absolute bottom-44 left-1/4 transform -translate-x-2/3 -translate-y-1/2 rounded-full border-yellow-400 border-8"
        >
          <img
          id="scissorDiv"
          onClick={setChoice}
          data-id="scissor"
            className="flex justify-center align-middle mx-7 py-6"
            src={scissors}
            alt="Scissors"
          />
        </div>
      </Link>
    </div>
  );
}

export default Play;
