import React from 'react';
import PortfolioModel from './PortfolioModel';
import { useState } from "react";

function PortfolioItem({ title, imgUrl, stack, link, Description }) {

  console.log(imgUrl);

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
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <div className="relative mb-6">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden  md:h-72">
            {imgUrl.map((image, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item={index === currentSlide ? "active" : ""}
              >
                <img
                  src={image}
                  className="object-cover cursor-pointer h-full absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ease-in-out "
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
      </div>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
      <div>
        <PortfolioModel
          imgUrl={imgUrl}
          title={title}
          stack={stack}
          link={link}
          Description={Description}
        />
      </div>
    </div>
  );
}

export default PortfolioItem;