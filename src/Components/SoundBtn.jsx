import { useState, useEffect } from "react";
import { bgAudio, volOnOff } from "../globalScript.js";

function SoundBtn() {
	
	useEffect(() => {
		const volOn = document.querySelector(".vol-on");
		const volOff = document.querySelector(".vol-off");

		if (bgAudio.muted) {
			volOn.classList.add("!hidden");
			volOff.classList.remove("!hidden");
		} else {
			volOff.classList.add("!hidden");
			volOn.classList.remove("!hidden");
		}
	}, [])
	
	return (
		<div className="absolute top-[calc(100%-20px)] left-[-25px] cursor-pointer" onClick={volOnOff}>
			<i className="fa-solid fa-volume-high vol-on absolute top-[3px] left-[6px] text-xs rotate-90 !hidden"></i>
			<i className="fa-solid fa-volume-off vol-off absolute top-[0px] left-[10px] text-xs rotate-90"></i>
			<span className="absolute top-[-33px] left-[-6px] text-xs rotate-90">Sounds</span>
		</div>
	)
}

export default SoundBtn;