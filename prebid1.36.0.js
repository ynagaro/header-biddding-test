/* prebid.js v1.36.0
Updated : 2018-12-19 */
!(function(u) {
	var s = window.pbjsChunk;
	window.pbjsChunk = function(e, t, n) {
		for (var r, i, o, a = 0, d = []; a < e.length; a++) i = e[a], c[i] && d.push(
			c[i][0]), c[i] = 0;
		for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
		for (s && s(e, t, n); d.length;) d.shift()();
		if (n)
			for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
		return o
	};
	var n = {},
		c = {
			192: 0
		};

	function f(e) {
		if (n[e]) return n[e].exports;
		var t = n[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
	}
	f.m = u, f.c = n, f.d = function(e, t, n) {
		f.o(e, t) || Object.defineProperty(e, t, {
			configurable: !1,
			enumerable: !0,
			get: n
		})
	}, f.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return f.d(t, "a", t), t
	}, f.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, f.p = "", f.oe = function(e) {
		throw console.error(e), e
	}, f(f.s = 637)
})({
	0: function(e, a, t) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
				value: !0
			}), a.getLatestHighestCpmBid = a.getOldestHighestCpmBid = a.getHighestCpm =
			void 0;
		var r = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			},
			d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			};
		a.getAdUnitSizes = function(e) {
				if (!e) return;
				var t = [];
				if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner
						.sizes)) {
					var n = e.mediaTypes.banner.sizes;
					Array.isArray(n[0]) ? t = n : t.push(n)
				} else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes :
					t.push(e.sizes));
				return t
			}, a.parseSizesInput = function(e) {
				var t = [];
				if ("string" == typeof e) {
					var n = e.split(","),
						r = /^(\d)+x(\d)+$/i;
					if (n)
						for (var i in n) w(n, i) && n[i].match(r) && t.push(n[i])
				} else if ("object" === (void 0 === e ? "undefined" : d(e))) {
					var o = e.length;
					if (0 < o)
						if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(
							T(e));
						else
							for (var a = 0; a < o; a++) t.push(T(e[a]))
				}
				return t
			}, a.parseGPTSingleSizeArray = T, a.uniques = C, a.flatten = B, a.getBidRequest =
			function(n, e) {
				var r = void 0;
				return e.some((function(e) {
					var t = (0, o.default)(e.bids, (function(t) {
						return ["bidId", "adId", "bid_id"].some((function(e) {
							return t[e] === n
						}))
					}));
					return t && (r = t), t
				})), r
			}, a.getKeys = O, a.getValue = R, a.getBidderCodes = function() {
				return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] :
					pbjs.adUnits).map((function(e) {
					return e.bids.map((function(e) {
						return e.bidder
					})).reduce(B, [])
				})).reduce(B).filter(C)
			}, a.isGptPubadsDefined = function() {
				if (window.googletag && a.isFn(window.googletag.pubads) && a.isFn(window.googletag
						.pubads().getSlots)) return !0
			}, a.shuffle = function(e) {
				var t = e.length;
				for (; 0 < t;) {
					var n = Math.floor(Math.random() * t),
						r = e[--t];
					e[t] = e[n], e[n] = r
				}
				return e
			}, a.adUnitsFilter = function(e, t) {
				return (0, u.default)(e, t && t.adUnitCode)
			}, a.isSrcdocSupported = function(e) {
				return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView
					.frameElement && !/firefox/i.test(navigator.userAgent)
			}, a.deepClone = function(e) {
				return (0, i.default)(e)
			}, a.inIframe = function() {
				try {
					return a.getWindowSelf() !== a.getWindowTop()
				} catch (e) {
					return !0
				}
			}, a.isSafariBrowser = function() {
				return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
			}, a.replaceAuctionPrice = function(e, t) {
				if (!e) return;
				return e.replace(/\$\{AUCTION_PRICE\}/g, t)
			}, a.timestamp = function() {
				return (new Date).getTime()
			}, a.checkCookieSupport = function() {
				if (window.navigator.cookieEnabled || document.cookie.length) return !0
			}, a.cookiesAreEnabled = function() {
				if (a.checkCookieSupport()) return !0;
				return window.document.cookie = "prebid.cookieTest", -1 != window.document
					.cookie.indexOf("prebid.cookieTest")
			}, a.getCookie = function(e) {
				var t = window.document.cookie.match("(^|;)\\s*" + e +
					"\\s*=\\s*([^;]*)\\s*(;|$)");
				return t ? decodeURIComponent(t[2]) : null
			}, a.delayExecution = function(e, t) {
				if (t < 1) throw new Error(
					"numRequiredCalls must be a positive number. Got " + t);
				var n = 0;
				return function() {
					++n === t && e.apply(null, arguments)
				}
			}, a.groupBy = function(e, n) {
				return e.reduce((function(e, t) {
					return (e[t[n]] = e[t[n]] || []).push(t), e
				}), {})
			}, a.deepAccess = function(e, t) {
				if (!e) return;
				t = String(t).split(".");
				for (var n = 0; n < t.length; n++)
					if (void 0 === (e = e[t[n]])) return;
				return e
			}, a.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
				return e ?
					'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body><!--PRE_SCRIPT_TAG_MACRO--><script src="' +
					e + '"><\/script><!--POST_SCRIPT_TAG_MACRO--></body></html>' : ""
			}, a.getDefinedParams = function(n, e) {
				return e.filter((function(e) {
					return n[e]
				})).reduce((function(e, t) {
					return r(e, (function(e, t, n) {
						t in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = n;
						return e
					})({}, t, n[t]))
				}), {})
			}, a.isValidMediaTypes = function(e) {
				var t = ["banner", "native", "video"];
				if (!Object.keys(e).every((function(e) {
						return (0, u.default)(t, e)
					}))) return !1;
				if (e.video && e.video.context) return (0, u.default)(["instream",
					"outstream"
				], e.video.context);
				return !0
			}, a.getBidderRequest = function(e, t, n) {
				return (0, o.default)(e, (function(e) {
					return 0 < e.bids.filter((function(e) {
						return e.bidder === t && e.adUnitCode === n
					})).length
				})) || {
					start: null,
					auctionId: null
				}
			}, a.getUserConfiguredParams = function(e, t, n) {
				return e.filter((function(e) {
					return e.code === t
				})).map((function(e) {
					return e.bids
				})).reduce(B, []).filter((function(e) {
					return e.bidder === n
				})).map((function(e) {
					return e.params || {}
				}))
			}, a.getOrigin = function() {
				return window.location.origin ? window.location.origin : window.location.protocol +
					"//" + window.location.hostname + (window.location.port ? ":" + window.location
						.port : "")
			}, a.getDNT = function() {
				return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" ===
					navigator.msDoNotTrack || "yes" === navigator.doNotTrack
			}, a.isAdUnitCodeMatchingSlot = function(t) {
				return function(e) {
					return N(t, e)
				}
			}, a.isSlotMatchingAdUnitCode = function(t) {
				return function(e) {
					return N(e, t)
				}
			}, a.unsupportedBidderMessage = function(e, t) {
				var n = Object.keys(e.mediaTypes || {
					banner: "banner"
				}).join(", ");
				return "\n    " + e.code + " is a " + n +
					" ad unit\n    containing bidders that don't support " + n + ": " + t +
					".\n    This bidder won't fetch demand.\n  "
			}, a.deletePropertyFromObject = function(e, t) {
				var n = r({}, e);
				return delete n[t], n
			}, a.removeRequestId = function(e) {
				return a.deletePropertyFromObject(e, "requestId")
			}, a.isInteger = function(e) {
				return Number.isInteger ? Number.isInteger(e) : "number" == typeof e &&
					isFinite(e) && Math.floor(e) === e
			}, a.convertCamelToUnderscore = function(e) {
				return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
					return "_" + t.toLowerCase()
				})).replace(/^_/, "")
			}, a.transformBidderParamKeywords = function(e) {
				var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
					"keywords",
					i = [];
				return a._each(e, (function(e, t) {
					if (a.isArray(e)) {
						var n = [];
						a._each(e, (function(e) {
							((e = a.getValueString(r + "." + t, e)) || "" === e) && n.push(e)
						})), e = n
					} else {
						if (e = a.getValueString(r + "." + t, e), !a.isStr(e)) return;
						e = [e]
					}
					i.push({
						key: t,
						value: e
					})
				})), i
			}, a.convertTypes = function(r, i) {
				return Object.keys(r).forEach((function(e) {
					var t, n;
					i[e] && (a.isFn(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e],
						"string" === t ? n && n.toString() : "number" === t ? Number(n) :
						n), isNaN(i[e]) && delete i.key)
				})), i
			};
		var n = t(3),
			i = c(t(67)),
			o = c(t(10)),
			u = c(t(7)),
			s = t(11);

		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var f = t(4),
			l = !1,
			g = Object.prototype.toString,
			p = Boolean(window.console),
			v = Boolean(p && window.console.log),
			y = Boolean(p && window.console.info),
			m = Boolean(p && window.console.warn),
			b = Boolean(p && window.console.error);
		a.replaceTokenInString = function(i, e, o) {
			return a._each(e, (function(e, t) {
				e = void 0 === e ? "" : e;
				var n = o + t.toUpperCase() + o,
					r = new RegExp(n, "g");
				i = i.replace(r, e)
			})), i
		};
		var h, S = (h = 0, function() {
			return ++h
		});

		function E() {
			return S() + Math.random().toString(16).substr(2)
		}

		function T(e) {
			if (a.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return
				e[0] + "x" + e[1]
		}

		function A(e, t) {
			return e = [].slice.call(e), t && e.unshift(t), e.unshift(
				"display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"
			), e.unshift("%cPrebid"), e
		}
		a.getUniqueIdentifierStr = E, a.generateUUID = function e(t) {
			return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ?
				crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
			) >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
				/[018]/g, e)
		}, a.getBidIdParameter = function(e, t) {
			return t && t[e] ? t[e] : ""
		}, a.tryAppendQueryString = function(e, t, n) {
			return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
		}, a.parseQueryStringParameters = function(e) {
			var t = "";
			for (var n in e) e.hasOwnProperty(n) && (t += n + "=" +
				encodeURIComponent(e[n]) + "&");
			return t
		}, a.transformAdServerTargetingObj = function(t) {
			return t && 0 < Object.getOwnPropertyNames(t).length ? O(t).map((function(
				e) {
				return e + "=" + encodeURIComponent(R(t, e))
			})).join("&") : ""
		}, a.getTopWindowLocation = function() {
			if (a.inIframe()) {
				var e = void 0;
				try {
					e = a.getAncestorOrigins() || a.getTopFrameReferrer()
				} catch (e) {
					logInfo("could not obtain top window location", e)
				}
				if (e) return (0, s.parse)(e, {
					decodeSearchAsString: !0
				})
			}
			return a.getWindowLocation()
		}, a.getTopFrameReferrer = function() {
			try {
				window.top.location.toString();
				for (var e = "", t = void 0;
					(t = t ? t.parent : window).document && t.document.referrer && (e = t.document
						.referrer), t !== window.top;);
				return e
			} catch (e) {
				return window.document.referrer
			}
		}, a.getAncestorOrigins = function() {
			if (window.document.location && window.document.location.ancestorOrigins &&
				1 <= window.document.location.ancestorOrigins.length) return window.document
				.location.ancestorOrigins[window.document.location.ancestorOrigins.length -
					1]
		}, a.getWindowTop = function() {
			return window.top
		}, a.getWindowSelf = function() {
			return window.self
		}, a.getWindowLocation = function() {
			return window.location
		}, a.getTopWindowUrl = function() {
			var t = void 0;
			try {
				t = a.getTopWindowLocation().href
			} catch (e) {
				t = ""
			}
			return t
		}, a.getTopWindowReferrer = function() {
			try {
				return window.top.document.referrer
			} catch (e) {
				return document.referrer
			}
		}, a.logMessage = function() {
			I() && v && console.log.apply(console, A(arguments, "MESSAGE:"))
		}, a.logInfo = function() {
			I() && y && console.info.apply(console, A(arguments, "INFO:"))
		}, a.logWarn = function() {
			I() && m && console.warn.apply(console, A(arguments, "WARNING:"))
		}, a.logError = function() {
			I() && b && console.error.apply(console, A(arguments, "ERROR:"))
		}, a.hasConsoleLogger = function() {
			return v
		};
		var I = function() {
			if (!1 === n.config.getConfig("debug") && !1 === l) {
				var e = "TRUE" === _(f.DEBUG_MODE).toUpperCase();
				n.config.setConfig({
					debug: e
				}), l = !0
			}
			return !!n.config.getConfig("debug")
		};
		a.debugTurnedOn = I, a.createInvisibleIframe = function() {
			var e = document.createElement("iframe");
			return e.id = E(), e.height = 0, e.width = 0, e.border = "0px", e.hspace =
				"0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border =
				"0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style
				.display = "none", e
		};
		var _ = function(e) {
			var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
			return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
		};
		a.getParameterByName = _, a.hasValidBidRequest = function(e, n, t) {
			var r = !1;

			function i(e, t) {
				t === n[o] && (r = !0)
			}
			for (var o = 0; o < n.length; o++)
				if (r = !1, a._each(e, i), !r) return a.logError(
					"Params are missing for bid request. One of these required paramaters are missing: " +
					n, t), !1;
			return !0
		}, a.addEventHandler = function(e, t, n) {
			e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent(
				"on" + t, n)
		}, a.isA = function(e, t) {
			return g.call(e) === "[object " + t + "]"
		}, a.isFn = function(e) {
			return a.isA(e, "Function")
		}, a.isStr = function(e) {
			return a.isA(e, "String")
		}, a.isArray = function(e) {
			return a.isA(e, "Array")
		}, a.isNumber = function(e) {
			return a.isA(e, "Number")
		}, a.isPlainObject = function(e) {
			return a.isA(e, "Object")
		}, a.isBoolean = function(e) {
			return a.isA(e, "Boolean")
		}, a.isEmpty = function(e) {
			if (!e) return !0;
			if (a.isArray(e) || a.isStr(e)) return !(0 < e.length);
			for (var t in e)
				if (hasOwnProperty.call(e, t)) return !1;
			return !0
		}, a.isEmptyStr = function(e) {
			return a.isStr(e) && (!e || 0 === e.length)
		}, a._each = function(e, t) {
			if (!a.isEmpty(e)) {
				if (a.isFn(e.forEach)) return e.forEach(t, this);
				var n = 0,
					r = e.length;
				if (0 < r)
					for (; n < r; n++) t(e[n], n, e);
				else
					for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
			}
		}, a.contains = function(e, t) {
			if (a.isEmpty(e)) return !1;
			if (a.isFn(e.indexOf)) return -1 !== e.indexOf(t);
			for (var n = e.length; n--;)
				if (e[n] === t) return !0;
			return !1
		}, a.indexOf = (function() {
			if (Array.prototype.indexOf) return Array.prototype.indexOf
		})(), a._map = function(n, r) {
			if (a.isEmpty(n)) return [];
			if (a.isFn(n.map)) return n.map(r);
			var i = [];
			return a._each(n, (function(e, t) {
				i.push(r(e, t, n))
			})), i
		};
		var w = function(e, t) {
			return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor
				.prototype[t] !== e[t]
		};

		function C(e, t, n) {
			return n.indexOf(e) === t
		}

		function B(e, t) {
			return e.concat(t)
		}

		function O(e) {
			return Object.keys(e)
		}

		function R(e, t) {
			return e[t]
		}
		a.insertElement = function(e, t, n) {
			var r = void 0,
				i = (t = t || document).getElementsByTagName("head");
			r = n ? t.getElementsByTagName(n) : i;
			try {
				if ((r = r.length ? r : t.getElementsByTagName("body")).length) {
					r = r[0];
					var o = i && i[0] === r ? null : r.firstChild;
					return r.insertBefore(e, o)
				}
			} catch (e) {}
		}, a.triggerPixel = function(e) {
			(new Image).src = e
		}, a.callBurl = function(e) {
			var t = e.source,
				n = e.burl;
			t === f.S2S.SRC && n && a.triggerPixel(n)
		}, a.insertHtmlIntoIframe = function(e) {
			if (e) {
				var t = document.createElement("iframe");
				t.id = a.getUniqueIdentifierStr(), t.width = 0, t.height = 0, t.hspace =
					"0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style
					.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling =
					"no", t.frameBorder = "0", t.allowtransparency = "true", a.insertElement(
						t, document, "body"), t.contentWindow.document.open(), t.contentWindow
					.document.write(e), t.contentWindow.document.close()
			}
		}, a.insertUserSyncIframe = function(e) {
			var t = a.createTrackPixelIframeHtml(e, !1,
					"allow-scripts allow-same-origin"),
				n = document.createElement("div");
			n.innerHTML = t;
			var r = n.firstChild;
			a.insertElement(r)
		}, a.createTrackPixelHtml = function(e) {
			if (!e) return "";
			var t =
				'<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
			return t += '<img src="' + encodeURI(e) + '"></div>'
		}, a.createTrackPixelIframeHtml = function(e) {
			var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
				n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
			return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="' + n + '"'),
				"<iframe " + n + ' id="' + a.getUniqueIdentifierStr() +
				'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' +
				e + '">\n    </iframe>') : ""
		}, a.getIframeDocument = function(e) {
			if (e) {
				var t = void 0;
				try {
					t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ?
						e.contentDocument.document : e.contentDocument
				} catch (e) {
					a.logError("Cannot get iframe document", e)
				}
				return t
			}
		}, a.getValueString = function(e, t, n) {
			return null == t ? n : a.isStr(t) ? t : a.isNumber(t) ? t.toString() :
				void a.logWarn("Unsuported type for param: " + e +
					" required type: String")
		};
		a.getHighestCpm = U("timeToRespond", (function(e, t) {
			return t < e
		})), a.getOldestHighestCpmBid = U("responseTimestamp", (function(e, t) {
			return t < e
		})), a.getLatestHighestCpmBid = U("responseTimestamp", (function(e, t) {
			return e < t
		}));

		function U(n, r) {
			return function(e, t) {
				return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
			}
		}
		var N = function(e, t) {
			return e.getAdUnitPath() === t || e.getSlotElementId() === t
		}
	},
	1: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = function(e, t) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return (function(e, t) {
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) &&
							(n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, o = e
					} finally {
						try {
							!r && d.return && d.return()
						} finally {
							if (i) throw o
						}
					}
					return n
				})(e, t);
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance")
			},
			p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			},
			v = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			};
		t.registerBidder = function(t) {
			var n = Array.isArray(t.supportedMediaTypes) ? {
				supportedMediaTypes: t.supportedMediaTypes
			} : void 0;

			function r(e) {
				var t = g(e);
				i.default.registerBidAdapter(t, e.code, n)
			}
			r(t), Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
				i.default.aliasRegistry[e] = t.code, r(v({}, t, {
					code: e
				}))
			}))
		}, t.newBidder = g, t.isValid = S;
		var r = f(n(27)),
			i = f(n(8)),
			o = n(3),
			y = f(n(16)),
			a = n(18),
			d = n(17),
			u = n(41),
			m = f(n(4)),
			b = f(n(9)),
			s = f(n(7)),
			h = n(0);

		function f(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var l = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];

		function g(f) {
			return v(new r.default(f.code), {
				getSpec: function() {
					return Object.freeze(f)
				},
				registerSyncs: l,
				callBids: function(o, a, e, n) {
					if (Array.isArray(o.bids)) {
						var d = {},
							u = [],
							t = o.bids.filter(g);
						if (0 !== t.length) {
							var s = {};
							t.forEach((function(e) {
								(s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
							}));
							var r = f.buildRequests(t, o);
							if (r && 0 !== r.length) {
								Array.isArray(r) || (r = [r]);
								var c = (0, h.delayExecution)(i, r.length);
								r.forEach((function(i) {
									switch (i.method) {
										case "GET":
											n("" + i.url + (function(e) {
												if (e) return "?" + ("object" === (void 0 === e ?
														"undefined" : p(e)) ? (0, h.parseQueryStringParameters)
													(e) : e);
												return ""
											})(i.data), {
												success: e,
												error: t
											}, void 0, v({
												method: "GET",
												withCredentials: !0
											}, i.options));
											break;
										case "POST":
											n(i.url, {
													success: e,
													error: t
												}, "string" == typeof i.data ? i.data : JSON.stringify(i.data),
												v({
													method: "POST",
													contentType: "text/plain",
													withCredentials: !0
												}, i.options));
											break;
										default:
											(0, h.logWarn)("Skipping invalid request from " + f.code +
												". Request type " + i.type + " must be GET or POST"), c()
									}

									function e(e, t) {
										try {
											e = JSON.parse(e)
										} catch (e) {}
										e = {
											body: e,
											headers: {
												get: t.getResponseHeader.bind(t)
											}
										}, u.push(e);
										var n = void 0;
										try {
											n = f.interpretResponse(e, i)
										} catch (e) {
											return (0, h.logError)("Bidder " + f.code +
												" failed to interpret the server's response. Continuing without bids",
												null, e), void c()
										}

										function r(e) {
											var t, n, r = s[e.requestId];
											if (r) {
												var i = v(y.default.createBid(m.default.STATUS.GOOD, r), e);
												t = r.adUnitCode, n = i, d[t] = !0, S(t, n, [o]) && a(t, n)
											} else(0, h.logWarn)("Bidder " + f.code +
												" made bid for unknown request ID: " + e.requestId +
												". Ignoring.")
										}
										n && (n.forEach ? n.forEach(r) : r(n)), c(n)
									}

									function t(e) {
										(0, h.logError)("Server call for " + f.code + " failed: " + e +
											". Continuing without bids."), c()
									}
								}))
							} else i()
						} else i()
					}

					function i() {
						e(), b.default.emit(m.default.EVENTS.BIDDER_DONE, o), l(u, o.gdprConsent)
					}
				}
			});

			function l(e, t) {
				if (f.getUserSyncs) {
					var n = o.config.getConfig("userSync.filterSettings"),
						r = f.getUserSyncs({
							iframeEnabled: !!(o.config.getConfig("userSync.iframeEnabled") || n &&
								(n.iframe || n.all)),
							pixelEnabled: !!(o.config.getConfig("userSync.pixelEnabled") || n &&
								(n.image || n.all))
						}, e, t);
					r && (Array.isArray(r) || (r = [r]), r.forEach((function(e) {
						a.userSync.registerSync(e.type, f.code, e.url)
					})))
				}
			}

			function g(e) {
				return !!f.isBidRequestValid(e) || ((0, h.logWarn)(
					"Invalid bid sent to bidder " + f.code + ": " + JSON.stringify(e)), !1)
			}
		}

		function S(e, t, n) {
			function r(e) {
				return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
			}
			return e ? t ? (i = Object.keys(t), l.every((function(e) {
					return (0, s.default)(i, e) && !(0, s.default)([void 0, null], t[e])
				})) ? "native" !== t.mediaType || (0, d.nativeBidIsValid)(t, n) ?
				"video" !== t.mediaType || (0, u.isValidVideoBid)(t, n) ? !("banner" ===
					t.mediaType && !(function(e, t, n) {
						if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return
							!0;
						var r = (0, h.getBidderRequest)(n, t.bidderCode, e),
							i = r && r.bids && r.bids[0] && r.bids[0].sizes,
							o = (0, h.parseSizesInput)(i);
						if (1 !== o.length) return !1;
						var a = o[0].split("x"),
							d = c(a, 2),
							u = d[0],
							s = d[1];
						return t.width = u, t.height = s, !0
					})(e, t, n)) || ((0, h.logError)(r(
					"Banner bids require a width and height")), !1) : ((0, h.logError)(r(
					"Video bid does not have required vastUrl or renderer property")), !1) :
				((0, h.logError)(r("Native bid missing some required properties.")), !1) :
				((0, h.logError)(r("Bidder " + t.bidderCode +
					" is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."
				)), !1)) : ((0, h.logWarn)(
				"Some adapter tried to add an undefined bid for " + e + "."), !1) : ((0,
				h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
			var i
		}
	},
	10: function(e, t, n) {
		n(47), e.exports = n(13).Array.find
	},
	11: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = function(e, t) {
			if (Array.isArray(e)) return e;
			if (Symbol.iterator in Object(e)) return (function(e, t) {
				var n = [],
					r = !0,
					i = !1,
					o = void 0;
				try {
					for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) &&
						(n.push(a.value), !t || n.length !== t); r = !0);
				} catch (e) {
					i = !0, o = e
				} finally {
					try {
						!r && d.return && d.return()
					} finally {
						if (i) throw o
					}
				}
				return n
			})(e, t);
			throw new TypeError(
				"Invalid attempt to destructure non-iterable instance")
		};

		function i(e) {
			return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
				var n = t.split("="),
					r = a(n, 2),
					i = r[0],
					o = r[1];
				return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [], e[i]
					.push(o)) : e[i] = o || "", e
			}), {}) : {}
		}

		function r(e) {
			return Object.keys(e).map((function(t) {
				return Array.isArray(e[t]) ? e[t].map((function(e) {
					return t + "[]=" + e
				})).join("&") : t + "=" + e[t]
			})).join("&")
		}
		t.parseQS = i, t.formatQS = r, t.parse = function(e, t) {
			var n = document.createElement("a");
			t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href =
				decodeURIComponent(e);
			var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
			return {
				href: n.href,
				protocol: (n.protocol || "").replace(/:$/, ""),
				hostname: n.hostname,
				port: +n.port,
				pathname: n.pathname.replace(/^(?!\/)/, "/"),
				search: r ? n.search : i(n.search || ""),
				hash: (n.hash || "").replace(/^#/, ""),
				host: n.host || window.location.host
			}
		}, t.format = function(e) {
			return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ?
				":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search ||
				"") : "") + (e.hash ? "#" + e.hash : "")
		}
	},
	12: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Renderer = o, t.isRendererRequired = function(e) {
			return !(!e || !e.url)
		}, t.executeRenderer = function(e, t) {
			e.render(t)
		};
		var r, f = n(28),
			l = (function(e) {
				{
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] =
							e[n]);
					return t.default = e, t
				}
			})(n(0)),
			i = n(10),
			g = (r = i) && r.__esModule ? r : {
				default: r
			};

		function o(e) {
			var t, n, r, i = this,
				o = e.url,
				a = e.config,
				d = e.id,
				u = e.callback,
				s = e.loaded,
				c = e.adUnitCode;
			this.url = o, this.config = a, this.handlers = {}, this.id = d, this.loaded =
				s, this.cmd = [], this.push = function(e) {
					"function" == typeof e ? i.loaded ? e.call() : i.cmd.push(e) : l.logError(
						"Commands given to Renderer.push must be wrapped in a function")
				}, this.callback = u || function() {
					i.loaded = !0, i.process()
				}, t = c, n = pbjs.adUnits, (r = (0, g.default)(n, (function(e) {
					return e.code === t
				}))) && r.renderer && r.renderer.url && r.renderer.render ? l.logWarn(
					"External Js not loaded by Renderer since renderer url and callback is already defined on adUnit " +
					c) : (0, f.loadScript)(o, this.callback, !0)
		}
		o.install = function(e) {
			return new o({
				url: e.url,
				config: e.config,
				id: e.id,
				callback: e.callback,
				loaded: e.loaded,
				adUnitCode: e.adUnitCode
			})
		}, o.prototype.getConfig = function() {
			return this.config
		}, o.prototype.setRender = function(e) {
			this.render = e
		}, o.prototype.setEventHandlers = function(e) {
			this.handlers = e
		}, o.prototype.handleVideoEvent = function(e) {
			var t = e.id,
				n = e.eventName;
			"function" == typeof this.handlers[n] && this.handlers[n](), l.logMessage(
				"Prebid Renderer event for id " + t + " type " + n)
		}, o.prototype.process = function() {
			for (; 0 < this.cmd.length;) try {
				this.cmd.shift().call()
			} catch (e) {
				l.logError("Error processing Renderer command: ", e)
			}
		}
	},
	120: function(e, t, n) {
		"use strict";
		var r = n(14),
			i = n(34)(6),
			o = "findIndex",
			a = !0;
		o in [] && Array(1)[o]((function() {
			a = !1
		})), r(r.P + r.F * a, "Array", {
			findIndex: function(e) {
				return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
			}
		}), n(26)(o)
	},
	13: function(e, t) {
		var n = e.exports = {
			version: "2.5.7"
		};
		"number" == typeof __e && (__e = n)
	},
	14: function(e, t, n) {
		var v = n(19),
			y = n(13),
			m = n(32),
			b = n(49),
			h = n(56),
			S = "prototype",
			E = function(e, t, n) {
				var r, i, o, a = e & E.F,
					d = e & E.G,
					u = e & E.S,
					s = e & E.P,
					c = e & E.B,
					f = e & E.W,
					l = d ? y : y[t] || (y[t] = {}),
					g = l[S],
					p = d ? v : u ? v[t] : (v[t] || {})[S];
				for (r in d && (n = t), n)(i = !a && p && void 0 !== p[r]) && h(l, r) ||
					(o = i ? p[r] : n[r], l[r] = d && "function" != typeof p[r] ? n[r] : c &&
						i ? m(o, v) : f && p[r] == o ? (function(r) {
							var e = function(e, t, n) {
								if (this instanceof r) {
									switch (arguments.length) {
										case 0:
											return new r;
										case 1:
											return new r(e);
										case 2:
											return new r(e, t)
									}
									return new r(e, t, n)
								}
								return r.apply(this, arguments)
							};
							return e[S] = r[S], e
						})(o) : s && "function" == typeof o ? m(Function.call, o) : o, s && ((l
							.virtual || (l.virtual = {}))[r] = o, e & E.R && g && !g[r] && b(g, r,
							o)))
			};
		E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128,
			e.exports = E
	},
	15: function(e, t) {
		e.exports = function(e) {
			return "object" == typeof e ? null !== e : "function" == typeof e
		}
	},
	16: function(e, t, n) {
		"use strict";
		var o = n(0);

		function r(e, t) {
			var n = t && t.bidId || o.getUniqueIdentifierStr(),
				r = t && t.src || "client",
				i = e || 0;
			this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0,
				this.statusMessage = (function() {
					switch (i) {
						case 0:
							return "Pending";
						case 1:
							return "Bid available";
						case 2:
							return "Bid returned empty or error response";
						case 3:
							return "Bid timed out"
					}
				})(), this.adId = n, this.mediaType = "banner", this.source = r, this.getStatusCode =
				function() {
					return i
				}, this.getSize = function() {
					return this.width + "x" + this.height
				}
		}
		t.createBid = function(e, t) {
			return new r(e, t)
		}
	},
	17: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS =
			t.nativeAdapters = void 0;
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			};
		t.processNativeAdUnitParams = function(e) {
			if (e && e.type && (t = e.type, t && (0, d.default)(Object.keys(c), t) ||
					((0, a.logError)(t + " nativeParam is not supported"), 0))) return c[e.type];
			var t;
			return e
		}, t.nativeBidIsValid = function(t, e) {
			var n = (0, a.getBidRequest)(t.adId, e);
			if (!n) return !1;
			if (!(0, a.deepAccess)(t, "native.clickUrl")) return !1;
			if ((0, a.deepAccess)(t, "native.image") && (!(0, a.deepAccess)(t,
					"native.image.height") || !(0, a.deepAccess)(t, "native.image.width")))
				return !1;
			if ((0, a.deepAccess)(t, "native.icon") && (!(0, a.deepAccess)(t,
					"native.icon.height") || !(0, a.deepAccess)(t, "native.icon.width")))
				return !1;
			var r = n.nativeParams;
			if (!r) return !0;
			var i = Object.keys(r).filter((function(e) {
					return r[e].required
				})),
				o = Object.keys(t.native).filter((function(e) {
					return t.native[e]
				}));
			return i.every((function(e) {
				return (0, d.default)(o, e)
			}))
		}, t.fireNativeTrackers = function(e, t) {
			var n = void 0;
			"click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native &&
				t.native.impressionTrackers, t.native && t.native.javascriptTrackers &&
				(0, a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
			(n || []).forEach(a.triggerPixel)
		}, t.getNativeTargeting = function(r) {
			var i = {};
			return Object.keys(r.native).forEach((function(e) {
				var t = u.NATIVE_KEYS[e],
					n = r.native[e];
				"object" === (void 0 === n ? "undefined" : o(n)) && n.url && (n = n.url),
					t && n && (i[t] = n)
			})), i
		};
		var r, a = n(0),
			i = n(7),
			d = (r = i) && r.__esModule ? r : {
				default: r
			};
		var u = n(4),
			s = t.nativeAdapters = [],
			c = (t.NATIVE_TARGETING_KEYS = Object.keys(u.NATIVE_KEYS).map((function(e) {
				return u.NATIVE_KEYS[e]
			})), {
				image: {
					image: {
						required: !0
					},
					title: {
						required: !0
					},
					sponsoredBy: {
						required: !0
					},
					clickUrl: {
						required: !0
					},
					body: {
						required: !1
					},
					icon: {
						required: !1
					}
				}
			});
		t.nativeAdUnit = function(e) {
			var t = "native" === e.mediaType,
				n = (0, a.deepAccess)(e, "mediaTypes.native");
			return t || n
		};
		var f = t.nativeBidder = function(e) {
			return (0, d.default)(s, e.bidder)
		};
		t.hasNonNativeBidder = function(e) {
			return e.bids.filter((function(e) {
				return !f(e)
			})).length
		}
	},
	18: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.userSync = void 0;
		var i = function(e, t) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return (function(e, t) {
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) &&
							(n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, o = e
					} finally {
						try {
							!r && d.return && d.return()
						} finally {
							if (i) throw o
						}
					}
					return n
				})(e, t);
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance")
			},
			s = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			};
		t.newUserSync = a;
		var r, c = (function(e) {
				{
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] =
							e[n]);
					return t.default = e, t
				}
			})(n(0)),
			f = n(3),
			o = n(7),
			l = (r = o) && r.__esModule ? r : {
				default: r
			};

		function a(e) {
			var t = {},
				o = {
					image: [],
					iframe: []
				},
				n = !1,
				a = {},
				d = {
					image: !1,
					iframe: !1
				},
				u = e.config;

			function r() {
				if (u.syncEnabled && e.browserSupportsCookies && !n) {
					try {
						!(function() {
							if (!u.pixelEnabled && !d.image) return;
							c.shuffle(o.image).forEach((function(e) {
								var t = i(e, 2),
									n = t[0],
									r = t[1];
								c.logMessage("Invoking image pixel user sync for bidder: " + n),
									c.triggerPixel(r)
							}))
						})(), (function() {
							if (!u.iframeEnabled && !d.iframe) return;
							c.shuffle(o.iframe).forEach((function(e) {
								var t = i(e, 2),
									n = t[0],
									r = t[1];
								c.logMessage("Invoking iframe user sync for bidder: " + n), c.insertUserSyncIframe(
									r)
							}))
						})()
					} catch (e) {
						return c.logError("Error firing user syncs", e)
					}
					o = {
						image: [],
						iframe: []
					}, n = !0
				}
			}
			return f.config.getConfig("userSync", (function(e) {
				u = s(u, e.userSync)
			})), t.registerSync = function(e, t, n) {
				if (!u.syncEnabled || !c.isArray(o[e])) return c.logWarn(
					'User sync type "' + e + '" not supported');
				if (!t) return c.logWarn("Bidder is required for registering sync");
				if (0 !== u.syncsPerBidder && Number(a[t]) >= u.syncsPerBidder) return c
					.logWarn('Number of user syncs exceeded for "' + t + '"');
				if (u.filterSettings) {
					if (function(e, t) {
							var n = u.filterSettings;
							if (function(e, t) {
									if (e.all && e[t]) return c.logWarn(
										'Detected presence of the "filterSettings.all" and "filterSettings.' +
										t +
										'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
									), !1;
									var n = e.all ? e.all : e[t],
										r = e.all ? "all" : t;
									if (!n) return !1;
									var i = n.filter,
										o = n.bidders;
									if (i && "include" !== i && "exclude" !== i) return c.logWarn(
											'UserSync "filterSettings.' + r + ".filter\" setting '" + i +
											"' is not a valid option; use either 'include' or 'exclude'."), !
										1;
									return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(
										(function(e) {
											return c.isStr(e) && "*" !== e
										}))) || (c.logWarn(
										'Detected an invalid setup in userSync "filterSettings.' + r +
										".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
									), !1)
								}(n, e)) {
								d[e] = !0;
								var r = n.all ? n.all : n[e],
									i = "*" === r.bidders ? [t] : r.bidders,
									o = r.filter || "include",
									a = {
										include: function(e, t) {
											return !(0, l.default)(e, t)
										},
										exclude: function(e, t) {
											return (0, l.default)(e, t)
										}
									};
								return a[o](i, t)
							}
							return !1
						}(e, t)) return c.logWarn("Bidder '" + t +
						"' is not permitted to register their userSync " + e +
						" pixels as per filterSettings config.")
				} else if (u.enabledBidders && u.enabledBidders.length && u.enabledBidders
					.indexOf(t) < 0) return c.logWarn('Bidder "' + t +
					'" not permitted to register their userSync pixels.');
				var r, i;
				o[e].push([t, n]), (r = a)[i = t] ? r[i] += 1 : r[i] = 1, a = r
			}, t.syncUsers = function() {
				var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] :
					0;
				if (e) return setTimeout(r, Number(e));
				r()
			}, t.triggerUserSyncs = function() {
				u.enableOverride && t.syncUsers()
			}, t
		}
		f.config.setDefaults({
			userSync: {
				syncEnabled: !0,
				pixelEnabled: !0,
				syncsPerBidder: 5,
				syncDelay: 3e3
			}
		});
		var d = !c.isSafariBrowser() && c.cookiesAreEnabled();
		t.userSync = a({
			config: f.config.getConfig("userSync"),
			browserSupportsCookies: d
		})
	},
	19: function(e, t) {
		var n = e.exports = "undefined" != typeof window && window.Math == Math ?
			window : "undefined" != typeof self && self.Math == Math ? self : Function(
				"return this")();
		"number" == typeof __g && (__g = n)
	},
	2: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner"
	},
	20: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			},
			u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			};
		t.createHook = function(r, i, e) {
			var d = [{
					fn: i,
					priority: 0
				}],
				o = {
					sync: function() {
						for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++)
							n[r] = arguments[r];
						d.forEach((function(e) {
							e.fn.apply(t, n)
						}))
					},
					asyncSeries: function() {
						for (var o = this, e = arguments.length, t = Array(e), n = 0; n < e; n++)
							t[n] = arguments[n];
						var a = 0;
						return d[a].fn.apply(this, t.concat((function e() {
							for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[
								r] = arguments[r];
							var i = d[++a];
							if ("object" === (void 0 === i ? "undefined" : u(i)) &&
								"function" == typeof i.fn) return i.fn.apply(o, n.concat(e))
						})))
					}
				};
			if (!o[r]) throw "invalid hook type";
			var t = {
				addHook: function(e) {
					var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
						10;
					"function" == typeof e && (d.push({
						fn: e,
						priority: t
					}), d.sort((function(e, t) {
						return t.priority - e.priority
					})))
				},
				removeHook: function(t) {
					d = d.filter((function(e) {
						return e.fn === i || e.fn !== t
					}))
				},
				hasHook: function(t) {
					return d.some((function(e) {
						return e.fn === t
					}))
				}
			};
			"string" == typeof e && (s[e] = t);
			return a((function() {
				for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] =
					arguments[n];
				return 1 !== d.length || d[0].fn !== i ? o[r].apply(this, t) : i.apply(
					this, t)
			}), t)
		};
		var s = t.hooks = {}
	},
	21: function(e, t, n) {
		n(120), e.exports = n(13).Array.findIndex
	},
	22: function(e, t, n) {
		e.exports = !n(33)((function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	},
	23: function(e, t) {
		var n = {}.toString;
		e.exports = function(e) {
			return n.call(e).slice(8, -1)
		}
	},
	234: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.store = function(e, t) {
			var n = {
				puts: e.map(a)
			};
			(0, i.ajax)(o.config.getConfig("cache.url"), (r = t, {
				success: function(e) {
					var t = void 0;
					try {
						t = JSON.parse(e).responses
					} catch (e) {
						return void r(e, [])
					}
					t ? r(null, t) : r(new Error(
						"The cache server didn't respond with a responses property."), [])
				},
				error: function(e, t) {
					r(new Error("Error storing video ad in the cache: " + e + ": " +
						JSON.stringify(t)), [])
				}
			}), JSON.stringify(n), {
				contentType: "text/plain",
				withCredentials: !0
			});
			var r
		}, t.getCacheUrl = function(e) {
			return o.config.getConfig("cache.url") + "?uuid=" + e
		};
		var i = n(6),
			o = n(3);

		function a(e) {
			var t, n;
			return {
				type: "xml",
				value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl,
					'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' +
					t + "]]></VASTAdTagURI>\n        <Impression>" + (n ? "<![CDATA[" + n +
						"]]>" : "") +
					"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
				),
				ttlseconds: Number(e.ttl)
			}
		}
	},
	24: function(e, t) {
		e.exports = function(e) {
			if (null == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	},
	25: function(e, t, n) {
		var r = n(60)("wks"),
			i = n(62),
			o = n(19).Symbol,
			a = "function" == typeof o;
		(e.exports = function(e) {
			return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
		}).store = r
	},
	26: function(e, t) {
		e.exports = function() {}
	},
	27: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = function(e) {
			var t = e;
			return {
				callBids: function() {},
				setBidderCode: function(e) {
					t = e
				},
				getBidderCode: function() {
					return t
				}
			}
		}
	},
	28: function(e, t, n) {
		"use strict";
		var r, i = n(7),
			o = (r = i) && r.__esModule ? r : {
				default: r
			},
			a = (function(e) {
				{
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] =
							e[n]);
					return t.default = e, t
				}
			})(n(0));
		var d = {},
			u = ["criteo"];

		function s(e, t) {
			var n = document.createElement("script");
			n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (
				n.readyState ? n.onreadystatechange = function() {
					"loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange =
						null, t())
				} : n.onload = function() {
					t()
				}), n.src = e;
			var r = document.getElementsByTagName("head");
			(r = r.length ? r : document.getElementsByTagName("body")).length && (r =
				r[0]).insertBefore(n, r.firstChild)
		}
		t.loadExternalScript = function(e, t) {
			if (t && e)
				if ((0, o.default)(u, t)) {
					if (!d[e]) {
						a.logWarn("module " + t + " is loading external JavaScript");
						var n = document.createElement("script");
						n.type = "text/javascript", n.async = !0, n.src = e, a.insertElement(n),
							d[e] = !0
					}
				} else a.logError(t + " not whitelisted for loading external JavaScript");
			else a.logError("cannot load external script without url and moduleCode")
		}, t.loadScript = function(t, e, n) {
			t ? n ? d[t] ? e && "function" == typeof e && (d[t].loaded ? e() : d[t].callbacks
				.push(e)) : (d[t] = {
				loaded: !1,
				callbacks: []
			}, e && "function" == typeof e && d[t].callbacks.push(e), s(t, (
				function() {
					d[t].loaded = !0;
					try {
						for (var e = 0; e < d[t].callbacks.length; e++) d[t].callbacks[e]()
					} catch (e) {
						a.logError("Error executing callback", "adloader.js:loadScript", e)
					}
				}))) : s(t, e) : a.logError("Error attempting to request empty URL",
				"adloader.js:loadScript")
		}
	},
	29: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.auctionManager = void 0, t.newAuctionManager = u;
		var r, o = n(0),
			s = n(44),
			i = n(10),
			a = (r = i) && r.__esModule ? r : {
				default: r
			};
		var d = n(4);

		function u() {
			var u = [],
				i = {};
			return i.addWinningBid = function(t) {
				var e = (0, a.default)(u, (function(e) {
					return e.getAuctionId() === t.auctionId
				}));
				e ? e.addWinningBid(t) : utils.logWarn(
					"Auction not found when adding winning bid")
			}, i.getAllWinningBids = function() {
				return u.map((function(e) {
					return e.getWinningBids()
				})).reduce(o.flatten, [])
			}, i.getBidsRequested = function() {
				return u.map((function(e) {
					return e.getBidRequests()
				})).reduce(o.flatten, [])
			}, i.getNoBids = function() {
				return u.map((function(e) {
					return e.getNoBids()
				})).reduce(o.flatten, [])
			}, i.getBidsReceived = function() {
				return u.map((function(e) {
					if (e.getAuctionStatus() === s.AUCTION_COMPLETED) return e.getBidsReceived()
				})).reduce(o.flatten, []).filter((function(e) {
					return e
				}))
			}, i.getAdUnits = function() {
				return u.map((function(e) {
					return e.getAdUnits()
				})).reduce(o.flatten, [])
			}, i.getAdUnitCodes = function() {
				return u.map((function(e) {
					return e.getAdUnitCodes()
				})).reduce(o.flatten, []).filter(o.uniques)
			}, i.createAuction = function(e) {
				var t, n = e.adUnits,
					r = e.adUnitCodes,
					i = e.callback,
					o = e.cbTimeout,
					a = e.labels,
					d = (0, s.newAuction)({
						adUnits: n,
						adUnitCodes: r,
						callback: i,
						cbTimeout: o,
						labels: a
					});
				return t = d, u.push(t), d
			}, i.findBidByAdId = function(t) {
				return (0, a.default)(u.map((function(e) {
					return e.getBidsReceived()
				})).reduce(o.flatten, []), (function(e) {
					return e.adId === t
				}))
			}, i.getStandardBidderAdServerTargeting = function() {
				return (0, s.getStandardBidderSettings)()[d.JSON_MAPPING.ADSERVER_TARGETING]
			}, i.setStatusForBids = function(e, t) {
				var n = i.findBidByAdId(e);
				if (n && (n.status = t), n && t === d.BID_STATUS.BID_TARGETING_SET) {
					var r = (0, a.default)(u, (function(e) {
						return e.getAuctionId() === n.auctionId
					}));
					r && r.setBidTargeting(n)
				}
			}, i
		}
		t.auctionManager = u()
	},
	3: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.config = t.RANDOM = void 0;
		var u = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			},
			s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			};
		t.newConfig = d;
		var r = n(31),
			c = o(n(10)),
			f = o(n(7)),
			i = n(20);

		function o(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var l = n(0),
			g = !1,
			p = 3e3,
			v = window.location.origin,
			y = !0,
			m = !1,
			b = 400,
			a = t.RANDOM = "random",
			h = {};
		h[a] = !0, h.fixed = !0;
		var S = a,
			E = {
				LOW: "low",
				MEDIUM: "medium",
				HIGH: "high",
				AUTO: "auto",
				DENSE: "dense",
				CUSTOM: "custom"
			},
			T = "*";

		function d() {
			var o = [],
				a = void 0,
				d = void 0;

			function e() {
				function i(t) {
					return (0, c.default)(Object.keys(E), (function(e) {
						return t === E[e]
					}))
				}

				function o(e) {
					if (!e) return l.logError(
						"Prebid Error: no value passed to `setPriceGranularity()`"), !1;
					if ("string" == typeof e) i(e) || l.logWarn(
						"Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."
					);
					else if ("object" === (void 0 === e ? "undefined" : s(e)) && !(0, r.isValidPriceConfig)
						(e)) return l.logError(
						"Invalid custom price value passed to `setPriceGranularity()`"), !1;
					return !0
				}
				a = {}, d = {
					_debug: g,
					get debug() {
						return this._debug
					},
					set debug(e) {
						this._debug = e
					},
					_bidderTimeout: p,
					get bidderTimeout() {
						return this._bidderTimeout
					},
					set bidderTimeout(e) {
						this._bidderTimeout = e
					},
					_publisherDomain: v,
					get publisherDomain() {
						return this._publisherDomain
					},
					set publisherDomain(e) {
						this._publisherDomain = e
					},
					_priceGranularity: E.MEDIUM,
					set priceGranularity(e) {
						o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : E
							.MEDIUM : "object" === (void 0 === e ? "undefined" : s(e)) && (this
								._customPriceBucket = e, this._priceGranularity = E.CUSTOM, l.logMessage(
									"Using custom price granularity")))
					},
					get priceGranularity() {
						return this._priceGranularity
					},
					_customPriceBucket: {},
					get customPriceBucket() {
						return this._customPriceBucket
					},
					_mediaTypePriceGranularity: {},
					get mediaTypePriceGranularity() {
						return this._mediaTypePriceGranularity
					},
					set mediaTypePriceGranularity(n) {
						var r = this;
						this._mediaTypePriceGranularity = Object.keys(n).reduce((function(e,
							t) {
							return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r
								._priceGranularity : "object" === (void 0 === n ? "undefined" :
									s(n)) && (e[t] = n[t], l.logMessage(
									"Using custom price granularity for " + t)) : l.logWarn(
									"Invalid price granularity for media type: " + t), e
						}), {})
					},
					_sendAllBids: y,
					get enableSendAllBids() {
						return this._sendAllBids
					},
					set enableSendAllBids(e) {
						this._sendAllBids = e
					},
					_bidderSequence: S,
					get bidderSequence() {
						return this._bidderSequence
					},
					set bidderSequence(e) {
						h[e] ? this._bidderSequence = e : l.logWarn("Invalid order: " + e +
							". Bidder Sequence was not set.")
					},
					_timeoutBuffer: b,
					get timeoutBuffer() {
						return this._timeoutBuffer
					},
					set timeoutBuffer(e) {
						this._timeoutBuffer = e
					},
					_disableAjaxTimeout: m,
					get disableAjaxTimeout() {
						return this._disableAjaxTimeout
					},
					set disableAjaxTimeout(e) {
						this._disableAjaxTimeout = e
					}
				}
			}
			var t = (0, i.createHook)("asyncSeries", (function(n) {
				if ("object" === (void 0 === n ? "undefined" : s(n))) {
					var i, t, e = Object.keys(n),
						r = {};
					e.forEach((function(e) {
						var t = n[e];
						"object" === s(a[e]) && "object" === (void 0 === t ? "undefined" :
							s(t)) && (t = u({}, a[e], t)), r[e] = d[e] = t
					})), i = r, t = Object.keys(i), o.filter((function(e) {
						return (0, f.default)(t, e.topic)
					})).forEach((function(e) {
						var t, n, r;
						e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(
							t, n, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[n] = r, t))
					})), o.filter((function(e) {
						return e.topic === T
					})).forEach((function(e) {
						return e.callback(i)
					}))
				} else l.logError("setConfig options must be an object")
			}));
			return e(), {
				getConfig: function() {
					if (arguments.length <= 1 && "function" != typeof(arguments.length <=
							0 ? void 0 : arguments[0])) {
						var e = arguments.length <= 0 ? void 0 : arguments[0];
						return e ? l.deepAccess(d, e) : d
					}
					return function(e, t) {
						var n = t;
						return "string" != typeof e && (n = e, e = T), "function" == typeof n ?
							(o.push({
								topic: e,
								callback: n
							}), function() {
								o.splice(o.indexOf(t), 1)
							}) : void l.logError("listener must be a function")
					}.apply(void 0, arguments)
				},
				setConfig: t,
				setDefaults: function(e) {
					"object" === (void 0 === a ? "undefined" : s(a)) ? (u(a, e), u(d, e)) :
					l.logError("defaults must be an object")
				},
				resetConfig: e
			}
		}
		t.config = d()
	},
	30: function(Pr, Qr) {
		var Rr;
		Rr = (function() {
			return this
		})();
		try {
			Rr = Rr || Function("return this")() || eval("this")
		} catch (e) {
			"object" == typeof window && (Rr = window)
		}
		Pr.exports = Rr
	},
	31: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.isValidPriceConfig = t.getPriceBucketString = void 0;
		var r, i = n(10),
			v = (r = i) && r.__esModule ? r : {
				default: r
			};
		var o = n(0),
			y = 2,
			a = {
				buckets: [{
					min: 0,
					max: 5,
					increment: .5
				}]
			},
			d = {
				buckets: [{
					min: 0,
					max: 20,
					increment: .1
				}]
			},
			u = {
				buckets: [{
					min: 0,
					max: 20,
					increment: .01
				}]
			},
			s = {
				buckets: [{
					min: 0,
					max: 3,
					increment: .01
				}, {
					min: 3,
					max: 8,
					increment: .05
				}, {
					min: 8,
					max: 20,
					increment: .5
				}]
			},
			c = {
				buckets: [{
					min: 0,
					max: 5,
					increment: .05
				}, {
					min: 5,
					max: 10,
					increment: .1
				}, {
					min: 10,
					max: 20,
					increment: .5
				}]
			};

		function f(n, e, r) {
			var i = "";
			if (!m(e)) return i;
			var t, o, a, d, u, s, c, f, l, g = e.buckets.reduce((function(e, t) {
					return e.max > t.max ? e : t
				}), {
					max: 0
				}),
				p = (0, v.default)(e.buckets, (function(e) {
					if (n > g.max * r) {
						var t = e.precision;
						void 0 === t && (t = y), i = (e.max * r).toFixed(t)
					} else if (n <= e.max * r && n >= e.min * r) return e
				}));
			return p && (t = n, a = r, d = void 0 !== (o = p).precision ? o.precision :
				y, u = o.increment * a, s = o.min * a, c = Math.pow(10, d + 2), f = (t *
					c - s * c) / (u * c), l = Math.floor(f) * u + s, i = (l = Number(l.toFixed(
					10))).toFixed(d)), i
		}

		function m(e) {
			if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
			var t = !0;
			return e.buckets.forEach((function(e) {
				void 0 !== e.min && e.max && e.increment || (t = !1)
			})), t
		}
		t.getPriceBucketString = function(e, t) {
			var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] :
				1,
				r = parseFloat(e);
			return isNaN(r) && (r = ""), {
				low: "" === r ? "" : f(e, a, n),
				med: "" === r ? "" : f(e, d, n),
				high: "" === r ? "" : f(e, u, n),
				auto: "" === r ? "" : f(e, c, n),
				dense: "" === r ? "" : f(e, s, n),
				custom: "" === r ? "" : f(e, t, n)
			}
		}, t.isValidPriceConfig = m
	},
	32: function(e, t, n) {
		var o = n(48);
		e.exports = function(r, i, e) {
			if (o(r), void 0 === i) return r;
			switch (e) {
				case 1:
					return function(e) {
						return r.call(i, e)
					};
				case 2:
					return function(e, t) {
						return r.call(i, e, t)
					};
				case 3:
					return function(e, t, n) {
						return r.call(i, e, t, n)
					}
			}
			return function() {
				return r.apply(i, arguments)
			}
		}
	},
	33: function(e, t) {
		e.exports = function(e) {
			try {
				return !!e()
			} catch (e) {
				return !0
			}
		}
	},
	34: function(e, t, n) {
		var h = n(32),
			S = n(35),
			E = n(57),
			T = n(36),
			r = n(58);
		e.exports = function(f, e) {
			var l = 1 == f,
				g = 2 == f,
				p = 3 == f,
				v = 4 == f,
				y = 6 == f,
				m = 5 == f || y,
				b = e || r;
			return function(e, t, n) {
				for (var r, i, o = E(e), a = S(o), d = h(t, n, 3), u = T(a.length), s =
						0, c = l ? b(e, u) : g ? b(e, 0) : void 0; s < u; s++)
					if ((m || s in a) && (i = d(r = a[s], s, o), f))
						if (l) c[s] = i;
						else if (i) switch (f) {
					case 3:
						return !0;
					case 5:
						return r;
					case 6:
						return s;
					case 2:
						c.push(r)
				} else if (v) return !1;
				return y ? -1 : p || v ? v : c
			}
		}
	},
	35: function(e, t, n) {
		var r = n(23);
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
			return "String" == r(e) ? e.split("") : Object(e)
		}
	},
	36: function(e, t, n) {
		var r = n(37),
			i = Math.min;
		e.exports = function(e) {
			return 0 < e ? i(r(e), 9007199254740991) : 0
		}
	},
	37: function(e, t) {
		var n = Math.ceil,
			r = Math.floor;
		e.exports = function(e) {
			return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
		}
	},
	38: function(e, t, n) {
		var r = n(23);
		e.exports = Array.isArray || function(e) {
			return "Array" == r(e)
		}
	},
	39: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			};
		t.setSizeConfig = d, t.getLabels = function(e, t) {
			if (e.labelAll) return {
				labelAll: !0,
				labels: e.labelAll,
				activeLabels: t
			};
			return {
				labelAll: !1,
				labels: e.labelAny,
				activeLabels: t
			}
		}, t.sizeSupported = function(e) {
			var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
				v);
			return !t.shouldFilter || !!t.sizesSupported[e]
		}, t.resolveStatus = function() {
			var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				t = e.labels,
				n = void 0 === t ? [] : t,
				r = e.labelAll,
				i = void 0 !== r && r,
				o = e.activeLabels,
				a = void 0 === o ? [] : o,
				d = arguments[1],
				u = arguments[2],
				s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : v);
			d = (0, g.isPlainObject)(d) ? (0, g.deepClone)(d) : u ? {
				banner: {
					sizes: u
				}
			} : {};
			var c = (0, g.deepAccess)(d, "banner.sizes");
			s.shouldFilter && c && (d.banner.sizes = c.filter((function(e) {
				return s.sizesSupported[e]
			})));
			var f = Object.keys(d),
				l = {
					active: 1 < f.length || 1 === f.length && "banner" !== f[0] || "banner" ===
						f[0] && 0 < (0, g.deepAccess)(d, "banner.sizes.length") && (0 === n.length ||
							!i && (n.some((function(e) {
								return s.labels[e]
							})) || n.some((function(e) {
								return (0, p.default)(a, e)
							}))) || i && n.reduce((function(e, t) {
								return e ? s.labels[t] || (0, p.default)(a, t) : e
							}), !0)),
					mediaTypes: d
				};
			c && c.length !== d.banner.sizes.length && (l.filterResults = {
				before: c,
				after: d.banner.sizes
			});
			return l
		};
		var i, o = n(3),
			g = n(0),
			a = n(7),
			p = (i = a) && i.__esModule ? i : {
				default: i
			};
		var v = [];

		function d(e) {
			v = e
		}

		function y(e) {
			return e.reduce((function(n, e) {
				return "object" === (void 0 === e ? "undefined" : r(e)) && "string" ==
					typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(
						e.sizesSupported) && (n.shouldFilter = !0), ["labels",
						"sizesSupported"
					].forEach((function(t) {
						return (e[t] || []).forEach((function(e) {
							return n[t][e] = !0
						}))
					}))) : (0, g.logWarn)(
						'sizeConfig rule missing required property "mediaQuery"'), n
			}), {
				labels: {},
				sizesSupported: {},
				shouldFilter: !1
			})
		}
		o.config.getConfig("sizeConfig", (function(e) {
			return d(e.sizeConfig)
		}))
	},
	4: function(e, t) {
		e.exports = {
			JSON_MAPPING: {
				PL_CODE: "code",
				PL_SIZE: "sizes",
				PL_BIDS: "bids",
				BD_BIDDER: "bidder",
				BD_ID: "paramsd",
				BD_PL_ID: "placementId",
				ADSERVER_TARGETING: "adserverTargeting",
				BD_SETTING_STANDARD: "standard"
			},
			REPO_AND_VERSION: "prebid_prebid_1.36.0",
			DEBUG_MODE: "pbjs_debug",
			STATUS: {
				GOOD: 1,
				NO_BID: 2
			},
			CB: {
				TYPE: {
					ALL_BIDS_BACK: "allRequestedBidsBack",
					AD_UNIT_BIDS_BACK: "adUnitBidsBack",
					BID_WON: "bidWon",
					REQUEST_BIDS: "requestBids"
				}
			},
			EVENTS: {
				AUCTION_INIT: "auctionInit",
				AUCTION_END: "auctionEnd",
				BID_ADJUSTMENT: "bidAdjustment",
				BID_TIMEOUT: "bidTimeout",
				BID_REQUESTED: "bidRequested",
				BID_RESPONSE: "bidResponse",
				NO_BID: "noBid",
				BID_WON: "bidWon",
				BIDDER_DONE: "bidderDone",
				SET_TARGETING: "setTargeting",
				REQUEST_BIDS: "requestBids",
				ADD_AD_UNITS: "addAdUnits",
				AD_RENDER_FAILED: "adRenderFailed"
			},
			AD_RENDER_FAILED_REASON: {
				PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
				NO_AD: "noAd",
				EXCEPTION: "exception",
				CANNOT_FIND_AD: "cannotFindAd",
				MISSING_DOC_OR_ADID: "missingDocOrAdid"
			},
			EVENT_ID_PATHS: {
				bidWon: "adUnitCode"
			},
			GRANULARITY_OPTIONS: {
				LOW: "low",
				MEDIUM: "medium",
				HIGH: "high",
				AUTO: "auto",
				DENSE: "dense",
				CUSTOM: "custom"
			},
			TARGETING_KEYS: {
				BIDDER: "hb_bidder",
				AD_ID: "hb_adid",
				PRICE_BUCKET: "hb_pb",
				SIZE: "hb_size",
				DEAL: "hb_deal",
				SOURCE: "hb_source",
				FORMAT: "hb_format"
			},
			NATIVE_KEYS: {
				title: "hb_native_title",
				body: "hb_native_body",
				body2: "hb_native_body2",
				privacyLink: "hb_native_privacy",
				sponsoredBy: "hb_native_brand",
				image: "hb_native_image",
				icon: "hb_native_icon",
				clickUrl: "hb_native_linkurl",
				cta: "hb_native_cta",
				rating: "hb_native_rating"
			},
			S2S: {
				SRC: "s2s",
				DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
				SYNCED_BIDDERS_KEY: "pbjsSyncs"
			},
			BID_STATUS: {
				BID_TARGETING_SET: "targetingSet",
				RENDERED: "rendered"
			}
		}
	},
	40: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.adunitCounter = void 0;
		var r = n(0),
			i = {};
		var o = {
			incrementCounter: function(e) {
				return i[e] = i[e] || {}, i[e].counter = (0, r.deepAccess)(i, e +
					".counter") + 1 || 1, i[e].counter
			},
			getCounter: function(e) {
				return (0, r.deepAccess)(i, e + ".counter") || 0
			}
		};
		t.adunitCounter = o
	},
	41: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = t.OUTSTREAM =
			void 0, t.isValidVideoBid = function(e, t) {
				var n = (0, o.getBidRequest)(e.adId, t),
					r = n && (0, o.deepAccess)(n, "mediaTypes.video"),
					i = r && (0, o.deepAccess)(r, "context");
				if (!n || r && i !== s) return a.config.getConfig("cache.url") || !e.vastXml ||
					e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, o.logError)(
						'\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
					), !1);
				return i !== s || !(!e.renderer && !n.renderer)
			};
		var r, i = n(8),
			o = n(0),
			a = n(3),
			d = n(7),
			u = (r = d) && r.__esModule ? r : {
				default: r
			};
		var s = t.OUTSTREAM = "outstream",
			c = (t.videoAdUnit = function(e) {
				var t = "video" === e.mediaType,
					n = (0, o.deepAccess)(e, "mediaTypes.video");
				return t || n
			}, t.videoBidder = function(e) {
				return (0, u.default)(i.videoAdapters, e.bidder)
			});
		t.hasNonVideoBidder = function(e) {
			return e.bids.filter((function(e) {
				return !c(e)
			})).length
		}
	},
	42: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getGlobal = function() {
				return window.pbjs
			}, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [],
			window.pbjs.que = window.pbjs.que || []
	},
	43: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.targeting = t.isBidNotExpired = t.TARGETING_KEYS = void 0;
		var h = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
					r])
			}
			return e
		};
		t.getHighestCpmBidsFromBidPool = U, t.newTargeting = u;
		var r, S = n(0),
			E = n(3),
			T = n(17),
			i = n(29),
			a = n(39),
			o = n(7),
			A = (r = o) && r.__esModule ? r : {
				default: r
			};

		function I(e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
			return Array.from(e)
		}

		function _(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var w = n(0),
			C = n(4),
			B = [],
			O = 20,
			R = t.TARGETING_KEYS = Object.keys(C.TARGETING_KEYS).map((function(e) {
				return C.TARGETING_KEYS[e]
			})),
			d = (t.isBidNotExpired = function(e) {
				return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0, S.timestamp)()
			}, function(e) {
				return e && (e.status && !(0, A.default)([C.BID_STATUS.BID_TARGETING_SET,
					C.BID_STATUS.RENDERED
				], e.status) || !e.status)
			});

		function U(e, n) {
			var r = [],
				i = (0, S.groupBy)(e, "adUnitCode");
			return Object.keys(i).forEach((function(e) {
				var t = (0, S.groupBy)(i[e], "bidderCode");
				Object.keys(t).forEach((function(e) {
					return r.push(t[e].reduce(n))
				}))
			})), r
		}

		function u(n) {
			var g = {};

			function p(e) {
				return "string" == typeof e ? [e] : w.isArray(e) ? e : n.getAdUnitCodes() || []
			}

			function v() {
				return U(n.getBidsReceived().filter((function(e) {
					return "banner" !== e.mediaType || (0, a.sizeSupported)([e.width, e.height])
				})).filter(d).filter(t.isBidNotExpired), S.getOldestHighestCpmBid)
			}

			function y() {
				return n.getStandardBidderAdServerTargeting().map((function(e) {
					return e.key
				})).concat(R).filter(S.uniques)
			}

			function m(r, i, e, t) {
				return Object.keys(i.adserverTargeting).filter(o()).forEach((function(e) {
					var t, n;
					r.length && r.filter((n = e, function(e) {
						return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
					})).forEach((t = e, function(e) {
						w.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e
							.adserverTargeting[t]
						]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[
							t]).filter(S.uniques), delete i.adserverTargeting[t]
					}))
				})), r.push(i), r
			}

			function o() {
				var t = y();
				return function(e) {
					return -1 === t.indexOf(e)
				}
			}

			function b(t) {
				return _({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map(
					(function(e) {
						return _({}, e.substring(0, O), [t.adserverTargeting[e]])
					})))
			}
			return g.resetPresetTargeting = function(e) {
				if ((0, S.isGptPubadsDefined)()) {
					var t = p(e),
						r = n.getAdUnits().filter((function(e) {
							return (0, A.default)(t, e.code)
						}));
					window.googletag.pubads().getSlots().forEach((function(n) {
						B.forEach((function(t) {
							r.forEach((function(e) {
								e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() ||
									n.setTargeting(t, null)
							}))
						}))
					}))
				}
			}, g.getAllTargeting = function(e) {
				var r, t, i, n, o, a, d, u, s, c = 1 < arguments.length && void 0 !==
					arguments[1] ? arguments[1] : v(),
					f = p(e),
					l = (a = f, d = c, u = g.getWinningBids(a, d), s = y(), u = u.map((
						function(o) {
							return _({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(
								(function(e) {
									return void 0 === o.sendStandardTargeting || o.sendStandardTargeting ||
										-1 === s.indexOf(e)
								})).reduce((function(e, t) {
								var n = [o.adserverTargeting[t]],
									r = _({}, t.substring(0, O), n);
								if (t !== C.TARGETING_KEYS.DEAL) return [].concat(I(e), [r]);
								var i = _({}, (t + "_" + o.bidderCode).substring(0, O), n);
								return [].concat(I(e), [r, i])
							}), []))
						}))).concat((n = f, o = c, o.filter((function(e) {
						return (0, A.default)(n, e.adUnitCode)
					})).map((function(e) {
						return h({}, e)
					})).reduce(m, []).map(b).filter((function(e) {
						return e
					})))).concat(E.config.getConfig("enableSendAllBids") ? (r = f, t = c, i =
						R.concat(T.NATIVE_TARGETING_KEYS), U(t, S.getHighestCpm).map((
							function(t) {
								if (t.adserverTargeting && r && (w.isArray(r) && (0, A.default)(r,
										t.adUnitCode) || "string" == typeof r && t.adUnitCode === r))
									return _({}, t.adUnitCode, (n = t, i.filter((function(e) {
										return void 0 !== t.adserverTargeting[e]
									})).map((function(e) {
										return _({}, (e + "_" + n.bidderCode).substring(0, O), [n.adserverTargeting[
											e]])
									}))));
								var n
							})).filter((function(e) {
							return e
						}))) : []);
				return l.map((function(t) {
					Object.keys(t).map((function(e) {
						t[e].map((function(e) {
							-1 === B.indexOf(Object.keys(e)[0]) && (B = Object.keys(e).concat(
								B))
						}))
					}))
				})), l = l.map((function(e) {
					return _({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
						return _({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
					})).reduce((function(e, t) {
						return h(t, e)
					}), {}))
				})).reduce((function(e, t) {
					var n = Object.keys(t)[0];
					return e[n] = h({}, e[n], t[n]), e
				}), {}), f.forEach((function(e) {
					l[e] || (l[e] = {})
				})), l
			}, g.setTargetingForGPT = function(i, e) {
				window.googletag.pubads().getSlots().forEach((function(r) {
					Object.keys(i).filter(e ? e(r) : (0, S.isAdUnitCodeMatchingSlot)(r))
						.forEach((function(n) {
							return Object.keys(i[n]).forEach((function(t) {
								var e = i[n][t].split(",");
								(e = 1 < e.length ? [e] : e).map((function(e) {
									return w.logMessage(
										"Attempting to set key value for slot: " + r.getSlotElementId() +
										" key: " + t + " value: " + e), e
								})).forEach((function(e) {
									r.setTargeting(t, e)
								}))
							}))
						}))
				}))
			}, g.getWinningBids = function(e) {
				var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
					v(),
					t = p(e);
				return n.filter((function(e) {
					return (0, A.default)(t, e.adUnitCode)
				})).filter((function(e) {
					return 0 < e.cpm
				})).map((function(e) {
					return e.adUnitCode
				})).filter(S.uniques).map((function(t) {
					return n.filter((function(e) {
						return e.adUnitCode === t ? e : null
					})).reduce(S.getHighestCpm)
				}))
			}, g.setTargetingForAst = function() {
				var r = g.getAllTargeting();
				Object.keys(r).forEach((function(n) {
					return Object.keys(r[n]).forEach((function(e) {
						if (w.logMessage("Attempting to set targeting for targetId: " +
								n + " key: " + e + " value: " + r[n][e]), w.isStr(r[n][e]) ||
							w.isArray(r[n][e])) {
							var t = {};
							e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] =
								r[n][e], window.apntag.setKeywords(n, t)
						}
					}))
				}))
			}, g.isApntagDefined = function() {
				if (window.apntag && w.isFn(window.apntag.setKeywords)) return !0
			}, g
		}
		t.targeting = u(i.auctionManager)
	},
	44: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED =
			void 0;
		var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			},
			y = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			};
		t.newAuction = function(e) {
				var f = e.adUnits,
					t = e.adUnitCodes,
					n = e.callback,
					r = e.cbTimeout,
					i = e.labels,
					u = f,
					s = i,
					l = t,
					g = [],
					p = [],
					o = [],
					c = void 0,
					v = void 0,
					y = B.generateUUID(),
					m = void 0,
					b = n,
					h = void 0,
					S = r,
					a = [];

				function E() {
					return {
						auctionId: y,
						timestamp: c,
						auctionEnd: v,
						auctionStatus: m,
						adUnits: u,
						adUnitCodes: l,
						labels: s,
						bidderRequests: g,
						noBids: o,
						bidsReceived: p,
						winningBids: a,
						timeout: S
					}
				}

				function T(e, t) {
					if (t && clearTimeout(h), null != b) {
						var n = [];
						e && (B.logMessage("Auction " + y + " timedOut"), d = p, u = (a = g).filter(
							(function(e) {
								return !e.doneCbCallCount
							})).map((function(e) {
							return e.bidderCode
						})).filter(I.uniques), s = d.map((function(e) {
							return e.bidder
						})).filter(I.uniques), c = u.filter((function(e) {
							return !(0, w.default)(s, e)
						})), (n = a.map((function(e) {
							return (e.bids || []).filter((function(e) {
								return (0, w.default)(c, e.bidder)
							}))
						})).reduce(I.flatten, []).map((function(e) {
							return {
								bidId: e.bidId,
								bidder: e.bidder,
								adUnitCode: e.adUnitCode,
								auctionId: e.auctionId
							}
						}))).length && R.emit(U.EVENTS.BID_TIMEOUT, n));
						try {
							m = j, v = Date.now(), R.emit(U.EVENTS.AUCTION_END, E());
							var r = l,
								i = p.filter(I.adUnitsFilter.bind(this, r)).reduce(z, {});
							b.apply(pbjs, [i, e])
						} catch (e) {
							B.logError("Error executing bidsBackHandler", null, e)
						} finally {
							n.length && O.callTimedOutBidders(f, n, S);
							var o = _.config.getConfig("userSync") || {};
							o.enableOverride || C(o.syncDelay)
						}
						b = null
					}
					var a, d, u, s, c
				}

				function A() {
					B.logInfo("Bids Received for Auction with id: " + y, p), m = j, T(!1, !0)
				}
				return {
					addBidReceived: function(e) {
						p = p.concat(e)
					},
					addNoBid: function(e) {
						o = o.concat(e)
					},
					executeCallback: T,
					callBids: function() {
						var n = this;
						m = N, c = Date.now();
						var i = O.makeBidRequests(u, c, y, S, s);
						B.logInfo("Bids Requested for Auction with id: " + y, i), i.forEach((
							function(e) {
								var t;
								t = e, g = g.concat(t)
							}));
						var o = {};
						if (i.length < 1) B.logWarn(
							"No valid bid requests returned for auction"), A();
						else {
							var e = {
								bidRequests: i,
								run: function() {
									var e, t;
									e = T.bind(null, !0), t = setTimeout(e, S), h = t, m = D, R.emit(
										U.EVENTS.AUCTION_INIT, E());
									var r = G(A, n);
									O.callBids(u, i, (function() {
										for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
											t[n] = arguments[n];
										q.apply({
											dispatch: r.addBidResponse,
											bidderRequest: this
										}, t)
									}), r.adapterDone, {
										request: function(e, t) {
											d(k, t), d(o, e), x[e] || (x[e] = {
												SRA: !0,
												origin: t
											}), 1 < o[e] && (x[e].SRA = !1)
										},
										done: function(e) {
											k[e]--, M[0] && a(M[0]) && M.shift()
										}
									}, S)
								}
							};
							a(e) || (B.logWarn(
								"queueing auction due to limited endpoint capacity"), M.push(e))
						}

						function a(e) {
							var r = !0,
								i = _.config.getConfig("maxRequestsPerOrigin") || P;
							return e.bidRequests.some((function(e) {
								var t = 1,
									n = void 0 !== e.src && e.src === U.S2S.SRC ? "s2s" : e.bidderCode;
								return x[n] && (!1 === x[n].SRA && (t = Math.min(e.bids.length, i)),
									k[x[n].origin] + t > i && (r = !1)), !r
							})), r && e.run(), r
						}

						function d(e, t) {
							void 0 === e[t] ? e[t] = 1 : e[t]++
						}
					},
					addWinningBid: function(e) {
						a = a.concat(e), O.callBidWonBidder(e.bidder, e, f)
					},
					setBidTargeting: function(e) {
						O.callSetTargetingBidder(e.bidder, e)
					},
					getWinningBids: function() {
						return a
					},
					getTimeout: function() {
						return S
					},
					getAuctionId: function() {
						return y
					},
					getAuctionStatus: function() {
						return m
					},
					getAdUnits: function() {
						return u
					},
					getAdUnitCodes: function() {
						return l
					},
					getBidRequests: function() {
						return g
					},
					getBidsReceived: function() {
						return p
					},
					getNoBids: function() {
						return o
					}
				}
			}, t.auctionCallbacks = G, t.getStandardBidderSettings = d, t.getKeyValueTargetingPairs =
			W, t.adjustBids = s;
		var I = n(0),
			m = n(31),
			i = n(17),
			b = n(234),
			h = n(12),
			_ = n(3),
			r = n(18),
			o = n(20),
			S = a(n(10)),
			w = a(n(7)),
			E = n(41);

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var C = r.userSync.syncUsers,
			B = n(0),
			O = n(8),
			R = n(9),
			U = n(4),
			N = t.AUCTION_STARTED = "started",
			D = t.AUCTION_IN_PROGRESS = "inProgress",
			j = t.AUCTION_COMPLETED = "completed";
		R.on(U.EVENTS.BID_ADJUSTMENT, (function(e) {
			s(e)
		}));
		var P = 4,
			k = {},
			x = {},
			M = [];
		var q = t.addBidResponse = (0, o.createHook)("asyncSeries", (function(e, t) {
			this.dispatch.call(this.bidderRequest, e, t)
		}), "addBidResponse");

		function G(e, f) {
			var l = 0,
				t = !1,
				n = new Set,
				g = {};

			function p() {
				l--, t && 0 === l && e()
			}
			return {
				addBidResponse: function(e, t) {
					g[t.requestId] = !0, l++;
					var n = (function(e) {
						var t = e.adUnitCode,
							n = e.bid,
							r = e.bidderRequest,
							i = e.auctionId,
							o = r.start,
							a = y({}, n, {
								auctionId: i,
								responseTimestamp: (0, I.timestamp)(),
								requestTimestamp: o,
								cpm: parseFloat(n.cpm) || 0,
								bidder: n.bidderCode,
								adUnitCode: t
							});
						a.timeToRespond = a.responseTimestamp - a.requestTimestamp, R.emit(U
							.EVENTS.BID_ADJUSTMENT, a);
						var d = r.bids && (0, S.default)(r.bids, (function(e) {
								return e.adUnitCode == t
							})),
							u = d && d.renderer;
						u && u.url && (a.renderer = h.Renderer.install({
							url: u.url
						}), a.renderer.setRender(u.render));
						var s, c = _.config.getConfig("mediaTypePriceGranularity." + n.mediaType),
							f = (0, m.getPriceBucketString)(a.cpm, "object" === (void 0 === c ?
									"undefined" : v(c)) ? c : _.config.getConfig("customPriceBucket"),
								_.config.getConfig("currency.granularityMultiplier"));
						return a.pbLg = f.low, a.pbMg = f.med, a.pbHg = f.high, a.pbAg = f.auto,
							a.pbDg = f.dense, a.pbCg = f.custom, a.bidderCode && (0 < a.cpm ||
								a.dealId) && (s = W(a.bidderCode, a)), a.adserverTargeting = y(a.adserverTargeting || {},
								s), a
					})({
						adUnitCode: e,
						bid: t,
						bidderRequest: this,
						auctionId: f.getAuctionId()
					});
					"video" === n.mediaType ? (r = f, i = n, o = this, a = p, d = !0, u = (
							0, I.getBidRequest)(i.adId, [o]), s = u && (0, I.deepAccess)(u,
							"mediaTypes.video"), c = s && (0, I.deepAccess)(s, "context"), _.config
						.getConfig("cache.url") && c !== E.OUTSTREAM && (i.videoCacheKey ? i.vastUrl ||
							(B.logError(
									"videoCacheKey specified but not required vastUrl for video bid"),
								d = !1) : (d = !1, (0, b.store)([i], (function(e, t) {
								e ? (B.logWarn("Failed to save to the video cache: " + e +
									". Video bid must be discarded."), T(r, i)) : (i.videoCacheKey =
									t[0].uuid, i.vastUrl || (i.vastUrl = (0, b.getCacheUrl)(i.videoCacheKey)),
									A(r, i), a())
							})))), d && (A(r, i), a())) : (A(f, n), p());
					var r, i, o, a, d, u, s, c
				},
				adapterDone: function() {
					n.add(this), t = f.getBidRequests().every((function(e) {
						return n.has(e)
					})), this.bids.forEach((function(e) {
						g[e.bidId] || (f.addNoBid(e), R.emit(U.EVENTS.NO_BID, e))
					})), t && 0 === l && e()
				}
			}
		}

		function T(e, t) {
			t.timeToRespond > e.getTimeout() + _.config.getConfig("timeoutBuffer") &&
				e.executeCallback(!0)
		}

		function A(e, t) {
			R.emit(U.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), T(e, t)
		}

		function d(e) {
			var t = _.config.getConfig("mediaTypePriceGranularity." + e),
				n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : _.config
				.getConfig("priceGranularity"),
				r = pbjs.bidderSettings;
			return r[U.JSON_MAPPING.BD_SETTING_STANDARD] || (r[U.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
				r[U.JSON_MAPPING.BD_SETTING_STANDARD][U.JSON_MAPPING.ADSERVER_TARGETING] ||
				(r[U.JSON_MAPPING.BD_SETTING_STANDARD][U.JSON_MAPPING.ADSERVER_TARGETING] = [{
					key: U.TARGETING_KEYS.BIDDER,
					val: function(e) {
						return e.bidderCode
					}
				}, {
					key: U.TARGETING_KEYS.AD_ID,
					val: function(e) {
						return e.adId
					}
				}, {
					key: U.TARGETING_KEYS.PRICE_BUCKET,
					val: function(e) {
						return n === U.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === U.GRANULARITY_OPTIONS
							.DENSE ? e.pbDg : n === U.GRANULARITY_OPTIONS.LOW ? e.pbLg : n ===
							U.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === U.GRANULARITY_OPTIONS
							.HIGH ? e.pbHg : n === U.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
					}
				}, {
					key: U.TARGETING_KEYS.SIZE,
					val: function(e) {
						return e.size
					}
				}, {
					key: U.TARGETING_KEYS.DEAL,
					val: function(e) {
						return e.dealId
					}
				}, {
					key: U.TARGETING_KEYS.SOURCE,
					val: function(e) {
						return e.source
					}
				}, {
					key: U.TARGETING_KEYS.FORMAT,
					val: function(e) {
						return e.mediaType
					}
				}]), r[U.JSON_MAPPING.BD_SETTING_STANDARD]
		}

		function W(e, t) {
			if (!t) return {};
			var n = {},
				r = pbjs.bidderSettings;
			r && (u(n, d(t.mediaType), t), e && r[e] && r[e][U.JSON_MAPPING.ADSERVER_TARGETING] &&
				(u(n, r[e], t), t.sendStandardTargeting = r[e].sendStandardTargeting));
			return t.native && (n = y({}, n, (0, i.getNativeTargeting)(t))), n
		}

		function u(r, i, o) {
			var e = i[U.JSON_MAPPING.ADSERVER_TARGETING];
			return o.size = o.getSize(), B._each(e, (function(e) {
				var t = e.key,
					n = e.val;
				if (r[t] && B.logWarn("The key: " + t + " is getting ovewritten"), B.isFn(
						n)) try {
						n = n(o)
					} catch (e) {
						B.logError("bidmanager", "ERROR", e)
					}(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !==
					U.TARGETING_KEYS.DEAL || !B.isEmptyStr(n) && null != n ? r[t] = n : B
					.logInfo("suppressing empty key '" + t + "' from adserver targeting")
			})), r
		}

		function s(e) {
			var t = e.bidderCode,
				n = e.cpm,
				r = void 0;
			if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" ==
					typeof pbjs.bidderSettings[t].bidCpmAdjustment ? r = pbjs.bidderSettings[
						t].bidCpmAdjustment : pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD] &&
					"function" == typeof pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD]
					.bidCpmAdjustment && (r = pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD]
						.bidCpmAdjustment), r)) try {
				n = r(e.cpm, y({}, e))
			} catch (e) {
				B.logError("Error during bid adjustment", "bidmanager.js", e)
			}
			0 <= n && (e.cpm = n)
		}

		function z(e, t) {
			return e[t.adUnitCode] || (e[t.adUnitCode] = {
				bids: []
			}), e[t.adUnitCode].bids.push(t), e
		}
	},
	47: function(e, t, n) {
		"use strict";
		var r = n(14),
			i = n(34)(5),
			o = "find",
			a = !0;
		o in [] && Array(1)[o]((function() {
			a = !1
		})), r(r.P + r.F * a, "Array", {
			find: function(e) {
				return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
			}
		}), n(26)(o)
	},
	48: function(e, t) {
		e.exports = function(e) {
			if ("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	},
	49: function(e, t, n) {
		var r = n(50),
			i = n(55);
		e.exports = n(22) ? function(e, t, n) {
			return r.f(e, t, i(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		}
	},
	50: function(e, t, n) {
		var r = n(51),
			i = n(52),
			o = n(54),
			a = Object.defineProperty;
		t.f = n(22) ? Object.defineProperty : function(e, t, n) {
			if (r(e), t = o(t, !0), r(n), i) try {
				return a(e, t, n)
			} catch (e) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (e[t] = n.value), e
		}
	},
	51: function(e, t, n) {
		var r = n(15);
		e.exports = function(e) {
			if (!r(e)) throw TypeError(e + " is not an object!");
			return e
		}
	},
	52: function(e, t, n) {
		e.exports = !n(22) && !n(33)((function() {
			return 7 != Object.defineProperty(n(53)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	},
	53: function(e, t, n) {
		var r = n(15),
			i = n(19).document,
			o = r(i) && r(i.createElement);
		e.exports = function(e) {
			return o ? i.createElement(e) : {}
		}
	},
	54: function(e, t, n) {
		var i = n(15);
		e.exports = function(e, t) {
			if (!i(e)) return e;
			var n, r;
			if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return
				r;
			if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
			if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e)))
				return r;
			throw TypeError("Can't convert object to primitive value")
		}
	},
	55: function(e, t) {
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	},
	56: function(e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return n.call(e, t)
		}
	},
	57: function(e, t, n) {
		var r = n(24);
		e.exports = function(e) {
			return Object(r(e))
		}
	},
	58: function(e, t, n) {
		var r = n(59);
		e.exports = function(e, t) {
			return new(r(e))(t)
		}
	},
	59: function(e, t, n) {
		var r = n(15),
			i = n(38),
			o = n(25)("species");
		e.exports = function(e) {
			var t;
			return i(e) && ("function" != typeof(t = e.constructor) || t !== Array &&
				!i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t =
					void 0)), void 0 === t ? Array : t
		}
	},
	6: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.ajax = void 0;
		var l = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			},
			g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			};
		t.ajaxBuilder = r;
		var p = n(11),
			v = n(3),
			y = n(0),
			m = 4;
		t.ajax = r();

		function r() {
			var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] :
				3e3,
				e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
				c = e.request,
				f = e.done;
			return function(e, t, n) {
				var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
				try {
					var i = void 0,
						o = r.method || (n ? "POST" : "GET"),
						a = document.createElement("a");
					a.href = e;
					var d = "object" === (void 0 === t ? "undefined" : g(t)) && null !== t ?
						t : {
							success: function() {
								y.logMessage("xhr success")
							},
							error: function(e) {
								y.logError("xhr error", null, e)
							}
						};
					if ("function" == typeof t && (d.success = t), (i = new window.XMLHttpRequest)
						.onreadystatechange = function() {
							if (i.readyState === m) {
								"function" == typeof f && f(a.origin);
								var e = i.status;
								200 <= e && e < 300 || 304 === e ? d.success(i.responseText, i) : d.error(
									i.statusText, i)
							}
						}, v.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
							y.logError("  xhr timeout after ", i.timeout, "ms")
						}), "GET" === o && n) {
						var u = (0, p.parse)(e, r);
						l(u.search, n), e = (0, p.format)(u)
					}
					i.open(o, e, !0), v.config.getConfig("disableAjaxTimeout") || (i.timeout =
							s), r.withCredentials && (i.withCredentials = !0), y._each(r.customHeaders, (
							function(e, t) {
								i.setRequestHeader(t, e)
							})), r.preflight && i.setRequestHeader("X-Requested-With",
							"XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType ||
							"text/plain"), "function" == typeof c && c(a.origin), "POST" === o &&
						n ? i.send(n) : i.send()
				} catch (e) {
					y.logError("xhr construction", e)
				}
			}
		}
	},
	60: function(e, t, n) {
		var r = n(13),
			i = n(19),
			o = "__core-js_shared__",
			a = i[o] || (i[o] = {});
		(e.exports = function(e, t) {
			return a[e] || (a[e] = void 0 !== t ? t : {})
		})("versions", []).push({
			version: r.version,
			mode: n(61) ? "pure" : "global",
			copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
		})
	},
	61: function(e, t) {
		e.exports = !0
	},
	62: function(e, t) {
		var n = 0,
			r = Math.random();
		e.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(
				36))
		}
	},
	63: function(e, t, n) {
		"use strict";
		var r = n(14),
			i = n(64)(!0);
		r(r.P, "Array", {
			includes: function(e) {
				return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
			}
		}), n(26)("includes")
	},
	637: function(e, t, n) {
		e.exports = n(638)
	},
	638: function(e, t, n) {
		"use strict";
		var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			},
			o = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			},
			a = n(42),
			d = n(0),
			u = n(639),
			s = n(18),
			c = n(28),
			f = n(3),
			l = n(29),
			g = n(43),
			p = n(20),
			v = n(640),
			y = n(7),
			m = (r = y) && r.__esModule ? r : {
				default: r
			},
			b = n(40),
			h = n(12);
		var S = (0, a.getGlobal)(),
			E = n(4),
			T = n(0),
			A = n(8),
			I = n(16),
			_ = n(9),
			w = s.userSync.triggerUserSyncs,
			C = E.EVENTS,
			B = C.ADD_AD_UNITS,
			O = C.BID_WON,
			R = C.REQUEST_BIDS,
			U = C.SET_TARGETING,
			N = C.AD_RENDER_FAILED,
			D = E.AD_RENDER_FAILED_REASON,
			j = D.PREVENT_WRITING_ON_MAIN_DOCUMENT,
			P = D.NO_AD,
			k = D.EXCEPTION,
			x = D.CANNOT_FIND_AD,
			M = D.MISSING_DOC_OR_ADID,
			q = {
				bidWon: function(e) {
					var t = l.auctionManager.getBidsRequested().map((function(e) {
						return e.bids.map((function(e) {
							return e.adUnitCode
						}))
					})).reduce(d.flatten).filter(d.uniques);
					return !!T.contains(t, e) || void T.logError('The "' + e +
						'" placement is not defined.')
				}
			};

		function G(e, t, n) {
			e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement
				.width = t, e.defaultView.frameElement.height = n)
		}

		function W(e) {
			var n = l.auctionManager[e]().filter(d.adUnitsFilter.bind(this, l.auctionManager
					.getAdUnitCodes())),
				r = n && n.length && n[n.length - 1].auctionId;
			return n.map((function(e) {
				return e.adUnitCode
			})).filter(d.uniques).map((function(t) {
				return n.filter((function(e) {
					return e.auctionId === r && e.adUnitCode === t
				}))
			})).filter((function(e) {
				return e && e[0] && e[0].adUnitCode
			})).map((function(e) {
				return t = {}, n = e[0].adUnitCode, r = {
					bids: e.map(d.removeRequestId)
				}, n in t ? Object.defineProperty(t, n, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[n] = r, t;
				var t, n, r
			})).reduce((function(e, t) {
				return o(e, t)
			}), {})
		}

		function z(e, t, n) {
			var r = {};
			r.reason = e, r.message = t, n && (r.bid = n), T.logError(t), _.emit(N, r)
		}

		function V(e) {
			e.forEach((function(e) {
				if (void 0 === e.called) try {
					e.call(), e.called = !0
				} catch (e) {
					T.logError("Error processing command :", "prebid.js", e)
				}
			}))
		}(0, v.sessionLoader)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !
			0, S.version = "v1.36.0", T.logInfo("Prebid.js v1.36.0 loaded"), S.adUnits =
			S.adUnits || [], S.triggerUserSyncs = w, S.getAdserverTargetingForAdUnitCodeStr =
			function(e) {
				if (T.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",
						arguments), e) {
					var t = S.getAdserverTargetingForAdUnitCode(e);
					return T.transformAdServerTargetingObj(t)
				}
				T.logMessage(
					"Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
			}, S.getAdserverTargetingForAdUnitCode = function(e) {
				return S.getAdserverTargeting(e)[e]
			}, S.getAdserverTargeting = function(e) {
				return T.logInfo("Invoking pbjs.getAdserverTargeting", arguments), g.targeting
					.getAllTargeting(e)
			}, S.getNoBids = function() {
				return T.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids")
			}, S.getBidResponses = function() {
				return T.logInfo("Invoking pbjs.getBidResponses", arguments), W(
					"getBidsReceived")
			}, S.getBidResponsesForAdUnitCode = function(t) {
				return {
					bids: l.auctionManager.getBidsReceived().filter((function(e) {
						return e.adUnitCode === t
					})).map(d.removeRequestId)
				}
			}, S.setTargetingForGPTAsync = function(e, t) {
				if (T.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, d.isGptPubadsDefined)
					()) {
					var n = g.targeting.getAllTargeting(e);
					g.targeting.resetPresetTargeting(e), g.targeting.setTargetingForGPT(n, t),
						Object.keys(n).forEach((function(t) {
							Object.keys(n[t]).forEach((function(e) {
								"hb_adid" === e && l.auctionManager.setStatusForBids(n[t][e], E.BID_STATUS
									.BID_TARGETING_SET)
							}))
						})), _.emit(U, n)
				} else T.logError("window.googletag is not defined on the page")
			}, S.setTargetingForAst = function() {
				T.logInfo("Invoking pbjs.setTargetingForAn", arguments), g.targeting.isApntagDefined() ?
					(g.targeting.setTargetingForAst(), _.emit(U, g.targeting.getAllTargeting())) :
					T.logError("window.apntag is not defined on the page")
			}, S.renderAd = function(e, t) {
				if (T.logInfo("Invoking pbjs.renderAd", arguments), T.logMessage(
						"Calling renderAd with adId :" + t), e && t) try {
					var n = l.auctionManager.findBidByAdId(t);
					if (n) {
						n.status = E.BID_STATUS.RENDERED, n.ad = T.replaceAuctionPrice(n.ad, n
								.cpm), n.adUrl = T.replaceAuctionPrice(n.adUrl, n.cpm), l.auctionManager
							.addWinningBid(n), _.emit(O, n);
						var r = n.height,
							i = n.width,
							o = n.ad,
							a = n.mediaType,
							d = n.adUrl,
							u = n.renderer,
							s = document.createComment("Creative " + n.creativeId + " served by " +
								n.bidder + " Prebid.js Header Bidding");
						if (T.insertElement(s, e, "body"), (0, h.isRendererRequired)(u))(0, h.executeRenderer)
							(u, n);
						else if (e === document && !T.inIframe() || "video" === a) {
							z(j, "Error trying to write ad. Ad render call ad id " + t +
								" was prevented from writing to the main document.", n)
						} else if (o) e.write(o), e.close(), G(e, i, r), T.callBurl(n);
						else if (d) {
							var c = T.createInvisibleIframe();
							c.height = r, c.width = i, c.style.display = "inline", c.style.overflow =
								"hidden", c.src = d, T.insertElement(c, e, "body"), G(e, i, r), T.callBurl(
									n)
						} else {
							z(P, "Error trying to write ad. No ad for bid response id: " + t, n)
						}
					} else {
						z(x, "Error trying to write ad. Cannot find ad by given id : " + t)
					}
				} catch (e) {
					var f = "Error trying to write ad Id :" + t + " to the page:" + e.message;
					z(k, f)
				} else z(M, "Error trying to write ad Id :" + t +
					" to the page. Missing document or adId")
			}, S.removeAdUnit = function(e) {
				if (T.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
					for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits
						.splice(t, 1)
			}, S.requestBids = (0, p.createHook)("asyncSeries", (function() {
				var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.bidsBackHandler,
					n = e.timeout,
					r = e.adUnits,
					i = e.adUnitCodes,
					o = e.labels;
				_.emit(R);
				var a = n || f.config.getConfig("bidderTimeout");
				if (r = r || S.adUnits, T.logInfo("Invoking pbjs.requestBids",
						arguments), i && i.length ? r = r.filter((function(e) {
						return (0, m.default)(i, e.code)
					})) : i = r && r.map((function(e) {
						return e.code
					})), r.forEach((function(i) {
						var o = Object.keys(i.mediaTypes || {
								banner: "banner"
							}),
							e = i.bids.map((function(e) {
								return e.bidder
							})),
							a = A.bidderRegistry,
							t = f.config.getConfig("s2sConfig"),
							n = t && t.bidders,
							r = n ? e.filter((function(e) {
								return !(0, m.default)(n, e)
							})) : e;
						i.transactionId = T.generateUUID(), r.forEach((function(t) {
							var e = a[t],
								n = e && e.getSpec && e.getSpec(),
								r = n && n.supportedMediaTypes || ["banner"];
							o.some((function(e) {
								return (0, m.default)(r, e)
							})) || (T.logWarn(T.unsupportedBidderMessage(i, t)), i.bids =
								i.bids.filter((function(e) {
									return e.bidder !== t
								})))
						})), b.adunitCounter.incrementCounter(i.code)
					})), r && 0 !== r.length) {
					var d = l.auctionManager.createAuction({
						adUnits: r,
						adUnitCodes: i,
						callback: t,
						cbTimeout: a,
						labels: o
					});
					return d.callBids(), d
				}
				if (T.logMessage("No adUnits configured. No bids requested."),
					"function" == typeof t) try {
					t()
				} catch (e) {
					T.logError("Error executing bidsBackHandler", null, e)
				}
			})), S.addAdUnits = function(e) {
				T.logInfo("Invoking pbjs.addAdUnits", arguments), T.isArray(e) ? S.adUnits
					.push.apply(S.adUnits, e) : "object" === (void 0 === e ? "undefined" : i(
						e)) && S.adUnits.push(e), _.emit(B)
			}, S.onEvent = function(e, t, n) {
				T.logInfo("Invoking pbjs.onEvent", arguments), T.isFn(t) ? !n || q[e].call(
					null, n) ? _.on(e, t, n) : T.logError(
					'The id provided is not valid for event "' + e +
					'" and no handler was set.') : T.logError(
					'The event handler provided is not a function and was not set on event "' +
					e + '".')
			}, S.offEvent = function(e, t, n) {
				T.logInfo("Invoking pbjs.offEvent", arguments), n && !q[e].call(null, n) ||
					_.off(e, t, n)
			}, S.registerBidAdapter = function(e, t) {
				T.logInfo("Invoking pbjs.registerBidAdapter", arguments);
				try {
					A.registerBidAdapter(e(), t)
				} catch (e) {
					T.logError("Error registering bidder adapter : " + e.message)
				}
			}, S.registerAnalyticsAdapter = function(e) {
				T.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
				try {
					A.registerAnalyticsAdapter(e)
				} catch (e) {
					T.logError("Error registering analytics adapter : " + e.message)
				}
			}, S.createBid = function(e) {
				return T.logInfo("Invoking pbjs.createBid", arguments), I.createBid(e)
			}, S.loadScript = function(e, t, n) {
				T.logInfo("Invoking pbjs.loadScript", arguments), (0, c.loadScript)(e, t,
					n)
			}, S.enableAnalytics = function(e) {
				e && !T.isEmpty(e) ? (T.logInfo("Invoking pbjs.enableAnalytics for: ", e),
					A.enableAnalytics(e)) : T.logError(
					"pbjs.enableAnalytics should be called with option {}")
			}, S.aliasBidder = function(e, t) {
				T.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? A.aliasBidAdapter(
					e, t) : T.logError("bidderCode and alias must be passed as arguments",
					"pbjs.aliasBidder")
			}, S.getAllWinningBids = function() {
				return l.auctionManager.getAllWinningBids().map(d.removeRequestId)
			}, S.getAllPrebidWinningBids = function() {
				return l.auctionManager.getBidsReceived().filter((function(e) {
					return e.status === E.BID_STATUS.BID_TARGETING_SET
				})).map(d.removeRequestId)
			}, S.getHighestCpmBids = function(e) {
				var t = (0, g.getHighestCpmBidsFromBidPool)(l.auctionManager.getBidsReceived(),
					d.getLatestHighestCpmBid);
				return g.targeting.getWinningBids(e, t).map(d.removeRequestId)
			}, S.markWinningBidAsUsed = function(t) {
				var e = [];
				t.adUnitCode && t.adId ? e = l.auctionManager.getBidsReceived().filter((
						function(e) {
							return e.adId === t.adId && e.adUnitCode === t.adUnitCode
						})) : t.adUnitCode ? e = g.targeting.getWinningBids(t.adUnitCode) : t.adId ?
					e = l.auctionManager.getBidsReceived().filter((function(e) {
						return e.adId === t.adId
					})) : T.logWarn(
						"Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."
					), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
			}, S.getConfig = f.config.getConfig, S.setConfig = f.config.setConfig, S.que
			.push((function() {
				return (0, u.listenMessagesFromCreative)()
			})), S.cmd.push = function(e) {
				if ("function" == typeof e) try {
					e.call()
				} catch (e) {
					T.logError("Error processing command :", e.message, e.stack)
				} else T.logError(
					"Commands written into pbjs.cmd.push must be wrapped in a function")
			}, S.que.push = S.cmd.push, S.processQueue = function() {
				V(S.que), V(S.cmd)
			}
	},
	639: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.listenMessagesFromCreative = function() {
			addEventListener("message", o, !1)
		};
		var g = i(n(9)),
			p = n(17),
			r = n(4),
			v = n(0),
			y = n(29),
			m = i(n(10)),
			b = n(12);

		function i(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var h = r.EVENTS.BID_WON;

		function o(e) {
			var t, n, r, i, o, a, d, u, s, c = e.message ? "message" : "data",
				f = {};
			try {
				f = JSON.parse(e[c])
			} catch (e) {
				return
			}
			if (f && f.adId) {
				var l = (0, m.default)(y.auctionManager.getBidsReceived(), (function(e) {
					return e.adId === f.adId
				}));
				"Prebid Request" === f.message && (t = l, n = f.adServerDomain, r = e.source,
						i = t.adId, o = t.ad, a = t.adUrl, d = t.width, u = t.height, s = t.renderer, (
							0, b.isRendererRequired)(s) ? (0, b.executeRenderer)(s, t) : i && (
							function(e) {
								var d = e.adUnitCode,
									r = e.width,
									i = e.height;

								function o(e) {
									var t, n, r, i, o = (t = d, window.googletag ? (i = t, (0, m.default)
											(window.googletag.pubads().getSlots().filter((0, v.isSlotMatchingAdUnitCode)
												(i)), (function(e) {
												return e
											})).getSlotElementId()) : window.apntag ? (n = t, (r = window.apntag
											.getTag(n)) && r.targetId) : t),
										a = document.getElementById(o);
									return a && a.querySelector(e)
								}["div", "iframe"].forEach((function(e) {
									var t = o(e);
									if (t) {
										var n = t.style;
										n.width = r + "px", n.height = i + "px"
									} else(0, v.logWarn)(
										"Unable to locate matching page element for adUnitCode " + d +
										".  Can't resize it to ad's dimensions.  Please review setup.")
								}))
							}(t), r.postMessage(JSON.stringify({
								message: "Prebid Response",
								ad: o,
								adUrl: a,
								adId: i,
								width: d,
								height: u
							}), n)), y.auctionManager.addWinningBid(l), g.default.emit(h, l)),
					"Prebid Native" === f.message && ((0, p.fireNativeTrackers)(f, l), y.auctionManager
						.addWinningBid(l), g.default.emit(h, l))
			}
		}
	},
	64: function(e, t, n) {
		var u = n(65),
			s = n(36),
			c = n(66);
		e.exports = function(d) {
			return function(e, t, n) {
				var r, i = u(e),
					o = s(i.length),
					a = c(n, o);
				if (d && t != t) {
					for (; a < o;)
						if ((r = i[a++]) != r) return !0
				} else
					for (; a < o; a++)
						if ((d || a in i) && i[a] === t) return d || a || 0; return !d && -1
			}
		}
	},
	640: function(e, n, t) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.boundHook = void 0;
		var o = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
					r])
			}
			return e
		};
		n.disableOverrides = f, n.addBidResponseHook = l, n.getConfig = g, n.sessionLoader =
			function(e) {
				var t = void 0;
				try {
					e = e || window.sessionStorage, t = JSON.parse(e.getItem(d))
				} catch (e) {}
				t && c(t, !0)
			};
		var r = t(3),
			a = t(0),
			i = t(44),
			d = "pbjs:debugging",
			u = n.boundHook = void 0;

		function s(e) {
			(0, a.logMessage)("DEBUG: " + e)
		}

		function c(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
			r.config.setConfig({
					debug: !0
				}), s("bidder overrides enabled" + (t ? " from session" : "")), u && i.addBidResponse
				.removeHook(u), n.boundHook = u = l.bind(null, e), i.addBidResponse.addHook(
					u, 5)
		}

		function f() {
			u && (i.addBidResponse.removeHook(u), s("bidder overrides disabled"))
		}

		function l(e, r, i, t) {
			if (Array.isArray(e.bidders) && -1 === e.bidders.indexOf(i.bidderCode))
				return n = "bidder '" + i.bidderCode +
					"' excluded from auction by bidder overrides", void(0, a.logWarn)(
						"DEBUG: " + n);
			var n;
			Array.isArray(e.bids) && e.bids.forEach((function(n) {
				n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !==
					r || (i = o({}, i), Object.keys(n).filter((function(e) {
						return -1 === ["bidder", "adUnitCode"].indexOf(e)
					})).forEach((function(e) {
						var t = n[e];
						s("bidder overrides changed '" + r + "/" + i.bidderCode +
							"' bid." + e + " from '" + i[e] + "' to '" + t + "'"), i[e] = t
					})))
			})), t(r, i)
		}

		function g(e) {
			if (e.enabled) {
				try {
					window.sessionStorage.setItem(d, JSON.stringify(e))
				} catch (e) {}
				c(e)
			} else {
				f();
				try {
					window.sessionStorage.removeItem(d)
				} catch (e) {}
			}
		}
		r.config.getConfig("debugging", (function(e) {
			return g(e.debugging)
		}))
	},
	65: function(e, t, n) {
		var r = n(35),
			i = n(24);
		e.exports = function(e) {
			return r(i(e))
		}
	},
	66: function(e, t, n) {
		var r = n(37),
			i = Math.max,
			o = Math.min;
		e.exports = function(e, t) {
			return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
		}
	},
	67: function(e, t) {
		e.exports = function e(t) {
			var n = Array.isArray(t) ? [] : {};
			for (var r in t) {
				var i = t[r];
				n[r] = i && "object" == typeof i ? e(i) : i
			}
			return n
		}
	},
	68: function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getRefererInfo = void 0;
		var d = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
					r])
			}
			return e
		};
		t.detectReferer = r;
		var u = n(0);

		function r(i) {
			function o() {
				var e = (function() {
						var t = [],
							n = void 0;
						do {
							try {
								n = n ? n.parent : i;
								try {
									var e = n == i.top,
										r = {
											referrer: n.document.referrer || null,
											location: n.location.href || null,
											isTop: e
										};
									e && (r = d(r, {
										canonicalUrl: a(n.document)
									})), t.push(r)
								} catch (e) {
									t.push({
										referrer: null,
										location: null,
										isTop: n == i.top
									}), (0, u.logWarn)(
										"Trying to access cross domain iframe. Continuing without referrer and location"
									)
								}
							} catch (e) {
								return t.push({
									referrer: null,
									location: null,
									isTop: !1
								}), t
							}
						} while (n != i.top);
						return t
					})(),
					t = (function() {
						try {
							if (!i.location.ancestorOrigins) return;
							return i.location.ancestorOrigins
						} catch (e) {}
					})();
				if (t)
					for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
				return e
			}

			function a(e) {
				try {
					var t = e.querySelector("link[rel='canonical']");
					if (null !== t) return t.href
				} catch (e) {}
				return null
			}
			return function() {
				try {
					var e = o(),
						t = e.length - 1,
						n = null !== e[t].location || 0 < t && null !== e[t - 1].referrer,
						r = (function(e) {
							var t = [],
								n = null,
								r = null,
								i = null,
								o = null,
								a = null,
								d = void 0;
							for (d = e.length - 1; 0 <= d; d--) {
								try {
									n = e[d].location
								} catch (e) {}
								if (n) t.push(n), a || (a = n);
								else if (0 !== d) {
									r = e[d - 1];
									try {
										i = r.referrer, o = r.ancestor
									} catch (e) {}
									i ? (t.push(i), a || (a = i)) : o ? (t.push(o), a || (a = o)) : t.push(
										null)
								} else t.push(null)
							}
							return {
								stack: t,
								detectedRefererUrl: a
							}
						})(e),
						i = void 0;
					return e[e.length - 1].canonicalUrl && (i = e[e.length - 1].canonicalUrl), {
						referer: r.detectedRefererUrl,
						reachedTop: n,
						numIframes: t,
						stack: r.stack,
						canonicalUrl: i
					}
				} catch (e) {}
			}
		}
		t.getRefererInfo = r(window)
	},
	7: function(e, t, n) {
		n(63), e.exports = n(13).Array.includes
	},
	8: function(e, h, t) {
		"use strict";
		var b = function(e, t) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return (function(e, t) {
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) &&
							(n.push(a.value), !t || n.length !== t); r = !0);
					} catch (e) {
						i = !0, o = e
					} finally {
						try {
							!r && d.return && d.return()
						} finally {
							if (i) throw o
						}
					}
					return n
				})(e, t);
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance")
			},
			g = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			},
			S = t(0),
			p = t(39),
			v = t(17),
			c = t(1),
			E = t(6),
			T = t(3),
			A = n(t(7)),
			I = n(t(10)),
			y = t(40),
			_ = t(68);

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var w = t(0),
			C = t(4),
			B = t(9),
			O = void 0,
			R = {};
		h.bidderRegistry = R, h.aliasRegistry = {};
		var U = {};
		T.config.getConfig("s2sConfig", (function(e) {
			U = e.s2sConfig
		}));
		var r = {};

		function N(e) {
			var i = e.bidderCode,
				s = e.auctionId,
				c = e.bidderRequestId,
				t = e.adUnits,
				f = e.labels,
				l = e.src;
			return t.reduce((function(e, d) {
				var t = (0, p.resolveStatus)((0, p.getLabels)(d, f), d.mediaTypes, d.sizes),
					n = t.active,
					u = t.mediaTypes,
					r = t.filterResults;
				return n ? r && w.logInfo('Size mapping filtered adUnit "' + d.code +
					'" banner sizes from ', r.before, "to ", r.after) : w.logInfo(
					'Size mapping disabled adUnit "' + d.code + '"'), n && e.push(d.bids
					.filter((function(e) {
						return e.bidder === i
					})).reduce((function(e, t) {
						var n = d.nativeParams || w.deepAccess(d, "mediaTypes.native");
						n && (t = g({}, t, {
							nativeParams: (0, v.processNativeAdUnitParams)(n)
						})), t = g({}, t, (0, S.getDefinedParams)(d, ["mediaType",
							"renderer"
						]));
						var r = (0, p.resolveStatus)((0, p.getLabels)(t, f), u),
							i = r.active,
							o = r.mediaTypes,
							a = r.filterResults;
						return i ? a && w.logInfo('Size mapping filtered adUnit "' + d.code +
								'" bidder "' + t.bidder + '" banner sizes from ', a.before,
								"to ", a.after) : w.logInfo('Size mapping deactivated adUnit "' +
								d.code + '" bidder "' + t.bidder + '"'), w.isValidMediaTypes(o) ?
							t = g({}, t, {
								mediaTypes: o
							}) : w.logError(
								"mediaTypes is not correctly configured for adunit " + d.code),
							i && e.push(g({}, t, {
								adUnitCode: d.code,
								transactionId: d.transactionId,
								sizes: w.deepAccess(o, "banner.sizes") || [],
								bidId: t.bid_id || w.getUniqueIdentifierStr(),
								bidderRequestId: c,
								auctionId: s,
								src: l,
								bidRequestsCount: y.adunitCounter.getCounter(d.code)
							})), e
					}), [])), e
			}), []).reduce(S.flatten, []).filter((function(e) {
				return "" !== e
			}))
		}

		function D() {
			return U && U.enabled && U.testing && O
		}

		function i(t, n, e) {
			try {
				var r = R[t].getSpec();
				r && r[n] && "function" == typeof r[n] && (w.logInfo("Invoking " + t +
					"." + n), r[n](e))
			} catch (e) {
				w.logWarn("Error calling " + n + " of " + t)
			}
		}
		h.gdprDataHandler = {
			consentData: null,
			setConsentData: function(e) {
				this.consentData = e
			},
			getConsentData: function() {
				return this.consentData
			}
		}, h.makeBidRequests = function(e, i, o, a, d) {
			var u = [];
			e = h.checkBidRequestSizes(e);
			var t = (0, S.getBidderCodes)(e);
			T.config.getConfig("bidderSequence") === T.RANDOM && (t = (0, S.shuffle)(
				t));
			var n, r, s, c = (0, _.getRefererInfo)(),
				f = t,
				l = [];
			if (U.enabled) {
				D() && (l = O.getSourceBidderMap(e)[O.CLIENT]);
				var g = U.bidders;
				f = t.filter((function(e) {
					return !(0, A.default)(g, e) || (0, A.default)(l, e)
				}));
				var p = (n = e, r = U.bidders, (s = w.deepClone(n)).forEach((function(e) {
						e.bids = e.bids.filter((function(e) {
							return (0, A.default)(r, e.bidder) && (!D() || e.finalSource !==
								O.CLIENT)
						})).map((function(e) {
							return e.bid_id = w.getUniqueIdentifierStr(), e
						}))
					})), s = s.filter((function(e) {
						return 0 !== e.bids.length
					}))),
					v = w.generateUUID();
				g.forEach((function(e) {
					var t = w.getUniqueIdentifierStr(),
						n = {
							bidderCode: e,
							auctionId: o,
							bidderRequestId: t,
							tid: v,
							bids: N({
								bidderCode: e,
								auctionId: o,
								bidderRequestId: t,
								adUnits: w.deepClone(p),
								labels: d,
								src: C.S2S.SRC
							}),
							auctionStart: i,
							timeout: U.timeout,
							src: C.S2S.SRC,
							refererInfo: c
						};
					0 !== n.bids.length && u.push(n)
				})), p.forEach((function(e) {
					var t = e.bids.filter((function(t) {
						return (0, I.default)(u, (function(e) {
							return (0, I.default)(e.bids, (function(e) {
								return e.bidId === t.bid_id
							}))
						}))
					}));
					e.bids = t
				})), u.forEach((function(e) {
					e.adUnitsS2SCopy = p.filter((function(e) {
						return 0 < e.bids.length
					}))
				}))
			}
			var y, m, b = (y = e, (m = w.deepClone(y)).forEach((function(e) {
				e.bids = e.bids.filter((function(e) {
					return !D() || e.finalSource !== O.SERVER
				}))
			})), m = m.filter((function(e) {
				return 0 !== e.bids.length
			})));
			return f.forEach((function(e) {
				var t = w.getUniqueIdentifierStr(),
					n = {
						bidderCode: e,
						auctionId: o,
						bidderRequestId: t,
						bids: N({
							bidderCode: e,
							auctionId: o,
							bidderRequestId: t,
							adUnits: w.deepClone(b),
							labels: d,
							src: "client"
						}),
						auctionStart: i,
						timeout: a,
						refererInfo: c
					},
					r = R[e];
				r || w.logError(
						"Trying to make a request for bidder that does not exist: " + e), r &&
					n.bids && 0 !== n.bids.length && u.push(n)
			})), h.gdprDataHandler.getConsentData() && u.forEach((function(e) {
				e.gdprConsent = h.gdprDataHandler.getConsentData()
			})), u
		}, h.checkBidRequestSizes = function(e) {
			function d(e) {
				return Array.isArray(e) && 2 === e.length && w.isInteger(e[0]) && w.isInteger(
					e[1])
			}
			return e.forEach((function(e) {
				var t = e.mediaTypes,
					n = w.getAdUnitSizes(e);
				if (t && t.banner) {
					var r = t.banner;
					r.sizes ? (r.sizes = n, e.sizes = n) : (w.logError(
						"Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."
					), delete e.mediaTypes.banner)
				} else e.sizes && (w.logWarn(
					"Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."
				), e.sizes = n);
				if (t && t.video) {
					var i = t.video;
					if (i.playerSize)
						if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize
							.every(d)) e.sizes = i.playerSize;
						else if (d(i.playerSize)) {
						var o = [];
						o.push(i.playerSize), w.logInfo(
							"Transforming video.playerSize from " + i.playerSize + " to " + o +
							" so it's in the proper format."), e.sizes = i.playerSize = o
					} else w.logError(
						"Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
					), delete e.mediaTypes.video.playerSize
				}
				if (t && t.native) {
					var a = t.native;
					a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (w.logError(
							"Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."
						), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios &&
						!Array.isArray(a.image.aspect_ratios) && (w.logError(
							"Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."
						), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon
						.sizes && !Array.isArray(a.icon.sizes) && (w.logError(
							"Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."
						), delete e.mediaTypes.native.icon.sizes)
				}
			})), e
		}, h.callBids = function(e, t, r, i, o, a) {
			if (t.length) {
				var n = t.reduce((function(e, t) {
						return e[Number(void 0 !== t.src && t.src === C.S2S.SRC)].push(t), e
					}), [
						[],
						[]
					]),
					d = b(n, 2),
					u = d[0],
					s = d[1];
				if (s.length) {
					var c = (0, E.ajaxBuilder)(a, o ? {
							request: o.request.bind(null, "s2s"),
							done: o.done
						} : void 0),
						f = U.bidders,
						l = R[U.adapter],
						g = s[0].tid,
						p = s[0].adUnitsS2SCopy;
					if (l) {
						var v = {
							tid: g,
							ad_units: p
						};
						if (v.ad_units.length) {
							var y = s.map((function(e) {
									return e.start = (0, S.timestamp)(), i.bind(e)
								})),
								m = v.ad_units.reduce((function(e, t) {
									return e.concat((t.bids || []).reduce((function(e, t) {
										return e.concat(t.bidder)
									}), []))
								}), []);
							w.logMessage("CALLING S2S HEADER BIDDERS ==== " + f.filter((function(
								e) {
								return (0, A.default)(m, e)
							})).join(",")), s.forEach((function(e) {
								B.emit(C.EVENTS.BID_REQUESTED, e)
							})), l.callBids(v, s, (function(e, t) {
								var n = (0, S.getBidderRequest)(s, t.bidderCode, e);
								n && r.call(n, e, t)
							}), (function() {
								return y.forEach((function(e) {
									return e()
								}))
							}), c)
						}
					}
				}
				u.forEach((function(e) {
					e.start = (0, S.timestamp)();
					var t = R[e.bidderCode];
					w.logMessage("CALLING BIDDER ======= " + e.bidderCode), B.emit(C.EVENTS
						.BID_REQUESTED, e);
					var n = (0, E.ajaxBuilder)(a, o ? {
						request: o.request.bind(null, e.bidderCode),
						done: o.done
					} : void 0);
					t.callBids(e, r.bind(e), i.bind(e), n)
				}))
			} else w.logWarn(
				"callBids executed with no bidRequests.  Were they filtered by labels or sizing?"
			)
		}, h.videoAdapters = [], h.registerBidAdapter = function(e, t) {
			var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {})
				.supportedMediaTypes,
				r = void 0 === n ? [] : n;
			e && t ? "function" == typeof e.callBids ? (R[t] = e, (0, A.default)(r,
					"video") && h.videoAdapters.push(t), (0, A.default)(r, "native") && v.nativeAdapters
				.push(t)) : w.logError("Bidder adaptor error for bidder code: " + t +
				"bidder must implement a callBids() function") : w.logError(
				"bidAdaptor or bidderCode not specified")
		}, h.aliasBidAdapter = function(t, e) {
			var n, r;
			if (void 0 === R[e]) {
				var i = R[t];
				if (void 0 === i) {
					var o = T.config.getConfig("s2sConfig"),
						a = o && o.bidders;
					a && (0, A.default)(a, e) ? h.aliasRegistry[e] = t : w.logError(
						'bidderCode "' + t + '" is not an existing bidder.',
						"adaptermanager.aliasBidAdapter")
				} else try {
					var d = void 0,
						u = (n = t, r = [], (0, A.default)(h.videoAdapters, n) && r.push(
								"video"), (0, A.default)(v.nativeAdapters, n) && r.push("native"),
							r);
					if (i.constructor.prototype != Object.prototype)(d = new i.constructor)
						.setBidderCode(e);
					else {
						var s = i.getSpec();
						d = (0, c.newBidder)(g({}, s, {
							code: e
						})), h.aliasRegistry[e] = t
					}
					this.registerBidAdapter(d, e, {
						supportedMediaTypes: u
					})
				} catch (e) {
					w.logError(t + " bidder does not currently support aliasing.",
						"adaptermanager.aliasBidAdapter")
				}
			} else w.logMessage('alias name "' + e + '" has been already specified.')
		}, h.registerAnalyticsAdapter = function(e) {
			var t = e.adapter,
				n = e.code;
			t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, r[n] = t) :
				w.logError('Prebid Error: Analytics adaptor error for analytics "' + n +
					'"\n        analytics adapter must implement an enableAnalytics() function'
				) : w.logError(
					"Prebid Error: analyticsAdapter or analyticsCode not specified")
		}, h.enableAnalytics = function(e) {
			w.isArray(e) || (e = [e]), w._each(e, (function(e) {
				var t = r[e.provider];
				t ? t.enableAnalytics(e) : w.logError(
					"Prebid Error: no analytics adapter found in registry for\n        " +
					e.provider + ".")
			}))
		}, h.getBidAdapter = function(e) {
			return R[e]
		}, h.setS2STestingModule = function(e) {
			O = e
		}, h.callTimedOutBidders = function(t, n, r) {
			n = n.map((function(e) {
				return e.params = w.getUserConfiguredParams(t, e.adUnitCode, e.bidder),
					e.timeout = r, e
			})), n = w.groupBy(n, "bidder"), Object.keys(n).forEach((function(e) {
				i(e, "onTimeout", n[e])
			}))
		}, h.callBidWonBidder = function(e, t, n) {
			t.params = w.getUserConfiguredParams(n, t.adUnitCode, t.bidder), i(e,
				"onBidWon", t)
		}, h.callSetTargetingBidder = function(e, t) {
			i(e, "onSetTargeting", t)
		}
	},
	9: function(e, t, n) {
		"use strict";
		var d, r, i = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[
						r])
				}
				return e
			},
			u = n(0),
			o = n(4),
			a = Array.prototype.slice,
			s = Array.prototype.push,
			c = u._map(o.EVENTS, (function(e) {
				return e
			})),
			f = o.EVENT_ID_PATHS,
			l = [];
		e.exports = (d = {}, (r = {}).on = function(e, t, n) {
			if (i = e, u.contains(c, i)) {
				var r = d[e] || {
					que: []
				};
				n ? (r[n] = r[n] || {
					que: []
				}, r[n].que.push(t)) : r.que.push(t), d[e] = r
			} else u.logError("Wrong event name : " + e + " Valid event names :" + c);
			var i
		}, r.emit = function(e) {
			!(function(e, t) {
				u.logMessage("Emitting event for: " + e);
				var n = t[0] || {},
					r = n[f[e]],
					i = d[e] || {
						que: []
					},
					o = u._map(i, (function(e, t) {
						return t
					})),
					a = [];
				l.push({
						eventType: e,
						args: n,
						id: r
					}), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que),
					u._each(a, (function(e) {
						if (e) try {
							e.apply(null, t)
						} catch (e) {
							u.logError("Error executing handler:", "events.js", e)
						}
					}))
			})(e, a.call(arguments, 1))
		}, r.off = function(e, n, r) {
			var i = d[e];
			u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[
				r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, (function(e) {
				var t = i[r].que;
				e === n && t.splice(u.indexOf.call(t, e), 1)
			})) : u._each(i.que, (function(e) {
				var t = i.que;
				e === n && t.splice(u.indexOf.call(t, e), 1)
			})), d[e] = i)
		}, r.get = function() {
			return d
		}, r.getEvents = function() {
			var n = [];
			return u._each(l, (function(e) {
				var t = i({}, e);
				n.push(t)
			})), n
		}, r)
	}
});
pbjsChunk([155], {
	156: function(e, r, a) {
		a(157), e.exports = a(158)
	},
	157: function(e, r, a) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		}), r.spec = void 0;
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
					Symbol.prototype ? "symbol" : typeof e
			},
			p = Object.assign || function(e) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r];
					for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] =
						a[t])
				}
				return e
			},
			u = a(12),
			v = (function(e) {
				{
					if (e && e.__esModule) return e;
					var r = {};
					if (null != e)
						for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] =
							e[a]);
					return r.default = e, r
				}
			})(a(0)),
			t = a(1),
			c = a(2),
			b = n(a(10)),
			h = n(a(7));

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var o = ["id", "mimes", "minduration", "maxduration", "startdelay",
				"skippable", "playback_method", "frameworks"
			],
			_ = ["age", "external_uid", "segments", "gender", "dnt", "language"],
			I = ["geo", "device_id"],
			k = ["enabled", "dongle", "member_id", "debug_timeout"],
			m = {
				body: "description",
				body2: "desc2",
				cta: "ctatext",
				image: {
					serverName: "main_image",
					requiredParams: {
						required: !0
					},
					minimumParams: {
						sizes: [{}]
					}
				},
				icon: {
					serverName: "icon",
					requiredParams: {
						required: !0
					},
					minimumParams: {
						sizes: [{}]
					}
				},
				sponsoredBy: "sponsored_by",
				privacyLink: "privacy_link"
			},
			s = r.spec = {
				code: "appnexus",
				aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience",
					"defymedia", "gourmetads", "matomy", "featureforward", "oftmedia",
					"districtm"
				],
				supportedMediaTypes: [c.BANNER, c.VIDEO, c.NATIVE],
				isBidRequestValid: function(e) {
					return !!(e.params.placementId || e.params.member && e.params.invCode)
				},
				buildRequests: function(e, r) {
					var a = e.map(E),
						t = (0, b.default)(e, A),
						n = void 0;
					t && (n = {}, Object.keys(t.params.user).filter((function(e) {
						return (0, h.default)(_, e)
					})).forEach((function(e) {
						return n[e] = t.params.user[e]
					})));
					var i = (0, b.default)(e, T),
						s = void 0;
					i && i.params && i.params.app && (s = {}, Object.keys(i.params.app).filter(
						(function(e) {
							return (0, h.default)(I, e)
						})).forEach((function(e) {
						return s[e] = i.params.app[e]
					})));
					var d = (0, b.default)(e, R),
						o = void 0;
					d && d.params && i.params.app && i.params.app.id && (o = {
						appid: d.params.app.id
					});
					var p = {},
						u = {},
						c = v.getCookie("apn_prebid_debug") || null;
					if (c) try {
						p = JSON.parse(c)
					} catch (e) {
						v.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
					} else {
						var m = (0, b.default)(e, x);
						m && m.debug && (p = m.debug)
					}
					p && p.enabled && Object.keys(p).filter((function(e) {
						return (0, h.default)(k, e)
					})).forEach((function(e) {
						u[e] = p[e]
					}));
					var l = (0, b.default)(e, N),
						f = l ? parseInt(l.params.member, 10) : 0,
						y = {
							tags: [].concat(function(e) {
								if (Array.isArray(e)) {
									for (var r = 0, a = Array(e.length); r < e.length; r++) a[r] = e[
										r];
									return a
								}
								return Array.from(e)
							}(a)),
							user: n,
							sdk: {
								source: "pbjs",
								version: "1.36.0"
							}
						};
					if (0 < f && (y.member_id = f), i && (y.device = s), d && (y.app = o),
						u.enabled && (y.debug = u, v.logInfo(
							"AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4)
						)), r && r.gdprConsent && (y.gdpr_consent = {
							consent_string: r.gdprConsent.consentString,
							consent_required: r.gdprConsent.gdprApplies
						}), r && r.refererInfo) {
						var g = {
							rd_ref: encodeURIComponent(r.refererInfo.referer),
							rd_top: r.refererInfo.reachedTop,
							rd_ifs: r.refererInfo.numIframes,
							rd_stk: r.refererInfo.stack.map((function(e) {
								return encodeURIComponent(e)
							})).join(",")
						};
						y.referrer_detection = g
					}
					return {
						method: "POST",
						url: "//ib.adnxs.com/ut/v3/prebid",
						data: JSON.stringify(y),
						bidderRequest: r
					}
				},
				interpretResponse: function(e, r) {
					var i = this,
						s = r.bidderRequest;
					e = e.body;
					var d = [];
					if (!e || e.error) {
						var a = "in response for " + s.bidderCode + " adapter";
						return e && e.error && (a += ": " + e.error), v.logError(a), d
					}
					if (e.tags && e.tags.forEach((function(e) {
							var r, a, t = (r = e) && r.ads && r.ads.length && (0, b.default)(r
								.ads, (function(e) {
									return e.rtb
								}));
							if (t && 0 !== t.cpm && (0, h.default)(i.supportedMediaTypes, t.ad_type)) {
								var n = (function(e, r, a) {
									var t = v.getBidRequest(e.uuid, [a]),
										n = {
											requestId: e.uuid,
											cpm: r.cpm,
											creativeId: r.creative_id,
											dealId: r.deal_id,
											currency: "USD",
											netRevenue: !0,
											ttl: 300,
											adUnitCode: t.adUnitCode,
											appnexus: {
												buyerMemberId: r.buyer_member_id,
												dealPriority: r.deal_priority,
												dealCode: r.deal_code
											}
										};
									if (r.rtb.video) {
										if (p(n, {
												width: r.rtb.video.player_width,
												height: r.rtb.video.player_height,
												vastUrl: r.rtb.video.asset_url,
												vastImpUrl: r.notify_url,
												ttl: 3600
											}), r.renderer_url) {
											var i = v.deepAccess(a.bids[0], "renderer.options");
											p(n, {
													adResponse: e,
													renderer: (function(e, r) {
														var a = 2 < arguments.length && void 0 !== arguments[2] ?
															arguments[2] : {},
															t = u.Renderer.install({
																id: r.renderer_id,
																url: r.renderer_url,
																config: a,
																loaded: !1,
																adUnitCode: e
															});
														try {
															t.setRender(y)
														} catch (e) {
															v.logWarn(
																"Prebid Error calling setRender on renderer", e)
														}
														return t.setEventHandlers({
															impression: function() {
																return v.logMessage(
																	"AppNexus outstream video impression event")
															},
															loaded: function() {
																return v.logMessage(
																	"AppNexus outstream video loaded event")
															},
															ended: function() {
																v.logMessage(
																		"AppNexus outstream renderer video event"),
																	document.querySelector("#" + e).style.display =
																	"none"
															}
														}), t
													})(n.adUnitCode, r, i)
												}), n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video =
												n.adResponse.ad.rtb.video
										}
									} else if (r.rtb[c.NATIVE]) {
										var s = r.rtb[c.NATIVE];
										n[c.NATIVE] = {
											title: s.title,
											body: s.desc,
											body2: s.desc2,
											cta: s.ctatext,
											rating: s.rating,
											sponsoredBy: s.sponsored,
											privacyLink: s.privacy_link,
											clickUrl: s.link.url,
											clickTrackers: s.link.click_trackers,
											impressionTrackers: s.impression_trackers,
											javascriptTrackers: s.javascript_trackers
										}, s.main_img && (n.native.image = {
											url: s.main_img.url,
											height: s.main_img.height,
											width: s.main_img.width
										}), s.icon && (n.native.icon = {
											url: s.icon.url,
											height: s.icon.height,
											width: s.icon.width
										})
									} else {
										p(n, {
											width: r.rtb.banner.width,
											height: r.rtb.banner.height,
											ad: r.rtb.banner.content
										});
										try {
											var d = r.rtb.trackers[0].impression_urls[0],
												o = v.createTrackPixelHtml(d);
											n.ad += o
										} catch (e) {
											v.logError("Error appending tracking pixel", e)
										}
									}
									return n
								})(e, t, s);
								n.mediaType = (a = t.ad_type) === c.VIDEO ? c.VIDEO : a === c.NATIVE ?
									c.NATIVE : c.BANNER, d.push(n)
							}
						})), e.debug && e.debug.debug_info) {
						var t = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
						t = t.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm,
							"\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(
							/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(
							/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(
							/(<([^>]+)>)/gim, ""), v.logMessage(
							"https://console.appnexus.com/docs/understanding-the-debug-auction"
						), v.logMessage(t)
					}
					return d
				},
				getUserSyncs: function(e) {
					if (e.iframeEnabled) return [{
						type: "iframe",
						url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
					}]
				},
				transformBidParams: function(a, e) {
					return a = v.convertTypes({
						member: "string",
						invCode: "string",
						placementId: "number",
						keywords: v.transformBidderParamKeywords
					}, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule &&
						a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, d(a.keywords) &&
						a.keywords.forEach(l), Object.keys(a).forEach((function(e) {
							var r = v.convertCamelToUnderscore(e);
							r !== e && (a[r] = a[e], delete a[e])
						}))), a
				}
			};

		function d(e) {
			return !!(v.isArray(e) && 0 < e.length)
		}

		function l(e) {
			d(e.value) && "" === e.value[0] && delete e.value
		}

		function E(r) {
			var s, d, a = {};
			if (a.sizes = f(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a
				.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId,
					10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes ||
				!1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !
				0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position &&
				(a.position = {
					above: 1,
					below: 2
				}[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code =
					r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes =
					f(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params
					.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params
				.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId &&
				(a.external_imp_id = r.params.externalImpId), !v.isEmpty(r.params.keywords)
			) {
				var e = v.transformBidderParamKeywords(r.params.keywords);
				0 < e.length && e.forEach(l), a.keywords = e
			}
			if ((r.mediaType === c.NATIVE || v.deepAccess(r, "mediaTypes." + c.NATIVE)) &&
				(a.ad_types.push(c.NATIVE), r.nativeParams)) {
				var t = (s = r.nativeParams, d = {}, Object.keys(s).forEach((function(e) {
					var r = m[e] && m[e].serverName || m[e] || e,
						a = m[e] && m[e].requiredParams;
					d[r] = p({}, a, s[e]);
					var t = m[e] && m[e].minimumParams;
					if (a && t) {
						var n = Object.keys(s[e]),
							i = Object.keys(a);
						0 === n.filter((function(e) {
							return !(0, h.default)(i, e)
						})).length && (d[r] = p({}, d[r], t))
					}
				})), d);
				a[c.NATIVE] = {
					layouts: [t]
				}
			}
			var n = v.deepAccess(r, "mediaTypes." + c.VIDEO),
				i = v.deepAccess(r, "mediaTypes.video.context");
			return (r.mediaType === c.VIDEO || n) && a.ad_types.push(c.VIDEO), (r.mediaType ===
					c.VIDEO || n && "outstream" !== i) && (a.require_asset_url = !0), r.params
				.video && (a.video = {}, Object.keys(r.params.video).filter((function(e) {
					return (0, h.default)(o, e)
				})).forEach((function(e) {
					return a.video[e] = r.params.video[e]
				}))), (v.isEmpty(r.mediaType) && v.isEmpty(r.mediaTypes) || r.mediaType ===
					c.BANNER || r.mediaTypes && r.mediaTypes[c.BANNER]) && a.ad_types.push(
					c.BANNER), a
		}

		function f(e) {
			var r = [],
				a = {};
			if (v.isArray(e) && 2 === e.length && !v.isArray(e[0])) a.width =
				parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
			else if ("object" === (void 0 === e ? "undefined" : i(e)))
				for (var t = 0; t < e.length; t++) {
					var n = e[t];
					(a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(
						a)
				}
			return r
		}

		function A(e) {
			return !!e.params.user
		}

		function N(e) {
			return !!parseInt(e.params.member, 10)
		}

		function T(e) {
			if (e.params) return !!e.params.app
		}

		function R(e) {
			return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
		}

		function x(e) {
			return !!e.debug
		}

		function y(e) {
			e.renderer.push((function() {
				window.ANOutstreamVideo.renderAd({
					tagId: e.adResponse.tag_id,
					sizes: [e.getSize().split("x")],
					targetId: e.adUnitCode,
					uuid: e.adResponse.uuid,
					adResponse: e.adResponse,
					rendererOptions: e.renderer.getConfig()
				}, function(e, r, a) {
					e.renderer.handleVideoEvent({
						id: r,
						eventName: a
					})
				}.bind(null, e))
			}))
		}(0, t.registerBidder)(s)
	},
	158: function(e, r) {}
}, [156]);
pbjsChunk([191], {
	226: function(r, e, n) {
		r.exports = n(227)
	},
	227: function(r, n, e) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.currencyRates = n.currencySupportEnabled = void 0;
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(r) {
				return typeof r
			} : function(r) {
				return r && "function" == typeof Symbol && r.constructor === Symbol && r !==
					Symbol.prototype ? "symbol" : typeof r
			};
		n.setConfig = m, n.addBidResponseHook = w;
		var c, i = e(16),
			d = (c = i) && c.__esModule ? c : {
				default: c
			},
			f = e(4),
			t = e(6),
			l = (function(r) {
				{
					if (r && r.__esModule) return r;
					var e = {};
					if (null != r)
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] =
							r[n]);
					return e.default = r, e
				}
			})(e(0)),
			u = e(3),
			s = e(20);
		var a, y = "https://currency.prebid.org/latest.json",
			p = 4,
			v = [],
			g = {},
			b = !1,
			C = "USD",
			h = n.currencySupportEnabled = !1,
			S = n.currencyRates = {},
			R = {};

		function m(r) {
			var e = y;
			"object" === o(r.rates) && (S.conversions = r.rates, b = !0), "object" ===
				o(r.defaultRates) && (a = r.defaultRates), "string" == typeof r.adServerCurrency ?
				(l.logInfo("enabling currency support", arguments), C = r.adServerCurrency,
					r.conversionRateFile && (l.logInfo(
							"currency using override conversionRateFile:", r.conversionRateFile),
						e = r.conversionRateFile), (function(r) {
						g = {}, n.currencySupportEnabled = h = !0, l.logInfo(
								"Installing addBidResponse decorator for currency module",
								arguments), s.hooks.addBidResponse.addHook(w, 100), S.conversions ||
							(0, t.ajax)(r, {
								success: function(e) {
									try {
										n.currencyRates = S = JSON.parse(e), l.logInfo(
											"currencyRates set to " + JSON.stringify(S)), b = !0, D()
									} catch (r) {
										I("Failed to parse currencyRates response: " + e)
									}
								},
								error: I
							})
					})(e)) : (l.logInfo("disabling currency support"), (function() {
					l.logInfo("Uninstalling addBidResponse decorator for currency module",
							arguments), s.hooks.addBidResponse.removeHook(w, 100), C = "USD", g = {},
						n.currencySupportEnabled = h = !1, b = !1, n.currencyRates = S = {},
						R = {}
				})()), "object" === o(r.bidderCurrencyDefault) && (R = r.bidderCurrencyDefault)
		}

		function I(r) {
			a ? (S.conversions = a, b = !0, l.logWarn(r), l.logWarn(
				"Currency failed loading rates, falling back to currency.defaultRates"
			)) : l.logError(r)
		}

		function w(r, e, n) {
			if (!e) return n.apply(this, arguments);
			var o = e.bidderCode || e.bidder;
			if (R[o]) {
				var c = R[o];
				e.currency && c !== e.currency ? l.logWarn("Currency default '" + o +
						": " + c + "' ignored. adapter specified '" + e.currency + "'") : e.currency =
					c
			}
			e.currency || (l.logWarn(
					'Currency not specified on bid.  Defaulted to "USD"'), e.currency =
				"USD");
			var i, t, u, s = e.currency,
				a = e.cpm;
			if (e.getCpmInNewCurrency = function(r) {
					return (parseFloat(a) * E(s, r)).toFixed(3)
				}, e.currency === C) return n.apply(this, arguments);
			v.push((i = n, t = this, u = arguments, function() {
				var e = u[1];
				if (void 0 !== e && "currency" in e && "cpm" in e) {
					var r = e.currency;
					try {
						var n = E(r);
						e.originalCpm = e.cpm, e.originalCurrency = e.currency, 1 !== n &&
							(e.cpm = (parseFloat(e.cpm) * n).toFixed(4), e.currency = C)
					} catch (r) {
						l.logWarn("Returning NO_BID, getCurrencyConversion threw error: ",
							r), u[1] = d.default.createBid(f.STATUS.NO_BID, {
							bidder: e.bidderCode || e.bidder,
							bidId: e.adId
						})
					}
				}
				return i.apply(t, u)
			})), h && !b || D()
		}

		function D() {
			for (; 0 < v.length;) v.shift()()
		}

		function E(r) {
			var e, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
				C,
				o = null,
				c = r + "->" + n;
			if (c in g) o = g[c], l.logMessage("Using conversionCache value " + o +
				" for " + c);
			else if (!1 === h) {
				if ("USD" !== r) throw new Error(
					"Prebid currency support has not been enabled and fromCurrency is not USD"
				);
				o = 1
			} else if (r === n) o = 1;
			else if (r in S.conversions) {
				if (!(n in (e = S.conversions[r]))) throw new Error(
					"Specified adServerCurrency in config '" + n +
					"' not found in the currency rates file");
				o = e[n], l.logInfo("getCurrencyConversion using direct " + r + " to " +
					n + " conversionRate " + o)
			} else if (n in S.conversions) {
				if (!(r in (e = S.conversions[n]))) throw new Error(
					"Specified fromCurrency '" + r +
					"' not found in the currency rates file");
				o = j(1 / e[r], p), l.logInfo("getCurrencyConversion using reciprocal " +
					r + " to " + n + " conversionRate " + o)
			} else {
				var i = Object.keys(S.conversions)[0];
				if (!(r in S.conversions[i])) throw new Error("Specified fromCurrency '" +
					r + "' not found in the currency rates file");
				var t = 1 / S.conversions[i][r];
				if (!(n in S.conversions[i])) throw new Error(
					"Specified adServerCurrency in config '" + n +
					"' not found in the currency rates file");
				o = j(t * S.conversions[i][n], p), l.logInfo(
					"getCurrencyConversion using intermediate " + r + " thru " + i +
					" to " + n + " conversionRate " + o)
			}
			return c in g || (l.logMessage("Adding conversionCache value " + o +
				" for " + c), g[c] = o), o
		}

		function j(r, e) {
			for (var n = 1, o = 0; o < e; o++) n += "0";
			return Math.round(r * n) / n
		}
		u.config.getConfig("currency", (function(r) {
			return m(r.currency)
		}))
	}
}, [226]);
pbjs.processQueue();
