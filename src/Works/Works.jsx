import Container from "../Components/Container.jsx";
import WorkTitle from "./WorkTitle.jsx";
import Preview from './Preview.jsx';

function Works() {
	return (
		<div className="works overflow-hidden bg-midnightBlack">
			<Container>
				<h1 className="font-horizon text-3xl md:text-4xl pl-6 pt-6">SELECTED WORKS</h1>
				<div className="works-container h-[calc(100%-2rem)] md:h-[100%]">
					<div className="works-scroll-container pl-6 pt-11 flex flex-col overflow-y-scroll h-[calc(100%-64px)]">
						<WorkTitle workTitle="Todo list" year="2023" category="Productivity" newWork={true} perviewImg="https://placehold.co/400x400" />
						<WorkTitle workTitle="davon" year="2023" category="Landing Page" perviewImg="https://placehold.co/400x401" />
						<WorkTitle workTitle="wtls toolkit" year="2022" category="Tool" perviewImg="https://placehold.co/400x402" />
						<WorkTitle workTitle="dashboard" year="2022" category="Admin Panel" perviewImg="https://placehold.co/400x403" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" perviewImg="https://placehold.co/400x404" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leon" year="2022" category="Landing Page" />
						<WorkTitle workTitle="leonaaaaa" year="2022" category="Landing Page" />
					</div>
				</div>
				<Preview />
			</Container>
		</div>
	)
}

export default Works;