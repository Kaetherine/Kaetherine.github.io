// Function to load navbar
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

// Load navbar when page loads
document.addEventListener('DOMContentLoaded', loadNavbar); 