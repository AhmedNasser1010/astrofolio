import Container from "../Components/Container.jsx";
import Skill from "./Skill.jsx";
import { Helmet } from "react-helmet-async";

function About() {
	return (
		<div className="about bg-midnightBlack overflow-hidden">
			<Helmet>
				<title>ASTRO FOLIO | About</title>
				<meta name='description' content='My name is Ahmed Nasser, And i’m a Front end Developer with 1 year of experience in building and maintaining user-facing web applications.' />
			</Helmet>
			<Container>
				<h1 className="text-center pt-20 md:pt-10 pb-14 font-bold text-2xl md:text-3xl animate-lazyDown"><span className="block md:inline">Hi there.</span> Nice to meet you.</h1>
				<div className="flex pb-10 md:pb-0 px-10 gap-x-20 flex-col md:flex-row text-center md:text-left">
					<div className="aboutMe w-full md:w-1/2 mb-16 md:mb-0">
						<h3 className="font-bold text-xl md:text-[25px] pb-4 animate-lazyRight animation-delay-1000 anim-forward opacity-0">Get To Know Me!</h3>
						<p className="md:w-10/12 text-[15px] leading-7 animate-lazyRight animation-delay-2000 anim-forward opacity-0">
							My name is Ahmed Nasser,
							And i’m a Front end Developer with 1 year of
							experience in building and maintaining user-facing
							web applications. Proven ability to use HTML&CSS,
							JavaScript, and React to create responsive and
							interactive websites. Strong attention to detail and a
							passion for user experience.
						</p>
						<a href="https://drive.google.com/file/d/1SQmatZtV8Cqe0VxVPmnsUqFGfQZ93ULG/view?usp=sharing" target="_blank" className="border mx-auto md:mx-0 px-3.5 py-2 block w-fit mt-4 hover:bg-white hover:text-black hover:rounded duration-300 text-[15px] animate-lazyRight animation-delay-2000 anim-forward opacity-0">Full Resume</a>
					</div>
					<div className="skills w-full md:w-1/2">
						<h3 className="font-bold text-xl md:text-[25px] pb-4 animate-lazyRight animation-delay-1000 anim-forward opacity-0">My Current Skills</h3>
						<div className="flex max-w-[500px] flex-wrap gap-3 w-4/5 justify-center md:justify-start m-auto md:m-0">
							<Skill skill="HTML/CSS" delay="animation-delay-2000" />
							<Skill skill="JavaScript" delay="animation-delay-3000" />
							<Skill skill="React.JS" delay="animation-delay-3000" />
							<Skill skill="Redux" delay="animation-delay-4000" />
							<Skill skill="Git" delay="animation-delay-4000" />
							<Skill skill="Github" delay="animation-delay-5000" />
							<Skill skill="Web Development" delay="animation-delay-2000" />
							<Skill skill="TailwindCSS" delay="animation-delay-3000" />
							<Skill skill="Problem-Solving" delay="animation-delay-4000" />
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default About;