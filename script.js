/**
 * Scrapbook & Memory — Interactive Scripts
 * ==========================================
 * Handles: flower curtain, parallax decor, envelope toggle, scroll reveals
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────
     1. FLOWER CURTAIN — Generate dense flower wall & dismiss
     ───────────────────────────────────────────────────────────── */

  // Drawn-like flat illustrative flowers (roses, peonies, dahlias in pink/red/white)
  const CSS_FLOWER_SVGS = [
    // Rose — deep red
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="18" fill="#8b1a3a"/><circle cx="50" cy="50" r="14" fill="#a82040"/><circle cx="50" cy="50" r="10" fill="#c03050"/><circle cx="50" cy="50" r="6" fill="#d84868"/><ellipse cx="50" cy="30" rx="12" ry="18" fill="#9b2040" transform="rotate(0 50 50)"/><ellipse cx="50" cy="30" rx="12" ry="18" fill="#9b2040" transform="rotate(60 50 50)"/><ellipse cx="50" cy="30" rx="12" ry="18" fill="#9b2040" transform="rotate(120 50 50)"/><ellipse cx="50" cy="30" rx="12" ry="18" fill="#9b2040" transform="rotate(180 50 50)"/><ellipse cx="50" cy="30" rx="12" ry="18" fill="#9b2040" transform="rotate(240 50 50)"/><ellipse cx="50" cy="30" rx="12" ry="18" fill="#9b2040" transform="rotate(300 50 50)"/></svg>`,
    // Peony — soft pink
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="#f0a0b8"/><circle cx="50" cy="50" r="16" fill="#f4b0c8"/><circle cx="50" cy="50" r="12" fill="#f8c0d8"/><circle cx="50" cy="50" r="8" fill="#fce0ec"/><ellipse cx="50" cy="28" rx="14" ry="20" fill="#e890a8" transform="rotate(0 50 50)"/><ellipse cx="50" cy="28" rx="14" ry="20" fill="#e890a8" transform="rotate(45 50 50)"/><ellipse cx="50" cy="28" rx="14" ry="20" fill="#e890a8" transform="rotate(90 50 50)"/><ellipse cx="50" cy="28" rx="14" ry="20" fill="#e890a8" transform="rotate(135 50 50)"/><ellipse cx="50" cy="28" rx="14" ry="20" fill="#e890a8" transform="rotate(180 50 50)"/><ellipse cx="50" cy="28" rx="14" ry="20" fill="#e890a8" transform="rotate(225 50 50)"/><ellipse cx="50" cy="28" rx="14" ry="20" fill="#e890a8" transform="rotate(270 50 50)"/><ellipse cx="50" cy="28" rx="14" ry="20" fill="#e890a8" transform="rotate(315 50 50)"/></svg>`,
    // Dahlia — white/cream
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="18" fill="#f8f0ec"/><circle cx="50" cy="50" r="14" fill="#fff8f4"/><circle cx="50" cy="50" r="10" fill="#fff"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(0 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(30 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(60 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(90 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(120 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(150 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(180 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(210 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(240 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(270 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(300 50 50)"/><ellipse cx="50" cy="26" rx="10" ry="22" fill="#f0e8e4" transform="rotate(330 50 50)"/></svg>`,
    // Rose — blush pink
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="16" fill="#d87090"/><circle cx="50" cy="50" r="12" fill="#e8889f"/><circle cx="50" cy="50" r="8" fill="#f0a0b5"/><ellipse cx="50" cy="32" rx="11" ry="16" fill="#c86080" transform="rotate(0 50 50)"/><ellipse cx="50" cy="32" rx="11" ry="16" fill="#c86080" transform="rotate(72 50 50)"/><ellipse cx="50" cy="32" rx="11" ry="16" fill="#c86080" transform="rotate(144 50 50)"/><ellipse cx="50" cy="32" rx="11" ry="16" fill="#c86080" transform="rotate(216 50 50)"/><ellipse cx="50" cy="32" rx="11" ry="16" fill="#c86080" transform="rotate(288 50 50)"/></svg>`,
    // Rose — crimson
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="17" fill="#7a1530"/><circle cx="50" cy="50" r="13" fill="#962040"/><circle cx="50" cy="50" r="9" fill="#b03050"/><circle cx="50" cy="50" r="5" fill="#c84860"/><ellipse cx="50" cy="31" rx="11" ry="17" fill="#882038" transform="rotate(0 50 50)"/><ellipse cx="50" cy="31" rx="11" ry="17" fill="#882038" transform="rotate(51 50 50)"/><ellipse cx="50" cy="31" rx="11" ry="17" fill="#882038" transform="rotate(102 50 50)"/><ellipse cx="50" cy="31" rx="11" ry="17" fill="#882038" transform="rotate(153 50 50)"/><ellipse cx="50" cy="31" rx="11" ry="17" fill="#882038" transform="rotate(204 50 50)"/><ellipse cx="50" cy="31" rx="11" ry="17" fill="#882038" transform="rotate(255 50 50)"/><ellipse cx="50" cy="31" rx="11" ry="17" fill="#882038" transform="rotate(306 50 50)"/></svg>`,
    // Peony — pale pink
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="19" fill="#f8b8cc"/><circle cx="50" cy="50" r="15" fill="#fac8d8"/><circle cx="50" cy="50" r="11" fill="#fcd8e4"/><circle cx="50" cy="50" r="7" fill="#fee8f0"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(0 50 50)"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(40 50 50)"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(80 50 50)"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(120 50 50)"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(160 50 50)"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(200 50 50)"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(240 50 50)"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(280 50 50)"/><ellipse cx="50" cy="29" rx="13" ry="19" fill="#f0a0b8" transform="rotate(320 50 50)"/></svg>`,
    // Dahlia — ivory white
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="17" fill="#fffaf8"/><circle cx="50" cy="50" r="13" fill="#fff"/><circle cx="50" cy="50" r="9" fill="#fff"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(0 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(36 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(72 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(108 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(144 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(180 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(216 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(252 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(288 50 50)"/><ellipse cx="50" cy="27" rx="9" ry="20" fill="#f5ebe6" transform="rotate(324 50 50)"/></svg>`,
    // Rose — dusty rose
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="15" fill="#c86888"/><circle cx="50" cy="50" r="11" fill="#d88098"/><circle cx="50" cy="50" r="7" fill="#e898a8"/><ellipse cx="50" cy="33" rx="10" ry="15" fill="#b85878" transform="rotate(0 50 50)"/><ellipse cx="50" cy="33" rx="10" ry="15" fill="#b85878" transform="rotate(60 50 50)"/><ellipse cx="50" cy="33" rx="10" ry="15" fill="#b85878" transform="rotate(120 50 50)"/><ellipse cx="50" cy="33" rx="10" ry="15" fill="#b85878" transform="rotate(180 50 50)"/><ellipse cx="50" cy="33" rx="10" ry="15" fill="#b85878" transform="rotate(240 50 50)"/><ellipse cx="50" cy="33" rx="10" ry="15" fill="#b85878" transform="rotate(300 50 50)"/></svg>`,
  ];

  const curtain = document.getElementById('flower-curtain');
  const curtainFlowers = document.getElementById('curtain-flowers');

  /** Scatter illustrative flowers organically with even viewport coverage */
  function buildFlowerCurtain() {
    if (!curtainFlowers) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cellSize = 75;
    const cols = Math.ceil(vw / cellSize) + 1;
    const rows = Math.ceil(vh / cellSize) + 1;

    const fragment = document.createDocumentFragment();
    let idx = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const tile = document.createElement('div');
        tile.className = 'curtain-flower css-flower';
        tile.innerHTML = CSS_FLOWER_SVGS[idx % CSS_FLOWER_SVGS.length];
        idx++;

        const size = 62 + Math.random() * 38;
        const rot = (Math.random() - 0.5) * 50;
        const scale = 0.85 + Math.random() * 0.45;

        // Jittered grid: one flower per zone with random offset for organic scatter
        const cellW = 120 / cols;
        const cellH = 120 / rows;
        const left = -10 + col * cellW + Math.random() * cellW;
        const top = -10 + row * cellH + Math.random() * cellH;

        tile.style.position = 'absolute';
        tile.style.width = `${size}px`;
        tile.style.height = `${size}px`;
        tile.style.left = `${left}%`;
        tile.style.top = `${top}%`;
        tile.style.zIndex = Math.floor(Math.random() * 5);
        tile.style.transform = `rotate(${rot}deg) scale(${scale})`;

        fragment.appendChild(tile);
      }
    }

    curtainFlowers.appendChild(fragment);
  }

  /** Dismiss the curtain with fade + scale */
  function revealSite() {
    if (!curtain || curtain.classList.contains('revealing')) return;

    curtain.classList.add('revealing');
    curtain.setAttribute('aria-hidden', 'true');

    // Stagger flower dispersal
    const flowers = curtainFlowers.querySelectorAll('.curtain-flower');
    flowers.forEach((flower, i) => {
      const delay = Math.random() * 400;
      flower.style.transition = `transform 0.8s ease ${delay}ms, opacity 0.6s ease ${delay}ms`;
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 120;
      flower.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0.3) rotate(${(Math.random() - 0.5) * 90}deg)`;
      flower.style.opacity = '0';
    });

    setTimeout(() => {
      curtain.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1400);
  }

  // Init curtain
  buildFlowerCurtain();
  document.body.style.overflow = 'hidden';

  if (curtain) {
    curtain.addEventListener('click', revealSite);
    curtain.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        revealSite();
      }
    });
  }

  // Rebuild on resize (only while curtain is visible)
  let resizeTimer;
  window.addEventListener('resize', () => {
    if (curtain && !curtain.classList.contains('hidden')) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        curtainFlowers.innerHTML = '';
        buildFlowerCurtain();
      }, 300);
    }
  });


  /* ─────────────────────────────────────────────────────────────
     2. MOUSE PARALLAX — Floaty background decor
     ───────────────────────────────────────────────────────────── */

  const decorElements = document.querySelectorAll('.decor[data-depth]');
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animateParallax() {
    currentX += (mouseX - currentX) * 0.06;
    currentY += (mouseY - currentY) * 0.06;

    decorElements.forEach((el) => {
      const depth = parseFloat(el.dataset.depth) || 0.03;
      const x = currentX * depth * 80;
      const y = currentY * depth * 60;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animateParallax);
  }

  // Only run parallax if user hasn't requested reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animateParallax();
  }


  /* ─────────────────────────────────────────────────────────────
     3. ENVELOPE — Toggle open on click/tap (mobile-friendly)
     ───────────────────────────────────────────────────────────── */

  const envelope = document.getElementById('envelope');

  if (envelope) {
    envelope.addEventListener('click', () => {
      envelope.classList.toggle('open');
    });

    envelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        envelope.classList.toggle('open');
      }
    });
  }


  /* ─────────────────────────────────────────────────────────────
     4. SCROLL REVEAL — Fade in elements as they enter viewport
     ───────────────────────────────────────────────────────────── */

  const revealTargets = document.querySelectorAll(
    '.polaroid, .sticky-note, .envelope-wrapper, .spotify-card, .hero'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }

})();
