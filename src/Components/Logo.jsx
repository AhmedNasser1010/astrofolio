function Logo() {
	return (
		<div className="relative select-none">
			<span className="absolute font-horizon md:text-xl left-[15px] top-[15px] animate-lazyLogoText">ASTRO</span>
			<span className="absolute font-horizon md:text-xl left-[15px] top-[35px] animate-lazyLogoText">FOLIO</span>
			<span className="absolute font-moonTime left-[95px] md:left-[124px] top-[20px] -rotate-12 overflow-hidden whitespace-nowrap animate-lazyWriteText animation-delay-1000 w-0 anim-forward">Ahmed Nasser</span>
			<span className="font-horizon text-2xl absolute left-[95px] md:left-[123px] top-[26px] md:top-[33px] animate-lazyWriteText overflow-hidden whitespace-nowrap animation-delay-3000 anim-duration-300ms w-0 anim-forward">-</span>
		</div>
	)
}

export default Logo;