/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/styles.scss ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  background: #F0EDEA;
  color: #1a1a1a;
  line-height: 1.6;
  overflow-x: hidden;
  font-weight: 300;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2.5rem;
}

.container--wide {
  max-width: 1300px;
}

.serif {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
}

@keyframes nav-drop {
  from {
    opacity: 0;
    transform: translateY(-18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  opacity: 0;
  animation: none;
}

.nav-container {
  max-width: 100%;
  padding: 28px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid transparent;
  transition: padding 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, background 0.4s ease, backdrop-filter 0.4s ease, max-width 0.5s cubic-bezier(0.22, 1, 0.36, 1), margin 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.5s ease;
}

.header.scrolled .nav-container {
  margin: 14px auto;
  max-width: 900px;
  background: rgba(240, 237, 234, 0.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  padding: 12px 12px 12px 28px;
}

.nav-logo {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #fff;
  line-height: 1;
  transition: font-size 0.4s ease, color 0.4s ease;
}

.nav-logo-sub {
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 2px;
  transition: opacity 0.3s ease, color 0.4s ease;
}

.header.scrolled .nav-logo {
  font-size: 14px;
  color: #1a1a1a;
}

.header.scrolled .nav-logo-sub {
  opacity: 0;
  pointer-events: none;
  color: #666666;
  display: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
  transition: gap 0.4s ease;
}

.header.scrolled .nav-links {
  gap: 4px;
  margin-right: 8px;
}

.nav-links a {
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.03em;
  white-space: nowrap;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.25s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.header.scrolled .nav-links a {
  padding: 7px 14px;
  border-radius: 100px;
}

.header.scrolled .nav-links a::after {
  display: none;
}

.nav-links a:hover,
.nav-links a.active {
  color: #fff;
}

.header.scrolled .nav-links a {
  color: #666666;
}

.header.scrolled .nav-links a:hover,
.header.scrolled .nav-links a.active {
  background: rgba(0, 0, 0, 0.06);
  color: #1a1a1a;
}

.nav-cta {
  font-size: 11px;
  font-weight: 500;
  padding: 10px 22px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.nav-cta:hover {
  background: #fff;
  color: #1a1a1a;
  border-color: #fff;
  transform: scale(1.03);
}

.header.scrolled .nav-cta {
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.22);
}

.header.scrolled .nav-cta:hover {
  background: #1a1a1a;
  color: #F0EDEA;
  border-color: #1a1a1a;
}

.hero {
  min-height: 200vh;
  background: linear-gradient(to bottom, #000 50%, #F5F2EF 50%);
  position: relative;
}

.hero-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: #000;
  z-index: 1;
  pointer-events: none;
}

.hero-body {
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0 32px 80px;
  z-index: 2;
}

.hero-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center 15%;
     object-position: center 15%;
  display: block;
  z-index: 0;
}

.hero-photo-placeholder {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 380px;
  height: 85vh;
  max-height: 700px;
  background: #C8C3BC;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #888;
  text-transform: uppercase;
}

.hero-tagline {
  position: absolute;
  bottom: 90px;
  right: 32px;
  text-align: right;
  z-index: 2;
}

.hero-tagline-label {
  font-size: 10px;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.hero-tagline-text {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.35;
  color: #fff;
}

.hero-resume {
  position: absolute;
  bottom: 32px;
  right: 32px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  padding: 8px 20px;
  transition: all 0.2s;
  z-index: 2;
}

.hero-resume:hover {
  background: #fff;
  color: #1a1a1a;
  border-color: #fff;
}

.hero-name-wrap {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  line-height: 1.05;
  pointer-events: none;
}

.hero-name-first-wrap {
  display: block;
  position: relative;
}

.hero-name-first {
  display: block;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  color: #fff;
  letter-spacing: -2px;
  text-transform: uppercase;
}

.hero-name-first-final {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  color: #fff;
  letter-spacing: -2px;
  opacity: 0;
  white-space: nowrap;
}

.hero-name-last {
  display: block;
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  color: #fff;
  letter-spacing: -2px;
  opacity: 0;
}

.hero-status {
  position: absolute;
  bottom: 44px;
  left: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.04em;
  z-index: 2;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse-g 2.5s infinite;
}

@keyframes pulse-g {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
@keyframes marquee-wipe {
  from {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  to {
    clip-path: inset(0 0% 0 0);
    opacity: 1;
  }
}
@keyframes marquee-scroll {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
.hero-marquee {
  background: rgba(0, 0, 0, 0.25);
  padding: 14px 0;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  clip-path: inset(0 0% 0 0);
  animation: marquee-wipe 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
  position: relative;
  z-index: 2;
}

.marquee-track {
  display: flex;
  flex-shrink: 0;
  min-width: 100%;
  gap: 0;
  animation: marquee-scroll 32s linear infinite;
}

.scroll-hint {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
}

.scroll-hint-text {
  font-size: 10px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 500;
}

.scroll-hint-chevron {
  animation: chevron-bounce 1.8s ease-in-out infinite;
}

@keyframes chevron-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.85;
  }
  50% {
    transform: translateY(6px);
    opacity: 0.35;
  }
}
.marquee-track span {
  white-space: nowrap;
}

.marquee-track span {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.35;
}

.marquee-track span[aria-hidden] {
  opacity: 0.15;
}

section {
  padding: 4rem 0;
}

.section-label {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #AAAAAA;
  text-align: center;
  margin-bottom: 10px;
}

.section-heading {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1.1;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: -1px;
}

.about {
  background: #F5F2EF;
  padding: 4rem 0 3rem;
  position: relative;
  z-index: 1;
  margin-top: -2px;
}

.about .container {
  max-width: 1300px;
}

.about-split {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 5rem;
  align-items: start;
  margin-bottom: 2rem;
}

.about-left {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.about-right {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(0, 0, 0, 0.08);
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  overflow: hidden;
}

.about-focus {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 0.5px solid rgba(0, 0, 0, 0.08);
}

.about-focus-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.2rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
}

.about-focus-num {
  font-size: 10px;
  font-weight: 500;
  color: #AAAAAA;
  letter-spacing: 0.1em;
  margin-top: 3px;
  flex-shrink: 0;
  width: 20px;
}

.about-focus-title {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.about-focus-desc {
  font-size: 12px;
  color: #666666;
  line-height: 1.6;
}

.about-text {
  font-size: clamp(20px, 2.2vw, 28px);
  line-height: 1.6;
  color: #1a1a1a;
  font-weight: 300;
  max-width: 100%;
  margin: 0;
}

.about-text em {
  font-style: italic;
  color: #666666;
}

.experience {
  background: #F0EDEA;
}

.exp-section-label {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #AAAAAA;
  margin: 2rem 0 0.6rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
}

.exp-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 0.5rem;
}

.exp-card {
  position: relative;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  height: 130px;
  overflow: hidden;
  transition: border-color 0.22s;
}

.exp-card:hover {
  border-color: rgba(0, 0, 0, 0.22);
}

.exp-card--alt {
  background: #F5F2EF;
}

.exp-front {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 52px 1fr auto;
  align-items: center;
  gap: 1.2rem;
  padding: 0 1.4rem;
  transition: opacity 0.2s ease, transform 0.22s ease;
}

.exp-card:hover .exp-front {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
}

.exp-logo {
  width: 42px;
  height: 42px;
  border-radius: 9px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  background: #F0EDEA;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: #666666;
  letter-spacing: 0.04em;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
}

.exp-logo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}

.exp-logo span {
  position: relative;
  z-index: 1;
}

.exp-card--alt .exp-logo {
  background: #FFFFFF;
}

.exp-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.exp-role {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
}

.exp-org {
  font-size: 12px;
  color: #666666;
}

.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 7px;
}

.exp-tags span {
  font-size: 11px;
  color: #AAAAAA;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  padding: 2px 8px;
}

.exp-date-col {
  text-align: right;
  flex-shrink: 0;
}

.exp-period {
  font-size: 11px;
  color: #AAAAAA;
  white-space: nowrap;
}

.exp-stat-pill {
  display: inline-block;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 500;
  color: #1a1a1a;
  background: #F0EDEA;
  border: 0.5px solid rgba(0, 0, 0, 0.14);
  border-radius: 100px;
  padding: 2px 10px;
  white-space: nowrap;
}

.exp-card--alt .exp-stat-pill {
  background: #FFFFFF;
}

.exp-back {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 170px 1fr;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.22s ease, transform 0.22s ease;
  overflow: hidden;
  border-radius: 11px;
}

.exp-card:hover .exp-back {
  opacity: 1;
  transform: translateY(0);
}

.exp-back-stat {
  background: #F5F2EF;
  border-right: 0.5px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.2rem 1.4rem;
  gap: 3px;
  flex-shrink: 0;
}

.exp-card--alt .exp-back-stat {
  background: #F0EDEA;
}

.exp-back-num {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  letter-spacing: -1px;
}

.exp-back-stat-label {
  font-size: 11px;
  color: #666666;
  line-height: 1.4;
  margin-top: 2px;
}

.exp-back-org {
  display: inline-block;
  margin-top: 10px;
  font-size: 10px;
  font-weight: 500;
  color: #666666;
  background: rgba(0, 0, 0, 0.05);
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 3px 9px;
  letter-spacing: 0.04em;
}

.exp-back-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 1.1rem 1.4rem;
}

.exp-back-list li {
  font-size: 12px;
  line-height: 1.55;
  color: #1a1a1a;
  padding-left: 14px;
  position: relative;
}

.exp-back-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.08);
  border: 0.5px solid rgba(0, 0, 0, 0.25);
}

