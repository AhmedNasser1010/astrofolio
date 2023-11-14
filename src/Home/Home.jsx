import Container from "../Components/Container.jsx";
import Logo from "../Components/Logo.jsx";
import HeroText from "./HeroText.jsx";
import { Helmet } from "react-helmet-async";

function Home() {
	return (
		<div className="home overflow-hidden w-full h-screen bg-midnightBlack relative">
			<Helmet>
				<title>ASTRO FOLIO | Ahmed Nasser | Web Developer X1</title>
				<meta name='description' content='My name is Ahmed Nasser, And i’m a Front end Developer with 1 year of experience in building and maintaining user-facing web applications.' />
			</Helmet>
			<img src="images/moon.jpg" alt="background" className="absolute pinter-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:w-[50%] md:w-[60%]" />
			<Container>
				<Logo />
				<HeroText />
			</Container>
		</div>
	)
}

// absolute pinter-none grayscale top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 scale-[1.2] min-w-[1394px]

export default Home;