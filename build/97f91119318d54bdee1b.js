function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
import '../index.html'; // Stylesheets

import '../css/styles.scss'; // Scripts

import './main.js';
/* ========= Utilities ========= */

var qs = function qs(sel) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return ctx.querySelector(sel);
};

var qsa = function qsa(sel) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return _toConsumableArray(ctx.querySelectorAll(sel));
};
/* ========= Navbar: shrink on scroll ========= */


var nav = qs('#navbar');
var links = qsa('#navLinks a');
var sections = links.map(function (a) {
  return qs(a.getAttribute('href'));
});

function resizeNav() {
  if (window.scrollY > 10) nav.classList.add('compact');else nav.classList.remove('compact');
}

window.addEventListener('scroll', resizeNav);
resizeNav();
/* ========= Smooth scrolling (no inline anchors behavior) ========= */

links.forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    var id = a.getAttribute('href');
    qs(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
/* ========= Position indicator + active link ========= */

var indicator = qs('#readingIndicator');

function updateIndicator() {
  var _links$activeIdx;

  var docHeight = document.body.scrollHeight - window.innerHeight;
  var progress = Math.min(1, Math.max(0, window.scrollY / (docHeight || 1)));
  indicator.style.width = "".concat(progress * 100, "%"); // highlight the section whose top is just below nav bottom

  var navBottom = nav.getBoundingClientRect().bottom + window.scrollY;
  var activeIdx = sections.length - 1;

  for (var i = 0; i < sections.length; i++) {
    var top = sections[i].offsetTop;

    if (top - 4 > navBottom) {
      activeIdx = Math.max(0, i - 1);
      break;
    }
  }

  links.forEach(function (l) {
    return l.classList.remove('active');
  });
  (_links$activeIdx = links[activeIdx]) === null || _links$activeIdx === void 0 ? void 0 : _links$activeIdx.classList.add('active');
}

window.addEventListener('scroll', updateIndicator);
window.addEventListener('resize', updateIndicator);
window.addEventListener('load', updateIndicator);
/* ========= Modal logic (About + Work detail modals) ========= */

function openModal(el) {
  el.setAttribute('aria-hidden', 'false');
}

function closeModal(el) {
  el.setAttribute('aria-hidden', 'true');
}

qs('#openAboutModal').addEventListener('click', function () {
  return openModal(qs('#aboutModal'));
});
qsa('[data-open]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var target = qs(btn.getAttribute('data-open'));
    if (target) openModal(target);
  });
});
qsa('.modal').forEach(function (m) {
  m.addEventListener('click', function (e) {
    if (e.target.matches('[data-close], .modal__backdrop')) closeModal(m);
  });
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') qsa('.modal[aria-hidden="false"]').forEach(closeModal);
});
/* ========= Carousel (vanilla) ========= */

var track = qs('#caroTrack');
var prevBtn = qs('[data-caro-prev]');
var nextBtn = qs('[data-caro-next]');
var cur = 0;

function go(idx) {
  var slides = qsa('.caro-slide', track);
  cur = (idx + slides.length) % slides.length;
  track.style.transform = "translateX(-".concat(cur * 100, "%)");
  slides.forEach(function (s, i) {
    return s.classList.toggle('current', i === cur);
  });
}

prevBtn.addEventListener('click', function () {
  return go(cur - 1);
});
nextBtn.addEventListener('click', function () {
  return go(cur + 1);
});
var auto = setInterval(function () {
  return go(cur + 1);
}, 5000);
[prevBtn, nextBtn, track].forEach(function (el) {
  return el.addEventListener('pointerdown', function () {
    clearInterval(auto);
  });
});
/* ========= Footer year ========= */

qs('#year').textContent = new Date().getFullYear();