// ==========================================================================
// MUHAMMAD RASHID - PORTFOLIO INTERACTIVITY
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeatmap();
  initProjectFilters();
  initMobileNav();
  initActiveNavOnScroll();
});

// 1. Generate GitHub Heatmap Grid
function initHeatmap() {
  const container = document.getElementById('calendarHeatmap');
  if (!container) return;

  const totalDays = 52 * 7; // 52 weeks of 7 days
  const fragment = document.createDocumentFragment();

  // Pattern weights to generate a realistic developer activity distribution
  for (let i = 0; i < totalDays; i++) {
    const cell = document.createElement('div');
    cell.classList.add('calendar-cell');

    // Simulate authentic contribution frequency
    const rand = Math.random();
    let level = 0;
    let count = 0;

    if (rand > 0.85) {
      level = 4;
      count = Math.floor(Math.random() * 8) + 9;
    } else if (rand > 0.65) {
      level = 3;
      count = Math.floor(Math.random() * 5) + 5;
    } else if (rand > 0.45) {
      level = 2;
      count = Math.floor(Math.random() * 3) + 2;
    } else if (rand > 0.25) {
      level = 1;
      count = 1;
    }

    cell.classList.add(`lvl-${level}`);
    cell.setAttribute('title', `${count} contributions`);
    fragment.appendChild(cell);
  }

  container.appendChild(fragment);
}

// 2. Project Filtering Logic
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 3. Mobile Navigation Menu Toggle
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// 4. Highlight Nav Link on Scroll
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 5. Contact Form Submit to WhatsApp
function handleFormSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    alert('Please provide your name and message.');
    return;
  }

  const text = `*New Inquiry from Portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
  const whatsappUrl = `https://wa.me/923347784456?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, '_blank');
}
