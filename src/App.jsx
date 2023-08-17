import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Hero from './components/Hero';
import Tools from './components/Tools';


function App() {
  return (
    <>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-[100%] mx-auto">
          <Intro />
          <Hero />
          <div
            id="projects"
            className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"
          ></div>
          <Portfolio />
          <div
            id="timeline"
            className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"
          ></div>
          <Timeline />
          <div
            id="proficiency"
            className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"
          ></div>
          <Tools />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App
