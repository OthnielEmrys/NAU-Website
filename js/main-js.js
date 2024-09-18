$(document).ready(function() {
    // Populate sidebar with course structure
    const sidebar = $('#sidebar ul');
    courseStructure.forEach((module, index) => {
        const moduleItem = $(`<li class="module-item mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#module-${index}" aria-expanded="false">
                ${module.title}
            </button>
            <div class="collapse" id="module-${index}">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    ${module.topics.map(topic => `<li><a href="#" class="link-dark rounded" data-file="${topic.file}">${topic.title}</a></li>`).join('')}
                </ul>
            </div>
        </li>`);
        sidebar.append(moduleItem);
    });

    // Toggle sidebar
    $('#toggle-btn').click(function() {
        $('#sidebar').toggleClass('collapsed');
        $('.main-content').toggleClass('full-width');
        $(this).css('left', $('#sidebar').hasClass('collapsed') ? '10px' : '310px');
    });

    // Load content
    function loadContent(file) {
        $.get(file, function(data) {
            $('#main-content').html(data);
        }).fail(function() {
            $('#main-content').html('<h2>Error</h2><p>Unable to load content. Please try again later.</p>');
        });
    }

    // Handle topic clicks
    $(document).on('click', '.btn-toggle-nav a', function(e) {
        e.preventDefault();
        const file = $(this).data('file');
        loadContent(file);
    });

    // Handle nav menu clicks
    $('.navbar-nav a').click(function(e) {
        e.preventDefault();
        const page = $(this).text().toLowerCase();
        loadContent(`${page}.html`);
    });
});
