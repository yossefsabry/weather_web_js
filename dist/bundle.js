/******/ (() => { // webpackBootstrap
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// ----- global variables -----
var city = 'Cairo';
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(city);
var apiKey = "ebc504ae8fffd7cbc062f1ac72525a11"; // `API_KEY` is your key in .env

/**
 * Fetches weather data from an API and updates the UI with the retrieved data.
 * @returns {Promise} A promise that resolves with the weather data.
 */
function checkWeather() {
  return _checkWeather.apply(this, arguments);
}
function _checkWeather() {
  _checkWeather = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var response_1, _data_2$main, _data_2$weather$, data_2, tempElement, nameElement, weatherElement, countryElement, humidityElement, windElement, timezoneElement;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return new Promise(function (reslove, reject) {
            loaderSpinner(true);
            try {
              var response = fetch(apiUrl + "&appid=".concat(apiKey));
              reslove(response);
            } catch (e) {
              loaderSpinner(false);
              reject("error happend: ".concat(e));
            }
          });
        case 3:
          response_1 = _context5.sent;
          _context5.prev = 4;
          _context5.next = 7;
          return new Promise(function (reslove_1, reject_1) {
            try {
              var data = response_1.json();
              reslove_1(data);
            } catch (e_1) {
              loaderSpinner(false);
              console.log(e_1);
              reject_1(e_1);
            }
          });
        case 7:
          data_2 = _context5.sent;
          tempElement = document.getElementById("temp");
          tempElement.textContent = (data_2 === null || data_2 === void 0 || (_data_2$main = data_2.main) === null || _data_2$main === void 0 ? void 0 : _data_2$main.temp) + "°C";
          tempElement.classList.add("fade-in");
          nameElement = document.querySelector(".name h1");
          nameElement.textContent = data_2 === null || data_2 === void 0 ? void 0 : data_2.name;
          nameElement.classList.add("fade-in");
          weatherElement = document.querySelector(".weather span");
          weatherElement.textContent = data_2 === null || data_2 === void 0 || (_data_2$weather$ = data_2.weather[0]) === null || _data_2$weather$ === void 0 ? void 0 : _data_2$weather$.description;
          weatherElement.classList.add("fade-in");
          countryElement = document.getElementById("country");
          countryElement.textContent = data_2.sys.country;
          countryElement.classList.add("fade-in");
          humidityElement = document.getElementById("humidity");
          humidityElement.textContent = data_2.main.humidity + "%";
          humidityElement.classList.add("fade-in");
          windElement = document.getElementById("wind_speed");
          windElement.textContent = data_2.wind.speed + "Km/h";
          windElement.classList.add("fade-in");
          timezoneElement = document.getElementById("timezone");
          timezoneElement.textContent = data_2.timezone;
          timezoneElement.classList.add("fade-in");
          changeBackgroundImage(data_2.main.temp);
          loaderSpinner(false);
          _context5.next = 37;
          break;
        case 33:
          _context5.prev = 33;
          _context5.t0 = _context5["catch"](4);
          console.log(_context5.t0);
          loaderSpinner(false);
        case 37:
          _context5.next = 43;
          break;
        case 39:
          _context5.prev = 39;
          _context5.t1 = _context5["catch"](0);
          console.log(_context5.t1);
          loaderSpinner(false);
        case 43:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 39], [4, 33]]);
  }));
  return _checkWeather.apply(this, arguments);
}
;
checkWeather();

// change the city onclick 
var items = document.querySelectorAll(".last_city ul li");
items.forEach(function (item) {
  item.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          city = item.innerHTML;
          apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(city, "&appid=").concat(apiKey);
          _context.next = 4;
          return checkWeather();
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});

/**
 * search for info for input value
 */
var searchInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var value;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault(); // Prevent default form submission behavior
          value = input.value;
          city = value;
          apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(city, "&appid=").concat(apiKey);
          _context2.next = 6;
          return checkWeather();
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function searchInfo() {
    return _ref2.apply(this, arguments);
  };
}();

// search for city inputs
var input = document.querySelector(".search #input_city");
var submit = document.querySelector("#submit");
submit.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return searchInfo();
      case 2:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
})));
// when clicking on enter key in input
input.addEventListener("keydown", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(event.key === "Enter")) {
            _context4.next = 3;
            break;
          }
          _context4.next = 3;
          return searchInfo();
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}());

/**
 * Displays the current date and time on the webpage.
 */
function displayDateTime() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var fullYear = today.getFullYear();
  var time = today.toLocaleTimeString();
  document.querySelector(".time").innerHTML = day + '-' + month + '-' + fullYear + ' , ' + time;
}
displayDateTime();
setInterval(displayDateTime, 1000);

// show menu
var menuBars = document.getElementById("menu_bar");
var menu = document.querySelector("header .container .info");
var menuOption = "hidden";
menuBars.onclick = function () {
  if (menuOption == "hidden") {
    menu.style.transform = 'translateX(0)';
    menuBars.style.position = "absolute";
    menuBars.style.zIndex = 3;
    menuBars.style.top = "0";
    menuBars.style.right = 'calc(48% + 1rem)';
    menuOption = "show";
    menuBars.style.color = "white";
    menuBars.classList.toggle("bx-x");
    menuBars.classList.toggle("bx-menu");
  } else {
    menu.style.transform = 'translateX(100%)';
    menuOption = "hidden";
    menuBars.style.cssText = "position: relative; top: 0; right: 0; z - index: 3; ";
    menuBars.classList.toggle("bx-x");
    menuBars.classList.toggle("bx-menu");
  }
  ;
};

/**
 * Sets the visibility and position of the loader spinner and shadow background.
 * @param {boolean} status - The status of the loader spinner. True to show the spinner, false to hide it.
 */
function loaderSpinner(status) {
  var laoder = document.querySelector(".spinner");
  var shad = document.querySelector(".shad-bg");
  if (status == true) {
    laoder.style.cssText = "\ntop: 50%;\nopacity: 1;\n";
    shad.style.cssText = "\nz-index: 4;\nopacity: 1;\n";
  } else {
    laoder.style.cssText = "\ntop: 90%;\nopacity: 0;\n";
    shad.style.cssText = "\nz-index: -1;\nopacity: 0;\n";
  }
  ;
}
;

/**
 * Changes the background image and color based on the given status.
 * @param {number} status - The temperature status.
 */
function changeBackgroundImage(status) {
  var body = document.body;
  var value1 = document.querySelector('.out-top');
  var value2 = document.querySelector('.in-top');
  var value3 = document.querySelector('.out-bottom');
  var value4 = document.querySelector('.in-bottom');
  if (status > 20) {
    value1.setAttribute('fill', '#bad2dc');
    value2.setAttribute('fill', '#acc163');
    value3.setAttribute('fill', '#aabef7');
    value4.setAttribute('fill', '#ffffff');
    body.style.backgroundColor = "#e8dddc";
    body.style.color = "black";
    return;
  }
  ;
  value1.setAttribute('fill', '#9b5de5');
  value2.setAttribute('fill', '#000214');
  value3.setAttribute('fill', '#440d38');
  value4.setAttribute('fill', '#1a0b18');
  body.style.backgroundColor = "#0e0014";
  body.style.color = "white";
}
;
changeBackgroundImage();
/******/ })()
;
//# sourceMappingURL=bundle.js.map