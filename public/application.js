function getTask() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Add the json stuff
			let container = document.getElementById("container");
			let responses = JSON.parse(this.responseText);

			for (var i = 0; i < responses.length; i++)
				container.insertAdjacentHTML("afterbegin",
											"[" + responses[i].id + "]"
											+ responses[i].task
											+ "<br />");
		}
	};
	xhttp.open("GET","http://localhost:3001/todos", true);
	xhttp.send();
}

window.sendForm = function (event) {
	event.preventDefault();
	var xhttp  = new this.XMLHttpRequest();
	xhttp.open("POST", "http://localhost:3001/todos", true);
	xhttp.onload = function (event) {
		let container = document.getElementById("container");
		let response = JSON.parse(event.target.response);

		container.insertAdjacentHTML(
			"afterbegin",
			"[" + response.id + "]: " + response.task + "<br />"
			);
		};

	var formData = new this.FormData(document.getElementById("todo_form"));
	xhttp.send(formData);

};


getTask();