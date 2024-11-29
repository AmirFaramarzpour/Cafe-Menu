document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');
    const locationButton = document.getElementById('locationButton');
    const menuSection = document.getElementById('menu');
    const contactSection = document.getElementById('contact');
    const locationSection = document.getElementById('location');
    const homeSection = document.getElementById('home');

    menuButton.addEventListener('click', function () {
        homeSection.style.display = 'none';
        menuSection.style.display = 'block';
        contactSection.style.display = 'none';
        locationSection.style.display = 'none';
    });

    contactButton.addEventListener('click', function () {
        homeSection.style.display = 'none';
        menuSection.style.display = 'none';
        contactSection.style.display = 'block';
        locationSection.style.display = 'none';
    });

    locationButton.addEventListener('click', function () {
        homeSection.style.display = 'none';
        menuSection.style.display = 'none';
        contactSection.style.display = 'none';
        locationSection.style.display = 'block';
        initMap(); // Initialize the map when the location section is shown
    });
});

function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    if (category.style.display === 'none' || category.style.display === '') {
        category.style.display = 'grid';
    } else {
        category.style.display = 'none';
    }
}

function initMap() {
    const location = { lat: 35.6895, lng: 139.6917 }; // Example coordinates (Tokyo)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
