// Future interactivity can go here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Kittipot Mike Portfolio Loaded');
    
    // Smooth scroll for nav links (already handled by CSS, but good to have)
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // CSS handles this smoothly, keeping JS minimal
        });
    });
});
