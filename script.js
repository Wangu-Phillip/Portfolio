document.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('.nav-link');
    const projects = document.querySelectorAll('.project-section > div');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            const target = tab.getAttribute('data-target');

            // Only prevent default for project tabs
            if (target) {
                event.preventDefault();

                // Remove active class from all tabs and add to the clicked tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Show/hide projects based on the target category
                projects.forEach(project => {
                    if (target === 'all') {
                        project.style.display = 'block';
                    } else {
                        if (project.getAttribute('data-category') === target) {
                            project.style.display = 'block';
                        } else {
                            project.style.display = 'none';
                        }
                    }
                });
            }
        });
    });
});
