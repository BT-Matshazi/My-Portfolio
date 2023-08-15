import React from "react";

function Hero() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 lg:h-[100vh]">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-center self-center align-middle">
          <div className=" align-middle mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Bekithemba Matshazi
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
              Full Stack Web Developer
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcome to my Full Stack Web Developer portfolio! As a passionate
              and innovative developer, my work merges imaginative front-end
              designs with powerful back-end functionality to create seamless,
              user-centered web experiences. Join me in exploring a collection
              of projects that showcase my commitment to innovative technology
              and intuitive design.
            </p>
            <a
              href="/public/docs/CV - Bekithemba Matshazi.pdf"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              My Resume
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/assets/Bekithemba.jpg"
              alt="mockup"
              className="rounded-[50%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
