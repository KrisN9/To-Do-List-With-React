import React, {useEffect, useState} from "react";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState ([])

	const [inputValue, setInputValue] = useState("")
	useEffect(() => {getTask()}, [tasks])

	const handleSubmit = (event) => {
		if (event.key === "Enter") {
			putTask();
		}
		setInputValue("");
	}

	const deleteTask = (id) => {
		let filteredTasks = tasks.filter( (task, index) => index !== id );
		delTask(filteredTasks);
	}
	const getTask = () => {
	fetch('https://assets.breatheco.de/apis/fake/todos/user/KrisN9', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
       return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        setTasks(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        //manejo de errores
        console.log(error);
    });
	}

	const putTask = () => {
	fetch('https://assets.breatheco.de/apis/fake/todos/user/KrisN9', {
      method: "PUT",
      body: JSON.stringify([...tasks,{label: inputValue, done: false}]),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
		getTask();
    })
    .catch(error => {
        //manejo de errores
        console.log(error);
    });
	}

	const delTask = (filteredTasks) => {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/KrisN9', {
		  method: "PUT",
		  body: JSON.stringify(filteredTasks),
		  headers: {
			"Content-Type": "application/json"
		  }
		})
		.then(resp => {
			console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
			console.log(resp.status); // el código de estado = 200 o código = 400 etc.
			console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
			return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
			console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			getTask;
		})
		.catch(error => {
			//manejo de errores
			console.log(error);
		});
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
								<p>{task.label}
									<button className="btn btn-outline-danger btn-sm" onClick={() => deleteTask(index)}>&#10060;</button>
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
