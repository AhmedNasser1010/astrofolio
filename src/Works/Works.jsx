import Container from "../Components/Container.jsx";
import WorkTitle from "./WorkTitle.jsx";
import Preview from './Preview.jsx';
import { works, worksList} from "../works.js";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';

function Works() {
	return (
		<div className="work overflow-hidden bg-midnightBlack h-screen">
			<Helmet>
				<title>ASTRO FOLIO | Works</title>
				<meta name='description' content={`Ahmed's selected works ${worksList.join(",")}`} />
			</Helmet>
			<Container>
				<h1 className="font-horizon text-2xl md:text-4xl pl-6 pt-6"><span className="block md:inline">SELECTED</span> WORKS</h1>
				<div className="
					works-container overflow-scroll-y-shadow
					h-[calc(100%-2rem)] md:h-[100%]
				">
					<div className="works-scroll-container scroll-none pl-6 pt-11 flex flex-col overflow-y-scroll h-[calc(100vh-10rem)] md:h-[calc(100%-64px)]">
						{
							works.map((work, i) => (<WorkTitle key={i} work={work} workTitle={work.title} category={work.categories} newWork={work.newWork} perviewImg={work.imgs[0]} />))
						}
					</div>
				</div>
				<Preview />
			</Container>
		</div>
	)
}

export default Works;