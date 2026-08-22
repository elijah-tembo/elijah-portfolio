/*
==================================================
ADMIN JAVASCRIPT CODE MAP
==================================================

1. loadProjects() -> Reads saved projects and displays them
2. addProject()  -> Reads the form, saves a project and refreshes the list

The admin page uses localStorage as its small browser-based data store.
This file is separate from script.js because the public portfolio does
not use the admin form.
==================================================
*/

/*
	Read the saved project array from localStorage and render it inside
	the project-list element in admin.html. JSON.parse() converts the
	stored text back into JavaScript data; an empty array is the fallback.
*/
function loadProjects() {
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	// JSON.parse() converts the stored JSON text back into an array; || []
	// gives the page an empty collection when nothing has been saved yet.
	const projectList = document.getElementById("project-list");
	// Finds the HTML output container by its unique ID.

	if (!projectList) {
		return;
	}

	let html = "";
	// Builds one string of markup before inserting it into the page once.

	projects.forEach(function (project) {
		// forEach() runs this callback once for every saved project object.
		html += `
			<div>
				<h4>${project.title}</h4>
				<img src="${project.image}" width="200">
			</div>
		`;
	});

	projectList.innerHTML = html;
	// innerHTML replaces the container's contents with the generated project list.
}

/*
	Read the two admin fields, append a new project to the saved array,
	then call loadProjects() so the new item appears immediately.
*/
function addProject() {
	const title = document.getElementById("project-title").value;
	// Reads the current text from the title input selected by its ID.
	const image = document.getElementById("project-image").value;
	// Reads the image path or URL from the second input.
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	// Loads the existing array so the new project can be appended rather than replacing it.

	projects.push({
		// push() adds a new object containing the two values to the array.
		title: title,
		image: image
	});

	localStorage.setItem("projects", JSON.stringify(projects));
	// JSON.stringify() turns the array into storable text, and setItem() saves it.
	loadProjects();
	// Refreshes the visible list so the newly saved project appears immediately.
}

loadProjects();