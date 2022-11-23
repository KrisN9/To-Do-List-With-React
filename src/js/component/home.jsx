import React, {useState} from "react";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState ([])

	const [inputValue, setInputValue] = useState("")

	const handleSubmit = (event) => {
		if (event.key === "Enter") {
			setTasks{tasks.concat([inputValue])};
			setInputValue("");
		}
	}

	const deleteTask = (id) => {
		let filteredTasks = tasks.filter( task => task.id !== id );
		setTasks(filteredTasks)
	}

	return (
		<div className="text-center text-danger text-opacity-50">
			<div id="todos">
				<h1 className="display-1">todos</h1>
				<div className="list-card">
					<form onSubmit={handleSubmit}>
						<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
						className="input-box" placeholder="No tasks, add a task" onKeyPress={handleSubmit} />
					</form>
					<div className="list-items">
						{tasks.map((task) = (
							<div className="todo" key={task.id}>
								<p>{task.text}
									<button className="button" onClick={() => deleteTask(task.id)}>&#10060;</button>
								</p>
							</div>)
						)}
						<p className="counter">{tasks.length} item left</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
