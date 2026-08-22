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
	const projectList = document.getElementById("project-list");

	if (!projectList) {
		return;
	}

	let html = "";

	projects.forEach(function (project) {
		html += `
			<div>
				<h4>${project.title}</h4>
				<img src="${project.image}" width="200">
			</div>
		`;
	});

	projectList.innerHTML = html;
}

/*
	Read the two admin fields, append a new project to the saved array,
	then call loadProjects() so the new item appears immediately.
*/
function addProject() {
	const title = document.getElementById("project-title").value;
	const image = document.getElementById("project-image").value;
	const projects = JSON.parse(localStorage.getItem("projects")) || [];

	projects.push({
		title: title,
		image: image
	});

	localStorage.setItem("projects", JSON.stringify(projects));
	loadProjects();
}

loadProjects();