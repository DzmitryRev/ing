/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
// import Swiper from "swiper";
 // let burger = document.querySelector(".burger");
// let list = document.querySelector(".nav-list");
// burger.addEventListener("click", () => {
//   list.classList.toggle("open");
//   list.classList.contains("open")
//     ? burger.classList.add("rotated")
//     : burger.classList.remove("rotated");
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  //   centeredSlides: true,
  freeMode: true,
  spaceBetween: 30,
  mousewheel: {
    releaseOnEdges: true
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: true,
    dragClass: "swiper-scrollbar-drag"
  }
});
var wrapper = document.querySelector(".wrapper");
var swiperMargin = document.querySelector(".swiper-ml");
swiperMargin.style.marginLeft = 20 + wrapper.offsetLeft + "px";
window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth < 468) {
    swiperMargin.style.marginLeft = 5 + wrapper.offsetLeft + "px";
  } else {
    swiperMargin.style.marginLeft = 20 + wrapper.offsetLeft + "px";
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map