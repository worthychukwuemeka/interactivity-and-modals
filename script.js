document.addEventListener('DOMContentLoaded', function () {
    const teamBoxes = document.querySelectorAll('.box');
    const modal = document.getElementById('memberModal');
    const modalContent = document.getElementById('modalContent');

    teamBoxes.forEach(box => {
        // Dynamic hover effects
        box.addEventListener('mouseover', function () {
            box.style.background = '#381666';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        box.addEventListener('mouseout', function () {
            box.style.background = '#1b1229';
            box.style.boxShadow = 'none';
        });

        // Open modal with dummy bio on click
        box.addEventListener('click', function () {
            const bioContent = box.getAttribute('data-bio');
            modalContent.textContent = bioContent;
            modal.style.display = 'block';
        });
    });
});

function closeModal() {
    const modal = document.getElementById('memberModal');
    modal.style.display = 'none';
}
