import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

// import css files
import "./index.css";
import "./css/glitch-effect.css";
import "./css/noise.css";
import "./css/zoom.css";
// import "./css/lazy-load-card.css";

// import components
import Nav from "./Components/Nav.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Works from "./Works/Works.jsx";
import Project from "./Project/Project.jsx";

import { noiseEffect } from "./globalScript.js";

function App() {
	const location = useLocation  ();
	
	function navigationEffect() {
		const noiceWrapper = document.querySelector(".noise-wrapper");
		const root = document.querySelector("#root");
		
		
		noiceWrapper.style.display = "block";
		// noiseEffect.play();
		root.style.filter = "invert(100%)";
		setTimeout(() => {
			noiseEffect.pause();
			noiseEffect.currentTime = 0;
			noiceWrapper.style.display = "none";
			root.style.filter = "unset";
		}, 300);
	}
	
	useEffect(() => {
		navigationEffect();
	}, [location])
	
  return (
    <div className="app font-openSans">
      <Nav />
			<div className="noise-wrapper !opacity-100 before:!opacity-100 pinter-none hidden"></div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Works />} />
        <Route path="work/:projectName" element={<Project />} />
      </Routes>
			<Analytics />
    </div>
  )
}

export default App