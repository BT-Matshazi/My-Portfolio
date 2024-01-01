import React, { useState } from "react";

export default function PortfolioModel({ title, imgUrl, stack, link, Description }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? imgUrl.length - 1 : prevSlide - 1
      );
    };

    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === imgUrl.length - 1 ? 0 : prevSlide + 1
      );
    };

  return (
    <>
      <button
        onClick={toggleModal}
        className="block m-3 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        View Details
      </button>

      {isModalVisible && (
        <div
          id="defaultModal"
          tabIndex="-1"
          ariaHidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-full flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-2xl">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Project: {title}
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div
                id="controls-carousel"
                className="relative w-full"
                data-carousel="static"
              >
                <div className="relative h-52 overflow-hidden  md:h-96">
                  {imgUrl.map((image, index) => (
                    <div
                      key={index}
                      className={`h-full ${
                        index === currentSlide ? "block" : "hidden"
                      } duration-700 ease-in-out`}
                      data-carousel-item={
                        index === currentSlide ? "active" : ""
                      }
                    >
                      <img
                        src={image}
                        className="object-scale-down md:object-cover cursor-pointer h-full absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ease-in-out "
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  onClick={prevSlide}
                  data-carousel-prev
                >
                  <span className="inline-flex bg-black items-center justify-center w-10 h-10 rounded-full group-hover:bg-gray-700 dark:group-hover:bg-gray-800 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  onClick={nextSlide}
                  data-carousel-next
                >
                  <span className="inline-flex bg-black items-center justify-center w-10 h-10 rounded-full  group-hover:bg-gray-700 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {Description}
                </p>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Stack Used:
                </h4>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                  {stack.map((item) => (
                    <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                      {item}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <a
                  href={link}
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Visit
                </a>
                <button
                  onClick={toggleModal}
                  className="text-black bg-white border border-gray-500 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
