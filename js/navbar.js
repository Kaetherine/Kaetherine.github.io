// Function to load navbar
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            // Set active page after navbar is loaded
            setActivePage();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

// Function to set active page
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-container a:not(.navbar-brand)');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().split('#')[0];
        
        // Check if current page matches link
        if (linkPage === currentPage || 
            (currentPage === 'index.html' && linkPage === 'index.html') ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Load navbar when page loads
document.addEventListener('DOMContentLoaded', loadNavbar); 