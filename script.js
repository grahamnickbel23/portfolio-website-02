const hamburger = document.querySelector('.hamburger');
const navPanel = document.querySelector('.navigation-panel');

hamburger.addEventListener('click', () => {
    navPanel.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
});
