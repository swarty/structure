"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

self.fetch || (self.fetch = function (e, n) {
    return n = n || {}, new Promise(function (t, s) {
        var r = new XMLHttpRequest(),
            o = [],
            u = [],
            i = {},
            a = function a() {
            return { ok: 2 == (r.status / 100 | 0), statusText: r.statusText, status: r.status, url: r.responseURL, text: function text() {
                    return Promise.resolve(r.responseText);
                }, json: function json() {
                    return Promise.resolve(JSON.parse(r.responseText));
                }, blob: function blob() {
                    return Promise.resolve(new Blob([r.response]));
                }, clone: a, headers: { keys: function keys() {
                        return o;
                    }, entries: function entries() {
                        return u;
                    }, get: function get(e) {
                        return i[e.toLowerCase()];
                    }, has: function has(e) {
                        return e.toLowerCase() in i;
                    } } };
        };for (var c in r.open(n.method || "get", e, !0), r.onload = function () {
            r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
                o.push(n = n.toLowerCase()), u.push([n, t]), i[n] = i[n] ? i[n] + "," + t : t;
            }), t(a());
        }, r.onerror = s, r.withCredentials = "include" == n.credentials, n.headers) {
            r.setRequestHeader(c, n.headers[c]);
        }r.send(n.body || null);
    });
});
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function (callback /*, thisArg*/) {

        var T, k;

        if (this == null) {
            throw new TypeError('this is null or not defined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception. 
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // 6. Let k be 0.
        k = 0;

        // 7. Repeat while k < len.
        while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator.
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c.
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined.
    };
}

// nodeList foreach polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
!function (e, n) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n();
}(0, function () {
    "use strict";
    function e(e) {
        var n = this.constructor;return this.then(function (t) {
            return n.resolve(e()).then(function () {
                return t;
            });
        }, function (t) {
            return n.resolve(e()).then(function () {
                return n.reject(t);
            });
        });
    }function n() {}function t(e) {
        if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new");if ("function" != typeof e) throw new TypeError("not a function");this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], u(e, this);
    }function o(e, n) {
        for (; 3 === e._state;) {
            e = e._value;
        }0 !== e._state ? (e._handled = !0, t._immediateFn(function () {
            var t = 1 === e._state ? n.onFulfilled : n.onRejected;if (null !== t) {
                var o;try {
                    o = t(e._value);
                } catch (f) {
                    return void i(n.promise, f);
                }r(n.promise, o);
            } else (1 === e._state ? r : i)(n.promise, e._value);
        })) : e._deferreds.push(n);
    }function r(e, n) {
        try {
            if (n === e) throw new TypeError("A promise cannot be resolved with itself.");if (n && ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || "function" == typeof n)) {
                var o = n.then;if (n instanceof t) return e._state = 3, e._value = n, void f(e);if ("function" == typeof o) return void u(function (e, n) {
                    return function () {
                        e.apply(n, arguments);
                    };
                }(o, n), e);
            }e._state = 1, e._value = n, f(e);
        } catch (r) {
            i(e, r);
        }
    }function i(e, n) {
        e._state = 2, e._value = n, f(e);
    }function f(e) {
        2 === e._state && 0 === e._deferreds.length && t._immediateFn(function () {
            e._handled || t._unhandledRejectionFn(e._value);
        });for (var n = 0, r = e._deferreds.length; r > n; n++) {
            o(e, e._deferreds[n]);
        }e._deferreds = null;
    }function u(e, n) {
        var t = !1;try {
            e(function (e) {
                t || (t = !0, r(n, e));
            }, function (e) {
                t || (t = !0, i(n, e));
            });
        } catch (o) {
            if (t) return;t = !0, i(n, o);
        }
    }var c = setTimeout;t.prototype["catch"] = function (e) {
        return this.then(null, e);
    }, t.prototype.then = function (e, t) {
        var r = new this.constructor(n);return o(this, new function (e, n, t) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t;
        }(e, t, r)), r;
    }, t.prototype["finally"] = e, t.all = function (e) {
        return new t(function (n, t) {
            function o(e, f) {
                try {
                    if (f && ("object" == (typeof f === "undefined" ? "undefined" : _typeof(f)) || "function" == typeof f)) {
                        var u = f.then;if ("function" == typeof u) return void u.call(f, function (n) {
                            o(e, n);
                        }, t);
                    }r[e] = f, 0 == --i && n(r);
                } catch (c) {
                    t(c);
                }
            }if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array");var r = Array.prototype.slice.call(e);if (0 === r.length) return n([]);for (var i = r.length, f = 0; r.length > f; f++) {
                o(f, r[f]);
            }
        });
    }, t.resolve = function (e) {
        return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.constructor === t ? e : new t(function (n) {
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
    };var l = function () {
        if ("undefined" != typeof self) return self;if ("undefined" != typeof window) return window;if ("undefined" != typeof global) return global;throw Error("unable to locate global object");
    }();"Promise" in l ? l.Promise.prototype["finally"] || (l.Promise.prototype["finally"] = e) : l.Promise = t;
});

