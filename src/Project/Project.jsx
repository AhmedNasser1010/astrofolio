import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import works from "../works.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Container from "../Components/Container.jsx";
import Image from "./Image.jsx";
import InfoItem from "./InfoItem.jsx";


function Project() {
	const projectName = useParams().projectName;
	const [project, setProject] = useState({});
	const [sliderRef, setSliderRef] = useState(null);
	
	const settings = {
		arrows: false,
    dots: true,
    infinite: true,
		fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		customPaging: function(i) {
			return (
				<a>
					<img src={`${project.imgs[i]}`} />
				</a>
			)
		}
  };

	// cebab-case formater
	function titleFormate(text) {
		let convertedArr = [];

		text.split(" ").map((txt, index) => {
			index === 0 ? convertedArr.push(txt.toLowerCase()) : convertedArr.push("-" + txt.toLowerCase());
		});

		return convertedArr.join("");
	}
	
	function handleInfoText(textArr) {
		let result = [];
		
		if (textArr) {
			textArr.map((txt, i) => {
				i === 0 ? result.push(txt) : result.push(` / ${txt}`);
			})
		}
		
		return result.join("");
	}
	
	function onExit() {
		const slider = document.querySelector(".images-slider");
		slider.classList.remove("entred");
		slider.classList.add("exited");
	}
	
	function onEntr(index) {
		const slider = document.querySelector(".images-slider");
		slider.classList.remove("exited");
		slider.classList.add("entred");

		sliderRef.slickGoTo(index);
		
	}

	useEffect(() => {
		works.map(work => {
			if (titleFormate(work.title) === projectName) {
				setProject(work);
				return;
			}
		})
	}, [])

	return (
		<div className="project h-screen overflow-hidden bg-midnightBlack relative">
			<Container>
				<div className="project-grid hidden overflow-scroll-y-shadow-sm scroll-none overflow-y-scroll md:overflow-visible md:grid md:gap-x-6 md:gap-y-8 h-[calc(100vh-6rem)] md:h-[calc(100%-4rem)] w-10/12 mt-8 mx-auto">
					<h1 data-text={ project.title } className="glitch animation-delay-1000 anim-duration-1000ms grid text-center md:text-left col-start-[5] col-end-[15] row-start-[3] row-end-[4] font-horizon text-2xl md:text-6xl hover:-skew-x-12 hover:translate-x-6 duration-300 cursor-pointer">{ project.title }</h1>
					<div className="grid translate-y-[-20%] opacity-0 anim-forward animation-delay-1000 anim-duration-1000ms animate-lazyUpToDown text-center text-xs md:text-sm md:text-left col-start-[7] col-end-[15] row-start-[4] row-end-[6]">
						<p>{ project.description && project.description }</p>
						<div className="info w-fit">
							<div className="tools font-bold">Categories: <InfoItem text={handleInfoText(project.categories)} /></div>
							<div className="categories font-bold">Technologys: <InfoItem text={handleInfoText(project.technologys)} /></div>
						</div>
					</div>
					<a className="live translate-y-[-20%] opacity-0 anim-forward animation-delay-1000 anim-duration-1000ms animate-lazyUpToDown col-start-[10] col-end-[12] row-start-[6] row-end-[7] md:translate-x-[-45%] xl:translate-x-[-40%] border flex items-center justify-center hover:bg-white hover:text-black rounded hover:rounded-xl duration-300 text-[15px]" href={project.liveLink ? project.liveLink : "#"} target="_blank">Live View</a>
					<a className="github translate-y-[-20%] opacity-0 anim-forward animation-delay-1000 anim-duration-1000ms animate-lazyUpToDown col-start-[12] col-end-[14] row-start-[6] row-end-[7] translate-x-[-45%] translate-x-[-61%] xl:-translate-x-1/2 border flex items-center justify-center hover:bg-white hover:text-black rounded hover:rounded-xl duration-300 text-[15px]" href={project.github ? project.github : "#"} target="_blank">Github</a>
					<Link to="/work" className="backBtn translate-y-[-20%] opacity-0 anim-forward animation-delay-1000 anim-duration-1000ms animate-lazyUpToDown col-start-[9] col-end-[10] row-start-[6] row-end-[7] ml-auto border flex items-center justify-center hover:bg-white hover:text-black rounded hover:rounded-xl duration-300 text-[15px] w-5 md:w-1/2">{`<`}</Link>
					<Image clickEvent={() => onEntr(0)} img={project.imgs ? project.imgs[0] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[2] col-end-[4]" rowStartEnd="row-start-[1] row-end-[3]" animation="animate-lazyDownToUp translate-y-[20%] opacity-0 anim-forward" />
					<Image clickEvent={() => onEntr(1)} img={project.imgs ? project.imgs[1] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[4] col-end-[6]" rowStartEnd="row-start-[1] row-end-[3]" animation="animate-lazyDownToUp translate-y-[20%] opacity-0 anim-forward" />
					<Image clickEvent={() => onEntr(2)} img={project.imgs ? project.imgs[2] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[1] col-end-[3]" rowStartEnd="row-start-[3] row-end-[5]" animation="animate-lazyDownToUp animation-delay-500 translate-y-[20%] opacity-0 anim-forward" />
					<Image clickEvent={() => onEntr(3)} img={project.imgs ? project.imgs[3] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[3] col-end-[5]" rowStartEnd="row-start-[3] row-end-[5]" animation="animate-lazyDownToUp animation-delay-500 translate-y-[20%] opacity-0 anim-forward" />
					<Image clickEvent={() => onEntr(4)} img={project.imgs ? project.imgs[4] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[3] col-end-[5]" rowStartEnd="row-start-[5] row-end-[7]" animation="animate-lazyDownToUp animation-delay-2000 translate-y-[20%] opacity-0 anim-forward" />
					<Image clickEvent={() => onEntr(5)} img={project.imgs ? project.imgs[5] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[5] col-end-[7]" rowStartEnd="row-start-[4] row-end-[6]" animation="animate-lazyUpToDown animation-delay-500 translate-y-[-20%] opacity-0 anim-forward" />
					<Image clickEvent={() => onEntr(6)} img={project.imgs ? project.imgs[6] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[5] col-end-[7]" rowStartEnd="row-start-[6] row-end-[8]" animation="animate-lazyUpToDown animation-delay-2000 translate-y-[-20%] opacity-0 anim-forward" />
					<Image clickEvent={() => onEntr(7)} img={project.imgs ? project.imgs[7] : "https://placehold.co/400x400"} alt={project.title} colStartEnd="col-start-[7] col-end-[9]" rowStartEnd="row-start-[6] row-end-[8]" animation="animate-lazyUpToDown animation-delay-2000 translate-y-[-20%] opacity-0 anim-forward" />
				</div>
				<div className="project-flex flex flex-col md:hidden justify-between items-center h-[calc(100vh-6rem)] w-10/12 mt-8 mx-auto">
					<h1 data-text={ project.title } className="glitch w-full text-center font-horizon text-2xl duration-300 cursor-pointer">{ project.title && project.title }</h1>
					<div className="text-center text-xs">
						<p className="py-10">{ project.description && project.description }</p>
						<div className="info py-4">
							<div className="tools font-bold mb-2">Categories:<br /><InfoItem text={handleInfoText(project.categories)} /></div>
							<div className="categories font-bold">Technologys:<br /><InfoItem text={handleInfoText(project.technologys)} /></div>
						</div>
					</div>
					<div className="flex gap-1">
						<Link to="/work" className="backBtn p-1.5 border flex items-center justify-center hover:bg-white hover:text-black rounded hover:rounded-xl duration-300 text-[15px] w-5">{`<`}</Link>
						<a className="live p-1.5 border flex items-center justify-center hover:bg-white hover:text-black rounded hover:rounded-xl duration-300 text-[15px]" href={project.liveLink ? project.liveLink : "#"}>Live View</a>
						<a className="github p-1.5 border flex items-center justify-center hover:bg-white hover:text-black rounded hover:rounded-xl duration-300 text-[15px]" href={project.github ? project.github : "#"}>Github</a>
					</div>
					<div className="
						images-flex overflow-scroll-y-shadow-sm scroll-none
						overflow-y-scroll
						flex flex-wrap content-center
						mt-28 gap-4 pt-40 h-1/2
					">
						{
							project.imgs?.map((img, i) => <img key={i} onClick={() => onEntr(i)} className="w-[calc(50%-1rem)] rounded-xl" src={img} alt={project.title} />)
						}
					</div>
				</div>
				<div className="
					images-slider exited
					fixed top-0 left-0
					w-full h-full
					bg-[#00000080]
					z-10
				">
					<i className="
						fa-solid fa-person-through-window exit-btn
						absolute top-[5%] right-[14%] md:right-1/4 z-10
						text-2xl cursor-pointer
					" onClick={onExit}></i>
				  <div className='controls'>
						<button onClick={sliderRef?.slickPrev}>
							<i className="fa-sharp fa-solid fa-chevron-left"></i>
						</button>
						<button onClick={sliderRef?.slickNext}>
							<i className="fa-sharp fa-solid fa-chevron-right"></i>
						</button>
					</div>
					<Slider ref={setSliderRef} {...settings}>
						{
							project.imgs?.map((img, i) => <div key={i}><img src={img} alt="screenshot" className="slide-content" /></div>)
						}
					</Slider>
				</div>
			</Container>
		</div>
	)
}

export default Project;