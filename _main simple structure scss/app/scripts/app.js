"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e, i) {
    !function () {
        var s,
            a,
            n,
            h = "2.2.3",
            o = "datepicker",
            r = ".datepicker-here",
            c = !1,
            d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
            l = { classes: "", inline: !1, language: "ru", startDate: new Date(), firstDay: "", weekends: [6, 0], dateFormat: "", altField: "", altFieldDateFormat: "@", toggleSelected: !0, keyboardNav: !0, position: "bottom left", offset: 12, view: "days", minView: "days", showOtherMonths: !0, selectOtherMonths: !0, moveToOtherMonthsOnSelect: !0, showOtherYears: !0, selectOtherYears: !0, moveToOtherYearsOnSelect: !0, minDate: "", maxDate: "", disableNavWhenOutOfRange: !0, multipleDates: !1, multipleDatesSeparator: ",", range: !1, todayButton: !1, clearButton: !1, showEvent: "focus", autoClose: !1, monthsField: "monthsShort", prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>', nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>', navTitles: { days: "MM, <i>yyyy</i>", months: "yyyy", years: "yyyy1 - yyyy2" }, timepicker: !1, onlyTimepicker: !1, dateTimeSeparator: " ", timeFormat: "", minHours: 0, maxHours: 24, minMinutes: 0, maxMinutes: 59, hoursStep: 1, minutesStep: 1, onSelect: "", onShow: "", onHide: "", onChangeMonth: "", onChangeYear: "", onChangeDecade: "", onChangeView: "", onRenderCell: "" },
            u = { ctrlRight: [17, 39], ctrlUp: [17, 38], ctrlLeft: [17, 37], ctrlDown: [17, 40], shiftRight: [16, 39], shiftUp: [16, 38], shiftLeft: [16, 37], shiftDown: [16, 40], altUp: [18, 38], altRight: [18, 39], altLeft: [18, 37], altDown: [18, 40], ctrlShiftUp: [16, 17, 38] },
            m = function m(t, a) {
            this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date()), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init();
        };n = m, n.prototype = { VERSION: h, viewIndexes: ["days", "months", "years"], init: function init() {
                c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0;
            }, _createShortCuts: function _createShortCuts() {
                this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5);
            }, _bindEvents: function _bindEvents() {
                this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this));
            }, _bindKeyboardEvents: function _bindKeyboardEvents() {
                this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this));
            }, _bindTimepickerEvents: function _bindTimepickerEvents() {
                this.$el.on("timeChange.adp", this._onTimeChange.bind(this));
            }, isWeekend: function isWeekend(t) {
                return -1 !== this.opts.weekends.indexOf(t);
            }, _defineLocale: function _defineLocale(t) {
                "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);var i = this._getWordBoundaryRegExp;(this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0);
            }, _buildDatepickersContainer: function _buildDatepickersContainer() {
                c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container");
            }, _buildBaseHtml: function _buildBaseHtml() {
                var t,
                    i = e('<div class="datepicker-inline">');t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker);
            }, _triggerOnChange: function _triggerOnChange() {
                if (!this.selectedDates.length) {
                    if ("" === this._prevOnSelectValue) return;return this._prevOnSelectValue = "", this.opts.onSelect("", "", this);
                }var t,
                    e = this.selectedDates,
                    i = n.getParsedDate(e[0]),
                    s = this,
                    a = new Date(i.year, i.month, i.date, i.hours, i.minutes);t = e.map(function (t) {
                    return s.formatDate(s.loc.dateFormat, t);
                }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function (t) {
                    var e = n.getParsedDate(t);return new Date(e.year, e.month, e.date, e.hours, e.minutes);
                })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this);
            }, next: function next() {
                var t = this.parsedDate,
                    e = this.opts;switch (this.view) {case "days":
                        this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);break;case "months":
                        this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);break;case "years":
                        this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);}
            }, prev: function prev() {
                var t = this.parsedDate,
                    e = this.opts;switch (this.view) {case "days":
                        this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);break;case "months":
                        this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);break;case "years":
                        this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);}
            }, formatDate: function formatDate(t, e) {
                e = e || this.date;var i,
                    s = t,
                    a = this._getWordBoundaryRegExp,
                    h = this.loc,
                    o = n.getLeadingZeroNum,
                    r = n.getDecade(e),
                    c = n.getParsedDate(e),
                    d = c.fullHours,
                    l = c.hours,
                    u = t.match(a("aa")) || t.match(a("AA")),
                    m = "am",
                    p = this._replacer;switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {case /@/.test(s):
                        s = s.replace(/@/, e.getTime());case /aa/.test(s):
                        s = p(s, a("aa"), m);case /AA/.test(s):
                        s = p(s, a("AA"), m.toUpperCase());case /dd/.test(s):
                        s = p(s, a("dd"), c.fullDate);case /d/.test(s):
                        s = p(s, a("d"), c.date);case /DD/.test(s):
                        s = p(s, a("DD"), h.days[c.day]);case /D/.test(s):
                        s = p(s, a("D"), h.daysShort[c.day]);case /mm/.test(s):
                        s = p(s, a("mm"), c.fullMonth);case /m/.test(s):
                        s = p(s, a("m"), c.month + 1);case /MM/.test(s):
                        s = p(s, a("MM"), this.loc.months[c.month]);case /M/.test(s):
                        s = p(s, a("M"), h.monthsShort[c.month]);case /ii/.test(s):
                        s = p(s, a("ii"), c.fullMinutes);case /i/.test(s):
                        s = p(s, a("i"), c.minutes);case /hh/.test(s):
                        s = p(s, a("hh"), d);case /h/.test(s):
                        s = p(s, a("h"), l);case /yyyy/.test(s):
                        s = p(s, a("yyyy"), c.year);case /yyyy1/.test(s):
                        s = p(s, a("yyyy1"), r[0]);case /yyyy2/.test(s):
                        s = p(s, a("yyyy2"), r[1]);case /yy/.test(s):
                        s = p(s, a("yy"), c.year.toString().slice(-2));}return s;
            }, _replacer: function _replacer(t, e, i) {
                return t.replace(e, function (t, e, s, a) {
                    return e + i + a;
                });
            }, _getWordBoundaryRegExp: function _getWordBoundaryRegExp(t) {
                var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g");
            }, selectDate: function selectDate(t) {
                var e = this,
                    i = e.opts,
                    s = e.parsedDate,
                    a = e.selectedDates,
                    h = a.length,
                    o = "";if (Array.isArray(t)) return void t.forEach(function (t) {
                    e.selectDate(t);
                });if (t instanceof Date) {
                    if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
                        if (h === i.multipleDates) return;e._isSelected(t) || e.selectedDates.push(t);
                    } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render();
                }
            }, removeDate: function removeDate(t) {
                var e = this.selectedDates,
                    i = this;if (t instanceof Date) return e.some(function (s, a) {
                    return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0;
                });
            }, today: function today() {
                this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date(), this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton);
            }, clear: function clear() {
                this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange();
            }, update: function update(t, i) {
                var s = arguments.length,
                    a = this.lastSelectedDate;return 2 == s ? this.opts[t] = i : 1 == s && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this;
            }, _syncWithMinMaxDates: function _syncWithMinMaxDates() {
                var t = this.date.getTime();this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1;
            }, _isSelected: function _isSelected(t, e) {
                var i = !1;return this.selectedDates.some(function (s) {
                    return n.isSame(s, t, e) ? (i = s, !0) : void 0;
                }), i;
            }, _setInputValue: function _setInputValue() {
                var t,
                    e = this,
                    i = e.opts,
                    s = e.loc.dateFormat,
                    a = i.altFieldDateFormat,
                    n = e.selectedDates.map(function (t) {
                    return e.formatDate(s, t);
                });i.altField && e.$altField.length && (t = this.selectedDates.map(function (t) {
                    return e.formatDate(a, t);
                }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n);
            }, _isInRange: function _isInRange(t, e) {
                var i = t.getTime(),
                    s = n.getParsedDate(t),
                    a = n.getParsedDate(this.minDate),
                    h = n.getParsedDate(this.maxDate),
                    o = new Date(s.year, s.month, a.date).getTime(),
                    r = new Date(s.year, s.month, h.date).getTime(),
                    c = { day: i >= this.minTime && i <= this.maxTime, month: o >= this.minTime && r <= this.maxTime, year: s.year >= a.year && s.year <= h.year };return e ? c[e] : c.day;
            }, _getDimensions: function _getDimensions(t) {
                var e = t.offset();return { width: t.outerWidth(), height: t.outerHeight(), left: e.left, top: e.top };
            }, _getDateFromCell: function _getDateFromCell(t) {
                var e = this.parsedDate,
                    s = t.data("year") || e.year,
                    a = t.data("month") == i ? e.month : t.data("month"),
                    n = t.data("date") || 1;return new Date(s, a, n);
            }, _setPositionClasses: function _setPositionClasses(t) {
                t = t.split(" ");var e = t[0],
                    i = t[1],
                    s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s);
            }, setPosition: function setPosition(t) {
                t = t || this.opts.position;var e,
                    i,
                    s = this._getDimensions(this.$el),
                    a = this._getDimensions(this.$datepicker),
                    n = t.split(" "),
                    h = this.opts.offset,
                    o = n[0],
                    r = n[1];switch (o) {case "top":
                        e = s.top - a.height - h;break;case "right":
                        i = s.left + s.width + h;break;case "bottom":
                        e = s.top + s.height + h;break;case "left":
                        i = s.left - a.width - h;}switch (r) {case "top":
                        e = s.top;break;case "right":
                        i = s.left + s.width - a.width;break;case "bottom":
                        e = s.top + s.height - a.height;break;case "left":
                        i = s.left;break;case "center":
                        /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2;}this.$datepicker.css({ left: i, top: e });
            }, show: function show() {
                var t = this.opts.onShow;this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t);
            }, hide: function hide() {
                var t = this.opts.onHide;this.$datepicker.removeClass("active").css({ left: "-100000px" }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t);
            }, down: function down(t) {
                this._changeView(t, "down");
            }, up: function up(t) {
                this._changeView(t, "up");
            }, _bindVisionEvents: function _bindVisionEvents(t) {
                this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0));
            }, _changeView: function _changeView(t, e) {
                t = t || this.focused || this.date;var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i];
            }, _handleHotKey: function _handleHotKey(t) {
                var e,
                    i,
                    s,
                    a = n.getParsedDate(this._getFocusedDate()),
                    h = this.opts,
                    o = !1,
                    r = !1,
                    c = !1,
                    d = a.year,
                    l = a.month,
                    u = a.date;switch (t) {case "ctrlRight":case "ctrlUp":
                        l += 1, o = !0;break;case "ctrlLeft":case "ctrlDown":
                        l -= 1, o = !0;break;case "shiftRight":case "shiftUp":
                        r = !0, d += 1;break;case "shiftLeft":case "shiftDown":
                        r = !0, d -= 1;break;case "altRight":case "altUp":
                        c = !0, d += 10;break;case "altLeft":case "altDown":
                        c = !0, d -= 10;break;case "ctrlShiftUp":
                        this.up();}s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade);
            }, _registerKey: function _registerKey(t) {
                var e = this.keys.some(function (e) {
                    return e == t;
                });e || this.keys.push(t);
            }, _unRegisterKey: function _unRegisterKey(t) {
                var e = this.keys.indexOf(t);this.keys.splice(e, 1);
            }, _isHotKeyPressed: function _isHotKeyPressed() {
                var t,
                    e = !1,
                    i = this,
                    s = this.keys.sort();for (var a in u) {
                    t = u[a], s.length == t.length && t.every(function (t, e) {
                        return t == s[e];
                    }) && (i._trigger("hotKey", a), e = !0);
                }return e;
            }, _trigger: function _trigger(t, e) {
                this.$el.trigger(t, e);
            }, _focusNextCell: function _focusNextCell(t, e) {
                e = e || this.cellType;var i = n.getParsedDate(this._getFocusedDate()),
                    s = i.year,
                    a = i.month,
                    h = i.date;if (!this._isHotKeyPressed()) {
                    switch (t) {case 37:
                            "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";break;case 38:
                            "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";break;case 39:
                            "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";break;case 40:
                            "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : "";}var o = new Date(s, a, h);o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o;
                }
            }, _getFocusedDate: function _getFocusedDate() {
                var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
                    e = this.parsedDate;if (!t) switch (this.view) {case "days":
                        t = new Date(e.year, e.month, new Date().getDate());break;case "months":
                        t = new Date(e.year, e.month, 1);break;case "years":
                        t = new Date(e.year, 0, 1);}return t;
            }, _getCell: function _getCell(t, i) {
                i = i || this.cellType;var s,
                    a = n.getParsedDate(t),
                    h = '.datepicker--cell[data-year="' + a.year + '"]';switch (i) {case "month":
                        h = '[data-month="' + a.month + '"]';break;case "day":
                        h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]';}return s = this.views[this.currentView].$el.find(h), s.length ? s : e("");
            }, destroy: function destroy() {
                var t = this;t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove();
            }, _handleAlreadySelectedDates: function _handleAlreadySelectedDates(t, e) {
                this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()));
            }, _onShowEvent: function _onShowEvent(t) {
                this.visible || this.show();
            }, _onBlur: function _onBlur() {
                !this.inFocus && this.visible && this.hide();
            }, _onMouseDownDatepicker: function _onMouseDownDatepicker(t) {
                this.inFocus = !0;
            }, _onMouseUpDatepicker: function _onMouseUpDatepicker(t) {
                this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus();
            }, _onKeyUpGeneral: function _onKeyUpGeneral(t) {
                var e = this.$el.val();e || this.clear();
            }, _onResize: function _onResize() {
                this.visible && this.setPosition();
            }, _onMouseUpBody: function _onMouseUpBody(t) {
                t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide();
            }, _onMouseUpEl: function _onMouseUpEl(t) {
                t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4);
            }, _onKeyDown: function _onKeyDown(t) {
                var e = t.which;if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
                    if (this._getCell(this.focused).hasClass("-disabled-")) return;if (this.view != this.opts.minView) this.down();else {
                        var i = this._isSelected(this.focused, this.cellType);if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);this._handleAlreadySelectedDates(i, this.focused);
                    }
                }27 == e && this.hide();
            }, _onKeyUp: function _onKeyUp(t) {
                var e = t.which;this._unRegisterKey(e);
            }, _onHotKey: function _onHotKey(t, e) {
                this._handleHotKey(e);
            }, _onMouseEnterCell: function _onMouseEnterCell(t) {
                var i = e(t.target).closest(".datepicker--cell"),
                    s = this._getDateFromCell(i);this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update());
            }, _onMouseLeaveCell: function _onMouseLeaveCell(t) {
                var i = e(t.target).closest(".datepicker--cell");i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1;
            }, _onTimeChange: function _onTimeChange(t, e, i) {
                var s = new Date(),
                    a = this.selectedDates,
                    n = !1;a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s);
            }, _onClickCell: function _onClickCell(t, e) {
                this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e);
            }, set focused(t) {
                if (!t && this.focused) {
                    var e = this._getCell(this.focused);e.length && e.removeClass("-focus-");
                }this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t);
            }, get focused() {
                return this._focused;
            }, get parsedDate() {
                return n.getParsedDate(this.date);
            }, set date(t) {
                return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0;
            }, get date() {
                return this.currentDate;
            }, set view(t) {
                return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t);
            }, get view() {
                return this.currentView;
            }, get cellType() {
                return this.view.substring(0, this.view.length - 1);
            }, get minTime() {
                var t = n.getParsedDate(this.minDate);return new Date(t.year, t.month, t.date).getTime();
            }, get maxTime() {
                var t = n.getParsedDate(this.maxDate);return new Date(t.year, t.month, t.date).getTime();
            }, get curDecade() {
                return n.getDecade(this.date);
            } }, n.getDaysCount = function (t) {
            return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
        }, n.getParsedDate = function (t) {
            return { year: t.getFullYear(), month: t.getMonth(), fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, date: t.getDate(), fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(), day: t.getDay(), hours: t.getHours(), fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(), minutes: t.getMinutes(), fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes() };
        }, n.getDecade = function (t) {
            var e = 10 * Math.floor(t.getFullYear() / 10);return [e, e + 9];
        }, n.template = function (t, e) {
            return t.replace(/#\{([\w]+)\}/g, function (t, i) {
                return e[i] || 0 === e[i] ? e[i] : void 0;
            });
        }, n.isSame = function (t, e, i) {
            if (!t || !e) return !1;var s = n.getParsedDate(t),
                a = n.getParsedDate(e),
                h = i ? i : "day",
                o = { day: s.date == a.date && s.month == a.month && s.year == a.year, month: s.month == a.month && s.year == a.year, year: s.year == a.year };return o[h];
        }, n.less = function (t, e, i) {
            return t && e ? e.getTime() < t.getTime() : !1;
        }, n.bigger = function (t, e, i) {
            return t && e ? e.getTime() > t.getTime() : !1;
        }, n.getLeadingZeroNum = function (t) {
            return parseInt(t) < 10 ? "0" + t : t;
        }, n.resetTime = function (t) {
            return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0;
        }, e.fn.datepicker = function (t) {
            return this.each(function () {
                if (e.data(this, o)) {
                    var i = e.data(this, o);i.opts = e.extend(!0, i.opts, t), i.update();
                } else e.data(this, o, new m(this, t));
            });
        }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = { ru: { days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"], daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"], daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], today: "Сегодня", clear: "Очистить", dateFormat: "dd.mm.yyyy", timeFormat: "hh:ii", firstDay: 1 } }, e(function () {
            e(r).datepicker();
        });
    }(), function () {
        var t = { days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>', months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>', years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>' },
            s = e.fn.datepicker,
            a = s.Constructor;s.Body = function (t, i, s) {
            this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init();
        }, s.Body.prototype = { init: function init() {
                this._buildBaseHtml(), this._render(), this._bindEvents();
            }, _bindEvents: function _bindEvents() {
                this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this));
            }, _buildBaseHtml: function _buildBaseHtml() {
                this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el);
            }, _getDayNamesHtml: function _getDayNamesHtml(t, e, s, a) {
                return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a));
            }, _getCellContents: function _getCellContents(t, e) {
                var i = "datepicker--cell datepicker--cell-" + e,
                    s = new Date(),
                    n = this.d,
                    h = a.resetTime(n.minRange),
                    o = a.resetTime(n.maxRange),
                    r = n.opts,
                    c = a.getParsedDate(t),
                    d = {},
                    l = c.date;switch (e) {case "day":
                        n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));break;case "month":
                        l = n.loc[n.opts.monthsField][c.month];break;case "year":
                        var u = n.curDecade;l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""));}return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), { html: l, classes: i };
            }, _getDaysHtml: function _getDaysHtml(t) {
                var e = a.getDaysCount(t),
                    i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
                    s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
                    n = i - this.d.loc.firstDay,
                    h = 6 - s + this.d.loc.firstDay;n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) {
                    r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
                }return d;
            }, _getDayHtml: function _getDayHtml(t) {
                var e = this._getCellContents(t, "day");return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
            }, _getMonthsHtml: function _getMonthsHtml(t) {
                for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) {
                    e += this._getMonthHtml(new Date(i.year, s)), s++;
                }return e;
            }, _getMonthHtml: function _getMonthHtml(t) {
                var e = this._getCellContents(t, "month");return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>";
            }, _getYearsHtml: function _getYearsHtml(t) {
                var e = (a.getParsedDate(t), a.getDecade(t)),
                    i = e[0] - 1,
                    s = "",
                    n = i;for (n; n <= e[1] + 1; n++) {
                    s += this._getYearHtml(new Date(n, 0));
                }return s;
            }, _getYearHtml: function _getYearHtml(t) {
                var e = this._getCellContents(t, "year");return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
            }, _renderTypes: { days: function days() {
                    var t = this._getDayNamesHtml(this.d.loc.firstDay),
                        e = this._getDaysHtml(this.d.currentDate);this.$cells.html(e), this.$names.html(t);
                }, months: function months() {
                    var t = this._getMonthsHtml(this.d.currentDate);this.$cells.html(t);
                }, years: function years() {
                    var t = this._getYearsHtml(this.d.currentDate);this.$cells.html(t);
                } }, _render: function _render() {
                this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)();
            }, _update: function _update() {
                var t,
                    i,
                    s,
                    a = e(".datepicker--cell", this.$cells),
                    n = this;a.each(function (a, h) {
                    i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes);
                });
            }, show: function show() {
                this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0);
            }, hide: function hide() {
                this.$el.removeClass("active"), this.active = !1;
            }, _handleClick: function _handleClick(t) {
                var e = t.data("date") || 1,
                    i = t.data("month") || 0,
                    s = t.data("year") || this.d.parsedDate.year,
                    a = this.d;if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));var n = new Date(s, i, e),
                    h = this.d._isSelected(n, this.d.cellType);return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n);
            }, _onClickCell: function _onClickCell(t) {
                var i = e(t.target).closest(".datepicker--cell");i.hasClass("-disabled-") || this._handleClick.bind(this)(i);
            } };
    }(), function () {
        var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
            i = '<div class="datepicker--buttons"></div>',
            s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
            a = e.fn.datepicker,
            n = a.Constructor;a.Navigation = function (t, e) {
            this.d = t, this.opts = e, this.$buttonsContainer = "", this.init();
        }, a.Navigation.prototype = { init: function init() {
                this._buildBaseHtml(), this._bindEvents();
            }, _bindEvents: function _bindEvents() {
                this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this));
            }, _buildBaseHtml: function _buildBaseHtml() {
                this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed();
            }, _addButtonsIfNeed: function _addButtonsIfNeed() {
                this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear");
            }, _render: function _render() {
                var i = this._getTitle(this.d.currentDate),
                    s = n.template(t, e.extend({ title: i }, this.opts));this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus();
            }, _getTitle: function _getTitle(t) {
                return this.d.formatDate(this.opts.navTitles[this.d.view], t);
            }, _addButton: function _addButton(t) {
                this.$buttonsContainer.length || this._addButtonsContainer();var i = { action: t, label: this.d.loc[t] },
                    a = n.template(s, i);e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a);
            }, _addButtonsContainer: function _addButtonsContainer() {
                this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker);
            }, setNavStatus: function setNavStatus() {
                if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                    var t = this.d.parsedDate,
                        e = t.month,
                        i = t.year,
                        s = t.date;switch (this.d.view) {case "days":
                            this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");break;case "months":
                            this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");break;case "years":
                            var a = n.getDecade(this.d.date);this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next");}
                }
            }, _disableNav: function _disableNav(t) {
                e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-");
            }, _activateNav: function _activateNav(t) {
                e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-");
            }, _onClickNavButton: function _onClickNavButton(t) {
                var i = e(t.target).closest("[data-action]"),
                    s = i.data("action");this.d[s]();
            }, _onClickNavTitle: function _onClickNavTitle(t) {
                return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void (this.d.view = "years");
            } };
    }(), function () {
        var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
            i = e.fn.datepicker,
            s = i.Constructor;i.Timepicker = function (t, e) {
            this.d = t, this.opts = e, this.init();
        }, i.Timepicker.prototype = { init: function init() {
                var t = "input";this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this));
            }, _setTime: function _setTime(t) {
                var e = s.getParsedDate(t);this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes;
            }, _setMinTimeFromDate: function _setMinTimeFromDate(t) {
                this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes);
            }, _setMaxTimeFromDate: function _setMaxTimeFromDate(t) {
                this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes);
            }, _setDefaultMinMaxTime: function _setDefaultMinMaxTime() {
                var t = 23,
                    e = 59,
                    i = this.opts;this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes;
            }, _validateHoursMinutes: function _validateHoursMinutes(t) {
                this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes);
            }, _buildHTML: function _buildHTML() {
                var i = s.getLeadingZeroNum,
                    a = { hourMin: this.minHours, hourMax: i(this.maxHours), hourStep: this.opts.hoursStep, hourValue: this.hours, hourVisible: i(this.displayHours), minMin: this.minMinutes, minMax: i(this.maxMinutes), minStep: this.opts.minutesStep, minValue: i(this.minutes) },
                    n = s.template(t, a);this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"));
            }, _updateCurrentTime: function _updateCurrentTime() {
                var t = s.getLeadingZeroNum(this.displayHours),
                    e = s.getLeadingZeroNum(this.minutes);this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod);
            }, _updateRanges: function _updateRanges() {
                this.$hours.attr({ min: this.minHours, max: this.maxHours }).val(this.hours), this.$minutes.attr({ min: this.minMinutes, max: this.maxMinutes }).val(this.minutes);
            }, _handleDate: function _handleDate(t) {
                this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t);
            }, update: function update() {
                this._updateRanges(), this._updateCurrentTime();
            }, _getValidHoursFromDate: function _getValidHoursFromDate(t, e) {
                var i = t,
                    a = t;t instanceof Date && (i = s.getParsedDate(t), a = i.hours);var n = e || this.d.ampm,
                    h = "am";if (n) switch (!0) {case 0 == a:
                        a = 12;break;case 12 == a:
                        h = "pm";break;case a > 11:
                        a -= 12, h = "pm";}return { hours: a, dayPeriod: h };
            }, set hours(t) {
                this._hours = t;var e = this._getValidHoursFromDate(t);this.displayHours = e.hours, this.dayPeriod = e.dayPeriod;
            }, get hours() {
                return this._hours;
            }, _onChangeRange: function _onChangeRange(t) {
                var i = e(t.target),
                    s = i.attr("name");this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update();
            }, _onSelectDate: function _onSelectDate(t, e) {
                this._handleDate(e), this.update();
            }, _onMouseEnterRange: function _onMouseEnterRange(t) {
                var i = e(t.target).attr("name");e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-");
            }, _onMouseOutRange: function _onMouseOutRange(t) {
                var i = e(t.target).attr("name");this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-");
            }, _onMouseUpRange: function _onMouseUpRange(t) {
                this.d.timepickerIsActive = !1;
            } };
    }();
}(window, jQuery);
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
