
// Controls tabs in projects.html
document.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('.nav-link');
    const projects = document.querySelectorAll('.project-section > div');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all tabs and add to the clicked tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Get the target category from the data attribute
            const target = tab.getAttribute('data-target');

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
        });
    });
});
