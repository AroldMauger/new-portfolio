import { projects } from "./projects.js";

export function displayAllProjects() {
  const cardContainer = document.querySelector(".cards-container");

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const clickableCard = createProjectCard(project);
    cardContainer.appendChild(clickableCard);
  };

  const totalProjects = document.querySelector(".total-projects");
  totalProjects.textContent = projects.length + " projets"
}

export function createProjectCard(project) {
    const clickableCard = document.createElement("a");
    clickableCard.classList.add("clickable-card");
  
    const tagProject = document.createElement("span");
    tagProject.classList.add("tag");
    tagProject.textContent = project.tag;

    const projectImage = document.createElement("img");
    projectImage.setAttribute("src", `assets/${project.image}`);
    projectImage.classList.add("project-image");
  
    const textInProjectContainer = document.createElement("div");
    textInProjectContainer.classList.add("text-in-project-container");
  
    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectName.classList.add("project-name");
  
  
    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectDescription.classList.add("project-description");
  
    const sectionTechnologies = document.createElement("span");
    sectionTechnologies.textContent = "TECHNOLOGIES";
    sectionTechnologies.classList.add("section-in-project");
  
    const technologiesContainer = document.createElement("div");
    technologiesContainer.classList.add("technologies-container");
  
    const technologiesLists = project.technologies;
  
    for (let i = 0; i < technologiesLists.length; i++) {
      const technologyFromList = technologiesLists[i];
      
      const technology = document.createElement("span");
      technology.textContent = technologyFromList;
      technology.classList.add("technology-name");

      technologiesContainer.appendChild(technology);

    };

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const projectUrl = project.url;

    if(projectUrl) {
      clickableCard.addEventListener("click", goToWebSite);
      clickableCard.classList.add("go-to-website");

    } else {
      tagProject.textContent = "Non hébergé";
      tagProject.style.backgroundColor = "red";
    }
   
    function goToWebSite() {
        window.location.href = project.url;
      }



    clickableCard.appendChild(projectImage);
    clickableCard.appendChild(tagProject);

    clickableCard.appendChild(textInProjectContainer);
    textInProjectContainer.appendChild(projectName);
    textInProjectContainer.appendChild(projectDescription);
    clickableCard.appendChild(sectionTechnologies);
    clickableCard.appendChild(technologiesContainer);
    clickableCard.appendChild(buttonContainer);

    return clickableCard;
  }

  displayAllProjects()

  