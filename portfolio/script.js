<!-- Assuming you have your JSON data in a variable called `portfolioData` -->
let portfolioData = {
  "portfolioItems": [
    {
      "title": "Project Title 1",
      "description": "A brief overview of the project and its goals.",
      "image": "images/project1.jpg",
      "date": "2024-09-15",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "link": "https://example.com/project1"
    },
    // Other items...
  ]
};

const portfolioContainer = document.getElementById('portfolio');

<!-- loop through each portfolio item and create HTML -->
portfolioData.portfolioItems.forEach(item => {
  const portfolioItem = document.createElement('div');
  portfolioItem.classList.add('portfolio-item');
  
  portfolioItem.innerHTML = `
    <h2>${item.title}</h2>
    <img src="${item.image}" alt="${item.title}">
    <p>${item.description}</p>
    <p><strong>Date:</strong> ${item.date}</p>
    <p><strong>Technologies:</strong> ${item.technologies.join(', ')}</p>
    <a href="${item.link}" target="_blank">View Project</a>
  `;
  
  portfolioContainer.appendChild(portfolioItem);
});
