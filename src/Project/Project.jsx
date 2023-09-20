import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import works from "../works.js";

import Container from "../Components/Container.jsx";
import Image from "./Image.jsx";


function Project() {
	const projectName = useParams().projectName;
	const [project, setProject] = useState({});

	// cebab-case formater
	function titleFormate(text) {
		let convertedArr = [];

		text.split(" ").map((txt, index) => {
			index === 0 ? convertedArr.push(txt.toLowerCase()) : convertedArr.push("-" + txt.toLowerCase());
		});

		return convertedArr.join("");
	}

	useEffect(() => {
		works.map(work => {
			if (titleFormate(work.title) === projectName) {
				setProject(work);
				return;
			}
		})
	}, [])

	useEffect(() => {
		console.log(project.imgs);
	}, [project])

	return (
		<div className="project overflow-hidden bg-midnightBlack">
			<Container>
				<div className="project-grid grid gap-x-6 gap-y-8 h-[calc(100%-4rem)] w-10/12 mt-8 mx-auto">
					<Image img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[2] col-end-[4]" rowStartEnd="row-start-[1] row-end-[3]" />
					<Image img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[4] col-end-[6]" rowStartEnd="row-start-[1] row-end-[3]" />
					<Image img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[1] col-end-[3]" rowStartEnd="row-start-[3] row-end-[5]" />
					<Image img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[3] col-end-[5]" rowStartEnd="row-start-[3] row-end-[5]" />
					<Image img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[3] col-end-[5]" rowStartEnd="row-start-[5] row-end-[7]" />
					<Image img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[5] col-end-[7]" rowStartEnd="row-start-[4] row-end-[6]" />
					<Image img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[5] col-end-[7]" rowStartEnd="row-start-[6] row-end-[8]" />
					<Image img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[7] col-end-[9]" rowStartEnd="row-start-[6] row-end-[8]" />
					<h1 className="grid col-start-[5] col-end-[15] row-start-[3] row-end-[4] font-horizon text-6xl hover:-skew-x-12 hover:translate-x-6 duration-300 cursor-pointer">{ project.title && project.title }</h1>
					<p className="grid col-start-[7] col-end-[15] row-start-[4] row-end-[6]">{ project.description && project.description }</p>
					<a className="col-start-[9] col-end-[11] row-start-[6] row-end-[7] border flex items-center justify-center hover:bg-white hover:text-black rounded hover:rounded-xl duration-300 text-[15px]" href={project.liveLink ? project.liveLink : "#"}>Live View</a>
					<a className="col-start-[11] col-end-[13] row-start-[6] row-end-[7] border flex items-center justify-center hover:bg-white hover:text-black rounded hover:rounded-xl duration-300 text-[15px]" href={project.github ? project.github : "#"}>Github</a>
				</div>
			</Container>
		</div>
	)
}

export default Project;