document.addEventListener("DOMContentLoaded", function() {
    // Update year and last modified date
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');
    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;

    // Hamburger menu functionality
    const nav = document.querySelector('nav ul');
    const hamburger = document.createElement('div');
    hamburger.innerHTML = '&#9776;'; // Unicode for hamburger icon
    hamburger.className = 'hamburger';

    document.querySelector('header').appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
        hamburger.innerHTML = nav.classList.contains('open') ? '&times;' : '&#9776;'; // Toggle between hamburger and close (X) icon
    });
});
