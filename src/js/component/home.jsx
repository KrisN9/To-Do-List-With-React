import React, {useState} from "react";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("")

	const handleChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleKeyDown = (event) => {
		if (event.code === "Enter") {
			console.log(inputValue)
		}
	}

	return (
		<div className="text-center text-danger text-opacity-50">
			<div id="demo" className="collapse show">
				<h1 className="display-1">todos</h1>
				<input type='text' value={inputValue} placeholder="No tasks, add a task" onChange={handleChange} onKeyDown={handleKeyDown} />
			</div>
		</div>
	);
};

export default Home;
