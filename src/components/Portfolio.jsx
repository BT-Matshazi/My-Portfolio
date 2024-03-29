import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white text-center">
        Noteworthy Projects
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center  m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 mx-4 lg:grid-cols-2 gap-4 w-10/12">
          {portfolio.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              Description={project.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
