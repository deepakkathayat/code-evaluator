 /* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */
!function() {
    function e(e) {
        var t = n;
        e && (n[e] || (n[e] = {}), t = n[e]), t.define && t.define.packaged || (i.original = t.define, t.define = i, t.define.packaged = !0), t.require && t.require.packaged || (r.original = t.require, t.require = r, t.require.packaged = !0)
    }
    var t = "", n = function() {
        return this
    }();
    if (n || "undefined" == typeof window || (n = window), t || "undefined" == typeof requirejs) {
        var i = function(e, t, n) {
            return "string" != typeof e ? void (i.original ? i.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace())) : (2 == arguments.length && (n = t), void (i.modules[e] || (i.payloads[e] = n, i.modules[e] = null)))
        };
        i.modules = {}, i.payloads = {};
        var o = function(e, t, n) {
            if ("string" == typeof t) {
                var i = a(e, t);
                if (void 0 != i)
                    return n && n(), i
            } else if ("[object Array]" === Object.prototype.toString.call(t)) {
                for (var o = [], s = 0, l = t.length; l > s; ++s) {
                    var c = a(e, t[s]);
                    if (void 0 == c && r.original)
                        return;
                    o.push(c)
                }
                return n && n.apply(null, o) || !0
            }
        }, r = function(e, t) {
            var n = o("", e, t);
            return void 0 == n && r.original ? r.original.apply(this, arguments) : n
        }, s = function(e, t) {
            if (-1 !== t.indexOf("!")) {
                var n = t.split("!");
                return s(e, n[0]) + "!" + s(e, n[1])
            }
            if ("." == t.charAt(0)) {
                var i = e.split("/").slice(0, -1).join("/");
                for (t = i + "/" + t; -1 !== t.indexOf(".") && o != t; ) {
                    var o = t;
                    t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
                }
            }
            return t
        }, a = function(e, t) {
            t = s(e, t);
            var n = i.modules[t];
            if (!n) {
                if (n = i.payloads[t], "function" == typeof n) {
                    var r = {}, a = {id: t,uri: "",exports: r,packaged: !0}, l = function(e, n) {
                        return o(t, e, n)
                    }, c = n(l, r, a);
                    r = c || a.exports, i.modules[t] = r, delete i.payloads[t]
                }
                n = i.modules[t] = r || n
            }
            return n
        };
        e(t)
    }
}(), define("ace/lib/regexp", ["require", "exports", "module"], function() {
    "use strict";
    function e(e) {
        return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
    }
    function t(e, t, n) {
        if (Array.prototype.indexOf)
            return e.indexOf(t, n);
        for (var i = n || 0; i < e.length; i++)
            if (e[i] === t)
                return i;
        return -1
    }
    var n = {exec: RegExp.prototype.exec,test: RegExp.prototype.test,match: String.prototype.match,replace: String.prototype.replace,split: String.prototype.split}, i = void 0 === n.exec.call(/()??/, "")[1], o = function() {
        var e = /^/g;
        return n.test.call(e, ""), !e.lastIndex
    }();
    o && i || (RegExp.prototype.exec = function(r) {
        var s, a, l = n.exec.apply(this, arguments);
        if ("string" == typeof r && l) {
            if (!i && l.length > 1 && t(l, "") > -1 && (a = RegExp(this.source, n.replace.call(e(this), "g", "")), n.replace.call(r.slice(l.index), a, function() {
                for (var e = 1; e < arguments.length - 2; e++)
                    void 0 === arguments[e] && (l[e] = void 0)
            })), this._xregexp && this._xregexp.captureNames)
                for (var c = 1; c < l.length; c++)
                    s = this._xregexp.captureNames[c - 1], s && (l[s] = l[c]);
            !o && this.global && !l[0].length && this.lastIndex > l.index && this.lastIndex--
        }
        return l
    }, o || (RegExp.prototype.test = function(e) {
        var t = n.exec.call(this, e);
        return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t
    }))
}), define("ace/lib/es5-shim", ["require", "exports", "module"], function() {
    function e() {
    }
    function t(e) {
        try {
            return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
        } catch (t) {
        }
    }
    function n(e) {
        return e = +e, e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
    }
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var n = this;
        if ("function" != typeof n)
            throw new TypeError("Function.prototype.bind called on incompatible " + n);
        var i = u.call(arguments, 1), o = function() {
            if (this instanceof o) {
                var e = n.apply(this, i.concat(u.call(arguments)));
                return Object(e) === e ? e : this
            }
            return n.apply(t, i.concat(u.call(arguments)))
        };
        return n.prototype && (e.prototype = n.prototype, o.prototype = new e, e.prototype = null), o
    });
    var i, o, r, s, a, l = Function.prototype.call, c = Array.prototype, h = Object.prototype, u = c.slice, d = l.bind(h.toString), g = l.bind(h.hasOwnProperty);
    if ((a = g(h, "__defineGetter__")) && (i = l.bind(h.__defineGetter__), o = l.bind(h.__defineSetter__), r = l.bind(h.__lookupGetter__), s = l.bind(h.__lookupSetter__)), 2 != [1, 2].splice(0).length)
        if (function() {
            function e(e) {
                var t = new Array(e + 2);
                return t[0] = t[1] = 0, t
            }
            var t, n = [];
            return n.splice.apply(n, e(20)), n.splice.apply(n, e(26)), t = n.length, n.splice(5, 0, "XXX"), t + 1 == n.length, t + 1 == n.length ? !0 : void 0
        }()) {
            var f = Array.prototype.splice;
            Array.prototype.splice = function(e, t) {
                return arguments.length ? f.apply(this, [void 0 === e ? 0 : e, void 0 === t ? this.length - e : t].concat(u.call(arguments, 2))) : []
            }
        } else
            Array.prototype.splice = function(e, t) {
                var n = this.length;
                e > 0 ? e > n && (e = n) : void 0 == e ? e = 0 : 0 > e && (e = Math.max(n + e, 0)), n > e + t || (t = n - e);
                var i = this.slice(e, e + t), o = u.call(arguments, 2), r = o.length;
                if (e === n)
                    r && this.push.apply(this, o);
                else {
                    var s = Math.min(t, n - e), a = e + s, l = a + r - s, c = n - a, h = n - s;
                    if (a > l)
                        for (var d = 0; c > d; ++d)
                            this[l + d] = this[a + d];
                    else if (l > a)
                        for (d = c; d--; )
                            this[l + d] = this[a + d];
                    if (r && e === h)
                        this.length = h, this.push.apply(this, o);
                    else
                        for (this.length = h + r, d = 0; r > d; ++d)
                            this[e + d] = o[d]
                }
                return i
            };
    Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" == d(e)
    });
    var m = Object("a"), p = "a" != m[0] || !(0 in m);
    if (Array.prototype.forEach || (Array.prototype.forEach = function(e) {
        var t = _(this), n = p && "[object String]" == d(this) ? this.split("") : t, i = arguments[1], o = -1, r = n.length >>> 0;
        if ("[object Function]" != d(e))
            throw new TypeError;
        for (; ++o < r; )
            o in n && e.call(i, n[o], o, t)
    }), Array.prototype.map || (Array.prototype.map = function(e) {
        var t = _(this), n = p && "[object String]" == d(this) ? this.split("") : t, i = n.length >>> 0, o = Array(i), r = arguments[1];
        if ("[object Function]" != d(e))
            throw new TypeError(e + " is not a function");
        for (var s = 0; i > s; s++)
            s in n && (o[s] = e.call(r, n[s], s, t));
        return o
    }), Array.prototype.filter || (Array.prototype.filter = function(e) {
        var t, n = _(this), i = p && "[object String]" == d(this) ? this.split("") : n, o = i.length >>> 0, r = [], s = arguments[1];
        if ("[object Function]" != d(e))
            throw new TypeError(e + " is not a function");
        for (var a = 0; o > a; a++)
            a in i && (t = i[a], e.call(s, t, a, n) && r.push(t));
        return r
    }), Array.prototype.every || (Array.prototype.every = function(e) {
        var t = _(this), n = p && "[object String]" == d(this) ? this.split("") : t, i = n.length >>> 0, o = arguments[1];
        if ("[object Function]" != d(e))
            throw new TypeError(e + " is not a function");
        for (var r = 0; i > r; r++)
            if (r in n && !e.call(o, n[r], r, t))
                return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function(e) {
        var t = _(this), n = p && "[object String]" == d(this) ? this.split("") : t, i = n.length >>> 0, o = arguments[1];
        if ("[object Function]" != d(e))
            throw new TypeError(e + " is not a function");
        for (var r = 0; i > r; r++)
            if (r in n && e.call(o, n[r], r, t))
                return !0;
        return !1
    }), Array.prototype.reduce || (Array.prototype.reduce = function(e) {
        var t = _(this), n = p && "[object String]" == d(this) ? this.split("") : t, i = n.length >>> 0;
        if ("[object Function]" != d(e))
            throw new TypeError(e + " is not a function");
        if (!i && 1 == arguments.length)
            throw new TypeError("reduce of empty array with no initial value");
        var o, r = 0;
        if (arguments.length >= 2)
            o = arguments[1];
        else
            for (; ; ) {
                if (r in n) {
                    o = n[r++];
                    break
                }
                if (++r >= i)
                    throw new TypeError("reduce of empty array with no initial value")
            }
        for (; i > r; r++)
            r in n && (o = e.call(void 0, o, n[r], r, t));
        return o
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(e) {
        var t = _(this), n = p && "[object String]" == d(this) ? this.split("") : t, i = n.length >>> 0;
        if ("[object Function]" != d(e))
            throw new TypeError(e + " is not a function");
        if (!i && 1 == arguments.length)
            throw new TypeError("reduceRight of empty array with no initial value");
        var o, r = i - 1;
        if (arguments.length >= 2)
            o = arguments[1];
        else
            for (; ; ) {
                if (r in n) {
                    o = n[r--];
                    break
                }
                if (--r < 0)
                    throw new TypeError("reduceRight of empty array with no initial value")
            }
        do
            r in this && (o = e.call(void 0, o, n[r], r, t));
        while (r--);
        return o
    }), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function(e) {
        var t = p && "[object String]" == d(this) ? this.split("") : _(this), i = t.length >>> 0;
        if (!i)
            return -1;
        var o = 0;
        for (arguments.length > 1 && (o = n(arguments[1])), o = o >= 0 ? o : Math.max(0, i + o); i > o; o++)
            if (o in t && t[o] === e)
                return o;
        return -1
    }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function(e) {
        var t = p && "[object String]" == d(this) ? this.split("") : _(this), i = t.length >>> 0;
        if (!i)
            return -1;
        var o = i - 1;
        for (arguments.length > 1 && (o = Math.min(o, n(arguments[1]))), o = o >= 0 ? o : i - Math.abs(o); o >= 0; o--)
            if (o in t && e === t[o])
                return o;
        return -1
    }), Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
        return e.__proto__ || (e.constructor ? e.constructor.prototype : h)
    }), !Object.getOwnPropertyDescriptor) {
        var v = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function(e, t) {
            if ("object" != typeof e && "function" != typeof e || null === e)
                throw new TypeError(v + e);
            if (g(e, t)) {
                var n, i, o;
                if (n = {enumerable: !0,configurable: !0}, a) {
                    var l = e.__proto__;
                    e.__proto__ = h;
                    var i = r(e, t), o = s(e, t);
                    if (e.__proto__ = l, i || o)
                        return i && (n.get = i), o && (n.set = o), n
                }
                return n.value = e[t], n
            }
        }
    }
    if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
        return Object.keys(e)
    }), !Object.create) {
        var A;
        A = null === Object.prototype.__proto__ ? function() {
            return {__proto__: null}
        } : function() {
            var e = {};
            for (var t in e)
                e[t] = null;
            return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e
        }, Object.create = function(e, t) {
            var n;
            if (null === e)
                n = A();
            else {
                if ("object" != typeof e)
                    throw new TypeError("typeof prototype[" + typeof e + "] != 'object'");
                var i = function() {
                };
                i.prototype = e, n = new i, n.__proto__ = e
            }
            return void 0 !== t && Object.defineProperties(n, t), n
        }
    }
    if (Object.defineProperty) {
        var C = t({}), w = "undefined" == typeof document || t(document.createElement("div"));
        if (!C || !w)
            var F = Object.defineProperty
    }
    if (!Object.defineProperty || F) {
        var E = "Property description must be an object: ", b = "Object.defineProperty called on non-object: ", y = "getters & setters can not be defined on this javascript engine";
        Object.defineProperty = function(e, t, n) {
            if ("object" != typeof e && "function" != typeof e || null === e)
                throw new TypeError(b + e);
            if ("object" != typeof n && "function" != typeof n || null === n)
                throw new TypeError(E + n);
            if (F)
                try {
                    return F.call(Object, e, t, n)
                } catch (l) {
                }
            if (g(n, "value"))
                if (a && (r(e, t) || s(e, t))) {
                    var c = e.__proto__;
                    e.__proto__ = h, delete e[t], e[t] = n.value, e.__proto__ = c
                } else
                    e[t] = n.value;
            else {
                if (!a)
                    throw new TypeError(y);
                g(n, "get") && i(e, t, n.get), g(n, "set") && o(e, t, n.set)
            }
            return e
        }
    }
    Object.defineProperties || (Object.defineProperties = function(e, t) {
        for (var n in t)
            g(t, n) && Object.defineProperty(e, n, t[n]);
        return e
    }), Object.seal || (Object.seal = function(e) {
        return e
    }), Object.freeze || (Object.freeze = function(e) {
        return e
    });
    try {
        Object.freeze(function() {
        })
    } catch ($) {
        Object.freeze = function(e) {
            return function(t) {
                return "function" == typeof t ? t : e(t)
            }
        }(Object.freeze)
    }
    if (Object.preventExtensions || (Object.preventExtensions = function(e) {
        return e
    }), Object.isSealed || (Object.isSealed = function() {
        return !1
    }), Object.isFrozen || (Object.isFrozen = function() {
        return !1
    }), Object.isExtensible || (Object.isExtensible = function(e) {
        if (Object(e) === e)
            throw new TypeError;
        for (var t = ""; g(e, t); )
            t += "?";
        e[t] = !0;
        var n = g(e, t);
        return delete e[t], n
    }), !Object.keys) {
        var x = !0, k = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], S = k.length;
        for (var B in {toString: null})
            x = !1;
        Object.keys = function T(e) {
            if ("object" != typeof e && "function" != typeof e || null === e)
                throw new TypeError("Object.keys called on a non-object");
            var T = [];
            for (var t in e)
                g(e, t) && T.push(t);
            if (x)
                for (var n = 0, i = S; i > n; n++) {
                    var o = k[n];
                    g(e, o) && T.push(o)
                }
            return T
        }
    }
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    var D = "	\nf\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    if (!String.prototype.trim || D.trim()) {
        D = "[" + D + "]";
        var L = new RegExp("^" + D + D + "*"), R = new RegExp(D + D + "*$");
        String.prototype.trim = function() {
            return String(this).replace(L, "").replace(R, "")
        }
    }
    var _ = function(e) {
        if (null == e)
            throw new TypeError("can't convert " + e + " to object");
        return Object(e)
    }
}), define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function(e) {
    "use strict";
    e("./regexp"), e("./es5-shim")
}), define("ace/lib/dom", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var n = "http://www.w3.org/1999/xhtml";
    t.getDocumentHead = function(e) {
        return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement
    }, t.createElement = function(e, t) {
        return document.createElementNS ? document.createElementNS(t || n, e) : document.createElement(e)
    }, t.hasCssClass = function(e, t) {
        var n = (e.className || "").split(/\s+/g);
        return -1 !== n.indexOf(t)
    }, t.addCssClass = function(e, n) {
        t.hasCssClass(e, n) || (e.className += " " + n)
    }, t.removeCssClass = function(e, t) {
        for (var n = e.className.split(/\s+/g); ; ) {
            var i = n.indexOf(t);
            if (-1 == i)
                break;
            n.splice(i, 1)
        }
        e.className = n.join(" ")
    }, t.toggleCssClass = function(e, t) {
        for (var n = e.className.split(/\s+/g), i = !0; ; ) {
            var o = n.indexOf(t);
            if (-1 == o)
                break;
            i = !1, n.splice(o, 1)
        }
        return i && n.push(t), e.className = n.join(" "), i
    }, t.setCssClass = function(e, n, i) {
        i ? t.addCssClass(e, n) : t.removeCssClass(e, n)
    }, t.hasCssString = function(e, t) {
        var n, i = 0;
        if (t = t || document, t.createStyleSheet && (n = t.styleSheets)) {
            for (; i < n.length; )
                if (n[i++].owningElement.id === e)
                    return !0
        } else if (n = t.getElementsByTagName("style"))
            for (; i < n.length; )
                if (n[i++].id === e)
                    return !0;
        return !1
    }, t.importCssString = function(e, i, o) {
        if (o = o || document, i && t.hasCssString(i, o))
            return null;
        var r;
        o.createStyleSheet ? (r = o.createStyleSheet(), r.cssText = e, i && (r.owningElement.id = i)) : (r = o.createElementNS ? o.createElementNS(n, "style") : o.createElement("style"), r.appendChild(o.createTextNode(e)), i && (r.id = i), t.getDocumentHead(o).appendChild(r))
    }, t.importCssStylsheet = function(e, n) {
        if (n.createStyleSheet)
            n.createStyleSheet(e);
        else {
            var i = t.createElement("link");
            i.rel = "stylesheet", i.href = e, t.getDocumentHead(n).appendChild(i)
        }
    }, t.getInnerWidth = function(e) {
        return parseInt(t.computedStyle(e, "paddingLeft"), 10) + parseInt(t.computedStyle(e, "paddingRight"), 10) + e.clientWidth
    }, t.getInnerHeight = function(e) {
        return parseInt(t.computedStyle(e, "paddingTop"), 10) + parseInt(t.computedStyle(e, "paddingBottom"), 10) + e.clientHeight
    }, "undefined" != typeof document && (void 0 !== window.pageYOffset ? (t.getPageScrollTop = function() {
        return window.pageYOffset
    }, t.getPageScrollLeft = function() {
        return window.pageXOffset
    }) : (t.getPageScrollTop = function() {
        return document.body.scrollTop
    }, t.getPageScrollLeft = function() {
        return document.body.scrollLeft
    }), t.computedStyle = window.getComputedStyle ? function(e, t) {
        return t ? (window.getComputedStyle(e, "") || {})[t] || "" : window.getComputedStyle(e, "") || {}
    } : function(e, t) {
        return t ? e.currentStyle[t] : e.currentStyle
    }, t.scrollbarWidth = function(e) {
        var n = t.createElement("ace_inner");
        n.style.width = "100%", n.style.minWidth = "0px", n.style.height = "200px", n.style.display = "block";
        var i = t.createElement("ace_outer"), o = i.style;
        o.position = "absolute", o.left = "-10000px", o.overflow = "hidden", o.width = "200px", o.minWidth = "0px", o.height = "150px", o.display = "block", i.appendChild(n);
        var r = e.documentElement;
        r.appendChild(i);
        var s = n.offsetWidth;
        o.overflow = "scroll";
        var a = n.offsetWidth;
        return s == a && (a = i.clientWidth), r.removeChild(i), s - a
    }, t.setInnerHtml = function(e, t) {
        var n = e.cloneNode(!1);
        return n.innerHTML = t, e.parentNode.replaceChild(n, e), n
    }, "textContent" in document.documentElement ? (t.setInnerText = function(e, t) {
        e.textContent = t
    }, t.getInnerText = function(e) {
        return e.textContent
    }) : (t.setInnerText = function(e, t) {
        e.innerText = t
    }, t.getInnerText = function(e) {
        return e.innerText
    }), t.getParentWindow = function(e) {
        return e.defaultView || e.parentWindow
    })
}), define("ace/lib/oop", ["require", "exports", "module"], function(e, t) {
    "use strict";
    t.inherits = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {constructor: {value: e,enumerable: !1,writable: !0,configurable: !0}})
    }, t.mixin = function(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }, t.implement = function(e, n) {
        t.mixin(e, n)
    }
}), define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"], function(e, t) {
    "use strict";
    e("./fixoldbrowsers");
    var n = e("./oop"), i = function() {
        var e, t, i = {MODIFIER_KEYS: {16: "Shift",17: "Ctrl",18: "Alt",224: "Meta"},KEY_MODS: {ctrl: 1,alt: 2,option: 2,shift: 4,"super": 8,meta: 8,command: 8,cmd: 8},FUNCTION_KEYS: {8: "Backspace",9: "Tab",13: "Return",19: "Pause",27: "Esc",32: "Space",33: "PageUp",34: "PageDown",35: "End",36: "Home",37: "Left",38: "Up",39: "Right",40: "Down",44: "Print",45: "Insert",46: "Delete",96: "Numpad0",97: "Numpad1",98: "Numpad2",99: "Numpad3",100: "Numpad4",101: "Numpad5",102: "Numpad6",103: "Numpad7",104: "Numpad8",105: "Numpad9","-13": "NumpadEnter",112: "F1",113: "F2",114: "F3",115: "F4",116: "F5",117: "F6",118: "F7",119: "F8",120: "F9",121: "F10",122: "F11",123: "F12",144: "Numlock",145: "Scrolllock"},PRINTABLE_KEYS: {32: " ",48: "0",49: "1",50: "2",51: "3",52: "4",53: "5",54: "6",55: "7",56: "8",57: "9",59: ";",61: "=",65: "a",66: "b",67: "c",68: "d",69: "e",70: "f",71: "g",72: "h",73: "i",74: "j",75: "k",76: "l",77: "m",78: "n",79: "o",80: "p",81: "q",82: "r",83: "s",84: "t",85: "u",86: "v",87: "w",88: "x",89: "y",90: "z",107: "+",109: "-",110: ".",187: "=",188: ",",189: "-",190: ".",191: "/",192: "`",219: "[",220: "\\",221: "]",222: "'"}};
        for (t in i.FUNCTION_KEYS)
            e = i.FUNCTION_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
        for (t in i.PRINTABLE_KEYS)
            e = i.PRINTABLE_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
        return n.mixin(i, i.MODIFIER_KEYS), n.mixin(i, i.PRINTABLE_KEYS), n.mixin(i, i.FUNCTION_KEYS), i.enter = i["return"], i.escape = i.esc, i.del = i["delete"], i[173] = "-", function() {
            for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e.length); t--; )
                i.KEY_MODS[t] = e.filter(function(e) {
                    return t & i.KEY_MODS[e]
                }).join("-") + "-"
        }(), i.KEY_MODS[0] = "", i.KEY_MODS[-1] = "input-", i
    }();
    n.mixin(t, i), t.keyCodeToString = function(e) {
        var t = i[e];
        return "string" != typeof t && (t = String.fromCharCode(e)), t.toLowerCase()
    }
}), define("ace/lib/useragent", ["require", "exports", "module"], function(e, t) {
    "use strict";
    if (t.OS = {LINUX: "LINUX",MAC: "MAC",WINDOWS: "WINDOWS"}, t.getOS = function() {
        return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
    }, "object" == typeof navigator) {
        var n = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(), i = navigator.userAgent;
        t.isWin = "win" == n, t.isMac = "mac" == n, t.isLinux = "linux" == n, t.isIE = parseFloat("Microsoft Internet Explorer" == navigator.appName || navigator.appName.indexOf("MSAppHost") >= 0 ? (i.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1] : (i.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), t.isOldIE = t.isIE && t.isIE < 9, t.isGecko = t.isMozilla = (window.Controllers || window.controllers) && "Gecko" === window.navigator.product, t.isOldGecko = t.isGecko && parseInt((i.match(/rv\:(\d+)/) || [])[1], 10) < 4, t.isOpera = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera), t.isWebKit = parseFloat(i.split("WebKit/")[1]) || void 0, t.isChrome = parseFloat(i.split(" Chrome/")[1]) || void 0, t.isAIR = i.indexOf("AdobeAIR") >= 0, t.isIPad = i.indexOf("iPad") >= 0, t.isTouchPad = i.indexOf("TouchPad") >= 0, t.isChromeOS = i.indexOf(" CrOS ") >= 0
    }
}), define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(e, t) {
    "use strict";
    function n(e, t, n) {
        var l = r(t);
        if (!o.isMac && s) {
            if ((s[91] || s[92]) && (l |= 8), s.altGr) {
                if (3 == (3 & l))
                    return;
                s.altGr = 0
            }
            if (18 === n || 17 === n) {
                var c = "location" in t ? t.location : t.keyLocation;
                if (17 === n && 1 === c)
                    1 == s[n] && (a = t.timeStamp);
                else if (18 === n && 3 === l && 2 === c) {
                    var h = t.timestamp - a;
                    50 > h && (s.altGr = !0)
                }
            }
        }
        if (n in i.MODIFIER_KEYS && (n = -1), 8 & l && (91 === n || 93 === n) && (n = -1), !l && 13 === n) {
            var c = "location" in t ? t.location : t.keyLocation;
            if (3 === c && (e(t, l, -n), t.defaultPrevented))
                return
        }
        if (o.isChromeOS && 8 & l) {
            if (e(t, l, n), t.defaultPrevented)
                return;
            l &= -9
        }
        return l || n in i.FUNCTION_KEYS || n in i.PRINTABLE_KEYS ? e(t, l, n) : !1
    }
    var i = e("./keys"), o = e("./useragent");
    t.addListener = function(e, t, n) {
        if (e.addEventListener)
            return e.addEventListener(t, n, !1);
        if (e.attachEvent) {
            var i = function() {
                n.call(e, window.event)
            };
            n._wrapper = i, e.attachEvent("on" + t, i)
        }
    }, t.removeListener = function(e, t, n) {
        return e.removeEventListener ? e.removeEventListener(t, n, !1) : void (e.detachEvent && e.detachEvent("on" + t, n._wrapper || n))
    }, t.stopEvent = function(e) {
        return t.stopPropagation(e), t.preventDefault(e), !1
    }, t.stopPropagation = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }, t.preventDefault = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }, t.getButton = function(e) {
        return "dblclick" == e.type ? 0 : "contextmenu" == e.type || o.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e.button : {1: 0,2: 2,4: 1}[e.button]
    }, t.capture = function(e, n, i) {
        function o(e) {
            n && n(e), i && i(e), t.removeListener(document, "mousemove", n, !0), t.removeListener(document, "mouseup", o, !0), t.removeListener(document, "dragstart", o, !0)
        }
        return t.addListener(document, "mousemove", n, !0), t.addListener(document, "mouseup", o, !0), t.addListener(document, "dragstart", o, !0), o
    }, t.addMouseWheelListener = function(e, n) {
        "onmousewheel" in e ? t.addListener(e, "mousewheel", function(e) {
            var t = 8;
            void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX / t, e.wheelY = -e.wheelDeltaY / t) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / t), n(e)
        }) : "onwheel" in e ? t.addListener(e, "wheel", function(e) {
            var t = .35;
            switch (e.deltaMode) {
                case e.DOM_DELTA_PIXEL:
                    e.wheelX = e.deltaX * t || 0, e.wheelY = e.deltaY * t || 0;
                    break;
                case e.DOM_DELTA_LINE:
                case e.DOM_DELTA_PAGE:
                    e.wheelX = 5 * (e.deltaX || 0), e.wheelY = 5 * (e.deltaY || 0)
            }
            n(e)
        }) : t.addListener(e, "DOMMouseScroll", function(e) {
            e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 * (e.detail || 0), e.wheelY = 0) : (e.wheelX = 0, e.wheelY = 5 * (e.detail || 0)), n(e)
        })
    }, t.addMultiMouseDownListener = function(e, n, i, r) {
        var s, a, l, c = 0, h = {2: "dblclick",3: "tripleclick",4: "quadclick"};
        t.addListener(e, "mousedown", function(e) {
            if (0 !== t.getButton(e) ? c = 0 : e.detail > 1 ? (c++, c > 4 && (c = 1)) : c = 1, o.isIE) {
                var u = Math.abs(e.clientX - s) > 5 || Math.abs(e.clientY - a) > 5;
                (!l || u) && (c = 1), l && clearTimeout(l), l = setTimeout(function() {
                    l = null
                }, n[c - 1] || 600), 1 == c && (s = e.clientX, a = e.clientY)
            }
            if (e._clicks = c, i[r]("mousedown", e), c > 4)
                c = 0;
            else if (c > 1)
                return i[r](h[c], e)
        }), o.isOldIE && t.addListener(e, "dblclick", function(e) {
            c = 2, l && clearTimeout(l), l = setTimeout(function() {
                l = null
            }, n[c - 1] || 600), i[r]("mousedown", e), i[r](h[c], e)
        })
    };
    var r = !o.isMac || !o.isOpera || "KeyboardEvent" in window ? function(e) {
        return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
    } : function(e) {
        return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.ctrlKey ? 8 : 0)
    };
    t.getModifierString = function(e) {
        return i.KEY_MODS[r(e)]
    };
    var s = null, a = 0;
    if (t.addCommandKeyListener = function(e, i) {
        var r = t.addListener;
        if (o.isOldGecko || o.isOpera && !("KeyboardEvent" in window)) {
            var a = null;
            r(e, "keydown", function(e) {
                a = e.keyCode
            }), r(e, "keypress", function(e) {
                return n(i, e, a)
            })
        } else {
            var l = null;
            r(e, "keydown", function(e) {
                s[e.keyCode] = (s[e.keyCode] || 0) + 1;
                var t = n(i, e, e.keyCode);
                return l = e.defaultPrevented, t
            }), r(e, "keypress", function(e) {
                l && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e), l = null)
            }), r(e, "keyup", function(e) {
                s[e.keyCode] = null
            }), s || (s = Object.create(null), r(window, "focus", function() {
                s = Object.create(null)
            }))
        }
    }, window.postMessage && !o.isOldIE) {
        var l = 1;
        t.nextTick = function(e, n) {
            n = n || window;
            var i = "zero-timeout-message-" + l;
            t.addListener(n, "message", function o(r) {
                r.data == i && (t.stopPropagation(r), t.removeListener(n, "message", o), e())
            }), n.postMessage(i, "*")
        }
    }
    t.nextFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame, t.nextFrame = t.nextFrame ? t.nextFrame.bind(window) : function(e) {
        setTimeout(e, 17)
    }
}), define("ace/lib/lang", ["require", "exports", "module"], function(e, t) {
    "use strict";
    t.last = function(e) {
        return e[e.length - 1]
    }, t.stringReverse = function(e) {
        return e.split("").reverse().join("")
    }, t.stringRepeat = function(e, t) {
        for (var n = ""; t > 0; )
            1 & t && (n += e), (t >>= 1) && (e += e);
        return n
    };
    var n = /^\s\s*/, i = /\s\s*$/;
    t.stringTrimLeft = function(e) {
        return e.replace(n, "")
    }, t.stringTrimRight = function(e) {
        return e.replace(i, "")
    }, t.copyObject = function(e) {
        var t = {};
        for (var n in e)
            t[n] = e[n];
        return t
    }, t.copyArray = function(e) {
        for (var t = [], n = 0, i = e.length; i > n; n++)
            t[n] = e[n] && "object" == typeof e[n] ? this.copyObject(e[n]) : e[n];
        return t
    }, t.deepCopy = function(e) {
        if ("object" != typeof e || !e)
            return e;
        var n = e.constructor;
        if (n === RegExp)
            return e;
        var i = n();
        for (var o in e)
            i[o] = "object" == typeof e[o] ? t.deepCopy(e[o]) : e[o];
        return i
    }, t.arrayToMap = function(e) {
        for (var t = {}, n = 0; n < e.length; n++)
            t[e[n]] = 1;
        return t
    }, t.createMap = function(e) {
        var t = Object.create(null);
        for (var n in e)
            t[n] = e[n];
        return t
    }, t.arrayRemove = function(e, t) {
        for (var n = 0; n <= e.length; n++)
            t === e[n] && e.splice(n, 1)
    }, t.escapeRegExp = function(e) {
        return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
    }, t.escapeHTML = function(e) {
        return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
    }, t.getMatchOffsets = function(e, t) {
        var n = [];
        return e.replace(t, function(e) {
            n.push({offset: arguments[arguments.length - 2],length: e.length})
        }), n
    }, t.deferredCall = function(e) {
        var t = null, n = function() {
            t = null, e()
        }, i = function(e) {
            return i.cancel(), t = setTimeout(n, e || 0), i
        };
        return i.schedule = i, i.call = function() {
            return this.cancel(), e(), i
        }, i.cancel = function() {
            return clearTimeout(t), t = null, i
        }, i.isPending = function() {
            return t
        }, i
    }, t.delayedCall = function(e, t) {
        var n = null, i = function() {
            n = null, e()
        }, o = function(e) {
            null == n && (n = setTimeout(i, e || t))
        };
        return o.delay = function(e) {
            n && clearTimeout(n), n = setTimeout(i, e || t)
        }, o.schedule = o, o.call = function() {
            this.cancel(), e()
        }, o.cancel = function() {
            n && clearTimeout(n), n = null
        }, o.isPending = function() {
            return n
        }, o
    }
}), define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang"], function(e, t) {
    "use strict";
    var n = e("../lib/event"), i = e("../lib/useragent"), o = e("../lib/dom"), r = e("../lib/lang"), s = i.isChrome < 18, a = i.isIE, l = function(e, t) {
        function l(e) {
            if (!m) {
                if (m = !0, S)
                    t = 0, n = e ? 0 : u.value.length - 1;
                else
                    var t = e ? 2 : 1, n = 2;
                try {
                    u.setSelectionRange(t, n)
                } catch (i) {
                }
                m = !1
            }
        }
        function c() {
            m || (u.value = d, i.isWebKit && F.schedule())
        }
        function h() {
            clearTimeout(N), N = setTimeout(function() {
                p && (u.style.cssText = p, p = ""), null == t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = !0, t.renderer.$moveTextAreaToCursor())
            }, i.isOldIE ? 200 : 0)
        }
        var u = o.createElement("textarea");
        u.className = "ace_text-input", i.isTouchPad && u.setAttribute("x-palm-disable-auto-cap", !0), u.setAttribute("wrap", "off"), u.setAttribute("autocorrect", "off"), u.setAttribute("autocapitalize", "off"), u.setAttribute("spellcheck", !1), u.style.opacity = "0", i.isOldIE && (u.style.top = "-1000px"), e.insertBefore(u, e.firstChild);
        var d = "", g = !1, f = !1, m = !1, p = "", v = !0;
        try {
            var A = document.activeElement === u
        } catch (C) {
        }
        n.addListener(u, "blur", function(e) {
            t.onBlur(e), A = !1
        }), n.addListener(u, "focus", function(e) {
            A = !0, t.onFocus(e), l()
        }), this.focus = function() {
            u.style.position = "fixed", u.style.top = "-1000px", u.focus(), setTimeout(function() {
                u.style.position = ""
            }, 0)
        }, this.blur = function() {
            u.blur()
        }, this.isFocused = function() {
            return A
        };
        var w = r.delayedCall(function() {
            A && l(v)
        }), F = r.delayedCall(function() {
            m || (u.value = d, A && l())
        });
        i.isWebKit || t.addEventListener("changeSelection", function() {
            t.selection.isEmpty() != v && (v = !v, w.schedule())
        }), c(), A && t.onFocus();
        var E = function(e) {
            return 0 === e.selectionStart && e.selectionEnd === e.value.length
        };
        if (!u.setSelectionRange && u.createTextRange && (u.setSelectionRange = function(e, t) {
            var n = this.createTextRange();
            n.collapse(!0), n.moveStart("character", e), n.moveEnd("character", t), n.select()
        }, E = function(e) {
            try {
                var t = e.ownerDocument.selection.createRange()
            } catch (n) {
            }
            return t && t.parentElement() == e ? t.text == e.value : !1
        }), i.isOldIE) {
            var b = !1, y = function(e) {
                if (!b) {
                    var t = u.value;
                    if (!m && t && t != d) {
                        if (e && t == d[0])
                            return $.schedule();
                        D(t), b = !0, c(), b = !1
                    }
                }
            }, $ = r.delayedCall(y);
            n.addListener(u, "propertychange", y);
            var x = {13: 1,27: 1};
            n.addListener(u, "keyup", function(e) {
                return !m || u.value && !x[e.keyCode] || setTimeout(P, 0), (u.value.charCodeAt(0) || 0) < 129 ? $.call() : void (m ? W() : O())
            }), n.addListener(u, "keydown", function() {
                $.schedule(50)
            })
        }
        var k = function() {
            g ? g = !1 : E(u) ? (t.selectAll(), l()) : S && l(t.selection.isEmpty())
        }, S = null;
        this.setInputHandler = function(e) {
            S = e
        }, this.getInputHandler = function() {
            return S
        };
        var B = !1, D = function(e) {
            S && (e = S(e), S = null), f ? (l(), e && t.onPaste(e), f = !1) : e == d.charAt(0) ? B ? t.execCommand("del", {source: "ace"}) : t.execCommand("backspace", {source: "ace"}) : (e.substring(0, 2) == d ? e = e.substr(2) : e.charAt(0) == d.charAt(0) ? e = e.substr(1) : e.charAt(e.length - 1) == d.charAt(0) && (e = e.slice(0, -1)), e.charAt(e.length - 1) == d.charAt(0) && (e = e.slice(0, -1)), e && t.onTextInput(e)), B && (B = !1)
        }, L = function() {
            if (!m) {
                var e = u.value;
                D(e), c()
            }
        }, R = function(e, t) {
            var n = e.clipboardData || window.clipboardData;
            if (n && !s) {
                var i = a ? "Text" : "text/plain";
                return t ? n.setData(i, t) !== !1 : n.getData(i)
            }
        }, _ = function(e, i) {
            var o = t.getCopyText();
            return o ? void (R(e, o) ? (i ? t.onCut() : t.onCopy(), n.preventDefault(e)) : (g = !0, u.value = o, u.select(), setTimeout(function() {
                g = !1, c(), l(), i ? t.onCut() : t.onCopy()
            }))) : n.preventDefault(e)
        }, T = function(e) {
            _(e, !0)
        }, M = function(e) {
            _(e, !1)
        }, I = function(e) {
            var o = R(e);
            "string" == typeof o ? (o && t.onPaste(o), i.isIE && setTimeout(l), n.preventDefault(e)) : (u.value = "", f = !0)
        };
        n.addCommandKeyListener(u, t.onCommandKey.bind(t)), n.addListener(u, "select", k), n.addListener(u, "input", L), n.addListener(u, "cut", T), n.addListener(u, "copy", M), n.addListener(u, "paste", I), "oncut" in u && "oncopy" in u && "onpaste" in u || n.addListener(e, "keydown", function(e) {
            if ((!i.isMac || e.metaKey) && e.ctrlKey)
                switch (e.keyCode) {
                    case 67:
                        M(e);
                        break;
                    case 86:
                        I(e);
                        break;
                    case 88:
                        T(e)
                }
        });
        var O = function() {
            m || !t.onCompositionStart || t.$readOnly || (m = {}, t.onCompositionStart(), setTimeout(W, 0), t.on("mousedown", P), t.selection.isEmpty() || (t.insert(""), t.session.markUndoGroup(), t.selection.clearSelection()), t.session.markUndoGroup())
        }, W = function() {
            if (m && t.onCompositionUpdate && !t.$readOnly) {
                var e = u.value.replace(/\x01/g, "");
                if (m.lastValue !== e && (t.onCompositionUpdate(e), m.lastValue && t.undo(), m.lastValue = e, m.lastValue)) {
                    var n = t.selection.getRange();
                    t.insert(m.lastValue), t.session.markUndoGroup(), m.range = t.selection.getRange(), t.selection.setRange(n), t.selection.clearSelection()
                }
            }
        }, P = function(e) {
            if (t.onCompositionEnd && !t.$readOnly) {
                var n = m;
                m = !1;
                var i = setTimeout(function() {
                    i = null;
                    var e = u.value.replace(/\x01/g, "");
                    m || (e == n.lastValue ? c() : !n.lastValue && e && (c(), D(e)))
                });
                S = function(e) {
                    return i && clearTimeout(i), e = e.replace(/\x01/g, ""), e == n.lastValue ? "" : (n.lastValue && i && t.undo(), e)
                }, t.onCompositionEnd(), t.removeListener("mousedown", P), "compositionend" == e.type && n.range && t.selection.setRange(n.range)
            }
        }, H = r.delayedCall(W, 50);
        n.addListener(u, "compositionstart", O), i.isGecko ? n.addListener(u, "text", function() {
            H.schedule()
        }) : (n.addListener(u, "keyup", function() {
            H.schedule()
        }), n.addListener(u, "keydown", function() {
            H.schedule()
        })), n.addListener(u, "compositionend", P), this.getElement = function() {
            return u
        }, this.setReadOnly = function(e) {
            u.readOnly = e
        }, this.onContextMenu = function(e) {
            B = !0, l(t.selection.isEmpty()), t._emit("nativecontextmenu", {target: t,domEvent: e}), this.moveToMouse(e, !0)
        }, this.moveToMouse = function(e, r) {
            if (r || !i.isOldIE) {
                p || (p = u.style.cssText), u.style.cssText = (r ? "z-index:100000;" : "") + "height:" + u.style.height + ";" + (i.isIE ? "opacity:0.1;" : "");
                var s = t.container.getBoundingClientRect(), a = o.computedStyle(t.container), l = s.top + (parseInt(a.borderTopWidth) || 0), c = s.left + (parseInt(s.borderLeftWidth) || 0), d = s.bottom - l - u.clientHeight - 2, g = function(e) {
                    u.style.left = e.clientX - c - 2 + "px", u.style.top = Math.min(e.clientY - l - 2, d) + "px"
                };
                g(e), "mousedown" == e.type && (t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = null), i.isWin && !i.isOldIE && n.capture(t.container, g, h))
            }
        }, this.onContextMenuClose = h;
        var N, z = function(e) {
            t.textInput.onContextMenu(e), h()
        };
        n.addListener(t.renderer.scroller, "contextmenu", z), n.addListener(u, "contextmenu", z)
    };
    t.TextInput = l
}), define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
    "use strict";
    function n(e) {
        e.$clickSelection = null;
        var t = e.editor;
        t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
        var n = ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"];
        n.forEach(function(t) {
            e[t] = this[t]
        }, this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
    }
    function i(e, t, n, i) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
    }
    function o(e, t) {
        if (e.start.row == e.end.row)
            var n = 2 * t.column - e.start.column - e.end.column;
        else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column)
            var n = 2 * t.row - e.start.row - e.end.row;
        else
            var n = t.column - 4;
        return 0 > n ? {cursor: e.start,anchor: e.end} : {cursor: e.end,anchor: e.start}
    }
    var r = (e("../lib/dom"), e("../lib/event"), e("../lib/useragent"), 0);
    (function() {
        this.onMouseDown = function(e) {
            var t = e.inSelection(), n = e.getDocumentPosition();
            this.mousedownEvent = e;
            var i = this.editor, o = e.getButton();
            if (0 !== o) {
                var r = i.getSelectionRange(), s = r.isEmpty();
                return i.$blockScrolling++, s && i.selection.moveToPosition(n), i.$blockScrolling--, void i.textInput.onContextMenu(e.domEvent)
            }
            return this.mousedownEvent.time = Date.now(), !t || i.isFocused() || (i.focus(), !this.$focusTimout || this.$clickSelection || i.inMultiSelectMode) ? (this.captureMouse(e), this.startSelect(n, e.domEvent._clicks > 1), e.preventDefault()) : (this.setState("focusWait"), void this.captureMouse(e))
        }, this.startSelect = function(e, t) {
            e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
            var n = this.editor;
            n.$blockScrolling++, this.mousedownEvent.getShiftKey() ? n.selection.selectToPosition(e) : t || n.selection.moveToPosition(e), t || this.select(), n.renderer.scroller.setCapture && n.renderer.scroller.setCapture(), n.setStyle("ace_selecting"), this.setState("select"), n.$blockScrolling--
        }, this.select = function() {
            var e, t = this.editor, n = t.renderer.screenToTextCoordinates(this.x, this.y);
            if (t.$blockScrolling++, this.$clickSelection) {
                var i = this.$clickSelection.comparePoint(n);
                if (-1 == i)
                    e = this.$clickSelection.end;
                else if (1 == i)
                    e = this.$clickSelection.start;
                else {
                    var r = o(this.$clickSelection, n);
                    n = r.cursor, e = r.anchor
                }
                t.selection.setSelectionAnchor(e.row, e.column)
            }
            t.selection.selectToPosition(n), t.$blockScrolling--, t.renderer.scrollCursorIntoView()
        }, this.extendSelectionBy = function(e) {
            var t, n = this.editor, i = n.renderer.screenToTextCoordinates(this.x, this.y), r = n.selection[e](i.row, i.column);
            if (n.$blockScrolling++, this.$clickSelection) {
                var s = this.$clickSelection.comparePoint(r.start), a = this.$clickSelection.comparePoint(r.end);
                if (-1 == s && 0 >= a)
                    t = this.$clickSelection.end, (r.end.row != i.row || r.end.column != i.column) && (i = r.start);
                else if (1 == a && s >= 0)
                    t = this.$clickSelection.start, (r.start.row != i.row || r.start.column != i.column) && (i = r.end);
                else if (-1 == s && 1 == a)
                    i = r.end, t = r.start;
                else {
                    var l = o(this.$clickSelection, i);
                    i = l.cursor, t = l.anchor
                }
                n.selection.setSelectionAnchor(t.row, t.column)
            }
            n.selection.selectToPosition(i), n.$blockScrolling--, n.renderer.scrollCursorIntoView()
        }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function() {
            this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
        }, this.focusWait = function() {
            var e = i(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), t = Date.now();
            (e > r || t - this.mousedownEvent.time > this.$focusTimout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
        }, this.onDoubleClick = function(e) {
            var t = e.getDocumentPosition(), n = this.editor, i = n.session, o = i.getBracketRange(t);
            o ? (o.isEmpty() && (o.start.column--, o.end.column++), this.setState("select")) : (o = n.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = o, this.select()
        }, this.onTripleClick = function(e) {
            var t = e.getDocumentPosition(), n = this.editor;
            this.setState("selectByLines");
            var i = n.getSelectionRange();
            i.isMultiLine() && i.contains(t.row, t.column) ? (this.$clickSelection = n.selection.getLineRange(i.start.row), this.$clickSelection.end = n.selection.getLineRange(i.end.row).end) : this.$clickSelection = n.selection.getLineRange(t.row), this.select()
        }, this.onQuadClick = function() {
            var e = this.editor;
            e.selectAll(), this.$clickSelection = e.getSelectionRange(), this.setState("selectAll")
        }, this.onMouseWheel = function(e) {
            if (!e.getAccelKey()) {
                e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
                var t = e.domEvent.timeStamp, n = t - (this.$lastScrollTime || 0), i = this.editor, o = i.renderer.isScrollableBy(e.wheelX * e.speed, e.wheelY * e.speed);
                return o || 200 > n ? (this.$lastScrollTime = t, i.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()) : void 0
            }
        }
    }).call(n.prototype), t.DefaultHandlers = n
}), define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function(e, t) {
    "use strict";
    function n(e) {
        this.isOpen = !1, this.$element = null, this.$parentNode = e
    }
    var i = (e("./lib/oop"), e("./lib/dom"));
    (function() {
        this.$init = function() {
            return this.$element = i.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
        }, this.getElement = function() {
            return this.$element || this.$init()
        }, this.setText = function(e) {
            i.setInnerText(this.getElement(), e)
        }, this.setHtml = function(e) {
            this.getElement().innerHTML = e
        }, this.setPosition = function(e, t) {
            this.getElement().style.left = e + "px", this.getElement().style.top = t + "px"
        }, this.setClassName = function(e) {
            i.addCssClass(this.getElement(), e)
        }, this.show = function(e, t, n) {
            null != e && this.setText(e), null != t && null != n && this.setPosition(t, n), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
        }, this.hide = function() {
            this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1)
        }, this.getHeight = function() {
            return this.getElement().offsetHeight
        }, this.getWidth = function() {
            return this.getElement().offsetWidth
        }
    }).call(n.prototype), t.Tooltip = n
}), define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function(e, t) {
    "use strict";
    function n(e) {
        function t() {
            var t = u.getDocumentPosition().row, i = l.$annotations[t];
            if (!i)
                return n();
            var o = a.session.getLength();
            if (t == o) {
                var s = a.renderer.pixelToScreenCoordinates(0, u.y).row, h = u.$pos;
                if (s > a.session.documentToScreenRow(h.row, h.column))
                    return n()
            }
            if (d != i)
                if (d = i.text.join("<br/>"), c.setHtml(d), c.show(), a.on("mousewheel", n), e.$tooltipFollowsMouse)
                    r(u);
                else {
                    var g = l.$cells[a.session.documentToScreenRow(t, 0)].element, f = g.getBoundingClientRect(), m = c.getElement().style;
                    m.left = f.right + "px", m.top = f.bottom + "px"
                }
        }
        function n() {
            h && (h = clearTimeout(h)), d && (c.hide(), d = null, a.removeEventListener("mousewheel", n))
        }
        function r(e) {
            c.setPosition(e.x, e.y)
        }
        var a = e.editor, l = a.renderer.$gutterLayer, c = new i(a.container);
        e.editor.setDefaultHandler("guttermousedown", function(t) {
            if (a.isFocused() && 0 == t.getButton()) {
                var n = l.getRegion(t);
                if ("foldWidgets" != n) {
                    var i = t.getDocumentPosition().row, o = a.session.selection;
                    if (t.getShiftKey())
                        o.selectTo(i, 0);
                    else {
                        if (2 == t.domEvent.detail)
                            return a.selectAll(), t.preventDefault();
                        e.$clickSelection = a.selection.getLineRange(i)
                    }
                    return e.setState("selectByLines"), e.captureMouse(t), t.preventDefault()
                }
            }
        });
        var h, u, d;
        e.editor.setDefaultHandler("guttermousemove", function(i) {
            var s = i.domEvent.target || i.domEvent.srcElement;
            return o.hasCssClass(s, "ace_fold-widget") ? n() : (d && e.$tooltipFollowsMouse && r(i), u = i, void (h || (h = setTimeout(function() {
                h = null, u && !e.isMousePressed ? t() : n()
            }, 50))))
        }), s.addListener(a.renderer.$gutter, "mouseout", function() {
            u = null, d && !h && (h = setTimeout(function() {
                h = null, n()
            }, 50))
        }), a.on("changeSession", n)
    }
    function i(e) {
        a.call(this, e)
    }
    var o = e("../lib/dom"), r = e("../lib/oop"), s = e("../lib/event"), a = e("../tooltip").Tooltip;
    r.inherits(i, a), function() {
        this.setPosition = function(e, t) {
            var n = window.innerWidth || document.documentElement.clientWidth, i = window.innerHeight || document.documentElement.clientHeight, o = this.getWidth(), r = this.getHeight();
            e += 15, t += 15, e + o > n && (e -= e + o - n), t + r > i && (t -= 20 + r), a.prototype.setPosition.call(this, e, t)
        }
    }.call(i.prototype), t.GutterHandler = n
}), define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
    "use strict";
    var n = e("../lib/event"), i = e("../lib/useragent"), o = t.MouseEvent = function(e, t) {
        this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
    };
    (function() {
        this.stopPropagation = function() {
            n.stopPropagation(this.domEvent), this.propagationStopped = !0
        }, this.preventDefault = function() {
            n.preventDefault(this.domEvent), this.defaultPrevented = !0
        }, this.stop = function() {
            this.stopPropagation(), this.preventDefault()
        }, this.getDocumentPosition = function() {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos)
        }, this.inSelection = function() {
            if (null !== this.$inSelection)
                return this.$inSelection;
            var e = this.editor, t = e.getSelectionRange();
            if (t.isEmpty())
                this.$inSelection = !1;
            else {
                var n = this.getDocumentPosition();
                this.$inSelection = t.contains(n.row, n.column)
            }
            return this.$inSelection
        }, this.getButton = function() {
            return n.getButton(this.domEvent)
        }, this.getShiftKey = function() {
            return this.domEvent.shiftKey
        }, this.getAccelKey = i.isMac ? function() {
            return this.domEvent.metaKey
        } : function() {
            return this.domEvent.ctrlKey
        }
    }).call(o.prototype)
}), define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
    "use strict";
    function n(e) {
        function t(e, t) {
            var n = Date.now(), o = !t || e.row != t.row, r = !t || e.column != t.column;
            if (!S || o || r)
                p.$blockScrolling += 1, p.moveCursorToPosition(e), p.$blockScrolling -= 1, S = n, B = {x: w,y: F};
            else {
                var s = i(B.x, B.y, w, F);
                s > c ? S = null : n - S >= l && (p.renderer.scrollCursorIntoView(), S = null)
            }
        }
        function n(e, t) {
            var n = Date.now(), i = p.renderer.layerConfig.lineHeight, o = p.renderer.layerConfig.characterWidth, r = p.renderer.scroller.getBoundingClientRect(), s = {x: {left: w - r.left,right: r.right - w},y: {top: F - r.top,bottom: r.bottom - F}}, l = Math.min(s.x.left, s.x.right), c = Math.min(s.y.top, s.y.bottom), h = {row: e.row,column: e.column};
            2 >= l / o && (h.column += s.x.left < s.x.right ? -3 : 2), 1 >= c / i && (h.row += s.y.top < s.y.bottom ? -1 : 1);
            var u = e.row != h.row, d = e.column != h.column, g = !t || e.row != t.row;
            u || d && !g ? k ? n - k >= a && p.renderer.scrollCursorIntoView(h) : k = n : k = null
        }
        function h() {
            var e = y;
            y = p.renderer.screenToTextCoordinates(w, F), t(y, e), n(y, e)
        }
        function u() {
            b = p.selection.toOrientedRange(), C = p.session.addMarker(b, "ace_selection", p.getSelectionStyle()), p.clearSelection(), p.isFocused() && p.renderer.$cursorLayer.setBlinking(!1), clearInterval(E), h(), E = setInterval(h, 20), L = 0, r.addListener(document, "mousemove", g)
        }
        function d() {
            clearInterval(E), p.session.removeMarker(C), C = null, p.$blockScrolling += 1, p.selection.fromOrientedRange(b), p.$blockScrolling -= 1, p.isFocused() && !x && p.renderer.$cursorLayer.setBlinking(!p.getReadOnly()), b = null, y = null, L = 0, k = null, S = null, r.removeListener(document, "mousemove", g)
        }
        function g() {
            null == R && (R = setTimeout(function() {
                null != R && C && d()
            }, 20))
        }
        function f(e) {
            var t = e.types;
            return !t || Array.prototype.some.call(t, function(e) {
                return "text/plain" == e || "Text" == e
            })
        }
        function m(e) {
            var t = ["copy", "copymove", "all", "uninitialized"], n = ["move", "copymove", "linkmove", "all", "uninitialized"], i = s.isMac ? e.altKey : e.ctrlKey, o = "uninitialized";
            try {
                o = e.dataTransfer.effectAllowed.toLowerCase()
            } catch (e) {
            }
            var r = "none";
            return i && t.indexOf(o) >= 0 ? r = "copy" : n.indexOf(o) >= 0 ? r = "move" : t.indexOf(o) >= 0 && (r = "copy"), r
        }
        var p = e.editor, v = o.createElement("img");
        v.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", s.isOpera && (v.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
        var A = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
        A.forEach(function(t) {
            e[t] = this[t]
        }, this), p.addEventListener("mousedown", this.onMouseDown.bind(e));
        var C, w, F, E, b, y, $, x, k, S, B, D = p.container, L = 0;
        this.onDragStart = function(e) {
            if (this.cancelDrag || !D.draggable) {
                var t = this;
                return setTimeout(function() {
                    t.startSelect(), t.captureMouse(e)
                }, 0), e.preventDefault()
            }
            b = p.getSelectionRange();
            var n = e.dataTransfer;
            n.effectAllowed = p.getReadOnly() ? "copy" : "copyMove", s.isOpera && (p.container.appendChild(v), v.scrollTop = 0), n.setDragImage && n.setDragImage(v, 0, 0), s.isOpera && p.container.removeChild(v), n.clearData(), n.setData("Text", p.session.getTextRange()), x = !0, this.setState("drag")
        }, this.onDragEnd = function(e) {
            if (D.draggable = !1, x = !1, this.setState(null), !p.getReadOnly()) {
                var t = e.dataTransfer.dropEffect;
                $ || "move" != t || p.session.remove(p.getSelectionRange()), p.renderer.$cursorLayer.setBlinking(!0)
            }
            this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
        }, this.onDragEnter = function(e) {
            return !p.getReadOnly() && f(e.dataTransfer) ? (w = e.clientX, F = e.clientY, C || u(), L++, e.dataTransfer.dropEffect = $ = m(e), r.preventDefault(e)) : void 0
        }, this.onDragOver = function(e) {
            return !p.getReadOnly() && f(e.dataTransfer) ? (w = e.clientX, F = e.clientY, C || (u(), L++), null !== R && (R = null), e.dataTransfer.dropEffect = $ = m(e), r.preventDefault(e)) : void 0
        }, this.onDragLeave = function(e) {
            return L--, 0 >= L && C ? (d(), $ = null, r.preventDefault(e)) : void 0
        }, this.onDrop = function(e) {
            if (y) {
                var t = e.dataTransfer;
                if (x)
                    switch ($) {
                        case "move":
                            b = b.contains(y.row, y.column) ? {start: y,end: y} : p.moveText(b, y);
                            break;
                        case "copy":
                            b = p.moveText(b, y, !0)
                    }
                else {
                    var n = t.getData("Text");
                    b = {start: y,end: p.session.insert(y, n)}, p.focus(), $ = null
                }
                return d(), r.preventDefault(e)
            }
        }, r.addListener(D, "dragstart", this.onDragStart.bind(e)), r.addListener(D, "dragend", this.onDragEnd.bind(e)), r.addListener(D, "dragenter", this.onDragEnter.bind(e)), r.addListener(D, "dragover", this.onDragOver.bind(e)), r.addListener(D, "dragleave", this.onDragLeave.bind(e)), r.addListener(D, "drop", this.onDrop.bind(e));
        var R = null
    }
    function i(e, t, n, i) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
    }
    var o = e("../lib/dom"), r = e("../lib/event"), s = e("../lib/useragent"), a = 200, l = 200, c = 5;
    (function() {
        this.dragWait = function() {
            var e = Date.now() - this.mousedownEvent.time;
            e > this.editor.getDragDelay() && this.startDrag()
        }, this.dragWaitEnd = function() {
            var e = this.editor.container;
            e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
        }, this.dragReadyEnd = function() {
            this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly()), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
        }, this.startDrag = function() {
            this.cancelDrag = !1;
            var e = this.editor, t = e.container;
            t.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
            var n = s.isWin ? "default" : "move";
            e.renderer.setCursorStyle(n), this.setState("dragReady")
        }, this.onMouseDrag = function() {
            var e = this.editor.container;
            if (s.isIE && "dragReady" == this.state) {
                var t = i(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                t > 3 && e.dragDrop()
            }
            if ("dragWait" === this.state) {
                var t = i(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                t > 0 && (e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()))
            }
        }, this.onMouseDown = function(e) {
            if (this.$dragEnabled) {
                this.mousedownEvent = e;
                var t = this.editor, n = e.inSelection(), i = e.getButton(), o = e.domEvent.detail || 1;
                if (1 === o && 0 === i && n) {
                    if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey()))
                        return;
                    this.mousedownEvent.time = Date.now();
                    var r = e.domEvent.target || e.domEvent.srcElement;
                    if ("unselectable" in r && (r.unselectable = "on"), t.getDragDelay()) {
                        if (s.isWebKit) {
                            this.cancelDrag = !0;
                            var a = t.container;
                            a.draggable = !0
                        }
                        this.setState("dragWait")
                    } else
                        this.startDrag();
                    this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0
                }
            }
        }
    }).call(n.prototype), t.DragdropHandler = n
}), define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
    "use strict";
    var n = e("./dom");
    t.get = function(e, t) {
        var n = new XMLHttpRequest;
        n.open("GET", e, !0), n.onreadystatechange = function() {
            4 === n.readyState && t(n.responseText)
        }, n.send(null)
    }, t.loadScript = function(e, t) {
        var i = n.getDocumentHead(), o = document.createElement("script");
        o.src = e, i.appendChild(o), o.onload = o.onreadystatechange = function(e, n) {
            (n || !o.readyState || "loaded" == o.readyState || "complete" == o.readyState) && (o = o.onload = o.onreadystatechange = null, n || t())
        }
    }, t.qualifyURL = function(e) {
        var t = document.createElement("a");
        return t.href = e, t.href
    }
}), define("ace/lib/event_emitter", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var n = {}, i = function() {
        this.propagationStopped = !0
    }, o = function() {
        this.defaultPrevented = !0
    };
    n._emit = n._dispatchEvent = function(e, t) {
        this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
        var n = this._eventRegistry[e] || [], r = this._defaultHandlers[e];
        if (n.length || r) {
            "object" == typeof t && t || (t = {}), t.type || (t.type = e), t.stopPropagation || (t.stopPropagation = i), t.preventDefault || (t.preventDefault = o), n = n.slice();
            for (var s = 0; s < n.length && (n[s](t, this), !t.propagationStopped); s++)
                ;
            return r && !t.defaultPrevented ? r(t, this) : void 0
        }
    }, n._signal = function(e, t) {
        var n = (this._eventRegistry || {})[e];
        if (n) {
            n = n.slice();
            for (var i = 0; i < n.length; i++)
                n[i](t, this)
        }
    }, n.once = function(e, t) {
        var n = this;
        t && this.addEventListener(e, function i() {
            n.removeEventListener(e, i), t.apply(null, arguments)
        })
    }, n.setDefaultHandler = function(e, t) {
        var n = this._defaultHandlers;
        if (n || (n = this._defaultHandlers = {_disabled_: {}}), n[e]) {
            var i = n[e], o = n._disabled_[e];
            o || (n._disabled_[e] = o = []), o.push(i);
            var r = o.indexOf(t);
            -1 != r && o.splice(r, 1)
        }
        n[e] = t
    }, n.removeDefaultHandler = function(e, t) {
        var n = this._defaultHandlers;
        if (n) {
            var i = n._disabled_[e];
            if (n[e] == t) {
                {
                    n[e]
                }
                i && this.setDefaultHandler(e, i.pop())
            } else if (i) {
                var o = i.indexOf(t);
                -1 != o && i.splice(o, 1)
            }
        }
    }, n.on = n.addEventListener = function(e, t, n) {
        this._eventRegistry = this._eventRegistry || {};
        var i = this._eventRegistry[e];
        return i || (i = this._eventRegistry[e] = []), -1 == i.indexOf(t) && i[n ? "unshift" : "push"](t), t
    }, n.off = n.removeListener = n.removeEventListener = function(e, t) {
        this._eventRegistry = this._eventRegistry || {};
        var n = this._eventRegistry[e];
        if (n) {
            var i = n.indexOf(t);
            -1 !== i && n.splice(i, 1)
        }
    }, n.removeAllListeners = function(e) {
        this._eventRegistry && (this._eventRegistry[e] = [])
    }, t.EventEmitter = n
}), define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t) {
    "no use strict";
    function n() {
        "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
    }
    function i(e, t) {
        var n = new Error(e);
        n.data = t, "object" == typeof console && console.error && console.error(n), setTimeout(function() {
            throw n
        })
    }
    var o = e("./oop"), r = e("./event_emitter").EventEmitter, s = {setOptions: function(e) {
            Object.keys(e).forEach(function(t) {
                this.setOption(t, e[t])
            }, this)
        },getOptions: function(e) {
            var t = {};
            return e ? Array.isArray(e) || (t = e, e = Object.keys(t)) : e = Object.keys(this.$options), e.forEach(function(e) {
                t[e] = this.getOption(e)
            }, this), t
        },setOption: function(e, t) {
            if (this["$" + e] !== t) {
                var i = this.$options[e];
                if (!i)
                    return n('misspelled option "' + e + '"');
                if (i.forwardTo)
                    return this[i.forwardTo] && this[i.forwardTo].setOption(e, t);
                i.handlesSet || (this["$" + e] = t), i && i.set && i.set.call(this, t)
            }
        },getOption: function(e) {
            var t = this.$options[e];
            return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : n('misspelled option "' + e + '"')
        }}, a = function() {
        this.$defaultOptions = {}
    };
    (function() {
        o.implement(this, r), this.defineOptions = function(e, t, n) {
            return e.$options || (this.$defaultOptions[t] = e.$options = {}), Object.keys(n).forEach(function(t) {
                var i = n[t];
                "string" == typeof i && (i = {forwardTo: i}), i.name || (i.name = t), e.$options[i.name] = i, "initialValue" in i && (e["$" + i.name] = i.initialValue)
            }), o.implement(e, s), this
        }, this.resetOptions = function(e) {
            Object.keys(e.$options).forEach(function(t) {
                var n = e.$options[t];
                "value" in n && e.setOption(t, n.value)
            })
        }, this.setDefaultValue = function(e, t, n) {
            var i = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
            i[t] && (i.forwardTo ? this.setDefaultValue(i.forwardTo, t, n) : i[t].value = n)
        }, this.setDefaultValues = function(e, t) {
            Object.keys(t).forEach(function(n) {
                this.setDefaultValue(e, n, t[n])
            }, this)
        }, this.warn = n, this.reportError = i
    }).call(a.prototype), t.AppConfig = a
}), define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], function(e, t, n) {
    "no use strict";
    function i(i) {
        if (c.packaged = i || e.packaged || n.packaged || l.define && define.packaged, !l.document)
            return "";
        for (var r = {}, s = "", a = document.currentScript || document._currentScript, h = a && a.ownerDocument || document, u = h.getElementsByTagName("script"), d = 0; d < u.length; d++) {
            var g = u[d], f = g.src || g.getAttribute("src");
            if (f) {
                for (var m = g.attributes, p = 0, v = m.length; v > p; p++) {
                    var A = m[p];
                    0 === A.name.indexOf("data-ace-") && (r[o(A.name.replace(/^data-ace-/, ""))] = A.value)
                }
                var C = f.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                C && (s = C[1])
            }
        }
        s && (r.base = r.base || s, r.packaged = !0), r.basePath = r.base, r.workerPath = r.workerPath || r.base, r.modePath = r.modePath || r.base, r.themePath = r.themePath || r.base, delete r.base;
        for (var w in r)
            "undefined" != typeof r[w] && t.set(w, r[w])
    }
    function o(e) {
        return e.replace(/-(.)/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    var r = e("./lib/lang"), s = (e("./lib/oop"), e("./lib/net")), a = e("./lib/app_config").AppConfig;
    n.exports = t = new a;
    var l = function() {
        return this
    }(), c = {packaged: !1,workerPath: null,modePath: null,themePath: null,basePath: "",suffix: ".js",$moduleUrls: {}};
    t.get = function(e) {
        if (!c.hasOwnProperty(e))
            throw new Error("Unknown config key: " + e);
        return c[e]
    }, t.set = function(e, t) {
        if (!c.hasOwnProperty(e))
            throw new Error("Unknown config key: " + e);
        c[e] = t
    }, t.all = function() {
        return r.copyObject(c)
    }, t.moduleUrl = function(e, t) {
        if (c.$moduleUrls[e])
            return c.$moduleUrls[e];
        var n = e.split("/");
        t = t || n[n.length - 2] || "";
        var i = "snippets" == t ? "/" : "-", o = n[n.length - 1];
        if ("worker" == t && "-" == i) {
            var r = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
            o = o.replace(r, "")
        }
        (!o || o == t) && n.length > 1 && (o = n[n.length - 2]);
        var s = c[t + "Path"];
        return null == s ? s = c.basePath : "/" == i && (t = i = ""), s && "/" != s.slice(-1) && (s += "/"), s + t + i + o + this.get("suffix")
    }, t.setModuleUrl = function(e, t) {
        return c.$moduleUrls[e] = t
    }, t.$loading = {}, t.loadModule = function(n, i) {
        var o, r;
        Array.isArray(n) && (r = n[0], n = n[1]);
        try {
            o = e(n)
        } catch (a) {
        }
        if (o && !t.$loading[n])
            return i && i(o);
        if (t.$loading[n] || (t.$loading[n] = []), t.$loading[n].push(i), !(t.$loading[n].length > 1)) {
            var l = function() {
                e([n], function(e) {
                    t._emit("load.module", {name: n,module: e});
                    var i = t.$loading[n];
                    t.$loading[n] = null, i.forEach(function(t) {
                        t && t(e)
                    })
                })
            };
            return t.get("packaged") ? void s.loadScript(t.moduleUrl(n, r), l) : l()
        }
    }, i(!0), t.init = i
}), define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/config"], function(e, t) {
    "use strict";
    var n = e("../lib/event"), i = e("../lib/useragent"), o = e("./default_handlers").DefaultHandlers, r = e("./default_gutter_handler").GutterHandler, s = e("./mouse_event").MouseEvent, a = e("./dragdrop_handler").DragdropHandler, l = e("../config"), c = function(e) {
        var t = this;
        this.editor = e, new o(this), new r(this), new a(this);
        var s = function() {
            document.hasFocus && document.hasFocus() || window.focus(), e.focus()
        }, l = e.renderer.getMouseEventTarget();
        n.addListener(l, "click", this.onMouseEvent.bind(this, "click")), n.addListener(l, "mousemove", this.onMouseMove.bind(this, "mousemove")), n.addMultiMouseDownListener(l, [400, 300, 250], this, "onMouseEvent"), e.renderer.scrollBarV && (n.addMultiMouseDownListener(e.renderer.scrollBarV.inner, [400, 300, 250], this, "onMouseEvent"), n.addMultiMouseDownListener(e.renderer.scrollBarH.inner, [400, 300, 250], this, "onMouseEvent"), i.isIE && (n.addListener(e.renderer.scrollBarV.element, "mousedown", s), n.addListener(e.renderer.scrollBarH.element, "mousedown", s))), n.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel"));
        var c = e.renderer.$gutter;
        n.addListener(c, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), n.addListener(c, "click", this.onMouseEvent.bind(this, "gutterclick")), n.addListener(c, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), n.addListener(c, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), n.addListener(l, "mousedown", s), n.addListener(c, "mousedown", function(t) {
            return e.focus(), n.preventDefault(t)
        }), e.on("mousemove", function(n) {
            if (!t.state && !t.$dragDelay && t.$dragEnabled) {
                var i = e.renderer.screenToTextCoordinates(n.x, n.y), o = e.session.selection.getRange(), r = e.renderer;
                r.setCursorStyle(!o.isEmpty() && o.insideStart(i.row, i.column) ? "default" : "")
            }
        })
    };
    (function() {
        this.onMouseEvent = function(e, t) {
            this.editor._emit(e, new s(t, this.editor))
        }, this.onMouseMove = function(e, t) {
            var n = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            n && n.length && this.editor._emit(e, new s(t, this.editor))
        }, this.onMouseWheel = function(e, t) {
            var n = new s(t, this.editor);
            n.speed = 2 * this.$scrollSpeed, n.wheelX = t.wheelX, n.wheelY = t.wheelY, this.editor._emit(e, n)
        }, this.setState = function(e) {
            this.state = e
        }, this.captureMouse = function(e, t) {
            this.x = e.x, this.y = e.y, this.isMousePressed = !0;
            var o = this.editor.renderer;
            o.$keepTextAreaAtCursor && (o.$keepTextAreaAtCursor = null);
            var r = this, a = function(e) {
                if (e) {
                    if (i.isWebKit && !e.which && r.releaseMouse)
                        return r.releaseMouse();
                    r.x = e.clientX, r.y = e.clientY, t && t(e), r.mouseEvent = new s(e, r.editor), r.$mouseMoved = !0
                }
            }, l = function(e) {
                clearInterval(h), c(), r[r.state + "End"] && r[r.state + "End"](e), r.state = "", null == o.$keepTextAreaAtCursor && (o.$keepTextAreaAtCursor = !0, o.$moveTextAreaToCursor()), r.isMousePressed = !1, r.$onCaptureMouseMove = r.releaseMouse = null, e && r.onMouseEvent("mouseup", e)
            }, c = function() {
                r[r.state] && r[r.state](), r.$mouseMoved = !1
            };
            if (i.isOldIE && "dblclick" == e.domEvent.type)
                return setTimeout(function() {
                    l(e)
                });
            r.$onCaptureMouseMove = a, r.releaseMouse = n.capture(this.editor.container, a, l);
            var h = setInterval(c, 20)
        }, this.releaseMouse = null, this.cancelContextMenu = function() {
            var e = function(t) {
                t && t.domEvent && "contextmenu" != t.domEvent.type || (this.editor.off("nativecontextmenu", e), t && t.domEvent && n.stopEvent(t.domEvent))
            }.bind(this);
            setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
        }
    }).call(c.prototype), l.defineOptions(c.prototype, "mouseHandler", {scrollSpeed: {initialValue: 2},dragDelay: {initialValue: i.isMac ? 150 : 0},dragEnabled: {initialValue: !0},focusTimout: {initialValue: 0},tooltipFollowsMouse: {initialValue: !0}}), t.MouseHandler = c
}), define("ace/mouse/fold_handler", ["require", "exports", "module"], function(e, t) {
    "use strict";
    function n(e) {
        e.on("click", function(t) {
            var n = t.getDocumentPosition(), i = e.session, o = i.getFoldAt(n.row, n.column, 1);
            o && (t.getAccelKey() ? i.removeFold(o) : i.expandFold(o), t.stop())
        }), e.on("gutterclick", function(t) {
            var n = e.renderer.$gutterLayer.getRegion(t);
            if ("foldWidgets" == n) {
                var i = t.getDocumentPosition().row, o = e.session;
                o.foldWidgets && o.foldWidgets[i] && e.session.onFoldWidgetClick(i, t), e.isFocused() || e.focus(), t.stop()
            }
        }), e.on("gutterdblclick", function(t) {
            var n = e.renderer.$gutterLayer.getRegion(t);
            if ("foldWidgets" == n) {
                var i = t.getDocumentPosition().row, o = e.session, r = o.getParentFoldRangeData(i, !0), s = r.range || r.firstRange;
                if (s) {
                    i = s.start.row;
                    var a = o.getFoldAt(i, o.getLine(i).length, 1);
                    a ? o.removeFold(a) : (o.addFold("...", s), e.renderer.scrollCursorIntoView({row: s.start.row,column: 0}))
                }
                t.stop()
            }
        })
    }
    t.FoldHandler = n
}), define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(e, t) {
    "use strict";
    var n = e("../lib/keys"), i = e("../lib/event"), o = function(e) {
        this.$editor = e, this.$data = {editor: e}, this.$handlers = [], this.setDefaultHandler(e.commands)
    };
    (function() {
        this.setDefaultHandler = function(e) {
            this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0)
        }, this.setKeyboardHandler = function(e) {
            var t = this.$handlers;
            if (t[t.length - 1] != e) {
                for (; t[t.length - 1] && t[t.length - 1] != this.$defaultHandler; )
                    this.removeKeyboardHandler(t[t.length - 1]);
                this.addKeyboardHandler(e, 1)
            }
        }, this.addKeyboardHandler = function(e, t) {
            if (e) {
                "function" != typeof e || e.handleKeyboard || (e.handleKeyboard = e);
                var n = this.$handlers.indexOf(e);
                -1 != n && this.$handlers.splice(n, 1), void 0 == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), -1 == n && e.attach && e.attach(this.$editor)
            }
        }, this.removeKeyboardHandler = function(e) {
            var t = this.$handlers.indexOf(e);
            return -1 == t ? !1 : (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
        }, this.getKeyboardHandler = function() {
            return this.$handlers[this.$handlers.length - 1]
        }, this.getStatusText = function() {
            var e = this.$data, t = e.editor;
            return this.$handlers.map(function(n) {
                return n.getStatusText && n.getStatusText(t, e) || ""
            }).filter(Boolean).join(" ")
        }, this.$callKeyboardHandlers = function(e, t, n, o) {
            for (var r, s = !1, a = this.$editor.commands, l = this.$handlers.length; l-- && (r = this.$handlers[l].handleKeyboard(this.$data, e, t, n, o), !(r && r.command && (s = "null" == r.command ? !0 : a.exec(r.command, this.$editor, r.args, o), s && o && -1 != e && 1 != r.passEvent && 1 != r.command.passEvent && i.stopEvent(o), s))); )
                ;
            return s
        }, this.onCommandKey = function(e, t, i) {
            var o = n.keyCodeToString(i);
            this.$callKeyboardHandlers(t, o, i, e)
        }, this.onTextInput = function(e) {
            var t = this.$callKeyboardHandlers(-1, e);
            t || this.$editor.commands.exec("insertstring", this.$editor, e)
        }
    }).call(o.prototype), t.KeyBinding = o
}), define("ace/range", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var n = function(e, t) {
        return e.row - t.row || e.column - t.column
    }, i = function(e, t, n, i) {
        this.start = {row: e,column: t}, this.end = {row: n,column: i}
    };
    (function() {
        this.isEqual = function(e) {
            return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
        }, this.toString = function() {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
        }, this.contains = function(e, t) {
            return 0 == this.compare(e, t)
        }, this.compareRange = function(e) {
            var t, n = e.end, i = e.start;
            return t = this.compare(n.row, n.column), 1 == t ? (t = this.compare(i.row, i.column), 1 == t ? 2 : 0 == t ? 1 : 0) : -1 == t ? -2 : (t = this.compare(i.row, i.column), -1 == t ? -1 : 1 == t ? 42 : 0)
        }, this.comparePoint = function(e) {
            return this.compare(e.row, e.column)
        }, this.containsRange = function(e) {
            return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
        }, this.intersects = function(e) {
            var t = this.compareRange(e);
            return -1 == t || 0 == t || 1 == t
        }, this.isEnd = function(e, t) {
            return this.end.row == e && this.end.column == t
        }, this.isStart = function(e, t) {
            return this.start.row == e && this.start.column == t
        }, this.setStart = function(e, t) {
            "object" == typeof e ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = t)
        }, this.setEnd = function(e, t) {
            "object" == typeof e ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = t)
        }, this.inside = function(e, t) {
            return 0 == this.compare(e, t) ? this.isEnd(e, t) || this.isStart(e, t) ? !1 : !0 : !1
        }, this.insideStart = function(e, t) {
            return 0 == this.compare(e, t) ? this.isEnd(e, t) ? !1 : !0 : !1
        }, this.insideEnd = function(e, t) {
            return 0 == this.compare(e, t) ? this.isStart(e, t) ? !1 : !0 : !1
        }, this.compare = function(e, t) {
            return this.isMultiLine() || e !== this.start.row ? e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -1 : t > this.end.column ? 1 : 0
        }, this.compareStart = function(e, t) {
            return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
        }, this.compareEnd = function(e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
        }, this.compareInside = function(e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
        }, this.clipRows = function(e, t) {
            if (this.end.row > t)
                var n = {row: t + 1,column: 0};
            else if (this.end.row < e)
                var n = {row: e,column: 0};
            if (this.start.row > t)
                var o = {row: t + 1,column: 0};
            else if (this.start.row < e)
                var o = {row: e,column: 0};
            return i.fromPoints(o || this.start, n || this.end)
        }, this.extend = function(e, t) {
            var n = this.compare(e, t);
            if (0 == n)
                return this;
            if (-1 == n)
                var o = {row: e,column: t};
            else
                var r = {row: e,column: t};
            return i.fromPoints(o || this.start, r || this.end)
        }, this.isEmpty = function() {
            return this.start.row === this.end.row && this.start.column === this.end.column
        }, this.isMultiLine = function() {
            return this.start.row !== this.end.row
        }, this.clone = function() {
            return i.fromPoints(this.start, this.end)
        }, this.collapseRows = function() {
            return 0 == this.end.column ? new i(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new i(this.start.row, 0, this.end.row, 0)
        }, this.toScreenRange = function(e) {
            var t = e.documentToScreenPosition(this.start), n = e.documentToScreenPosition(this.end);
            return new i(t.row, t.column, n.row, n.column)
        }, this.moveBy = function(e, t) {
            this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t
        }
    }).call(i.prototype), i.fromPoints = function(e, t) {
        return new i(e.row, e.column, t.row, t.column)
    }, i.comparePoints = n, i.comparePoints = function(e, t) {
        return e.row - t.row || e.column - t.column
    }, t.Range = i
}), define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(e, t) {
    "use strict";
    var n = e("./lib/oop"), i = e("./lib/lang"), o = e("./lib/event_emitter").EventEmitter, r = e("./range").Range, s = function(e) {
        this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.lead = this.selectionLead = this.doc.createAnchor(0, 0), this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
        var t = this;
        this.lead.on("change", function(e) {
            t._emit("changeCursor"), t.$isEmpty || t._emit("changeSelection"), t.$keepDesiredColumnOnChange || e.old.column == e.value.column || (t.$desiredColumn = null)
        }), this.selectionAnchor.on("change", function() {
            t.$isEmpty || t._emit("changeSelection")
        })
    };
    (function() {
        n.implement(this, o), this.isEmpty = function() {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
        }, this.isMultiLine = function() {
            return this.isEmpty() ? !1 : this.getRange().isMultiLine()
        }, this.getCursor = function() {
            return this.lead.getPosition()
        }, this.setSelectionAnchor = function(e, t) {
            this.anchor.setPosition(e, t), this.$isEmpty && (this.$isEmpty = !1, this._emit("changeSelection"))
        }, this.getSelectionAnchor = function() {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
        }, this.getSelectionLead = function() {
            return this.lead.getPosition()
        }, this.shiftSelection = function(e) {
            if (this.$isEmpty)
                return void this.moveCursorTo(this.lead.row, this.lead.column + e);
            var t = this.getSelectionAnchor(), n = this.getSelectionLead(), i = this.isBackwards();
            i && 0 === t.column || this.setSelectionAnchor(t.row, t.column + e), (i || 0 !== n.column) && this.$moveSelection(function() {
                this.moveCursorTo(n.row, n.column + e)
            })
        }, this.isBackwards = function() {
            var e = this.anchor, t = this.lead;
            return e.row > t.row || e.row == t.row && e.column > t.column
        }, this.getRange = function() {
            var e = this.anchor, t = this.lead;
            return this.isEmpty() ? r.fromPoints(t, t) : this.isBackwards() ? r.fromPoints(t, e) : r.fromPoints(e, t)
        }, this.clearSelection = function() {
            this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
        }, this.selectAll = function() {
            var e = this.doc.getLength() - 1;
            this.setSelectionAnchor(0, 0), this.moveCursorTo(e, this.doc.getLine(e).length)
        }, this.setRange = this.setSelectionRange = function(e, t) {
            t ? (this.setSelectionAnchor(e.end.row, e.end.column), this.selectTo(e.start.row, e.start.column)) : (this.setSelectionAnchor(e.start.row, e.start.column), this.selectTo(e.end.row, e.end.column)), this.getRange().isEmpty() && (this.$isEmpty = !0), this.$desiredColumn = null
        }, this.$moveSelection = function(e) {
            var t = this.lead;
            this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
        }, this.selectTo = function(e, t) {
            this.$moveSelection(function() {
                this.moveCursorTo(e, t)
            })
        }, this.selectToPosition = function(e) {
            this.$moveSelection(function() {
                this.moveCursorToPosition(e)
            })
        }, this.moveTo = function(e, t) {
            this.clearSelection(), this.moveCursorTo(e, t)
        }, this.moveToPosition = function(e) {
            this.clearSelection(), this.moveCursorToPosition(e)
        }, this.selectUp = function() {
            this.$moveSelection(this.moveCursorUp)
        }, this.selectDown = function() {
            this.$moveSelection(this.moveCursorDown)
        }, this.selectRight = function() {
            this.$moveSelection(this.moveCursorRight)
        }, this.selectLeft = function() {
            this.$moveSelection(this.moveCursorLeft)
        }, this.selectLineStart = function() {
            this.$moveSelection(this.moveCursorLineStart)
        }, this.selectLineEnd = function() {
            this.$moveSelection(this.moveCursorLineEnd)
        }, this.selectFileEnd = function() {
            this.$moveSelection(this.moveCursorFileEnd)
        }, this.selectFileStart = function() {
            this.$moveSelection(this.moveCursorFileStart)
        }, this.selectWordRight = function() {
            this.$moveSelection(this.moveCursorWordRight)
        }, this.selectWordLeft = function() {
            this.$moveSelection(this.moveCursorWordLeft)
        }, this.getWordRange = function(e, t) {
            if ("undefined" == typeof t) {
                var n = e || this.lead;
                e = n.row, t = n.column
            }
            return this.session.getWordRange(e, t)
        }, this.selectWord = function() {
            this.setSelectionRange(this.getWordRange())
        }, this.selectAWord = function() {
            var e = this.getCursor(), t = this.session.getAWordRange(e.row, e.column);
            this.setSelectionRange(t)
        }, this.getLineRange = function(e, t) {
            var n, i = "number" == typeof e ? e : this.lead.row, o = this.session.getFoldLine(i);
            return o ? (i = o.start.row, n = o.end.row) : n = i, t === !0 ? new r(i, 0, n, this.session.getLine(n).length) : new r(i, 0, n + 1, 0)
        }, this.selectLine = function() {
            this.setSelectionRange(this.getLineRange())
        }, this.moveCursorUp = function() {
            this.moveCursorBy(-1, 0)
        }, this.moveCursorDown = function() {
            this.moveCursorBy(1, 0)
        }, this.moveCursorLeft = function() {
            var e, t = this.lead.getPosition();
            if (e = this.session.getFoldAt(t.row, t.column, -1))
                this.moveCursorTo(e.start.row, e.start.column);
            else if (0 === t.column)
                t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length);
            else {
                var n = this.session.getTabSize();
                this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column - n, t.column).split(" ").length - 1 == n ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1)
            }
        }, this.moveCursorRight = function() {
            var e, t = this.lead.getPosition();
            if (e = this.session.getFoldAt(t.row, t.column, 1))
                this.moveCursorTo(e.end.row, e.end.column);
            else if (this.lead.column == this.doc.getLine(this.lead.row).length)
                this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
            else {
                var n = this.session.getTabSize(), t = this.lead;
                this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column, t.column + n).split(" ").length - 1 == n ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1)
            }
        }, this.moveCursorLineStart = function() {
            var e = this.lead.row, t = this.lead.column, n = this.session.documentToScreenRow(e, t), i = this.session.screenToDocumentPosition(n, 0), o = this.session.getDisplayLine(e, null, i.row, i.column), r = o.match(/^\s*/);
            r[0].length == t || this.session.$useEmacsStyleLineStart || (i.column += r[0].length), this.moveCursorToPosition(i)
        }, this.moveCursorLineEnd = function() {
            var e = this.lead, t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
            if (this.lead.column == t.column) {
                var n = this.session.getLine(t.row);
                if (t.column == n.length) {
                    var i = n.search(/\s+$/);
                    i > 0 && (t.column = i)
                }
            }
            this.moveCursorTo(t.row, t.column)
        }, this.moveCursorFileEnd = function() {
            var e = this.doc.getLength() - 1, t = this.doc.getLine(e).length;
            this.moveCursorTo(e, t)
        }, this.moveCursorFileStart = function() {
            this.moveCursorTo(0, 0)
        }, this.moveCursorLongWordRight = function() {
            var e, t = this.lead.row, n = this.lead.column, i = this.doc.getLine(t), o = i.substring(n);
            this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
            var r = this.session.getFoldAt(t, n, 1);
            return r ? void this.moveCursorTo(r.end.row, r.end.column) : ((e = this.session.nonTokenRe.exec(o)) && (n += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, o = i.substring(n)), n >= i.length ? (this.moveCursorTo(t, i.length), this.moveCursorRight(), void (t < this.doc.getLength() - 1 && this.moveCursorWordRight())) : ((e = this.session.tokenRe.exec(o)) && (n += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), void this.moveCursorTo(t, n)))
        }, this.moveCursorLongWordLeft = function() {
            var e, t = this.lead.row, n = this.lead.column;
            if (e = this.session.getFoldAt(t, n, -1))
                return void this.moveCursorTo(e.start.row, e.start.column);
            var o = this.session.getFoldStringAt(t, n, -1);
            null == o && (o = this.doc.getLine(t).substring(0, n));
            var r, s = i.stringReverse(o);
            return this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, (r = this.session.nonTokenRe.exec(s)) && (n -= this.session.nonTokenRe.lastIndex, s = s.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), 0 >= n ? (this.moveCursorTo(t, 0), this.moveCursorLeft(), void (t > 0 && this.moveCursorWordLeft())) : ((r = this.session.tokenRe.exec(s)) && (n -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), void this.moveCursorTo(t, n))
        }, this.$shortWordEndIndex = function(e) {
            var t, n, i = 0, o = /\s/, r = this.session.tokenRe;
            if (r.lastIndex = 0, t = this.session.tokenRe.exec(e))
                i = this.session.tokenRe.lastIndex;
            else {
                for (; (n = e[i]) && o.test(n); )
                    i++;
                if (1 > i)
                    for (r.lastIndex = 0; (n = e[i]) && !r.test(n); )
                        if (r.lastIndex = 0, i++, o.test(n)) {
                            if (i > 2) {
                                i--;
                                break
                            }
                            for (; (n = e[i]) && o.test(n); )
                                i++;
                            if (i > 2)
                                break
                        }
            }
            return r.lastIndex = 0, i
        }, this.moveCursorShortWordRight = function() {
            var e = this.lead.row, t = this.lead.column, n = this.doc.getLine(e), i = n.substring(t), o = this.session.getFoldAt(e, t, 1);
            if (o)
                return this.moveCursorTo(o.end.row, o.end.column);
            if (t == n.length) {
                var r = this.doc.getLength();
                do
                    e++, i = this.doc.getLine(e);
                while (r > e && /^\s*$/.test(i));
                /^\s+/.test(i) || (i = ""), t = 0
            }
            var s = this.$shortWordEndIndex(i);
            this.moveCursorTo(e, t + s)
        }, this.moveCursorShortWordLeft = function() {
            var e, t = this.lead.row, n = this.lead.column;
            if (e = this.session.getFoldAt(t, n, -1))
                return this.moveCursorTo(e.start.row, e.start.column);
            var o = this.session.getLine(t).substring(0, n);
            if (0 === n) {
                do
                    t--, o = this.doc.getLine(t);
                while (t > 0 && /^\s*$/.test(o));
                n = o.length, /\s+$/.test(o) || (o = "")
            }
            var r = i.stringReverse(o), s = this.$shortWordEndIndex(r);
            return this.moveCursorTo(t, n - s)
        }, this.moveCursorWordRight = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
        }, this.moveCursorWordLeft = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
        }, this.moveCursorBy = function(e, t) {
            var n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
            0 === t && (this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column);
            var i = this.session.screenToDocumentPosition(n.row + e, n.column);
            0 !== e && 0 === t && i.row === this.lead.row && i.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[i.row] && i.row++, this.moveCursorTo(i.row, i.column + t, 0 === t)
        }, this.moveCursorToPosition = function(e) {
            this.moveCursorTo(e.row, e.column)
        }, this.moveCursorTo = function(e, t, n) {
            var i = this.session.getFoldAt(e, t, 1);
            i && (e = i.start.row, t = i.start.column), this.$keepDesiredColumnOnChange = !0, this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, n || (this.$desiredColumn = null)
        }, this.moveCursorToScreen = function(e, t, n) {
            var i = this.session.screenToDocumentPosition(e, t);
            this.moveCursorTo(i.row, i.column, n)
        }, this.detach = function() {
            this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
        }, this.fromOrientedRange = function(e) {
            this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
        }, this.toOrientedRange = function(e) {
            var t = this.getRange();
            return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
        }, this.getRangeOfMovements = function(e) {
            var t = this.getCursor();
            try {
                e.call(null, this);
                var n = this.getCursor();
                return r.fromPoints(t, n)
            } catch (i) {
                return r.fromPoints(t, t)
            }finally {
                this.moveCursorToPosition(t)
            }
        }, this.toJSON = function() {
            if (this.rangeCount)
                var e = this.ranges.map(function(e) {
                    var t = e.clone();
                    return t.isBackwards = e.cursor == e.start, t
                });
            else {
                var e = this.getRange();
                e.isBackwards = this.isBackwards()
            }
            return e
        }, this.fromJSON = function(e) {
            if (void 0 == e.start) {
                if (this.rangeList) {
                    this.toSingleRange(e[0]);
                    for (var t = e.length; t--; ) {
                        var n = r.fromPoints(e[t].start, e[t].end);
                        e.isBackwards && (n.cursor = n.start), this.addRange(n, !0)
                    }
                    return
                }
                e = e[0]
            }
            this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards)
        }, this.isEqual = function(e) {
            if ((e.length || this.rangeCount) && e.length != this.rangeCount)
                return !1;
            if (!e.length || !this.ranges)
                return this.getRange().isEqual(e);
            for (var t = this.ranges.length; t--; )
                if (!this.ranges[t].isEqual(e[t]))
                    return !1;
            return !0
        }
    }).call(s.prototype), t.Selection = s
}), define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function(e, t) {
    "use strict";
    var n = e("./config"), i = 2e3, o = function(e) {
        this.states = e, this.regExps = {}, this.matchMappings = {};
        for (var t in this.states) {
            for (var n = this.states[t], i = [], o = 0, r = this.matchMappings[t] = {defaultToken: "text"}, s = "g", a = [], l = 0; l < n.length; l++) {
                var c = n[l];
                if (c.defaultToken && (r.defaultToken = c.defaultToken), c.caseInsensitive && (s = "gi"), null != c.regex) {
                    c.regex instanceof RegExp && (c.regex = c.regex.toString().slice(1, -1));
                    var h = c.regex, u = new RegExp("(?:(" + h + ")|(.))").exec("a").length - 2;
                    Array.isArray(c.token) ? 1 == c.token.length || 1 == u ? c.token = c.token[0] : u - 1 != c.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {rule: c,groupCount: u - 1}), c.token = c.token[0]) : (c.tokenArray = c.token, c.token = null, c.onMatch = this.$arrayTokens) : "function" != typeof c.token || c.onMatch || (c.onMatch = u > 1 ? this.$applyToken : c.token), u > 1 && (/\\\d/.test(c.regex) ? h = c.regex.replace(/\\([0-9]+)/g, function(e, t) {
                        return "\\" + (parseInt(t, 10) + o + 1)
                    }) : (u = 1, h = this.removeCapturingGroups(c.regex)), c.splitRegex || "string" == typeof c.token || a.push(c)), r[o] = l, o += u, i.push(h), c.onMatch || (c.onMatch = null)
                }
            }
            i.length || (r[0] = 0, i.push("$")), a.forEach(function(e) {
                e.splitRegex = this.createSplitterRegexp(e.regex, s)
            }, this), this.regExps[t] = new RegExp("(" + i.join(")|(") + ")|($)", s)
        }
    };
    (function() {
        this.$setMaxTokenCount = function(e) {
            i = 0 | e
        }, this.$applyToken = function(e) {
            var t = this.splitRegex.exec(e).slice(1), n = this.token.apply(this, t);
            if ("string" == typeof n)
                return [{type: n,value: e}];
            for (var i = [], o = 0, r = n.length; r > o; o++)
                t[o] && (i[i.length] = {type: n[o],value: t[o]});
            return i
        }, this.$arrayTokens = function(e) {
            if (!e)
                return [];
            var t = this.splitRegex.exec(e);
            if (!t)
                return "text";
            for (var n = [], i = this.tokenArray, o = 0, r = i.length; r > o; o++)
                t[o + 1] && (n[n.length] = {type: i[o],value: t[o + 1]});
            return n
        }, this.removeCapturingGroups = function(e) {
            var t = e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, function(e, t) {
                return t ? "(?:" : e
            });
            return t
        }, this.createSplitterRegexp = function(e, t) {
            if (-1 != e.indexOf("(?=")) {
                var n = 0, i = !1, o = {};
                e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(e, t, r, s, a, l) {
                    return i ? i = "]" != a : a ? i = !0 : s ? (n == o.stack && (o.end = l + 1, o.stack = -1), n--) : r && (n++, 1 != r.length && (o.stack = n, o.start = l)), e
                }), null != o.end && /^\)*$/.test(e.substr(o.end)) && (e = e.substring(0, o.start) + e.substr(o.end))
            }
            return new RegExp(e, (t || "").replace("g", ""))
        }, this.getLineTokens = function(e, t) {
            if (t && "string" != typeof t) {
                var n = t.slice(0);
                t = n[0], "#tmp" === t && (n.shift(), t = n.shift())
            } else
                var n = [];
            var o = t || "start", r = this.states[o];
            r || (o = "start", r = this.states[o]);
            var s = this.matchMappings[o], a = this.regExps[o];
            a.lastIndex = 0;
            for (var l, c = [], h = 0, u = 0, d = {type: null,value: ""}; l = a.exec(e); ) {
                var g = s.defaultToken, f = null, m = l[0], p = a.lastIndex;
                if (p - m.length > h) {
                    var v = e.substring(h, p - m.length);
                    d.type == g ? d.value += v : (d.type && c.push(d), d = {type: g,value: v})
                }
                for (var A = 0; A < l.length - 2; A++)
                    if (void 0 !== l[A + 1]) {
                        f = r[s[A]], g = f.onMatch ? f.onMatch(m, o, n) : f.token, f.next && (o = "string" == typeof f.next ? f.next : f.next(o, n), r = this.states[o], r || (this.reportError("state doesn't exist", o), o = "start", r = this.states[o]), s = this.matchMappings[o], h = p, a = this.regExps[o], a.lastIndex = p);
                        break
                    }
                if (m)
                    if ("string" == typeof g)
                        f && f.merge === !1 || d.type !== g ? (d.type && c.push(d), d = {type: g,value: m}) : d.value += m;
                    else if (g) {
                        d.type && c.push(d), d = {type: null,value: ""};
                        for (var A = 0; A < g.length; A++)
                            c.push(g[A])
                    }
                if (h == e.length)
                    break;
                if (h = p, u++ > i) {
                    for (u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {startState: t,line: e}); h < e.length; )
                        d.type && c.push(d), d = {value: e.substring(h, h += 2e3),type: "overflow"};
                    o = "start", n = [];
                    break
                }
            }
            return d.type && c.push(d), n.length > 1 && n[0] !== o && n.unshift("#tmp", o), {tokens: c,state: n.length ? n : o}
        }, this.reportError = n.reportError
    }).call(o.prototype), t.Tokenizer = o
}), define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function(e, t) {
    "use strict";
    var n = e("../lib/lang"), i = function() {
        this.$rules = {start: [{token: "empty_line",regex: "^$"}, {defaultToken: "text"}]}
    };
    (function() {
        this.addRules = function(e, t) {
            if (t)
                for (var n in e) {
                    for (var i = e[n], o = 0; o < i.length; o++) {
                        var r = i[o];
                        (r.next || r.onMatch) && ("string" != typeof r.next ? r.nextState && 0 !== r.nextState.indexOf(t) && (r.nextState = t + r.nextState) : 0 !== r.next.indexOf(t) && (r.next = t + r.next))
                    }
                    this.$rules[t + n] = i
                }
            else
                for (var n in e)
                    this.$rules[n] = e[n]
        }, this.getRules = function() {
            return this.$rules
        }, this.embedRules = function(e, t, i, o, r) {
            var s = "function" == typeof e ? (new e).getRules() : e;
            if (o)
                for (var a = 0; a < o.length; a++)
                    o[a] = t + o[a];
            else {
                o = [];
                for (var l in s)
                    o.push(t + l)
            }
            if (this.addRules(s, t), i)
                for (var c = Array.prototype[r ? "push" : "unshift"], a = 0; a < o.length; a++)
                    c.apply(this.$rules[o[a]], n.deepCopy(i));
            this.$embeds || (this.$embeds = []), this.$embeds.push(t)
        }, this.getEmbeds = function() {
            return this.$embeds
        };
        var e = function(e, t) {
            return ("start" != e || t.length) && t.unshift(this.nextState, e), this.nextState
        }, t = function(e, t) {
            return t.shift(), t.shift() || "start"
        };
        this.normalizeRules = function() {
            function n(r) {
                var s = o[r];
                s.processed = !0;
                for (var a = 0; a < s.length; a++) {
                    var l = s[a];
                    !l.regex && l.start && (l.regex = l.start, l.next || (l.next = []), l.next.push({defaultToken: l.token}, {token: l.token + ".end",regex: l.end || l.start,next: "pop"}), l.token = l.token + ".start", l.push = !0);
                    var c = l.next || l.push;
                    if (c && Array.isArray(c)) {
                        var h = l.stateName;
                        h || (h = l.token, "string" != typeof h && (h = h[0] || ""), o[h] && (h += i++)), o[h] = c, l.next = h, n(h)
                    } else
                        "pop" == c && (l.next = t);
                    if (l.push && (l.nextState = l.next || l.push, l.next = e, delete l.push), l.rules)
                        for (var u in l.rules)
                            o[u] ? o[u].push && o[u].push.apply(o[u], l.rules[u]) : o[u] = l.rules[u];
                    if (l.include || "string" == typeof l)
                        var d = l.include || l, g = o[d];
                    else
                        Array.isArray(l) && (g = l);
                    if (g) {
                        var f = [a, 1].concat(g);
                        l.noEscape && (f = f.filter(function(e) {
                            return !e.next
                        })), s.splice.apply(s, f), a--, g = null
                    }
                    l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive), delete l.defaultToken)
                }
            }
            var i = 0, o = this.$rules;
            Object.keys(o).forEach(n, this)
        }, this.createKeywordMapper = function(e, t, n, i) {
            var o = Object.create(null);
            return Object.keys(e).forEach(function(t) {
                var r = e[t];
                n && (r = r.toLowerCase());
                for (var s = r.split(i || "|"), a = s.length; a--; )
                    o[s[a]] = t
            }), Object.getPrototypeOf(o) && (o.__proto__ = null), this.$keywordList = Object.keys(o), e = null, n ? function(e) {
                return o[e.toLowerCase()] || t
            } : function(e) {
                return o[e] || t
            }
        }, this.getKeywords = function() {
            return this.$keywords
        }
    }).call(i.prototype), t.TextHighlightRules = i
}), define("ace/mode/behaviour", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var n = function() {
        this.$behaviours = {}
    };
    (function() {
        this.add = function(e, t, n) {
            switch (void 0) {
                case this.$behaviours:
                    this.$behaviours = {};
                case this.$behaviours[e]:
                    this.$behaviours[e] = {}
            }
            this.$behaviours[e][t] = n
        }, this.addBehaviours = function(e) {
            for (var t in e)
                for (var n in e[t])
                    this.add(t, n, e[t][n])
        }, this.remove = function(e) {
            this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
        }, this.inherit = function(e, t) {
            if ("function" == typeof e)
                var n = (new e).getBehaviours(t);
            else
                var n = e.getBehaviours(t);
            this.addBehaviours(n)
        }, this.getBehaviours = function(e) {
            if (e) {
                for (var t = {}, n = 0; n < e.length; n++)
                    this.$behaviours[e[n]] && (t[e[n]] = this.$behaviours[e[n]]);
                return t
            }
            return this.$behaviours
        }
    }).call(n.prototype), t.Behaviour = n
}), define("ace/unicode", ["require", "exports", "module"], function(e, t) {
    "use strict";
    function n(e) {
        var n = /\w{4}/g;
        for (var i in e)
            t.packages[i] = e[i].replace(n, "\\u$&")
    }
    t.packages = {}, n({L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",Me: "0488048906DE20DD-20E020E2-20E4A670-A672",N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",Z: "002000A01680180E2000-200A20282029202F205F3000",Zs: "002000A01680180E2000-200A202F205F3000",Zl: "2028",Zp: "2029",C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",Cc: "0000-001F007F-009F",Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",Co: "E000-F8FF",Cs: "D800-DFFF",Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"})
}), define("ace/token_iterator", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var n = function(e, t, n) {
        this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
        var i = e.getTokenAt(t, n);
        this.$tokenIndex = i ? i.index : -1
    };
    (function() {
        this.stepBackward = function() {
            for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
                if (this.$row -= 1, this.$row < 0)
                    return this.$row = 0, null;
                this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
            }
            return this.$rowTokens[this.$tokenIndex]
        }, this.stepForward = function() {
            this.$tokenIndex += 1;
            for (var e; this.$tokenIndex >= this.$rowTokens.length; ) {
                if (this.$row += 1, e || (e = this.$session.getLength()), this.$row >= e)
                    return this.$row = e - 1, null;
                this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
            }
            return this.$rowTokens[this.$tokenIndex]
        }, this.getCurrentToken = function() {
            return this.$rowTokens[this.$tokenIndex]
        }, this.getCurrentTokenRow = function() {
            return this.$row
        }, this.getCurrentTokenColumn = function() {
            var e = this.$rowTokens, t = this.$tokenIndex, n = e[t].start;
            if (void 0 !== n)
                return n;
            for (n = 0; t > 0; )
                t -= 1, n += e[t].value.length;
            return n
        }
    }).call(n.prototype), t.TokenIterator = n
}), define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(e, t) {
    "use strict";
    var n = e("../tokenizer").Tokenizer, i = e("./text_highlight_rules").TextHighlightRules, o = e("./behaviour").Behaviour, r = e("../unicode"), s = e("../lib/lang"), a = e("../token_iterator").TokenIterator, l = e("../range").Range, c = function() {
        this.HighlightRules = i, this.$behaviour = new o
    };
    (function() {
        this.tokenRe = new RegExp("^[" + r.packages.L + r.packages.Mn + r.packages.Mc + r.packages.Nd + r.packages.Pc + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + r.packages.L + r.packages.Mn + r.packages.Mc + r.packages.Nd + r.packages.Pc + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
            return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules, this.$tokenizer = new n(this.$highlightRules.getRules())), this.$tokenizer
        }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(e, t, n, i) {
            function o(e) {
                for (var t = n; i >= t; t++)
                    e(r.getLine(t), t)
            }
            var r = t.doc, a = !0, l = !0, c = 1 / 0, h = t.getTabSize(), u = !1;
            if (this.lineCommentStart) {
                if (Array.isArray(this.lineCommentStart))
                    var d = this.lineCommentStart.map(s.escapeRegExp).join("|"), g = this.lineCommentStart[0];
                else
                    var d = s.escapeRegExp(this.lineCommentStart), g = this.lineCommentStart;
                d = new RegExp("^(\\s*)(?:" + d + ") ?"), u = t.getUseSoftTabs();
                var f = function(e, t) {
                    var n = e.match(d);
                    if (n) {
                        var i = n[1].length, o = n[0].length;
                        A(e, i, o) || " " != n[0][o - 1] || o--, r.removeInLine(t, i, o)
                    }
                }, m = g + " ", p = function(e, t) {
                    (!a || /\S/.test(e)) && (A(e, c, c) ? r.insertInLine({row: t,column: c}, m) : r.insertInLine({row: t,column: c}, g))
                }, v = function(e) {
                    return d.test(e)
                }, A = function(e, t, n) {
                    for (var i = 0; t-- && " " == e.charAt(t); )
                        i++;
                    if (i % h != 0)
                        return !1;
                    for (var i = 0; " " == e.charAt(n++); )
                        i++;
                    return h > 2 ? i % h != h - 1 : i % h == 0
                }
            } else {
                if (!this.blockComment)
                    return !1;
                var g = this.blockComment.start, C = this.blockComment.end, d = new RegExp("^(\\s*)(?:" + s.escapeRegExp(g) + ")"), w = new RegExp("(?:" + s.escapeRegExp(C) + ")\\s*$"), p = function(e, t) {
                    v(e, t) || (!a || /\S/.test(e)) && (r.insertInLine({row: t,column: e.length}, C), r.insertInLine({row: t,column: c}, g))
                }, f = function(e, t) {
                    var n;
                    (n = e.match(w)) && r.removeInLine(t, e.length - n[0].length, e.length), (n = e.match(d)) && r.removeInLine(t, n[1].length, n[0].length)
                }, v = function(e, n) {
                    if (d.test(e))
                        return !0;
                    for (var i = t.getTokens(n), o = 0; o < i.length; o++)
                        if ("comment" === i[o].type)
                            return !0
                }
            }
            var F = 1 / 0;
            o(function(e, t) {
                var n = e.search(/\S/);
                -1 !== n ? (c > n && (c = n), l && !v(e, t) && (l = !1)) : F > e.length && (F = e.length)
            }), 1 / 0 == c && (c = F, a = !1, l = !1), u && c % h != 0 && (c = Math.floor(c / h) * h), o(l ? f : p)
        }, this.toggleBlockComment = function(e, t, n, i) {
            var o = this.blockComment;
            if (o) {
                !o.start && o[0] && (o = o[0]);
                var r, s, c = new a(t, i.row, i.column), h = c.getCurrentToken(), u = (t.selection, t.selection.toOrientedRange());
                if (h && /comment/.test(h.type)) {
                    for (var d, g; h && /comment/.test(h.type); ) {
                        var f = h.value.indexOf(o.start);
                        if (-1 != f) {
                            var m = c.getCurrentTokenRow(), p = c.getCurrentTokenColumn() + f;
                            d = new l(m, p, m, p + o.start.length);
                            break
                        }
                        h = c.stepBackward()
                    }
                    for (var c = new a(t, i.row, i.column), h = c.getCurrentToken(); h && /comment/.test(h.type); ) {
                        var f = h.value.indexOf(o.end);
                        if (-1 != f) {
                            var m = c.getCurrentTokenRow(), p = c.getCurrentTokenColumn() + f;
                            g = new l(m, p, m, p + o.end.length);
                            break
                        }
                        h = c.stepForward()
                    }
                    g && t.remove(g), d && (t.remove(d), r = d.start.row, s = -o.start.length)
                } else
                    s = o.start.length, r = n.start.row, t.insert(n.end, o.end), t.insert(n.start, o.start);
                u.start.row == r && (u.start.column += s), u.end.row == r && (u.end.column += s), t.selection.fromOrientedRange(u)
            }
        }, this.getNextLineIndent = function(e, t) {
            return this.$getIndent(t)
        }, this.checkOutdent = function() {
            return !1
        }, this.autoOutdent = function() {
        }, this.$getIndent = function(e) {
            return e.match(/^\s*/)[0]
        }, this.createWorker = function() {
            return null
        }, this.createModeDelegates = function(e) {
            this.$embeds = [], this.$modes = {};
            for (var t in e)
                e[t] && (this.$embeds.push(t), this.$modes[t] = new e[t]);
            for (var n = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"], t = 0; t < n.length; t++)
                !function(e) {
                    var i = n[t], o = e[i];
                    e[n[t]] = function() {
                        return this.$delegator(i, arguments, o)
                    }
                }(this)
        }, this.$delegator = function(e, t, n) {
            var i = t[0];
            "string" != typeof i && (i = i[0]);
            for (var o = 0; o < this.$embeds.length; o++)
                if (this.$modes[this.$embeds[o]]) {
                    var r = i.split(this.$embeds[o]);
                    if (!r[0] && r[1]) {
                        t[0] = r[1];
                        var s = this.$modes[this.$embeds[o]];
                        return s[e].apply(s, t)
                    }
                }
            var a = n.apply(this, t);
            return n ? a : void 0
        }, this.transformAction = function(e, t) {
            if (this.$behaviour) {
                var n = this.$behaviour.getBehaviours();
                for (var i in n)
                    if (n[i][t]) {
                        var o = n[i][t].apply(this, arguments);
                        if (o)
                            return o
                    }
            }
        }, this.getKeywords = function(e) {
            if (!this.completionKeywords) {
                var t = this.$tokenizer.rules, n = [];
                for (var i in t)
                    for (var o = t[i], r = 0, s = o.length; s > r; r++)
                        if ("string" == typeof o[r].token)
                            / /keyword|support|storage/ .
                test(o[r].token) && n.push(o[r].regex);
                else
                if ("object" == typeof o[r].token)
                    for (var a = 0, l = o[r].token.length; l > a; a++)
                        if (/keyword|support|storage/.test(o[r].token[a])) {
                            var i = o[r].regex.match(/\(.+?\)/g)[a];
                            n.push(i.substr(1, i.length - 2))
                        }
                this.completionKeywords = n
            }
            return e ? n.concat(this.$keywordList || []) : this.$keywordList
        }, this.$createKeywordList = function() {
            return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
        }, this.getCompletions = function() {
            var e = this.$keywordList || this.$createKeywordList();
            return e.map(function(e) {
                return {name: e,value: e,score: 0,meta: "keyword"}
            })
        }, this.$id = "ace/mode/text"
    }).call(c.prototype), t.Mode = c
}), define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var n = e("./lib/oop"), i = e("./lib/event_emitter").EventEmitter, o = t.Anchor = function(e, t, n) {
        this.$onChange = this.onChange.bind(this), this.attach(e), "undefined" == typeof n ? this.setPosition(t.row, t.column) : this.setPosition(t, n)
    };
    (function() {
        n.implement(this, i), this.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column)
        }, this.getDocument = function() {
            return this.document
        }, this.$insertRight = !1, this.onChange = function(e) {
            var t = e.data, n = t.range;
            if ((n.start.row != n.end.row || n.start.row == this.row) && !(n.start.row > this.row || n.start.row == this.row && n.start.column > this.column)) {
                var i = this.row, o = this.column, r = n.start, s = n.end;
                "insertText" === t.action ? r.row === i && r.column <= o ? r.column === o && this.$insertRight || (r.row === s.row ? o += s.column - r.column : (o -= r.column, i += s.row - r.row)) : r.row !== s.row && r.row < i && (i += s.row - r.row) : "insertLines" === t.action ? r.row === i && 0 === o && this.$insertRight || r.row <= i && (i += s.row - r.row) : "removeText" === t.action ? r.row === i && r.column < o ? o = s.column >= o ? r.column : Math.max(0, o - (s.column - r.column)) : r.row !== s.row && r.row < i ? (s.row === i && (o = Math.max(0, o - s.column) + r.column), i -= s.row - r.row) : s.row === i && (i -= s.row - r.row, o = Math.max(0, o - s.column) + r.column) : "removeLines" == t.action && r.row <= i && (s.row <= i ? i -= s.row - r.row : (i = r.row, o = 0)), this.setPosition(i, o, !0)
            }
        }, this.setPosition = function(e, t, n) {
            var i;
            if (i = n ? {row: e,column: t} : this.$clipPositionToDocument(e, t), this.row != i.row || this.column != i.column) {
                var o = {row: this.row,column: this.column};
                this.row = i.row, this.column = i.column, this._signal("change", {old: o,value: i})
            }
        }, this.detach = function() {
            this.document.removeEventListener("change", this.$onChange)
        }, this.attach = function(e) {
            this.document = e || this.document, this.document.on("change", this.$onChange)
        }, this.$clipPositionToDocument = function(e, t) {
            var n = {};
            return e >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : 0 > e ? (n.row = 0, n.column = 0) : (n.row = e, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, t))), 0 > t && (n.column = 0), n
        }
    }).call(o.prototype)
}), define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(e, t) {
    "use strict";
    var n = e("./lib/oop"), i = e("./lib/event_emitter").EventEmitter, o = e("./range").Range, r = e("./anchor").Anchor, s = function(e) {
        this.$lines = [], 0 === e.length ? this.$lines = [""] : Array.isArray(e) ? this._insertLines(0, e) : this.insert({row: 0,column: 0}, e)
    };
    (function() {
        n.implement(this, i), this.setValue = function(e) {
            var t = this.getLength();
            this.remove(new o(0, 0, t, this.getLine(t - 1).length)), this.insert({row: 0,column: 0}, e)
        }, this.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter())
        }, this.createAnchor = function(e, t) {
            return new r(this, e, t)
        }, this.$split = 0 === "aaa".split(/a/).length ? function(e) {
            return e.replace(/\r\n|\r/g, "\n").split("\n")
        } : function(e) {
            return e.split(/\r\n|\r|\n/)
        }, this.$detectNewLine = function(e) {
            var t = e.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode")
        }, this.getNewLineCharacter = function() {
            switch (this.$newLineMode) {
                case "windows":
                    return "\r\n";
                case "unix":
                    return "\n";
                default:
                    return this.$autoNewLine || "\n"
            }
        }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function(e) {
            this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"))
        }, this.getNewLineMode = function() {
            return this.$newLineMode
        }, this.isNewLine = function(e) {
            return "\r\n" == e || "\r" == e || "\n" == e
        }, this.getLine = function(e) {
            return this.$lines[e] || ""
        }, this.getLines = function(e, t) {
            return this.$lines.slice(e, t + 1)
        }, this.getAllLines = function() {
            return this.getLines(0, this.getLength())
        }, this.getLength = function() {
            return this.$lines.length
        }, this.getTextRange = function(e) {
            if (e.start.row == e.end.row)
                return this.getLine(e.start.row).substring(e.start.column, e.end.column);
            var t = this.getLines(e.start.row, e.end.row);
            t[0] = (t[0] || "").substring(e.start.column);
            var n = t.length - 1;
            return e.end.row - e.start.row == n && (t[n] = t[n].substring(0, e.end.column)), t.join(this.getNewLineCharacter())
        }, this.$clipPosition = function(e) {
            var t = this.getLength();
            return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : e.row < 0 && (e.row = 0), e
        }, this.insert = function(e, t) {
            if (!t || 0 === t.length)
                return e;
            e = this.$clipPosition(e), this.getLength() <= 1 && this.$detectNewLine(t);
            var n = this.$split(t), i = n.splice(0, 1)[0], o = 0 == n.length ? null : n.splice(n.length - 1, 1)[0];
            return e = this.insertInLine(e, i), null !== o && (e = this.insertNewLine(e), e = this._insertLines(e.row, n), e = this.insertInLine(e, o || "")), e
        }, this.insertLines = function(e, t) {
            return e >= this.getLength() ? this.insert({row: e,column: 0}, "\n" + t.join("\n")) : this._insertLines(Math.max(e, 0), t)
        }, this._insertLines = function(e, t) {
            if (0 == t.length)
                return {row: e,column: 0};
            for (; t.length > 2e4; ) {
                var n = this._insertLines(e, t.slice(0, 2e4));
                t = t.slice(2e4), e = n.row
            }
            var i = [e, 0];
            i.push.apply(i, t), this.$lines.splice.apply(this.$lines, i);
            var r = new o(e, 0, e + t.length, 0), s = {action: "insertLines",range: r,lines: t};
            return this._signal("change", {data: s}), r.end
        }, this.insertNewLine = function(e) {
            e = this.$clipPosition(e);
            var t = this.$lines[e.row] || "";
            this.$lines[e.row] = t.substring(0, e.column), this.$lines.splice(e.row + 1, 0, t.substring(e.column, t.length));
            var n = {row: e.row + 1,column: 0}, i = {action: "insertText",range: o.fromPoints(e, n),text: this.getNewLineCharacter()};
            return this._signal("change", {data: i}), n
        }, this.insertInLine = function(e, t) {
            if (0 == t.length)
                return e;
            var n = this.$lines[e.row] || "";
            this.$lines[e.row] = n.substring(0, e.column) + t + n.substring(e.column);
            var i = {row: e.row,column: e.column + t.length}, r = {action: "insertText",range: o.fromPoints(e, i),text: t};
            return this._signal("change", {data: r}), i
        }, this.remove = function(e) {
            if (e instanceof o || (e = o.fromPoints(e.start, e.end)), e.start = this.$clipPosition(e.start), e.end = this.$clipPosition(e.end), e.isEmpty())
                return e.start;
            var t = e.start.row, n = e.end.row;
            if (e.isMultiLine()) {
                var i = 0 == e.start.column ? t : t + 1, r = n - 1;
                e.end.column > 0 && this.removeInLine(n, 0, e.end.column), r >= i && this._removeLines(i, r), i != t && (this.removeInLine(t, e.start.column, this.getLine(t).length), this.removeNewLine(e.start.row))
            } else
                this.removeInLine(t, e.start.column, e.end.column);
            return e.start
        }, this.removeInLine = function(e, t, n) {
            if (t != n) {
                var i = new o(e, t, e, n), r = this.getLine(e), s = r.substring(t, n), a = r.substring(0, t) + r.substring(n, r.length);
                this.$lines.splice(e, 1, a);
                var l = {action: "removeText",range: i,text: s};
                return this._signal("change", {data: l}), i.start
            }
        }, this.removeLines = function(e, t) {
            return 0 > e || t >= this.getLength() ? this.remove(new o(e, 0, t + 1, 0)) : this._removeLines(e, t)
        }, this._removeLines = function(e, t) {
            var n = new o(e, 0, t + 1, 0), i = this.$lines.splice(e, t - e + 1), r = {action: "removeLines",range: n,nl: this.getNewLineCharacter(),lines: i};
            return this._signal("change", {data: r}), i
        }, this.removeNewLine = function(e) {
            var t = this.getLine(e), n = this.getLine(e + 1), i = new o(e, t.length, e + 1, 0), r = t + n;
            this.$lines.splice(e, 2, r);
            var s = {action: "removeText",range: i,text: this.getNewLineCharacter()};
            this._signal("change", {data: s})
        }, this.replace = function(e, t) {
            if (e instanceof o || (e = o.fromPoints(e.start, e.end)), 0 == t.length && e.isEmpty())
                return e.start;
            if (t == this.getTextRange(e))
                return e.end;
            if (this.remove(e), t)
                var n = this.insert(e.start, t);
            else
                n = e.start;
            return n
        }, this.applyDeltas = function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t], i = o.fromPoints(n.range.start, n.range.end);
                "insertLines" == n.action ? this.insertLines(i.start.row, n.lines) : "insertText" == n.action ? this.insert(i.start, n.text) : "removeLines" == n.action ? this._removeLines(i.start.row, i.end.row - 1) : "removeText" == n.action && this.remove(i)
            }
        }, this.revertDeltas = function(e) {
            for (var t = e.length - 1; t >= 0; t--) {
                var n = e[t], i = o.fromPoints(n.range.start, n.range.end);
                "insertLines" == n.action ? this._removeLines(i.start.row, i.end.row - 1) : "insertText" == n.action ? this.remove(i) : "removeLines" == n.action ? this._insertLines(i.start.row, n.lines) : "removeText" == n.action && this.insert(i.start, n.text)
            }
        }, this.indexToPosition = function(e, t) {
            for (var n = this.$lines || this.getAllLines(), i = this.getNewLineCharacter().length, o = t || 0, r = n.length; r > o; o++)
                if (e -= n[o].length + i, 0 > e)
                    return {row: o,column: e + n[o].length + i};
            return {row: r - 1,column: n[r - 1].length}
        }, this.positionToIndex = function(e, t) {
            for (var n = this.$lines || this.getAllLines(), i = this.getNewLineCharacter().length, o = 0, r = Math.min(e.row, n.length), s = t || 0; r > s; ++s)
                o += n[s].length + i;
            return o + e.column
        }
    }).call(s.prototype), t.Document = s
}), define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var n = e("./lib/oop"), i = e("./lib/event_emitter").EventEmitter, o = function(e) {
        this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
        var t = this;
        this.$worker = function() {
            if (t.running) {
                for (var e = new Date, n = t.currentLine, i = -1, o = t.doc; t.lines[n]; )
                    n++;
                var r = n, s = o.getLength(), a = 0;
                for (t.running = !1; s > n; ) {
                    t.$tokenizeRow(n), i = n;
                    do
                        n++;
                    while (t.lines[n]);
                    if (a++, a % 5 === 0 && new Date - e > 20) {
                        t.running = setTimeout(t.$worker, 20);
                        break
                    }
                }
                t.currentLine = n, i >= r && t.fireUpdateEvent(r, i)
            }
        }
    };
    (function() {
        n.implement(this, i), this.setTokenizer = function(e) {
            this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
        }, this.setDocument = function(e) {
            this.doc = e, this.lines = [], this.states = [], this.stop()
        }, this.fireUpdateEvent = function(e, t) {
            var n = {first: e,last: t};
            this._signal("update", {data: n})
        }, this.start = function(e) {
            this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
        }, this.scheduleStart = function() {
            this.running || (this.running = setTimeout(this.$worker, 700))
        }, this.$updateOnChange = function(e) {
            var t = e.range, n = t.start.row, i = t.end.row - n;
            if (0 === i)
                this.lines[n] = null;
            else if ("removeText" == e.action || "removeLines" == e.action)
                this.lines.splice(n, i + 1, null), this.states.splice(n, i + 1, null);
            else {
                var o = Array(i + 1);
                o.unshift(n, 1), this.lines.splice.apply(this.lines, o), this.states.splice.apply(this.states, o)
            }
            this.currentLine = Math.min(n, this.currentLine, this.doc.getLength()), this.stop()
        }, this.stop = function() {
            this.running && clearTimeout(this.running), this.running = !1
        }, this.getTokens = function(e) {
            return this.lines[e] || this.$tokenizeRow(e)
        }, this.getState = function(e) {
            return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
        }, this.$tokenizeRow = function(e) {
            var t = this.doc.getLine(e), n = this.states[e - 1], i = this.tokenizer.getLineTokens(t, n, e);
            return this.states[e] + "" != i.state + "" ? (this.states[e] = i.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = i.tokens
        }
    }).call(o.prototype), t.BackgroundTokenizer = o
}), define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(e, t) {
    "use strict";
    var n = e("./lib/lang"), i = (e("./lib/oop"), e("./range").Range), o = function(e, t, n) {
        this.setRegexp(e), this.clazz = t, this.type = n || "text"
    };
    (function() {
        this.MAX_RANGES = 500, this.setRegexp = function(e) {
            this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
        }, this.update = function(e, t, o, r) {
            if (this.regExp)
                for (var s = r.firstRow, a = r.lastRow, l = s; a >= l; l++) {
                    var c = this.cache[l];
                    null == c && (c = n.getMatchOffsets(o.getLine(l), this.regExp), c.length > this.MAX_RANGES && (c = c.slice(0, this.MAX_RANGES)), c = c.map(function(e) {
                        return new i(l, e.offset, l, e.offset + e.length)
                    }), this.cache[l] = c.length ? c : "");
                    for (var h = c.length; h--; )
                        t.drawSingleLineMarker(e, c[h].toScreenRange(o), this.clazz, r)
                }
        }
    }).call(o.prototype), t.SearchHighlight = o
}), define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    function n(e, t) {
        this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
        var n = t[t.length - 1];
        this.range = new i(t[0].start.row, t[0].start.column, n.end.row, n.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(e) {
            e.setFoldLine(this)
        }, this)
    }
    var i = e("../range").Range;
    (function() {
        this.shiftRow = function(e) {
            this.start.row += e, this.end.row += e, this.folds.forEach(function(t) {
                t.start.row += e, t.end.row += e
            })
        }, this.addFold = function(e) {
            if (e.sameRow) {
                if (e.start.row < this.startRow || e.endRow > this.endRow)
                    throw new Error("Can't add a fold to this FoldLine as it has no connection");
                this.folds.push(e), this.folds.sort(function(e, t) {
                    return -e.range.compareEnd(t.start.row, t.start.column)
                }), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column)
            } else if (e.start.row == this.end.row)
                this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column;
            else {
                if (e.end.row != this.start.row)
                    throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
            }
            e.foldLine = this
        }, this.containsRow = function(e) {
            return e >= this.start.row && e <= this.end.row
        }, this.walk = function(e, t, n) {
            var i, o, r, s = 0, a = this.folds, l = !0;
            null == t && (t = this.end.row, n = this.end.column);
            for (var c = 0; c < a.length; c++) {
                if (i = a[c], o = i.range.compareStart(t, n), -1 == o)
                    return void e(null, t, n, s, l);
                if (r = e(null, i.start.row, i.start.column, s, l), r = !r && e(i.placeholder, i.start.row, i.start.column, s), r || 0 === o)
                    return;
                l = !i.sameRow, s = i.end.column
            }
            e(null, t, n, s, l)
        }, this.getNextFoldTo = function(e, t) {
            for (var n, i, o = 0; o < this.folds.length; o++) {
                if (n = this.folds[o], i = n.range.compareEnd(e, t), -1 == i)
                    return {fold: n,kind: "after"};
                if (0 === i)
                    return {fold: n,kind: "inside"}
            }
            return null
        }, this.addRemoveChars = function(e, t, n) {
            var i, o, r = this.getNextFoldTo(e, t);
            if (r)
                if (i = r.fold, "inside" == r.kind && i.start.column != t && i.start.row != e)
                    window.console && window.console.log(e, t, i);
                else if (i.start.row == e) {
                    o = this.folds;
                    var s = o.indexOf(i);
                    for (0 === s && (this.start.column += n), s; s < o.length; s++) {
                        if (i = o[s], i.start.column += n, !i.sameRow)
                            return;
                        i.end.column += n
                    }
                    this.end.column += n
                }
        }, this.split = function(e, t) {
            var i = this.getNextFoldTo(e, t);
            if (!i || "inside" == i.kind)
                return null;
            var o = i.fold, r = this.folds, s = this.foldData, a = r.indexOf(o), l = r[a - 1];
            this.end.row = l.end.row, this.end.column = l.end.column, r = r.splice(a, r.length - a);
            var c = new n(s, r);
            return s.splice(s.indexOf(this) + 1, 0, c), c
        }, this.merge = function(e) {
            for (var t = e.folds, n = 0; n < t.length; n++)
                this.addFold(t[n]);
            var i = this.foldData;
            i.splice(i.indexOf(e), 1)
        }, this.toString = function() {
            var e = [this.range.toString() + ": ["];
            return this.folds.forEach(function(t) {
                e.push("  " + t.toString())
            }), e.push("]"), e.join("\n")
        }, this.idxToPosition = function(e) {
            for (var t = 0, n = 0; n < this.folds.length; n++) {
                var i = this.folds[n];
                if (e -= i.start.column - t, 0 > e)
                    return {row: i.start.row,column: i.start.column + e};
                if (e -= i.placeholder.length, 0 > e)
                    return i.start;
                t = i.end.column
            }
            return {row: this.end.row,column: this.end.column + e}
        }
    }).call(n.prototype), t.FoldLine = n
}), define("ace/range_list", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var n = e("./range").Range, i = n.comparePoints, o = function() {
        this.ranges = []
    };
    (function() {
        this.comparePoints = i, this.pointIndex = function(e, t, n) {
            for (var o = this.ranges, r = n || 0; r < o.length; r++) {
                var s = o[r], a = i(e, s.end);
                if (!(a > 0)) {
                    var l = i(e, s.start);
                    return 0 === a ? t && 0 !== l ? -r - 2 : r : l > 0 || 0 === l && !t ? r : -r - 1
                }
            }
            return -r - 1
        }, this.add = function(e) {
            var t = !e.isEmpty(), n = this.pointIndex(e.start, t);
            0 > n && (n = -n - 1);
            var i = this.pointIndex(e.end, t, n);
            return 0 > i ? i = -i - 1 : i++, this.ranges.splice(n, i - n, e)
        }, this.addList = function(e) {
            for (var t = [], n = e.length; n--; )
                t.push.call(t, this.add(e[n]));
            return t
        }, this.substractPoint = function(e) {
            var t = this.pointIndex(e);
            return t >= 0 ? this.ranges.splice(t, 1) : void 0
        }, this.merge = function() {
            var e = [], t = this.ranges;
            t = t.sort(function(e, t) {
                return i(e.start, t.start)
            });
            for (var n, o = t[0], r = 1; r < t.length; r++) {
                n = o, o = t[r];
                var s = i(n.end, o.start);
                0 > s || (0 != s || n.isEmpty() || o.isEmpty()) && (i(n.end, o.end) < 0 && (n.end.row = o.end.row, n.end.column = o.end.column), t.splice(r, 1), e.push(o), o = n, r--)
            }
            return this.ranges = t, e
        }, this.contains = function(e, t) {
            return this.pointIndex({row: e,column: t}) >= 0
        }, this.containsPoint = function(e) {
            return this.pointIndex(e) >= 0
        }, this.rangeAtPoint = function(e) {
            var t = this.pointIndex(e);
            return t >= 0 ? this.ranges[t] : void 0
        }, this.clipRows = function(e, t) {
            var n = this.ranges;
            if (n[0].start.row > t || n[n.length - 1].start.row < e)
                return [];
            var i = this.pointIndex({row: e,column: 0});
            0 > i && (i = -i - 1);
            var o = this.pointIndex({row: t,column: 0}, i);
            0 > o && (o = -o - 1);
            for (var r = [], s = i; o > s; s++)
                r.push(n[s]);
            return r
        }, this.removeAll = function() {
            return this.ranges.splice(0, this.ranges.length)
        }, this.attach = function(e) {
            this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
        }, this.detach = function() {
            this.session && (this.session.removeListener("change", this.onChange), this.session = null)
        }, this.$onChange = function(e) {
            var t = e.data.range;
            if ("i" == e.data.action[0])
                var n = t.start, i = t.end;
            else
                var i = t.start, n = t.end;
            for (var o = n.row, r = i.row, s = r - o, a = -n.column + i.column, l = this.ranges, c = 0, h = l.length; h > c; c++) {
                var u = l[c];
                if (!(u.end.row < o)) {
                    if (u.start.row > o)
                        break;
                    if (u.start.row == o && u.start.column >= n.column && (u.start.column == n.column && this.$insertRight || (u.start.column += a, u.start.row += s)), u.end.row == o && u.end.column >= n.column) {
                        if (u.end.column == n.column && this.$insertRight)
                            continue;
                        u.end.column == n.column && a > 0 && h - 1 > c && u.end.column > u.start.column && u.end.column == l[c + 1].start.column && (u.end.column -= a), u.end.column += a, u.end.row += s
                    }
                }
            }
            if (0 != s && h > c)
                for (; h > c; c++) {
                    var u = l[c];
                    u.start.row += s, u.end.row += s
                }
        }
    }).call(o.prototype), t.RangeList = o
}), define("ace/edit_session/fold", ["require", "exports", "module", "ace/range", "ace/range_list", "ace/lib/oop"], function(e, t) {
    "use strict";
    function n(e, t) {
        e.row -= t.row, 0 == e.row && (e.column -= t.column)
    }
    function i(e, t) {
        n(e.start, t), n(e.end, t)
    }
    function o(e, t) {
        0 == e.row && (e.column += t.column), e.row += t.row
    }
    function r(e, t) {
        o(e.start, t), o(e.end, t)
    }
    var s = (e("../range").Range, e("../range_list").RangeList), a = e("../lib/oop"), l = t.Fold = function(e, t) {
        this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = []
    };
    a.inherits(l, s), function() {
        this.toString = function() {
            return '"' + this.placeholder + '" ' + this.range.toString()
        }, this.setFoldLine = function(e) {
            this.foldLine = e, this.subFolds.forEach(function(t) {
                t.setFoldLine(e)
            })
        }, this.clone = function() {
            var e = this.range.clone(), t = new l(e, this.placeholder);
            return this.subFolds.forEach(function(e) {
                t.subFolds.push(e.clone())
            }), t.collapseChildren = this.collapseChildren, t
        }, this.addSubFold = function(e) {
            if (!this.range.isEqual(e)) {
                if (!this.range.containsRange(e))
                    throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
                i(e, this.start);
                for (var t = e.start.row, n = e.start.column, o = 0, r = -1; o < this.subFolds.length && (r = this.subFolds[o].range.compare(t, n), 1 == r); o++)
                    ;
                var s = this.subFolds[o];
                if (0 == r)
                    return s.addSubFold(e);
                for (var t = e.range.end.row, n = e.range.end.column, a = o, r = -1; a < this.subFolds.length && (r = this.subFolds[a].range.compare(t, n), 1 == r); a++)
                    ;
                {
                    this.subFolds[a]
                }
                if (0 == r)
                    throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
                {
                    this.subFolds.splice(o, a - o, e)
                }
                return e.setFoldLine(this.foldLine), e
            }
        }, this.restoreRange = function(e) {
            return r(e, this.start)
        }
    }.call(l.prototype)
}), define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function(e, t) {
    "use strict";
    function n() {
        this.getFoldAt = function(e, t, n) {
            var i = this.getFoldLine(e);
            if (!i)
                return null;
            for (var o = i.folds, r = 0; r < o.length; r++) {
                var s = o[r];
                if (s.range.contains(e, t)) {
                    if (1 == n && s.range.isEnd(e, t))
                        continue;
                    if (-1 == n && s.range.isStart(e, t))
                        continue;
                    return s
                }
            }
        }, this.getFoldsInRange = function(e) {
            var t = e.start, n = e.end, i = this.$foldData, o = [];
            t.column += 1, n.column -= 1;
            for (var r = 0; r < i.length; r++) {
                var s = i[r].range.compareRange(e);
                if (2 != s) {
                    if (-2 == s)
                        break;
                    for (var a = i[r].folds, l = 0; l < a.length; l++) {
                        var c = a[l];
                        if (s = c.range.compareRange(e), -2 == s)
                            break;
                        if (2 != s) {
                            if (42 == s)
                                break;
                            o.push(c)
                        }
                    }
                }
            }
            return t.column -= 1, n.column += 1, o
        }, this.getFoldsInRangeList = function(e) {
            if (Array.isArray(e)) {
                var t = [];
                e.forEach(function(e) {
                    t = t.concat(this.getFoldsInRange(e))
                }, this)
            } else
                var t = this.getFoldsInRange(e);
            return t
        }, this.getAllFolds = function() {
            for (var e = [], t = this.$foldData, n = 0; n < t.length; n++)
                for (var i = 0; i < t[n].folds.length; i++)
                    e.push(t[n].folds[i]);
            return e
        }, this.getFoldStringAt = function(e, t, n, i) {
            if (i = i || this.getFoldLine(e), !i)
                return null;
            for (var o, r, s = {end: {column: 0}}, a = 0; a < i.folds.length; a++) {
                r = i.folds[a];
                var l = r.range.compareEnd(e, t);
                if (-1 == l) {
                    o = this.getLine(r.start.row).substring(s.end.column, r.start.column);
                    break
                }
                if (0 === l)
                    return null;
                s = r
            }
            return o || (o = this.getLine(r.start.row).substring(s.end.column)), -1 == n ? o.substring(0, t - s.end.column) : 1 == n ? o.substring(t - s.end.column) : o
        }, this.getFoldLine = function(e, t) {
            var n = this.$foldData, i = 0;
            for (t && (i = n.indexOf(t)), -1 == i && (i = 0), i; i < n.length; i++) {
                var o = n[i];
                if (o.start.row <= e && o.end.row >= e)
                    return o;
                if (o.end.row > e)
                    return null
            }
            return null
        }, this.getNextFoldLine = function(e, t) {
            var n = this.$foldData, i = 0;
            for (t && (i = n.indexOf(t)), -1 == i && (i = 0), i; i < n.length; i++) {
                var o = n[i];
                if (o.end.row >= e)
                    return o
            }
            return null
        }, this.getFoldedRowCount = function(e, t) {
            for (var n = this.$foldData, i = t - e + 1, o = 0; o < n.length; o++) {
                var r = n[o], s = r.end.row, a = r.start.row;
                if (s >= t) {
                    t > a && (a >= e ? i -= t - a : i = 0);
                    break
                }
                s >= e && (i -= a >= e ? s - a : s - e + 1)
            }
            return i
        }, this.$addFoldLine = function(e) {
            return this.$foldData.push(e), this.$foldData.sort(function(e, t) {
                return e.start.row - t.start.row
            }), e
        }, this.addFold = function(e, t) {
            var n, i = this.$foldData, s = !1;
            e instanceof r ? n = e : (n = new r(t, e), n.collapseChildren = t.collapseChildren), this.$clipRangeToDocument(n.range);
            var a = n.start.row, l = n.start.column, c = n.end.row, h = n.end.column;
            if (!(c > a || a == c && h - 2 >= l))
                throw new Error("The range has to be at least 2 characters width");
            var u = this.getFoldAt(a, l, 1), d = this.getFoldAt(c, h, -1);
            if (u && d == u)
                return u.addSubFold(n);
            u && !u.range.isStart(a, l) && this.removeFold(u), d && !d.range.isEnd(c, h) && this.removeFold(d);
            var g = this.getFoldsInRange(n.range);
            g.length > 0 && (this.removeFolds(g), g.forEach(function(e) {
                n.addSubFold(e)
            }));
            for (var f = 0; f < i.length; f++) {
                var m = i[f];
                if (c == m.start.row) {
                    m.addFold(n), s = !0;
                    break
                }
                if (a == m.end.row) {
                    if (m.addFold(n), s = !0, !n.sameRow) {
                        var p = i[f + 1];
                        if (p && p.start.row == c) {
                            m.merge(p);
                            break
                        }
                    }
                    break
                }
                if (c <= m.start.row)
                    break
            }
            return s || (m = this.$addFoldLine(new o(this.$foldData, n))), this.$useWrapMode ? this.$updateWrapData(m.start.row, m.start.row) : this.$updateRowLengthCache(m.start.row, m.start.row), this.$modified = !0, this._emit("changeFold", {data: n,action: "add"}), n
        }, this.addFolds = function(e) {
            e.forEach(function(e) {
                this.addFold(e)
            }, this)
        }, this.removeFold = function(e) {
            var t = e.foldLine, n = t.start.row, i = t.end.row, o = this.$foldData, r = t.folds;
            if (1 == r.length)
                o.splice(o.indexOf(t), 1);
            else if (t.range.isEnd(e.end.row, e.end.column))
                r.pop(), t.end.row = r[r.length - 1].end.row, t.end.column = r[r.length - 1].end.column;
            else if (t.range.isStart(e.start.row, e.start.column))
                r.shift(), t.start.row = r[0].start.row, t.start.column = r[0].start.column;
            else if (e.sameRow)
                r.splice(r.indexOf(e), 1);
            else {
                var s = t.split(e.start.row, e.start.column);
                r = s.folds, r.shift(), s.start.row = r[0].start.row, s.start.column = r[0].start.column
            }
            this.$updating || (this.$useWrapMode ? this.$updateWrapData(n, i) : this.$updateRowLengthCache(n, i)), this.$modified = !0, this._emit("changeFold", {data: e,action: "remove"})
        }, this.removeFolds = function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(e[n]);
            t.forEach(function(e) {
                this.removeFold(e)
            }, this), this.$modified = !0
        }, this.expandFold = function(e) {
            this.removeFold(e), e.subFolds.forEach(function(t) {
                e.restoreRange(t), this.addFold(t)
            }, this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = []
        }, this.expandFolds = function(e) {
            e.forEach(function(e) {
                this.expandFold(e)
            }, this)
        }, this.unfold = function(e, t) {
            var n, o;
            if (null == e ? (n = new i(0, 0, this.getLength(), 0), t = !0) : n = "number" == typeof e ? new i(e, 0, e, this.getLine(e).length) : "row" in e ? i.fromPoints(e, e) : e, o = this.getFoldsInRangeList(n), t)
                this.removeFolds(o);
            else
                for (var r = o; r.length; )
                    this.expandFolds(r), r = this.getFoldsInRangeList(n);
            return o.length ? o : void 0
        }, this.isRowFolded = function(e, t) {
            return !!this.getFoldLine(e, t)
        }, this.getRowFoldEnd = function(e, t) {
            var n = this.getFoldLine(e, t);
            return n ? n.end.row : e
        }, this.getRowFoldStart = function(e, t) {
            var n = this.getFoldLine(e, t);
            return n ? n.start.row : e
        }, this.getFoldDisplayLine = function(e, t, n, i, o) {
            null == i && (i = e.start.row), null == o && (o = 0), null == t && (t = e.end.row), null == n && (n = this.getLine(t).length);
            var r = this.doc, s = "";
            return e.walk(function(e, t, n, a) {
                if (!(i > t)) {
                    if (t == i) {
                        if (o > n)
                            return;
                        a = Math.max(o, a)
                    }
                    s += null != e ? e : r.getLine(t).substring(a, n)
                }
            }, t, n), s
        }, this.getDisplayLine = function(e, t, n, i) {
            var o = this.getFoldLine(e);
            if (o)
                return this.getFoldDisplayLine(o, e, t, n, i);
            var r;
            return r = this.doc.getLine(e), r.substring(i || 0, t || r.length)
        }, this.$cloneFoldData = function() {
            var e = [];
            return e = this.$foldData.map(function(t) {
                var n = t.folds.map(function(e) {
                    return e.clone()
                });
                return new o(e, n)
            })
        }, this.toggleFold = function(e) {
            var t, n, i = this.selection, o = i.getRange();
            if (o.isEmpty()) {
                var r = o.start;
                if (t = this.getFoldAt(r.row, r.column))
                    return void this.expandFold(t);
                (n = this.findMatchingBracket(r)) ? 1 == o.comparePoint(n) ? o.end = n : (o.start = n, o.start.column++, o.end.column--) : (n = this.findMatchingBracket({row: r.row,column: r.column + 1})) ? (1 == o.comparePoint(n) ? o.end = n : o.start = n, o.start.column++) : o = this.getCommentFoldRange(r.row, r.column) || o
            } else {
                var s = this.getFoldsInRange(o);
                if (e && s.length)
                    return void this.expandFolds(s);
                1 == s.length && (t = s[0])
            }
            if (t || (t = this.getFoldAt(o.start.row, o.start.column)), t && t.range.toString() == o.toString())
                return void this.expandFold(t);
            var a = "...";
            if (!o.isMultiLine()) {
                if (a = this.getTextRange(o), a.length < 4)
                    return;
                a = a.trim().substring(0, 2) + ".."
            }
            this.addFold(a, o)
        }, this.getCommentFoldRange = function(e, t, n) {
            var o = new s(this, e, t), r = o.getCurrentToken();
            if (r && /^comment|string/.test(r.type)) {
                var a = new i, l = new RegExp(r.type.replace(/\..*/, "\\."));
                if (1 != n) {
                    do
                        r = o.stepBackward();
                    while (r && l.test(r.type));
                    o.stepForward()
                }
                if (a.start.row = o.getCurrentTokenRow(), a.start.column = o.getCurrentTokenColumn() + 2, o = new s(this, e, t), -1 != n) {
                    do
                        r = o.stepForward();
                    while (r && l.test(r.type));
                    r = o.stepBackward()
                } else
                    r = o.getCurrentToken();
                return a.end.row = o.getCurrentTokenRow(), a.end.column = o.getCurrentTokenColumn() + r.value.length - 2, a
            }
        }, this.foldAll = function(e, t, n) {
            void 0 == n && (n = 1e5);
            var i = this.foldWidgets;
            if (i) {
                t = t || this.getLength(), e = e || 0;
                for (var o = e; t > o; o++)
                    if (null == i[o] && (i[o] = this.getFoldWidget(o)), "start" == i[o]) {
                        var r = this.getFoldWidgetRange(o);
                        if (r && r.isMultiLine() && r.end.row <= t && r.start.row >= e) {
                            o = r.end.row;
                            try {
                                var s = this.addFold("...", r);
                                s && (s.collapseChildren = n)
                            } catch (a) {
                            }
                        }
                    }
            }
        }, this.$foldStyles = {manual: 1,markbegin: 1,markbeginend: 1}, this.$foldStyle = "markbegin", this.setFoldStyle = function(e) {
            if (!this.$foldStyles[e])
                throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
            if (this.$foldStyle != e) {
                this.$foldStyle = e, "manual" == e && this.unfold();
                var t = this.$foldMode;
                this.$setFolding(null), this.$setFolding(t)
            }
        }, this.$setFolding = function(e) {
            if (this.$foldMode != e) {
                if (this.$foldMode = e, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._emit("changeAnnotation"), !e || "manual" == this.$foldStyle)
                    return void (this.foldWidgets = null);
                this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)
            }
        }, this.getParentFoldRangeData = function(e, t) {
            var n = this.foldWidgets;
            if (!n || t && n[e])
                return {};
            for (var i, o = e - 1; o >= 0; ) {
                var r = n[o];
                if (null == r && (r = n[o] = this.getFoldWidget(o)), "start" == r) {
                    var s = this.getFoldWidgetRange(o);
                    if (i || (i = s), s && s.end.row >= e)
                        break
                }
                o--
            }
            return {range: -1 !== o && s,firstRange: i}
        }, this.onFoldWidgetClick = function(e, t) {
            t = t.domEvent;
            var n = {children: t.shiftKey,all: t.ctrlKey || t.metaKey,siblings: t.altKey}, i = this.$toggleFoldWidget(e, n);
            if (!i) {
                var o = t.target || t.srcElement;
                o && /ace_fold-widget/.test(o.className) && (o.className += " ace_invalid")
            }
        }, this.$toggleFoldWidget = function(e, t) {
            if (this.getFoldWidget) {
                var n = this.getFoldWidget(e), i = this.getLine(e), o = "end" === n ? -1 : 1, r = this.getFoldAt(e, -1 === o ? 0 : i.length, o);
                if (r)
                    return void (t.children || t.all ? this.removeFold(r) : this.expandFold(r));
                var s = this.getFoldWidgetRange(e, !0);
                if (s && !s.isMultiLine() && (r = this.getFoldAt(s.start.row, s.start.column, 1), r && s.isEqual(r.range)))
                    return void this.removeFold(r);
                if (t.siblings) {
                    var a = this.getParentFoldRangeData(e);
                    if (a.range)
                        var l = a.range.start.row + 1, c = a.range.end.row;
                    this.foldAll(l, c, t.all ? 1e4 : 0)
                } else
                    t.children ? (c = s ? s.end.row : this.getLength(), this.foldAll(e + 1, c, t.all ? 1e4 : 0)) : s && (t.all && (s.collapseChildren = 1e4), this.addFold("...", s));
                return s
            }
        }, this.toggleFoldWidget = function() {
            var e = this.selection.getCursor().row;
            e = this.getRowFoldStart(e);
            var t = this.$toggleFoldWidget(e, {});
            if (!t) {
                var n = this.getParentFoldRangeData(e, !0);
                if (t = n.range || n.firstRange) {
                    e = t.start.row;
                    var i = this.getFoldAt(e, this.getLine(e).length, 1);
                    i ? this.removeFold(i) : this.addFold("...", t)
                }
            }
        }, this.updateFoldWidgets = function(e) {
            var t = e.data, n = t.range, i = n.start.row, o = n.end.row - i;
            if (0 === o)
                this.foldWidgets[i] = null;
            else if ("removeText" == t.action || "removeLines" == t.action)
                this.foldWidgets.splice(i, o + 1, null);
            else {
                var r = Array(o + 1);
                r.unshift(i, 1), this.foldWidgets.splice.apply(this.foldWidgets, r)
            }
        }, this.tokenizerUpdateFoldWidgets = function(e) {
            var t = e.data;
            t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length)
        }
    }
    var i = e("../range").Range, o = e("./fold_line").FoldLine, r = e("./fold").Fold, s = e("../token_iterator").TokenIterator;
    t.Folding = n
}), define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(e, t) {
    "use strict";
    function n() {
        this.findMatchingBracket = function(e, t) {
            if (0 == e.column)
                return null;
            var n = t || this.getLine(e.row).charAt(e.column - 1);
            if ("" == n)
                return null;
            var i = n.match(/([\(\[\{])|([\)\]\}])/);
            return i ? i[1] ? this.$findClosingBracket(i[1], e) : this.$findOpeningBracket(i[2], e) : null
        }, this.getBracketRange = function(e) {
            var t, n = this.getLine(e.row), i = !0, r = n.charAt(e.column - 1), s = r && r.match(/([\(\[\{])|([\)\]\}])/);
            if (s || (r = n.charAt(e.column), e = {row: e.row,column: e.column + 1}, s = r && r.match(/([\(\[\{])|([\)\]\}])/), i = !1), !s)
                return null;
            if (s[1]) {
                var a = this.$findClosingBracket(s[1], e);
                if (!a)
                    return null;
                t = o.fromPoints(e, a), i || (t.end.column++, t.start.column--), t.cursor = t.end
            } else {
                var a = this.$findOpeningBracket(s[2], e);
                if (!a)
                    return null;
                t = o.fromPoints(a, e), i || (t.start.column++, t.end.column--), t.cursor = t.start
            }
            return t
        }, this.$brackets = {")": "(","(": ")","]": "[","[": "]","{": "}","}": "{"}, this.$findOpeningBracket = function(e, t, n) {
            var o = this.$brackets[e], r = 1, s = new i(this, t.row, t.column), a = s.getCurrentToken();
            if (a || (a = s.stepForward()), a) {
                n || (n = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end|start|begin)\b/, "") + ")+"));
                for (var l = t.column - s.getCurrentTokenColumn() - 2, c = a.value; ; ) {
                    for (; l >= 0; ) {
                        var h = c.charAt(l);
                        if (h == o) {
                            if (r -= 1, 0 == r)
                                return {row: s.getCurrentTokenRow(),column: l + s.getCurrentTokenColumn()}
                        } else
                            h == e && (r += 1);
                        l -= 1
                    }
                    do
                        a = s.stepBackward();
                    while (a && !n.test(a.type));
                    if (null == a)
                        break;
                    c = a.value, l = c.length - 1
                }
                return null
            }
        }, this.$findClosingBracket = function(e, t, n) {
            var o = this.$brackets[e], r = 1, s = new i(this, t.row, t.column), a = s.getCurrentToken();
            if (a || (a = s.stepForward()), a) {
                n || (n = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:end|start|begin)\b/, "") + ")+"));
                for (var l = t.column - s.getCurrentTokenColumn(); ; ) {
                    for (var c = a.value, h = c.length; h > l; ) {
                        var u = c.charAt(l);
                        if (u == o) {
                            if (r -= 1, 0 == r)
                                return {row: s.getCurrentTokenRow(),column: l + s.getCurrentTokenColumn()}
                        } else
                            u == e && (r += 1);
                        l += 1
                    }
                    do
                        a = s.stepForward();
                    while (a && !n.test(a.type));
                    if (null == a)
                        break;
                    l = 0
                }
                return null
            }
        }
    }
    var i = e("../token_iterator").TokenIterator, o = e("../range").Range;
    t.BracketMatch = n
}), define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(e, t) {
    "use strict";
    var n = e("./lib/oop"), i = e("./lib/lang"), o = e("./config"), r = e("./lib/event_emitter").EventEmitter, s = e("./selection").Selection, a = e("./mode/text").Mode, l = e("./range").Range, c = e("./document").Document, h = e("./background_tokenizer").BackgroundTokenizer, u = e("./search_highlight").SearchHighlight, d = function(e, t) {
        this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.$foldData.toString = function() {
            return this.join("\n")
        }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == typeof e && e.getLine || (e = new c(e)), this.setDocument(e), this.selection = new s(this), o.resetOptions(this), this.setMode(t), o._signal("session", this)
    };
    (function() {
        function e(e) {
            return 4352 > e ? !1 : e >= 4352 && 4447 >= e || e >= 4515 && 4519 >= e || e >= 4602 && 4607 >= e || e >= 9001 && 9002 >= e || e >= 11904 && 11929 >= e || e >= 11931 && 12019 >= e || e >= 12032 && 12245 >= e || e >= 12272 && 12283 >= e || e >= 12288 && 12350 >= e || e >= 12353 && 12438 >= e || e >= 12441 && 12543 >= e || e >= 12549 && 12589 >= e || e >= 12593 && 12686 >= e || e >= 12688 && 12730 >= e || e >= 12736 && 12771 >= e || e >= 12784 && 12830 >= e || e >= 12832 && 12871 >= e || e >= 12880 && 13054 >= e || e >= 13056 && 19903 >= e || e >= 19968 && 42124 >= e || e >= 42128 && 42182 >= e || e >= 43360 && 43388 >= e || e >= 44032 && 55203 >= e || e >= 55216 && 55238 >= e || e >= 55243 && 55291 >= e || e >= 63744 && 64255 >= e || e >= 65040 && 65049 >= e || e >= 65072 && 65106 >= e || e >= 65108 && 65126 >= e || e >= 65128 && 65131 >= e || e >= 65281 && 65376 >= e || e >= 65504 && 65510 >= e
        }
        n.implement(this, r), this.setDocument = function(e) {
            this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
        }, this.getDocument = function() {
            return this.doc
        }, this.$resetRowCache = function(e) {
            if (!e)
                return this.$docRowCache = [], void (this.$screenRowCache = []);
            var t = this.$docRowCache.length, n = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
            t > n && (this.$docRowCache.splice(n, t), this.$screenRowCache.splice(n, t))
        }, this.$getRowCacheIndex = function(e, t) {
            for (var n = 0, i = e.length - 1; i >= n; ) {
                var o = n + i >> 1, r = e[o];
                if (t > r)
                    n = o + 1;
                else {
                    if (!(r > t))
                        return o;
                    i = o - 1
                }
            }
            return n - 1
        }, this.resetCaches = function() {
            this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
        }, this.onChangeFold = function(e) {
            var t = e.data;
            this.$resetRowCache(t.start.row)
        }, this.onChange = function(e) {
            var t = e.data;
            this.$modified = !0, this.$resetRowCache(t.range.start.row);
            var n = this.$updateInternalDataOnChange(e);
            this.$fromUndo || !this.$undoManager || t.ignore || (this.$deltasDoc.push(t), n && 0 != n.length && this.$deltasFold.push({action: "removeFolds",folds: n}), this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(t), this._signal("change", e)
        }, this.setValue = function(e) {
            this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
        }, this.getValue = this.toString = function() {
            return this.doc.getValue()
        }, this.getSelection = function() {
            return this.selection
        }, this.getState = function(e) {
            return this.bgTokenizer.getState(e)
        }, this.getTokens = function(e) {
            return this.bgTokenizer.getTokens(e)
        }, this.getTokenAt = function(e, t) {
            var n, i = this.bgTokenizer.getTokens(e), o = 0;
            if (null == t)
                r = i.length - 1, o = this.getLine(e).length;
            else
                for (var r = 0; r < i.length && (o += i[r].value.length, !(o >= t)); r++)
                    ;
            return (n = i[r]) ? (n.index = r, n.start = o - n.value.length, n) : null
        }, this.setUndoManager = function(e) {
            if (this.$undoManager = e, this.$deltas = [], this.$deltasDoc = [], this.$deltasFold = [], this.$informUndoManager && this.$informUndoManager.cancel(), e) {
                var t = this;
                this.$syncInformUndoManager = function() {
                    t.$informUndoManager.cancel(), t.$deltasFold.length && (t.$deltas.push({group: "fold",deltas: t.$deltasFold}), t.$deltasFold = []), t.$deltasDoc.length && (t.$deltas.push({group: "doc",deltas: t.$deltasDoc}), t.$deltasDoc = []), t.$deltas.length > 0 && e.execute({action: "aceupdate",args: [t.$deltas, t],merge: t.mergeUndoDeltas}), t.mergeUndoDeltas = !1, t.$deltas = []
                }, this.$informUndoManager = i.delayedCall(this.$syncInformUndoManager)
            }
        }, this.markUndoGroup = function() {
            this.$syncInformUndoManager && this.$syncInformUndoManager()
        }, this.$defaultUndoManager = {undo: function() {
            },redo: function() {
            },reset: function() {
            }}, this.getUndoManager = function() {
            return this.$undoManager || this.$defaultUndoManager
        }, this.getTabString = function() {
            return this.getUseSoftTabs() ? i.stringRepeat(" ", this.getTabSize()) : "	"
        }, this.setUseSoftTabs = function(e) {
            this.setOption("useSoftTabs", e)
        }, this.getUseSoftTabs = function() {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs
        }, this.setTabSize = function(e) {
            this.setOption("tabSize", e)
        }, this.getTabSize = function() {
            return this.$tabSize
        }, this.isTabStop = function(e) {
            return this.$useSoftTabs && e.column % this.$tabSize === 0
        }, this.$overwrite = !1, this.setOverwrite = function(e) {
            this.setOption("overwrite", e)
        }, this.getOverwrite = function() {
            return this.$overwrite
        }, this.toggleOverwrite = function() {
            this.setOverwrite(!this.$overwrite)
        }, this.addGutterDecoration = function(e, t) {
            this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {})
        }, this.removeGutterDecoration = function(e, t) {
            this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {})
        }, this.getBreakpoints = function() {
            return this.$breakpoints
        }, this.setBreakpoints = function(e) {
            this.$breakpoints = [];
            for (var t = 0; t < e.length; t++)
                this.$breakpoints[e[t]] = "ace_breakpoint";
            this._signal("changeBreakpoint", {})
        }, this.clearBreakpoints = function() {
            this.$breakpoints = [], this._signal("changeBreakpoint", {})
        }, this.setBreakpoint = function(e, t) {
            void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
        }, this.clearBreakpoint = function(e) {
            delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
        }, this.addMarker = function(e, t, n, i) {
            var o = this.$markerId++, r = {range: e,type: n || "line",renderer: "function" == typeof n ? n : null,clazz: t,inFront: !!i,id: o};
            return i ? (this.$frontMarkers[o] = r, this._signal("changeFrontMarker")) : (this.$backMarkers[o] = r, this._signal("changeBackMarker")), o
        }, this.addDynamicMarker = function(e, t) {
            if (e.update) {
                var n = this.$markerId++;
                return e.id = n, e.inFront = !!t, t ? (this.$frontMarkers[n] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[n] = e, this._signal("changeBackMarker")), e
            }
        }, this.removeMarker = function(e) {
            var t = this.$frontMarkers[e] || this.$backMarkers[e];
            if (t) {
                var n = t.inFront ? this.$frontMarkers : this.$backMarkers;
                t && (delete n[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
            }
        }, this.getMarkers = function(e) {
            return e ? this.$frontMarkers : this.$backMarkers
        }, this.highlight = function(e) {
            if (!this.$searchHighlight) {
                var t = new u(null, "ace_selected-word", "text");
                this.$searchHighlight = this.addDynamicMarker(t)
            }
            this.$searchHighlight.setRegexp(e)
        }, this.highlightLines = function(e, t, n, i) {
            "number" != typeof t && (n = t, t = e), n || (n = "ace_step");
            var o = new l(e, 0, t, 1 / 0);
            return o.id = this.addMarker(o, n, "fullLine", i), o
        }, this.setAnnotations = function(e) {
            this.$annotations = e, this._signal("changeAnnotation", {})
        }, this.getAnnotations = function() {
            return this.$annotations || []
        }, this.clearAnnotations = function() {
            this.setAnnotations([])
        }, this.$detectNewLine = function(e) {
            var t = e.match(/^.*?(\r?\n)/m);
            this.$autoNewLine = t ? t[1] : "\n"
        }, this.getWordRange = function(e, t) {
            var n = this.getLine(e), i = !1;
            if (t > 0 && (i = !!n.charAt(t - 1).match(this.tokenRe)), i || (i = !!n.charAt(t).match(this.tokenRe)), i)
                var o = this.tokenRe;
            else if (/^\s+$/.test(n.slice(t - 1, t + 1)))
                var o = /\s/;
            else
                var o = this.nonTokenRe;
            var r = t;
            if (r > 0) {
                do
                    r--;
                while (r >= 0 && n.charAt(r).match(o));
                r++
            }
            for (var s = t; s < n.length && n.charAt(s).match(o); )
                s++;
            return new l(e, r, e, s)
        }, this.getAWordRange = function(e, t) {
            for (var n = this.getWordRange(e, t), i = this.getLine(n.end.row); i.charAt(n.end.column).match(/[ \t]/); )
                n.end.column += 1;
            return n
        }, this.setNewLineMode = function(e) {
            this.doc.setNewLineMode(e)
        }, this.getNewLineMode = function() {
            return this.doc.getNewLineMode()
        }, this.setUseWorker = function(e) {
            this.setOption("useWorker", e)
        }, this.getUseWorker = function() {
            return this.$useWorker
        }, this.onReloadTokenizer = function(e) {
            var t = e.data;
            this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e)
        }, this.$modes = {}, this.$mode = null, this.$modeId = null, this.setMode = function(e, t) {
            if (e && "object" == typeof e) {
                if (e.getTokenizer)
                    return this.$onChangeMode(e);
                var n = e, i = n.path
            } else
                i = e || "ace/mode/text";
            return this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new a), this.$modes[i] && !n ? (this.$onChangeMode(this.$modes[i]), void (t && t())) : (this.$modeId = i, o.loadModule(["mode", i], function(e) {
                return this.$modeId !== i ? t && t() : (this.$modes[i] && !n ? this.$onChangeMode(this.$modes[i]) : e && e.Mode && (e = new e.Mode(n), n || (this.$modes[i] = e, e.$id = i), this.$onChangeMode(e)), void (t && t()))
            }.bind(this)), void (this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)))
        }, this.$onChangeMode = function(e, t) {
            if (t || (this.$modeId = e.$id), this.$mode !== e) {
                this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();
                var n = e.getTokenizer();
                if (void 0 !== n.addEventListener) {
                    var i = this.onReloadTokenizer.bind(this);
                    n.addEventListener("update", i)
                }
                if (this.bgTokenizer)
                    this.bgTokenizer.setTokenizer(n);
                else {
                    this.bgTokenizer = new h(n);
                    var o = this;
                    this.bgTokenizer.addEventListener("update", function(e) {
                        o._signal("tokenizerUpdate", e)
                    })
                }
                this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
            }
        }, this.$stopWorker = function() {
            this.$worker && (this.$worker.terminate(), this.$worker = null)
        }, this.$startWorker = function() {
            try {
                this.$worker = this.$mode.createWorker(this)
            } catch (e) {
                o.warn("Could not load worker", e), this.$worker = null
            }
        }, this.getMode = function() {
            return this.$mode
        }, this.$scrollTop = 0, this.setScrollTop = function(e) {
            this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e, this._signal("changeScrollTop", e))
        }, this.getScrollTop = function() {
            return this.$scrollTop
        }, this.$scrollLeft = 0, this.setScrollLeft = function(e) {
            this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e, this._signal("changeScrollLeft", e))
        }, this.getScrollLeft = function() {
            return this.$scrollLeft
        }, this.getScreenWidth = function() {
            return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
        }, this.getLineWidgetMaxWidth = function() {
            if (null != this.lineWidgetsWidth)
                return this.lineWidgetsWidth;
            var e = 0;
            return this.lineWidgets.forEach(function(t) {
                t && t.screenWidth > e && (e = t.screenWidth)
            }), this.lineWidgetWidth = e
        }, this.$computeWidth = function(e) {
            if (this.$modified || e) {
                if (this.$modified = !1, this.$useWrapMode)
                    return this.screenWidth = this.$wrapLimit;
                for (var t = this.doc.getAllLines(), n = this.$rowLengthCache, i = 0, o = 0, r = this.$foldData[o], s = r ? r.start.row : 1 / 0, a = t.length, l = 0; a > l; l++) {
                    if (l > s) {
                        if (l = r.end.row + 1, l >= a)
                            break;
                        r = this.$foldData[o++], s = r ? r.start.row : 1 / 0
                    }
                    null == n[l] && (n[l] = this.$getStringScreenWidth(t[l])[0]), n[l] > i && (i = n[l])
                }
                this.screenWidth = i
            }
        }, this.getLine = function(e) {
            return this.doc.getLine(e)
        }, this.getLines = function(e, t) {
            return this.doc.getLines(e, t)
        }, this.getLength = function() {
            return this.doc.getLength()
        }, this.getTextRange = function(e) {
            return this.doc.getTextRange(e || this.selection.getRange())
        }, this.insert = function(e, t) {
            return this.doc.insert(e, t)
        }, this.remove = function(e) {
            return this.doc.remove(e)
        }, this.undoChanges = function(e, t) {
            if (e.length) {
                this.$fromUndo = !0;
                for (var n = null, i = e.length - 1; -1 != i; i--) {
                    var o = e[i];
                    "doc" == o.group ? (this.doc.revertDeltas(o.deltas), n = this.$getUndoSelection(o.deltas, !0, n)) : o.deltas.forEach(function(e) {
                        this.addFolds(e.folds)
                    }, this)
                }
                return this.$fromUndo = !1, n && this.$undoSelect && !t && this.selection.setSelectionRange(n), n
            }
        }, this.redoChanges = function(e, t) {
            if (e.length) {
                this.$fromUndo = !0;
                for (var n = null, i = 0; i < e.length; i++) {
                    var o = e[i];
                    "doc" == o.group && (this.doc.applyDeltas(o.deltas), n = this.$getUndoSelection(o.deltas, !1, n))
                }
                return this.$fromUndo = !1, n && this.$undoSelect && !t && this.selection.setSelectionRange(n), n
            }
        }, this.setUndoSelect = function(e) {
            this.$undoSelect = e
        }, this.$getUndoSelection = function(e, t, n) {
            function i(e) {
                var n = "insertText" === e.action || "insertLines" === e.action;
                return t ? !n : n
            }
            var o, r, s = e[0], a = !1;
            i(s) ? (o = l.fromPoints(s.range.start, s.range.end), a = !0) : (o = l.fromPoints(s.range.start, s.range.start), a = !1);
            for (var c = 1; c < e.length; c++)
                s = e[c], i(s) ? (r = s.range.start, -1 == o.compare(r.row, r.column) && o.setStart(s.range.start), r = s.range.end, 1 == o.compare(r.row, r.column) && o.setEnd(s.range.end), a = !0) : (r = s.range.start, -1 == o.compare(r.row, r.column) && (o = l.fromPoints(s.range.start, s.range.start)), a = !1);
            if (null != n) {
                0 === l.comparePoints(n.start, o.start) && (n.start.column += o.end.column - o.start.column, n.end.column += o.end.column - o.start.column);
                var h = n.compareRange(o);
                1 == h ? o.setStart(n.start) : -1 == h && o.setEnd(n.end)
            }
            return o
        }, this.replace = function(e, t) {
            return this.doc.replace(e, t)
        }, this.moveText = function(e, t, n) {
            var i = this.getTextRange(e), o = this.getFoldsInRange(e), r = l.fromPoints(t, t);
            if (!n) {
                this.remove(e);
                var s = e.start.row - e.end.row, a = s ? -e.end.column : e.start.column - e.end.column;
                a && (r.start.row == e.end.row && r.start.column > e.end.column && (r.start.column += a), r.end.row == e.end.row && r.end.column > e.end.column && (r.end.column += a)), s && r.start.row >= e.end.row && (r.start.row += s, r.end.row += s)
            }
            if (r.end = this.insert(r.start, i), o.length) {
                var c = e.start, h = r.start, s = h.row - c.row, a = h.column - c.column;
                this.addFolds(o.map(function(e) {
                    return e = e.clone(), e.start.row == c.row && (e.start.column += a), e.end.row == c.row && (e.end.column += a), e.start.row += s, e.end.row += s, e
                }))
            }
            return r
        }, this.indentRows = function(e, t, n) {
            n = n.replace(/\t/g, this.getTabString());
            for (var i = e; t >= i; i++)
                this.insert({row: i,column: 0}, n)
        }, this.outdentRows = function(e) {
            for (var t = e.collapseRows(), n = new l(0, 0, 0, 0), i = this.getTabSize(), o = t.start.row; o <= t.end.row; ++o) {
                var r = this.getLine(o);
                n.start.row = o, n.end.row = o;
                for (var s = 0; i > s && " " == r.charAt(s); ++s)
                    ;
                i > s && "	" == r.charAt(s) ? (n.start.column = s, n.end.column = s + 1) : (n.start.column = 0, n.end.column = s), this.remove(n)
            }
        }, this.$moveLines = function(e, t, n) {
            if (e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t), 0 > n) {
                var i = this.getRowFoldStart(e + n);
                if (0 > i)
                    return 0;
                var o = i - e
            } else if (n > 0) {
                var i = this.getRowFoldEnd(t + n);
                if (i > this.doc.getLength() - 1)
                    return 0;
                var o = i - t
            } else {
                e = this.$clipRowToDocument(e), t = this.$clipRowToDocument(t);
                var o = t - e + 1
            }
            var r = new l(e, 0, t, Number.MAX_VALUE), s = this.getFoldsInRange(r).map(function(e) {
                return e = e.clone(), e.start.row += o, e.end.row += o, e
            }), a = 0 == n ? this.doc.getLines(e, t) : this.doc.removeLines(e, t);
            return this.doc.insertLines(e + o, a), s.length && this.addFolds(s), o
        }, this.moveLinesUp = function(e, t) {
            return this.$moveLines(e, t, -1)
        }, this.moveLinesDown = function(e, t) {
            return this.$moveLines(e, t, 1)
        }, this.duplicateLines = function(e, t) {
            return this.$moveLines(e, t, 0)
        }, this.$clipRowToDocument = function(e) {
            return Math.max(0, Math.min(e, this.doc.getLength() - 1))
        }, this.$clipColumnToRow = function(e, t) {
            return 0 > t ? 0 : Math.min(this.doc.getLine(e).length, t)
        }, this.$clipPositionToDocument = function(e, t) {
            if (t = Math.max(0, t), 0 > e)
                e = 0, t = 0;
            else {
                var n = this.doc.getLength();
                e >= n ? (e = n - 1, t = this.doc.getLine(n - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
            }
            return {row: e,column: t}
        }, this.$clipRangeToDocument = function(e) {
            e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
            var t = this.doc.getLength() - 1;
            return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
        }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {min: null,max: null}, this.setUseWrapMode = function(e) {
            if (e != this.$useWrapMode) {
                if (this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0), e) {
                    var t = this.getLength();
                    this.$wrapData = Array(t), this.$updateWrapData(0, t - 1)
                }
                this._signal("changeWrapMode")
            }
        }, this.getUseWrapMode = function() {
            return this.$useWrapMode
        }, this.setWrapLimitRange = function(e, t) {
            (this.$wrapLimitRange.min !== e || this.$wrapLimitRange.max !== t) && (this.$wrapLimitRange = {min: e,max: t}, this.$modified = !0, this.$useWrapMode && this._signal("changeWrapMode"))
        }, this.adjustWrapLimit = function(e, t) {
            var n = this.$wrapLimitRange;
            n.max < 0 && (n = {min: t,max: t});
            var i = this.$constrainWrapLimit(e, n.min, n.max);
            return i != this.$wrapLimit && i > 1 ? (this.$wrapLimit = i, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1
        }, this.$constrainWrapLimit = function(e, t, n) {
            return t && (e = Math.max(t, e)), n && (e = Math.min(n, e)), e
        }, this.getWrapLimit = function() {
            return this.$wrapLimit
        }, this.setWrapLimit = function(e) {
            this.setWrapLimitRange(e, e)
        }, this.getWrapLimitRange = function() {
            return {min: this.$wrapLimitRange.min,max: this.$wrapLimitRange.max}
        }, this.$updateInternalDataOnChange = function(e) {
            var t, n = this.$useWrapMode, i = e.data.action, o = e.data.range.start.row, r = e.data.range.end.row, s = e.data.range.start, a = e.data.range.end, l = null;
            if (-1 != i.indexOf("Lines") ? (r = "insertLines" == i ? o + e.data.lines.length : o, t = e.data.lines ? e.data.lines.length : r - o) : t = r - o, this.$updating = !0, 0 != t)
                if (-1 != i.indexOf("remove")) {
                    this[n ? "$wrapData" : "$rowLengthCache"].splice(o, t);
                    var c = this.$foldData;
                    l = this.getFoldsInRange(e.data.range), this.removeFolds(l);
                    var h = this.getFoldLine(a.row), u = 0;
                    if (h) {
                        h.addRemoveChars(a.row, a.column, s.column - a.column), h.shiftRow(-t);
                        var d = this.getFoldLine(o);
                        d && d !== h && (d.merge(h), h = d), u = c.indexOf(h) + 1
                    }
                    for (u; u < c.length; u++) {
                        var h = c[u];
                        h.start.row >= a.row && h.shiftRow(-t)
                    }
                    r = o
                } else {
                    var g = Array(t);
                    g.unshift(o, 0);
                    var f = n ? this.$wrapData : this.$rowLengthCache;
                    f.splice.apply(f, g);
                    var c = this.$foldData, h = this.getFoldLine(o), u = 0;
                    if (h) {
                        var m = h.range.compareInside(s.row, s.column);
                        0 == m ? (h = h.split(s.row, s.column), h && (h.shiftRow(t), h.addRemoveChars(r, 0, a.column - s.column))) : -1 == m && (h.addRemoveChars(o, 0, a.column - s.column), h.shiftRow(t)), u = c.indexOf(h) + 1
                    }
                    for (u; u < c.length; u++) {
                        var h = c[u];
                        h.start.row >= o && h.shiftRow(t)
                    }
                }
            else {
                t = Math.abs(e.data.range.start.column - e.data.range.end.column), -1 != i.indexOf("remove") && (l = this.getFoldsInRange(e.data.range), this.removeFolds(l), t = -t);
                var h = this.getFoldLine(o);
                h && h.addRemoveChars(o, s.column, t)
            }
            return n && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, n ? this.$updateWrapData(o, r) : this.$updateRowLengthCache(o, r), l
        }, this.$updateRowLengthCache = function(e, t) {
            this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
        }, this.$updateWrapData = function(e, t) {
            var n, i, o = this.doc.getAllLines(), r = this.getTabSize(), s = this.$wrapData, a = this.$wrapLimit, l = e;
            for (t = Math.min(t, o.length - 1); t >= l; )
                i = this.getFoldLine(l, i), i ? (n = [], i.walk(function(e, t, i, r) {
                    var s;
                    if (null != e) {
                        s = this.$getDisplayTokens(e, n.length), s[0] = c;
                        for (var a = 1; a < s.length; a++)
                            s[a] = d
                    } else
                        s = this.$getDisplayTokens(o[t].substring(r, i), n.length);
                    n = n.concat(s)
                }.bind(this), i.end.row, o[i.end.row].length + 1), s[i.start.row] = this.$computeWrapSplits(n, a, r), l = i.end.row + 1) : (n = this.$getDisplayTokens(o[l]), s[l] = this.$computeWrapSplits(n, a, r), l++)
        };
        var t = 1, s = 2, c = 3, d = 4, g = 9, f = 10, m = 11, p = 12;
        this.$computeWrapSplits = function(e, t) {
            function n(t) {
                var n = e.slice(r, t), o = n.length;
                n.join("").replace(/12/g, function() {
                    o -= 1
                }).replace(/2/g, function() {
                    o -= 1
                }), a += o, i.push(a), r = t
            }
            if (0 == e.length)
                return [];
            for (var i = [], o = e.length, r = 0, a = 0, l = this.$wrapAsCode; o - r > t; ) {
                var h = r + t;
                if (e[h - 1] >= f && e[h] >= f)
                    n(h);
                else if (e[h] != c && e[h] != d) {
                    for (var u = Math.max(h - (l ? 10 : t - (t >> 2)), r - 1); h > u && e[h] < c; )
                        h--;
                    if (l) {
                        for (; h > u && e[h] < c; )
                            h--;
                        for (; h > u && e[h] == g; )
                            h--
                    } else
                        for (; h > u && e[h] < f; )
                            h--;
                    h > u ? n(++h) : (h = r + t, e[h] == s && h--, n(h))
                } else {
                    for (h; h != r - 1 && e[h] != c; h--)
                        ;
                    if (h > r) {
                        n(h);
                        continue
                    }
                    for (h = r + t; h < e.length && e[h] == d; h++)
                        ;
                    if (h == e.length)
                        break;
                    n(h)
                }
            }
            return i
        }, this.$getDisplayTokens = function(n, i) {
            var o, r = [];
            i = i || 0;
            for (var a = 0; a < n.length; a++) {
                var l = n.charCodeAt(a);
                if (9 == l) {
                    o = this.getScreenTabSize(r.length + i), r.push(m);
                    for (var c = 1; o > c; c++)
                        r.push(p)
                } else
                    32 == l ? r.push(f) : l > 39 && 48 > l || l > 57 && 64 > l ? r.push(g) : l >= 4352 && e(l) ? r.push(t, s) : r.push(t)
            }
            return r
        }, this.$getStringScreenWidth = function(t, n, i) {
            if (0 == n)
                return [0, 0];
            null == n && (n = 1 / 0), i = i || 0;
            var o, r;
            for (r = 0; r < t.length && (o = t.charCodeAt(r), i += 9 == o ? this.getScreenTabSize(i) : o >= 4352 && e(o) ? 2 : 1, !(i > n)); r++)
                ;
            return [i, r]
        }, this.lineWidgets = null, this.getRowLength = function(e) {
            if (this.lineWidgets)
                var t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0;
            else
                t = 0;
            return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
        }, this.getRowLineCount = function(e) {
            return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
        }, this.getScreenLastRowColumn = function(e) {
            var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
            return this.documentToScreenColumn(t.row, t.column)
        }, this.getDocumentLastRowColumn = function(e, t) {
            var n = this.documentToScreenRow(e, t);
            return this.getScreenLastRowColumn(n)
        }, this.getDocumentLastRowColumnPosition = function(e, t) {
            var n = this.documentToScreenRow(e, t);
            return this.screenToDocumentPosition(n, Number.MAX_VALUE / 10)
        }, this.getRowSplitData = function(e) {
            return this.$useWrapMode ? this.$wrapData[e] : void 0
        }, this.getScreenTabSize = function(e) {
            return this.$tabSize - e % this.$tabSize
        }, this.screenToDocumentRow = function(e, t) {
            return this.screenToDocumentPosition(e, t).row
        }, this.screenToDocumentColumn = function(e, t) {
            return this.screenToDocumentPosition(e, t).column
        }, this.screenToDocumentPosition = function(e, t) {
            if (0 > e)
                return {row: 0,column: 0};
            var n, i, o = 0, r = 0, s = 0, a = 0, l = this.$screenRowCache, c = this.$getRowCacheIndex(l, e), h = l.length;
            if (h && c >= 0)
                var s = l[c], o = this.$docRowCache[c], u = e > l[h - 1];
            else
                var u = !h;
            for (var d = this.getLength() - 1, g = this.getNextFoldLine(o), f = g ? g.start.row : 1 / 0; e >= s && (a = this.getRowLength(o), !(s + a > e || o >= d)); )
                s += a, o++, o > f && (o = g.end.row + 1, g = this.getNextFoldLine(o, g), f = g ? g.start.row : 1 / 0), u && (this.$docRowCache.push(o), this.$screenRowCache.push(s));
            if (g && g.start.row <= o)
                n = this.getFoldDisplayLine(g), o = g.start.row;
            else {
                if (e >= s + a || o > d)
                    return {row: d,column: this.getLine(d).length};
                n = this.getLine(o), g = null
            }
            if (this.$useWrapMode) {
                var m = this.$wrapData[o];
                if (m) {
                    var p = Math.floor(e - s);
                    i = m[p], p > 0 && m.length && (r = m[p - 1] || m[m.length - 1], n = n.substring(r))
                }
            }
            return r += this.$getStringScreenWidth(n, t)[1], this.$useWrapMode && r >= i && (r = i - 1), g ? g.idxToPosition(r) : {row: o,column: r}
        }, this.documentToScreenPosition = function(e, t) {
            if ("undefined" == typeof t)
                var n = this.$clipPositionToDocument(e.row, e.column);
            else
                n = this.$clipPositionToDocument(e, t);
            e = n.row, t = n.column;
            var i = 0, o = null, r = null;
            r = this.getFoldAt(e, t, 1), r && (e = r.start.row, t = r.start.column);
            var s, a = 0, l = this.$docRowCache, c = this.$getRowCacheIndex(l, e), h = l.length;
            if (h && c >= 0)
                var a = l[c], i = this.$screenRowCache[c], u = e > l[h - 1];
            else
                var u = !h;
            for (var d = this.getNextFoldLine(a), g = d ? d.start.row : 1 / 0; e > a; ) {
                if (a >= g) {
                    if (s = d.end.row + 1, s > e)
                        break;
                    d = this.getNextFoldLine(s, d), g = d ? d.start.row : 1 / 0
                } else
                    s = a + 1;
                i += this.getRowLength(a), a = s, u && (this.$docRowCache.push(a), this.$screenRowCache.push(i))
            }
            var f = "";
            if (d && a >= g ? (f = this.getFoldDisplayLine(d, e, t), o = d.start.row) : (f = this.getLine(e).substring(0, t), o = e), this.$useWrapMode) {
                var m = this.$wrapData[o];
                if (m) {
                    for (var p = 0; f.length >= m[p]; )
                        i++, p++;
                    f = f.substring(m[p - 1] || 0, f.length)
                }
            }
            return {row: i,column: this.$getStringScreenWidth(f)[0]}
        }, this.documentToScreenColumn = function(e, t) {
            return this.documentToScreenPosition(e, t).column
        }, this.documentToScreenRow = function(e, t) {
            return this.documentToScreenPosition(e, t).row
        }, this.getScreenLength = function() {
            var e = 0, t = null;
            if (this.$useWrapMode)
                for (var n = this.$wrapData.length, i = 0, o = 0, t = this.$foldData[o++], r = t ? t.start.row : 1 / 0; n > i; ) {
                    var s = this.$wrapData[i];
                    e += s ? s.length + 1 : 1, i++, i > r && (i = t.end.row + 1, t = this.$foldData[o++], r = t ? t.start.row : 1 / 0)
                }
            else {
                e = this.getLength();
                for (var a = this.$foldData, o = 0; o < a.length; o++)
                    t = a[o], e -= t.end.row - t.start.row
            }
            return this.lineWidgets && (e += this.$getWidgetScreenLength()), e
        }, this.$setFontMetrics = function() {
        }, this.destroy = function() {
            this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker()
        }
    }).call(d.prototype), e("./edit_session/folding").Folding.call(d.prototype), e("./edit_session/bracket_match").BracketMatch.call(d.prototype), o.defineOptions(d.prototype, "session", {wrap: {set: function(e) {
                if (e && "off" != e ? "free" == e ? e = !0 : "printMargin" == e ? e = -1 : "string" == typeof e && (e = parseInt(e, 10) || !1) : e = !1, this.$wrap != e)
                    if (this.$wrap = e, e) {
                        var t = "number" == typeof e ? e : null;
                        this.setWrapLimitRange(t, t), this.setUseWrapMode(!0)
                    } else
                        this.setUseWrapMode(!1)
            },get: function() {
                return this.getUseWrapMode() ? -1 == this.$wrap ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
            },handlesSet: !0},wrapMethod: {set: function(e) {
                e = "auto" == e ? "text" != this.$mode.type : "text" != e, e != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$modified = !0, this.$resetRowCache(0), this.$updateWrapData(0, this.getLength() - 1)))
            },initialValue: "auto"},firstLineNumber: {set: function() {
                this._signal("changeBreakpoint")
            },initialValue: 1},useWorker: {set: function(e) {
                this.$useWorker = e, this.$stopWorker(), e && this.$startWorker()
            },initialValue: !0},useSoftTabs: {initialValue: !0},tabSize: {set: function(e) {
                isNaN(e) || this.$tabSize === e || (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize"))
            },initialValue: 4,handlesSet: !0},overwrite: {set: function() {
                this._signal("changeOverwrite")
            },initialValue: !1},newLineMode: {set: function(e) {
                this.doc.setNewLineMode(e)
            },get: function() {
                return this.doc.getNewLineMode()
            },handlesSet: !0},mode: {set: function(e) {
                this.setMode(e)
            },get: function() {
                return this.$modeId
            }}}), t.EditSession = d
}), define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(e, t) {
    "use strict";
    var n = e("./lib/lang"), i = e("./lib/oop"), o = e("./range").Range, r = function() {
        this.$options = {}
    };
    (function() {
        this.set = function(e) {
            return i.mixin(this.$options, e), this
        }, this.getOptions = function() {
            return n.copyObject(this.$options)
        }, this.setOptions = function(e) {
            this.$options = e
        }, this.find = function(e) {
            var t = this.$options, n = this.$matchIterator(e, t);
            if (!n)
                return !1;
            var i = null;
            return n.forEach(function(e, n, r) {
                if (e.start)
                    i = e;
                else {
                    var s = e.offset + (r || 0);
                    if (i = new o(n, s, n, s + e.length), !e.length && t.start && t.start.start && 0 != t.skipCurrent && i.isEqual(t.start))
                        return i = null, !1
                }
                return !0
            }), i
        }, this.findAll = function(e) {
            var t = this.$options;
            if (!t.needle)
                return [];
            this.$assembleRegExp(t);
            var i = t.range, r = i ? e.getLines(i.start.row, i.end.row) : e.doc.getAllLines(), s = [], a = t.re;
            if (t.$isMultiLine) {
                var l, c = a.length, h = r.length - c;
                e: for (var u = a.offset || 0; h >= u; u++) {
                    for (var d = 0; c > d; d++)
                        if (-1 == r[u + d].search(a[d]))
                            continue e;
                    var g = r[u], f = r[u + c - 1], m = g.length - g.match(a[0])[0].length, p = f.match(a[c - 1])[0].length;
                    l && l.end.row === u && l.end.column > m || (s.push(l = new o(u, m, u + c - 1, p)), c > 2 && (u = u + c - 2))
                }
            } else
                for (var v = 0; v < r.length; v++)
                    for (var A = n.getMatchOffsets(r[v], a), d = 0; d < A.length; d++) {
                        var C = A[d];
                        s.push(new o(v, C.offset, v, C.offset + C.length))
                    }
            if (i) {
                for (var w = i.start.column, F = i.start.column, v = 0, d = s.length - 1; d > v && s[v].start.column < w && s[v].start.row == i.start.row; )
                    v++;
                for (; d > v && s[d].end.column > F && s[d].end.row == i.end.row; )
                    d--;
                for (s = s.slice(v, d + 1), v = 0, d = s.length; d > v; v++)
                    s[v].start.row += i.start.row, s[v].end.row += i.start.row
            }
            return s
        }, this.replace = function(e, t) {
            var n = this.$options, i = this.$assembleRegExp(n);
            if (n.$isMultiLine)
                return t;
            if (i) {
                var o = i.exec(e);
                if (!o || o[0].length != e.length)
                    return null;
                if (t = e.replace(i, t), n.preserveCase) {
                    t = t.split("");
                    for (var r = Math.min(e.length, e.length); r--; ) {
                        var s = e[r];
                        t[r] = s && s.toLowerCase() != s ? t[r].toUpperCase() : t[r].toLowerCase()
                    }
                    t = t.join("")
                }
                return t
            }
        }, this.$matchIterator = function(e, t) {
            var i = this.$assembleRegExp(t);
            if (!i)
                return !1;
            var r;
            if (t.$isMultiLine)
                var s = i.length, a = function(t, n, a) {
                    var l = t.search(i[0]);
                    if (-1 != l) {
                        for (var c = 1; s > c; c++)
                            if (t = e.getLine(n + c), -1 == t.search(i[c]))
                                return;
                        var h = t.match(i[s - 1])[0].length, u = new o(n, l, n + s - 1, h);
                        return 1 == i.offset ? (u.start.row--, u.start.column = Number.MAX_VALUE) : a && (u.start.column += a), r(u) ? !0 : void 0
                    }
                };
            else if (t.backwards)
                var a = function(e, t, o) {
                    for (var s = n.getMatchOffsets(e, i), a = s.length - 1; a >= 0; a--)
                        if (r(s[a], t, o))
                            return !0
                };
            else
                var a = function(e, t, o) {
                    for (var s = n.getMatchOffsets(e, i), a = 0; a < s.length; a++)
                        if (r(s[a], t, o))
                            return !0
                };
            var l = this.$lineIterator(e, t);
            return {forEach: function(e) {
                    r = e, l.forEach(a)
                }}
        }, this.$assembleRegExp = function(e, t) {
            if (e.needle instanceof RegExp)
                return e.re = e.needle;
            var i = e.needle;
            if (!e.needle)
                return e.re = !1;
            e.regExp || (i = n.escapeRegExp(i)), e.wholeWord && (i = "\\b" + i + "\\b");
            var o = e.caseSensitive ? "gm" : "gmi";
            if (e.$isMultiLine = !t && /[\n\r]/.test(i), e.$isMultiLine)
                return e.re = this.$assembleMultilineRegExp(i, o);
            try {
                var r = new RegExp(i, o)
            } catch (s) {
                r = !1
            }
            return e.re = r
        }, this.$assembleMultilineRegExp = function(e, t) {
            for (var n = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), i = [], o = 0; o < n.length; o++)
                try {
                    i.push(new RegExp(n[o], t))
                } catch (r) {
                    return !1
                }
            return "" == n[0] ? (i.shift(), i.offset = 1) : i.offset = 0, i
        }, this.$lineIterator = function(e, t) {
            var n = 1 == t.backwards, i = 0 != t.skipCurrent, o = t.range, r = t.start;
            r || (r = o ? o[n ? "end" : "start"] : e.selection.getRange()), r.start && (r = r[i != n ? "end" : "start"]);
            var s = o ? o.start.row : 0, a = o ? o.end.row : e.getLength() - 1, l = n ? function(n) {
                var i = r.row, o = e.getLine(i).substring(0, r.column);
                if (!n(o, i)) {
                    for (i--; i >= s; i--)
                        if (n(e.getLine(i), i))
                            return;
                    if (0 != t.wrap)
                        for (i = a, s = r.row; i >= s; i--)
                            if (n(e.getLine(i), i))
                                return
                }
            } : function(n) {
                var i = r.row, o = e.getLine(i).substr(r.column);
                if (!n(o, i, r.column)) {
                    for (i += 1; a >= i; i++)
                        if (n(e.getLine(i), i))
                            return;
                    if (0 != t.wrap)
                        for (i = s, a = r.row; a >= i; i++)
                            if (n(e.getLine(i), i))
                                return
                }
            };
            return {forEach: l}
        }
    }).call(r.prototype), t.Search = r
}), define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(e, t) {
    "use strict";
    function n(e, t) {
        this.platform = t || (r.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0
    }
    function i(e, t) {
        n.call(this, e, t), this.$singleCommand = !1
    }
    var o = e("../lib/keys"), r = e("../lib/useragent"), s = o.KEY_MODS;
    i.prototype = n.prototype, function() {
        this.addCommand = function(e) {
            this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
        }, this.removeCommand = function(e, t) {
            var n = e && ("string" == typeof e ? e : e.name);
            e = this.commands[n], t || delete this.commands[n];
            var i = this.commandKeyBinding;
            for (var o in i) {
                var r = i[o];
                if (r == e)
                    delete i[o];
                else if (Array.isArray(r)) {
                    var s = r.indexOf(e);
                    -1 != s && (r.splice(s, 1), 1 == r.length && (i[o] = r[0]))
                }
            }
        }, this.bindKey = function(e, t, n) {
            return "object" == typeof e && (e = e[this.platform]), e ? "function" == typeof t ? this.addCommand({exec: t,bindKey: e,name: t.name || e}) : void e.split("|").forEach(function(e) {
                var i = "";
                if (-1 != e.indexOf(" ")) {
                    var o = e.split(/\s+/);
                    e = o.pop(), o.forEach(function(e) {
                        var t = this.parseKeys(e), n = s[t.hashId] + t.key;
                        i += (i ? " " : "") + n, this._addCommandToBinding(i, "chainKeys")
                    }, this), i += " "
                }
                var r = this.parseKeys(e), a = s[r.hashId] + r.key;
                this._addCommandToBinding(i + a, t, n)
            }, this) : void 0
        }, this._addCommandToBinding = function(e, t, n) {
            var i, o = this.commandKeyBinding;
            t ? !o[e] || this.$singleCommand ? o[e] = t : (Array.isArray(o[e]) ? -1 != (i = o[e].indexOf(t)) && o[e].splice(i, 1) : o[e] = [o[e]], n || t.isDefault ? o[e].unshift(t) : o[e].push(t)) : delete o[e]
        }, this.addCommands = function(e) {
            e && Object.keys(e).forEach(function(t) {
                var n = e[t];
                if (n) {
                    if ("string" == typeof n)
                        return this.bindKey(n, t);
                    "function" == typeof n && (n = {exec: n}), "object" == typeof n && (n.name || (n.name = t), this.addCommand(n))
                }
            }, this)
        }, this.removeCommands = function(e) {
            Object.keys(e).forEach(function(t) {
                this.removeCommand(e[t])
            }, this)
        }, this.bindKeys = function(e) {
            Object.keys(e).forEach(function(t) {
                this.bindKey(t, e[t])
            }, this)
        }, this._buildKeyHash = function(e) {
            this.bindKey(e.bindKey, e)
        }, this.parseKeys = function(e) {
            var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(e) {
                return e
            }), n = t.pop(), i = o[n];
            if (o.FUNCTION_KEYS[i])
                n = o.FUNCTION_KEYS[i].toLowerCase();
            else {
                if (!t.length)
                    return {key: n,hashId: -1};
                if (1 == t.length && "shift" == t[0])
                    return {key: n.toUpperCase(),hashId: -1}
            }
            for (var r = 0, s = t.length; s--; ) {
                var a = o.KEY_MODS[t[s]];
                if (null == a)
                    return "undefined" != typeof console && console.error("invalid modifier " + t[s] + " in " + e), !1;
                r |= a
            }
            return {key: n,hashId: r}
        }, this.findKeyCommand = function(e, t) {
            var n = s[e] + t;
            return this.commandKeyBinding[n]
        }, this.handleKeyboard = function(e, t, n, i) {
            var o = s[t] + n, r = this.commandKeyBinding[o];
            return e.$keyChain && (e.$keyChain += " " + o, r = this.commandKeyBinding[e.$keyChain] || r), !r || "chainKeys" != r && "chainKeys" != r[r.length - 1] ? (e.$keyChain && i > 0 && (e.$keyChain = ""), {command: r}) : (e.$keyChain = e.$keyChain || o, {command: "null"})
        }
    }.call(n.prototype), t.HashHandler = n, t.MultiHashHandler = i
}), define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("../keyboard/hash_handler").MultiHashHandler, o = e("../lib/event_emitter").EventEmitter, r = function(e, t) {
        i.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", function(e) {
            return e.command.exec(e.editor, e.args || {})
        })
    };
    n.inherits(r, i), function() {
        n.implement(this, o), this.exec = function(e, t, n) {
            if (Array.isArray(e)) {
                for (var i = e.length; i--; )
                    if (this.exec(e[i], t, n))
                        return !0;
                return !1
            }
            if ("string" == typeof e && (e = this.commands[e]), !e)
                return !1;
            if (t && t.$readOnly && !e.readOnly)
                return !1;
            var o = {editor: t,command: e,args: n};
            return o.returnValue = this._emit("exec", o), this._signal("afterExec", o), o.returnValue === !1 ? !1 : !0
        }, this.toggleRecording = function(e) {
            return this.$inReplay ? void 0 : (e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function(e) {
                this.macro.push([e.command, e.args])
            }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0))
        }, this.replay = function(e) {
            if (!this.$inReplay && this.macro) {
                if (this.recording)
                    return this.toggleRecording(e);
                try {
                    this.$inReplay = !0, this.macro.forEach(function(t) {
                        "string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
                    }, this)
                }finally {
                    this.$inReplay = !1
                }
            }
        }, this.trimMacro = function(e) {
            return e.map(function(e) {
                return "string" != typeof e[0] && (e[0] = e[0].name), e[1] || (e = e[0]), e
            })
        }
    }.call(r.prototype), t.CommandManager = r
}), define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(e, t) {
    "use strict";
    function n(e, t) {
        return {win: e,mac: t}
    }
    var i = e("../lib/lang"), o = e("../config"), r = e("../range").Range;
    t.commands = [{name: "showSettingsMenu",bindKey: n("Ctrl-,", "Command-,"),exec: function(e) {
                o.loadModule("ace/ext/settings_menu", function(t) {
                    t.init(e), e.showSettingsMenu()
                })
            },readOnly: !0}, {name: "goToNextError",bindKey: n("Alt-E", "Ctrl-E"),exec: function(e) {
                o.loadModule("ace/ext/error_marker", function(t) {
                    t.showErrorMarker(e, 1)
                })
            },scrollIntoView: "animate",readOnly: !0}, {name: "goToPreviousError",bindKey: n("Alt-Shift-E", "Ctrl-Shift-E"),exec: function(e) {
                o.loadModule("ace/ext/error_marker", function(t) {
                    t.showErrorMarker(e, -1)
                })
            },scrollIntoView: "animate",readOnly: !0}, {name: "selectall",bindKey: n("Ctrl-A", "Command-A"),exec: function(e) {
                e.selectAll()
            },readOnly: !0}, {name: "centerselection",bindKey: n(null, "Ctrl-L"),exec: function(e) {
                e.centerSelection()
            },readOnly: !0}, {name: "gotoline",bindKey: n("Ctrl-L", "Command-L"),exec: function(e) {
                var t = parseInt(prompt("Enter line number:"), 10);
                isNaN(t) || e.gotoLine(t)
            },readOnly: !0}, {name: "fold",bindKey: n("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),exec: function(e) {
                e.session.toggleFold(!1)
            },multiSelectAction: "forEach",scrollIntoView: "center",readOnly: !0}, {name: "unfold",bindKey: n("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),exec: function(e) {
                e.session.toggleFold(!0)
            },multiSelectAction: "forEach",scrollIntoView: "center",readOnly: !0}, {name: "toggleFoldWidget",bindKey: n("F2", "F2"),exec: function(e) {
                e.session.toggleFoldWidget()
            },multiSelectAction: "forEach",scrollIntoView: "center",readOnly: !0}, {name: "toggleParentFoldWidget",bindKey: n("Alt-F2", "Alt-F2"),exec: function(e) {
                e.session.toggleFoldWidget(!0)
            },multiSelectAction: "forEach",scrollIntoView: "center",readOnly: !0}, {name: "foldall",bindKey: n(null, "Ctrl-Command-Option-0"),exec: function(e) {
                e.session.foldAll()
            },scrollIntoView: "center",readOnly: !0}, {name: "foldOther",bindKey: n("Alt-0", "Command-Option-0"),exec: function(e) {
                e.session.foldAll(), e.session.unfold(e.selection.getAllRanges())
            },scrollIntoView: "center",readOnly: !0}, {name: "unfoldall",bindKey: n("Alt-Shift-0", "Command-Option-Shift-0"),exec: function(e) {
                e.session.unfold()
            },scrollIntoView: "center",readOnly: !0}, {name: "findnext",bindKey: n("Ctrl-K", "Command-G"),exec: function(e) {
                e.findNext()
            },multiSelectAction: "forEach",scrollIntoView: "center",readOnly: !0}, {name: "findprevious",bindKey: n("Ctrl-Shift-K", "Command-Shift-G"),exec: function(e) {
                e.findPrevious()
            },multiSelectAction: "forEach",scrollIntoView: "center",readOnly: !0}, {name: "selectOrFindNext",bindKey: n("Alt-K", "Ctrl-G"),exec: function(e) {
                e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
            },readOnly: !0}, {name: "selectOrFindPrevious",bindKey: n("Alt-Shift-K", "Ctrl-Shift-G"),exec: function(e) {
                e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
            },readOnly: !0}, {name: "find",bindKey: n("Ctrl-F", "Command-F"),exec: function(e) {
                o.loadModule("ace/ext/searchbox", function(t) {
                    t.Search(e)
                })
            },readOnly: !0}, {name: "overwrite",bindKey: "Insert",exec: function(e) {
                e.toggleOverwrite()
            },readOnly: !0}, {name: "selecttostart",bindKey: n("Ctrl-Shift-Home", "Command-Shift-Up"),exec: function(e) {
                e.getSelection().selectFileStart()
            },multiSelectAction: "forEach",readOnly: !0,scrollIntoView: "animate",aceCommandGroup: "fileJump"}, {name: "gotostart",bindKey: n("Ctrl-Home", "Command-Home|Command-Up"),exec: function(e) {
                e.navigateFileStart()
            },multiSelectAction: "forEach",readOnly: !0,scrollIntoView: "animate",aceCommandGroup: "fileJump"}, {name: "selectup",bindKey: n("Shift-Up", "Shift-Up"),exec: function(e) {
                e.getSelection().selectUp()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "golineup",bindKey: n("Up", "Up|Ctrl-P"),exec: function(e, t) {
                e.navigateUp(t.times)
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selecttoend",bindKey: n("Ctrl-Shift-End", "Command-Shift-Down"),exec: function(e) {
                e.getSelection().selectFileEnd()
            },multiSelectAction: "forEach",readOnly: !0,scrollIntoView: "animate",aceCommandGroup: "fileJump"}, {name: "gotoend",bindKey: n("Ctrl-End", "Command-End|Command-Down"),exec: function(e) {
                e.navigateFileEnd()
            },multiSelectAction: "forEach",readOnly: !0,scrollIntoView: "animate",aceCommandGroup: "fileJump"}, {name: "selectdown",bindKey: n("Shift-Down", "Shift-Down"),exec: function(e) {
                e.getSelection().selectDown()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "golinedown",bindKey: n("Down", "Down|Ctrl-N"),exec: function(e, t) {
                e.navigateDown(t.times)
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selectwordleft",bindKey: n("Ctrl-Shift-Left", "Option-Shift-Left"),exec: function(e) {
                e.getSelection().selectWordLeft()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "gotowordleft",bindKey: n("Ctrl-Left", "Option-Left"),exec: function(e) {
                e.navigateWordLeft()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selecttolinestart",bindKey: n("Alt-Shift-Left", "Command-Shift-Left"),exec: function(e) {
                e.getSelection().selectLineStart()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "gotolinestart",bindKey: n("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),exec: function(e) {
                e.navigateLineStart()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selectleft",bindKey: n("Shift-Left", "Shift-Left"),exec: function(e) {
                e.getSelection().selectLeft()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "gotoleft",bindKey: n("Left", "Left|Ctrl-B"),exec: function(e, t) {
                e.navigateLeft(t.times)
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selectwordright",bindKey: n("Ctrl-Shift-Right", "Option-Shift-Right"),exec: function(e) {
                e.getSelection().selectWordRight()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "gotowordright",bindKey: n("Ctrl-Right", "Option-Right"),exec: function(e) {
                e.navigateWordRight()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selecttolineend",bindKey: n("Alt-Shift-Right", "Command-Shift-Right"),exec: function(e) {
                e.getSelection().selectLineEnd()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "gotolineend",bindKey: n("Alt-Right|End", "Command-Right|End|Ctrl-E"),exec: function(e) {
                e.navigateLineEnd()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selectright",bindKey: n("Shift-Right", "Shift-Right"),exec: function(e) {
                e.getSelection().selectRight()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "gotoright",bindKey: n("Right", "Right|Ctrl-F"),exec: function(e, t) {
                e.navigateRight(t.times)
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selectpagedown",bindKey: "Shift-PageDown",exec: function(e) {
                e.selectPageDown()
            },readOnly: !0}, {name: "pagedown",bindKey: n(null, "Option-PageDown"),exec: function(e) {
                e.scrollPageDown()
            },readOnly: !0}, {name: "gotopagedown",bindKey: n("PageDown", "PageDown|Ctrl-V"),exec: function(e) {
                e.gotoPageDown()
            },readOnly: !0}, {name: "selectpageup",bindKey: "Shift-PageUp",exec: function(e) {
                e.selectPageUp()
            },readOnly: !0}, {name: "pageup",bindKey: n(null, "Option-PageUp"),exec: function(e) {
                e.scrollPageUp()
            },readOnly: !0}, {name: "gotopageup",bindKey: "PageUp",exec: function(e) {
                e.gotoPageUp()
            },readOnly: !0}, {name: "scrollup",bindKey: n("Ctrl-Up", null),exec: function(e) {
                e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
            },readOnly: !0}, {name: "scrolldown",bindKey: n("Ctrl-Down", null),exec: function(e) {
                e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
            },readOnly: !0}, {name: "selectlinestart",bindKey: "Shift-Home",exec: function(e) {
                e.getSelection().selectLineStart()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "selectlineend",bindKey: "Shift-End",exec: function(e) {
                e.getSelection().selectLineEnd()
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "togglerecording",bindKey: n("Ctrl-Alt-E", "Command-Option-E"),exec: function(e) {
                e.commands.toggleRecording(e)
            },readOnly: !0}, {name: "replaymacro",bindKey: n("Ctrl-Shift-E", "Command-Shift-E"),exec: function(e) {
                e.commands.replay(e)
            },readOnly: !0}, {name: "jumptomatching",bindKey: n("Ctrl-P", "Ctrl-P"),exec: function(e) {
                e.jumpToMatching()
            },multiSelectAction: "forEach",scrollIntoView: "animate",readOnly: !0}, {name: "selecttomatching",bindKey: n("Ctrl-Shift-P", "Ctrl-Shift-P"),exec: function(e) {
                e.jumpToMatching(!0)
            },multiSelectAction: "forEach",scrollIntoView: "animate",readOnly: !0}, {name: "expandToMatching",bindKey: n("Ctrl-Shift-M", "Ctrl-Shift-M"),exec: function(e) {
                e.jumpToMatching(!0, !0)
            },multiSelectAction: "forEach",scrollIntoView: "animate",readOnly: !0}, {name: "passKeysToBrowser",bindKey: n(null, null),exec: function() {
            },passEvent: !0,readOnly: !0}, {name: "cut",exec: function(e) {
                var t = e.getSelectionRange();
                e._emit("cut", t), e.selection.isEmpty() || (e.session.remove(t), e.clearSelection())
            },scrollIntoView: "cursor",multiSelectAction: "forEach"}, {name: "removeline",bindKey: n("Ctrl-D", "Command-D"),exec: function(e) {
                e.removeLines()
            },scrollIntoView: "cursor",multiSelectAction: "forEachLine"}, {name: "duplicateSelection",bindKey: n("Ctrl-Shift-D", "Command-Shift-D"),exec: function(e) {
                e.duplicateSelection()
            },scrollIntoView: "cursor",multiSelectAction: "forEach"}, {name: "sortlines",bindKey: n("Ctrl-Alt-S", "Command-Alt-S"),exec: function(e) {
                e.sortLines()
            },scrollIntoView: "selection",multiSelectAction: "forEachLine"}, {name: "togglecomment",bindKey: n("Ctrl-/", "Command-/"),exec: function(e) {
                e.toggleCommentLines()
            },multiSelectAction: "forEachLine",scrollIntoView: "selectionPart"}, {name: "toggleBlockComment",bindKey: n("Ctrl-Shift-/", "Command-Shift-/"),exec: function(e) {
                e.toggleBlockComment()
            },multiSelectAction: "forEach",scrollIntoView: "selectionPart"}, {name: "modifyNumberUp",bindKey: n("Ctrl-Shift-Up", "Alt-Shift-Up"),exec: function(e) {
                e.modifyNumber(1)
            },scrollIntoView: "cursor",multiSelectAction: "forEach"}, {name: "modifyNumberDown",bindKey: n("Ctrl-Shift-Down", "Alt-Shift-Down"),exec: function(e) {
                e.modifyNumber(-1)
            },scrollIntoView: "cursor",multiSelectAction: "forEach"}, {name: "replace",bindKey: n("Ctrl-H", "Command-Option-F"),exec: function(e) {
                o.loadModule("ace/ext/searchbox", function(t) {
                    t.Search(e, !0)
                })
            }}, {name: "undo",bindKey: n("Ctrl-Z", "Command-Z"),exec: function(e) {
                e.undo()
            }}, {name: "redo",bindKey: n("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),exec: function(e) {
                e.redo()
            }}, {name: "copylinesup",bindKey: n("Alt-Shift-Up", "Command-Option-Up"),exec: function(e) {
                e.copyLinesUp()
            },scrollIntoView: "cursor"}, {name: "movelinesup",bindKey: n("Alt-Up", "Option-Up"),exec: function(e) {
                e.moveLinesUp()
            },scrollIntoView: "cursor"}, {name: "copylinesdown",bindKey: n("Alt-Shift-Down", "Command-Option-Down"),exec: function(e) {
                e.copyLinesDown()
            },scrollIntoView: "cursor"}, {name: "movelinesdown",bindKey: n("Alt-Down", "Option-Down"),exec: function(e) {
                e.moveLinesDown()
            },scrollIntoView: "cursor"}, {name: "del",bindKey: n("Delete", "Delete|Ctrl-D|Shift-Delete"),exec: function(e) {
                e.remove("right")
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "backspace",bindKey: n("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec: function(e) {
                e.remove("left")
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "cut_or_delete",bindKey: n("Shift-Delete", null),exec: function(e) {
                return e.selection.isEmpty() ? void e.remove("left") : !1
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "removetolinestart",bindKey: n("Alt-Backspace", "Command-Backspace"),exec: function(e) {
                e.removeToLineStart()
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "removetolineend",bindKey: n("Alt-Delete", "Ctrl-K"),exec: function(e) {
                e.removeToLineEnd()
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "removewordleft",bindKey: n("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),exec: function(e) {
                e.removeWordLeft()
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "removewordright",bindKey: n("Ctrl-Delete", "Alt-Delete"),exec: function(e) {
                e.removeWordRight()
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "outdent",bindKey: n("Shift-Tab", "Shift-Tab"),exec: function(e) {
                e.blockOutdent()
            },multiSelectAction: "forEach",scrollIntoView: "selectionPart"}, {name: "indent",bindKey: n("Tab", "Tab"),exec: function(e) {
                e.indent()
            },multiSelectAction: "forEach",scrollIntoView: "selectionPart"}, {name: "blockoutdent",bindKey: n("Ctrl-[", "Ctrl-["),exec: function(e) {
                e.blockOutdent()
            },multiSelectAction: "forEachLine",scrollIntoView: "selectionPart"}, {name: "blockindent",bindKey: n("Ctrl-]", "Ctrl-]"),exec: function(e) {
                e.blockIndent()
            },multiSelectAction: "forEachLine",scrollIntoView: "selectionPart"}, {name: "insertstring",exec: function(e, t) {
                e.insert(t)
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "inserttext",exec: function(e, t) {
                e.insert(i.stringRepeat(t.text || "", t.times || 1))
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "splitline",bindKey: n(null, "Ctrl-O"),exec: function(e) {
                e.splitLine()
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "transposeletters",bindKey: n("Ctrl-T", "Ctrl-T"),exec: function(e) {
                e.transposeLetters()
            },multiSelectAction: function(e) {
                e.transposeSelections(1)
            },scrollIntoView: "cursor"}, {name: "touppercase",bindKey: n("Ctrl-U", "Ctrl-U"),exec: function(e) {
                e.toUpperCase()
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "tolowercase",bindKey: n("Ctrl-Shift-U", "Ctrl-Shift-U"),exec: function(e) {
                e.toLowerCase()
            },multiSelectAction: "forEach",scrollIntoView: "cursor"}, {name: "expandtoline",bindKey: n("Ctrl-Shift-L", "Command-Shift-L"),exec: function(e) {
                var t = e.selection.getRange();
                t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1)
            },multiSelectAction: "forEach",scrollIntoView: "cursor",readOnly: !0}, {name: "joinlines",bindKey: n(null, null),exec: function(e) {
                for (var t = e.selection.isBackwards(), n = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), o = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), s = e.session.doc.getLine(n.row).length, a = e.session.doc.getTextRange(e.selection.getRange()), l = a.replace(/\n\s*/, " ").length, c = e.session.doc.getLine(n.row), h = n.row + 1; h <= o.row + 1; h++) {
                    var u = i.stringTrimLeft(i.stringTrimRight(e.session.doc.getLine(h)));
                    0 !== u.length && (u = " " + u), c += u
                }
                o.row + 1 < e.session.doc.getLength() - 1 && (c += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new r(n.row, 0, o.row + 2, 0), c), l > 0 ? (e.selection.moveCursorTo(n.row, n.column), e.selection.selectTo(n.row, n.column + l)) : (s = e.session.doc.getLine(n.row).length > s ? s + 1 : s, e.selection.moveCursorTo(n.row, s))
            },multiSelectAction: "forEach",readOnly: !0}, {name: "invertSelection",bindKey: n(null, null),exec: function(e) {
                var t = e.session.doc.getLength() - 1, n = e.session.doc.getLine(t).length, i = e.selection.rangeList.ranges, o = [];
                i.length < 1 && (i = [e.selection.getRange()]);
                for (var s = 0; s < i.length; s++)
                    s == i.length - 1 && (i[s].end.row !== t || i[s].end.column !== n) && o.push(new r(i[s].end.row, i[s].end.column, t, n)), 0 === s ? (0 !== i[s].start.row || 0 !== i[s].start.column) && o.push(new r(0, 0, i[s].start.row, i[s].start.column)) : o.push(new r(i[s - 1].end.row, i[s - 1].end.column, i[s].start.row, i[s].start.column));
                e.exitMultiSelectMode(), e.clearSelection();
                for (var s = 0; s < o.length; s++)
                    e.selection.addRange(o[s], !1)
            },readOnly: !0,scrollIntoView: "none"}]
}), define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator"], function(e, t) {
    "use strict";
    e("./lib/fixoldbrowsers");
    var n = e("./lib/oop"), i = e("./lib/dom"), o = e("./lib/lang"), r = e("./lib/useragent"), s = e("./keyboard/textinput").TextInput, a = e("./mouse/mouse_handler").MouseHandler, l = e("./mouse/fold_handler").FoldHandler, c = e("./keyboard/keybinding").KeyBinding, h = e("./edit_session").EditSession, u = e("./search").Search, d = e("./range").Range, g = e("./lib/event_emitter").EventEmitter, f = e("./commands/command_manager").CommandManager, m = e("./commands/default_commands").commands, p = e("./config"), v = e("./token_iterator").TokenIterator, A = function(e, t) {
        var n = e.getContainerElement();
        this.container = n, this.renderer = e, this.commands = new f(r.isMac ? "mac" : "win", m), this.textInput = new s(e.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.keyBinding = new c(this), this.$mouseHandler = new a(this), new l(this), this.$blockScrolling = 0, this.$search = (new u).set({wrap: !0}), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = o.delayedCall(function() {
            this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
        }.bind(this)), this.on("change", function(e, t) {
            t._$emitInputEvent.schedule(31)
        }), this.setSession(t || new h("")), p.resetOptions(this), p._signal("editor", this)
    };
    (function() {
        n.implement(this, g), this.$initOperationListeners = function() {
            this.selections = [], this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = o.delayedCall(this.endOperation.bind(this)), this.on("change", function() {
                this.curOp || this.startOperation(), this.curOp.docChanged = !0
            }.bind(this), !0), this.on("changeSelection", function() {
                this.curOp || this.startOperation(), this.curOp.selectionChanged = !0
            }.bind(this), !0)
        }, this.curOp = null, this.prevOp = {}, this.startOperation = function(e) {
            if (this.curOp) {
                if (!e || this.curOp.command)
                    return;
                this.prevOp = this.curOp
            }
            e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = {command: e.command || {},args: e.args,scrollTop: this.renderer.scrollTop}, this.curOp.command.name && this.$blockScrolling++
        }, this.endOperation = function(e) {
            if (this.curOp) {
                if (e && e.returnValue === !1)
                    return this.curOp = null;
                this._signal("beforeEndOperation");
                var t = this.curOp.command;
                if (t.name && this.$blockScrolling && this.$blockScrolling--, t && t.scrollIntoView) {
                    switch (t.scrollIntoView) {
                        case "center":
                            this.renderer.scrollCursorIntoView(null, .5);
                            break;
                        case "animate":
                        case "cursor":
                            this.renderer.scrollCursorIntoView();
                            break;
                        case "selectionPart":
                            var n = this.selection.getRange(), i = this.renderer.layerConfig;
                            (n.start.row >= i.lastRow || n.end.row <= i.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
                    }
                    "animate" == t.scrollIntoView && this.renderer.animateScrolling(this.curOp.scrollTop)
                }
                this.prevOp = this.curOp, this.curOp = null
            }
        }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function(e) {
            if (this.$mergeUndoDeltas) {
                var t = this.prevOp, n = this.$mergeableCommands, i = t.command && e.command.name == t.command.name;
                if ("insertstring" == e.command.name) {
                    var o = e.args;
                    void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0), i = i && this.mergeNextCommand && (!/\s/.test(o) || /\s/.test(t.args)), this.mergeNextCommand = !0
                } else
                    i = i && -1 !== n.indexOf(e.command.name);
                "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (i = !1), i ? this.session.mergeUndoDeltas = !0 : -1 !== n.indexOf(e.command.name) && (this.sequenceStartTime = Date.now())
            }
        }, this.setKeyboardHandler = function(e, t) {
            if (e && "string" == typeof e) {
                this.$keybindingId = e;
                var n = this;
                p.loadModule(["keybinding", e], function(i) {
                    n.$keybindingId == e && n.keyBinding.setKeyboardHandler(i && i.handler), t && t()
                })
            } else
                this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e), t && t()
        }, this.getKeyboardHandler = function() {
            return this.keyBinding.getKeyboardHandler()
        }, this.setSession = function(e) {
            if (this.session != e) {
                var t = this.session;
                if (t) {
                    this.session.removeEventListener("change", this.$onDocumentChange), this.session.removeEventListener("changeMode", this.$onChangeMode), this.session.removeEventListener("tokenizerUpdate", this.$onTokenizerUpdate), this.session.removeEventListener("changeTabSize", this.$onChangeTabSize), this.session.removeEventListener("changeWrapLimit", this.$onChangeWrapLimit), this.session.removeEventListener("changeWrapMode", this.$onChangeWrapMode), this.session.removeEventListener("onChangeFold", this.$onChangeFold), this.session.removeEventListener("changeFrontMarker", this.$onChangeFrontMarker), this.session.removeEventListener("changeBackMarker", this.$onChangeBackMarker), this.session.removeEventListener("changeBreakpoint", this.$onChangeBreakpoint), this.session.removeEventListener("changeAnnotation", this.$onChangeAnnotation), this.session.removeEventListener("changeOverwrite", this.$onCursorChange), this.session.removeEventListener("changeScrollTop", this.$onScrollTopChange), this.session.removeEventListener("changeScrollLeft", this.$onScrollLeftChange);
                    var n = this.session.getSelection();
                    n.removeEventListener("changeCursor", this.$onCursorChange), n.removeEventListener("changeSelection", this.$onSelectionChange)
                }
                this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.addEventListener("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.addEventListener("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.addEventListener("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.addEventListener("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.addEventListener("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.addEventListener("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.addEventListener("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.addEventListener("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.addEventListener("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.addEventListener("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.addEventListener("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.addEventListener("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.addEventListener("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.addEventListener("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.addEventListener("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.addEventListener("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.$blockScrolling += 1, this.onCursorChange(), this.$blockScrolling -= 1, this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", {session: e,oldSession: t}), t && t._signal("changeEditor", {oldEditor: this}), e && e._signal("changeEditor", {editor: this})
            }
        }, this.getSession = function() {
            return this.session
        }, this.setValue = function(e, t) {
            return this.session.doc.setValue(e), t ? 1 == t ? this.navigateFileEnd() : -1 == t && this.navigateFileStart() : this.selectAll(), e
        }, this.getValue = function() {
            return this.session.getValue()
        }, this.getSelection = function() {
            return this.selection
        }, this.resize = function(e) {
            this.renderer.onResize(e)
        }, this.setTheme = function(e, t) {
            this.renderer.setTheme(e, t)
        }, this.getTheme = function() {
            return this.renderer.getTheme()
        }, this.setStyle = function(e) {
            this.renderer.setStyle(e)
        }, this.unsetStyle = function(e) {
            this.renderer.unsetStyle(e)
        }, this.getFontSize = function() {
            return this.getOption("fontSize") || i.computedStyle(this.container, "fontSize")
        }, this.setFontSize = function(e) {
            this.setOption("fontSize", e)
        }, this.$highlightBrackets = function() {
            if (this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null), !this.$highlightPending) {
                var e = this;
                this.$highlightPending = !0, setTimeout(function() {
                    e.$highlightPending = !1;
                    var t = e.session;
                    if (t && t.bgTokenizer) {
                        var n = t.findMatchingBracket(e.getCursorPosition());
                        if (n)
                            var i = new d(n.row, n.column, n.row, n.column + 1);
                        else if (t.$mode.getMatching)
                            var i = t.$mode.getMatching(e.session);
                        i && (t.$bracketHighlight = t.addMarker(i, "ace_bracket", "text"))
                    }
                }, 50)
            }
        }, this.$highlightTags = function() {
            if (!this.$highlightTagPending) {
                var e = this;
                this.$highlightTagPending = !0, setTimeout(function() {
                    e.$highlightTagPending = !1;
                    var t = e.session;
                    if (t && t.bgTokenizer) {
                        var n = e.getCursorPosition(), i = new v(e.session, n.row, n.column), o = i.getCurrentToken();
                        if (!o || !/\b(?:tag-open|tag-name)/.test(o.type))
                            return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
                        if (-1 == o.type.indexOf("tag-open") || (o = i.stepForward())) {
                            var r = o.value, s = 0, a = i.stepBackward();
                            if ("<" == a.value) {
                                do
                                    a = o, o = i.stepForward(), o && o.value === r && -1 !== o.type.indexOf("tag-name") && ("<" === a.value ? s++ : "</" === a.value && s--);
                                while (o && s >= 0)
                            } else {
                                do
                                    o = a, a = i.stepBackward(), o && o.value === r && -1 !== o.type.indexOf("tag-name") && ("<" === a.value ? s++ : "</" === a.value && s--);
                                while (a && 0 >= s);
                                i.stepForward()
                            }
                            if (!o)
                                return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
                            var l = i.getCurrentTokenRow(), c = i.getCurrentTokenColumn(), h = new d(l, c, l, c + o.value.length);
                            t.$tagHighlight && 0 !== h.compareRange(t.$backMarkers[t.$tagHighlight].range) && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = null), h && !t.$tagHighlight && (t.$tagHighlight = t.addMarker(h, "ace_bracket", "text"))
                        }
                    }
                }, 50)
            }
        }, this.focus = function() {
            var e = this;
            setTimeout(function() {
                e.textInput.focus()
            }), this.textInput.focus()
        }, this.isFocused = function() {
            return this.textInput.isFocused()
        }, this.blur = function() {
            this.textInput.blur()
        }, this.onFocus = function(e) {
            this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e))
        }, this.onBlur = function(e) {
            this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e))
        }, this.$cursorChange = function() {
            this.renderer.updateCursor()
        }, this.onDocumentChange = function(e) {
            var t, n = e.data, i = n.range;
            t = i.start.row == i.end.row && "insertLines" != n.action && "removeLines" != n.action ? i.end.row : 1 / 0, this.renderer.updateLines(i.start.row, t, this.session.$useWrapMode), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine()
        }, this.onTokenizerUpdate = function(e) {
            var t = e.data;
            this.renderer.updateLines(t.first, t.last)
        }, this.onScrollTopChange = function() {
            this.renderer.scrollToY(this.session.getScrollTop())
        }, this.onScrollLeftChange = function() {
            this.renderer.scrollToX(this.session.getScrollLeft())
        }, this.onCursorChange = function() {
            this.$cursorChange(), this.$blockScrolling || (p.warn("Automatically scrolling cursor into view after selection change", "this will be disabled in the next version", "set editor.$blockScrolling = Infinity to disable this message"), this.renderer.scrollCursorIntoView()), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection")
        }, this.$updateHighlightActiveLine = function() {
            var e, t = this.getSession();
            if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition()), !this.renderer.$maxLines || 1 !== this.session.getLength() || this.renderer.$minLines > 1 || (e = !1)), t.$highlightLineMarker && !e)
                t.removeMarker(t.$highlightLineMarker.id), t.$highlightLineMarker = null;
            else if (!t.$highlightLineMarker && e) {
                var n = new d(e.row, e.column, e.row, 1 / 0);
                n.id = t.addMarker(n, "ace_active-line", "screenLine"), t.$highlightLineMarker = n
            } else
                e && (t.$highlightLineMarker.start.row = e.row, t.$highlightLineMarker.end.row = e.row, t.$highlightLineMarker.start.column = e.column, t._signal("changeBackMarker"))
        }, this.onSelectionChange = function() {
            var e = this.session;
            if (e.$selectionMarker && e.removeMarker(e.$selectionMarker), e.$selectionMarker = null, this.selection.isEmpty())
                this.$updateHighlightActiveLine();
            else {
                var t = this.selection.getRange(), n = this.getSelectionStyle();
                e.$selectionMarker = e.addMarker(t, "ace_selection", n)
            }
            var i = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
            this.session.highlight(i), this._signal("changeSelection")
        }, this.$getSelectionHighLightRegexp = function() {
            var e = this.session, t = this.getSelectionRange();
            if (!t.isEmpty() && !t.isMultiLine()) {
                var n = t.start.column - 1, i = t.end.column + 1, o = e.getLine(t.start.row), r = o.length, s = o.substring(Math.max(n, 0), Math.min(i, r));
                if (!(n >= 0 && /^[\w\d]/.test(s) || r >= i && /[\w\d]$/.test(s)) && (s = o.substring(t.start.column, t.end.column), /^[\w\d]+$/.test(s))) {
                    var a = this.$search.$assembleRegExp({wholeWord: !0,caseSensitive: !0,needle: s});
                    return a
                }
            }
        }, this.onChangeFrontMarker = function() {
            this.renderer.updateFrontMarkers()
        }, this.onChangeBackMarker = function() {
            this.renderer.updateBackMarkers()
        }, this.onChangeBreakpoint = function() {
            this.renderer.updateBreakpoints()
        }, this.onChangeAnnotation = function() {
            this.renderer.setAnnotations(this.session.getAnnotations())
        }, this.onChangeMode = function(e) {
            this.renderer.updateText(), this._emit("changeMode", e)
        }, this.onChangeWrapLimit = function() {
            this.renderer.updateFull()
        }, this.onChangeWrapMode = function() {
            this.renderer.onResize(!0)
        }, this.onChangeFold = function() {
            this.$updateHighlightActiveLine(), this.renderer.updateFull()
        }, this.getSelectedText = function() {
            return this.session.getTextRange(this.getSelectionRange())
        }, this.getCopyText = function() {
            var e = this.getSelectedText();
            return this._signal("copy", e), e
        }, this.onCopy = function() {
            this.commands.exec("copy", this)
        }, this.onCut = function() {
            this.commands.exec("cut", this)
        }, this.onPaste = function(e) {
            if (!this.$readOnly) {
                var t = {text: e};
                if (this._signal("paste", t), e = t.text, !this.inMultiSelectMode || this.inVirtualSelectionMode)
                    this.insert(e);
                else {
                    var n = e.split(/\r\n|\r|\n/), i = this.selection.rangeList.ranges;
                    if (n.length > i.length || n.length < 2 || !n[1])
                        return this.commands.exec("insertstring", this, e);
                    for (var o = i.length; o--; ) {
                        var r = i[o];
                        r.isEmpty() || this.session.remove(r), this.session.insert(r.start, n[o])
                    }
                }
                this.renderer.scrollCursorIntoView()
            }
        }, this.execCommand = function(e, t) {
            return this.commands.exec(e, this, t)
        }, this.insert = function(e, t) {
            var n = this.session, i = n.getMode(), o = this.getCursorPosition();
            if (this.getBehavioursEnabled() && !t) {
                var r = i.transformAction(n.getState(o.row), "insertion", this, n, e);
                r && (e !== r.text && (this.session.mergeUndoDeltas = !1, this.$mergeNextCommand = !1), e = r.text)
            }
            if ("	" == e && (e = this.session.getTabString()), this.selection.isEmpty()) {
                if (this.session.getOverwrite()) {
                    var s = new d.fromPoints(o, o);
                    s.end.column += e.length, this.session.remove(s)
                }
            } else {
                var s = this.getSelectionRange();
                o = this.session.remove(s), this.clearSelection()
            }
            if ("\n" == e || "\r\n" == e) {
                var a = n.getLine(o.row);
                if (o.column > a.search(/\S|$/)) {
                    var l = a.substr(o.column).search(/\S|$/);
                    n.doc.removeInLine(o.row, o.column, o.column + l)
                }
            }
            this.clearSelection();
            {
                var c = o.column, h = n.getState(o.row), a = n.getLine(o.row), u = i.checkOutdent(h, a, e);
                n.insert(o, e)
            }
            if (r && r.selection && this.selection.setSelectionRange(2 == r.selection.length ? new d(o.row, c + r.selection[0], o.row, c + r.selection[1]) : new d(o.row + r.selection[0], r.selection[1], o.row + r.selection[2], r.selection[3])), n.getDocument().isNewLine(e)) {
                var g = i.getNextLineIndent(h, a.slice(0, o.column), n.getTabString());
                n.insert({row: o.row + 1,column: 0}, g)
            }
            u && i.autoOutdent(h, n, o.row)
        }, this.onTextInput = function(e) {
            this.keyBinding.onTextInput(e)
        }, this.onCommandKey = function(e, t, n) {
            this.keyBinding.onCommandKey(e, t, n)
        }, this.setOverwrite = function(e) {
            this.session.setOverwrite(e)
        }, this.getOverwrite = function() {
            return this.session.getOverwrite()
        }, this.toggleOverwrite = function() {
            this.session.toggleOverwrite()
        }, this.setScrollSpeed = function(e) {
            this.setOption("scrollSpeed", e)
        }, this.getScrollSpeed = function() {
            return this.getOption("scrollSpeed")
        }, this.setDragDelay = function(e) {
            this.setOption("dragDelay", e)
        }, this.getDragDelay = function() {
            return this.getOption("dragDelay")
        }, this.setSelectionStyle = function(e) {
            this.setOption("selectionStyle", e)
        }, this.getSelectionStyle = function() {
            return this.getOption("selectionStyle")
        }, this.setHighlightActiveLine = function(e) {
            this.setOption("highlightActiveLine", e)
        }, this.getHighlightActiveLine = function() {
            return this.getOption("highlightActiveLine")
        }, this.setHighlightGutterLine = function(e) {
            this.setOption("highlightGutterLine", e)
        }, this.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine")
        }, this.setHighlightSelectedWord = function(e) {
            this.setOption("highlightSelectedWord", e)
        }, this.getHighlightSelectedWord = function() {
            return this.$highlightSelectedWord
        }, this.setAnimatedScroll = function(e) {
            this.renderer.setAnimatedScroll(e)
        }, this.getAnimatedScroll = function() {
            return this.renderer.getAnimatedScroll()
        }, this.setShowInvisibles = function(e) {
            this.renderer.setShowInvisibles(e)
        }, this.getShowInvisibles = function() {
            return this.renderer.getShowInvisibles()
        }, this.setDisplayIndentGuides = function(e) {
            this.renderer.setDisplayIndentGuides(e)
        }, this.getDisplayIndentGuides = function() {
            return this.renderer.getDisplayIndentGuides()
        }, this.setShowPrintMargin = function(e) {
            this.renderer.setShowPrintMargin(e)
        }, this.getShowPrintMargin = function() {
            return this.renderer.getShowPrintMargin()
        }, this.setPrintMarginColumn = function(e) {
            this.renderer.setPrintMarginColumn(e)
        }, this.getPrintMarginColumn = function() {
            return this.renderer.getPrintMarginColumn()
        }, this.setReadOnly = function(e) {
            this.setOption("readOnly", e)
        }, this.getReadOnly = function() {
            return this.getOption("readOnly")
        }, this.setBehavioursEnabled = function(e) {
            this.setOption("behavioursEnabled", e)
        }, this.getBehavioursEnabled = function() {
            return this.getOption("behavioursEnabled")
        }, this.setWrapBehavioursEnabled = function(e) {
            this.setOption("wrapBehavioursEnabled", e)
        }, this.getWrapBehavioursEnabled = function() {
            return this.getOption("wrapBehavioursEnabled")
        }, this.setShowFoldWidgets = function(e) {
            this.setOption("showFoldWidgets", e)
        }, this.getShowFoldWidgets = function() {
            return this.getOption("showFoldWidgets")
        }, this.setFadeFoldWidgets = function(e) {
            this.setOption("fadeFoldWidgets", e)
        }, this.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets")
        }, this.remove = function(e) {
            this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
            var t = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
                var n = this.session, i = n.getState(t.start.row), o = n.getMode().transformAction(i, "deletion", this, n, t);
                if (0 === t.end.column) {
                    var r = n.getTextRange(t);
                    if ("\n" == r[r.length - 1]) {
                        var s = n.getLine(t.end.row);
                        /^\s+$/.test(s) && (t.end.column = s.length)
                    }
                }
                o && (t = o)
            }
            this.session.remove(t), this.clearSelection()
        }, this.removeWordRight = function() {
            this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
        }, this.removeWordLeft = function() {
            this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
        }, this.removeToLineStart = function() {
            this.selection.isEmpty() && this.selection.selectLineStart(), this.session.remove(this.getSelectionRange()), this.clearSelection()
        }, this.removeToLineEnd = function() {
            this.selection.isEmpty() && this.selection.selectLineEnd();
            var e = this.getSelectionRange();
            e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
        }, this.splitLine = function() {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
            var e = this.getCursorPosition();
            this.insert("\n"), this.moveCursorToPosition(e)
        }, this.transposeLetters = function() {
            if (this.selection.isEmpty()) {
                var e = this.getCursorPosition(), t = e.column;
                if (0 !== t) {
                    var n, i, o = this.session.getLine(e.row);
                    t < o.length ? (n = o.charAt(t) + o.charAt(t - 1), i = new d(e.row, t - 1, e.row, t + 1)) : (n = o.charAt(t - 1) + o.charAt(t - 2), i = new d(e.row, t - 2, e.row, t)), this.session.replace(i, n)
                }
            }
        }, this.toLowerCase = function() {
            var e = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var t = this.getSelectionRange(), n = this.session.getTextRange(t);
            this.session.replace(t, n.toLowerCase()), this.selection.setSelectionRange(e)
        }, this.toUpperCase = function() {
            var e = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var t = this.getSelectionRange(), n = this.session.getTextRange(t);
            this.session.replace(t, n.toUpperCase()), this.selection.setSelectionRange(e)
        }, this.indent = function() {
            var e = this.session, t = this.getSelectionRange();
            if (t.start.row < t.end.row) {
                var n = this.$getSelectedRows();
                return void e.indentRows(n.first, n.last, "	")
            }
            if (t.start.column < t.end.column) {
                var i = e.getTextRange(t);
                if (!/^\s+$/.test(i)) {
                    var n = this.$getSelectedRows();
                    return void e.indentRows(n.first, n.last, "	")
                }
            }
            var r = e.getLine(t.start.row), s = t.start, a = e.getTabSize(), l = e.documentToScreenColumn(s.row, s.column);
            if (this.session.getUseSoftTabs())
                var c = a - l % a, h = o.stringRepeat(" ", c);
            else {
                for (var c = l % a; " " == r[t.start.column] && c; )
                    t.start.column--, c--;
                this.selection.setSelectionRange(t), h = "	"
            }
            return this.insert(h)
        }, this.blockIndent = function() {
            var e = this.$getSelectedRows();
            this.session.indentRows(e.first, e.last, "	")
        }, this.blockOutdent = function() {
            var e = this.session.getSelection();
            this.session.outdentRows(e.getRange())
        }, this.sortLines = function() {
            var e = this.$getSelectedRows(), t = this.session, n = [];
            for (o = e.first; o <= e.last; o++)
                n.push(t.getLine(o));
            n.sort(function(e, t) {
                return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
            });
            for (var i = new d(0, 0, 0, 0), o = e.first; o <= e.last; o++) {
                var r = t.getLine(o);
                i.start.row = o, i.end.row = o, i.end.column = r.length, t.replace(i, n[o - e.first])
            }
        }, this.toggleCommentLines = function() {
            var e = this.session.getState(this.getCursorPosition().row), t = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
        }, this.toggleBlockComment = function() {
            var e = this.getCursorPosition(), t = this.session.getState(e.row), n = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(t, this.session, n, e)
        }, this.getNumberAt = function(e, t) {
            var n = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            n.lastIndex = 0;
            for (var i = this.session.getLine(e); n.lastIndex < t; ) {
                var o = n.exec(i);
                if (o.index <= t && o.index + o[0].length >= t) {
                    var r = {value: o[0],start: o.index,end: o.index + o[0].length};
                    return r
                }
            }
            return null
        }, this.modifyNumber = function(e) {
            var t = this.selection.getCursor().row, n = this.selection.getCursor().column, i = new d(t, n - 1, t, n), o = this.session.getTextRange(i);
            if (!isNaN(parseFloat(o)) && isFinite(o)) {
                var r = this.getNumberAt(t, n);
                if (r) {
                    var s = r.value.indexOf(".") >= 0 ? r.start + r.value.indexOf(".") + 1 : r.end, a = r.start + r.value.length - s, l = parseFloat(r.value);
                    l *= Math.pow(10, a), e *= s !== r.end && s > n ? Math.pow(10, r.end - n - 1) : Math.pow(10, r.end - n), l += e, l /= Math.pow(10, a);
                    var c = l.toFixed(a), h = new d(t, r.start, t, r.end);
                    this.session.replace(h, c), this.moveCursorTo(t, Math.max(r.start + 1, n + c.length - r.value.length))
                }
            }
        }, this.removeLines = function() {
            var e, t = this.$getSelectedRows();
            e = 0 === t.first || t.last + 1 < this.session.getLength() ? new d(t.first, 0, t.last + 1, 0) : new d(t.first - 1, this.session.getLine(t.first - 1).length, t.last, this.session.getLine(t.last).length), this.session.remove(e), this.clearSelection()
        }, this.duplicateSelection = function() {
            var e = this.selection, t = this.session, n = e.getRange(), i = e.isBackwards();
            if (n.isEmpty()) {
                var o = n.start.row;
                t.duplicateLines(o, o)
            } else {
                var r = i ? n.start : n.end, s = t.insert(r, t.getTextRange(n), !1);
                n.start = r, n.end = s, e.setSelectionRange(n, i)
            }
        }, this.moveLinesDown = function() {
            this.$moveLines(1, !1)
        }, this.moveLinesUp = function() {
            this.$moveLines(-1, !1)
        }, this.moveText = function(e, t, n) {
            return this.session.moveText(e, t, n)
        }, this.copyLinesUp = function() {
            this.$moveLines(-1, !0)
        }, this.copyLinesDown = function() {
            this.$moveLines(1, !0)
        }, this.$moveLines = function(e, t) {
            var n, i, o = this.selection;
            if (!o.inMultiSelectMode || this.inVirtualSelectionMode) {
                var r = o.toOrientedRange();
                n = this.$getSelectedRows(r), i = this.session.$moveLines(n.first, n.last, t ? 0 : e), t && -1 == e && (i = 0), r.moveBy(i, 0), o.fromOrientedRange(r)
            } else {
                var s = o.rangeList.ranges;
                o.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
                for (var a = 0, l = 0, c = s.length, h = 0; c > h; h++) {
                    var u = h;
                    s[h].moveBy(a, 0), n = this.$getSelectedRows(s[h]);
                    for (var d = n.first, g = n.last; ++h < c; ) {
                        l && s[h].moveBy(l, 0);
                        var f = this.$getSelectedRows(s[h]);
                        if (t && f.first != g)
                            break;
                        if (!t && f.first > g + 1)
                            break;
                        g = f.last
                    }
                    for (h--, a = this.session.$moveLines(d, g, t ? 0 : e), t && -1 == e && (u = h + 1); h >= u; )
                        s[u].moveBy(a, 0), u++;
                    t || (a = 0), l += a
                }
                o.fromOrientedRange(o.ranges[0]), o.rangeList.attach(this.session), this.inVirtualSelectionMode = !1
            }
        }, this.$getSelectedRows = function(e) {
            return e = (e || this.getSelectionRange()).collapseRows(), {first: this.session.getRowFoldStart(e.start.row),last: this.session.getRowFoldEnd(e.end.row)}
        }, this.onCompositionStart = function() {
            this.renderer.showComposition(this.getCursorPosition())
        }, this.onCompositionUpdate = function(e) {
            this.renderer.setCompositionText(e)
        }, this.onCompositionEnd = function() {
            this.renderer.hideComposition()
        }, this.getFirstVisibleRow = function() {
            return this.renderer.getFirstVisibleRow()
        }, this.getLastVisibleRow = function() {
            return this.renderer.getLastVisibleRow()
        }, this.isRowVisible = function(e) {
            return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
        }, this.isRowFullyVisible = function(e) {
            return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
        }, this.$getVisibleRowCount = function() {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
        }, this.$moveByPage = function(e, t) {
            var n = this.renderer, i = this.renderer.layerConfig, o = e * Math.floor(i.height / i.lineHeight);
            this.$blockScrolling++, t === !0 ? this.selection.$moveSelection(function() {
                this.moveCursorBy(o, 0)
            }) : t === !1 && (this.selection.moveCursorBy(o, 0), this.selection.clearSelection()), this.$blockScrolling--;
            var r = n.scrollTop;
            n.scrollBy(0, o * i.lineHeight), null != t && n.scrollCursorIntoView(null, .5), n.animateScrolling(r)
        }, this.selectPageDown = function() {
            this.$moveByPage(1, !0)
        }, this.selectPageUp = function() {
            this.$moveByPage(-1, !0)
        }, this.gotoPageDown = function() {
            this.$moveByPage(1, !1)
        }, this.gotoPageUp = function() {
            this.$moveByPage(-1, !1)
        }, this.scrollPageDown = function() {
            this.$moveByPage(1)
        }, this.scrollPageUp = function() {
            this.$moveByPage(-1)
        }, this.scrollToRow = function(e) {
            this.renderer.scrollToRow(e)
        }, this.scrollToLine = function(e, t, n, i) {
            this.renderer.scrollToLine(e, t, n, i)
        }, this.centerSelection = function() {
            var e = this.getSelectionRange(), t = {row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)};
            this.renderer.alignCursor(t, .5)
        }, this.getCursorPosition = function() {
            return this.selection.getCursor()
        }, this.getCursorPositionScreen = function() {
            return this.session.documentToScreenPosition(this.getCursorPosition())
        }, this.getSelectionRange = function() {
            return this.selection.getRange()
        }, this.selectAll = function() {
            this.$blockScrolling += 1, this.selection.selectAll(), this.$blockScrolling -= 1
        }, this.clearSelection = function() {
            this.selection.clearSelection()
        }, this.moveCursorTo = function(e, t) {
            this.selection.moveCursorTo(e, t)
        }, this.moveCursorToPosition = function(e) {
            this.selection.moveCursorToPosition(e)
        }, this.jumpToMatching = function(e, t) {
            var n = this.getCursorPosition(), i = new v(this.session, n.row, n.column), o = i.getCurrentToken(), r = o || i.stepForward();
            if (r) {
                var s, a, l = !1, c = {}, h = n.column - r.start, u = {")": "(","(": "(","]": "[","[": "[","{": "{","}": "{"};
                do {
                    if (r.value.match(/[{}()\[\]]/g)) {
                        for (; h < r.value.length && !l; h++)
                            if (u[r.value[h]])
                                switch (a = u[r.value[h]] + "." + r.type.replace("rparen", "lparen"), isNaN(c[a]) && (c[a] = 0), r.value[h]) {
                                    case "(":
                                    case "[":
                                    case "{":
                                        c[a]++;
                                        break;
                                    case ")":
                                    case "]":
                                    case "}":
                                        c[a]--, -1 === c[a] && (s = "bracket", l = !0)
                                }
                    } else
                        r && -1 !== r.type.indexOf("tag-name") && (isNaN(c[r.value]) && (c[r.value] = 0), "<" === o.value ? c[r.value]++ : "</" === o.value && c[r.value]--, -1 === c[r.value] && (s = "tag", l = !0));
                    l || (o = r, r = i.stepForward(), h = 0)
                } while (r && !l);
                if (s) {
                    var g, f;
                    if ("bracket" === s)
                        g = this.session.getBracketRange(n), g || (g = new d(i.getCurrentTokenRow(), i.getCurrentTokenColumn() + h - 1, i.getCurrentTokenRow(), i.getCurrentTokenColumn() + h - 1), f = g.start, (t || f.row === n.row && Math.abs(f.column - n.column) < 2) && (g = this.session.getBracketRange(f)));
                    else if ("tag" === s) {
                        if (!r || -1 === r.type.indexOf("tag-name"))
                            return;
                        var m = r.value;
                        if (g = new d(i.getCurrentTokenRow(), i.getCurrentTokenColumn() - 2, i.getCurrentTokenRow(), i.getCurrentTokenColumn() - 2), 0 === g.compare(n.row, n.column)) {
                            l = !1;
                            do
                                r = o, o = i.stepBackward(), o && (-1 !== o.type.indexOf("tag-close") && g.setEnd(i.getCurrentTokenRow(), i.getCurrentTokenColumn() + 1), r.value === m && -1 !== r.type.indexOf("tag-name") && ("<" === o.value ? c[m]++ : "</" === o.value && c[m]--, 0 === c[m] && (l = !0)));
                            while (o && !l)
                        }
                        r && r.type.indexOf("tag-name") && (f = g.start, f.row == n.row && Math.abs(f.column - n.column) < 2 && (f = g.end))
                    }
                    f = g && g.cursor || f, f && (e ? g && t ? this.selection.setRange(g) : g && g.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(f.row, f.column) : this.selection.moveTo(f.row, f.column))
                }
            }
        }, this.gotoLine = function(e, t, n) {
            this.selection.clearSelection(), this.session.unfold({row: e - 1,column: t || 0}), this.$blockScrolling += 1, this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.$blockScrolling -= 1, this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, n)
        }, this.navigateTo = function(e, t) {
            this.selection.moveTo(e, t)
        }, this.navigateUp = function(e) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();
                return this.moveCursorToPosition(t)
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0)
        }, this.navigateDown = function(e) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();
                return this.moveCursorToPosition(t)
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0)
        }, this.navigateLeft = function(e) {
            if (this.selection.isEmpty())
                for (e = e || 1; e--; )
                    this.selection.moveCursorLeft();
            else {
                var t = this.getSelectionRange().start;
                this.moveCursorToPosition(t)
            }
            this.clearSelection()
        }, this.navigateRight = function(e) {
            if (this.selection.isEmpty())
                for (e = e || 1; e--; )
                    this.selection.moveCursorRight();
            else {
                var t = this.getSelectionRange().end;
                this.moveCursorToPosition(t)
            }
            this.clearSelection()
        }, this.navigateLineStart = function() {
            this.selection.moveCursorLineStart(), this.clearSelection()
        }, this.navigateLineEnd = function() {
            this.selection.moveCursorLineEnd(), this.clearSelection()
        }, this.navigateFileEnd = function() {
            this.selection.moveCursorFileEnd(), this.clearSelection()
        }, this.navigateFileStart = function() {
            this.selection.moveCursorFileStart(), this.clearSelection()
        }, this.navigateWordRight = function() {
            this.selection.moveCursorWordRight(), this.clearSelection()
        }, this.navigateWordLeft = function() {
            this.selection.moveCursorWordLeft(), this.clearSelection()
        }, this.replace = function(e, t) {
            t && this.$search.set(t);
            var n = this.$search.find(this.session), i = 0;
            return n ? (this.$tryReplace(n, e) && (i = 1), null !== n && (this.selection.setSelectionRange(n), this.renderer.scrollSelectionIntoView(n.start, n.end)), i) : i
        }, this.replaceAll = function(e, t) {
            t && this.$search.set(t);
            var n = this.$search.findAll(this.session), i = 0;
            if (!n.length)
                return i;
            this.$blockScrolling += 1;
            var o = this.getSelectionRange();
            this.selection.moveTo(0, 0);
            for (var r = n.length - 1; r >= 0; --r)
                this.$tryReplace(n[r], e) && i++;
            return this.selection.setSelectionRange(o), this.$blockScrolling -= 1, i
        }, this.$tryReplace = function(e, t) {
            var n = this.session.getTextRange(e);
            return t = this.$search.replace(n, t), null !== t ? (e.end = this.session.replace(e, t), e) : null
        }, this.getLastSearchOptions = function() {
            return this.$search.getOptions()
        }, this.find = function(e, t, i) {
            t || (t = {}), "string" == typeof e || e instanceof RegExp ? t.needle = e : "object" == typeof e && n.mixin(t, e);
            var o = this.selection.getRange();
            null == t.needle && (e = this.session.getTextRange(o) || this.$search.$options.needle, e || (o = this.session.getWordRange(o.start.row, o.start.column), e = this.session.getTextRange(o)), this.$search.set({needle: e})), this.$search.set(t), t.start || this.$search.set({start: o});
            var r = this.$search.find(this.session);
            return t.preventScroll ? r : r ? (this.revealRange(r, i), r) : (t.backwards ? o.start = o.end : o.end = o.start, void this.selection.setRange(o))
        }, this.findNext = function(e, t) {
            this.find({skipCurrent: !0,backwards: !1}, e, t)
        }, this.findPrevious = function(e, t) {
            this.find(e, {skipCurrent: !0,backwards: !0}, t)
        }, this.revealRange = function(e, t) {
            this.$blockScrolling += 1, this.session.unfold(e), this.selection.setSelectionRange(e), this.$blockScrolling -= 1;
            var n = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(e.start, e.end, .5), t !== !1 && this.renderer.animateScrolling(n)
        }, this.undo = function() {
            this.$blockScrolling++, this.session.getUndoManager().undo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
        }, this.redo = function() {
            this.$blockScrolling++, this.session.getUndoManager().redo(), this.$blockScrolling--, this.renderer.scrollCursorIntoView(null, .5)
        }, this.destroy = function() {
            this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy()
        }, this.setAutoScrollEditorIntoView = function(e) {
            if (e) {
                var t, n = this, i = !1;
                this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                var o = this.$scrollAnchor;
                o.style.cssText = "position:absolute", this.container.insertBefore(o, this.container.firstChild);
                var r = this.on("changeSelection", function() {
                    i = !0
                }), s = this.renderer.on("beforeRender", function() {
                    i && (t = n.renderer.container.getBoundingClientRect())
                }), a = this.renderer.on("afterRender", function() {
                    if (i && t && (n.isFocused() || n.searchBox && n.searchBox.isFocused())) {
                        var e = n.renderer, r = e.$cursorLayer.$pixelPos, s = e.layerConfig, a = r.top - s.offset;
                        i = r.top >= 0 && a + t.top < 0 ? !0 : r.top < s.height && r.top + t.top + s.lineHeight > window.innerHeight ? !1 : null, null != i && (o.style.top = a + "px", o.style.left = r.left + "px", o.style.height = s.lineHeight + "px", o.scrollIntoView(i)), i = t = null
                    }
                });
                this.setAutoScrollEditorIntoView = function(e) {
                    e || (delete this.setAutoScrollEditorIntoView, this.removeEventListener("changeSelection", r), this.renderer.removeEventListener("afterRender", a), this.renderer.removeEventListener("beforeRender", s))
                }
            }
        }, this.$resetCursorStyle = function() {
            var e = this.$cursorStyle || "ace", t = this.renderer.$cursorLayer;
            t && (t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && "wide" != e, i.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e)))
        }
    }).call(A.prototype), p.defineOptions(A.prototype, "editor", {selectionStyle: {set: function(e) {
                this.onSelectionChange(), this._signal("changeSelectionStyle", {data: e})
            },initialValue: "line"},highlightActiveLine: {set: function() {
                this.$updateHighlightActiveLine()
            },initialValue: !0},highlightSelectedWord: {set: function() {
                this.$onSelectionChange()
            },initialValue: !0},readOnly: {set: function() {
                this.$resetCursorStyle()
            },initialValue: !1},cursorStyle: {set: function() {
                this.$resetCursorStyle()
            },values: ["ace", "slim", "smooth", "wide"],initialValue: "ace"},mergeUndoDeltas: {values: [!1, !0, "always"],initialValue: !0},behavioursEnabled: {initialValue: !0},wrapBehavioursEnabled: {initialValue: !0},autoScrollEditorIntoView: {set: function(e) {
                this.setAutoScrollEditorIntoView(e)
            }},hScrollBarAlwaysVisible: "renderer",vScrollBarAlwaysVisible: "renderer",highlightGutterLine: "renderer",animatedScroll: "renderer",showInvisibles: "renderer",showPrintMargin: "renderer",printMarginColumn: "renderer",printMargin: "renderer",fadeFoldWidgets: "renderer",showFoldWidgets: "renderer",showLineNumbers: "renderer",showGutter: "renderer",displayIndentGuides: "renderer",fontSize: "renderer",fontFamily: "renderer",maxLines: "renderer",minLines: "renderer",scrollPastEnd: "renderer",fixedWidthGutter: "renderer",theme: "renderer",scrollSpeed: "$mouseHandler",dragDelay: "$mouseHandler",dragEnabled: "$mouseHandler",focusTimout: "$mouseHandler",tooltipFollowsMouse: "$mouseHandler",firstLineNumber: "session",overwrite: "session",newLineMode: "session",useWorker: "session",useSoftTabs: "session",tabSize: "session",wrap: "session",foldStyle: "session",mode: "session"}), t.Editor = A
}), define("ace/undomanager", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var n = function() {
        this.reset()
    };
    (function() {
        this.execute = function(e) {
            var t = e.args[0];
            this.$doc = e.args[1], e.merge && this.hasUndo() && (this.dirtyCounter--, t = this.$undoStack.pop().concat(t)), this.$undoStack.push(t), this.$redoStack = [], this.dirtyCounter < 0 && (this.dirtyCounter = 0 / 0), this.dirtyCounter++
        }, this.undo = function(e) {
            var t = this.$undoStack.pop(), n = null;
            return t && (n = this.$doc.undoChanges(t, e), this.$redoStack.push(t), this.dirtyCounter--), n
        }, this.redo = function(e) {
            var t = this.$redoStack.pop(), n = null;
            return t && (n = this.$doc.redoChanges(t, e), this.$undoStack.push(t), this.dirtyCounter++), n
        }, this.reset = function() {
            this.$undoStack = [], this.$redoStack = [], this.dirtyCounter = 0
        }, this.hasUndo = function() {
            return this.$undoStack.length > 0
        }, this.hasRedo = function() {
            return this.$redoStack.length > 0
        }, this.markClean = function() {
            this.dirtyCounter = 0
        }, this.isClean = function() {
            return 0 === this.dirtyCounter
        }
    }).call(n.prototype), t.UndoManager = n
}), define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var n = e("../lib/dom"), i = e("../lib/oop"), o = e("../lib/lang"), r = e("../lib/event_emitter").EventEmitter, s = function(e) {
        this.element = n.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$cells = []
    };
    (function() {
        i.implement(this, r), this.setSession = function(e) {
            this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations)
        }, this.addGutterDecoration = function(e, t) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
        }, this.removeGutterDecoration = function(e, t) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
        }, this.setAnnotations = function(e) {
            this.$annotations = [];
            for (var t = 0; t < e.length; t++) {
                var n = e[t], i = n.row, r = this.$annotations[i];
                r || (r = this.$annotations[i] = {text: []});
                var s = n.text;
                s = s ? o.escapeHTML(s) : n.html || "", -1 === r.text.indexOf(s) && r.text.push(s);
                var a = n.type;
                "error" == a ? r.className = " ace_error" : "warning" == a && " ace_error" != r.className ? r.className = " ace_warning" : "info" != a || r.className || (r.className = " ace_info")
            }
        }, this.$updateAnnotations = function(e) {
            if (this.$annotations.length) {
                var t = e.data, n = t.range, i = n.start.row, o = n.end.row - i;
                if (0 === o)
                    ;
                else if ("removeText" == t.action || "removeLines" == t.action)
                    this.$annotations.splice(i, o + 1, null);
                else {
                    var r = new Array(o + 1);
                    r.unshift(i, 1), this.$annotations.splice.apply(this.$annotations, r)
                }
            }
        }, this.update = function(e) {
            for (var t = this.session, i = e.firstRow, o = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1), r = t.getNextFoldLine(i), s = r ? r.start.row : 1 / 0, a = this.$showFoldWidgets && t.foldWidgets, l = t.$breakpoints, c = t.$decorations, h = t.$firstLineNumber, u = 0, d = t.gutterRenderer || this.$renderer, g = null, f = -1, m = i; ; ) {
                if (m > s && (m = r.end.row + 1, r = t.getNextFoldLine(m, r), s = r ? r.start.row : 1 / 0), m > o) {
                    for (; this.$cells.length > f + 1; )
                        g = this.$cells.pop(), this.element.removeChild(g.element);
                    break
                }
                g = this.$cells[++f], g || (g = {element: null,textNode: null,foldWidget: null}, g.element = n.createElement("div"), g.textNode = document.createTextNode(""), g.element.appendChild(g.textNode), this.element.appendChild(g.element), this.$cells[f] = g);
                var p = "ace_gutter-cell ";
                l[m] && (p += l[m]), c[m] && (p += c[m]), this.$annotations[m] && (p += this.$annotations[m].className), g.element.className != p && (g.element.className = p);
                var v = t.getRowLength(m) * e.lineHeight + "px";
                if (v != g.element.style.height && (g.element.style.height = v), a) {
                    var A = a[m];
                    null == A && (A = a[m] = t.getFoldWidget(m))
                }
                if (A) {
                    g.foldWidget || (g.foldWidget = n.createElement("span"), g.element.appendChild(g.foldWidget));
                    var p = "ace_fold-widget ace_" + A;
                    p += "start" == A && m == s && m < r.end.row ? " ace_closed" : " ace_open", g.foldWidget.className != p && (g.foldWidget.className = p);
                    var v = e.lineHeight + "px";
                    g.foldWidget.style.height != v && (g.foldWidget.style.height = v)
                } else
                    g.foldWidget && (g.element.removeChild(g.foldWidget), g.foldWidget = null);
                var C = u = d ? d.getText(t, m) : m + h;
                C != g.textNode.data && (g.textNode.data = C), m++
            }
            this.element.style.height = e.minHeight + "px", (this.$fixedWidth || t.$useWrapMode) && (u = t.getLength() + h);
            var w = d ? d.getWidth(t, u, e) : u.toString().length * e.characterWidth, F = this.$padding || this.$computePadding();
            w += F.left + F.right, w === this.gutterWidth || isNaN(w) || (this.gutterWidth = w, this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._emit("changeGutterWidth", w))
        }, this.$fixedWidth = !1, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function(e) {
            this.$renderer = !e && {getWidth: function() {
                    return ""
                },getText: function() {
                    return ""
                }}
        }, this.getShowLineNumbers = function() {
            return this.$showLineNumbers
        }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function(e) {
            e ? n.addCssClass(this.element, "ace_folding-enabled") : n.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
        }, this.getShowFoldWidgets = function() {
            return this.$showFoldWidgets
        }, this.$computePadding = function() {
            if (!this.element.firstChild)
                return {left: 0,right: 0};
            var e = n.computedStyle(this.element.firstChild);
            return this.$padding = {}, this.$padding.left = parseInt(e.paddingLeft) + 1 || 0, this.$padding.right = parseInt(e.paddingRight) || 0, this.$padding
        }, this.getRegion = function(e) {
            var t = this.$padding || this.$computePadding(), n = this.element.getBoundingClientRect();
            return e.x < t.left + n.left ? "markers" : this.$showFoldWidgets && e.x > n.right - t.right ? "foldWidgets" : void 0
        }
    }).call(s.prototype), t.Gutter = s
}), define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(e, t) {
    "use strict";
    var n = e("../range").Range, i = e("../lib/dom"), o = function(e) {
        this.element = i.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
    };
    (function() {
        this.$padding = 0, this.setPadding = function(e) {
            this.$padding = e
        }, this.setSession = function(e) {
            this.session = e
        }, this.setMarkers = function(e) {
            this.markers = e
        }, this.update = function(e) {
            var e = e || this.config;
            if (e) {
                this.config = e;
                var t = [];
                for (var n in this.markers) {
                    var i = this.markers[n];
                    if (i.range) {
                        var o = i.range.clipRows(e.firstRow, e.lastRow);
                        if (!o.isEmpty())
                            if (o = o.toScreenRange(this.session), i.renderer) {
                                var r = this.$getTop(o.start.row, e), s = this.$padding + o.start.column * e.characterWidth;
                                i.renderer(t, o, s, r, e)
                            } else
                                "fullLine" == i.type ? this.drawFullLineMarker(t, o, i.clazz, e) : "screenLine" == i.type ? this.drawScreenLineMarker(t, o, i.clazz, e) : o.isMultiLine() ? "text" == i.type ? this.drawTextMarker(t, o, i.clazz, e) : this.drawMultiLineMarker(t, o, i.clazz, e) : this.drawSingleLineMarker(t, o, i.clazz + " ace_start", e)
                    } else
                        i.update(t, this, this.session, e)
                }
                this.element.innerHTML = t.join("")
            }
        }, this.$getTop = function(e, t) {
            return (e - t.firstRowScreen) * t.lineHeight
        }, this.drawTextMarker = function(e, t, i, o, r) {
            var s = t.start.row, a = new n(s, t.start.column, s, this.session.getScreenLastRowColumn(s));
            for (this.drawSingleLineMarker(e, a, i + " ace_start", o, 1, r), s = t.end.row, a = new n(s, 0, s, t.end.column), this.drawSingleLineMarker(e, a, i, o, 0, r), s = t.start.row + 1; s < t.end.row; s++)
                a.start.row = s, a.end.row = s, a.end.column = this.session.getScreenLastRowColumn(s), this.drawSingleLineMarker(e, a, i, o, 1, r)
        }, this.drawMultiLineMarker = function(e, t, n, i, o) {
            var r = this.$padding, s = i.lineHeight, a = this.$getTop(t.start.row, i), l = r + t.start.column * i.characterWidth;
            o = o || "", e.push("<div class='", n, " ace_start' style='", "height:", s, "px;", "right:0;", "top:", a, "px;", "left:", l, "px;", o, "'></div>"), a = this.$getTop(t.end.row, i);
            var c = t.end.column * i.characterWidth;
            e.push("<div class='", n, "' style='", "height:", s, "px;", "width:", c, "px;", "top:", a, "px;", "left:", r, "px;", o, "'></div>"), s = (t.end.row - t.start.row - 1) * i.lineHeight, 0 > s || (a = this.$getTop(t.start.row + 1, i), e.push("<div class='", n, "' style='", "height:", s, "px;", "right:0;", "top:", a, "px;", "left:", r, "px;", o, "'></div>"))
        }, this.drawSingleLineMarker = function(e, t, n, i, o, r) {
            var s = i.lineHeight, a = (t.end.column + (o || 0) - t.start.column) * i.characterWidth, l = this.$getTop(t.start.row, i), c = this.$padding + t.start.column * i.characterWidth;
            e.push("<div class='", n, "' style='", "height:", s, "px;", "width:", a, "px;", "top:", l, "px;", "left:", c, "px;", r || "", "'></div>")
        }, this.drawFullLineMarker = function(e, t, n, i, o) {
            var r = this.$getTop(t.start.row, i), s = i.lineHeight;
            t.start.row != t.end.row && (s += this.$getTop(t.end.row, i) - r), e.push("<div class='", n, "' style='", "height:", s, "px;", "top:", r, "px;", "left:0;right:0;", o || "", "'></div>")
        }, this.drawScreenLineMarker = function(e, t, n, i, o) {
            var r = this.$getTop(t.start.row, i), s = i.lineHeight;
            e.push("<div class='", n, "' style='", "height:", s, "px;", "top:", r, "px;", "left:0;right:0;", o || "", "'></div>")
        }
    }).call(o.prototype), t.Marker = o
}), define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("../lib/dom"), o = e("../lib/lang"), r = (e("../lib/useragent"), e("../lib/event_emitter").EventEmitter), s = function(e) {
        this.element = i.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this)
    };
    (function() {
        n.implement(this, r), this.EOF_CHAR = "\xb6", this.EOL_CHAR_LF = "\xac", this.EOL_CHAR_CRLF = "\xa4", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "\u2192", this.SPACE_CHAR = "\xb7", this.$padding = 0, this.$updateEolChar = function() {
            var e = "\n" == this.session.doc.getNewLineCharacter() ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
            return this.EOL_CHAR != e ? (this.EOL_CHAR = e, !0) : void 0
        }, this.setPadding = function(e) {
            this.$padding = e, this.element.style.padding = "0 " + e + "px"
        }, this.getLineHeight = function() {
            return this.$fontMetrics.$characterSize.height || 0
        }, this.getCharacterWidth = function() {
            return this.$fontMetrics.$characterSize.width || 0
        }, this.$setFontMetrics = function(e) {
            this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function(e) {
                this._signal("changeCharacterSize", e)
            }.bind(this)), this.$pollSizeChanges()
        }, this.checkForSizeChanges = function() {
            this.$fontMetrics.checkForSizeChanges()
        }, this.$pollSizeChanges = function() {
            return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
        }, this.setSession = function(e) {
            this.session = e, e && this.$computeTabString()
        }, this.showInvisibles = !1, this.setShowInvisibles = function(e) {
            return this.showInvisibles == e ? !1 : (this.showInvisibles = e, this.$computeTabString(), !0)
        }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function(e) {
            return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = e, this.$computeTabString(), !0)
        }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function() {
            var e = this.session.getTabSize();
            this.tabSize = e;
            for (var t = this.$tabStrings = [0], n = 1; e + 1 > n; n++)
                t.push(this.showInvisibles ? "<span class='ace_invisible ace_invisible_tab'>" + this.TAB_CHAR + o.stringRepeat("\xa0", n - 1) + "</span>" : o.stringRepeat("\xa0", n));
            if (this.displayIndentGuides) {
                this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                var i = "ace_indent-guide", r = "", s = "";
                if (this.showInvisibles) {
                    i += " ace_invisible", r = " ace_invisible_space", s = " ace_invisible_tab";
                    var a = o.stringRepeat(this.SPACE_CHAR, this.tabSize), l = this.TAB_CHAR + o.stringRepeat("\xa0", this.tabSize - 1)
                } else
                    var a = o.stringRepeat("\xa0", this.tabSize), l = a;
                this.$tabStrings[" "] = "<span class='" + i + r + "'>" + a + "</span>", this.$tabStrings["	"] = "<span class='" + i + s + "'>" + l + "</span>"
            }
        }, this.updateLines = function(e, t, n) {
            (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) && this.scrollLines(e), this.config = e;
            for (var i = Math.max(t, e.firstRow), o = Math.min(n, e.lastRow), r = this.element.childNodes, s = 0, a = e.firstRow; i > a; a++) {
                var l = this.session.getFoldLine(a);
                if (l) {
                    if (l.containsRow(i)) {
                        i = l.start.row;
                        break
                    }
                    a = l.end.row
                }
                s++
            }
            for (var a = i, l = this.session.getNextFoldLine(a), c = l ? l.start.row : 1 / 0; ; ) {
                if (a > c && (a = l.end.row + 1, l = this.session.getNextFoldLine(a, l), c = l ? l.start.row : 1 / 0), a > o)
                    break;
                var h = r[s++];
                if (h) {
                    var u = [];
                    this.$renderLine(u, a, !this.$useLineGroups(), a == c ? l : !1), h.style.height = e.lineHeight * this.session.getRowLength(a) + "px", h.innerHTML = u.join("")
                }
                a++
            }
        }, this.scrollLines = function(e) {
            var t = this.config;
            if (this.config = e, !t || t.lastRow < e.firstRow)
                return this.update(e);
            if (e.lastRow < t.firstRow)
                return this.update(e);
            var n = this.element;
            if (t.firstRow < e.firstRow)
                for (var i = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); i > 0; i--)
                    n.removeChild(n.firstChild);
            if (t.lastRow > e.lastRow)
                for (var i = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); i > 0; i--)
                    n.removeChild(n.lastChild);
            if (e.firstRow < t.firstRow) {
                var o = this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1);
                n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o)
            }
            if (e.lastRow > t.lastRow) {
                var o = this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow);
                n.appendChild(o)
            }
        }, this.$renderLinesFragment = function(e, t, n) {
            for (var o = this.element.ownerDocument.createDocumentFragment(), r = t, s = this.session.getNextFoldLine(r), a = s ? s.start.row : 1 / 0; ; ) {
                if (r > a && (r = s.end.row + 1, s = this.session.getNextFoldLine(r, s), a = s ? s.start.row : 1 / 0), r > n)
                    break;
                var l = i.createElement("div"), c = [];
                if (this.$renderLine(c, r, !1, r == a ? s : !1), l.innerHTML = c.join(""), this.$useLineGroups())
                    l.className = "ace_line_group", o.appendChild(l), l.style.height = e.lineHeight * this.session.getRowLength(r) + "px";
                else
                    for (; l.firstChild; )
                        o.appendChild(l.firstChild);
                r++
            }
            return o
        }, this.update = function(e) {
            this.config = e;
            for (var t = [], n = e.firstRow, i = e.lastRow, o = n, r = this.session.getNextFoldLine(o), s = r ? r.start.row : 1 / 0; ; ) {
                if (o > s && (o = r.end.row + 1, r = this.session.getNextFoldLine(o, r), s = r ? r.start.row : 1 / 0), o > i)
                    break;
                this.$useLineGroups() && t.push("<div class='ace_line_group' style='height:", e.lineHeight * this.session.getRowLength(o), "px'>"), this.$renderLine(t, o, !1, o == s ? r : !1), this.$useLineGroups() && t.push("</div>"), o++
            }
            this.element.innerHTML = t.join("")
        }, this.$textToken = {text: !0,rparen: !0,lparen: !0}, this.$renderToken = function(e, t, n, i) {
            var r = this, s = /\t|&|<|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g, a = function(e, n, i, s) {
                if (n)
                    return r.showInvisibles ? "<span class='ace_invisible ace_invisible_space'>" + o.stringRepeat(r.SPACE_CHAR, e.length) + "</span>" : o.stringRepeat("\xa0", e.length);
                if ("&" == e)
                    return "&#38;";
                if ("<" == e)
                    return "&#60;";
                if ("	" == e) {
                    var a = r.session.getScreenTabSize(t + s);
                    return t += a - 1, r.$tabStrings[a]
                }
                if ("\u3000" == e) {
                    var l = r.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", c = r.showInvisibles ? r.SPACE_CHAR : "";
                    return t += 1, "<span class='" + l + "' style='width:" + 2 * r.config.characterWidth + "px'>" + c + "</span>"
                }
                return i ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" + r.SPACE_CHAR + "</span>" : (t += 1, "<span class='ace_cjk' style='width:" + 2 * r.config.characterWidth + "px'>" + e + "</span>")
            }, l = i.replace(s, a);
            if (this.$textToken[n.type])
                e.push(l);
            else {
                var c = "ace_" + n.type.replace(/\./g, " ace_"), h = "";
                "fold" == n.type && (h = " style='width:" + n.value.length * this.config.characterWidth + "px;' "), e.push("<span class='", c, "'", h, ">", l, "</span>")
            }
            return t + i.length
        }, this.renderIndentGuide = function(e, t, n) {
            var i = t.search(this.$indentGuideRe);
            return 0 >= i || i >= n ? t : " " == t[0] ? (i -= i % this.tabSize, e.push(o.stringRepeat(this.$tabStrings[" "], i / this.tabSize)), t.substr(i)) : "	" == t[0] ? (e.push(o.stringRepeat(this.$tabStrings["	"], i)), t.substr(i)) : t
        }, this.$renderWrappedLine = function(e, t, n, i) {
            for (var o = 0, r = 0, s = n[0], a = 0, l = 0; l < t.length; l++) {
                var c = t[l], h = c.value;
                if (0 == l && this.displayIndentGuides) {
                    if (o = h.length, h = this.renderIndentGuide(e, h, s), !h)
                        continue;
                    o -= h.length
                }
                if (o + h.length < s)
                    a = this.$renderToken(e, a, c, h), o += h.length;
                else {
                    for (; o + h.length >= s; )
                        a = this.$renderToken(e, a, c, h.substring(0, s - o)), h = h.substring(s - o), o = s, i || e.push("</div>", "<div class='ace_line' style='height:", this.config.lineHeight, "px'>"), r++, a = 0, s = n[r] || Number.MAX_VALUE;
                    0 != h.length && (o += h.length, a = this.$renderToken(e, a, c, h))
                }
            }
        }, this.$renderSimpleLine = function(e, t) {
            var n = 0, i = t[0], o = i.value;
            this.displayIndentGuides && (o = this.renderIndentGuide(e, o)), o && (n = this.$renderToken(e, n, i, o));
            for (var r = 1; r < t.length; r++)
                i = t[r], o = i.value, n = this.$renderToken(e, n, i, o)
        }, this.$renderLine = function(e, t, n, i) {
            if (i || 0 == i || (i = this.session.getFoldLine(t)), i)
                var o = this.$getFoldLineTokens(t, i);
            else
                var o = this.session.getTokens(t);
            if (n || e.push("<div class='ace_line' style='height:", this.config.lineHeight * (this.$useLineGroups() ? 1 : this.session.getRowLength(t)), "px'>"), o.length) {
                var r = this.session.getRowSplitData(t);
                r && r.length ? this.$renderWrappedLine(e, o, r, n) : this.$renderSimpleLine(e, o)
            }
            this.showInvisibles && (i && (t = i.end.row), e.push("<span class='ace_invisible ace_invisible_eol'>", t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>")), n || e.push("</div>")
        }, this.$getFoldLineTokens = function(e, t) {
            function n(e, t, n) {
                for (var i = 0, r = 0; r + e[i].value.length < t; )
                    if (r += e[i].value.length, i++, i == e.length)
                        return;
                if (r != t) {
                    var s = e[i].value.substring(t - r);
                    s.length > n - t && (s = s.substring(0, n - t)), o.push({type: e[i].type,value: s}), r = t + s.length, i += 1
                }
                for (; n > r && i < e.length; ) {
                    var s = e[i].value;
                    o.push(s.length + r > n ? {type: e[i].type,value: s.substring(0, n - r)} : e[i]), r += s.length, i += 1
                }
            }
            var i = this.session, o = [], r = i.getTokens(e);
            return t.walk(function(e, t, s, a, l) {
                null != e ? o.push({type: "fold",value: e}) : (l && (r = i.getTokens(t)), r.length && n(r, a, s))
            }, t.end.row, this.session.getLine(t.end.row).length), o
        }, this.$useLineGroups = function() {
            return this.session.getUseWrapMode()
        }, this.destroy = function() {
            clearInterval(this.$pollSizeChangesTimer), this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode), delete this.$measureNode
        }
    }).call(s.prototype), t.Text = s
}), define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
    "use strict";
    var n, i = e("../lib/dom"), o = function(e) {
        this.element = i.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), void 0 === n && (n = "opacity" in this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), i.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateVisibility.bind(this)
    };
    (function() {
        this.$updateVisibility = function(e) {
            for (var t = this.cursors, n = t.length; n--; )
                t[n].style.visibility = e ? "" : "hidden"
        }, this.$updateOpacity = function(e) {
            for (var t = this.cursors, n = t.length; n--; )
                t[n].style.opacity = e ? "" : "0"
        }, this.$padding = 0, this.setPadding = function(e) {
            this.$padding = e
        }, this.setSession = function(e) {
            this.session = e
        }, this.setBlinking = function(e) {
            e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
        }, this.setBlinkInterval = function(e) {
            e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
        }, this.setSmoothBlinking = function(e) {
            e == this.smoothBlinking || n || (this.smoothBlinking = e, i.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.$updateCursors = (e ? this.$updateOpacity : this.$updateVisibility).bind(this), this.restartTimer())
        }, this.addCursor = function() {
            var e = i.createElement("div");
            return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
        }, this.removeCursor = function() {
            if (this.cursors.length > 1) {
                var e = this.cursors.pop();
                return e.parentNode.removeChild(e), e
            }
        }, this.hideCursor = function() {
            this.isVisible = !1, i.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
        }, this.showCursor = function() {
            this.isVisible = !0, i.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
        }, this.restartTimer = function() {
            var e = this.$updateCursors;
            if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.smoothBlinking && i.removeCssClass(this.element, "ace_smooth-blinking"), e(!0), this.isBlinking && this.blinkInterval && this.isVisible) {
                this.smoothBlinking && setTimeout(function() {
                    i.addCssClass(this.element, "ace_smooth-blinking")
                }.bind(this));
                var t = function() {
                    this.timeoutId = setTimeout(function() {
                        e(!1)
                    }, .6 * this.blinkInterval)
                }.bind(this);
                this.intervalId = setInterval(function() {
                    e(!0), t()
                }, this.blinkInterval), t()
            }
        }, this.getPixelPosition = function(e, t) {
            if (!this.config || !this.session)
                return {left: 0,top: 0};
            e || (e = this.session.selection.getCursor());
            var n = this.session.documentToScreenPosition(e), i = this.$padding + n.column * this.config.characterWidth, o = (n.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
            return {left: i,top: o}
        }, this.update = function(e) {
            this.config = e;
            var t = this.session.$selectionMarkers, n = 0, i = 0;
            (void 0 === t || 0 === t.length) && (t = [{cursor: null}]);
            for (var n = 0, o = t.length; o > n; n++) {
                var r = this.getPixelPosition(t[n].cursor, !0);
                if (!((r.top > e.height + e.offset || r.top < 0) && n > 1)) {
                    var s = (this.cursors[i++] || this.addCursor()).style;
                    this.drawCursor ? this.drawCursor(s, r, e, t[n], this.session) : (s.left = r.left + "px", s.top = r.top + "px", s.width = e.characterWidth + "px", s.height = e.lineHeight + "px")
                }
            }
            for (; this.cursors.length > i; )
                this.removeCursor();
            var a = this.session.getOverwrite();
            this.$setOverwrite(a), this.$pixelPos = r, this.restartTimer()
        }, this.drawCursor = null, this.$setOverwrite = function(e) {
            e != this.overwrite && (this.overwrite = e, e ? i.addCssClass(this.element, "ace_overwrite-cursors") : i.removeCssClass(this.element, "ace_overwrite-cursors"))
        }, this.destroy = function() {
            clearInterval(this.intervalId), clearTimeout(this.timeoutId)
        }
    }).call(o.prototype), t.Cursor = o
}), define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var n = e("./lib/oop"), i = e("./lib/dom"), o = e("./lib/event"), r = e("./lib/event_emitter").EventEmitter, s = function(e) {
        this.element = i.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = i.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, o.addListener(this.element, "scroll", this.onScroll.bind(this)), o.addListener(this.element, "mousedown", o.preventDefault)
    };
    (function() {
        n.implement(this, r), this.setVisible = function(e) {
            this.element.style.display = e ? "" : "none", this.isVisible = e
        }
    }).call(s.prototype);
    var a = function(e, t) {
        s.call(this, e), this.scrollTop = 0, t.$scrollbarWidth = this.width = i.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px"
    };
    n.inherits(a, s), function() {
        this.classSuffix = "-v", this.onScroll = function() {
            this.skipEvent || (this.scrollTop = this.element.scrollTop, this._emit("scroll", {data: this.scrollTop})), this.skipEvent = !1
        }, this.getWidth = function() {
            return this.isVisible ? this.width : 0
        }, this.setHeight = function(e) {
            this.element.style.height = e + "px"
        }, this.setInnerHeight = function(e) {
            this.inner.style.height = e + "px"
        }, this.setScrollHeight = function(e) {
            this.inner.style.height = e + "px"
        }, this.setScrollTop = function(e) {
            this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = this.element.scrollTop = e)
        }
    }.call(a.prototype);
    var l = function(e, t) {
        s.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
    };
    n.inherits(l, s), function() {
        this.classSuffix = "-h", this.onScroll = function() {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {data: this.scrollLeft})), this.skipEvent = !1
        }, this.getHeight = function() {
            return this.isVisible ? this.height : 0
        }, this.setWidth = function(e) {
            this.element.style.width = e + "px"
        }, this.setInnerWidth = function(e) {
            this.inner.style.width = e + "px"
        }, this.setScrollWidth = function(e) {
            this.inner.style.width = e + "px"
        }, this.setScrollLeft = function(e) {
            this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e)
        }
    }.call(l.prototype), t.ScrollBar = a, t.ScrollBarV = a, t.ScrollBarH = l, t.VScrollBar = a, t.HScrollBar = l
}), define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(e, t) {
    "use strict";
    var n = e("./lib/event"), i = function(e, t) {
        this.onRender = e, this.pending = !1, this.changes = 0, this.window = t || window
    };
    (function() {
        this.schedule = function(e) {
            if (this.changes = this.changes | e, !this.pending && this.changes) {
                this.pending = !0;
                var t = this;
                n.nextFrame(function() {
                    t.pending = !1;
                    for (var e; e = t.changes; )
                        t.changes = 0, t.onRender(e)
                }, this.window)
            }
        }
    }).call(i.prototype), t.RenderLoop = i
}), define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function(e, t) {
    var n = e("../lib/oop"), i = e("../lib/dom"), o = e("../lib/lang"), r = e("../lib/useragent"), s = e("../lib/event_emitter").EventEmitter, a = 0, l = t.FontMetrics = function(e) {
        this.el = i.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = i.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = i.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), a || this.$testFractionalRect(), this.$measureNode.innerHTML = o.stringRepeat("X", a), this.$characterSize = {width: 0,height: 0}, this.checkForSizeChanges()
    };
    (function() {
        n.implement(this, s), this.$characterSize = {width: 0,height: 0}, this.$testFractionalRect = function() {
            var e = i.createElement("div");
            this.$setMeasureNodeStyles(e.style), e.style.width = "0.2px", document.documentElement.appendChild(e);
            var t = e.getBoundingClientRect().width;
            a = t > 0 && 1 > t ? 50 : 100, e.parentNode.removeChild(e)
        }, this.$setMeasureNodeStyles = function(e, t) {
            e.width = e.height = "auto", e.left = e.top = "0px", e.visibility = "hidden", e.position = "absolute", e.whiteSpace = "pre", r.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible"
        }, this.checkForSizeChanges = function() {
            var e = this.$measureSizes();
            if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                this.$measureNode.style.fontWeight = "bold";
                var t = this.$measureSizes();
                this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {data: e})
            }
        }, this.$pollSizeChanges = function() {
            if (this.$pollSizeChangesTimer)
                return this.$pollSizeChangesTimer;
            var e = this;
            return this.$pollSizeChangesTimer = setInterval(function() {
                e.checkForSizeChanges()
            }, 500)
        }, this.setPolling = function(e) {
            e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && this.$pollSizeChangesTimer
        }, this.$measureSizes = function() {
            if (50 === a) {
                var e = null;
                try {
                    e = this.$measureNode.getBoundingClientRect()
                } catch (t) {
                    e = {width: 0,height: 0}
                }
                var n = {height: e.height,width: e.width / a}
            } else
                var n = {height: this.$measureNode.clientHeight,width: this.$measureNode.clientWidth / a};
            return 0 === n.width || 0 === n.height ? null : n
        }, this.$measureCharWidth = function(e) {
            this.$main.innerHTML = o.stringRepeat(e, a);
            var t = this.$main.getBoundingClientRect();
            return t.width / a
        }, this.getCharacterWidth = function(e) {
            var t = this.charSizes[e];
            return void 0 === t && (this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t
        }, this.destroy = function() {
            clearInterval(this.$pollSizeChangesTimer), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
        }
    }).call(l.prototype)
}), define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/lib/useragent", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var n = e("./lib/oop"), i = e("./lib/dom"), o = e("./config"), r = e("./lib/useragent"), s = e("./layer/gutter").Gutter, a = e("./layer/marker").Marker, l = e("./layer/text").Text, c = e("./layer/cursor").Cursor, h = e("./scrollbar").HScrollBar, u = e("./scrollbar").VScrollBar, d = e("./renderloop").RenderLoop, g = e("./layer/font_metrics").FontMetrics, f = e("./lib/event_emitter").EventEmitter, m = '.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}';
    i.importCssString(m, "ace_editor");
    var p = function(e, t) {
        var n = this;
        this.container = e || i.createElement("div"), this.$keepTextAreaAtCursor = !r.isOldIE, i.addCssClass(this.container, "ace_editor"), this.setTheme(t), this.$gutter = i.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.scroller = i.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = i.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new s(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new a(this.content);
        var f = this.$textLayer = new l(this.content);
        this.canvas = f.element, this.$markerFront = new a(this.content), this.$cursorLayer = new c(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new u(this.container, this), this.scrollBarH = new h(this.container, this), this.scrollBarV.addEventListener("scroll", function(e) {
            n.$scrollAnimation || n.session.setScrollTop(e.data - n.scrollMargin.top)
        }), this.scrollBarH.addEventListener("scroll", function(e) {
            n.$scrollAnimation || n.session.setScrollLeft(e.data - n.scrollMargin.left)
        }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {row: 0,column: 0}, this.$fontMetrics = new g(this.container, 500), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", function(e) {
            n.updateCharacterSize(), n.onResize(!0, n.gutterWidth, n.$size.width, n.$size.height), n._signal("changeCharacterSize", e)
        }), this.$size = {width: 0,height: 0,scrollerHeight: 0,scrollerWidth: 0,$dirty: !0}, this.layerConfig = {width: 1,padding: 0,firstRow: 0,firstRowScreen: 0,lastRow: 0,lineHeight: 0,characterWidth: 0,minHeight: 1,maxHeight: 1,offset: 0,height: 1,gutterOffset: 1}, this.scrollMargin = {left: 0,right: 0,top: 0,bottom: 0,v: 0,h: 0}, this.$loop = new d(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), o.resetOptions(this), o._emit("renderer", this)
    };
    (function() {
        this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, n.implement(this, f), this.updateCharacterSize = function() {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin()
        }, this.setSession = function(e) {
            this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e), e && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
        }, this.updateLines = function(e, t, n) {
            if (void 0 === t && (t = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {firstRow: e,lastRow: t}, this.$changedLines.lastRow < this.layerConfig.firstRow) {
                if (!n)
                    return;
                this.$changedLines.lastRow = this.layerConfig.lastRow
            }
            this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
        }, this.onChangeNewLineMode = function() {
            this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar()
        }, this.onChangeTabSize = function() {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
        }, this.updateText = function() {
            this.$loop.schedule(this.CHANGE_TEXT)
        }, this.updateFull = function(e) {
            e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
        }, this.updateFontSize = function() {
            this.$textLayer.checkForSizeChanges()
        }, this.$changes = 0, this.$updateSizeAsync = function() {
            this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
        }, this.onResize = function(e, t, n, i) {
            if (!(this.resizing > 2)) {
                this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
                var o = this.container;
                i || (i = o.clientHeight || o.scrollHeight), n || (n = o.clientWidth || o.scrollWidth);
                var r = this.$updateCachedSize(e, t, n, i);
                if (!this.$size.scrollerHeight || !n && !i)
                    return this.resizing = 0;
                e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(r | this.$changes, !0) : this.$loop.schedule(r | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null
            }
        }, this.$updateCachedSize = function(e, t, n, i) {
            i -= this.$extraHeight || 0;
            var o = 0, r = this.$size, s = {width: r.width,height: r.height,scrollerHeight: r.scrollerHeight,scrollerWidth: r.scrollerWidth};
            return i && (e || r.height != i) && (r.height = i, o |= this.CHANGE_SIZE, r.scrollerHeight = r.height, this.$horizScroll && (r.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", o |= this.CHANGE_SCROLL), n && (e || r.width != n) && (o |= this.CHANGE_SIZE, r.width = n, null == t && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, this.scrollBarH.element.style.left = this.scroller.style.left = t + "px", r.scrollerWidth = Math.max(0, n - t - this.scrollBarV.getWidth()), this.scrollBarH.element.style.right = this.scroller.style.right = this.scrollBarV.getWidth() + "px", this.scroller.style.bottom = this.scrollBarH.getHeight() + "px", (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (o |= this.CHANGE_FULL)), r.$dirty = !n || !i, o && this._signal("resize", s), o
        }, this.onGutterResize = function() {
            var e = this.$showGutter ? this.$gutter.offsetWidth : 0;
            e != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, e, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(), this.$loop.schedule(this.CHANGE_MARKER))
        }, this.adjustWrapLimit = function() {
            var e = this.$size.scrollerWidth - 2 * this.$padding, t = Math.floor(e / this.characterWidth);
            return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
        }, this.setAnimatedScroll = function(e) {
            this.setOption("animatedScroll", e)
        }, this.getAnimatedScroll = function() {
            return this.$animatedScroll
        }, this.setShowInvisibles = function(e) {
            this.setOption("showInvisibles", e)
        }, this.getShowInvisibles = function() {
            return this.getOption("showInvisibles")
        }, this.getDisplayIndentGuides = function() {
            return this.getOption("displayIndentGuides")
        }, this.setDisplayIndentGuides = function(e) {
            this.setOption("displayIndentGuides", e)
        }, this.setShowPrintMargin = function(e) {
            this.setOption("showPrintMargin", e)
        }, this.getShowPrintMargin = function() {
            return this.getOption("showPrintMargin")
        }, this.setPrintMarginColumn = function(e) {
            this.setOption("printMarginColumn", e)
        }, this.getPrintMarginColumn = function() {
            return this.getOption("printMarginColumn")
        }, this.getShowGutter = function() {
            return this.getOption("showGutter")
        }, this.setShowGutter = function(e) {
            return this.setOption("showGutter", e)
        }, this.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets")
        }, this.setFadeFoldWidgets = function(e) {
            this.setOption("fadeFoldWidgets", e)
        }, this.setHighlightGutterLine = function(e) {
            this.setOption("highlightGutterLine", e)
        }, this.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine")
        }, this.$updateGutterLineHighlight = function() {
            var e = this.$cursorLayer.$pixelPos, t = this.layerConfig.lineHeight;
            if (this.session.getUseWrapMode()) {
                var n = this.session.selection.getCursor();
                n.column = 0, e = this.$cursorLayer.getPixelPosition(n, !0), t *= this.session.getRowLength(n.row)
            }
            this.$gutterLineHighlight.style.top = e.top - this.layerConfig.offset + "px", this.$gutterLineHighlight.style.height = t + "px"
        }, this.$updatePrintMargin = function() {
            if (this.$showPrintMargin || this.$printMarginEl) {
                if (!this.$printMarginEl) {
                    var e = i.createElement("div");
                    e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = i.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
                }
                var t = this.$printMarginEl.style;
                t.left = this.characterWidth * this.$printMarginColumn + this.$padding + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && -1 == this.session.$wrap && this.adjustWrapLimit()
            }
        }, this.getContainerElement = function() {
            return this.container
        }, this.getMouseEventTarget = function() {
            return this.content
        }, this.getTextAreaContainer = function() {
            return this.container
        }, this.$moveTextAreaToCursor = function() {
            if (this.$keepTextAreaAtCursor) {
                var e = this.layerConfig, t = this.$cursorLayer.$pixelPos.top, n = this.$cursorLayer.$pixelPos.left;
                t -= e.offset;
                var i = this.textarea.style, o = this.lineHeight;
                if (0 > t || t > e.height - o)
                    return void (i.top = i.left = "0");
                var r = this.characterWidth;
                if (this.$composition) {
                    var s = this.textarea.value.replace(/^\x01+/, "");
                    r *= this.session.$getStringScreenWidth(s)[0] + 2, o += 2
                }
                n -= this.scrollLeft, n > this.$size.scrollerWidth - r && (n = this.$size.scrollerWidth - r), n += this.gutterWidth, i.height = o + "px", i.width = r + "px", i.left = Math.min(n, this.$size.scrollerWidth - r) + "px", i.top = Math.min(t, this.$size.height - o) + "px"
            }
        }, this.getFirstVisibleRow = function() {
            return this.layerConfig.firstRow
        }, this.getFirstFullyVisibleRow = function() {
            return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
        }, this.getLastFullyVisibleRow = function() {
            var e = Math.floor((this.layerConfig.height + this.layerConfig.offset) / this.layerConfig.lineHeight);
            return this.layerConfig.firstRow - 1 + e
        }, this.getLastVisibleRow = function() {
            return this.layerConfig.lastRow
        }, this.$padding = null, this.setPadding = function(e) {
            this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
        }, this.setScrollMargin = function(e, t, n, i) {
            var o = this.scrollMargin;
            o.top = 0 | e, o.bottom = 0 | t, o.right = 0 | i, o.left = 0 | n, o.v = o.top + o.bottom, o.h = o.left + o.right, o.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-o.top), this.updateFull()
        }, this.getHScrollBarAlwaysVisible = function() {
            return this.$hScrollBarAlwaysVisible
        }, this.setHScrollBarAlwaysVisible = function(e) {
            this.setOption("hScrollBarAlwaysVisible", e)
        }, this.getVScrollBarAlwaysVisible = function() {
            return this.$vScrollBarAlwaysVisible
        }, this.setVScrollBarAlwaysVisible = function(e) {
            this.setOption("vScrollBarAlwaysVisible", e)
        }, this.$updateScrollBarV = function() {
            var e = this.layerConfig.maxHeight, t = this.$size.scrollerHeight;
            !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
        }, this.$updateScrollBarH = function() {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
        }, this.$frozen = !1, this.freeze = function() {
            this.$frozen = !0
        }, this.unfreeze = function() {
            this.$frozen = !1
        }, this.$renderChanges = function(e, t) {
            if (this.$changes && (e |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !e && !t)
                return void (this.$changes |= e);
            if (this.$size.$dirty)
                return this.$changes |= e, this.onResize(!0);
            this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender");
            var n = this.layerConfig;
            if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                if (e |= this.$computeLayerConfig(), n.firstRow != this.layerConfig.firstRow && n.firstRowScreen == this.layerConfig.firstRowScreen) {
                    var i = this.scrollTop + (n.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                    i > 0 && (this.scrollTop = i, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig())
                }
                n = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), this.$gutterLayer.element.style.marginTop = -n.offset + "px", this.content.style.marginTop = -n.offset + "px", this.content.style.width = n.width + 2 * this.$padding + "px", this.content.style.height = n.minHeight + "px"
            }
            return e & this.CHANGE_H_SCROLL && (this.content.style.marginLeft = -this.scrollLeft + "px", this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), e & this.CHANGE_FULL ? (this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight(), void this._signal("afterRender")) : e & this.CHANGE_SCROLL ? (e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(n) : this.$textLayer.scrollLines(n), this.$showGutter && this.$gutterLayer.update(n), this.$markerBack.update(n), this.$markerFront.update(n), this.$cursorLayer.update(n), this.$highlightGutterLine && this.$updateGutterLineHighlight(), this.$moveTextAreaToCursor(), void this._signal("afterRender")) : (e & this.CHANGE_TEXT ? (this.$textLayer.update(n), this.$showGutter && this.$gutterLayer.update(n)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(n) : (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) && this.$showGutter && this.$gutterLayer.update(n), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(n), this.$moveTextAreaToCursor(), this.$highlightGutterLine && this.$updateGutterLineHighlight()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(n), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(n), void this._signal("afterRender"))
        }, this.$autosize = function() {
            var e = this.session.getScreenLength() * this.lineHeight, t = this.$maxLines * this.lineHeight, n = Math.max((this.$minLines || 1) * this.lineHeight, Math.min(t, e)) + this.scrollMargin.v + (this.$extraHeight || 0), i = e > t;
            if (n != this.desiredHeight || this.$size.height != this.desiredHeight || i != this.$vScroll) {
                i != this.$vScroll && (this.$vScroll = i, this.scrollBarV.setVisible(i));
                var o = this.container.clientWidth;
                this.container.style.height = n + "px", this.$updateCachedSize(!0, this.$gutterWidth, o, n), this.desiredHeight = n, this._signal("autosize")
            }
        }, this.$computeLayerConfig = function() {
            this.$maxLines && this.lineHeight > 1 && this.$autosize();
            var e = this.session, t = this.$size, n = t.height <= 2 * this.lineHeight, i = this.session.getScreenLength(), o = i * this.lineHeight, r = this.scrollTop % this.lineHeight, s = t.scrollerHeight + this.lineHeight, a = this.$getLongestLine(), l = !n && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - a - 2 * this.$padding < 0), c = this.$horizScroll !== l;
            c && (this.$horizScroll = l, this.scrollBarH.setVisible(l));
            var h = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
            o += h, this.session.setScrollTop(Math.max(-this.scrollMargin.top, Math.min(this.scrollTop, o - t.scrollerHeight + this.scrollMargin.bottom))), this.session.setScrollLeft(Math.max(-this.scrollMargin.left, Math.min(this.scrollLeft, a + 2 * this.$padding - t.scrollerWidth + this.scrollMargin.right)));
            var u = !n && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - o + h < 0 || this.scrollTop), d = this.$vScroll !== u;
            d && (this.$vScroll = u, this.scrollBarV.setVisible(u));
            var g, f, m = Math.ceil(s / this.lineHeight) - 1, p = Math.max(0, Math.round((this.scrollTop - r) / this.lineHeight)), v = p + m, A = this.lineHeight;
            p = e.screenToDocumentRow(p, 0);
            var C = e.getFoldLine(p);
            C && (p = C.start.row), g = e.documentToScreenRow(p, 0), f = e.getRowLength(p) * A, v = Math.min(e.screenToDocumentRow(v, 0), e.getLength() - 1), s = t.scrollerHeight + e.getRowLength(v) * A + f, r = this.scrollTop - g * A;
            var w = 0;
            return this.layerConfig.width != a && (w = this.CHANGE_H_SCROLL), (c || d) && (w = this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), d && (a = this.$getLongestLine())), this.layerConfig = {width: a,padding: this.$padding,firstRow: p,firstRowScreen: g,lastRow: v,lineHeight: A,characterWidth: this.characterWidth,minHeight: s,maxHeight: o,offset: r,gutterOffset: Math.max(0, Math.ceil((r + t.height - t.scrollerHeight) / A)),height: this.$size.scrollerHeight}, w
        }, this.$updateLines = function() {
            var e = this.$changedLines.firstRow, t = this.$changedLines.lastRow;
            this.$changedLines = null;
            var n = this.layerConfig;
            return e > n.lastRow + 1 || t < n.firstRow ? void 0 : 1 / 0 === t ? (this.$showGutter && this.$gutterLayer.update(n), void this.$textLayer.update(n)) : (this.$textLayer.updateLines(n, e, t), !0)
        }, this.$getLongestLine = function() {
            var e = this.session.getScreenWidth();
            return this.showInvisibles && !this.session.$useWrapMode && (e += 1), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
        }, this.updateFrontMarkers = function() {
            this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
        }, this.updateBackMarkers = function() {
            this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
        }, this.addGutterDecoration = function(e, t) {
            this.$gutterLayer.addGutterDecoration(e, t)
        }, this.removeGutterDecoration = function(e, t) {
            this.$gutterLayer.removeGutterDecoration(e, t)
        }, this.updateBreakpoints = function() {
            this.$loop.schedule(this.CHANGE_GUTTER)
        }, this.setAnnotations = function(e) {
            this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
        }, this.updateCursor = function() {
            this.$loop.schedule(this.CHANGE_CURSOR)
        }, this.hideCursor = function() {
            this.$cursorLayer.hideCursor()
        }, this.showCursor = function() {
            this.$cursorLayer.showCursor()
        }, this.scrollSelectionIntoView = function(e, t, n) {
            this.scrollCursorIntoView(e, n), this.scrollCursorIntoView(t, n)
        }, this.scrollCursorIntoView = function(e, t, n) {
            if (0 !== this.$size.scrollerHeight) {
                var i = this.$cursorLayer.getPixelPosition(e), o = i.left, r = i.top, s = n && n.top || 0, a = n && n.bottom || 0, l = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                l + s > r ? (t && (r -= t * this.$size.scrollerHeight), 0 === r && (r = -this.scrollMargin.top), this.session.setScrollTop(r)) : l + this.$size.scrollerHeight - a < r + this.lineHeight && (t && (r += t * this.$size.scrollerHeight), this.session.setScrollTop(r + this.lineHeight - this.$size.scrollerHeight));
                var c = this.scrollLeft;
                c > o ? (o < this.$padding + 2 * this.layerConfig.characterWidth && (o = -this.scrollMargin.left), this.session.setScrollLeft(o)) : c + this.$size.scrollerWidth < o + this.characterWidth ? this.session.setScrollLeft(Math.round(o + this.characterWidth - this.$size.scrollerWidth)) : c <= this.$padding && o - c < this.characterWidth && this.session.setScrollLeft(0)
            }
        }, this.getScrollTop = function() {
            return this.session.getScrollTop()
        }, this.getScrollLeft = function() {
            return this.session.getScrollLeft()
        }, this.getScrollTopRow = function() {
            return this.scrollTop / this.lineHeight
        }, this.getScrollBottomRow = function() {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
        }, this.scrollToRow = function(e) {
            this.session.setScrollTop(e * this.lineHeight)
        }, this.alignCursor = function(e, t) {
            "number" == typeof e && (e = {row: e,column: 0});
            var n = this.$cursorLayer.getPixelPosition(e), i = this.$size.scrollerHeight - this.lineHeight, o = n.top - i * (t || 0);
            return this.session.setScrollTop(o), o
        }, this.STEPS = 8, this.$calcSteps = function(e, t) {
            var n = 0, i = this.STEPS, o = [], r = function(e, t, n) {
                return n * (Math.pow(e - 1, 3) + 1) + t
            };
            for (n = 0; i > n; ++n)
                o.push(r(n / this.STEPS, e, t - e));
            return o
        }, this.scrollToLine = function(e, t, n, i) {
            var o = this.$cursorLayer.getPixelPosition({row: e,column: 0}), r = o.top;
            t && (r -= this.$size.scrollerHeight / 2);
            var s = this.scrollTop;
            this.session.setScrollTop(r), n !== !1 && this.animateScrolling(s, i)
        }, this.animateScrolling = function(e, t) {
            var n = this.scrollTop;
            if (this.$animatedScroll) {
                var i = this;
                if (e != n) {
                    if (this.$scrollAnimation) {
                        var o = this.$scrollAnimation.steps;
                        if (o.length && (e = o[0], e == n))
                            return
                    }
                    var r = i.$calcSteps(e, n);
                    this.$scrollAnimation = {from: e,to: n,steps: r}, clearInterval(this.$timer), i.session.setScrollTop(r.shift()), i.session.$scrollTop = n, this.$timer = setInterval(function() {
                        r.length ? (i.session.setScrollTop(r.shift()), i.session.$scrollTop = n) : null != n ? (i.session.$scrollTop = -1, i.session.setScrollTop(n), n = null) : (i.$timer = clearInterval(i.$timer), i.$scrollAnimation = null, t && t())
                    }, 10)
                }
            }
        }, this.scrollToY = function(e) {
            this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
        }, this.scrollToX = function(e) {
            this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
        }, this.scrollTo = function(e, t) {
            this.session.setScrollTop(t), this.session.setScrollLeft(t)
        }, this.scrollBy = function(e, t) {
            t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
        }, this.isScrollableBy = function(e, t) {
            return 0 > t && this.session.getScrollTop() >= 1 - this.scrollMargin.top ? !0 : t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom ? !0 : 0 > e && this.session.getScrollLeft() >= 1 - this.scrollMargin.left ? !0 : e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right ? !0 : void 0
        }, this.pixelToScreenCoordinates = function(e, t) {
            var n = this.scroller.getBoundingClientRect(), i = (e + this.scrollLeft - n.left - this.$padding) / this.characterWidth, o = Math.floor((t + this.scrollTop - n.top) / this.lineHeight), r = Math.round(i);
            return {row: o,column: r,side: i - r > 0 ? 1 : -1}
        }, this.screenToTextCoordinates = function(e, t) {
            var n = this.scroller.getBoundingClientRect(), i = Math.round((e + this.scrollLeft - n.left - this.$padding) / this.characterWidth), o = (t + this.scrollTop - n.top) / this.lineHeight;
            return this.session.screenToDocumentPosition(o, Math.max(i, 0))
        }, this.textToScreenCoordinates = function(e, t) {
            var n = this.scroller.getBoundingClientRect(), i = this.session.documentToScreenPosition(e, t), o = this.$padding + Math.round(i.column * this.characterWidth), r = i.row * this.lineHeight;
            return {pageX: n.left + o - this.scrollLeft,pageY: n.top + r - this.scrollTop}
        }, this.visualizeFocus = function() {
            i.addCssClass(this.container, "ace_focus")
        }, this.visualizeBlur = function() {
            i.removeCssClass(this.container, "ace_focus")
        }, this.showComposition = function() {
            this.$composition || (this.$composition = {keepTextAreaAtCursor: this.$keepTextAreaAtCursor,cssText: this.textarea.style.cssText}), this.$keepTextAreaAtCursor = !0, i.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor()
        }, this.setCompositionText = function() {
            this.$moveTextAreaToCursor()
        }, this.hideComposition = function() {
            this.$composition && (i.removeCssClass(this.textarea, "ace_composition"), this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor, this.textarea.style.cssText = this.$composition.cssText, this.$composition = null)
        }, this.setTheme = function(e, t) {
            function n(n) {
                if (r.$themeId != e)
                    return t && t();
                if (n.cssClass) {
                    i.importCssString(n.cssText, n.cssClass, r.container.ownerDocument), r.theme && i.removeCssClass(r.container, r.theme.cssClass);
                    var o = "padding" in n ? n.padding : "padding" in (r.theme || {}) ? 4 : r.$padding;
                    r.$padding && o != r.$padding && r.setPadding(o), r.$theme = n.cssClass, r.theme = n, i.addCssClass(r.container, n.cssClass), i.setCssClass(r.container, "ace_dark", n.isDark), r.$size && (r.$size.width = 0, r.$updateSizeAsync()), r._dispatchEvent("themeLoaded", {theme: n}), t && t()
                }
            }
            var r = this;
            if (this.$themeId = e, r._dispatchEvent("themeChange", {theme: e}), e && "string" != typeof e)
                n(e);
            else {
                var s = e || this.$options.theme.initialValue;
                o.loadModule(["theme", s], n)
            }
        }, this.getTheme = function() {
            return this.$themeId
        }, this.setStyle = function(e, t) {
            i.setCssClass(this.container, e, t !== !1)
        }, this.unsetStyle = function(e) {
            i.removeCssClass(this.container, e)
        }, this.setCursorStyle = function(e) {
            this.scroller.style.cursor != e && (this.scroller.style.cursor = e)
        }, this.setMouseCursor = function(e) {
            this.scroller.style.cursor = e
        }, this.destroy = function() {
            this.$textLayer.destroy(), this.$cursorLayer.destroy()
        }
    }).call(p.prototype), o.defineOptions(p.prototype, "renderer", {animatedScroll: {initialValue: !1},showInvisibles: {set: function(e) {
                this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
            },initialValue: !1},showPrintMargin: {set: function() {
                this.$updatePrintMargin()
            },initialValue: !0},printMarginColumn: {set: function() {
                this.$updatePrintMargin()
            },initialValue: 80},printMargin: {set: function(e) {
                "number" == typeof e && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin()
            },get: function() {
                return this.$showPrintMargin && this.$printMarginColumn
            }},showGutter: {set: function(e) {
                this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
            },initialValue: !0},fadeFoldWidgets: {set: function(e) {
                i.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
            },initialValue: !1},showFoldWidgets: {set: function(e) {
                this.$gutterLayer.setShowFoldWidgets(e)
            },initialValue: !0},showLineNumbers: {set: function(e) {
                this.$gutterLayer.setShowLineNumbers(e), this.$loop.schedule(this.CHANGE_GUTTER)
            },initialValue: !0},displayIndentGuides: {set: function(e) {
                this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
            },initialValue: !0},highlightGutterLine: {set: function(e) {
                return this.$gutterLineHighlight ? (this.$gutterLineHighlight.style.display = e ? "" : "none", void (this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight())) : (this.$gutterLineHighlight = i.createElement("div"), this.$gutterLineHighlight.className = "ace_gutter-active-line", void this.$gutter.appendChild(this.$gutterLineHighlight))
            },initialValue: !1,value: !0},hScrollBarAlwaysVisible: {set: function() {
                this.$hScrollBarAlwaysVisible && this.$horizScroll || this.$loop.schedule(this.CHANGE_SCROLL)
            },initialValue: !1},vScrollBarAlwaysVisible: {set: function() {
                this.$vScrollBarAlwaysVisible && this.$vScroll || this.$loop.schedule(this.CHANGE_SCROLL)
            },initialValue: !1},fontSize: {set: function(e) {
                "number" == typeof e && (e += "px"), this.container.style.fontSize = e, this.updateFontSize()
            },initialValue: 12},fontFamily: {set: function(e) {
                this.container.style.fontFamily = e, this.updateFontSize()
            }},maxLines: {set: function() {
                this.updateFull()
            }},minLines: {set: function() {
                this.updateFull()
            }},scrollPastEnd: {set: function(e) {
                e = +e || 0, this.$scrollPastEnd != e && (this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL))
            },initialValue: 0,handlesSet: !0},fixedWidthGutter: {set: function(e) {
                this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER)
            }},theme: {set: function(e) {
                this.setTheme(e)
            },get: function() {
                return this.$themeId || this.theme
            },initialValue: "./theme/textmate",handlesSet: !0}}), t.VirtualRenderer = p
}), define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("../lib/net"), o = e("../lib/event_emitter").EventEmitter, r = e("../config"), s = function(t, n, i, o) {
        if (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl), r.get("packaged") || !e.toUrl)
            o = o || r.moduleUrl(n, "worker");
        else {
            var s = this.$normalizePath;
            o = o || s(e.toUrl("ace/worker/worker.js", null, "_"));
            var a = {};
            t.forEach(function(t) {
                a[t] = s(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
            })
        }
        try {
            this.$worker = new Worker(o)
        } catch (l) {
            if (!(l instanceof window.DOMException))
                throw l;
            var c = this.$workerBlob(o), h = window.URL || window.webkitURL, u = h.createObjectURL(c);
            this.$worker = new Worker(u), h.revokeObjectURL(u)
        }
        this.$worker.postMessage({init: !0,tlns: a,module: n,classname: i}), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
    };
    (function() {
        n.implement(this, o), this.onMessage = function(e) {
            var t = e.data;
            switch (t.type) {
                case "event":
                    this._signal(t.name, {data: t.data});
                    break;
                case "call":
                    var n = this.callbacks[t.id];
                    n && (n(t.data), delete this.callbacks[t.id]);
                    break;
                case "error":
                    this.reportError(t.data);
                    break;
                case "log":
                    window.console && console.log && console.log.apply(console, t.data)
            }
        }, this.reportError = function(e) {
            window.console && console.error && console.error(e)
        }, this.$normalizePath = function(e) {
            return i.qualifyURL(e)
        }, this.terminate = function() {
            this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null
        }, this.send = function(e, t) {
            this.$worker.postMessage({command: e,args: t})
        }, this.call = function(e, t, n) {
            if (n) {
                var i = this.callbackId++;
                this.callbacks[i] = n, t.push(i)
            }
            this.send(e, t)
        }, this.emit = function(e, t) {
            try {
                this.$worker.postMessage({event: e,data: {data: t.data}})
            } catch (n) {
                console.error(n.stack)
            }
        }, this.attachToDocument = function(e) {
            this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener)
        }, this.changeListener = function(e) {
            this.deltaQueue ? this.deltaQueue.push(e.data) : (this.deltaQueue = [e.data], setTimeout(this.$sendDeltaQueue, 0))
        }, this.$sendDeltaQueue = function() {
            var e = this.deltaQueue;
            e && (this.deltaQueue = null, e.length > 20 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {data: e}))
        }, this.$workerBlob = function(e) {
            var t = "importScripts('" + i.qualifyURL(e) + "');";
            try {
                return new Blob([t], {type: "application/javascript"})
            } catch (n) {
                var o = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, r = new o;
                return r.append(t), r.getBlob("application/javascript")
            }
        }
    }).call(s.prototype);
    var a = function(e, t, n) {
        this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.callbackId = 1, this.callbacks = {}, this.messageBuffer = [];
        var i = null, s = !1, a = Object.create(o), l = this;
        this.$worker = {}, this.$worker.terminate = function() {
        }, this.$worker.postMessage = function(e) {
            l.messageBuffer.push(e), i && (s ? setTimeout(c) : c())
        }, this.setEmitSync = function(e) {
            s = e
        };
        var c = function() {
            var e = l.messageBuffer.shift();
            e.command ? i[e.command].apply(i, e.args) : e.event && a._signal(e.event, e.data)
        };
        a.postMessage = function(e) {
            l.onMessage({data: e})
        }, a.callback = function(e, t) {
            this.postMessage({type: "call",id: t,data: e})
        }, a.emit = function(e, t) {
            this.postMessage({type: "event",name: e,data: t})
        }, r.loadModule(["worker", t], function(e) {
            for (i = new e[n](a); l.messageBuffer.length; )
                c()
        })
    };
    a.prototype = s.prototype, t.UIWorkerClient = a, t.WorkerClient = s
}), define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(e, t) {
    "use strict";
    var n = e("./range").Range, i = e("./lib/event_emitter").EventEmitter, o = e("./lib/oop"), r = function(e, t, n, i, o, r) {
        var s = this;
        this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = o, this.othersClass = r, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = i, this.$onCursorChange = function() {
            setTimeout(function() {
                s.onCursorChange()
            })
        }, this.$pos = n;
        var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {length: -1};
        this.$undoStackDepth = a.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
    };
    (function() {
        o.implement(this, i), this.setup = function() {
            var e = this, t = this.doc, i = this.session, o = this.$pos;
            this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = t.createAnchor(o.row, o.column), this.markerId = i.addMarker(new n(o.row, o.column, o.row, o.column + this.length), this.mainClass, null, !1), this.pos.on("change", function(t) {
                i.removeMarker(e.markerId), e.markerId = i.addMarker(new n(t.value.row, t.value.column, t.value.row, t.value.column + e.length), e.mainClass, null, !1)
            }), this.others = [], this.$others.forEach(function(n) {
                var i = t.createAnchor(n.row, n.column);
                e.others.push(i)
            }), i.setUndoSelect(!1)
        }, this.showOtherMarkers = function() {
            if (!this.othersActive) {
                var e = this.session, t = this;
                this.othersActive = !0, this.others.forEach(function(i) {
                    i.markerId = e.addMarker(new n(i.row, i.column, i.row, i.column + t.length), t.othersClass, null, !1), i.on("change", function(o) {
                        e.removeMarker(i.markerId), i.markerId = e.addMarker(new n(o.value.row, o.value.column, o.value.row, o.value.column + t.length), t.othersClass, null, !1)
                    })
                })
            }
        }, this.hideOtherMarkers = function() {
            if (this.othersActive) {
                this.othersActive = !1;
                for (var e = 0; e < this.others.length; e++)
                    this.session.removeMarker(this.others[e].markerId)
            }
        }, this.onUpdate = function(e) {
            var t = e.data, i = t.range;
            if (i.start.row === i.end.row && i.start.row === this.pos.row && !this.$updating) {
                this.$updating = !0;
                var o = "insertText" === t.action ? i.end.column - i.start.column : i.start.column - i.end.column;
                if (i.start.column >= this.pos.column && i.start.column <= this.pos.column + this.length + 1) {
                    var r = i.start.column - this.pos.column;
                    if (this.length += o, !this.session.$fromUndo) {
                        if ("insertText" === t.action)
                            for (var s = this.others.length - 1; s >= 0; s--) {
                                var a = this.others[s], l = {row: a.row,column: a.column + r};
                                a.row === i.start.row && i.start.column < a.column && (l.column += o), this.doc.insert(l, t.text)
                            }
                        else if ("removeText" === t.action)
                            for (var s = this.others.length - 1; s >= 0; s--) {
                                var a = this.others[s], l = {row: a.row,column: a.column + r};
                                a.row === i.start.row && i.start.column < a.column && (l.column += o), this.doc.remove(new n(l.row, l.column, l.row, l.column - o))
                            }
                        i.start.column === this.pos.column && "insertText" === t.action ? setTimeout(function() {
                            this.pos.setPosition(this.pos.row, this.pos.column - o);
                            for (var e = 0; e < this.others.length; e++) {
                                var t = this.others[e], n = {row: t.row,column: t.column - o};
                                t.row === i.start.row && i.start.column < t.column && (n.column += o), t.setPosition(n.row, n.column)
                            }
                        }.bind(this), 0) : i.start.column === this.pos.column && "removeText" === t.action && setTimeout(function() {
                            for (var e = 0; e < this.others.length; e++) {
                                var t = this.others[e];
                                t.row === i.start.row && i.start.column < t.column && t.setPosition(t.row, t.column - o)
                            }
                        }.bind(this), 0)
                    }
                    this.pos._emit("change", {value: this.pos});
                    for (var s = 0; s < this.others.length; s++)
                        this.others[s]._emit("change", {value: this.others[s]})
                }
                this.$updating = !1
            }
        }, this.onCursorChange = function(e) {
            if (!this.$updating && this.session) {
                var t = this.session.selection.getCursor();
                t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
            }
        }, this.detach = function() {
            this.session.removeMarker(this.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.pos.detach();
            for (var e = 0; e < this.others.length; e++)
                this.others[e].detach();
            this.session.setUndoSelect(!0), this.session = null
        }, this.cancel = function() {
            if (-1 === this.$undoStackDepth)
                throw Error("Canceling placeholders only supported with undo manager attached to session.");
            for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, n = 0; t > n; n++)
                e.undo(!0);
            this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
        }
    }).call(r.prototype), t.PlaceHolder = r
}), define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
    function n(e, t) {
        return e.row == t.row && e.column == t.column
    }
    function i(e) {
        var t = e.domEvent, i = t.altKey, s = t.shiftKey, a = t.ctrlKey, l = e.getAccelKey(), c = e.getButton();
        if (a && r.isMac && (c = t.button), e.editor.inMultiSelectMode && 2 == c)
            return void e.editor.textInput.onContextMenu(e.domEvent);
        if (!a && !i && !l)
            return void (0 === c && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode());
        if (0 === c) {
            var h, u = e.editor, d = u.selection, g = u.inMultiSelectMode, f = e.getDocumentPosition(), m = d.getCursor(), p = e.inSelection() || d.isEmpty() && n(f, m), v = e.x, A = e.y, C = function(e) {
                v = e.clientX, A = e.clientY
            }, w = u.session, F = u.renderer.pixelToScreenCoordinates(v, A), E = F;
            if (u.$mouseHandler.$enableJumpToDef)
                a && i || l && i ? h = "add" : i && (h = "block");
            else if (l && !i) {
                if (h = "add", !g && s)
                    return
            } else
                i && (h = "block");
            if (h && r.isMac && t.ctrlKey && u.$mouseHandler.cancelContextMenu(), "add" == h) {
                if (!g && p)
                    return;
                if (!g) {
                    var b = d.toOrientedRange();
                    u.addSelectionMarker(b)
                }
                var y = d.rangeList.rangeAtPoint(f);
                u.$blockScrolling++, u.inVirtualSelectionMode = !0, s && (y = null, b = d.ranges[0], u.removeSelectionMarker(b)), u.once("mouseup", function() {
                    var e = d.toOrientedRange();
                    y && e.isEmpty() && n(y.cursor, e.cursor) ? d.substractPoint(e.cursor) : (s ? d.substractPoint(b.cursor) : b && (u.removeSelectionMarker(b), d.addRange(b)), d.addRange(e)), u.$blockScrolling--, u.inVirtualSelectionMode = !1
                })
            } else if ("block" == h) {
                e.stop(), u.inVirtualSelectionMode = !0;
                var $, x = [], k = function() {
                    var e = u.renderer.pixelToScreenCoordinates(v, A), t = w.screenToDocumentPosition(e.row, e.column);
                    n(E, e) && n(t, d.lead) || (E = e, u.$blockScrolling++, u.selection.moveToPosition(t), u.renderer.scrollCursorIntoView(), u.removeSelectionMarkers(x), x = d.rectangularRangeBlock(E, F), u.$mouseHandler.$clickSelection && 1 == x.length && x[0].isEmpty() && (x[0] = u.$mouseHandler.$clickSelection.clone()), x.forEach(u.addSelectionMarker, u), u.updateSelectionMarkers(), u.$blockScrolling--)
                };
                u.$blockScrolling++, g && !l ? d.toSingleRange() : !g && l && ($ = d.toOrientedRange(), u.addSelectionMarker($)), s ? F = w.documentToScreenPosition(d.lead) : d.moveToPosition(f), u.$blockScrolling--, E = {row: -1,column: -1};
                var S = function() {
                    clearInterval(D), u.removeSelectionMarkers(x), x.length || (x = [d.toOrientedRange()]), u.$blockScrolling++, $ && (u.removeSelectionMarker($), d.toSingleRange($));
                    for (var e = 0; e < x.length; e++)
                        d.addRange(x[e]);
                    u.inVirtualSelectionMode = !1, u.$mouseHandler.$clickSelection = null, u.$blockScrolling--
                }, B = k;
                o.capture(u.container, C, S);
                var D = setInterval(function() {
                    B()
                }, 20);
                return e.preventDefault()
            }
        }
    }
    var o = e("../lib/event"), r = e("../lib/useragent");
    t.onMouseDown = i
}), define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(e, t) {
    t.defaultCommands = [{name: "addCursorAbove",exec: function(e) {
                e.selectMoreLines(-1)
            },bindKey: {win: "Ctrl-Alt-Up",mac: "Ctrl-Alt-Up"},scrollIntoView: "cursor",readonly: !0}, {name: "addCursorBelow",exec: function(e) {
                e.selectMoreLines(1)
            },bindKey: {win: "Ctrl-Alt-Down",mac: "Ctrl-Alt-Down"},scrollIntoView: "cursor",readonly: !0}, {name: "addCursorAboveSkipCurrent",exec: function(e) {
                e.selectMoreLines(-1, !0)
            },bindKey: {win: "Ctrl-Alt-Shift-Up",mac: "Ctrl-Alt-Shift-Up"},scrollIntoView: "cursor",readonly: !0}, {name: "addCursorBelowSkipCurrent",exec: function(e) {
                e.selectMoreLines(1, !0)
            },bindKey: {win: "Ctrl-Alt-Shift-Down",mac: "Ctrl-Alt-Shift-Down"},scrollIntoView: "cursor",readonly: !0}, {name: "selectMoreBefore",exec: function(e) {
                e.selectMore(-1)
            },bindKey: {win: "Ctrl-Alt-Left",mac: "Ctrl-Alt-Left"},scrollIntoView: "cursor",readonly: !0}, {name: "selectMoreAfter",exec: function(e) {
                e.selectMore(1)
            },bindKey: {win: "Ctrl-Alt-Right",mac: "Ctrl-Alt-Right"},scrollIntoView: "cursor",readonly: !0}, {name: "selectNextBefore",exec: function(e) {
                e.selectMore(-1, !0)
            },bindKey: {win: "Ctrl-Alt-Shift-Left",mac: "Ctrl-Alt-Shift-Left"},scrollIntoView: "cursor",readonly: !0}, {name: "selectNextAfter",exec: function(e) {
                e.selectMore(1, !0)
            },bindKey: {win: "Ctrl-Alt-Shift-Right",mac: "Ctrl-Alt-Shift-Right"},scrollIntoView: "cursor",readonly: !0}, {name: "splitIntoLines",exec: function(e) {
                e.multiSelect.splitIntoLines()
            },bindKey: {win: "Ctrl-Alt-L",mac: "Ctrl-Alt-L"},readonly: !0}, {name: "alignCursors",exec: function(e) {
                e.alignCursors()
            },bindKey: {win: "Ctrl-Alt-A",mac: "Ctrl-Alt-A"},scrollIntoView: "cursor"}, {name: "findAll",exec: function(e) {
                e.findAll()
            },bindKey: {win: "Ctrl-Alt-K",mac: "Ctrl-Alt-G"},scrollIntoView: "cursor",readonly: !0}], t.multiSelectCommands = [{name: "singleSelection",bindKey: "esc",exec: function(e) {
                e.exitMultiSelectMode()
            },scrollIntoView: "cursor",readonly: !0,isAvailable: function(e) {
                return e && e.inMultiSelectMode
            }}];
    var n = e("../keyboard/hash_handler").HashHandler;
    t.keyboardHandler = new n(t.multiSelectCommands)
}), define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(e, t) {
    function n(e, t, n) {
        return f.$options.wrap = !0, f.$options.needle = t, f.$options.backwards = -1 == n, f.find(e)
    }
    function i(e, t) {
        return e.row == t.row && e.column == t.column
    }
    function o(e) {
        e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", c), e.commands.addCommands(d.defaultCommands), r(e))
    }
    function r(e) {
        function t() {
            i && (e.renderer.setMouseCursor(""), i = !1)
        }
        var n = e.textInput.getElement(), i = !1;
        h.addListener(n, "keydown", function(n) {
            18 != n.keyCode || n.ctrlKey || n.shiftKey || n.metaKey ? i && t() : i || (e.renderer.setMouseCursor("crosshair"), i = !0)
        }), h.addListener(n, "keyup", t), h.addListener(n, "blur", t)
    }
    var s = e("./range_list").RangeList, a = e("./range").Range, l = e("./selection").Selection, c = e("./mouse/multi_select_handler").onMouseDown, h = e("./lib/event"), u = e("./lib/lang"), d = e("./commands/multi_select_commands");
    t.commands = d.defaultCommands.concat(d.multiSelectCommands);
    var g = e("./search").Search, f = new g, m = e("./edit_session").EditSession;
    (function() {
        this.getSelectionMarkers = function() {
            return this.$selectionMarkers
        }
    }).call(m.prototype), function() {
        this.ranges = null, this.rangeList = null, this.addRange = function(e, t) {
            if (e) {
                if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                    var n = this.toOrientedRange();
                    if (this.rangeList.add(n), this.rangeList.add(e), 2 != this.rangeList.ranges.length)
                        return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
                    this.rangeList.removeAll(), this.rangeList.add(n), this.$onAddRange(n)
                }
                e.cursor || (e.cursor = e.end);
                var i = this.rangeList.add(e);
                return this.$onAddRange(e), i.length && this.$onRemoveRange(i), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
            }
        }, this.toSingleRange = function(e) {
            e = e || this.ranges[0];
            var t = this.rangeList.removeAll();
            t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
        }, this.substractPoint = function(e) {
            var t = this.rangeList.substractPoint(e);
            return t ? (this.$onRemoveRange(t), t[0]) : void 0
        }, this.mergeOverlappingRanges = function() {
            var e = this.rangeList.merge();
            e.length ? this.$onRemoveRange(e) : this.ranges[0] && this.fromOrientedRange(this.ranges[0])
        }, this.$onAddRange = function(e) {
            this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", {range: e})
        }, this.$onRemoveRange = function(e) {
            if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
                var t = this.rangeList.ranges.pop();
                e.push(t), this.rangeCount = 0
            }
            for (var n = e.length; n--; ) {
                var i = this.ranges.indexOf(e[n]);
                this.ranges.splice(i, 1)
            }
            this._signal("removeRange", {ranges: e}), 0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), t = t || this.ranges[0], t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
        }, this.$initRangeList = function() {
            this.rangeList || (this.rangeList = new s, this.ranges = [], this.rangeCount = 0)
        }, this.getAllRanges = function() {
            return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
        }, this.splitIntoLines = function() {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges, t = e[e.length - 1], n = a.fromPoints(e[0].start, t.end);
                this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
            } else {
                var n = this.getRange(), i = this.isBackwards(), o = n.start.row, r = n.end.row;
                if (o == r) {
                    if (i)
                        var s = n.end, l = n.start;
                    else
                        var s = n.start, l = n.end;
                    return this.addRange(a.fromPoints(l, l)), void this.addRange(a.fromPoints(s, s))
                }
                var c = [], h = this.getLineRange(o, !0);
                h.start.column = n.start.column, c.push(h);
                for (var u = o + 1; r > u; u++)
                    c.push(this.getLineRange(u, !0));
                h = this.getLineRange(r, !0), h.end.column = n.end.column, c.push(h), c.forEach(this.addRange, this)
            }
        }, this.toggleBlockSelection = function() {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges, t = e[e.length - 1], n = a.fromPoints(e[0].start, t.end);
                this.toSingleRange(), this.setSelectionRange(n, t.cursor == t.start)
            } else {
                var i = this.session.documentToScreenPosition(this.selectionLead), o = this.session.documentToScreenPosition(this.selectionAnchor), r = this.rectangularRangeBlock(i, o);
                r.forEach(this.addRange, this)
            }
        }, this.rectangularRangeBlock = function(e, t, n) {
            var o = [], r = e.column < t.column;
            if (r)
                var s = e.column, l = t.column;
            else
                var s = t.column, l = e.column;
            var c = e.row < t.row;
            if (c)
                var h = e.row, u = t.row;
            else
                var h = t.row, u = e.row;
            0 > s && (s = 0), 0 > h && (h = 0), h == u && (n = !0);
            for (var d = h; u >= d; d++) {
                var g = a.fromPoints(this.session.screenToDocumentPosition(d, s), this.session.screenToDocumentPosition(d, l));
                if (g.isEmpty()) {
                    if (f && i(g.end, f))
                        break;
                    var f = g.end
                }
                g.cursor = r ? g.start : g.end, o.push(g)
            }
            if (c && o.reverse(), !n) {
                for (var m = o.length - 1; o[m].isEmpty() && m > 0; )
                    m--;
                if (m > 0)
                    for (var p = 0; o[p].isEmpty(); )
                        p++;
                for (var v = m; v >= p; v--)
                    o[v].isEmpty() && o.splice(v, 1)
            }
            return o
        }
    }.call(l.prototype);
    var p = e("./editor").Editor;
    (function() {
        this.updateSelectionMarkers = function() {
            this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.addSelectionMarker = function(e) {
            e.cursor || (e.cursor = e.end);
            var t = this.getSelectionStyle();
            return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
        }, this.removeSelectionMarker = function(e) {
            if (e.marker) {
                this.session.removeMarker(e.marker);
                var t = this.session.$selectionMarkers.indexOf(e);
                -1 != t && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
            }
        }, this.removeSelectionMarkers = function(e) {
            for (var t = this.session.$selectionMarkers, n = e.length; n--; ) {
                var i = e[n];
                if (i.marker) {
                    this.session.removeMarker(i.marker);
                    var o = t.indexOf(i);
                    -1 != o && t.splice(o, 1)
                }
            }
            this.session.selectionMarkerCount = t.length
        }, this.$onAddRange = function(e) {
            this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.$onRemoveRange = function(e) {
            this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
        }, this.$onMultiSelect = function() {
            this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(d.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
        }, this.$onSingleSelect = function() {
            this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(d.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"))
        }, this.$onMultiSelectExec = function(e) {
            var t = e.command, n = e.editor;
            if (n.multiSelect) {
                if (t.multiSelectAction)
                    "forEach" == t.multiSelectAction ? i = n.forEachSelection(t, e.args) : "forEachLine" == t.multiSelectAction ? i = n.forEachSelection(t, e.args, !0) : "single" == t.multiSelectAction ? (n.exitMultiSelectMode(), i = t.exec(n, e.args || {})) : i = t.multiSelectAction(n, e.args || {});
                else {
                    var i = t.exec(n, e.args || {});
                    n.multiSelect.addRange(n.multiSelect.toOrientedRange()), n.multiSelect.mergeOverlappingRanges()
                }
                return i
            }
        }, this.forEachSelection = function(e, t, n) {
            if (!this.inVirtualSelectionMode) {
                var i, o = n && n.keepOrder, r = 1 == n || n && n.$byLines, s = this.session, a = this.selection, c = a.rangeList, h = (o ? a : c).ranges;
                if (!h.length)
                    return e.exec ? e.exec(this, t || {}) : e(this, t || {});
                var u = a._eventRegistry;
                a._eventRegistry = {};
                var d = new l(s);
                this.inVirtualSelectionMode = !0;
                for (var g = h.length; g--; ) {
                    if (r)
                        for (; g > 0 && h[g].start.row == h[g - 1].end.row; )
                            g--;
                    d.fromOrientedRange(h[g]), d.index = g, this.selection = s.selection = d;
                    var f = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                    i || void 0 === f || (i = f), d.toOrientedRange(h[g])
                }
                d.detach(), this.selection = s.selection = a, this.inVirtualSelectionMode = !1, a._eventRegistry = u, a.mergeOverlappingRanges();
                var m = this.renderer.$scrollAnimation;
                return this.onCursorChange(), this.onSelectionChange(), m && m.from == m.to && this.renderer.animateScrolling(m.from), i
            }
        }, this.exitMultiSelectMode = function() {
            this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
        }, this.getSelectedText = function() {
            var e = "";
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                for (var t = this.multiSelect.rangeList.ranges, n = [], i = 0; i < t.length; i++)
                    n.push(this.session.getTextRange(t[i]));
                var o = this.session.getDocument().getNewLineCharacter();
                e = n.join(o), e.length == (n.length - 1) * o.length && (e = "")
            } else
                this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
            return e
        }, this.$checkMultiselectChange = function(e, t) {
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var n = this.multiSelect.ranges[0];
                if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor)
                    return;
                var i = t == this.multiSelect.anchor ? n.cursor == n.start ? n.end : n.start : n.cursor;
                (i.row != t.row || this.session.$clipPositionToDocument(i.row, i.column).column != t.column) && this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange())
            }
        }, this.findAll = function(e, t, n) {
            if (t = t || {}, t.needle = e || t.needle, void 0 == t.needle) {
                var i = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                t.needle = this.session.getTextRange(i)
            }
            this.$search.set(t);
            var o = this.$search.findAll(this.session);
            if (!o.length)
                return 0;
            this.$blockScrolling += 1;
            var r = this.multiSelect;
            n || r.toSingleRange(o[0]);
            for (var s = o.length; s--; )
                r.addRange(o[s], !0);
            return i && r.rangeList.rangeAtPoint(i.start) && r.addRange(i, !0), this.$blockScrolling -= 1, o.length
        }, this.selectMoreLines = function(e, t) {
            var n = this.selection.toOrientedRange(), i = n.cursor == n.end, o = this.session.documentToScreenPosition(n.cursor);
            this.selection.$desiredColumn && (o.column = this.selection.$desiredColumn);
            var r = this.session.screenToDocumentPosition(o.row + e, o.column);
            if (n.isEmpty())
                var s = r;
            else
                var l = this.session.documentToScreenPosition(i ? n.end : n.start), s = this.session.screenToDocumentPosition(l.row + e, l.column);
            if (i) {
                var c = a.fromPoints(r, s);
                c.cursor = c.start
            } else {
                var c = a.fromPoints(s, r);
                c.cursor = c.end
            }
            if (c.desiredColumn = o.column, this.selection.inMultiSelectMode) {
                if (t)
                    var h = n.cursor
            } else
                this.selection.addRange(n);
            this.selection.addRange(c), h && this.selection.substractPoint(h)
        }, this.transposeSelections = function(e) {
            for (var t = this.session, n = t.multiSelect, i = n.ranges, o = i.length; o--; ) {
                var r = i[o];
                if (r.isEmpty()) {
                    var s = t.getWordRange(r.start.row, r.start.column);
                    r.start.row = s.start.row, r.start.column = s.start.column, r.end.row = s.end.row, r.end.column = s.end.column
                }
            }
            n.mergeOverlappingRanges();
            for (var a = [], o = i.length; o--; ) {
                var r = i[o];
                a.unshift(t.getTextRange(r))
            }
            0 > e ? a.unshift(a.pop()) : a.push(a.shift());
            for (var o = i.length; o--; ) {
                var r = i[o], s = r.clone();
                t.replace(r, a[o]), r.start.row = s.start.row, r.start.column = s.start.column
            }
        }, this.selectMore = function(e, t, i) {
            var o = this.session, r = o.multiSelect, s = r.toOrientedRange();
            if (!s.isEmpty() || (s = o.getWordRange(s.start.row, s.start.column), s.cursor = -1 == e ? s.start : s.end, this.multiSelect.addRange(s), !i)) {
                var a = o.getTextRange(s), l = n(o, a, e);
                l && (l.cursor = -1 == e ? l.start : l.end, this.$blockScrolling += 1, this.session.unfold(l), this.multiSelect.addRange(l), this.$blockScrolling -= 1, this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(s.cursor)
            }
        }, this.alignCursors = function() {
            var e = this.session, t = e.multiSelect, n = t.ranges, i = -1, o = n.filter(function(e) {
                return e.cursor.row == i ? !0 : void (i = e.cursor.row)
            });
            if (n.length && o.length != n.length - 1) {
                o.forEach(function(e) {
                    t.substractPoint(e.cursor)
                });
                var r = 0, s = 1 / 0, l = n.map(function(t) {
                    var n = t.cursor, i = e.getLine(n.row), o = i.substr(n.column).search(/\S/g);
                    return -1 == o && (o = 0), n.column > r && (r = n.column), s > o && (s = o), o
                });
                n.forEach(function(t, n) {
                    var i = t.cursor, o = r - i.column, c = l[n] - s;
                    o > c ? e.insert(i, u.stringRepeat(" ", o - c)) : e.remove(new a(i.row, i.column, i.row, i.column - o + c)), t.start.column = t.end.column = r, t.start.row = t.end.row = i.row, t.cursor = t.end
                }), t.fromOrientedRange(n[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            } else {
                var c = this.selection.getRange(), h = c.start.row, d = c.end.row, g = h == d;
                if (g) {
                    var f, m = this.session.getLength();
                    do
                        f = this.session.getLine(d);
                    while (/[=:]/.test(f) && ++d < m);
                    do
                        f = this.session.getLine(h);
                    while (/[=:]/.test(f) && --h > 0);
                    0 > h && (h = 0), d >= m && (d = m - 1)
                }
                var p = this.session.doc.removeLines(h, d);
                p = this.$reAlignText(p, g), this.session.doc.insert({row: h,column: 0}, p.join("\n") + "\n"), g || (c.start.column = 0, c.end.column = p[p.length - 1].length), this.selection.setRange(c)
            }
        }, this.$reAlignText = function(e, t) {
            function n(e) {
                return u.stringRepeat(" ", e)
            }
            function i(e) {
                return e[2] ? n(s) + e[2] + n(a - e[2].length + l) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }
            function o(e) {
                return e[2] ? n(s + a - e[2].length) + e[2] + n(l, " ") + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }
            function r(e) {
                return e[2] ? n(s) + e[2] + n(l) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }
            var s, a, l, c = !0, h = !0;
            return e.map(function(e) {
                var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                return t ? null == s ? (s = t[1].length, a = t[2].length, l = t[3].length, t) : (s + a + l != t[1].length + t[2].length + t[3].length && (h = !1), s != t[1].length && (c = !1), s > t[1].length && (s = t[1].length), a < t[2].length && (a = t[2].length), l > t[3].length && (l = t[3].length), t) : [e]
            }).map(t ? i : c ? h ? o : i : r)
        }
    }).call(p.prototype), t.onSessionChange = function(e) {
        var t = e.session;
        t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;
        var n = e.oldSession;
        n && (n.multiSelect.off("addRange", this.$onAddRange), n.multiSelect.off("removeRange", this.$onRemoveRange), n.multiSelect.off("multiSelect", this.$onMultiSelect), n.multiSelect.off("singleSelect", this.$onSingleSelect), n.multiSelect.lead.off("change", this.$checkMultiselectChange), n.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
    }, t.MultiSelect = o, e("./config").defineOptions(p.prototype, "editor", {enableMultiselect: {set: function(e) {
                o(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", c)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", c))
            },value: !0}})
}), define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var n = e("../../range").Range, i = t.FoldMode = function() {
    };
    (function() {
        this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(e, t, n) {
            var i = e.getLine(n);
            return this.foldingStartMarker.test(i) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(i) ? "end" : ""
        }, this.getFoldWidgetRange = function() {
            return null
        }, this.indentationBlock = function(e, t, i) {
            var o = /\S/, r = e.getLine(t), s = r.search(o);
            if (-1 != s) {
                for (var a = i || r.length, l = e.getLength(), c = t, h = t; ++t < l; ) {
                    var u = e.getLine(t).search(o);
                    if (-1 != u) {
                        if (s >= u)
                            break;
                        h = t
                    }
                }
                if (h > c) {
                    var d = e.getLine(h).length;
                    return new n(c, a, h, d)
                }
            }
        }, this.openingBracketBlock = function(e, t, i, o, r) {
            var s = {row: i,column: o + 1}, a = e.$findClosingBracket(t, s, r);
            if (a) {
                var l = e.foldWidgets[a.row];
                return null == l && (l = e.getFoldWidget(a.row)), "start" == l && a.row > s.row && (a.row--, a.column = e.getLine(a.row).length), n.fromPoints(s, a)
            }
        }, this.closingBracketBlock = function(e, t, i, o) {
            var r = {row: i,column: o}, s = e.$findOpeningBracket(t, r);
            return s ? (s.column++, r.column--, n.fromPoints(s, r)) : void 0
        }
    }).call(i.prototype)
}), define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
    "use strict";
    t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
    var n = e("../lib/dom");
    n.importCssString(t.cssText, t.cssClass)
}), define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], function(e, t) {
    "use strict";
    function n(e) {
        this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeEditor", this.$onChangeEditor)
    }
    {
        var i = (e("./lib/oop"), e("./lib/dom"));
        e("./range").Range
    }
    (function() {
        this.getRowLength = function(e) {
            var t;
            return t = this.lineWidgets ? this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0 : 0, this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
        }, this.$getWidgetScreenLength = function() {
            var e = 0;
            return this.lineWidgets.forEach(function(t) {
                t && t.rowCount && (e += t.rowCount)
            }), e
        }, this.$onChangeEditor = function(e) {
            this.attach(e.editor)
        }, this.attach = function(e) {
            e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach(), this.editor != e && (this.detach(), this.editor = e, e && (e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets)))
        }, this.detach = function() {
            var e = this.editor;
            if (e) {
                this.editor = null, e.widgetManager = null, e.renderer.off("beforeRender", this.measureWidgets), e.renderer.off("afterRender", this.renderWidgets);
                var t = this.session.lineWidgets;
                t && t.forEach(function(e) {
                    e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el))
                })
            }
        }, this.updateOnChange = function(e) {
            var t = this.session.lineWidgets;
            if (t) {
                var n = e.data, i = n.range, o = i.start.row, r = i.end.row - o;
                if (0 === r)
                    ;
                else if ("removeText" == n.action || "removeLines" == n.action) {
                    var s = t.splice(o + 1, r);
                    s.forEach(function(e) {
                        e && this.removeLineWidget(e)
                    }, this), this.$updateRows()
                } else {
                    var a = new Array(r);
                    a.unshift(o, 0), t.splice.apply(t, a), this.$updateRows()
                }
            }
        }, this.$updateRows = function() {
            var e = this.session.lineWidgets;
            if (e) {
                var t = !0;
                e.forEach(function(e, n) {
                    e && (t = !1, e.row = n)
                }), t && (this.session.lineWidgets = null)
            }
        }, this.addLineWidget = function(e) {
            this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength())), this.session.lineWidgets[e.row] = e;
            var t = this.editor.renderer;
            return e.html && !e.el && (e.el = i.createElement("div"), e.el.innerHTML = e.html), e.el && (i.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = "absolute", e.el.style.zIndex = 5, t.container.appendChild(e.el), e._inDocument = !0), e.coverGutter || (e.el.style.zIndex = 3), e.pixelHeight || (e.pixelHeight = e.el.offsetHeight), null == e.rowCount && (e.rowCount = e.pixelHeight / t.layerConfig.lineHeight), this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows(), this.renderWidgets(null, t), e
        }, this.removeLineWidget = function(e) {
            if (e._inDocument = !1, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el), e.editor && e.editor.destroy)
                try {
                    e.editor.destroy()
                } catch (t) {
                }
            this.session.lineWidgets && (this.session.lineWidgets[e.row] = void 0), this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows()
        }, this.onWidgetChanged = function(e) {
            this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull()
        }, this.measureWidgets = function(e, t) {
            var n = this.session._changedWidgets, i = t.layerConfig;
            if (n && n.length) {
                for (var o = 1 / 0, r = 0; r < n.length; r++) {
                    var s = n[r];
                    s._inDocument || (s._inDocument = !0, t.container.appendChild(s.el)), s.h = s.el.offsetHeight, s.fixedWidth || (s.w = s.el.offsetWidth, s.screenWidth = Math.ceil(s.w / i.characterWidth));
                    var a = s.h / i.lineHeight;
                    s.coverLine && (a -= this.session.getRowLineCount(s.row), 0 > a && (a = 0)), s.rowCount != a && (s.rowCount = a, s.row < o && (o = s.row))
                }
                1 / 0 != o && (this.session._emit("changeFold", {data: {start: {row: o}}}), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
            }
        }, this.renderWidgets = function(e, t) {
            var n = t.layerConfig, i = this.session.lineWidgets;
            if (i) {
                for (var o = Math.min(this.firstRow, n.firstRow), r = Math.max(this.lastRow, n.lastRow, i.length); o > 0 && !i[o]; )
                    o--;
                this.firstRow = n.firstRow, this.lastRow = n.lastRow, t.$cursorLayer.config = n;
                for (var s = o; r >= s; s++) {
                    var a = i[s];
                    if (a && a.el) {
                        a._inDocument || (a._inDocument = !0, t.container.appendChild(a.el));
                        var l = t.$cursorLayer.getPixelPosition({row: s,column: 0}, !0).top;
                        a.coverLine || (l += n.lineHeight * this.session.getRowLineCount(a.row)), a.el.style.top = l - n.offset + "px";
                        var c = a.coverGutter ? 0 : t.gutterWidth;
                        a.fixedWidth || (c -= t.scrollLeft), a.el.style.left = c + "px", a.el.style.right = a.fixedWidth ? t.scrollBar.getWidth() + "px" : ""
                    }
                }
            }
        }
    }).call(n.prototype), t.LineWidgets = n
}), define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function(e, t) {
    "use strict";
    function n(e, t, n) {
        for (var i = 0, o = e.length - 1; o >= i; ) {
            var r = i + o >> 1, s = n(t, e[r]);
            if (s > 0)
                i = r + 1;
            else {
                if (!(0 > s))
                    return r;
                o = r - 1
            }
        }
        return -(i + 1)
    }
    function i(e, t, i) {
        var o = e.getAnnotations().sort(s.comparePoints);
        if (o.length) {
            var r = n(o, {row: t,column: -1}, s.comparePoints);
            0 > r && (r = -r - 1), r >= o.length ? r = i > 0 ? 0 : o.length - 1 : 0 === r && 0 > i && (r = o.length - 1);
            var a = o[r];
            if (a && i) {
                if (a.row === t) {
                    do
                        a = o[r += i];
                    while (a && a.row === t);
                    if (!a)
                        return o.slice()
                }
                var l = [];
                t = a.row;
                do
                    l[0 > i ? "unshift" : "push"](a), a = o[r += i];
                while (a && a.row == t);
                return l.length && l
            }
        }
    }
    var o = e("../line_widgets").LineWidgets, r = e("../lib/dom"), s = e("../range").Range;
    t.showErrorMarker = function(e, t) {
        var n = e.session;
        n.widgetManager || (n.widgetManager = new o(n), n.widgetManager.attach(e));
        var s = e.getCursorPosition(), a = s.row, l = n.lineWidgets && n.lineWidgets[a];
        l ? l.destroy() : a -= t;
        var c, h = i(n, a, t);
        if (h) {
            var u = h[0];
            s.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u.column) || 0, s.row = u.row, c = e.renderer.$gutterLayer.$annotations[s.row]
        } else {
            if (l)
                return;
            c = {text: ["Looks good!"],className: "ace_ok"}
        }
        e.session.unfold(s.row), e.selection.moveToPosition(s);
        var d = {row: s.row,fixedWidth: !0,coverGutter: !0,el: r.createElement("div")}, g = d.el.appendChild(r.createElement("div")), f = d.el.appendChild(r.createElement("div"));
        f.className = "error_widget_arrow " + c.className;
        var m = e.renderer.$cursorLayer.getPixelPosition(s).left;
        f.style.left = m + e.renderer.gutterWidth - 5 + "px", d.el.className = "error_widget_wrapper", g.className = "error_widget " + c.className, g.innerHTML = c.text.join("<br>"), g.appendChild(r.createElement("div"));
        var p = function(e, t, n) {
            return 0 !== t || "esc" !== n && "return" !== n ? void 0 : (d.destroy(), {command: "null"})
        };
        d.destroy = function() {
            e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler(p), n.widgetManager.removeLineWidget(d), e.off("changeSelection", d.destroy), e.off("changeSession", d.destroy), e.off("mouseup", d.destroy), e.off("change", d.destroy))
        }, e.keyBinding.addKeyboardHandler(p), e.on("changeSelection", d.destroy), e.on("changeSession", d.destroy), e.on("mouseup", d.destroy), e.on("change", d.destroy), e.session.widgetManager.addLineWidget(d), d.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, {bottom: d.el.offsetHeight})
    }, r.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
}), define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function(e, t) {
    "use strict";
    e("./lib/fixoldbrowsers");
    var n = e("./lib/dom"), i = e("./lib/event"), o = e("./editor").Editor, r = e("./edit_session").EditSession, s = e("./undomanager").UndoManager, a = e("./virtual_renderer").VirtualRenderer;
    e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.require = e, t.edit = function(e) {
        if ("string" == typeof e) {
            var r = e;
            if (e = document.getElementById(r), !e)
                throw new Error("ace.edit can't find div #" + r)
        }
        if (e && e.env && e.env.editor instanceof o)
            return e.env.editor;
        var s = "";
        if (e && /input|textarea/i.test(e.tagName)) {
            var l = e;
            s = l.value, e = n.createElement("pre"), l.parentNode.replaceChild(e, l)
        } else
            s = n.getInnerText(e), e.innerHTML = "";
        var c = t.createEditSession(s), h = new o(new a(e));
        h.setSession(c);
        var u = {document: c,editor: h,onResize: h.resize.bind(h, null)};
        return l && (u.textarea = l), i.addListener(window, "resize", u.onResize), h.on("destroy", function() {
            i.removeListener(window, "resize", u.onResize), u.editor.container.env = null
        }), h.container.env = h.env = u, h
    }, t.createEditSession = function(e, t) {
        var n = new r(e, t);
        return n.setUndoManager(new s), n
    }, t.EditSession = r, t.UndoManager = s
}), function() {
    window.require(["ace/ace"], function(e) {
        e && e.config.init(!0), window.ace || (window.ace = e);
        for (var t in e)
            e.hasOwnProperty(t) && (window.ace[t] = e[t])
    })
}(), define("ace/snippets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/anchor", "ace/keyboard/hash_handler", "ace/tokenizer", "ace/lib/dom", "ace/editor"], function(e, t) {
    "use strict";
    var n = e("./lib/oop"), i = e("./lib/event_emitter").EventEmitter, o = e("./lib/lang"), r = e("./range").Range, s = e("./anchor").Anchor, a = e("./keyboard/hash_handler").HashHandler, l = e("./tokenizer").Tokenizer, c = r.comparePoints, h = function() {
        this.snippetMap = {}, this.snippetNameMap = {}
    };
    (function() {
        n.implement(this, i), this.getTokenizer = function() {
            function e(e, t, n) {
                return e = e.substr(1), /^\d+$/.test(e) && !n.inFormatString ? [{tabstopId: parseInt(e, 10)}] : [{text: e}]
            }
            function t(e) {
                return "(?:[^\\\\" + e + "]|\\\\.)"
            }
            return h.$tokenizer = new l({start: [{regex: /:/,onMatch: function(e, t, n) {
                            return n.length && n[0].expectIf ? (n[0].expectIf = !1, n[0].elseBranch = n[0], [n[0]]) : ":"
                        }}, {regex: /\\./,onMatch: function(e, t, n) {
                            var i = e[1];
                            return "}" == i && n.length ? e = i : -1 != "`$\\".indexOf(i) ? e = i : n.inFormatString && ("n" == i ? e = "\n" : "t" == i ? e = "\n" : -1 != "ulULE".indexOf(i) && (e = {changeCase: i,local: i > "a"})), [e]
                        }}, {regex: /}/,onMatch: function(e, t, n) {
                            return [n.length ? n.shift() : e]
                        }}, {regex: /\$(?:\d+|\w+)/,onMatch: e}, {regex: /\$\{[\dA-Z_a-z]+/,onMatch: function(t, n, i) {
                            var o = e(t.substr(1), n, i);
                            return i.unshift(o[0]), o
                        },next: "snippetVar"}, {regex: /\n/,token: "newline",merge: !1}],snippetVar: [{regex: "\\|" + t("\\|") + "*\\|",onMatch: function(e, t, n) {
                            n[0].choices = e.slice(1, -1).split(",")
                        },next: "start"}, {regex: "/(" + t("/") + "+)/(?:(" + t("/") + "*)/)(\\w*):?",onMatch: function(e, t, n) {
                            var i = n[0];
                            return i.fmtString = e, e = this.splitRegex.exec(e), i.guard = e[1], i.fmt = e[2], i.flag = e[3], ""
                        },next: "start"}, {regex: "`" + t("`") + "*`",onMatch: function(e, t, n) {
                            return n[0].code = e.splice(1, -1), ""
                        },next: "start"}, {regex: "\\?",onMatch: function(e, t, n) {
                            n[0] && (n[0].expectIf = !0)
                        },next: "start"}, {regex: "([^:}\\\\]|\\\\.)*:?",token: "",next: "start"}],formatString: [{regex: "/(" + t("/") + "+)/",token: "regex"}, {regex: "",onMatch: function(e, t, n) {
                            n.inFormatString = !0
                        },next: "start"}]}), h.prototype.getTokenizer = function() {
                return h.$tokenizer
            }, h.$tokenizer
        }, this.tokenizeTmSnippet = function(e, t) {
            return this.getTokenizer().getLineTokens(e, t).tokens.map(function(e) {
                return e.value || e
            })
        }, this.$getDefaultValue = function(e, t) {
            if (/^[A-Z]\d+$/.test(t)) {
                var n = t.substr(1);
                return (this.variables[t[0] + "__"] || {})[n]
            }
            if (/^\d+$/.test(t))
                return (this.variables.__ || {})[t];
            if (t = t.replace(/^TM_/, ""), e) {
                var i = e.session;
                switch (t) {
                    case "CURRENT_WORD":
                        var o = i.getWordRange();
                    case "SELECTION":
                    case "SELECTED_TEXT":
                        return i.getTextRange(o);
                    case "CURRENT_LINE":
                        return i.getLine(e.getCursorPosition().row);
                    case "PREV_LINE":
                        return i.getLine(e.getCursorPosition().row - 1);
                    case "LINE_INDEX":
                        return e.getCursorPosition().column;
                    case "LINE_NUMBER":
                        return e.getCursorPosition().row + 1;
                    case "SOFT_TABS":
                        return i.getUseSoftTabs() ? "YES" : "NO";
                    case "TAB_SIZE":
                        return i.getTabSize();
                    case "FILENAME":
                    case "FILEPATH":
                        return "";
                    case "FULLNAME":
                        return "Ace"
                }
            }
        }, this.variables = {}, this.getVariableValue = function(e, t) {
            return this.variables.hasOwnProperty(t) ? this.variables[t](e, t) || "" : this.$getDefaultValue(e, t) || ""
        }, this.tmStrFormat = function(e, t, n) {
            var i = t.flag || "", o = t.guard;
            o = new RegExp(o, i.replace(/[^gi]/, ""));
            var r = this.tokenizeTmSnippet(t.fmt, "formatString"), s = this, a = e.replace(o, function() {
                s.variables.__ = arguments;
                for (var e = s.resolveVariables(r, n), t = "E", i = 0; i < e.length; i++) {
                    var o = e[i];
                    if ("object" == typeof o)
                        if (e[i] = "", o.changeCase && o.local) {
                            var a = e[i + 1];
                            a && "string" == typeof a && (e[i] = "u" == o.changeCase ? a[0].toUpperCase() : a[0].toLowerCase(), e[i + 1] = a.substr(1))
                        } else
                            o.changeCase && (t = o.changeCase);
                    else
                        "U" == t ? e[i] = o.toUpperCase() : "L" == t && (e[i] = o.toLowerCase())
                }
                return e.join("")
            });
            return this.variables.__ = null, a
        }, this.resolveVariables = function(e, t) {
            function n(t) {
                var n = e.indexOf(t, o + 1);
                -1 != n && (o = n)
            }
            for (var i = [], o = 0; o < e.length; o++) {
                var r = e[o];
                if ("string" == typeof r)
                    i.push(r);
                else {
                    if ("object" != typeof r)
                        continue;
                    if (r.skip)
                        n(r);
                    else {
                        if (r.processed < o)
                            continue;
                        if (r.text) {
                            var s = this.getVariableValue(t, r.text);
                            s && r.fmtString && (s = this.tmStrFormat(s, r)), r.processed = o, null == r.expectIf ? s && (i.push(s), n(r)) : s ? r.skip = r.elseBranch : n(r)
                        } else
                            null != r.tabstopId ? i.push(r) : null != r.changeCase && i.push(r)
                    }
                }
            }
            return i
        }, this.insertSnippetForSelection = function(e, t) {
            function n(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    if ("object" == typeof i) {
                        if (c[i.tabstopId])
                            continue;
                        var o = e.lastIndexOf(i, n - 1);
                        i = t[o] || {tabstopId: i.tabstopId}
                    }
                    t[n] = i
                }
                return t
            }
            var i = e.getCursorPosition(), o = e.session.getLine(i.row), r = e.session.getTabString(), s = o.match(/^\s*/)[0];
            i.column < s.length && (s = s.slice(0, i.column));
            var a = this.tokenizeTmSnippet(t);
            a = this.resolveVariables(a, e), a = a.map(function(e) {
                return "\n" == e ? e + s : "string" == typeof e ? e.replace(/\t/g, r) : e
            });
            var l = [];
            a.forEach(function(e, t) {
                if ("object" == typeof e) {
                    var n = e.tabstopId, i = l[n];
                    if (i || (i = l[n] = [], i.index = n, i.value = ""), -1 === i.indexOf(e)) {
                        i.push(e);
                        var o = a.indexOf(e, t + 1);
                        if (-1 !== o) {
                            var r = a.slice(t + 1, o), s = r.some(function(e) {
                                return "object" == typeof e
                            });
                            s && !i.value ? i.value = r : !r.length || i.value && "string" == typeof i.value || (i.value = r.join(""))
                        }
                    }
                }
            }), l.forEach(function(e) {
                e.length = 0
            });
            for (var c = {}, h = 0; h < a.length; h++) {
                var d = a[h];
                if ("object" == typeof d) {
                    var g = d.tabstopId, f = a.indexOf(d, h + 1);
                    if (c[g])
                        c[g] === d && (c[g] = null);
                    else {
                        var m = l[g], p = "string" == typeof m.value ? [m.value] : n(m.value);
                        p.unshift(h + 1, Math.max(0, f - h)), p.push(d), c[g] = d, a.splice.apply(a, p), -1 === m.indexOf(d) && m.push(d)
                    }
                }
            }
            var v = 0, A = 0, C = "";
            a.forEach(function(e) {
                "string" == typeof e ? ("\n" === e[0] ? (A = e.length - 1, v++) : A += e.length, C += e) : e.start ? e.end = {row: v,column: A} : e.start = {row: v,column: A}
            });
            var w = e.getSelectionRange(), F = e.session.replace(w, C), E = new u(e), b = e.inVirtualSelectionMode && e.selection.index;
            E.addTabstops(l, w.start, F, b)
        }, this.insertSnippet = function(e, t) {
            var n = this;
            return e.inVirtualSelectionMode ? n.insertSnippetForSelection(e, t) : (e.forEachSelection(function() {
                n.insertSnippetForSelection(e, t)
            }, null, {keepOrder: !0}), void (e.tabstopManager && e.tabstopManager.tabNext()))
        }, this.$getScope = function(e) {
            var t = e.session.$mode.$id || "";
            if (t = t.split("/").pop(), "html" === t || "php" === t) {
                "php" !== t || e.session.$mode.inlinePhp || (t = "html");
                var n = e.getCursorPosition(), i = e.session.getState(n.row);
                "object" == typeof i && (i = i[0]), i.substring && ("js-" == i.substring(0, 3) ? t = "javascript" : "css-" == i.substring(0, 4) ? t = "css" : "php-" == i.substring(0, 4) && (t = "php"))
            }
            return t
        }, this.getActiveScopes = function(e) {
            var t = this.$getScope(e), n = [t], i = this.snippetMap;
            return i[t] && i[t].includeScopes && n.push.apply(n, i[t].includeScopes), n.push("_"), n
        }, this.expandWithTab = function(e, t) {
            var n = this, i = e.forEachSelection(function() {
                return n.expandSnippetForSelection(e, t)
            }, null, {keepOrder: !0});
            return i && e.tabstopManager && e.tabstopManager.tabNext(), i
        }, this.expandSnippetForSelection = function(e, t) {
            var n, i = e.getCursorPosition(), o = e.session.getLine(i.row), r = o.substring(0, i.column), s = o.substr(i.column), a = this.snippetMap;
            return this.getActiveScopes(e).some(function(e) {
                var t = a[e];
                return t && (n = this.findMatchingSnippet(t, r, s)), !!n
            }, this), n ? t && t.dryRun ? !0 : (e.session.doc.removeInLine(i.row, i.column - n.replaceBefore.length, i.column + n.replaceAfter.length), this.variables.M__ = n.matchBefore, this.variables.T__ = n.matchAfter, this.insertSnippetForSelection(e, n.content), this.variables.M__ = this.variables.T__ = null, !0) : !1
        }, this.findMatchingSnippet = function(e, t, n) {
            for (var i = e.length; i--; ) {
                var o = e[i];
                if (!(o.startRe && !o.startRe.test(t) || o.endRe && !o.endRe.test(n) || !o.startRe && !o.endRe))
                    return o.matchBefore = o.startRe ? o.startRe.exec(t) : [""], o.matchAfter = o.endRe ? o.endRe.exec(n) : [""], o.replaceBefore = o.triggerRe ? o.triggerRe.exec(t)[0] : "", o.replaceAfter = o.endTriggerRe ? o.endTriggerRe.exec(n)[0] : "", o
            }
        }, this.snippetMap = {}, this.snippetNameMap = {}, this.register = function(e, t) {
            function n(e) {
                return e && !/^\^?\(.*\)\$?$|^\\b$/.test(e) && (e = "(?:" + e + ")"), e || ""
            }
            function i(e, t, i) {
                return e = n(e), t = n(t), i ? (e = t + e, e && "$" != e[e.length - 1] && (e += "$")) : (e += t, e && "^" != e[0] && (e = "^" + e)), new RegExp(e)
            }
            function r(e) {
                e.scope || (e.scope = t || "_"), t = e.scope, s[t] || (s[t] = [], a[t] = {});
                var n = a[t];
                if (e.name) {
                    var r = n[e.name];
                    r && l.unregister(r), n[e.name] = e
                }
                s[t].push(e), e.tabTrigger && !e.trigger && (!e.guard && /^\w/.test(e.tabTrigger) && (e.guard = "\\b"), e.trigger = o.escapeRegExp(e.tabTrigger)), e.startRe = i(e.trigger, e.guard, !0), e.triggerRe = new RegExp(e.trigger, "", !0), e.endRe = i(e.endTrigger, e.endGuard, !0), e.endTriggerRe = new RegExp(e.endTrigger, "", !0)
            }
            var s = this.snippetMap, a = this.snippetNameMap, l = this;
            e || (e = []), e && e.content ? r(e) : Array.isArray(e) && e.forEach(r), this._signal("registerSnippets", {scope: t})
        }, this.unregister = function(e, t) {
            function n(e) {
                var n = o[e.scope || t];
                if (n && n[e.name]) {
                    delete n[e.name];
                    var r = i[e.scope || t], s = r && r.indexOf(e);
                    s >= 0 && r.splice(s, 1)
                }
            }
            var i = this.snippetMap, o = this.snippetNameMap;
            e.content ? n(e) : Array.isArray(e) && e.forEach(n)
        }, this.parseSnippetFile = function(e) {
            e = e.replace(/\r/g, "");
            for (var t, n = [], i = {}, o = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm; t = o.exec(e); ) {
                if (t[1])
                    try {
                        i = JSON.parse(t[1]), n.push(i)
                    } catch (r) {
                    }
                if (t[4])
                    i.content = t[4].replace(/^\t/gm, ""), n.push(i), i = {};
                else {
                    var s = t[2], a = t[3];
                    if ("regex" == s) {
                        var l = /\/((?:[^\/\\]|\\.)*)|$/g;
                        i.guard = l.exec(a)[1], i.trigger = l.exec(a)[1], i.endTrigger = l.exec(a)[1], i.endGuard = l.exec(a)[1]
                    } else
                        "snippet" == s ? (i.tabTrigger = a.match(/^\S*/)[0], i.name || (i.name = a)) : i[s] = a
                }
            }
            return n
        }, this.getSnippetByName = function(e, t) {
            var n, i = this.snippetNameMap;
            return this.getActiveScopes(t).some(function(t) {
                var o = i[t];
                return o && (n = o[e]), !!n
            }, this), n
        }
    }).call(h.prototype);
    var u = function(e) {
        return e.tabstopManager ? e.tabstopManager : (e.tabstopManager = this, this.$onChange = this.onChange.bind(this), this.$onChangeSelection = o.delayedCall(this.onChangeSelection.bind(this)).schedule, this.$onChangeSession = this.onChangeSession.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), void this.attach(e))
    };
    (function() {
        this.attach = function(e) {
            this.index = 0, this.ranges = [], this.tabstops = [], this.$openTabstops = null, this.selectedTabstop = null, this.editor = e, this.editor.on("change", this.$onChange), this.editor.on("changeSelection", this.$onChangeSelection), this.editor.on("changeSession", this.$onChangeSession), this.editor.commands.on("afterExec", this.$onAfterExec), this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
        }, this.detach = function() {
            this.tabstops.forEach(this.removeTabstopMarkers, this), this.ranges = null, this.tabstops = null, this.selectedTabstop = null, this.editor.removeListener("change", this.$onChange), this.editor.removeListener("changeSelection", this.$onChangeSelection), this.editor.removeListener("changeSession", this.$onChangeSession), this.editor.commands.removeListener("afterExec", this.$onAfterExec), this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.tabstopManager = null, this.editor = null
        }, this.onChange = function(e) {
            var t = e.data.range, n = "r" == e.data.action[0], i = t.start, o = t.end, r = i.row, s = o.row, a = s - r, l = o.column - i.column;
            if (n && (a = -a, l = -l), !this.$inChange && n) {
                var h = this.selectedTabstop, u = h && !h.some(function(e) {
                    return c(e.start, i) <= 0 && c(e.end, o) >= 0
                });
                if (u)
                    return this.detach()
            }
            for (var d = this.ranges, g = 0; g < d.length; g++) {
                var f = d[g];
                f.end.row < i.row || (n && c(i, f.start) < 0 && c(o, f.end) > 0 ? (this.removeRange(f), g--) : (f.start.row == r && f.start.column > i.column && (f.start.column += l), f.end.row == r && f.end.column >= i.column && (f.end.column += l), f.start.row >= r && (f.start.row += a), f.end.row >= r && (f.end.row += a), c(f.start, f.end) > 0 && this.removeRange(f)))
            }
            d.length || this.detach()
        }, this.updateLinkedFields = function() {
            var e = this.selectedTabstop;
            if (e && e.hasLinkedRanges) {
                this.$inChange = !0;
                for (var n = this.editor.session, i = n.getTextRange(e.firstNonLinked), o = e.length; o--; ) {
                    var r = e[o];
                    if (r.linked) {
                        var s = t.snippetManager.tmStrFormat(i, r.original);
                        n.replace(r, s)
                    }
                }
                this.$inChange = !1
            }
        }, this.onAfterExec = function(e) {
            e.command && !e.command.readOnly && this.updateLinkedFields()
        }, this.onChangeSelection = function() {
            if (this.editor) {
                for (var e = this.editor.selection.lead, t = this.editor.selection.anchor, n = this.editor.selection.isEmpty(), i = this.ranges.length; i--; )
                    if (!this.ranges[i].linked) {
                        var o = this.ranges[i].contains(e.row, e.column), r = n || this.ranges[i].contains(t.row, t.column);
                        if (o && r)
                            return
                    }
                this.detach()
            }
        }, this.onChangeSession = function() {
            this.detach()
        }, this.tabNext = function(e) {
            var t = this.tabstops.length, n = this.index + (e || 1);
            n = Math.min(Math.max(n, 1), t), n == t && (n = 0), this.selectTabstop(n), 0 === n && this.detach()
        }, this.selectTabstop = function(e) {
            this.$openTabstops = null;
            var t = this.tabstops[this.index];
            if (t && this.addTabstopMarkers(t), this.index = e, t = this.tabstops[this.index], t && t.length) {
                if (this.selectedTabstop = t, this.editor.inVirtualSelectionMode)
                    this.editor.selection.setRange(t.firstNonLinked);
                else {
                    var n = this.editor.multiSelect;
                    n.toSingleRange(t.firstNonLinked.clone());
                    for (var i = t.length; i--; )
                        t.hasLinkedRanges && t[i].linked || n.addRange(t[i].clone(), !0);
                    n.ranges[0] && n.addRange(n.ranges[0].clone())
                }
                this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
            }
        }, this.addTabstops = function(e, t, n) {
            if (this.$openTabstops || (this.$openTabstops = []), !e[0]) {
                var i = r.fromPoints(n, n);
                f(i.start, t), f(i.end, t), e[0] = [i], e[0].index = 0
            }
            var o = this.index, s = [o + 1, 0], a = this.ranges;
            e.forEach(function(e, n) {
                for (var i = this.$openTabstops[n] || e, o = e.length; o--; ) {
                    var l = e[o], c = r.fromPoints(l.start, l.end || l.start);
                    g(c.start, t), g(c.end, t), c.original = l, c.tabstop = i, a.push(c), i != e ? i.unshift(c) : i[o] = c, l.fmtString ? (c.linked = !0, i.hasLinkedRanges = !0) : i.firstNonLinked || (i.firstNonLinked = c)
                }
                i.firstNonLinked || (i.hasLinkedRanges = !1), i === e && (s.push(i), this.$openTabstops[n] = i), this.addTabstopMarkers(i)
            }, this), s.length > 2 && (this.tabstops.length && s.push(s.splice(2, 1)[0]), this.tabstops.splice.apply(this.tabstops, s))
        }, this.addTabstopMarkers = function(e) {
            var t = this.editor.session;
            e.forEach(function(e) {
                e.markerId || (e.markerId = t.addMarker(e, "ace_snippet-marker", "text"))
            })
        }, this.removeTabstopMarkers = function(e) {
            var t = this.editor.session;
            e.forEach(function(e) {
                t.removeMarker(e.markerId), e.markerId = null
            })
        }, this.removeRange = function(e) {
            var t = e.tabstop.indexOf(e);
            e.tabstop.splice(t, 1), t = this.ranges.indexOf(e), this.ranges.splice(t, 1), this.editor.session.removeMarker(e.markerId), e.tabstop.length || (t = this.tabstops.indexOf(e.tabstop), -1 != t && this.tabstops.splice(t, 1), this.tabstops.length || this.detach())
        }, this.keyboardHandler = new a, this.keyboardHandler.bindKeys({Tab: function(e) {
                t.snippetManager && t.snippetManager.expandWithTab(e) || e.tabstopManager.tabNext(1)
            },"Shift-Tab": function(e) {
                e.tabstopManager.tabNext(-1)
            },Esc: function(e) {
                e.tabstopManager.detach()
            },Return: function() {
                return !1
            }})
    }).call(u.prototype);
    var d = {};
    d.onChange = s.prototype.onChange, d.setPosition = function(e, t) {
        this.pos.row = e, this.pos.column = t
    }, d.update = function(e, t, n) {
        this.$insertRight = n, this.pos = e, this.onChange(t)
    };
    var g = function(e, t) {
        0 == e.row && (e.column += t.column), e.row += t.row
    }, f = function(e, t) {
        e.row == t.row && (e.column -= t.column), e.row -= t.row
    };
    e("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"), t.snippetManager = new h;
    var m = e("./editor").Editor;
    (function() {
        this.insertSnippet = function(e, n) {
            return t.snippetManager.insertSnippet(this, e, n)
        }, this.expandSnippet = function(e) {
            return t.snippetManager.expandWithTab(this, e)
        }
    }).call(m.prototype)
}), define("ace/autocomplete/popup", ["require", "exports", "module", "ace/edit_session", "ace/virtual_renderer", "ace/editor", "ace/range", "ace/lib/event", "ace/lib/lang", "ace/lib/dom"], function(e, t) {
    "use strict";
    var n = (e("../edit_session").EditSession, e("../virtual_renderer").VirtualRenderer), i = e("../editor").Editor, o = e("../range").Range, r = e("../lib/event"), s = e("../lib/lang"), a = e("../lib/dom"), l = function(e) {
        var t = new n(e);
        t.$maxLines = 4;
        var o = new i(t);
        return o.setHighlightActiveLine(!1), o.setShowPrintMargin(!1), o.renderer.setShowGutter(!1), o.renderer.setHighlightGutterLine(!1), o.$mouseHandler.$focusWaitTimout = 0, o.$highlightTagPending = !0, o
    }, c = function(e) {
        var t = a.createElement("div"), n = new l(t);
        e && e.appendChild(t), t.style.display = "none", n.renderer.content.style.cursor = "default", n.renderer.setStyle("ace_autocomplete"), n.setOption("displayIndentGuides", !1), n.setOption("dragDelay", 150);
        var i = function() {
        };
        n.focus = i, n.$isFocused = !0, n.renderer.$cursorLayer.restartTimer = i, n.renderer.$cursorLayer.element.style.opacity = 0, n.renderer.$maxLines = 8, n.renderer.$keepTextAreaAtCursor = !1, n.setHighlightActiveLine(!1), n.session.highlight(""), n.session.$searchHighlight.clazz = "ace_highlight-marker", n.on("mousedown", function(e) {
            var t = e.getDocumentPosition();
            n.selection.moveToPosition(t), u.start.row = u.end.row = t.row, e.stop()
        });
        var c, h = new o(-1, 0, -1, 1 / 0), u = new o(-1, 0, -1, 1 / 0);
        u.id = n.session.addMarker(u, "ace_active-line", "fullLine"), n.setSelectOnHover = function(e) {
            e ? h.id && (n.session.removeMarker(h.id), h.id = null) : h.id = n.session.addMarker(h, "ace_line-hover", "fullLine")
        }, n.setSelectOnHover(!1), n.on("mousemove", function(e) {
            if (!c)
                return void (c = e);
            if (c.x != e.x || c.y != e.y) {
                c = e, c.scrollTop = n.renderer.scrollTop;
                var t = c.getDocumentPosition().row;
                h.start.row != t && (h.id || n.setRow(t), g(t))
            }
        }), n.renderer.on("beforeRender", function() {
            if (c && -1 != h.start.row) {
                c.$pos = null;
                var e = c.getDocumentPosition().row;
                h.id || n.setRow(e), g(e, !0)
            }
        }), n.renderer.on("afterRender", function() {
            var e = n.getRow(), t = n.renderer.$textLayer, i = t.element.childNodes[e - t.config.firstRow];
            i != t.selectedNode && (t.selectedNode && a.removeCssClass(t.selectedNode, "ace_selected"), t.selectedNode = i, i && a.addCssClass(i, "ace_selected"))
        });
        var d = function() {
            g(-1)
        }, g = function(e, t) {
            e !== h.start.row && (h.start.row = h.end.row = e, t || n.session._emit("changeBackMarker"), n._emit("changeHoverMarker"))
        };
        n.getHoveredRow = function() {
            return h.start.row
        }, r.addListener(n.container, "mouseout", d), n.on("hide", d), n.on("changeSelection", d), n.session.doc.getLength = function() {
            return n.data.length
        }, n.session.doc.getLine = function(e) {
            var t = n.data[e];
            return "string" == typeof t ? t : t && t.value || ""
        };
        var f = n.session.bgTokenizer;
        return f.$tokenizeRow = function(e) {
            var t = n.data[e], i = [];
            if (!t)
                return i;
            "string" == typeof t && (t = {value: t}), t.caption || (t.caption = t.value || t.name);
            for (var o, r, s = -1, a = 0; a < t.caption.length; a++)
                r = t.caption[a], o = t.matchMask & 1 << a ? 1 : 0, s !== o ? (i.push({type: t.className || "" + (o ? "completion-highlight" : ""),value: r}), s = o) : i[i.length - 1].value += r;
            if (t.meta) {
                var l = n.renderer.$size.scrollerWidth / n.renderer.layerConfig.characterWidth, c = t.meta;
                c.length + t.caption.length > l - 2 && (c = c.substr(0, l - t.caption.length - 3) + "\u2026"), i.push({type: "rightAlignedText",value: c})
            }
            return i
        }, f.$updateOnChange = i, f.start = i, n.session.$computeWidth = function() {
            return this.screenWidth = 0
        }, n.$blockScrolling = 1 / 0, n.isOpen = !1, n.isTopdown = !1, n.data = [], n.setData = function(e) {
            n.data = e || [], n.setValue(s.stringRepeat("\n", e.length), -1), n.setRow(0)
        }, n.getData = function(e) {
            return n.data[e]
        }, n.getRow = function() {
            return u.start.row
        }, n.setRow = function(e) {
            e = Math.max(-1, Math.min(this.data.length, e)), u.start.row != e && (n.selection.clearSelection(), u.start.row = u.end.row = e || 0, n.session._emit("changeBackMarker"), n.moveCursorTo(e || 0, 0), n.isOpen && n._signal("select"))
        }, n.on("changeSelection", function() {
            n.isOpen && n.setRow(n.selection.lead.row), n.renderer.scrollCursorIntoView()
        }), n.hide = function() {
            this.container.style.display = "none", this._signal("hide"), n.isOpen = !1
        }, n.show = function(e, t, i) {
            var o = this.container, r = window.innerHeight, s = window.innerWidth, a = this.renderer, l = a.$maxLines * t * 1.4, h = e.top + this.$borderSize;
            h + l > r - t && !i ? (o.style.top = "", o.style.bottom = r - h + "px", n.isTopdown = !1) : (h += t, o.style.top = h + "px", o.style.bottom = "", n.isTopdown = !0), o.style.display = "", this.renderer.$textLayer.checkForSizeChanges();
            var u = e.left;
            u + o.offsetWidth > s && (u = s - o.offsetWidth), o.style.left = u + "px", this._signal("show"), c = null, n.isOpen = !0
        }, n.getTextLeftOffset = function() {
            return this.$borderSize + this.renderer.$padding + this.$imageSize
        }, n.$imageSize = 0, n.$borderSize = 1, n
    };
    a.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_editor.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_editor.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_editor.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}"), t.AcePopup = c
}), define("ace/autocomplete/util", ["require", "exports", "module"], function(e, t) {
    "use strict";
    t.parForEach = function(e, t, n) {
        var i = 0, o = e.length;
        0 === o && n();
        for (var r = 0; o > r; r++)
            t(e[r], function(e, t) {
                i++, i === o && n(e, t)
            })
    };
    var n = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;
    t.retrievePrecedingIdentifier = function(e, t, i) {
        i = i || n;
        for (var o = [], r = t - 1; r >= 0 && i.test(e[r]); r--)
            o.push(e[r]);
        return o.reverse().join("")
    }, t.retrieveFollowingIdentifier = function(e, t, i) {
        i = i || n;
        for (var o = [], r = t; r < e.length && i.test(e[r]); r++)
            o.push(e[r]);
        return o
    }
}), define("ace/autocomplete", ["require", "exports", "module", "ace/keyboard/hash_handler", "ace/autocomplete/popup", "ace/autocomplete/util", "ace/lib/event", "ace/lib/lang", "ace/lib/dom", "ace/snippets"], function(e, t) {
    "use strict";
    var n = e("./keyboard/hash_handler").HashHandler, i = e("./autocomplete/popup").AcePopup, o = e("./autocomplete/util"), r = (e("./lib/event"), e("./lib/lang")), s = e("./lib/dom"), a = e("./snippets").snippetManager, l = function() {
        this.autoInsert = !1, this.autoSelect = !0, this.exactMatch = !1, this.gatherCompletionsId = 0, this.keyboardHandler = new n, this.keyboardHandler.bindKeys(this.commands), this.blurListener = this.blurListener.bind(this), this.changeListener = this.changeListener.bind(this), this.mousedownListener = this.mousedownListener.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this), this.changeTimer = r.delayedCall(function() {
            this.updateCompletions(!0)
        }.bind(this)), this.tooltipTimer = r.delayedCall(this.updateDocTooltip.bind(this), 50)
    };
    (function() {
        this.$init = function() {
            return this.popup = new i(document.body || document.documentElement), this.popup.on("click", function(e) {
                this.insertMatch(), e.stop()
            }.bind(this)), this.popup.focus = this.editor.focus.bind(this.editor), this.popup.on("show", this.tooltipTimer.bind(null, null)), this.popup.on("select", this.tooltipTimer.bind(null, null)), this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null)), this.popup
        }, this.getPopup = function() {
            return this.popup || this.$init()
        }, this.openPopup = function(e, t, n) {
            this.popup || this.$init(), this.popup.setData(this.completions.filtered), e.keyBinding.addKeyboardHandler(this.keyboardHandler);
            var i = e.renderer;
            if (this.popup.setRow(this.autoSelect ? 0 : -1), n)
                n && !t && this.detach();
            else {
                this.popup.setTheme(e.getTheme()), this.popup.setFontSize(e.getFontSize());
                var o = i.layerConfig.lineHeight, r = i.$cursorLayer.getPixelPosition(this.base, !0);
                r.left -= this.popup.getTextLeftOffset();
                var s = e.container.getBoundingClientRect();
                r.top += s.top - i.layerConfig.offset, r.left += s.left - e.renderer.scrollLeft, r.left += i.$gutterLayer.gutterWidth, this.popup.show(r, o)
            }
        }, this.detach = function() {
            this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.off("changeSelection", this.changeListener), this.editor.off("blur", this.blurListener), this.editor.off("mousedown", this.mousedownListener), this.editor.off("mousewheel", this.mousewheelListener), this.changeTimer.cancel(), this.hideDocTooltip(), this.gatherCompletionsId += 1, this.popup && this.popup.isOpen && this.popup.hide(), this.base && this.base.detach(), this.activated = !1, this.completions = this.base = null
        }, this.changeListener = function() {
            var e = this.editor.selection.lead;
            (e.row != this.base.row || e.column < this.base.column) && this.detach(), this.activated ? this.changeTimer.schedule() : this.detach()
        }, this.blurListener = function(e) {
            var t = document.activeElement, n = this.editor.textInput.getElement();
            t != n && t.parentNode != this.popup.container && t != this.tooltipNode && e.relatedTarget != this.tooltipNode && e.relatedTarget != n && this.detach()
        }, this.mousedownListener = function() {
            this.detach()
        }, this.mousewheelListener = function() {
            this.detach()
        }, this.goTo = function(e) {
            var t = this.popup.getRow(), n = this.popup.session.getLength() - 1;
            switch (e) {
                case "up":
                    t = 0 >= t ? n : t - 1;
                    break;
                case "down":
                    t = t >= n ? -1 : t + 1;
                    break;
                case "start":
                    t = 0;
                    break;
                case "end":
                    t = n
            }
            this.popup.setRow(t)
        }, this.insertMatch = function(e) {
            if (e || (e = this.popup.getData(this.popup.getRow())), !e)
                return !1;
            if (e.completer && e.completer.insertMatch)
                e.completer.insertMatch(this.editor, e);
            else {
                if (this.completions.filterText)
                    for (var t, n = this.editor.selection.getAllRanges(), i = 0; t = n[i]; i++)
                        t.start.column -= this.completions.filterText.length, this.editor.session.remove(t);
                e.snippet ? a.insertSnippet(this.editor, e.snippet) : this.editor.execCommand("insertstring", e.value || e)
            }
            this.detach()
        }, this.commands = {Up: function(e) {
                e.completer.goTo("up")
            },Down: function(e) {
                e.completer.goTo("down")
            },"Ctrl-Up|Ctrl-Home": function(e) {
                e.completer.goTo("start")
            },"Ctrl-Down|Ctrl-End": function(e) {
                e.completer.goTo("end")
            },Esc: function(e) {
                e.completer.detach()
            },Space: function(e) {
                e.completer.detach(), e.insert(" ")
            },Return: function(e) {
                return e.completer.insertMatch()
            },"Shift-Return": function(e) {
                e.completer.insertMatch(!0)
            },Tab: function(e) {
                var t = e.completer.insertMatch();
                return t || e.tabstopManager ? t : void e.completer.goTo("down")
            },PageUp: function(e) {
                e.completer.popup.gotoPageUp()
            },PageDown: function(e) {
                e.completer.popup.gotoPageDown()
            }}, this.gatherCompletions = function(e, t) {
            var n = e.getSession(), i = e.getCursorPosition(), r = n.getLine(i.row), s = o.retrievePrecedingIdentifier(r, i.column);
            this.base = n.doc.createAnchor(i.row, i.column - s.length), this.base.$insertRight = !0;
            var a = [], l = e.completers.length;
            return e.completers.forEach(function(r) {
                r.getCompletions(e, n, i, s, function(i, r) {
                    i || (a = a.concat(r));
                    var s = e.getCursorPosition(), c = n.getLine(s.row);
                    t(null, {prefix: o.retrievePrecedingIdentifier(c, s.column, r[0] && r[0].identifierRegex),matches: a,finished: 0 === --l})
                })
            }), !0
        }, this.showPopup = function(e) {
            this.editor && this.detach(), this.activated = !0, this.editor = e, e.completer != this && (e.completer && e.completer.detach(), e.completer = this), e.on("changeSelection", this.changeListener), e.on("blur", this.blurListener), e.on("mousedown", this.mousedownListener), e.on("mousewheel", this.mousewheelListener), this.updateCompletions()
        }, this.updateCompletions = function(e) {
            if (e && this.base && this.completions) {
                var t = this.editor.getCursorPosition(), n = this.editor.session.getTextRange({start: this.base,end: t});
                if (n == this.completions.filterText)
                    return;
                return this.completions.setFilter(n), this.completions.filtered.length && (1 != this.completions.filtered.length || this.completions.filtered[0].value != n || this.completions.filtered[0].snippet) ? void this.openPopup(this.editor, n, e) : this.detach()
            }
            var i = this.gatherCompletionsId;
            this.gatherCompletions(this.editor, function(t, n) {
                var o = function() {
                    return n.finished ? this.detach() : void 0
                }.bind(this), r = n.prefix, s = n && n.matches;
                if (!s || !s.length)
                    return o();
                if (0 === r.indexOf(n.prefix) && i == this.gatherCompletionsId) {
                    this.completions = new c(s), this.exactMatch && (this.completions.exactMatch = !0), this.completions.setFilter(r);
                    var a = this.completions.filtered;
                    return a.length && (1 != a.length || a[0].value != r || a[0].snippet) ? this.autoInsert && 1 == a.length && n.finished ? this.insertMatch(a[0]) : void this.openPopup(this.editor, r, e) : o()
                }
            }.bind(this))
        }, this.cancelContextMenu = function() {
            this.editor.$mouseHandler.cancelContextMenu()
        }, this.updateDocTooltip = function() {
            var e = this.popup, t = e.data, n = t && (t[e.getHoveredRow()] || t[e.getRow()]), i = null;
            return n && this.editor && this.popup.isOpen ? (this.editor.completers.some(function(e) {
                return e.getDocTooltip && (i = e.getDocTooltip(n)), i
            }), i || (i = n), "string" == typeof i && (i = {docText: i}), i && (i.docHTML || i.docText) ? void this.showDocTooltip(i) : this.hideDocTooltip()) : this.hideDocTooltip()
        }, this.showDocTooltip = function(e) {
            this.tooltipNode || (this.tooltipNode = s.createElement("div"), this.tooltipNode.className = "ace_tooltip ace_doc-tooltip", this.tooltipNode.style.margin = 0, this.tooltipNode.style.pointerEvents = "auto", this.tooltipNode.tabIndex = -1, this.tooltipNode.onblur = this.blurListener.bind(this));
            var t = this.tooltipNode;
            e.docHTML ? t.innerHTML = e.docHTML : e.docText && (t.textContent = e.docText), t.parentNode || document.body.appendChild(t);
            var n = this.popup, i = n.container.getBoundingClientRect();
            t.style.top = n.container.style.top, t.style.bottom = n.container.style.bottom, window.innerWidth - i.right < 320 ? (t.style.right = window.innerWidth - i.left + "px", t.style.left = "") : (t.style.left = i.right + 1 + "px", t.style.right = ""), t.style.display = "block"
        }, this.hideDocTooltip = function() {
            if (this.tooltipTimer.cancel(), this.tooltipNode) {
                var e = this.tooltipNode;
                this.editor.isFocused() || document.activeElement != e || this.editor.focus(), this.tooltipNode = null, e.parentNode && e.parentNode.removeChild(e)
            }
        }
    }).call(l.prototype), l.startCommand = {name: "startAutocomplete",exec: function(e) {
            e.completer || (e.completer = new l), e.completer.autoInsert = !1, e.completer.autoSelect = !0, e.completer.showPopup(e), e.completer.cancelContextMenu()
        },bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};
    var c = function(e, t) {
        this.all = e, this.filtered = e, this.filterText = t || "", this.exactMatch = !1
    };
    (function() {
        this.setFilter = function(e) {
            if (e.length > this.filterText && 0 === e.lastIndexOf(this.filterText, 0))
                var t = this.filtered;
            else
                var t = this.all;
            this.filterText = e, t = this.filterCompletions(t, this.filterText), t = t.sort(function(e, t) {
                return t.exactMatch - e.exactMatch || t.score - e.score
            });
            var n = null;
            t = t.filter(function(e) {
                var t = e.snippet || e.caption || e.value;
                return t === n ? !1 : (n = t, !0)
            }), this.filtered = t
        }, this.filterCompletions = function(e, t) {
            var n = [], i = t.toUpperCase(), o = t.toLowerCase();
            e: for (var r, s = 0; r = e[s]; s++) {
                var a = r.value || r.caption || r.snippet;
                if (a) {
                    var l, c, h = -1, u = 0, d = 0;
                    if (this.exactMatch) {
                        if (t !== a.substr(0, t.length))
                            continue e
                    } else
                        for (var g = 0; g < t.length; g++) {
                            var f = a.indexOf(o[g], h + 1), m = a.indexOf(i[g], h + 1);
                            if (l = f >= 0 && (0 > m || m > f) ? f : m, 0 > l)
                                continue e;
                            c = l - h - 1, c > 0 && (-1 === h && (d += 10), d += c), u |= 1 << l, h = l
                        }
                    r.matchMask = u, r.exactMatch = d ? 0 : 1, r.score = (r.score || 0) - d, n.push(r)
                }
            }
            return n
        }
    }).call(c.prototype), t.Autocomplete = l, t.FilteredList = c
}), define("ace/autocomplete/text_completer", ["require", "exports", "module", "ace/range"], function(e, t) {
    function n(e, t) {
        var n = e.getTextRange(o.fromPoints({row: 0,column: 0}, t));
        return n.split(r).length - 1
    }
    function i(e, t) {
        var i = n(e, t), o = e.getValue().split(r), s = Object.create(null), a = o[i];
        return o.forEach(function(e, t) {
            if (e && e !== a) {
                var n = Math.abs(i - t), r = o.length - n;
                s[e] = s[e] ? Math.max(r, s[e]) : r
            }
        }), s
    }
    var o = e("../range").Range, r = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;
    t.getCompletions = function(e, t, n, o, r) {
        var s = i(t, n, o), a = Object.keys(s);
        r(null, a.map(function(e) {
            return {caption: e,value: e,score: s[e],meta: "local"}
        }))
    }
}), define("ace/ext/language_tools", ["require", "exports", "module", "ace/snippets", "ace/autocomplete", "ace/config", "ace/lib/lang", "ace/autocomplete/util", "ace/autocomplete/text_completer", "ace/editor", "ace/config"], function(e, t) {
    "use strict";
    function n(e) {
        var t, n = e.getCursorPosition(), i = e.session.getLine(n.row);
        return e.completers.forEach(function(e) {
            e.identifierRegexps && e.identifierRegexps.forEach(function(e) {
                !t && e && (t = a.retrievePrecedingIdentifier(i, n.column, e))
            })
        }), t || a.retrievePrecedingIdentifier(i, n.column)
    }
    var i = e("../snippets").snippetManager, o = e("../autocomplete").Autocomplete, r = e("../config"), s = e("../lib/lang"), a = e("../autocomplete/util"), l = e("../autocomplete/text_completer"), c = {getCompletions: function(e, t, n, i, o) {
            if (t.$mode.completer)
                return t.$mode.completer.getCompletions(e, t, n, i, o);
            var r = e.session.getState(n.row), s = t.$mode.getCompletions(r, t, n, i);
            o(null, s)
        }}, h = {getCompletions: function(e, t, n, o, r) {
            var s = i.snippetMap, a = [];
            i.getActiveScopes(e).forEach(function(e) {
                for (var t = s[e] || [], n = t.length; n--; ) {
                    var i = t[n], o = i.name || i.tabTrigger;
                    o && a.push({caption: o,snippet: i.content,meta: i.tabTrigger && !i.name ? i.tabTrigger + "\u21e5 " : "snippet",type: "snippet"})
                }
            }, this), r(null, a)
        },getDocTooltip: function(e) {
            "snippet" != e.type || e.docHTML || (e.docHTML = ["<b>", s.escapeHTML(e.caption), "</b>", "<hr></hr>", s.escapeHTML(e.snippet)].join(""))
        }}, u = [h, l, c];
    t.setCompleters = function(e) {
        u = e || []
    }, t.addCompleter = function(e) {
        u.push(e)
    }, t.textCompleter = l, t.keyWordCompleter = c, t.snippetCompleter = h;
    var d = {name: "expandSnippet",exec: function(e) {
            return i.expandWithTab(e)
        },bindKey: "Tab"}, g = function(e, t) {
        f(t.session.$mode)
    }, f = function(e) {
        var t = e.$id;
        i.files || (i.files = {}), m(t), e.modes && e.modes.forEach(f)
    }, m = function(e) {
        if (e && !i.files[e]) {
            var t = e.replace("mode", "snippets");
            i.files[e] = {}, r.loadModule(t, function(t) {
                t && (i.files[e] = t, !t.snippets && t.snippetText && (t.snippets = i.parseSnippetFile(t.snippetText)), i.register(t.snippets || [], t.scope), t.includeScopes && (i.snippetMap[t.scope].includeScopes = t.includeScopes, t.includeScopes.forEach(function(e) {
                    m("ace/mode/" + e)
                })))
            })
        }
    }, p = function(e) {
        var t = e.editor, i = (e.args || "", t.completer && t.completer.activated);
        if ("backspace" === e.command.name)
            i && !n(t) && t.completer.detach();
        else if ("insertstring" === e.command.name) {
            var r = n(t);
            r && !i && (t.completer || (t.completer = new o), t.completer.autoInsert = !1, t.completer.showPopup(t))
        }
    }, v = e("../editor").Editor;
    e("../config").defineOptions(v.prototype, "editor", {enableBasicAutocompletion: {set: function(e) {
                e ? (this.completers || (this.completers = Array.isArray(e) ? e : u), this.commands.addCommand(o.startCommand)) : this.commands.removeCommand(o.startCommand)
            },value: !1},enableLiveAutocompletion: {set: function(e) {
                e ? (this.completers || (this.completers = Array.isArray(e) ? e : u), this.commands.on("afterExec", p)) : this.commands.removeListener("afterExec", p)
            },value: !1},enableSnippets: {set: function(e) {
                e ? (this.commands.addCommand(d), this.on("changeMode", g), g(null, this)) : (this.commands.removeCommand(d), this.off("changeMode", g))
            },value: !1}})
}), function() {
    window.require(["ace/ext/language_tools"], function() {
    })
}(), define("ace/theme/monokai", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
    t.isDark = !0, t.cssClass = "ace-monokai", t.cssText = ".ace-monokai .ace_gutter {background: #2F3129;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #272822;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #49483E}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;border-radius: 2px}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #202020}.ace-monokai .ace_gutter-active-line {background-color: #272727}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}";
    var n = e("../lib/dom");
    n.importCssString(t.cssText, t.cssClass)
}), define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./text_highlight_rules").TextHighlightRules, o = function() {
        this.$rules = {start: [{token: "comment.doc.tag",regex: "@[\\w\\d_]+"}, o.getTagRule(), {defaultToken: "comment.doc",caseInsensitive: !0}]}
    };
    n.inherits(o, i), o.getTagRule = function() {
        return {token: "comment.doc.tag.storage.type",regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"}
    }, o.getStartRule = function(e) {
        return {token: "comment.doc",regex: "\\/\\*(?=\\*)",next: e}
    }, o.getEndRule = function(e) {
        return {token: "comment.doc",regex: "\\*\\/",next: e}
    }, t.DocCommentHighlightRules = o
}), define("ace/mode/c_cpp_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./doc_comment_highlight_rules").DocCommentHighlightRules, o = e("./text_highlight_rules").TextHighlightRules, r = t.cFunctions = "\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b", s = function() {
        var e = "break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using", t = "asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|class|wchar_t|template|char16_t|char32_t", n = "const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local", o = "and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eqconst_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace", s = "NULL|true|false|TRUE|FALSE|nullptr", a = this.$keywords = this.createKeywordMapper({"keyword.control": e,"storage.type": t,"storage.modifier": n,"keyword.operator": o,"variable.language": "this","constant.language": s}, "identifier");
        this.$rules = {start: [{token: "comment",regex: "//",next: "singleLineComment"}, i.getStartRule("doc-start"), {token: "comment",regex: "\\/\\*",next: "comment"}, {token: "string",regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'}, {token: "string",regex: '["].*\\\\$',next: "qqstring"}, {token: "string",regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"}, {token: "string",regex: "['].*\\\\$",next: "qstring"}, {token: "constant.numeric",regex: "0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"}, {token: "constant.numeric",regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"}, {token: "keyword",regex: "#\\s*(?:include|import|pragma|line|define|undef)\\b",next: "directive"}, {token: "keyword",regex: "#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"}, {token: "support.function.C99.c",regex: r}, {token: a,regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}, {token: "keyword.operator",regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"}, {token: "punctuation.operator",regex: "\\?|\\:|\\,|\\;|\\."}, {token: "paren.lparen",regex: "[[({]"}, {token: "paren.rparen",regex: "[\\])}]"}, {token: "text",regex: "\\s+"}],comment: [{token: "comment",regex: ".*?\\*\\/",next: "start"}, {token: "comment",regex: ".+"}],singleLineComment: [{token: "comment",regex: /\\$/,next: "singleLineComment"}, {token: "comment",regex: /$/,next: "start"}, {defaultToken: "comment"}],qqstring: [{token: "string",regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next: "start"}, {defaultToken: "string"}],qstring: [{token: "string",regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next: "start"}, {defaultToken: "string"}],directive: [{token: "constant.other.multiline",regex: /\\/}, {token: "constant.other.multiline",regex: /.*\\/}, {token: "constant.other",regex: "\\s*<.+?>",next: "start"}, {token: "constant.other",regex: '\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next: "start"}, {token: "constant.other",regex: "\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next: "start"}, {token: "constant.other",regex: /[^\\\/]+/,next: "start"}]}, this.embedRules(i, "doc-", [i.getEndRule("start")])
    };
    n.inherits(s, o), t.c_cppHighlightRules = s
}), define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var n = e("../range").Range, i = function() {
    };
    (function() {
        this.checkOutdent = function(e, t) {
            return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1
        }, this.autoOutdent = function(e, t) {
            var i = e.getLine(t), o = i.match(/^(\s*\})/);
            if (!o)
                return 0;
            var r = o[1].length, s = e.findMatchingBracket({row: t,column: r});
            if (!s || s.row == t)
                return 0;
            var a = this.$getIndent(e.getLine(s.row));
            e.replace(new n(t, 0, t, r - 1), a)
        }, this.$getIndent = function(e) {
            return e.match(/^\s*/)[0]
        }
    }).call(i.prototype), t.MatchingBraceOutdent = i
}), define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(e, t) {
    "use strict";
    var n, i = e("../../lib/oop"), o = e("../behaviour").Behaviour, r = e("../../token_iterator").TokenIterator, s = e("../../lib/lang"), a = ["text", "paren.rparen", "punctuation.operator"], l = ["text", "paren.rparen", "punctuation.operator", "comment"], c = {}, h = function(e) {
        var t = -1;
        return e.multiSelect && (t = e.selection.index, c.rangeCount != e.multiSelect.rangeCount && (c = {rangeCount: e.multiSelect.rangeCount})), c[t] ? n = c[t] : void (n = c[t] = {autoInsertedBrackets: 0,autoInsertedRow: -1,autoInsertedLineEnd: "",maybeInsertedBrackets: 0,maybeInsertedRow: -1,maybeInsertedLineStart: "",maybeInsertedLineEnd: ""})
    }, u = function() {
        this.add("braces", "insertion", function(e, t, i, o, r) {
            var a = i.getCursorPosition(), l = o.doc.getLine(a.row);
            if ("{" == r) {
                h(i);
                var c = i.getSelectionRange(), d = o.doc.getTextRange(c);
                if ("" !== d && "{" !== d && i.getWrapBehavioursEnabled())
                    return {text: "{" + d + "}",selection: !1};
                if (u.isSaneInsertion(i, o))
                    return /[\]\}\)]/.test(l[a.column]) || i.inMultiSelectMode ? (u.recordAutoInsert(i, o, "}"), {text: "{}",selection: [1, 1]}) : (u.recordMaybeInsert(i, o, "{"), {text: "{",selection: [1, 1]})
            } else if ("}" == r) {
                h(i);
                var g = l.substring(a.column, a.column + 1);
                if ("}" == g) {
                    var f = o.$findOpeningBracket("}", {column: a.column + 1,row: a.row});
                    if (null !== f && u.isAutoInsertedClosing(a, l, r))
                        return u.popAutoInsertedClosing(), {text: "",selection: [1, 1]}
                }
            } else {
                if ("\n" == r || "\r\n" == r) {
                    h(i);
                    var m = "";
                    u.isMaybeInsertedClosing(a, l) && (m = s.stringRepeat("}", n.maybeInsertedBrackets), u.clearMaybeInsertedClosing());
                    var g = l.substring(a.column, a.column + 1);
                    if ("}" === g) {
                        var p = o.findMatchingBracket({row: a.row,column: a.column + 1}, "}");
                        if (!p)
                            return null;
                        var v = this.$getIndent(o.getLine(p.row))
                    } else {
                        if (!m)
                            return void u.clearMaybeInsertedClosing();
                        var v = this.$getIndent(l)
                    }
                    var A = v + o.getTabString();
                    return {text: "\n" + A + "\n" + v + m,selection: [1, A.length, 1, A.length]}
                }
                u.clearMaybeInsertedClosing()
            }
        }), this.add("braces", "deletion", function(e, t, i, o, r) {
            var s = o.doc.getTextRange(r);
            if (!r.isMultiLine() && "{" == s) {
                h(i);
                var a = o.doc.getLine(r.start.row), l = a.substring(r.end.column, r.end.column + 1);
                if ("}" == l)
                    return r.end.column++, r;
                n.maybeInsertedBrackets--
            }
        }), this.add("parens", "insertion", function(e, t, n, i, o) {
            if ("(" == o) {
                h(n);
                var r = n.getSelectionRange(), s = i.doc.getTextRange(r);
                if ("" !== s && n.getWrapBehavioursEnabled())
                    return {text: "(" + s + ")",selection: !1};
                if (u.isSaneInsertion(n, i))
                    return u.recordAutoInsert(n, i, ")"), {text: "()",selection: [1, 1]}
            } else if (")" == o) {
                h(n);
                var a = n.getCursorPosition(), l = i.doc.getLine(a.row), c = l.substring(a.column, a.column + 1);
                if (")" == c) {
                    var d = i.$findOpeningBracket(")", {column: a.column + 1,row: a.row});
                    if (null !== d && u.isAutoInsertedClosing(a, l, o))
                        return u.popAutoInsertedClosing(), {text: "",selection: [1, 1]}
                }
            }
        }), this.add("parens", "deletion", function(e, t, n, i, o) {
            var r = i.doc.getTextRange(o);
            if (!o.isMultiLine() && "(" == r) {
                h(n);
                var s = i.doc.getLine(o.start.row), a = s.substring(o.start.column + 1, o.start.column + 2);
                if (")" == a)
                    return o.end.column++, o
            }
        }), this.add("brackets", "insertion", function(e, t, n, i, o) {
            if ("[" == o) {
                h(n);
                var r = n.getSelectionRange(), s = i.doc.getTextRange(r);
                if ("" !== s && n.getWrapBehavioursEnabled())
                    return {text: "[" + s + "]",selection: !1};
                if (u.isSaneInsertion(n, i))
                    return u.recordAutoInsert(n, i, "]"), {text: "[]",selection: [1, 1]}
            } else if ("]" == o) {
                h(n);
                var a = n.getCursorPosition(), l = i.doc.getLine(a.row), c = l.substring(a.column, a.column + 1);
                if ("]" == c) {
                    var d = i.$findOpeningBracket("]", {column: a.column + 1,row: a.row});
                    if (null !== d && u.isAutoInsertedClosing(a, l, o))
                        return u.popAutoInsertedClosing(), {text: "",selection: [1, 1]}
                }
            }
        }), this.add("brackets", "deletion", function(e, t, n, i, o) {
            var r = i.doc.getTextRange(o);
            if (!o.isMultiLine() && "[" == r) {
                h(n);
                var s = i.doc.getLine(o.start.row), a = s.substring(o.start.column + 1, o.start.column + 2);
                if ("]" == a)
                    return o.end.column++, o
            }
        }), this.add("string_dquotes", "insertion", function(e, t, n, i, o) {
            if ('"' == o || "'" == o) {
                h(n);
                var r = o, s = n.getSelectionRange(), a = i.doc.getTextRange(s);
                if ("" !== a && "'" !== a && '"' != a && n.getWrapBehavioursEnabled())
                    return {text: r + a + r,selection: !1};
                if (!a) {
                    var l = n.getCursorPosition(), c = i.doc.getLine(l.row), u = c.substring(l.column - 1, l.column), d = c.substring(l.column, l.column + 1), g = i.getTokenAt(l.row, l.column), f = i.getTokenAt(l.row, l.column + 1);
                    if ("\\" == u && g && /escape/.test(g.type))
                        return null;
                    var m, p = g && /string/.test(g.type), v = !f || /string/.test(f.type);
                    if (d == r)
                        m = p !== v;
                    else {
                        if (p && !v)
                            return null;
                        if (p && v)
                            return null;
                        var A = i.$mode.tokenRe;
                        A.lastIndex = 0;
                        var C = A.test(u);
                        A.lastIndex = 0;
                        var w = A.test(u);
                        if (C || w)
                            return null;
                        if (d && !/[\s;,.})\]\\]/.test(d))
                            return null;
                        m = !0
                    }
                    return {text: m ? r + r : "",selection: [1, 1]}
                }
            }
        }), this.add("string_dquotes", "deletion", function(e, t, n, i, o) {
            var r = i.doc.getTextRange(o);
            if (!o.isMultiLine() && ('"' == r || "'" == r)) {
                h(n);
                var s = i.doc.getLine(o.start.row), a = s.substring(o.start.column + 1, o.start.column + 2);
                if (a == r)
                    return o.end.column++, o
            }
        })
    };
    u.isSaneInsertion = function(e, t) {
        var n = e.getCursorPosition(), i = new r(t, n.row, n.column);
        if (!this.$matchTokenType(i.getCurrentToken() || "text", a)) {
            var o = new r(t, n.row, n.column + 1);
            if (!this.$matchTokenType(o.getCurrentToken() || "text", a))
                return !1
        }
        return i.stepForward(), i.getCurrentTokenRow() !== n.row || this.$matchTokenType(i.getCurrentToken() || "text", l)
    }, u.$matchTokenType = function(e, t) {
        return t.indexOf(e.type || e) > -1
    }, u.recordAutoInsert = function(e, t, i) {
        var o = e.getCursorPosition(), r = t.doc.getLine(o.row);
        this.isAutoInsertedClosing(o, r, n.autoInsertedLineEnd[0]) || (n.autoInsertedBrackets = 0), n.autoInsertedRow = o.row, n.autoInsertedLineEnd = i + r.substr(o.column), n.autoInsertedBrackets++
    }, u.recordMaybeInsert = function(e, t, i) {
        var o = e.getCursorPosition(), r = t.doc.getLine(o.row);
        this.isMaybeInsertedClosing(o, r) || (n.maybeInsertedBrackets = 0), n.maybeInsertedRow = o.row, n.maybeInsertedLineStart = r.substr(0, o.column) + i, n.maybeInsertedLineEnd = r.substr(o.column), n.maybeInsertedBrackets++
    }, u.isAutoInsertedClosing = function(e, t, i) {
        return n.autoInsertedBrackets > 0 && e.row === n.autoInsertedRow && i === n.autoInsertedLineEnd[0] && t.substr(e.column) === n.autoInsertedLineEnd
    }, u.isMaybeInsertedClosing = function(e, t) {
        return n.maybeInsertedBrackets > 0 && e.row === n.maybeInsertedRow && t.substr(e.column) === n.maybeInsertedLineEnd && t.substr(0, e.column) == n.maybeInsertedLineStart
    }, u.popAutoInsertedClosing = function() {
        n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1), n.autoInsertedBrackets--
    }, u.clearMaybeInsertedClosing = function() {
        n && (n.maybeInsertedBrackets = 0, n.maybeInsertedRow = -1)
    }, i.inherits(u, o), t.CstyleBehaviour = u
}), define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(e, t) {
    "use strict";
    var n = e("../../lib/oop"), i = e("../../range").Range, o = e("./fold_mode").FoldMode, r = t.FoldMode = function(e) {
        e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)))
    };
    n.inherits(r, o), function() {
        this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(e, t, n) {
            var i = e.getLine(n);
            if (this.singleLineBlockCommentRe.test(i) && !this.startRegionRe.test(i) && !this.tripleStarBlockCommentRe.test(i))
                return "";
            var o = this._getFoldWidgetBase(e, t, n);
            return !o && this.startRegionRe.test(i) ? "start" : o
        }, this.getFoldWidgetRange = function(e, t, n, i) {
            var o = e.getLine(n);
            if (this.startRegionRe.test(o))
                return this.getCommentRegionBlock(e, o, n);
            var r = o.match(this.foldingStartMarker);
            if (r) {
                var s = r.index;
                if (r[1])
                    return this.openingBracketBlock(e, r[1], n, s);
                var a = e.getCommentFoldRange(n, s + r[0].length, 1);
                return a && !a.isMultiLine() && (i ? a = this.getSectionRange(e, n) : "all" != t && (a = null)), a
            }
            if ("markbegin" !== t) {
                var r = o.match(this.foldingStopMarker);
                if (r) {
                    var s = r.index + r[0].length;
                    return r[1] ? this.closingBracketBlock(e, r[1], n, s) : e.getCommentFoldRange(n, s, -1)
                }
            }
        }, this.getSectionRange = function(e, t) {
            var n = e.getLine(t), o = n.search(/\S/), r = t, s = n.length;
            t += 1;
            for (var a = t, l = e.getLength(); ++t < l; ) {
                n = e.getLine(t);
                var c = n.search(/\S/);
                if (-1 !== c) {
                    if (o > c)
                        break;
                    var h = this.getFoldWidgetRange(e, "all", t);
                    if (h) {
                        if (h.start.row <= r)
                            break;
                        if (h.isMultiLine())
                            t = h.end.row;
                        else if (o == c)
                            break
                    }
                    a = t
                }
            }
            return new i(r, s, a, e.getLine(a).length)
        }, this.getCommentRegionBlock = function(e, t, n) {
            for (var o = t.search(/\s*$/), r = e.getLength(), s = n, a = /^\s*(?:\/\*|\/\/)#(end)?region\b/, l = 1; ++n < r; ) {
                t = e.getLine(n);
                var c = a.exec(t);
                if (c && (c[1] ? l-- : l++, !l))
                    break
            }
            var h = n;
            return h > s ? new i(s, o, h, t.length) : void 0
        }
    }.call(r.prototype)
}), define("ace/mode/c_cpp", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/c_cpp_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./text").Mode, o = e("./c_cpp_highlight_rules").c_cppHighlightRules, r = e("./matching_brace_outdent").MatchingBraceOutdent, s = (e("../range").Range, e("./behaviour/cstyle").CstyleBehaviour), a = e("./folding/cstyle").FoldMode, l = function() {
        this.HighlightRules = o, this.$outdent = new r, this.$behaviour = new s, this.foldingRules = new a
    };
    n.inherits(l, i), function() {
        this.lineCommentStart = "//", this.blockComment = {start: "/*",end: "*/"}, this.getNextLineIndent = function(e, t, n) {
            var i = this.$getIndent(t), o = this.getTokenizer().getLineTokens(t, e), r = o.tokens, s = o.state;
            if (r.length && "comment" == r[r.length - 1].type)
                return i;
            if ("start" == e) {
                var a = t.match(/^.*[\{\(\[]\s*$/);
                a && (i += n)
            } else if ("doc-start" == e) {
                if ("start" == s)
                    return "";
                var a = t.match(/^\s*(\/?)\*/);
                a && (a[1] && (i += " "), i += "* ")
            }
            return i
        }, this.checkOutdent = function(e, t, n) {
            return this.$outdent.checkOutdent(t, n)
        }, this.autoOutdent = function(e, t, n) {
            this.$outdent.autoOutdent(t, n)
        }, this.$id = "ace/mode/c_cpp"
    }.call(l.prototype), t.Mode = l
}), define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./text_highlight_rules").TextHighlightRules, o = function() {
        this.$rules = {start: [{token: "comment.doc.tag",regex: "@[\\w\\d_]+"}, o.getTagRule(), {defaultToken: "comment.doc",caseInsensitive: !0}]}
    };
    n.inherits(o, i), o.getTagRule = function() {
        return {token: "comment.doc.tag.storage.type",regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"}
    }, o.getStartRule = function(e) {
        return {token: "comment.doc",regex: "\\/\\*(?=\\*)",next: e}
    }, o.getEndRule = function(e) {
        return {token: "comment.doc",regex: "\\*\\/",next: e}
    }, t.DocCommentHighlightRules = o
}), define("ace/mode/javascript_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./doc_comment_highlight_rules").DocCommentHighlightRules, o = e("./text_highlight_rules").TextHighlightRules, r = function(e) {
        var t = this.createKeywordMapper({"variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword: "const|yield|import|get|set|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type": "const|let|var|function","constant.language": "null|Infinity|NaN|undefined","support.function": "alert","constant.language.boolean": "true|false"}, "identifier"), n = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void", o = "[a-zA-Z\\$_\xa1-\uffff][a-zA-Z\\d\\$_\xa1-\uffff]*\\b", r = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)";
        this.$rules = {no_regex: [{token: "comment",regex: "\\/\\/",next: "line_comment"}, i.getStartRule("doc-start"), {token: "comment",regex: /\/\*/,next: "comment"}, {token: "string",regex: "'(?=.)",next: "qstring"}, {token: "string",regex: '"(?=.)',next: "qqstring"}, {token: "constant.numeric",regex: /0[xX][0-9a-fA-F]+\b/}, {token: "constant.numeric",regex: /[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/}, {token: ["storage.type", "punctuation.operator", "support.function", "punctuation.operator", "entity.name.function", "text", "keyword.operator"],regex: "(" + o + ")(\\.)(prototype)(\\.)(" + o + ")(\\s*)(=)",next: "function_arguments"}, {token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],regex: "(" + o + ")(\\.)(" + o + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next: "function_arguments"}, {token: ["entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],regex: "(" + o + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next: "function_arguments"}, {token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],regex: "(" + o + ")(\\.)(" + o + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next: "function_arguments"}, {token: ["storage.type", "text", "entity.name.function", "text", "paren.lparen"],regex: "(function)(\\s+)(" + o + ")(\\s*)(\\()",next: "function_arguments"}, {token: ["entity.name.function", "text", "punctuation.operator", "text", "storage.type", "text", "paren.lparen"],regex: "(" + o + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next: "function_arguments"}, {token: ["text", "text", "storage.type", "text", "paren.lparen"],regex: "(:)(\\s*)(function)(\\s*)(\\()",next: "function_arguments"}, {token: "keyword",regex: "(?:" + n + ")\\b",next: "start"}, {token: ["punctuation.operator", "support.function"],regex: /(\.)(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/}, {token: ["punctuation.operator", "support.function.dom"],regex: /(\.)(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/}, {token: ["punctuation.operator", "support.constant"],regex: /(\.)(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/}, {token: ["support.constant"],regex: /that\b/}, {token: ["storage.type", "punctuation.operator", "support.function.firebug"],regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/}, {token: t,regex: o}, {token: "keyword.operator",regex: /--|\+\+|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|[!$%&*+\-~\/^]=?/,next: "start"}, {token: "punctuation.operator",regex: /[?:,;.]/,next: "start"}, {token: "paren.lparen",regex: /[\[({]/,next: "start"}, {token: "paren.rparen",regex: /[\])}]/}, {token: "comment",regex: /^#!.*$/}],start: [i.getStartRule("doc-start"), {token: "comment",regex: "\\/\\*",next: "comment_regex_allowed"}, {token: "comment",regex: "\\/\\/",next: "line_comment_regex_allowed"}, {token: "string.regexp",regex: "\\/",next: "regex"}, {token: "text",regex: "\\s+|^$",next: "start"}, {token: "empty",regex: "",next: "no_regex"}],regex: [{token: "regexp.keyword.operator",regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"}, {token: "string.regexp",regex: "/[sxngimy]*",next: "no_regex"}, {token: "invalid",regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/}, {token: "constant.language.escape",regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/}, {token: "constant.language.delimiter",regex: /\|/}, {token: "constant.language.escape",regex: /\[\^?/,next: "regex_character_class"}, {token: "empty",regex: "$",next: "no_regex"}, {defaultToken: "string.regexp"}],regex_character_class: [{token: "regexp.charclass.keyword.operator",regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"}, {token: "constant.language.escape",regex: "]",next: "regex"}, {token: "constant.language.escape",regex: "-"}, {token: "empty",regex: "$",next: "no_regex"}, {defaultToken: "string.regexp.charachterclass"}],function_arguments: [{token: "variable.parameter",regex: o}, {token: "punctuation.operator",regex: "[, ]+"}, {token: "punctuation.operator",regex: "$"}, {token: "empty",regex: "",next: "no_regex"}],comment_regex_allowed: [i.getTagRule(), {token: "comment",regex: "\\*\\/",next: "start"}, {defaultToken: "comment",caseInsensitive: !0}],comment: [i.getTagRule(), {token: "comment",regex: "\\*\\/",next: "no_regex"}, {defaultToken: "comment",caseInsensitive: !0}],line_comment_regex_allowed: [i.getTagRule(), {token: "comment",regex: "$|^",next: "start"}, {defaultToken: "comment",caseInsensitive: !0}],line_comment: [i.getTagRule(), {token: "comment",regex: "$|^",next: "no_regex"}, {defaultToken: "comment",caseInsensitive: !0}],qqstring: [{token: "constant.language.escape",regex: r}, {token: "string",regex: "\\\\$",next: "qqstring"}, {token: "string",regex: '"|$',next: "no_regex"}, {defaultToken: "string"}],qstring: [{token: "constant.language.escape",regex: r}, {token: "string",regex: "\\\\$",next: "qstring"}, {token: "string",regex: "'|$",next: "no_regex"}, {defaultToken: "string"}]}, e && e.noES6 || this.$rules.no_regex.unshift({regex: "[{}]",onMatch: function(e, t, n) {
                return this.next = "{" == e ? this.nextState : "", "{" == e && n.length ? (n.unshift("start", t), "paren") : "}" == e && n.length && (n.shift(), this.next = n.shift(), -1 != this.next.indexOf("string")) ? "paren.quasi.end" : "{" == e ? "paren.lparen" : "paren.rparen"
            },nextState: "start"}, {token: "string.quasi.start",regex: /`/,push: [{token: "constant.language.escape",regex: r}, {token: "paren.quasi.start",regex: /\${/,push: "start"}, {token: "string.quasi.end",regex: /`/,next: "pop"}, {defaultToken: "string.quasi"}]}), this.embedRules(i, "doc-", [i.getEndRule("no_regex")]), this.normalizeRules()
    };
    n.inherits(r, o), t.JavaScriptHighlightRules = r
}), define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var n = e("../range").Range, i = function() {
    };
    (function() {
        this.checkOutdent = function(e, t) {
            return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1
        }, this.autoOutdent = function(e, t) {
            var i = e.getLine(t), o = i.match(/^(\s*\})/);
            if (!o)
                return 0;
            var r = o[1].length, s = e.findMatchingBracket({row: t,column: r});
            if (!s || s.row == t)
                return 0;
            var a = this.$getIndent(e.getLine(s.row));
            e.replace(new n(t, 0, t, r - 1), a)
        }, this.$getIndent = function(e) {
            return e.match(/^\s*/)[0]
        }
    }).call(i.prototype), t.MatchingBraceOutdent = i
}), define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(e, t) {
    "use strict";
    var n, i = e("../../lib/oop"), o = e("../behaviour").Behaviour, r = e("../../token_iterator").TokenIterator, s = e("../../lib/lang"), a = ["text", "paren.rparen", "punctuation.operator"], l = ["text", "paren.rparen", "punctuation.operator", "comment"], c = {}, h = function(e) {
        var t = -1;
        return e.multiSelect && (t = e.selection.index, c.rangeCount != e.multiSelect.rangeCount && (c = {rangeCount: e.multiSelect.rangeCount})), c[t] ? n = c[t] : void (n = c[t] = {autoInsertedBrackets: 0,autoInsertedRow: -1,autoInsertedLineEnd: "",maybeInsertedBrackets: 0,maybeInsertedRow: -1,maybeInsertedLineStart: "",maybeInsertedLineEnd: ""})
    }, u = function() {
        this.add("braces", "insertion", function(e, t, i, o, r) {
            var a = i.getCursorPosition(), l = o.doc.getLine(a.row);
            if ("{" == r) {
                h(i);
                var c = i.getSelectionRange(), d = o.doc.getTextRange(c);
                if ("" !== d && "{" !== d && i.getWrapBehavioursEnabled())
                    return {text: "{" + d + "}",selection: !1};
                if (u.isSaneInsertion(i, o))
                    return /[\]\}\)]/.test(l[a.column]) || i.inMultiSelectMode ? (u.recordAutoInsert(i, o, "}"), {text: "{}",selection: [1, 1]}) : (u.recordMaybeInsert(i, o, "{"), {text: "{",selection: [1, 1]})
            } else if ("}" == r) {
                h(i);
                var g = l.substring(a.column, a.column + 1);
                if ("}" == g) {
                    var f = o.$findOpeningBracket("}", {column: a.column + 1,row: a.row});
                    if (null !== f && u.isAutoInsertedClosing(a, l, r))
                        return u.popAutoInsertedClosing(), {text: "",selection: [1, 1]}
                }
            } else {
                if ("\n" == r || "\r\n" == r) {
                    h(i);
                    var m = "";
                    u.isMaybeInsertedClosing(a, l) && (m = s.stringRepeat("}", n.maybeInsertedBrackets), u.clearMaybeInsertedClosing());
                    var g = l.substring(a.column, a.column + 1);
                    if ("}" === g) {
                        var p = o.findMatchingBracket({row: a.row,column: a.column + 1}, "}");
                        if (!p)
                            return null;
                        var v = this.$getIndent(o.getLine(p.row))
                    } else {
                        if (!m)
                            return void u.clearMaybeInsertedClosing();
                        var v = this.$getIndent(l)
                    }
                    var A = v + o.getTabString();
                    return {text: "\n" + A + "\n" + v + m,selection: [1, A.length, 1, A.length]}
                }
                u.clearMaybeInsertedClosing()
            }
        }), this.add("braces", "deletion", function(e, t, i, o, r) {
            var s = o.doc.getTextRange(r);
            if (!r.isMultiLine() && "{" == s) {
                h(i);
                var a = o.doc.getLine(r.start.row), l = a.substring(r.end.column, r.end.column + 1);
                if ("}" == l)
                    return r.end.column++, r;
                n.maybeInsertedBrackets--
            }
        }), this.add("parens", "insertion", function(e, t, n, i, o) {
            if ("(" == o) {
                h(n);
                var r = n.getSelectionRange(), s = i.doc.getTextRange(r);
                if ("" !== s && n.getWrapBehavioursEnabled())
                    return {text: "(" + s + ")",selection: !1};
                if (u.isSaneInsertion(n, i))
                    return u.recordAutoInsert(n, i, ")"), {text: "()",selection: [1, 1]}
            } else if (")" == o) {
                h(n);
                var a = n.getCursorPosition(), l = i.doc.getLine(a.row), c = l.substring(a.column, a.column + 1);
                if (")" == c) {
                    var d = i.$findOpeningBracket(")", {column: a.column + 1,row: a.row});
                    if (null !== d && u.isAutoInsertedClosing(a, l, o))
                        return u.popAutoInsertedClosing(), {text: "",selection: [1, 1]}
                }
            }
        }), this.add("parens", "deletion", function(e, t, n, i, o) {
            var r = i.doc.getTextRange(o);
            if (!o.isMultiLine() && "(" == r) {
                h(n);
                var s = i.doc.getLine(o.start.row), a = s.substring(o.start.column + 1, o.start.column + 2);
                if (")" == a)
                    return o.end.column++, o
            }
        }), this.add("brackets", "insertion", function(e, t, n, i, o) {
            if ("[" == o) {
                h(n);
                var r = n.getSelectionRange(), s = i.doc.getTextRange(r);
                if ("" !== s && n.getWrapBehavioursEnabled())
                    return {text: "[" + s + "]",selection: !1};
                if (u.isSaneInsertion(n, i))
                    return u.recordAutoInsert(n, i, "]"), {text: "[]",selection: [1, 1]}
            } else if ("]" == o) {
                h(n);
                var a = n.getCursorPosition(), l = i.doc.getLine(a.row), c = l.substring(a.column, a.column + 1);
                if ("]" == c) {
                    var d = i.$findOpeningBracket("]", {column: a.column + 1,row: a.row});
                    if (null !== d && u.isAutoInsertedClosing(a, l, o))
                        return u.popAutoInsertedClosing(), {text: "",selection: [1, 1]}
                }
            }
        }), this.add("brackets", "deletion", function(e, t, n, i, o) {
            var r = i.doc.getTextRange(o);
            if (!o.isMultiLine() && "[" == r) {
                h(n);
                var s = i.doc.getLine(o.start.row), a = s.substring(o.start.column + 1, o.start.column + 2);
                if ("]" == a)
                    return o.end.column++, o
            }
        }), this.add("string_dquotes", "insertion", function(e, t, n, i, o) {
            if ('"' == o || "'" == o) {
                h(n);
                var r = o, s = n.getSelectionRange(), a = i.doc.getTextRange(s);
                if ("" !== a && "'" !== a && '"' != a && n.getWrapBehavioursEnabled())
                    return {text: r + a + r,selection: !1};
                if (!a) {
                    var l = n.getCursorPosition(), c = i.doc.getLine(l.row), u = c.substring(l.column - 1, l.column), d = c.substring(l.column, l.column + 1), g = i.getTokenAt(l.row, l.column), f = i.getTokenAt(l.row, l.column + 1);
                    if ("\\" == u && g && /escape/.test(g.type))
                        return null;
                    var m, p = g && /string/.test(g.type), v = !f || /string/.test(f.type);
                    if (d == r)
                        m = p !== v;
                    else {
                        if (p && !v)
                            return null;
                        if (p && v)
                            return null;
                        var A = i.$mode.tokenRe;
                        A.lastIndex = 0;
                        var C = A.test(u);
                        A.lastIndex = 0;
                        var w = A.test(u);
                        if (C || w)
                            return null;
                        if (d && !/[\s;,.})\]\\]/.test(d))
                            return null;
                        m = !0
                    }
                    return {text: m ? r + r : "",selection: [1, 1]}
                }
            }
        }), this.add("string_dquotes", "deletion", function(e, t, n, i, o) {
            var r = i.doc.getTextRange(o);
            if (!o.isMultiLine() && ('"' == r || "'" == r)) {
                h(n);
                var s = i.doc.getLine(o.start.row), a = s.substring(o.start.column + 1, o.start.column + 2);
                if (a == r)
                    return o.end.column++, o
            }
        })
    };
    u.isSaneInsertion = function(e, t) {
        var n = e.getCursorPosition(), i = new r(t, n.row, n.column);
        if (!this.$matchTokenType(i.getCurrentToken() || "text", a)) {
            var o = new r(t, n.row, n.column + 1);
            if (!this.$matchTokenType(o.getCurrentToken() || "text", a))
                return !1
        }
        return i.stepForward(), i.getCurrentTokenRow() !== n.row || this.$matchTokenType(i.getCurrentToken() || "text", l)
    }, u.$matchTokenType = function(e, t) {
        return t.indexOf(e.type || e) > -1
    }, u.recordAutoInsert = function(e, t, i) {
        var o = e.getCursorPosition(), r = t.doc.getLine(o.row);
        this.isAutoInsertedClosing(o, r, n.autoInsertedLineEnd[0]) || (n.autoInsertedBrackets = 0), n.autoInsertedRow = o.row, n.autoInsertedLineEnd = i + r.substr(o.column), n.autoInsertedBrackets++
    }, u.recordMaybeInsert = function(e, t, i) {
        var o = e.getCursorPosition(), r = t.doc.getLine(o.row);
        this.isMaybeInsertedClosing(o, r) || (n.maybeInsertedBrackets = 0), n.maybeInsertedRow = o.row, n.maybeInsertedLineStart = r.substr(0, o.column) + i, n.maybeInsertedLineEnd = r.substr(o.column), n.maybeInsertedBrackets++
    }, u.isAutoInsertedClosing = function(e, t, i) {
        return n.autoInsertedBrackets > 0 && e.row === n.autoInsertedRow && i === n.autoInsertedLineEnd[0] && t.substr(e.column) === n.autoInsertedLineEnd
    }, u.isMaybeInsertedClosing = function(e, t) {
        return n.maybeInsertedBrackets > 0 && e.row === n.maybeInsertedRow && t.substr(e.column) === n.maybeInsertedLineEnd && t.substr(0, e.column) == n.maybeInsertedLineStart
    }, u.popAutoInsertedClosing = function() {
        n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1), n.autoInsertedBrackets--
    }, u.clearMaybeInsertedClosing = function() {
        n && (n.maybeInsertedBrackets = 0, n.maybeInsertedRow = -1)
    }, i.inherits(u, o), t.CstyleBehaviour = u
}), define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(e, t) {
    "use strict";
    var n = e("../../lib/oop"), i = e("../../range").Range, o = e("./fold_mode").FoldMode, r = t.FoldMode = function(e) {
        e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)))
    };
    n.inherits(r, o), function() {
        this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(e, t, n) {
            var i = e.getLine(n);
            if (this.singleLineBlockCommentRe.test(i) && !this.startRegionRe.test(i) && !this.tripleStarBlockCommentRe.test(i))
                return "";
            var o = this._getFoldWidgetBase(e, t, n);
            return !o && this.startRegionRe.test(i) ? "start" : o
        }, this.getFoldWidgetRange = function(e, t, n, i) {
            var o = e.getLine(n);
            if (this.startRegionRe.test(o))
                return this.getCommentRegionBlock(e, o, n);
            var r = o.match(this.foldingStartMarker);
            if (r) {
                var s = r.index;
                if (r[1])
                    return this.openingBracketBlock(e, r[1], n, s);
                var a = e.getCommentFoldRange(n, s + r[0].length, 1);
                return a && !a.isMultiLine() && (i ? a = this.getSectionRange(e, n) : "all" != t && (a = null)), a
            }
            if ("markbegin" !== t) {
                var r = o.match(this.foldingStopMarker);
                if (r) {
                    var s = r.index + r[0].length;
                    return r[1] ? this.closingBracketBlock(e, r[1], n, s) : e.getCommentFoldRange(n, s, -1)
                }
            }
        }, this.getSectionRange = function(e, t) {
            var n = e.getLine(t), o = n.search(/\S/), r = t, s = n.length;
            t += 1;
            for (var a = t, l = e.getLength(); ++t < l; ) {
                n = e.getLine(t);
                var c = n.search(/\S/);
                if (-1 !== c) {
                    if (o > c)
                        break;
                    var h = this.getFoldWidgetRange(e, "all", t);
                    if (h) {
                        if (h.start.row <= r)
                            break;
                        if (h.isMultiLine())
                            t = h.end.row;
                        else if (o == c)
                            break
                    }
                    a = t
                }
            }
            return new i(r, s, a, e.getLine(a).length)
        }, this.getCommentRegionBlock = function(e, t, n) {
            for (var o = t.search(/\s*$/), r = e.getLength(), s = n, a = /^\s*(?:\/\*|\/\/)#(end)?region\b/, l = 1; ++n < r; ) {
                t = e.getLine(n);
                var c = a.exec(t);
                if (c && (c[1] ? l-- : l++, !l))
                    break
            }
            var h = n;
            return h > s ? new i(s, o, h, t.length) : void 0
        }
    }.call(r.prototype)
}), define("ace/mode/javascript", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range", "ace/worker/worker_client", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./text").Mode, o = e("./javascript_highlight_rules").JavaScriptHighlightRules, r = e("./matching_brace_outdent").MatchingBraceOutdent, s = (e("../range").Range, e("../worker/worker_client").WorkerClient), a = e("./behaviour/cstyle").CstyleBehaviour, l = e("./folding/cstyle").FoldMode, c = function() {
        this.HighlightRules = o, this.$outdent = new r, this.$behaviour = new a, this.foldingRules = new l
    };
    n.inherits(c, i), function() {
        this.lineCommentStart = "//", this.blockComment = {start: "/*",end: "*/"}, this.getNextLineIndent = function(e, t, n) {
            var i = this.$getIndent(t), o = this.getTokenizer().getLineTokens(t, e), r = o.tokens, s = o.state;
            if (r.length && "comment" == r[r.length - 1].type)
                return i;
            if ("start" == e || "no_regex" == e) {
                var a = t.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);
                a && (i += n)
            } else if ("doc-start" == e) {
                if ("start" == s || "no_regex" == s)
                    return "";
                var a = t.match(/^\s*(\/?)\*/);
                a && (a[1] && (i += " "), i += "* ")
            }
            return i
        }, this.checkOutdent = function(e, t, n) {
            return this.$outdent.checkOutdent(t, n)
        }, this.autoOutdent = function(e, t, n) {
            this.$outdent.autoOutdent(t, n)
        }, this.createWorker = function(e) {
            var t = new s(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
            return t.attachToDocument(e.getDocument()), t.on("annotate", function(t) {
                e.setAnnotations(t.data)
            }), t.on("terminate", function() {
                e.clearAnnotations()
            }), t
        }, this.$id = "ace/mode/javascript"
    }.call(c.prototype), t.Mode = c
}), define("ace/mode/java_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./doc_comment_highlight_rules").DocCommentHighlightRules, o = e("./text_highlight_rules").TextHighlightRules, r = function() {
        var e = "abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while", t = "null|Infinity|NaN|undefined", n = "AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object", o = this.createKeywordMapper({"variable.language": "this",keyword: e,"constant.language": t,"support.function": n}, "identifier");
        this.$rules = {start: [{token: "comment",regex: "\\/\\/.*$"}, i.getStartRule("doc-start"), {token: "comment",regex: "\\/\\*",next: "comment"}, {token: "string",regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'}, {token: "string",regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"}, {token: "constant.numeric",regex: "0[xX][0-9a-fA-F]+\\b"}, {token: "constant.numeric",regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"}, {token: "constant.language.boolean",regex: "(?:true|false)\\b"}, {token: o,regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}, {token: "keyword.operator",regex: "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"}, {token: "lparen",regex: "[[({]"}, {token: "rparen",regex: "[\\])}]"}, {token: "text",regex: "\\s+"}],comment: [{token: "comment",regex: ".*?\\*\\/",next: "start"}, {token: "comment",regex: ".+"}]}, this.embedRules(i, "doc-", [i.getEndRule("start")])
    };
    n.inherits(r, o), t.JavaHighlightRules = r
}), define("ace/mode/java", ["require", "exports", "module", "ace/lib/oop", "ace/mode/javascript", "ace/mode/java_highlight_rules"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./javascript").Mode, o = e("./java_highlight_rules").JavaHighlightRules, r = function() {
        i.call(this), this.HighlightRules = o
    };
    n.inherits(r, i), function() {
        this.createWorker = function() {
            return null
        }, this.$id = "ace/mode/java"
    }.call(r.prototype), t.Mode = r
}), define("ace/mode/python_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./text_highlight_rules").TextHighlightRules, o = function() {
        var e = "and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield", t = "True|False|None|NotImplemented|Ellipsis|__debug__", n = "abs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|binfile|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|set|apply|delattr|help|next|setattr|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern", i = this.createKeywordMapper({"invalid.deprecated": "debugger","support.function": n,"constant.language": t,keyword: e}, "identifier"), o = "(?:r|u|ur|R|U|UR|Ur|uR)?", r = "(?:(?:[1-9]\\d*)|(?:0))", s = "(?:0[oO]?[0-7]+)", a = "(?:0[xX][\\dA-Fa-f]+)", l = "(?:0[bB][01]+)", c = "(?:" + r + "|" + s + "|" + a + "|" + l + ")", h = "(?:[eE][+-]?\\d+)", u = "(?:\\.\\d+)", d = "(?:\\d+)", g = "(?:(?:" + d + "?" + u + ")|(?:" + d + "\\.))", f = "(?:(?:" + g + "|" + d + ")" + h + ")", m = "(?:" + f + "|" + g + ")", p = "\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";
        this.$rules = {start: [{token: "comment",regex: "#.*$"}, {token: "string",regex: o + '"{3}',next: "qqstring3"}, {token: "string",regex: o + '"(?=.)',next: "qqstring"}, {token: "string",regex: o + "'{3}",next: "qstring3"}, {token: "string",regex: o + "'(?=.)",next: "qstring"}, {token: "constant.numeric",regex: "(?:" + m + "|\\d+)[jJ]\\b"}, {token: "constant.numeric",regex: m}, {token: "constant.numeric",regex: c + "[lL]\\b"}, {token: "constant.numeric",regex: c + "\\b"}, {token: i,regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}, {token: "keyword.operator",regex: "\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="}, {token: "paren.lparen",regex: "[\\[\\(\\{]"}, {token: "paren.rparen",regex: "[\\]\\)\\}]"}, {token: "text",regex: "\\s+"}],qqstring3: [{token: "constant.language.escape",regex: p}, {token: "string",regex: '"{3}',next: "start"}, {defaultToken: "string"}],qstring3: [{token: "constant.language.escape",regex: p}, {token: "string",regex: "'{3}",next: "start"}, {defaultToken: "string"}],qqstring: [{token: "constant.language.escape",regex: p}, {token: "string",regex: "\\\\$",next: "qqstring"}, {token: "string",regex: '"|$',next: "start"}, {defaultToken: "string"}],qstring: [{token: "constant.language.escape",regex: p}, {token: "string",regex: "\\\\$",next: "qstring"}, {token: "string",regex: "'|$",next: "start"}, {defaultToken: "string"}]}
    };
    n.inherits(o, i), t.PythonHighlightRules = o
}), define("ace/mode/folding/pythonic", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode"], function(e, t) {
    "use strict";
    var n = e("../../lib/oop"), i = e("./fold_mode").FoldMode, o = t.FoldMode = function(e) {
        this.foldingStartMarker = new RegExp("([\\[{])(?:\\s*)$|(" + e + ")(?:\\s*)(?:#.*)?$")
    };
    n.inherits(o, i), function() {
        this.getFoldWidgetRange = function(e, t, n) {
            var i = e.getLine(n), o = i.match(this.foldingStartMarker);
            return o ? o[1] ? this.openingBracketBlock(e, o[1], n, o.index) : o[2] ? this.indentationBlock(e, n, o.index + o[2].length) : this.indentationBlock(e, n) : void 0
        }
    }.call(o.prototype)
}), define("ace/mode/python", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/python_highlight_rules", "ace/mode/folding/pythonic", "ace/range"], function(e, t) {
    "use strict";
    var n = e("../lib/oop"), i = e("./text").Mode, o = e("./python_highlight_rules").PythonHighlightRules, r = e("./folding/pythonic").FoldMode, s = e("../range").Range, a = function() {
        this.HighlightRules = o, this.foldingRules = new r("\\:")
    };
    n.inherits(a, i), function() {
        this.lineCommentStart = "#", this.getNextLineIndent = function(e, t, n) {
            var i = this.$getIndent(t), o = this.getTokenizer().getLineTokens(t, e), r = o.tokens;
            if (r.length && "comment" == r[r.length - 1].type)
                return i;
            if ("start" == e) {
                var s = t.match(/^.*[\{\(\[\:]\s*$/);
                s && (i += n)
            }
            return i
        };
        var e = {pass: 1,"return": 1,raise: 1,"break": 1,"continue": 1};
        this.checkOutdent = function(t, n, i) {
            if ("\r\n" !== i && "\r" !== i && "\n" !== i)
                return !1;
            var o = this.getTokenizer().getLineTokens(n.trim(), t).tokens;
            if (!o)
                return !1;
            do
                var r = o.pop();
            while (r && ("comment" == r.type || "text" == r.type && r.value.match(/^\s+$/)));
            return r ? "keyword" == r.type && e[r.value] : !1
        }, this.autoOutdent = function(e, t, n) {
            n += 1;
            var i = this.$getIndent(t.getLine(n)), o = t.getTabString();
            i.slice(-o.length) == o && t.remove(new s(n, i.length - o.length, n, i.length))
        }, this.$id = "ace/mode/python"
    }.call(a.prototype), t.Mode = a
}), function() {
    myinterviewtrainer.createNS("problem"), myinterviewtrainer.problem.objective_tour = new Tour({name: "problem_objective",backdrop: !0,backdropPadding: 15,storage: !1,onEnd: function(e) {
            $.ajax({type: "POST",url: "/end-tour/",data: {tour: "problem_objective_tour",ref: "slide_" + e._current}})
        },steps: [{element: $(".problem-time-counter")[0],title: "Problem Timer",content: "Score for a problem depends on the time you take to solve the problem. The faster you solve, the more points you get.",placement: "top"}, {element: $("input[type=Submit][value=Submit]")[0],title: "Submit your answer",content: "This submits the answer to our system and we immediately tell you whether your answer is correct. However, wrong submissions incur penalty as they would in an interview.",placement: "top",onShown: function() {
                    var e = $("input[type=Submit][value=Submit]")[0];
                    $("html, body").animate({scrollTop: $(e).offset().top}, 500), e.focus()
                }}, {element: $(".hint-panel")[0],title: "Hints",content: "We have prepared hints to prompt you towards the answer in case you are stuck. Opening hints also has penalty associated with it. However, if you can\u2019t figure out a solution in first 10-15 minutes, we recommend you to take a look at one of the hints.",placement: "top"}]}), myinterviewtrainer.problem.code_tour = new Tour({name: "problem_code",backdrop: !0,backdropPadding: 15,storage: !1,onEnd: function(e) {
            $.ajax({type: "POST",url: "/end-tour/",data: {tour: "problem_code_tour",ref: "slide_" + e._current}})
        },steps: [{element: $("input[type=Button][value=Reset]")[0],title: "Reset",content: "In case you erased the function definition by mistake, this will help to reset the code to the initial template.",placement: "top",onShown: function() {
                    var e = $("input[type=Button][value=Reset]")[0];
                    $("html, body").animate({scrollTop: $(e).offset().top}, 500), e.focus()
                }}, {element: $("input[type=Submit][value=Test]")[0],title: "Test your solution",content: "This helps you test code without actually submitting it for evaluation. We try out your code on handcrafted sample data. We recommend doing it before actually submitting the code.",placement: "top",onShown: function() {
                    $("input[type=Submit][value=Test]")[0].focus()
                }}]})
}(), function() {
    myinterviewtrainer.createNS("problem.submit");
    var e = function() {
        var e = document.getElementById("editor");
        if (null === e)
            return myinterviewtrainer.problem.editor = null, null;
        ace.require("ace/ext/language_tools"), myinterviewtrainer.problem.editor = ace.edit("editor");
        var t = myinterviewtrainer.problem.editor;
        return t.setOptions({showLineNumbers: !0,displayIndentGuides: !0,enableBasicAutocompletion: !0,fontSize: "12px",maxLines: 100,minLines: 20,showInvisibles: !1,showPrintMargin: !1,scrollPastEnd: !1,useSoftTabs: !0,tabSize: 4}), t.$blockScrolling = 1 / 0, t.setTheme("ace/theme/monokai"), t.getSession().setMode("ace/mode/" + languageMap[$("#select-language").val()]), t.commands.addCommand({name: "SaveCode",bindKey: {win: "Ctrl-s",mac: "Command-s",linux: "Ctrl-s"},exec: function() {
                myinterviewtrainer.problem.save_code.apply($("#problem-save-btn"))
            }}), t
    };
    myinterviewtrainer.problem.submit.init = function(t) {
        var n = e();
        null !== n && (myinterviewtrainer.problem.change_language.init(t), $("input:submit").on("click keypress", function() {
            $(this.form).data("submission_type", this.value)
        }), $("#edit_problem_" + t.problem_id).on("submit", function() {
            var e, t, i = new Date, o = $(this);
            return $("#hidden_code", this).val(n.getValue()), $("#submission_type", this).val(o.data("submission_type")), $.loader({className: "blue-with-image-2",content: "Loading"}), $.ajax({url: o.attr("action"),type: o.attr("method"),data: o.serialize(),success: function(n) {
                    myinterviewtrainer.problem.status.init({url: n.status_url}), $("#status-ht").parent().show(), $("#status-ht").show(), $("#status-ht").html("Evaluating..."), $("#status-ct").empty(), $("html, body").animate({scrollTop: $("#status-ht").parent().offset().top - 10}, 500), $.loader("close"), $("#action_message").text("Solution submitted at " + i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds()), "Submit" === o.data("submission_type") && (t = $("#problem-timer"), e = t.data("submission-count") + 1, t.data("submission-count", e))
                }}), !1
        }), myinterviewtrainer.problem.init_auto_save())
    }
}(), myinterviewtrainer.createNS("problem.status"), myinterviewtrainer.problem.status.init = function(e) {
    $("input[type=Submit]").addClass("disabled");
    var t = setInterval(function() {
        $.ajax({url: e.url,success: function(e) {
                var n, i, o, r;
                n = $("#status-ct"), n.parent().show(), n.html(e.html), 0 === e.status && (clearInterval(t), $("input[type=Submit]").removeClass("disabled"), $("#action_message").text(""), $('[data-toggle="tooltip"]').tooltip(), 256 === e.result && 0 === e.submission_type && (i = $(".hint-list li"), i.removeClass("locked-hint"), i.addClass("accessed-hint"), i.find("i").removeClass("fa-lock").addClass("fa-unlock-alt"), o = $("#problem_comment"), o.find("div[role=tabpanel] ul").hasClass("hidden") && (r = document.createElement("div"), r.setAttribute("data-href", e.comment_href), r.setAttribute("data-width", "100%"), r.classList.add("fb-comments"), o.find("#fb-comments-solved").append(r), o.find("div[role=tabpanel] ul").removeClass("hidden"), "undefined" != typeof FB && FB.XFBML.parse())), $("#status-ht").hide())
            }})
    }, 2e3)
}, function() {
    myinterviewtrainer.createNS("problem"), myinterviewtrainer.problem.save_code = function() {
        var e = new Date;
        $("#hidden_code", $(this).parents("form")).val(myinterviewtrainer.problem.editor.getValue()), $("#problem-save-btn").val("Saving..."), $.ajax({url: $(this).data("url"),method: "POST",data: $(this).parents("form").serialize(),success: function() {
                $("#problem-save-btn").val("Save"), $("#action_message").text("Saved code at " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds())
            }})
    }, myinterviewtrainer.problem.reset_code = function() {
        var e = this, t = $.bootModal({modal_size: "modal-sm",title: "Reset Solution?",message: "You will irreversibly loose your saved solution. Are you sure you want to go back to the original template?",buttons: [{type: "danger",btnText: "Reset!",btnClass: "btn-danger",handler: function() {
                        t.modal("hide"), $.ajax({url: $(e).data("url"),method: "POST",data: $(e).parents("form").serialize(),success: function() {
                                window.location = window.location
                            }})
                    }}, {btnText: "Close",btnAction: "close"}]})
    }, myinterviewtrainer.problem.init_auto_save = function() {
        var e;
        null !== myinterviewtrainer.problem.editor && (myinterviewtrainer.problem.editor.on("change", function() {
            e && clearTimeout(e), e = setTimeout(function() {
                myinterviewtrainer.problem.save_code.apply($("#problem-save-btn"))
            }, 1e3)
        }), $("#problem-save-btn").click(myinterviewtrainer.problem.save_code), $("#problem-reset-btn").click(myinterviewtrainer.problem.reset_code))
    }
}(), function() {
    myinterviewtrainer.createNS("problem.change_language"), myinterviewtrainer.problem.change_language.init = function(e) {
        $("#select-language").on("change", function() {
            var t = this;
            $.loader({className: "blue-with-image-2",content: "Loading"}), $.ajax({url: e.getCodeUrl + "/" + $(this).val(),success: function(e) {
                    $("#time-limit")[0].innerHTML = e.time_limit, $("#memory-limit")[0].innerHTML = e.memory_limit, myinterviewtrainer.problem.editor.setValue(e.code), myinterviewtrainer.problem.editor.getSession().setMode("ace/mode/" + languageMap[$(t).val()]), $.loader("close")
                }})
        })
    }
}();
var languageMap = {4: "python",11: "c_cpp",44: "c_cpp",511: "java"};
!function() {
    var e = function() {
        var e, t, n, i, o, r, s, a, l, c, h, u, d, g, f;
        e = $(".problem-timer"), t = $("#problem-timer"), n = t.data("time"), i = t.data("decay-constants"), o = t.data("problem-type"), f = parseInt(t.data("max-score")), n && setInterval(function() {
            n.seconds++, n.total_seconds++, 60 === n.seconds && (n.seconds = 0, n.minutes++), 60 === n.minutes && (n.minutes = 0, n.hours++), $(".seconds", e).html(n.seconds.toString().padLeft(2)), $(".minutes", e).html(n.minutes.toString().padLeft(2)), $(".hours", e).html(n.hours.toString().padLeft(2)), s = Math.pow(i.minutes_to_plateau, 2), a = Math.pow(n.total_seconds / 60, 2), l = i.bottom_score_factor + (1 - i.bottom_score_factor) * s / (10 * a + s), u = t.data("submission-count"), "objective" === o ? c = l * i.attempt_reduction_factor : (h = Math.pow(i.attempt_reduction_factor, u), c = Math.max(i.max_time_attempt_decay, l * h)), $(".hint-list li").not(".accessed-hint").filter(function() {
                return $(this).data("less-score") <= 100 - 100 * c
            }).each(function() {
                var e = $(this);
                e.removeClass("locked-hint").addClass("accessed-hint"), e.find("i").removeClass("fa-lock").addClass("fa-unlock-alt"), $(".bottom-right").notify({fadeOut: {enabled: !0,delay: 6e4},message: {html: '<i class="fa fa-gift glyphicon-danger"></i><span>Hey, we have opened ' + e.find("a").text() + " for you for free.</span>"}}).show()
            }), .45 >= c && t.data("chat-message-shown") !== !0 && (t.attr("data-chat-message-shown", !0), $(".bottom-right").notify({fadeOut: {enabled: !0,delay: 6e4},message: {html: '<a href="/chat/" target="_blank"><i class="glyphicon glyphicon-comment glyphicon-danger"></i><span>Hey, it looks like you are stuck, you can seek help from us.</span></a>'}}).show()), g = $(".hint-list li").not(".locked-hint").map(function() {
                return $(this).data("less-score")
            }), g.push(0), g = Math.max.apply(Math, g), d = (100 - g) / 100, r = Math.round(f * Math.min(d, c)), $("#current_score").text(r)
        }, 1e3)
    }, t = function(e) {
        {
            var t = $(e);
            $("a", e)
        }
        t.removeClass("locked-hint").addClass("accessed-hint"), t.find("i").removeClass("fa-lock").addClass("fa-unlock-alt"), $.ajax({url: $("a", e).attr("href"),success: function(e) {
                $infoModal = $.bootModal({type: "primary",modal_size: "modal-lg",title: "Access Hint",message: e,buttons: [{btnText: "Close",btnAction: "close"}]})
            }})
    }, n = function() {
        $(".hint-list").delegate(".locked-hint", "click", function() {
            var e = this;
            return $infoModal = $.bootModal({type: "primary",title: "Warning",message: "Accessing this hint would deduct " + $(this).data("less-score") + "  percent of your score. Are you sure you want to access this hint?",buttons: [{type: "primary",btnText: "Access Hint",handler: function() {
                            t(e), $infoModal.modal("hide")
                        }}, {btnText: "No Thanks",btnAction: "close"}]}), !1
        }), $(".hint-list").delegate(".accessed-hint", "click", function() {
            return t(this), !1
        })
    }, i = function() {
        $("#blur-button").click(function() {
            $(this).hide(), $(this).parent().removeClass("blur")
        })
    };
    e(), n(), i(), $("#help_anchor").tooltip({container: "body"}), $("ul[role=tablist] :first-child a").tab("show"), $(document).on("click", "a[aria-controls=fb-comments-solved]", function() {
        var e = $("#fb-comments-solved");
        e.find(".fb-comments span").width("100%"), e.find(".fb-comments span iframe").width("100%")
    })
}(), function() {
    myinterviewtrainer.createNS("problem.prenote"), myinterviewtrainer.problem.prenote.init = function(e) {
        e.prenote && ($infoModal = $.bootModal({type: "primary",title: "PreNote",message: e.prenote,buttons: [{btnText: "Close",btnAction: "close"}]}))
    }
}();

