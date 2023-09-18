import { Routes, Route } from 'react-router-dom';

// import components
import Nav from "./Components/Nav.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Works from "./Works/Works.jsx";
import Project from "./Project/Project.jsx";

function App() {
  return (
    <div className="app">
      <Nav />
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