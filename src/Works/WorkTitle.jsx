import { Link } from 'react-router-dom';

function WorkTitle({ workTitle, year, category, newWork, perviewImg = "https://placehold.co/400x400" }) {

	// cebab-case formater
	function titleFormate(text) {
		let convertedArr = [];

		text.split(" ").map((txt, index) => {
			index === 0 ? convertedArr.push(txt.toLowerCase()) : convertedArr.push("-" + txt.toLowerCase());
		});

		return convertedArr.join("");
	}

	function perviewAnimOver() {
		const img = document.querySelector(".preview-img");

		setTimeout(() => {
			img.classList.add("hovered");
		}, 300);
		
		img.setAttribute("src", perviewImg);
	}

	function perviewAnimOut() {
		const img = document.querySelector(".preview-img");
		img.classList.remove("hovered");
		setTimeout(() => {
			img.classList.remove("hovered");
		}, 300);
	}

	return (
		<Link onMouseOver={perviewAnimOver} onMouseOut={perviewAnimOut} title="Click for more information 😸✨" to={`/work/${titleFormate(workTitle)}`} className="w-fit md:mb-4 font-lovelo text-2xl md:text-4xl hover:-skew-x-12 hover:translate-x-3 duration-300">
			{ workTitle }
			<span className="whitespace-nowrap ml-1 cursor-pointer font-openSans text-[10px] text-gray-900 bg-lavenderGray rounded-full px-2 py-0.5">{`${year} / ${category}`}</span>
			{ newWork && <span className="cursor-pointer font-openSans text-[10px] text-gray-900 ml-0.5 bg-lavenderGray rounded-full px-2 py-0.5">New!</span> }
		</Link>
	)
}

export default WorkTitle;