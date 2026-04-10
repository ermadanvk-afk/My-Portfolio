// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in animation observing on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animating in
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Dynamic GitHub Heatmap Generation (Mock Data for Aesthetics)
const heatmapContainer = document.getElementById('github-heatmap');

function generateHeatmap() {
    // Generate around 150 boxes for a nice look
    const totalBoxes = 150;
    const colors = [
        'rgba(255, 255, 255, 0.05)',  // Level 0
        'rgba(69, 162, 158, 0.4)',    // Level 1 (Dark Cyan)
        'rgba(69, 162, 158, 0.7)',    // Level 2 
        'rgba(102, 252, 241, 0.6)',   // Level 3 (Electric Blue)
        'rgba(102, 252, 241, 1)',     // Level 4 
    ];

    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('heat-box');
        
        // Randomize the contributions for a realistic "tech" feel
        // Skewing towards lower levels for realism
        const rand = Math.random();
        let level = 0;
        
        if (rand > 0.5 && rand <= 0.75) level = 1;
        else if (rand > 0.75 && rand <= 0.85) level = 2;
        else if (rand > 0.85 && rand <= 0.95) level = 3;
        else if (rand > 0.95) level = 4;

        box.style.backgroundColor = colors[level];
        
        // Add a tooltip effect technically
        box.title = `${Math.floor(Math.random() * 15)} contributions`;
        
        heatmapContainer.appendChild(box);
    }
}

// Generate the heatmap on load
generateHeatmap();

// Add interactive hover effects to skill tags dynamically
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', (e) => {
        // Find if cyber-tag
        if(e.target.classList.contains('cyber-tag')) {
            e.target.style.boxShadow = '0 0 15px rgba(196, 240, 0, 0.3)';
        } else {
            e.target.style.boxShadow = '0 0 15px rgba(102, 252, 241, 0.3)';
        }
    });

    tag.addEventListener('mouseleave', (e) => {
        e.target.style.boxShadow = 'none';
    });
});
