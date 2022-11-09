import React, {useState} from "react";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = UseState()

	const handleChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleKeyDown = (event) => {
		console.log(event)
	}

	return (
		<div className="text-center black">
			<input type='text' onChange={handleChange} onKeyDown={handleKeyDown} />
		</div>
	);
};

export default Home;
