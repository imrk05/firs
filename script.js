// Sample project data
const projects = [
    {
        title: 'Weather App',
        description: 'It is a weather-related application that provides an  interactive way to know the climatic conditions which is designed using Html, CSS, and JavaScript.',
        image: 'images/weather.jpeg',
        link: 'https://github.com/imrk05/weatherapp.git'
    },
    {
        title: 'To-Do list',
        description: ' To-Do list is a collection of tasks that outlines the work a project manager or team plans to complete during a project. This list helps project managers understand the various tasks of a project so they can assign work to team members and fulfill their own duties.',
        image: 'images/todolist.jpeg',
        link: 'https://github.com/imrk05/ToDolist.git' 
    },
    {
        title: 'Amazon Clone',
        description: 'An Amazon Clone crafted from scratch using HTML and CSS. Emulating the aesthetics of the renowned platform, my clone offers a dynamic shopping experience where users can explore a diverse array of products through an intuitive interface.',
        image: 'images/amazon.png',
        link: 'https://github.com/imrk05/Amazon-clone.git'
    },

    {
        title: 'Portfolio   Website',
        description: 'Created a portfolio website to effectively showcase work, skills, projects, and experiences.Designed and developed a responsive and visually appealing website to showcase projects and skills.',
        image: 'images/portfolio.jpeg',
        link: 'https://github.com/imrk05/Portfolio.git'
    },


    // Add more projects as needed
];

// Display projects
const projectsContainer = document.querySelector('#projects .grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="mb-4">
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-gray-700">${project.description}</p>
        <a href="${project.link}" class="mt-4 inline-block text-blue-600 hover:underline">View on GitHub</a>
    `;
    
    projectsContainer.appendChild(projectCard);
});
// Update contact information
const contactInfo = document.querySelector('#contact-info');

const email = 'kunchalaradhakrishna@gmail.com';
const phone = '+919390464605';
const Linkedin=""

contactInfo.innerHTML = `
    <h3 class="text-xl font-semibold mb-2">Contact Information</h3>
    <p class="text-gray-700">Email: <a href="mailto:${email}" class="text-blue-600">${email}</a></p>
    <p class="text-gray-700">Phone: <a href="tel:${phone}" class="text-blue-600">${phone}</a></p>
`;

// Update footer year
const footerYear = document.querySelector('#footer-year');
const currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;




