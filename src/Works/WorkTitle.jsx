import { Link } from 'react-router-dom';

function WorkTitle({ work }) {

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
		
		img.setAttribute("src", work.imgs[0]);
	}

	function perviewAnimOut() {
		const img = document.querySelector(".preview-img");
		img.classList.remove("hovered");
		setTimeout(() => {
			img.classList.remove("hovered");
		}, 300);
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

	return (
		<Link onMouseOver={perviewAnimOver} onMouseOut={perviewAnimOut} title="Click for more information 😸✨" to={`/work/${titleFormate(work.title)}`} className="w-fit md:mb-4 font-lovelo text-2xl md:text-4xl hover:-skew-x-12 hover:translate-x-3 duration-300">
			{ work.title }
			<span className="whitespace-nowrap ml-1 cursor-pointer font-openSans text-[10px] text-gray-900 bg-lavenderGray rounded-full px-2 py-0.5">{ handleInfoText(work.categories) }</span>
			{ work.newWork && <span className="cursor-pointer font-openSans text-[10px] text-gray-900 ml-0.5 bg-lavenderGray rounded-full px-2 py-0.5">New!</span> }
			{ work.onGoing && <span className="cursor-pointer font-openSans text-[10px] text-gray-900 ml-0.5 bg-lavenderGray rounded-full px-2 py-0.5 bg-[#607d8b]">On Going!</span> }
		</Link>
	)
}

export default WorkTitle;