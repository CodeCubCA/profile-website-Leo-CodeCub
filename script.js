document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    navLinks.forEach(n => n.addEventListener('click', closeMenu));

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.project-card, .skill-item, .contact-item, .social-link');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const typingElement = document.querySelector('.code-content');
    const codeLines = [
        'const student = {',
        '  name: "Leo",',
        '  passion: "coding",',
        '  status: "learning"',
        '};'
    ];

    function typeCode() {
        typingElement.innerHTML = '';
        let lineIndex = 0;
        let charIndex = 0;

        function typeLine() {
            if (lineIndex < codeLines.length) {
                const currentLine = codeLines[lineIndex];
                const lineElement = document.createElement('div');
                lineElement.className = 'code-line';

                const lineNumber = document.createElement('span');
                lineNumber.className = 'line-number';
                lineNumber.textContent = lineIndex + 1;

                const codeSpan = document.createElement('span');
                codeSpan.className = 'code';

                lineElement.appendChild(lineNumber);
                lineElement.appendChild(codeSpan);
                typingElement.appendChild(lineElement);

                function typeChar() {
                    if (charIndex < currentLine.length) {
                        codeSpan.textContent += currentLine[charIndex];
                        charIndex++;
                        setTimeout(typeChar, 50);
                    } else {
                        lineIndex++;
                        charIndex = 0;
                        setTimeout(typeLine, 200);
                    }
                }
                typeChar();
            }
        }
        typeLine();
    }

    const codeWindow = document.querySelector('.code-window');
    const codeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeCode, 500);
                codeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (codeWindow) {
        codeObserver.observe(codeWindow);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const heroButtons = document.querySelectorAll('.btn');
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });

        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    function createFloatingEmoji() {
        const emojis = ['🎓', '💻', '🚀', '⭐', '🔥', '💡', '🎯', '✨'];
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = '100vh';
        emoji.style.fontSize = '2rem';
        emoji.style.zIndex = '9999';
        emoji.style.pointerEvents = 'none';
        emoji.style.animation = 'float-up 6s linear forwards';

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }
    

    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    setInterval(createFloatingEmoji, 3000);

    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.addEventListener('click', function() {
            this.style.transform = 'rotate(0deg) scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'rotate(3deg) scale(1)';
            }, 300);
        });
    }

    const navLinksArray = Array.from(navLinks);
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        let scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEven
    
    tListener('scroll', highlightNavLink);

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });

    function addGlowEffect() {
        const glowElements = document.querySelectorAll('.btn-primary, .project-icon, .skill-item i');
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
            });

            element.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });
    }

    addGlowEffect();

    console.log(`
    🎓 Welcome to Leo's Profile Website! 🎓

    Thanks for checking out the code!
    This site was built with:
    • HTML5 for structure
    • CSS3 for styling (with CSS Grid & Flexbox)
    • Vanilla JavaScript for interactivity

    Features:
    • Responsive design
    • Smooth scrolling
    • Intersection Observer animations
    • Typing animation
    • Mobile-friendly navigation
    • Epic Games Board
    • And lots of gamer-friendly vibes! ✨

    Made with ❤️ and lots of ☕
    `);
});

// Games Board Functions
function showGamesBoard() {
    const gamesBoard = document.getElementById('gamesBoard');
    gamesBoard.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function hideGamesBoard() {
    const gamesBoard = document.getElementById('gamesBoard');
    gamesBoard.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function playGame(gameId) {
    // Add some visual feedback
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        if (card.onclick.toString().includes(gameId)) {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        }
    });

    // Handle specific games
    if (gameId === 'egg-shooter') {
        // Open Egg Shooter in new tab
        window.open('egg-shooter.html', '_blank');
        console.log('Opening Egg Shooter game in new tab');
    } else if (gameId === 'fishing-tycoon') {
        // Open Fishing Tycoon in new tab
        window.open('fishing-tycoon.html', '_blank');
        console.log('Opening Fishing Tycoon game in new tab');
    } else {
        // Game not found message
        alert('🎮 Game not available yet!');
        console.log(`Game ${gameId} is not implemented yet.`);
    }
}

// Close games board when clicking outside the container
document.addEventListener('click', function(event) {
    const gamesBoard = document.getElementById('gamesBoard');
    const gamesContainer = document.querySelector('.games-container');

    if (gamesBoard && !gamesBoard.classList.contains('hidden')) {
        if (event.target === gamesBoard && !gamesContainer.contains(event.target)) {
            hideGamesBoard();
        }
    }
});

// Close games board with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const gamesBoard = document.getElementById('gamesBoard');
        if (gamesBoard && !gamesBoard.classList.contains('hidden')) {
            hideGamesBoard();
        }
    }
});