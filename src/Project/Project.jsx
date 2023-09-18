import { useParams } from "react-router-dom";

function Project() {
	const projectName = useParams().projectName;

	return (
		<div className="project">
			Project {projectName}
		</div>
	)
}

export default Project;