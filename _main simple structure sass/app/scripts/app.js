"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this),
                    i = n.data("display");s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
            });
        }if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");n.length && (n.remove(), s(t), i && t.next().trigger("click"));
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this),
                s = e(this).next(".nice-select");s.length && (s.remove(), t.css("display", ""));
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;this.hide(), this.each(function () {
            var t = e(this);t.next().hasClass("nice-select") || s(t);
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this),
                n = s.closest(".nice-select");n.find(".selected").removeClass("selected"), s.addClass("selected");var i = s.data("display") || s.text();n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
        });var n = document.createElement("a").style;return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
    };
}(jQuery);
!function (t) {
    if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t();
    }
}(function () {
    return function t(e, i, n) {
        function o(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;if (!a && l) return l(r, !0);if (s) return s(r, !0);var h = new Error("Cannot find module '" + r + "'");throw h.code = "MODULE_NOT_FOUND", h;
                }var u = i[r] = { exports: {} };e[r][0].call(u.exports, function (t) {
                    var i = e[r][1][t];return o(i || t);
                }, u, u.exports, t, e, i, n);
            }return i[r].exports;
        }for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) {
            o(n[r]);
        }return o;
    }({ 1: [function (t, e, i) {
            "use strict";
            function n(t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t);
            }var o = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;e.exports = function () {
                try {
                    if (!Object.assign) return !1;var t = new String("abc");if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;for (var e = {}, i = 0; i < 10; i++) {
                        e["_" + String.fromCharCode(i)] = i;
                    }if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                        return e[t];
                    }).join("")) return !1;var n = {};return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                        n[t] = t;
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
                } catch (t) {
                    return !1;
                }
            }() ? Object.assign : function (t, e) {
                for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                    i = Object(arguments[h]);for (var u in i) {
                        s.call(i, u) && (l[u] = i[u]);
                    }if (o) {
                        a = o(i);for (var c = 0; c < a.length; c++) {
                            r.call(i, a[c]) && (l[a[c]] = i[a[c]]);
                        }
                    }
                }return l;
            };
        }, {}], 2: [function (t, e, i) {
            (function (t) {
                (function () {
                    var i, n, o, s, r, a;"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                        return performance.now();
                    } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
                        return (i() - r) / 1e6;
                    }, n = t.hrtime, s = (i = function i() {
                        var t;return 1e9 * (t = n())[0] + t[1];
                    })(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function () {
                        return Date.now() - o;
                    }, o = Date.now()) : (e.exports = function () {
                        return new Date().getTime() - o;
                    }, o = new Date().getTime());
                }).call(this);
            }).call(this, t("_process"));
        }, { _process: 3 }], 3: [function (t, e, i) {
            function n() {
                throw new Error("setTimeout has not been defined");
            }function o() {
                throw new Error("clearTimeout has not been defined");
            }function s(t) {
                if (c === setTimeout) return setTimeout(t, 0);if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);try {
                    return c(t, 0);
                } catch (e) {
                    try {
                        return c.call(null, t, 0);
                    } catch (e) {
                        return c.call(this, t, 0);
                    }
                }
            }function r(t) {
                if (d === clearTimeout) return clearTimeout(t);if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);try {
                    return d(t);
                } catch (e) {
                    try {
                        return d.call(null, t);
                    } catch (e) {
                        return d.call(this, t);
                    }
                }
            }function a() {
                v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l());
            }function l() {
                if (!v) {
                    var t = s(a);v = !0;for (var e = f.length; e;) {
                        for (p = f, f = []; ++y < e;) {
                            p && p[y].run();
                        }y = -1, e = f.length;
                    }p = null, v = !1, r(t);
                }
            }function h(t, e) {
                this.fun = t, this.array = e;
            }function u() {}var c,
                d,
                m = e.exports = {};!function () {
                try {
                    c = "function" == typeof setTimeout ? setTimeout : n;
                } catch (t) {
                    c = n;
                }try {
                    d = "function" == typeof clearTimeout ? clearTimeout : o;
                } catch (t) {
                    d = o;
                }
            }();var p,
                f = [],
                v = !1,
                y = -1;m.nextTick = function (t) {
                var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) {
                    e[i - 1] = arguments[i];
                }f.push(new h(t, e)), 1 !== f.length || v || s(l);
            }, h.prototype.run = function () {
                this.fun.apply(null, this.array);
            }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function (t) {
                return [];
            }, m.binding = function (t) {
                throw new Error("process.binding is not supported");
            }, m.cwd = function () {
                return "/";
            }, m.chdir = function (t) {
                throw new Error("process.chdir is not supported");
            }, m.umask = function () {
                return 0;
            };
        }, {}], 4: [function (t, e, i) {
            (function (i) {
                for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) {
                    a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
                }if (!a || !l) {
                    var u = 0,
                        c = 0,
                        d = [];a = function a(t) {
                        if (0 === d.length) {
                            var e = n(),
                                i = Math.max(0, 1e3 / 60 - (e - u));u = i + e, setTimeout(function () {
                                var t = d.slice(0);d.length = 0;for (var e = 0; e < t.length; e++) {
                                    if (!t[e].cancelled) try {
                                        t[e].callback(u);
                                    } catch (t) {
                                        setTimeout(function () {
                                            throw t;
                                        }, 0);
                                    }
                                }
                            }, Math.round(i));
                        }return d.push({ handle: ++c, callback: t, cancelled: !1 }), c;
                    }, l = function l(t) {
                        for (var e = 0; e < d.length; e++) {
                            d[e].handle === t && (d[e].cancelled = !0);
                        }
                    };
                }e.exports = function (t) {
                    return a.call(o, t);
                }, e.exports.cancel = function () {
                    l.apply(o, arguments);
                }, e.exports.polyfill = function () {
                    o.requestAnimationFrame = a, o.cancelAnimationFrame = l;
                };
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, { "performance-now": 2 }], 5: [function (t, e, i) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }var o = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }return function (e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e;
                };
            }(),
                s = t("raf"),
                r = t("object-assign"),
                a = { propertyCache: {}, vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], clamp: function clamp(t, e, i) {
                    return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t;
                }, data: function data(t, e) {
                    return a.deserialize(t.getAttribute("data-" + e));
                }, deserialize: function deserialize(t) {
                    return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t);
                }, camelCase: function camelCase(t) {
                    return t.replace(/-+(.)?/g, function (t, e) {
                        return e ? e.toUpperCase() : "";
                    });
                }, accelerate: function accelerate(t) {
                    a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden");
                }, transformSupport: function transformSupport(t) {
                    for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++) {
                        if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) {
                            i = !0;break;
                        }
                    }switch (t) {case "2D":
                            o = i;break;case "3D":
                            if (i) {
                                var u = document.body || document.createElement("body"),
                                    c = document.documentElement,
                                    d = c.style.overflow,
                                    m = !1;document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u));
                            }}return o;
                }, css: function css(t, e, i) {
                    var n = a.propertyCache[e];if (!n) for (var o = 0, s = a.vendors.length; o < s; o++) {
                        if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) {
                            a.propertyCache[e] = n;break;
                        }
                    }t.style[n] = i;
                } },
                l = { relativeInput: !1, clipRelativeInput: !1, inputElement: null, hoverOnly: !1, calibrationThreshold: 100, calibrationDelay: 500, supportDelay: 500, calibrateX: !1, calibrateY: !0, invertX: !0, invertY: !0, limitX: !1, limitY: !1, scalarX: 10, scalarY: 10, frictionX: .1, frictionY: .1, originX: .5, originY: .5, pointerEvents: !1, precision: 1, onReady: null, selector: null },
                h = function () {
                function t(e, i) {
                    n(this, t), this.element = e;var o = { calibrateX: a.data(this.element, "calibrate-x"), calibrateY: a.data(this.element, "calibrate-y"), invertX: a.data(this.element, "invert-x"), invertY: a.data(this.element, "invert-y"), limitX: a.data(this.element, "limit-x"), limitY: a.data(this.element, "limit-y"), scalarX: a.data(this.element, "scalar-x"), scalarY: a.data(this.element, "scalar-y"), frictionX: a.data(this.element, "friction-x"), frictionY: a.data(this.element, "friction-y"), originX: a.data(this.element, "origin-x"), originY: a.data(this.element, "origin-y"), pointerEvents: a.data(this.element, "pointer-events"), precision: a.data(this.element, "precision"), relativeInput: a.data(this.element, "relative-input"), clipRelativeInput: a.data(this.element, "clip-relative-input"), hoverOnly: a.data(this.element, "hover-only"), inputElement: document.querySelector(a.data(this.element, "input-element")), selector: a.data(this.element, "selector") };for (var s in o) {
                        null === o[s] && delete o[s];
                    }r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise();
                }return o(t, [{ key: "initialise", value: function value() {
                        void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay);
                    } }, { key: "doReadyCallback", value: function value() {
                        this.onReady && this.onReady();
                    } }, { key: "updateLayers", value: function value() {
                        this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];for (var t = 0; t < this.layers.length; t++) {
                            var e = this.layers[t];this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;var i = a.data(e, "depth") || 0;this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i);
                        }
                    } }, { key: "updateDimensions", value: function value() {
                        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
                    } }, { key: "updateBounds", value: function value() {
                        this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
                    } }, { key: "queueCalibration", value: function value(t) {
                        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t);
                    } }, { key: "enable", value: function value() {
                        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame));
                    } }, { key: "disable", value: function value() {
                        this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf));
                    } }, { key: "calibrate", value: function value(t, e) {
                        this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e;
                    } }, { key: "invert", value: function value(t, e) {
                        this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e;
                    } }, { key: "friction", value: function value(t, e) {
                        this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e;
                    } }, { key: "scalar", value: function value(t, e) {
                        this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e;
                    } }, { key: "limit", value: function value(t, e) {
                        this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e;
                    } }, { key: "origin", value: function value(t, e) {
                        this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e;
                    } }, { key: "setInputElement", value: function value(t) {
                        this.inputElement = t, this.updateDimensions();
                    } }, { key: "setPosition", value: function value(t, e, i) {
                        e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i);
                    } }, { key: "onOrientationTimer", value: function value() {
                        this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback();
                    } }, { key: "onMotionTimer", value: function value() {
                        this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback();
                    } }, { key: "onCalibrationTimer", value: function value() {
                        this.calibrationFlag = !0;
                    } }, { key: "onWindowResize", value: function value() {
                        this.updateDimensions();
                    } }, { key: "onAnimationFrame", value: function value() {
                        this.updateBounds();var t = this.inputX - this.calibrationX,
                            e = this.inputY - this.calibrationY;(Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;for (var i = 0; i < this.layers.length; i++) {
                            var n = this.layers[i],
                                o = this.depthsX[i],
                                r = this.depthsY[i],
                                l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                h = this.velocityY * (r * (this.invertY ? -1 : 1));this.setPosition(n, l, h);
                        }this.raf = s(this.onAnimationFrame);
                    } }, { key: "rotate", value: function value(t, e) {
                        var i = (t || 0) / 30,
                            n = (e || 0) / 30,
                            o = this.windowHeight > this.windowWidth;this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n;
                    } }, { key: "onDeviceOrientation", value: function value(t) {
                        var e = t.beta,
                            i = t.gamma;null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i));
                    } }, { key: "onDeviceMotion", value: function value(t) {
                        var e = t.rotationRate.beta,
                            i = t.rotationRate.gamma;null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i));
                    } }, { key: "onMouseMove", value: function value(t) {
                        var e = t.clientX,
                            i = t.clientY;if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void (this.inputY = 0);this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY);
                    } }, { key: "destroy", value: function value() {
                        this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");for (var t = 0; t < this.layers.length; t++) {
                            this.layers[t].removeAttribute("style");
                        }delete this.element, delete this.layers;
                    } }, { key: "version", value: function value() {
                        return "3.1.0";
                    } }]), t;
            }();e.exports = h;
        }, { "object-assign": 1, raf: 4 }] }, {}, [5])(5);
});

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
    window.addEventListener('scroll', menuScrolled);
});

// burger opened
document.querySelector('.js-burger__open').addEventListener('click', openMenu);
function openMenu() {
    this.classList.toggle('is-opened');
    document.querySelector('.header').classList.toggle('is-opened');
    document.querySelector('.header .navigation').classList.toggle('is-opened');
}

// calc hero section padding
if (document.querySelector('.hero')) {
    var headerPaddingCalc = function headerPaddingCalc() {
        $('.hero__slide').css('padding-top', document.querySelector('.header').clientHeight + 'px');
    };

    window.addEventListener('resize', headerPaddingCalc);

    headerPaddingCalc();
}

// hero slider
if (document.querySelector('.js-hero__slider')) {
    $('.js-hero__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        dots: false,
        prevArrow: '.hero__nav .prev',
        nextArrow: '.hero__nav .next'
    });
}

function menuScrolled(e) {
    var header = document.querySelector('.header'),
        headerPos = header.getBoundingClientRect().height;
    if (window.scrollY > headerPos && window.innerWidth > 1023) {
        header.classList.add('header--sticky');
    } else if (window.scrollY > window.innerHeight - headerPos && window.innerWidth < 1023) {
        header.classList.add('header--sticky');
    } else {
        header.classList.remove('header--sticky');
    }
}