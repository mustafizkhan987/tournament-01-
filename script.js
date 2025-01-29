// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Tournament registration modal functionality
const registerButtons = document.querySelectorAll('.register-btn, .cta-button');
registerButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Tournament registration coming soon!');
    });
});

// Simulated live updates
function addLiveUpdate() {
    const teams = [
        'Team Phoenix', 'Team Dragons', 'Team Wolves', 'Team Eagles',
        'Team Sharks', 'Team Lions', 'Team Tigers', 'Team Hawks'
    ];
    const maps = ['Erangel', 'Miramar', 'Sanhok', 'Vikendi'];
    
    const updatesContainer = document.querySelector('.updates-container');
    const update = document.createElement('div');
    update.className = 'update-card';
    
    const team1 = teams[Math.floor(Math.random() * teams.length)];
    let team2;
    do {
        team2 = teams[Math.floor(Math.random() * teams.length)];
    } while (team2 === team1);
    
    const map = maps[Math.floor(Math.random() * maps.length)];
    
    update.innerHTML = `
        <div class="update-header">
            <i class="fas fa-trophy"></i>
            <span>Ongoing Match</span>
        </div>
        <div class="update-content">
            <h3>${team1} vs ${team2}</h3>
            <p>Map: ${map}</p>
            <div class="live-indicator">LIVE</div>
        </div>
    `;
    
    updatesContainer.insertBefore(update, updatesContainer.firstChild);
    
    if (updatesContainer.children.length > 3) {
        updatesContainer.removeChild(updatesContainer.lastChild);
    }
}

// Add new live updates every 30 seconds
setInterval(addLiveUpdate, 30000);

// Initialize with one update
addLiveUpdate();