.projects {
  background: #F5F2EF;
}

.proj-list {
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid rgba(0, 0, 0, 0.1);
}

.proj-card {
  position: relative;
  height: 120px;
  overflow: hidden;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  transition: background 0.22s;
}

.proj-card:hover {
  background: rgba(0, 0, 0, 0.02);
}

.proj-front {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 0.5rem;
  transition: opacity 0.2s, transform 0.22s;
}

.proj-card:hover .proj-front {
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
}

.proj-left {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.proj-title {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
  line-height: 1.1;
}

.proj-sub {
  font-size: 12px;
  color: #666666;
}

.proj-tags {
  display: flex;
  gap: 5px;
  margin-top: 5px;
  flex-wrap: wrap;
}

.proj-tags span {
  font-size: 11px;
  color: #AAAAAA;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  padding: 2px 8px;
}

.proj-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.proj-cat {
  font-size: 11px;
  color: #AAAAAA;
  white-space: nowrap;
}

.proj-plus {
  font-size: 18px;
  color: #AAAAAA;
  font-weight: 300;
  line-height: 1;
}

.proj-back {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 170px 1fr;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.22s, transform 0.22s;
  overflow: hidden;
}

.proj-card:hover .proj-back {
  opacity: 1;
  transform: translateY(0);
}

.proj-back-stat {
  background: #111111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.2rem 1.4rem;
  gap: 3px;
  flex-shrink: 0;
}

.proj-back-num {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -1px;
}

.proj-back-stat-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.4;
  margin-top: 2px;
}

.proj-back-cat {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.proj-back-body {
  padding: 1.1rem 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  background: #F5F2EF;
}

.proj-back-desc {
  font-size: 12px;
  line-height: 1.6;
  color: #1a1a1a;
}

.proj-btn {
  font-size: 11px;
  font-weight: 500;
  color: #1a1a1a;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  padding: 3px 12px;
  display: inline-block;
  width: -moz-fit-content;
  width: fit-content;
  transition: background 0.15s, color 0.15s;
}

.proj-btn:hover {
  background: #1a1a1a;
  color: #FFFFFF;
}

.about-personal {
  background: #F0EDEA;
}

.about-card {
  background: #F5F2EF;
  padding: 1.4rem 1.6rem;
  transition: background 0.2s;
}

.about-card:hover {
  background: #FFFFFF;
}

.about-card h3 {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #AAAAAA;
  margin-bottom: 1.6rem;
}

.facts-list {
  list-style: none;
}

.facts-list li {
  padding: 9px 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
  font-size: 13px;
  color: #666666;
  line-height: 1.6;
}

.facts-list li:last-child {
  border-bottom: none;
}

.facts-list li strong {
  display: block;
  color: #1a1a1a;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1px;
}

.about-card p {
  font-size: 13px;
  color: #666666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.about-card p:last-child {
  margin-bottom: 0;
}

.about-card p strong {
  color: #1a1a1a;
  font-weight: 500;
}

.metrics-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(0, 0, 0, 0.08);
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.metric {
  background: #F5F2EF;
  padding: 1.4rem 1rem;
  text-align: center;
  transition: background 0.2s;
}

.metric:hover {
  background: #FFFFFF;
}

.metric-value {
  font-family: "Playfair Display", serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 8px;
}

.metric-label {
  font-size: 10px;
  color: #AAAAAA;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.skills-section {
  margin-top: 0;
}

.skills-section h3 {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #AAAAAA;
  margin-bottom: 1.8rem;
}

.skill-group {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
}

.skill-group-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #AAAAAA;
  min-width: 130px;
  flex-shrink: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tags span {
  font-size: 12px;
  color: #666666;
  padding: 4px 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  transition: all 0.2s;
  font-weight: 400;
}

.skill-tags span:hover {
  border-color: rgba(0, 0, 0, 0.25);
  color: #1a1a1a;
}

.contact {
  background: #111111;
  padding: 3.5rem 0 3rem;
}

.contact-heading {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: clamp(2.4rem, 6vw, 5.5rem);
  color: #555;
  line-height: 1.1;
  margin-bottom: 40px;
  padding: 0 2.5rem;
}

.contact-heading em {
  font-style: italic;
  color: #fff;
  display: block;
  font-size: clamp(3rem, 8vw, 7.5rem);
}

.contact-divider {
  height: 0.5px;
  background: #333;
  margin: 0 2.5rem 40px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.contact-col-label {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #444;
  margin-bottom: 10px;
}

.contact-col-value {
  font-size: 14px;
  color: #aaa;
  line-height: 2;
}

.contact-col-value a {
  color: #aaa;
  transition: color 0.2s;
}

.contact-col-value a:hover {
  color: #fff;
}

.footer {
  background: #111111;
  border-top: 0.5px solid #222;
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #333;
  letter-spacing: 0.04em;
}

.footer-mid {
  font-size: 10px;
  color: #555;
  letter-spacing: 0.03em;
}

.story-card,
.exp-card,
.proj-card,
.about-card,
.metric,
.skill-group {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.story-card.scrolled,
.exp-card.scrolled,
.proj-card.scrolled,
.about-card.scrolled,
.metric.scrolled,
.skill-group.scrolled {
  opacity: 1;
  transform: translateY(0);
}

.chat-widget {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chat-toggle {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #1a1a1a;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.22);
  transition: transform 0.2s ease, background 0.2s;
  position: relative;
  flex-shrink: 0;
}

.chat-toggle::before {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid rgba(26, 26, 26, 0.45);
  animation: pulse-ring 2.5s ease-out infinite;
  pointer-events: none;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}
.chat-widget.open .chat-toggle::before {
  animation: none;
  opacity: 0;
}

.chat-label {
  position: absolute;
  right: 66px;
  bottom: 0;
  height: 54px;
  display: flex;
  align-items: center;
  background: #1a1a1a;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0 16px;
  border-radius: 100px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(8px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
}

.chat-label.active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.chat-widget.open .chat-label {
  opacity: 0 !important;
  pointer-events: none !important;
}

.chat-bubble {
  display: none;
  position: absolute;
  bottom: 72px;
  right: 0;
  background: #1a1a1a;
  color: #fff;
  font-size: 13px;
  line-height: 1.5;
  padding: 14px 18px;
  border-radius: 18px 18px 4px 18px;
  width: 260px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.35s ease, transform 0.35s ease;
  pointer-events: none;
  z-index: 10;
}

.chat-bubble.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  cursor: pointer;
}

.chat-toggle:hover {
  transform: scale(1.08);
}

.chat-toggle svg {
  position: absolute;
  transition: opacity 0.2s, transform 0.2s;
}

.chat-toggle .chat-close-icon {
  opacity: 0;
  transform: rotate(-90deg);
}

.chat-widget.open .chat-toggle svg:first-child {
  opacity: 0;
  transform: rotate(90deg);
}

.chat-widget.open .chat-toggle .chat-close-icon {
  opacity: 1;
  transform: rotate(0deg);
}

.chat-panel {
  position: absolute;
  bottom: 66px;
  right: 0;
  width: 440px;
  height: 640px;
  background: #fff;
  border-radius: 18px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.14);
  opacity: 0;
  transform: translateY(10px) scale(0.97);
  pointer-events: none;
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.chat-widget.open .chat-panel {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: all;
}

.chat-header {
  padding: 16px 18px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
  background: #1a1a1a;
  color: #fff;
}

.chat-header-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Playfair Display", serif;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.chat-header-name {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
}

.chat-header-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.2;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  scroll-behavior: smooth;
}

.chat-msg {
  max-width: 82%;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 13px;
  line-height: 1.5;
  word-wrap: break-word;
}

.chat-msg.bot {
  background: #F0EDEA;
  color: #1a1a1a;
  border-radius: 4px 14px 14px 14px;
  align-self: flex-start;
}

.chat-msg.user {
  background: #1a1a1a;
  color: #fff;
  border-radius: 14px 4px 14px 14px;
  align-self: flex-end;
}

.chat-msg.system {
  background: transparent;
  color: #666666;
  font-size: 11px;
  align-self: center;
  text-align: center;
  max-width: 100%;
  padding: 4px 8px;
}

.chat-msg.typing {
  background: #F0EDEA;
  align-self: flex-start;
  border-radius: 4px 14px 14px 14px;
  color: #666666;
  letter-spacing: 2px;
}

.chat-input-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.08);
  background: #fff;
}

.chat-input {
  flex: 1;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  border-radius: 100px;
  padding: 9px 16px;
  font-size: 13px;
  font-family: "Inter", sans-serif;
  outline: none;
  background: #F0EDEA;
  color: #1a1a1a;
  transition: border-color 0.2s;
}

