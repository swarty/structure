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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!****************************************************************************************************!*\
  !*** /Users/dmytro/Documents/work/own/structure/new/node_modules/@babel/runtime/helpers/typeof.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**************************************************************************************!*\
  !*** /Users/dmytro/Documents/work/own/structure/new/node_modules/process/browser.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!************************************************************************************************!*\
  !*** /Users/dmytro/Documents/work/own/structure/new/node_modules/setimmediate/setImmediate.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/*!*********************************************************************************************!*\
  !*** /Users/dmytro/Documents/work/own/structure/new/node_modules/timers-browserify/main.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lazy_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lazy-load */ "./lib/lazy-load.js");
/* harmony import */ var _lib_lazy_load__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_lazy_load__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/svg4everybody */ "./lib/svg4everybody.js");
/* harmony import */ var _lib_foreEach_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/foreEach-polyfill */ "./lib/foreEach-polyfill.js");
/* harmony import */ var _lib_foreEach_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_foreEach_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_arrayMethods_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/arrayMethods-polyfill */ "./lib/arrayMethods-polyfill.js");
/* harmony import */ var _lib_arrayMethods_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_arrayMethods_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_promise_polyfill_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/promise-polyfill.min */ "./lib/promise-polyfill.min.js");
/* harmony import */ var _lib_fetch_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/fetch-polyfill */ "./lib/fetch-polyfill.js");
/* harmony import */ var _lib_fetch_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_fetch_polyfill__WEBPACK_IMPORTED_MODULE_5__);
// libs





 // modules
// import PhoneMask from './modules/phoneInput'
// import accessibleLables from './modules/labels'
// import './modules/datefns'
// import PlayVideoButtons from './modules/playVideoButtons'
// import initMap from './modules/map'
// import Forms from './modules/form/main'
// import DynamicContent from './modules/dynamicContent/main'
// import Anchors from './modules/anchors/main'
// import activeMenuElements from './modules/activeMenuElement'
// import aosAnimation from './modules/aosAnimation'

function onDomLoad() {// aosAnimation();
  // activeMenuElements();
  // initMap();
  // new Forms();
  // new DynamicContent();
  // new Anchors();
  // alert('lal')
  // const a = 'lal';
}

document.addEventListener('DOMContentLoaded', onDomLoad);

/***/ }),

/***/ "./lib/arrayMethods-polyfill.js":
/*!**************************************!*\
  !*** ./lib/arrayMethods-polyfill.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function');
      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


      var thisArg = arguments[1]; // 5. Let k be 0.

      var k = 0; // 6. Repeat, while k < len

      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        } // e. Increase k by 1.


        k++;
      } // 7. Return undefined.


      return undefined;
    },
    configurable: true,
    writable: true
  });
}

if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
}
/* eslint-enable */

/***/ }),

/***/ "./lib/fetch-polyfill.js":
/*!*******************************!*\
  !*** ./lib/fetch-polyfill.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
self.fetch || (self.fetch = function (e, n) {
  return n = n || {}, new Promise(function (t, s) {
    var r = new XMLHttpRequest(),
        o = [],
        u = [],
        i = {},
        a = function a() {
      return {
        ok: 2 == (r.status / 100 | 0),
        statusText: r.statusText,
        status: r.status,
        url: r.responseURL,
        text: function text() {
          return Promise.resolve(r.responseText);
        },
        json: function json() {
          return Promise.resolve(JSON.parse(r.responseText));
        },
        blob: function blob() {
          return Promise.resolve(new Blob([r.response]));
        },
        clone: a,
        headers: {
          keys: function keys() {
            return o;
          },
          entries: function entries() {
            return u;
          },
          get: function get(e) {
            return i[e.toLowerCase()];
          },
          has: function has(e) {
            return e.toLowerCase() in i;
          }
        }
      };
    };

    for (var c in r.open(n.method || "get", e, !0), r.onload = function () {
      r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
        o.push(n = n.toLowerCase()), u.push([n, t]), i[n] = i[n] ? i[n] + "," + t : t;
      }), t(a());
    }, r.onerror = s, r.withCredentials = "include" == n.credentials, n.headers) {
      r.setRequestHeader(c, n.headers[c]);
    }

    r.send(n.body || null);
  });
});
/* eslint-enable */

/***/ }),

