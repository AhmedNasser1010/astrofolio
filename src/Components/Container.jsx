function Container({ children }) {
	return (
		<div className="m-8 md:m-14 w-[calc(100%-4rem)] md:m-14 md:w-[calc(100%-7rem)] h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] border border-white text-white relative">{ children }</div>
	)
}

export default Container;