document.addEventListener("DOMContentLoaded", () => {
    const portfolioContainer = document.querySelector("#portfolio-grid");
  

    fetch("data/projects.json")
      .then(response => response.json())
      .then(data => {
        renderPortfolio(data);
      })
      .catch(error => console.error("Error loading portfolio data:", error));
  
    function renderPortfolio(projects) {
      projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("card");
  
        projectCard.innerHTML = `
          <img src="${project.image}" alt="${project.name}">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="btn">Learn More</a>
        `;
  
        portfolioContainer.appendChild(projectCard);
      });
    }

    
  });
  