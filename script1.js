// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Toggle the dark-mode class on the body
    body.classList.toggle('dark-mode');

    // Update the button icon based on the mode
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️'; // Sun icon for light mode toggle
    } else {
        darkModeToggle.textContent = '🌙'; // Moon icon for dark mode toggle
    }

    // Save the preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Function to load the dark mode preference from localStorage
function loadDarkModePreference() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check localStorage for the dark mode preference
    const darkModePreference = localStorage.getItem('darkMode');

    if (darkModePreference === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Set icon to sun if dark mode is enabled
    } else {
        darkModeToggle.textContent = '🌙'; // Default to moon icon for dark mode
    }
}

// Load dark mode preference when the page loads
window.addEventListener('load', loadDarkModePreference);

// Attach the toggleDarkMode function to the button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
document.querySelectorAll('.customize-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        const formData = new FormData(this);
        const selections = [];
        
        formData.forEach((value, key) => {
            selections.push(`${key}: ${value}`);
        });

        alert(`Your customizations: \n${selections.join('\n')}`);
        // Here, you can add the customization data to the user's cart
    });
});
