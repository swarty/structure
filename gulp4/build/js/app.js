/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _test = __webpack_require__(/*! ./modules/test */ \"./modules/test.js\");\n\nvar _test2 = _interopRequireDefault(_test);\n\nvar _test3 = __webpack_require__(/*! ./modules/test2 */ \"./modules/test2.js\");\n\n__webpack_require__(/*! ./modules/vue */ \"./modules/vue.js\");\n\n__webpack_require__(/*! ./lib/lazy-load */ \"./lib/lazy-load.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction onDomLoad() {\n\tconsole.log((0, _test2.default)());\n\tconsole.log(new _test3.One(), new _test3.Two());\n}\n\ndocument.addEventListener('DOMContentLoaded', onDomLoad);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXN0IGZyb20gJy4vbW9kdWxlcy90ZXN0JztcclxuaW1wb3J0IHtPbmUsIFR3b30gZnJvbSAnLi9tb2R1bGVzL3Rlc3QyJztcclxuaW1wb3J0ICcuL21vZHVsZXMvdnVlJztcclxuXHJcblxyXG5pbXBvcnQgJy4vbGliL2xhenktbG9hZCc7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvbkRvbUxvYWQoKSB7XHJcblx0Y29uc29sZS5sb2codGVzdCgpKTtcclxuXHRjb25zb2xlLmxvZyhuZXcgT25lKCksIG5ldyBUd28oKSlcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG9uRG9tTG9hZCk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/lazy-load.js":
/*!**************************!*\
  !*** ./lib/lazy-load.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// lazyload\nfunction lazyLoad() {\n\tvar body = document.querySelector('body');\n\tvar scr = document.createElement(\"script\");\n\tvar version = !(\"IntersectionObserver\" in window) ? \"8.16.0\" : \"10.19.0\";\n\tscr.src = \"https://cdn.jsdelivr.net/npm/vanilla-lazyload@\" + version + \"/dist/lazyload.min.js\";\n\tbody.appendChild(scr);\n\n\tfunction onLoad() {\n\t\twindow.lazy = new LazyLoad({\n\t\t\telements_selector: \".lazy\",\n\t\t\tload_delay: 0\n\t\t});\n\t}\n\n\tscr.addEventListener('load', onLoad);\n}\n\nlazyLoad();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbGF6eS1sb2FkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9saWIvbGF6eS1sb2FkLmpzPzg5NTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGF6eWxvYWRcclxuZnVuY3Rpb24gbGF6eUxvYWQoKXtcclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cdGNvbnN0IHNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0Y29uc3QgdmVyc2lvbiA9ICEoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykgPyBcIjguMTYuMFwiIDogXCIxMC4xOS4wXCI7XHJcblx0c2NyLnNyYyA9IGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3ZhbmlsbGEtbGF6eWxvYWRAJHsgIHZlcnNpb24gIH0vZGlzdC9sYXp5bG9hZC5taW4uanNgO1xyXG5cdGJvZHkuYXBwZW5kQ2hpbGQoc2NyKTtcclxuXHJcblx0ZnVuY3Rpb24gb25Mb2FkKCkge1xyXG5cdFx0d2luZG93LmxhenkgPSBuZXcgTGF6eUxvYWQoe1xyXG5cdFx0XHRlbGVtZW50c19zZWxlY3RvcjogXCIubGF6eVwiLFxyXG5cdFx0XHRsb2FkX2RlbGF5OiAwXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNjci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcclxufVxyXG5cclxubGF6eUxvYWQoKTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/lazy-load.js\n");

/***/ }),

/***/ "./modules/test.js":
/*!*************************!*\
  !*** ./modules/test.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = test;\nfunction test() {\n\treturn true;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3Rlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvdGVzdC5qcz80ZjZjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3QoKSB7XHJcblx0cmV0dXJuIHRydWU7XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/test.js\n");

/***/ }),

/***/ "./modules/test2.js":
/*!**************************!*\
  !*** ./modules/test2.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar One = exports.One = function One() {\n\t_classCallCheck(this, One);\n\n\tthis.str = 'test2';\n\tconsole.log(this.str);\n};\n\nvar Two = exports.Two = function Two() {\n\t_classCallCheck(this, Two);\n\n\tthis.str = 'test3';\n\tconsole.log(this.str);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3Rlc3QyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9tb2R1bGVzL3Rlc3QyLmpzP2Q3MGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE9uZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnN0ciA9ICd0ZXN0Mic7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0cilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUd28ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5zdHIgPSAndGVzdDMnO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5zdHIpO1xyXG5cdH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/test2.js\n");

/***/ }),

/***/ "./modules/vue.js":
/*!************************!*\
  !*** ./modules/vue.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nVue.config.devtools = true;\n\nnew Vue({\n  // delimiters: ['${', '}'],\n  el: '#lal',\n  data: {\n    message: 'Hello Vue!'\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3Z1ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy92dWUuanM/YzhhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJWdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZTtcclxuXHJcbm5ldyBWdWUoe1xyXG5cdC8vIGRlbGltaXRlcnM6IFsnJHsnLCAnfSddLFxyXG4gIGVsOiAnI2xhbCcsXHJcbiAgZGF0YToge1xyXG4gICAgbWVzc2FnZTogJ0hlbGxvIFZ1ZSEnXHJcbiAgfVxyXG59KSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/vue.js\n");

/***/ })

/******/ });