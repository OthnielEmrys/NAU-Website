document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    // Toggle sidebar
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('full-width');
        toggleBtn.style.left = sidebar.classList.contains('collapsed') ? '10px' : '310px';
    });

    // Toggle module items
    document.querySelectorAll('.module-title').forEach(item => {
        item.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });

    // Load content for topics
    document.querySelectorAll('.topic-item').forEach(item => {
        item.addEventListener('click', function() {
            const module = this.getAttribute('data-module');
            const topic = this.getAttribute('data-topic');
            loadContent(module, topic);
        });
    });

    // Function to load content
    function loadContent(module, topic) {
        const mainContent = document.getElementById('main-content');
        
        // In a real-world scenario, you would fetch content from server
        // For this example, we'll simulate content loading
        mainContent.innerHTML = `
            <h2>${module.replace('-', ' ')} - ${topic.replace('-', ' ')}</h2>
            <p>This is the content for ${module.replace('-', ' ')} - ${topic.replace('-', ' ')}.</p>
            <p>In a real application, this content would be loaded from a server or a separate HTML file.</p>
        `;
    }
});
