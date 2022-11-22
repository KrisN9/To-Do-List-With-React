import React, {useState} from "react";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState ([])

	const [inputValue, setInputValue] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputValue != ""){
			let addTask = {
				id: Math.floor(Math.random() * 1000),
				text: inputValue,
				completed: false
			}
			setTasks([...tasks, addTask])
			setInputValue("")
		}
	}

	const deleteTask = (id) => {
		let filteredTasks = [...tasks].filter(task => task.id !== id);
		setTasks(filteredTasks)
	}

	return (
		<div className="todos text-center text-danger text-opacity-50">
			<div id="todos">
				<h1 className="display-1">todos</h1>
				<div className="list-card">
					<form onSubmit={handleSubmit}>
						<input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} 
						className="input-box" placeholder="No tasks, add a task" />
					</form>
					<div className="list-items">
						{tasks.map((task) = (
							<div className="todo" key={task.id}>
								<p>{task.text}
									<button className="button" onClick={() => deleteTask(task.id)}>&#10060;</button>
								</p>
							</div>)
						)}
						<p className="counter">{tasks.length > 1 ? "One task left" : "Tasks left: ${tasks.length}"}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
