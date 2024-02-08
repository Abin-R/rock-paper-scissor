// eslint-disable-next-line react/prop-types
function Header({ score }) {
  return (
    <>
      <div className="border flex justify-between sm:w-96 w-80 sm:mx-0  border-solid rounded-xl border-white my-6 p-4">
        <div className="flex flex-col">
          <span className="text-xl font-extrabold">ROCK</span>
          <span className="text-xl font-extrabold">PAPER</span>
          <span className="text-xl font-extrabold">SCISSOR</span>
        </div>
        <div className="bg-white rounded-lg sm:ml-40">
          <h2 className="text-blue-600 mx-5 mt-2.5">Score</h2>
          <span className="text-black flex justify-center text-3xl font-extrabold">
            {score}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
