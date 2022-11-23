import React, {useState} from "react";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState ([])

	const [inputValue, setInputValue] = useState("")

	const handleSubmit = (event) => {
		if (event.key === "Enter") {
			setTasks([...tasks, event.target.value])
		}
	}

	const deleteTask = (id) => {
		let filteredTasks = tasks.filter( (task, index) => index !== id );
		setTasks(filteredTasks)
	}

	return (
		<div className="text-center text-danger text-opacity-50">
			<div id="todos">
				<h1 className="display-1">todos</h1>
				<div className="list-card">
					<input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="No tasks, add a task"
					onKeyDown={handleSubmit}></input>
					<div className="list-items">
						{tasks.map((task, index) => {
							return (
							<div className="todo" key={index}>
								<p>{task}
									<button className="button" onClick={() => deleteTask(index)}>&#10060;</button>
								</p>
							</div>)
						}
						)}
						<p className="counter">{tasks.length} item left</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
