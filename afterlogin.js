const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.dropdown');

// Toggle dropdown on profile click
profile.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event bubbling to document
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicking outside
document.addEventListener('click', function(event) {
    if (!profile.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});