import Container from "../Components/Container.jsx";
import Skill from "./Skill.jsx";

function About() {
	return (
		<div className="about bg-midnightBlack overflow-hidden">
			<Container>
				<h1 className="text-center pt-20 md:pt-10 pb-14 font-bold text-2xl md:text-3xl"><span className="block md:inline">Hi there.</span> Nice to meet you.</h1>
				<div className="flex pb-10 md:pb-0 px-10 gap-x-20 flex-col md:flex-row text-center md:text-left">
					<div className="aboutMe w-full md:w-1/2 mb-16 md:mb-0">
						<h3 className="font-bold text-xl md:text-[25px] pb-4">Get To Know Me!</h3>
						<p className="md:w-10/12 text-[15px] leading-7">
							My name is Ahmed Nasser,
							And i’m a Front end Developer with 1 year of
							experience in building and maintaining user-facing
							web applications. Proven ability to use HTML&CSS,
							JavaScript, and React to create responsive and
							interactive websites. Strong attention to detail and a
							passion for user experience.
						</p>
						<a href="#" className="border mx-auto md:mx-0 px-3.5 py-2 block w-fit mt-4 hover:bg-white hover:text-black hover:rounded duration-300 text-[15px]">Full Resume</a>
					</div>
					<div className="skills w-full md:w-1/2">
						<h3 className="font-bold text-xl md:text-[25px] pb-4">My Current Skills</h3>
						<div className="flex flex-wrap gap-3 w-4/5 justify-center md:justify-start m-auto md:m-0">
							<Skill skill="HTML/CSS" />
							<Skill skill="JavaScript" />
							<Skill skill="React.JS" />
							<Skill skill="Redux" />
							<Skill skill="Git" />
							<Skill skill="Github" />
							<Skill skill="Web Development" />
							<Skill skill="TailwindCSS" />
							<Skill skill="Problem-Solving" />
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default About;