import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-[100%] mx-auto">
          <Intro />
          <Hero />
          <Portfolio />
          <Timeline />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App
