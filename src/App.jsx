import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

function App() {
  return (
	<>

		<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
				<Intro />
				<Portfolio />
				<Timeline />
				<Footer />
			</div>
		</div>
	 </>
  )
}

export default App
