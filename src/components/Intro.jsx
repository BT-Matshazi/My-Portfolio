import React from "react";

function Intro() {
  return (
    // <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
    //   <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
    //     Bekithemba Matshazi
    //   </h1>
    //   <p className="text-base md:text-xl mb-3 font-medium">
    //     Full Stack Web Developer
    //   </p>
    //   <p className="text-sm max-w-xl mb-6 font-bold">
    //     <br />{" "}
    //     <span className="text-black hover:underline underline-offset-2 decoration-2 decoration-red-600">
    //       Bekithemba Matshazi
    //     </span>{" "}
    //     Software Development Varsity Collage
    //   </p>
    // </div>

    <>
     <section className="section">
      <div className="container mx-auto">
        <div>
          <div></div>
          <div>
            <img src="/public/assets/Bekithemba.jpg" alt='bekithemba'/>
          </div>
        </div>
      </div>
     </section>
      
    </>
  );
}

export default Intro;
