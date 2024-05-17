document.addEventListener("DOMContentLoaded", function() {
    
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');
    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`; 
   

    document.querySelector('header').appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
        hamburger.innerHTML = nav.classList.contains('open') ? '&times;' : '&#9776;'; 
    });
});
