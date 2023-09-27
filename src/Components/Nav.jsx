import { Link } from "react-router-dom";

function Nav() {
	
	function handleClick(e) {
		const navigationBtn = Array.from(document.querySelectorAll(".navigation-btn"));
		
		navigationBtn.map(btn => {btn.classList.remove("glitch")});
		e.target.classList.add("glitch");
	}
	
	return (
		<nav className="absolute z-10 text-white top-[calc(2rem+20px)] md:top-[calc(3.5rem+20px)] right-[calc(2rem+25px)] md:right-[calc(3.5rem+30px)]">
			<Link to="/" className="home navigation-btn block -m-1.5 glitch" data-text="Home" onClick={handleClick}>Home</Link>
			<Link to="about" className="about navigation-btn block -m-1.5" data-text="About" onClick={handleClick}>About</Link>
			<Link to="work" className="work navigation-btn block -m-1.5" data-text="Work" onClick={handleClick}>Work</Link>
		</nav>
	)
}

export default Nav;