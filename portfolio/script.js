document.addEventListener("DOMContentLoaded", function () {
  // select portfolio grid
  const portfolioGrid = document.getElementById("portfolio-grid");

  // loop through each project in the JSON data
  portfolioData.projects.forEach((project) => {
    
    // create project card
    const card = document.createElement("div");
    card.classList.add("card");

    // add image
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    card.appendChild(img);

    // add card info
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const title = document.createElement("h3");
    title.textContent = project.title;
    cardInfo.appendChild(title);

    const subtitle = document.createElement("p");
    subtitle.textContent = project.subtitle;
    cardInfo.appendChild(subtitle);

    // add link to project
    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "View Project";
    link.target = "_blank"; // Open link in new tab
    cardInfo.appendChild(link);

    // add card info to cards
    card.appendChild(cardInfo);

    // Add card to portfolio grid
    portfolioGrid.appendChild(card);
  });
});
