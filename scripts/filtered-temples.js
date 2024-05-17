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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Twin Falls Idaho",
      location: "Twin Falls, Idaho",
      dedicated: "2008, August, 24",
      area: 156558,
      imageUrl: 
      "https://www.churchofjesuschrist.org/imgs/455e06d2e9cd169f20910e747d8417ab7e2d3d47/full/320%2C/0/default",
    },
    {
      templeName: "Sydney Australia",
      location: "Carlingford, Australia",
      dedicated: "1984, September, 20",
      area: 156558,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/8dd109cda45dda79ebe30b0461d5d0afba41f653/full/320%2C/0/default",
    },
    {
    templeName: "Snowflake Arizona",
      location: "Snowflake, Arizona",
      dedicated: "2002, March, 3",
      area: 156558,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/63ee0de38ed3430d92daeecaa5e200ed72dc26d9/full/320%2C/0/default",
    },
];

function displayTemples(filteredTemples) {
    const container = document.getElementById('templeContainer');
    container.innerHTML = ''; // Clear previous content
    filteredTemples.forEach(temple => {
      const templeDiv = document.createElement('div');
      templeDiv.className = 'temple';
      templeDiv.textContent = `${temple.name} - Built: ${temple.yearBuilt} - Size: ${temple.size} sq ft`;
      container.appendChild(templeDiv);
    });
  }
  
  function filterTemples(criteria) {
    let filteredTemples;
    switch (criteria) {
      case 'old':
        filteredTemples = temples.filter(temple => temple.yearBuilt < 1900);
        break;
      case 'new':
        filteredTemples = temples.filter(temple => temple.yearBuilt > 2000);
        break;
      case 'large':
        filteredTemples = temples.filter(temple => temple.size > 90000);
        break;
      case 'small':
        filteredTemples = temples.filter(temple => temple.size < 10000);
        break;
      default:
        filteredTemples = temples;
    }
    displayTemples(filteredTemples);
  }
  
  // Initially display all temples
  filterTemples('home');
  
 