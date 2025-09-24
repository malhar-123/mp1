/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files
import '../index.html';

// Stylesheets
import '../css/styles.scss';

// Scripts
import './main.js';
/* ========= Utilities ========= */
const qs  = (sel, ctx=document) => ctx.querySelector(sel);
const qsa = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];

/* ========= Navbar: shrink on scroll ========= */
const nav = qs('#navbar');
const links = qsa('#navLinks a');
const sections = links.map(a => qs(a.getAttribute('href')));

function resizeNav() {
  if (window.scrollY > 10) nav.classList.add('compact');
  else nav.classList.remove('compact');
}
window.addEventListener('scroll', resizeNav);
resizeNav();

/* ========= Smooth scrolling (no inline anchors behavior) ========= */
links.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    qs(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ========= Position indicator + active link ========= */
const indicator = qs('#readingIndicator');
function updateIndicator() {
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(1, Math.max(0, window.scrollY / (docHeight || 1)));
  indicator.style.width = `${progress * 100}%`;

  // highlight the section whose top is just below nav bottom
  const navBottom = nav.getBoundingClientRect().bottom + window.scrollY;
  let activeIdx = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    const top = sections[i].offsetTop;
    if (top - 4 > navBottom) { activeIdx = Math.max(0, i - 1); break; }
  }
  links.forEach(l => l.classList.remove('active'));
  links[activeIdx]?.classList.add('active');
}
window.addEventListener('scroll', updateIndicator);
window.addEventListener('resize', updateIndicator);
window.addEventListener('load', updateIndicator);

/* ========= Modal logic (About + Work detail modals) ========= */
function openModal(el) { el.setAttribute('aria-hidden', 'false'); }
function closeModal(el) { el.setAttribute('aria-hidden', 'true'); }

qs('#openAboutModal').addEventListener('click', () => openModal(qs('#aboutModal')));
qsa('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = qs(btn.getAttribute('data-open'));
    if (target) openModal(target);
  });
});
qsa('.modal').forEach(m => {
  m.addEventListener('click', (e) => {
    if (e.target.matches('[data-close], .modal__backdrop')) closeModal(m);
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') qsa('.modal[aria-hidden="false"]').forEach(closeModal);
});

/* ========= Carousel (vanilla) ========= */
const track = qs('#caroTrack');
const prevBtn = qs('[data-caro-prev]');
const nextBtn = qs('[data-caro-next]');
let cur = 0;

function go(idx) {
  const slides = qsa('.caro-slide', track);
  cur = (idx + slides.length) % slides.length;
  track.style.transform = `translateX(-${cur * 100}%)`;
  slides.forEach((s, i) => s.classList.toggle('current', i === cur));
}
prevBtn.addEventListener('click', () => go(cur - 1));
nextBtn.addEventListener('click', () => go(cur + 1));
let auto = setInterval(() => go(cur + 1), 5000);
[prevBtn, nextBtn, track].forEach(el => el.addEventListener('pointerdown', () => { clearInterval(auto); }));

/* ========= Footer year ========= */
qs('#year').textContent = new Date().getFullYear();
