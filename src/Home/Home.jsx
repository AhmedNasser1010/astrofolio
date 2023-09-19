import Container from "../Components/Container.jsx";
import Logo from "../Components/Logo.jsx";
import HeroText from "./HeroText.jsx";

function Home() {
	return (
		<div className="home overflow-hidden w-full h-screen bg-midnightBlack relative">
			<img src="public/images/bg.jpg" alt="background" className="absolute top-10 md:-top-20 left-1/2 -translate-x-1/2 min-w-[900px] md:min-w-[1200px]" />
			<Container>
				<Logo />
				<HeroText />
			</Container>
		</div>
	)
}

export default Home;