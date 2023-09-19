import SoundBtn from "../Components/SoundBtn.jsx";
import SocialBtns from "../Components/SocialBtns.jsx";

function Container({ children, soundBtn = true, socialBtn = true }) {
	return (
		<div className="
			m-8 md:m-14
			w-[calc(100%-4rem)] h-[calc(100vh-4rem)]
			md:m-14 md:w-[calc(100%-7rem)] md:h-[calc(100vh-7rem)]
			border border-white
			text-white
			relative
		">
			{ children }
			{soundBtn && <SoundBtn />}
			{socialBtn && <SocialBtns />}
		</div>
	)
}

export default Container;