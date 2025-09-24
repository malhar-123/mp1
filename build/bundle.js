/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/styles.scss ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/hero.jpg */ "./assets/hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: #f8fafc;
  background: #0b1020;
}

img, video {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1100px, 92vw);
  margin-inline: auto;
}

.stripe {
  padding: 6rem 0;
}

h1, h2, h3 {
  margin: 0 0 1rem;
}

p {
  color: #64748b;
  line-height: 1.7;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: saturate(110%) blur(6px);
}

.nav {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.2rem;
  transition: padding 0.25s ease;
  background: rgba(5, 9, 20, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.nav .logo {
  font-weight: 800;
  color: #f8fafc;
  text-decoration: none;
  font-size: clamp(\$min, calc(1.2rem + 1vw), \$max);
}
.nav .nav-links {
  justify-self: end;
  display: flex;
  gap: 1.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav .nav-links a {
  color: #f8fafc;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s, transform 0.2s;
}
.nav .nav-links a.active {
  opacity: 1;
  border-bottom: 2px solid #2f6df6;
}
.nav .nav-links a:hover {
  opacity: 1;
  transform: translateY(-1px);
}
.nav.compact {
  padding: 0.5rem 1.2rem;
}

.reading-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 0%;
  background: linear-gradient(90deg, #2f6df6, #78a0f9);
  transition: width 0.1s linear;
}

.hero {
  min-height: 92vh;
  display: grid;
  place-items: center;
  text-align: center;
  background: radial-gradient(1200px 600px at 70% 20%, rgba(47, 109, 246, 0.15), transparent);
}
.hero.has-fixed-bg {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.hero .hero__content {
  background: rgba(0, 0, 0, 0.45);
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  animation: fadeInUp 0.7s ease both;
}
.hero .hero__title {
  font-size: clamp(\$min, calc(2rem + 1vw), \$max);
  font-weight: 800;
}
.hero .hero__subtitle {
  font-size: clamp(\$min, calc(1rem + 1vw), \$max);
  margin-bottom: 1.2rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.btn {
  display: inline-block;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  background: #2f6df6;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(47, 109, 246, 0.3);
}

.btn-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.portrait {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.badges {
  display: grid;
  gap: 0.5rem;
  padding: 0;
  list-style: none;
}
.badges li {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
}
.badges i {
  margin-right: 0.5rem;
  color: #2f6df6;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.2rem;
  transition: transform 0.2s ease, border-color 0.2s;
}
.card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.16);
}

.link-as-btn {
  background: none;
  color: #2f6df6;
  border: 0;
  padding: 0.4rem 0;
  cursor: pointer;
}

.modal {
  position: fixed;
  inset: 0;
  display: none;
}

.modal[aria-hidden=false] {
  display: block;
}

.modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.modal__dialog {
  position: absolute;
  inset: 0;
  margin: auto;
  width: min(680px, 92vw);
  background: #0d1328;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 1.2rem;
  top: 10%;
  animation: fadeInUp 0.25s ease both;
}

.modal__close {
  position: absolute;
  right: 0.8rem;
  top: 0.6rem;
  font-size: 1.6rem;
  background: none;
  color: #f8fafc;
  border: 0;
  cursor: pointer;
}

.carousel {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.caro-track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  transition: transform 0.35s ease;
}

.caro-slide {
  position: relative;
}

.caro-slide img {
  width: 100%;
  height: auto;
  display: block;
}

.caro-slide figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.6rem 0.9rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.caro-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #f8fafc;
  padding: 0.6rem 0.8rem;
  border-radius: 50%;
  cursor: pointer;
}

.caro-btn.prev {
  left: 0.6rem;
}

.caro-btn.next {
  right: 0.6rem;
}

.video video {
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.center {
  text-align: center;
  display: grid;
  place-items: center;
  gap: 0.6rem;
}

.social {
  display: flex;
  gap: 1rem;
  font-size: 1.3rem;
}
.social a {
  color: #f8fafc;
  opacity: 0.8;
}
.social a:hover {
  opacity: 1;
}

.footer {
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: #64748b;
}

@media (max-width: 1024px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }

  .columns {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 720px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`, "",{"version":3,"sources":["webpack://./css/styles.scss"],"names":[],"mappings":"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","sourcesContent":["// ===== Variables & Mixins (SCSS requirement) =====\n$brand: #2f6df6;\n$ink: #0f172a;\n$muted: #64748b;\n$bg: #0b1020;\n$light: #f8fafc;\n$maxw: 1100px;\n\n@mixin container {\n  width: min(#{$maxw}, 92vw);\n  margin-inline: auto;\n}\n\n@mixin fluid-type($min, $max) {\n  font-size: clamp($min, calc(#{$min} + 1vw), $max);\n}\n\n// ===== Base =====\n* { box-sizing: border-box; }\nhtml, body { margin: 0; padding: 0; scroll-behavior: smooth; }\nbody {\n  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;\n  color: $light;\n  background: $bg;\n}\n\nimg, video { max-width: 100%; display: block; }\n\n.container { @include container; }\n\n.stripe { padding: 6rem 0; }\nh1, h2, h3 { margin: 0 0 1rem; }\np { color: $muted; line-height: 1.7; }\n\n// ===== Header / Navbar (Sticky + Resize) =====\n.site-header {\n  position: sticky; top: 0; z-index: 1000;\n  backdrop-filter: saturate(110%) blur(6px);\n}\n\n.nav {\n  position: relative;\n  display: grid; grid-template-columns: auto 1fr; align-items: center;\n  gap: 1rem; padding: 1.2rem 1.2rem;\n  transition: padding 0.25s ease;\n  background: rgba(5, 9, 20, 0.75); border-bottom: 1px solid rgba(255,255,255,0.06);\n\n  .logo { font-weight: 800; color: $light; text-decoration: none; @include fluid-type(1.2rem, 1.6rem); }\n\n  .nav-links {\n    justify-self: end; display: flex; gap: 1.2rem; list-style: none; margin: 0; padding: 0;\n    a { color: $light; text-decoration: none; opacity: 0.8; transition: opacity .2s, transform .2s; }\n    a.active { opacity: 1; border-bottom: 2px solid $brand; }\n    a:hover { opacity: 1; transform: translateY(-1px); }\n  }\n\n  &.compact { padding: 0.5rem 1.2rem; }\n}\n\n// Reading progress bar (position indicator)\n.reading-indicator {\n  position: absolute; left: 0; bottom: 0;\n  height: 3px; width: 0%;\n  background: linear-gradient(90deg, $brand, lighten($brand, 15%));\n  transition: width .1s linear;\n}\n\n// ===== Hero (fixed background + vertical centering + animation) =====\n.hero {\n  min-height: 92vh;\n  display: grid; place-items: center;\n  text-align: center;\n  background: radial-gradient(1200px 600px at 70% 20%, rgba(47,109,246,.15), transparent);\n\n  &.has-fixed-bg {\n    background-image: url('../assets/hero.jpg');\n    background-size: cover;\n    background-attachment: fixed; // requirement\n    background-position: center;\n  }\n\n  .hero__content {\n    background: rgba(0,0,0,0.45);\n    padding: 2rem; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;\n    animation: fadeInUp .7s ease both;\n  }\n\n  .hero__title { @include fluid-type(2rem, 3rem); font-weight: 800; }\n  .hero__subtitle { @include fluid-type(1rem, 1.2rem); margin-bottom: 1.2rem; }\n}\n\n@keyframes fadeInUp {\n  from { opacity: 0; transform: translateY(10px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n// Buttons\n.btn {\n  display: inline-block;\n  padding: .8rem 1.1rem; border-radius: 999px;\n  background: $brand; color: white; text-decoration: none; border: none; cursor: pointer;\n  transition: transform .2s ease, box-shadow .2s ease;\n  &:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(47,109,246,.3); }\n}\n.btn-outline {\n  background: transparent; border: 1px solid rgba(255,255,255,.25);\n}\n\n// ===== About (multi-column) =====\n.columns { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }\n.portrait { border-radius: 16px; border: 1px solid rgba(255,255,255,.1); }\n.badges { display: grid; gap: .5rem; padding: 0; list-style: none;\n  li { background: rgba(255,255,255,.05); padding: .6rem .8rem; border-radius: 10px; }\n  i { margin-right: .5rem; color: $brand; }\n}\n\n// ===== Work (cards + modals) =====\n.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }\n.card {\n  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08); border-radius: 14px;\n  padding: 1.2rem; transition: transform .2s ease, border-color .2s;\n  &:hover { transform: translateY(-3px); border-color: rgba(255,255,255,.16); }\n}\n.link-as-btn { background: none; color: $brand; border: 0; padding: .4rem 0; cursor: pointer; }\n\n.modal { position: fixed; inset: 0; display: none; }\n.modal[aria-hidden=\"false\"] { display: block; }\n.modal__backdrop { position: absolute; inset: 0; background: rgba(0,0,0,.6); }\n.modal__dialog {\n  position: absolute; inset: 0; margin: auto; width: min(680px, 92vw);\n  background: #0d1328; border: 1px solid rgba(255,255,255,.12); border-radius: 16px; padding: 1.2rem;\n  top: 10%; animation: fadeInUp .25s ease both;\n}\n.modal__close { position: absolute; right: .8rem; top: .6rem; font-size: 1.6rem; background: none; color: $light; border: 0; cursor: pointer; }\n\n// ===== Carousel =====\n.carousel { position: relative; overflow: hidden; border-radius: 16px; border: 1px solid rgba(255,255,255,.1); }\n.caro-track { display: grid; grid-auto-flow: column; grid-auto-columns: 100%; transition: transform .35s ease; }\n.caro-slide { position: relative; }\n.caro-slide img { width: 100%; height: auto; display: block; }\n.caro-slide figcaption {\n  position: absolute; left: 0; right: 0; bottom: 0; padding: .6rem .9rem; background: linear-gradient(transparent, rgba(0,0,0,.7));\n}\n.caro-btn {\n  position: absolute; top: 50%; transform: translateY(-50%);\n  background: rgba(0,0,0,.55); border: 1px solid rgba(255,255,255,.15); color: $light; padding: .6rem .8rem; border-radius: 50%;\n  cursor: pointer;\n}\n.caro-btn.prev { left: .6rem; }\n.caro-btn.next { right: .6rem; }\n\n// ===== Video =====\n.video video { width: 100%; border-radius: 16px; border: 1px solid rgba(255,255,255,.1); }\n\n// ===== Contact (centered content) =====\n.center { text-align: center; display: grid; place-items: center; gap: .6rem; }\n.social { display: flex; gap: 1rem; font-size: 1.3rem;\n  a { color: $light; opacity: .8; }\n  a:hover { opacity: 1; }\n}\n\n// ===== Footer =====\n.footer { padding: 2rem 0; border-top: 1px solid rgba(255,255,255,.06); color: $muted; }\n\n// ===== Responsive breakpoints =====\n@media (max-width: 1024px) {\n  .cards { grid-template-columns: 1fr 1fr; }\n  .columns { grid-template-columns: 1fr; }\n}\n@media (max-width: 720px) {\n  .cards { grid-template-columns: 1fr; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

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

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./assets/demo.mp4":
/*!*************************!*\
  !*** ./assets/demo.mp4 ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9668a976fd6de4763e1b.mp4";

/***/ }),

/***/ "./assets/hero.jpg":
/*!*************************!*\
  !*** ./assets/hero.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e52c3c19926ab84cbe7d.jpg";

/***/ }),

/***/ "./assets/portrait.jpg":
/*!*****************************!*\
  !*** ./assets/portrait.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ad73cc6843d9c4c9dac3.jpg";

/***/ }),

/***/ "./assets/slide1.jpg":
/*!***************************!*\
  !*** ./assets/slide1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12f302861d0339a1f821.jpg";

/***/ }),

/***/ "./assets/slide2.jpg":
/*!***************************!*\
  !*** ./assets/slide2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eaa02c675895ca3b56a5.jpg";

/***/ }),

/***/ "./assets/slide3.jpg":
/*!***************************!*\
  !*** ./assets/slide3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2befd7bd1dad66269ece.jpg";

/***/ }),

/***/ "./css/styles.scss":
/*!*************************!*\
  !*** ./css/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/portrait.jpg */ "./assets/portrait.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide1.jpg */ "./assets/slide1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide2.jpg */ "./assets/slide2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide3.jpg */ "./assets/slide3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/demo.mp4 */ "./assets/demo.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./js/index.js */ "./js/index.js?5952"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>Malhar Gudekar · Portfolio</title>\n\n  <!-- Webfont (ok to use) -->\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap\" rel=\"stylesheet\">\n\n  <!-- Font Awesome (allowed as “scalable vector icons through CSS”) -->\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css\" referrerpolicy=\"no-referrer\"/>\n\n  <!--link rel=\"stylesheet\" href=\"./css/styles.css\" /-->\n</head>\n<body>\n\n  <!-- Sticky / Resizing Navbar with Position Indicator -->\n  <header id=\"top\" class=\"site-header\">\n    <nav class=\"nav\" id=\"navbar\">\n      <a class=\"logo\" href=\"#top\">MG</a>\n      <ul class=\"nav-links\" id=\"navLinks\">\n        <li><a href=\"#hero\" data-section=\"hero\">Home</a></li>\n        <li><a href=\"#about\" data-section=\"about\">About</a></li>\n        <li><a href=\"#work\" data-section=\"work\">Work</a></li>\n        <li><a href=\"#gallery\" data-section=\"gallery\">Gallery</a></li>\n        <li><a href=\"#video\" data-section=\"video\">Video</a></li>\n        <li><a href=\"#contact\" data-section=\"contact\">Contact</a></li>\n      </ul>\n      <!-- position indicator bar -->\n      <div class=\"reading-indicator\" id=\"readingIndicator\"></div>\n    </nav>\n  </header>\n\n  <!-- Stripe: Hero (fixed background, vertical centering) -->\n  <section id=\"hero\" class=\"stripe hero has-fixed-bg\" aria-label=\"Intro\">\n    <div class=\"hero__content\">\n      <h1 class=\"hero__title\">Hi, I’m Malhar.</h1>\n      <p class=\"hero__subtitle\">Data · AI · Product. I build secure, human-centered systems.</p>\n      <div class=\"hero__cta\">\n        <a class=\"btn\" href=\"#work\">View Work</a>\n        <button class=\"btn btn-outline\" id=\"openAboutModal\">Quick Bio</button>\n      </div>\n    </div>\n  </section>\n\n  <!-- Modal (About quick bio) -->\n  <div class=\"modal\" id=\"aboutModal\" aria-hidden=\"true\" role=\"dialog\" aria-labelledby=\"aboutTitle\">\n    <div class=\"modal__backdrop\" data-close></div>\n    <div class=\"modal__dialog\" role=\"document\">\n      <button class=\"modal__close\" aria-label=\"Close\" data-close>&times;</button>\n      <h2 id=\"aboutTitle\">About Me (Quick)</h2>\n      <p>I’m a MSIM student at UIUC focused on data engineering, security, and AI-powered products.</p>\n      <p>Recent: Developer Productivity @ Synchrony, CHI Research Assistant (misinfo detection), SeeMe (GenAI art marketplace).</p>\n    </div>\n  </div>\n\n  <!-- Stripe: About (multi-column layout) -->\n  <section id=\"about\" class=\"stripe about\">\n    <div class=\"container columns\">\n      <div class=\"col\">\n        <img class=\"portrait\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Portrait of Malhar\">\n      </div>\n      <div class=\"col\">\n        <h2>About</h2>\n        <p>I design and ship data/AI features with measurable impact. Interests: trustworthy AI, secure pipelines, clean UX.</p>\n        <ul class=\"badges\">\n          <li><i class=\"fa-solid fa-shield\"></i> BASILISK Security Hub</li>\n          <li><i class=\"fa-solid fa-database\"></i> AWS + Spark + ETL</li>\n          <li><i class=\"fa-solid fa-wand-magic-sparkles\"></i> GenAI UX</li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n  <!-- Stripe: Work (cards) -->\n  <section id=\"work\" class=\"stripe work\">\n    <div class=\"container\">\n      <h2>Selected Work</h2>\n      <div class=\"cards\">\n        <article class=\"card\">\n          <h3>CHI – Infodemic AI</h3>\n          <p>Kafka → Neo4j → EKS pipeline for real-time health misinfo detection.</p>\n          <button class=\"link-as-btn\" data-open=\"#details-chi\">Details</button>\n        </article>\n        <article class=\"card\">\n          <h3>SeeMe – Collections</h3>\n          <p>Next.js feature set: collections, AI descriptions, Pinecone embeddings.</p>\n          <button class=\"link-as-btn\" data-open=\"#details-seeme\">Details</button>\n        </article>\n        <article class=\"card\">\n          <h3>BASILISK – Security Hub</h3>\n          <p>Hybrid crypto tooling for integrity, auth, and non-repudiation.</p>\n          <button class=\"link-as-btn\" data-open=\"#details-basilisk\">Details</button>\n        </article>\n      </div>\n    </div>\n\n    <!-- Hidden modals per project -->\n    <div class=\"modal\" id=\"details-chi\" aria-hidden=\"true\" role=\"dialog\">\n      <div class=\"modal__backdrop\" data-close></div>\n      <div class=\"modal__dialog\">\n        <button class=\"modal__close\" aria-label=\"Close\" data-close>&times;</button>\n        <h3>CHI – Infodemic AI</h3>\n        <p>NLP models on TikTok vaccine content; GDPR/WHO compliant deployment.</p>\n      </div>\n    </div>\n    <div class=\"modal\" id=\"details-seeme\" aria-hidden=\"true\" role=\"dialog\">\n      <div class=\"modal__backdrop\" data-close></div>\n      <div class=\"modal__dialog\">\n        <button class=\"modal__close\" aria-label=\"Close\" data-close>&times;</button>\n        <h3>SeeMe – Collections</h3>\n        <p>Slug routing, collection covers, server actions, Postgres, Pinecone.</p>\n      </div>\n    </div>\n    <div class=\"modal\" id=\"details-basilisk\" aria-hidden=\"true\" role=\"dialog\">\n      <div class=\"modal__backdrop\" data-close></div>\n      <div class=\"modal__dialog\">\n        <button class=\"modal__close\" aria-label=\"Close\" data-close>&times;</button>\n        <h3>BASILISK – Security Hub</h3>\n        <p>Hybrid cryptography, automated keygen, perf-tuned Python pipelines.</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- Stripe: Gallery (Carousel) -->\n  <section id=\"gallery\" class=\"stripe gallery\">\n    <div class=\"container\">\n      <h2>Gallery</h2>\n      <div class=\"carousel\" aria-roledescription=\"carousel\" aria-label=\"Project screenshots\">\n        <button class=\"caro-btn prev\" aria-label=\"Previous slide\" data-caro-prev><i class=\"fa-solid fa-chevron-left\"></i></button>\n        <div class=\"caro-track\" id=\"caroTrack\">\n          <figure class=\"caro-slide current\" aria-roledescription=\"slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"ETL dashboard\">\n            <figcaption>ETL dashboard</figcaption>\n          </figure>\n          <figure class=\"caro-slide\" aria-roledescription=\"slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Marketplace UI\">\n            <figcaption>Marketplace UI</figcaption>\n          </figure>\n          <figure class=\"caro-slide\" aria-roledescription=\"slide\">\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Security app\">\n            <figcaption>Security app</figcaption>\n          </figure>\n        </div>\n        <button class=\"caro-btn next\" aria-label=\"Next slide\" data-caro-next><i class=\"fa-solid fa-chevron-right\"></i></button>\n      </div>\n    </div>\n  </section>\n\n  <!-- Stripe: Video -->\n  <section id=\"video\" class=\"stripe video\">\n    <div class=\"container\">\n      <h2>Demo Video</h2>\n      <video controls preload=\"metadata\" poster=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\n        <source src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n      </video>\n    </div>\n  </section>\n\n  <!-- Stripe: Contact (centered) -->\n  <section id=\"contact\" class=\"stripe contact\">\n    <div class=\"container center\">\n      <h2>Let’s connect</h2>\n      <p>Reach out for collaborations or opportunities.</p>\n      <div class=\"social\">\n        <a aria-label=\"GitHub\" href=\"#\" target=\"_blank\"><i class=\"fa-brands fa-github\"></i></a>\n        <a aria-label=\"LinkedIn\" href=\"#\" target=\"_blank\"><i class=\"fa-brands fa-linkedin\"></i></a>\n        <a aria-label=\"Email\" href=\"mailto:you@example.com\"><i class=\"fa-solid fa-envelope\"></i></a>\n      </div>\n    </div>\n  </section>\n\n  <footer class=\"stripe footer\">\n    <div class=\"container\">\n      <small>&copy; <span id=\"year\"></span> Malhar Gudekar</small>\n    </div>\n  </footer>\n\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" defer><" + "/script>\n</body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/index.js?5952":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "97f91119318d54bdee1b.js";

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

/* Your JS here. */
console.log('Hello World!');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/styles.scss */ "./css/styles.scss");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./js/main.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_2__);
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
 // Stylesheets

 // Scripts


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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map