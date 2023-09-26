import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import "./css/glitch-effect.css";
import "./css/noise.css";

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
		
		noiceWrapper.style.display = "block";
		noiseEffect.play();
		setTimeout(() => {
			noiseEffect.pause();
			noiseEffect.currentTime = 0;
			noiceWrapper.style.display = "none";
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
    </div>
  )
}

export default App