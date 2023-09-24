function Image({ img, alt, colStartEnd, rowStartEnd, clickEvent }) {
	return (
		<div className={`
			image-container
			${colStartEnd} ${rowStartEnd}
			md:relative cursor-pointer duration-300

		`}>
			<img onClick={clickEvent} src={img} alt={alt} className="duration-300 rounded-xl hover:rounded m-auto max-h-full md:absolute top-1/2 md:-translate-y-1/2" />
		</div>
	)
}

export default Image;