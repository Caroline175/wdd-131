document.addEventListener('DOMContentLoaded', function () {
    const temperature = 5; 
    const windSpeed = 10; 
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = new Date(document.lastModified).toLocaleDateString();
    document.getElementById('last-modified').textContent = lastModified;

    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    function displayWindChill() {
        const windChillElement = document.getElementById('wind-chill');
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = windChill.toFixed(2) + '°C';
        } else {
            windChillElement.textContent = 'N/A';
        }
    }

    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('wind-speed').textContent = `${windSpeed} km/h`;

    displayWindChill();
});


