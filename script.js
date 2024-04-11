function navigateTo(pageId) {
    const pages = ['home', 'courses', 'contact'];
    pages.forEach(page => {
        if (page === pageId) {
            document.getElementById(page).style.display = 'block';
        } else {
            document.getElementById(page).style.display = 'none';
        }
    });
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
function whatsapp() {
    window.location.href = "https://api.whatsapp.com/send?phone=917999931761&text=Hi%2C%20I%20would%20like%20to%20purchase%20your%20course.";
}