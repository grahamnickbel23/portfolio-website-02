// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navPanel = document.querySelector('.navigation-panel');

hamburger.addEventListener('click', () => {
    navPanel.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
});

// Animation reset on back button navigation
window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        replayAnimations();
    }
});

function replayAnimations() {
    document.querySelectorAll(".header, .landing-page , .get-started-btn , .landing-page-heading , .landing-page-sub-heading, .premium-pannel-content , .more-premium-pannel-content")
        .forEach((el) => {
            el.style.animation = "none";
            el.offsetHeight; // trigger reflow
            el.style.animation = ""; // or reassign the animation if needed
        });
}