/***/ "./lib/foreEach-polyfill.js":
/*!**********************************!*\
  !*** ./lib/foreEach-polyfill.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback
  /*, thisArg*/
  ) {
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    } // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.


    var O = Object(this); // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).

    var len = O.length >>> 0; // 4. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    } // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.


    if (arguments.length > 1) {
      T = arguments[1];
    } // 6. Let k be 0.


    k = 0; // 7. Repeat while k < len.

    while (k < len) {
      var kValue; // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then

      if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k]; // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.

        callback.call(T, kValue, k, O);
      } // d. Increase k by 1.


      k++;
    } // 8. return undefined.

  };
} // nodeList foreach polyfill


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
/* eslint-enable */

/***/ }),

/***/ "./lib/lazy-load.js":
/*!**************************!*\
  !*** ./lib/lazy-load.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// lazyload
function lazyLoad() {
  var body = document.querySelector('body');
  var scr = document.createElement("script");
  var version = !("IntersectionObserver" in window) ? "8.16.0" : "10.19.0";
  scr.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@".concat(version, "/dist/lazyload.min.js");
  body.appendChild(scr);

  function onLoad() {
    /* eslint-disable */
    window.lazy = new LazyLoad({
      elements_selector: ".lazy",
      load_delay: 0,
      threshold: 300
    });
    /* eslint-enable */
  }

  scr.addEventListener('load', onLoad);
}

lazyLoad();

/***/ }),

/***/ "./lib/promise-polyfill.min.js":
/*!*************************************!*\
  !*** ./lib/promise-polyfill.min.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate, global) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable */
