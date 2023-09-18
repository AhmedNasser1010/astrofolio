function SoundBtn() {

	function handleSoundClick(e) {
		const childes = e.target.parentNode.childNodes;
		childes[0].classList.toggle("!hidden");
		childes[1].classList.toggle("!hidden");
	}

	return (
		<div className="relative top-[calc(100%-20px)] left-[-25px] cursor-pointer" onClick={handleSoundClick}>
			<i className="fa-solid fa-volume-high absolute top-[-2px] left-[7px] text-xs rotate-90"></i>
			<i className="fa-solid fa-volume-off absolute top-[-5px] left-[11px] text-xs rotate-90 !hidden"></i>
			<span className="absolute top-[-33px] left-[-3px] text-xs rotate-90">Sounds</span>
		</div>
	)
}

export default SoundBtn;