.chat-input:focus {
  border-color: rgba(0, 0, 0, 0.3);
}

.chat-send {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #1a1a1a;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.15s, background 0.15s;
}

.chat-send:hover {
  transform: scale(1.08);
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  flex-shrink: 0;
}

.nav-hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  transition: background 0.3s;
}

.header.scrolled .nav-hamburger span {
  background: #1a1a1a;
}

.mobile-nav {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #111111;
  z-index: 9998;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-nav.open {
  opacity: 1;
  pointer-events: all;
}

.mobile-nav-close {
  position: absolute;
  top: 28px;
  right: 28px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.55);
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  line-height: 1;
  transition: color 0.2s;
}

.mobile-nav-close:hover {
  color: #fff;
}

.mobile-nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
}

.mobile-nav-links li a {
  display: block;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(2.4rem, 10vw, 3.5rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: -1px;
  padding: 0.3rem 0;
  transition: color 0.2s;
}

.mobile-nav-links li a:hover {
  color: #fff;
}

.mobile-nav-cta {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  padding: 10px 28px;
  transition: color 0.2s, border-color 0.2s;
}

.mobile-nav-cta:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 900px) {
  .about-split {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-right {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .metrics-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .exp-back {
    grid-template-columns: 140px 1fr;
  }
}
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .nav-cta {
    display: none;
  }

  .nav-hamburger {
    display: flex;
  }

  .nav-container {
    padding: 20px 24px;
  }

  .mobile-nav {
    display: flex;
  }

  .hero-photo {
    -o-object-position: center top;
       object-position: center top;
  }

  .hero-tagline {
    display: none;
  }

  .exp-card,
.proj-card {
    cursor: pointer;
  }

  .exp-logo {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }

  .exp-role, .exp-org, .proj-title, .proj-sub {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .exp-card {
    height: 160px !important;
    overflow: hidden !important;
  }
  .exp-card .exp-front {
    position: relative !important;
    inset: auto !important;
    opacity: 1 !important;
    transform: none !important;
    padding: 1rem 1.2rem !important;
    display: grid !important;
    grid-template-columns: 44px 1fr !important;
    gap: 0 0.9rem !important;
    align-items: center !important;
  }
  .exp-card .exp-logo {
    align-self: center !important;
  }
  .exp-card .exp-date-col {
    display: none !important;
  }
  .exp-card .exp-back {
    display: none !important;
    position: relative !important;
    inset: auto !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .exp-card.tapped {
    height: auto !important;
  }
  .exp-card.tapped .exp-front {
    display: none !important;
  }
  .exp-card.tapped .exp-back {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    height: auto !important;
    overflow: hidden !important;
    border-radius: 11px !important;
  }
  .exp-card.tapped .exp-back-stat {
    width: 100% !important;
    border-right: none !important;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.08) !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 1rem !important;
  }
  .exp-card.tapped .exp-back-list {
    width: 100% !important;
    padding: 0.75rem 1.2rem 1rem !important;
  }

  .proj-card {
    height: 150px !important;
    overflow: hidden !important;
  }
  .proj-card .proj-front {
    position: relative !important;
    inset: auto !important;
    opacity: 1 !important;
    transform: none !important;
    padding: 1rem 1.2rem !important;
    align-items: flex-start !important;
  }
  .proj-card .proj-right {
    display: none !important;
  }
  .proj-card .proj-left {
    min-width: 0;
  }
  .proj-card .proj-back {
    display: none !important;
    position: relative !important;
    inset: auto !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .proj-card.tapped {
    height: auto !important;
  }
  .proj-card.tapped .proj-front {
    display: none !important;
  }
  .proj-card.tapped .proj-back {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    height: auto !important;
    overflow: hidden !important;
    border-radius: 11px !important;
  }
  .proj-card.tapped .proj-back-stat {
    width: 100% !important;
    border-right: none !important;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.12) !important;
  }
  .proj-card.tapped .proj-back-body {
    width: 100% !important;
  }

  .skill-group {
    flex-direction: column;
    gap: 0.5rem;
  }

  .skill-group-label {
    min-width: auto;
  }

  .about-split {
    grid-template-columns: 1fr;
  }

  .chat-panel {
    width: calc(100vw - 40px);
    right: 0;
  }

  .chat-bubble {
    display: block;
  }

  .footer {
    flex-direction: column;
    gap: 4px;
  }
}
@media (max-width: 480px) {
  .container {
    padding: 0 1.2rem;
  }

  .contact-heading {
    padding: 0 1.2rem;
  }

  .contact-divider {
    margin: 0 1.2rem 32px;
  }

  .contact-grid {
    padding: 0 1.2rem;
  }

  .footer {
    padding: 1.2rem 1.2rem;
  }

  .metrics-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-right {
    flex-direction: column;
  }
}`, "",{"version":3,"sources":["webpack://./css/styles.scss"],"names":[],"mappings":"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A,oBAAA;EACA,iBAAA;EACA,oBAAA;EACA,UAAA;AANF;;AASA;EACE,gBAAA;EACA,cArTS;EAsTT,kBAAA;AANF;;AASA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,iBAAA;EACA,oBAAA;AANF;;AASA;EACE,cAAA;EACA,kBAAA;AANF;;AASA;EACE,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,oBAAA;EACA,yBAAA;AANF;;AASA;EACE,cAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,+CAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,oBAAA;EACA,UAAA;EACA,mBAAA;AANF;;AASA;EACE,cAAA;EACA,+CAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,oBAAA;EACA,UAAA;AANF;;AASA;EACE,kBAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EACA,eAAA;EACA,+BAAA;EACA,sBAAA;EACA,UAAA;AANF;;AASA;EACE,UAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,gCAAA;AANF;;AASA;EACE;IAAU,UAAA;EALV;EAMA;IAAW,YAAA;EAHX;AACF;AAMA;EACE;IAAO,4BAAA;IAA8B,UAAA;EAFrC;EAGA;IAAO,0BAAA;IAA8B,UAAA;EACrC;AACF;AACA;EACE;IAAO,yBAAA;EAEP;EADA;IAAO,4BAAA;EAIP;AACF;AAFA;EACE,+BAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,0BAAA;EACA,mEAAA;EACA,kBAAA;EACA,UAAA;AAIF;;AADA;EACE,aAAA;EACA,cAAA;EACA,eAAA;EACA,MAAA;EACA,6CAAA;AAIF;;AAAA;EACE,eAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,QAAA;EACA,oBAAA;AAGF;;AAAA;EACE,eAAA;EACA,sBAAA;EACA,yBAAA;EACA,gCAAA;EACA,g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","sourcesContent":["// MALHAR GUDEKAR — LIGHT PREMIUM PORTFOLIO\n\n$bg:       #F0EDEA;\n$bg-alt:   #F5F2EF;\n$hero-bg:  #DEDAD6;\n$card:     #FFFFFF;\n$border:   rgba(0,0,0,0.08);\n$text:     #1a1a1a;\n$muted:    #666666;\n$dim:      #AAAAAA;\n$black:    #111111;\n\n* { margin:0; padding:0; box-sizing:border-box; }\nhtml { scroll-behavior:smooth; }\n\nbody {\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;\n  background: $bg;\n  color: $text;\n  line-height: 1.6;\n  overflow-x: hidden;\n  font-weight: 300;\n}\n\na { color: inherit; text-decoration: none; }\n\n.container {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 2.5rem;\n}\n\n.container--wide {\n  max-width: 1300px;\n}\n\n.serif {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-weight: 700;\n}\n\n// NAV ENTRANCE ANIMATION\n@keyframes nav-drop {\n  from { opacity: 0; transform: translateY(-18px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n// NAV\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  opacity: 0;\n  animation: none;\n}\n\n.nav-container {\n  max-width: 100%;\n  padding: 28px 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 0.5px solid transparent;\n  transition: padding 0.5s cubic-bezier(0.22,1,0.36,1),\n              border-color 0.4s ease,\n              background 0.4s ease,\n              backdrop-filter 0.4s ease,\n              max-width 0.5s cubic-bezier(0.22,1,0.36,1),\n              margin 0.5s cubic-bezier(0.22,1,0.36,1),\n              border-radius 0.5s ease;\n}\n\n.header.scrolled .nav-container {\n  margin: 14px auto;\n  max-width: 900px;\n  background: rgba(240,237,234,0.9);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 0.5px solid rgba(0,0,0,0.1);\n  border-radius: 100px;\n  padding: 12px 12px 12px 28px;\n}\n\n.nav-logo {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n  color: #fff;\n  line-height: 1;\n  transition: font-size 0.4s ease, color 0.4s ease;\n}\n\n.nav-logo-sub {\n  display: block;\n  font-family: 'Inter', sans-serif;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.55);\n  margin-top: 2px;\n  transition: opacity 0.3s ease, color 0.4s ease;\n}\n\n.header.scrolled .nav-logo {\n  font-size: 14px;\n  color: $text;\n}\n\n.header.scrolled .nav-logo-sub {\n  opacity: 0;\n  pointer-events: none;\n  color: $muted;\n  display: none;\n}\n\n.nav-links {\n  display: flex;\n  list-style: none;\n  gap: 40px;\n  transition: gap 0.4s ease;\n}\n\n.header.scrolled .nav-links {\n  gap: 4px;\n  margin-right: 8px;\n}\n\n.nav-links a {\n  font-size: 13px;\n  font-weight: 400;\n  color: rgba(255,255,255,0.65);\n  letter-spacing: 0.03em;\n  white-space: nowrap;\n  position: relative;\n  padding-bottom: 2px;\n  transition: color 0.2s ease;\n}\n\n.nav-links a::after {\n  content: '';\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background: #fff;\n  transition: width 0.25s ease;\n}\n\n.nav-links a:hover::after,\n.nav-links a.active::after {\n  width: 100%;\n}\n\n.header.scrolled .nav-links a {\n  padding: 7px 14px;\n  border-radius: 100px;\n}\n\n.header.scrolled .nav-links a::after {\n  display: none;\n}\n\n.nav-links a:hover,\n.nav-links a.active {\n  color: #fff;\n}\n\n.header.scrolled .nav-links a {\n  color: $muted;\n}\n\n.header.scrolled .nav-links a:hover,\n.header.scrolled .nav-links a.active {\n  background: rgba(0,0,0,0.06);\n  color: $text;\n}\n\n.nav-cta {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 10px 22px;\n  border: 1px solid rgba(255,255,255,0.35);\n  border-radius: 100px;\n  color: rgba(255,255,255,0.85);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;\n}\n\n.nav-cta:hover {\n  background: #fff;\n  color: $text;\n  border-color: #fff;\n  transform: scale(1.03);\n}\n\n.header.scrolled .nav-cta {\n  color: $text;\n  border-color: rgba(0,0,0,0.22);\n}\n\n.header.scrolled .nav-cta:hover {\n  background: $text;\n  color: $bg;\n  border-color: $text;\n}\n\n// HERO\n.hero {\n  min-height: 200vh;\n  background: linear-gradient(to bottom, #000 50%, $bg-alt 50%);\n  position: relative;\n}\n\n\n.hero-sticky {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.hero-overlay {\n  position: absolute;\n  inset: 0;\n  background: #000;\n  z-index: 1;\n  pointer-events: none;\n}\n\n.hero-body {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  padding: 0 32px 80px;\n  z-index: 2;\n}\n\n.hero-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 15%;\n  display: block;\n  z-index: 0;\n}\n\n.hero-photo-placeholder {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 380px;\n  height: 85vh;\n  max-height: 700px;\n  background: #C8C3BC;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  letter-spacing: 0.1em;\n  color: #888;\n  text-transform: uppercase;\n}\n\n.hero-tagline {\n  position: absolute;\n  bottom: 90px;\n  right: 32px;\n  text-align: right;\n  z-index: 2;\n}\n\n.hero-tagline-label {\n  font-size: 10px;\n  letter-spacing: 0.2em;\n  color: rgba(255,255,255,0.55);\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n\n.hero-tagline-text {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 1.35;\n  color: #fff;\n}\n\n.hero-resume {\n  position: absolute;\n  bottom: 32px;\n  right: 32px;\n  font-size: 11px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.8);\n  border: 1px solid rgba(255,255,255,0.3);\n  border-radius: 100px;\n  padding: 8px 20px;\n  transition: all 0.2s;\n  z-index: 2;\n}\n\n.hero-resume:hover {\n  background: #fff;\n  color: $text;\n  border-color: #fff;\n}\n\n.hero-name-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  line-height: 1.05;\n  pointer-events: none;\n}\n\n.hero-name-first-wrap {\n  display: block;\n  position: relative;\n}\n\n.hero-name-first {\n  display: block;\n  font-family: 'Inter', sans-serif;\n  font-weight: 800;\n  font-size: clamp(2.8rem, 5.5vw, 5rem);\n  color: #fff;\n  letter-spacing: -2px;\n  text-transform: uppercase;\n}\n\n.hero-name-first-final {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: 'Playfair Display', Georgia, serif;\n  font-weight: 700;\n  font-size: clamp(2.8rem, 5.5vw, 5rem);\n  color: #fff;\n  letter-spacing: -2px;\n  opacity: 0;\n  white-space: nowrap;\n}\n\n.hero-name-last {\n  display: block;\n  font-family: 'Playfair Display', Georgia, serif;\n  font-weight: 700;\n  font-size: clamp(2.8rem, 5.5vw, 5rem);\n  color: #fff;\n  letter-spacing: -2px;\n  opacity: 0;\n}\n\n.hero-status {\n  position: absolute;\n  bottom: 44px;\n  left: 32px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: rgba(255,255,255,0.6);\n  letter-spacing: 0.04em;\n  z-index: 2;\n}\n\n.status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: pulse-g 2.5s infinite;\n}\n\n@keyframes pulse-g {\n  0%,100% { opacity:1; }\n  50%      { opacity:0.4; }\n}\n\n// MARQUEE\n@keyframes marquee-wipe {\n  from { clip-path: inset(0 100% 0 0); opacity: 0; }\n  to   { clip-path: inset(0 0% 0 0);   opacity: 1; }\n}\n\n@keyframes marquee-scroll {\n  from { transform: translateX(0%); }\n  to   { transform: translateX(-100%); }\n}\n\n.hero-marquee {\n  background: rgba(0,0,0,0.25);\n  padding: 14px 0;\n  overflow: hidden;\n  white-space: nowrap;\n  flex-shrink: 0;\n  display: flex;\n  clip-path: inset(0 0% 0 0);\n  animation: marquee-wipe 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;\n  position: relative;\n  z-index: 2;\n}\n\n.marquee-track {\n  display: flex;\n  flex-shrink: 0;\n  min-width: 100%;\n  gap: 0;\n  animation: marquee-scroll 32s linear infinite;\n}\n\n// Scroll hint indicator\n.scroll-hint {\n  position: fixed;\n  bottom: 28px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  pointer-events: none;\n}\n\n.scroll-hint-text {\n  font-size: 10px;\n  letter-spacing: 0.35em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.75);\n  font-weight: 500;\n}\n\n.scroll-hint-chevron {\n  animation: chevron-bounce 1.8s ease-in-out infinite;\n}\n\n@keyframes chevron-bounce {\n  0%, 100% { transform: translateY(0);   opacity: 0.85; }\n  50%       { transform: translateY(6px); opacity: 0.35; }\n}\n\n.marquee-track span {\n  white-space: nowrap;\n}\n\n.marquee-track span {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #fff;\n  opacity: 0.35;\n}\n\n.marquee-track span[aria-hidden] {\n  opacity: 0.15;\n}\n\n// SECTIONS\nsection {\n  padding: 4rem 0;\n}\n\n.section-label {\n  font-size: 10px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: $dim;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.section-heading {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-weight: 700;\n  font-size: clamp(2.4rem, 5vw, 3.6rem);\n  line-height: 1.1;\n  color: $text;\n  text-align: center;\n  margin-bottom: 2.5rem;\n  letter-spacing: -1px;\n}\n\n// ABOUT TEXT\n.about {\n  background: $bg-alt;\n  padding: 4rem 0 3rem;\n  position: relative;\n  z-index: 1;\n  margin-top: -2px;\n}\n\n.about .container {\n  max-width: 1300px;\n}\n\n.about-split {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 5rem;\n  align-items: start;\n  margin-bottom: 2rem;\n}\n\n.about-left {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n\n.about-right {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  background: $border;\n  border: 0.5px solid $border;\n  border-radius: 14px;\n  overflow: hidden;\n}\n\n.about-focus {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-top: 0.5px solid $border;\n}\n\n.about-focus-item {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n  padding: 1.2rem 0;\n  border-bottom: 0.5px solid $border;\n}\n\n.about-focus-num {\n  font-size: 10px;\n  font-weight: 500;\n  color: $dim;\n  letter-spacing: 0.1em;\n  margin-top: 3px;\n  flex-shrink: 0;\n  width: 20px;\n}\n\n.about-focus-title {\n  font-size: 14px;\n  font-weight: 500;\n  color: $text;\n  margin-bottom: 4px;\n}\n\n.about-focus-desc {\n  font-size: 12px;\n  color: $muted;\n  line-height: 1.6;\n}\n\n.about-text {\n  font-size: clamp(20px, 2.2vw, 28px);\n  line-height: 1.6;\n  color: #1a1a1a;\n  font-weight: 300;\n  max-width: 100%;\n  margin: 0;\n}\n\n.about-text em {\n  font-style: italic;\n  color: $muted;\n}\n\n// EXPERIENCE\n.experience {\n  background: $bg;\n}\n\n.exp-section-label {\n  font-size: 11px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: $dim;\n  margin: 2rem 0 0.6rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.5px solid $border;\n}\n\n.exp-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 0.5rem;\n}\n\n.exp-card {\n  position: relative;\n  background: $card;\n  border: 0.5px solid $border;\n  border-radius: 12px;\n  height: 130px;\n  overflow: hidden;\n  transition: border-color 0.22s;\n}\n\n.exp-card:hover {\n  border-color: rgba(0,0,0,0.22);\n}\n\n.exp-card--alt {\n  background: $bg-alt;\n}\n\n.exp-front {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  grid-template-columns: 52px 1fr auto;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 0 1.4rem;\n  transition: opacity 0.2s ease, transform 0.22s ease;\n}\n\n.exp-card:hover .exp-front {\n  opacity: 0;\n  transform: translateY(-10px);\n  pointer-events: none;\n}\n\n.exp-logo {\n  width: 42px;\n  height: 42px;\n  border-radius: 9px;\n  border: 0.5px solid $border;\n  background: $bg;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  color: $muted;\n  letter-spacing: 0.04em;\n  flex-shrink: 0;\n  overflow: hidden;\n  position: relative;\n}\n\n.exp-logo img {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.exp-logo span {\n  position: relative;\n  z-index: 1;\n}\n\n.exp-card--alt .exp-logo {\n  background: $card;\n}\n\n.exp-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.exp-role {\n  font-size: 14px;\n  font-weight: 500;\n  color: $text;\n}\n\n.exp-org {\n  font-size: 12px;\n  color: $muted;\n}\n\n.exp-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 7px;\n}\n\n.exp-tags span {\n  font-size: 11px;\n  color: $dim;\n  border: 0.5px solid $border;\n  border-radius: 100px;\n  padding: 2px 8px;\n}\n\n.exp-date-col {\n  text-align: right;\n  flex-shrink: 0;\n}\n\n.exp-period {\n  font-size: 11px;\n  color: $dim;\n  white-space: nowrap;\n}\n\n.exp-stat-pill {\n  display: inline-block;\n  margin-top: 6px;\n  font-size: 11px;\n  font-weight: 500;\n  color: $text;\n  background: $bg;\n  border: 0.5px solid rgba(0,0,0,0.14);\n  border-radius: 100px;\n  padding: 2px 10px;\n  white-space: nowrap;\n}\n\n.exp-card--alt .exp-stat-pill {\n  background: $card;\n}\n\n.exp-back {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  grid-template-columns: 170px 1fr;\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.22s ease, transform 0.22s ease;\n  overflow: hidden;\n  border-radius: 11px;\n}\n\n.exp-card:hover .exp-back {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.exp-back-stat {\n  background: $bg-alt;\n  border-right: 0.5px solid $border;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1.2rem 1.4rem;\n  gap: 3px;\n  flex-shrink: 0;\n}\n\n.exp-card--alt .exp-back-stat {\n  background: $bg;\n}\n\n.exp-back-num {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: $text;\n  line-height: 1;\n  letter-spacing: -1px;\n}\n\n.exp-back-stat-label {\n  font-size: 11px;\n  color: $muted;\n  line-height: 1.4;\n  margin-top: 2px;\n}\n\n.exp-back-org {\n  display: inline-block;\n  margin-top: 10px;\n  font-size: 10px;\n  font-weight: 500;\n  color: $muted;\n  background: rgba(0,0,0,0.05);\n  border: 0.5px solid $border;\n  border-radius: 20px;\n  padding: 3px 9px;\n  letter-spacing: 0.04em;\n}\n\n.exp-back-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 6px;\n  padding: 1.1rem 1.4rem;\n}\n\n.exp-back-list li {\n  font-size: 12px;\n  line-height: 1.55;\n  color: $text;\n  padding-left: 14px;\n  position: relative;\n}\n\n.exp-back-list li::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 7px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: $border;\n  border: 0.5px solid rgba(0,0,0,0.25);\n}\n\n// PROJECTS\n.projects {\n  background: $bg-alt;\n}\n\n.proj-list {\n  display: flex;\n  flex-direction: column;\n  border-top: 0.5px solid rgba(0,0,0,0.1);\n}\n\n.proj-card {\n  position: relative;\n  height: 120px;\n  overflow: hidden;\n  border-bottom: 0.5px solid rgba(0,0,0,0.1);\n  transition: background 0.22s;\n}\n\n.proj-card:hover {\n  background: rgba(0,0,0,0.02);\n}\n\n.proj-front {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  padding: 0 0.5rem;\n  transition: opacity 0.2s, transform 0.22s;\n}\n\n.proj-card:hover .proj-front {\n  opacity: 0;\n  transform: translateY(-8px);\n  pointer-events: none;\n}\n\n.proj-left {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n\n.proj-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: clamp(1.4rem, 2.2vw, 2rem);\n  font-weight: 700;\n  color: $text;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n}\n\n.proj-sub {\n  font-size: 12px;\n  color: $muted;\n}\n\n.proj-tags {\n  display: flex;\n  gap: 5px;\n  margin-top: 5px;\n  flex-wrap: wrap;\n}\n\n.proj-tags span {\n  font-size: 11px;\n  color: $dim;\n  border: 0.5px solid $border;\n  border-radius: 100px;\n  padding: 2px 8px;\n}\n\n.proj-right {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n}\n\n.proj-cat {\n  font-size: 11px;\n  color: $dim;\n  white-space: nowrap;\n}\n\n.proj-plus {\n  font-size: 18px;\n  color: $dim;\n  font-weight: 300;\n  line-height: 1;\n}\n\n// Project card back — dark inverted panel\n.proj-back {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  grid-template-columns: 170px 1fr;\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.22s, transform 0.22s;\n  overflow: hidden;\n}\n\n.proj-card:hover .proj-back {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.proj-back-stat {\n  background: $black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1.2rem 1.4rem;\n  gap: 3px;\n  flex-shrink: 0;\n}\n\n.proj-back-num {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1;\n  letter-spacing: -1px;\n}\n\n.proj-back-stat-label {\n  font-size: 11px;\n  color: rgba(255,255,255,0.55);\n  line-height: 1.4;\n  margin-top: 2px;\n}\n\n.proj-back-cat {\n  font-size: 10px;\n  color: rgba(255,255,255,0.3);\n  margin-top: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.proj-back-body {\n  padding: 1.1rem 1.4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n  background: $bg-alt;\n}\n\n.proj-back-desc {\n  font-size: 12px;\n  line-height: 1.6;\n  color: $text;\n}\n\n.proj-btn {\n  font-size: 11px;\n  font-weight: 500;\n  color: $text;\n  border: 0.5px solid rgba(0,0,0,0.2);\n  border-radius: 100px;\n  padding: 3px 12px;\n  display: inline-block;\n  width: fit-content;\n  transition: background 0.15s, color 0.15s;\n}\n\n.proj-btn:hover {\n  background: $text;\n  color: $card;\n}\n\n// ABOUT PERSONAL\n.about-personal {\n  background: $bg;\n}\n\n.about-card {\n  background: $bg-alt;\n  padding: 1.4rem 1.6rem;\n  transition: background 0.2s;\n}\n\n.about-card:hover {\n  background: $card;\n}\n\n.about-card h3 {\n  font-size: 10px;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: $dim;\n  margin-bottom: 1.6rem;\n}\n\n.facts-list {\n  list-style: none;\n}\n\n.facts-list li {\n  padding: 9px 0;\n  border-bottom: 0.5px solid $border;\n  font-size: 13px;\n  color: $muted;\n  line-height: 1.6;\n}\n\n.facts-list li:last-child {\n  border-bottom: none;\n}\n\n.facts-list li strong {\n  display: block;\n  color: $text;\n  font-weight: 500;\n  font-size: 11px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  margin-bottom: 1px;\n}\n\n.about-card p {\n  font-size: 13px;\n  color: $muted;\n  line-height: 1.8;\n  margin-bottom: 1rem;\n}\n\n.about-card p:last-child { margin-bottom:0; }\n.about-card p strong { color:$text; font-weight:500; }\n\n// METRICS\n.metrics-section {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  background: $border;\n  border: 0.5px solid $border;\n  border-radius: 14px;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n\n.metric {\n  background: $bg-alt;\n  padding: 1.4rem 1rem;\n  text-align: center;\n  transition: background 0.2s;\n}\n\n.metric:hover { background: $card; }\n\n.metric-value {\n  font-family: 'Playfair Display', serif;\n  font-size: 2.4rem;\n  font-weight: 700;\n  color: $text;\n  letter-spacing: -1px;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n\n.metric-label {\n  font-size: 10px;\n  color: $dim;\n  line-height: 1.5;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n// SKILLS\n.skills-section {\n  margin-top: 0;\n}\n\n.skills-section h3 {\n  font-size: 10px;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: $dim;\n  margin-bottom: 1.8rem;\n}\n\n.skill-group {\n  display: flex;\n  align-items: baseline;\n  gap: 1.5rem;\n  margin-bottom: 1.2rem;\n  flex-wrap: wrap;\n}\n\n.skill-group-label {\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: $dim;\n  min-width: 130px;\n  flex-shrink: 0;\n}\n\n.skill-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.skill-tags span {\n  font-size: 12px;\n  color: $muted;\n  padding: 4px 12px;\n  border: 0.5px solid $border;\n  border-radius: 100px;\n  transition: all 0.2s;\n  font-weight: 400;\n}\n\n.skill-tags span:hover {\n  border-color: rgba(0,0,0,0.25);\n  color: $text;\n}\n\n// CONTACT\n.contact {\n  background: $black;\n  padding: 3.5rem 0 3rem;\n}\n\n.contact-heading {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-weight: 700;\n  font-size: clamp(2.4rem, 6vw, 5.5rem);\n  color: #555;\n  line-height: 1.1;\n  margin-bottom: 40px;\n  padding: 0 2.5rem;\n}\n\n.contact-heading em {\n  font-style: italic;\n  color: #fff;\n  display: block;\n  font-size: clamp(3rem, 8vw, 7.5rem);\n}\n\n.contact-divider {\n  height: 0.5px;\n  background: #333;\n  margin: 0 2.5rem 40px;\n}\n\n.contact-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  padding: 0 2.5rem;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.contact-col-label {\n  font-size: 10px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #444;\n  margin-bottom: 10px;\n}\n\n.contact-col-value {\n  font-size: 14px;\n  color: #aaa;\n  line-height: 2;\n}\n\n.contact-col-value a {\n  color: #aaa;\n  transition: color 0.2s;\n}\n\n.contact-col-value a:hover {\n  color: #fff;\n}\n\n.footer {\n  background: #111111;\n  border-top: 0.5px solid #222;\n  padding: 1.5rem 2.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 11px;\n  color: #333;\n  letter-spacing: 0.04em;\n}\n\n.footer-mid {\n  font-size: 10px;\n  color: #555;\n  letter-spacing: 0.03em;\n}\n\n.story-card,\n.exp-card,\n.proj-card,\n.about-card,\n.metric,\n.skill-group {\n  opacity: 0;\n  transform: translateY(16px);\n  transition: opacity 0.55s ease, transform 0.55s ease;\n}\n\n.story-card.scrolled,\n.exp-card.scrolled,\n.proj-card.scrolled,\n.about-card.scrolled,\n.metric.scrolled,\n.skill-group.scrolled {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n// CHAT WIDGET\n.chat-widget {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.chat-toggle {\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  background: $text;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.22);\n  transition: transform 0.2s ease, background 0.2s;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.chat-toggle::before {\n  content: '';\n  position: absolute;\n  inset: -4px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(26,26,26,0.45);\n  animation: pulse-ring 2.5s ease-out infinite;\n  pointer-events: none;\n}\n\n@keyframes pulse-ring {\n  0%   { transform: scale(1);    opacity: 0.7; }\n  100% { transform: scale(1.7);  opacity: 0; }\n}\n\n.chat-widget.open .chat-toggle::before {\n  animation: none;\n  opacity: 0;\n}\n\n.chat-label {\n  position: absolute;\n  right: 66px;\n  bottom: 0;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  background: $text;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 0 16px;\n  border-radius: 100px;\n  white-space: nowrap;\n  opacity: 0;\n  transform: translateX(8px);\n  transition: opacity 0.4s ease, transform 0.4s ease;\n  pointer-events: none;\n  box-shadow: 0 4px 16px rgba(0,0,0,0.16);\n}\n\n.chat-label.active {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: auto;\n}\n\n.chat-widget.open .chat-label {\n  opacity: 0 !important;\n  pointer-events: none !important;\n}\n\n// Mobile chat bubble\n.chat-bubble {\n  display: none;\n  position: absolute;\n  bottom: 72px;\n  right: 0;\n  background: $text;\n  color: #fff;\n  font-size: 13px;\n  line-height: 1.5;\n  padding: 14px 18px;\n  border-radius: 18px 18px 4px 18px;\n  width: 260px;\n  box-shadow: 0 6px 24px rgba(0,0,0,0.2);\n  opacity: 0;\n  transform: translateY(8px);\n  transition: opacity 0.35s ease, transform 0.35s ease;\n  pointer-events: none;\n  z-index: 10;\n}\n.chat-bubble.visible {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n.chat-toggle:hover { transform: scale(1.08); }\n\n.chat-toggle svg { position: absolute; transition: opacity 0.2s, transform 0.2s; }\n.chat-toggle .chat-close-icon { opacity: 0; transform: rotate(-90deg); }\n.chat-widget.open .chat-toggle svg:first-child { opacity: 0; transform: rotate(90deg); }\n.chat-widget.open .chat-toggle .chat-close-icon { opacity: 1; transform: rotate(0deg); }\n\n.chat-panel {\n  position: absolute;\n  bottom: 66px;\n  right: 0;\n  width: 440px;\n  height: 640px;\n  background: #fff;\n  border-radius: 18px;\n  border: 0.5px solid rgba(0,0,0,0.1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 12px 48px rgba(0,0,0,0.14);\n  opacity: 0;\n  transform: translateY(10px) scale(0.97);\n  pointer-events: none;\n  transition: opacity 0.22s ease, transform 0.22s ease;\n}\n\n.chat-widget.open .chat-panel {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  pointer-events: all;\n}\n\n.chat-header {\n  padding: 16px 18px;\n  border-bottom: 0.5px solid rgba(0,0,0,0.08);\n  background: $text;\n  color: #fff;\n}\n\n.chat-header-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.chat-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Playfair Display', serif;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n\n.chat-header-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1.2;\n}\n\n.chat-header-sub {\n  font-size: 11px;\n  color: rgba(255,255,255,0.55);\n  line-height: 1.2;\n}\n\n.chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  scroll-behavior: smooth;\n}\n\n.chat-msg {\n  max-width: 82%;\n  padding: 10px 14px;\n  border-radius: 14px;\n  font-size: 13px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n\n.chat-msg.bot {\n  background: $bg;\n  color: $text;\n  border-radius: 4px 14px 14px 14px;\n  align-self: flex-start;\n}\n\n.chat-msg.user {\n  background: $text;\n  color: #fff;\n  border-radius: 14px 4px 14px 14px;\n  align-self: flex-end;\n}\n\n.chat-msg.system {\n  background: transparent;\n  color: $muted;\n  font-size: 11px;\n  align-self: center;\n  text-align: center;\n  max-width: 100%;\n  padding: 4px 8px;\n}\n\n.chat-msg.typing {\n  background: $bg;\n  align-self: flex-start;\n  border-radius: 4px 14px 14px 14px;\n  color: $muted;\n  letter-spacing: 2px;\n}\n\n.chat-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  border-top: 0.5px solid rgba(0,0,0,0.08);\n  background: #fff;\n}\n\n.chat-input {\n  flex: 1;\n  border: 0.5px solid rgba(0,0,0,0.12);\n  border-radius: 100px;\n  padding: 9px 16px;\n  font-size: 13px;\n  font-family: 'Inter', sans-serif;\n  outline: none;\n  background: $bg;\n  color: $text;\n  transition: border-color 0.2s;\n}\n\n.chat-input:focus { border-color: rgba(0,0,0,0.3); }\n\n.chat-send {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: $text;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: transform 0.15s, background 0.15s;\n}\n\n.chat-send:hover { transform: scale(1.08); }\n\n// HAMBURGER\n.nav-hamburger {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  flex-shrink: 0;\n}\n\n.nav-hamburger span {\n  display: block;\n  width: 22px;\n  height: 1.5px;\n  background: rgba(255,255,255,0.8);\n  border-radius: 2px;\n  transition: background 0.3s;\n}\n\n.header.scrolled .nav-hamburger span {\n  background: $text;\n}\n\n// MOBILE NAV\n.mobile-nav {\n  display: none;\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  background: $black;\n  z-index: 9998;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n\n.mobile-nav.open {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.mobile-nav-close {\n  position: absolute;\n  top: 28px;\n  right: 28px;\n  background: none;\n  border: none;\n  color: rgba(255,255,255,0.55);\n  font-size: 24px;\n  cursor: pointer;\n  padding: 8px;\n  line-height: 1;\n  transition: color 0.2s;\n}\n\n.mobile-nav-close:hover { color: #fff; }\n\n.mobile-nav-links {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n\n.mobile-nav-links li a {\n  display: block;\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: clamp(2.4rem, 10vw, 3.5rem);\n  font-weight: 700;\n  color: rgba(255,255,255,0.7);\n  letter-spacing: -1px;\n  padding: 0.3rem 0;\n  transition: color 0.2s;\n}\n\n.mobile-nav-links li a:hover { color: #fff; }\n\n.mobile-nav-cta {\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.45);\n  border: 0.5px solid rgba(255,255,255,0.2);\n  border-radius: 100px;\n  padding: 10px 28px;\n  transition: color 0.2s, border-color 0.2s;\n}\n\n.mobile-nav-cta:hover {\n  color: #fff;\n  border-color: rgba(255,255,255,0.5);\n}\n\n@media (max-width: 900px) {\n  .about-split { grid-template-columns: 1fr; gap: 2rem; }\n  .about-right { flex-direction: row; flex-wrap: wrap; }\n  .metrics-section { grid-template-columns: repeat(2,1fr); }\n  .contact-grid { grid-template-columns: 1fr; gap: 1.5rem; }\n  .exp-back { grid-template-columns: 140px 1fr; }\n}\n\n@media (max-width: 768px) {\n  // Nav\n  .nav-links { display: none; }\n  .nav-cta { display: none; }\n  .nav-hamburger { display: flex; }\n  .nav-container { padding: 20px 24px; }\n  .mobile-nav { display: flex; }\n\n  // Hero\n  .hero-photo { object-position: center top; }\n  .hero-tagline { display: none; }\n\n  // Experience & project cards — mobile card flip via .tapped class\n  .exp-card,\n  .proj-card {\n    cursor: pointer;\n  }\n  .exp-logo {\n    width: 36px;\n    height: 36px;\n    flex-shrink: 0;\n  }\n\n  // Truncate title + org to 1 line so they flow to card edge\n  .exp-role, .exp-org, .proj-title, .proj-sub {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  // Pull BOTH faces out of absolute positioning on mobile (normal flow)\n  .exp-card {\n    height: 160px !important;\n    overflow: hidden !important;\n    .exp-front {\n      position: relative !important;\n      inset: auto !important;\n      opacity: 1 !important;\n      transform: none !important;\n      padding: 1rem 1.2rem !important;\n      display: grid !important;\n      grid-template-columns: 44px 1fr !important;\n      gap: 0 0.9rem !important;\n      align-items: center !important;\n    }\n    .exp-logo { align-self: center !important; }\n    .exp-date-col { display: none !important; }\n    .exp-back {\n      display: none !important;\n      position: relative !important;\n      inset: auto !important;\n      opacity: 1 !important;\n      transform: none !important;\n    }\n  }\n  .exp-card.tapped {\n    height: auto !important;\n    .exp-front { display: none !important; }\n    .exp-back {\n      display: flex !important;\n      flex-direction: column !important;\n      width: 100% !important;\n      height: auto !important;\n      overflow: hidden !important;\n      border-radius: 11px !important;\n    }\n    .exp-back-stat {\n      width: 100% !important;\n      border-right: none !important;\n      border-bottom: 0.5px solid $border !important;\n      flex-direction: row !important;\n      align-items: center !important;\n      gap: 1rem !important;\n    }\n    .exp-back-list {\n      width: 100% !important;\n      padding: 0.75rem 1.2rem 1rem !important;\n    }\n  }\n\n  .proj-card {\n    height: 150px !important;\n    overflow: hidden !important;\n    .proj-front {\n      position: relative !important;\n      inset: auto !important;\n      opacity: 1 !important;\n      transform: none !important;\n      padding: 1rem 1.2rem !important;\n      align-items: flex-start !important;\n    }\n    .proj-right { display: none !important; }\n    .proj-left { min-width: 0; }\n    .proj-back {\n      display: none !important;\n      position: relative !important;\n      inset: auto !important;\n      opacity: 1 !important;\n      transform: none !important;\n    }\n  }\n  .proj-card.tapped {\n    height: auto !important;\n    .proj-front { display: none !important; }\n    .proj-back {\n      display: flex !important;\n      flex-direction: column !important;\n      width: 100% !important;\n      height: auto !important;\n      overflow: hidden !important;\n      border-radius: 11px !important;\n    }\n    .proj-back-stat {\n      width: 100% !important;\n      border-right: none !important;\n      border-bottom: 0.5px solid rgba(255,255,255,0.12) !important;\n    }\n    .proj-back-body {\n      width: 100% !important;\n    }\n  }\n\n  // Skills\n  .skill-group { flex-direction: column; gap: 0.5rem; }\n  .skill-group-label { min-width: auto; }\n\n  // About\n  .about-split { grid-template-columns: 1fr; }\n\n  // Chat widget\n  .chat-panel {\n    width: calc(100vw - 40px);\n    right: 0;\n  }\n\n  // Mobile chat bubble\n  .chat-bubble {\n    display: block;\n  }\n\n\n  // Footer\n  .footer { flex-direction: column; gap: 4px; }\n}\n\n@media (max-width: 480px) {\n  .container { padding: 0 1.2rem; }\n  .contact-heading { padding: 0 1.2rem; }\n  .contact-divider { margin: 0 1.2rem 32px; }\n  .contact-grid { padding: 0 1.2rem; }\n  .footer { padding: 1.2rem 1.2rem; }\n  .metrics-section { grid-template-columns: repeat(2,1fr); }\n  .about-right { flex-direction: column; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./css/styles.scss":
/*!*************************!*\
  !*** ./css/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.scss */ "./css/styles.scss");
 // ===== NAV SCROLL -> PILL =====

var header = document.getElementById('header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, {
  passive: true
}); // ===== NAV ACTIVE STATE =====

var sections = Array.from(document.querySelectorAll('section[id]'));

function setActiveNav(id) {
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
  });
}

window.addEventListener('scroll', function () {
  var scrollY = window.scrollY + 120;
  var current = sections[0].id;
  sections.forEach(function (s) {
    if (s.offsetTop <= scrollY) current = s.id;
  });
  setActiveNav(current);
}, {
  passive: true
}); // ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var href = link.getAttribute('href');

    if (href && href.length > 1) {
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}); // ===== PROJECT ACCORDION (removed - now hover cards) =====
// ===== SCROLL REVEAL =====

var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var delay = parseInt(entry.target.dataset.delay) || 0;
      setTimeout(function () {
        return entry.target.classList.add('scrolled');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '-40px 0px'
});
['.exp-card', '.proj-card', '.about-card', '.metric', '.skill-group'].forEach(function (sel) {
  document.querySelectorAll(sel).forEach(function (el, i) {
    el.dataset.delay = i * 80;
    revealObserver.observe(el);
  });
}); // ===== COUNTER ANIMATION =====

function animateCounter(el) {
  var target = parseInt(el.dataset.target, 10);
  var suffix = el.dataset.suffix || '';
  var steps = 55;
  var interval = 1300 / steps;
  var step = 0;
  var timer = setInterval(function () {
    step++;
    var eased = 1 - Math.pow(1 - step / steps, 3);
    el.textContent = Math.round(target * eased) + suffix;

    if (step >= steps) {
      el.textContent = target + suffix;
      clearInterval(timer);
    }
  }, interval);
}

var counterObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.6
});
document.querySelectorAll('.metric-value[data-target]').forEach(function (el) {
  return counterObserver.observe(el);
}); // ===== HERO NAME MORPH + OVERLAY FADE =====

var heroHeader = document.getElementById('header');
var heroOverlay = document.querySelector('.hero-overlay');
var heroEl = document.querySelector('.hero');
var nameWrap = document.querySelector('.hero-name-wrap');
var nameFirst = document.querySelector('.hero-name-first');
var nameFirstFinal = document.querySelector('.hero-name-first-final');
var nameLast = document.querySelector('.hero-name-last');
var heroTagline = document.querySelector('.hero-tagline');
var heroResume = document.querySelector('.hero-resume');
var heroMarquee = document.querySelector('.hero-marquee');
var scrollHint = document.getElementById('scroll-hint');
var START_SCALE = 5.5;
var FINAL_LEFT = 32;
var FINAL_BOTTOM = 200; // clears marquee (~50px) + both name lines

var computedMobileScale = null;
var botGreeted = false; // Hide everything except the name at start

if (heroHeader) {
  heroHeader.style.opacity = '0';
  heroHeader.style.transition = 'none';
}

if (heroTagline) heroTagline.style.opacity = '0';
if (heroResume) heroResume.style.opacity = '0';
if (heroMarquee) heroMarquee.style.opacity = '0';

if (chatWidget) {
  chatWidget.style.opacity = '0';
  chatWidget.style.pointerEvents = 'none';
}

function updateHeroScroll() {
  if (!heroEl || !nameFirst) return;
  var scrollable = heroEl.offsetHeight - window.innerHeight;
  var deadZone = 0.38;
  var pRaw = Math.min(window.scrollY / scrollable, 1);
  var p = Math.min(pRaw / (1 - deadZone), 1); // Auto-greet when dead zone starts

  if (!botGreeted && pRaw >= 1 - deadZone) {
    botGreeted = true;
    var isMobileGreet = window.innerWidth < 768;
    setTimeout(function () {
      if (isMobileGreet) {
        // Mobile: show bubble for 3 seconds, then "Ask me anything" label
        var bubble = document.getElementById('chat-bubble');

        if (bubble) {
          bubble.classList.add('visible');
          setTimeout(function () {
            bubble.classList.remove('visible'); // After bubble fades, show the label

            setTimeout(function () {
              if (chatLabel && !chatWidget.classList.contains('open')) {
                chatLabel.classList.add('active');
                setTimeout(function () {
                  chatLabel.classList.remove('active');
                }, 4000);
              }
            }, 400);
          }, 3000);
        }
      } else {
        // Desktop: open panel with message, auto-close after 3s if untouched
        if (!chatWidget.classList.contains('open')) {
          chatWidget.classList.add('open');
          setTimeout(function () {
            addMsg("Psst - yes, you. I know things about Malhar that even his mom doesn't. Ask me anything.", 'bot');
            var autoCloseTimer = setTimeout(function () {
              var userHasTyped = chatInput && chatInput.value.trim().length > 0;
              var userHasSent = chatMessages && chatMessages.querySelectorAll('.chat-msg.user').length > 0;

              if (!userHasTyped && !userHasSent) {
                chatWidget.classList.remove('open');
              }
            }, 3000);

            if (chatInput) {
              chatInput.addEventListener('input', function () {
                clearTimeout(autoCloseTimer);
              }, {
                once: true
              });
            }
          }, 300);
        }
      }
    }, 700);
  }

  var e = Math.pow(p, 0.78); // Mobile-aware constants

  var isMobile = window.innerWidth < 768;
  var startScale = computedMobileScale || (isMobile ? 2.2 : START_SCALE);
  var finalLeft = isMobile ? 20 : FINAL_LEFT;
  var finalBottom = isMobile ? 140 : FINAL_BOTTOM; // Overlay: solid black -> transparent

  if (heroOverlay) {
    heroOverlay.style.opacity = Math.max(0, 1 - Math.pow(p, 0.5));
  } // Photo zoom: starts 1.15x, pulls back to 1.0 as overlay fades


  var heroPhoto = document.querySelector('.hero-photo');

  if (heroPhoto) {
    var photoScale = 1.15 - 0.15 * Math.min(p / 0.7, 1);
    heroPhoto.style.transform = 'scale(' + photoScale + ')';
  } // Name morph — transform-origin: 0 0, position via translate


  var nameW = nameFirst.offsetWidth;
  var nameH = nameFirst.offsetHeight;
  var scale = 1 + (startScale - 1) * (1 - e);
  var xFinal = finalLeft;
  var yFinal = window.innerHeight - finalBottom - nameH;
  var xStart = window.innerWidth / 2 - nameW * startScale / 2;
  var yStart = window.innerHeight * 0.43 - nameH * startScale / 2;
  var tx = xStart + (xFinal - xStart) * e;
  var ty = yStart + (yFinal - yStart) * e;
  nameWrap.style.transformOrigin = '0 0';
  nameWrap.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) scale(' + scale + ')'; // Last name fades in after 72% scroll

  if (nameLast) {
    nameLast.style.opacity = Math.max(0, (p - 0.72) / 0.28);
  } // First name: cross-fade MALHAR->Malhar only in the last 15% when text is already small


  var crossFade = Math.max(0, (p - 0.85) / 0.15);
  if (nameFirst) nameFirst.style.opacity = 1 - crossFade;
  if (nameFirstFinal) nameFirstFinal.style.opacity = crossFade; // UI elements fade in after 45% scroll

  var uiFade = Math.max(0, (p - 0.45) / 0.45);
  if (heroHeader) heroHeader.style.opacity = uiFade;
  if (heroTagline) heroTagline.style.opacity = uiFade;
  if (heroResume) heroResume.style.opacity = uiFade;
  if (heroMarquee) heroMarquee.style.opacity = uiFade;

  if (chatWidget) {
    chatWidget.style.opacity = uiFade;
    chatWidget.style.pointerEvents = uiFade > 0 ? 'all' : 'none';
  } // Scroll hint fades out as soon as user starts scrolling


  if (scrollHint) {
    scrollHint.style.opacity = Math.max(0, 1 - p / 0.12);
  } // On mobile, suppress the scroll-triggered label — bubble handles it instead


  if (uiFade > 0.1 && !chatLabelActivated && chatLabel) {
    chatLabelActivated = true;

    if (window.innerWidth >= 768) {
      chatLabel.classList.add('active');
      setTimeout(function () {
        chatLabel.classList.remove('active');
      }, 5000);
    }
  }
}

window.addEventListener('scroll', updateHeroScroll, {
  passive: true
}); // Wait until the name element actually has layout dimensions before applying initial transform

function computeMobileScale() {
  if (nameFirst && nameFirst.offsetWidth > 0) {
    computedMobileScale = Math.min(window.innerWidth * 0.92 / nameFirst.offsetWidth, START_SCALE);
  }
}

function initHeroWhenReady() {
  if (!nameFirst || nameFirst.offsetWidth === 0) {
    requestAnimationFrame(initHeroWhenReady);
    return;
  }

  computeMobileScale();
  updateHeroScroll();
}

document.fonts.ready.then(function () {
  requestAnimationFrame(initHeroWhenReady);
});
window.addEventListener('load', function () {
  requestAnimationFrame(initHeroWhenReady);
}); // Recompute on resize / orientation change

window.addEventListener('resize', function () {
  computedMobileScale = null;
  computeMobileScale();
  updateHeroScroll();
}); // ===== SCROLL HINT TEXT =====

var scrollHintText = document.querySelector('.scroll-hint-text');

if (scrollHintText && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
  scrollHintText.textContent = 'swipe up';
} // ===== MOBILE CHAT BUBBLE =====


var chatBubble = document.getElementById('chat-bubble');

if (chatBubble) {
  chatBubble.addEventListener('click', function () {
    chatBubble.classList.remove('visible');

    if (chatWidget && !chatWidget.classList.contains('open')) {
      chatWidget.classList.add('open');
      setTimeout(function () {
        addMsg("Psst - yes, you. I know things about Malhar that even his mom doesn't. Ask me anything.", 'bot');
      }, 300);
    }
  });
} // ===== MOBILE NAV =====


var navHamburger = document.getElementById('nav-hamburger');
var mobileNav = document.getElementById('mobile-nav');
var mobileNavClose = document.getElementById('mobile-nav-close');

function hideChatForNav() {
  var cw = document.getElementById('chat-widget');
  if (cw) cw.style.display = 'none';
}

function showChatForNav() {
  var cw = document.getElementById('chat-widget');
  if (cw) cw.style.display = '';
}

if (navHamburger) {
  navHamburger.addEventListener('click', function () {
    mobileNav.classList.add('open');
    hideChatForNav();
  });
}

if (mobileNavClose) {
  mobileNavClose.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    showChatForNav();
  });
}

if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      showChatForNav();
    });
  });
} // ===== TAP TO FLIP (cards — mobile only) =====


var flipCards = Array.from(document.querySelectorAll('.exp-card, .proj-card'));
flipCards.forEach(function (card) {
  card.addEventListener('click', function () {
    if (window.innerWidth >= 768) return; // desktop uses CSS hover

    var isTapped = card.classList.contains('tapped');
    flipCards.forEach(function (c) {
      c.classList.remove('tapped');
    });
    if (!isTapped) card.classList.add('tapped');
  });
}); // ===== FOOTER YEAR =====

var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear(); // ===== CHAT WIDGET =====

var greetings = ['hi', 'hello', 'hey', 'yo', 'sup', 'hiya', 'howdy', 'greetings', 'what\'s up', 'whats up'];
var greetingReplies = ["Hey — I'm Mal, Malhar's AI. Ask me about his experience, projects, or skills.", "Hi. I'm basically Malhar's biggest fan in AI form. What do you want to know about him?", "Hey — I live on this portfolio and know everything about Malhar. What are you curious about?"];

function isGreeting(text) {
  return greetings.includes(text.toLowerCase().trim().replace(/[!?.]/g, ''));
}

var chatWidget = document.getElementById('chat-widget');
var chatLabel = document.getElementById('chat-label');
var chatLabelActivated = false;
var chatToggle = document.getElementById('chat-toggle');
var chatPanel = document.getElementById('chat-panel');
var chatInput = document.getElementById('chat-input');
var chatSend = document.getElementById('chat-send');
var chatMessages = document.getElementById('chat-messages');
var chatFirstMsg = true;
var chatHistory = [];
chatSend.addEventListener('click', sendChat);
chatInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') sendChat();
});
chatToggle.addEventListener('click', function () {
  chatWidget.classList.toggle('open');

  if (chatWidget.classList.contains('open')) {
    chatInput.focus();

    if (chatMessages.children.length === 0) {
      setTimeout(function () {
        addMsg("Psst - yes, you. I know things about Malhar that even his mom doesn't. Ask me anything.", 'bot');
      }, 300);
    }
  }
});

function addMsg(text, type) {
  var div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.innerHTML = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/&lt;b&gt;(.+?)&lt;\/b&gt;/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function sendChat() {
  var msg = chatInput.value.trim();
  if (!msg) return;
  chatInput.value = '';
  addMsg(msg, 'user');

  if (isGreeting(msg)) {
    setTimeout(function () {
      addMsg(greetingReplies[Math.floor(Math.random() * greetingReplies.length)], 'bot');
    }, 400);
    return;
  }

  if (chatFirstMsg) {
    chatFirstMsg = false;
    addMsg('Server waking up — first response may take ~50s', 'system');
  }

  var typing = addMsg('···', 'typing');
  fetch('https://rag-powered-portfolio.onrender.com/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: msg,
      history: chatHistory.slice(-8)
    })
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    typing.remove();
    chatHistory.push({
      role: 'user',
      content: msg
    });
    chatHistory.push({
      role: 'assistant',
      content: data.response
    });
    if (chatHistory.length > 16) chatHistory = chatHistory.slice(-16);
    addMsg(data.response, 'bot');
  })["catch"](function (err) {
    typing.remove();
    addMsg('Something went wrong — please try again!', 'system');
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map