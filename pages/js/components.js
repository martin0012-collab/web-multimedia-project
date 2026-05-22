/* ============================================================
   DIAMOND MIND SCHOOL — Shared Components
   ============================================================ */

// ── Inject Nav & Footer ──────────────────────────────────────
function getBasePath() {
  const path = window.location.pathname;
  return path.includes('/pages/') ? '../' : './';
}

function injectNav(activePage) {
  const base = getBasePath();
  const nav = `
  <nav class="nav" id="mainNav">
    <div class="nav-inner">
      <a href="${base}index.html" class="nav-logo">
        <img src="${base}images/logo-bg.jpg" alt="Diamond Mind School Logo" class="nav-logo-img">
        <div class="nav-logo-text">
          <span>Diamond Mind</span>
          <span>School</span>
        </div>
      </a>
      <div class="nav-links">
        <a href="${base}index.html" ${activePage==='home'?'class="active"':''}>Home</a>
        <a href="${base}pages/about.html" ${activePage==='about'?'class="active"':''}>About Us</a>
        <a href="${base}pages/services.html" ${activePage==='services'?'class="active"':''}>Services</a>
        <a href="${base}pages/gallery.html" ${activePage==='gallery'?'class="active"':''}>Gallery</a>
        <a href="${base}pages/feedback.html" class="nav-cta ${activePage==='feedback'?'active':''}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Book a Session
        </a>
      </div>
      <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="nav-mobile" id="mobileMenu">
    <a href="${base}index.html" ${activePage==='home'?'class="active"':''}>Home</a>
    <a href="${base}pages/about.html" ${activePage==='about'?'class="active"':''}>About Us</a>
    <a href="${base}pages/services.html" ${activePage==='services'?'class="active"':''}>Services</a>
    <a href="${base}pages/gallery.html" ${activePage==='gallery'?'class="active"':''}>Gallery</a>
    <a href="${base}pages/feedback.html" class="nav-cta">Book a Session</a>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function injectFooter() {
  const base = getBasePath();
  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="${base}images/logo-bg.jpg" alt="Diamond Mind School">
            <div class="footer-logo-text">
              <span>Diamond Mind</span>
              <span>School</span>
            </div>
          </div>
          <p>Empowering students to reach their full academic potential through quality tutoring, mentorship, and a passion for learning.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/diamondmindacademy" target="_blank" title="Facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="mailto:info@diamondmindschool.com" title="Email" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="tel:+263000000000" title="Phone" aria-label="Phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16c.161.62.247 1.257.27 1.92v-.01z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="${base}index.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              Home
            </a></li>
            <li><a href="${base}pages/about.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              About Us
            </a></li>
            <li><a href="${base}pages/services.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              Our Services
            </a></li>
            <li><a href="${base}pages/gallery.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              Gallery
            </a></li>
            <li><a href="${base}pages/feedback.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              Contact Us
            </a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="${base}pages/services.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              General Tutoring
            </a></li>
            <li><a href="${base}pages/services.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              Exam Preparation
            </a></li>
            <li><a href="${base}pages/services.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              One-on-One Sessions
            </a></li>
            <li><a href="${base}pages/services.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              Group Classes
            </a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact Us</h4>
          <div class="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <p>Diamond Mind School<br>Maun</p>
          </div>
          <div class="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
            <p>+260 77 565 453</p>
          </div>
          <div class="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <p>info@diamondmindschool.com</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Diamond Mind School. All rights reserved.</p>
        <p>Designed with <svg style="display:inline;vertical-align:middle" width="14" height="14" viewBox="0 0 24 24" fill="#C00000"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> for education</p>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}

// ── Shared Interactions ──────────────────────────────────────
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mainNav = document.getElementById('mainNav');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

  if (mainNav) {
    window.addEventListener('scroll', () => {
      mainNav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
}

// ── Scroll Animation ─────────────────────────────────────────
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up, .slide-in-left, .scale-in');
  if (!els.length) return;

  // Stagger siblings
  document.querySelectorAll('.stagger').forEach(parent => {
    [...parent.children].forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// ── Counter Animation ────────────────────────────────────────
function animateCounter(el, target, duration = 2000) {
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString() + (el.dataset.suffix || '');
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, parseInt(e.target.dataset.count));
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initCounters();
});