!function (e, n) {
  "object" == (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) && "undefined" != typeof module ? n() : "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js") ? define(n) : n();
}(0, function () {
  "use strict";

  function e(e) {
    var n = this.constructor;
    return this.then(function (t) {
      return n.resolve(e()).then(function () {
        return t;
      });
    }, function (t) {
      return n.resolve(e()).then(function () {
        return n.reject(t);
      });
    });
  }

  function n() {}

  function t(e) {
    if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], u(e, this);
  }

  function o(e, n) {
    for (; 3 === e._state;) {
      e = e._value;
    }

    0 !== e._state ? (e._handled = !0, t._immediateFn(function () {
      var t = 1 === e._state ? n.onFulfilled : n.onRejected;

      if (null !== t) {
        var o;

        try {
          o = t(e._value);
        } catch (f) {
          return void i(n.promise, f);
        }

        r(n.promise, o);
      } else (1 === e._state ? r : i)(n.promise, e._value);
    })) : e._deferreds.push(n);
  }

  function r(e, n) {
    try {
      if (n === e) throw new TypeError("A promise cannot be resolved with itself.");

      if (n && ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(n) || "function" == typeof n)) {
        var o = n.then;
        if (n instanceof t) return e._state = 3, e._value = n, void f(e);
        if ("function" == typeof o) return void u(function (e, n) {
          return function () {
            e.apply(n, arguments);
          };
        }(o, n), e);
      }

      e._state = 1, e._value = n, f(e);
    } catch (r) {
      i(e, r);
    }
  }

  function i(e, n) {
    e._state = 2, e._value = n, f(e);
  }

  function f(e) {
    2 === e._state && 0 === e._deferreds.length && t._immediateFn(function () {
      e._handled || t._unhandledRejectionFn(e._value);
    });

    for (var n = 0, r = e._deferreds.length; r > n; n++) {
      o(e, e._deferreds[n]);
    }

    e._deferreds = null;
  }

  function u(e, n) {
    var t = !1;

    try {
      e(function (e) {
        t || (t = !0, r(n, e));
      }, function (e) {
        t || (t = !0, i(n, e));
      });
    } catch (o) {
      if (t) return;
      t = !0, i(n, o);
    }
  }

  var c = setTimeout;
  t.prototype["catch"] = function (e) {
    return this.then(null, e);
  }, t.prototype.then = function (e, t) {
    var r = new this.constructor(n);
    return o(this, new function (e, n, t) {
      this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t;
    }(e, t, r)), r;
  }, t.prototype["finally"] = e, t.all = function (e) {
    return new t(function (n, t) {
      function o(e, f) {
        try {
          if (f && ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(f) || "function" == typeof f)) {
            var u = f.then;
            if ("function" == typeof u) return void u.call(f, function (n) {
              o(e, n);
            }, t);
          }

          r[e] = f, 0 == --i && n(r);
        } catch (c) {
          t(c);
        }
      }

      if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array");
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return n([]);

      for (var i = r.length, f = 0; r.length > f; f++) {
        o(f, r[f]);
      }
    });
  }, t.resolve = function (e) {
    return e && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) && e.constructor === t ? e : new t(function (n) {
      n(e);
    });
  }, t.reject = function (e) {
    return new t(function (n, t) {
      t(e);
    });
  }, t.race = function (e) {
    return new t(function (n, t) {
      for (var o = 0, r = e.length; r > o; o++) {
        e[o].then(n, t);
      }
    });
  }, t._immediateFn = "function" == typeof setImmediate && function (e) {
    setImmediate(e);
  } || function (e) {
    c(e, 0);
  }, t._unhandledRejectionFn = function (e) {
    void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e);
  };

  var l = function () {
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    throw Error("unable to locate global object");
  }();

  "Promise" in l ? l.Promise.prototype["finally"] || (l.Promise.prototype["finally"] = e) : l.Promise = t;
});
/* eslint-enable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib/svg4everybody.js":
/*!******************************!*\
  !*** ./lib/svg4everybody.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

!function (root, factory) {
  if (root === undefined) root = window;
  "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js") ? // AMD. Register as an anonymous module unless amdModuleId is set
  define([], function () {
    return root.svg4everybody = factory();
  }) : "object" == ( false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(module)) && module.exports ? // Node. Does not work with strict CommonJS, but
  // only CommonJS-like environments that support module.exports,
  // like Node.
  module.exports = factory() : root.svg4everybody = factory();
}(undefined, function () {
  /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
  function embed(parent, svg, target) {
    // if the target exists
    if (target) {
      // create a document fragment to hold the contents of the target
      var fragment = document.createDocumentFragment(),
          viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox"); // conditionally set the viewBox on the svg

      viewBox && svg.setAttribute("viewBox", viewBox); // copy the contents of the clone into the fragment

      for ( // clone the target
      var clone = target.cloneNode(!0); clone.childNodes.length;) {
        fragment.appendChild(clone.firstChild);
      } // append the fragment into the svg


      parent.appendChild(fragment);
    }
  }

  function loadreadystatechange(xhr) {
    // listen to changes in the request
    xhr.onreadystatechange = function () {
      // if the request is ready
      if (4 === xhr.readyState) {
        // get the cached html document
        var cachedDocument = xhr._cachedDocument; // ensure the cached html document based on the xhr response

        cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
        xhr._embeds.splice(0).map(function (item) {
          // get the cached target
          var target = xhr._cachedTarget[item.id]; // ensure the cached target

          target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), // embed the target into the svg
          embed(item.parent, item.svg, target);
        });
      }
    }, // test the ready state change immediately
    xhr.onreadystatechange();
  }

  function svg4everybody(rawopts) {
    function oninterval() {
      // while the index exists in the live <use> collection
      for ( // get the cached <use> index
      var index = 0; index < uses.length;) {
        // get the current <use>
        var use = uses[index],
            parent = use.parentNode,
            svg = getSVGAncestor(parent),
            src = use.getAttribute("xlink:href") || use.getAttribute("href");

        if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), svg && src) {
          if (polyfill) {
            if (!opts.validate || opts.validate(src, svg, use)) {
              // remove the <use> element
              parent.removeChild(use); // parse the src and get the url and id

              var srcSplit = src.split("#"),
                  url = srcSplit.shift(),
                  id = srcSplit.join("#"); // if the link is external

              if (url.length) {
                // get the cached xhr request
                var xhr = requests[url]; // ensure the xhr request exists

                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                xhr._embeds.push({
                  parent: parent,
                  svg: svg,
                  id: id
                }), // prepare the xhr ready state change event
                loadreadystatechange(xhr);
              } else {
                // embed the local id into the svg
                embed(parent, svg, document.getElementById(id));
              }
            } else {
              // increase the index when the previous value was not "valid"
              ++index, ++numberOfSvgUseElementsToBypass;
            }
          }
        } else {
          // increase the index when the previous value was not "valid"
          ++index;
        }
      } // continue the interval


      (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
    }

    var polyfill,
        opts = Object(rawopts),
        newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
        webkitUA = /\bAppleWebKit\/(\d+)\b/,
        olderEdgeUA = /\bEdge\/12\.(\d+)\b/,
        edgeUA = /\bEdge\/.(\d+)\b/,
        inIframe = window.top !== window.self;
    polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe; // create xhr requests object

    var requests = {},
        requestAnimationFrame = window.requestAnimationFrame || setTimeout,
        uses = document.getElementsByTagName("use"),
        numberOfSvgUseElementsToBypass = 0; // conditionally start the interval if the polyfill is active

    polyfill && oninterval();
  }

  function getSVGAncestor(node) {
    for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode);) {}

    return svg;
  }

  return svg4everybody;
});
svg4everybody();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=app.js.map