(function () {
    if (!window.document.querySelectorAll) {
        document.querySelectorAll = document.body.querySelectorAll = Object.querySelectorAll = function querySelectorAllPolyfill(r, c, i, j, a) {
            var d = document,
                s = d.createStyleSheet();
            a = d.all;
            c = [];
            r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
            for (i = r.length; i--;) {
                s.addRule(r[i], 'k:v');
                for (j = a.length; j--;) {
                    a[j].currentStyle.k && c.push(a[j]);
                }
                s.removeRule(0);
            }
            return c;
        };
    }
})();
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
function SVGInliner(elements) {
    "use strict";

    this.elements = elements;
    this.results = {};
    this.images = [];
    this.init();
}

SVGInliner.prototype.init = function () {
    "use strict";

    this.replaceImages();
};

SVGInliner.prototype.isSVG = function (img) {
    "use strict";

    if (img.hasAttribute("src")) {
        var splits = img.getAttribute("src").split(".");

        return splits[splits.length - 1].substr(0, 3) === "svg";
    } else {
        return false;
    }
};

SVGInliner.prototype.replaceImages = function () {
    "use strict";

    for (var i = 0; i < this.elements.length; i++) {
        if (this.isSVG(this.elements[i])) {
            this.images.push(new SVGImage(this.elements[i], this));
        }
    }
};

function SVGImage(img, inliner) {
    "use strict";

    this.image = img;
    this.inliner = inliner;

    if (img !== null && typeof img !== "undefined") {
        this.image.style.display = "none";

        this.getData(function (element) {
            this.createSVG(element);
            this.injectSVG();
        }.bind(this));
    }
}

SVGImage.prototype.getData = function (cb) {
    "use strict";

    var src = this.image.getAttribute("src");

    if (typeof this.inliner.results[src] !== "undefined") {
        cb(this.inliner.results[src]);
    } else {

        this.xhr = new XMLHttpRequest();
        this.xhr.onload = function (e) {
            if (this.xhr.status === 200) {
                this.inliner.results[src] = this.xhr.responseXML;

                cb(this.xhr.responseXML);
            }
        }.bind(this);
        this.xhr.open("GET", src, true);
        this.xhr.overrideMimeType("image/svg+xml");
        this.xhr.send("");
    }
};

SVGImage.prototype.createSVG = function (element) {
    "use strict";

    this.element = element.firstChild ? element.firstChild : element;

    if (this.hasHash()) {
        this.filterSVG();
    }
};

SVGImage.prototype.cloneAttributes = function () {
    "use strict";

    var className = this.image.getAttribute("class");
    if (className !== null) {
        this.element.setAttribute("class", className);
    }

    var idName = this.image.getAttribute("id");
    if (idName !== null) {
        this.element.setAttribute("id", idName);
    }
};

SVGImage.prototype.filterSVG = function () {
    "use strict";

    var hash = this.extractHash();
    var id = hash[hash.length - 1];
    var width = 0;
    var height = 0;

    var children = this.element.getElementsByTagName("svg");
    for (var i = 0; i < children.length; i++) {
        if (children[i].getAttribute("id") === id) {
            this.element = children[i];
            this.setDefaultAttributes();
        }
    }
};

SVGImage.prototype.setDefaultAttributes = function () {
    "use strict";

    this.element.setAttribute("y", "0px");
    this.element.setAttribute("x", "0px");
    this.element.setAttribute("version", "1.1");
    this.element.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.element.setAttribute("preserveAspectRatio", "xMidYMid meet");
    this.element.setAttribute("xml:space", "preserve");
    this.element.removeAttribute("width");
    this.element.removeAttribute("height");
};

SVGImage.prototype.hasHash = function () {
    "use strict";

    return this.image.getAttribute("src").indexOf("#") !== -1;
};

SVGImage.prototype.extractHash = function () {
    "use strict";

    return this.image.getAttribute("src").split("#");
};

SVGImage.prototype.injectSVG = function () {
    "use strict";

    this.cloneAttributes();

    this.image.parentNode.replaceChild(this.element, this.image);
};

if (typeof module !== "undefined") {
    module.exports = SVGInliner;
}
// your js

// lazyload
(function (w, d) {
    var b = d.getElementsByTagName('body')[0];
    var s = d.createElement("script");
    var v = !("IntersectionObserver" in w) ? "8.16.0" : "10.19.0";
    s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
    b.appendChild(s);
    s.onload = function () {
        w.lazy = new LazyLoad({
            elements_selector: ".lazy"
        });
    };
})(window, document);

document.addEventListener('DOMContentLoaded', function () {
    // svg inliner 
    if (document.querySelector('.svg')) {
        new SVGInliner(document.querySelectorAll('.svg'));
    }
});
//# sourceMappingURL=app.js.map
