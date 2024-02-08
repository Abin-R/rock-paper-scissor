import Triangle from "../assets/image-rules.svg";

function Modal({ toggle }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div
        id="default-modal"
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden  max-h-full"
      >
        <div className="relative p-4 max-w-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5  dark:border-gray-600">
              <span className="text-black flex ml-36 font-extrabold text-xl ">
                RULES
              </span>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={toggle}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="mx-12 my-7 pb-10">
              <img src={Triangle}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
