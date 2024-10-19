
function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});
// Get the button element
const aboutMeBtn = document.getElementById('about-me-btn');

// Add an event listener to the button
aboutMeBtn.addEventListener('click', () => {
  // Navigate to another code file (e.g., about-me.html)
  window.location.href = 'index2.html';
});
const facebookBtn = document.getElementById('facebook-btn');
const facebookLink = document.getElementById('facebook-link');

facebookBtn.addEventListener('click', () => {
    facebookLink.style.display = 'block';
});

