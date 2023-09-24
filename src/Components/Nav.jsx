import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav className="absolute z-10 text-white top-[calc(2rem+20px)] md:top-[calc(3.5rem+20px)] right-[calc(2rem+25px)] md:right-[calc(3.5rem+30px)]">
			<Link to="/" className="block -m-1.5">Home</Link>
			<Link to="about" className="block -m-1.5">About</Link>
			<Link to="work" className="block -m-1.5">Work</Link>
		</nav>
	)
}

export default Nav;