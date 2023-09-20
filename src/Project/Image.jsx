function Image({ img, alt, colStartEnd, rowStartEnd }) {
	return (
		<div className={`
			image-container
			${colStartEnd} ${rowStartEnd}
			bg-[url('${img}')] bg-no-repeat bg-contain
			relative cursor-pointer duration-300
			hover:scale-150

		`}>
			<img src={img} alt={alt} className="rounded-[35px] m-auto max-h-full absolute top-1/2 -translate-y-1/2" />
		</div>
	)
}

export default Image;


// style={{backgroundImage: `url('${img}')`}}