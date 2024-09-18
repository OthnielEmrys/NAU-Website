// script.js - Main LMS functionality

document.addEventListener('DOMContentLoaded', function () {
    // Get references to important DOM elements
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    // Sidebar toggle functionality
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('full-width');
        toggleBtn.style.left = sidebar.classList.contains('collapsed') ? '10px' : '310px';
    });

    // Function to load the course content into the sidebar
    function loadCourseContent() {
        sidebar.innerHTML = ''; // Clear existing sidebar content

        // Create and append the course title
        const courseTitle = document.createElement('h2');
        courseTitle.textContent = courseData.title;
        sidebar.appendChild(courseTitle);

        // Loop through each module in the course
        courseData.modules.forEach((module, moduleIndex) => {
            const moduleElement = document.createElement('div');
            moduleElement.className = 'module';
            
            // Create and append the module title
            const moduleTitle = document.createElement('h3');
            moduleTitle.className = 'module-title';
            moduleTitle.textContent = module.title;
            moduleElement.appendChild(moduleTitle);

            // Create a list for the module's topics
            const topicsList = document.createElement('ul');
            topicsList.className = 'topics-list';

            // Loop through each topic in the module
            module.topics.forEach((topic, topicIndex) => {
                const topicItem = document.createElement('li');
                topicItem.className = 'topic-item';
                topicItem.textContent = topic.title;
                topicItem.setAttribute('data-module', moduleIndex);
                topicItem.setAttribute('data-topic', topicIndex);
                topicsList.appendChild(topicItem);

                // Add click event listener to load topic content
                topicItem.addEventListener('click', function () {
                    loadContent(moduleIndex, topicIndex);
                });
            });

            moduleElement.appendChild(topicsList);
            sidebar.appendChild(moduleElement);

            // Add click event listener to toggle module topics visibility
            moduleTitle.addEventListener('click', function () {
                topicsList.classList.toggle('hidden');
                moduleElement.classList.toggle('active');
            });
        });

        // Load the first topic of the first module by default
        loadContent(0, 0);
    }

    // Function to load specific topic content
    function loadContent(moduleIndex, topicIndex) {
        const module = courseData.modules[moduleIndex];
        const topic = module.topics[topicIndex];
        const filePath = `content/${topic.file}`;

        // Store selected module and topic in localStorage
        localStorage.setItem('lastModule', moduleIndex);
        localStorage.setItem('lastTopic', topicIndex);

        // Fetch and load external HTML content
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load content');
                }
                return response.text();
            })
            .then(data => {
                mainContent.innerHTML = data; // Inject content into main section
            })
            .catch(error => {
                mainContent.innerHTML = `
                    <h2>Error Loading Content</h2>
                    <p>We encountered an issue loading the content. Please try again later.</p>
                `;
                console.error('Error:', error);
            });
    }

    // Load the last selected module and topic on page load (if available)
    const lastModule = localStorage.getItem('lastModule');
    const lastTopic = localStorage.getItem('lastTopic');
    if (lastModule !== null && lastTopic !== null) {
        loadContent(parseInt(lastModule), parseInt(lastTopic));
    }

    // Initialize the course content
    loadCourseContent();
});
