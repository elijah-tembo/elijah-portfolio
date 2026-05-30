/* Load Projects */

function loadProjects(){

let projects = JSON.parse(localStorage.getItem("projects")) || [];

let html = "";

projects.forEach(project => {

html += `
<div>
<h4>${project.title}</h4>
<img src="${project.image}" width="200">
</div>
`;

});

document.getElementById("project-list").innerHTML = html;

}

/* Add Project */

function addProject(){

let title = document.getElementById("project-title").value;

let image = document.getElementById("project-image").value;

let projects = JSON.parse(localStorage.getItem("projects")) || [];

projects.push({

title:title,

image:image

});

localStorage.setItem("projects", JSON.stringify(projects));

loadProjects();

}

loadProjects();



/* Load Projects from Admin */

function loadProjects(){

let projects = JSON.parse(localStorage.getItem("projects")) || [];

let html = "";

projects.forEach(project => {

html += `
<div class="portfolio-item">
<img src="${project.image}">
<h3>${project.title}</h3>
</div>
`;

});

document.querySelector(".portfolio-container").innerHTML += html;

}

loadProjects();