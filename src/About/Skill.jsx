function Skill({ skill }) {
	return (
		<span className="bg-white text-gray-500 p-2 text-xs rounded whitespace-nowrap font-bold cursor-pointer border
		  hover:bg-transparent hover:text-white hover:rounded-none duration-300
		">
			{ skill }
		</span>
	)
}

export default Skill;