import { projects } from "./projects.js";
import { createProjectCard } from "./main.js";

const filterDropdown = document.getElementById("filter-dropdown");

filterDropdown.addEventListener("change", filterProjects);

function filterProjects() {
    const selectedTechnology = filterDropdown.value;
    let filteredProjects;

    if (selectedTechnology === "") {
        filteredProjects = projects;
    } else {
        filteredProjects = projects.filter(project => project.technologies.includes(selectedTechnology));
    }

    displayFilteredProjects(filteredProjects);
}


function displayFilteredProjects(filteredProjects) {
    const cardContainer = document.querySelector(".cards-container");
    cardContainer.innerHTML = ""; 

    for (let i = 0; i < filteredProjects.length; i++) {
        const project = filteredProjects[i];
        const clickableCard = createProjectCard(project);
        cardContainer.appendChild(clickableCard);
    }

    const totalProjects = document.querySelector(".total-projects");
    totalProjects.textContent = filteredProjects.length + " projets";
}
