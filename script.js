// Function to initialize the Swiper slider
$(document).ready(function() {
    new Swiper('#gallery_slider', {
        slidesPerView: 1,
        pagination: { el: '.gallery_slider_pagination', clickable: true },
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 14000,
            disableOnInteraction: false
        },
    });
});

// Function to show menu items
function showMenu() {
    window.location.href = 'menu.html';
}

// Function to show location
function showLocation() {
    window.location.href = 'location.html';
}

// Function to show socials
function showSocials() {
    window.location.href = 'socials.html';
}

// Function to toggle category visibility
function toggleCategory(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Function to initialize the map
function initMap() {
    var map = L.map('mapid').setView([36.55815188061616, 53.071884987875826], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([36.55815188061616, 53.071884987875826]).addTo(map)
        .bindPopup('Our Location')
        .openPopup();
}

// Function to handle contact view
function viewContact() {
    document.getElementById('t9_contact_window').style.display = 'block';
}

// Function to hide contact view
function hideContact() {
    document.getElementById('t9_contact_window').style.display = 'none';
}

// Function to handle star view
function viewStar() {
    document.getElementById('t9_star_window').style.display = 'block';
}

// Function to hide star view
function hideStar() {
    document.getElementById('t9_star_window').style.display = 'none';
}

// Function to update the graphic (called on window resize)
function update_graphic() {
    var graphic = document.getElementById('graphic');
    // Add your logic to update the graphic position or size based on window size
}

// Function to show notes
function showNotes() {
    document.getElementById('note_window').style.display = 'block';
}

// Function to hide notes
function hideNotes() {
    document.getElementById('note_window').style.display = 'none';
}

// Function to show message (called on certain actions)
function showMessage(status, message) {
    var messageBar = document.getElementById('message_bar');
    messageBar.className = status ? 'success' : 'error';
    messageBar.querySelector('span').innerText = message;
    messageBar.style.display = 'block';
}

// Function to hide message
function hideMessage() {
    document.getElementById('message_bar').style.display = 'none';
}

// Example function to add to a category
function addCategory(name) {
    var categoryList = document.getElementById('categoryList');
    var newCategory = document.createElement('div');
    newCategory.className = 'category-item';
    newCategory.innerText = name;
    categoryList.appendChild(newCategory);
}
