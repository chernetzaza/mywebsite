
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Youtuber", "Web developer","Tiktoker"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll('.home-sci a');

    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of clicking the link
            const socialMedia = this.querySelector('i').classList[1]; // Get the class of the icon
            redirectToSocialMedia(socialMedia); // Redirect to the corresponding social media URL
        });
    });

    function redirectToSocialMedia(socialMedia) {
        switch (socialMedia) {
            case 'bxl-facebook':
                window.location.href = 'https://www.facebook.com/Chernetzaza'; 
                break;
            case 'bxl-instagram':
                window.location.href = 'https://www.instagram.com/chernetzaza'; 
                break;
            case 'bxl-whatsapp':
                window.location.href = 'https://web.whatsapp.com/+25134064088'; 
                break;
            case 'bxl-tiktok':
                window.location.href = 'https://www.tiktok.com/@chernet.zaza'; 
                break;
            // Add cases for other social media icons as needed
            default:
                break;
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const contactList = document.querySelector('.contact-list');
    const listItems = contactList.querySelectorAll('li');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();

            if (text === 'chernetzaza@gmail.com') {
                // Handle email action
                window.location.href = 'mailto:chernetzaza@gmail.com';
            } else if (text === '+251934064088') {
                // Handle phone call action
                window.location.href = 'tel:+251934064088';
            } else if (text === 'google map') {
                // Handle Google Map action
                window.location.href = 'https://www.google.com/maps/place/Wolaita+Zone,+Offa+Woreda,+Mure01+kebele';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const progressLines = document.querySelectorAll(".progress-line");

    progressLines.forEach(progressLine => {
        const percentage = parseInt(progressLine.querySelector("span").textContent);
        console.log("Percentage:", percentage); // Log the percentage for debugging
        progressLine.style.width = `${percentage}%`;
        console.log("Width:", progressLine.style.width); // Log the width for debugging
    });
});

