/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuefire = __webpack_require__(4);

	var _vuefire2 = _interopRequireDefault(_vuefire);

	var _vueRouter = __webpack_require__(5);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _App = __webpack_require__(6);

	var _App2 = _interopRequireDefault(_App);

	var _Admin = __webpack_require__(12);

	var _Admin2 = _interopRequireDefault(_Admin);

	var _Nav = __webpack_require__(17);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Footer = __webpack_require__(22);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Home = __webpack_require__(26);

	var _Home2 = _interopRequireDefault(_Home);

	var _Resume = __webpack_require__(31);

	var _Resume2 = _interopRequireDefault(_Resume);

	var _Portfolio = __webpack_require__(35);

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	var _Project = __webpack_require__(40);

	var _Project2 = _interopRequireDefault(_Project);

	var _List = __webpack_require__(45);

	var _List2 = _interopRequireDefault(_List);

	var _Single = __webpack_require__(56);

	var _Single2 = _interopRequireDefault(_Single);

	__webpack_require__(61);

	var _marked = __webpack_require__(68);

	var _marked2 = _interopRequireDefault(_marked);

	var _dateformat = __webpack_require__(69);

	var _dateformat2 = _interopRequireDefault(_dateformat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuefire2.default);
	_vue2.default.use(_vueRouter2.default);

	// Register non-router components
	_vue2.default.component('nav-view', _Nav2.default);
	_vue2.default.component('footer-view', _Footer2.default);

	// Vue Router setup
	var router = new _vueRouter2.default({
	  hashbang: false,
	  history: true,
	  linkActiveClass: 'active'
	});

	// Map URLs to components
	router.map({
	  '/home': {
	    name: 'Home View',
	    component: _Home2.default
	  },
	  '/portfolio': {
	    name: 'Portfolio View',
	    component: _Portfolio2.default
	  },
	  '/portfolio/:projectName': {
	    name: 'Portfolio Single Project',
	    component: _Project2.default
	  },
	  '/resume': {
	    name: 'Resume View',
	    component: _Resume2.default
	  },
	  '/blog': {
	    name: 'Blog List View',
	    component: _List2.default
	  },
	  '/blog/:postName': {
	    name: 'Blog Single Post',
	    component: _Single2.default
	  },
	  '/admin': {
	    name: 'Admin View',
	    component: _Admin2.default
	  }
	});

	router.mode = 'html5';

	router.redirect({
	  '*': '/home'
	});

	router.start(_App2.default, '#app');

	// Custom filters
	_vue2.default.filter('marked', function (string) {
	  if (string) return (0, _marked2.default)(string);
	});

	_vue2.default.filter('dated', function (digits) {
	  var newDate = new Date(digits);
	  return (0, _dateformat2.default)(newDate, "mmmm dS, yyyy");
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.27
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([^-])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore else */
	  if (inBrowser && window.postMessage && !window.importScripts && // not in WebWorker
	  !(isAndroid && !window.requestAnimationFrame) // not in Android <= 4.3
	  ) {
	      (function () {
	        var NEXT_TICK_TOKEN = '__vue__nextTick__';
	        window.addEventListener('message', function (e) {
	          if (e.source === window && e.data === NEXT_TICK_TOKEN) {
	            nextTickHandler();
	          }
	        });
	        timerFunc = function () {
	          window.postMessage(NEXT_TICK_TOKEN, '*');
	        };
	      })();
	    } else {
	    timerFunc = typeof global !== 'undefined' && global.setImmediate || setTimeout;
	  }

	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;

	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;

	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

	function peek() {
	  return str.charCodeAt(index + 1);
	}

	function next() {
	  return str.charCodeAt(++index);
	}

	function eof() {
	  return index >= len;
	}

	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}

	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}

	function isExpStart(chr) {
	  return expStartChr[chr];
	}

	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}

	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
	}

	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
	}

	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}

	function parseFilter() {
	  var filter = {};
	  var args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}

	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  var filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		findVmFromFrag: findVmFromFrag,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	        this.updateRef(value);
	      }
	    } else {
	      this.updateRef(value);
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  updateRef: function updateRef(value) {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this.vm || this._scope).$refs;
	    var refs = hash[ref];
	    var key = this._frag.scope.$key;
	    if (!refs) return;
	    if (value) {
	      if (Array.isArray(refs)) {
	        refs.push(findVmFromFrag(this._frag));
	      } else {
	        refs[key] = findVmFromFrag(this._frag);
	      }
	    } else {
	      if (Array.isArray(refs)) {
	        refs.$remove(findVmFromFrag(this._frag));
	      } else {
	        refs[key] = null;
	        delete refs[key];
	      }
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  var groupedMap = {};
	  var i, j, k, l;
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	    }
	    array.push(dir);
	  }

	  var index = 0;
	  var priorities = Object.keys(groupedMap).sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;

	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'if' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.27';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

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

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["VueFire"] = factory();
		else
			root["VueFire"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {

		var Vue // late binding

		/**
		 * Returns the key of a Firebase snapshot across SDK versions.
		 *
		 * @param {FirebaseSnapshot} snapshot
		 * @return {string|null}
		 */
		function _getKey (snapshot) {
		  return typeof snapshot.key === 'function'
		    ? snapshot.key()
		    : snapshot.key
		}

		/**
		 * Returns the original reference of a Firebase reference or query across SDK versions.
		 *
		 * @param {FirebaseReference|FirebaseQuery} refOrQuery
		 * @return {FirebaseReference}
		 */
		function _getRef (refOrQuery) {
		  if (typeof refOrQuery.ref === 'function') {
		    refOrQuery = refOrQuery.ref()
		  } else if (typeof refOrQuery.ref === 'object') {
		    refOrQuery = refOrQuery.ref
		  }

		  return refOrQuery
		}

		/**
		 * Check if a value is an object.
		 *
		 * @param {*} val
		 * @return {boolean}
		 */
		function isObject (val) {
		  return Object.prototype.toString.call(val) === '[object Object]'
		}

		/**
		 * Convert firebase snapshot into a bindable data record.
		 *
		 * @param {FirebaseSnapshot} snapshot
		 * @return {Object}
		 */
		function createRecord (snapshot) {
		  var value = snapshot.val()
		  var res = isObject(value)
		    ? value
		    : { '.value': value }
		  res['.key'] = _getKey(snapshot)
		  return res
		}

		/**
		 * Find the index for an object with given key.
		 *
		 * @param {array} array
		 * @param {string} key
		 * @return {number}
		 */
		function indexForKey (array, key) {
		  for (var i = 0; i < array.length; i++) {
		    if (array[i]['.key'] === key) {
		      return i
		    }
		  }
		  /* istanbul ignore next */
		  return -1
		}

		/**
		 * Bind a firebase data source to a key on a vm.
		 *
		 * @param {Vue} vm
		 * @param {string} key
		 * @param {object} source
		 */
		function bind (vm, key, source) {
		  var asObject = false
		  var cancelCallback = null
		  // check { source, asArray, cancelCallback } syntax
		  if (isObject(source) && source.hasOwnProperty('source')) {
		    asObject = source.asObject
		    cancelCallback = source.cancelCallback
		    source = source.source
		  }
		  if (!isObject(source)) {
		    throw new Error('VueFire: invalid Firebase binding source.')
		  }
		  var ref = _getRef(source)
		  vm.$firebaseRefs[key] = ref
		  vm._firebaseSources[key] = source
		  // bind based on initial value type
		  if (asObject) {
		    bindAsObject(vm, key, source, cancelCallback)
		  } else {
		    bindAsArray(vm, key, source, cancelCallback)
		  }
		}

		/**
		 * Define a reactive property in a given vm if it's not defined
		 * yet
		 *
		 * @param {Vue} vm
		 * @param {string} key
		 * @param {*} val
		 */
		function defineReactive (vm, key, val) {
		  if (key in vm) {
		    vm[key] = val
		  } else {
		    Vue.util.defineReactive(vm, key, val)
		  }
		}

		/**
		 * Bind a firebase data source to a key on a vm as an Array.
		 *
		 * @param {Vue} vm
		 * @param {string} key
		 * @param {object} source
		 * @param {function|null} cancelCallback
		 */
		function bindAsArray (vm, key, source, cancelCallback) {
		  var array = []
		  defineReactive(vm, key, array)

		  var onAdd = source.on('child_added', function (snapshot, prevKey) {
		    var index = prevKey ? indexForKey(array, prevKey) + 1 : 0
		    array.splice(index, 0, createRecord(snapshot))
		  }, cancelCallback)

		  var onRemove = source.on('child_removed', function (snapshot) {
		    var index = indexForKey(array, _getKey(snapshot))
		    array.splice(index, 1)
		  }, cancelCallback)

		  var onChange = source.on('child_changed', function (snapshot) {
		    var index = indexForKey(array, _getKey(snapshot))
		    array.splice(index, 1, createRecord(snapshot))
		  }, cancelCallback)

		  var onMove = source.on('child_moved', function (snapshot, prevKey) {
		    var index = indexForKey(array, _getKey(snapshot))
		    var record = array.splice(index, 1)[0]
		    var newIndex = prevKey ? indexForKey(array, prevKey) + 1 : 0
		    array.splice(newIndex, 0, record)
		  }, cancelCallback)

		  vm._firebaseListeners[key] = {
		    child_added: onAdd,
		    child_removed: onRemove,
		    child_changed: onChange,
		    child_moved: onMove
		  }
		}

		/**
		 * Bind a firebase data source to a key on a vm as an Object.
		 *
		 * @param {Vue} vm
		 * @param {string} key
		 * @param {Object} source
		 * @param {function|null} cancelCallback
		 */
		function bindAsObject (vm, key, source, cancelCallback) {
		  defineReactive(vm, key, {})
		  var cb = source.on('value', function (snapshot) {
		    vm[key] = createRecord(snapshot)
		  }, cancelCallback)
		  vm._firebaseListeners[key] = { value: cb }
		}

		/**
		 * Unbind a firebase-bound key from a vm.
		 *
		 * @param {Vue} vm
		 * @param {string} key
		 */
		function unbind (vm, key) {
		  var source = vm._firebaseSources && vm._firebaseSources[key]
		  if (!source) {
		    throw new Error(
		      'VueFire: unbind failed: "' + key + '" is not bound to ' +
		      'a Firebase reference.'
		    )
		  }
		  var listeners = vm._firebaseListeners[key]
		  for (var event in listeners) {
		    source.off(event, listeners[event])
		  }
		  vm[key] = null
		  vm.$firebaseRefs[key] = null
		  vm._firebaseSources[key] = null
		  vm._firebaseListeners[key] = null
		}

		/**
		 * Ensure the related bookkeeping variables on an instance.
		 *
		 * @param {Vue} vm
		 */
		function ensureRefs (vm) {
		  if (!vm.$firebaseRefs) {
		    vm.$firebaseRefs = Object.create(null)
		    vm._firebaseSources = Object.create(null)
		    vm._firebaseListeners = Object.create(null)
		  }
		}

		var init = function () {
		  var bindings = this.$options.firebase
		  if (typeof bindings === 'function') bindings = bindings.call(this)
		  if (!bindings) return
		  ensureRefs(this)
		  for (var key in bindings) {
		    bind(this, key, bindings[key])
		  }
		}

		var VueFireMixin = {
		  init: init, // 1.x
		  beforeCreate: init, // 2.x
		  beforeDestroy: function () {
		    if (!this.$firebaseRefs) return
		    for (var key in this.$firebaseRefs) {
		      if (this.$firebaseRefs[key]) {
		        this.$unbind(key)
		      }
		    }
		    this.$firebaseRefs = null
		    this._firebaseSources = null
		    this._firebaseListeners = null
		  }
		}

		/**
		 * Install function passed to Vue.use() in manual installation.
		 *
		 * @param {function} _Vue
		 */
		function install (_Vue) {
		  Vue = _Vue
		  Vue.mixin(VueFireMixin)

		  // use object-based merge strategy
		  var mergeStrats = Vue.config.optionMergeStrategies
		  mergeStrats.firebase = mergeStrats.methods

		  // extend instance methods
		  Vue.prototype.$bindAsObject = function (key, source, cancelCallback) {
		    ensureRefs(this)
		    bind(this, key, {
		      source: source,
		      asObject: true,
		      cancelCallback: cancelCallback
		    })
		  }

		  Vue.prototype.$bindAsArray = function (key, source, cancelCallback) {
		    ensureRefs(this)
		    bind(this, key, {
		      source: source,
		      cancelCallback: cancelCallback
		    })
		  }

		  Vue.prototype.$unbind = function (key) {
		    unbind(this, key)
		  }
		}

		// auto install
		/* istanbul ignore if */
		if (typeof window !== 'undefined' && window.Vue) {
		  install(window.Vue)
		}

		module.exports = install


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(7)
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-23fde32b&file=App.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-23fde32b&file=App.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

	// module
	exports.push([module.id, "\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n  <div>\n    <nav-view></nav-view>\n    <router-view></router-view>\n    <footer-view></footer-view>\n  </div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(15)
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/Admin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-02ee30d9&file=Admin.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Admin.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-02ee30d9&file=Admin.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Admin.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".admin-page,\ninput,\ntextarea,\nkeygen,\nselect,\nbutton {\n  font-family: 'Raleway', sans-serif; }\n\nbutton:focus {\n  outline: 0; }\n\n.admin-page {\n  margin: auto;\n  max-width: 960px;\n  width: 86%; }\n  .admin-page .not-authorized {\n    margin-top: 38%;\n    text-align: center;\n    width: 100%; }\n    .admin-page .not-authorized button {\n      background-color: #4874d4;\n      border: none;\n      color: white;\n      font-size: 16px;\n      margin: 0 auto;\n      padding: 15px 32px;\n      text-align: center;\n      text-decoration: none; }\n  .admin-page .top-bar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 48px;\n    -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-bottom: 12px; }\n    .admin-page .top-bar .top-button {\n      background-color: #4874d4;\n      border: 5px solid white;\n      border-radius: 40px;\n      color: white;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 33%;\n              flex: 1 33%;\n      font-size: 14px; }\n  .admin-page .admin-tree {\n    box-sizing: border-box;\n    display: inline-block;\n    float: left;\n    width: 32%; }\n    .admin-page .admin-tree ul {\n      list-style-type: none;\n      padding: 0; }\n      .admin-page .admin-tree ul span {\n        border-bottom: 1px solid black;\n        font-size: 12px;\n        width: 100%; }\n  .admin-page .admin-editor {\n    box-sizing: border-box;\n    display: inline-block;\n    float: right;\n    width: 68%; }\n    .admin-page .admin-editor form {\n      margin-bottom: 48px;\n      width: 100%; }\n      .admin-page .admin-editor form input,\n      .admin-page .admin-editor form textarea {\n        display: block;\n        font-size: 14px;\n        margin: 0 auto 18px auto;\n        width: 100%; }\n      .admin-page .admin-editor form input {\n        height: 24px; }\n      .admin-page .admin-editor form textarea {\n        height: 500px; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _firebase = __webpack_require__(50);

	var firebase = _interopRequireWildcard(_firebase);

	var _firebase2 = __webpack_require__(49);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// <style lang="sass?indentedSyntax">
	// .admin-page,
	// input,
	// textarea,
	// keygen,
	// select,
	// button
	//   font-family: 'Raleway', sans-serif
	//
	// button:focus
	//   outline: 0
	//
	// .admin-page
	//   margin: auto
	//   max-width: 960px
	//   width: 86%
	//
	//   .not-authorized
	//     margin-top: 38%
	//     text-align: center
	//     width: 100%
	//
	//     button
	//       background-color: #4874d4
	//       border: none
	//       color: white
	//       font-size: 16px
	//       margin: 0 auto
	//       padding: 15px 32px
	//       text-align: center
	//       text-decoration: none
	//
	//   .top-bar
	//     display: flex
	//     height: 48px
	//     flex-flow: row wrap;
	//     justify-content: flex-end;
	//     margin-bottom: 12px
	//
	//     .top-button
	//       background-color: #4874d4
	//       border: 5px solid white
	//       border-radius: 40px
	//       color: white
	//       flex: 1 33%
	//       font-size: 14px
	//
	//   .admin-tree
	//     -webkit-box-sizing: border-box
	//     -moz-box-sizing: border-box
	//     box-sizing: border-box
	//     display: inline-block
	//     float: left
	//     width: 32%
	//
	//     ul
	//       list-style-type: none
	//       padding: 0
	//
	//       span
	//         border-bottom: 1px solid black
	//         font-size: 12px
	//         width: 100%
	//
	//   .admin-editor
	//     -webkit-box-sizing: border-box
	//     -moz-box-sizing: border-box
	//     box-sizing: border-box
	//     display: inline-block
	//     float: right
	//     width: 68%
	//
	//     form
	//       margin-bottom: 48px
	//       width: 100%
	//
	//       input,
	//       textarea
	//         display: block
	//         font-size: 14px
	//         margin: 0 auto 18px auto
	//         width: 100%
	//
	//       input
	//         height: 24px
	//
	//       textarea
	//         height: 500px
	// </style>
	//
	// <template>
	//   <div class="admin-page">
	//     <div v-if="user && user.email === 'justinadenharrison@gmail.com'">
	//
	//
	//       <div class="top-bar">
	//         <button class="top-button" v-on:click="toggleCreatePost">New Blog Post</button>
	//         <button class="top-button" v-on:click="toggleCreateProject">New Portfolio Project</button>
	//         <button class="top-button" v-on:click="signOut">Sign Out</button>
	//       </div>
	//
	//       <div class="admin-tree">
	//
	//         <h5>Blog Posts</h5>
	//         <ul>
	//           <li v-for="post in posts | orderBy 'dateCreated' -1" track-by=".key">
	//             <span @click="toggleEditPost(post['.key'])">{{ post['.key'] }}</span>
	//           </li>
	//         </ul>
	//
	//         <h5>Portfolio Projects</h5>
	//         <ul>
	//           <li v-for="project in projects | orderBy 'dateCreated' -1" track-by=".key">
	//             <span @click="toggleEditProject(project['.key'])">{{ project['.key'] }}</span>
	//           </li>
	//         </ul>
	//
	//       </div>
	//
	//       <div class="admin-editor">
	//
	//         <!-- Form for creating new blog posts -->
	//         <form v-if="showCreatePost === true" @submit.prevent="setPost">
	//           <input v-model="newPost.title" placeholder="Post title">
	//           <input v-model="newPost.category" placeholder="Post category">
	//           <textarea v-model="newPost.content" placeholder="Post content"></textarea
	//           <input v-model="newPost.key" placeholder="Pretty url">
	//           <button>Add Post</button>
	//           <button type="button" @click="resetState">Cancel</button>
	//         </form>
	//
	//         <!-- Form for editing blog posts -->
	//         <form v-if="showEditPost === true" @submit.prevent="setPost">
	//           <input v-model="newPost.title">
	//           <input v-model="newPost.category">
	//           <textarea v-model="newPost.content"></textarea>
	//           <input v-model="newPost.key">
	//           <button>Submit Edit</button>
	//           <button @click="deletePost(post['.key'])">Delete Post</button>
	//         </form>
	//
	//         <!-- Form for creating new portfolio projects -->
	//         <form v-if="showCreateProject === true" @submit.prevent="setProject">
	//           <input v-model="newProject.title" placeholder="Project title">
	//           <input v-model="newProject.category" placeholder="Project category">
	//           <textarea v-model="newProject.content" placeholder="Project content"></textarea
	//           <input v-model="newProject.key" placeholder="Pretty url">
	//           <button>Add Project</button>
	//           <button type="button" @click="resetState">Cancel</button>
	//         </form>
	//
	//         <!-- Form for editing portfolio projects -->
	//         <form v-if="showEditProject === true" @submit.prevent="setProject">
	//           <input v-model="newProject.title">
	//           <input v-model="newProject.category">
	//           <textarea v-model="newProject.content"></textarea>
	//           <input v-model="newProject.key">
	//           <button>Submit Edit</button>
	//           <button @click="deleteProject(project['.key'])">Delete Project</button>
	//         </form>
	//       </div>
	//
	//     </div>
	//     <div v-else class="not-authorized">
	//       <button v-on:click="signIn">Sign In</button>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	var postsRef = _firebase2.db.ref('blog/');
	var projsRef = _firebase2.db.ref('portfolio/');

	exports.default = {
	  created: function created() {
	    // Get current user
	    var that = this;
	    firebase.auth().onAuthStateChanged(function (current) {
	      if (current) {
	        that.user = current;
	      } else {
	        that.user = null;
	      }
	    });
	  },
	  data: function data() {
	    return {
	      newPost: {},
	      newProject: {},
	      provider: new firebase.auth.GoogleAuthProvider(),
	      showCreatePost: false,
	      showEditPost: false,
	      showCreateProject: false,
	      showEditProject: false,
	      user: null
	    };
	  },

	  firebase: {
	    posts: postsRef,
	    projects: projsRef
	  },
	  methods: {
	    deletePost: function deletePost(key) {
	      _firebase2.db.ref('/blog').child(key).remove();
	    },
	    deleteProject: function deleteProject(key) {
	      _firebase2.db.ref('/portfolio').child(key).remove();
	    },
	    resetState: function resetState() {
	      this.newPost = {};
	      this.newProject = {};
	      this.showCreatePost = false;
	      this.showEditPost = false;
	      this.showCreateProject = false;
	      this.showEditProject = false;
	    },
	    setPost: function setPost() {
	      var currentDate = Date.now();
	      var setData = { title: this.newPost.title, category: this.newPost.category, content: this.newPost.content };
	      // Check if the post has already been created
	      if (this.newPost.dateCreated) {
	        setData.dateCreated = this.newPost.dateCreated;
	        setData.dateUpdated = currentDate;
	      } else {
	        setData.dateCreated = currentDate;
	      }
	      _firebase2.db.ref('blog/' + this.newPost.key).set(setData);
	      // Clear our state
	      this.resetState();
	    },
	    setProject: function setProject() {
	      var currentDate = Date.now();
	      var setData = { title: this.newProject.title, category: this.newProject.category, content: this.newProject.content };
	      // Check if the project has already been created
	      if (this.newProject.dateCreated) {
	        setData.dateCreated = this.newProject.dateCreated;
	        setData.dateUpdated = currentDate;
	      } else {
	        setData.dateCreated = currentDate;
	      }
	      _firebase2.db.ref('portfolio/' + this.newProject.key).set(setData);
	      // Clear our state
	      this.resetState();
	    },
	    signIn: function signIn() {
	      firebase.auth().signInWithRedirect(this.provider);
	    },
	    signOut: function signOut() {
	      firebase.auth().signOut().then(function () {
	        // Sign-out successful
	        console.log("Sign out was successful");
	      }, function (error) {
	        // An error happened
	        console.log("A sign out error happened");
	      });
	    },
	    toggleCreatePost: function toggleCreatePost() {
	      this.resetState();
	      this.showCreatePost = true;
	    },
	    toggleEditPost: function toggleEditPost(key) {
	      this.resetState();
	      // Load post to edit into form
	      var that = this;
	      _firebase2.db.ref('/blog').child(key).once('value').then(function (snap) {
	        that.newPost.title = snap.val().title;
	        that.newPost.category = snap.val().category;
	        that.newPost.content = snap.val().content;
	        that.newPost.key = snap.key;
	        that.newPost.dateCreated = snap.val().dateCreated;
	      });
	      // Show form
	      this.showEditPost = true;
	    },
	    toggleCreateProject: function toggleCreateProject() {
	      this.resetState();
	      this.showCreateProject = true;
	    },
	    toggleEditProject: function toggleEditProject() {
	      this.resetState();
	      // Load project to edit into form
	      var that = this;
	      _firebase2.db.ref('/portfolio').child(key).once('value').then(function (snap) {
	        that.newProject.title = snap.val().title;
	        that.newProject.category = snap.val().category;
	        that.newProject.content = snap.val().content;
	        that.newProject.key = snap.key;
	        that.newProject.dateCreated = snap.val().dateCreated;
	      });
	      // Show form
	      this.showEditProject = true;
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"admin-page\">\n    <div v-if=\"user && user.email === 'justinadenharrison@gmail.com'\">\n      \n\n      <div class=\"top-bar\">\n        <button class=\"top-button\" v-on:click=\"toggleCreatePost\">New Blog Post</button>\n        <button class=\"top-button\" v-on:click=\"toggleCreateProject\">New Portfolio Project</button>\n        <button class=\"top-button\" v-on:click=\"signOut\">Sign Out</button>\n      </div>\n\n      <div class=\"admin-tree\">\n\n        <h5>Blog Posts</h5>\n        <ul>\n          <li v-for=\"post in posts | orderBy 'dateCreated' -1\" track-by=\".key\">\n            <span @click=\"toggleEditPost(post['.key'])\">{{ post['.key'] }}</span>\n          </li>\n        </ul>\n\n        <h5>Portfolio Projects</h5>\n        <ul>\n          <li v-for=\"project in projects | orderBy 'dateCreated' -1\" track-by=\".key\">\n            <span @click=\"toggleEditProject(project['.key'])\">{{ project['.key'] }}</span>\n          </li>\n        </ul>\n\n      </div>\n\n      <div class=\"admin-editor\">\n\n        <!-- Form for creating new blog posts -->\n        <form v-if=\"showCreatePost === true\" @submit.prevent=\"setPost\">\n          <input v-model=\"newPost.title\" placeholder=\"Post title\">\n          <input v-model=\"newPost.category\" placeholder=\"Post category\">\n          <textarea v-model=\"newPost.content\" placeholder=\"Post content\"></textarea\n          <input v-model=\"newPost.key\" placeholder=\"Pretty url\">\n          <button>Add Post</button>\n          <button type=\"button\" @click=\"resetState\">Cancel</button>\n        </form>\n\n        <!-- Form for editing blog posts -->\n        <form v-if=\"showEditPost === true\" @submit.prevent=\"setPost\">\n          <input v-model=\"newPost.title\">\n          <input v-model=\"newPost.category\">\n          <textarea v-model=\"newPost.content\"></textarea>\n          <input v-model=\"newPost.key\">\n          <button>Submit Edit</button>\n          <button @click=\"deletePost(post['.key'])\">Delete Post</button>\n        </form>\n\n        <!-- Form for creating new portfolio projects -->\n        <form v-if=\"showCreateProject === true\" @submit.prevent=\"setProject\">\n          <input v-model=\"newProject.title\" placeholder=\"Project title\">\n          <input v-model=\"newProject.category\" placeholder=\"Project category\">\n          <textarea v-model=\"newProject.content\" placeholder=\"Project content\"></textarea\n          <input v-model=\"newProject.key\" placeholder=\"Pretty url\">\n          <button>Add Project</button>\n          <button type=\"button\" @click=\"resetState\">Cancel</button>\n        </form>\n\n        <!-- Form for editing portfolio projects -->\n        <form v-if=\"showEditProject === true\" @submit.prevent=\"setProject\">\n          <input v-model=\"newProject.title\">\n          <input v-model=\"newProject.category\">\n          <textarea v-model=\"newProject.content\"></textarea>\n          <input v-model=\"newProject.key\">\n          <button>Submit Edit</button>\n          <button @click=\"deleteProject(project['.key'])\">Delete Project</button>\n        </form>\n      </div>\n      \n    </div>\n    <div v-else class=\"not-authorized\">\n      <button v-on:click=\"signIn\">Sign In</button>\n    </div>\n  </div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(20)
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/Nav.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8b2a7da6&file=Nav.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Nav.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8b2a7da6&file=Nav.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Nav.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".nav-bar {\n  box-sizing: border-box;\n  font: 22px 'Raleway', sans-serif;\n  height: 48px;\n  margin-top: 35px;\n  margin-bottom: 36px; }\n  .nav-bar .nav-inner-container {\n    height: 48px;\n    margin: auto;\n    max-width: 960px;\n    width: 86%; }\n    .nav-bar .nav-inner-container ul {\n      height: 48px;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      width: 100%; }\n      .nav-bar .nav-inner-container ul .float-left {\n        float: left; }\n      .nav-bar .nav-inner-container ul .float-right {\n        float: right; }\n      .nav-bar .nav-inner-container ul li {\n        height: 48px; }\n        .nav-bar .nav-inner-container ul li .nav-bar-title {\n          color: black;\n          display: block;\n          font-size: 28px;\n          margin-top: 7px;\n          text-decoration: none; }\n        .nav-bar .nav-inner-container ul li .nav-bar-link {\n          color: #646464;\n          display: block;\n          font-size: 16px;\n          padding: 12px 8px;\n          text-decoration: none; }\n        .nav-bar .nav-inner-container ul li .v-link-active {\n          color: black; }\n        .nav-bar .nav-inner-container ul li .fa-bars {\n          margin-top: 13px; }\n\n.nav-panel {\n  box-sizing: border-box;\n  background-color: white;\n  font: 28px 'Raleway', monospace;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 119px;\n  right: 0;\n  bottom: 42px; }\n  .nav-panel ul {\n    list-style-type: none;\n    margin: 7% 0;\n    padding: 0;\n    width: 100%; }\n    .nav-panel ul li {\n      float: none;\n      height: 48px;\n      padding: 0 7%;\n      width: 100%;\n      text-align: center;\n      box-sizing: border-box; }\n      .nav-panel ul li .nav-panel-link {\n        color: #191919;\n        display: block;\n        text-decoration: none; }\n\n.hamburger {\n  display: block; }\n\n.togglable {\n  display: none; }\n\n@media only screen and (min-width: 768px) {\n  .hamburger {\n    display: none; }\n  .togglable {\n    display: block; } }\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <style lang="sass?indentedSyntax">
	// .nav-bar
	//   -webkit-box-sizing: border-box
	//   -moz-box-sizing: border-box
	//   box-sizing: border-box
	//   font: 22px 'Raleway', sans-serif
	//   height: 48px
	//   margin-top: 35px
	//   margin-bottom: 36px
	//
	//   .nav-inner-container
	//     height: 48px
	//     margin: auto
	//     max-width: 960px
	//     width: 86%
	//
	//     ul
	//       height: 48px
	//       list-style-type: none
	//       margin: 0
	//       padding: 0
	//       width: 100%
	//
	//       .float-left
	//         float: left
	//
	//       .float-right
	//         float: right
	//
	//       li
	//         height: 48px
	//
	//         .nav-bar-title
	//           color: black
	//           display: block
	//           font-size: 28px
	//           margin-top: 7px
	//           text-decoration: none
	//
	//         .nav-bar-link
	//           color: rgb(100, 100, 100)
	//           display: block
	//           font-size: 16px
	//           padding: 12px 8px
	//           text-decoration: none
	//
	//         .v-link-active
	//           color: black
	//
	//         .fa-bars
	//           margin-top: 13px
	//
	// .nav-panel
	//   -webkit-box-sizing: border-box
	//   -moz-box-sizing: border-box
	//   box-sizing: border-box
	//   background-color: rgb(255, 255, 255)
	//   font: 28px 'Raleway', monospace
	//   width: 100%
	//   position: absolute
	//   left: 0
	//   top: 119px
	//   right: 0
	//   bottom: 42px
	//
	//   ul
	//     list-style-type: none
	//     margin: 7% 0
	//     padding: 0
	//     width: 100%
	//
	//     li
	//       float: none
	//       height: 48px
	//       padding: 0 7%
	//       width: 100%
	//       text-align: center
	//       box-sizing: border-box
	//
	//       .nav-panel-link
	//         color: rgb(25, 25, 25)
	//         display: block
	//         text-decoration: none
	//
	//
	// .hamburger
	//   display: block
	//
	// .togglable
	//   display: none
	//
	// @media only screen and (min-width: 768px)
	//   .hamburger
	//     display: none
	//
	//   .togglable
	//     display: block
	//
	// </style>
	//
	// <template>
	//   <div class="nav-bar">
	//     <div class="nav-inner-container">
	//       <ul>
	//         <li class="float-left"><a class="nav-bar-title" href="/">JUSTIN HARRISON</a></li>
	//         <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Resume View' }">resume</a></li>
	//         <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Blog List View' }">blog</a></li>
	//         <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Portfolio View' }">portfolio</a></li>
	//         <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Home View' }">about</a></li>
	//         <li class="float-right hamburger"><i v-on:click="togglePanel" class="fa fa-bars fa-lg"></i></li>
	//       </ul>
	//     </div>
	//     <div v-show="showPanel" transition="nav-panel" class="nav-panel">
	//      <ul>
	//        <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Home View' }">About</a></li>
	//        <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Portfolio View' }">Portfolio</a></li>
	//        <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Blog List View' }">Blog</a></li>
	//        <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Resume View' }">Resume</a></li>
	//      </ul>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      showPanel: false
	    };
	  },

	  methods: {
	    handleResize: function handleResize() {
	      if (window.innerWidth > 768) {
	        this.showPanel = false;
	      }
	    },
	    togglePanel: function togglePanel() {
	      this.showPanel = !this.showPanel;
	    }
	  },
	  ready: function ready() {
	    window.addEventListener('resize', this.handleResize);
	  }
	};
	// </script>
	//

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"nav-bar\">\n    <div class=\"nav-inner-container\">\n      <ul>\n        <li class=\"float-left\"><a class=\"nav-bar-title\" href=\"/\">JUSTIN HARRISON</a></li>\n        <li class=\"float-right togglable\"><a class=\"nav-bar-link\" v-link=\"{ name: 'Resume View' }\">resume</a></li>\n        <li class=\"float-right togglable\"><a class=\"nav-bar-link\" v-link=\"{ name: 'Blog List View' }\">blog</a></li>\n        <li class=\"float-right togglable\"><a class=\"nav-bar-link\" v-link=\"{ name: 'Portfolio View' }\">portfolio</a></li>\n        <li class=\"float-right togglable\"><a class=\"nav-bar-link\" v-link=\"{ name: 'Home View' }\">about</a></li>\n        <li class=\"float-right hamburger\"><i v-on:click=\"togglePanel\" class=\"fa fa-bars fa-lg\"></i></li>\n      </ul>\n    </div>\n    <div v-show=\"showPanel\" transition=\"nav-panel\" class=\"nav-panel\">\n     <ul>\n       <li><a class=\"nav-panel-link\" v-on:click=\"togglePanel\" v-link=\"{ name: 'Home View' }\">About</a></li>\n       <li><a class=\"nav-panel-link\" v-on:click=\"togglePanel\" v-link=\"{ name: 'Portfolio View' }\">Portfolio</a></li>\n       <li><a class=\"nav-panel-link\" v-on:click=\"togglePanel\" v-link=\"{ name: 'Blog List View' }\">Blog</a></li>\n       <li><a class=\"nav-panel-link\" v-on:click=\"togglePanel\" v-link=\"{ name: 'Resume View' }\">Resume</a></li>\n     </ul>\n    </div>\n  </div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/Footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-edbe92fe&file=Footer.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Footer.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-edbe92fe&file=Footer.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Footer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".footer {\n  background-color: white;\n  border-top-style: double;\n  position: fixed;\n  bottom: 0px;\n  color: #777777;\n  font: 13px 'Ubuntu', sans-serif;\n  width: 100%; }\n  .footer .footer-container {\n    margin: 12px auto;\n    max-width: 960px;\n    width: 86%; }\n  .footer a {\n    color: #4874d4;\n    text-decoration: none; }\n  .footer .footer-links {\n    float: right; }\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"footer\">\n    <div class=\"footer-container\">\n      &copy; 2016 Justin Harrison <span class=\"footer-links\"><a href=\"https://github.com/jhar\">github</a> / <a href=\"https://www.linkedin.com/in/justinadenharrison\">linkedin</a> / <a href=\"https://twitter.com/j_aden_harrison\">twitter</a></span>\n    </div>\n  </div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(27)
	__vue_script__ = __webpack_require__(29)
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/Home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-086f6176&file=Home.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-086f6176&file=Home.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "canvas {\n  position: fixed;\n  top: 0;\n  z-index: -1; }\n\n.about-me {\n  font-family: 'Raleway', sans-serif;\n  margin: auto;\n  max-width: 960px;\n  width: 86%; }\n  .about-me .emph-p {\n    color: #646464;\n    font-size: 25px;\n    letter-spacing: 1.7px; }\n  .about-me .small-p {\n    color: #969696;\n    font-size: 14px; }\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	// <style lang="sass?indentedSyntax">
	// canvas
	//   position: fixed
	//   top: 0
	//   z-index: -1
	//
	// .about-me
	//   font-family: 'Raleway', sans-serif
	//   margin: auto
	//   max-width: 960px
	//   width: 86% 
	//
	//   .emph-p
	//     color: rgb(100, 100, 100)
	//     font-size: 25px
	//     letter-spacing: 1.7px
	//
	//   .small-p
	//     color: rgb(150, 150, 150)
	//     font-size: 14px
	//
	// </style>
	//
	// <template>
	//   <div class="about-me">
	//     <p class="emph-p">
	//       Hi, I'm Justin Harrison. I'm a software developer living in Pasadena. I specialize in web application development and particularly enjoy the world of JavaScript.
	//     </p>
	//     <p class="small-p">
	//       I'm currently experimenting with the p5.js library for creative coding while auditing Daniel Shiffman's <i>Nature of Code</i> course on Kadenze. I'm also actively developing this website with Vue.js and Firebase. When I'm not coding, I'm likely thinking and writing about professional boxing.
	//     </p>
	//     <p class="small-p">
	//       You can <a href="mailto:justinadenharrison@gmail.com" target="blank">email</a> me if you want to say hello.
	//     </p>
	//   </div>
	// </template>
	//
	// <script>
	//  import p5 from 'p5'
	//  import { sketch } from '../sketches/example.js'
	//
	//  export default {
	//    created() {
	//      var myp5 = new p5(sketch)
	//      console.log("Got here")
	//    }
	//  }
	// </script>
	//
	"use strict";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"about-me\">\n    <p class=\"emph-p\">\n      Hi, I'm Justin Harrison. I'm a software developer living in Pasadena. I specialize in web application development and particularly enjoy the world of JavaScript.\n    </p>\n    <p class=\"small-p\">\n      I'm currently experimenting with the p5.js library for creative coding while auditing Daniel Shiffman's <i>Nature of Code</i> course on Kadenze. I'm also actively developing this website with Vue.js and Firebase. When I'm not coding, I'm likely thinking and writing about professional boxing.\n    </p>\n    <p class=\"small-p\">\n      You can <a href=\"mailto:justinadenharrison@gmail.com\" target=\"blank\">email</a> me if you want to say hello.\n    </p>\n  </div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(32)
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/Resume.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-13403013&file=Resume.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Resume.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-13403013&file=Resume.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Resume.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".my-resume {\n  font-family: 'Raleway', sans-serif;\n  margin: auto;\n  max-width: 960px;\n  width: 86%; }\n  .my-resume .main-title {\n    font-size: 28px; }\n  .my-resume p {\n    color: #676767;\n    font-size: 16px; }\n  .my-resume h3 {\n    color: #4874d4; }\n  .my-resume .title {\n    font-weight: bold; }\n  .my-resume .loc,\n  .my-resume .dates {\n    color: #676767;\n    font-size: 12px; }\n  .my-resume .blk-1,\n  .my-resume .blk-3 {\n    box-sizing: border-box;\n    display: inline-block;\n    float: left;\n    min-height: 57px;\n    padding-right: 40px;\n    width: 100%; }\n  .my-resume .blk-2,\n  .my-resume .blk-4 {\n    box-sizing: border-box;\n    display: inline-block;\n    float: right;\n    width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .my-resume .blk-1,\n    .my-resume .blk-3 {\n      width: 62%; }\n    .my-resume .blk-2,\n    .my-resume .blk-4 {\n      width: 38%; }\n    .my-resume .blk-3,\n    .my-resume .blk-4 {\n      margin-bottom: 75px; } }\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"my-resume\">\n    <div class=\"header\">\n      <div class=\"blk-1\">\n       <span class=\"main-title\">Web Application Developer</span>\n      </div>\n      <div class=\"blk-2\">\n        <span class=\"bold\">(206) 377-9027</span><br>\n        <span class=\"bold\">Skype: justin.a.harrison</span><br>\n        <a href=\"mailto:justinadenharrison@gmail.com\" target=\"_top\">justinadenharrison@gmail.com</a><br>\n      </div>\n    </div>\n    <div class=\"blk-3\">\n\n      <h3>Work Experience</h3>\n\n      <span class=\"title\">Web Engineer</span><br>\n      <span class=\"org\">Advercalls, Inc</span><br>\n      <span class=\"loc\">Los Angeles, CA</span><br>\n      <span class=\"dates\">Feb 2016 - Jul 2016</span>\n      <p>Developed a third-party JavaScript lead gen app. Wrote back-end integrations for marketing services like ActiveCampaign. Wrote scripts to clean redundancies and errors from a large database, built a web directory service to navigate the data, then incorporated user profiles, a membership service, and InfusionSoft for payment processing. Conducted research and feasibility studies. Recruited, managed and wrote specs for off-shore developers. Designed and developed APIs for our own services. Maintained dozens of websites.</p>\n      \n      <span class=\"title\">Contract Software Developer</span><br>\n      <span class=\"org\">Not That This, LLC</span><br>\n      <span class=\"loc\">Burbank, CA</span><br>\n      <span class=\"dates\">Nov 2015 - Jan 2016</span>\n      <p>Converted PSD designs to pixel perfect UI with Enyo.js for an enterprise Cisco IoT project.</p>\n      \n      <span class=\"title\">Web Content Evaluator</span><br>\n      <span class=\"org\">FlexaSoft</span><br>\n      <span class=\"loc\">Redmond, WA</span><br>\n      <span class=\"dates\">Oct 2014 - Jun 2015</span><br>\n      <p>Evaluated the accuracy and relevancy of Microsoft Bing search results.</p>\n      \n      <span class=\"title\">Web Developer</span><br>\n      <span class=\"org\">University of California Institute for Research in the Arts</span><br>\n      <span class=\"loc\">Santa Barbara, CA</span><br>\n      <span class=\"dates\">Jul 2014 - Sep 2014</span><br>\n      <p>Worked on a new website for the UCIRA. Merged their main site and State of the Arts blog. Worked to create a platform for California art researchers to network and display their work. The project was cancelled after funding cuts.</p>\n\n      <span class=\"title\">IT Helpdesk Assistant</span><br>\n      <span class=\"org\">Davidson Library</span><br>\n      <span class=\"loc\">Santa Barbara, CA</span><br>\n      <span class=\"dates\">Mar 2013 - Jul 2014</span><br>\n      <p>Provided technical assistance and support related to computer networks, hardware, and software. Responded to calls and emails and tracked issues with JIRA to help diagnose, solve, and document problems. Managed hardware inventory.</p>\n\n\n    </div>\n\n    <div class=\"blk-4\">\n\n\n      <h3>Education and Awards</h3>\n\n      <span class=\"title\">BA in Art with High Honors</span><br>\n      <span class=\"org\">University of California</span><br>\n      <span class=\"loc\">Santa Barbara, CA</span><br>\n      <span class=\"dates\">Graduated 2014</span><br>\n      <p>Promising Artist Achievement Award, William Dole Award, Faculty Award of Distinction x2, Dean's Honors x5</p>\n\n      <h3 class=\"mono\">Professional Development</h3>\n\n      <span class=\"title\">MongoDB for Node.js Developers</span><br>\n      <span class=\"org\">MongoDB University</span><br>\n      <span class=\"dates\">Completed 2015</span><br><br>\n\n      <span class=\"title\">Front-End Web Developer Nanodegree</span><br>\n      <span class=\"org\">Udacity</span><br>\n      <span class=\"dates\">Completed 2015</span><br>\n\n      <h3>Skills</h3>\n\n      <p>HTML, CSS, JavaScript, PHP, MySQL, MongoDB, Unix, Bootstrap, jQuery, React, Knockout, Vue, Node, NPM, Express, SASS, LESS, Firebase, AWS, Webpack, Browserify, Gulp, WordPress, p5.js, Processing, Chrome Developer Tools, AJAX, and Google.</p>\n\n      <h3>Volunteering</h3>\n\n      <span class=\"title\">Shopify Administrator</span><br>\n      <span class=\"org\">Arroyo Food Co-op</span><br>\n      <span class=\"loc\">Pasadena, CA</span><br>\n      <span class=\"dates\">Feb 2016 - May 2016</span><br><br>\n\n      <span class=\"title\">Cook and Server</span><br>\n      <span class=\"org\">Food Not Bombs</span><br>\n      <span class=\"loc\">Goleta, CA</span><br>\n      <span class=\"dates\">Jan 2013 - Sep 2014</span>\n\n\n\n\n\n\n    </div>\n\n  </div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(36)
	__vue_script__ = __webpack_require__(38)
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/Portfolio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4929f55c&file=Portfolio.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Portfolio.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4929f55c&file=Portfolio.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Portfolio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".my-portfolio {\n  font-family: 'Raleway', sans-serif;\n  margin: auto;\n  max-width: 960px;\n  width: 86%; }\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	// <style lang="sass?indentedSyntax">
	// .my-portfolio
	//   font-family: 'Raleway', sans-serif
	//   margin: auto
	//   max-width: 960px
	//   width: 86%
	//
	// </style>
	//
	// <template>
	//   <h2>Placeholder text</h2>
	// </template>
	//
	// <script>

	// </script>
	//
	"use strict";

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n  <h2>Placeholder text</h2>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(43)
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/Project.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2416af23&file=Project.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Project.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2416af23&file=Project.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Project.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".my-portfolio {\n  font-family: 'Raleway', sans-serif;\n  margin: auto;\n  max-width: 960px;\n  width: 86%; }\n", ""]);

	// exports


/***/ },
/* 43 */
/***/ function(module, exports) {

	// <style lang="sass?indentedSyntax">
	// .my-portfolio
	//   font-family: 'Raleway', sans-serif
	//   margin: auto
	//   max-width: 960px
	//   width: 86%
	//
	// </style>
	//
	// <template>
	//   <h2>Placeholder text</h2>
	// </template>
	//
	// <script>

	// </script>
	//
	"use strict";

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "\n  <h2>Placeholder text</h2>\n";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(46)
	__vue_script__ = __webpack_require__(48)
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/List.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-68f81384&file=List.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./List.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-68f81384&file=List.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./List.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".blog-list-view {\n  font-family: 'Raleway', monospace;\n  margin: auto;\n  max-width: 960px;\n  width: 86%; }\n  .blog-list-view .italic {\n    font-style: italic; }\n  .blog-list-view .date {\n    color: #676767;\n    display: block;\n    font-size: 12px;\n    width: 100%; }\n  .blog-list-view h2 {\n    color: #4874d4;\n    font-size: 18px;\n    text-transform: capitalize; }\n  .blog-list-view ul {\n    list-style-type: none;\n    padding: 0; }\n    .blog-list-view ul .blog-list-link {\n      text-decoration: none;\n      width: 100%; }\n", ""]);

	// exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _firebase = __webpack_require__(49);

	var postsRef = _firebase.db.ref('blog/'); // <style lang="sass?indentedSyntax">
	// .blog-list-view
	//   font-family: 'Raleway', monospace
	//   margin: auto
	//   max-width: 960px
	//   width: 86%
	//
	//   .italic
	//     font-style: italic
	//
	//   .date
	//     color: rgb(103, 103, 103)
	//     display: block
	//     font-size: 12px
	//     width: 100%
	//
	//   h2
	//     color: #4874d4
	//     font-size: 18px
	//     text-transform: capitalize
	//
	//   ul
	//     list-style-type: none
	//     padding: 0
	//
	//     .blog-list-link
	//       text-decoration: none
	//       width: 100%
	// </style>
	//
	// <template>
	//   <div class="blog-list-view">
	//     <ul>
	//       <li v-for="post in posts | orderBy 'dateCreated' -1" track-by=".key">
	//         <a class="blog-list-link" v-link="{ name: 'Blog Single Post', params: { postName: post['.key'] } }">
	//           <span class="date">{{ post.dateCreated | dated }}</span>
	//           <h2>{{ post.title }}</h2>
	//         </a>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  firebase: {
	    posts: postsRef
	  }
	};
	// </script>
	//
	//

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.storage = exports.db = undefined;

	var _firebase = __webpack_require__(50);

	var firebase = _interopRequireWildcard(_firebase);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// Firebase setup
	var config = {
	  apiKey: "AIzaSyBvbih18hAFNeR_kptuLck_1iLYbKFTk90",
	  authDomain: "justin-harrison.firebaseapp.com",
	  databaseURL: "https://justin-harrison.firebaseio.com",
	  storageBucket: "justin-harrison.appspot.com"
	};
	var firebaseApp = firebase.initializeApp(config);
	var db = exports.db = firebaseApp.database();
	var storage = exports.storage = firebaseApp.storage();

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Firebase libraries for browser - npm package.
	 *
	 * Usage:
	 *
	 *   firebase = require('firebase');
	 */
	var firebase = __webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	module.exports = firebase;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.4.0
	    Build: 3.4.0-rc.3
	    Terms: https://developers.google.com/terms */
	var firebase = null; (function() { var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,k=function(){k=function(){};h.Symbol||(h.Symbol=ba)},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++},n=function(){k();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));
	"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});n=function(){}},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},da=function(a){n();a={next:a};a[h.Symbol.iterator]=function(){return this};return a},q=this,r=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);
	if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},v=function(a){return"function"==t(a)},ea=function(a,
	b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(null,arguments)},x=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},y=function(a,b){function c(){}c.prototype=b.prototype;a.ga=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var z;z="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
	function __decorate(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;g=z.Reflect;if("object"===typeof g&&"function"===typeof g.decorate)f=g.decorate(a,b,c,d);else for(var l=a.length-1;0<=l;l--)if(g=a[l])f=(3>e?g(f):3<e?g(b,c,f):g(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}function __metadata(a,b){var c=z.Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
	var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,f){function g(a){try{p(d.next(a))}catch(u){f(u)}}function l(a){try{p(d.throw(a))}catch(u){f(u)}}function p(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(g,l)}p((d=d.apply(a,b)).next())})};"undefined"!==typeof z.L&&z.L||(z.ca=__extends,z.ba=__decorate,z.da=__metadata,z.ea=__param,z.aa=__awaiter);var A=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};y(A,Error);A.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var B=function(a,b){b.unshift(a);A.call(this,ga.apply(null,b));b.shift()};y(B,A);B.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new B(""+e,f||[]);},C=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2))},D=function(a,b,c){v(a)||ha("Expected function but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2))};var E=function(a,b,c){this.S=c;this.M=a;this.U=b;this.s=0;this.o=null};E.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.M();return a};E.prototype.put=function(a){this.U(a);this.s<this.S&&(this.s++,a.next=this.o,this.o=a)};var F;a:{var ia=q.navigator;if(ia){var ja=ia.userAgent;if(ja){F=ja;break a}}F=""};var ka=function(a){q.setTimeout(function(){throw a;},0)},G,la=function(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==F.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
	"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==F.indexOf("Trident")&&-1==F.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.F;c.F=null;a()}};return function(a){d.next={F:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
	document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};var H=function(){this.v=this.f=null},ma=new E(function(){return new I},function(a){a.reset()},100);H.prototype.add=function(a,b){var c=ma.get();c.set(a,b);this.v?this.v.next=c:(C(!this.f),this.f=c);this.v=c};H.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a};var I=function(){this.next=this.scope=this.B=null};I.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
	I.prototype.reset=function(){this.next=this.scope=this.B=null};var M=function(a,b){J||na();L||(J(),L=!0);oa.add(a,b)},J,na=function(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);J=function(){a.then(pa)}}else J=function(){var a=pa;!v(q.setImmediate)||q.Window&&q.Window.prototype&&-1==F.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(G||(G=la()),G(a)):q.setImmediate(a)}},L=!1,oa=new H,pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope)}catch(b){ka(b)}ma.put(a)}L=!1};var O=function(a,b){this.b=0;this.K=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=r)try{var c=this;a.call(b,function(a){N(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}N(c,3,a)})}catch(d){N(this,3,d)}},qa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1};qa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1};
	var ra=new E(function(){return new qa},function(a){a.reset()},100),sa=function(a,b,c){var d=ra.get();d.c=a;d.h=b;d.context=c;return d},ua=function(a,b,c){ta(a,b,c,null)||M(x(b,a))};O.prototype.then=function(a,b,c){null!=a&&D(a,"opt_onFulfilled should be a function.");null!=b&&D(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,v(a)?a:null,v(b)?b:null,c)};O.prototype.then=O.prototype.then;O.prototype.$goog_Thenable=!0;
	O.prototype.X=function(a,b){return va(this,null,a,b)};var xa=function(a,b){a.g||2!=a.b&&3!=a.b||wa(a);C(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new O(function(a,g){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(K){g(K)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(K){g(K)}}:g});e.child.u=a;xa(a,e);return e.child};O.prototype.Y=function(a){C(1==this.b);this.b=0;N(this,2,a)};O.prototype.Z=function(a){C(1==this.b);this.b=0;N(this,3,a)};
	var N=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.Y,a.Z,a)||(a.K=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)))},ta=function(a,b,c,d){if(a instanceof O)return null!=b&&D(b,"opt_onFulfilled should be a function."),null!=c&&D(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||r,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),
	!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var f=a.then;if(v(f))return za(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1},za=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},l=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,l)}catch(p){l(p)}},wa=function(a){a.A||(a.A=!0,M(a.O,a))},Aa=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&C(null!=b.c);return b};
	O.prototype.O=function(){for(var a;a=Aa(this);){var b=this.b,c=this.K;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.c.call(a.context):Ba(a,b,c)}catch(e){Ca.call(null,e)}ra.put(a)}this.A=!1};var Ba=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c)},ya=function(a,b){a.m=!0;M(function(){a.m&&Ca.call(null,b)})},Ca=ka;function P(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=P(a[c],b[c]));return a};var Da=Error.captureStackTrace,R=function(a,b){this.code=a;this.message=b;if(Da)Da(this,Q.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};R.prototype=Object.create(Error.prototype);R.prototype.constructor=R;R.prototype.name="FirebaseError";var Q=function(a,b,c){this.V=a;this.W=b;this.N=c;this.pattern=/\{\$([^}]+)}/g};
	Q.prototype.create=function(a,b){void 0===b&&(b={});var c=this.N[a];a=this.V+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.W+": "+c+" ("+a+").",c=new R(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};O.all=function(a){return new O(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],ua(p,x(f,l),g);else b(e)})};O.resolve=function(a){if(a instanceof O)return a;var b=new O(r);N(b,2,a);return b};O.reject=function(a){return new O(function(b,c){c(a)})};O.prototype["catch"]=O.prototype.X;var S=O;"undefined"!==typeof Promise&&(S=Promise);var Ea=S;function Fa(a,b){a=new T(a,b);return a.subscribe.bind(a)}var T=function(a,b){var c=this;this.a=[];this.J=0;this.task=Ea.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};T.prototype.next=function(a){U(this,function(b){b.next(a)})};T.prototype.error=function(a){U(this,function(b){b.error(a)});this.close(a)};T.prototype.complete=function(){U(this,function(a){a.complete()});this.close()};
	T.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Ga(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=V);void 0===e.error&&(e.error=V);void 0===e.complete&&(e.complete=V);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.G?e.error(d.G):e.complete()}catch(f){}});this.a.push(e);return a};
	T.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.J,0===this.J&&void 0!==this.D&&this.D(this))};var U=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ha(a,c,b)},Ha=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){}})};T.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.G=a),this.task.then(function(){b.a=void 0;b.D=void 0}))};
	function Ga(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];n();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function V(){};var W=S,X=function(a,b,c){var d=this;this.H=c;this.I=!1;this.i={};this.C=b;this.T=P(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){var b=c.INTERNAL.useAsService(d,a);null!==b&&(d[a]=d.R.bind(d,b))})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.H.INTERNAL.removeApp(a.C);return W.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete()}))}).then(function(){a.I=!0;a.i={}})};
	X.prototype.R=function(a){Y(this);void 0===this.i[a]&&(this.i[a]=this.H.INTERNAL.factories[a](this,this.P.bind(this)));return this.i[a]};X.prototype.P=function(a){P(this,a)};var Y=function(a){a.I&&Z(Ia("deleted",{name:a.C}))};h.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.C}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.T}}});X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
	function Ja(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Z("noApp",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&f[d])f[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth","serverAuth"in e||Z("serverAuthMissing"));return c}var d={},e={},f={},g={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",
	{name:c+""});void 0!==d[c]&&Z("dupApp",{name:c});a=new X(a,c,g);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||P(a,{INTERNAL:{getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,u){e[b]&&Z("dupService",{name:b});e[b]=c;u&&(f[b]=u);c=function(c){void 0===c&&(c=a());return c[b]()};void 0!==d&&P(c,d);return g[b]=c},createFirebaseNamespace:Ja,
	extendNamespace:function(a){P(g,a)},createSubscribe:Fa,ErrorFactory:Q,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:O,deepExtend:P}};g["default"]=g;Object.defineProperty(g,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=X;return g}function Z(a,b){throw Error(Ia(a,b));}
	function Ia(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[a];
	return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof firebase&&(firebase=Ja()); })();
	firebase.SDK_VERSION = "3.4.0";
	module.exports = firebase;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var firebase = __webpack_require__(51);
	/*! @license Firebase v3.4.0
	    Build: 3.4.0-rc.3
	    Terms: https://developers.google.com/terms */
	(function(){var h,aa=aa||{},l=this,ba=function(){},ca=function(){throw Error("unimplemented abstract method");},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=
	typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){return null===a},ea=function(a){return"array"==m(a)},fa=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){return"string"==typeof a},ga=function(a){return"number"==typeof a},p=function(a){return"function"==m(a)},ha=function(a){var b=typeof a;
	return"object"==b&&null!=a||"function"==b},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,
	arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.Pc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ne=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);u.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oa=/&/g,pa=/</g,qa=/>/g,sa=/"/g,ta=/'/g,ua=/\x00/g,va=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},wa=function(a,b){return a<b?-1:a>b?1:0};var xa=function(a,b){b.unshift(a);u.call(this,ma.apply(null,b));b.shift()};t(xa,u);xa.prototype.name="AssertionError";
	var ya=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new xa(""+e,f||[]);},w=function(a,b,c){a||ya("",null,b,Array.prototype.slice.call(arguments,2))},za=function(a,b){throw new xa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Aa=function(a,b,c){ga(a)||ya("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a},Ba=function(a,b,c){n(a)||ya("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,
	2))},Ca=function(a,b,c){p(a)||ya("Expected function but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2))};var Da=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ea=function(a,b){for(var c=n(a)?
	a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Fa=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ga=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
	Ia=function(a){var b;a:{b=Ha;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]},Ja=function(a,b){return 0<=Da(a,b)},La=function(a,b){b=Da(a,b);var c;(c=0<=b)&&Ka(a,b);return c},Ka=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Ma=function(a,b){var c=0;Ea(a,function(d,e){b.call(void 0,d,e,a)&&Ka(a,e)&&c++})},Na=function(a){return Array.prototype.concat.apply(Array.prototype,
	arguments)},Oa=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},Pa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},Qa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};var Ra=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Sa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ta=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ua=function(a){for(var b in a)return!1;return!0},Va=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Wa=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	Ya=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Xa.length;f++)c=Xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Za;a:{var $a=l.navigator;if($a){var ab=$a.userAgent;if(ab){Za=ab;break a}}Za=""}var y=function(a){return v(Za,a)};var bb=function(a){bb[" "](a);return a};bb[" "]=ba;var db=function(a,b){var c=cb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var eb=y("Opera"),z=y("Trident")||y("MSIE"),fb=y("Edge"),gb=fb||z,hb=y("Gecko")&&!(v(Za.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),ib=v(Za.toLowerCase(),"webkit")&&!y("Edge"),jb=function(){var a=l.document;return a?a.documentMode:void 0},kb;
	a:{var lb="",mb=function(){var a=Za;if(hb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ib)return/WebKit\/(\S+)/.exec(a);if(eb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();mb&&(lb=mb?mb[1]:"");if(z){var nb=jb();if(null!=nb&&nb>parseFloat(lb)){kb=String(nb);break a}}kb=lb}
	var ob=kb,cb={},A=function(a){return db(a,function(){for(var b=0,c=na(String(ob)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=wa(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||wa(0==g[2].length,0==k[2].length)||wa(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},pb=l.document,
	qb=pb&&z?jb()||("CSS1Compat"==pb.compatMode?parseInt(ob,10):5):void 0;var rb=null,sb=null,ub=function(a){var b="";tb(a,function(a){b+=String.fromCharCode(a)});return b},tb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=sb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}vb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},vb=function(){if(!rb){rb={};sb={};for(var a=0;65>a;a++)rb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
	sb[rb[a]]=a,62<=a&&(sb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var wb=!z||9<=Number(qb),xb=z&&!A("9");!ib||A("528");hb&&A("1.9b")||z&&A("8")||eb&&A("9.5")||ib&&A("528");hb&&!A("8")||z&&A("9");var yb=function(){this.ya=this.ya;this.Tb=this.Tb};yb.prototype.ya=!1;yb.prototype.isDisposed=function(){return this.ya};yb.prototype.Oa=function(){if(this.Tb)for(;this.Tb.length;)this.Tb.shift()()};var zb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Va=!1;this.ud=!0};zb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ud=!1};var Ab=function(a,b){zb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.lb=this.state=null;a&&this.init(a,b)};t(Ab,zb);
	Ab.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(hb){var e;a:{try{bb(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=ib||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=ib||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
	a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.lb=a;a.defaultPrevented&&
	this.preventDefault()};Ab.prototype.preventDefault=function(){Ab.Pc.preventDefault.call(this);var a=this.lb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,xb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Ab.prototype.ce=function(){return this.lb};var Bb="closure_listenable_"+(1E6*Math.random()|0),Cb=0;var Db=function(a,b,c,d,e){this.listener=a;this.Xb=null;this.src=b;this.type=c;this.Cb=!!d;this.Kb=e;this.key=++Cb;this.$a=this.Bb=!1},Eb=function(a){a.$a=!0;a.listener=null;a.Xb=null;a.src=null;a.Kb=null};var Fb=function(a){this.src=a;this.w={};this.yb=0};Fb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.w[f];a||(a=this.w[f]=[],this.yb++);var g=Gb(a,b,d,e);-1<g?(b=a[g],c||(b.Bb=!1)):(b=new Db(b,this.src,f,!!d,e),b.Bb=c,a.push(b));return b};Fb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.w))return!1;var e=this.w[a];b=Gb(e,b,c,d);return-1<b?(Eb(e[b]),Ka(e,b),0==e.length&&(delete this.w[a],this.yb--),!0):!1};
	var Hb=function(a,b){var c=b.type;c in a.w&&La(a.w[c],b)&&(Eb(b),0==a.w[c].length&&(delete a.w[c],a.yb--))};Fb.prototype.uc=function(a,b,c,d){a=this.w[a.toString()];var e=-1;a&&(e=Gb(a,b,c,d));return-1<e?a[e]:null};var Gb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.$a&&f.listener==b&&f.Cb==!!c&&f.Kb==d)return e}return-1};var Ib="closure_lm_"+(1E6*Math.random()|0),Jb={},Kb=0,Lb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Lb(a,b[f],c,d,e);else c=Mb(c),a&&a[Bb]?a.listen(b,c,d,e):Nb(a,b,c,!1,d,e)},Nb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=Ob(a);k||(a[Ib]=k=new Fb(a));c=k.add(b,c,d,e,f);if(c.Xb)return;d=Pb();c.Xb=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Qb(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
	Kb++},Pb=function(){var a=Rb,b=wb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Sb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Sb(a,b[f],c,d,e);else c=Mb(c),a&&a[Bb]?Tb(a,b,c,d,e):Nb(a,b,c,!0,d,e)},Ub=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Ub(a,b[f],c,d,e);else c=Mb(c),a&&a[Bb]?a.Y.remove(String(b),c,d,e):a&&(a=Ob(a))&&(b=a.uc(b,c,!!d,e))&&Vb(b)},Vb=function(a){if(ga(a)||!a||a.$a)return;var b=a.src;if(b&&
	b[Bb]){Hb(b.Y,a);return}var c=a.type,d=a.Xb;b.removeEventListener?b.removeEventListener(c,d,a.Cb):b.detachEvent&&b.detachEvent(Qb(c),d);Kb--;(c=Ob(b))?(Hb(c,a),0==c.yb&&(c.src=null,b[Ib]=null)):Eb(a)},Qb=function(a){return a in Jb?Jb[a]:Jb[a]="on"+a},Xb=function(a,b,c,d){var e=!0;if(a=Ob(a))if(b=a.w[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Cb==c&&!f.$a&&(f=Wb(f,d),e=e&&!1!==f)}return e},Wb=function(a,b){var c=a.listener,d=a.Kb||a.src;a.Bb&&Vb(a);return c.call(d,b)},Rb=function(a,
	b){if(a.$a)return!0;if(!wb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Ab(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Va&&0<=e;e--){b.currentTarget=d[e];var f=Xb(d[e],a,!0,b),c=c&&f}for(e=0;!b.Va&&e<d.length;e++)b.currentTarget=
	d[e],f=Xb(d[e],a,!1,b),c=c&&f}return c}return Wb(a,new Ab(b,this))},Ob=function(a){a=a[Ib];return a instanceof Fb?a:null},Yb="__closure_events_fn_"+(1E9*Math.random()>>>0),Mb=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[Yb]||(a[Yb]=function(b){return a.handleEvent(b)});return a[Yb]};var Zb=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var ac=function(){this.fc="";this.Md=$b};ac.prototype.Nb=!0;ac.prototype.Ib=function(){return this.fc};ac.prototype.toString=function(){return"Const{"+this.fc+"}"};var bc=function(a){if(a instanceof ac&&a.constructor===ac&&a.Md===$b)return a.fc;za("expected object of type Const, got '"+a+"'");return"type_error:Const"},$b={};var B=function(){this.ja="";this.Ld=cc};B.prototype.Nb=!0;B.prototype.Ib=function(){return this.ja};B.prototype.toString=function(){return"SafeUrl{"+this.ja+"}"};
	var dc=function(a){if(a instanceof B&&a.constructor===B&&a.Ld===cc)return a.ja;za("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl"},ec=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,gc=function(a){if(a instanceof B)return a;a=a.Nb?a.Ib():String(a);ec.test(a)||(a="about:invalid#zClosurez");return fc(a)},cc={},fc=function(a){var b=new B;b.ja=a;return b};fc("about:blank");var hc=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},ic=function(a){a=String(a);if(hc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},lc=function(a){var b=[];jc(new kc,a,b);return b.join("")},kc=function(){this.ac=void 0},
	jc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],jc(a,a.ac?a.ac.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),mc(d,c),c.push(":"),jc(a,a.ac?a.ac.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":mc(b,
	c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},nc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},oc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,mc=function(a,b){b.push('"',a.replace(oc,function(a){var b=nc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
	nc[a]=b);return b}),'"')};var pc=function(){};pc.prototype.Tc=null;pc.prototype.kb=ca;var qc=function(a){return a.Tc||(a.Tc=a.Qb())};pc.prototype.Qb=ca;var rc,sc=function(){};t(sc,pc);sc.prototype.kb=function(){var a=tc(this);return a?new ActiveXObject(a):new XMLHttpRequest};sc.prototype.Qb=function(){var a={};tc(this)&&(a[0]=!0,a[1]=!0);return a};
	var tc=function(a){if(!a.gd&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.gd=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.gd};rc=new sc;var uc=function(){};t(uc,pc);uc.prototype.kb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new vc;throw Error("Unsupported browser");};uc.prototype.Qb=function(){return{}};
	var vc=function(){this.oa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.oa.onload=r(this.ee,this);this.oa.onerror=r(this.ed,this);this.oa.onprogress=r(this.fe,this);this.oa.ontimeout=r(this.ge,this)};h=vc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.oa.open(a,b)};
	h.send=function(a){if(a)if("string"==typeof a)this.oa.send(a);else throw Error("Only string data is supported");else this.oa.send()};h.abort=function(){this.oa.abort()};h.setRequestHeader=function(){};h.ee=function(){this.status=200;this.responseText=this.oa.responseText;wc(this,4)};h.ed=function(){this.status=500;this.responseText="";wc(this,4)};h.ge=function(){this.ed()};h.fe=function(){this.status=200;wc(this,1)};var wc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var C=function(a,b){this.h=[];this.g=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.h[d]=e,c=!1)}},xc={},yc=function(a){if(-128<=a&&128>a){var b=xc[a];if(b)return b}b=new C([a|0],0>a?-1:0);-128<=a&&128>a&&(xc[a]=b);return b},F=function(a){if(isNaN(a)||!isFinite(a))return D;if(0>a)return E(F(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=4294967296;return new C(b,0)},zc=function(a,b){if(0==a.length)throw Error("number format error: empty string");b=b||10;if(2>b||36<b)throw Error("radix out of range: "+
	b);if("-"==a.charAt(0))return E(zc(a.substring(1),b));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=F(Math.pow(b,8)),d=D,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+f),b);8>f?(f=F(Math.pow(b,f)),d=d.multiply(f).add(F(g))):(d=d.multiply(c),d=d.add(F(g)))}return d},D=yc(0),Ac=yc(1),Bc=yc(16777216),Cc=function(a){if(-1==a.g)return-Cc(E(a));for(var b=0,c=1,d=0;d<a.h.length;d++)b+=Dc(a,d)*c,c*=4294967296;return b};
	C.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(G(this))return"0";if(-1==this.g)return"-"+E(this).toString(a);for(var b=F(Math.pow(a,6)),c=this,d="";;){var e=Ec(c,b),c=Fc(c,e.multiply(b)),f=((0<c.h.length?c.h[0]:c.g)>>>0).toString(a),c=e;if(G(c))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
	var H=function(a,b){return 0>b?0:b<a.h.length?a.h[b]:a.g},Dc=function(a,b){a=H(a,b);return 0<=a?a:4294967296+a},G=function(a){if(0!=a.g)return!1;for(var b=0;b<a.h.length;b++)if(0!=a.h[b])return!1;return!0};C.prototype.Eb=function(a){if(this.g!=a.g)return!1;for(var b=Math.max(this.h.length,a.h.length),c=0;c<b;c++)if(H(this,c)!=H(a,c))return!1;return!0};C.prototype.compare=function(a){a=Fc(this,a);return-1==a.g?-1:G(a)?0:1};
	var E=function(a){for(var b=a.h.length,c=[],d=0;d<b;d++)c[d]=~a.h[d];return(new C(c,~a.g)).add(Ac)};C.prototype.add=function(a){for(var b=Math.max(this.h.length,a.h.length),c=[],d=0,e=0;e<=b;e++){var f=d+(H(this,e)&65535)+(H(a,e)&65535),g=(f>>>16)+(H(this,e)>>>16)+(H(a,e)>>>16),d=g>>>16,f=f&65535,g=g&65535;c[e]=g<<16|f}return new C(c,c[c.length-1]&-2147483648?-1:0)};var Fc=function(a,b){return a.add(E(b))};
	C.prototype.multiply=function(a){if(G(this)||G(a))return D;if(-1==this.g)return-1==a.g?E(this).multiply(E(a)):E(E(this).multiply(a));if(-1==a.g)return E(this.multiply(E(a)));if(0>this.compare(Bc)&&0>a.compare(Bc))return F(Cc(this)*Cc(a));for(var b=this.h.length+a.h.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.h.length;d++)for(var e=0;e<a.h.length;e++){var f=H(this,d)>>>16,g=H(this,d)&65535,k=H(a,e)>>>16,q=H(a,e)&65535;c[2*d+2*e]+=g*q;Gc(c,2*d+2*e);c[2*d+2*e+1]+=f*q;Gc(c,2*d+2*e+1);c[2*d+2*e+1]+=
	g*k;Gc(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;Gc(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new C(c,0)};
	var Gc=function(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535,b++},Ec=function(a,b){if(G(b))throw Error("division by zero");if(G(a))return D;if(-1==a.g)return-1==b.g?Ec(E(a),E(b)):E(Ec(E(a),b));if(-1==b.g)return E(Ec(a,E(b)));if(30<a.h.length){if(-1==a.g||-1==b.g)throw Error("slowDivide_ only works with positive integers.");for(var c=Ac;0>=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=Hc(c,1),e=Hc(b,1),f;b=Hc(b,2);for(c=Hc(c,2);!G(b);)f=e.add(b),0>=f.compare(a)&&(d=d.add(c),
	e=f),b=Hc(b,1),c=Hc(c,1);return d}for(c=D;0<=a.compare(b);){d=Math.max(1,Math.floor(Cc(a)/Cc(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);f=F(d);for(var g=f.multiply(b);-1==g.g||0<g.compare(a);)d-=e,f=F(d),g=f.multiply(b);G(f)&&(f=Ac);c=c.add(f);a=Fc(a,g)}return c},Ic=function(a,b){for(var c=Math.max(a.h.length,b.h.length),d=[],e=0;e<c;e++)d[e]=H(a,e)|H(b,e);return new C(d,a.g|b.g)};
	C.prototype.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.h.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?H(this,e-b)<<a|H(this,e-b-1)>>>32-a:H(this,e-b);return new C(d,this.g)};var Hc=function(a,b){var c=b>>5;b%=32;for(var d=a.h.length-c,e=[],f=0;f<d;f++)e[f]=0<b?H(a,f+c)>>>b|H(a,f+c+1)<<32-b:H(a,f+c);return new C(e,a.g)};var Jc=function(a,b){this.pb=a;this.na=b};Jc.prototype.Eb=function(a){return this.na==a.na&&this.pb.Eb(Wa(a.pb))};Jc.prototype.toString=ca;
	var Mc=function(a){try{var b;if(b=0==a.lastIndexOf("[",0)){var c=a.length-1;b=0<=c&&a.indexOf("]",c)==c}return b?new Kc(a.substring(1,a.length-1)):new Lc(a)}catch(d){return null}},Lc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Nc))throw Error("The address does not look like an IPv4.");b=Wa(a)}else{if(!Oc.test(a))throw Error(a+" does not look like an IPv4 address.");var c=a.split(".");if(4!=c.length)throw Error(a+" does not look like an IPv4 address.");for(var d=0;d<
	c.length;d++){var e;e=c[d];var f=Number(e);e=0==f&&/^[\s\xa0]*$/.test(e)?NaN:f;if(isNaN(e)||0>e||255<e||1!=c[d].length&&0==c[d].lastIndexOf("0",0))throw Error("In "+a+", octet "+d+" is not valid");e=F(e);b=Ic(b.shiftLeft(8),e)}}Jc.call(this,b,4)};t(Lc,Jc);var Oc=/^[0-9.]*$/,Nc=Fc(Ac.shiftLeft(32),Ac);Lc.prototype.toString=function(){if(this.Ca)return this.Ca;for(var a=Dc(this.pb,0),b=[],c=3;0<=c;c--)b[c]=String(a&255),a>>>=8;return this.Ca=b.join(".")};
	var Kc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Pc))throw Error("The address does not look like a valid IPv6.");b=Wa(a)}else{if(!Qc.test(a))throw Error(a+" is not a valid IPv6 address.");var c=a.split(":");if(-1!=c[c.length-1].indexOf(".")){a=Dc(Wa((new Lc(c[c.length-1])).pb),0);var d=[];d.push((a>>>16&65535).toString(16));d.push((a&65535).toString(16));Ka(c,c.length-1);Qa(c,d);a=c.join(":")}d=a.split("::");if(2<d.length||1==d.length&&8!=c.length)throw Error(a+
	" is not a valid IPv6 address.");if(1<d.length){c=d[0].split(":");d=d[1].split(":");1==c.length&&""==c[0]&&(c=[]);1==d.length&&""==d[0]&&(d=[]);var e=8-(c.length+d.length);if(1>e)c=[];else{for(var f=[],g=0;g<e;g++)f[g]="0";c=Oa(c,f,d)}}if(8!=c.length)throw Error(a+" is not a valid IPv6 address");for(d=0;d<c.length;d++){e=zc(c[d],16);if(0>e.compare(D)||0<e.compare(Rc))throw Error(c[d]+" in "+a+" is not a valid hextet.");b=Ic(b.shiftLeft(16),e)}}Jc.call(this,b,6)};t(Kc,Jc);
	var Qc=/^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,Rc=yc(65535),Pc=Fc(Ac.shiftLeft(128),Ac);Kc.prototype.toString=function(){if(this.Ca)return this.Ca;for(var a=[],b=3;0<=b;b--){var c=Dc(this.pb,b),d=c&65535;a.push((c>>>16).toString(16));a.push(d.toString(16))}for(var c=b=-1,e=d=0,f=0;f<a.length;f++)"0"==a[f]?(e++,-1==c&&(c=f),e>d&&(d=e,b=c)):(c=-1,e=0);0<d&&(b+d==a.length&&a.push(""),a.splice(b,d,""),0==b&&(a=[""].concat(a)));return this.Ca=a.join(":")};var Tc=function(){this.Wb="";this.Nd=Sc};Tc.prototype.Nb=!0;Tc.prototype.Ib=function(){return this.Wb};Tc.prototype.toString=function(){return"TrustedResourceUrl{"+this.Wb+"}"};var Sc={};var Vc=function(){this.ja="";this.Kd=Uc};Vc.prototype.Nb=!0;Vc.prototype.Ib=function(){return this.ja};Vc.prototype.toString=function(){return"SafeHtml{"+this.ja+"}"};var Wc=function(a){if(a instanceof Vc&&a.constructor===Vc&&a.Kd===Uc)return a.ja;za("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"},Uc={};Vc.prototype.ne=function(a){this.ja=a;return this};!hb&&!z||z&&9<=Number(qb)||hb&&A("1.9.1");z&&A("9");var Yc=function(a,b){Ra(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Xc.hasOwnProperty(d)?a.setAttribute(Xc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Xc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Zc=function(a,b,c){this.pe=c;this.Td=a;this.ye=b;this.Sb=0;this.Lb=null};Zc.prototype.get=function(){var a;0<this.Sb?(this.Sb--,a=this.Lb,this.Lb=a.next,a.next=null):a=this.Td();return a};Zc.prototype.put=function(a){this.ye(a);this.Sb<this.pe&&(this.Sb++,a.next=this.Lb,this.Lb=a)};var $c=function(a){l.setTimeout(function(){throw a;},0)},ad,bd=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Xc;c.Xc=null;a()}};return function(a){d.next={Xc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var cd=function(){this.kc=this.Ja=null},ed=new Zc(function(){return new dd},function(a){a.reset()},100);cd.prototype.add=function(a,b){var c=ed.get();c.set(a,b);this.kc?this.kc.next=c:(w(!this.Ja),this.Ja=c);this.kc=c};cd.prototype.remove=function(){var a=null;this.Ja&&(a=this.Ja,this.Ja=this.Ja.next,this.Ja||(this.kc=null),a.next=null);return a};var dd=function(){this.next=this.scope=this.tc=null};dd.prototype.set=function(a,b){this.tc=a;this.scope=b;this.next=null};
	dd.prototype.reset=function(){this.next=this.scope=this.tc=null};var jd=function(a,b){fd||gd();hd||(fd(),hd=!0);id.add(a,b)},fd,gd=function(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);fd=function(){a.then(kd)}}else fd=function(){var a=kd;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(ad||(ad=bd()),ad(a)):l.setImmediate(a)}},hd=!1,id=new cd,kd=function(){for(var a;a=id.remove();){try{a.tc.call(a.scope)}catch(b){$c(b)}ed.put(a)}hd=!1};var ld=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},md=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var I=function(a,b){this.F=0;this.ka=void 0;this.Ma=this.fa=this.o=null;this.Jb=this.sc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){nd(c,2,a)},function(a){if(!(a instanceof od))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}nd(c,3,a)})}catch(d){nd(this,3,d)}},pd=function(){this.next=this.context=this.Sa=this.Ea=this.child=null;this.ib=!1};pd.prototype.reset=function(){this.context=this.Sa=this.Ea=this.child=null;this.ib=!1};
	var qd=new Zc(function(){return new pd},function(a){a.reset()},100),rd=function(a,b,c){var d=qd.get();d.Ea=a;d.Sa=b;d.context=c;return d},J=function(a){if(a instanceof I)return a;var b=new I(ba);nd(b,2,a);return b},K=function(a){return new I(function(b,c){c(a)})},td=function(a,b,c){sd(a,b,c,null)||jd(ka(b,a))},ud=function(a){return new I(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{be:!0,value:f}:{be:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],td(g,ka(e,f,!0),
	ka(e,f,!1));else b(d)})};I.prototype.then=function(a,b,c){null!=a&&Ca(a,"opt_onFulfilled should be a function.");null!=b&&Ca(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return vd(this,p(a)?a:null,p(b)?b:null,c)};ld(I);var xd=function(a,b){b=rd(b,b,void 0);b.ib=!0;wd(a,b);return a};I.prototype.l=function(a,b){return vd(this,null,a,b)};I.prototype.cancel=function(a){0==this.F&&jd(function(){var b=new od(a);yd(this,b)},this)};
	var yd=function(a,b){if(0==a.F)if(a.o){var c=a.o;if(c.fa){for(var d=0,e=null,f=null,g=c.fa;g&&(g.ib||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.F&&1==d?yd(c,b):(f?(d=f,w(c.fa),w(null!=d),d.next==c.Ma&&(c.Ma=d),d.next=d.next.next):zd(c),Ad(c,e,3,b)))}a.o=null}else nd(a,3,b)},wd=function(a,b){a.fa||2!=a.F&&3!=a.F||Bd(a);w(null!=b.Ea);a.Ma?a.Ma.next=b:a.fa=b;a.Ma=b},vd=function(a,b,c,d){var e=rd(null,null,null);e.child=new I(function(a,g){e.Ea=b?function(c){try{var e=b.call(d,c);a(e)}catch(ra){g(ra)}}:
	a;e.Sa=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof od?g(b):a(e)}catch(ra){g(ra)}}:g});e.child.o=a;wd(a,e);return e.child};I.prototype.He=function(a){w(1==this.F);this.F=0;nd(this,2,a)};I.prototype.Ie=function(a){w(1==this.F);this.F=0;nd(this,3,a)};
	var nd=function(a,b,c){0==a.F&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.F=1,sd(c,a.He,a.Ie,a)||(a.ka=c,a.F=b,a.o=null,Bd(a),3!=b||c instanceof od||Cd(a,c)))},sd=function(a,b,c,d){if(a instanceof I)return null!=b&&Ca(b,"opt_onFulfilled should be a function."),null!=c&&Ca(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),wd(a,rd(b||ba,c||null,d)),!0;if(md(a))return a.then(b,c,d),!0;if(ha(a))try{var e=a.then;if(p(e))return Dd(a,
	e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Dd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(q){k(q)}},Bd=function(a){a.sc||(a.sc=!0,jd(a.Xd,a))},zd=function(a){var b=null;a.fa&&(b=a.fa,a.fa=b.next,b.next=null);a.fa||(a.Ma=null);null!=b&&w(null!=b.Ea);return b};I.prototype.Xd=function(){for(var a;a=zd(this);)Ad(this,a,this.F,this.ka);this.sc=!1};
	var Ad=function(a,b,c,d){if(3==c&&b.Sa&&!b.ib)for(;a&&a.Jb;a=a.o)a.Jb=!1;if(b.child)b.child.o=null,Ed(b,c,d);else try{b.ib?b.Ea.call(b.context):Ed(b,c,d)}catch(e){Fd.call(null,e)}qd.put(b)},Ed=function(a,b,c){2==b?a.Ea.call(a.context,c):a.Sa&&a.Sa.call(a.context,c)},Cd=function(a,b){a.Jb=!0;jd(function(){a.Jb&&Fd.call(null,b)})},Fd=$c,od=function(a){u.call(this,a)};t(od,u);od.prototype.name="cancel";/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var Gd=function(a,b){this.bc=[];this.nd=a;this.Zc=b||null;this.nb=this.Qa=!1;this.ka=void 0;this.Nc=this.Sc=this.nc=!1;this.ic=0;this.o=null;this.oc=0};Gd.prototype.cancel=function(a){if(this.Qa)this.ka instanceof Gd&&this.ka.cancel();else{if(this.o){var b=this.o;delete this.o;a?b.cancel(a):(b.oc--,0>=b.oc&&b.cancel())}this.nd?this.nd.call(this.Zc,this):this.Nc=!0;this.Qa||Hd(this,new Id)}};Gd.prototype.Yc=function(a,b){this.nc=!1;Jd(this,a,b)};
	var Jd=function(a,b,c){a.Qa=!0;a.ka=c;a.nb=!b;Kd(a)},Md=function(a){if(a.Qa){if(!a.Nc)throw new Ld;a.Nc=!1}};Gd.prototype.callback=function(a){Md(this);Nd(a);Jd(this,!0,a)};
	var Hd=function(a,b){Md(a);Nd(b);Jd(a,!1,b)},Nd=function(a){w(!(a instanceof Gd),"An execution sequence may not be initiated with a blocking Deferred.")},Rd=function(a){var b=Od("https://apis.google.com/js/client.js?onload="+Pd);Qd(b,null,a,void 0)},Qd=function(a,b,c,d){w(!a.Sc,"Blocking Deferreds can not be re-used");a.bc.push([b,c,d]);a.Qa&&Kd(a)};Gd.prototype.then=function(a,b,c){var d,e,f=new I(function(a,b){d=a;e=b});Qd(this,d,function(a){a instanceof Id?f.cancel():e(a)});return f.then(a,b,c)};
	ld(Gd);
	var Sd=function(a){return Ga(a.bc,function(a){return p(a[1])})},Kd=function(a){if(a.ic&&a.Qa&&Sd(a)){var b=a.ic,c=Td[b];c&&(l.clearTimeout(c.ob),delete Td[b]);a.ic=0}a.o&&(a.o.oc--,delete a.o);for(var b=a.ka,d=c=!1;a.bc.length&&!a.nc;){var e=a.bc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.nb?g:f)try{var k=f.call(e||a.Zc,b);void 0!==k&&(a.nb=a.nb&&(k==b||k instanceof Error),a.ka=b=k);if(md(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.nc=!0}catch(q){b=q,a.nb=!0,Sd(a)||(c=!0)}}a.ka=b;d&&
	(k=r(a.Yc,a,!0),d=r(a.Yc,a,!1),b instanceof Gd?(Qd(b,k,d),b.Sc=!0):b.then(k,d));c&&(b=new Ud(b),Td[b.ob]=b,a.ic=b.ob)},Ld=function(){u.call(this)};t(Ld,u);Ld.prototype.message="Deferred has already fired";Ld.prototype.name="AlreadyCalledError";var Id=function(){u.call(this)};t(Id,u);Id.prototype.message="Deferred was canceled";Id.prototype.name="CanceledError";var Ud=function(a){this.ob=l.setTimeout(r(this.Ge,this),0);this.J=a};
	Ud.prototype.Ge=function(){w(Td[this.ob],"Cannot throw an error that is not scheduled.");delete Td[this.ob];throw this.J;};var Td={};var Od=function(a){var b=new Tc;b.Wb=a;return Vd(b)},Vd=function(a){var b={},c=b.document||document,d;a instanceof Tc&&a.constructor===Tc&&a.Nd===Sc?d=a.Wb:(za("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={vd:e,xb:void 0};var f=new Gd(Wd,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Xd(e,!0);Hd(f,new Yd(1,"Timeout reached for loading script "+d))},k),a.xb=g);e.onload=
	e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Xd(e,b.Oe||!1,g),f.callback(null))};e.onerror=function(){Xd(e,!0,g);Hd(f,new Yd(0,"Error while loading script "+d))};a=b.attributes||{};Ya(a,{type:"text/javascript",charset:"UTF-8",src:d});Yc(e,a);Zd(c).appendChild(e);return f},Zd=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Wd=function(){if(this&&this.vd){var a=this.vd;a&&"SCRIPT"==a.tagName&&
	Xd(a,!0,this.xb)}},Xd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Yd=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};t(Yd,u);var $d=function(){yb.call(this);this.Y=new Fb(this);this.Qd=this;this.Cc=null};t($d,yb);$d.prototype[Bb]=!0;h=$d.prototype;h.addEventListener=function(a,b,c,d){Lb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Ub(this,a,b,c,d)};
	h.dispatchEvent=function(a){ae(this);var b,c=this.Cc;if(c){b=[];for(var d=1;c;c=c.Cc)b.push(c),w(1E3>++d,"infinite loop")}c=this.Qd;d=a.type||a;if(n(a))a=new zb(a,c);else if(a instanceof zb)a.target=a.target||c;else{var e=a;a=new zb(d,c);Ya(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Va&&0<=g;g--)f=a.currentTarget=b[g],e=be(f,d,!0,a)&&e;a.Va||(f=a.currentTarget=c,e=be(f,d,!0,a)&&e,a.Va||(e=be(f,d,!1,a)&&e));if(b)for(g=0;!a.Va&&g<b.length;g++)f=a.currentTarget=b[g],e=be(f,d,!1,a)&&e;return e};
	h.Oa=function(){$d.Pc.Oa.call(this);if(this.Y){var a=this.Y,b=0,c;for(c in a.w){for(var d=a.w[c],e=0;e<d.length;e++)++b,Eb(d[e]);delete a.w[c];a.yb--}}this.Cc=null};h.listen=function(a,b,c,d){ae(this);return this.Y.add(String(a),b,!1,c,d)};
	var Tb=function(a,b,c,d,e){a.Y.add(String(b),c,!0,d,e)},be=function(a,b,c,d){b=a.Y.w[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.$a&&g.Cb==c){var k=g.listener,q=g.Kb||g.src;g.Bb&&Hb(a.Y,g);e=!1!==k.call(q,d)&&e}}return e&&0!=d.ud};$d.prototype.uc=function(a,b,c,d){return this.Y.uc(String(a),b,c,d)};var ae=function(a){w(a.Y,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var ce="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},de=function(){};de.prototype.next=function(){throw ce;};de.prototype.Pd=function(){return this};var ee=function(a,b){this.Z={};this.s=[];this.na=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=ee.prototype;h.dd=function(){return this.i};h.T=function(){fe(this);for(var a=[],b=0;b<this.s.length;b++)a.push(this.Z[this.s[b]]);return a};h.ha=function(){fe(this);return this.s.concat()};h.jb=function(a){return ge(this.Z,a)};
	h.Eb=function(a,b){if(this===a)return!0;if(this.i!=a.dd())return!1;b=b||he;fe(this);for(var c,d=0;c=this.s[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};var he=function(a,b){return a===b};ee.prototype.remove=function(a){return ge(this.Z,a)?(delete this.Z[a],this.i--,this.na++,this.s.length>2*this.i&&fe(this),!0):!1};
	var fe=function(a){if(a.i!=a.s.length){for(var b=0,c=0;b<a.s.length;){var d=a.s[b];ge(a.Z,d)&&(a.s[c++]=d);b++}a.s.length=c}if(a.i!=a.s.length){for(var e={},c=b=0;b<a.s.length;)d=a.s[b],ge(e,d)||(a.s[c++]=d,e[d]=1),b++;a.s.length=c}};h=ee.prototype;h.get=function(a,b){return ge(this.Z,a)?this.Z[a]:b};h.set=function(a,b){ge(this.Z,a)||(this.i++,this.s.push(a),this.na++);this.Z[a]=b};
	h.addAll=function(a){var b;a instanceof ee?(b=a.ha(),a=a.T()):(b=Ta(a),a=Sa(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ha(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new ee(this)};h.Pd=function(a){fe(this);var b=0,c=this.na,d=this,e=new de;e.next=function(){if(c!=d.na)throw Error("The map has changed since the iterator was created");if(b>=d.s.length)throw ce;var e=d.s[b++];return a?e:d.Z[e]};return e};
	var ge=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ie=function(a){if(a.T&&"function"==typeof a.T)return a.T();if(n(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Sa(a)},je=function(a){if(a.ha&&"function"==typeof a.ha)return a.ha();if(!a.T||"function"!=typeof a.T){if(fa(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Ta(a)}},ke=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||n(a))x(a,b,void 0);else for(var c=je(a),d=ie(a),e=
	d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var le=function(a,b,c,d,e){this.reset(a,b,c,d,e)};le.prototype.ad=null;var me=0;le.prototype.reset=function(a,b,c,d,e){"number"==typeof e||me++;d||la();this.rb=a;this.re=b;delete this.ad};le.prototype.yd=function(a){this.rb=a};var ne=function(a){this.se=a;this.fd=this.pc=this.rb=this.o=null},oe=function(a,b){this.name=a;this.value=b};oe.prototype.toString=function(){return this.name};var pe=new oe("SEVERE",1E3),qe=new oe("CONFIG",700),re=new oe("FINE",500);ne.prototype.getParent=function(){return this.o};ne.prototype.yd=function(a){this.rb=a};var se=function(a){if(a.rb)return a.rb;if(a.o)return se(a.o);za("Root logger has no level set.");return null};
	ne.prototype.log=function(a,b,c){if(a.value>=se(this).value)for(p(b)&&(b=b()),a=new le(a,String(b),this.se),c&&(a.ad=c),c="log:"+a.re,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.fd)for(var e=0,f;f=b.fd[e];e++)f(d);c=c.getParent()}};
	var te={},ue=null,ve=function(a){ue||(ue=new ne(""),te[""]=ue,ue.yd(qe));var b;if(!(b=te[a])){b=new ne(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ve(a.substr(0,c));c.pc||(c.pc={});c.pc[d]=b;b.o=c;te[a]=b}return b};var L=function(a,b){a&&a.log(re,b,void 0)};var we=function(a,b,c){if(p(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},xe=function(a){var b=null;return(new I(function(c,d){b=we(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).l(function(a){l.clearTimeout(b);throw a;})};var ye=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,ze=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var M=function(a){$d.call(this);this.headers=new ee;this.mc=a||null;this.pa=!1;this.lc=this.a=null;this.qb=this.ld=this.Rb="";this.Ba=this.xc=this.Ob=this.rc=!1;this.fb=0;this.hc=null;this.td="";this.jc=this.xe=this.Gd=!1};t(M,$d);var Ae=M.prototype,Be=ve("goog.net.XhrIo");Ae.P=Be;var Ce=/^https?$/i,De=["POST","PUT"];
	M.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Rb+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Rb=a;this.qb="";this.ld=b;this.rc=!1;this.pa=!0;this.a=this.mc?this.mc.kb():rc.kb();this.lc=this.mc?qc(this.mc):qc(rc);this.a.onreadystatechange=r(this.qd,this);this.xe&&"onprogress"in this.a&&(this.a.onprogress=r(function(a){this.pd(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=r(this.pd,this)));try{L(this.P,Ee(this,"Opening Xhr")),
	this.xc=!0,this.a.open(b,String(a),!0),this.xc=!1}catch(f){L(this.P,Ee(this,"Error opening Xhr: "+f.message));this.J(5,f);return}a=c||"";var e=this.headers.clone();d&&ke(d,function(a,b){e.set(b,a)});d=Ia(e.ha());c=l.FormData&&a instanceof l.FormData;!Ja(De,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.td&&(this.a.responseType=this.td);"withCredentials"in this.a&&this.a.withCredentials!==this.Gd&&(this.a.withCredentials=
	this.Gd);try{Fe(this),0<this.fb&&(this.jc=Ge(this.a),L(this.P,Ee(this,"Will abort after "+this.fb+"ms if incomplete, xhr2 "+this.jc)),this.jc?(this.a.timeout=this.fb,this.a.ontimeout=r(this.xb,this)):this.hc=we(this.xb,this.fb,this)),L(this.P,Ee(this,"Sending request")),this.Ob=!0,this.a.send(a),this.Ob=!1}catch(f){L(this.P,Ee(this,"Send error: "+f.message)),this.J(5,f)}};var Ge=function(a){return z&&A(9)&&ga(a.timeout)&&void 0!==a.ontimeout},Ha=function(a){return"content-type"==a.toLowerCase()};
	M.prototype.xb=function(){"undefined"!=typeof aa&&this.a&&(this.qb="Timed out after "+this.fb+"ms, aborting",L(this.P,Ee(this,this.qb)),this.dispatchEvent("timeout"),this.abort(8))};M.prototype.J=function(a,b){this.pa=!1;this.a&&(this.Ba=!0,this.a.abort(),this.Ba=!1);this.qb=b;He(this);Ie(this)};var He=function(a){a.rc||(a.rc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
	M.prototype.abort=function(){this.a&&this.pa&&(L(this.P,Ee(this,"Aborting")),this.pa=!1,this.Ba=!0,this.a.abort(),this.Ba=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ie(this))};M.prototype.Oa=function(){this.a&&(this.pa&&(this.pa=!1,this.Ba=!0,this.a.abort(),this.Ba=!1),Ie(this,!0));M.Pc.Oa.call(this)};M.prototype.qd=function(){this.isDisposed()||(this.xc||this.Ob||this.Ba?Je(this):this.ve())};M.prototype.ve=function(){Je(this)};
	var Je=function(a){if(a.pa&&"undefined"!=typeof aa)if(a.lc[1]&&4==Ke(a)&&2==Le(a))L(a.P,Ee(a,"Local request error detected and ignored"));else if(a.Ob&&4==Ke(a))we(a.qd,0,a);else if(a.dispatchEvent("readystatechange"),4==Ke(a)){L(a.P,Ee(a,"Request complete"));a.pa=!1;try{var b=Le(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Rb).match(ye)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
	f=g.substr(0,g.length-1);e=!Ce.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<Ke(a)?a.a.statusText:""}catch(q){L(a.P,"Can not get status: "+q.message),k=""}a.qb=k+" ["+Le(a)+"]";He(a)}}finally{Ie(a)}}};M.prototype.pd=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Me(a,"progress"));this.dispatchEvent(Me(a,b?"downloadprogress":"uploadprogress"))};
	var Me=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Ie=function(a,b){if(a.a){Fe(a);var c=a.a,d=a.lc[0]?ba:null;a.a=null;a.lc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.P)&&a.log(pe,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Fe=function(a){a.a&&a.jc&&(a.a.ontimeout=null);ga(a.hc)&&(l.clearTimeout(a.hc),a.hc=null)},Ke=function(a){return a.a?a.a.readyState:0},Le=function(a){try{return 2<Ke(a)?
	a.a.status:-1}catch(b){return-1}},Ne=function(a){try{return a.a?a.a.responseText:""}catch(b){return L(a.P,"Can not get responseText: "+b.message),""}},Ee=function(a,b){return b+" ["+a.ld+" "+a.Rb+" "+Le(a)+"]"};var Oe=function(a,b){this.ga=this.Ia=this.la="";this.Ua=null;this.Aa=this.ra="";this.M=this.oe=!1;var c;a instanceof Oe?(this.M=void 0!==b?b:a.M,Pe(this,a.la),c=a.Ia,N(this),this.Ia=c,Qe(this,a.ga),Re(this,a.Ua),Se(this,a.ra),Te(this,a.aa.clone()),a=a.Aa,N(this),this.Aa=a):a&&(c=String(a).match(ye))?(this.M=!!b,Pe(this,c[1]||"",!0),a=c[2]||"",N(this),this.Ia=Ue(a),Qe(this,c[3]||"",!0),Re(this,c[4]),Se(this,c[5]||"",!0),Te(this,c[6]||"",!0),a=c[7]||"",N(this),this.Aa=Ue(a)):(this.M=!!b,this.aa=new O(null,
	0,this.M))};Oe.prototype.toString=function(){var a=[],b=this.la;b&&a.push(Ve(b,We,!0),":");var c=this.ga;if(c||"file"==b)a.push("//"),(b=this.Ia)&&a.push(Ve(b,We,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Ua,null!=c&&a.push(":",String(c));if(c=this.ra)this.ga&&"/"!=c.charAt(0)&&a.push("/"),a.push(Ve(c,"/"==c.charAt(0)?Xe:Ye,!0));(c=this.aa.toString())&&a.push("?",c);(c=this.Aa)&&a.push("#",Ve(c,Ze));return a.join("")};
	Oe.prototype.resolve=function(a){var b=this.clone(),c=!!a.la;c?Pe(b,a.la):c=!!a.Ia;if(c){var d=a.Ia;N(b);b.Ia=d}else c=!!a.ga;c?Qe(b,a.ga):c=null!=a.Ua;d=a.ra;if(c)Re(b,a.Ua);else if(c=!!a.ra){if("/"!=d.charAt(0))if(this.ga&&!this.ra)d="/"+d;else{var e=b.ra.lastIndexOf("/");-1!=e&&(d=b.ra.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
	1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?Se(b,d):c=""!==a.aa.toString();c?Te(b,Ue(a.aa.toString())):c=!!a.Aa;c&&(a=a.Aa,N(b),b.Aa=a);return b};Oe.prototype.clone=function(){return new Oe(this)};
	var Pe=function(a,b,c){N(a);a.la=c?Ue(b,!0):b;a.la&&(a.la=a.la.replace(/:$/,""))},Qe=function(a,b,c){N(a);a.ga=c?Ue(b,!0):b},Re=function(a,b){N(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ua=b}else a.Ua=null},Se=function(a,b,c){N(a);a.ra=c?Ue(b,!0):b},Te=function(a,b,c){N(a);b instanceof O?(a.aa=b,a.aa.Mc(a.M)):(c||(b=Ve(b,$e)),a.aa=new O(b,0,a.M))},P=function(a,b,c){N(a);a.aa.set(b,c)},N=function(a){if(a.oe)throw Error("Tried to modify a read-only Uri");};
	Oe.prototype.Mc=function(a){this.M=a;this.aa&&this.aa.Mc(a);return this};
	var af=function(a){return a instanceof Oe?a.clone():new Oe(a,void 0)},bf=function(a,b){var c=new Oe(null,void 0);Pe(c,"https");a&&Qe(c,a);b&&Se(c,b);return c},Ue=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Ve=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,cf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},cf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},We=/[#\/\?@]/g,Ye=/[\#\?:]/g,Xe=/[\#\?]/g,$e=/[\#\?@]/g,
	Ze=/#/g,O=function(a,b,c){this.i=this.j=null;this.I=a||null;this.M=!!c},df=function(a){a.j||(a.j=new ee,a.i=0,a.I&&ze(a.I,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},ff=function(a){var b=je(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new O(null,0,void 0);a=ie(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ea(f)?ef(c,e,f):c.add(e,f)}return c};h=O.prototype;h.dd=function(){df(this);return this.i};
	h.add=function(a,b){df(this);this.I=null;a=this.K(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.i=Aa(this.i)+1;return this};h.remove=function(a){df(this);a=this.K(a);return this.j.jb(a)?(this.I=null,this.i=Aa(this.i)-this.j.get(a).length,this.j.remove(a)):!1};h.jb=function(a){df(this);a=this.K(a);return this.j.jb(a)};h.ha=function(){df(this);for(var a=this.j.T(),b=this.j.ha(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
	h.T=function(a){df(this);var b=[];if(n(a))this.jb(a)&&(b=Na(b,this.j.get(this.K(a))));else{a=this.j.T();for(var c=0;c<a.length;c++)b=Na(b,a[c])}return b};h.set=function(a,b){df(this);this.I=null;a=this.K(a);this.jb(a)&&(this.i=Aa(this.i)-this.j.get(a).length);this.j.set(a,[b]);this.i=Aa(this.i)+1;return this};h.get=function(a,b){a=a?this.T(a):[];return 0<a.length?String(a[0]):b};var ef=function(a,b,c){a.remove(b);0<c.length&&(a.I=null,a.j.set(a.K(b),Pa(c)),a.i=Aa(a.i)+c.length)};
	O.prototype.toString=function(){if(this.I)return this.I;if(!this.j)return"";for(var a=[],b=this.j.ha(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.T(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.I=a.join("&")};O.prototype.clone=function(){var a=new O;a.I=this.I;this.j&&(a.j=this.j.clone(),a.i=this.i);return a};O.prototype.K=function(a){a=String(a);this.M&&(a=a.toLowerCase());return a};
	O.prototype.Mc=function(a){a&&!this.M&&(df(this),this.I=null,this.j.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),ef(this,b,a))},this));this.M=a};var hf=function(){var a=gf();return z&&!!qb&&11==qb||/Edge\/\d+/.test(a)},jf=function(){return l.window&&l.window.location.href||""},kf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ea(a[d])?Va(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<kf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},mf=function(){var a;a=gf();a="Chrome"!=lf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],
	10):null;return a&&30>a?!1:!z||!qb||9<qb},nf=function(a){(a||l.window).close()},of=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};d&&(b.target=d);"Firefox"==lf(gf())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof B?c:gc("undefined"!=typeof c.href?
	c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),"undefined"!=typeof HTMLAnchorElement&&"undefined"!=typeof Location&&"undefined"!=typeof Element&&(e=g&&(g instanceof HTMLAnchorElement||
	!(g instanceof Location||g instanceof Element)),f=ha(g)?g.constructor.displayName||g.constructor.name||Object.prototype.toString.call(g):void 0===g?"undefined":null===g?"null":typeof g,w(e,"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",f)),b=b instanceof B?b:gc(b),g.href=dc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",
	c,g),d=dc(b),g&&(gb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=new ac,a.fc="b/12014412, meta tag with sanitized URL",va.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(oa,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(pa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(qa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(sa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(ta,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ua,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Ba(bc(a),"must provide justification"),
	w(!/^[\s\xa0]*$/.test(bc(a)),"must provide non-empty justification"),g.document.write(Wc((new Vc).ne(d))),g.document.close())):g=a.open(dc(b),c,g);if(g)try{g.focus()}catch(k){}return g},pf=function(a){return new I(function(b){var c=function(){xe(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},qf=function(){var a=null;return(new I(function(b){"complete"==l.document.readyState?b():(a=function(){b()},Sb(window,"load",a))})).l(function(b){Ub(window,"load",a);throw b;})},rf=function(a){switch(a||
	l.navigator&&l.navigator.product||""){case "ReactNative":return"ReactNative";default:return"undefined"!==typeof l.process?"Node":"Browser"}},sf=function(){var a=rf();return"ReactNative"===a||"Node"===a},lf=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";
	if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},tf=function(a){var b=rf(void 0);return("Browser"===b?lf(gf()):b)+"/JsCore/"+a},gf=function(){return l.navigator&&l.navigator.userAgent||""},uf=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&
	"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},wf=function(){var a;if(!(a=!l.location||!l.location.protocol||"http:"!=l.location.protocol&&"https:"!=l.location.protocol||sf())){var b;a:{try{var c=l.localStorage,d=vf();if(c){c.setItem(d,"1");c.removeItem(d);b=hf()?!!l.indexedDB:!0;break a}}catch(e){}b=!1}a=!b}return!a},xf=function(a){a=a||gf();var b=(a||gf()).toLowerCase();return b.match(/android/)||b.match(/webos/)||b.match(/iphone|ipad|ipod/)||b.match(/blackberry/)||
	b.match(/windows phone/)||b.match(/iemobile/)||"Firefox"==lf(a)?!1:!0},yf=function(a){return"undefined"===typeof a?null:lc(a)},zf=function(a){if(null!==a){var b;try{b=ic(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}},vf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},Af=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null};var Bf;try{var Cf={};Object.defineProperty(Cf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Cf,"abcd",{configurable:!0,enumerable:!0,value:2});Bf=2==Cf.abcd}catch(a){Bf=!1}
	var Q=function(a,b,c){Bf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Df=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&Q(a,c,b[c])},Ef=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},Ff=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0};var Gf={Hd:{ub:500,tb:600,providerId:"facebook.com"},Id:{ub:500,tb:620,providerId:"github.com"},Jd:{ub:515,tb:680,providerId:"google.com"},Od:{ub:485,tb:705,providerId:"twitter.com"}},Hf=function(a){for(var b in Gf)if(Gf[b].providerId==a)return Gf[b];return null};var R=function(a,b){this.code="auth/"+a;this.message=b||If[a]||""};t(R,Error);R.prototype.G=function(){return{name:this.code,code:this.code,message:this.message}};
	var If={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
	"email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.",
	"invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
	"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
	"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
	"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
	"user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported."};var Jf=function(a,b,c,d,e){this.va=a;this.za=b||null;this.hb=c||null;this.cc=d||null;this.J=e||null;if(this.hb||this.J){if(this.hb&&this.J)throw new R("invalid-auth-event");if(this.hb&&!this.cc)throw new R("invalid-auth-event");}else throw new R("invalid-auth-event");};Jf.prototype.getError=function(){return this.J};Jf.prototype.G=function(){return{type:this.va,eventId:this.za,urlResponse:this.hb,sessionId:this.cc,error:this.J&&this.J.G()}};var Kf=function(a){var b="unauthorized-domain",c=void 0,d=af(a);a=d.ga;d=d.la;"http"!=d&&"https"!=d?b="operation-not-supported-in-this-environment":c=ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a);R.call(this,b,c)};t(Kf,R);var Lf=function(a){this.qe=a.sub;la();this.Db=a.email||null};var Mf=function(a,b,c,d){var e={};ha(c)?e=c:b&&n(c)&&n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&n(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)Q(this,"accessToken",e.oauthToken),Q(this,"secret",e.oauthTokenSecret);else{if(b)throw new R("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new R("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&Q(this,
	"idToken",e.idToken),e.accessToken&&Q(this,"accessToken",e.accessToken);Q(this,"provider",a)};Mf.prototype.Gb=function(a){return Nf(a,Of(this))};Mf.prototype.md=function(a,b){var c=Of(this);c.idToken=b;return Pf(a,c)};var Of=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:ff(b).toString(),requestUri:wf()?jf():"http://localhost"}};
	Mf.prototype.G=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
	var Qf=function(a,b){var c=!!b;b=function(){Df(this,{providerId:a,isOAuthProvider:!0});this.Lc=[];"google.com"==a&&this.addScope("profile")};c||(b.prototype.addScope=function(a){Ja(this.Lc,a)||this.Lc.push(a)});b.prototype.Hb=function(){return Pa(this.Lc)};b.credential=function(b,e){return new Mf(a,c,b,e)};Df(b,{PROVIDER_ID:a});return b},Rf=Qf("facebook.com");Rf.prototype.addScope=Rf.prototype.addScope||void 0;var Sf=Qf("github.com");Sf.prototype.addScope=Sf.prototype.addScope||void 0;var Tf=Qf("google.com");
	Tf.prototype.addScope=Tf.prototype.addScope||void 0;Tf.credential=function(a,b){if(!a&&!b)throw new R("argument-error","credential failed: must provide the ID token and/or the access token.");return new Mf("google.com",!1,ha(a)?a:{idToken:a||null,accessToken:b||null})};var Uf=Qf("twitter.com",!0),Vf=function(a,b){this.Db=a;this.Dc=b;Q(this,"provider","password")};Vf.prototype.Gb=function(a){return S(a,Wf,{email:this.Db,password:this.Dc})};
	Vf.prototype.md=function(a,b){return S(a,Xf,{idToken:b,email:this.Db,password:this.Dc})};Vf.prototype.G=function(){return{email:this.Db,password:this.Dc}};var Yf=function(){Df(this,{providerId:"password",isOAuthProvider:!1})};Df(Yf,{PROVIDER_ID:"password"});
	var Zf={Me:Yf,Hd:Rf,Jd:Tf,Id:Sf,Od:Uf},$f=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in Zf)if(Zf[e].PROVIDER_ID==b)try{return Zf[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null};var ag=function(a,b,c,d){R.call(this,a,d);Q(this,"email",b);Q(this,"credential",c)};t(ag,R);ag.prototype.G=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.G();b&&(Ya(a,b),a.providerId=b.provider,delete a.provider);return a};var bg=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));return a.email?new ag(b,a.email,$f(a),a.message):new R(b,a.message||void 0)}return null};var cg=function(a){this.Le=a};t(cg,pc);cg.prototype.kb=function(){return new this.Le};cg.prototype.Qb=function(){return{}};
	var T=function(a,b,c){var d;d="Node"==rf();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new R("internal-error","The XMLHttpRequest compatibility library was not found.");this.v=a;a=b||{};this.Ae=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Be=a.secureTokenTimeout||1E4;this.wd=Wa(a.secureTokenHeaders||dg);this.$d=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.ae=a.firebaseTimeout||
	1E4;this.cd=Wa(a.firebaseHeaders||eg);c&&(this.cd["X-Client-Version"]=c,this.wd["X-Client-Version"]=c);this.Sd=new uc;this.Ke=new cg(d)},fg,dg={"Content-Type":"application/x-www-form-urlencoded"},eg={"Content-Type":"application/json"},hg=function(a,b,c,d,e,f,g){mf()?a=r(a.De,a):(fg||(fg=new I(function(a,b){gg(a,b)})),a=r(a.Ce,a));a(b,c,d,e,f,g)};
	T.prototype.De=function(a,b,c,d,e,f){var g="Node"==rf(),k=sf()?g?new M(this.Ke):new M:new M(this.Sd),q;f&&(k.fb=Math.max(0,f),q=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){q&&clearTimeout(q);var a=null;try{var c;c=this.a?ic(this.a.responseText):void 0;a=c||null}catch(Pi){try{a=JSON.parse(Ne(this))||null}catch(Qi){a=null}}b&&b(a)});Tb(k,"ready",function(){q&&clearTimeout(q);this.ya||(this.ya=!0,this.Oa())});Tb(k,"timeout",function(){q&&clearTimeout(q);this.ya||
	(this.ya=!0,this.Oa());b&&b(null)});k.send(a,c,d,e)};var Pd="__fcb"+Math.floor(1E6*Math.random()).toString(),gg=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Pd]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Rd(function(){b(Error("CORS_UNSUPPORTED"))}))};
	T.prototype.Ce=function(a,b,c,d,e){var f=this;fg.then(function(){window.gapi.client.setApiKey(f.v);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).l(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
	var jg=function(a,b){return new I(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?hg(a,a.Ae+"?key="+encodeURIComponent(a.v),function(a){a?a.error?d(ig(a)):a.access_token&&a.refresh_token?c(a):d(new R("internal-error")):d(new R("network-request-failed"))},"POST",ff(b).toString(),a.wd,a.Be):d(new R("internal-error"))})},kg=function(a){var b={},c;for(c in a)null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return lc(b)},lg=function(a,b,c,d,e){var f=a.$d+
	b+"?key="+encodeURIComponent(a.v);e&&(f+="&cb="+la().toString());return new I(function(b,e){hg(a,f,function(a){a?a.error?e(ig(a)):b(a):e(new R("network-request-failed"))},c,kg(d),a.cd,a.ae)})},mg=function(a){if(!Zb.test(a.email))throw new R("invalid-email");},ng=function(a){"email"in a&&mg(a)},pg=function(a,b){var c=wf()?jf():"http://localhost";return S(a,og,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[]})},rg=function(a){return S(a,qg,{}).then(function(a){return a.authorizedDomains||
	[]})},sg=function(a){if(!a.idToken)throw new R("internal-error");};T.prototype.signInAnonymously=function(){return S(this,tg,{})};T.prototype.updateEmail=function(a,b){return S(this,ug,{idToken:a,email:b})};T.prototype.updatePassword=function(a,b){return S(this,Xf,{idToken:a,password:b})};var vg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
	T.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Ra(vg,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return S(this,ug,c)};T.prototype.sendPasswordResetEmail=function(a){return S(this,wg,{requestType:"PASSWORD_RESET",email:a})};T.prototype.sendEmailVerification=function(a){return S(this,xg,{requestType:"VERIFY_EMAIL",idToken:a})};
	var zg=function(a,b,c){return S(a,yg,{idToken:b,deleteProvider:c})},Ag=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new R("internal-error");},Bg=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=bg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=bg(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=bg(a));if(b)throw b;if(!a.idToken)throw new R("internal-error");},Nf=function(a,
	b){b.returnIdpCredential=!0;return S(a,Cg,b)},Pf=function(a,b){b.returnIdpCredential=!0;return S(a,Dg,b)},Eg=function(a){if(!a.oobCode)throw new R("invalid-action-code");};T.prototype.confirmPasswordReset=function(a,b){return S(this,Fg,{oobCode:a,newPassword:b})};T.prototype.checkActionCode=function(a){return S(this,Gg,{oobCode:a})};T.prototype.applyActionCode=function(a){return S(this,Hg,{oobCode:a})};
	var Hg={endpoint:"setAccountInfo",D:Eg,cb:"email"},Gg={endpoint:"resetPassword",D:Eg,ta:function(a){if(!Zb.test(a.email))throw new R("internal-error");}},Ig={endpoint:"signupNewUser",D:function(a){mg(a);if(!a.password)throw new R("weak-password");},ta:sg,ua:!0},og={endpoint:"createAuthUri"},Jg={endpoint:"deleteAccount",ab:["idToken"]},yg={endpoint:"setAccountInfo",ab:["idToken","deleteProvider"],D:function(a){if(!ea(a.deleteProvider))throw new R("internal-error");}},Kg={endpoint:"getAccountInfo"},
	xg={endpoint:"getOobConfirmationCode",ab:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new R("internal-error");},cb:"email"},wg={endpoint:"getOobConfirmationCode",ab:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new R("internal-error");mg(a)},cb:"email"},qg={Rd:!0,endpoint:"getProjectConfig",je:"GET"},Fg={endpoint:"resetPassword",D:Eg,cb:"email"},ug={endpoint:"setAccountInfo",ab:["idToken"],D:ng,ua:!0},Xf={endpoint:"setAccountInfo",ab:["idToken"],
	D:function(a){ng(a);if(!a.password)throw new R("weak-password");},ta:sg,ua:!0},tg={endpoint:"signupNewUser",ta:sg,ua:!0},Cg={endpoint:"verifyAssertion",D:Ag,ta:Bg,ua:!0},Dg={endpoint:"verifyAssertion",D:function(a){Ag(a);if(!a.idToken)throw new R("internal-error");},ta:Bg,ua:!0},Lg={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new R("invalid-custom-token");},ta:sg,ua:!0},Wf={endpoint:"verifyPassword",D:function(a){mg(a);if(!a.password)throw new R("wrong-password");},ta:sg,ua:!0},S=
	function(a,b,c){if(!Ff(c,b.ab))return K(new R("internal-error"));var d=b.je||"POST",e;return J(c).then(b.D).then(function(){b.ua&&(c.returnSecureToken=!0);return lg(a,b.endpoint,d,c,b.Rd||!1)}).then(function(a){return e=a}).then(b.ta).then(function(){if(!b.cb)return e;if(!(b.cb in e))throw new R("internal-error");return e[b.cb]})},ig=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?
	new R(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
	FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",
	USER_CANCELLED:"user-cancelled"};b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new R(d[e],b);!b&&a&&(b=yf(a));return new R("internal-error",b)};var Mg=function(a){this.R=a};Mg.prototype.value=function(){return this.R};Mg.prototype.zd=function(a){this.R.style=a;return this};var Ng=function(a){this.R=a||{}};Ng.prototype.value=function(){return this.R};Ng.prototype.zd=function(a){this.R.style=a;return this};var Pg=function(a){this.Je=a;this.wc=null;this.od=Og(this)};Pg.prototype.Bc=function(){return this.od};
	var Qg=function(a){var b=new Ng;b.R.where=document.body;b.R.url=a.Je;b.R.messageHandlersFilter=uf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.R.attributes=b.R.attributes||{};(new Mg(b.R.attributes)).zd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.R.dontclear=!0;return b},Og=function(a){return Rg().then(function(){return new I(function(b,c){uf("gapi.iframes.getContext")().open(Qg(a).value(),function(d){a.wc=d;a.wc.restyle({setHideOnLeave:!1});var e=setTimeout(function(){c(Error("Network Error"))},
	5E3),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})},Sg=function(a,b){a.od.then(function(){a.wc.register("authEvent",b,uf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Tg="__iframefcb"+Math.floor(1E6*Math.random()).toString(),Rg=function(){return new I(function(a,b){var c=function(){Af();uf("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Af();b(Error("Network Error"))},timeout:3E3})};uf("gapi.iframes.Iframe")?a():uf("gapi.load")?c():
	(l[Tg]=function(){uf("gapi.load")?c():b(Error("Network Error"))},J(Od("https://apis.google.com/js/api.js?onload="+Tg)).l(function(){b(Error("Network Error"))}))})};var Vg=function(a,b,c,d){this.X=a;this.v=b;this.ea=c;d=this.xa=d||null;a=bf(a,"/__/auth/iframe");P(a,"apiKey",b);P(a,"appName",c);d&&P(a,"v",d);this.ke=a.toString();this.hd=new Pg(this.ke);this.zb=[];Ug(this)};Vg.prototype.Bc=function(){return this.hd.Bc()};
	var Wg=function(a,b,c,d,e,f,g,k,q){a=bf(a,"/__/auth/handler");P(a,"apiKey",b);P(a,"appName",c);P(a,"authType",d);P(a,"providerId",e);f&&f.length&&P(a,"scopes",f.join(","));g&&P(a,"redirectUrl",g);k&&P(a,"eventId",k);q&&P(a,"v",q);return a.toString()},Ug=function(a){Sg(a.hd,function(b){var c={};if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new R(e.substring(5),c.message):null;b=new Jf(b.type,b.eventId,b.urlResponse,b.sessionId,c)}else b=
	null;for(c=0;c<a.zb.length;c++)d=a.zb[c](b)||d;c={};c.status=d?"ACK":"ERROR";return J(c)}c.status="ERROR";return J(c)})},Xg=function(a,b){Ma(a.zb,function(a){return a==b})};var Yg=function(a){this.u=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.u)throw new R("internal-error","The React Native compatibility library was not found.");};h=Yg.prototype;h.get=function(a){return J(this.u.getItem(a)).then(function(a){return a&&zf(a)})};h.set=function(a,b){return J(this.u.setItem(a,yf(b)))};h.remove=function(a){return J(this.u.removeItem(a))};h.Ka=function(){};h.Za=function(){};var Zg=function(){this.u={}};h=Zg.prototype;h.get=function(a){return J(this.u[a])};h.set=function(a,b){this.u[a]=b;return J()};h.remove=function(a){delete this.u[a];return J()};h.Ka=function(){};h.Za=function(){};var ah=function(){if(!$g()){if("Node"==rf())throw new R("internal-error","The LocalStorage compatibility library was not found.");throw new R("web-storage-unsupported");}this.u=l.localStorage||firebase.INTERNAL.node.localStorage},$g=function(){var a="Node"==rf(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=ah.prototype;
	h.get=function(a){var b=this;return J().then(function(){var c=b.u.getItem(a);return zf(c)})};h.set=function(a,b){var c=this;return J().then(function(){var d=yf(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return J().then(function(){b.u.removeItem(a)})};h.Ka=function(a){l.window&&Lb(l.window,"storage",a)};h.Za=function(a){l.window&&Ub(l.window,"storage",a)};var bh=function(){this.u={}};h=bh.prototype;h.get=function(){return J(null)};h.set=function(){return J()};h.remove=function(){return J()};h.Ka=function(){};h.Za=function(){};var dh=function(){if(!ch()){if("Node"==rf())throw new R("internal-error","The SessionStorage compatibility library was not found.");throw new R("web-storage-unsupported");}this.u=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},ch=function(){var a="Node"==rf(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=dh.prototype;
	h.get=function(a){var b=this;return J().then(function(){var c=b.u.getItem(a);return zf(c)})};h.set=function(a,b){var c=this;return J().then(function(){var d=yf(b);null===d?c.remove(a):c.u.setItem(a,d)})};h.remove=function(a){var b=this;return J().then(function(){b.u.removeItem(a)})};h.Ka=function(){};h.Za=function(){};var eh=function(a,b,c,d,e,f){if(!window.indexedDB)throw new R("web-storage-unsupported");this.Ud=a;this.Ac=b;this.qc=c;this.Fd=d;this.na=e;this.O={};this.vb=[];this.sb=0;this.le=f||l.indexedDB},fh,gh=function(a){return new I(function(b,c){var d=a.le.open(a.Ud,a.na);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Ac,{keyPath:a.qc})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},hh=function(a){a.jd||(a.jd=
	gh(a));return a.jd},ih=function(a,b){return b.objectStore(a.Ac)},jh=function(a,b,c){return b.transaction([a.Ac],c?"readwrite":"readonly")},kh=function(a){return new I(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=eh.prototype;
	h.set=function(a,b){var c=!1,d,e=this;return xd(hh(this).then(function(b){d=b;b=ih(e,jh(e,d,!0));return kh(b.get(a))}).then(function(f){var g=ih(e,jh(e,d,!0));if(f)return f.value=b,kh(g.put(f));e.sb++;c=!0;f={};f[e.qc]=a;f[e.Fd]=b;return kh(g.add(f))}).then(function(){e.O[a]=b}),function(){c&&e.sb--})};h.get=function(a){var b=this;return hh(this).then(function(c){return kh(ih(b,jh(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
	h.remove=function(a){var b=!1,c=this;return xd(hh(this).then(function(d){b=!0;c.sb++;return kh(ih(c,jh(c,d,!0))["delete"](a))}).then(function(){delete c.O[a]}),function(){b&&c.sb--})};
	h.Fe=function(){var a=this;return hh(this).then(function(b){var c=ih(a,jh(a,b,!1));return c.getAll?kh(c.getAll()):new I(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.sb){for(d=0;d<b.length;d++)c[b[d][a.qc]]=b[d][a.Fd];d=kf(a.O,c);a.O=c}return d})};h.Ka=function(a){0==this.vb.length&&this.Oc();this.vb.push(a)};
	h.Za=function(a){Ma(this.vb,function(b){return b==a});0==this.vb.length&&this.ec()};h.Oc=function(){var a=this;this.ec();var b=function(){a.Fc=xe(800).then(r(a.Fe,a)).then(function(b){0<b.length&&x(a.vb,function(a){a(b)})}).then(b).l(function(a){"STOP_EVENT"!=a.message&&b()});return a.Fc};b()};h.ec=function(){this.Fc&&this.Fc.cancel("STOP_EVENT")};var oh=function(){this.$c={Browser:lh,Node:mh,ReactNative:nh}[rf()]},ph,lh={V:ah,Qc:dh},mh={V:ah,Qc:dh},nh={V:Yg,Qc:bh};var qh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),U=function(a,b){return{name:a||"",ca:"a valid string",optional:!!b,da:n}},rh=function(a){return{name:a||"",ca:"a valid object",optional:!1,da:ha}},sh=function(a,b){return{name:a||"",ca:"a function",optional:!!b,da:p}},th=function(){return{name:"",ca:"null",optional:!1,da:da}},uh=function(){return{name:"credential",ca:"a valid credential",optional:!1,da:function(a){return!(!a||!a.Gb)}}},vh=function(){return{name:"authProvider",
	ca:"a valid Auth provider",optional:!1,da:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},wh=function(a,b,c,d){return{name:c||"",ca:a.ca+" or "+b.ca,optional:!!d,da:function(c){return a.da(c)||b.da(c)}}};var yh=function(a,b){for(var c in b){var d=b[c].name;a[d]=xh(d,a[c],b[c].b)}},V=function(a,b,c,d){a[b]=xh(b,c,d)},xh=function(a,b,c){if(!c)return b;var d=zh(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var q=!1,ra=0;ra<c.length;ra++)if(c[ra].optional)q=!0;else{if(q)throw new R("internal-error","Argument validator encountered a required argument after an optional argument.");k++}q=c.length;if(e.length<k||q<e.length)e="Expected "+(k==
	q?1==k?"1 argument":k+" arguments":k+"-"+q+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(q=c[k].optional&&void 0===e[k],!c[k].da(e[k])&&!q){e=c[k];if(0>k||k>=qh.length)throw new R("internal-error","Argument validator received an unsupported number of arguments.");e=qh[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.ca+".";break a}e=null}}if(e)throw new R("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
	b.prototype[e];return a},zh=function(a){a=a.split(".");return a[a.length-1]};var Ah=function(a,b,c,d){this.te=a;this.xd=b;this.ze=c;this.eb=d;this.N={};ph||(ph=new oh);a=ph;try{var e;hf()?(fh||(fh=new eh("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=fh):e=new a.$c.V;this.Ta=e}catch(f){this.Ta=new Zg,this.eb=!0}try{this.gc=new a.$c.Qc}catch(f){this.gc=new Zg}this.Ad=r(this.Bd,this);this.O={}},Bh,Ch=function(){Bh||(Bh=new Ah("firebase",":","Safari"==lf(gf())&&l.window&&l.window!=l.window.top?!0:!1,xf()));return Bh};h=Ah.prototype;
	h.K=function(a,b){return this.te+this.xd+a.name+(b?this.xd+b:"")};h.get=function(a,b){return(a.V?this.Ta:this.gc).get(this.K(a,b))};h.remove=function(a,b){b=this.K(a,b);a.V&&!this.eb&&(this.O[b]=null);return(a.V?this.Ta:this.gc).remove(b)};h.set=function(a,b,c){var d=this.K(a,c),e=this,f=a.V?this.Ta:this.gc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.V&&!this.eb&&(e.O[d]=b)})};
	h.addListener=function(a,b,c){a=this.K(a,b);this.eb||(this.O[a]=l.localStorage.getItem(a));Ua(this.N)&&this.Oc();this.N[a]||(this.N[a]=[]);this.N[a].push(c)};h.removeListener=function(a,b,c){a=this.K(a,b);this.N[a]&&(Ma(this.N[a],function(a){return a==c}),0==this.N[a].length&&delete this.N[a]);Ua(this.N)&&this.ec()};h.Oc=function(){this.Ta.Ka(this.Ad);this.eb||Dh(this)};
	var Dh=function(a){Eh(a);a.zc=setInterval(function(){for(var b in a.N){var c=l.localStorage.getItem(b);c!=a.O[b]&&(a.O[b]=c,c=new Ab({type:"storage",key:b,target:window,oldValue:a.O[b],newValue:c}),a.Bd(c))}},1E3)},Eh=function(a){a.zc&&(clearInterval(a.zc),a.zc=null)};Ah.prototype.ec=function(){this.Ta.Za(this.Ad);this.eb||Eh(this)};
	Ah.prototype.Bd=function(a){if(a&&a.ce){var b=a.lb.key;if(this.ze){var c=l.localStorage.getItem(b);a=a.lb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.O[b]=l.localStorage.getItem(b);this.Vc(b)}else x(a,r(this.Vc,this))};Ah.prototype.Vc=function(a){this.N[a]&&x(this.N[a],function(a){a()})};var Fh=function(a){this.B=a;this.A=Ch()},Gh={name:"pendingRedirect",V:!1},Hh=function(a){return a.A.set(Gh,"pending",a.B)},Ih=function(a){return a.A.remove(Gh,a.B)},Jh=function(a){return a.A.get(Gh,a.B).then(function(a){return"pending"==a})};var Mh=function(a,b,c){var d=this,e=(this.xa=firebase.SDK_VERSION||null)?tf(this.xa):null;this.f=new T(b,null,e);this.qa=null;this.X=a;this.v=b;this.ea=c;this.wb=[];this.Pb=!1;this.Rc=r(this.de,this);this.Wa=new Kh(this);this.rd=new Lh(this);this.Ec=new Fh(this.v+":"+this.ea);this.gb={};this.gb.unknown=this.Wa;this.gb.signInViaRedirect=this.Wa;this.gb.linkViaRedirect=this.Wa;this.gb.signInViaPopup=this.rd;this.gb.linkViaPopup=this.rd;this.$b=this.bb=null;this.Ub=new I(function(a,b){d.bb=a;d.$b=b})};
	Mh.prototype.reset=function(){var a=this;this.qa=null;this.Ub.cancel();this.Pb=!1;this.$b=this.bb=null;this.Mb&&Xg(this.Mb,this.Rc);this.Ub=new I(function(b,c){a.bb=b;a.$b=c})};
	var Nh=function(a){var b=jf();return rg(a).then(function(a){a:{for(var c=af(b).ga,e=0;e<a.length;e++){var f;var g=a[e];f=c;var k=Mc(g);k?f=(f=Mc(f))?k.Eb(f):!1:(k=g.split(".").join("\\."),f=(new RegExp("^(.+\\."+k+"|"+k+")$","i")).test(f));if(f){a=!0;break a}}a=!1}if(!a)throw new Kf(jf());})},Oh=function(a){a.Pb||(a.Pb=!0,qf().then(function(){a.Mb=new Vg(a.X,a.v,a.ea,a.xa);a.Mb.Bc().l(function(){a.$b(new R("network-request-failed"));a.reset()});a.Mb.zb.push(a.Rc)}));return a.Ub};
	Mh.prototype.subscribe=function(a){Ja(this.wb,a)||this.wb.push(a);if(!this.Pb){var b=this,c=function(){var a=gf(),c;(c=xf(a))||(a=a||gf(),c="Safari"==lf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0);c?Ph(b.Wa):Oh(b)};Jh(this.Ec).then(function(a){a?Ih(b.Ec).then(function(){Oh(b)}):c()}).l(function(){c()})}};Mh.prototype.unsubscribe=function(a){Ma(this.wb,function(b){return b==a})};
	Mh.prototype.de=function(a){if(!a)throw new R("invalid-auth-event");this.bb&&(this.bb(),this.bb=null);for(var b=!1,c=0;c<this.wb.length;c++){var d=this.wb[c];if(d.Wc(a.va,a.za)){(b=this.gb[a.va])&&b.sd(a,d);b=!0;break}}Ph(this.Wa);return b};Mh.prototype.getRedirectResult=function(){return this.Wa.getRedirectResult()};
	var Rh=function(a,b,c,d,e,f){if(!b)return K(new R("popup-blocked"));if(f)return Oh(a),J();a.qa||(a.qa=Nh(a.f));return a.qa.then(function(){return Oh(a)}).then(function(){Qh(d);var f=Wg(a.X,a.v,a.ea,c,d.providerId,d.Hb(),null,e,a.xa);(b||l.window).location.href=dc(gc(f))}).l(function(b){"auth/network-request-failed"==b.code&&(a.qa=null);throw b;})},Sh=function(a,b,c,d){a.qa||(a.qa=Nh(a.f));return a.qa.then(function(){Qh(c);var e=Wg(a.X,a.v,a.ea,b,c.providerId,c.Hb(),jf(),d,a.xa);Hh(a.Ec).then(function(){l.window.location.href=
	dc(gc(e))})})},Th=function(a,b,c,d,e){var f=new R("popup-closed-by-user");return a.Ub.l(function(){}).then(function(){return pf(d)}).then(function(){return xe(2E3).then(function(){b.Ha(c,null,f,e)})})},Qh=function(a){if(!a.isOAuthProvider)throw new R("invalid-oauth-provider");},Uh={},Vh=function(a,b,c){var d=b+":"+c;Uh[d]||(Uh[d]=new Mh(a,b,c));return Uh[d]},Kh=function(a){this.A=a;this.Jc=this.Zb=this.Xa=this.W=null;this.Ic=!1};
	Kh.prototype.sd=function(a,b){if(!a)return K(new R("invalid-auth-event"));this.Ic=!0;var c=a.va,d=a.za;"unknown"==c?(this.W||Wh(this,!1,null,null),a=J()):a=a.J?this.Gc(a,b):b.mb(c,d)?this.Hc(a,b):K(new R("invalid-auth-event"));return a};var Ph=function(a){a.Ic||(a.Ic=!0,Wh(a,!1,null,null))};Kh.prototype.Gc=function(a){this.W||Wh(this,!0,null,a.getError());return J()};
	Kh.prototype.Hc=function(a,b){var c=this,d=a.va;b=b.mb(d,a.za);var e=a.hb;a=a.cc;var f="signInViaRedirect"==d||"linkViaRedirect"==d;return this.W?J():b(e,a).then(function(a){c.W||Wh(c,f,a,null)}).l(function(a){c.W||Wh(c,f,null,a)})};var Wh=function(a,b,c,d){b?d?(a.W=function(){return K(d)},a.Zb&&a.Zb(d)):(a.W=function(){return J(c)},a.Xa&&a.Xa(c)):(a.W=function(){return J({user:null})},a.Xa&&a.Xa({user:null}));a.Xa=null;a.Zb=null};
	Kh.prototype.getRedirectResult=function(){var a=this;this.Uc||(this.Uc=new I(function(b,c){a.W?a.W().then(b,c):(a.Xa=b,a.Zb=c,Xh(a))}));return this.Uc};var Xh=function(a){var b=new R("timeout");a.Jc&&a.Jc.cancel();a.Jc=xe(1E4).then(function(){a.W||Wh(a,!0,null,b)})},Lh=function(a){this.A=a};Lh.prototype.sd=function(a,b){if(!a)return K(new R("invalid-auth-event"));var c=a.va,d=a.za;return a.J?this.Gc(a,b):b.mb(c,d)?this.Hc(a,b):K(new R("invalid-auth-event"))};
	Lh.prototype.Gc=function(a,b){b.Ha(a.va,null,a.getError(),a.za);return J()};Lh.prototype.Hc=function(a,b){var c=a.za,d=a.va;return b.mb(d,c)(a.hb,a.cc).then(function(a){b.Ha(d,a,null,c)}).l(function(a){b.Ha(d,null,a,c)})};var Yh=function(a){this.f=a;this.wa=this.S=null;this.Pa=0};Yh.prototype.G=function(){return{apiKey:this.f.v,refreshToken:this.S,accessToken:this.wa,expirationTime:this.Pa}};
	var $h=function(a,b){var c=b.idToken,d=b.refreshToken;b=Zh(b.expiresIn);a.wa=c;a.Pa=b;a.S=d},Zh=function(a){return la()+1E3*parseInt(a,10)},ai=function(a,b){return jg(a.f,b).then(function(b){a.wa=b.access_token;a.Pa=Zh(b.expires_in);a.S=b.refresh_token;return{accessToken:a.wa,expirationTime:a.Pa,refreshToken:a.S}}).l(function(b){"auth/user-token-expired"==b.code&&(a.S=null);throw b;})},bi=function(a){return!(!a.wa||a.S)};
	Yh.prototype.getToken=function(a){a=!!a;return bi(this)?K(new R("user-token-expired")):a||!this.wa||la()>this.Pa-3E4?this.S?ai(this,{grant_type:"refresh_token",refresh_token:this.S}):J(null):J({accessToken:this.wa,expirationTime:this.Pa,refreshToken:this.S})};var ci=function(a,b,c,d,e){Df(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},di=function(a,b){zb.call(this,a);for(var c in b)this[c]=b[c]};t(di,zb);
	var W=function(a,b,c){this.U=[];this.v=a.apiKey;this.ea=a.appName;this.X=a.authDomain||null;a=firebase.SDK_VERSION?tf(firebase.SDK_VERSION):null;this.f=new T(this.v,null,a);this.ba=new Yh(this.f);ei(this,b.idToken);$h(this.ba,b);Q(this,"refreshToken",this.ba.S);fi(this,c||{});$d.call(this);this.Vb=!1;this.X&&wf()&&(this.m=Vh(this.X,this.v,this.ea));this.dc=[]};t(W,$d);
	var ei=function(a,b){a.kd=b;Q(a,"_lat",b)},gi=function(a,b){Ma(a.dc,function(a){return a==b})},hi=function(a){for(var b=[],c=0;c<a.dc.length;c++)b.push(a.dc[c](a));return ud(b).then(function(){return a})},ii=function(a){a.m&&!a.Vb&&(a.Vb=!0,a.m.subscribe(a))},fi=function(a,b){Df(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};Q(W.prototype,"providerId","firebase");
	var ji=function(){},ki=function(a){return J().then(function(){if(a.Vd)throw new R("app-deleted");})},li=function(a){return Fa(a.providerData,function(a){return a.providerId})},ni=function(a,b){b&&(mi(a,b.providerId),a.providerData.push(b))},mi=function(a,b){Ma(a.providerData,function(a){return a.providerId==b})},oi=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&Q(a,b,c)};
	W.prototype.copy=function(a){var b=this;b!=a&&(Df(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){ni(b,a)}),this.ba=a.ba,Q(this,"refreshToken",this.ba.S))};W.prototype.reload=function(){var a=this;return ki(this).then(function(){return pi(a).then(function(){return hi(a)}).then(ji)})};
	var pi=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return qi(a,b).then(function(){c||oi(a,"isAnonymous",!1);return b}).l(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new di("userDeleted")),ri(a));throw b;})})};
	W.prototype.getToken=function(a){var b=this,c=bi(this.ba);return ki(this).then(function(){return b.ba.getToken(a)}).then(function(a){if(!a)throw new R("internal-error");a.accessToken!=b.kd&&(ei(b,a.accessToken),b.Da());oi(b,"refreshToken",a.refreshToken);return a.accessToken}).l(function(a){if("auth/user-token-expired"==a.code&&!c)return hi(b).then(function(){oi(b,"refreshToken",null);throw a;});throw a;})};
	var si=function(a,b){b.idToken&&a.kd!=b.idToken&&($h(a.ba,b),a.Da(),ei(a,b.idToken),oi(a,"refreshToken",a.ba.S))};W.prototype.Da=function(){this.dispatchEvent(new di("tokenChanged"))};var qi=function(a,b){return S(a.f,Kg,{idToken:b}).then(r(a.we,a))};
	W.prototype.we=function(a){a=a.users;if(!a||!a.length)throw new R("internal-error");a=a[0];fi(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=ti(a),c=0;c<b.length;c++)ni(this,b[c]);oi(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
	var ti=function(a){return(a=a.providerUserInfo)&&a.length?Fa(a,function(a){return new ci(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.c(a.Gb(this.f).then(function(a){var c;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=ic(ub(e));if(k.sub&&k.iss&&k.aud&&k.exp){c=new Lf(k);break a}}catch(q){}}c=null}if(!c||b.uid!=c.qe)throw new R("user-mismatch");si(b,a);return b.reload()}))};
	var ui=function(a,b){return pi(a).then(function(){if(Ja(li(a),b))return hi(a).then(function(){throw new R("provider-already-linked");})})};h=W.prototype;h.link=function(a){var b=this;return this.c(ui(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.md(b.f,c)}).then(r(this.bd,this)))};h.bd=function(a){si(this,a);var b=this;return this.reload().then(function(){return b})};
	h.updateEmail=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updateEmail(c,a)}).then(function(a){si(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updatePassword(c,a)}).then(function(a){si(b,a);return b.reload()}))};
	h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return ki(this);var b=this;return this.c(this.getToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){si(b,a);oi(b,"displayName",a.displayName||null);oi(b,"photoURL",a.photoUrl||null);return hi(b)}).then(ji))};
	h.unlink=function(a){var b=this;return this.c(pi(this).then(function(c){return Ja(li(b),a)?zg(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(li(b),function(a){c[a]||mi(b,a)});return hi(b)}):hi(b).then(function(){throw new R("no-such-provider");})}))};h.delete=function(){var a=this;return this.c(this.getToken().then(function(b){return S(a.f,Jg,{idToken:b})}).then(function(){a.dispatchEvent(new di("userDeleted"))})).then(function(){ri(a)})};
	h.Wc=function(a,b){return"linkViaPopup"==a&&(this.ia||null)==b&&this.$||"linkViaRedirect"==a&&(this.Yb||null)==b?!0:!1};h.Ha=function(a,b,c,d){"linkViaPopup"==a&&d==(this.ia||null)&&(c&&this.Fa?this.Fa(c):b&&!c&&this.$&&this.$(b),this.C&&(this.C.cancel(),this.C=null),delete this.$,delete this.Fa)};h.mb=function(a,b){return"linkViaPopup"==a&&b==(this.ia||null)||"linkViaRedirect"==a&&(this.Yb||null)==b?r(this.Yd,this):null};h.Fb=function(){return vf(this.uid+":::")};
	h.linkWithPopup=function(a){if(!wf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Hf(a.providerId),d=this.Fb(),e=null;!xf()&&this.X&&a.isOAuthProvider&&(e=Wg(this.X,this.v,this.ea,"linkViaPopup",a.providerId,a.Hb(),null,d,firebase.SDK_VERSION||null));var f=of(e,c&&c.ub,c&&c.tb),c=ui(this,a.providerId).then(function(){return hi(b)}).then(function(){vi(b);return b.getToken()}).then(function(){return Rh(b.m,f,"linkViaPopup",a,d,!!e)}).then(function(){return new I(function(a,
	c){b.Ha("linkViaPopup",null,new R("cancelled-popup-request"),b.ia||null);b.$=a;b.Fa=c;b.ia=d;b.C=Th(b.m,b,"linkViaPopup",f,d)})}).then(function(a){f&&nf(f);return a}).l(function(a){f&&nf(f);throw a;});return this.c(c)};
	h.linkWithRedirect=function(a){if(!wf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Fb(),e=ui(this,a.providerId).then(function(){vi(b);return b.getToken()}).then(function(){b.Yb=d;return hi(b)}).then(function(a){b.Ga&&(a=b.Ga,a=a.A.set(wi,b.G(),a.B));return a}).then(function(){return Sh(b.m,"linkViaRedirect",a,d)}).l(function(a){c=a;if(b.Ga)return xi(b.Ga);throw c;}).then(function(){if(c)throw c;});return this.c(e)};
	var vi=function(a){if(a.m&&a.Vb)return;if(a.m&&!a.Vb)throw new R("internal-error");throw new R("auth-domain-config-required");};W.prototype.Yd=function(a,b){var c=this;this.C&&(this.C.cancel(),this.C=null);var d=null,e=this.getToken().then(function(d){return Pf(c.f,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=$f(a);return c.bd(a)}).then(function(a){return{user:a,credential:d}});return this.c(e)};
	W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.f.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var ri=function(a){for(var b=0;b<a.U.length;b++)a.U[b].cancel("app-deleted");a.U=[];a.Vd=!0;Q(a,"refreshToken",null);a.m&&a.m.unsubscribe(a)};W.prototype.c=function(a){var b=this;this.U.push(a);xd(a,function(){La(b.U,a)});return a};W.prototype.toJSON=function(){return this.G()};
	W.prototype.G=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.v,appName:this.ea,authDomain:this.X,stsTokenManager:this.ba.G(),redirectEventId:this.Yb||null};x(this.providerData,function(b){a.providerData.push(Ef(b))});return a};
	var yi=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new W(b,c,a);a.providerData&&x(a.providerData,function(a){if(a){var b={};Df(b,a);ni(d,b)}});a.redirectEventId&&(d.Yb=a.redirectEventId);
	return d},zi=function(a,b,c){var d=new W(a,b);c&&(d.Ga=c);return d.reload().then(function(){return d})};var Ai=function(a){this.B=a;this.A=Ch()},wi={name:"redirectUser",V:!1},xi=function(a){return a.A.remove(wi,a.B)},Bi=function(a,b){return a.A.get(wi,a.B).then(function(a){a&&b&&(a.authDomain=b);return yi(a||{})})};var Ci=function(a){this.B=a;this.A=Ch()},Di={name:"authUser",V:!0},Ei=function(a,b){return a.A.set(Di,b.G(),a.B)},Fi=function(a){return a.A.remove(Di,a.B)},Gi=function(a,b){return a.A.get(Di,a.B).then(function(a){a&&b&&(a.authDomain=b);return yi(a||{})})};var Y=function(a){this.Na=!1;Q(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?tf(firebase.SDK_VERSION):null,this.f=new T(X(this).options&&X(this).options.apiKey,null,a);else throw new R("invalid-api-key");this.U=[];this.La=[];this.ue=firebase.INTERNAL.createSubscribe(r(this.me,this));Hi(this,null);this.ma=new Ci(X(this).options.apiKey+":"+X(this).name);this.Ya=new Ai(X(this).options.apiKey+":"+X(this).name);this.Ab=this.c(Ii(this));this.sa=this.c(Ji(this));this.yc=
	!1;this.vc=r(this.Ee,this);this.Dd=r(this.Ra,this);this.Ed=r(this.ie,this);this.Cd=r(this.he,this);Ki(this);this.INTERNAL={};this.INTERNAL.delete=r(this.delete,this)};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).G()}};
	var Li=function(a){return a.Wd||K(new R("auth-domain-config-required"))},Ki=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&wf()&&(a.Wd=a.Ab.then(function(){if(!a.Na)return a.m=Vh(b,c,X(a).name),a.m.subscribe(a),Z(a)&&ii(Z(a)),a.Kc&&(ii(a.Kc),a.Kc=null),a.m}))};h=Y.prototype;h.Wc=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ia==b&&!!this.$;default:return!1}};
	h.Ha=function(a,b,c,d){"signInViaPopup"==a&&this.ia==d&&(c&&this.Fa?this.Fa(c):b&&!c&&this.$&&this.$(b),this.C&&(this.C.cancel(),this.C=null),delete this.$,delete this.Fa)};h.mb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ia==b&&this.$?r(this.Zd,this):null};
	h.Zd=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.C&&(this.C.cancel(),this.C=null);var d=null,e=Nf(c.f,a).then(function(a){d=$f(a);return a});a=c.Ab.then(function(){return e}).then(function(a){return Mi(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.c(a)};h.Fb=function(){return vf()};
	h.signInWithPopup=function(a){if(!wf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Hf(a.providerId),d=this.Fb(),e=null;!xf()&&X(this).options.authDomain&&a.isOAuthProvider&&(e=Wg(X(this).options.authDomain,X(this).options.apiKey,X(this).name,"signInViaPopup",a.providerId,a.Hb(),null,d,firebase.SDK_VERSION||null));var f=of(e,c&&c.ub,c&&c.tb),c=Li(this).then(function(b){return Rh(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new I(function(a,c){b.Ha("signInViaPopup",
	null,new R("cancelled-popup-request"),b.ia);b.$=a;b.Fa=c;b.ia=d;b.C=Th(b.m,b,"signInViaPopup",f,d)})}).then(function(a){f&&nf(f);return a}).l(function(a){f&&nf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!wf())return K(new R("operation-not-supported-in-this-environment"));var b=this,c=Li(this).then(function(){return Sh(b.m,"signInViaRedirect",a)});return this.c(c)};
	h.getRedirectResult=function(){if(!wf())return K(new R("operation-not-supported-in-this-environment"));var a=this,b=Li(this).then(function(){return a.m.getRedirectResult()});return this.c(b)};
	var Mi=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.Ab.then(function(){return zi(c,b,a.Ya)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Ra(b);Hi(a,b);ii(b);return a.Ra(b)}).then(function(){a.Da()})},Hi=function(a,b){Z(a)&&(gi(Z(a),a.Dd),Ub(Z(a),"tokenChanged",a.Ed),Ub(Z(a),"userDeleted",a.Cd));b&&(b.dc.push(a.Dd),Lb(b,"tokenChanged",a.Ed),Lb(b,"userDeleted",a.Cd));Q(a,"currentUser",b)};
	Y.prototype.signOut=function(){var a=this,b=this.sa.then(function(){if(!Z(a))return J();Hi(a,null);return Fi(a.ma).then(function(){a.Da()})});return this.c(b)};
	var Ni=function(a){var b=Bi(a.Ya,X(a).options.authDomain).then(function(b){if(a.Kc=b)b.Ga=a.Ya;return xi(a.Ya)});return a.c(b)},Ii=function(a){var b=X(a).options.authDomain,c=Ni(a).then(function(){return Gi(a.ma,b)}).then(function(b){return b?(b.Ga=a.Ya,b.reload().then(function(){return Ei(a.ma,b).then(function(){return b})}).l(function(c){return"auth/network-request-failed"==c.code?b:Fi(a.ma)})):null}).then(function(b){Hi(a,b||null)});return a.c(c)},Ji=function(a){return a.Ab.then(function(){return a.getRedirectResult()}).l(function(){}).then(function(){return a.Na?
	void 0:a.vc()}).l(function(){}).then(function(){if(!a.Na){a.yc=!0;var b=a.ma;b.A.addListener(Di,b.B,a.vc)}})};Y.prototype.Ee=function(){var a=this;return Gi(this.ma,X(this).options.authDomain).then(function(b){if(!a.Na){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)Hi(a,b),b&&(ii(b),b.Ga=a.Ya),a.m&&a.m.subscribe(a),a.Da()}})};Y.prototype.Ra=function(a){return Ei(this.ma,a)};
	Y.prototype.ie=function(){this.Da();this.Ra(Z(this))};Y.prototype.he=function(){this.signOut()};var Oi=function(a,b){return a.c(b.then(function(b){return Mi(a,b)}).then(function(){return Z(a)}))};h=Y.prototype;h.me=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.yc&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d))});return this.ue(a,b,c)};
	h.getToken=function(a){var b=this,c=this.sa.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.sa.then(function(){return Oi(b,S(b.f,Lg,{token:a}))}).then(function(a){oi(a,"isAnonymous",!1);return b.Ra(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.sa.then(function(){return Oi(c,S(c.f,Wf,{email:a,password:b}))})};
	h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.sa.then(function(){return Oi(c,S(c.f,Ig,{email:a,password:b}))})};h.signInWithCredential=function(a){var b=this;return this.sa.then(function(){return Oi(b,a.Gb(b.f))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?J(a):this.sa.then(function(){return Oi(b,b.f.signInAnonymously())}).then(function(a){oi(a,"isAnonymous",!0);return b.Ra(a)}).then(function(){return Z(b)})};
	var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.Da=function(){if(this.yc)for(var a=0;a<this.La.length;a++)if(this.La[a])this.La[a](Z(this)&&Z(this)._lat||null)};h.addAuthTokenListener=function(a){var b=this;this.La.push(a);this.c(this.sa.then(function(){b.Na||Ja(b.La,a)&&a(Z(b)&&Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){Ma(this.La,function(b){return b==a})};
	h.delete=function(){this.Na=!0;for(var a=0;a<this.U.length;a++)this.U[a].cancel("app-deleted");this.U=[];this.ma&&(a=this.ma,a.A.removeListener(Di,a.B,this.vc));this.m&&this.m.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.U.push(a);xd(a,function(){La(b.U,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(pg(this.f,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
	h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return{data:{email:a.email}}}))};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.f.sendPasswordResetEmail(a).then(function(){}))};yh(Y.prototype,{applyActionCode:{name:"applyActionCode",b:[U("code")]},checkActionCode:{name:"checkActionCode",b:[U("code")]},confirmPasswordReset:{name:"confirmPasswordReset",b:[U("code"),U("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",b:[U("email"),U("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",b:[U("email")]},getRedirectResult:{name:"getRedirectResult",b:[]},onAuthStateChanged:{name:"onAuthStateChanged",b:[wh(rh(),sh(),"nextOrObserver"),
	sh("opt_error",!0),sh("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",b:[U("email")]},signInAnonymously:{name:"signInAnonymously",b:[]},signInWithCredential:{name:"signInWithCredential",b:[uh()]},signInWithCustomToken:{name:"signInWithCustomToken",b:[U("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",b:[U("email"),U("password")]},signInWithPopup:{name:"signInWithPopup",b:[vh()]},signInWithRedirect:{name:"signInWithRedirect",b:[vh()]},signOut:{name:"signOut",
	b:[]},toJSON:{name:"toJSON",b:[U(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",b:[U("code")]}});
	yh(W.prototype,{"delete":{name:"delete",b:[]},getToken:{name:"getToken",b:[{name:"opt_forceRefresh",ca:"a boolean",optional:!0,da:function(a){return"boolean"==typeof a}}]},link:{name:"link",b:[uh()]},linkWithPopup:{name:"linkWithPopup",b:[vh()]},linkWithRedirect:{name:"linkWithRedirect",b:[vh()]},reauthenticate:{name:"reauthenticate",b:[uh()]},reload:{name:"reload",b:[]},sendEmailVerification:{name:"sendEmailVerification",b:[]},toJSON:{name:"toJSON",b:[U(null,!0)]},unlink:{name:"unlink",b:[U("provider")]},
	updateEmail:{name:"updateEmail",b:[U("email")]},updatePassword:{name:"updatePassword",b:[U("password")]},updateProfile:{name:"updateProfile",b:[rh("profile")]}});yh(I.prototype,{l:{name:"catch"},then:{name:"then"}});V(Yf,"credential",function(a,b){return new Vf(a,b)},[U("email"),U("password")]);yh(Rf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Rf,"credential",Rf.credential,[wh(U(),rh(),"token")]);yh(Sf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});
	V(Sf,"credential",Sf.credential,[wh(U(),rh(),"token")]);yh(Tf.prototype,{addScope:{name:"addScope",b:[U("scope")]}});V(Tf,"credential",Tf.credential,[wh(U(),wh(rh(),th()),"idToken"),wh(U(),th(),"accessToken",!0)]);V(Uf,"credential",Uf.credential,[wh(U(),rh(),"token"),U("secret",!0)]);
	(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:R};V(a,"EmailAuthProvider",Yf,[]);V(a,"FacebookAuthProvider",Rf,[]);V(a,"GithubAuthProvider",Sf,[]);V(a,"GoogleAuthProvider",Tf,[]);V(a,"TwitterAuthProvider",Uf,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getToken:r(a.getToken,a),addAuthTokenListener:r(a.addAuthTokenListener,a),removeAuthTokenListener:r(a.removeAuthTokenListener,a)}});return a},
	a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();
	module.exports = firebase.auth;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var firebase = __webpack_require__(51);
	/*! @license Firebase v3.4.0
	    Build: 3.4.0-rc.3
	    Terms: https://developers.google.com/terms */
	(function() {var g,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.Wb=function(){return a.bf?a.bf:a.bf=new a}}
	function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function ga(a){return"function"==ca(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}
	function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,arguments)}
	function ka(a,b){function c(){}c.prototype=b.prototype;a.Ig=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Eg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function t(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function la(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function ma(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function na(a){var b=0,c;for(c in a)b++;return b}function oa(a){for(var b in a)return b}function pa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function qa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ra(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function sa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function ta(a,b){var c=sa(a,b,void 0);return c&&a[c]}function ua(a){for(var b in a)return!1;return!0}function va(a){var b={},c;for(c in a)b[c]=a[c];return b};function wa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function xa(){this.Fd=void 0}
	function ya(a,b,c){switch(typeof b){case "string":za(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],ya(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),za(f,c),
	c.push(":"),ya(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Aa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ba=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function za(a,b){b.push('"',a.replace(Ba,function(a){if(a in Aa)return Aa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Aa[a]=e+b.toString(16)}),'"')};var v;a:{var Ca=n.navigator;if(Ca){var Da=Ca.userAgent;if(Da){v=Da;break a}}v=""};function Ea(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ea);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(Ea,Error);Ea.prototype.name="CustomError";var w=Array.prototype,Fa=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ga=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ha=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=q(a)?
	a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Ia=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ja=w.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=r(b,d));return w.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ga(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Ka=w.every?function(a,b,
	c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function La(a,b){var c=Ma(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Ma(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Na(a,b){var c=Fa(a,b);0<=c&&w.splice.call(a,c,1)}function Oa(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}
	function Pa(a,b){a.sort(b||Qa)}function Qa(a,b){return a>b?1:a<b?-1:0};var Ra=-1!=v.indexOf("Opera")||-1!=v.indexOf("OPR"),Sa=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),Ta=-1!=v.indexOf("Gecko")&&-1==v.toLowerCase().indexOf("webkit")&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE")),Ua=-1!=v.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(Ra&&n.opera)return a=n.opera.version,ga(a)?a():a;Ta?b=/rv\:([^\);]+)(\)|;)/:Sa?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Ua&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(v))?a[1]:"");return Sa&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();function Va(a){n.setTimeout(function(){throw a;},0)}var Wa;
	function Xa(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==v.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==
	d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==v.indexOf("Trident")&&-1==v.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Le;c.Le=null;a()}};return function(a){d.next={Le:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
	document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function Ya(a,b){Za||$a();ab||(Za(),ab=!0);bb.push(new cb(a,b))}var Za;function $a(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();Za=function(){a.then(db)}}else Za=function(){var a=db;!ga(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(Wa||(Wa=Xa()),Wa(a)):n.setImmediate(a)}}var ab=!1,bb=[];[].push(function(){ab=!1;bb=[]});
	function db(){for(;bb.length;){var a=bb;bb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.Wf.call(c.scope)}catch(d){Va(d)}}}ab=!1}function cb(a,b){this.Wf=a;this.scope=b};function eb(a,b){this.L=fb;this.uf=void 0;this.Ca=this.Ha=null;this.jd=this.be=!1;if(a==gb)hb(this,ib,b);else try{var c=this;a.call(b,function(a){hb(c,ib,a)},function(a){if(!(a instanceof jb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}hb(c,kb,a)})}catch(d){hb(this,kb,d)}}var fb=0,ib=2,kb=3;function gb(){}eb.prototype.then=function(a,b,c){return lb(this,ga(a)?a:null,ga(b)?b:null,c)};eb.prototype.then=eb.prototype.then;eb.prototype.$goog_Thenable=!0;g=eb.prototype;
	g.Ag=function(a,b){return lb(this,null,a,b)};g.cancel=function(a){this.L==fb&&Ya(function(){var b=new jb(a);mb(this,b)},this)};function mb(a,b){if(a.L==fb)if(a.Ha){var c=a.Ha;if(c.Ca){for(var d=0,e=-1,f=0,h;h=c.Ca[f];f++)if(h=h.m)if(d++,h==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.L==fb&&1==d?mb(c,b):(d=c.Ca.splice(e,1)[0],nb(c,d,kb,b)))}a.Ha=null}else hb(a,kb,b)}function ob(a,b){a.Ca&&a.Ca.length||a.L!=ib&&a.L!=kb||pb(a);a.Ca||(a.Ca=[]);a.Ca.push(b)}
	function lb(a,b,c,d){var e={m:null,hf:null,kf:null};e.m=new eb(function(a,h){e.hf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){h(l)}}:a;e.kf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof jb?h(b):a(e)}catch(l){h(l)}}:h});e.m.Ha=a;ob(a,e);return e.m}g.Cf=function(a){this.L=fb;hb(this,ib,a)};g.Df=function(a){this.L=fb;hb(this,kb,a)};
	function hb(a,b,c){if(a.L==fb){if(a==c)b=kb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.L=1;c.then(a.Cf,a.Df,a);return}if(ha(c))try{var f=c.then;if(ga(f)){qb(a,c,f);return}}catch(h){b=kb,c=h}}a.uf=c;a.L=b;a.Ha=null;pb(a);b!=kb||c instanceof jb||rb(a,c)}}function qb(a,b,c){function d(b){f||(f=!0,a.Df(b))}function e(b){f||(f=!0,a.Cf(b))}a.L=1;var f=!1;try{c.call(b,e,d)}catch(h){d(h)}}
	function pb(a){a.be||(a.be=!0,Ya(a.Uf,a))}g.Uf=function(){for(;this.Ca&&this.Ca.length;){var a=this.Ca;this.Ca=null;for(var b=0;b<a.length;b++)nb(this,a[b],this.L,this.uf)}this.be=!1};function nb(a,b,c,d){if(c==ib)b.hf(d);else{if(b.m)for(;a&&a.jd;a=a.Ha)a.jd=!1;b.kf(d)}}function rb(a,b){a.jd=!0;Ya(function(){a.jd&&sb.call(null,b)})}var sb=Va;function jb(a){Ea.call(this,a)}ka(jb,Ea);jb.prototype.name="cancel";var tb=null,ub=null,vb=null;function wb(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");xb();for(var c=b?ub:tb,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
	function xb(){if(!tb){tb={};ub={};vb={};for(var a=0;65>a;a++)tb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),ub[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),vb[ub[a]]=a,62<=a&&(vb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function yb(){this.Ya=-1};function zb(){this.Ya=-1;this.Ya=64;this.N=[];this.Wd=[];this.Jf=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Ya;++a)this.zd[a]=0;this.Pd=this.ac=0;this.reset()}ka(zb,yb);zb.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.Pd=this.ac=0};
	function Ab(a,b,c){c||(c=0);var d=a.Jf;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.N[0];c=a.N[1];for(var h=a.N[2],k=a.N[3],m=a.N[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
	5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+h&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+m&4294967295}
	zb.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.Wd,f=this.ac;d<b;){if(0==f)for(;d<=c;)Ab(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){Ab(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){Ab(this,e);f=0;break}}this.ac=f;this.Pd+=b}};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function Bb(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function y(a,b,c,d){if((!d||p(c))&&!ga(c))throw Error(Bb(a,b,d)+"must be a valid function.");}function Cb(a,b,c){if(p(c)&&(!ha(c)||null===c))throw Error(Bb(a,b,!0)+"must be a valid context object.");};var Db=n.Promise||eb;eb.prototype["catch"]=eb.prototype.Ag;function Eb(){var a=this;this.reject=this.resolve=null;this.sa=new Db(function(b,c){a.resolve=b;a.reject=c})}function Fb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ga(b)&&(Gb(a.sa),1===b.length?b(c):b(c,d))}}function Gb(a){a.then(void 0,aa)};function Hb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function A(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Ib(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function Jb(a){var b=[];Ib(a,function(a,d){da(d)?Ga(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};function Kb(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):wa(a)}function B(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];ya(new xa,a,b);a=b.join("")}return a};function Lb(a,b){if(!a)throw Mb(b);}function Mb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function Nb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Lb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Ob(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function Pb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function Qb(a){this.te=a;this.Bd=[];this.Rb=0;this.Yd=-1;this.Gb=null}function Rb(a,b,c){a.Yd=b;a.Gb=c;a.Yd<a.Rb&&(a.Gb(),a.Gb=null)}function Sb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Rb];){var d=a.Bd[a.Rb];delete a.Bd[a.Rb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Tb(function(){f.te(d[e])})}if(a.Rb===a.Yd){a.Gb&&(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break}a.Rb++}};function Ub(){this.qc={}}Ub.prototype.set=function(a,b){null==b?delete this.qc[a]:this.qc[a]=b};Ub.prototype.get=function(a){return Hb(this.qc,a)?this.qc[a]:null};Ub.prototype.remove=function(a){delete this.qc[a]};Ub.prototype.cf=!0;function Vb(a){this.vc=a;this.Cd="firebase:"}g=Vb.prototype;g.set=function(a,b){null==b?this.vc.removeItem(this.Cd+a):this.vc.setItem(this.Cd+a,B(b))};g.get=function(a){a=this.vc.getItem(this.Cd+a);return null==a?null:Kb(a)};g.remove=function(a){this.vc.removeItem(this.Cd+a)};g.cf=!1;g.toString=function(){return this.vc.toString()};function Wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Vb(b)}}catch(c){}return new Ub}var Xb=Wb("localStorage"),Yb=Wb("sessionStorage");function Zb(a,b){this.type=$b;this.source=a;this.path=b}Zb.prototype.Nc=function(){return this.path.e()?new Zb(this.source,C):new Zb(this.source,D(this.path))};Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ac(a,b,c){this.type=bc;this.source=a;this.path=b;this.Ja=c}ac.prototype.Nc=function(a){return this.path.e()?new ac(this.source,C,this.Ja.R(a)):new ac(this.source,D(this.path),this.Ja)};ac.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function cc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.Cg=d;this.nf=e||"";this.bb=Xb.get("host:"+a)||this.host}function dc(a,b){b!==a.bb&&(a.bb=b,"s-"===a.bb.substr(0,2)&&Xb.set("host:"+a.host,a.bb))}
	function ec(a,b,c){E("string"===typeof b,"typeof type must == string");E("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.bb+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.bb+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.bb&&(c.ns=a.pe);var d=[];t(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
	cc.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.nf&&(a+="<"+this.nf+">");return a};function fc(){this.Jd=F}fc.prototype.j=function(a){return this.Jd.Q(a)};fc.prototype.toString=function(){return this.Jd.toString()};function H(a,b,c,d){this.type=a;this.Ma=b;this.Za=c;this.qe=d;this.Dd=void 0}function gc(a){return new H(hc,a)}var hc="value";function ic(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.gd=a}ic.prototype.Zb=function(){var a=this.Md.xb();return"value"===this.gd?a.path:a.getParent().path};ic.prototype.ge=function(){return this.gd};ic.prototype.Ub=function(){return this.ae.Ub(this)};ic.prototype.toString=function(){return this.Zb().toString()+":"+this.gd+":"+B(this.Md.Ue())};function jc(a,b,c){this.ae=a;this.error=b;this.path=c}jc.prototype.Zb=function(){return this.path};jc.prototype.ge=function(){return"cancel"};
	jc.prototype.Ub=function(){return this.ae.Ub(this)};jc.prototype.toString=function(){return this.path.toString()+":cancel"};function kc(){}kc.prototype.Xe=function(){return null};kc.prototype.fe=function(){return null};var lc=new kc;function mc(a,b,c){this.Gf=a;this.Na=b;this.yd=c}mc.prototype.Xe=function(a){var b=this.Na.O;if(nc(b,a))return b.j().R(a);b=null!=this.yd?new oc(this.yd,!0,!1):this.Na.w();return this.Gf.rc(a,b)};mc.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:pc(this.Na);a=this.Gf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function qc(){this.wb=[]}function rc(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.$(c.Zb())||(a.wb.push(c),c=null);null===c&&(c=new sc(f));c.add(e)}c&&a.wb.push(c)}function tc(a,b,c){rc(a,c);uc(a,function(a){return a.$(b)})}function vc(a,b,c){rc(a,c);uc(a,function(a){return a.contains(b)||b.contains(a)})}
	function uc(a,b){for(var c=!0,d=0;d<a.wb.length;d++){var e=a.wb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.wb[d],f=0;f<e.hd.length;f++){var h=e.hd[f];if(null!==h){e.hd[f]=null;var k=h.Ub();wc&&I("event: "+h.toString());Tb(k)}}a.wb[d]=null}else c=!1}c&&(a.wb=[])}function sc(a){this.ra=a;this.hd=[]}sc.prototype.add=function(a){this.hd.push(a)};sc.prototype.Zb=function(){return this.ra};function oc(a,b,c){this.A=a;this.ea=b;this.Tb=c}function xc(a){return a.ea}function yc(a){return a.Tb}function zc(a,b){return b.e()?a.ea&&!a.Tb:nc(a,J(b))}function nc(a,b){return a.ea&&!a.Tb||a.A.Fa(b)}oc.prototype.j=function(){return this.A};function Ac(a,b){this.Oa=a;this.ca=b?b:Bc}g=Ac.prototype;g.Ra=function(a,b){return new Ac(this.Oa,this.ca.Ra(a,b,this.Oa).Y(null,null,!1,null,null))};g.remove=function(a){return new Ac(this.Oa,this.ca.remove(a,this.Oa).Y(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ca;!c.e();){b=this.Oa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function Cc(a,b){for(var c,d=a.ca,e=null;!d.e();){c=a.Oa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ca.e()};g.count=function(){return this.ca.count()};g.Hc=function(){return this.ca.Hc()};g.fc=function(){return this.ca.fc()};g.ia=function(a){return this.ca.ia(a)};
	g.Xb=function(a){return new Dc(this.ca,null,this.Oa,!1,a)};g.Yb=function(a,b){return new Dc(this.ca,a,this.Oa,!1,b)};g.$b=function(a,b){return new Dc(this.ca,a,this.Oa,!0,b)};g.$e=function(a){return new Dc(this.ca,null,this.Oa,!0,a)};function Dc(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Sa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Sa.push(a);break}else this.Sa.push(a),a=this.le?a.right:a.left}
	function K(a){if(0===a.Sa.length)return null;var b=a.Sa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Sa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Sa.push(b),b=b.left;return c}function Ec(a){if(0===a.Sa.length)return null;var b;b=a.Sa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function Fc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Bc;this.right=null!=e?e:Bc}g=Fc.prototype;
	g.Y=function(a,b,c,d,e){return new Fc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function Gc(a){return a.left.e()?a:Gc(a.left)}g.Hc=function(){return Gc(this).key};g.fc=function(){return this.right.e()?this.key:this.right.fc()};
	g.Ra=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Ra(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Ra(a,b,c));return Hc(e)};function Ic(a){if(a.left.e())return Bc;a.left.fa()||a.left.left.fa()||(a=Jc(a));a=a.Y(null,null,null,Ic(a.left),null);return Hc(a)}
	g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=Jc(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=Kc(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=Lc(c),c.left.left.fa()&&(c=Kc(c),c=Lc(c)));if(0===b(a,c.key)){if(c.right.e())return Bc;d=Gc(c.right);c=c.Y(d.key,d.value,null,null,Ic(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return Hc(c)};g.fa=function(){return this.color};
	function Hc(a){a.right.fa()&&!a.left.fa()&&(a=Mc(a));a.left.fa()&&a.left.left.fa()&&(a=Kc(a));a.left.fa()&&a.right.fa()&&(a=Lc(a));return a}function Jc(a){a=Lc(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,Kc(a.right)),a=Mc(a),a=Lc(a));return a}function Mc(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function Kc(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
	function Lc(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function Nc(){}g=Nc.prototype;g.Y=function(){return this};g.Ra=function(a,b){return new Fc(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ia=function(){return!1};g.Hc=function(){return null};g.fc=function(){return null};g.fa=function(){return!1};var Bc=new Nc;var Oc=function(){var a=1;return function(){return a++}}(),E=Lb,Pc=Mb;
	function Qc(a){try{var b;xb();for(var c=vb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Oa(d,c,c+8192));b=a}return b}catch(l){I("base64Decode failed: ",
	l)}return null}function Rc(a){var b=Nb(a);a=new zb;a.update(b);var b=[],c=8*a.Pd;56>a.ac?a.update(a.zd,56-a.ac):a.update(a.zd,a.Ya-(a.ac-56));for(var d=a.Ya-1;56<=d;d--)a.Wd[d]=c&255,c/=256;Ab(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return wb(b)}function Sc(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+Sc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var wc=null,Tc=!0;
	function Uc(a,b){Lb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?wc=r(console.log,console):"object"===typeof console.log&&(wc=function(a){console.log(a)})),b&&Yb.set("logging_enabled",!0)):ga(a)?wc=a:(wc=null,Yb.remove("logging_enabled"))}function I(a){!0===Tc&&(Tc=!1,null===wc&&!0===Yb.get("logging_enabled")&&Uc(!0));if(wc){var b=Sc.apply(null,arguments);wc(b)}}
	function Vc(a){return function(){I(a,arguments)}}function Wc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Sc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Xc(a){var b=Sc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function L(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Sc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function Yc(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(q(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Xc(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
	c&&"undefined"!=c||Xc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{kc:new cc(b,d,c,"ws"===e||"wss"===e),path:new M(f)}}function Zc(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function $c(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function ad(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=bd(a),d=bd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function cd(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
	function dd(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=dd(a[b[d]]);return c+"}"}function ed(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function fd(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else t(a,b)}
	function gd(a){E(!Zc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var hd=/^-?\d{1,10}$/;function bd(a){return hd.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Tb(a){try{a()}catch(b){setTimeout(function(){L("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function id(a,b,c){Object.defineProperty(a,b,{get:c})};function jd(a){var b={},c={},d={},e="";try{var f=a.split("."),b=Kb(Qc(f[0])||""),c=Kb(Qc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{Fg:b,Me:c,data:d,xg:e}}function kd(a){a=jd(a);var b=a.Me;return!!a.xg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function ld(a){a=jd(a).Me;return"object"===typeof a&&!0===A(a,"admin")};function md(a,b,c){this.type=nd;this.source=a;this.path=b;this.children=c}md.prototype.Nc=function(a){if(this.path.e())return a=this.children.subtree(new M(a)),a.e()?null:a.value?new ac(this.source,C,a.value):new md(this.source,C,a);E(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new md(this.source,D(this.path),this.children)};md.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function od(a){this.g=a}g=od.prototype;g.F=function(a,b,c,d,e,f){E(a.zc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).$(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?pd(f,new H("child_removed",e,b)):E(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?pd(f,new H("child_added",c,b)):pd(f,new H("child_changed",c,b,e)));return a.J()&&c.e()?a:a.U(b,c).ob(this.g)};
	g.za=function(a,b,c){null!=c&&(a.J()||a.P(N,function(a,e){b.Fa(a)||pd(c,new H("child_removed",e,a))}),b.J()||b.P(N,function(b,e){if(a.Fa(b)){var f=a.R(b);f.$(e)||pd(c,new H("child_changed",e,b,f))}else pd(c,new H("child_added",e,b))}));return b.ob(this.g)};g.ga=function(a,b){return a.e()?F:a.ga(b)};g.Qa=function(){return!1};g.Vb=function(){return this};function qd(a){this.he=new od(a.g);this.g=a.g;var b;a.la?(b=rd(a),b=a.g.Fc(sd(a),b)):b=a.g.Ic();this.Uc=b;a.oa?(b=td(a),a=a.g.Fc(ud(a),b)):a=a.g.Gc();this.wc=a}g=qd.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.wc)};g.F=function(a,b,c,d,e,f){this.matches(new O(b,c))||(c=F);return this.he.F(a,b,c,d,e,f)};
	g.za=function(a,b,c){b.J()&&(b=F);var d=b.ob(this.g),d=d.ga(F),e=this;b.P(N,function(a,b){e.matches(new O(a,b))||(d=d.U(a,F))});return this.he.za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.he};function vd(){this.hb={}}
	function pd(a,b){var c=b.type,d=b.Za;E("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");E(".priority"!==d,"Only non-priority child changes can be tracked.");var e=A(a.hb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.hb[d]=new H("child_changed",b.Ma,d,e.Ma);else if("child_removed"==c&&"child_added"==f)delete a.hb[d];else if("child_removed"==c&&"child_changed"==f)a.hb[d]=new H("child_removed",e.qe,d);else if("child_changed"==c&&
	"child_added"==f)a.hb[d]=new H("child_added",b.Ma,d);else if("child_changed"==c&&"child_changed"==f)a.hb[d]=new H("child_changed",b.Ma,d,e.qe);else throw Pc("Illegal combination of changes: "+b+" occurred after "+e);}else a.hb[d]=b};function wd(a,b){this.Sd=a;this.Mf=b}function xd(a){this.V=a}
	xd.prototype.gb=function(a,b,c,d){var e=new vd,f;if(b.type===bc)b.source.ee?c=yd(this,a,b.path,b.Ja,c,d,e):(E(b.source.We,"Unknown source."),f=b.source.Ee||yc(a.w())&&!b.path.e(),c=zd(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===nd)b.source.ee?c=Ad(this,a,b.path,b.children,c,d,e):(E(b.source.We,"Unknown source."),f=b.source.Ee||yc(a.w()),c=Bd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Dd)if(b.Id)if(b=b.path,null!=c.mc(b))c=a;else{f=new mc(c,a,d);d=a.O.j();if(b.e()||".priority"===J(b))xc(a.w())?
	b=c.Ba(pc(a)):(b=a.w().j(),E(b instanceof P,"serverChildren would be complete if leaf node"),b=c.sc(b)),b=this.V.za(d,b,e);else{var h=J(b),k=c.rc(h,a.w());null==k&&nc(a.w(),h)&&(k=d.R(h));b=null!=k?this.V.F(d,h,k,D(b),f,e):a.O.j().Fa(h)?this.V.F(d,h,F,D(b),f,e):d;b.e()&&xc(a.w())&&(d=c.Ba(pc(a)),d.J()&&(b=this.V.za(b,d,e)))}d=xc(a.w())||null!=c.mc(C);c=Ed(a,b,d,this.V.Qa())}else c=Fd(this,a,b.path,b.Pb,c,d,e);else if(b.type===$b)d=b.path,b=a.w(),f=b.j(),h=b.ea||d.e(),c=Gd(this,new Hd(a.O,new oc(f,
	h,b.Tb)),d,c,lc,e);else throw Pc("Unknown operation type: "+b.type);e=pa(e.hb);d=c;b=d.O;b.ea&&(f=b.j().J()||b.j().e(),h=Id(a),(0<e.length||!a.O.ea||f&&!b.j().$(h)||!b.j().C().$(h.C()))&&e.push(gc(Id(d))));return new wd(c,e)};
	function Gd(a,b,c,d,e,f){var h=b.O;if(null!=d.mc(c))return b;var k;if(c.e())E(xc(b.w()),"If change path is empty, we must have complete server data"),yc(b.w())?(e=pc(b),d=d.sc(e instanceof P?e:F)):d=d.Ba(pc(b)),f=a.V.za(b.O.j(),d,f);else{var m=J(c);if(".priority"==m)E(1==Jd(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.$c(c,f,k),f=null!=d?a.V.ga(f,d):h.j();else{var l=D(c);nc(h,m)?(k=b.w().j(),d=d.$c(c,h.j(),k),d=null!=d?h.j().R(m).F(l,d):h.j().R(m)):d=d.rc(m,
	b.w());f=null!=d?a.V.F(h.j(),m,d,l,e,f):h.j()}}return Ed(b,f,h.ea||c.e(),a.V.Qa())}function zd(a,b,c,d,e,f,h,k){var m=b.w();h=h?a.V:a.V.Vb();if(c.e())d=h.za(m.j(),d,null);else if(h.Qa()&&!m.Tb)d=m.j().F(c,d),d=h.za(m.j(),d,null);else{var l=J(c);if(!zc(m,c)&&1<Jd(c))return b;var u=D(c);d=m.j().R(l).F(u,d);d=".priority"==l?h.ga(m.j(),d):h.F(m.j(),l,d,u,lc,null)}m=m.ea||c.e();b=new Hd(b.O,new oc(d,m,h.Qa()));return Gd(a,b,c,e,new mc(e,b,f),k)}
	function yd(a,b,c,d,e,f,h){var k=b.O;e=new mc(e,b,f);if(c.e())h=a.V.za(b.O.j(),d,h),a=Ed(b,h,!0,a.V.Qa());else if(f=J(c),".priority"===f)h=a.V.ga(b.O.j(),d),a=Ed(b,h,k.ea,k.Tb);else{c=D(c);var m=k.j().R(f);if(!c.e()){var l=e.Xe(f);d=null!=l?".priority"===Kd(c)&&l.Q(c.parent()).e()?l:l.F(c,d):F}m.$(d)?a=b:(h=a.V.F(k.j(),f,d,c,e,h),a=Ed(b,h,k.ea,a.V.Qa()))}return a}
	function Ad(a,b,c,d,e,f,h){var k=b;Ld(d,function(d,l){var u=c.m(d);nc(b.O,J(u))&&(k=yd(a,k,u,l,e,f,h))});Ld(d,function(d,l){var u=c.m(d);nc(b.O,J(u))||(k=yd(a,k,u,l,e,f,h))});return k}function Md(a,b){Ld(b,function(b,d){a=a.F(b,d)});return a}
	function Bd(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!xc(b.w()))return b;var m=b;c=c.e()?d:Nd(Q,c,d);var l=b.w().j();c.children.ia(function(c,d){if(l.Fa(c)){var G=b.w().j().R(c),G=Md(G,d);m=zd(a,m,new M(c),G,e,f,h,k)}});c.children.ia(function(c,d){var G=!nc(b.w(),c)&&null==d.value;l.Fa(c)||G||(G=b.w().j().R(c),G=Md(G,d),m=zd(a,m,new M(c),G,e,f,h,k))});return m}
	function Fd(a,b,c,d,e,f,h){if(null!=e.mc(c))return b;var k=yc(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.ea||zc(m,c))return zd(a,b,c,m.j().Q(c),e,f,k,h);if(c.e()){var l=Q;m.j().P(Od,function(a,b){l=l.set(new M(a),b)});return Bd(a,b,c,l,e,f,k,h)}return b}l=Q;Ld(d,function(a){var b=c.m(a);zc(m,b)&&(l=l.set(a,m.j().Q(b)))});return Bd(a,b,c,l,e,f,k,h)};var Pd=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);E(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);E(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function M(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function R(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return R(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function Qd(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=ad(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Z>=a.o.length?null:a.o[a.Z]}function Jd(a){return a.o.length-a.Z}function D(a){var b=a.Z;b<a.o.length&&b++;return new M(a.o,b)}function Kd(a){return a.Z<a.o.length?a.o[a.o.length-1]:null}g=M.prototype;
	g.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Z+(a||0))};g.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new M(a,0)};
	g.m=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof M)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new M(b,0)};g.e=function(){return this.Z>=this.o.length};g.$=function(a){if(Jd(this)!==Jd(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
	g.contains=function(a){var b=this.Z,c=a.Z;if(Jd(this)>Jd(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new M("");function Rd(a,b){this.Ta=a.slice();this.Ka=Math.max(1,this.Ta.length);this.Te=b;for(var c=0;c<this.Ta.length;c++)this.Ka+=Ob(this.Ta[c]);Sd(this)}Rd.prototype.push=function(a){0<this.Ta.length&&(this.Ka+=1);this.Ta.push(a);this.Ka+=Ob(a);Sd(this)};Rd.prototype.pop=function(){var a=this.Ta.pop();this.Ka-=Ob(a);0<this.Ta.length&&--this.Ka};
	function Sd(a){if(768<a.Ka)throw Error(a.Te+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ta.length)throw Error(a.Te+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Td(a));}function Td(a){return 0==a.Ta.length?"":"in property '"+a.Ta.join(".")+"'"};var Ud=/[\[\].#$\/\u0000-\u001F\u007F]/,Vd=/[\[\].#$\u0000-\u001F\u007F]/;function Wd(a){return q(a)&&0!==a.length&&!Ud.test(a)}function Xd(a){return null===a||q(a)||fa(a)&&!Zc(a)||ha(a)&&Hb(a,".sv")}function Yd(a,b,c,d){d&&!p(b)||Zd(Bb(a,1,d),b,c)}
	function Zd(a,b,c){c instanceof M&&(c=new Rd(c,a));if(!p(b))throw Error(a+"contains undefined "+Td(c));if(ga(b))throw Error(a+"contains a function "+Td(c)+" with contents: "+b.toString());if(Zc(b))throw Error(a+"contains "+b.toString()+" "+Td(c));if(q(b)&&b.length>10485760/3&&10485760<Ob(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Td(c)+" ('"+b.substring(0,50)+"...')");if(ha(b)){var d=!1,e=!1;Ib(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!Wd(b)))throw Error(a+" contains an invalid key ("+b+") "+Td(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Zd(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Td(c)+" in addition to actual children.");}}
	function $d(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Wd(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Qd);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function ae(a,b,c){var d=Bb(a,1,!1);if(!ha(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Ib(b,function(a,b){var k=new M(a);Zd(d,b,c.m(k));if(".priority"===Kd(k)&&!Xd(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});$d(d,e)}
	function be(a,b,c){if(Zc(c))throw Error(Bb(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Xd(c))throw Error(Bb(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function ce(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(Bb(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function de(a,b){if(p(b)&&!Wd(b))throw Error(Bb(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function ee(a,b){if(!q(b)||0===b.length||Vd.test(b))throw Error(Bb(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function fe(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
	function ge(a,b){var c=b.path.toString(),d;!(d=!q(b.kc.host)||0===b.kc.host.length||!Wd(b.kc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(q(c)&&0!==c.length&&!Vd.test(c)));if(d)throw Error(Bb(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function he(){this.children={};this.ad=0;this.value=null}function ie(a,b,c){this.ud=a?a:"";this.Ha=b?b:null;this.A=c?c:new he}function je(a,b){for(var c=b instanceof M?b:new M(b),d=a,e;null!==(e=J(c));)d=new ie(e,d,A(d.A.children,e)||new he),c=D(c);return d}g=ie.prototype;g.Ea=function(){return this.A.value};function ke(a,b){E("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;le(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.ad=0;le(this)};
	g.kd=function(){return 0<this.A.ad};g.e=function(){return null===this.Ea()&&!this.kd()};g.P=function(a){var b=this;t(this.A.children,function(c,d){a(new ie(d,b,c))})};function me(a,b,c,d){c&&!d&&b(a);a.P(function(a){me(a,b,!0,d)});c&&d&&b(a)}function ne(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new M(null===this.Ha?this.ud:this.Ha.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Ha};
	function le(a){if(null!==a.Ha){var b=a.Ha,c=a.ud,d=a.e(),e=Hb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.ad--,le(b)):d||e||(b.A.children[c]=a.A,b.A.ad++,le(b))}};function oe(a){E(da(a)&&0<a.length,"Requires a non-empty array");this.Kf=a;this.Ec={}}oe.prototype.Ge=function(a,b){var c;c=this.Ec[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ke.apply(c[d].Pa,Array.prototype.slice.call(arguments,1))};oe.prototype.hc=function(a,b,c){pe(this,a);this.Ec[a]=this.Ec[a]||[];this.Ec[a].push({Ke:b,Pa:c});(a=this.Ye(a))&&b.apply(c,a)};
	oe.prototype.Jc=function(a,b,c){pe(this,a);a=this.Ec[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ke===b&&(!c||c===a[d].Pa)){a.splice(d,1);break}};function pe(a,b){E(La(a.Kf,function(a){return a===b}),"Unknown event: "+b)};function qe(a,b){this.value=a;this.children=b||re}var re=new Ac(function(a,b){return a===b?0:a<b?-1:1});function se(a){var b=Q;t(a,function(a,d){b=b.set(new M(d),a)});return b}g=qe.prototype;g.e=function(){return null===this.value&&this.children.e()};function te(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=te(a,D(b),c),null!=b?{path:(new M(d)).m(b.path),value:b.value}:null):null}
	function ue(a,b){return te(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};g.set=function(a,b){if(a.e())return new qe(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Ra(c,d);return new qe(this.value,c)};
	g.remove=function(a){if(a.e())return this.children.e()?Q:new qe(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Ra(b,a),null===this.value&&b.e()?Q:new qe(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
	function Nd(a,b,c){if(b.e())return c;var d=J(b);b=Nd(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Ra(d,b);return new qe(a.value,d)}function ve(a,b){return we(a,C,b)}function we(a,b,c){var d={};a.children.ia(function(a,f){d[a]=we(f,b.m(a),c)});return c(b,a.value,d)}function xe(a,b,c){return ye(a,b,C,c)}function ye(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?ye(a,D(b),c.m(e),d):null}
	function ze(a,b,c){Ae(a,b,C,c)}function Ae(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?Ae(a,D(b),c.m(e),d):Q}function Ld(a,b){Be(a,C,b)}function Be(a,b,c){a.children.ia(function(a,e){Be(e,b.m(a),c)});a.value&&c(b,a.value)}function Ce(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Q=new qe(null);qe.prototype.toString=function(){var a={};Ld(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function De(a,b,c){this.type=Dd;this.source=Ee;this.path=a;this.Pb=b;this.Id=c}De.prototype.Nc=function(a){if(this.path.e()){if(null!=this.Pb.value)return E(this.Pb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Pb.subtree(new M(a));return new De(C,a,this.Id)}E(J(this.path)===a,"operationForChild called for unrelated child.");return new De(D(this.path),this.Pb,this.Id)};
	De.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Pb+")"};var bc=0,nd=1,Dd=2,$b=3;function Fe(a,b,c,d){this.ee=a;this.We=b;this.Ib=c;this.Ee=d;E(!d||b,"Tagged queries must be from server.")}var Ee=new Fe(!0,!1,null,!1),Ge=new Fe(!1,!0,null,!1);Fe.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Ib+")":"server"};function He(){oe.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Nb=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Nb&&(c.Nb=b,c.Ge("visible",b))},!1)}}ka(He,oe);He.prototype.Ye=function(a){E("visible"===a,"Unknown event type: "+a);return[this.Nb]};ba(He);function Ie(){this.set={}}g=Ie.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return Hb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return ua(this.set)};g.count=function(){return na(this.set)};function Je(a,b){t(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];t(this.set,function(b,c){a.push(c)});return a};function Ke(a,b){return a&&"object"===typeof a?(E(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Le(a,b){var c=new Me;Ne(a,new M(""),function(a,e){Oe(c,a,Pe(e,b))});return c}function Pe(a,b){var c=a.C().H(),c=Ke(c,b),d;if(a.J()){var e=Ke(a.Ea(),b);return e!==a.Ea()||c!==a.C().H()?new Qe(e,S(c)):a}d=a;c!==a.C().H()&&(d=d.ga(new Qe(c)));a.P(N,function(a,c){var e=Pe(c,b);e!==c&&(d=d.U(a,e))});return d};function Re(){oe.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!Pb()){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.Ge("online",!1))},!1)}}ka(Re,oe);Re.prototype.Ye=function(a){E("online"===a,"Unknown event type: "+a);return[this.ic]};ba(Re);function Se(){}var Te={};function Ue(a){return r(a.compare,a)}Se.prototype.nd=function(a,b){return 0!==this.compare(new O("[MIN_NAME]",a),new O("[MIN_NAME]",b))};Se.prototype.Ic=function(){return Ve};function We(a){E(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.cc=a}ka(We,Se);g=We.prototype;g.yc=function(a){return!a.Q(this.cc).e()};g.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.tc(d);return 0===c?ad(a.name,b.name):c};
	g.Fc=function(a,b){var c=S(a),c=F.F(this.cc,c);return new O(b,c)};g.Gc=function(){var a=F.F(this.cc,Xe);return new O("[MAX_NAME]",a)};g.toString=function(){return this.cc.slice().join("/")};function Ye(){}ka(Ye,Se);g=Ye.prototype;g.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.tc(d);return 0===c?ad(a.name,b.name):c};g.yc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().$(b.C())};g.Ic=function(){return Ve};g.Gc=function(){return new O("[MAX_NAME]",new Qe("[PRIORITY-POST]",Xe))};
	g.Fc=function(a,b){var c=S(a);return new O(b,new Qe("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new Ye;function Ze(){}ka(Ze,Se);g=Ze.prototype;g.compare=function(a,b){return ad(a.name,b.name)};g.yc=function(){throw Pc("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Ic=function(){return Ve};g.Gc=function(){return new O("[MAX_NAME]",F)};g.Fc=function(a){E(q(a),"KeyIndex indexValue must always be a string.");return new O(a,F)};g.toString=function(){return".key"};
	var Od=new Ze;function $e(){}ka($e,Se);g=$e.prototype;g.compare=function(a,b){var c=a.S.tc(b.S);return 0===c?ad(a.name,b.name):c};g.yc=function(){return!0};g.nd=function(a,b){return!a.$(b)};g.Ic=function(){return Ve};g.Gc=function(){return af};g.Fc=function(a,b){var c=S(a);return new O(b,c)};g.toString=function(){return".value"};var bf=new $e;function cf(a,b){return ad(a.name,b.name)}function df(a,b){return ad(a,b)};function ef(a,b){this.od=a;this.dc=b}ef.prototype.get=function(a){var b=A(this.od,a);if(!b)throw Error("No index defined for "+a);return b===Te?null:b};function ff(a,b,c){var d=la(a.od,function(d,f){var h=A(a.dc,f);E(h,"Missing index implementation for "+f);if(d===Te){if(h.yc(b.S)){for(var k=[],m=c.Xb(gf),l=K(m);l;)l.name!=b.name&&k.push(l),l=K(m);k.push(b);return hf(k,Ue(h))}return Te}h=c.get(b.name);k=d;h&&(k=k.remove(new O(b.name,h)));return k.Ra(b,b.S)});return new ef(d,a.dc)}
	function jf(a,b,c){var d=la(a.od,function(a){if(a===Te)return a;var d=c.get(b.name);return d?a.remove(new O(b.name,d)):a});return new ef(d,a.dc)}var kf=new ef({".priority":Te},{".priority":N});function O(a,b){this.name=a;this.S=b}function gf(a,b){return new O(a,b)};function lf(a){this.ta=new qd(a);this.g=a.g;E(a.ya,"Only valid if limit has been set");this.pa=a.pa;this.Jb=!mf(a)}g=lf.prototype;g.F=function(a,b,c,d,e,f){this.ta.matches(new O(b,c))||(c=F);return a.R(b).$(c)?a:a.Fb()<this.pa?this.ta.Vb().F(a,b,c,d,e,f):nf(this,a,b,c,e,f)};
	g.za=function(a,b,c){var d;if(b.J()||b.e())d=F.ob(this.g);else if(2*this.pa<b.Fb()&&b.zc(this.g)){d=F.ob(this.g);b=this.Jb?b.$b(this.ta.wc,this.g):b.Yb(this.ta.Uc,this.g);for(var e=0;0<b.Sa.length&&e<this.pa;){var f=K(b),h;if(h=this.Jb?0>=this.g.compare(this.ta.Uc,f):0>=this.g.compare(f,this.ta.wc))d=d.U(f.name,f.S),e++;else break}}else{d=b.ob(this.g);d=d.ga(F);var k,m,l;if(this.Jb){b=d.$e(this.g);k=this.ta.wc;m=this.ta.Uc;var u=Ue(this.g);l=function(a,b){return u(b,a)}}else b=d.Xb(this.g),k=this.ta.Uc,
	m=this.ta.wc,l=Ue(this.g);for(var e=0,z=!1;0<b.Sa.length;)f=K(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.pa&&0>=l(f,m))?e++:d=d.U(f.name,F)}return this.ta.Vb().za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.ta.Vb()};
	function nf(a,b,c,d,e,f){var h;if(a.Jb){var k=Ue(a.g);h=function(a,b){return k(b,a)}}else h=Ue(a.g);E(b.Fb()==a.pa,"");var m=new O(c,d),l=a.Jb?of(b,a.g):pf(b,a.g),u=a.ta.matches(m);if(b.Fa(c)){for(var z=b.R(c),l=e.fe(a.g,l,a.Jb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.fe(a.g,l,a.Jb);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&pd(f,new H("child_changed",d,c,z)),b.U(c,d);null!=f&&pd(f,new H("child_removed",z,c));b=b.U(c,F);return null!=l&&a.ta.matches(l)?(null!=f&&pd(f,new H("child_added",
	l.S,l.name)),b.U(l.name,l.S)):b}return d.e()?b:u&&0<=h(l,m)?(null!=f&&(pd(f,new H("child_removed",l.S,l.name)),pd(f,new H("child_added",d,c))),b.U(c,d).U(l.name,F)):b};function qf(a){this.W=a;this.g=a.n.g}function rf(a,b,c,d){var e=[],f=[];Ga(b,function(b){"child_changed"===b.type&&a.g.nd(b.qe,b.Ma)&&f.push(new H("child_moved",b.Ma,b.Za))});sf(a,e,"child_removed",b,d,c);sf(a,e,"child_added",b,d,c);sf(a,e,"child_moved",f,d,c);sf(a,e,"child_changed",b,d,c);sf(a,e,hc,b,d,c);return e}function sf(a,b,c,d,e,f){d=Ha(d,function(a){return a.type===c});Pa(d,r(a.Of,a));Ga(d,function(c){var d=tf(a,c,f);Ga(e,function(e){e.tf(c.type)&&b.push(e.createEvent(d,a.W))})})}
	function tf(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ze(b.Za,b.Ma,a.g));return b}qf.prototype.Of=function(a,b){if(null==a.Za||null==b.Za)throw Pc("Should only compare child_ events.");return this.g.compare(new O(a.Za,a.Ma),new O(b.Za,b.Ma))};function uf(){this.Sb=this.oa=this.Lb=this.la=this.ya=!1;this.pa=0;this.oc="";this.ec=null;this.Ab="";this.bc=null;this.yb="";this.g=N}var vf=new uf;function mf(a){return""===a.oc?a.la:"l"===a.oc}function sd(a){E(a.la,"Only valid if start has been set");return a.ec}function rd(a){E(a.la,"Only valid if start has been set");return a.Lb?a.Ab:"[MIN_NAME]"}function ud(a){E(a.oa,"Only valid if end has been set");return a.bc}
	function td(a){E(a.oa,"Only valid if end has been set");return a.Sb?a.yb:"[MAX_NAME]"}function wf(a){var b=new uf;b.ya=a.ya;b.pa=a.pa;b.la=a.la;b.ec=a.ec;b.Lb=a.Lb;b.Ab=a.Ab;b.oa=a.oa;b.bc=a.bc;b.Sb=a.Sb;b.yb=a.yb;b.g=a.g;return b}g=uf.prototype;g.ne=function(a){var b=wf(this);b.ya=!0;b.pa=a;b.oc="l";return b};g.oe=function(a){var b=wf(this);b.ya=!0;b.pa=a;b.oc="r";return b};g.Nd=function(a,b){var c=wf(this);c.la=!0;p(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.Ab=b):(c.Lb=!1,c.Ab="");return c};
	g.fd=function(a,b){var c=wf(this);c.oa=!0;p(a)||(a=null);c.bc=a;p(b)?(c.Sb=!0,c.yb=b):(c.Hg=!1,c.yb="");return c};function xf(a,b){var c=wf(a);c.g=b;return c}function yf(a){var b={};a.la&&(b.sp=a.ec,a.Lb&&(b.sn=a.Ab));a.oa&&(b.ep=a.bc,a.Sb&&(b.en=a.yb));if(a.ya){b.l=a.pa;var c=a.oc;""===c&&(c=mf(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function T(a){return!(a.la||a.oa||a.ya)}function zf(a){return T(a)&&a.g==N}
	function Af(a){var b={};if(zf(a))return b;var c;a.g===N?c="$priority":a.g===bf?c="$value":a.g===Od?c="$key":(E(a.g instanceof We,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.la&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.Ab)));a.oa&&(b.endAt=B(a.bc),a.Sb&&(b.endAt+=","+B(a.yb)));a.ya&&(mf(a)?b.limitToFirst=a.pa:b.limitToLast=a.pa);return b}g.toString=function(){return B(yf(this))};function Qe(a,b){this.B=a;E(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.ba=b||F;Bf(this.ba);this.Eb=null}var Cf=["object","boolean","number","string"];g=Qe.prototype;g.J=function(){return!0};g.C=function(){return this.ba};g.ga=function(a){return new Qe(this.B,a)};g.R=function(a){return".priority"===a?this.ba:F};g.Q=function(a){return a.e()?this:".priority"===J(a)?this.ba:F};g.Fa=function(){return!1};g.Ze=function(){return null};
	g.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:F.U(a,b).ga(this.ba)};g.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;E(".priority"!==c||1===Jd(a),".priority must be the last token in a path");return this.U(c,F.F(D(a),b))};g.e=function(){return!1};g.Fb=function(){return 0};g.P=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().H()}:this.Ea()};
	g.hash=function(){if(null===this.Eb){var a="";this.ba.e()||(a+="priority:"+Df(this.ba.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+gd(this.B):a+this.B;this.Eb=Rc(a)}return this.Eb};g.Ea=function(){return this.B};g.tc=function(a){if(a===F)return 1;if(a instanceof P)return-1;E(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Fa(Cf,b),e=Fa(Cf,c);E(0<=d,"Unknown leaf type: "+b);E(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	g.ob=function(){return this};g.zc=function(){return!0};g.$=function(a){return a===this?!0:a.J()?this.B===a.B&&this.ba.$(a.ba):!1};g.toString=function(){return B(this.H(!0))};function P(a,b,c){this.k=a;(this.ba=b)&&Bf(this.ba);a.e()&&E(!this.ba||this.ba.e(),"An empty node cannot have a priority");this.zb=c;this.Eb=null}g=P.prototype;g.J=function(){return!1};g.C=function(){return this.ba||F};g.ga=function(a){return this.k.e()?this:new P(this.k,a,this.zb)};g.R=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?F:a};g.Q=function(a){var b=J(a);return null===b?this:this.R(b).Q(D(a))};g.Fa=function(a){return null!==this.k.get(a)};
	g.U=function(a,b){E(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new O(a,b),d,e;b.e()?(d=this.k.remove(a),c=jf(this.zb,c,this.k)):(d=this.k.Ra(a,b),c=ff(this.zb,c,this.k));e=d.e()?F:this.ba;return new P(d,e,c)};g.F=function(a,b){var c=J(a);if(null===c)return b;E(".priority"!==J(a)||1===Jd(a),".priority must be the last token in a path");var d=this.R(c).F(D(a),b);return this.U(c,d)};g.e=function(){return this.k.e()};g.Fb=function(){return this.k.count()};
	var Ef=/^(0|[1-9]\d*)$/;g=P.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,h){b[f]=h.H(a);c++;e&&Ef.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Eb){var a="";this.C().e()||(a+="priority:"+Df(this.C().H())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Eb=""===a?"":Rc(a)}return this.Eb};
	g.Ze=function(a,b,c){return(c=Ff(this,c))?(a=Cc(c,new O(a,b)))?a.name:null:Cc(this.k,a)};function of(a,b){var c;c=(c=Ff(a,b))?(c=c.Hc())&&c.name:a.k.Hc();return c?new O(c,a.k.get(c)):null}function pf(a,b){var c;c=(c=Ff(a,b))?(c=c.fc())&&c.name:a.k.fc();return c?new O(c,a.k.get(c)):null}g.P=function(a,b){var c=Ff(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.k.ia(b)};g.Xb=function(a){return this.Yb(a.Ic(),a)};
	g.Yb=function(a,b){var c=Ff(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.k.Yb(a.name,gf),d=Ec(c);null!=d&&0>b.compare(d,a);)K(c),d=Ec(c);return c};g.$e=function(a){return this.$b(a.Gc(),a)};g.$b=function(a,b){var c=Ff(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.k.$b(a.name,gf),d=Ec(c);null!=d&&0<b.compare(d,a);)K(c),d=Ec(c);return c};g.tc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===Xe?-1:0};
	g.ob=function(a){if(a===Od||ra(this.zb.dc,a.toString()))return this;var b=this.zb,c=this.k;E(a!==Od,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(gf),f=K(c);f;)e=e||a.yc(f.S),d.push(f),f=K(c);d=e?hf(d,Ue(a)):Te;e=a.toString();c=va(b.dc);c[e]=a;a=va(b.od);a[e]=d;return new P(this.k,this.ba,new ef(a,c))};g.zc=function(a){return a===Od||ra(this.zb.dc,a.toString())};
	g.$=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().$(a.C())&&this.k.count()===a.k.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=K(b),d=K(a);c&&d;){if(c.name!==d.name||!c.S.$(d.S))return!1;c=K(b);d=K(a)}return null===c&&null===d}return!1};function Ff(a,b){return b===Od?null:a.zb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function S(a,b){if(null===a)return F;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);E(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Qe(a,S(c));if(a instanceof Array){var d=F,e=a;t(e,function(a,b){if(Hb(e,b)&&"."!==b.substring(0,1)){var c=S(a);if(c.J()||!c.e())d=
	d.U(b,c)}});return d.ga(S(c))}var f=[],h=!1,k=a;Ib(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=S(k[a]);b.e()||(h=h||!b.C().e(),f.push(new O(a,b)))}});if(0==f.length)return F;var m=hf(f,cf,function(a){return a.name},df);if(h){var l=hf(f,Ue(N));return new P(m,S(c),new ef({".priority":l},{".priority":N}))}return new P(m,S(c),kf)}var Gf=Math.log(2);
	function Hf(a){this.count=parseInt(Math.log(a+1)/Gf,10);this.Re=this.count-1;this.Lf=a+1&parseInt(Array(this.count+1).join("1"),2)}function If(a){var b=!(a.Lf&1<<a.Re);a.Re--;return b}
	function hf(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new Fc(u,l.S,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new Fc(u,l.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],G=c?c(k):k,z=new Fc(G,k.S,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var G=If(b),Cd=Math.pow(2,b.count-(z+1));G?d(Cd,!1):(d(Cd,!1),d(Cd,!0))}return l}(new Hf(a.length));
	return null!==f?new Ac(d||b,f):new Ac(d||b)}function Df(a){return"number"===typeof a?"number:"+gd(a):"string:"+a}function Bf(a){if(a.J()){var b=a.H();E("string"===typeof b||"number"===typeof b||"object"===typeof b&&Hb(b,".sv"),"Priority must be a string or number.")}else E(a===Xe||a.e(),"priority of unexpected type.");E(a===Xe||a.C().e(),"Priority nodes can't have a priority of their own.")}var F=new P(new Ac(df),null,kf);function Jf(){P.call(this,new Ac(df),F,kf)}ka(Jf,P);g=Jf.prototype;
	g.tc=function(a){return a===this?0:1};g.$=function(a){return a===this};g.C=function(){return this};g.R=function(){return F};g.e=function(){return!1};var Xe=new Jf,Ve=new O("[MIN_NAME]",F),af=new O("[MAX_NAME]",Xe);function Hd(a,b){this.O=a;this.Ld=b}function Ed(a,b,c,d){return new Hd(new oc(b,c,d),a.Ld)}function Id(a){return a.O.ea?a.O.j():null}Hd.prototype.w=function(){return this.Ld};function pc(a){return a.Ld.ea?a.Ld.j():null};function Kf(a,b){this.W=a;var c=a.n,d=new od(c.g),c=T(c)?new od(c.g):c.ya?new lf(c):new qd(c);this.of=new xd(c);var e=b.w(),f=b.O,h=d.za(F,e.j(),null),k=c.za(F,f.j(),null);this.Na=new Hd(new oc(k,f.ea,c.Qa()),new oc(h,e.ea,d.Qa()));this.ab=[];this.Sf=new qf(a)}function Lf(a){return a.W}g=Kf.prototype;g.w=function(){return this.Na.w().j()};g.jb=function(a){var b=pc(this.Na);return b&&(T(this.W.n)||!a.e()&&!b.R(J(a)).e())?b.Q(a):null};g.e=function(){return 0===this.ab.length};g.Ob=function(a){this.ab.push(a)};
	g.mb=function(a,b){var c=[];if(b){E(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Ga(this.ab,function(a){(a=a.Pe(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.ab.length;++f){var h=this.ab[f];if(!h.matches(a))e.push(h);else if(a.af()){e=e.concat(this.ab.slice(f+1));break}}this.ab=e}else this.ab=[];return c};
	g.gb=function(a,b,c){a.type===nd&&null!==a.source.Ib&&(E(pc(this.Na),"We should always have a full cache before handling merges"),E(Id(this.Na),"Missing event cache, even though we have a server cache"));var d=this.Na;a=this.of.gb(d,a,b,c);b=this.of;c=a.Sd;E(c.O.j().zc(b.V.g),"Event snap not indexed");E(c.w().j().zc(b.V.g),"Server snap not indexed");E(xc(a.Sd.w())||!xc(d.w()),"Once a server snap is complete, it should never go back");this.Na=a.Sd;return Mf(this,a.Mf,a.Sd.O.j(),null)};
	function Nf(a,b){var c=a.Na.O,d=[];c.j().J()||c.j().P(N,function(a,b){d.push(new H("child_added",b,a))});c.ea&&d.push(gc(c.j()));return Mf(a,d,c.j(),b)}function Mf(a,b,c,d){return rf(a.Sf,b,c,d?[d]:a.ab)};function Of(a,b,c){this.f=Vc("p:rest:");this.M=a;this.Hb=b;this.Vd=c;this.aa={}}function Pf(a,b){if(p(b))return"tag$"+b;E(zf(a.n),"should have a tag if it's not a default query.");return a.path.toString()}g=Of.prototype;
	g.df=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ka());var f=Pf(a,c),h={};this.aa[f]=h;a=Af(a.n);var k=this;Qf(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Hb(e,u,!1,c);A(k.aa,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.Ef=function(a,b){var c=Pf(a,b);delete this.aa[c]};g.qf=function(){};g.re=function(){};g.gf=function(){};g.xd=function(){};g.put=function(){};g.ef=function(){};g.ye=function(){};
	function Qf(a,b,c,d){c=c||{};c.format="export";a.Vd.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.M.Sc?"https://":"http://")+a.M.host+b+"?"+Jb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=Kb(h.responseText)}catch(c){L("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
	b)}else 401!==h.status&&404!==h.status&&L("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Rf(a){this.He=a}Rf.prototype.getToken=function(a){return this.He.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Sf(a,b){a.He.INTERNAL.addAuthTokenListener(b)};function Tf(a){this.Nf=a;this.rd=null}Tf.prototype.get=function(){var a=this.Nf.get(),b=va(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};function Uf(){this.uc={}}function Vf(a,b,c){p(c)||(c=1);Hb(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c}Uf.prototype.get=function(){return va(this.uc)};function Wf(a,b){this.zf={};this.Vc=new Tf(a);this.wa=b;var c=1E4+2E4*Math.random();setTimeout(r(this.rf,this),Math.floor(c))}Wf.prototype.rf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&Hb(this.zf,d)&&(b[d]=a[d],c=!0);c&&this.wa.ye(b);setTimeout(r(this.rf,this),Math.floor(6E5*Math.random()))};var Xf={},Yf={};function Zf(a){a=a.toString();Xf[a]||(Xf[a]=new Uf);return Xf[a]}function $f(a,b){var c=a.toString();Yf[c]||(Yf[c]=b());return Yf[c]};var ag=null;"undefined"!==typeof MozWebSocket?ag=MozWebSocket:"undefined"!==typeof WebSocket&&(ag=WebSocket);function bg(a,b,c,d){this.Zd=a;this.f=Vc(this.Zd);this.frames=this.Ac=null;this.qb=this.rb=this.Fe=0;this.Xa=Zf(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ne=ec(b,"websocket",a)}var cg;
	bg.prototype.open=function(a,b){this.kb=b;this.hg=a;this.f("Websocket connecting to "+this.Ne);this.xc=!1;Xb.set("previous_websocket_failure",!0);try{this.La=new ag(this.Ne)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.fb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.xc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.fb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.qb+=
	a.length,Vf(e.Xa,"bytes_received",a.length),dg(e),null!==e.frames)eg(e,a);else{a:{E(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&eg(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.fb()}};bg.prototype.start=function(){};
	bg.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==ag&&!cg};bg.responsesRequiredToBeHealthy=2;bg.healthyTimeout=3E4;g=bg.prototype;g.sd=function(){Xb.remove("previous_websocket_failure")};function eg(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=Kb(c);a.hg(c)}}
	g.send=function(a){dg(this);a=B(a);this.rb+=a.length;Vf(this.Xa,"bytes_sent",a.length);a=ed(a,16384);1<a.length&&fg(this,String(a.length));for(var b=0;b<a.length;b++)fg(this,a[b])};g.Tc=function(){this.Bb=!0;this.Ac&&(clearInterval(this.Ac),this.Ac=null);this.La&&(this.La.close(),this.La=null)};g.fb=function(){this.Bb||(this.f("WebSocket is closing itself"),this.Tc(),this.kb&&(this.kb(this.xc),this.kb=null))};g.close=function(){this.Bb||(this.f("WebSocket is being closed"),this.Tc())};
	function dg(a){clearInterval(a.Ac);a.Ac=setInterval(function(){a.La&&fg(a,"0");dg(a)},Math.floor(45E3))}function fg(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(r(a.fb,a),0)}};function gg(a,b,c,d){this.Zd=a;this.f=Vc(a);this.kc=b;this.qb=this.rb=0;this.Xa=Zf(b);this.Bf=c;this.xc=!1;this.Db=d;this.Yc=function(a){return ec(b,"long_polling",a)}}var hg,ig;
	gg.prototype.open=function(a,b){this.Qe=0;this.ja=b;this.ff=new Qb(a);this.Bb=!1;var c=this;this.tb=setTimeout(function(){c.f("Timed out trying to connect.");c.fb();c.tb=null},Math.floor(3E4));$c(function(){if(!c.Bb){c.Wa=new jg(function(a,b,d,k,m){kg(c,arguments);if(c.Wa)if(c.tb&&(clearTimeout(c.tb),c.tb=null),c.xc=!0,"start"==a)c.id=b,c.mf=d;else if("close"===a)b?(c.Wa.Kd=!1,Rb(c.ff,b,function(){c.fb()})):c.fb();else throw Error("Unrecognized command received: "+a);},function(a,b){kg(c,arguments);
	Sb(c.ff,a,b)},function(){c.fb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.Qd&&(a.cb=c.Wa.Qd);a.v="5";c.Bf&&(a.s=c.Bf);c.Db&&(a.ls=c.Db);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);lg(c.Wa,a,function(){})}})};
	gg.prototype.start=function(){var a=this.Wa,b=this.mf;a.fg=this.id;a.gg=b;for(a.Ud=!0;mg(a););a=this.id;b=this.mf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.Yc(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
	gg.isAvailable=function(){return hg||!ig&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Dg)&&!0};g=gg.prototype;g.sd=function(){};g.Tc=function(){this.Bb=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.tb&&(clearTimeout(this.tb),this.tb=null)};
	g.fb=function(){this.Bb||(this.f("Longpoll is closing itself"),this.Tc(),this.ja&&(this.ja(this.xc),this.ja=null))};g.close=function(){this.Bb||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=B(a);this.rb+=a.length;Vf(this.Xa,"bytes_sent",a.length);a=Nb(a);a=wb(a,!0);a=ed(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.Qc.push({ug:this.Qe,Bg:a.length,Se:a[b]});c.Ud&&mg(c);this.Qe++}};function kg(a,b){var c=B(b).length;a.qb+=c;Vf(a.Xa,"bytes_received",c)}
	function jg(a,b,c,d){this.Yc=d;this.kb=c;this.ve=new Ie;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Oc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||I("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.ib=a.contentDocument:a.contentWindow?a.ib=a.contentWindow.document:a.document&&(a.ib=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.ib.open(),this.Ga.ib.write(a),this.Ga.ib.close()}catch(f){I("frame writing exception"),f.stack&&I(f.stack),I(f)}}
	jg.prototype.close=function(){this.Ud=!1;if(this.Ga){this.Ga.ib.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.kb;b&&(this.kb=null,b())};
	function mg(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.fg;b.pw=a.gg;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Se.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.ug+"&ts"+d+"="+e.Bg+"&d"+d+"="+e.Se;d++}else break;ng(a,b+c,a.$d);return!0}return!1}function ng(a,b,c){function d(){a.ve.remove(c);mg(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));lg(a,b,function(){clearTimeout(e);d()})}
	function lg(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ga.ib.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){I("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ga.ib.body.appendChild(d)}}catch(e){}},Math.floor(1))};function og(a){pg(this,a)}var qg=[gg,bg];function pg(a,b){var c=bg&&bg.isAvailable(),d=c&&!(Xb.cf||!0===Xb.get("previous_websocket_failure"));b.Cg&&(c||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[bg];else{var e=a.Wc=[];fd(qg,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function rg(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function sg(a,b,c,d,e,f,h){this.id=a;this.f=Vc("c:"+this.id+":");this.te=c;this.Mc=d;this.ja=e;this.se=f;this.M=b;this.Ad=[];this.Oe=0;this.Af=new og(b);this.L=0;this.Db=h;this.f("Connection created");tg(this)}
	function tg(a){var b=rg(a.Af);a.I=new b("c:"+a.id+":"+a.Oe++,a.M,void 0,a.Db);a.xe=b.responsesRequiredToBeHealthy||0;var c=ug(a,a.I),d=vg(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Cb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=setTimeout(function(){a.md=null;a.Cb||(a.I&&102400<a.I.qb?(a.f("Connection exceeded healthy timeout but has received "+a.I.qb+" bytes.  Marking connection healthy."),a.Cb=!0,a.I.sd()):a.I&&10240<a.I.rb?a.f("Connection exceeded healthy timeout but has sent "+
	a.I.rb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function vg(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.L?1===a.L&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.M.bb.substr(0,2)&&(Xb.remove("host:"+a.M.host),a.M.bb=a.M.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
	function ug(a,b){return function(c){if(2!=a.L)if(b===a.Rc){var d=cd("t",c);c=cd("d",c);if("c"==d){if(d=cd("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.yf=c.s;dc(a.M,f);0==a.L&&(a.I.start(),wg(a,a.I,d),"5"!==e&&L("Protocol version mismatch detected"),c=a.Af,(c=1<c.Wc.length?c.Wc[1]:null)&&xg(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];yg(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.se&&(a.se(c),a.se=null),a.ja=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),dc(a.M,c),1===a.L?a.close():(zg(a),tg(a))):"e"===d?Wc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Ag(a),Bg(a)):Wc("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=cd("t",c),c=cd("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Cg(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.xf--,Cg(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}sg.prototype.va=function(a){Dg(this,{t:"d",d:a})};function yg(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
	function Cg(a){0>=a.xf?(a.f("Secondary connection is healthy."),a.Cb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,yg(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}sg.prototype.wd=function(a){Ag(this);this.te(a)};function Ag(a){a.Cb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Cb=!0,a.I.sd()))}
	function xg(a,b){a.D=new b("c:"+a.id+":"+a.Oe++,a.M,a.yf);a.xf=b.responsesRequiredToBeHealthy||0;a.D.open(ug(a,a.D),vg(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function wg(a,b,c){a.f("Realtime connection established.");a.I=b;a.L=1;a.Mc&&(a.Mc(c,a.yf),a.Mc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Cb=!0):setTimeout(function(){Bg(a)},Math.floor(5E3))}
	function Bg(a){a.Cb||1!==a.L||(a.f("sending ping on primary."),Dg(a,{t:"c",d:{t:"p",d:{}}}))}function Dg(a,b){if(1!==a.L)throw"Connection is not connected";a.Xc.send(b)}sg.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,zg(this),this.ja&&(this.ja(),this.ja=null))};function zg(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function Eg(a,b,c,d,e,f){this.id=Fg++;this.f=Vc("p:"+this.id+":");this.qd={};this.aa={};this.qa=[];this.Pc=0;this.Lc=[];this.na=!1;this.Va=1E3;this.td=3E5;this.Hb=b;this.Kc=c;this.ue=d;this.M=a;this.pb=this.Ia=this.Db=this.ze=null;this.Vd=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Je=f||null;this.vb=null;this.Nb=!1;this.Gd={};this.tg=0;this.Ve=!0;this.Bc=this.me=null;Gg(this,0);He.Wb().hc("visible",this.jg,this);-1===
	a.host.indexOf("fblocal")&&Re.Wb().hc("online",this.ig,this)}var Fg=0,Hg=0;g=Eg.prototype;g.va=function(a,b,c){var d=++this.tg;a={r:d,a:a,b:b};this.f(B(a));E(this.na,"sendRequest call when we're not connected not allowed.");this.Ia.va(a);c&&(this.Gd[d]=c)};
	g.df=function(a,b,c,d){var e=a.ka(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.aa[f]=this.aa[f]||{};E(zf(a.n)||!T(a.n),"listen() called for non-default but complete query");E(!this.aa[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,pg:a,tag:c};this.aa[f][e]=a;this.na&&Ig(this,a)};
	function Ig(a,b){var c=b.pg,d=c.path.toString(),e=c.ka();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=yf(c.n),f.t=b.tag);f.h=b.ld();a.va("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&Hb(k,"w")){var l=A(k,"w");da(l)&&0<=Fa(l,"no_index")&&L("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.aa[d]&&a.aa[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Jg(a,d,e),b.G&&
	b.G(m,k))})}g.qf=function(a){this.pb=a;this.f("Auth token refreshed");this.pb?Kg(this):this.na&&this.va("unauth",{},function(){});if(a&&40===a.length||ld(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Kg(a){if(a.na&&a.pb){var b=a.pb,c=kd(b)?"auth":"gauth",d={cred:b};a.Je&&(d.authvar=a.Je);a.va(c,d,function(c){var d=c.s;c=c.d||"error";a.pb===b&&("ok"===d?this.ke=0:Lg(a,d,c))})}}
	g.Ef=function(a,b){var c=a.path.toString(),d=a.ka();this.f("Unlisten called for "+c+" "+d);E(zf(a.n)||!T(a.n),"unlisten() called for non-default but complete query");if(Jg(this,c,d)&&this.na){var e=yf(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.va("n",c)}};g.re=function(a,b,c){this.na?Mg(this,"o",a,b,c):this.Lc.push({we:a,action:"o",data:b,G:c})};g.gf=function(a,b,c){this.na?Mg(this,"om",a,b,c):this.Lc.push({we:a,action:"om",data:b,G:c})};
	g.xd=function(a,b){this.na?Mg(this,"oc",a,null,b):this.Lc.push({we:a,action:"oc",data:null,G:b})};function Mg(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.va(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Ng(this,"p",a,b,c,d)};g.ef=function(a,b,c,d){Ng(this,"m",a,b,c,d)};function Ng(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.qa.push({action:b,sf:d,G:e});a.Pc++;b=a.qa.length-1;a.na?Og(a,b):a.f("Buffering put: "+c)}
	function Og(a,b){var c=a.qa[b].action,d=a.qa[b].sf,e=a.qa[b].G;a.qa[b].qg=a.na;a.va(c,d,function(d){a.f(c+" response",d);delete a.qa[b];a.Pc--;0===a.Pc&&(a.qa=[]);e&&e(d.s,d.d)})}g.ye=function(a){this.na&&(a={c:a},this.f("reportStats",a),this.va("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	g.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Hb(a.p,a.d,!1,a.t):"m"===b?this.Hb(a.p,a.d,!0,a.t):"c"===b?Pg(this,a.p,a.q):"ac"===b?Lg(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Wc("Unrecognized action received from server: "+
	B(b)+"\nAre you using the latest client?"))}};g.Mc=function(a,b){this.f("connection ready");this.na=!0;this.Bc=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Db=b;if(this.Ve){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;Pb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}Qg(this);this.Ve=!1;this.Kc(!0)};
	function Gg(a,b){E(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.vb&&clearTimeout(a.vb);a.vb=setTimeout(function(){a.vb=null;Rg(a)},Math.floor(b))}g.jg=function(a){a&&!this.Nb&&this.Va===this.td&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.Ia||Gg(this,0));this.Nb=a};g.ig=function(a){a?(this.f("Browser went online."),this.Va=1E3,this.Ia||Gg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
	g.jf=function(){this.f("data client disconnected");this.na=!1;this.Ia=null;for(var a=0;a<this.qa.length;a++){var b=this.qa[a];b&&"h"in b.sf&&b.qg&&(b.G&&b.G("disconnect"),delete this.qa[a],this.Pc--)}0===this.Pc&&(this.qa=[]);this.Gd={};Sg(this)&&(this.Nb?this.Bc&&(3E4<(new Date).getTime()-this.Bc&&(this.Va=1E3),this.Bc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),Gg(this,a),this.Va=Math.min(this.td,1.3*this.Va));this.Kc(!1)};
	function Rg(a){if(Sg(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Bc=null;var b=r(a.wd,a),c=r(a.Mc,a),d=r(a.jf,a),e=a.id+":"+Hg++,f=a.Db,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Ia={close:m,va:function(a){E(k,"sendRequest call when we're not connected not allowed.");k.va(a)}};var l=a.de;a.de=!1;a.Vd.getToken(l).then(function(l){h?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),a.pb=l&&l.accessToken,k=new sg(e,a.M,b,c,d,function(b){L(b+
	" ("+a.M.toString()+")");a.eb("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.eb=function(a){I("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Ia?this.Ia.close():(this.vb&&(clearTimeout(this.vb),this.vb=null),this.na&&this.jf())};g.lc=function(a){I("Resuming connection for reason: "+a);delete this.qd[a];ua(this.qd)&&(this.Va=1E3,this.Ia||Gg(this,0))};
	function Pg(a,b,c){c=c?Ia(c,function(a){return dd(a)}).join("$"):"default";(a=Jg(a,b,c))&&a.G&&a.G("permission_denied")}function Jg(a,b,c){b=(new M(b)).toString();var d;p(a.aa[b])?(d=a.aa[b][c],delete a.aa[b][c],0===na(a.aa[b])&&delete a.aa[b]):d=void 0;return d}
	function Lg(a,b,c){I("Auth token revoked: "+b+"/"+c);a.pb=null;a.de=!0;a.Ia.close();"invalid_token"===b&&(a.ke++,3<=a.ke&&(a.Va=3E4,L("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project.")))}
	function Qg(a){Kg(a);t(a.aa,function(b){t(b,function(b){Ig(a,b)})});for(var b=0;b<a.qa.length;b++)a.qa[b]&&Og(a,b);for(;a.Lc.length;)b=a.Lc.shift(),Mg(a,b.action,b.we,b.data,b.G)}function Sg(a){var b;b=Re.Wb().ic;return ua(a.qd)&&b};function Tg(a){this.X=a}var Ug=new Tg(new qe(null));function Vg(a,b,c){if(b.e())return new Tg(new qe(c));var d=ue(a.X,b);if(null!=d){var e=d.path,d=d.value;b=R(e,b);d=d.F(b,c);return new Tg(a.X.set(e,d))}a=Nd(a.X,b,new qe(c));return new Tg(a)}function Wg(a,b,c){var d=a;Ib(c,function(a,c){d=Vg(d,b.m(a),c)});return d}Tg.prototype.Ed=function(a){if(a.e())return Ug;a=Nd(this.X,a,Q);return new Tg(a)};function Xg(a,b){var c=ue(a.X,b);return null!=c?a.X.get(c.path).Q(R(c.path,b)):null}
	function Yg(a){var b=[],c=a.X.value;null!=c?c.J()||c.P(N,function(a,c){b.push(new O(a,c))}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new O(a,c.value))});return b}function Zg(a,b){if(b.e())return a;var c=Xg(a,b);return null!=c?new Tg(new qe(c)):new Tg(a.X.subtree(b))}Tg.prototype.e=function(){return this.X.e()};Tg.prototype.apply=function(a){return $g(C,this.X,a)};
	function $g(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(E(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=$g(a.m(b),f,c)});c.Q(a).e()||null===d||(c=c.F(a.m(".priority"),d));return c};function ah(){this.T=Ug;this.ma=[];this.Cc=-1}function bh(a,b){for(var c=0;c<a.ma.length;c++){var d=a.ma[c];if(d.Zc===b)return d}return null}g=ah.prototype;
	g.Ed=function(a){var b=Ma(this.ma,function(b){return b.Zc===a});E(0<=b,"removeWrite called with nonexistent writeId.");var c=this.ma[b];this.ma.splice(b,1);for(var d=c.visible,e=!1,f=this.ma.length-1;d&&0<=f;){var h=this.ma[f];h.visible&&(f>=b&&ch(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.T=dh(this.ma,eh,C),this.Cc=0<this.ma.length?this.ma[this.ma.length-1].Zc:-1;else if(c.Ja)this.T=this.T.Ed(c.path);else{var k=this;t(c.children,function(a,b){k.T=k.T.Ed(c.path.m(b))})}return!0}return!1};
	g.Ba=function(a,b,c,d){if(c||d){var e=Zg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Xg(e,C)?(e=dh(this.ma,function(b){return(b.visible||d)&&(!c||!(0<=Fa(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||F,e.apply(b)):null}e=Xg(this.T,a);if(null!=e)return e;e=Zg(this.T,a);return e.e()?b:null!=b||null!=Xg(e,C)?(b=b||F,e.apply(b)):null};
	g.sc=function(a,b){var c=F,d=Xg(this.T,a);if(d)d.J()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=Zg(this.T,a);b.P(N,function(a,b){var d=Zg(e,new M(a)).apply(b);c=c.U(a,d)});Ga(Yg(e),function(a){c=c.U(a.name,a.S)})}else e=Zg(this.T,a),Ga(Yg(e),function(a){c=c.U(a.name,a.S)});return c};g.$c=function(a,b,c,d){E(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.m(b);if(null!=Xg(this.T,a))return null;a=Zg(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};
	g.rc=function(a,b,c){a=a.m(b);var d=Xg(this.T,a);return null!=d?d:nc(c,b)?Zg(this.T,a).apply(c.j().R(b)):null};g.mc=function(a){return Xg(this.T,a)};g.Xd=function(a,b,c,d,e,f){var h;a=Zg(this.T,a);h=Xg(a,C);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.ob(f);if(h.e()||h.J())return[];b=[];a=Ue(f);e=e?h.$b(c,f):h.Yb(c,f);for(f=K(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=K(e);return b};
	function ch(a,b){return a.Ja?a.path.contains(b):!!sa(a.children,function(c,d){return a.path.m(d).contains(b)})}function eh(a){return a.visible}
	function dh(a,b,c){for(var d=Ug,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ja)c.contains(h)?(h=R(c,h),d=Vg(d,h,f.Ja)):h.contains(c)&&(h=R(h,c),d=Vg(d,C,f.Ja.Q(h)));else if(f.children)if(c.contains(h))h=R(c,h),d=Wg(d,h,f.children);else{if(h.contains(c))if(h=R(h,c),h.e())d=Wg(d,C,f.children);else if(f=A(f.children,J(h)))f=f.Q(D(h)),d=Vg(d,C,f)}else throw Pc("WriteRecord should have .snap or .children");}}return d}function fh(a,b){this.Mb=a;this.X=b}g=fh.prototype;
	g.Ba=function(a,b,c){return this.X.Ba(this.Mb,a,b,c)};g.sc=function(a){return this.X.sc(this.Mb,a)};g.$c=function(a,b,c){return this.X.$c(this.Mb,a,b,c)};g.mc=function(a){return this.X.mc(this.Mb.m(a))};g.Xd=function(a,b,c,d,e){return this.X.Xd(this.Mb,a,b,c,d,e)};g.rc=function(a,b){return this.X.rc(this.Mb,a,b)};g.m=function(a){return new fh(this.Mb.m(a),this.X)};function Me(){this.k=this.B=null}Me.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Oe(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Ie);var d=J(b);a.k.contains(d)||a.k.add(d,new Me);a=a.k.get(d);b=D(b);Oe(a,b,c)}}
	function gh(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){Oe(a,new M(b),c)});return gh(a,b)}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&gh(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Ne(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new M(b.toString()+"/"+a);Ne(e,f,c)})}Me.prototype.P=function(a){null!==this.k&&Je(this.k,function(b,c){a(b,c)})};function U(a,b){this.ua=a;this.ra=b}U.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);y("Firebase.onDisconnect().cancel",1,a,!0);var b=new Eb;this.ua.xd(this.ra,Fb(b,a));return b.sa};U.prototype.cancel=U.prototype.cancel;U.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);fe("Firebase.onDisconnect().remove",this.ra);y("Firebase.onDisconnect().remove",1,a,!0);var b=new Eb;hh(this.ua,this.ra,null,Fb(b,a));return b.sa};
	U.prototype.remove=U.prototype.remove;U.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);fe("Firebase.onDisconnect().set",this.ra);Yd("Firebase.onDisconnect().set",a,this.ra,!1);y("Firebase.onDisconnect().set",2,b,!0);var c=new Eb;hh(this.ua,this.ra,a,Fb(c,b));return c.sa};U.prototype.set=U.prototype.set;
	U.prototype.Kb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);fe("Firebase.onDisconnect().setWithPriority",this.ra);Yd("Firebase.onDisconnect().setWithPriority",a,this.ra,!1);be("Firebase.onDisconnect().setWithPriority",2,b);y("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new Eb;ih(this.ua,this.ra,a,b,Fb(d,c));return d.sa};U.prototype.setWithPriority=U.prototype.Kb;
	U.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);fe("Firebase.onDisconnect().update",this.ra);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;L("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ae("Firebase.onDisconnect().update",a,this.ra);y("Firebase.onDisconnect().update",2,b,!0);
	c=new Eb;jh(this.ua,this.ra,a,Fb(c,b));return c.sa};U.prototype.update=U.prototype.update;function V(a,b,c){this.A=a;this.W=b;this.g=c}V.prototype.H=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};V.prototype.val=V.prototype.H;V.prototype.Ue=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};V.prototype.exportVal=V.prototype.Ue;V.prototype.Vf=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};V.prototype.exists=V.prototype.Vf;
	V.prototype.m=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));ee("Firebase.DataSnapshot.child",a);var b=new M(a),c=this.W.m(b);return new V(this.A.Q(b),c,N)};V.prototype.child=V.prototype.m;V.prototype.Fa=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);ee("Firebase.DataSnapshot.hasChild",a);var b=new M(a);return!this.A.Q(b).e()};V.prototype.hasChild=V.prototype.Fa;
	V.prototype.C=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};V.prototype.getPriority=V.prototype.C;V.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);y("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new V(d,b.W.m(c),N))})};V.prototype.forEach=V.prototype.forEach;
	V.prototype.kd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};V.prototype.hasChildren=V.prototype.kd;V.prototype.getKey=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.getKey()};id(V.prototype,"key",V.prototype.getKey);V.prototype.Fb=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Fb()};V.prototype.numChildren=V.prototype.Fb;
	V.prototype.xb=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};id(V.prototype,"ref",V.prototype.xb);function kh(a,b,c){this.Qb=a;this.sb=b;this.ub=c||null}g=kh.prototype;g.tf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.n.g;return new ic("value",this,new V(a.Ma,b.xb(),c))};g.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){E(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.Qb;return function(){d.call(b,a.Md)}};g.Pe=function(a,b){return this.sb?new jc(this,a,b):null};
	g.matches=function(a){return a instanceof kh?a.Qb&&this.Qb?a.Qb===this.Qb&&a.ub===this.ub:!0:!1};g.af=function(){return null!==this.Qb};function lh(a,b,c){this.ha=a;this.sb=b;this.ub=c}g=lh.prototype;g.tf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};g.Pe=function(a,b){return this.sb?new jc(this,a,b):null};
	g.createEvent=function(a,b){E(null!=a.Za,"Child events should have a childName.");var c=b.xb().m(a.Za);return new ic(a.type,this,new V(a.Ma,c,b.n.g),a.Dd)};g.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){E(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.ha[a.gd];return function(){d.call(b,a.Md,a.Dd)}};
	g.matches=function(a){if(a instanceof lh){if(!this.ha||!a.ha)return!0;if(this.ub===a.ub){var b=na(a.ha);if(b===na(this.ha)){if(1===b){var b=oa(a.ha),c=oa(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return ma(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};g.af=function(){return null!==this.ha};function mh(){this.Aa={}}g=mh.prototype;g.e=function(){return ua(this.Aa)};g.gb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=A(this.Aa,d),E(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];t(this.Aa,function(d){e=e.concat(d.gb(a,b,c))});return e};g.Ob=function(a,b,c,d,e){var f=a.ka(),h=A(this.Aa,f);if(!h){var h=c.Ba(e?d:null),k=!1;h?k=!0:(h=d instanceof P?c.sc(d):F,k=!1);h=new Kf(a,new Hd(new oc(h,k,!1),new oc(d,e,!1)));this.Aa[f]=h}h.Ob(b);return Nf(h,b)};
	g.mb=function(a,b,c){var d=a.ka(),e=[],f=[],h=null!=nh(this);if("default"===d){var k=this;t(this.Aa,function(a,d){f=f.concat(a.mb(b,c));a.e()&&(delete k.Aa[d],T(a.W.n)||e.push(a.W))})}else{var m=A(this.Aa,d);m&&(f=f.concat(m.mb(b,c)),m.e()&&(delete this.Aa[d],T(m.W.n)||e.push(m.W)))}h&&null==nh(this)&&e.push(new W(a.u,a.path));return{sg:e,Tf:f}};function oh(a){return Ha(pa(a.Aa),function(a){return!T(a.W.n)})}g.jb=function(a){var b=null;t(this.Aa,function(c){b=b||c.jb(a)});return b};
	function ph(a,b){if(T(b.n))return nh(a);var c=b.ka();return A(a.Aa,c)}function nh(a){return ta(a.Aa,function(a){return T(a.W.n)})||null};function qh(a){this.xa=Q;this.lb=new ah;this.De={};this.jc={};this.Dc=a}function rh(a,b,c,d,e){var f=a.lb,h=e;E(d>f.Cc,"Stacking an older write on top of newer ones");p(h)||(h=!0);f.ma.push({path:b,Ja:c,Zc:d,visible:h});h&&(f.T=Vg(f.T,b,c));f.Cc=d;return e?sh(a,new ac(Ee,b,c)):[]}function th(a,b,c,d){var e=a.lb;E(d>e.Cc,"Stacking an older merge on top of newer ones");e.ma.push({path:b,children:c,Zc:d,visible:!0});e.T=Wg(e.T,b,c);e.Cc=d;c=se(c);return sh(a,new md(Ee,b,c))}
	function uh(a,b,c){c=c||!1;var d=bh(a.lb,b);if(a.lb.Ed(b)){var e=Q;null!=d.Ja?e=e.set(C,!0):Ib(d.children,function(a,b){e=e.set(new M(a),b)});return sh(a,new De(d.path,e,c))}return[]}function vh(a,b,c){c=se(c);return sh(a,new md(Ge,b,c))}function wh(a,b,c,d){d=xh(a,d);if(null!=d){var e=yh(d);d=e.path;e=e.Ib;b=R(d,b);c=new ac(new Fe(!1,!0,e,!0),b,c);return zh(a,d,c)}return[]}
	function Ah(a,b,c,d){if(d=xh(a,d)){var e=yh(d);d=e.path;e=e.Ib;b=R(d,b);c=se(c);c=new md(new Fe(!1,!0,e,!0),b,c);return zh(a,d,c)}return[]}
	qh.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;ze(this.xa,c,function(a,b){var f=R(a,c);d=d||b.jb(f);e=e||null!=nh(b)});var f=this.xa.get(c);f?(e=e||null!=nh(f),d=d||f.jb(C)):(f=new mh,this.xa=this.xa.set(c,f));var h;null!=d?h=!0:(h=!1,d=F,Ce(this.xa.subtree(c),function(a,b){var c=b.jb(C);c&&(d=d.U(a,c))}));var k=null!=ph(f,a);if(!k&&!T(a.n)){var m=Bh(a);E(!(m in this.jc),"View does not exist, but we have a tag");var l=Ch++;this.jc[m]=l;this.De["_"+l]=m}h=f.Ob(a,b,new fh(c,this.lb),d,h);k||
	e||(f=ph(f,a),h=h.concat(Dh(this,a,f)));return h};
	qh.prototype.mb=function(a,b,c){var d=a.path,e=this.xa.get(d),f=[];if(e&&("default"===a.ka()||null!=ph(e,a))){f=e.mb(a,b,c);e.e()&&(this.xa=this.xa.remove(d));e=f.sg;f=f.Tf;b=-1!==Ma(e,function(a){return T(a.n)});var h=xe(this.xa,d,function(a,b){return null!=nh(b)});if(b&&!h&&(d=this.xa.subtree(d),!d.e()))for(var d=Eh(d),k=0;k<d.length;++k){var m=d[k],l=m.W,m=Fh(this,m);this.Dc.Ae(Gh(l),Hh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Dc.Od(Gh(a),null);else{var u=this;Ga(e,function(a){a.ka();
	var b=u.jc[Bh(a)];u.Dc.Od(Gh(a),b)})}Ih(this,e)}return f};qh.prototype.Ba=function(a,b){var c=this.lb,d=xe(this.xa,a,function(b,c){var d=R(b,a);if(d=c.jb(d))return d});return c.Ba(a,d,b,!0)};function Eh(a){return ve(a,function(a,c,d){if(c&&null!=nh(c))return[nh(c)];var e=[];c&&(e=oh(c));t(d,function(a){e=e.concat(a)});return e})}function Ih(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!T(d.n)){var d=Bh(d),e=a.jc[d];delete a.jc[d];delete a.De["_"+e]}}}
	function Gh(a){return T(a.n)&&!zf(a.n)?a.xb():a}function Dh(a,b,c){var d=b.path,e=Hh(a,b);c=Fh(a,c);b=a.Dc.Ae(Gh(b),e,c.ld,c.G);d=a.xa.subtree(d);if(e)E(null==nh(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=ve(d,function(a,b,c){if(!a.e()&&b&&null!=nh(b))return[Lf(nh(b))];var d=[];b&&(d=d.concat(Ia(oh(b),function(a){return a.W})));t(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Dc.Od(Gh(c),Hh(a,c));return b}
	function Fh(a,b){var c=b.W,d=Hh(a,c);return{ld:function(){return(b.w()||F).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=xh(a,d)){var h=yh(b);b=h.path;h=h.Ib;f=R(b,f);f=new Zb(new Fe(!1,!0,h,!0),f);b=zh(a,b,f)}else b=[]}else b=sh(a,new Zb(Ge,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.mb(c,null,f)}}}function Bh(a){return a.path.toString()+"$"+a.ka()}function yh(a){var b=a.indexOf("$");E(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new M(a.substr(0,b))}}function xh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function Hh(a,b){var c=Bh(b);return A(a.jc,c)}var Ch=1;
	function zh(a,b,c){var d=a.xa.get(b);E(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new fh(b,a.lb),null)}function sh(a,b){return Jh(a,b,a.xa,null,new fh(C,a.lb))}function Jh(a,b,c,d,e){if(b.path.e())return Kh(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var h=[],k=J(b.path),m=b.Nc(k);if((c=c.children.get(k))&&m)var l=d?d.R(k):null,k=e.m(k),h=h.concat(Jh(a,m,c,l,k));f&&(h=h.concat(f.gb(b,e,d)));return h}
	function Kh(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var h=[];c.children.ia(function(c,f){var l=d?d.R(c):null,u=e.m(c),z=b.Nc(c);z&&(h=h.concat(Kh(a,z,f,l,u)))});f&&(h=h.concat(f.gb(b,e,d)));return h};function X(a,b,c,d){this.u=a;this.path=b;this.n=c;this.Oc=d}
	function Lh(a){var b=null,c=null;a.la&&(b=sd(a));a.oa&&(c=ud(a));if(a.g===Od){if(a.la){if("[MIN_NAME]"!=rd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.oa){if("[MAX_NAME]"!=td(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!Xd(b)||null!=c&&!Xd(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(E(a.g instanceof We||a.g===bf,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function Mh(a){if(a.la&&a.oa&&a.ya&&(!a.ya||""===a.oc))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Nh(a,b){if(!0===a.Oc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.xb=function(){x("Query.ref",0,0,arguments.length);return new W(this.u,this.path)};
	g.hc=function(a,b,c,d){x("Query.on",2,4,arguments.length);ce("Query.on",a,!1);y("Query.on",2,b,!1);var e=Oh("Query.on",c,d);if("value"===a)Ph(this.u,this,new kh(b,e.cancel||null,e.Pa||null));else{var f={};f[a]=b;Ph(this.u,this,new lh(f,e.cancel,e.Pa))}return b};
	g.Jc=function(a,b,c){x("Query.off",0,3,arguments.length);ce("Query.off",a,!0);y("Query.off",2,b,!0);Cb("Query.off",3,c);var d=null,e=null;"value"===a?d=new kh(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new lh(e,null,c||null));e=this.u;d=".info"===J(this.path)?e.pd.mb(this,d):e.K.mb(this,d);tc(e.da,this.path,d)};
	g.kg=function(a,b){function c(k){f&&(f=!1,e.Jc(a,c),b&&b.call(d.Pa,k),h.resolve(k))}x("Query.once",1,4,arguments.length);ce("Query.once",a,!1);y("Query.once",2,b,!0);var d=Oh("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new Eb;Gb(h.sa);this.hc(a,c,function(b){e.Jc(a,c);d.cancel&&d.cancel.call(d.Pa,b);h.reject(b)});return h.sa};
	g.ne=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ya)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.n.ne(a),this.Oc)};
	g.oe=function(a){x("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ya)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.n.oe(a),this.Oc)};
	g.lg=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');ee("Query.orderByChild",a);Nh(this,"Query.orderByChild");var b=new M(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new We(b);b=xf(this.n,b);Lh(b);return new X(this.u,this.path,b,!0)};g.mg=function(){x("Query.orderByKey",0,0,arguments.length);Nh(this,"Query.orderByKey");var a=xf(this.n,Od);Lh(a);return new X(this.u,this.path,a,!0)};g.ng=function(){x("Query.orderByPriority",0,0,arguments.length);Nh(this,"Query.orderByPriority");var a=xf(this.n,N);Lh(a);return new X(this.u,this.path,a,!0)};
	g.og=function(){x("Query.orderByValue",0,0,arguments.length);Nh(this,"Query.orderByValue");var a=xf(this.n,bf);Lh(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){x("Query.startAt",0,2,arguments.length);Yd("Query.startAt",a,this.path,!0);de("Query.startAt",b);var c=this.n.Nd(a,b);Mh(c);Lh(c);if(this.n.la)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new X(this.u,this.path,c,this.Oc)};
	g.fd=function(a,b){x("Query.endAt",0,2,arguments.length);Yd("Query.endAt",a,this.path,!0);de("Query.endAt",b);var c=this.n.fd(a,b);Mh(c);Lh(c);if(this.n.oa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Oc)};
	g.Rf=function(a,b){x("Query.equalTo",1,2,arguments.length);Yd("Query.equalTo",a,this.path,!1);de("Query.equalTo",b);if(this.n.la)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.oa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).fd(a,b)};
	g.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.ka=function(){var a=dd(yf(this.n));return"{}"===a?"default":a};
	g.isEqual=function(a){x("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.$(a.path),d=this.ka()===a.ka();return b&&c&&d};
	function Oh(a,b,c){var d={cancel:null,Pa:null};if(b&&c)d.cancel=b,y(a,3,d.cancel,!0),d.Pa=c,Cb(a,4,d.Pa);else if(b)if("object"===typeof b&&null!==b)d.Pa=b;else if("function"===typeof b)d.cancel=b;else throw Error(Bb(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.hc;X.prototype.off=X.prototype.Jc;X.prototype.once=X.prototype.kg;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.lg;
	X.prototype.orderByKey=X.prototype.mg;X.prototype.orderByPriority=X.prototype.ng;X.prototype.orderByValue=X.prototype.og;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.fd;X.prototype.equalTo=X.prototype.Rf;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;id(X.prototype,"ref",X.prototype.xb);function Qh(a){a instanceof Rh||Xc("Don't call new Database() directly - please use firebase.database().");this.ua=a;this.ca=new W(a,C);this.INTERNAL=new Sh(this)}var Th={TIMESTAMP:{".sv":"timestamp"}};g=Qh.prototype;g.app=null;g.pf=function(a){Uh(this,"ref");x("database.ref",0,1,arguments.length);return p(a)?this.ca.m(a):this.ca};
	g.rg=function(a){Uh(this,"database.refFromURL");x("database.refFromURL",1,1,arguments.length);var b=Yc(a);ge("database.refFromURL",b);var c=b.kc;c.host!==this.ua.M.host&&Xc("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ua.M.host+")");return this.pf(b.path.toString())};function Uh(a,b){null===a.ua&&Xc("Cannot call "+b+" on a deleted database.")}g.$f=function(){x("database.goOffline",0,0,arguments.length);Uh(this,"goOffline");this.ua.eb()};
	g.ag=function(){x("database.goOnline",0,0,arguments.length);Uh(this,"goOnline");this.ua.lc()};Object.defineProperty(Qh.prototype,"app",{get:function(){return this.ua.app}});function Sh(a){this.$a=a}Sh.prototype.delete=function(){Uh(this.$a,"delete");var a=Vh.Wb(),b=this.$a.ua;A(a.nb,b.app.name)!==b&&Xc("Database "+b.app.name+" has already been deleted.");b.eb();delete a.nb[b.app.name];this.$a.ua=null;this.$a.ca=null;this.$a=this.$a.INTERNAL=null;return firebase.Promise.resolve()};
	Qh.prototype.ref=Qh.prototype.pf;Qh.prototype.refFromURL=Qh.prototype.rg;Qh.prototype.goOnline=Qh.prototype.ag;Qh.prototype.goOffline=Qh.prototype.$f;Sh.prototype["delete"]=Sh.prototype.delete;function Rh(a,b,c){this.app=c;var d=new Rf(c);this.M=a;this.Xa=Zf(a);this.Vc=null;this.da=new qc;this.vd=1;this.Ua=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.wa=new Of(this.M,r(this.Hb,this),d),setTimeout(r(this.Kc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==ca(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
	try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.wa=this.Ua=new Eg(this.M,r(this.Hb,this),r(this.Kc,this),r(this.ue,this),d,b)}var f=this;Sf(d,function(a){f.wa.qf(a)});this.zg=$f(a,r(function(){return new Wf(this.Xa,this.wa)},this));this.nc=new ie;this.ie=new fc;this.pd=new qh({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=sh(f.pd,new ac(Ge,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:aa});Wh(this,"connected",!1);this.ja=new Me;this.$a=new Qh(this);this.ed=
	0;this.je=null;this.K=new qh({Ae:function(a,b,c,d){f.wa.df(a,c,b,function(b,c){var e=d(b,c);vc(f.da,a.path,e)});return[]},Od:function(a,b){f.wa.Ef(a,b)}})}g=Rh.prototype;g.toString=function(){return(this.M.Sc?"https://":"http://")+this.M.host};g.name=function(){return this.M.pe};function Xh(a){a=a.ie.j(new M(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Yh(a){a=a={timestamp:Xh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	g.Hb=function(a,b,c,d){this.ed++;var e=new M(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=la(b,function(a){return S(a)}),a=Ah(this.K,e,b,d)):(b=S(b),a=wh(this.K,e,b,d)):c?(d=la(b,function(a){return S(a)}),a=vh(this.K,e,d)):(d=S(b),a=sh(this.K,new ac(Ge,e,d)));d=e;0<a.length&&(d=Zh(this,e));vc(this.da,d,a)};g.Kc=function(a){Wh(this,"connected",a);!1===a&&$h(this)};g.ue=function(a){var b=this;fd(a,function(a,d){Wh(b,d,a)})};
	function Wh(a,b,c){b=new M("/.info/"+b);c=S(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=sh(a.pd,new ac(Ge,b,c));vc(a.da,b,c)}g.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Gg:c});var e=Yh(this);b=S(b,c);var e=Pe(b,e),f=this.vd++,e=rh(this.K,a,e,f,!0);rc(this.da,e);var h=this;this.wa.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||L("set at "+a+" failed: "+b);e=uh(h.K,f,!e);vc(h.da,a,e);ai(d,b,c)});e=bi(this,a);Zh(this,e);vc(this.da,e,[])};
	g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Yh(this),f={};t(b,function(a,b){d=!1;var c=S(a);f[b]=Pe(c,e)});if(d)I("update() called with empty data.  Don't do anything."),ai(c,"ok");else{var h=this.vd++,k=th(this.K,a,f,h);rc(this.da,k);var m=this;this.wa.ef(a.toString(),b,function(b,d){var e="ok"===b;e||L("update at "+a+" failed: "+b);var e=uh(m.K,h,!e),f=a;0<e.length&&(f=Zh(m,a));vc(m.da,f,e);ai(c,b,d)});b=bi(this,a);Zh(this,b);vc(this.da,a,[])}};
	function $h(a){a.f("onDisconnectEvents");var b=Yh(a),c=[];Ne(Le(a.ja,b),C,function(b,e){c=c.concat(sh(a.K,new ac(Ge,b,e)));var f=bi(a,b);Zh(a,f)});a.ja=new Me;vc(a.da,C,c)}g.xd=function(a,b){var c=this;this.wa.xd(a.toString(),function(d,e){"ok"===d&&gh(c.ja,a);ai(b,d,e)})};function hh(a,b,c,d){var e=S(c);a.wa.re(b.toString(),e.H(!0),function(c,h){"ok"===c&&Oe(a.ja,b,e);ai(d,c,h)})}function ih(a,b,c,d,e){var f=S(c,d);a.wa.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Oe(a.ja,b,f);ai(e,c,d)})}
	function jh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(I("onDisconnect().update() called with empty data.  Don't do anything."),ai(d,"ok")):a.wa.gf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=S(c[m]);Oe(a.ja,b.m(m),l)}ai(d,e,f)})}function Ph(a,b,c){c=".info"===J(b.path)?a.pd.Ob(b,c):a.K.Ob(b,c);tc(a.da,b.path,c)}g.eb=function(){this.Ua&&this.Ua.eb("repo_interrupt")};g.lc=function(){this.Ua&&this.Ua.lc("repo_interrupt")};
	g.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Tf(this.Xa)),a=this.Vc.get()):a=this.Xa.get();var b=Ja(qa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ce=function(a){Vf(this.Xa,a);this.zg.zf[a]=!0};g.f=function(a){var b="";this.Ua&&(b=this.Ua.id+":");I(b,arguments)};
	function ai(a,b,c){a&&Tb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function ci(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new W(a,b);h.hc("value",f);c={path:b,update:c,G:d,status:null,lf:Oc(),Ie:e,wf:0,Rd:function(){h.Jc("value",f)},Td:null,Da:null,bd:null,cd:null,dd:null};d=a.K.Ba(b,void 0)||F;c.bd=d;d=c.update(d.H());if(p(d)){Zd("transaction failed: Data returned ",d,c.path);c.status=1;e=je(a.nc,b);var k=e.Ea()||[];k.push(c);ke(e,k);"object"===typeof d&&null!==d&&Hb(d,".priority")?(k=A(d,".priority"),E(Xd(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.K.Ba(b)||F).C().H();e=Yh(a);d=S(d,k);e=Pe(d,e);c.cd=d;c.dd=e;c.Da=a.vd++;c=rh(a.K,b,e,c.Da,c.Ie);vc(a.da,b,c);di(a)}else c.Rd(),c.cd=null,c.dd=null,c.G&&(a=new V(c.bd,new W(a,c.path),N),c.G(null,!1,a))}function di(a,b){var c=b||a.nc;b||ei(a,c);if(null!==c.Ea()){var d=fi(a,c);E(0<d.length,"Sending zero length transaction queue");Ka(d,function(a){return 1===a.status})&&gi(a,c.path(),d)}else c.kd()&&c.P(function(b){di(a,b)})}
	function gi(a,b,c){for(var d=Ia(c,function(a){return a.Da}),e=a.K.Ba(b,d)||F,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];E(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.wf++;var k=R(b,h.path),d=d.F(k,h.cd)}d=d.H(!0);a.wa.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(uh(a.K,c[f].Da));if(c[f].G){var h=c[f].dd,k=new W(a,c[f].path);d.push(r(c[f].G,
	null,null,!0,new V(h,k,N)))}c[f].Rd()}ei(a,je(a.nc,b));di(a);vc(a.da,b,e);for(f=0;f<d.length;f++)Tb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(L("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;Zh(a,b)}},e)}function Zh(a,b){var c=hi(a,b),d=c.path(),c=fi(a,c);ii(a,c,d);return d}
	function ii(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ha(b,function(a){return 1===a.status}),f=Ia(f,function(a){return a.Da}),h=0;h<b.length;h++){var k=b[h],m=R(c,k.path),l=!1,u;E(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(uh(a.K,k.Da,!0));else if(1===k.status)if(25<=k.wf)l=!0,u="maxretry",e=e.concat(uh(a.K,k.Da,!0));else{var z=a.K.Ba(k.path,f)||F;k.bd=z;var G=b[h].update(z.H());p(G)?(Zd("transaction failed: Data returned ",G,
	k.path),m=S(G),"object"===typeof G&&null!=G&&Hb(G,".priority")||(m=m.ga(z.C())),z=k.Da,G=Yh(a),G=Pe(m,G),k.cd=m,k.dd=G,k.Da=a.vd++,Na(f,z),e=e.concat(rh(a.K,k.path,G,k.Da,k.Ie)),e=e.concat(uh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(uh(a.K,k.Da,!0)))}vc(a.da,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new W(a,b[h].path),d.push(r(b[h].G,null,null,!1,new V(b[h].bd,k,N)))):d.push(r(b[h].G,null,Error(u),!1,null))))}ei(a,a.nc);for(h=0;h<d.length;h++)Tb(d[h]);di(a)}}
	function hi(a,b){for(var c,d=a.nc;null!==(c=J(b))&&null===d.Ea();)d=je(d,c),b=D(b);return d}function fi(a,b){var c=[];ji(a,b,c);c.sort(function(a,b){return a.lf-b.lf});return c}function ji(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){ji(a,b,c)})}function ei(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;ke(b,0<c.length?c:null)}b.P(function(b){ei(a,b)})}
	function bi(a,b){var c=hi(a,b).path(),d=je(a.nc,b);ne(d,function(b){ki(a,b)});ki(a,d);me(d,function(b){ki(a,b)});return c}
	function ki(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(E(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(E(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(uh(a.K,c[h].Da,!0)),c[h].G&&d.push(r(c[h].G,null,Error("set"),!1,null))));-1===f?ke(b,null):c.length=f+1;vc(a.da,b.path(),e);for(h=0;h<d.length;h++)Tb(d[h])}};function Vh(){this.nb={};this.Ff=!1}Vh.prototype.eb=function(){for(var a in this.nb)this.nb[a].eb()};Vh.prototype.lc=function(){for(var a in this.nb)this.nb[a].lc()};Vh.prototype.ce=function(a){this.Ff=a};ba(Vh);Vh.prototype.interrupt=Vh.prototype.eb;Vh.prototype.resume=Vh.prototype.lc;var Y={};Y.pc=Eg;Y.DataConnection=Y.pc;Eg.prototype.yg=function(a,b){this.va("q",{p:a},b)};Y.pc.prototype.simpleListen=Y.pc.prototype.yg;Eg.prototype.Qf=function(a,b){this.va("echo",{d:a},b)};Y.pc.prototype.echo=Y.pc.prototype.Qf;Eg.prototype.interrupt=Eg.prototype.eb;Y.If=sg;Y.RealTimeConnection=Y.If;sg.prototype.sendRequest=sg.prototype.va;sg.prototype.close=sg.prototype.close;
	Y.bg=function(a){var b=Eg.prototype.put;Eg.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Eg.prototype.put=b}};Y.hijackHash=Y.bg;Y.Hf=cc;Y.ConnectionTarget=Y.Hf;Y.ka=function(a){return a.ka()};Y.queryIdentifier=Y.ka;Y.eg=function(a){return a.u.Ua.aa};Y.listens=Y.eg;Y.ce=function(a){Vh.Wb().ce(a)};Y.forceRestClient=Y.ce;Y.Context=Vh;var Z={Xf:function(){hg=cg=!0}};Z.forceLongPolling=Z.Xf;Z.Yf=function(){ig=!0};Z.forceWebSockets=Z.Yf;Z.dg=function(){return bg.isAvailable()};Z.isWebSocketsAvailable=Z.dg;Z.wg=function(a,b){a.u.Ua.ze=b};Z.setSecurityDebugCallback=Z.wg;Z.Be=function(a,b){a.u.Be(b)};Z.stats=Z.Be;Z.Ce=function(a,b){a.u.Ce(b)};Z.statsIncrementCounter=Z.Ce;Z.ed=function(a){return a.u.ed};Z.dataUpdateCount=Z.ed;Z.cg=function(a,b){a.u.je=b};Z.interceptServerData=Z.cg;function li(a,b){this.committed=a;this.snapshot=b};function W(a,b){if(!(a instanceof Rh))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,vf,!1);this.then=void 0;this["catch"]=void 0}ka(W,X);g=W.prototype;g.getKey=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:Kd(this.path)};
	g.m=function(a){x("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof M))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));ee("Firebase.child",b)}else ee("Firebase.child",a);return new W(this.u,this.path.m(a))};g.getParent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new W(this.u,a)};
	g.Zf=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Pf=function(){return this.u.$a};g.set=function(a,b){x("Firebase.set",1,2,arguments.length);fe("Firebase.set",this.path);Yd("Firebase.set",a,this.path,!1);y("Firebase.set",2,b,!0);var c=new Eb;this.u.Kb(this.path,a,null,Fb(c,b));return c.sa};
	g.update=function(a,b){x("Firebase.update",1,2,arguments.length);fe("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;L("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ae("Firebase.update",a,this.path);y("Firebase.update",2,b,!0);c=new Eb;this.u.update(this.path,a,Fb(c,b));return c.sa};
	g.Kb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);fe("Firebase.setWithPriority",this.path);Yd("Firebase.setWithPriority",a,this.path,!1);be("Firebase.setWithPriority",2,b);y("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new Eb;this.u.Kb(this.path,a,b,Fb(d,c));return d.sa};
	g.remove=function(a){x("Firebase.remove",0,1,arguments.length);fe("Firebase.remove",this.path);y("Firebase.remove",1,a,!0);return this.set(null,a)};
	g.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);fe("Firebase.transaction",this.path);y("Firebase.transaction",1,a,!1);y("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(Bb("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new Eb;ga(b)&&Gb(d.sa);ci(this.u,this.path,a,function(a,c,
	h){a?d.reject(a):d.resolve(new li(c,h));ga(b)&&b(a,c,h)},c);return d.sa};g.vg=function(a,b){x("Firebase.setPriority",1,2,arguments.length);fe("Firebase.setPriority",this.path);be("Firebase.setPriority",1,a);y("Firebase.setPriority",2,b,!0);var c=new Eb;this.u.Kb(this.path.m(".priority"),a,null,Fb(c,b));return c.sa};
	g.push=function(a,b){x("Firebase.push",0,2,arguments.length);fe("Firebase.push",this.path);Yd("Firebase.push",a,this.path,!0);y("Firebase.push",2,b,!0);var c=Xh(this.u),d=Pd(c),c=this.m(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.m(d)});c.then=r(f.then,f);c["catch"]=r(f.then,f,void 0);ga(b)&&Gb(f)}return c};g.kb=function(){fe("Firebase.onDisconnect",this.path);return new U(this.u,this.path)};W.prototype.child=W.prototype.m;W.prototype.set=W.prototype.set;W.prototype.update=W.prototype.update;
	W.prototype.setWithPriority=W.prototype.Kb;W.prototype.remove=W.prototype.remove;W.prototype.transaction=W.prototype.transaction;W.prototype.setPriority=W.prototype.vg;W.prototype.push=W.prototype.push;W.prototype.onDisconnect=W.prototype.kb;id(W.prototype,"database",W.prototype.Pf);id(W.prototype,"key",W.prototype.getKey);id(W.prototype,"parent",W.prototype.getParent);id(W.prototype,"root",W.prototype.Zf);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
	try{firebase.INTERNAL.registerService("database",function(a){var b=Vh.Wb(),c=a.options.databaseURL;p(c)||Xc("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Yc(c),c=d.kc;ge("Invalid Firebase Database URL",d);d.path.e()||Xc("Database URL must point to the root of a Firebase Database (not including a child path).");(d=A(b.nb,a.name))&&Xc("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Rh(c,b.Ff,a);b.nb[a.name]=
	d;return d.$a},{Reference:W,Query:X,Database:Qh,enableLogging:Uc,INTERNAL:Z,TEST_ACCESS:Y,ServerValue:Th})}catch(mi){Xc("Failed to register the Firebase Database Service ("+mi+")")};})();
	module.exports = firebase.database;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var firebase = __webpack_require__(51);
	/*! @license Firebase v3.4.0
	    Build: 3.4.0-rc.3
	    Terms: https://developers.google.com/terms */
	(function() {var k,aa=aa||{},l=this,n=function(a){return void 0!==a},ba=function(){},ca=function(){throw Error("unimplemented abstract method");},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
	if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length},q=function(a){return"string"==typeof a},r=function(a){return"function"==p(a)},ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},fa="closure_uid_"+(1E9*Math.random()>>>
	0),ga=0,ha=function(a,b,c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return t.apply(null,arguments)},ja=Date.now||function(){return+new Date},
	u=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.Ka=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ka=function(a,b,c){function d(){N||(N=!0,b.apply(null,arguments))}function e(b){m=setTimeout(function(){m=null;a(f,2===O)},b)}function f(a,b){if(!N)if(a)d.apply(null,arguments);else if(2===O||x)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===O?(O=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){ec||(ec=!0,N||(null!==m?(a||(O=2),clearTimeout(m),e(0)):a||(O=1)))}var h=1,m=null,x=!1,O=0,N=!1,ec=!1;e(0);setTimeout(function(){x=!0;g(!0)},c);return g};var la="https://firebasestorage.googleapis.com";var v=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};u(v,Error);
	var ma=function(){return new v("unknown","An unknown error occurred, please check the error payload for server response.")},na=function(){return new v("canceled","User canceled the upload/download.")},oa=function(){return new v("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},pa=function(a,b,c){return new v("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},qa=function(){return new v("app-deleted","The Firebase app was deleted.")},ra=function(a,b){return new v("invalid-format",
	"String does not match format '"+a+"': "+b)};var sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){var b={};sa(a,function(a,d){b[a]=d});return b};var w=function(a,b,c,d){this.i=a;this.b={};this.method=b;this.headers={};this.body="";this.N=c;this.c=this.a=null;this.f=[200];this.g=[];this.h=d};var ua={STATE_CHANGED:"state_changed"},va={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},wa=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var y=function(a){return n(a)&&null!==a},xa=function(a){return"string"===typeof a||a instanceof String},ya=function(){return"undefined"!==typeof Blob};var za=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null};za.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var Aa=function(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var Ba=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(Ba,Error);Ba.prototype.name="CustomError";var Ca=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Ca.prototype.a=null;var Da=0;Ca.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Da++;d||ja();this.b=b;delete this.a};var Ea=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Fa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ha=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ga.length;f++)c=Ga[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ia=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Ja=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var Ka=function(a){Ka[" "](a);return a};Ka[" "]=ba;var Ma=function(a,b){var c=La;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Na=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},Oa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Pa=function(a,b){return a<b?-1:a>b?1:0};var Qa=function(a,b){this.a=a;this.b=b};var z=function(a,b){this.bucket=a;this.path=b},Ra=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Sa=function(a){for(var b=null,c=[{ia:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,ba:{bucket:1,path:3},ha:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{ia:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,ba:{bucket:1,path:3},ha:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=
	c[d],f=e.ia.exec(a);if(f){b=f[e.ba.bucket];(f=f[e.ba.path])||(f="");b=new z(b,f);e.ha(b);break}}if(null==b)throw new v("invalid-url","Invalid URL '"+a+"'.");return b};var Ta=function(a,b,c){r(a)||y(b)||y(c)?(this.next=a,this.a=b||null,this.b=c||null):(this.next=a.next||null,this.a=a.error||null,this.b=a.complete||null)};var Ua={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},Va=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},Wa=function(a,b){this.data=a;this.a=b||null},$a=function(a,b){switch(a){case "raw":return new Wa(Xa(b));case "base64":case "base64url":return new Wa(Ya(a,b));case "data_url":return a=new Za(b),a=a.a?Ya("base64",a.c):Xa(a.c),new Wa(a,(new Za(b)).b)}throw ma();
	},Xa=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},Ya=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),
	d=-1!==b.indexOf("_");if(c||d)throw ra(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw ra(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(f){throw ra(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);return a},Za=function(a){var b=a.match(/^data:([^,]+)?,/);
	if(null===b)throw ra("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var ab=function(a){var b=encodeURIComponent,c="?";sa(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var A=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=A.prototype;k.na=function(){return this.b};k.Ja=function(){return this.h};k.Ga=function(){return this.f};k.Ba=function(){return this.a};k.pa=function(){if(y(this.a)){var a=this.a.downloadURLs;return y(a)&&y(a[0])?a[0]:null}return null};k.Ia=function(){return this.g};k.Ea=function(){return this.c};var bb=function(a,b){b.unshift(a);Ba.call(this,Na.apply(null,b));b.shift()};u(bb,Ba);bb.prototype.name="AssertionError";
	var cb=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new bb(""+e,f||[]);},B=function(a,b,c){a||cb("",null,b,Array.prototype.slice.call(arguments,2))},db=function(a,b){throw new bb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},eb=function(a,b,c){r(a)||cb("Expected function but got %s: %s.",[p(a),a],b,Array.prototype.slice.call(arguments,2))};var fb=function(){this.g=this.g;this.o=this.o};fb.prototype.g=!1;fb.prototype.ea=function(){this.g||(this.g=!0,this.C())};fb.prototype.C=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var gb="closure_listenable_"+(1E6*Math.random()|0),hb=0;var ib;a:{var jb=l.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib=""}var C=function(a){return-1!=ib.indexOf(a)};var lb=function(){};lb.prototype.b=null;lb.prototype.a=ca;var mb=function(a){return a.b||(a.b=a.f())};lb.prototype.f=ca;var nb=Array.prototype.indexOf?function(a,b,c){B(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ob=Array.prototype.forEach?function(a,b,c){B(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},pb=Array.prototype.filter?function(a,
	b,c){B(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e},qb=Array.prototype.map?function(a,b,c){B(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},rb=Array.prototype.some?function(a,b,c){B(null!=a.length);return Array.prototype.some.call(a,
	b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},tb=function(a){var b;a:{b=sb;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]},ub=function(a,b){return 0<=nb(a,b)},vb=function(a){if("array"!=p(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},wb=function(a,b){b=nb(a,b);var c;if(c=0<=b)B(null!=a.length),Array.prototype.splice.call(a,
	b,1);return c},xb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var zb=new za(function(){return new yb},function(a){a.reset()},100),Bb=function(){var a=Ab,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b},yb=function(){this.next=this.b=this.a=null};yb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};yb.prototype.reset=function(){this.next=this.b=this.a=null};var Cb=function(a,b){this.type=a;this.a=this.target=b;this.ja=!0};Cb.prototype.b=function(){this.ja=!1};var Db=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.U=!!d;this.N=e;++hb;this.O=this.T=!1},Eb=function(a){a.O=!0;a.listener=null;a.a=null;a.src=null;a.N=null};var Fb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Gb=function(a,b){b=pb(b.split("/"),function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},Hb=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var Ib=function(a){this.src=a;this.a={};this.b=0},Kb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Jb(b,c,e,f);-1<h?(a=b[h],d||(a.T=!1)):(a=new Db(c,a.src,g,!!e,f),a.T=d,b.push(a));return a},Lb=function(a,b){var c=b.type;c in a.a&&wb(a.a[c],b)&&(Eb(b),0==a.a[c].length&&(delete a.a[c],a.b--))},Jb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.O&&f.listener==b&&f.U==!!c&&f.N==d)return e}return-1};var Mb,Nb=function(){};u(Nb,lb);Nb.prototype.a=function(){var a=Ob(this);return a?new ActiveXObject(a):new XMLHttpRequest};Nb.prototype.f=function(){var a={};Ob(this)&&(a[0]=!0,a[1]=!0);return a};
	var Ob=function(a){if(!a.c&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.c=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.c};Mb=new Nb;var Pb=function(a){this.a=[];if(a)a:{var b;if(a instanceof Pb){if(b=a.H(),a=a.A(),0>=this.b()){for(var c=this.a,d=0;d<b.length;d++)c.push(new Qa(b[d],a[d]));break a}}else b=Fa(a),a=Ea(a);for(d=0;d<b.length;d++)Qb(this,b[d],a[d])}},Qb=function(a,b,c){var d=a.a;d.push(new Qa(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c};Pb.prototype.A=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b};
	Pb.prototype.H=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b};Pb.prototype.b=function(){return this.a.length};var Rb=function(){this.c=[];this.a=[]},Sb=function(a){0==a.c.length&&(a.c=a.a,a.c.reverse(),a.a=[]);return a.c.pop()};Rb.prototype.b=function(){return this.c.length+this.a.length};Rb.prototype.A=function(){for(var a=[],b=this.c.length-1;0<=b;--b)a.push(this.c[b]);for(var c=this.a.length,b=0;b<c;++b)a.push(this.a[b]);return a};var Tb=function(a){if(a.A&&"function"==typeof a.A)return a.A();if(q(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ea(a)},Ub=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(da(a)||q(a))ob(a,b,void 0);else{var c;if(a.H&&"function"==typeof a.H)c=a.H();else if(a.A&&"function"==typeof a.A)c=void 0;else if(da(a)||q(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Fa(a);for(var d=Tb(a),e=d.length,f=0;f<e;f++)b.call(void 0,
	d[f],c&&c[f],a)}};var Vb=function(a){l.setTimeout(function(){throw a;},0)},Wb,Xb=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.da;c.da=null;a()}};return function(a){d.next={da:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Yb="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Zb=function(){};Zb.prototype.next=function(){throw Yb;};Zb.prototype.h=function(){return this};var $b=function(){Pb.call(this)};u($b,Pb);var ac=C("Opera"),D=C("Trident")||C("MSIE"),bc=C("Edge"),cc=C("Gecko")&&!(-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),dc=-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"),fc=function(){var a=l.document;return a?a.documentMode:void 0},gc;
	a:{var hc="",ic=function(){var a=ib;if(cc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(bc)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(dc)return/WebKit\/(\S+)/.exec(a);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ic&&(hc=ic?ic[1]:"");if(D){var jc=fc();if(null!=jc&&jc>parseFloat(hc)){gc=String(jc);break a}}gc=hc}
	var kc=gc,La={},E=function(a){return Ma(a,function(){for(var b=0,c=Oa(String(kc)).split("."),d=Oa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Pa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Pa(0==g[2].length,0==h[2].length)||Pa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},lc=l.document,
	mc=lc&&D?fc()||("CSS1Compat"==lc.compatMode?parseInt(kc,10):5):void 0;var qc=function(a,b){nc||oc();pc||(nc(),pc=!0);var c=Ab,d=zb.get();d.set(a,b);c.b?c.b.next=d:(B(!c.a),c.a=d);c.b=d},nc,oc=function(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);nc=function(){a.then(rc)}}else nc=function(){var a=rc;!r(l.setImmediate)||l.Window&&l.Window.prototype&&!C("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Wb||(Wb=Xb()),Wb(a)):l.setImmediate(a)}},pc=!1,Ab=new function(){this.b=this.a=null},rc=function(){for(var a;a=Bb();){try{a.a.call(a.b)}catch(b){Vb(b)}Aa(zb,
	a)}pc=!1};var sc;(sc=!D)||(sc=9<=Number(mc));var tc=sc,uc=D&&!E("9");!dc||E("528");cc&&E("1.9b")||D&&E("8")||ac&&E("9.5")||dc&&E("528");cc&&!E("8")||D&&E("9");var F=function(a,b){this.c={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof F?(c=a.H(),d=a.A()):(c=Fa(a),d=Ea(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};F.prototype.b=function(){return this.f};F.prototype.A=function(){vc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.c[this.a[b]]);return a};F.prototype.H=function(){vc(this);return this.a.concat()};
	var wc=function(a,b){return Object.prototype.hasOwnProperty.call(a.c,b)?(delete a.c[b],a.f--,a.g++,a.a.length>2*a.f&&vc(a),!0):!1},vc=function(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.c,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};
	F.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.c,a)?this.c[a]:b};F.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.c,a)||(this.f++,this.a.push(a),this.g++);this.c[a]=b};F.prototype.forEach=function(a,b){for(var c=this.H(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
	F.prototype.h=function(a){vc(this);var b=0,c=this.g,d=this,e=new Zb;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Yb;var e=d.a[b++];return a?e:d.c[e]};return e};var xc=function(a,b){Cb.call(this,a?a.type:"");this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;if((b=a.relatedTarget)&&cc)try{Ka(b.nodeName)}catch(c){}this.c=a;a.defaultPrevented&&this.b()}};u(xc,Cb);xc.prototype.b=function(){xc.I.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,uc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var G=function(a,b){this.a=0;this.i=void 0;this.c=this.b=this.f=null;this.g=this.h=!1;if(a!=ba)try{var c=this;a.call(b,function(a){yc(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}yc(c,3,a)})}catch(d){yc(this,3,d)}},zc=function(){this.next=this.f=this.c=this.a=this.b=null;this.g=!1};zc.prototype.reset=function(){this.f=this.c=this.a=this.b=null;this.g=!1};
	var Ac=new za(function(){return new zc},function(a){a.reset()},100),Bc=function(a,b,c){var d=Ac.get();d.a=a;d.c=b;d.f=c;return d},Cc=function(a){if(a instanceof G)return a;var b=new G(ba);yc(b,2,a);return b},Dc=function(a){return new G(function(b,c){c(a)})};
	G.prototype.then=function(a,b,c){null!=a&&eb(a,"opt_onFulfilled should be a function.");null!=b&&eb(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ec(this,r(a)?a:null,r(b)?b:null,c)};Ia(G);G.prototype.l=function(a,b){return Ec(this,null,a,b)};
	var Gc=function(a,b){a.b||2!=a.a&&3!=a.a||Fc(a);B(null!=b.a);a.c?a.c.next=b:a.b=b;a.c=b},Ec=function(a,b,c,d){var e=Bc(null,null,null);e.b=new G(function(a,g){e.a=b?function(c){try{var e=b.call(d,c);a(e)}catch(x){g(x)}}:a;e.c=c?function(b){try{var e=c.call(d,b);a(e)}catch(x){g(x)}}:g});e.b.f=a;Gc(a,e);return e.b};G.prototype.o=function(a){B(1==this.a);this.a=0;yc(this,2,a)};G.prototype.m=function(a){B(1==this.a);this.a=0;yc(this,3,a)};
	var yc=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.o,g=a.m;if(e instanceof G)null!=f&&eb(f,"opt_onFulfilled should be a function."),null!=g&&eb(g,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Gc(e,Bc(f||ba,g||null,a)),d=!0;else if(Ja(e))e.then(f,g,a),d=!0;else{if(ea(e))try{var h=e.then;if(r(h)){Hc(e,h,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}d||
	(a.i=c,a.a=b,a.f=null,Fc(a),3!=b||Ic(a,c))}},Hc=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(m){h(m)}},Fc=function(a){a.h||(a.h=!0,qc(a.j,a))},Jc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);null!=b&&B(null!=b.a);return b};
	G.prototype.j=function(){for(var a;a=Jc(this);){var b=this.a,c=this.i;if(3==b&&a.c&&!a.g){var d;for(d=this;d&&d.g;d=d.f)d.g=!1}if(a.b)a.b.f=null,Kc(a,b,c);else try{a.g?a.a.call(a.f):Kc(a,b,c)}catch(e){Lc.call(null,e)}Aa(Ac,a)}this.h=!1};var Kc=function(a,b,c){2==b?a.a.call(a.f,c):a.c&&a.c.call(a.f,c)},Ic=function(a,b){a.g=!0;qc(function(){a.g&&Lc.call(null,b)})},Lc=Vb;var Nc=function(a){this.a=new F;if(a){a=Tb(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.a.set(Mc(d),d)}}},Mc=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[fa]||(a[fa]=++ga)):b.substr(0,1)+a};Nc.prototype.b=function(){return this.a.b()};Nc.prototype.A=function(){return this.a.A()};Nc.prototype.h=function(){return this.a.h(!1)};var Oc=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);Cc(!0).then(function(){a.apply(null,b)})}};var Pc="closure_lm_"+(1E6*Math.random()|0),Qc={},Rc=0,Sc=function(a,b,c,d,e){if("array"==p(b)){for(var f=0;f<b.length;f++)Sc(a,b[f],c,d,e);return null}c=Tc(c);a&&a[gb]?(Uc(a),a=Kb(a.b,String(b),c,!1,d,e)):a=Vc(a,b,c,!1,d,e);return a},Vc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Wc(a);h||(a[Pc]=h=new Ib(a));c=Kb(h,b,c,d,e,f);if(c.a)return c;d=Xc();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Yc(b.toString()),
	d);else throw Error("addEventListener and attachEvent are unavailable.");Rc++;return c},Xc=function(){var a=Zc,b=tc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},$c=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)$c(a,b[f],c,d,e);else c=Tc(c),a&&a[gb]?Kb(a.b,String(b),c,!0,d,e):Vc(a,b,c,!0,d,e)},ad=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)ad(a,b[f],c,d,e);else(c=Tc(c),a&&a[gb])?(a=a.b,b=String(b).toString(),
	b in a.a&&(f=a.a[b],c=Jb(f,c,d,e),-1<c&&(Eb(f[c]),B(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Wc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Jb(b,c,!!d,e)),(c=-1<a?b[a]:null)&&bd(c))},bd=function(a){if("number"==typeof a||!a||a.O)return;var b=a.src;if(b&&b[gb]){Lb(b.b,a);return}var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.U):b.detachEvent&&b.detachEvent(Yc(c),d);Rc--;(c=Wc(b))?(Lb(c,a),0==c.b&&(c.src=null,b[Pc]=null)):Eb(a)},Yc=
	function(a){return a in Qc?Qc[a]:Qc[a]="on"+a},dd=function(a,b,c,d){var e=!0;if(a=Wc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.U==c&&!f.O&&(f=cd(f,d),e=e&&!1!==f)}return e},cd=function(a,b){var c=a.listener,d=a.N||a.src;a.T&&bd(a);return c.call(d,b)},Zc=function(a,b){if(a.O)return!0;if(!tc){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new xc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=
	!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=dd(d[e],a,!0,b),c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=dd(d[e],a,!1,b),c=c&&f}return c}return cd(a,new xc(b,this))},Wc=function(a){a=a[Pc];return a instanceof Ib?a:null},ed="__closure_events_fn_"+(1E9*Math.random()>>>0),Tc=function(a){B(a,"Listener can not be null.");if(r(a))return a;B(a.handleEvent,"An object listener must have handleEvent method.");
	a[ed]||(a[ed]=function(b){return a.handleEvent(b)});return a[ed]};var H=function(a,b){fb.call(this);this.m=a||0;this.f=b||10;if(this.m>this.f)throw Error("[goog.structs.Pool] Min can not be greater than max");this.a=new Rb;this.c=new Nc;this.j=null;this.S()};u(H,fb);H.prototype.W=function(){var a=ja();if(!(null!=this.j&&0>a-this.j)){for(var b;0<this.a.b()&&(b=Sb(this.a),!this.l(b));)this.S();!b&&this.b()<this.f&&(b=this.i());b&&(this.j=a,this.c.a.set(Mc(b),b));return b}};var gd=function(a){var b=fd;wc(b.c.a,Mc(a))&&b.$(a)};
	H.prototype.$=function(a){wc(this.c.a,Mc(a));this.l(a)&&this.b()<this.f?this.a.a.push(a):hd(a)};H.prototype.S=function(){for(var a=this.a;this.b()<this.m;){var b=this.i();a.a.push(b)}for(;this.b()>this.f&&0<this.a.b();)hd(Sb(a))};H.prototype.i=function(){return{}};var hd=function(a){if("function"==typeof a.ea)a.ea();else for(var b in a)a[b]=null};H.prototype.l=function(a){return"function"==typeof a.oa?a.oa():!0};H.prototype.b=function(){return this.a.b()+this.c.b()};
	H.prototype.C=function(){H.I.C.call(this);if(0<this.c.b())throw Error("[goog.structs.Pool] Objects not released");delete this.c;for(var a=this.a;0!=a.c.length||0!=a.a.length;)hd(Sb(a));delete this.a};/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var id=function(a,b){this.c=[];this.m=b||null;this.a=this.h=!1;this.b=void 0;this.j=this.g=!1;this.f=0;this.i=null;this.o=0};id.prototype.l=function(a,b){this.g=!1;this.h=!0;this.b=b;this.a=!a;jd(this)};var kd=function(a,b,c){B(!a.j,"Blocking Deferreds can not be re-used");a.c.push([b,c,void 0]);a.h&&jd(a)};id.prototype.then=function(a,b,c){var d,e,f=new G(function(a,b){d=a;e=b});kd(this,d,function(a){e(a)});return f.then(a,b,c)};Ia(id);
	var ld=function(a){return rb(a.c,function(a){return r(a[1])})},jd=function(a){if(a.f&&a.h&&ld(a)){var b=a.f,c=md[b];c&&(l.clearTimeout(c.a),delete md[b]);a.f=0}a.i&&(a.i.o--,delete a.i);for(var b=a.b,d=c=!1;a.c.length&&!a.g;){var e=a.c.shift(),f=e[0],g=e[1],e=e[2];if(f=a.a?g:f)try{var h=f.call(e||a.m,b);n(h)&&(a.a=a.a&&(h==b||h instanceof Error),a.b=b=h);if(Ja(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.g=!0}catch(m){b=m,a.a=!0,ld(a)||(c=!0)}}a.b=b;d&&(h=t(a.l,a,!0),d=t(a.l,a,
	!1),b instanceof id?(kd(b,h,d),b.j=!0):b.then(h,d));c&&(b=new nd(b),md[b.a]=b,a.f=b.a)},nd=function(a){this.a=l.setTimeout(t(this.c,this),0);this.b=a};nd.prototype.c=function(){B(md[this.a],"Cannot throw an error that is not scheduled.");delete md[this.a];throw this.b;};var md={};var od=function(a){this.f=a;this.b=this.c=this.a=null},pd=function(a,b){this.name=a;this.value=b};pd.prototype.toString=function(){return this.name};var qd=new pd("SEVERE",1E3),rd=new pd("CONFIG",700),sd=new pd("FINE",500),td=function(a){if(a.c)return a.c;if(a.a)return td(a.a);db("Root logger has no level set.");return null};
	od.prototype.log=function(a,b,c){if(a.value>=td(this).value)for(r(b)&&(b=b()),a=new Ca(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;)c=c.a};
	var ud={},vd=null,wd=function(a){vd||(vd=new od(""),ud[""]=vd,vd.c=rd);var b;if(!(b=ud[a])){b=new od(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=wd(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;ud[a]=b}return b};var xd=function(){fb.call(this);this.b=new Ib(this);this.Y=this;this.G=null};u(xd,fb);xd.prototype[gb]=!0;xd.prototype.removeEventListener=function(a,b,c,d){ad(this,a,b,c,d)};
	var I=function(a,b){Uc(a);var c,d=a.G;if(d){c=[];for(var e=1;d;d=d.G)c.push(d),B(1E3>++e,"infinite loop")}a=a.Y;d=b.type||b;q(b)?b=new Cb(b,a):b instanceof Cb?b.target=b.target||a:(e=b,b=new Cb(d,a),Ha(b,e));var e=!0,f;if(c)for(var g=c.length-1;0<=g;g--)f=b.a=c[g],e=yd(f,d,!0,b)&&e;f=b.a=a;e=yd(f,d,!0,b)&&e;e=yd(f,d,!1,b)&&e;if(c)for(g=0;g<c.length;g++)f=b.a=c[g],e=yd(f,d,!1,b)&&e};
	xd.prototype.C=function(){xd.I.C.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Eb(d[e]);delete a.a[c];a.b--}}this.G=null};var yd=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.O&&g.U==c){var h=g.listener,m=g.N||g.src;g.T&&Lb(a.b,g);e=!1!==h.call(m,d)&&e}}return e&&0!=d.ja},Uc=function(a){B(a.b,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var J=function(a,b){this.h=new $b;H.call(this,a,b)};u(J,H);k=J.prototype;k.W=function(a,b){if(!a)return J.I.W.call(this);Qb(this.h,n(b)?b:100,a);this.aa()};k.aa=function(){for(var a=this.h;0<a.b();){var b=this.W();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0>=f)c=void 0;else{if(1==f)vb(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,g=d[e];e<f>>1;){var h=2*e+1,m=2*e+2,h=m<f&&d[m].a<d[h].a?m:h;if(d[h].a>g.a)break;d[e]=d[h];e=h}d[e]=g}c=c.b}c.apply(this,[b])}else break}};
	k.$=function(a){J.I.$.call(this,a);this.aa()};k.S=function(){J.I.S.call(this);this.aa()};k.C=function(){J.I.C.call(this);l.clearTimeout(void 0);vb(this.h.a);this.h=null};var K=function(a,b){a&&a.log(sd,b,void 0)};var zd=function(a,b,c){if(r(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)};var L=function(a){xd.call(this);this.headers=new F;this.B=a||null;this.c=!1;this.w=this.a=null;this.L=this.l="";this.J=0;this.h="";this.f=this.F=this.j=this.D=!1;this.i=0;this.m=null;this.R="";this.u=this.ca=this.X=!1};u(L,xd);var Ad=L.prototype,Bd=wd("goog.net.XhrIo");Ad.v=Bd;var Cd=/^https?$/i,Dd=["POST","PUT"];
	L.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.l+"; newUri="+a);b=b?b.toUpperCase():"GET";this.l=a;this.h="";this.J=0;this.L=b;this.D=!1;this.c=!0;this.a=this.B?this.B.a():Mb.a();this.w=this.B?mb(this.B):mb(Mb);this.a.onreadystatechange=t(this.P,this);this.ca&&"onprogress"in this.a&&(this.a.onprogress=t(function(a){this.M(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=t(this.M,this)));try{K(this.v,M(this,"Opening Xhr")),
	this.F=!0,this.a.open(b,String(a),!0),this.F=!1}catch(f){K(this.v,M(this,"Error opening Xhr: "+f.message));Ed(this,f);return}a=c||"";var e=new F(this.headers);d&&Ub(d,function(a,b){e.set(b,a)});d=tb(e.H());c=l.FormData&&a instanceof l.FormData;!ub(Dd,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.R&&(this.a.responseType=this.R);"withCredentials"in this.a&&this.a.withCredentials!==this.X&&(this.a.withCredentials=
	this.X);try{Fd(this),0<this.i&&(this.u=Gd(this.a),K(this.v,M(this,"Will abort after "+this.i+"ms if incomplete, xhr2 "+this.u)),this.u?(this.a.timeout=this.i,this.a.ontimeout=t(this.K,this)):this.m=zd(this.K,this.i,this)),K(this.v,M(this,"Sending request")),this.j=!0,this.a.send(a),this.j=!1}catch(f){K(this.v,M(this,"Send error: "+f.message)),Ed(this,f)}};var Gd=function(a){return D&&E(9)&&"number"==typeof a.timeout&&n(a.ontimeout)},sb=function(a){return"content-type"==a.toLowerCase()};
	L.prototype.K=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.i+"ms, aborting",this.J=8,K(this.v,M(this,this.h)),I(this,"timeout"),Hd(this,8))};var Ed=function(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;a.J=5;Id(a);Jd(a)},Id=function(a){a.D||(a.D=!0,I(a,"complete"),I(a,"error"))},Hd=function(a,b){a.a&&a.c&&(K(a.v,M(a,"Aborting")),a.c=!1,a.f=!0,a.a.abort(),a.f=!1,a.J=b||7,I(a,"complete"),I(a,"abort"),Jd(a))};
	L.prototype.C=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Jd(this,!0));L.I.C.call(this)};L.prototype.P=function(){this.g||(this.F||this.j||this.f?Kd(this):this.Z())};L.prototype.Z=function(){Kd(this)};
	var Kd=function(a){if(a.c&&"undefined"!=typeof aa)if(a.w[1]&&4==Ld(a)&&2==P(a))K(a.v,M(a,"Local request error detected and ignored"));else if(a.j&&4==Ld(a))zd(a.P,0,a);else if(I(a,"readystatechange"),4==Ld(a)){K(a.v,M(a,"Request complete"));a.c=!1;try{if(Md(a))I(a,"complete"),I(a,"success");else{a.J=6;var b;try{b=2<Ld(a)?a.a.statusText:""}catch(c){K(a.v,"Can not get status: "+c.message),b=""}a.h=b+" ["+P(a)+"]";Id(a)}}finally{Jd(a)}}};
	L.prototype.M=function(a,b){B("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");I(this,Nd(a,"progress"));I(this,Nd(a,b?"downloadprogress":"uploadprogress"))};
	var Nd=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Jd=function(a,b){if(a.a){Fd(a);var c=a.a,d=a.w[0]?ba:null;a.a=null;a.w=null;b||I(a,"ready");try{c.onreadystatechange=d}catch(e){(a=a.v)&&a.log(qd,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Fd=function(a){a.a&&a.u&&(a.a.ontimeout=null);"number"==typeof a.m&&(l.clearTimeout(a.m),a.m=null)},Md=function(a){var b=P(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=
	!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.l).match(Fb)[1]||null,!a&&l.self&&l.self.location&&(a=l.self.location.protocol,a=a.substr(0,a.length-1)),b=!Cd.test(a?a.toLowerCase():"");c=b}return c},Ld=function(a){return a.a?a.a.readyState:0},P=function(a){try{return 2<Ld(a)?a.a.status:-1}catch(b){return-1}},Od=function(a){try{return a.a?a.a.responseText:""}catch(b){return K(a.v,"Can not get responseText: "+b.message),""}},Pd=function(a,b){return a.a&&4==Ld(a)?a.a.getResponseHeader(b):void 0},
	M=function(a,b){return b+" ["+a.L+" "+a.l+" "+P(a)+"]"};var Qd=function(a,b,c,d){this.u=a;this.w=!!d;J.call(this,b,c)};u(Qd,J);Qd.prototype.i=function(){var a=new L,b=this.u;b&&b.forEach(function(b,d){a.headers.set(d,b)});this.w&&(a.X=!0);return a};Qd.prototype.l=function(a){return!a.g&&!a.a};var fd=new Qd;var Sd=function(a,b,c,d,e,f,g,h,m,x,O){this.L=a;this.G=b;this.B=c;this.u=d;this.K=e.slice();this.m=f.slice();this.l=this.o=this.f=this.c=null;this.h=this.i=!1;this.w=g;this.j=h;this.g=x;this.M=O;this.F=m;var N=this;this.D=new G(function(a,b){N.o=a;N.l=b;Rd(N)})},Td=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Rd=function(a){function b(a,b){b?a(!1,new Td(!1,null,!0)):fd.W(function(b){b.X=d.M;d.c=b;var c=null;null!==d.g&&(b.ca=!0,c=Sc(b,"uploadprogress",function(a){d.g(a.loaded,a.lengthComputable?
	a.total:-1)}),b.ca=null!==d.g);b.send(d.L,d.G,d.u,d.B);$c(b,"complete",function(b){null!==c&&bd(c);d.c=null;b=b.target;var e=6===b.J&&100<=P(b),f=Md(b)||e,e=P(b);if(!(f=!f))var g=d,f=500<=e&&600>e,h=ub([408,429],e),g=ub(g.m,e),f=f||h||g;f?(e=7===b.J,gd(b),a(!1,new Td(!1,null,e))):(e=ub(d.K,e),a(!0,new Td(e,b)))})})}function c(a,b){var c=d.o;a=d.l;var e=b.c;if(b.b)try{var f=d.w(e,Od(e));n(f)?c(f):c()}catch(x){a(x)}else null!==e?(b=ma(),f=Od(e),b.serverResponse=f,d.j?a(d.j(e,b)):a(b)):(b=b.a?d.h?qa():
	na():new v("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),a(b));gd(e)}var d=a;a.i?c(0,new Td(!1,null,!0)):a.f=ka(b,c,a.F)};Sd.prototype.a=function(){return this.D};Sd.prototype.b=function(a){this.i=!0;this.h=a||!1;null!==this.f&&(0,this.f)(!1);null!==this.c&&Hd(this.c)};
	var Ud=function(a,b,c){var d=ab(a.b),d=a.i+d,e=a.headers?ta(a.headers):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new Sd(d,a.method,e,a.body,a.f,a.g,a.N,a.a,a.h,a.c,c)};var Vd=function(a){var b=l.BlobBuilder||l.WebKitBlobBuilder;if(n(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=xb(arguments);c=l.BlobBuilder||l.WebKitBlobBuilder;if(n(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(n(l.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},Wd=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,
	c):a.slice?cc&&!E("13.0")||dc&&!E("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var Q=function(a,b){ya()&&a instanceof Blob?(this.s=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.s=new Uint8Array(a):(this.s=new Uint8Array(a.byteLength),this.s.set(new Uint8Array(a))),b=this.s.length):(b?this.s=a:(this.s=new Uint8Array(a.length),this.s.set(a)),b=a.length),a="");this.a=b;this.b=a};Q.prototype.type=function(){return this.b};
	Q.prototype.slice=function(a,b){if(ya()&&this.s instanceof Blob)return a=Wd(this.s,a,b),null===a?null:new Q(a);a=new Uint8Array(this.s.buffer,a,b-a);return new Q(a,!0)};
	var Xd=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(ya())return b=qb(b,function(a){return a instanceof Q?a.s:a}),new Q(Vd.apply(null,b));var b=qb(b,function(a){return xa(a)?$a("raw",a).data.buffer:a.s.buffer}),c=0;ob(b,function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;ob(b,function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b]});return new Q(d,!0)};var Yd=function(a){this.c=Dc(a)};Yd.prototype.a=function(){return this.c};Yd.prototype.b=function(){};var Zd=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},$d=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},ae=function(a){sa(a.a,function(a,c){c&&c.b(!0)});a.a={}};var be=function(a,b,c,d){this.a=a;this.g=null;if(null!==this.a&&(a=this.a.options,y(a))){a=a.storageBucket||null;if(null==a)a=null;else{var e=null;try{e=Sa(a)}catch(f){}if(null!==e){if(""!==e.path)throw new v("invalid-default-bucket","Invalid default bucket '"+a+"'.");a=e.bucket}}this.g=a}this.l=b;this.j=c;this.i=d;this.c=12E4;this.b=6E4;this.h=new Zd;this.f=!1},ce=function(a){return null!==a.a&&y(a.a.INTERNAL)&&y(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return y(a)?a.accessToken:
	null},function(){return null}):Cc(null)};be.prototype.bucket=function(){if(this.f)throw qa();return this.g};var R=function(a,b,c){if(a.f)return new Yd(qa());b=a.j(b,c,null===a.a);$d(a.h,b);return b};var de=function(a,b){return b},S=function(a,b,c,d){this.c=a;this.b=b||a;this.f=!!c;this.a=d||de},ee=null,fe=function(){if(ee)return ee;var a=[];a.push(new S("bucket"));a.push(new S("generation"));a.push(new S("metageneration"));a.push(new S("name","fullPath",!0));var b=new S("name");b.a=function(a,b){return!xa(b)||2>b.length?b:Hb(b)};a.push(b);b=new S("size");b.a=function(a,b){return y(b)?+b:b};a.push(b);a.push(new S("timeCreated"));a.push(new S("updated"));a.push(new S("md5Hash",null,!0));a.push(new S("cacheControl",
	null,!0));a.push(new S("contentDisposition",null,!0));a.push(new S("contentEncoding",null,!0));a.push(new S("contentLanguage",null,!0));a.push(new S("contentType",null,!0));a.push(new S("metadata","customMetadata",!0));a.push(new S("downloadTokens","downloadURLs",!1,function(a,b){if(!(xa(b)&&0<b.length))return[];var c=encodeURIComponent;return qb(b.split(","),function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+c(a.bucket)+"/o/"+c(d));b=ab({alt:"media",token:b});return d+
	b})}));return ee=a},ge=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.l(b,new z(a.bucket,a.fullPath))}})},he=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.f&&(c[f.c]=a[f.b])}return JSON.stringify(c)},ie=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b&&"object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}};var T=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new v("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw pa(f,a,g.message);throw pa(f,a,g);}},U=function(a,b){var c=this;this.a=function(b){c.b&&!n(b)||a(b)};
	this.b=!!b},je=function(a,b){return function(c){a(c);b(c)}},ke=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=je(c,a):d=c;return new U(d,b)},le=function(){return new U(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||ya()&&a instanceof Blob))throw"Expected Blob or File.";})},me=function(){return new U(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},ne=function(a,
	b){return new U(function(b){if(!(null===b||y(b)&&b instanceof Object))throw"Expected an Object.";y(a)&&a(b)},b)},oe=function(){return new U(function(a){if(null!==a&&!r(a))throw"Expected a Function.";},!0)};var pe=function(a){if(!a)throw ma();},qe=function(a,b){return function(c,d){a:{var e;try{e=JSON.parse(d)}catch(h){c=null;break a}c=ea(e)?e:null}if(null===c)c=null;else{d={type:"file"};e=b.length;for(var f=0;f<e;f++){var g=b[f];d[g.b]=g.a(d,c[g.c])}ge(d,a);c=d}pe(null!==c);return c}},re=function(a){return function(b,c){b=401===P(b)?new v("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===P(b)?new v("quota-exceeded","Quota for bucket '"+
	a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===P(b)?new v("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},se=function(a){var b=re(a);return function(c,d){var e=b(c,d);404===P(c)&&(e=new v("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},te=function(a,b,c){var d=Ra(b);a=new w(la+"/v0"+d,"GET",qe(a,c),a.c);a.a=se(b);return a},ue=function(a,
	b){var c=Ra(b);a=new w(la+"/v0"+c,"DELETE",function(){},a.c);a.f=[200,204];a.a=se(b);return a},ve=function(a,b,c){c=c?ta(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},we=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var m=0;2>m;m++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+h;e=ve(b,d,e);m=he(e,c);d=Xd("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+
	m+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw oa();a=new w(la+"/v0"+f,"POST",qe(a,c),a.b);a.b={name:e.fullPath};a.headers=g;a.body=d.s;a.a=re(b);return a},xe=function(a,b,c,d){this.a=a;this.total=b;this.b=!!c;this.c=d||null},ye=function(a,b){var c;try{c=Pd(a,"X-Goog-Upload-Status")}catch(d){pe(!1)}pe(ub(b||["active"],c));return c},ze=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=ve(b,d,e);e={name:g.fullPath};f=la+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable",
	"X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=he(g,c);a=new w(f,"POST",function(a){ye(a);var b;try{b=Pd(a,"X-Goog-Upload-URL")}catch(x){pe(!1)}pe(xa(b));return b},a.b);a.b=e;a.headers=d;a.body=c;a.a=re(b);return a},Ae=function(a,b,c,d){a=new w(c,"POST",function(a){var b=ye(a,["active","final"]),c;try{c=Pd(a,"X-Goog-Upload-Size-Received")}catch(h){pe(!1)}a=c;isFinite(a)&&
	(a=String(a));a=q(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;pe(!isNaN(a));return new xe(a,d.a,"final"===b)},a.b);a.headers={"X-Goog-Upload-Command":"query"};a.a=re(b);return a},Be=function(a,b,c,d,e,f){var g=new xe(0,0);f?(g.a=f.a,g.total=f.total):(g.a=0,g.total=d.a);if(d.a!==g.total)throw new v("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var h=f=g.total-g.a,h=Math.min(h,262144),m=g.a;f={"X-Goog-Upload-Command":h===f?"upload, finalize":
	"upload","X-Goog-Upload-Offset":g.a};m=d.slice(m,m+h);if(null===m)throw oa();c=new w(c,"POST",function(a,c){var f=ye(a,["active","final"]),m=g.a+h,O=d.a,x;"final"===f?x=qe(b,e)(a,c):x=null;return new xe(m,O,"final"===f,x)},b.b);c.headers=f;c.body=m.s;c.c=null;c.a=re(a);return c};var W=function(a,b,c,d,e,f){this.K=a;this.c=b;this.i=c;this.f=e;this.h=f||null;this.o=d;this.j=0;this.G=this.m=!1;this.B=[];this.Z=262144<this.f.a;this.b="running";this.a=this.u=this.g=null;var g=this;this.V=function(a){g.a=null;"storage/canceled"===a.code?(g.m=!0,Ce(g)):(g.g=a,V(g,"error"))};this.Y=function(a){g.a=null;"storage/canceled"===a.code?Ce(g):(g.g=a,V(g,"error"))};this.w=this.l=null;this.F=new G(function(a,b){g.l=a;g.w=b;De(g)});this.F.then(null,function(){})},De=function(a){"running"===
	a.b&&null===a.a&&(a.Z?null===a.u?Ee(a):a.m?Fe(a):a.G?Ge(a):He(a):Ie(a))},Je=function(a,b){ce(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":V(a,"canceled");break;case "pausing":V(a,"paused")}})},Ee=function(a){Je(a,function(b){var c=ze(a.c,a.i,a.o,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.u=b;a.m=!1;Ce(a)},this.V)})},Fe=function(a){var b=a.u;Je(a,function(c){var d=Ae(a.c,a.i,b,a.f);a.a=R(a.c,d,c);a.a.a().then(function(b){a.a=null;Ke(a,b.a);a.m=!1;b.b&&
	(a.G=!0);Ce(a)},a.V)})},He=function(a){var b=new xe(a.j,a.f.a),c=a.u;Je(a,function(d){var e;try{e=Be(a.i,a.c,c,a.f,a.o,b)}catch(f){a.g=f;V(a,"error");return}a.a=R(a.c,e,d);a.a.a().then(function(b){a.a=null;Ke(a,b.a);b.b?(a.h=b.c,V(a,"success")):Ce(a)},a.V)})},Ge=function(a){Je(a,function(b){var c=te(a.c,a.i,a.o);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;V(a,"success")},a.Y)})},Ie=function(a){Je(a,function(b){var c=we(a.c,a.i,a.o,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;
	a.h=b;Ke(a,a.f.a);V(a,"success")},a.V)})},Ke=function(a,b){var c=a.j;a.j=b;a.j>c&&Le(a)},V=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.b();break;case "pausing":a.b=b;null!==a.a&&a.a.b();break;case "running":var c="paused"===a.b;a.b=b;c&&(Le(a),De(a));break;case "paused":a.b=b;Le(a);break;case "canceled":a.g=na();a.b=b;Le(a);break;case "error":a.b=b;Le(a);break;case "success":a.b=b,Le(a)}},Ce=function(a){switch(a.b){case "pausing":V(a,"paused");break;case "canceling":V(a,
	"canceled");break;case "running":De(a)}};W.prototype.D=function(){return new A(this.j,this.f.a,wa(this.b),this.h,this,this.K)};
	W.prototype.M=function(a,b,c,d){function e(a){try{g(a);return}catch(N){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw"";}catch(N){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&T("on",a,arguments);var e=new Ta(b,c,d);Me(m,e);return function(){wb(m.B,e)}}}var g=oe().a,h=ne(null,!0).a;T("on",[ke(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";}),ne(e,!0),
	oe(),oe()],arguments);var m=this,x=[ne(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),oe(),oe()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(x)};W.prototype.then=function(a,b){return this.F.then(a,b)};
	var Me=function(a,b){a.B.push(b);Ne(a,b)},Le=function(a){Oe(a);var b=xb(a.B);ob(b,function(b){Ne(a,b)})},Oe=function(a){if(null!==a.l){var b=!0;switch(wa(a.b)){case "success":Oc(a.l.bind(null,a.D()))();break;case "canceled":case "error":Oc(a.w.bind(null,a.g))();break;default:b=!1}b&&(a.l=null,a.w=null)}},Ne=function(a,b){switch(wa(a.b)){case "running":case "paused":null!==b.next&&Oc(b.next.bind(b,a.D()))();break;case "success":null!==b.b&&Oc(b.b.bind(b))();break;case "canceled":case "error":null!==
	b.a&&Oc(b.a.bind(b,a.g))();break;default:null!==b.a&&Oc(b.a.bind(b,a.g))()}};W.prototype.R=function(){T("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&V(this,"running");return a};W.prototype.P=function(){T("pause",[],arguments);var a="running"===this.b;a&&V(this,"pausing");return a};W.prototype.L=function(){T("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&V(this,"canceling");return a};var X=function(a,b){this.b=a;if(b)this.a=b instanceof z?b:Sa(b);else if(a=a.bucket(),null!==a)this.a=new z(a,"");else throw new v("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};X.prototype.toString=function(){T("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path};var Pe=function(a,b){return new X(a,b)};k=X.prototype;
	k.fa=function(a){T("child",[ke()],arguments);var b=Gb(this.a.path,a);return Pe(this.b,new z(this.a.bucket,b))};k.Da=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Pe(this.b,new z(this.a.bucket,a))};k.Fa=function(){return Pe(this.b,new z(this.a.bucket,""))};k.ma=function(){return this.a.bucket};k.ya=function(){return this.a.path};k.Ca=function(){return Hb(this.a.path)};k.Ha=function(){return this.b.i};
	k.ra=function(a,b){T("put",[le(),new U(ie,!0)],arguments);Qe(this,"put");return new W(this,this.b,this.a,fe(),new Q(a),b)};k.sa=function(a,b,c){T("putString",[ke(),ke(Va,!0),new U(ie,!0)],arguments);Qe(this,"putString");var d=$a(y(b)?b:"raw",a),e=c?ta(c):{};!y(e.contentType)&&y(d.a)&&(e.contentType=d.a);return new W(this,this.b,this.a,fe(),new Q(d.data,!0),e)};
	k.delete=function(){T("delete",[],arguments);Qe(this,"delete");var a=this;return ce(this.b).then(function(b){var c=ue(a.b,a.a);return R(a.b,c,b).a()})};k.ga=function(){T("getMetadata",[],arguments);Qe(this,"getMetadata");var a=this;return ce(this.b).then(function(b){var c=te(a.b,a.a,fe());return R(a.b,c,b).a()})};
	k.ta=function(a){T("updateMetadata",[new U(ie,void 0)],arguments);Qe(this,"updateMetadata");var b=this;return ce(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=fe(),h=Ra(e),h=la+"/v0"+h,f=he(f,g),d=new w(h,"PATCH",qe(d,g),d.c);d.headers={"Content-Type":"application/json; charset=utf-8"};d.body=f;d.a=se(e);return R(b.b,d,c).a()})};
	k.qa=function(){T("getDownloadURL",[],arguments);Qe(this,"getDownloadURL");return this.ga().then(function(a){a=a.downloadURLs[0];if(y(a))return a;throw new v("no-download-url","The given file does not have any download URLs.");})};var Qe=function(a,b){if(""===a.a.path)throw new v("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a){this.a=new be(a,function(a,c){return new X(a,c)},Ud,this);this.b=a;this.c=new Re(this)};k=Y.prototype;k.ua=function(a){T("ref",[ke(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new X(this.a);return n(a)?b.fa(a):b};
	k.va=function(a){T("refFromURL",[ke(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Sa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new X(this.a,a)};k.Aa=function(){return this.a.b};k.xa=function(a){T("setMaxUploadRetryTime",[me()],arguments);this.a.b=a};k.za=function(){return this.a.c};k.wa=function(a){T("setMaxOperationRetryTime",[me()],arguments);this.a.c=a};k.la=function(){return this.b};
	k.ka=function(){return this.c};var Re=function(a){this.a=a};Re.prototype.delete=function(){var a=this.a.a;a.f=!0;a.a=null;ae(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};X.prototype.toString=X.prototype.toString;X.prototype.child=X.prototype.fa;X.prototype.put=X.prototype.ra;X.prototype.putString=X.prototype.sa;X.prototype["delete"]=X.prototype.delete;X.prototype.getMetadata=X.prototype.ga;X.prototype.updateMetadata=X.prototype.ta;X.prototype.getDownloadURL=X.prototype.qa;Z(X.prototype,"parent",X.prototype.Da);Z(X.prototype,"root",X.prototype.Fa);Z(X.prototype,"bucket",X.prototype.ma);
	Z(X.prototype,"fullPath",X.prototype.ya);Z(X.prototype,"name",X.prototype.Ca);Z(X.prototype,"storage",X.prototype.Ha);Y.prototype.ref=Y.prototype.ua;Y.prototype.refFromURL=Y.prototype.va;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.za);Y.prototype.setMaxOperationRetryTime=Y.prototype.wa;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.Aa);Y.prototype.setMaxUploadRetryTime=Y.prototype.xa;Z(Y.prototype,"app",Y.prototype.la);Z(Y.prototype,"INTERNAL",Y.prototype.ka);Re.prototype["delete"]=Re.prototype.delete;
	Y.prototype.capi_=function(a){la=a};W.prototype.on=W.prototype.M;W.prototype.resume=W.prototype.R;W.prototype.pause=W.prototype.P;W.prototype.cancel=W.prototype.L;Z(W.prototype,"snapshot",W.prototype.D);Z(A.prototype,"bytesTransferred",A.prototype.na);Z(A.prototype,"totalBytes",A.prototype.Ja);Z(A.prototype,"state",A.prototype.Ga);Z(A.prototype,"metadata",A.prototype.Ba);Z(A.prototype,"downloadURL",A.prototype.pa);Z(A.prototype,"task",A.prototype.Ia);Z(A.prototype,"ref",A.prototype.Ea);
	ua.STATE_CHANGED="state_changed";va.RUNNING="running";va.PAUSED="paused";va.SUCCESS="success";va.CANCELED="canceled";va.ERROR="error";Ua.RAW="raw";Ua.BASE64="base64";Ua.BASE64URL="base64url";Ua.DATA_URL="data_url";G.prototype["catch"]=G.prototype.l;G.prototype.then=G.prototype.then;
	(function(){function a(a){return new Y(a)}var b={TaskState:va,TaskEvent:ua,StringFormat:Ua,Storage:Y,Reference:X};if("undefined"!==typeof firebase)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();})();
	module.exports = firebase.storage;


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"blog-list-view\">\n    <ul>\n      <li v-for=\"post in posts | orderBy 'dateCreated' -1\" track-by=\".key\">\n        <a class=\"blog-list-link\" v-link=\"{ name: 'Blog Single Post', params: { postName: post['.key'] } }\">\n          <span class=\"date\">{{ post.dateCreated | dated }}</span>\n          <h2>{{ post.title }}</h2>\n        </a>\n      </li>\n    </ul>\n  </div>\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(57)
	__vue_script__ = __webpack_require__(59)
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/Justin/Development/justinharrison.io/src/components/Single.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6ae966ae&file=Single.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Single.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6ae966ae&file=Single.vue!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Single.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".blog-single-view {\n  margin: 0 auto 100px auto;\n  max-width: 960px;\n  width: 86%; }\n  .blog-single-view .post-info {\n    color: #676767;\n    font: 12px 'Raleway', sans-serif; }\n  .blog-single-view .italic {\n    font-style: italic; }\n  .blog-single-view h2 {\n    font-family: 'Raleway', monospace;\n    text-transform: capitalize; }\n  .blog-single-view p {\n    font: 16px 'Raleway', sans-serif;\n    color: #676767; }\n  .blog-single-view ul {\n    list-style-type: none;\n    padding: 0; }\n", ""]);

	// exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _firebase = __webpack_require__(49);

	exports.default = {
	  route: {
	    data: function data(transition) {
	      transition.next({
	        postName: transition.to.params.postName
	      });
	    }
	  },
	  data: function data() {
	    return {
	      post: {
	        category: '',
	        content: '',
	        dateCreated: null,
	        dateUpdated: null,
	        title: ''
	      },
	      postName: ''
	    };
	  },

	  ready: function ready() {
	    this.$bindAsObject('post', _firebase.db.ref('/blog/' + this.postName));
	  }
	};
	// </script>
	//
	//
	// <style lang="sass?indentedSyntax">
	// .blog-single-view
	//   margin: 0 auto 100px auto
	//   max-width: 960px
	//   width: 86%
	//
	//   .post-info
	//     color: #676767
	//     font: 12px 'Raleway', sans-serif
	//
	//   .italic
	//     font-style: italic
	//
	//   h2
	//     font-family: 'Raleway', monospace
	//     text-transform: capitalize
	//
	//   p
	//     font: 16px 'Raleway', sans-serif
	//     color: #676767
	//
	//   ul
	//     list-style-type: none
	//     padding: 0
	// </style>
	//
	// <template>
	//   <div class="blog-single-view">
	//     <h2>{{ post.title }}</h2>
	//     <span class="post-info" v-if="post.dateCreated">{{ post.dateCreated | dated  }} {{ post.category }} <span class="italic" v-if="post.dateUpdated">Updated {{ post.dateUpdated | dated  }}</span></span><br>
	//     <div>
	//       {{{ post.content | marked }}}
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"blog-single-view\">\n    <h2>{{ post.title }}</h2>\n    <span class=\"post-info\" v-if=\"post.dateCreated\">{{ post.dateCreated | dated  }} {{ post.category }} <span class=\"italic\" v-if=\"post.dateUpdated\">Updated {{ post.dateUpdated | dated  }}</span></span><br>\n    <div>\n      {{{ post.content | marked }}}\n    </div>\n  </div>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */


	var assign = __webpack_require__(62);
	var provide = __webpack_require__(63);
	var usage = __webpack_require__(67);
	var createFieldsObj = __webpack_require__(65).createFieldsObj;
	var isObject = __webpack_require__(65).isObject;


	/**
	 * Adds handler for the history API methods
	 * @constructor
	 * @param {Object} tracker Passed internally by analytics.js
	 * @param {?Object} opts Passed by the require command.
	 */
	function UrlChangeTracker(tracker, opts) {

	  usage.track(tracker, usage.plugins.URL_CHANGE_TRACKER);

	  // Feature detects to prevent errors in unsupporting browsers.
	  if (!history.pushState || !window.addEventListener) return;

	  this.opts = assign({
	    shouldTrackUrlChange: this.shouldTrackUrlChange,
	    fieldsObj: {},
	    hitFilter: null
	  }, opts);

	  this.tracker = tracker;

	  // Sets the initial page field.
	  // Don't set this on the tracker yet so campaign data can be retreived
	  // from the location field.
	  this.path = getPath();

	  this.updateTrackerData = this.updateTrackerData.bind(this);

	  // Overrides history.pushState.
	  this.originalPushState = history.pushState;
	  history.pushState = function(state, title) {
	    // Sets the document title for reference later.
	    // TODO(philipwalton): consider using WeakMap for this to not conflict
	    // with any user-defined property also called "title".
	    if (isObject(state) && title) state.title = title;

	    this.originalPushState.apply(history, arguments);
	    this.updateTrackerData();
	  }.bind(this);

	  // Overrides history.repaceState.
	  this.originalReplaceState = history.replaceState;
	  history.replaceState = function(state, title) {
	    // Sets the document title for reference later.
	    // TODO(philipwalton): consider using WeakMap for this to not conflict
	    // with any user-defined property also called "title".
	    if (isObject(state) && title) state.title = title;

	    this.originalReplaceState.apply(history, arguments);
	    this.updateTrackerData();
	  }.bind(this);

	  // Handles URL changes via user interaction.
	  window.addEventListener('popstate', this.updateTrackerData);
	}


	/**
	 * Updates the page and title fields on the tracker if necessary and
	 * optionally sends a pageview.
	 * @param {boolean} shouldSendPageview Indicates whether the tracker should
	 *     send a pageview after updating the URL.
	 */
	UrlChangeTracker.prototype.updateTrackerData = function(shouldSendPageview) {

	  // Sets the default.
	  shouldSendPageview = shouldSendPageview === false ? false : true;

	  // Calls the update logic asychronously to help ensure user callbacks
	  // happen first.
	  setTimeout(function() {

	    var oldPath = this.path;
	    var newPath = getPath();

	    if (oldPath != newPath &&
	        this.opts.shouldTrackUrlChange.call(this, newPath, oldPath)) {

	      this.path = newPath;
	      this.tracker.set({
	        page: newPath,
	        title: isObject(history.state) && history.state.title || document.title
	      });

	      if (shouldSendPageview) {
	        var defaultFields = {transport: 'beacon'};
	        this.tracker.send('pageview', createFieldsObj(defaultFields,
	            this.opts.fieldsObj, this.tracker, this.opts.hitFilter));
	      }
	    }
	  }.bind(this), 0);
	};


	/**
	 * Determines whether or not the tracker should send a hit with the new page
	 * data. This default implementation can be overrided in the config options.
	 * @param {string} newPath The path prior to the URL change.
	 * @param {string} oldPath The path after the URL change.
	 * @return {boolean} Whether or not the URL change should be tracked.
	 */
	UrlChangeTracker.prototype.shouldTrackUrlChange = function(newPath, oldPath) {
	  return newPath && oldPath;
	};


	/**
	 * Removes all event listeners and instance properties.
	 */
	UrlChangeTracker.prototype.remove = function() {
	  window.removeEventListener('popstate', this.updateTrackerData);
	  history.replaceState = this.originalReplaceState;
	  history.pushState = this.originalPushState;

	  this.tracker = null;
	  this.opts = null;
	  this.path = null;

	  this.updateTrackerData = null;
	  this.originalReplaceState = null;
	  this.originalPushState = null;
	};


	/**
	 * @return {string} The path value of the current URL.
	 */
	function getPath() {
	  return location.pathname + location.search;
	}


	provide('urlChangeTracker', UrlChangeTracker);


/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */


	var constants = __webpack_require__(64);
	var utilities = __webpack_require__(65);


	// Adds the dev ID to the list of dev IDs if any plugin is used.
	(window.gaDevIds = window.gaDevIds || []).push(constants.DEV_ID);


	/**
	 * Provides a plugin for use with analytics.js, accounting for the possibility
	 * that the global command queue has been renamed or not yet defined.
	 * @param {string} pluginName The plugin name identifier.
	 * @param {Function} pluginConstructor The plugin constructor function.
	 */
	module.exports = function providePlugin(pluginName, pluginConstructor) {
	  var gaAlias = window['GoogleAnalyticsObject'] || 'ga';
	  window[gaAlias] = window[gaAlias] || function() {
	    (window[gaAlias]['q'] = window[gaAlias]['q'] || []).push(arguments);
	  };

	  // Formally provides the plugin for use with analytics.js.
	  window[gaAlias]('provide', pluginName, pluginConstructor);

	  // Registers the plugin on the global gaplugins object.
	  window.gaplugins = window.gaplugins || {};
	  window.gaplugins[utilities.capitalize(pluginName)] = pluginConstructor;
	};


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */


	module.exports = {
	  VERSION: '1.0.0',
	  DEV_ID: 'i5iSjo',

	  VERSION_PARAM: '&_av',
	  USAGE_PARAM: '&_au',

	  NULL_DIMENSION: '(not set)'
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */


	var assign = __webpack_require__(62);
	var getAttributes = __webpack_require__(66);


	var utilities = {


	  /**
	   * Accepts default and user override fields and an optional tracker, hit
	   * filter, and target element and returns a single object that can be used in
	   * `ga('send', ...)` commands.
	   * @param {Object} defaultFields The default fields to return.
	   * @param {Object} userFields Fields set by the user to override the defaults.
	   * @param {Object} opt_tracker The tracker object to apply the hit filter to.
	   * @param {Function} opt_hitFilter A filter function that gets
	   *     called with the tracker model right before the `buildHitTask`. It can
	   *     be used to modify the model for the current hit only.
	   * @param {Element} opt_target If the hit originated from an interaction
	   *     with a DOM element, hitFilter is invoked with that element as the
	   *     second argument.
	   * @return {Object} The final fields object.
	   */
	  createFieldsObj: function(
	      defaultFields, userFields, opt_tracker, opt_hitFilter, opt_target) {

	    if (typeof opt_hitFilter == 'function') {
	      var originalBuildHitTask = opt_tracker.get('buildHitTask');
	      return {
	        buildHitTask: function(model) {
	          model.set(defaultFields, null, true);
	          model.set(userFields, null, true);
	          opt_hitFilter(model, opt_target);
	          originalBuildHitTask(model);
	        }
	      };
	    }
	    else {
	      return assign({}, defaultFields, userFields);
	    }
	  },


	  /**
	   * Retrieves the attributes from an DOM element and returns a fields object
	   * for all attributes matching the passed prefix string.
	   * @param {Element} element The DOM element to get attributes from.
	   * @param {string} prefix An attribute prefix. Only the attributes matching
	   *     the prefix will be returned on the fields object.
	   * @return {Object} An object of analytics.js fields and values
	   */
	  getAttributeFields: function(element, prefix) {
	    var attributes = getAttributes(element);
	    var attributeFields = {};

	    Object.keys(attributes).forEach(function(attribute) {

	      // The `on` prefix is used for event handling but isn't a field.
	      if (attribute.indexOf(prefix) === 0 && attribute != prefix + 'on') {

	        var value = attributes[attribute];

	        // Detects Boolean value strings.
	        if (value == 'true') value = true;
	        if (value == 'false') value = false;

	        var field = utilities.camelCase(attribute.slice(prefix.length));
	        attributeFields[field] = value;
	      }
	    });

	    return attributeFields;
	  },


	  domReady: function(callback) {
	    if (document.readyState == 'loading') {
	      document.addEventListener('DOMContentLoaded', function fn() {
	        document.removeEventListener('DOMContentLoaded', fn);
	        callback();
	      });
	    } else {
	      callback();
	    }
	  },


	  /**
	   * Accepts a function and returns a wrapped version of the function that is
	   * expected to be called elsewhere in the system. If it's not called
	   * elsewhere after the timeout period, it's called regardless. The wrapper
	   * function also prevents the callback from being called more than once.
	   * @param {Function} callback The function to call.
	   * @param {number} wait How many milliseconds to wait before invoking
	   *     the callback.
	   * @returns {Function} The wrapped version of the passed function.
	   */
	  withTimeout: function(callback, wait) {
	    var called = false;
	    setTimeout(callback, wait || 2000);
	    return function() {
	      if (!called) {
	        called = true;
	        callback();
	      }
	    };
	  },


	  /**
	   * Accepts a string containing hyphen or underscore word separators and
	   * converts it to camelCase.
	   * @param {string} str The string to camelCase.
	   * @return {string} The camelCased version of the string.
	   */
	  camelCase: function(str) {
	    return str.replace(/[\-\_]+(\w?)/g, function(match, p1) {
	      return p1.toUpperCase();
	    });
	  },


	  /**
	   * Capitalizes the first letter of a string.
	   * @param {string} str The input string.
	   * @return {string} The capitalized string
	   */
	  capitalize: function(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  },


	  /**
	   * Indicates whether the passed variable is a JavaScript object.
	   * @param {*} value The input variable to test.
	   * @return {boolean} Whether or not the test is an object.
	   */
	  isObject: function(value) {
	    return typeof value == 'object' && value !== null;
	  },


	  /**
	   * Indicates whether the passed variable is a JavaScript array.
	   * @param {*} value The input variable to test.
	   * @return {boolean} Whether or not the value is an array.
	   */
	  isArray: Array.isArray || function(value) {
	    return Object.prototype.toString.call(value) === '[object Array]';
	  },


	  /**
	   * Accepts a value that may or may not be an array. If it is not an array,
	   * it is returned as the first item in a single-item array.
	   * @param {*} value The value to convert to an array if it is not.
	   * @return {Array} The array-ified value.
	   */
	  toArray: function(value) {
	    return utilities.isArray(value) ? value : [value];
	  }
	};

	module.exports = utilities;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Gets all attributes of an element as a plain JavaScriot object.
	 * @param {Element} element The element whose attributes to get.
	 * @return {Object} An object whose keys are the attribute keys and whose
	 *     values are the attribute values. If no attributes exist, an empty
	 *     object is returned.
	 */
	module.exports = function getAttributes(element) {
	  var attrs = {};

	  // Validate input.
	  if (!(element && element.nodeType == 1)) return attrs;

	  // Return an empty object if there are no attributes.
	  var map = element.attributes;
	  if (map.length === 0) return {};

	  for (var i = 0, attr; attr = map[i]; i++) {
	    attrs[attr.name] = attr.value;
	  }
	  return attrs;
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */


	var constants = __webpack_require__(64);


	var plugins = {
	  CLEAN_URL_TRACKER: 1,
	  EVENT_TRACKER: 2,
	  IMPRESSION_TRACKER: 3,
	  MEDIA_QUERY_TRACKER: 4,
	  OUTBOUND_FORM_TRACKER: 5,
	  OUTBOUND_LINK_TRACKER: 6,
	  PAGE_VISIBILITY_TRACKER: 7,
	  SOCIAL_WIDGET_TRACKER: 8,
	  URL_CHANGE_TRACKER: 9
	};
	var PLUGIN_COUNT = 9;


	/**
	 * Converts a hexadecimal string to a binary string.
	 * @param {string} hex A hexadecimal numeric string.
	 * @return {string} a binary numeric string.
	 */
	function convertHexToBin(hex) {
	  return parseInt(hex || '0', 16).toString(2);
	}


	/**
	 * Converts a binary string to a hexadecimal string.
	 * @param {string} bin A binary numeric string.
	 * @return {string} a hexadecimal numeric string.
	 */
	function convertBinToHex(bin) {
	  return parseInt(bin || '0', 2).toString(16);
	}


	/**
	 * Adds leading zeros to a string if it's less than a minimum length.
	 * @param {string} str A string to pad.
	 * @param {number} len The minimum length of the string
	 * @return {string} The padded string.
	 */
	function padZeros(str, len) {
	  if (str.length < len) {
	    var toAdd = len - str.length;
	    while (toAdd) {
	      str = '0' + str;
	      toAdd--;
	    }
	  }
	  return str;
	}


	/**
	 * Accepts a binary numeric string and flips the digit from 0 to 1 at the
	 * specified index.
	 * @param {string} str The binary numeric string.
	 * @param {number} index The index to flip the bit.
	 * @return {string} The new binary string with the bit flipped on
	 */
	function flipBitOn(str, index) {
	  return str.substr(0, index) + 1 + str.substr(index + 1);
	}


	/**
	 * Accepts a tracker and a plugin index and flips the bit at the specified
	 * index on the tracker's usage parameter.
	 * @param {Object} tracker An analytics.js tracker.
	 * @param {number} pluginIndex The index of the plugin in the global list.
	 */
	function trackPlugin(tracker, pluginIndex) {
	  var usageHex = tracker.get(constants.USAGE_PARAM);
	  var usageBin = padZeros(convertHexToBin(usageHex), PLUGIN_COUNT);

	  // Flip the bit of the plugin being tracked.
	  usageBin = flipBitOn(usageBin, PLUGIN_COUNT - pluginIndex);

	  // Stores the modified usage string back on the tracker.
	  tracker.set(constants.USAGE_PARAM, convertBinToHex(usageBin));
	}


	/**
	 * Accepts a tracker and adds the current version to the version param.
	 * @param {Object} tracker An analytics.js tracker.
	 */
	function trackVersion(tracker) {
	  tracker.set(constants.VERSION_PARAM, constants.VERSION);
	}


	module.exports = {
	  track: function(tracker, plugin) {
	    trackVersion(tracker);
	    trackPlugin(tracker, plugin);
	  },
	  plugins: plugins
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
		// explicitly match decimal, hex, and named HTML entities 
	  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Date Format 1.2.3
	 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
	 * MIT license
	 *
	 * Includes enhancements by Scott Trenda <scott.trenda.net>
	 * and Kris Kowal <cixar.com/~kris.kowal/>
	 *
	 * Accepts a date, a mask, or a date and a mask.
	 * Returns a formatted version of the given date.
	 * The date defaults to the current date/time.
	 * The mask defaults to dateFormat.masks.default.
	 */

	(function(global) {
	  'use strict';

	  var dateFormat = (function() {
	      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
	      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
	      var timezoneClip = /[^-+\dA-Z]/g;
	  
	      // Regexes and supporting functions are cached through closure
	      return function (date, mask, utc, gmt) {
	  
	        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
	        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
	          mask = date;
	          date = undefined;
	        }
	  
	        date = date || new Date;
	  
	        if(!(date instanceof Date)) {
	          date = new Date(date);
	        }
	  
	        if (isNaN(date)) {
	          throw TypeError('Invalid date');
	        }
	  
	        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
	  
	        // Allow setting the utc/gmt argument via the mask
	        var maskSlice = mask.slice(0, 4);
	        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
	          mask = mask.slice(4);
	          utc = true;
	          if (maskSlice === 'GMT:') {
	            gmt = true;
	          }
	        }
	  
	        var _ = utc ? 'getUTC' : 'get';
	        var d = date[_ + 'Date']();
	        var D = date[_ + 'Day']();
	        var m = date[_ + 'Month']();
	        var y = date[_ + 'FullYear']();
	        var H = date[_ + 'Hours']();
	        var M = date[_ + 'Minutes']();
	        var s = date[_ + 'Seconds']();
	        var L = date[_ + 'Milliseconds']();
	        var o = utc ? 0 : date.getTimezoneOffset();
	        var W = getWeek(date);
	        var N = getDayOfWeek(date);
	        var flags = {
	          d:    d,
	          dd:   pad(d),
	          ddd:  dateFormat.i18n.dayNames[D],
	          dddd: dateFormat.i18n.dayNames[D + 7],
	          m:    m + 1,
	          mm:   pad(m + 1),
	          mmm:  dateFormat.i18n.monthNames[m],
	          mmmm: dateFormat.i18n.monthNames[m + 12],
	          yy:   String(y).slice(2),
	          yyyy: y,
	          h:    H % 12 || 12,
	          hh:   pad(H % 12 || 12),
	          H:    H,
	          HH:   pad(H),
	          M:    M,
	          MM:   pad(M),
	          s:    s,
	          ss:   pad(s),
	          l:    pad(L, 3),
	          L:    pad(Math.round(L / 10)),
	          t:    H < 12 ? 'a'  : 'p',
	          tt:   H < 12 ? 'am' : 'pm',
	          T:    H < 12 ? 'A'  : 'P',
	          TT:   H < 12 ? 'AM' : 'PM',
	          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
	          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
	          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
	          W:    W,
	          N:    N
	        };
	  
	        return mask.replace(token, function (match) {
	          if (match in flags) {
	            return flags[match];
	          }
	          return match.slice(1, match.length - 1);
	        });
	      };
	    })();

	  dateFormat.masks = {
	    'default':               'ddd mmm dd yyyy HH:MM:ss',
	    'shortDate':             'm/d/yy',
	    'mediumDate':            'mmm d, yyyy',
	    'longDate':              'mmmm d, yyyy',
	    'fullDate':              'dddd, mmmm d, yyyy',
	    'shortTime':             'h:MM TT',
	    'mediumTime':            'h:MM:ss TT',
	    'longTime':              'h:MM:ss TT Z',
	    'isoDate':               'yyyy-mm-dd',
	    'isoTime':               'HH:MM:ss',
	    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
	    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
	    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
	  };

	  // Internationalization strings
	  dateFormat.i18n = {
	    dayNames: [
	      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
	      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
	    ],
	    monthNames: [
	      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
	      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
	    ]
	  };

	function pad(val, len) {
	  val = String(val);
	  len = len || 2;
	  while (val.length < len) {
	    val = '0' + val;
	  }
	  return val;
	}

	/**
	 * Get the ISO 8601 week number
	 * Based on comments from
	 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
	 *
	 * @param  {Object} `date`
	 * @return {Number}
	 */
	function getWeek(date) {
	  // Remove time components of date
	  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	  // Change date to Thursday same week
	  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

	  // Take January 4th as it is always in week 1 (see ISO 8601)
	  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

	  // Change date to Thursday same week
	  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

	  // Check if daylight-saving-time-switch occured and correct for it
	  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
	  targetThursday.setHours(targetThursday.getHours() - ds);

	  // Number of weeks between target Thursday and first Thursday
	  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
	  return 1 + Math.floor(weekDiff);
	}

	/**
	 * Get ISO-8601 numeric representation of the day of the week
	 * 1 (for Monday) through 7 (for Sunday)
	 * 
	 * @param  {Object} `date`
	 * @return {Number}
	 */
	function getDayOfWeek(date) {
	  var dow = date.getDay();
	  if(dow === 0) {
	    dow = 7;
	  }
	  return dow;
	}

	/**
	 * kind-of shortcut
	 * @param  {*} val
	 * @return {String}
	 */
	function kindOf(val) {
	  if (val === null) {
	    return 'null';
	  }

	  if (val === undefined) {
	    return 'undefined';
	  }

	  if (typeof val !== 'object') {
	    return typeof val;
	  }

	  if (Array.isArray(val)) {
	    return 'array';
	  }

	  return {}.toString.call(val)
	    .slice(8, -1).toLowerCase();
	};



	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return dateFormat;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = dateFormat;
	  } else {
	    global.dateFormat = dateFormat;
	  }
	})(this);


/***/ }
/******/ ]);