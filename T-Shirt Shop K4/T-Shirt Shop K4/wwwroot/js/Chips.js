﻿/*
 * Metro 4 Components Library v4.4.2  (https://metroui.org.ua)
 * Copyright 2012-2020 Sergey Pimenov
 * Built at 08/11/2020 22:09:20
 * Licensed under MIT
 */

!function (e, u) {
    "use strict";
    var t, i, s, n, a, o, r, l, c, d, h, p, f, m, v, g = ["opacity", "zIndex"];

    function w(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }

    function x(e) {
        return e === u || null === e
    }

    function b(e) {
        return e.replace(/-([a-z])/g, function (e, t) {
            return t.toUpperCase()
        })
    }

    function C(e) {
        return !(!e || "[object Object]" !== Object.prototype.toString.call(e)) && (!(e = e.prototype !== u) || e.constructor && "function" == typeof e.constructor)
    }

    function y(e) {
        for (var t in e) if (D(e, t)) return !1;
        return !0
    }

    function _(e) {
        return e instanceof Object && "length" in e
    }

    function S(e, t) {
        return t = t || " ", e.split(t).map(function (e) {
            return ("" + e).trim()
        }).filter(function (e) {
            return "" !== e
        })
    }

    function T(e, t) {
        return t = t || [0, ""], e = String(e), t[0] = parseFloat(e), t[1] = e.match(/[\d.\-+]*\s*(.*)/)[1] || "", t
    }

    function k(e, t) {
        e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
        return void 0 !== e[1] ? e[1] : t
    }

    function E(e, t, n) {
        t = b(t), -1 < ["scrollLeft", "scrollTop"].indexOf(t) ? e[t] = parseInt(n) : e.style[t] = isNaN(n) || -1 < g.indexOf("" + t) ? n : n + "px"
    }

    function I(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function A(e, t, n) {
        var i;
        return x(n) && 1 === e.nodeType && (i = "data-" + t.replace(/[A-Z]/g, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i)) ? (n = function (t) {
            try {
                return JSON.parse(t)
            } catch (e) {
                return t
            }
        }(n), ee.set(e, t, n)) : n = u), n
    }

    function M(e) {
        return "string" != typeof e ? u : e.replace(/-/g, "").toLowerCase()
    }

    function D(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function O(e) {
        e = e || window.location.hostname;
        return "localhost" === e || "127.0.0.1" === e || "[::1]" === e || "" === e || null !== e.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    }

    function P(e) {
        delete s[e]
    }

    function N(e) {
        if (n) setTimeout(N, 0, e); else {
            var t = s[e];
            if (t) {
                n = !0;
                try {
                    !function (e) {
                        var t = e.callback, n = e.args;
                        switch (n.length) {
                            case 0:
                                t();
                                break;
                            case 1:
                                t(n[0]);
                                break;
                            case 2:
                                t(n[0], n[1]);
                                break;
                            case 3:
                                t(n[0], n[1], n[2]);
                                break;
                            default:
                                t.apply(u, n)
                        }
                    }(t)
                } finally {
                    P(e), n = !1
                }
            }
        }
    }

    function R(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function L() {
        for (var e = 0; e < m.length; e++) m[e][0](m[e][1]);
        v = !(m = [])
    }

    function B(e, t) {
        m.push([e, t]), v || (v = !0, f(L, 0))
    }

    function V(e, t) {
        function n(e) {
            U(t, e)
        }

        try {
            e(function (e) {
                F(t, e)
            }, n)
        } catch (e) {
            n(e)
        }
    }

    function H(t) {
        var e = t.owner, n = e.state_, i = e.data_, s = t[n], t = t.then;
        if ("function" == typeof s) {
            n = d;
            try {
                i = s(i)
            } catch (e) {
                U(t, e)
            }
        }
        z(t, i) || (n === d && F(t, i), n === h && U(t, i))
    }

    function z(t, n) {
        var i;
        try {
            if (t === n) throw new TypeError("A promises callback cannot return that same promise.");
            if (n && ("function" == typeof n || "object" == typeof n)) {
                var e = n.then;
                if ("function" == typeof e) return e.call(n, function (e) {
                    i || (i = !0, (n !== e ? F : j)(t, e))
                }, function (e) {
                    i || (i = !0, U(t, e))
                }), 1
            }
        } catch (e) {
            return i || U(t, e), 1
        }
    }

    function F(e, t) {
        e !== t && z(e, t) || j(e, t)
    }

    function j(e, t) {
        e.state_ === l && (e.state_ = c, e.data_ = t, B(W, e))
    }

    function U(e, t) {
        e.state_ === l && (e.state_ = c, e.data_ = t, B(G, e))
    }

    function q(e) {
        var t = e.then_;
        e.then_ = u;
        for (var n = 0; n < t.length; n++) H(t[n])
    }

    function W(e) {
        e.state_ = d, q(e)
    }

    function G(e) {
        e.state_ = h, q(e)
    }

    function Y(e) {
        if ("function" != typeof e) throw new TypeError("Promise constructor takes a function argument");
        if (!(this instanceof Y)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this.then_ = [], V(e, this)
    }

    (t = "undefined" == typeof self ? void 0 === e ? window : e : self).setImmediate || (i = 1, n = !(s = {}), K = (K = Object.getPrototypeOf && Object.getPrototypeOf(t)) && K.setTimeout ? K : t, a = "[object process]" === {}.toString.call(t.process) ? function (e) {
        t.process.nextTick(function () {
            N(e)
        })
    } : t.MessageChannel ? ((r = new MessageChannel).port1.onmessage = function (e) {
        N(e.data)
    }, function (e) {
        r.port2.postMessage(e)
    }) : (o = "setImmediate$" + Math.random() + "$", t.addEventListener("message", function (e) {
        e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(o) && N(+e.data.slice(o.length))
    }, !1), function (e) {
        t.postMessage(o + e, "*")
    }), K.setImmediate = function (e) {
        "function" != typeof e && (e = new Function("" + e));
        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
        return s[i] = {callback: e, args: t}, a(i), i++
    }, K.clearImmediate = P), (K = window).Promise || (l = "pending", c = "sealed", d = "fulfilled", h = "rejected", p = function () {
    }, f = "undefined" != typeof setImmediate ? setImmediate : setTimeout, m = [], Y.prototype = {
        constructor: Y,
        state_: l,
        then_: null,
        data_: u,
        then: function (e, t) {
            t = {owner: this, then: new this.constructor(p), fulfilled: e, rejected: t};
            return this.state_ === d || this.state_ === h ? B(H, t) : this.then_.push(t), t.then
        },
        done: function (e) {
            return this.then(e, null)
        },
        always: function (e) {
            return this.then(e, e)
        },
        catch: function (e) {
            return this.then(null, e)
        }
    }, Y.all = function (o) {
        if (!R(o)) throw new TypeError("You must pass an array to Promise.all().");
        return new this(function (n, e) {
            var i = [], s = 0;
            for (var t, a = 0; a < o.length; a++) (t = o[a]) && "function" == typeof t.then ? t.then(function (t) {
                return s++, function (e) {
                    i[t] = e, --s || n(i)
                }
            }(a), e) : i[a] = t;
            s || n(i)
        })
    }, Y.race = function (s) {
        if (!R(s)) throw new TypeError("You must pass an array to Promise.race().");
        return new this(function (e, t) {
            for (var n, i = 0; i < s.length; i++) (n = s[i]) && "function" == typeof n.then ? n.then(e, t) : e(n)
        })
    }, Y.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === this ? t : new this(function (e) {
            e(t)
        })
    }, Y.reject = function (n) {
        return new this(function (e, t) {
            t(n)
        })
    }, void 0 === K.Promise && (K.Promise = Y));
    var K = "v1.0.9. Built at 19/10/2020 18:36:03",
        J = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        Q = function (e, t) {
            return new Q.init(e, t)
        };
    Q.version = K, Q.fn = Q.prototype = {
        version: K,
        constructor: Q,
        length: 0,
        uid: "",
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        indexOf: [].indexOf,
        reverse: [].reverse
    }, Q.extend = Q.fn.extend = function () {
        var e, t, n = arguments[0] || {}, i = 1, s = arguments.length;
        for ("object" != typeof n && "function" != typeof n && (n = {}), i === s && (n = this, i--); i < s; i++) if (null != (e = arguments[i])) for (t in e) D(e, t) && (n[t] = e[t]);
        return n
    }, Q.assign = function () {
        var e, t, n = arguments[0] || {}, i = 1, s = arguments.length;
        for ("object" != typeof n && "function" != typeof n && (n = {}), i === s && (n = this, i--); i < s; i++) if (null != (e = arguments[i])) for (t in e) D(e, t) && e[t] !== u && (n[t] = e[t]);
        return n
    };

    function X() {
        return Date.now()
    }

    function $(e) {
        var t = document.createElement("script");
        if (t.type = "text/javascript", x(e)) return Q(t);
        e = Q(e)[0];
        return e.src ? t.src = e.src : t.textContent = e.innerText, document.body.appendChild(t), e.parentNode && e.parentNode.removeChild(e), t
    }

    Q.extend({
        intervalId: -1,
        intervalQueue: [],
        intervalTicking: !1,
        intervalTickId: null,
        setInterval: function (e, t) {
            var n, i = this;
            return this.intervalId++, this.intervalQueue.push({
                id: this.intervalId,
                fn: e,
                interval: t,
                lastTime: X()
            }), this.intervalTicking || (n = function () {
                i.intervalTickId = requestAnimationFrame(n), Q.each(i.intervalQueue, function () {
                    var e = this;
                    (e.interval < 17 || X() - e.lastTime >= e.interval) && (e.fn(), e.lastTime = X())
                })
            }, this.intervalTicking = !0, n()), this.intervalId
        },
        clearInterval: function (e) {
            for (var t = 0; t < this.intervalQueue.length; t++) if (e === this.intervalQueue[t].id) {
                this.intervalQueue.splice(t, 1);
                break
            }
            0 === this.intervalQueue.length && (cancelAnimationFrame(this.intervalTickId), this.intervalTicking = !1)
        },
        setTimeout: function (e, t) {
            var n = this, i = this.setInterval(function () {
                n.clearInterval(i), e()
            }, t);
            return i
        },
        clearTimeout: function (e) {
            return this.clearInterval(e)
        }
    }), Q.fn.extend({
        index: function (e) {
            var t, n = -1;
            return 0 === this.length ? n : (t = x(e) ? this[0] : e instanceof Q && 0 < e.length ? e[0] : "string" == typeof e ? Q(e)[0] : u, x(t) || t && t.parentNode && Q.each(t.parentNode.children, function (e) {
                this === t && (n = e)
            }), n)
        }, get: function (e) {
            return e === u ? this.items() : e < 0 ? this[e + this.length] : this[e]
        }, eq: function (e) {
            return !x(e) && 0 < this.length ? Q.extend(Q(this.get(e)), {_prevObj: this}) : this
        }, is: function (t) {
            var n = !1;
            return 0 !== this.length && (t instanceof Q ? this.same(t) : (":selected" === t ? this.each(function () {
                this.selected && (n = !0)
            }) : ":checked" === t ? this.each(function () {
                this.checked && (n = !0)
            }) : ":visible" === t ? this.each(function () {
                w(this) && (n = !0)
            }) : ":hidden" === t ? this.each(function () {
                var e = getComputedStyle(this);
                "hidden" !== this.getAttribute("type") && !this.hidden && "none" !== e.display && "hidden" !== e.visibility && 0 !== parseInt(e.opacity) || (n = !0)
            }) : "string" == typeof t && -1 === [":selected"].indexOf(t) ? this.each(function () {
                J.call(this, t) && (n = !0)
            }) : _(t) ? this.each(function () {
                var e = this;
                Q.each(t, function () {
                    e === this && (n = !0)
                })
            }) : "object" == typeof t && 1 === t.nodeType && this.each(function () {
                this === t && (n = !0)
            }), n))
        }, same: function (e) {
            var t = !0;
            return e instanceof Q || (e = Q(e)), this.length === e.length && (this.each(function () {
                -1 === e.items().indexOf(this) && (t = !1)
            }), t)
        }, last: function () {
            return this.eq(this.length - 1)
        }, first: function () {
            return this.eq(0)
        }, odd: function () {
            var e = this.filter(function (e, t) {
                return t % 2 == 0
            });
            return Q.extend(e, {_prevObj: this})
        }, even: function () {
            var e = this.filter(function (e, t) {
                return t % 2 != 0
            });
            return Q.extend(e, {_prevObj: this})
        }, filter: function (e) {
            var t;
            return "string" == typeof e && (t = e, e = function (e) {
                return J.call(e, t)
            }), Q.extend(Q.merge(Q(), [].filter.call(this, e)), {_prevObj: this})
        }, find: function (e) {
            var t, n = [];
            return e instanceof Q ? e : (t = 0 === this.length ? this : (this.each(function () {
                void 0 !== this.querySelectorAll && (n = n.concat([].slice.call(this.querySelectorAll(e))))
            }), Q.merge(Q(), n)), Q.extend(t, {_prevObj: this}))
        }, contains: function (e) {
            return 0 < this.find(e).length
        }, children: function (t) {
            var e, n = [];
            return t instanceof Q ? t : (this.each(function () {
                for (e = 0; e < this.children.length; e++) 1 === this.children[e].nodeType && n.push(this.children[e])
            }), n = t ? n.filter(function (e) {
                return J.call(e, t)
            }) : n, Q.extend(Q.merge(Q(), n), {_prevObj: this}))
        }, parent: function (t) {
            var e = [];
            if (0 !== this.length) return t instanceof Q ? t : (this.each(function () {
                this.parentNode && -1 === e.indexOf(this.parentNode) && e.push(this.parentNode)
            }), e = t ? e.filter(function (e) {
                return J.call(e, t)
            }) : e, Q.extend(Q.merge(Q(), e), {_prevObj: this}))
        }, parents: function (t) {
            var n = [];
            if (0 !== this.length) return t instanceof Q ? t : (this.each(function () {
                for (var e = this.parentNode; e;) 1 === e.nodeType && -1 === n.indexOf(e) && (x(t) || J.call(e, t)) && n.push(e), e = e.parentNode
            }), Q.extend(Q.merge(Q(), n), {_prevObj: this}))
        }, siblings: function (t) {
            var n = [];
            if (0 !== this.length) return t instanceof Q ? t : (this.each(function () {
                var e = this;
                e.parentNode && Q.each(e.parentNode.children, function () {
                    e !== this && n.push(this)
                })
            }), t && (n = n.filter(function (e) {
                return J.call(e, t)
            })), Q.extend(Q.merge(Q(), n), {_prevObj: this}))
        }, _siblingAll: function (t, n) {
            var i = [];
            if (0 !== this.length) return n instanceof Q ? n : (this.each(function () {
                for (var e = this; e = e && e[t];) i.push(e)
            }), n && (i = i.filter(function (e) {
                return J.call(e, n)
            })), Q.extend(Q.merge(Q(), i), {_prevObj: this}))
        }, _sibling: function (t, n) {
            var i = [];
            if (0 !== this.length) return n instanceof Q ? n : (this.each(function () {
                var e = this[t];
                e && 1 === e.nodeType && i.push(e)
            }), n && (i = i.filter(function (e) {
                return J.call(e, n)
            })), Q.extend(Q.merge(Q(), i), {_prevObj: this}))
        }, prev: function (e) {
            return this._sibling("previousElementSibling", e)
        }, next: function (e) {
            return this._sibling("nextElementSibling", e)
        }, prevAll: function (e) {
            return this._siblingAll("previousElementSibling", e)
        }, nextAll: function (e) {
            return this._siblingAll("nextElementSibling", e)
        }, closest: function (t) {
            var n = [];
            if (0 !== this.length) return t instanceof Q ? t : t ? (this.each(function () {
                for (var e = this; e && e;) {
                    if (J.call(e, t)) return void n.push(e);
                    e = e.parentElement
                }
            }), Q.extend(Q.merge(Q(), n.reverse()), {_prevObj: this})) : this.parent(t)
        }, has: function (e) {
            var t = [];
            if (0 !== this.length) return this.each(function () {
                0 < Q(this).children(e).length && t.push(this)
            }), Q.extend(Q.merge(Q(), t), {_prevObj: this})
        }, back: function (e) {
            var t;
            if (!0 === e) for (t = this._prevObj; t && t._prevObj;) t = t._prevObj; else t = this._prevObj || this;
            return t
        }
    }), Q.extend({
        script: function (e) {
            if (x(e)) return $();
            e = Q(e)[0];
            e.tagName && "SCRIPT" === e.tagName ? $(e) : Q.each(Q(e).find("script"), function () {
                $(this)
            })
        }
    }), Q.fn.extend({
        script: function () {
            return this.each(function () {
                Q.script(this)
            })
        }
    }), Q.fn.extend({
        _prop: function (e, t) {
            return 1 === arguments.length ? 0 === this.length ? u : this[0][e] : (x(t) && (t = ""), this.each(function () {
                this[e] = t, "innerHTML" === e && Q.script(this)
            }))
        }, prop: function (e, t) {
            return 1 === arguments.length ? this._prop(e) : this._prop(e, void 0 === t ? "" : t)
        }, val: function (t) {
            return x(t) ? 0 === this.length ? u : this[0].value : this.each(function () {
                var e = Q(this);
                void 0 !== this.value ? this.value = t : e.html(t)
            })
        }, html: function (e) {
            var t = [];
            return 0 === arguments.length ? this._prop("innerHTML") : (e instanceof Q ? e.each(function () {
                t.push(Q(this).outerHTML())
            }) : t.push(e), this._prop("innerHTML", 1 === t.length && x(t[0]) ? "" : t.join("\n")), this)
        }, outerHTML: function () {
            return this._prop("outerHTML")
        }, text: function (e) {
            return 0 === arguments.length ? this._prop("textContent") : this._prop("textContent", void 0 === e ? "" : e)
        }, innerText: function (e) {
            return 0 === arguments.length ? this._prop("innerText") : this._prop("innerText", void 0 === e ? "" : e)
        }, empty: function () {
            return this.each(function () {
                void 0 !== this.innerHTML && (this.innerHTML = "")
            })
        }, clear: function () {
            return this.empty()
        }
    }), Q.each = function (e, n) {
        var t = 0;
        if (_(e)) [].forEach.call(e, function (e, t) {
            n.apply(e, [t, e])
        }); else for (var i in e) D(e, i) && n.apply(e[i], [i, e[i], t++]);
        return e
    }, Q.fn.extend({
        each: function (e) {
            return Q.each(this, e)
        }
    });
    var Z = function (e) {
        this.expando = "DATASET:UID:" + e.toUpperCase(), Z.uid++
    };
    Z.uid = -1, Z.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, I(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, s = this.cache(e);
            if ("string" == typeof t) s[b(t)] = n; else for (i in t) D(t, i) && (s[b(i)] = t[i]);
            return s
        }, get: function (e, t) {
            return t === u ? this.cache(e) : e[this.expando] && e[this.expando][b(t)]
        }, access: function (e, t, n) {
            return t === u || t && "string" == typeof t && n === u ? this.get(e, t) : (this.set(e, t, n), n !== u ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (i !== u) {
                if (t !== u) {
                    n = (t = Array.isArray(t) ? t.map(b) : (t = b(t)) in i ? [t] : t.match(/[^\x20\t\r\n\f]+/g) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                return t !== u && !y(i) || (e.nodeType ? e[this.expando] = u : delete e[this.expando]), !0
            }
        }, hasData: function (e) {
            e = e[this.expando];
            return e !== u && !y(e)
        }
    };
    var ee = new Z("m4q");

    function te(e, t) {
        t = t || {bubbles: !1, cancelable: !1, detail: null};
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }

    Q.extend({
        hasData: function (e) {
            return ee.hasData(e)
        }, data: function (e, t, n) {
            return ee.access(e, t, n)
        }, removeData: function (e, t) {
            return ee.remove(e, t)
        }, dataSet: function (e) {
            if (x(e)) return ee;
            if (-1 < ["INTERNAL", "M4Q"].indexOf(e.toUpperCase())) throw Error("You can not use reserved name for your dataset");
            return new Z(e)
        }
    }), Q.fn.extend({
        data: function (e, t) {
            var n, i, s, a, o, r;
            if (0 !== this.length) {
                if (i = this[0], 0 !== arguments.length) return 1 === arguments.length ? ((n = ee.get(i, e)) === u && 1 === i.nodeType && i.hasAttribute("data-" + e) && (n = i.getAttribute("data-" + e)), n) : this.each(function () {
                    ee.set(this, e, t)
                });
                if (this.length && (s = ee.get(i), 1 === i.nodeType)) for (r = (a = i.attributes).length; r--;) a[r] && 0 === (o = a[r].name).indexOf("data-") && A(i, o = b(o.slice(5)), s[o]);
                return s
            }
        }, removeData: function (e) {
            return this.each(function () {
                ee.remove(this, e)
            })
        }, origin: function (e, t, n) {
            if (0 === this.length) return this;
            if (x(e) && x(t)) return Q.data(this[0]);
            if (x(t)) {
                var i = Q.data(this[0], "origin-" + e);
                return x(i) ? n : i
            }
            return this.data("origin-" + e, t), this
        }
    }), Q.extend({
        device: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),
        localhost: O(),
        isLocalhost: O,
        touchable: "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints,
        uniqueId: function (e) {
            var n = (new Date).getTime();
            return x(e) && (e = "m4q"), ("" !== e ? e + "-" : "") + "xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                var t = (n + 16 * Math.random()) % 16 | 0;
                return n = Math.floor(n / 16), ("x" === e ? t : 3 & t | 8).toString(16)
            })
        },
        toArray: function (e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
            return t
        },
        import: function (e) {
            var t = [];
            return this.each(e, function () {
                t.push(this)
            }), this.merge(Q(), t)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, s = e.length; i < n; i++) e[s++] = t[i];
            return e.length = s, e
        },
        type: function (e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)]$/, "$1").toLowerCase()
        },
        sleep: function (e) {
            for (e += (new Date).getTime(); new Date < e;) ;
        },
        isSelector: function (e) {
            if ("string" != typeof e) return !1;
            try {
                document.querySelector(e)
            } catch (e) {
                return !1
            }
            return !0
        },
        remove: function (e) {
            return Q(e).remove()
        },
        camelCase: b,
        dashedName: function (e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            })
        },
        isPlainObject: C,
        isEmptyObject: y,
        isArrayLike: _,
        acceptData: I,
        not: x,
        parseUnit: T,
        getUnit: k,
        unit: T,
        isVisible: w,
        isHidden: function (e) {
            var t = getComputedStyle(e);
            return !w(e) || 0 == +t.opacity || e.hidden || "hidden" === t.visibility
        },
        matches: function (e, t) {
            return J.call(e, t)
        },
        random: function (e, t) {
            return 1 === arguments.length && _(e) ? e[Math.floor(Math.random() * e.length)] : Math.floor(Math.random() * (t - e + 1) + e)
        },
        strip: function (e, t) {
            return "string" != typeof e ? u : e.replace(t, "")
        },
        normName: M,
        hasProp: D,
        serializeToArray: function (e) {
            var t = Q(e)[0];
            if (t && "FORM" === t.nodeName) {
                for (var n, i = [], s = t.elements.length - 1; 0 <= s; --s) if ("" !== t.elements[s].name) switch (t.elements[s].nodeName) {
                    case"INPUT":
                        switch (t.elements[s].type) {
                            case"checkbox":
                            case"radio":
                                t.elements[s].checked && i.push(t.elements[s].name + "=" + encodeURIComponent(t.elements[s].value));
                                break;
                            case"file":
                                break;
                            default:
                                i.push(t.elements[s].name + "=" + encodeURIComponent(t.elements[s].value))
                        }
                        break;
                    case"TEXTAREA":
                        i.push(t.elements[s].name + "=" + encodeURIComponent(t.elements[s].value));
                        break;
                    case"SELECT":
                        switch (t.elements[s].type) {
                            case"select-one":
                                i.push(t.elements[s].name + "=" + encodeURIComponent(t.elements[s].value));
                                break;
                            case"select-multiple":
                                for (n = t.elements[s].options.length - 1; 0 <= n; --n) t.elements[s].options[n].selected && i.push(t.elements[s].name + "=" + encodeURIComponent(t.elements[s].options[n].value))
                        }
                        break;
                    case"BUTTON":
                        switch (t.elements[s].type) {
                            case"reset":
                            case"submit":
                            case"button":
                                i.push(t.elements[s].name + "=" + encodeURIComponent(t.elements[s].value))
                        }
                }
                return i
            }
            console.warn("Element is not a HTMLFromElement")
        },
        serialize: function (e) {
            return Q.serializeToArray(e).join("&")
        }
    }), Q.fn.extend({
        items: function () {
            return Q.toArray(this)
        }
    }), "function" != typeof window.CustomEvent && (te.prototype = window.Event.prototype, window.CustomEvent = te);
    var ne = Event.prototype.stopPropagation, ie = Event.prototype.preventDefault;
    Event.prototype.stopPropagation = function () {
        this.isPropagationStopped = !0, ne.apply(this, arguments)
    }, Event.prototype.preventDefault = function () {
        this.isPreventedDefault = !0, ie.apply(this, arguments)
    }, Event.prototype.stop = function (e) {
        return e ? this.stopImmediatePropagation() : this.stopPropagation()
    }, Q.extend({
        events: [], eventHooks: {}, eventUID: -1, setEventHandler: function (e) {
            var t, n = -1;
            if (0 < this.events.length) for (t = 0; t < this.events.length; t++) if (null === this.events[t].handler) {
                n = t;
                break
            }
            return e = {
                element: e.el,
                event: e.event,
                handler: e.handler,
                selector: e.selector,
                ns: e.ns,
                id: e.id,
                options: e.options
            }, -1 === n ? (this.events.push(e), this.events.length - 1) : (this.events[n] = e, n)
        }, getEventHandler: function (e) {
            return this.events[e] !== u && null !== this.events[e] ? (this.events[e] = null, this.events[e].handler) : u
        }, off: function () {
            return Q.each(this.events, function () {
                this.element.removeEventListener(this.event, this.handler, !0)
            }), this.events = [], this
        }, getEvents: function () {
            return this.events
        }, getEventHooks: function () {
            return this.eventHooks
        }, addEventHook: function (e, t, n) {
            return x(n) && (n = "before"), Q.each(S(e), function () {
                this.eventHooks[b(n + "-" + this)] = t
            }), this
        }, removeEventHook: function (e, t) {
            return x(t) && (t = "before"), Q.each(S(e), function () {
                delete this.eventHooks[b(t + "-" + this)]
            }), this
        }, removeEventHooks: function (e) {
            var t = this;
            return x(e) ? this.eventHooks = {} : Q.each(S(e), function () {
                delete t.eventHooks[b("before-" + this)], delete t.eventHooks[b("after-" + this)]
            }), this
        }
    }), Q.fn.extend({
        on: function (e, l, c, d) {
            if (0 !== this.length) return "function" == typeof l && (d = c, c = l, l = u), C(d) || (d = {}), this.each(function () {
                var r = this;
                Q.each(S(e), function () {
                    var e, s, t = this.split("."), a = M(t[0]), o = d.ns || t[1];
                    Q.eventUID++, e = function (e) {
                        var t = e.target, n = Q.eventHooks[b("before-" + a)], i = Q.eventHooks[b("after-" + a)];
                        if ("function" == typeof n && n.call(t, e), l) for (; t && t !== r;) {
                            if (J.call(t, l) && (c.call(t, e), e.isPropagationStopped)) {
                                e.stopImmediatePropagation();
                                break
                            }
                            t = t.parentNode
                        } else c.call(r, e);
                        "function" == typeof i && i.call(t, e), d.once && (s = +Q(r).origin("event-" + e.type + (l ? ":" + l : "") + (o ? ":" + o : "")), isNaN(s) || Q.events.splice(s, 1))
                    }, Object.defineProperty(e, "name", {value: c.name && "" !== c.name ? c.name : "func_event_" + a + "_" + Q.eventUID}), t = a + (l ? ":" + l : "") + (o ? ":" + o : ""), r.addEventListener(a, e, !y(d) && d), s = Q.setEventHandler({
                        el: r,
                        event: a,
                        handler: e,
                        selector: l,
                        ns: o,
                        id: Q.eventUID,
                        options: !y(d) && d
                    }), Q(r).origin("event-" + t, s)
                })
            })
        }, one: function (e, t, n, i) {
            return C(i) || (i = {}), i.once = !0, this.on.apply(this, [e, t, n, i])
        }, off: function (e, s, a) {
            return C(s) && (a = s, s = null), C(a) || (a = {}), x(e) || "all" === e.toLowerCase() ? this.each(function () {
                var t = this;
                Q.each(Q.events, function () {
                    var e = this;
                    e.element === t && (t.removeEventListener(e.event, e.handler, e.options), e.handler = null, Q(t).origin("event-" + name + (e.selector ? ":" + e.selector : "") + (e.ns ? ":" + e.ns : ""), null))
                })
            }) : this.each(function () {
                var i = this;
                Q.each(S(e), function () {
                    var e = this.split("."), t = M(e[0]), n = a.ns || e[1],
                        e = "event-" + t + (s ? ":" + s : "") + (n ? ":" + n : ""), n = Q(i).origin(e);
                    n !== u && Q.events[n].handler && (i.removeEventListener(t, Q.events[n].handler, Q.events[n].options), Q.events[n].handler = null), Q(i).origin(e, null)
                })
            })
        }, trigger: function (e, t) {
            return this.fire(e, t)
        }, fire: function (e, t) {
            var n;
            if (0 !== this.length) return e = M(e), -1 < ["focus", "blur"].indexOf(e) ? (this[0][e](), this) : ("undefined" != typeof CustomEvent ? n = new CustomEvent(e, {
                bubbles: !0,
                cancelable: !0,
                detail: t
            }) : ((n = document.createEvent("Events")).detail = t, n.initEvent(e, !0, !0)), this.each(function () {
                this.dispatchEvent(n)
            }))
        }
    }), "blur focus resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu touchstart touchend touchmove touchcancel".split(" ").forEach(function (i) {
        Q.fn[i] = function (e, t, n) {
            return 0 < arguments.length ? this.on(i, e, t, n) : this.fire(i)
        }
    }), Q.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Q.ready = function (e, t) {
        document.addEventListener("DOMContentLoaded", e, t || !1)
    }, Q.load = function (e) {
        return Q(window).on("load", e)
    }, Q.unload = function (e) {
        return Q(window).on("unload", e)
    }, Q.fn.extend({
        unload: function (e) {
            return 0 === this.length || this[0].self !== window ? u : Q.unload(e)
        }
    }), Q.beforeunload = function (t) {
        return "string" == typeof t ? Q(window).on("beforeunload", function (e) {
            return e.returnValue = t
        }) : Q(window).on("beforeunload", t)
    }, Q.fn.extend({
        beforeunload: function (e) {
            return 0 === this.length || this[0].self !== window ? u : Q.beforeunload(e)
        }
    }), Q.fn.extend({
        ready: function (e) {
            if (this.length && this[0] === document && "function" == typeof e) return Q.ready(e)
        }
    }), Q.ajax = function (v) {
        return new Promise(function (n, i) {
            function s(e, t) {
                "function" == typeof e && e.apply(null, t)
            }

            function e(e) {
                return -1 !== ["GET", "JSON"].indexOf(e)
            }

            var t, a, o, r, l = new XMLHttpRequest, c = (v.method || "GET").toUpperCase(), d = [],
                u = !!x(v.async) || v.async, h = v.url;
            if (v.data instanceof HTMLFormElement && (t = v.data.getAttribute("action"), a = v.data.getAttribute("method"), x(h) && t && "" !== t.trim() && (h = t), a && "" !== a.trim() && (c = a.toUpperCase())), v.timeout && (l.timeout = v.timeout), v.withCredentials && (l.withCredentials = v.withCredentials), v.data instanceof HTMLFormElement) f = Q.serialize(v.data); else if (v.data instanceof HTMLElement && v.data.getAttribute("type") && "file" === v.data.getAttribute("type").toLowerCase()) for (var p = v.data.getAttribute("name"), f = new FormData, m = 0; m < v.data.files.length; m++) f.append(p, v.data.files[m]); else C(v.data) ? (o = v.data, r = [], Q.each(o, function (e, t) {
                var n,
                    t = "string" == typeof (n = t) || "boolean" == typeof n || "number" == typeof n ? t : JSON.stringify(t);
                r.push(e + "=" + t)
            }), f = r.join("&")) : v.data instanceof FormData || "string" == typeof v.data ? f = v.data : (f = new FormData).append("_data", JSON.stringify(v.data));
            e(c) && (h += "string" == typeof f ? "?" + f : y(f) ? "" : "?" + JSON.stringify(f)), l.open(c, h, u, v.user, v.password), v.headers && Q.each(v.headers, function (e, t) {
                l.setRequestHeader(e, t), d.push(e)
            }), e(c) || -1 === d.indexOf("Content-type") && !1 !== v.contentType && l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), l.send(f), l.addEventListener("load", function (e) {
                if (4 === l.readyState && l.status < 300) {
                    var t = v.returnValue && "xhr" === v.returnValue ? l : l.response;
                    if (v.parseJson) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        t = {}
                    }
                    s(n, [t]), s(v.onSuccess, [e, l])
                } else s(i, [l]), s(v.onFail, [e, l]);
                s(v.onLoad, [e, l])
            }), Q.each(["readystatechange", "error", "timeout", "progress", "loadstart", "loadend", "abort"], function () {
                var t = b("on-" + ("readystatechange" === this ? "state" : this));
                l.addEventListener(t, function (e) {
                    s(v[t], [e, l])
                })
            })
        })
    }, ["get", "post", "put", "patch", "delete", "json"].forEach(function (s) {
        Q[s] = function (e, t, n) {
            var i = s.toUpperCase(), i = {method: "JSON" === i ? "GET" : i, url: e, data: t, parseJson: "JSON" === i};
            return Q.ajax(Q.extend({}, i, n))
        }
    }), Q.fn.extend({
        load: function (e, t, n) {
            var i = this;
            return this.length && this[0].self === window ? Q.load(e) : Q.get(e, t, n).then(function (e) {
                i.each(function () {
                    this.innerHTML = e
                })
            })
        }
    }), Q.fn.extend({
        style: function (e, t) {
            var n;

            function i(e, t, n) {
                return -1 < ["scrollLeft", "scrollTop"].indexOf(t) ? Q(e)[t]() : getComputedStyle(e, n)[t]
            }

            if ("string" == typeof e && 0 === this.length) return u;
            if (0 === this.length) return this;
            if (n = this[0], x(e) || "all" === e) return getComputedStyle(n, t);
            var s = {}, e = e.split(", ").map(function (e) {
                return ("" + e).trim()
            });
            return 1 === e.length ? i(n, e[0], t) : (Q.each(e, function () {
                s[this] = i(n, this, t)
            }), s)
        }, removeStyleProperty: function (e) {
            if (x(e) || 0 === this.length) return this;
            var t = e.split(", ").map(function (e) {
                return ("" + e).trim()
            });
            return this.each(function () {
                var e = this;
                Q.each(t, function () {
                    e.style.removeProperty(this)
                })
            })
        }, css: function (e, t) {
            return "string" == typeof (e = e || "all") && x(t) ? this.style(e) : this.each(function () {
                var n = this;
                "object" == typeof e ? Q.each(e, function (e, t) {
                    E(n, e, t)
                }) : "string" == typeof e && E(n, e, t)
            })
        }, scrollTop: function (e) {
            return x(e) ? 0 === this.length ? u : this[0] === window ? pageYOffset : this[0].scrollTop : this.each(function () {
                this.scrollTop = e
            })
        }, scrollLeft: function (e) {
            return x(e) ? 0 === this.length ? u : this[0] === window ? pageXOffset : this[0].scrollLeft : this.each(function () {
                this.scrollLeft = e
            })
        }
    }), Q.fn.extend({
        addClass: function () {
        }, removeClass: function () {
        }, toggleClass: function () {
        }, containsClass: function (e) {
            return this.hasClass(e)
        }, hasClass: function (e) {
            var t = !1, n = e.split(" ").filter(function (e) {
                return "" !== ("" + e).trim()
            });
            return !x(e) && (this.each(function () {
                var e = this;
                Q.each(n, function () {
                    !t && e.classList && e.classList.contains(this) && (t = !0)
                })
            }), t)
        }, clearClasses: function () {
            return this.each(function () {
                this.className = ""
            })
        }, cls: function (e) {
            return 0 === this.length ? u : e ? this[0].className.split(" ") : this[0].className
        }, removeClassBy: function (n) {
            return this.each(function () {
                var e = Q(this), t = e.cls(!0);
                Q.each(t, function () {
                    -1 < this.indexOf(n) && e.removeClass(this)
                })
            })
        }
    }), ["add", "remove", "toggle"].forEach(function (i) {
        Q.fn[i + "Class"] = function (n) {
            return x(n) || "" === ("" + n).trim() ? this : this.each(function () {
                var e = this, t = void 0 !== e.classList;
                Q.each(n.split(" ").filter(function (e) {
                    return "" !== ("" + e).trim()
                }), function () {
                    t && e.classList[i](this)
                })
            })
        }
    }), Q.parseHTML = function (e) {
        var t, n, i, s = [];
        if ("string" != typeof e) return [];
        if (e = e.trim(), (t = (n = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, n.head.appendChild(t), i = n.body, n = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i.exec(e)) s.push(document.createElement(n[1])); else {
            i.innerHTML = e;
            for (var a = 0; a < i.childNodes.length; a++) s.push(i.childNodes[a])
        }
        return s
    }, Q.fn.extend({
        _size: function (e, t) {
            if (0 !== this.length) {
                if (x(t)) {
                    var n = this[0];
                    if ("height" === e) return n === window ? window.innerHeight : n === document ? n.body.clientHeight : parseInt(getComputedStyle(n).height);
                    if ("width" === e) return n === window ? window.innerWidth : n === document ? n.body.clientWidth : parseInt(getComputedStyle(n).width)
                }
                return this.each(function () {
                    this !== window && this !== document && (this.style[e] = isNaN(t) ? t : t + "px")
                })
            }
        }, height: function (e) {
            return this._size("height", e)
        }, width: function (e) {
            return this._size("width", e)
        }, _sizeOut: function (n, i) {
            var e, t;
            if (0 !== this.length) return x(i) || "boolean" == typeof i ? (e = (t = this[0])["width" === n ? "offsetWidth" : "offsetHeight"], t = getComputedStyle(t), t = e + parseInt(t["width" === n ? "margin-left" : "margin-top"]) + parseInt(t["width" === n ? "margin-right" : "margin-bottom"]), !0 === i ? t : e) : this.each(function () {
                var e, t;
                this !== window && this !== document && (t = getComputedStyle(this), e = "width" === n ? parseInt(t["border-left-width"]) + parseInt(t["border-right-width"]) : parseInt(t["border-top-width"]) + parseInt(t["border-bottom-width"]), t = "width" === n ? parseInt(t["padding-left"]) + parseInt(t["padding-right"]) : parseInt(t["padding-top"]) + parseInt(t["padding-bottom"]), t = Q(this)[n](i)[n]() - e - t, this.style[n] = t + "px")
            })
        }, outerWidth: function (e) {
            return this._sizeOut("width", e)
        }, outerHeight: function (e) {
            return this._sizeOut("height", e)
        }, padding: function (e) {
            if (0 !== this.length) {
                e = getComputedStyle(this[0], e);
                return {
                    top: parseInt(e["padding-top"]),
                    right: parseInt(e["padding-right"]),
                    bottom: parseInt(e["padding-bottom"]),
                    left: parseInt(e["padding-left"])
                }
            }
        }, margin: function (e) {
            if (0 !== this.length) {
                e = getComputedStyle(this[0], e);
                return {
                    top: parseInt(e["margin-top"]),
                    right: parseInt(e["margin-right"]),
                    bottom: parseInt(e["margin-bottom"]),
                    left: parseInt(e["margin-left"])
                }
            }
        }, border: function (e) {
            if (0 !== this.length) {
                e = getComputedStyle(this[0], e);
                return {
                    top: parseInt(e["border-top-width"]),
                    right: parseInt(e["border-right-width"]),
                    bottom: parseInt(e["border-bottom-width"]),
                    left: parseInt(e["border-left-width"])
                }
            }
        }
    }), Q.fn.extend({
        offset: function (a) {
            var e;
            return x(a) ? 0 === this.length ? u : {
                top: (e = this[0].getBoundingClientRect()).top + pageYOffset,
                left: e.left + pageXOffset
            } : this.each(function () {
                var e = Q(this), t = a.top, n = a.left, i = getComputedStyle(this).position, s = e.offset();
                "static" === i && e.css("position", "relative"), -1 === ["absolute", "fixed"].indexOf(i) && (t -= s.top, n -= s.left), e.css({
                    top: t,
                    left: n
                })
            })
        }, position: function (e) {
            var t, n, i = 0, s = 0;
            return !x(e) && "boolean" == typeof e || (e = !1), 0 === this.length ? u : (t = this[0], n = getComputedStyle(t), e && (i = parseInt(n["margin-left"]), s = parseInt(n["margin-top"])), {
                left: t.offsetLeft - i,
                top: t.offsetTop - s
            })
        }, left: function (e, t) {
            if (0 !== this.length) return x(e) ? this.position(t).left : "boolean" == typeof e ? (t = e, this.position(t).left) : this.each(function () {
                Q(this).css({left: e})
            })
        }, top: function (e, t) {
            if (0 !== this.length) return x(e) ? this.position(t).top : "boolean" == typeof e ? (t = e, this.position(t).top) : this.each(function () {
                Q(this).css({top: e})
            })
        }, coord: function () {
            return 0 === this.length ? u : this[0].getBoundingClientRect()
        }, pos: function () {
            if (0 !== this.length) return {
                top: parseInt(Q(this[0]).style("top")),
                left: parseInt(Q(this[0]).style("left"))
            }
        }
    }), Q.fn.extend({
        attr: function (e, t) {
            var n = {};
            return 0 === this.length && 0 === arguments.length ? u : this.length && 0 === arguments.length ? (Q.each(this[0].attributes, function () {
                n[this.nodeName] = this.nodeValue
            }), n) : "string" == typeof e && t === u ? this.length && 1 === this[0].nodeType && this[0].hasAttribute(e) ? this[0].getAttribute(e) : u : this.each(function () {
                var n = this;
                C(e) ? Q.each(e, function (e, t) {
                    n.setAttribute(e, t)
                }) : n.setAttribute(e, t)
            })
        }, removeAttr: function (e) {
            var t;
            return x(e) ? this.each(function () {
                var e = this;
                Q.each(this.attributes, function () {
                    e.removeAttribute(this)
                })
            }) : (t = "string" == typeof e ? e.split(",").map(function (e) {
                return e.trim()
            }) : e, this.each(function () {
                var e = this;
                Q.each(t, function () {
                    e.hasAttribute(this) && e.removeAttribute(this)
                })
            }))
        }, toggleAttr: function (e, t) {
            return this.each(function () {
                x(t) ? this.removeAttribute(e) : this.setAttribute(e, t)
            })
        }, id: function (e) {
            return this.length ? Q(this[0]).attr("id", e) : u
        }
    }), Q.extend({
        meta: function (e) {
            return x(e) ? Q("meta") : Q("meta[name='$name']".replace("$name", e))
        }, metaBy: function (e) {
            return x(e) ? Q("meta") : Q("meta[$name]".replace("$name", e))
        }, doctype: function () {
            return Q("doctype")
        }, html: function () {
            return Q("html")
        }, head: function () {
            return Q("html").find("head")
        }, body: function () {
            return Q("body")
        }, document: function () {
            return Q(document)
        }, window: function () {
            return Q(window)
        }, charset: function (e) {
            var t = Q("meta[charset]");
            return e && t.attr("charset", e), t.attr("charset")
        }
    }), Q.extend({
        proxy: function (e, t) {
            return "function" != typeof e ? u : e.bind(t)
        }, bind: function (e, t) {
            return this.proxy(e, t)
        }
    }), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
        ["append", "prepend"].forEach(function (t) {
            D(e, t) || Object.defineProperty(e, t, {
                configurable: !0, enumerable: !0, writable: !0, value: function () {
                    var e = Array.prototype.slice.call(arguments), n = document.createDocumentFragment();
                    e.forEach(function (e) {
                        var t = e instanceof Node;
                        n.appendChild(t ? e : document.createTextNode(String(e)))
                    }), "prepend" === t ? this.insertBefore(n, this.firstChild) : this.appendChild(n)
                }
            })
        })
    });

    function se(e) {
        var t;
        return "string" == typeof e ? t = Q.isSelector(e) ? Q(e) : Q.parseHTML(e) : e instanceof HTMLElement ? t = [e] : _(e) && (t = e), t
    }

    Q.fn.extend({
        appendText: function (n) {
            return this.each(function (e, t) {
                t.innerHTML += n
            })
        }, prependText: function (n) {
            return this.each(function (e, t) {
                t.innerHTML = n + t.innerHTML
            })
        }, append: function (e) {
            var i = se(e);
            return this.each(function (t, n) {
                Q.each(i, function () {
                    var e;
                    n !== this && (e = 0 === t ? this : this.cloneNode(!0), Q.script(e), e.tagName && "SCRIPT" !== e.tagName && n.append(e))
                })
            })
        }, appendTo: function (e) {
            var t = se(e);
            return this.each(function () {
                var n = this;
                Q.each(t, function (e, t) {
                    n !== this && t.append(0 === e ? n : n.cloneNode(!0))
                })
            })
        }, prepend: function (e) {
            var i = se(e);
            return this.each(function (t, n) {
                Q.each(i, function () {
                    var e;
                    n !== this && (e = 0 === t ? this : this.cloneNode(!0), Q.script(e), e.tagName && "SCRIPT" !== e.tagName && n.prepend(e))
                })
            })
        }, prependTo: function (e) {
            var t = se(e);
            return this.each(function () {
                var n = this;
                Q.each(t, function (e, t) {
                    n !== this && Q(t).prepend(0 === e ? n : n.cloneNode(!0))
                })
            })
        }, insertBefore: function (e) {
            var t = se(e);
            return this.each(function () {
                var n = this;
                Q.each(t, function (e) {
                    var t;
                    n === this || (t = this.parentNode) && t.insertBefore(0 === e ? n : n.cloneNode(!0), this)
                })
            })
        }, insertAfter: function (e) {
            var t = se(e);
            return this.each(function () {
                var i = this;
                Q.each(t, function (e, t) {
                    var n;
                    i === this || (n = this.parentNode) && n.insertBefore(0 === e ? i : i.cloneNode(!0), t.nextSibling)
                })
            })
        }, after: function (e) {
            return this.each(function () {
                "string" == typeof e ? this.insertAdjacentHTML("afterend", e) : Q(e).insertAfter(this)
            })
        }, before: function (e) {
            return this.each(function () {
                "string" == typeof e ? this.insertAdjacentHTML("beforebegin", e) : Q(e).insertBefore(this)
            })
        }, clone: function (i, s) {
            var a = [];
            return x(i) && (i = !1), x(s) && (s = !1), this.each(function () {
                var e, t = this.cloneNode(i), n = Q(t);
                s && Q.hasData(this) && (e = Q(this).data(), Q.each(e, function (e, t) {
                    n.data(e, t)
                })), a.push(t)
            }), Q.merge(Q(), a)
        }, import: function (e) {
            var t = [];
            return x(e) && (e = !1), this.each(function () {
                t.push(document.importNode(this, e))
            }), Q.merge(Q(), t)
        }, adopt: function () {
            var e = [];
            return this.each(function () {
                e.push(document.adoptNode(this))
            }), Q.merge(Q(), e)
        }, remove: function (t) {
            var e, n, i = 0, s = [];
            if (0 !== this.length) {
                for (n = t ? this.filter(function (e) {
                    return J.call(e, t)
                }) : this.items(); null != (e = n[i]); i++) e.parentNode && (s.push(e.parentNode.removeChild(e)), Q.removeData(e));
                return Q.merge(Q(), s)
            }
        }, wrap: function (e) {
            if (0 !== this.length) {
                var n = Q(se(e));
                if (n.length) {
                    var i = [];
                    return this.each(function () {
                        var e, t = n.clone(!0, !0);
                        for (t.insertBefore(this), e = t; e.children().length;) e = e.children().eq(0);
                        e.append(this), i.push(t)
                    }), Q(i)
                }
            }
        }, wrapAll: function (e) {
            var t, n;
            if (0 !== this.length && (t = Q(se(e))).length) {
                for ((t = t.clone(!0, !0)).insertBefore(this[0]), n = t; n.children().length;) n = n.children().eq(0);
                return this.each(function () {
                    n.append(this)
                }), t
            }
        }, wrapInner: function (e) {
            if (0 !== this.length) {
                var i = Q(se(e));
                if (i.length) {
                    var s = [];
                    return this.each(function () {
                        var e = Q(this), t = e.html(), n = i.clone(!0, !0);
                        e.html(n.html(t)), s.push(n)
                    }), Q(s)
                }
            }
        }
    }), Q.extend({
        animation: {
            duration: 1e3,
            ease: "linear",
            elements: {}
        }
    }), "object" == typeof window.setupAnimation && Q.each(window.setupAnimation, function (e, t) {
        void 0 === Q.animation[e] || x(t) || (Q.animation[e] = t)
    });
    var ae = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY"],
        oe = ["opacity", "zIndex"], re = ["opacity", "volume"], le = ["scrollLeft", "scrollTop"],
        ce = ["opacity", "volume"];

    function de(e) {
        return e instanceof HTMLElement || e instanceof SVGElement
    }

    function ue(a, e, o) {
        Q.each(e, function (e, t) {
            var n, i, s;
            n = a, i = e, s = t[0] + t[2] * o, e = t[3], x(t = t[4]) && (t = !1), i = b(i), t && (s = parseInt(s)), !de(n) || void 0 !== n[i] ? n[i] = s : n.style[i] = "transform" === i || -1 < i.toLowerCase().indexOf("color") ? s : s + e
        })
    }

    function he(e) {
        if (!de(e)) return {};
        for (var t, n = e.style.transform || "", i = /(\w+)\(([^)]*)\)/g, s = {}; t = i.exec(n);) s[t[1]] = t[2];
        return s
    }

    function pe(e) {
        return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e || "#000000").slice(1).map(function (e) {
            return parseInt(e, 16)
        })
    }

    function fe(e) {
        return "#" === e[0] && 4 === e.length ? "#" + e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
            return t + t + n + n + i + i
        }) : "#" === e[0] ? e : "#" + e
    }

    function me(e, t, n) {
        var i, s, a, o, r, l, c;
        ue(e, t.props, n), i = e, s = t.transform, a = n, o = [], r = he(i), Q.each(s, function (e, t) {
            var n = t[0], i = t[1], s = t[2], t = t[3];
            (-1 < (e = "" + e).indexOf("rotate") || -1 < e.indexOf("skew")) && "" === t && (t = "deg"), -1 < e.indexOf("scale") && (t = ""), -1 < e.indexOf("translate") && "" === t && (t = "px"), "turn" === t ? o.push(e + "(" + i * a + t + ")") : o.push(e + "(" + (n + s * a) + t + ")")
        }), Q.each(r, function (e, t) {
            s[e] === u && o.push(e + "(" + t + ")")
        }), i.style.transform = o.join(" "), l = e, t = t.color, c = n, Q.each(t, function (e, t) {
            for (var n, i = [0, 0, 0], s = 0; s < 3; s++) i[s] = Math.floor(t[0][s] + t[2][s] * c);
            n = "rgb(" + i.join(",") + ")", l.style[e] = n
        })
    }

    function ve(l, e, c) {
        var d, u, h, p, f, m = {props: {}, transform: {}, color: {}}, v = he(l);
        return x(c) && (c = "normal"), Q.each(e, function (e, t) {
            var n, i, s, a = -1 < ae.indexOf("" + e), o = -1 < oe.indexOf("" + e),
                r = -1 < ("" + e).toLowerCase().indexOf("color");
            if (Array.isArray(t) && 1 === t.length && (t = t[0]), h = Array.isArray(t) ? (u = r ? pe(fe(t[0])) : T(t[0]), r ? pe(fe(t[1])) : T(t[1])) : (u = a ? v[e] || 0 : r ? (s = e, getComputedStyle(l)[s].replace(/[^\d.,]/g, "").split(",").map(function (e) {
                return parseInt(e)
            })) : void 0 !== (n = l)[s = e] ? -1 < le.indexOf(s) ? "scrollLeft" === s ? n === window ? pageXOffset : n.scrollLeft : n === window ? pageYOffset : n.scrollTop : n[s] || 0 : n.style[s] || getComputedStyle(n, i)[s], u = r ? u : T(u), r ? pe(t) : T(function (e, t) {
                var n = /^(\*=|\+=|-=)/.exec(e);
                if (!n) return e;
                var i = k(e) || 0, s = parseFloat(t), a = parseFloat(e.replace(n[0], ""));
                switch (n[0][0]) {
                    case"+":
                        return s + a + i;
                    case"-":
                        return s - a + i;
                    case"*":
                        return s * a + i;
                    case"/":
                        return s / a + i
                }
            }(t, Array.isArray(u) ? u[0] : u))), -1 < ce.indexOf("" + e) && u[0] === h[0] && (u[0] = 0 < h[0] ? 0 : 1), "reverse" === c && (f = u, u = h, h = f), f = l instanceof HTMLElement && "" === h[1] && !o && !a ? "px" : h[1], r) for (p = [0, 0, 0], d = 0; d < 3; d++) p[d] = h[d] - u[d]; else p = h[0] - u[0];
            a ? m.transform[e] = [u[0], h[0], p, f] : r ? m.color[e] = [u, h, p, f] : m.props[e] = [u[0], h[0], p, f, -1 === re.indexOf("" + e)]
        }), m
    }

    function ge(e, t, n) {
        return Math.min(Math.max(e, t), n)
    }

    var we = {
        linear: function () {
            return function (e) {
                return e
            }
        }
    };
    we.default = we.linear;
    var be = {
        Sine: function () {
            return function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }
        }, Circ: function () {
            return function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }
        }, Back: function () {
            return function (e) {
                return e * e * (3 * e - 2)
            }
        }, Bounce: function () {
            return function (e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;) ;
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }, Elastic: function (e, t) {
            x(e) && (e = 1), x(t) && (t = .5);
            var n = ge(e, 1, 10), i = ge(t, .1, 2);
            return function (e) {
                return 0 === e || 1 === e ? e : -n * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1 - i / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / i)
            }
        }
    };
    ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, t) {
        be[e] = function () {
            return function (e) {
                return Math.pow(e, t + 2)
            }
        }
    }), Object.keys(be).forEach(function (e) {
        var i = be[e];
        we["easeIn" + e] = i, we["easeOut" + e] = function (t, n) {
            return function (e) {
                return 1 - i(t, n)(1 - e)
            }
        }, we["easeInOut" + e] = function (t, n) {
            return function (e) {
                return e < .5 ? i(t, n)(2 * e) / 2 : 1 - i(t, n)(-2 * e + 2) / 2
            }
        }
    });
    var Ce = {
        id: null,
        el: null,
        draw: {},
        dur: Q.animation.duration,
        ease: Q.animation.ease,
        loop: 0,
        pause: 0,
        dir: "normal",
        defer: 0,
        onFrame: function () {
        },
        onDone: function () {
        }
    };

    function ye(k) {
        return new Promise(function (e) {
            var n, t, i = this, s = Q.assign({}, Ce, {dur: Q.animation.duration, ease: Q.animation.ease}, k), a = s.id,
                o = s.el, r = s.draw, l = s.dur, c = s.ease, d = s.loop, u = s.onFrame, h = s.onDone, p = s.pause,
                f = s.dir, m = s.defer, v = {}, g = [], w = we.linear, b = "alternate" === f ? "normal" : f, C = !1,
                y = a || +(performance.now() * Math.pow(10, 14));
            if (x(o)) throw new Error("Unknown element!");
            if ("string" == typeof o && (o = document.querySelector(o)), "function" != typeof r && "object" != typeof r) throw new Error("Unknown draw object. Must be a function or object!");
            0 === l && (l = 1), "alternate" === f && "number" == typeof d && (d *= 2), w = "string" == typeof c ? (s = /\(([^)]+)\)/.exec(c), t = c.split("(")[0], g = s ? s[1].split(",").map(function (e) {
                return parseFloat(e)
            }) : [], we[t] || we.linear) : "function" == typeof c ? c : we.linear, Q.animation.elements[y] = {
                element: o,
                id: null,
                stop: 0,
                pause: 0,
                loop: 0
            };

            function _() {
                "object" == typeof r && (v = ve(o, r, b)), n = performance.now(), Q.animation.elements[y].loop += 1, Q.animation.elements[y].id = requestAnimationFrame(T)
            }

            function S() {
                cancelAnimationFrame(Q.animation.elements[y].id), delete Q.animation.elements[a], "function" == typeof h && h.apply(o), e(i)
            }

            var T = function (e) {
                var t = Q.animation.elements[y].stop;
                if (0 < t) return 2 === t && ("function" == typeof r ? r.bind(o)(1, 1) : me(o, v, 1)), void S();
                1 < (t = (e - n) / l) && (t = 1), t < 0 && (t = 0), e = w.apply(null, g)(t), "function" == typeof r ? r.bind(o)(t, e) : me(o, v, e), "function" == typeof u && u.apply(o, [t, e]), t < 1 && (Q.animation.elements[y].id = requestAnimationFrame(T)), 1 === parseInt(t) && (d ? ("alternate" === f && (b = "normal" === b ? "reverse" : "normal"), "boolean" == typeof d || d > Q.animation.elements[y].loop ? setTimeout(function () {
                    _()
                }, p) : S()) : "alternate" !== f || C ? S() : (b = "normal" === b ? "reverse" : "normal", C = !0, _()))
            };
            0 < m ? setTimeout(function () {
                _()
            }, m) : _()
        })
    }

    function _e(e, t) {
        x(t) && (t = !0), Q.animation.elements[e].stop = !0 === t ? 2 : 1
    }

    Q.easing = {}, Q.extend(Q.easing, we), Q.extend({
        animate: function (e) {
            var t, n, i, s, a;
            return 1 < arguments.length ? (t = Q(e)[0], n = arguments[1], i = arguments[2] || Q.animation.duration, s = arguments[3] || Q.animation.ease, a = arguments[4], "function" == typeof i && (a = i, s = Q.animation.ease, i = Q.animation.duration), "function" == typeof s && (a = s, s = Q.animation.ease), ye({
                el: t,
                draw: n,
                dur: i,
                ease: s,
                onDone: a
            })) : ye(e)
        }, stop: _e, chain: function e(t, n) {
            if (x(n) && (n = !1), !Array.isArray(t)) return console.warn("Chain array is not defined!"), !1;
            t.reduce(function (e, t) {
                return e.then(function () {
                    return ye(t)
                })
            }, Promise.resolve()).then(function () {
                n && e(t, "boolean" == typeof n ? n : --n)
            })
        }
    }), Q.fn.extend({
        animate: function (e) {
            var t, n, i, s, a = this, o = e;
            return !Array.isArray(e) && (1 < arguments.length || 1 === arguments.length && void 0 === e.draw) ? (t = e, n = arguments[1] || Q.animation.duration, i = arguments[2] || Q.animation.ease, s = arguments[3], "function" == typeof n && (s = n, n = Q.animation.duration, i = Q.animation.ease), "function" == typeof i && (s = i, i = Q.animation.ease), this.each(function () {
                return Q.animate({el: this, draw: t, dur: n, ease: i, onDone: s})
            })) : Array.isArray(e) ? (Q.each(e, function () {
                var e = this;
                a.each(function () {
                    e.el = this, Q.animate(e)
                })
            }), this) : this.each(function () {
                o.el = this, Q.animate(o)
            })
        }, chain: function (t, n) {
            return this.each(function () {
                var e = this;
                Q.each(t, function () {
                    this.el = e
                }), Q.chain(t, n)
            })
        }, stop: function (i) {
            var e = Q.animation.elements;
            return this.each(function () {
                var n = this;
                Q.each(e, function (e, t) {
                    t.element === n && _e(e, i)
                })
            })
        }
    }), Q.extend({
        hidden: function (e, t, n) {
            return e = Q(e)[0], "string" == typeof t && (t = "true" === t.toLowerCase()), "function" == typeof t && (n = t, t = !e.hidden), e.hidden = t, "function" == typeof n && (Q.bind(n, e), n.call(e, arguments)), this
        }, hide: function (e, t) {
            return Q(e).origin("display", e.style.display || getComputedStyle(e, null).display), e.style.display = "none", "function" == typeof t && (Q.bind(t, e), t.call(e, arguments)), this
        }, show: function (e, t) {
            var n = Q(e).origin("display", u, "block");
            return e.style.display = n ? "none" === n ? "block" : n : "", 0 === parseInt(e.style.opacity) && (e.style.opacity = "1"), "function" == typeof t && (Q.bind(t, e), t.call(e, arguments)), this
        }, visible: function (e, t, n) {
            return t === u && (t = !0), e.style.visibility = t ? "visible" : "hidden", "function" == typeof n && (Q.bind(n, e), n.call(e, arguments)), this
        }, toggle: function (e, t) {
            var n = "none" !== getComputedStyle(e, null).display ? "hide" : "show";
            return Q[n](e, t)
        }
    }), Q.fn.extend({
        hide: function () {
            var e;
            return Q.each(arguments, function () {
                "function" == typeof this && (e = this)
            }), this.each(function () {
                Q.hide(this, e)
            })
        }, show: function () {
            var e;
            return Q.each(arguments, function () {
                "function" == typeof this && (e = this)
            }), this.each(function () {
                Q.show(this, e)
            })
        }, visible: function (e, t) {
            return this.each(function () {
                Q.visible(this, e, t)
            })
        }, toggle: function (e) {
            return this.each(function () {
                Q.toggle(this, e)
            })
        }, hidden: function (e, t) {
            return this.each(function () {
                Q.hidden(this, e, t)
            })
        }
    }), Q.extend({fx: {off: !1}}), Q.fn.extend({
        fadeIn: function (n, i, s) {
            return this.each(function () {
                var e = this, t = Q(e);
                if (!(!w(e) || w(e) && 0 == +t.style("opacity"))) return this;
                x(n) && x(i) && x(s) ? (s = null, n = Q.animation.duration) : "function" == typeof n && (s = n, n = Q.animation.duration), "function" == typeof i && (s = i, i = Q.animation.ease), Q.fx.off && (n = 0);
                t = t.origin("display", u, "block");
                return e.style.opacity = "0", e.style.display = t, Q.animate({
                    el: e,
                    draw: {opacity: 1},
                    dur: n,
                    ease: i,
                    onDone: function () {
                        "function" == typeof s && Q.proxy(s, this)()
                    }
                })
            })
        }, fadeOut: function (t, n, i) {
            return this.each(function () {
                var e = Q(this);
                if (w(this)) return x(t) && x(n) && x(i) ? (i = null, t = Q.animation.duration) : "function" == typeof t && (i = t, t = Q.animation.duration), "function" == typeof n && (i = n, n = Q.animation.ease), e.origin("display", e.style("display")), Q.animate({
                    el: this,
                    draw: {opacity: 0},
                    dur: t,
                    ease: n,
                    onDone: function () {
                        this.style.display = "none", "function" == typeof i && Q.proxy(i, this)()
                    }
                })
            })
        }, slideUp: function (n, i, s) {
            return this.each(function () {
                var e, t = Q(this);
                if (0 !== t.height()) return x(n) && x(i) && x(s) ? (s = null, n = Q.animation.duration) : "function" == typeof n && (s = n, n = Q.animation.duration), "function" == typeof i && (s = i, i = Q.animation.ease), e = t.height(), t.origin("height", e), t.origin("display", Q(this).style("display")), t.css({overflow: "hidden"}), Q.animate({
                    el: this,
                    draw: {height: 0},
                    dur: n,
                    ease: i,
                    onDone: function () {
                        t.hide().removeStyleProperty("overflow, height"), "function" == typeof s && Q.proxy(s, this)()
                    }
                })
            })
        }, slideDown: function (s, a, o) {
            return this.each(function () {
                var e, t, n = this, i = Q(n);
                return x(s) && x(a) && x(o) ? (o = null, s = Q.animation.duration) : "function" == typeof s && (o = s, s = Q.animation.duration), "function" == typeof a && (o = a, a = Q.animation.ease), i.show().visible(!1), e = +i.origin("height", u, i.height()), 0 === parseInt(e) && (e = n.scrollHeight), t = i.origin("display", i.style("display"), "block"), i.height(0).visible(!0), i.css({
                    overflow: "hidden",
                    display: "none" === t ? "block" : t
                }), Q.animate({
                    el: n, draw: {height: e}, dur: s, ease: a, onDone: function () {
                        Q(n).removeStyleProperty("overflow, height, visibility"), "function" == typeof o && Q.proxy(o, this)()
                    }
                })
            })
        }, moveTo: function (e, t, n, i, s) {
            var a = {top: t, left: e};
            return "function" == typeof n && (s = n, n = Q.animation.duration, i = Q.animation.ease), "function" == typeof i && (s = i, i = Q.animation.ease), this.each(function () {
                Q.animate({el: this, draw: a, dur: n, ease: i, onDone: s})
            })
        }, centerTo: function (t, n, i, s, a) {
            return "function" == typeof i && (a = i, i = Q.animation.duration, s = Q.animation.ease), "function" == typeof s && (a = s, s = Q.animation.ease), this.each(function () {
                var e = {left: t - this.clientWidth / 2, top: n - this.clientHeight / 2};
                Q.animate({el: this, draw: e, dur: i, ease: s, onDone: a})
            })
        }, colorTo: function (e, t, n, i) {
            var s = {color: e};
            return "function" == typeof t && (i = t, t = Q.animation.duration, n = Q.animation.ease), "function" == typeof n && (i = n, n = Q.animation.ease), this.each(function () {
                Q.animate({el: this, draw: s, dur: t, ease: n, onDone: i})
            })
        }, backgroundTo: function (e, t, n, i) {
            var s = {backgroundColor: e};
            return "function" == typeof t && (i = t, t = Q.animation.duration, n = Q.animation.ease), "function" == typeof n && (i = n, n = Q.animation.ease), this.each(function () {
                Q.animate({el: this, draw: s, dur: t, ease: n, onDone: i})
            })
        }
    }), Q.init = function (t, n) {
        var e, i = this;
        if ("string" == typeof t && (t = t.trim()), this.uid = Q.uniqueId(), !t) return this;
        if ("function" == typeof t) return Q.ready(t);
        if (t instanceof Element) return this.push(t), this;
        if (t instanceof Q) return Q.each(t, function () {
            i.push(this)
        }), this;
        if ("window" === t && (t = window), "document" === t && (t = document), "body" === t && (t = document.body), "html" === t && (t = document.documentElement), "doctype" === t && (t = document.doctype), t && (t.nodeType || t.self === window)) return this.push(t), this;
        if (_(t)) return Q.each(t, function () {
            Q(this).each(function () {
                i.push(this)
            })
        }), this;
        if ("string" != typeof t && t.self && t.self !== window) return this;
        if ("#" === t || "." === t) return console.error("Selector can't be # or ."), this;
        if ("@" === t[0]) Q("[data-role]").each(function () {
            -1 < S(Q(this).attr("data-role"), ",").indexOf(t.slice(1)) && i.push(this)
        }); else if (1 === (e = Q.parseHTML(t)).length && 3 === e[0].nodeType) try {
            [].push.apply(this, document.querySelectorAll(t))
        } catch (e) {
            console.error(t + " is not a valid selector")
        } else Q.merge(this, e);
        return n !== u && (n instanceof Q ? this.each(function () {
            Q(n).append(i)
        }) : n instanceof HTMLElement ? Q(n).append(i) : C(n) && Q.each(this, function () {
            for (var e in n) D(n, e) && this.setAttribute(e, n[e])
        })), this
    }, Q.init.prototype = Q.fn;
    var Se = window.$;
    Q.Promise = Promise, window.m4q = Q, void 0 === window.$ && (window.$ = Q), Q.global = function () {
        Se = window.$, window.$ = Q
    }, Q.noConflict = function () {
        return window.$ === Q && (window.$ = Se), Q
    }
}(window), function (e) {
    "use strict";
    var t = e.meta("metro4:init").attr("content"), n = e.meta("metro4:locale").attr("content"),
        i = e.meta("metro4:week_start").attr("content"), s = e.meta("metro4:date_format").attr("content"),
        a = e.meta("metro4:date_format_input").attr("content"), o = e.meta("metro4:animation_duration").attr("content"),
        r = e.meta("metro4:callback_timeout").attr("content"), l = e.meta("metro4:timeout").attr("content"),
        c = e.meta("metro4:scroll_multiple").attr("content"), d = e.meta("metro4:cloak").attr("content"),
        u = e.meta("metro4:cloak_duration").attr("content"), h = e.meta("metro4:global_common").attr("content"),
        p = e.meta("metro4:blur_image").attr("content");
    void 0 === window.METRO_BLUR_IMAGE && (window.METRO_BLUR_IMAGE = void 0 !== p && JSON.parse(h)), void 0 === window.METRO_GLOBAL_COMMON && (window.METRO_GLOBAL_COMMON = void 0 !== h && JSON.parse(h));
    h = e.meta("metro4:jquery").attr("content");
    window.jquery_present = "undefined" != typeof jQuery, void 0 === window.METRO_JQUERY && (window.METRO_JQUERY = void 0 === h || JSON.parse(h)), window.useJQuery = window.jquery_present && window.METRO_JQUERY;
    h = e.meta("metro4:about").attr("content");
    void 0 === window.METRO_SHOW_ABOUT && (window.METRO_SHOW_ABOUT = void 0 === h || JSON.parse(h));
    e = e.meta("metro4:compile").attr("content");
    void 0 === window.METRO_SHOW_COMPILE_TIME && (window.METRO_SHOW_COMPILE_TIME = void 0 === e || JSON.parse(e)), void 0 === window.METRO_INIT && (window.METRO_INIT = void 0 === t || JSON.parse(t)), void 0 === window.METRO_DEBUG && (window.METRO_DEBUG = !0), void 0 === window.METRO_WEEK_START && (window.METRO_WEEK_START = void 0 !== i ? parseInt(i) : 0), void 0 === window.METRO_DATE_FORMAT && (window.METRO_DATE_FORMAT = void 0 !== s ? s : "%Y-%m-%d"), void 0 === window.METRO_DATE_FORMAT_INPUT && (window.METRO_DATE_FORMAT_INPUT = void 0 !== a ? a : "%Y-%m-%d"), void 0 === window.METRO_LOCALE && (window.METRO_LOCALE = void 0 !== n ? n : "en-US"), void 0 === window.METRO_ANIMATION_DURATION && (window.METRO_ANIMATION_DURATION = void 0 !== o ? parseInt(o) : 100), void 0 === window.METRO_CALLBACK_TIMEOUT && (window.METRO_CALLBACK_TIMEOUT = void 0 !== r ? parseInt(r) : 500), void 0 === window.METRO_TIMEOUT && (window.METRO_TIMEOUT = void 0 !== l ? parseInt(l) : 2e3), void 0 === window.METRO_SCROLL_MULTIPLE && (window.METRO_SCROLL_MULTIPLE = void 0 !== c ? parseInt(c) : 20), void 0 === window.METRO_CLOAK_REMOVE && (window.METRO_CLOAK_REMOVE = void 0 !== d ? ("" + d).toLowerCase() : "fade"), void 0 === window.METRO_CLOAK_DURATION && (window.METRO_CLOAK_DURATION = void 0 !== u ? parseInt(u) : 300), void 0 === window.METRO_HOTKEYS_FILTER_CONTENT_EDITABLE && (window.METRO_HOTKEYS_FILTER_CONTENT_EDITABLE = !0), void 0 === window.METRO_HOTKEYS_FILTER_INPUT_ACCEPTING_ELEMENTS && (window.METRO_HOTKEYS_FILTER_INPUT_ACCEPTING_ELEMENTS = !0), void 0 === window.METRO_HOTKEYS_FILTER_TEXT_INPUTS && (window.METRO_HOTKEYS_FILTER_TEXT_INPUTS = !0), void 0 === window.METRO_HOTKEYS_BUBBLE_UP && (window.METRO_HOTKEYS_BUBBLE_UP = !1), void 0 === window.METRO_THROWS && (window.METRO_THROWS = !0), window.METRO_MEDIA = []
}(m4q), function (e) {
    "function" == typeof define && define.amd ? define("metro4", e) : e()
}(function () {
    "use strict";
    var u = m4q;
    if ("undefined" == typeof m4q) throw new Error("Metro 4 requires m4q helper!");
    if (!("MutationObserver" in window)) throw new Error("Metro 4 requires MutationObserver!");

    function o(e) {
        return "string" != typeof e ? void 0 : e.replace(/-/g, "").toLowerCase()
    }

    var s = "ontouchstart" in window || 0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints, h = {
        version: "4.4.2",
        compileTime: "08/11/2020 22:09:20",
        buildNumber: "753",
        isTouchable: s,
        fullScreenEnabled: document.fullscreenEnabled,
        sheet: null,
        controlsPosition: {INSIDE: "inside", OUTSIDE: "outside"},
        groupMode: {ONE: "one", MULTI: "multi"},
        aspectRatio: {HD: "hd", SD: "sd", CINEMA: "cinema"},
        fullScreenMode: {WINDOW: "window", DESKTOP: "desktop"},
        position: {
            TOP: "top",
            BOTTOM: "bottom",
            LEFT: "left",
            RIGHT: "right",
            TOP_RIGHT: "top-right",
            TOP_LEFT: "top-left",
            BOTTOM_LEFT: "bottom-left",
            BOTTOM_RIGHT: "bottom-right",
            LEFT_BOTTOM: "left-bottom",
            LEFT_TOP: "left-top",
            RIGHT_TOP: "right-top",
            RIGHT_BOTTOM: "right-bottom"
        },
        popoverEvents: {CLICK: "click", HOVER: "hover", FOCUS: "focus"},
        stepperView: {SQUARE: "square", CYCLE: "cycle", DIAMOND: "diamond"},
        listView: {
            LIST: "list",
            CONTENT: "content",
            ICONS: "icons",
            ICONS_MEDIUM: "icons-medium",
            ICONS_LARGE: "icons-large",
            TILES: "tiles",
            TABLE: "table"
        },
        events: {
            click: "click",
            start: s ? "touchstart" : "mousedown",
            stop: s ? "touchend" : "mouseup",
            move: s ? "touchmove" : "mousemove",
            enter: s ? "touchstart" : "mouseenter",
            startAll: "mousedown touchstart",
            stopAll: "mouseup touchend",
            moveAll: "mousemove touchmove",
            leave: "mouseleave",
            focus: "focus",
            blur: "blur",
            resize: "resize",
            keyup: "keyup",
            keydown: "keydown",
            keypress: "keypress",
            dblclick: "dblclick",
            input: "input",
            change: "change",
            cut: "cut",
            paste: "paste",
            scroll: "scroll",
            mousewheel: "mousewheel",
            inputchange: "change input propertychange cut paste copy drop",
            dragstart: "dragstart",
            dragend: "dragend",
            dragenter: "dragenter",
            dragover: "dragover",
            dragleave: "dragleave",
            drop: "drop",
            drag: "drag"
        },
        keyCode: {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            BREAK: 19,
            CAPS: 20,
            ESCAPE: 27,
            SPACE: 32,
            PAGEUP: 33,
            PAGEDOWN: 34,
            END: 35,
            HOME: 36,
            LEFT_ARROW: 37,
            UP_ARROW: 38,
            RIGHT_ARROW: 39,
            DOWN_ARROW: 40,
            COMMA: 188
        },
        media_queries: {
            FS: "(min-width: 0px)",
            XS: "(min-width: 360px)",
            SM: "(min-width: 576px)",
            MD: "(min-width: 768px)",
            LG: "(min-width: 992px)",
            XL: "(min-width: 1200px)",
            XXL: "(min-width: 1452px)"
        },
        media_sizes: {FS: 0, XS: 360, SM: 576, LD: 640, MD: 768, LG: 992, XL: 1200, XXL: 1452},
        media_mode: {FS: "fs", XS: "xs", SM: "sm", MD: "md", LG: "lg", XL: "xl", XXL: "xxl"},
        media_modes: ["fs", "xs", "sm", "md", "lg", "xl", "xxl"],
        actions: {REMOVE: 1, HIDE: 2},
        hotkeys: {},
        locales: {},
        utils: {},
        colors: {},
        dialog: null,
        pagination: null,
        md5: null,
        storage: null,
        export: null,
        animations: null,
        cookie: null,
        template: null,
        about: function () {
            var e = "<h3>About</h3><hr><div><b>Metro 4</b> - v" + h.version + ". " + h.showCompileTime() + "</div><div><b>M4Q</b> - " + m4q.version + "</div>";
            h.infobox.create(e)
        },
        info: function () {
            console.info("Metro 4 - v" + h.version + ". " + h.showCompileTime()), console.info("m4q - " + m4q.version)
        },
        showCompileTime: function () {
            return "Built at: " + h.compileTime
        },
        aboutDlg: function () {
            alert("Metro 4 - v" + h.version + ". " + h.showCompileTime())
        },
        ver: function () {
            return h.version
        },
        build: function () {
            return h.build
        },
        compile: function () {
            return h.compileTime
        },
        observe: function () {
            new MutationObserver(function (e) {
                e.map(function (e) {
                    var t, n, i, s, a;
                    if ("attributes" === e.type && "data-role" !== e.attributeName) "data-hotkey" === e.attributeName ? h.initHotkeys([e.target], !0) : (n = (t = u(e.target)).data("metroComponent"), i = e.attributeName, s = t.attr(i), a = e.oldValue, void 0 !== n && (t.fire("attr-change", {
                        attr: i,
                        newValue: s,
                        oldValue: a,
                        __this: t[0]
                    }), u.each(n, function () {
                        var e = h.getPlugin(t, this);
                        e && "function" == typeof e.changeAttribute && e.changeAttribute(i, s, a)
                    }))); else if ("childList" === e.type && 0 < e.addedNodes.length) {
                        var o, r, l, c = [], d = e.addedNodes;
                        if (d.length) {
                            for (o = 0; o < d.length; o++) l = d[o], void 0 !== (r = u(l)).attr("data-role") && c.push(l), u.each(r.find("[data-role]"), function () {
                                -1 === c.indexOf(this) && c.push(this)
                            });
                            c.length && h.initWidgets(c, "observe")
                        }
                    }
                })
            }).observe(u("html")[0], {childList: !0, attributes: !0, subtree: !0})
        },
        init: function () {
            var e = u("[data-role]"), t = u("[data-hotkey]"), n = u("html"), i = this;
            window.METRO_BLUR_IMAGE && n.addClass("use-blur-image"), window.METRO_SHOW_ABOUT && h.info(!0), !0 == s ? n.addClass("metro-touch-device") : n.addClass("metro-no-touch-device"), h.sheet = this.utils.newCssSheet(), this.utils.addCssRule(h.sheet, "*, *::before, *::after", "box-sizing: border-box;"), window.METRO_MEDIA = [], u.each(h.media_queries, function (e, t) {
                i.utils.media(t) && window.METRO_MEDIA.push(h.media_mode[e])
            }), h.observe(), h.initHotkeys(t), h.initWidgets(e, "init"), "fade" !== window.METRO_CLOAK_REMOVE ? (u(".m4-cloak").removeClass("m4-cloak"), u(window).fire("metro-initiated")) : u(".m4-cloak").animate({
                draw: {opacity: 1},
                dur: 300,
                onDone: function () {
                    u(".m4-cloak").removeClass("m4-cloak"), u(window).fire("metro-initiated")
                }
            })
        },
        initHotkeys: function (e, i) {
            u.each(e, function () {
                var e = u(this), t = !!e.attr("data-hotkey") && e.attr("data-hotkey").toLowerCase(),
                    n = !!e.attr("data-hotkey-func") && e.attr("data-hotkey-func");
                !1 !== t && (!0 === e.data("hotKeyBonded") && !0 !== i || (h.hotkeys[t] = [this, n], e.data("hotKeyBonded", !0), e.fire("hot-key-bonded", {
                    __this: e[0],
                    hotkey: t,
                    fn: n
                })))
            })
        },
        initWidgets: function (e) {
            var a = this;
            u.each(e, function () {
                var s = u(this);
                this.hasAttribute("data-role") && s.attr("data-role").split(/\s*,\s*/).map(function (t) {
                    var e = a.utils.$(), n = o(t);
                    if (void 0 !== e.fn[n] && void 0 === s.attr("data-role-" + n)) try {
                        e.fn[n].call(s), s.attr("data-role-" + n, !0);
                        var i = s.data("metroComponent");
                        void 0 === i ? i = [n] : i.push(n), s.data("metroComponent", i), s.fire("create", {
                            __this: s[0],
                            name: n
                        }), u(document).fire("component-create", {element: s[0], name: n})
                    } catch (e) {
                        throw console.error("Error creating component " + t + " for ", s[0]), e
                    }
                })
            })
        },
        plugin: function (e, n) {
            var i = o(e), e = function (t) {
                t.fn[i] = function (e) {
                    return this.each(function () {
                        t.data(this, i, Object.create(n).init(e, this))
                    })
                }
            };
            e(m4q), window.useJQuery && e(jQuery)
        },
        destroyPlugin: function (e, t) {
            var n = u(e), i = o(t), e = h.getPlugin(n, i);
            void 0 !== e ? "function" == typeof e.destroy ? (e.destroy(), e = n.data("metroComponent"), this.utils.arrayDelete(e, i), n.data("metroComponent", e), u.removeData(n[0], i), n.removeAttr("data-role-" + i)) : console.warn("Component " + t + " can not be destroyed: method destroy not found.") : console.warn("Component " + t + " can not be destroyed: the element is not a Metro 4 component.")
        },
        destroyPluginAll: function (e) {
            var t = u(e), e = t.data("metroComponent");
            void 0 !== e && 0 < e.length && u.each(e, function () {
                h.destroyPlugin(t[0], this)
            })
        },
        noop: function () {
        },
        noop_true: function () {
            return !0
        },
        noop_false: function () {
            return !1
        },
        requestFullScreen: function (e) {
            e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.requestFullscreen().catch(function (e) {
                console.warn("Error attempting to enable full-screen mode: " + e.message + " " + e.name)
            })
        },
        exitFullScreen: function () {
            document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.exitFullscreen().catch(function (e) {
                console.warn("Error attempting to disable full-screen mode: " + e.message + " " + e.name)
            })
        },
        inFullScreen: function () {
            return void 0 !== (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
        },
        $: function () {
            return window.useJQuery ? jQuery : m4q
        },
        get$el: function (e) {
            return h.$()(u(e)[0])
        },
        getPlugin: function (e, t) {
            t = o(t), e = h.get$el(e);
            return e.length ? e.data(t) : void 0
        },
        makePlugin: function (e, t, n) {
            t = o(t), e = h.get$el(e);
            return e.length && "function" == typeof e[t] ? e[t](n) : void 0
        },
        Component: function (e, t) {
            var e = o(e), l = h.utils, t = u.extend({name: e}, {
                _super: function (e, t, n, i) {
                    var s = this;
                    this.elem = e, this.element = u(e), this.options = u.extend({}, n, t), this.component = this.elem, this._setOptionsFromDOM(), this._runtime(), i && "object" == typeof i && u.each(i, function (e, t) {
                        s[e] = t
                    }), this._createExec()
                }, _setOptionsFromDOM: function () {
                    var e = this.element, i = this.options;
                    u.each(e.data(), function (t, n) {
                        if (t in i) try {
                            i[t] = JSON.parse(n)
                        } catch (e) {
                            i[t] = n
                        }
                    })
                }, _runtime: function () {
                    var e = this.element, t = (e.attr("data-role") || "").toArray(",").map(o);
                    e.attr("data-role-" + this.name) || (e.attr("data-role-" + this.name, !0), -1 === t.indexOf(this.name) && (t.push(this.name), e.attr("data-role", t.join(","))), void 0 === (t = e.data("metroComponent")) ? t = [this.name] : t.push(this.name), e.data("metroComponent", t))
                }, _createExec: function () {
                    var e = this, t = this.options[this.name + "Deferred"];
                    t ? setTimeout(function () {
                        e._create()
                    }, t) : e._create()
                }, _fireEvent: function (e, t, n, i) {
                    var s = this.element, a = this.options, o = e.camelCase().capitalize(),
                        r = (t = u.extend({}, t, {__this: s[0]})) ? Object.values(t) : {};
                    return n && (console.warn(n), console.warn("Event: on" + e.camelCase().capitalize()), console.warn("Data: ", t), console.warn("Element: ", s[0])), !0 !== i && s.fire(o.toLowerCase(), t), l.exec(a["on" + o], r, s[0])
                }, getComponent: function () {
                    return this.component
                }, getComponentName: function () {
                    return this.name
                }
            }, t);
            return h.plugin(e, t), t
        }
    };
    return u(window).on(h.events.resize, function () {
        window.METRO_MEDIA = [], u.each(h.media_queries, function (e, t) {
            h.utils.media(t) && window.METRO_MEDIA.push(h.media_mode[e])
        })
    }), window.Metro = h, !0 === window.METRO_INIT && u(function () {
        h.init()
    }), h
}), function (e) {
    m4q.extend(e.locales, {
        "cn-ZH": {
            calendar: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "日", "一", "二", "三", "四", "五", "六", "周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                time: {days: "天", hours: "时", minutes: "分", seconds: "秒", month: "月", day: "日", year: "年"}
            },
            buttons: {
                ok: "确认",
                cancel: "取消",
                done: "完成",
                today: "今天",
                now: "现在",
                clear: "清除",
                help: "帮助",
                yes: "是",
                no: "否",
                random: "随机",
                save: "保存",
                reset: "重啟"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "da-DK": {
            calendar: {
                months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December", "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                time: {
                    days: "DAGE",
                    hours: "TIMER",
                    minutes: "MIN",
                    seconds: "SEK",
                    month: "MON",
                    day: "DAG",
                    year: "ÅR"
                }
            },
            buttons: {
                ok: "OK",
                cancel: "Annuller",
                done: "Færdig",
                today: "Idag",
                now: "Nu",
                clear: "Ryd",
                help: "Hjælp",
                yes: "Ja",
                no: "Nej",
                random: "Tilfældig",
                save: "Gem",
                reset: "Nulstil"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "de-DE": {
            calendar: {
                months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
                time: {days: "TAGE", hours: "STD", minutes: "MIN", seconds: "SEK"}
            },
            buttons: {
                ok: "OK",
                cancel: "Abbrechen",
                done: "Fertig",
                today: "Heute",
                now: "Jetzt",
                clear: "Löschen",
                help: "Hilfe",
                yes: "Ja",
                no: "Nein",
                random: "Zufällig",
                save: "Speichern",
                reset: "Zurücksetzen"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "en-US": {
            calendar: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Sun", "Mon", "Tus", "Wen", "Thu", "Fri", "Sat"],
                time: {
                    days: "DAYS",
                    hours: "HOURS",
                    minutes: "MINS",
                    seconds: "SECS",
                    month: "MON",
                    day: "DAY",
                    year: "YEAR"
                }
            },
            buttons: {
                ok: "OK",
                cancel: "Cancel",
                done: "Done",
                today: "Today",
                now: "Now",
                clear: "Clear",
                help: "Help",
                yes: "Yes",
                no: "No",
                random: "Random",
                save: "Save",
                reset: "Reset"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "es-MX": {
            calendar: {
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                time: {
                    days: "DÍAS",
                    hours: "HORAS",
                    minutes: "MINS",
                    seconds: "SEGS",
                    month: "MES",
                    day: "DÍA",
                    year: "AÑO"
                }
            },
            buttons: {
                ok: "Aceptar",
                cancel: "Cancelar",
                done: "Hecho",
                today: "Hoy",
                now: "Ahora",
                clear: "Limpiar",
                help: "Ayuda",
                yes: "Si",
                no: "No",
                random: "Aleatorio",
                save: "Salvar",
                reset: "Reiniciar"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "fr-FR": {
            calendar: {
                months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre", "Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
                days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa", "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                time: {
                    days: "JOURS",
                    hours: "HEURES",
                    minutes: "MINS",
                    seconds: "SECS",
                    month: "MOIS",
                    day: "JOUR",
                    year: "ANNEE"
                }
            },
            buttons: {
                ok: "OK",
                cancel: "Annulé",
                done: "Fait",
                today: "Aujourd'hui",
                now: "Maintenant",
                clear: "Effacé",
                help: "Aide",
                yes: "Oui",
                no: "Non",
                random: "Aléatoire",
                save: "Sauvegarder",
                reset: "Réinitialiser"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "hu-HU": {
            calendar: {
                months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December", "Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
                days: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "V", "H", "K", "Sz", "Cs", "P", "Sz", "Vas", "Hét", "Ke", "Sze", "Csü", "Pén", "Szom"],
                time: {days: "NAP", hours: "ÓRA", minutes: "PERC", seconds: "MP"}
            },
            buttons: {
                ok: "OK",
                cancel: "Mégse",
                done: "Kész",
                today: "Ma",
                now: "Most",
                clear: "Törlés",
                help: "Segítség",
                yes: "Igen",
                no: "Nem",
                random: "Véletlen",
                save: "Mentés",
                reset: "Visszaállítás"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "it-IT": {
            calendar: {
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre", "Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                time: {
                    days: "GIORNI",
                    hours: "ORE",
                    minutes: "MIN",
                    seconds: "SEC",
                    month: "MESE",
                    day: "GIORNO",
                    year: "ANNO"
                }
            },
            buttons: {
                ok: "OK",
                cancel: "Annulla",
                done: "Fatto",
                today: "Oggi",
                now: "Adesso",
                clear: "Cancella",
                help: "Aiuto",
                yes: "Sì",
                no: "No",
                random: "Random",
                save: "Salvare",
                reset: "Reset"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "pt-BR": {
            calendar: {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Do", "Se", "Te", "Qa", "Qi", "Se", "Sa", "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                time: {
                    days: "DIAS",
                    hours: "HORAS",
                    minutes: "MINUTOS",
                    seconds: "SEGUNDOS",
                    month: "MÊS",
                    day: "DIA",
                    year: "ANO"
                }
            },
            buttons: {
                ok: "OK",
                cancel: "Cancelar",
                done: "Feito",
                today: "Hoje",
                now: "Agora",
                clear: "Limpar",
                help: "Ajuda",
                yes: "Sim",
                no: "Não",
                random: "Aleatório",
                save: "Salvar",
                reset: "Restaurar"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "ru-RU": {
            calendar: {
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
                time: {
                    days: "ДНИ",
                    hours: "ЧАСЫ",
                    minutes: "МИН",
                    seconds: "СЕК",
                    month: "МЕС",
                    day: "ДЕНЬ",
                    year: "ГОД"
                }
            },
            buttons: {
                ok: "ОК",
                cancel: "Отмена",
                done: "Готово",
                today: "Сегодня",
                now: "Сейчас",
                clear: "Очистить",
                help: "Помощь",
                yes: "Да",
                no: "Нет",
                random: "Случайно",
                save: "Сохранить",
                reset: "Сброс"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "tr-TR": {
            calendar: {
                months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", "Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                days: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pa", "Pz", "Sa", "Ça", "Pe", "Cu", "Ct", "Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                time: {days: "GÜN", hours: "SAAT", minutes: "DAK", seconds: "SAN", month: "AY", day: "GÜN", year: "YIL"}
            },
            buttons: {
                ok: "Tamam",
                cancel: "Vazgeç",
                done: "Bitti",
                today: "Bugün",
                now: "Şimdi",
                clear: "Temizle",
                help: "Yardım",
                yes: "Evet",
                no: "Hayır",
                random: "Rasgele",
                save: "Kurtarmak",
                reset: "Sıfırla"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "tw-ZH": {
            calendar: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "日", "一", "二", "三", "四", "五", "六", "週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                time: {days: "天", hours: "時", minutes: "分", seconds: "秒", month: "月", day: "日", year: "年"}
            },
            buttons: {
                ok: "確認",
                cancel: "取消",
                done: "完成",
                today: "今天",
                now: "現在",
                clear: "清除",
                help: "幫助",
                yes: "是",
                no: "否",
                random: "隨機",
                save: "保存",
                reset: "重啟"
            }
        }
    })
}(Metro), function (e) {
    m4q.extend(e.locales, {
        "uk-UA": {
            calendar: {
                months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень", "Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
                days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нед", "Пон", "Вiв", "Сер", "Чет", "Пят", "Суб"],
                time: {
                    days: "ДНІ",
                    hours: "ГОД",
                    minutes: "ХВИЛ",
                    seconds: "СЕК",
                    month: "МІС",
                    day: "ДЕНЬ",
                    year: "РІК"
                }
            },
            buttons: {
                ok: "ОК",
                cancel: "Відміна",
                done: "Готово",
                today: "Сьогодні",
                now: "Зараз",
                clear: "Очистити",
                help: "Допомога",
                yes: "Так",
                no: "Ні",
                random: "Випадково",
                save: "Зберегти",
                reset: "Скинути"
            }
        }
    })
}(Metro), function () {
    "use strict";
    "function" != typeof Array.shuffle && (Array.prototype.shuffle = function () {
        for (var e, t, n = this.length; 0 !== n;) t = Math.floor(Math.random() * n), e = this[--n], this[n] = this[t], this[t] = e;
        return this
    }), "function" != typeof Array.clone && (Array.prototype.clone = function () {
        return this.slice(0)
    }), "function" != typeof Array.unique && (Array.prototype.unique = function () {
        for (var e = this.concat(), t = 0; t < e.length; ++t) for (var n = t + 1; n < e.length; ++n) e[t] === e[n] && e.splice(n--, 1);
        return e
    }), "function" != typeof Array.from && (Array.prototype.from = function (e) {
        var t, n = [];
        if (void 0 === e.length && "object" == typeof e) return Object.values(e);
        if (void 0 === e.length) throw new Error("Value can not be converted to array");
        for (t = 0; t < e.length; t++) n.push(e[t]);
        return n
    }), "function" != typeof Array.contains && (Array.prototype.contains = function (e, t) {
        return -1 < this.indexOf(e, t)
    }), "function" != typeof Array.includes && (Array.prototype.includes = function (e, t) {
        return -1 < this.indexOf(e, t)
    })
}(), function (p) {
    "use strict";
    Date.prototype.getWeek = function (e) {
        var t, n, i;
        return e = Utils.isValue(e) ? "number" == typeof e ? parseInt(e) : 0 : METRO_WEEK_START, t = 0 <= (t = (n = new Date(this.getFullYear(), 0, 1)).getDay() - e) ? t : t + 7, n = Math.floor((this.getTime() - n.getTime() - 6e4 * (this.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5) + 1, t < 4 ? 52 < (i = Math.floor((n + t - 1) / 7) + 1) && (i = (e = 0 <= (e = new Date(this.getFullYear() + 1, 0, 1).getDay() - e) ? e : e + 7) < 4 ? 1 : 53) : i = Math.floor((n + t - 1) / 7), i
    }, Date.prototype.getYear = function () {
        return this.getFullYear().toString().substr(-2)
    }, Date.prototype.format = function (e, t) {
        void 0 === t && (t = "en-US");

        function i() {
            var e = new Date(n);
            return e.setDate(o - (a + 6) % 7 + 3), e
        }

        function s(e, t) {
            return ("" + (Math.pow(10, t) + e)).slice(1)
        }

        var t = (void 0 !== p.locales && void 0 !== p.locales[t] ? p.locales[t] : p.locales["en-US"]).calendar,
            n = this, a = n.getDay(), o = n.getDate(), r = n.getMonth(), l = n.getFullYear(), c = n.getHours(),
            d = t.days, u = t.months, h = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        return e.replace(/(%[a-z])/gi, function (e) {
            return {
                "%a": d[a].slice(0, 3),
                "%A": d[a],
                "%b": u[r].slice(0, 3),
                "%B": u[r],
                "%c": n.toUTCString(),
                "%C": Math.floor(l / 100),
                "%d": s(o, 2),
                dd: s(o, 2),
                "%e": o,
                "%F": n.toISOString().slice(0, 10),
                "%G": i().getFullYear(),
                "%g": ("" + i().getFullYear()).slice(2),
                "%H": s(c, 2),
                "%I": s((c + 11) % 12 + 1, 2),
                "%j": s(h[r] + o + (1 < r && (l % 4 == 0 && l % 100 != 0 || l % 400 == 0) ? 1 : 0), 3),
                "%k": "" + c,
                "%l": (c + 11) % 12 + 1,
                "%m": s(r + 1, 2),
                "%M": s(n.getMinutes(), 2),
                "%p": c < 12 ? "AM" : "PM",
                "%P": c < 12 ? "am" : "pm",
                "%s": Math.round(n.getTime() / 1e3),
                "%S": s(n.getSeconds(), 2),
                "%u": a || 7,
                "%V": function () {
                    var e = i(), t = e.valueOf();
                    e.setMonth(0, 1);
                    var n = e.getDay();
                    return 4 !== n && e.setMonth(0, 1 + (4 - n + 7) % 7), s(1 + Math.ceil((t - e) / 6048e5), 2)
                }(),
                "%w": "" + a,
                "%x": n.toLocaleDateString(),
                "%X": n.toLocaleTimeString(),
                "%y": ("" + l).slice(2),
                "%Y": l,
                "%z": n.toTimeString().replace(/.+GMT([+-]\d+).+/, "$1"),
                "%Z": n.toTimeString().replace(/.+\((.+?)\)$/, "$1")
            }[e] || e
        })
    }, Date.prototype.addHours = function (e) {
        return this.setTime(this.getTime() + 60 * e * 60 * 1e3), this
    }, Date.prototype.addDays = function (e) {
        return this.setDate(this.getDate() + e), this
    }, Date.prototype.addMonths = function (e) {
        return this.setMonth(this.getMonth() + e), this
    }, Date.prototype.addYears = function (e) {
        return this.setFullYear(this.getFullYear() + e), this
    }
}(Metro), function () {
    "use strict";
    Number.prototype.format = function (e, t, n, i) {
        t = "\\d(?=(\\d{" + (t || 3) + "})+" + (0 < e ? "\\D" : "$") + ")", e = this.toFixed(Math.max(0, ~~e));
        return (i ? e.replace(".", i) : e).replace(new RegExp(t, "g"), "$&" + (n || ","))
    }
}(), function () {
    "use strict";
    "function" != typeof Object.create && (Object.create = function (e) {
        function t() {
        }

        return t.prototype = e, new t
    }), "function" != typeof Object.values && (Object.values = function (t) {
        return Object.keys(t).map(function (e) {
            return t[e]
        })
    })
}(), function (c, e) {
    "use strict";
    String.prototype.camelCase = function () {
        return e.camelCase(this)
    }, String.prototype.dashedName = function () {
        return e.dashedName(this)
    }, String.prototype.shuffle = function () {
        return function (e) {
            for (var t, n, i = e.length; 0 !== i;) n = Math.floor(Math.random() * i), t = e[--i], e[i] = e[n], e[n] = t;
            return e
        }(this.split("")).join("")
    }, String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }, String.prototype.contains = function () {
        return !!~String.prototype.indexOf.apply(this, arguments)
    }, "function" != typeof String.includes && (String.prototype.includes = function () {
        return !!~String.prototype.indexOf.apply(this, arguments)
    }), String.prototype.toDate = function (e, a) {
        var t, n, i, s, o, r, l;
        a = a || "en-US";
        if (null == e || "" === e) return new Date(this);
        if (r = this.replace(/[\/,.:\s]/g, "-"), l = e.toLowerCase().replace(/[^a-zA-Z0-9%]/g, "-").split("-"), t = r.split("-"), "" === r.replace(/-/g, "").trim()) return "Invalid Date";
        if (i = -1 < l.indexOf("mm") ? l.indexOf("mm") : l.indexOf("%m"), s = -1 < l.indexOf("dd") ? l.indexOf("dd") : l.indexOf("%d"), n = -1 < l.indexOf("yyyy") ? l.indexOf("yyyy") : -1 < l.indexOf("yy") ? l.indexOf("yy") : l.indexOf("%y"), o = -1 < l.indexOf("hh") ? l.indexOf("hh") : l.indexOf("%h"), e = -1 < l.indexOf("ii") ? l.indexOf("ii") : -1 < l.indexOf("mi") ? l.indexOf("mi") : l.indexOf("%i"), r = -1 < l.indexOf("ss") ? l.indexOf("ss") : l.indexOf("%s"), !(-1 < i && "" !== t[i])) return "Invalid Date";
        if (isNaN(parseInt(t[i]))) {
            if (t[i] = function (e) {
                var t, n, i, s = c.locales;
                if (null == e) return -1;
                if (e = e.substr(0, 3), void 0 !== a && "en-US" !== a && void 0 !== s && void 0 !== s[a] && void 0 !== s[a].calendar && void 0 !== s[a].calendar.months) {
                    for (t = s[a].calendar.months, i = 12; i < t.length; i++) if (t[i].toLowerCase() === e.toLowerCase()) {
                        n = i - 12;
                        break
                    }
                    e = s["en-US"].calendar.months[n]
                }
                return s = Date.parse(e + " 1, 1972"), isNaN(s) ? -1 : new Date(s).getMonth() + 1
            }(t[i]), -1 === t[i]) return "Invalid Date"
        } else if ((l = parseInt(t[i])) < 1 || 12 < l) return "Invalid Date";
        return n = -1 < n && "" !== t[n] ? t[n] : null, i = -1 < i && "" !== t[i] ? t[i] : null, s = -1 < s && "" !== t[s] ? t[s] : null, o = -1 < o && "" !== t[o] ? t[o] : null, e = -1 < e && "" !== t[e] ? t[e] : null, r = -1 < r && "" !== t[r] ? t[r] : null, new Date(n, i - 1, s, o, e, r)
    }, String.prototype.toArray = function (e, n, i) {
        return n = n || "string", i = null != i && i, ("" + this).split(e = e || ",").map(function (e) {
            var t;
            switch (n) {
                case"int":
                case"integer":
                    t = isNaN(e) ? e.trim() : parseInt(e);
                    break;
                case"number":
                case"float":
                    t = isNaN(e) ? e : parseFloat(e);
                    break;
                case"date":
                    t = i ? e.toDate(i) : new Date(e);
                    break;
                default:
                    t = e.trim()
            }
            return t
        })
    }
}(Metro, m4q), function (s, o) {
    "use strict";
    s.utils = {
        isVisible: function (e) {
            e = o(e)[0];
            return "none" !== this.getStyleOne(e, "display") && "hidden" !== this.getStyleOne(e, "visibility") && null !== e.offsetParent
        }, isUrl: function (e) {
            return /^(\.\/|\.\.\/|ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-\/]))?/.test(e)
        }, isTag: function (e) {
            return /^<\/?[\w\s="/.':;#-\/\?]+>/gi.test(e)
        }, isEmbedObject: function (e) {
            var t = !1;
            return o.each(["iframe", "object", "embed", "video"], function () {
                ("string" == typeof e && e.toLowerCase() === this || void 0 !== e.nodeType && e.tagName.toLowerCase() === this) && (t = !0)
            }), t
        }, isVideoUrl: function (e) {
            return /youtu\.be|youtube|twitch|vimeo/gi.test(e)
        }, isDate: function (e, t) {
            return !!this.isDateObject(e) || "Invalid Date" !== (this.isValue(t) ? String(e).toDate(t) : String(new Date(e)))
        }, isDateObject: function (e) {
            return "object" == typeof e && void 0 !== e.getMonth
        }, isInt: function (e) {
            return !isNaN(e) && +e % 1 == 0
        }, isFloat: function (e) {
            return !isNaN(e) && +e % 1 != 0 || /^\d*\.\d+$/.test(e)
        }, isFunc: function (e) {
            return this.isType(e, "function")
        }, isObject: function (e) {
            return this.isType(e, "object")
        }, isType: function (e, t) {
            if (!this.isValue(e)) return !1;
            if (typeof e === t) return e;
            if ("tag" === ("" + t).toLowerCase() && this.isTag(e)) return e;
            if ("url" === ("" + t).toLowerCase() && this.isUrl(e)) return e;
            if ("array" === ("" + t).toLowerCase() && Array.isArray(e)) return e;
            if (this.isTag(e) || this.isUrl(e)) return !1;
            if (typeof window[e] === t) return window[e];
            if ("string" == typeof e && -1 === e.indexOf(".")) return !1;
            if ("string" == typeof e && /[/\s([]+/gm.test(e)) return !1;
            if ("number" == typeof e && "number" !== t.toLowerCase()) return !1;
            for (var n = e.split("."), i = window, s = 0; s < n.length; s++) i = i[n[s]];
            return typeof i === t && i
        }, $: function () {
            return window.useJQuery ? jQuery : m4q
        }, isMetroObject: function (e, t) {
            var n = o(e), i = s.getPlugin(e, t);
            return 0 === n.length ? (console.warn(t + " " + e + " not found!"), !1) : void 0 !== i || (console.warn("Element not contain role " + t + '! Please add attribute data-role="' + t + '" to element ' + e), !1)
        }, isJQuery: function (e) {
            return "undefined" != typeof jQuery && e instanceof jQuery
        }, isM4Q: function (e) {
            return "undefined" != typeof m4q && e instanceof m4q
        }, isQ: function (e) {
            return this.isJQuery(e) || this.isM4Q(e)
        }, isIE11: function () {
            return !!window.MSInputMethodContext && !!document.documentMode
        }, embedUrl: function (e) {
            return -1 !== e.indexOf("youtu.be") && (e = "https://www.youtube.com/embed/" + e.split("/").pop()), "<div class='embed-container'><iframe src='" + e + "'></iframe></div>"
        }, elementId: function (e) {
            return e + "-" + (new Date).getTime() + o.random(1, 1e3)
        }, secondsToTime: function (e) {
            var t = e % 3600, n = t % 60;
            return {h: Math.floor(e / 3600), m: Math.floor(t / 60), s: Math.ceil(n)}
        }, secondsToFormattedString: function (e) {
            var t = parseInt(e, 10), n = Math.floor(t / 3600), e = Math.floor((t - 3600 * n) / 60),
                t = t - 3600 * n - 60 * e;
            return n < 10 && (n = "0" + n), e < 10 && (e = "0" + e), t < 10 && (t = "0" + t), [n, e, t].join(":")
        }, func: function (e) {
            return new Function("a", e)
        }, exec: function (e, t, n) {
            var i;
            if (null == e) return !1;
            var s = this.isFunc(e);
            !1 === s && (s = this.func(e));
            try {
                i = s.apply(n, t)
            } catch (e) {
                if (!(i = null) === window.METRO_THROWS) throw e
            }
            return i
        }, isOutsider: function (e) {
            var t = o(e), e = t.clone();
            return e.removeAttr("data-role").css({
                visibility: "hidden",
                position: "absolute",
                display: "block"
            }), t.parent().append(e), t = this.inViewport(e[0]), e.remove(), !t
        }, inViewport: function (e) {
            e = this.rect(e);
            return 0 <= e.top && 0 <= e.left && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
        }, rect: function (e) {
            return e.getBoundingClientRect()
        }, getCursorPosition: function (e, t) {
            e = this.rect(e);
            return {x: this.pageXY(t).x - e.left - window.pageXOffset, y: this.pageXY(t).y - e.top - window.pageYOffset}
        }, getCursorPositionX: function (e, t) {
            return this.getCursorPosition(e, t).x
        }, getCursorPositionY: function (e, t) {
            return this.getCursorPosition(e, t).y
        }, objectLength: function (e) {
            return Object.keys(e).length
        }, percent: function (e, t, n) {
            if (0 === e) return 0;
            e = 100 * t / e;
            return !0 === n ? Math.round(e) : Math.round(100 * e) / 100
        }, objectShift: function (e) {
            var t = 0;
            return o.each(e, function (e) {
                (0 === t || e < t) && (t = e)
            }), delete e[t], e
        }, objectDelete: function (e, t) {
            void 0 !== e[t] && delete e[t]
        }, arrayDeleteByMultipleKeys: function (t, e) {
            return e.forEach(function (e) {
                delete t[e]
            }), t.filter(function (e) {
                return void 0 !== e
            })
        }, arrayDelete: function (e, t) {
            -1 < e.indexOf(t) && e.splice(e.indexOf(t), 1)
        }, arrayDeleteByKey: function (e, t) {
            e.splice(t, 1)
        }, nvl: function (e, t) {
            return null == e ? t : e
        }, objectClone: function (e) {
            var t, n = {};
            for (t in e) o.hasProp(e, t) && (n[t] = e[t]);
            return n
        }, github: function (e, t) {
            var n = this;
            o.json("https://api.github.com/repos/" + e).then(function (e) {
                n.exec(t, [e])
            })
        }, detectIE: function () {
            var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
            if (0 < t) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
            if (0 < e.indexOf("Trident/")) {
                var n = e.indexOf("rv:");
                return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10)
            }
            n = e.indexOf("Edge/");
            return 0 < n && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
        }, detectChrome: function () {
            return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
        }, encodeURI: function (e) {
            return encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")
        }, pageHeight: function () {
            var e = document.body, t = document.documentElement;
            return Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)
        }, cleanPreCode: function (e) {
            Array.prototype.slice.call(document.querySelectorAll(e), 0).forEach(function (e) {
                var t = e.textContent.replace(/^[\r\n]+/, "").replace(/\s+$/g, "");
                if (/^\S/gm.test(t)) e.textContent = t; else {
                    for (var n, i, s, a = /^[\t ]+/gm, o = 1e3; n = a.exec(t);) (s = n[0].length) < o && (o = s, i = n[0]);
                    1e3 !== o && (e.textContent = t.replace(new RegExp("^" + i, "gm"), "").trim())
                }
            })
        }, coords: function (e) {
            e = o(e)[0].getBoundingClientRect();
            return {top: e.top + window.pageYOffset, left: e.left + window.pageXOffset}
        }, positionXY: function (e, t) {
            switch (t) {
                case"client":
                    return this.clientXY(e);
                case"screen":
                    return this.screenXY(e);
                case"page":
                    return this.pageXY(e);
                default:
                    return {x: 0, y: 0}
            }
        }, clientXY: function (e) {
            return {
                x: (e.changedTouches ? e.changedTouches[0] : e).clientX,
                y: (e.changedTouches ? e.changedTouches[0] : e).clientY
            }
        }, screenXY: function (e) {
            return {
                x: (e.changedTouches ? e.changedTouches[0] : e).screenX,
                y: (e.changedTouches ? e.changedTouches[0] : e).screenY
            }
        }, pageXY: function (e) {
            return {
                x: (e.changedTouches ? e.changedTouches[0] : e).pageX,
                y: (e.changedTouches ? e.changedTouches[0] : e).pageY
            }
        }, isRightMouse: function (e) {
            return "which" in e ? 3 === e.which : "button" in e ? 2 === e.button : void 0
        }, hiddenElementSize: function (e, t) {
            var n = o(e).clone(!0);
            return n.removeAttr("data-role").css({
                visibility: "hidden",
                position: "absolute",
                display: "block"
            }), o("body").append(n), this.isValue(t) || (t = !1), e = n.outerWidth(t), t = n.outerHeight(t), n.remove(), {
                width: e,
                height: t
            }
        }, getStyle: function (e, t) {
            e = o(e)[0];
            return window.getComputedStyle(e, t)
        }, getStyleOne: function (e, t) {
            return this.getStyle(e).getPropertyValue(t)
        }, getInlineStyles: function (e) {
            for (var t = {}, n = o(e)[0], i = 0, s = n.style.length; i < s; i++) {
                var a = n.style[i];
                t[a] = n.style[a]
            }
            return t
        }, updateURIParameter: function (e, t, n) {
            var i = new RegExp("([?&])" + t + "=.*?(&|$)", "i"), s = -1 !== e.indexOf("?") ? "&" : "?";
            return e.match(i) ? e.replace(i, "$1" + t + "=" + n + "$2") : e + s + t + "=" + n
        }, getURIParameter: function (e, t) {
            e = e || window.location.href, t = t.replace(/[\[\]]/g, "\\$&");
            e = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
            return e ? e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : "" : null
        }, getLocales: function () {
            return Object.keys(s.locales)
        }, addLocale: function (e) {
            s.locales = o.extend({}, s.locales, e)
        }, aspectRatioH: function (e, t) {
            return "16/9" === t ? 9 * e / 16 : "21/9" === t ? 9 * e / 21 : "4/3" === t ? 3 * e / 4 : void 0
        }, aspectRatioW: function (e, t) {
            return "16/9" === t ? 16 * e / 9 : "21/9" === t ? 21 * e / 9 : "4/3" === t ? 4 * e / 3 : void 0
        }, valueInObject: function (e, t) {
            return -1 < Object.values(e).indexOf(t)
        }, keyInObject: function (e, t) {
            return -1 < Object.keys(e).indexOf(t)
        }, inObject: function (e, t, n) {
            return void 0 !== e[t] && e[t] === n
        }, newCssSheet: function (e) {
            var t = document.createElement("style");
            return void 0 !== e && t.setAttribute("media", e), t.appendChild(document.createTextNode("")), document.head.appendChild(t), t.sheet
        }, addCssRule: function (e, t, n, i) {
            "insertRule" in e ? e.insertRule(t + "{" + n + "}", i) : "addRule" in e && e.addRule(t, n, i)
        }, media: function (e) {
            return window.matchMedia(e).matches
        }, mediaModes: function () {
            return window.METRO_MEDIA
        }, mediaExist: function (e) {
            return -1 < window.METRO_MEDIA.indexOf(e)
        }, inMedia: function (e) {
            return -1 < window.METRO_MEDIA.indexOf(e) && window.METRO_MEDIA.indexOf(e) === window.METRO_MEDIA.length - 1
        }, isValue: function (e) {
            return null != e && "" !== e
        }, isNull: function (e) {
            return null == e
        }, isNegative: function (e) {
            return parseFloat(e) < 0
        }, isPositive: function (e) {
            return 0 < parseFloat(e)
        }, isZero: function (e) {
            return 0 === parseFloat(e.toFixed(2))
        }, between: function (e, t, n, i) {
            return !0 === i ? t <= e && e <= n : t < e && e < n
        }, parseMoney: function (e) {
            return Number(parseFloat(e.replace(/[^0-9-.]/g, "")))
        }, parseCard: function (e) {
            return e.replace(/[^0-9]/g, "")
        }, parsePhone: function (e) {
            return this.parseCard(e)
        }, parseNumber: function (e, t, n) {
            return e.replace(new RegExp("\\" + t, "g"), "").replace(new RegExp("\\" + n, "g"), ".")
        }, nearest: function (e, t, n) {
            return e /= t, e = Math[!0 === n ? "floor" : "ceil"](e) * t
        }, bool: function (e) {
            switch (e) {
                case!0:
                case"true":
                case 1:
                case"1":
                case"on":
                case"yes":
                    return !0;
                default:
                    return !1
            }
        }, copy: function (e) {
            var t, n, i = document.body, s = o(e)[0];
            if (document.createRange && window.getSelection) {
                t = document.createRange(), (n = window.getSelection()).removeAllRanges();
                try {
                    t.selectNodeContents(s), n.addRange(t)
                } catch (e) {
                    t.selectNode(s), n.addRange(t)
                }
            } else i.createTextRange && ((t = i.createTextRange()).moveToElementText(s), t.select());
            document.execCommand("Copy"), window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
        }, decCount: function (e) {
            return e % 1 == 0 ? 0 : e.toString().split(".")[1].length
        }
    }, !0 === window.METRO_GLOBAL_COMMON && (window.Utils = s.utils)
}(Metro, m4q), function (t, o) {
    "use strict";
    var i = t.utils, n = {
        accordionDeferred: 0,
        showMarker: !0,
        material: !1,
        duration: METRO_ANIMATION_DURATION,
        oneFrame: !0,
        showActive: !0,
        activeFrameClass: "",
        activeHeadingClass: "",
        activeContentClass: "",
        onFrameOpen: t.noop,
        onFrameBeforeOpen: t.noop_true,
        onFrameClose: t.noop,
        onFrameBeforeClose: t.noop_true,
        onAccordionCreate: t.noop
    };
    t.accordionSetup = function (e) {
        n = o.extend({}, n, e)
    }, window.metroAccordionSetup, t.accordionSetup(window.metroAccordionSetup), t.Component("accordion", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("accordionCreate", {element: e})
        }, _createStructure: function () {
            var e = this, t = this.element, n = this.options, i = t.children(".frame"), s = t.children(".frame.active");
            t.addClass("accordion"), !0 === n.showMarker && t.addClass("marker-on"), !0 === n.material && t.addClass("material"), i = (0 === s.length ? i : s)[0], this._hideAll(), !0 === n.showActive && (!0 === n.oneFrame ? this._openFrame(i) : o.each(s, function () {
                e._openFrame(this)
            }))
        }, _createEvents: function () {
            var n = this, i = this.element, s = this.options, a = i.children(".frame.active");
            i.on(t.events.click, ".heading", function () {
                var e = o(this), t = e.parent();
                if (e.closest(".accordion")[0] !== i[0]) return !1;
                t.hasClass("active") ? 1 === a.length && s.oneFrame || n._closeFrame(t) : n._openFrame(t)
            })
        }, _openFrame: function (e) {
            var t = this.element, n = this.options, e = o(e);
            if (!1 === i.exec(n.onFrameBeforeOpen, [e[0]], t[0])) return !1;
            !0 === n.oneFrame && this._closeAll(e[0]), e.addClass("active " + n.activeFrameClass), e.children(".heading").addClass(n.activeHeadingClass), e.children(".content").addClass(n.activeContentClass).slideDown(n.duration), this._fireEvent("frameOpen", {frame: e[0]})
        }, _closeFrame: function (e) {
            var t = this.element, n = this.options, e = o(e);
            e.hasClass("active") && !1 !== i.exec(n.onFrameBeforeClose, [e[0]], t[0]) && (e.removeClass("active " + n.activeFrameClass), e.children(".heading").removeClass(n.activeHeadingClass), e.children(".content").removeClass(n.activeContentClass).slideUp(n.duration), this._fireEvent("frameClose", {frame: e[0]}))
        }, _closeAll: function (e) {
            var t = this, n = this.element.children(".frame");
            o.each(n, function () {
                e !== this && t._closeFrame(this)
            })
        }, _hideAll: function () {
            var e = this.element.children(".frame");
            o.each(e, function () {
                o(this).children(".content").hide()
            })
        }, _openAll: function () {
            var e = this, t = this.element.children(".frame");
            o.each(t, function () {
                e._openFrame(this)
            })
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element;
            return e.off(t.events.click, ".heading"), e
        }
    })
}(Metro, m4q), function (i, s) {
    "use strict";
    var n = {activityDeferred: 0, type: "ring", style: "light", size: 64, radius: 20, onActivityCreate: i.noop};
    i.activitySetup = function (e) {
        n = s.extend({}, n, e)
    }, window.metroActivitySetup, i.activitySetup(window.metroActivitySetup), i.Component("activity", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e, t, n = this.element, i = this.options;
            switch (n.html("").addClass(i.style + "-style").addClass("activity-" + i.type), i.type) {
                case"metro":
                    !function () {
                        for (e = 0; e < 5; e++) s("<div/>").addClass("circle").appendTo(n)
                    }();
                    break;
                case"square":
                    !function () {
                        for (e = 0; e < 4; e++) s("<div/>").addClass("square").appendTo(n)
                    }();
                    break;
                case"cycle":
                    s("<div/>").addClass("cycle").appendTo(n);
                    break;
                case"simple":
                    s('<svg class="circular"><circle class="path" cx="' + i.size / 2 + '" cy="' + i.size / 2 + '" r="' + i.radius + '" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>').appendTo(n);
                    break;
                case"atom":
                    !function () {
                        for (e = 0; e < 3; e++) s("<span/>").addClass("electron").appendTo(n)
                    }();
                    break;
                case"bars":
                    !function () {
                        for (e = 0; e < 6; e++) s("<span/>").addClass("bar").appendTo(n)
                    }();
                    break;
                default:
                    !function () {
                        for (e = 0; e < 5; e++) t = s("<div/>").addClass("wrap").appendTo(n), s("<div/>").addClass("circle").appendTo(t)
                    }()
            }
            this._fireEvent("activity-create", {element: n})
        }, changeAttribute: function (e) {
        }, destroy: function () {
            return this.element
        }
    }), i.activity = {
        open: function (e) {
            var t = e || {},
                n = '<div data-role="activity" data-type="' + (t.type || "cycle") + '" data-style="' + (t.style || "color") + '"></div>',
                e = t.text ? '<div class="text-center">' + t.text + "</div>" : "";
            return i.dialog.create({
                content: n + e,
                defaultAction: !1,
                clsContent: "d-flex flex-column flex-justify-center flex-align-center bg-transparent no-shadow w-auto",
                clsDialog: "no-border no-shadow bg-transparent global-dialog",
                autoHide: t.autoHide || 0,
                overlayClickClose: !0 === t.overlayClickClose,
                overlayColor: t.overlayColor || "#000000",
                overlayAlpha: t.overlayAlpha || .5,
                clsOverlay: "global-overlay"
            })
        }, close: function (e) {
            i.dialog.close(e)
        }
    }
}(Metro, m4q), function (e, r) {
    "use strict";
    var l = e.utils, t = {
        adblockDeferred: 0,
        checkInterval: 1e3,
        fireOnce: !0,
        checkStop: 10,
        localhost: !1,
        onAlert: e.noop,
        onFishingStart: e.noop,
        onFishingDone: e.noop
    };
    e.adblockSetup = function (e) {
        t = r.extend({}, t, e)
    }, window.metroAdblockSetup, e.adblockSetup(window.metroAdblockSetup);
    var c = {
        bite: function () {
            r("<div>").addClass("adblock-bite adsense google-adsense dblclick advert topad top_ads topAds textads sponsoredtextlink_container show_ads right-banner rekl mpu module-ad mid_ad mediaget horizontal_ad headerAd contentAd brand-link bottombanner bottom_ad_block block_ad bannertop banner-right banner-body b-banner b-article-aside__banner b-advert adwrapper adverts advertisment advertisement:not(body) advertise advert_list adtable adsense adpic adlist adleft adinfo adi adholder adframe addiv ad_text ad_space ad_right ad_links ad_body ad_block ad_Right adTitle adText".split(" ").shuffle().join(" ")).css({
                position: "fixed",
                height: 1,
                width: 1,
                overflow: "hidden",
                visibility: "visible",
                top: 0,
                left: 0
            }).append(r("<a href='https://dblclick.net'>").html("dblclick.net")).appendTo("body"), c.options.adblockDeferred ? setTimeout(function () {
                c.fishing()
            }, c.options.adblockDeferred) : this.fishing()
        }, fishing: function () {
            function e() {
                function e() {
                    clearInterval(o), l.exec(i.onFishingDone), r(window).fire("fishing-done"), t.remove()
                }

                var t = r(".adsense.google-adsense.dblclick.advert.adblock-bite"), n = t.find("a");
                i.localhost || !r.localhost ? !t.length || !n.length || -1 < t.css("display").indexOf("none") || -1 < n.css("display").indexOf("none") ? (l.exec(c.options.onAlert), r(window).fire("adblock-alert"), !0 !== c.options.fireOnce && 0 != --s || e()) : !1 !== a && 0 === --a && e() : e()
            }

            var i = c.options, s = "number" == typeof i.fireOnce ? i.fireOnce : 0, a = i.checkStop, o = !1;
            l.exec(i.onFishingStart), r(window).fire("fishing-start"), o = setInterval(function () {
                e()
            }, c.options.checkInterval), e()
        }
    };
    e.Adblock = c, r(function () {
        c.options = r.extend({}, t), r(window).on("metro-initiated", function () {
            c.bite()
        })
    })
}(Metro, m4q), function (e, i) {
    "use strict";
    var s = {duration: METRO_ANIMATION_DURATION, ease: "linear"};
    e.animations = {
        switchIn: function (e) {
            i(e).hide().css({left: 0, top: 0}).show()
        }, switchOut: function (e) {
            i(e).hide()
        }, switch: function (e, t) {
            this.switchOut(e), this.switchIn(t)
        }, slideUpIn: function (e, t) {
            var n = i(e), e = n.parent().outerHeight(!0), t = i.extend({}, s, t);
            n.css({top: e, left: 0, zIndex: 2}).animate({draw: {top: 0, opacity: 1}, dur: t.duration, ease: t.ease})
        }, slideUpOut: function (e, t) {
            var n = i(e), e = n.parent().outerHeight(!0), t = i.extend({}, s, t);
            n.css({zIndex: 1}).animate({draw: {top: -e, opacity: 0}, dur: t.duration, ease: t.ease})
        }, slideUp: function (e, t, n) {
            this.slideUpOut(e, n), this.slideUpIn(t, n)
        }, slideDownIn: function (e, t) {
            var n = i(e), e = n.parent().outerHeight(!0), t = i.extend({}, s, t);
            n.css({left: 0, top: -e, zIndex: 2}).animate({draw: {top: 0, opacity: 1}, dur: t.duration, ease: t.ease})
        }, slideDownOut: function (e, t) {
            var n = i(e), e = n.parent().outerHeight(!0), t = i.extend({}, s, t);
            n.css({zIndex: 1}).animate({draw: {top: e, opacity: 0}, dur: t.duration, ease: t.ease})
        }, slideDown: function (e, t, n) {
            this.slideDownOut(e, n), this.slideDownIn(t, n)
        }, slideLeftIn: function (e, t) {
            var n = i(e), e = n.parent().outerWidth(!0), t = i.extend({}, s, t);
            n.css({left: e, zIndex: 2}).animate({draw: {left: 0, opacity: 1}, dur: t.duration, ease: t.ease})
        }, slideLeftOut: function (e, t) {
            var n = i(e), e = n.parent().outerWidth(!0), t = i.extend({}, s, t);
            n.css({zIndex: 1}).animate({draw: {left: -e, opacity: 0}, dur: t.duration, ease: t.ease})
        }, slideLeft: function (e, t, n) {
            this.slideLeftOut(e, n), this.slideLeftIn(t, n)
        }, slideRightIn: function (e, t) {
            var n = i(e), e = n.parent().outerWidth(!0), t = i.extend({}, s, t);
            n.css({left: -e, zIndex: 2}).animate({draw: {left: 0, opacity: 1}, dur: t.duration, ease: t.ease})
        }, slideRightOut: function (e, t) {
            var n = i(e), e = n.parent().outerWidth(!0), t = i.extend({}, s, t);
            n.css({zIndex: 1}).animate({draw: {left: e, opacity: 0}, dur: t.duration, ease: t.ease})
        }, slideRight: function (e, t, n) {
            this.slideRightOut(e, n), this.slideRightIn(t, n)
        }, fadeIn: function (e, t) {
            t = i.extend({}, s, t);
            i(e).css({top: 0, left: 0, opacity: 0}).animate({draw: {opacity: 1}, dur: t.duration, ease: t.ease})
        }, fadeOut: function (e, t) {
            t = i.extend({}, s, t);
            i(e).animate({draw: {opacity: 0}, dur: t.duration, ease: t.ease})
        }, fade: function (e, t, n) {
            this.fadeOut(e, n), this.fadeIn(t, n)
        }, zoomIn: function (e, t) {
            t = i.extend({}, s, t);
            i(e).css({top: 0, left: 0, opacity: 0, transform: "scale(3)", zIndex: 2}).animate({
                draw: {
                    scale: 1,
                    opacity: 1
                }, dur: t.duration, ease: t.ease
            })
        }, zoomOut: function (e, t) {
            t = i.extend({}, s, t);
            i(e).css({zIndex: 1}).animate({draw: {scale: 3, opacity: 0}, dur: t.duration, ease: t.ease})
        }, zoom: function (e, t, n) {
            this.zoomOut(e, n), this.zoomIn(t, n)
        }, swirlIn: function (e, t) {
            t = i.extend({}, s, t);
            i(e).css({
                top: 0,
                left: 0,
                opacity: 0,
                transform: "scale(3) rotate(180deg)",
                zIndex: 2
            }).animate({draw: {scale: 1, rotate: 0, opacity: 1}, dur: t.duration, ease: t.ease})
        }, swirlOut: function (e, t) {
            t = i.extend({}, s, t);
            i(e).css({zIndex: 1}).animate({
                draw: {scale: 3, rotate: "180deg", opacity: 0},
                dur: t.duration,
                ease: t.ease
            })
        }, swirl: function (e, t, n) {
            this.swirlOut(e, n), this.swirlIn(t, n)
        }
    }, !0 === window.METRO_GLOBAL_COMMON && (window.Animations = e.animations)
}(Metro, m4q), function (a, o) {
    "use strict";
    var r = a.utils, n = {
        appbarDeferred: 0,
        expand: !1,
        expandPoint: null,
        duration: 100,
        onMenuOpen: a.noop,
        onMenuClose: a.noop,
        onBeforeMenuOpen: a.noop,
        onBeforeMenuClose: a.noop,
        onMenuCollapse: a.noop,
        onMenuExpand: a.noop,
        onAppBarCreate: a.noop
    };
    a.appBarSetup = function (e) {
        n = o.extend({}, n, e)
    }, window.metroAppBarSetup, a.appBarSetup(window.metroAppBarSetup), a.Component("app-bar", {
        init: function (e, t) {
            return this._super(t, e, n, {id: r.elementId("app-bar")}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("app-bar-create", {element: e})
        }, _createStructure: function () {
            var e, t = this.element, n = this.options, i = r.getStyleOne(t, "background-color");
            if (t.addClass("app-bar"), 0 === (e = t.find(".hamburger")).length) {
                e = o("<button>").attr("type", "button").addClass("hamburger menu-down");
                for (var s = 0; s < 3; s++) o("<span>").addClass("line").appendTo(e);
                "rgba(0, 0, 0, 0)" !== i && !0 !== a.colors.isLight(i) || e.addClass("dark")
            }
            t.prepend(e), 0 === (i = t.find(".app-bar-menu")).length ? e.css("display", "none") : r.addCssRule(a.sheet, ".app-bar-menu li", "list-style: none!important;"), "block" === e.css("display") ? (i.hide().addClass("collapsed"), e.removeClass("hidden")) : e.addClass("hidden"), (!0 === n.expand || r.isValue(n.expandPoint) && r.mediaExist(n.expandPoint)) && (t.addClass("app-bar-expand"), e.addClass("hidden"))
        }, _createEvents: function () {
            var e = this, t = this.element, n = this.options, i = t.find(".app-bar-menu"), s = t.find(".hamburger");
            t.on(a.events.click, ".hamburger", function () {
                0 !== i.length && (i.hasClass("collapsed") ? e.open() : e.close())
            }), o(window).on(a.events.resize, function () {
                !0 !== n.expand && (r.isValue(n.expandPoint) && r.mediaExist(n.expandPoint) ? (t.addClass("app-bar-expand"), e._fireEvent("menu-expand")) : (t.removeClass("app-bar-expand"), e._fireEvent("menu-collapse"))), 0 !== i.length && ("block" !== s.css("display") ? (i.show(function () {
                    o(this).removeStyleProperty("display")
                }), s.addClass("hidden")) : (s.removeClass("hidden"), s.hasClass("active") ? i.show().removeClass("collapsed") : i.hide().addClass("collapsed")))
            }, {ns: this.id})
        }, close: function () {
            var e = this, t = this.element, n = this.options, i = t.find(".app-bar-menu"), s = t.find(".hamburger");
            e._fireEvent("before-menu-close", {menu: i[0]}), i.slideUp(n.duration, function () {
                i.addClass("collapsed").removeClass("opened"), s.removeClass("active"), e._fireEvent("menu-close", {menu: i[0]})
            })
        }, open: function () {
            var e = this, t = this.element, n = this.options, i = t.find(".app-bar-menu"), s = t.find(".hamburger");
            e._fireEvent("before-menu-open", {menu: i[0]}), i.slideDown(n.duration, function () {
                i.removeClass("collapsed").addClass("opened"), s.addClass("active"), e._fireEvent("menu-open", {menu: i[0]})
            })
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element;
            return e.off(a.events.click, ".hamburger"), o(window).off(a.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q), function (s, t) {
    "use strict";
    var a = s.utils,
        n = {audioVolume: .5, audioSrc: "", onAudioStart: s.noop, onAudioEnd: s.noop, onAudioButtonCreate: s.noop};
    s.audioButtonSetup = function (e) {
        n = t.extend({}, n, e)
    }, window.metroAudioButtonSetup, s.audioButtonSetup(window.metroAudioButtonSetup), s.Component("audio-button", {
        init: function (e, t) {
            return this._super(t, e, n, {audio: null, canPlay: null, id: a.elementId("audioButton")}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("audioButtonCreate", {element: e})
        }, _createStructure: function () {
            var e = this.options;
            this.audio = new Audio(e.audioSrc), this.audio.volume = e.audioVolume
        }, _createEvents: function () {
            var e = this, t = this.element, n = this.options, i = this.audio;
            i.addEventListener("loadeddata", function () {
                e.canPlay = !0
            }), i.addEventListener("ended", function () {
                e._fireEvent("audioEnd", {src: n.audioSrc, audio: i})
            }), t.on(s.events.click, function () {
                e.play()
            }, {ns: this.id})
        }, play: function (e) {
            var t = this.element, n = this.options, i = this.audio;
            "" !== n.audioSrc && this.audio.duration && this.canPlay && (this._fireEvent("audioStart", {
                src: n.audioSrc,
                audio: i
            }), i.pause(), i.currentTime = 0, i.play(), a.exec(e, [i], t[0]))
        }, stop: function (e) {
            var t = this.element, n = this.options, i = this.audio;
            i.pause(), i.currentTime = 0, this._fireEvent("audioEnd", {src: n.audioSrc, audio: i}), a.exec(e, [i], t[0])
        }, changeAttribute: function (e) {
            var t, n, i = this.element, s = this.options, a = this.audio;
            "data-audio-src" === e && (t = i.attr("data-audio-src")) && "" !== t.trim() && (s.audioSrc = t, a.src = t), "data-audio-volume" === e && (n = parseFloat(i.attr("data-audio-volume")), isNaN(n) || (s.audioVolume = n, a.volume = n))
        }, destroy: function () {
            this.element.off(s.events.click, {ns: this.id})
        }
    }), s.playSound = function (e) {
        var t, n = "string" == typeof e ? e : e.audioSrc, i = e && e.audioVolume ? e.audioVolume : .5;
        n && ((t = new Audio(n)).volume = parseFloat(i), t.addEventListener("loadeddata", function () {
            e && e.onAudioStart && a.exec(e.onAudioStart, [n], this), this.play()
        }), t.addEventListener("ended", function () {
            e && e.onAudioEnd && a.exec(e.onAudioEnd, [null], this)
        }))
    }
}(Metro, m4q), function (h, p) {
    "use strict";
    var o = h.utils, n = {
        audioDeferred: 0,
        playlist: null,
        src: null,
        volume: .5,
        loop: !1,
        autoplay: !1,
        showLoop: !0,
        showPlay: !0,
        showStop: !0,
        showMute: !0,
        showFull: !0,
        showStream: !0,
        showVolume: !0,
        showInfo: !0,
        showPlaylist: !0,
        showNext: !0,
        showPrev: !0,
        showFirst: !0,
        showLast: !0,
        showForward: !0,
        showBackward: !0,
        showShuffle: !0,
        showRandom: !0,
        loopIcon: "<span class='default-icon-loop'></span>",
        stopIcon: "<span class='default-icon-stop'></span>",
        playIcon: "<span class='default-icon-play'></span>",
        pauseIcon: "<span class='default-icon-pause'></span>",
        muteIcon: "<span class='default-icon-mute'></span>",
        volumeLowIcon: "<span class='default-icon-low-volume'></span>",
        volumeMediumIcon: "<span class='default-icon-medium-volume'></span>",
        volumeHighIcon: "<span class='default-icon-high-volume'></span>",
        playlistIcon: "<span class='default-icon-playlist'></span>",
        nextIcon: "<span class='default-icon-next'></span>",
        prevIcon: "<span class='default-icon-prev'></span>",
        firstIcon: "<span class='default-icon-first'></span>",
        lastIcon: "<span class='default-icon-last'></span>",
        forwardIcon: "<span class='default-icon-forward'></span>",
        backwardIcon: "<span class='default-icon-backward'></span>",
        shuffleIcon: "<span class='default-icon-shuffle'></span>",
        randomIcon: "<span class='default-icon-random'></span>",
        onPlay: h.noop,
        onPause: h.noop,
        onStop: h.noop,
        onEnd: h.noop,
        onMetadata: h.noop,
        onTime: h.noop,
        onAudioPlayerCreate: h.noop
    };
    h.audioPlayerSetup = function (e) {
        n = p.extend({}, n, e)
    }, window.metroAudioPlayerSetup, h.audioPlayerSetup(window.metroAudioPlayerSetup), h.Component("audio-player", {
        init: function (e, t) {
            return this._super(t, e, n, {
                preloader: null,
                player: null,
                audio: t,
                stream: null,
                volume: null,
                volumeBackup: 0,
                muted: !1
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            this._createPlayer(), this._createControls(), this._createEvents(), !0 === t.autoplay && this.play(), this._fireEvent("audio-player-create", {
                element: e,
                player: this.player
            })
        }, _createPlayer: function () {
            var e = this.element, t = this.options, n = this.audio, i = e.prev(), s = e.parent(),
                a = p("<div>").addClass("media-player audio-player " + e[0].className);
            0 === i.length ? s.prepend(a) : a.insertAfter(i), e.appendTo(a), p.each(["muted", "autoplay", "controls", "height", "width", "loop", "poster", "preload"], function () {
                e.removeAttr(this)
            }), e.attr("preload", "auto"), n.volume = t.volume, null !== t.src && this._setSource(t.src), e[0].className = "", this.player = a
        }, _setSource: function (e) {
            var t = this.element;
            t.find("source").remove(), t.removeAttr("src"), Array.isArray(e) ? p.each(e, function () {
                void 0 !== this.src && p("<source>").attr("src", this.src).attr("type", void 0 !== this.type ? this.type : "").appendTo(t)
            }) : t.attr("src", e)
        }, _createControls: function () {
            var e, t = this, n = this.element, i = this.options, s = this.elem,
                a = p("<div>").addClass("controls").addClass(i.clsControls).insertAfter(n),
                o = p("<div>").addClass("stream").appendTo(a),
                r = p("<input>").addClass("stream-slider ultra-thin cycle-marker").appendTo(o),
                l = p("<div>").addClass("load-audio").appendTo(o), c = p("<div>").addClass("volume").appendTo(a),
                d = p("<input>").addClass("volume-slider ultra-thin cycle-marker").appendTo(c),
                u = p("<div>").addClass("info-box").appendTo(a);
            !0 !== i.showInfo && u.hide(), l.activity({
                type: "metro",
                style: "color"
            }), l.hide(0), this.preloader = l, h.makePlugin(r, "slider", {
                clsMarker: "bg-red",
                clsHint: "bg-cyan fg-white",
                clsComplete: "bg-cyan",
                hint: !0,
                onStart: function () {
                    s.paused || s.pause()
                },
                onStop: function (e) {
                    0 < s.seekable.length && (s.currentTime = (t.duration * e / 100).toFixed(0)), s.paused && 0 < s.currentTime && s.play()
                }
            }), this.stream = r, !0 !== i.showStream && o.hide(), h.makePlugin(d, "slider", {
                clsMarker: "bg-red",
                clsHint: "bg-cyan fg-white",
                hint: !0,
                value: 100 * i.volume,
                onChangeValue: function (e) {
                    s.volume = e / 100
                }
            }), this.volume = d, !0 !== i.showVolume && c.hide(), !0 === i.showLoop && (e = p("<button>").attr("type", "button").addClass("button square loop").html(i.loopIcon).appendTo(a)), !0 === i.showPlay && p("<button>").attr("type", "button").addClass("button square play").html(i.playIcon).appendTo(a), !0 === i.showStop && p("<button>").attr("type", "button").addClass("button square stop").html(i.stopIcon).appendTo(a), !0 === i.showMute && p("<button>").attr("type", "button").addClass("button square mute").html(i.muteIcon).appendTo(a), !0 === i.loop && (e.addClass("active"), n.attr("loop", "loop")), this._setVolume(), i.muted && (t.volumeBackup = s.volume, h.getPlugin(t.volume, "slider").val(0), s.volume = 0), u.html("00:00 / 00:00")
        }, _createEvents: function () {
            var t = this, n = this.element, i = this.options, s = this.elem, a = this.player;
            n.on("loadstart", function () {
                t.preloader.fadeIn()
            }), n.on("loadedmetadata", function () {
                t.duration = s.duration.toFixed(0), t._setInfo(0, t.duration), o.exec(i.onMetadata, [s, a], n[0])
            }), n.on("canplay", function () {
                t._setBuffer(), t.preloader.fadeOut()
            }), n.on("progress", function () {
                t._setBuffer()
            }), n.on("timeupdate", function () {
                var e = Math.round(100 * s.currentTime / t.duration);
                t._setInfo(s.currentTime, t.duration), h.getPlugin(t.stream, "slider").val(e), o.exec(i.onTime, [s.currentTime, t.duration, s, a], n[0])
            }), n.on("waiting", function () {
                t.preloader.fadeIn()
            }), n.on("loadeddata", function () {
            }), n.on("play", function () {
                a.find(".play").html(i.pauseIcon), o.exec(i.onPlay, [s, a], n[0])
            }), n.on("pause", function () {
                a.find(".play").html(i.playIcon), o.exec(i.onPause, [s, a], n[0])
            }), n.on("stop", function () {
                h.getPlugin(t.stream, "slider").val(0), o.exec(i.onStop, [s, a], n[0])
            }), n.on("ended", function () {
                h.getPlugin(t.stream, "slider").val(0), o.exec(i.onEnd, [s, a], n[0])
            }), n.on("volumechange", function () {
                t._setVolume()
            }), a.on(h.events.click, ".play", function () {
                s.paused ? t.play() : t.pause()
            }), a.on(h.events.click, ".stop", function () {
                t.stop()
            }), a.on(h.events.click, ".mute", function () {
                t._toggleMute()
            }), a.on(h.events.click, ".loop", function () {
                t._toggleLoop()
            })
        }, _toggleLoop: function () {
            var e = this.player.find(".loop");
            0 !== e.length && (e.toggleClass("active"), e.hasClass("active") ? this.element.attr("loop", "loop") : this.element.removeAttr("loop"))
        }, _toggleMute: function () {
            this.muted = !this.muted, !1 === this.muted ? this.audio.volume = this.volumeBackup : (this.volumeBackup = this.audio.volume, this.audio.volume = 0), h.getPlugin(this.volume, "slider").val(!1 === this.muted ? 100 * this.volumeBackup : 0)
        }, _setInfo: function (e, t) {
            this.player.find(".info-box").html(o.secondsToFormattedString(Math.round(e)) + " / " + o.secondsToFormattedString(Math.round(t)))
        }, _setBuffer: function () {
            var e = this.audio.buffered.length ? Math.round(Math.floor(this.audio.buffered.end(0)) / Math.floor(this.audio.duration) * 100) : 0;
            h.getPlugin(this.stream, "slider").buff(e)
        }, _setVolume: function () {
            var e = this.audio, t = this.player, n = this.options, t = t.find(".mute"), e = 100 * e.volume;
            1 < e && e < 30 ? t.html(n.volumeLowIcon) : 30 <= e && e < 60 ? t.html(n.volumeMediumIcon) : 60 <= e && e <= 100 ? t.html(n.volumeHighIcon) : t.html(n.muteIcon)
        }, play: function (e) {
            void 0 !== e && this._setSource(e), void 0 === this.element.attr("src") && 0 === this.element.find("source").length || this.audio.play()
        }, pause: function () {
            this.audio.pause()
        }, resume: function () {
            this.audio.paused && this.play()
        }, stop: function () {
            this.audio.pause(), this.audio.currentTime = 0, h.getPlugin(this.stream, "slider").val(0)
        }, setVolume: function (e) {
            if (void 0 === e) return this.audio.volume;
            1 < e && (e /= 100), this.audio.volume = e, h.getPlugin(this.volume, "slider").val(100 * e)
        }, loop: function () {
            this._toggleLoop()
        }, mute: function () {
            this._toggleMute()
        }, changeSource: function () {
            var e = JSON.parse(this.element.attr("data-src"));
            this.play(e)
        }, changeVolume: function () {
            var e = this.element.attr("data-volume");
            this.setVolume(e)
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-src":
                    this.changeSource();
                    break;
                case"data-volume":
                    this.changeVolume()
            }
        }, destroy: function () {
            var e = this.element, t = this.player;
            return e.off("all"), t.off("all"), h.getPlugin(this.stream, "slider").destroy(), h.getPlugin(this.volume, "slider").destroy(), e
        }
    })
}(Metro, m4q), function (n, i) {
    "use strict";
    var s = n.utils, a = {
        bottomsheetDeferred: 0,
        mode: "list",
        toggle: null,
        onOpen: n.noop,
        onClose: n.noop,
        onBottomSheetCreate: n.noop
    };
    n.bottomSheetSetup = function (e) {
        a = i.extend({}, a, e)
    }, window.metroBottomSheetSetup, n.bottomSheetSetup(window.metroBottomSheetSetup), n.Component("bottom-sheet", {
        init: function (e, t) {
            return this._super(t, e, a, {toggle: null}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("bottom-sheet-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options;
            e.addClass("bottom-sheet").addClass(t.mode + "-list"), s.isValue(t.toggle) && 0 < i(t.toggle).length && (this.toggle = i(t.toggle))
        }, _createEvents: function () {
            var e = this, t = this.element;
            s.isValue(this.toggle) && this.toggle.on(n.events.click, function () {
                e.toggle()
            }), t.on(n.events.click, "li", function () {
                e.close()
            })
        }, isOpen: function () {
            return this.element.hasClass("opened")
        }, open: function (e) {
            var t = this.element;
            s.isValue(e) && t.removeClass("list-style grid-style").addClass(e + "-style"), this.element.addClass("opened"), this._fireEvent("open", {element: t})
        }, close: function () {
            var e = this.element;
            e.removeClass("opened"), this._fireEvent("close", {element: e})
        }, toggle: function (e) {
            this.isOpen() ? this.close() : this.open(e)
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element;
            return s.isValue(this.toggle) && this.toggle.off(n.events.click), e.off(n.events.click, "li"), e
        }
    }), n.bottomsheet = {
        isBottomSheet: function (e) {
            return s.isMetroObject(e, "bottom-sheet")
        }, open: function (e, t) {
            if (!this.isBottomSheet(e)) return !1;
            n.getPlugin(e, "bottom-sheet").open(t)
        }, close: function (e) {
            if (!this.isBottomSheet(e)) return !1;
            n.getPlugin(e, "bottom-sheet").close()
        }, toggle: function (e, t) {
            if (!this.isBottomSheet(e)) return !1;
            this.isOpen(e) ? this.close(e) : this.open(e, t)
        }, isOpen: function (e) {
            return !!this.isBottomSheet(e) && n.getPlugin(e, "bottom-sheet").isOpen()
        }
    }
}(Metro, m4q), function (s, a) {
    "use strict";
    var n = s.utils, i = {
        buttongroupDeferred: 0,
        targets: "button",
        clsActive: "",
        requiredButton: !1,
        mode: s.groupMode.ONE,
        onButtonClick: s.noop,
        onButtonGroupCreate: s.noop
    };
    s.buttonGroupSetup = function (e) {
        i = a.extend({}, i, e)
    }, window.metroButtonGroupSetup, s.buttonGroupSetup(window.metroButtonGroupSetup), s.Component("button-group", {
        init: function (e, t) {
            return this._super(t, e, i, {active: null, id: n.elementId("button-group")}), this
        }, _create: function () {
            var e = this.element;
            this._createGroup(), this._createEvents(), this._fireEvent("button-group-create", {element: e})
        }, _createGroup: function () {
            var e, t, n = this.element, i = this.options;
            n.addClass("button-group"), e = n.find(i.targets), t = n.find(".active"), i.mode === s.groupMode.ONE && 0 === t.length && !0 === i.requiredButton && a(e[0]).addClass("active"), i.mode === s.groupMode.ONE && 1 < t.length && (e.removeClass("active").removeClass(i.clsActive), a(e[0]).addClass("active")), n.find(".active").addClass("js-active").addClass(i.clsActive)
        }, _createEvents: function () {
            var t = this, n = this.element, i = this.options;
            n.on(s.events.click, i.targets, function () {
                var e = a(this);
                t._fireEvent("button-click", {button: this}), i.mode === s.groupMode.ONE && e.hasClass("active") || (i.mode === s.groupMode.ONE ? (n.find(i.targets).removeClass(i.clsActive).removeClass("active js-active"), e.addClass("active").addClass(i.clsActive).addClass("js-active")) : e.toggleClass("active").toggleClass(i.clsActive).toggleClass("js-active"))
            })
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element, t = this.options;
            return e.off(s.events.click, t.targets), e
        }
    })
}(Metro, m4q), function (n, b) {
    "use strict";
    var r = n.utils, i = {
        calendarDeferred: 0,
        dayBorder: !1,
        excludeDay: null,
        prevMonthIcon: "<span class='default-icon-chevron-left'></span>",
        nextMonthIcon: "<span class='default-icon-chevron-right'></span>",
        prevYearIcon: "<span class='default-icon-chevron-left'></span>",
        nextYearIcon: "<span class='default-icon-chevron-right'></span>",
        compact: !1,
        wide: !1,
        widePoint: null,
        pickerMode: !1,
        show: null,
        locale: METRO_LOCALE,
        weekStart: METRO_WEEK_START,
        outside: !0,
        buttons: "cancel, today, clear, done",
        yearsBefore: 100,
        yearsAfter: 100,
        headerFormat: "%A, %b %e",
        showHeader: !0,
        showFooter: !0,
        showTimeField: !0,
        showWeekNumber: !1,
        clsCalendar: "",
        clsCalendarHeader: "",
        clsCalendarContent: "",
        clsCalendarFooter: "",
        clsCalendarMonths: "",
        clsCalendarYears: "",
        clsToday: "",
        clsSelected: "",
        clsExcluded: "",
        clsCancelButton: "",
        clsTodayButton: "",
        clsClearButton: "",
        clsDoneButton: "",
        isDialog: !1,
        ripple: !1,
        rippleColor: "#cccccc",
        exclude: null,
        preset: null,
        minDate: null,
        maxDate: null,
        weekDayClick: !1,
        weekNumberClick: !1,
        multiSelect: !1,
        special: null,
        format: METRO_DATE_FORMAT,
        inputFormat: null,
        onCancel: n.noop,
        onToday: n.noop,
        onClear: n.noop,
        onDone: n.noop,
        onDayClick: n.noop,
        onDayDraw: n.noop,
        onWeekDayClick: n.noop,
        onWeekNumberClick: n.noop,
        onMonthChange: n.noop,
        onYearChange: n.noop,
        onCalendarCreate: n.noop
    };
    n.calendarSetup = function (e) {
        i = b.extend({}, i, e)
    }, window.metroCalendarSetup, n.calendarSetup(window.metroCalendarSetup), n.Component("calendar", {
        init: function (e, t) {
            var n = new Date;
            return n.setHours(0, 0, 0, 0), this._super(t, e, i, {
                today: n,
                show: n,
                current: {year: n.getFullYear(), month: n.getMonth(), day: n.getDate()},
                preset: [],
                selected: [],
                exclude: [],
                special: [],
                excludeDay: [],
                min: null,
                max: null,
                locale: null,
                minYear: null,
                maxYear: null,
                offset: null,
                id: r.elementId("calendar")
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            this.minYear = this.current.year - this.options.yearsBefore, this.maxYear = this.current.year + this.options.yearsAfter, this.offset = (new Date).getTimezoneOffset() / 60 + 1, e.html("").addClass("calendar " + (!0 === t.compact ? "compact" : "")).addClass(t.clsCalendar), !0 === t.dayBorder && e.addClass("day-border"), r.isValue(t.excludeDay) && (this.excludeDay = ("" + t.excludeDay).toArray(",", "int")), r.isValue(t.preset) && this._dates2array(t.preset, "selected"), r.isValue(t.exclude) && this._dates2array(t.exclude, "exclude"), r.isValue(t.special) && this._dates2array(t.special, "special"), !1 !== t.buttons && !1 === Array.isArray(t.buttons) && (t.buttons = t.buttons.split(",").map(function (e) {
                return e.trim()
            })), null !== t.minDate && r.isDate(t.minDate, t.inputFormat) && (this.min = r.isValue(t.inputFormat) ? t.minDate.toDate(t.inputFormat) : new Date(t.minDate)), null !== t.maxDate && r.isDate(t.maxDate, t.inputFormat) && (this.max = r.isValue(t.inputFormat) ? t.maxDate.toDate(t.inputFormat) : new Date(t.maxDate)), null !== t.show && r.isDate(t.show, t.inputFormat) && (this.show = r.isValue(t.inputFormat) ? t.show.toDate(t.inputFormat) : new Date(t.show), this.show.setHours(0, 0, 0, 0), this.current = {
                year: this.show.getFullYear(),
                month: this.show.getMonth(),
                day: this.show.getDate()
            }), this.locale = void 0 !== n.locales[t.locale] ? n.locales[t.locale] : n.locales["en-US"], this._drawCalendar(), this._createEvents(), (!0 === t.wide || !r.isNull(t.widePoint) && r.mediaExist(t.widePoint)) && e.addClass("calendar-wide"), !0 === t.ripple && !1 !== r.isFunc(e.ripple) && e.ripple({
                rippleTarget: ".button, .prev-month, .next-month, .prev-year, .next-year, .day",
                rippleColor: this.options.rippleColor
            }), this._fireEvent("calendar-create")
        }, _dates2array: function (e, t) {
            var n = this, i = this.options;
            r.isNull(e) || (e = "string" == typeof e ? e.toArray() : e, b.each(e, function () {
                var e;
                if (r.isDateObject(this)) e = this; else {
                    if (e = r.isValue(i.inputFormat) ? this.toDate(i.inputFormat) : new Date(this), !1 === r.isDate(e)) return;
                    e.setHours(0, 0, 0, 0)
                }
                n[t].push(e.getTime())
            }))
        }, _createEvents: function () {
            var s = this, a = this.element, o = this.options;
            b(window).on(n.events.resize, function () {
                !0 !== o.wide && (!r.isNull(o.widePoint) && r.mediaExist(o.widePoint) ? a.addClass("calendar-wide") : a.removeClass("calendar-wide"))
            }, {ns: this.id}), a.on(n.events.click, function () {
                var e = a.find(".calendar-months"), t = a.find(".calendar-years");
                e.hasClass("open") && e.removeClass("open"), t.hasClass("open") && t.removeClass("open")
            }), a.on(n.events.click, ".prev-month, .next-month, .prev-year, .next-year", function () {
                var e, t = b(this);
                t.hasClass("prev-month") && (e = new Date(s.current.year, s.current.month - 1, 1)).getFullYear() < s.minYear || t.hasClass("next-month") && (e = new Date(s.current.year, s.current.month + 1, 1)).getFullYear() > s.maxYear || t.hasClass("prev-year") && (e = new Date(s.current.year - 1, s.current.month, 1)).getFullYear() < s.minYear || t.hasClass("next-year") && (e = new Date(s.current.year + 1, s.current.month, 1)).getFullYear() > s.maxYear || (s.current = {
                    year: e.getFullYear(),
                    month: e.getMonth(),
                    day: e.getDate()
                }, setTimeout(function () {
                    s._drawContent(), (t.hasClass("prev-month") || t.hasClass("next-month")) && s._fireEvent("month-change", {current: s.current}), (t.hasClass("prev-year") || t.hasClass("next-year")) && s._fireEvent("year-change", {current: s.current})
                }, o.ripple ? 300 : 1))
            }), a.on(n.events.click, ".button.today", function () {
                s.toDay(), s._fireEvent("today", {today: s.today})
            }), a.on(n.events.click, ".button.clear", function () {
                s.selected = [], s._drawContent(), s._fireEvent("clear")
            }), a.on(n.events.click, ".button.cancel", function () {
                s._drawContent(), s._fireEvent("cancel")
            }), a.on(n.events.click, ".button.done", function () {
                s._drawContent(), s._fireEvent("done")
            }), !0 === o.weekDayClick && a.on(n.events.click, ".week-days .day", function (e) {
                var t = b(this), n = t.index();
                !0 === o.multiSelect && (n = !0 === o.outside ? a.find(".days-row .day:nth-child(" + (n + 1) + ")") : a.find(".days-row .day:not(.outside):nth-child(" + (n + 1) + ")"), b.each(n, function () {
                    var e = b(this), t = e.data("day");
                    e.hasClass("disabled") || e.hasClass("excluded") || (s.selected.contains(t) || s.selected.push(t), e.addClass("selected").addClass(o.clsSelected))
                })), s._fireEvent("week-day-click", {
                    selected: s.selected,
                    day: t
                }), e.preventDefault(), e.stopPropagation()
            }), o.weekNumberClick && a.on(n.events.click, ".days-row .week-number", function (e) {
                var t, n = b(this), i = n.text();
                !0 === o.multiSelect && (t = b(this).siblings(".day"), b.each(t, function () {
                    var e = b(this), t = e.data("day");
                    e.hasClass("disabled") || e.hasClass("excluded") || (s.selected.contains(t) || s.selected.push(t), e.addClass("selected").addClass(o.clsSelected))
                })), s._fireEvent("week-number-click", {
                    selected: s.selected,
                    num: i,
                    numElement: n
                }), e.preventDefault(), e.stopPropagation()
            }), a.on(n.events.click, ".days-row .day", function (e) {
                var t = b(this), n = t.data("day"), i = s.selected.indexOf(n);
                if (t.hasClass("outside")) return n = new Date(n), s.current = {
                    year: n.getFullYear(),
                    month: n.getMonth(),
                    day: n.getDate()
                }, s._drawContent(), void s._fireEvent("month-change", {current: s.current});
                t.hasClass("disabled") || (!0 === o.pickerMode ? (s.selected = [n], s.today = new Date(n), s.current.year = s.today.getFullYear(), s.current.month = s.today.getMonth(), s.current.day = s.today.getDate(), s._drawHeader(), s._drawContent()) : -1 === i ? (!1 === o.multiSelect && (a.find(".days-row .day").removeClass("selected").removeClass(o.clsSelected), s.selected = []), s.selected.push(n), t.addClass("selected").addClass(o.clsSelected)) : (t.removeClass("selected").removeClass(o.clsSelected), r.arrayDelete(s.selected, n))), s._fireEvent("day-click", {
                    selected: s.selected,
                    day: t
                }), e.preventDefault(), e.stopPropagation()
            }), a.on(n.events.click, ".curr-month", function (e) {
                var t, n = a.find(".months-list");
                n.find(".active").removeClass("active"), n.scrollTop(0), a.find(".calendar-months").addClass("open"), t = n.find(".js-month-" + s.current.month).addClass("active"), setTimeout(function () {
                    n.animate({draw: {scrollTop: t.position().top - (n.height() - t.height()) / 2}, dur: 200})
                }, 300), e.preventDefault(), e.stopPropagation()
            }), a.on(n.events.click, ".calendar-months li", function (e) {
                s.current.month = b(this).index(), s._drawContent(), a.find(".calendar-months").removeClass("open"), s._fireEvent("month-change", {current: s.current}), e.preventDefault(), e.stopPropagation()
            }), a.on(n.events.click, ".curr-year", function (e) {
                var t, n = a.find(".years-list");
                n.find(".active").removeClass("active"), n.scrollTop(0), a.find(".calendar-years").addClass("open"), t = n.find(".js-year-" + s.current.year).addClass("active"), setTimeout(function () {
                    n.animate({draw: {scrollTop: t.position().top - (n.height() - t.height()) / 2}, dur: 200})
                }, 300), e.preventDefault(), e.stopPropagation()
            }), a.on(n.events.click, ".calendar-years li", function (e) {
                s.current.year = b(this).text(), s._drawContent(), a.find(".calendar-years").removeClass("open"), s._fireEvent("year-change", {current: s.current}), e.preventDefault(), e.stopPropagation()
            })
        }, _drawHeader: function () {
            var e = this.element, t = this.options, n = e.find(".calendar-header");
            0 === n.length && (n = b("<div>").addClass("calendar-header").addClass(t.clsCalendarHeader).appendTo(e)), n.html(""), b("<div>").addClass("header-year").html(this.today.getFullYear()).appendTo(n), b("<div>").addClass("header-day").html(this.today.format(t.headerFormat, t.locale)).appendTo(n), !1 === t.showHeader && n.hide()
        }, _drawFooter: function () {
            var e = this.element, t = this.options, n = this.locale.buttons, i = e.find(".calendar-footer");
            !1 !== t.buttons && (0 === i.length && (i = b("<div>").addClass("calendar-footer").addClass(t.clsCalendarFooter).appendTo(e)), i.html(""), b.each(t.buttons, function () {
                var e = b("<button>").attr("type", "button").addClass("button " + this + " " + t["cls" + this.capitalize() + "Button"]).html(n[this]).appendTo(i);
                "cancel" !== this && "done" !== this || e.addClass("js-dialog-close")
            }), !1 === t.showFooter && i.hide())
        }, _drawMonths: function () {
            for (var e = this.element, t = this.options, e = b("<div>").addClass("calendar-months").addClass(t.clsCalendarMonths).appendTo(e), n = b("<ul>").addClass("months-list").appendTo(e), i = this.locale.calendar, s = 0; s < 12; s++) b("<li>").addClass("js-month-" + s).html(i.months[s]).appendTo(n)
        }, _drawYears: function () {
            for (var e = this.element, t = this.options, e = b("<div>").addClass("calendar-years").addClass(t.clsCalendarYears).appendTo(e), n = b("<ul>").addClass("years-list").appendTo(e), i = this.minYear; i <= this.maxYear; i++) b("<li>").addClass("js-year-" + i).html(i).appendTo(n)
        }, _drawContent: function () {
            var e, t, n, i = this.element, s = this.options, a = i.find(".calendar-content"), o = this.locale.calendar,
                r = 0, l = new Date(this.current.year, this.current.month, 1),
                c = new Date(this.current.year, this.current.month, 0).getDate();
            0 === a.length && (a = b("<div>").addClass("calendar-content").addClass(s.clsCalendarContent).appendTo(i)), a.html(""), i = b("<div>").addClass("calendar-toolbar").appendTo(a), b("<span>").addClass("prev-month").html(s.prevMonthIcon).appendTo(i), b("<span>").addClass("curr-month").html(o.months[this.current.month]).appendTo(i), b("<span>").addClass("next-month").html(s.nextMonthIcon).appendTo(i), b("<span>").addClass("prev-year").html(s.prevYearIcon).appendTo(i), b("<span>").addClass("curr-year").html(this.current.year).appendTo(i), b("<span>").addClass("next-year").html(s.nextYearIcon).appendTo(i);
            var d = b("<div>").addClass("week-days").appendTo(a), u = "day";
            for (!0 === s.showWeekNumber && (b("<span>").addClass("week-number").html("#").appendTo(d), u += " and-week-number"), e = 0; e < 7; e++) 0 === s.weekStart ? t = e : 7 === (t = e + 1) && (t = 0), b("<span>").addClass(u).html(o.days[t + 7]).appendTo(d);
            var h = b("<div>").addClass("days").appendTo(a), p = b("<div>").addClass("days-row").appendTo(h),
                f = 0 === s.weekStart ? l.getDay() : 0 === l.getDay() ? 6 : l.getDay() - 1,
                m = this.current.month - 1 < 0 ? (n = 11, this.current.year - 1) : (n = this.current.month - 1, this.current.year);
            for (!0 === s.showWeekNumber && b("<div>").addClass("week-number").html(new Date(m, n, c - f + 1).getWeek(s.weekStart)).appendTo(p), e = 0; e < f; e++) {
                var v, g = c - f + e + 1, w = b("<div>").addClass(u + " outside").appendTo(p);
                (v = new Date(m, n, g)).setHours(0, 0, 0, 0), w.data("day", v.getTime()), !0 === s.outside && (w.html(g), 0 < this.excludeDay.length && -1 < this.excludeDay.indexOf(v.getDay()) && w.addClass("disabled excluded").addClass(s.clsExcluded), this._fireEvent("day-draw", {
                    date: v,
                    cell: w[0]
                })), r++
            }
            for (l.setHours(0, 0, 0, 0); l.getMonth() === this.current.month;) (w = b("<div>").addClass(u).html(l.getDate()).appendTo(p)).data("day", l.getTime()), this.show.getTime() === l.getTime() && w.addClass("showed"), this.today.getTime() === l.getTime() && w.addClass("today").addClass(s.clsToday), 0 === this.special.length ? (-1 !== this.selected.indexOf(l.getTime()) && w.addClass("selected").addClass(s.clsSelected), -1 !== this.exclude.indexOf(l.getTime()) && w.addClass("disabled excluded").addClass(s.clsExcluded), null !== this.min && l.getTime() < this.min.getTime() && w.addClass("disabled excluded").addClass(s.clsExcluded), null !== this.max && l.getTime() > this.max.getTime() && w.addClass("disabled excluded").addClass(s.clsExcluded), 0 < this.excludeDay.length && -1 < this.excludeDay.indexOf(l.getDay()) && w.addClass("disabled excluded").addClass(s.clsExcluded)) : -1 === this.special.indexOf(l.getTime()) && w.addClass("disabled excluded").addClass(s.clsExcluded), this._fireEvent("day-draw", {
                date: l,
                cell: w[0]
            }), ++r % 7 == 0 && (p = b("<div>").addClass("days-row").appendTo(h), !0 === s.showWeekNumber && b("<div>").addClass("week-number").html(new Date(l.getFullYear(), l.getMonth(), l.getDate() + 1).getWeek(s.weekStart)).appendTo(p)), l.setDate(l.getDate() + 1), l.setHours(0, 0, 0, 0);
            if (f = 0 === s.weekStart ? l.getDay() : 0 === l.getDay() ? 6 : l.getDay() - 1, m = 11 < this.current.month + 1 ? (n = 0, this.current.year + 1) : (n = this.current.month + 1, this.current.year), 0 < f) for (e = 0; e < 7 - f; e++) w = b("<div>").addClass(u + " outside").appendTo(p), (v = new Date(m, n, e + 1)).setHours(0, 0, 0, 0), w.data("day", v.getTime()), !0 === s.outside && (w.html(e + 1), 0 < this.excludeDay.length && -1 < this.excludeDay.indexOf(v.getDay()) && w.addClass("disabled excluded").addClass(s.clsExcluded), this._fireEvent("day-draw", {
                date: v,
                cell: w[0]
            }))
        }, _drawCalendar: function () {
            var e = this;
            setTimeout(function () {
                e.element.html(""), e._drawHeader(), e._drawContent(), e._drawFooter(), e._drawMonths(), e._drawYears()
            }, 0)
        }, getPreset: function () {
            return this.preset
        }, getSelected: function () {
            return this.selected
        }, getExcluded: function () {
            return this.exclude
        }, getToday: function () {
            return this.today
        }, getCurrent: function () {
            return this.current
        }, clearSelected: function () {
            this.selected = [], this._drawContent()
        }, toDay: function () {
            this.today = new Date, this.today.setHours(0, 0, 0, 0), this.current = {
                year: this.today.getFullYear(),
                month: this.today.getMonth(),
                day: this.today.getDate()
            }, this._drawHeader(), this._drawContent()
        }, setExclude: function (e) {
            var t = this.element, n = this.options;
            r.isNull(e) && r.isNull(t.attr("data-exclude")) || (n.exclude = r.isNull(e) ? t.attr("data-exclude") : e, this._dates2array(n.exclude, "exclude"), this._drawContent())
        }, setPreset: function (e) {
            var t = this.element, n = this.options;
            r.isNull(e) && r.isNull(t.attr("data-preset")) || (n.preset = r.isNull(e) ? t.attr("data-preset") : e, this._dates2array(n.preset, "selected"), this._drawContent())
        }, setSpecial: function (e) {
            var t = this.element, n = this.options;
            r.isNull(e) && r.isNull(t.attr("data-special")) || (n.special = r.isNull(e) ? t.attr("data-special") : e, this._dates2array(n.exclude, "special"), this._drawContent())
        }, setShow: function (e) {
            var t = this.element, n = this.options;
            r.isNull(e) && r.isNull(t.attr("data-show")) || (n.show = r.isNull(e) ? t.attr("data-show") : e, this.show = r.isDateObject(e) ? e : r.isValue(n.inputFormat) ? n.show.toDate(n.inputFormat) : new Date(n.show), this.show.setHours(0, 0, 0, 0), this.current = {
                year: this.show.getFullYear(),
                month: this.show.getMonth(),
                day: this.show.getDate()
            }, this._drawContent())
        }, setMinDate: function (e) {
            var t = this.element, n = this.options;
            n.minDate = r.isValue(e) ? e : t.attr("data-min-date"), r.isValue(n.minDate) && r.isDate(n.minDate, n.inputFormat) && (this.min = r.isValue(n.inputFormat) ? n.minDate.toDate(n.inputFormat) : new Date(n.minDate)), this._drawContent()
        }, setMaxDate: function (e) {
            var t = this.element, n = this.options;
            n.maxDate = r.isValue(e) ? e : t.attr("data-max-date"), r.isValue(n.maxDate) && r.isDate(n.maxDate, n.inputFormat) && (this.max = r.isValue(n.inputFormat) ? n.maxDate.toDate(n.inputFormat) : new Date(n.maxDate)), this._drawContent()
        }, setToday: function (e) {
            var t = this.options;
            r.isValue(e) || (e = new Date), this.today = r.isDateObject(e) ? e : r.isValue(t.inputFormat) ? e.toDate(t.inputFormat) : new Date(e), this.today.setHours(0, 0, 0, 0), this._drawHeader(), this._drawContent()
        }, i18n: function (e) {
            var t = this.options;
            return void 0 === e ? t.locale : void 0 !== n.locales[e] && (t.locale = e, this.locale = n.locales[t.locale], void this._drawCalendar())
        }, changeAttrLocale: function () {
            var e = this.element;
            this.i18n(e.attr("data-locale"))
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-exclude":
                    this.setExclude();
                    break;
                case"data-preset":
                    this.setPreset();
                    break;
                case"data-special":
                    this.setSpecial();
                    break;
                case"data-show":
                    this.setShow();
                    break;
                case"data-min-date":
                    this.setMinDate();
                    break;
                case"data-max-date":
                    this.setMaxDate();
                    break;
                case"data-locale":
                    this.changeAttrLocale()
            }
        }, destroy: function () {
            var e = this.element, t = this.options;
            return e.off(n.events.click, ".prev-month, .next-month, .prev-year, .next-year"), e.off(n.events.click, ".button.today"), e.off(n.events.click, ".button.clear"), e.off(n.events.click, ".button.cancel"), e.off(n.events.click, ".button.done"), e.off(n.events.click, ".week-days .day"), e.off(n.events.click, ".days-row .day"), e.off(n.events.click, ".curr-month"), e.off(n.events.click, ".calendar-months li"), e.off(n.events.click, ".curr-year"), e.off(n.events.click, ".calendar-years li"), e.off(n.events.click), !0 === t.ripple && e.data("ripple").destroy(), b(window).off(n.events.resize, {ns: this.id}), e
        }
    }), b(document).on(n.events.click, function () {
        b(".calendar .calendar-years").each(function () {
            b(this).removeClass("open")
        }), b(".calendar .calendar-months").each(function () {
            b(this).removeClass("open")
        })
    })
}(Metro, m4q), function (l, c) {
    "use strict";
    var d = l.utils, n = {
        label: "",
        value: "",
        calendarpickerDeferred: 0,
        nullValue: !0,
        useNow: !1,
        prepend: "",
        calendarWide: !1,
        calendarWidePoint: null,
        dialogMode: !1,
        dialogPoint: 640,
        dialogOverlay: !0,
        overlayColor: "#000000",
        overlayAlpha: .5,
        locale: METRO_LOCALE,
        size: "100%",
        format: METRO_DATE_FORMAT,
        inputFormat: null,
        headerFormat: "%A, %b %e",
        clearButton: !1,
        calendarButtonIcon: "<span class='default-icon-calendar'></span>",
        clearButtonIcon: "<span class='default-icon-cross'></span>",
        copyInlineStyles: !1,
        clsPicker: "",
        clsInput: "",
        yearsBefore: 100,
        yearsAfter: 100,
        weekStart: METRO_WEEK_START,
        outside: !0,
        ripple: !1,
        rippleColor: "#cccccc",
        exclude: null,
        minDate: null,
        maxDate: null,
        special: null,
        showHeader: !0,
        showWeekNumber: !1,
        clsCalendar: "",
        clsCalendarHeader: "",
        clsCalendarContent: "",
        clsCalendarMonths: "",
        clsCalendarYears: "",
        clsToday: "",
        clsSelected: "",
        clsExcluded: "",
        clsPrepend: "",
        clsLabel: "",
        onDayClick: l.noop,
        onCalendarPickerCreate: l.noop,
        onCalendarShow: l.noop,
        onCalendarHide: l.noop,
        onChange: l.noop,
        onMonthChange: l.noop,
        onYearChange: l.noop
    };
    l.calendarPickerSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroCalendarPickerSetup, l.calendarPickerSetup(window.metroCalendarPickerSetup), l.Component("calendar-picker", {
        init: function (e, t) {
            return this._super(t, e, n, {
                value: null,
                value_date: null,
                calendar: null,
                overlay: null,
                id: d.elementId("calendar-picker")
            }), this
        }, _create: function () {
            this._createStructure(), this._createEvents(), this._fireEvent("calendar-picker-create", {element: this.element})
        }, _createStructure: function () {
            var e, s = this, a = this.element, o = this.options,
                n = c("<div>").addClass("input " + a[0].className + " calendar-picker"),
                t = c("<div>").addClass("button-group"), r = c("<div>").addClass("drop-shadow"), i = c("body");
            a.attr("type", "text"), a.attr("autocomplete", "off"), a.attr("readonly", !0), e = "" !== ("" + o.value).trim() ? o.value : a.val().trim(), d.isValue(e) ? this.value = d.isValue(o.inputFormat) ? e.toDate(o.inputFormat, o.locale) : new Date(e) : o.useNow && (this.value = new Date), d.isValue(this.value) && this.value.setHours(0, 0, 0, 0), a.val(d.isValue(e) || !0 !== o.nullValue ? s.value.format(o.format, o.locale) : ""), n.insertBefore(a), a.appendTo(n), t.appendTo(n), r.appendTo(o.dialogMode ? i : n), l.makePlugin(r, "calendar", {
                wide: o.calendarWide,
                widePoint: o.calendarWidePoint,
                format: o.format,
                inputFormat: o.inputFormat,
                pickerMode: !0,
                show: o.value,
                locale: o.locale,
                weekStart: o.weekStart,
                outside: o.outside,
                buttons: !1,
                headerFormat: o.headerFormat,
                clsCalendar: [o.clsCalendar, "calendar-for-picker", o.dialogMode ? "dialog-mode" : ""].join(" "),
                clsCalendarHeader: o.clsCalendarHeader,
                clsCalendarContent: o.clsCalendarContent,
                clsCalendarFooter: "d-none",
                clsCalendarMonths: o.clsCalendarMonths,
                clsCalendarYears: o.clsCalendarYears,
                clsToday: o.clsToday,
                clsSelected: o.clsSelected,
                clsExcluded: o.clsExcluded,
                ripple: o.ripple,
                rippleColor: o.rippleColor,
                exclude: o.exclude,
                minDate: o.minDate,
                maxDate: o.maxDate,
                yearsBefore: o.yearsBefore,
                yearsAfter: o.yearsAfter,
                special: o.special,
                showHeader: o.showHeader,
                showFooter: !1,
                showWeekNumber: o.showWeekNumber,
                onDayClick: function (e, t, n) {
                    var i = new Date(e[0]);
                    i.setHours(0, 0, 0, 0), s._removeOverlay(), s.value = i, a.val(i.format(o.format, o.locale)), a.trigger("change"), r.removeClass("open open-up"), r.hide(), s._fireEvent("change", {val: s.value}), s._fireEvent("day-click", {
                        sel: e,
                        day: t,
                        el: n
                    })
                },
                onMonthChange: o.onMonthChange,
                onYearChange: o.onYearChange
            }), this.calendar = r, !0 === o.clearButton && c("<button>").addClass("button input-clear-button").attr("tabindex", -1).attr("type", "button").html(o.clearButtonIcon).appendTo(t), c("<button>").addClass("button").attr("tabindex", -1).attr("type", "button").html(o.calendarButtonIcon).appendTo(t), "" !== o.prepend && c("<div>").html(o.prepend).addClass("prepend").addClass(o.clsPrepend).appendTo(n), "rtl" === a.attr("dir") && n.addClass("rtl"), -1 < String(o.size).indexOf("%") ? n.css({width: o.size}) : n.css({width: parseInt(o.size) + "px"}), !(a[0].className = "") === o.copyInlineStyles && c.each(d.getInlineStyles(a), function (e, t) {
                n.css(e, t)
            }), n.addClass(o.clsPicker), a.addClass(o.clsInput), !0 === o.dialogOverlay && (this.overlay = s._overlay()), !0 === o.dialogMode ? n.addClass("dialog-mode") : d.media("(max-width: " + o.dialogPoint + "px)") && (n.addClass("dialog-mode"), this.calendar.addClass("dialog-mode")), o.label && (t = c("<label>").addClass("label-for-input").addClass(o.clsLabel).html(o.label).insertBefore(n), a.attr("id") && t.attr("for", a.attr("id")), "rtl" === a.attr("dir") && t.addClass("rtl")), a.is(":disabled") ? this.disable() : this.enable()
        }, _createEvents: function () {
            var n = this, t = this.element, e = this.options, i = t.parent(), s = i.find(".input-clear-button"),
                a = this.calendar, o = l.getPlugin(a[0], "calendar"), r = this.calendar;
            c(window).on(l.events.resize, function () {
                !0 !== e.dialogMode && (d.media("(max-width: " + e.dialogPoint + "px)") ? (i.addClass("dialog-mode"), r.appendTo("body").addClass("dialog-mode")) : (i.removeClass("dialog-mode"), r.appendTo(i).removeClass("dialog-mode")))
            }, {ns: this.id}), 0 < s.length && s.on(l.events.click, function (e) {
                t.val("").trigger("change").blur(), n.value = null, e.preventDefault(), e.stopPropagation()
            }), i.on(l.events.click, "button, input", function (e) {
                var t = d.isValue(n.value) ? n.value : new Date;
                t.setHours(0, 0, 0, 0), !1 === a.hasClass("open") && !1 === a.hasClass("open-up") ? (c(".calendar-picker .calendar").removeClass("open open-up").hide(), o.setPreset([t]), o.setShow(t), o.setToday(t), i.hasClass("dialog-mode") && n.overlay.appendTo(c("body")), a.addClass("open"), d.inViewport(a[0]) || a.addClass("open-up"), n._fireEvent("calendar-show", {calendar: a})) : (n._removeOverlay(), a.removeClass("open open-up"), n._fireEvent("calendar-hide", {calendar: a})), e.preventDefault(), e.stopPropagation()
            }), t.on(l.events.blur, function () {
                i.removeClass("focused")
            }), t.on(l.events.focus, function () {
                i.addClass("focused")
            }), t.on(l.events.change, function () {
                d.exec(e.onChange, [n.value], t[0])
            }), i.on(l.events.click, function (e) {
                e.preventDefault(), e.stopPropagation()
            })
        }, _overlay: function () {
            var e = this.options, t = c("<div>");
            return t.addClass("overlay for-calendar-picker").addClass(e.clsOverlay), "transparent" === e.overlayColor ? t.addClass("transparent") : t.css({background: l.colors.toRGBA(e.overlayColor, e.overlayAlpha)}), t
        }, _removeOverlay: function () {
            c("body").find(".overlay.for-calendar-picker").remove()
        }, val: function (e) {
            var t = this.element, n = this.options;
            if (d.isNull(e)) return this.value;
            !0 === d.isDate(e, n.inputFormat) && (l.getPlugin(this.calendar[0], "calendar").clearSelected(), this.value = "string" == typeof e ? n.inputFormat ? e.toDate(n.inputFormat, n.locale) : new Date(e) : e, d.isValue(this.value) && this.value.setHours(0, 0, 0, 0), t.val(this.value.format(n.format, n.locale)), t.trigger("change"))
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, i18n: function (e) {
            var t = this.options, n = this.calendar;
            return void 0 === e ? t.locale : void 0 !== l.locales[e] && ((t = n[0].hidden) && n.css({
                visibility: "hidden",
                display: "block"
            }), l.getPlugin(n[0], "calendar").i18n(e), void (t && n.css({visibility: "visible", display: "none"})))
        }, changeAttribute: function (e) {
            var t = this, n = this.element, i = l.getPlugin(this.calendar[0], "calendar");
            switch (e) {
                case"value":
                    t.val(n.attr("value"));
                    break;
                case"disabled":
                    this.toggleState();
                    break;
                case"data-locale":
                    t.i18n(n.attr("data-locale"));
                    break;
                case"data-special":
                    i.setSpecial(n.attr("data-special"));
                    break;
                case"data-exclude":
                    i.setExclude(n.attr("data-exclude"));
                    break;
                case"data-min-date":
                    i.setMinDate(n.attr("data-min-date"));
                    break;
                case"data-max-date":
                    i.setMaxDate(n.attr("data-max-date"));
                    break;
                case"data-value":
                    t.val(n.attr("data-value"))
            }
        }, destroy: function () {
            var e = this.element, t = e.parent(), n = t.find(".input-clear-button");
            return c(window).off(l.events.resize, {ns: this.id}), n.off(l.events.click), t.off(l.events.click, "button, input"), e.off(l.events.blur), e.off(l.events.focus), e.off(l.events.change), l.getPlugin(this.calendar, "calendar").destroy(), e
        }
    }), c(document).on(l.events.click, ".overlay.for-calendar-picker", function () {
        c(this).remove(), c(".calendar-for-picker.open").removeClass("open open-up")
    }), c(document).on(l.events.click, function () {
        c(".calendar-picker .calendar").removeClass("open open-up")
    })
}(Metro, m4q), function (f, a) {
    "use strict";
    var o = f.utils, m = ["slide", "slide-v", "fade", "switch", "zoom", "swirl"], n = {
        carouselDeferred: 0,
        autoStart: !1,
        width: "100%",
        height: "16/9",
        effect: m[0],
        effectFunc: "linear",
        direction: "left",
        duration: METRO_ANIMATION_DURATION,
        period: 5e3,
        stopOnMouse: !0,
        controls: !0,
        bullets: !0,
        bulletsStyle: "square",
        bulletsSize: "default",
        controlsOnMouse: !1,
        controlsOutside: !1,
        bulletsPosition: "default",
        controlPrev: "&#x23F4",
        controlNext: "&#x23F5",
        clsCarousel: "",
        clsSlides: "",
        clsSlide: "",
        clsControls: "",
        clsControlNext: "",
        clsControlPrev: "",
        clsBullets: "",
        clsBullet: "",
        clsBulletOn: "",
        clsThumbOn: "",
        onStop: f.noop,
        onStart: f.noop,
        onPlay: f.noop,
        onSlideClick: f.noop,
        onBulletClick: f.noop,
        onThumbClick: f.noop,
        onMouseEnter: f.noop,
        onMouseLeave: f.noop,
        onNextClick: f.noop,
        onPrevClick: f.noop,
        onSlideShow: f.noop,
        onSlideHide: f.noop,
        onCarouselCreate: f.noop
    };
    f.carouselSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroCarouselSetup, f.carouselSetup(window.metroCarouselSetup), f.Component("carousel", {
        init: function (e, t) {
            return this._super(t, e, n, {
                height: 0,
                width: 0,
                slides: [],
                current: null,
                currentIndex: null,
                dir: "left",
                interval: !1,
                isAnimate: !1,
                id: o.elementId("carousel")
            }), this
        }, _create: function () {
            var e = this.element, t = this.options, n = e.find(".slide"), i = e.find(".slides");
            this.dir = this.options.direction, e.addClass("carousel").addClass(t.clsCarousel), e.css({maxWidth: t.width}), !0 === t.controlsOutside && e.addClass("controls-outside"), 0 === i.length && (i = a("<div>").addClass("slides").appendTo(e), n.appendTo(i)), n.addClass(t.clsSlides), 0 < n.length && (this._createSlides(), this._createControls(), this._createBullets(), this._createEvents(), this._resize(), !0 === t.controlsOnMouse && (e.find("[class*=carousel-switch]").fadeOut(0), e.find(".carousel-bullets").fadeOut(0)), !0 === t.autoStart ? this._start() : this._fireEvent("slide-show", {
                current: this.slides[this.currentIndex][0],
                prev: void 0
            })), this._fireEvent("carousel-create", {element: e})
        }, _start: function () {
            var t = this, e = this.element, n = this.options, i = n.period, s = this.slides[this.currentIndex];
            void 0 !== s.data("period") && (i = s.data("period")), this.slides.length <= 1 || (!1 === this.interval && (this.interval = setTimeout(function () {
                var e = "left" === n.direction ? "next" : "prior";
                t._slideTo(e, !0)
            }, i)), this._fireEvent("start", {element: e}))
        }, _stop: function () {
            clearInterval(this.interval), this.interval = !1
        }, _resize: function () {
            var t, e, n = this.element, i = this.options, s = n.outerWidth();
            -1 < ["16/9", "21/9", "4/3"].indexOf(i.height) ? t = o.aspectRatioH(s, i.height) : -1 < String(i.height).indexOf("@") ? (e = i.height.substr(1).toArray("|"), a.each(e, function () {
                var e = this.toArray(",");
                window.matchMedia(e[0]).matches && (t = -1 < ["16/9", "21/9", "4/3"].indexOf(e[1]) ? o.aspectRatioH(s, e[1]) : parseInt(e[1]))
            })) : t = parseInt(i.height), n.css({height: t})
        }, _createSlides: function () {
            var n = this, e = this.element, i = this.options, e = e.find(".slide");
            a.each(e, function (e) {
                var t = a(this);
                if (void 0 !== t.data("cover") && t.css({backgroundImage: "url(" + t.data("cover") + ")"}), 0 !== e) switch (i.effect) {
                    case"switch":
                    case"slide":
                        t.css("left", "100%");
                        break;
                    case"slide-v":
                        t.css("top", "100%");
                        break;
                    case"fade":
                    case"zoom":
                    case"swirl":
                        t.css("opacity", "0")
                } else t.addClass("active-slide");
                t.addClass(i.clsSlide), n.slides.push(t)
            }), this.currentIndex = 0, this.current = this.slides[this.currentIndex]
        }, _createControls: function () {
            var e, t, n = this.element, i = this.options;
            !1 !== i.controls && (e = a("<span/>").addClass("carousel-switch-next").addClass(i.clsControls).addClass(i.clsControlNext).html(">"), t = a("<span/>").addClass("carousel-switch-prev").addClass(i.clsControls).addClass(i.clsControlPrev).html("<"), i.controlNext && e.html(i.controlNext), i.controlPrev && t.html(i.controlPrev), e.appendTo(n), t.appendTo(n))
        }, _createBullets: function () {
            var e, t, n = this.element, i = this.options;
            if (!1 !== i.bullets) {
                for (e = a("<div>").addClass("carousel-bullets").addClass(i.bulletsSize + "-size").addClass("bullet-style-" + i.bulletsStyle).addClass(i.clsBullets), "default" === i.bulletsPosition || "center" === i.bulletsPosition ? e.addClass("flex-justify-center") : "left" === i.bulletsPosition ? e.addClass("flex-justify-start") : e.addClass("flex-justify-end"), t = 0; t < this.slides.length; t++) {
                    var s = a("<span>").addClass("carousel-bullet").addClass(i.clsBullet).data("slide", t);
                    0 === t && s.addClass("bullet-on").addClass(i.clsBulletOn), s.appendTo(e)
                }
                e.appendTo(n)
            }
        }, _createEvents: function () {
            var t = this, e = this.element, n = this.options;
            e.on(f.events.click, ".carousel-bullet", function () {
                var e = a(this);
                !1 === t.isAnimate && (t._slideToSlide(e.data("slide")), t._fireEvent("bullet-click", {bullet: e}))
            }), e.on(f.events.click, ".carousel-switch-next", function () {
                !1 === t.isAnimate && (t._slideTo("next", !1), t._fireEvent("next-click", {button: this}))
            }), e.on(f.events.click, ".carousel-switch-prev", function () {
                !1 === t.isAnimate && (t._slideTo("prev", !1), t._fireEvent("prev-click", {button: this}))
            }), !0 === n.stopOnMouse && !0 === n.autoStart && (e.on(f.events.enter, function () {
                t._stop(), t._fireEvent("mouse-enter", {element: e}, !1, !0)
            }), e.on(f.events.leave, function () {
                t._start(), t._fireEvent("mouse-leave", {element: e}, !1, !0)
            })), !0 === n.controlsOnMouse && (e.on(f.events.enter, function () {
                e.find("[class*=carousel-switch]").fadeIn(), e.find(".carousel-bullets").fadeIn()
            }), e.on(f.events.leave, function () {
                e.find("[class*=carousel-switch]").fadeOut(), e.find(".carousel-bullets").fadeOut()
            })), e.on(f.events.click, ".slide", function () {
                var e = a(this);
                t._fireEvent("slide-click", {slide: e})
            }), a(window).on(f.events.resize, function () {
                t._resize()
            }, {ns: this.id})
        }, _slideToSlide: function (e) {
            var t, n, i, s = this.element, a = this.options;
            void 0 !== this.slides[e] && this.currentIndex !== e && (i = e > this.currentIndex ? "next" : "prev", t = this.slides[this.currentIndex], n = this.slides[e], this.currentIndex = e, this._effect(t, n, a.effect, i), s.find(".carousel-bullet").removeClass("bullet-on").removeClass(a.clsBulletOn), s.find(".carousel-bullet:nth-child(" + (this.currentIndex + 1) + ")").addClass("bullet-on").addClass(a.clsBulletOn))
        }, _slideTo: function (e, t) {
            var n, i, s = this.element, a = this.options;
            void 0 === e && (e = "next"), n = this.slides[this.currentIndex], "next" === e ? (this.currentIndex++, this.currentIndex >= this.slides.length && (this.currentIndex = 0)) : (this.currentIndex--, this.currentIndex < 0 && (this.currentIndex = this.slides.length - 1)), i = this.slides[this.currentIndex], this._effect(n, i, a.effect, e, t), s.find(".carousel-bullet").removeClass("bullet-on").removeClass(a.clsBulletOn), s.find(".carousel-bullet:nth-child(" + (this.currentIndex + 1) + ")").addClass("bullet-on").addClass(a.clsBulletOn)
        }, _effect: function (e, t, n, i, s) {
            var a, o, r, l, c = this, d = this.options, u = d.duration, h = d.effectFunc, p = d.period;
            void 0 !== t.data("duration") && (u = t.data("duration")), void 0 !== t.data("effectFunc") && (h = t.data("effectFunc")), "switch" === n && (u = 0), e.stop(!0), t.stop(!0), this.isAnimate = !0, setTimeout(function () {
                c.isAnimate = !1
            }, u + 100), i = "slide" === n ? "next" === i ? "slideLeft" : "slideRight" : "slide-v" === n ? "next" === i ? "slideUp" : "slideDown" : n, m.includes(n) || (i = "switch"), a = i, o = e, r = t, l = {
                duration: u,
                ease: h
            }, f.animations[a](o, r, l), e.removeClass("active-slide"), t.addClass("active-slide"), setTimeout(function () {
                c._fireEvent("slide-show", {current: t[0], prev: e[0]})
            }, u), setTimeout(function () {
                c._fireEvent("slide-hide", {current: e[0], next: t[0]})
            }, u), !0 === s && (void 0 !== t.data("period") && (p = t.data("period")), this.interval = setTimeout(function () {
                var e = "left" === d.direction ? "next" : "prior";
                c._slideTo(e, !0)
            }, p))
        }, toSlide: function (e) {
            this._slideToSlide(e)
        }, next: function () {
            this._slideTo("next")
        }, prev: function () {
            this._slideTo("prev")
        }, stop: function () {
            clearInterval(this.interval), this._fireEvent("stop")
        }, play: function () {
            this._start(), this._fireEvent("play")
        }, setEffect: function (e) {
            var t = this.element, n = this.options, t = t.find(".slide");
            m.includes(e) && (n.effect = e, t.removeStyleProperty("transform").css({top: 0, left: 0}))
        }, changeAttribute: function (e, t) {
            "data-effect" === e && this.setEffect(t)
        }, destroy: function () {
            var e = this.element, t = this.options;
            return e.off(f.events.click, ".carousel-bullet"), e.off(f.events.click, ".carousel-switch-next"), e.off(f.events.click, ".carousel-switch-prev"), !0 === t.stopOnMouse && !0 === t.autoStart && (e.off(f.events.enter), e.off(f.events.leave)), !0 === t.controlsOnMouse && (e.off(f.events.enter), e.off(f.events.leave)), e.off(f.events.click, ".slide"), a(window).off(f.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q), function (i, t) {
    "use strict";
    var s = i.utils, n = {
        charmsDeferred: 0,
        position: "right",
        opacity: 1,
        clsCharms: "",
        onCharmCreate: i.noop,
        onOpen: i.noop,
        onClose: i.noop,
        onToggle: i.noop
    };
    i.charmsSetup = function (e) {
        n = t.extend({}, n, e)
    }, window.metroCharmsSetup, i.charmsSetup(window.metroCharmsSetup), i.Component("charms", {
        init: function (e, t) {
            return this._super(t, e, n, {origin: {background: ""}}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("charm-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options;
            e.addClass("charms").addClass(t.position + "-side").addClass(t.clsCharms), this.origin.background = e.css("background-color"), e.css({backgroundColor: i.colors.toRGBA(s.getStyleOne(e, "background-color"), t.opacity)})
        }, _createEvents: function () {
        }, open: function () {
            this.element.addClass("open"), this._fireEvent("open")
        }, close: function () {
            this.element.removeClass("open"), this._fireEvent("close")
        }, toggle: function () {
            !0 === this.element.hasClass("open") ? this.close() : this.open(), this._fireEvent("toggle")
        }, opacity: function (e) {
            var t = this.element, n = this.options;
            if (void 0 === e) return n.opacity;
            e = Math.abs(parseFloat(e));
            e < 0 || 1 < e || (n.opacity = e, t.css({backgroundColor: i.colors.toRGBA(s.getStyleOne(t, "background-color"), e)}))
        }, changeOpacity: function () {
            var e = this.element;
            this.opacity(e.attr("data-opacity"))
        }, changeAttribute: function (e) {
            "data-opacity" === e && this.changeOpacity()
        }, destroy: function () {
            return this.element
        }
    }), i.charms = {
        check: function (e) {
            return !1 !== s.isMetroObject(e, "charms") || (console.warn("Element is not a charms component"), !1)
        }, isOpen: function (e) {
            if (!1 !== this.check(e)) return t(e).hasClass("open")
        }, open: function (e) {
            !1 !== this.check(e) && i.getPlugin(e, "charms").open()
        }, close: function (e) {
            !1 !== this.check(e) && i.getPlugin(e, "charms").close()
        }, toggle: function (e) {
            !1 !== this.check(e) && i.getPlugin(e, "charms").toggle()
        }, closeAll: function () {
            t("[data-role*=charms]").each(function () {
                i.getPlugin(this, "charms").close()
            })
        }, opacity: function (e, t) {
            !1 !== this.check(e) && i.getPlugin(e, "charms").opacity(t)
        }
    }
}(Metro, m4q), function (o, d) {
    "use strict";
    var u = o.utils,
        r = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAUABQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t+KKPxo/GgA70Yo/Gj8aADFH4VesdC1HUl3WtjcXCf344yV/PGKW+0HUtNXddWNzbp/fkjIX88YoAofhR+FH40fjQAfhR+FH40fjQAUUUUAFepeAPh5D9li1LVYhK8g3Q27j5VXszDuT6f5HA+FtOXVvEWn2rjMcko3j1UckfkDX0MBgYHAoARVCKFUBVHAA6ClZQwKkZBGCDS0UAec+Pvh3BJay6lpUQimjBeW3QYVx3Kjsfbv/PyqvpuvnvxfpqaT4l1C1QbY0lJUDsrfMB+RoAyKKKKACiiigDa8GXq6f4p02eQgIJQpJ7Bvlz+tfQP4V8yDg17P4A8cw65ZxWV5IE1KMbfmP+uA7j39R+NAHaUfhSUUAL+FeA+OL1NQ8WalNGQU83YCO+0Bf6V6b498cQ6BZyWlrIJNSkXaApz5QP8AEff0FeKk5OTyTQAUUUUAH40fjRU1naTX93DbQIXmlYIijuTQBc0Dw/eeI74W1mm49XkbhUHqTXsHhz4eaXoCpI8YvbscmaYZAP8Asr0H8/etHwv4cg8M6XHaxANIfmllxy7dz9PStigA/Gk/GlooA5bxJ8PdL19XkWMWd43PnwjGT/tL0P8AP3rx/X/D954cvjbXibT1SReVceoNfRFZHijw5B4m0uS1lAWQfNFLjlG7H6etAHz5+NH41NeWk1hdzW06FJonKMp7EGoaACvQfhBowudTudRkXK2y7I8j+Nup/Afzrz6vafhRaCDwmkgHM8zufwO3/wBloA7Kiij8KACkpaSgBaSj8KKAPJvi/owttTttRjXC3K7JMf3l6H8R/KvPq9p+K1qJ/CbyEcwTI4P1O3/2avFqAP/Z",
        n = {
            chatDeferred: 0,
            inputTimeFormat: "%m-%d-%y",
            timeFormat: "%d %b %l:%M %p",
            name: "John Doe",
            avatar: r,
            welcome: null,
            title: null,
            width: "100%",
            height: "auto",
            randomColor: !1,
            messages: null,
            sendButtonTitle: "Send",
            readonly: !1,
            clsChat: "",
            clsName: "",
            clsTime: "",
            clsInput: "",
            clsSendButton: "",
            clsMessageLeft: "default",
            clsMessageRight: "default",
            onMessage: o.noop,
            onSend: o.noop,
            onSendButtonClick: o.noop,
            onChatCreate: o.noop
        };
    o.chatSetup = function (e) {
        n = d.extend({}, n, e)
    }, window.metroChatSetup, o.chatSetup(window.metroChatSetup), o.Component("chat", {
        init: function (e, t) {
            return this._super(t, e, n, {
                input: null,
                classes: "primary secondary success alert warning yellow info dark light".split(" "),
                lastMessage: null
            }), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("chat-create", {element: e})
        }, _createStructure: function () {
            var e, t, n = this, i = this.element, s = this.options, a = [{
                html: s.sendButtonTitle,
                cls: s.clsSendButton + " js-chat-send-button",
                onclick: s.onSendButtonClick
            }];
            i.addClass("chat").addClass(s.clsChat), i.css({
                width: s.width,
                height: s.height
            }), u.isValue(s.title) && d("<div>").addClass("title").html(s.title).appendTo(i), d("<div>").addClass("messages").appendTo(i), e = d("<div>").addClass("message-input").appendTo(i), (t = d("<input type='text'>")).appendTo(e), t.input({
                customButtons: a,
                clsInput: s.clsInput
            }), s.welcome && this.add({
                text: s.welcome,
                time: new Date,
                position: "left",
                name: "Welcome",
                avatar: r
            }), u.isValue(s.messages) && "string" == typeof s.messages && (s.messages = u.isObject(s.messages)), !u.isNull(s.messages) && "object" == typeof s.messages && 0 < u.objectLength(s.messages) && d.each(s.messages, function () {
                n.add(this)
            }), i.find(".message-input")[s.readonly ? "addClass" : "removeClass"]("disabled")
        }, _createEvents: function () {
            function t() {
                var e = "" + a.val();
                "" !== e.trim() && (e = {
                    id: u.elementId("chat-message"),
                    name: i.name,
                    avatar: i.avatar,
                    text: e,
                    position: "right",
                    time: new Date
                }, n.add(e), a.val(""), n._fireEvent("send", {msg: e}))
            }

            var n = this, e = this.element, i = this.options, s = e.find(".js-chat-send-button"),
                a = e.find("input[type=text]");
            s.on(o.events.click, function () {
                t()
            }), a.on(o.events.keyup, function (e) {
                e.keyCode === o.keyCode.ENTER && t()
            })
        }, add: function (e) {
            var t = this.element, n = this.options, i = t.find(".messages"),
                s = "string" == typeof e.time ? e.time.toDate(n.inputTimeFormat) : e.time,
                a = d("<div>").addClass("message").addClass(e.position).appendTo(i),
                o = d("<div>").addClass("message-sender").addClass(n.clsName).html(e.name).appendTo(a),
                r = d("<div>").addClass("message-time").addClass(n.clsTime).html(s.format(n.timeFormat)).appendTo(a),
                l = d("<div>").addClass("message-item").appendTo(a),
                c = d("<img>").attr("src", e.avatar).addClass("message-avatar").appendTo(l),
                t = d("<div>").addClass("message-text").html(e.text).appendTo(l);
            return u.isValue(e.id) && a.attr("id", e.id), !0 === n.randomColor ? (s = d.random(0, this.classes.length - 1), t.addClass(this.classes[s])) : ("left" === e.position && u.isValue(n.clsMessageLeft) && t.addClass(n.clsMessageLeft), "right" === e.position && u.isValue(n.clsMessageRight) && t.addClass(n.clsMessageRight)), this._fireEvent("message", {
                msg: e,
                el: {message: a, sender: o, time: r, item: l, avatar: c, text: t}
            }), i.animate({draw: {scrollTop: i[0].scrollHeight}, dur: 1e3}), this.lastMessage = e, this
        }, addMessages: function (e) {
            var t = this;
            return u.isValue(e) && "string" == typeof e && (e = u.isObject(e)), "object" == typeof e && 0 < u.objectLength(e) && d.each(e, function () {
                t.add(this)
            }), this
        }, delMessage: function (e) {
            return this.element.find(".messages").find("#" + e).remove(), this
        }, updMessage: function (e) {
            var t = this.element.find(".messages").find("#" + e.id);
            return 0 === t.length || (t.find(".message-text").html(e.text), t.find(".message-time").html(e.time)), this
        }, clear: function () {
            this.element.find(".messages").html(""), this.lastMessage = null
        }, toggleReadonly: function (e) {
            var t = this.element, n = this.options;
            n.readonly = void 0 === e ? !n.readonly : e, t.find(".message-input")[n.readonly ? "addClass" : "removeClass"]("disabled")
        }, changeAttribute: function (e) {
            "data-readonly" === e && this.toggleReadonly()
        }, destroy: function () {
            var e = this.element, t = e.find(".js-chat-send-button"), n = e.find("input[type=text]");
            return t.off(o.events.click), n.off(o.events.keyup), e
        }
    })
}(Metro, m4q), function (e, a) {
    "use strict";
    var o = e.utils, n = {
        checkboxDeferred: 0,
        transition: !0,
        style: 1,
        caption: "",
        captionPosition: "right",
        indeterminate: !1,
        clsCheckbox: "",
        clsCheck: "",
        clsCaption: "",
        onCheckboxCreate: e.noop
    };
    e.checkboxSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroCheckboxSetup, e.checkboxSetup(window.metroCheckboxSetup), e.Component("checkbox", {
        init: function (e, t) {
            return this._super(t, e, n, {origin: {className: ""}}), this
        }, _create: function () {
            this._createStructure(), this._createEvents(), this._fireEvent("checkbox-create")
        }, _createStructure: function () {
            var e, t = this.element, n = this.options, i = a("<span>").addClass("check"),
                s = a("<span>").addClass("caption").html(n.caption);
            t.attr("type", "checkbox"), void 0 !== t.attr("readonly") && t.on("click", function (e) {
                e.preventDefault()
            }), e = t.wrap("<label>").addClass("checkbox " + t[0].className).addClass(2 === n.style ? "style2" : ""), i.appendTo(e), s.appendTo(e), !0 === n.transition && e.addClass("transition-on"), "left" === n.captionPosition && e.addClass("caption-left"), this.origin.className = t[0].className, t[0].className = "", e.addClass(n.clsCheckbox), s.addClass(n.clsCaption), i.addClass(n.clsCheck), n.indeterminate && (t[0].indeterminate = !0), t.is(":disabled") ? this.disable() : this.enable()
        }, _createEvents: function () {
            var e = this.element, t = e.siblings(".check");
            e.on("focus", function () {
                t.addClass("focused")
            }), e.on("blur", function () {
                t.removeClass("focused")
            })
        }, indeterminate: function (e) {
            var t = this.element;
            e = !!o.isNull(e) || o.bool(e), t[0].indeterminate = e, t.attr("data-indeterminate", e)
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, toggle: function (e) {
            var t = this.element;
            return this.indeterminate(!1), o.isValue(e) ? -1 === e ? this.indeterminate(!0) : t.prop("checked", 1 === e) : t.prop("checked", !o.bool(t.prop("checked"))), this
        }, changeAttribute: function (e) {
            var t, n = this.element, i = this.options, s = n.parent();
            switch (e) {
                case"disabled":
                    this.toggleState();
                    break;
                case"data-indeterminate":
                    n[0].indeterminate = !0 === JSON.parse(n.attr("data-indeterminate"));
                    break;
                case"data-style":
                    t = parseInt(n.attr("data-style")), o.isInt(t) && (i.style = t, s.removeClass("style1 style2").addClass("style" + t))
            }
        }, destroy: function () {
            var e = this.element;
            return e.off("focus"), e.off("blur"), e
        }
    })
}(Metro, m4q), function (e, t) {
    "use strict";
    var n = {
        clockDeferred: 0,
        showTime: !0,
        showDate: !0,
        timeFormat: "24",
        dateFormat: "american",
        divider: "&nbsp;&nbsp;",
        leadingZero: !0,
        dateDivider: "-",
        timeDivider: ":",
        onTick: e.noop,
        onSecond: e.noop,
        onClockCreate: e.noop
    };
    e.clockSetup = function (e) {
        n = t.extend({}, n, e)
    }, window.metroClockSetup, e.clockSetup(window.metroClockSetup), e.Component("clock", {
        init: function (e, t) {
            return this._super(t, e, n, {_clockInterval: null}), this
        }, _create: function () {
            var e = this, t = this.element;
            this._fireEvent("clock-create", {element: t}), this._tick(), this._clockInterval = setInterval(function () {
                e._tick()
            }, 500), this._secondInterval = setInterval(function () {
                e._second()
            }, 1e3)
        }, _addLeadingZero: function (e) {
            return e < 10 && (e = "0" + e), e
        }, _second: function () {
            var e = new Date;
            this._fireEvent("second", {timestamp: e})
        }, _tick: function () {
            var e = this.element, t = this.options, n = new Date, i = "", s = n.getHours(), a = n.getMinutes(),
                o = n.getSeconds(), r = n.getDate(), l = n.getMonth() + 1, c = n.getFullYear(), d = "";
            12 === parseInt(t.timeFormat) && (d = 11 < s ? " PM" : " AM", 12 < s && (s -= 12), 0 === s && (s = 12)), a = this._addLeadingZero(a), o = this._addLeadingZero(o), t.leadingZero && (s = this._addLeadingZero(s), l = this._addLeadingZero(l), r = this._addLeadingZero(r)), t.showDate && ("american" === t.dateFormat ? (i += "<span class='date-month'>" + l + "</span>", i += "<span class='date-divider'>" + t.dateDivider + "</span>", i += "<span class='date-day'>" + r + "</span>") : (i += "<span class='date-day'>" + r + "</span>", i += "<span class='date-divider'>" + t.dateDivider + "</span>", i += "<span class='date-month'>" + l + "</span>"), i += "<span class='date-divider'>" + t.dateDivider + "</span>", i += "<span class='date-year'>" + c + "</span>", i += t.divider), t.showTime && (i += "<span class='clock-hour'>" + s + "</span>", i += "<span class='clock-divider'>" + t.timeDivider + "</span>", i += "<span class='clock-minute'>" + a + "</span>", i += "<span class='clock-divider'>" + t.timeDivider + "</span>", i += "<span class='clock-second'>" + o + "</span>", i += "<span class='clock-suffix'>" + d + "</span>"), e.html(i), this._fireEvent("tick", {timestamp: n})
        }, changeAttribute: function (e) {
        }, destroy: function () {
            return clearInterval(this._clockInterval), this._clockInterval = null, this.element
        }
    })
}(Metro, m4q), function (o, r) {
    "use strict";
    var n = {
        collapseDeferred: 0,
        collapsed: !1,
        toggleElement: !1,
        duration: 100,
        onExpand: o.noop,
        onCollapse: o.noop,
        onCollapseCreate: o.noop
    };
    o.collapseSetup = function (e) {
        n = r.extend({}, n, e)
    }, window.metroCollapseSetup, o.collapseSetup(window.metroCollapseSetup), o.Component("collapse", {
        init: function (e, t) {
            return this._super(t, e, n, {toggle: null}), this
        }, _create: function () {
            var t = this, n = this.element, e = this.options,
                i = !1 !== e.toggleElement ? r(e.toggleElement) : 0 < n.siblings(".collapse-toggle").length ? n.siblings(".collapse-toggle") : n.siblings("a:nth-child(1)");
            !0 !== e.collapsed && !0 !== n.attr("collapsed") || n.hide(0), i.on(o.events.click, function (e) {
                "block" !== n.css("display") || n.hasClass("keep-open") ? t._open(n) : t._close(n), -1 === ["INPUT"].indexOf(e.target.tagName) && e.preventDefault(), e.stopPropagation()
            }), this.toggle = i, this._fireEvent("collapse-create", {element: n})
        }, _close: function (e, t) {
            var n = r(e), i = o.getPlugin(n[0], "collapse"), s = i.options, a = t ? "show" : "slideUp",
                s = t ? 0 : s.duration;
            this.toggle.removeClass("active-toggle"), n[a](s, function () {
                e.trigger("onCollapse", null, e), e.data("collapsed", !0), e.addClass("collapsed"), i._fireEvent("collapse")
            })
        }, _open: function (e, t) {
            var n = r(e), i = o.getPlugin(n[0], "collapse"), s = i.options, a = t ? "show" : "slideDown",
                s = t ? 0 : s.duration;
            this.toggle.addClass("active-toggle"), n[a](s, function () {
                e.trigger("onExpand", null, e), e.data("collapsed", !1), e.removeClass("collapsed"), i._fireEvent("expand")
            })
        }, collapse: function (e) {
            this._close(this.element, e)
        }, expand: function (e) {
            this._open(this.element, e)
        }, close: function (e) {
            this._close(this.element, e)
        }, open: function (e) {
            this._open(this.element, e)
        }, isCollapsed: function () {
            return this.element.data("collapsed")
        }, toggleState: function () {
            var e = this.element;
            !0 === e.attr("collapsed") || !0 === e.data("collapsed") ? this.collapse() : this.expand()
        }, changeAttribute: function (e) {
            switch (e) {
                case"collapsed":
                case"data-collapsed":
                    this.toggleState()
            }
        }, destroy: function () {
            return this.toggle.off(o.events.click), this.element
        }
    })
}(Metro, m4q), function (e, v) {
    "use strict";
    var i = "hex", t = "rgb", d = "rgba", n = "hsv", s = "hsl", u = "hsla", a = "cmyk", o = "unknown";
    e.colorsSetup = function (e) {
        g = v.extend({}, g, e)
    }, window.metroColorsSetup, e.colorsSetup(window.metroColorsSetup);
    var g = {angle: 30, algorithm: 1, step: .1, distance: 5, tint1: .8, tint2: .4, shade1: .6, shade2: .3, alpha: 1};

    function h(e, t, n) {
        this.r = e || 0, this.g = t || 0, this.b = n || 0
    }

    function r(e, t, n, i) {
        this.r = e || 0, this.g = t || 0, this.b = n || 0, this.a = void 0 !== i && i || 1
    }

    function w(e, t, n) {
        this.h = e || 0, this.s = t || 0, this.v = n || 0
    }

    function l(e, t, n) {
        this.h = e || 0, this.s = t || 0, this.l = n || 0
    }

    function c(e, t, n, i) {
        this.h = e || 0, this.s = t || 0, this.l = n || 0, this.a = void 0 !== i && i || 1
    }

    function p(e, t, n, i) {
        this.c = e || 0, this.m = t || 0, this.y = n || 0, this.k = i || 0
    }

    h.prototype.toString = function () {
        return "rgb(" + [this.r, this.g, this.b].join(",") + ")"
    }, r.prototype.toString = function () {
        return "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")"
    }, w.prototype.toString = function () {
        return "hsv(" + [this.h, this.s, this.v].join(",") + ")"
    }, l.prototype.toString = function () {
        return "hsl(" + [this.h, this.s, this.l].join(",") + ")"
    }, c.prototype.toString = function () {
        return "hsla(" + [this.h, this.s, this.l, this.a].join(",") + ")"
    }, p.prototype.toString = function () {
        return "cmyk(" + [this.c, this.m, this.y, this.k].join(",") + ")"
    };

    function f(e, t) {
        this._setValue(e), this._setOptions(t)
    }

    var m = {
        PALETTES: {ALL: "all", METRO: "metro", STANDARD: "standard"},
        metro: {
            lime: "#a4c400",
            green: "#60a917",
            emerald: "#008a00",
            blue: "#00AFF0",
            teal: "#00aba9",
            cyan: "#1ba1e2",
            cobalt: "#0050ef",
            indigo: "#6a00ff",
            violet: "#aa00ff",
            pink: "#dc4fad",
            magenta: "#d80073",
            crimson: "#a20025",
            red: "#CE352C",
            orange: "#fa6800",
            amber: "#f0a30a",
            yellow: "#fff000",
            brown: "#825a2c",
            olive: "#6d8764",
            steel: "#647687",
            mauve: "#76608a",
            taupe: "#87794e"
        },
        standard: {
            aliceBlue: "#f0f8ff",
            antiqueWhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedAlmond: "#ffebcd",
            blue: "#0000ff",
            blueViolet: "#8a2be2",
            brown: "#a52a2a",
            burlyWood: "#deb887",
            cadetBlue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerBlue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkBlue: "#00008b",
            darkCyan: "#008b8b",
            darkGoldenRod: "#b8860b",
            darkGray: "#a9a9a9",
            darkGreen: "#006400",
            darkKhaki: "#bdb76b",
            darkMagenta: "#8b008b",
            darkOliveGreen: "#556b2f",
            darkOrange: "#ff8c00",
            darkOrchid: "#9932cc",
            darkRed: "#8b0000",
            darkSalmon: "#e9967a",
            darkSeaGreen: "#8fbc8f",
            darkSlateBlue: "#483d8b",
            darkSlateGray: "#2f4f4f",
            darkTurquoise: "#00ced1",
            darkViolet: "#9400d3",
            deepPink: "#ff1493",
            deepSkyBlue: "#00bfff",
            dimGray: "#696969",
            dodgerBlue: "#1e90ff",
            fireBrick: "#b22222",
            floralWhite: "#fffaf0",
            forestGreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#DCDCDC",
            ghostWhite: "#F8F8FF",
            gold: "#ffd700",
            goldenRod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenYellow: "#adff2f",
            honeyDew: "#f0fff0",
            hotPink: "#ff69b4",
            indianRed: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderBlush: "#fff0f5",
            lawnGreen: "#7cfc00",
            lemonChiffon: "#fffacd",
            lightBlue: "#add8e6",
            lightCoral: "#f08080",
            lightCyan: "#e0ffff",
            lightGoldenRodYellow: "#fafad2",
            lightGray: "#d3d3d3",
            lightGreen: "#90ee90",
            lightPink: "#ffb6c1",
            lightSalmon: "#ffa07a",
            lightSeaGreen: "#20b2aa",
            lightSkyBlue: "#87cefa",
            lightSlateGray: "#778899",
            lightSteelBlue: "#b0c4de",
            lightYellow: "#ffffe0",
            lime: "#00ff00",
            limeGreen: "#32dc32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumAquaMarine: "#66cdaa",
            mediumBlue: "#0000cd",
            mediumOrchid: "#ba55d3",
            mediumPurple: "#9370db",
            mediumSeaGreen: "#3cb371",
            mediumSlateBlue: "#7b68ee",
            mediumSpringGreen: "#00fa9a",
            mediumTurquoise: "#48d1cc",
            mediumVioletRed: "#c71585",
            midnightBlue: "#191970",
            mintCream: "#f5fffa",
            mistyRose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajoWhite: "#ffdead",
            navy: "#000080",
            oldLace: "#fdd5e6",
            olive: "#808000",
            oliveDrab: "#6b8e23",
            orange: "#ffa500",
            orangeRed: "#ff4500",
            orchid: "#da70d6",
            paleGoldenRod: "#eee8aa",
            paleGreen: "#98fb98",
            paleTurquoise: "#afeeee",
            paleVioletRed: "#db7093",
            papayaWhip: "#ffefd5",
            peachPuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderBlue: "#b0e0e6",
            purple: "#800080",
            rebeccaPurple: "#663399",
            red: "#ff0000",
            rosyBrown: "#bc8f8f",
            royalBlue: "#4169e1",
            saddleBrown: "#8b4513",
            salmon: "#fa8072",
            sandyBrown: "#f4a460",
            seaGreen: "#2e8b57",
            seaShell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            slyBlue: "#87ceeb",
            slateBlue: "#6a5acd",
            slateGray: "#708090",
            snow: "#fffafa",
            springGreen: "#00ff7f",
            steelBlue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whiteSmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowGreen: "#9acd32"
        },
        all: {},
        init: function () {
            return this.all = v.extend({}, this.standard, this.metro), this
        },
        color: function (e, t) {
            return void 0 !== this[t = t || this.PALETTES.ALL][e] && this[t][e]
        },
        palette: function (e) {
            return e = e || this.PALETTES.ALL, Object.keys(this[e])
        },
        expandHexColor: function (e) {
            if ("string" != typeof e) throw new Error("Value is not a string!");
            if ("#" !== e[0] || 4 !== e.length) return "#" === e[0] ? e : "#" + e;
            return "#" + e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
                return t + t + n + n + i + i
            })
        },
        colors: function (e) {
            return e = e || this.PALETTES.ALL, Object.values(this[e])
        },
        random: function (e, t) {
            var n;
            return e = e || i, t = void 0 !== t ? t : 1, n = "#" + ((1 << 24) + (v.random(0, 255) << 16) + (v.random(0, 255) << 8) + v.random(0, 255)).toString(16).slice(1), "hex" === e ? n : this.toColor(n, e, t)
        },
        parse: function (e) {
            var t = e.toLowerCase().trim(), e = t.replace(/[^\d.,]/g, "").split(",").map(function (e) {
                return (-1 < e.indexOf(".") ? parseFloat : parseInt)(e)
            });
            return this.metro[t] ? this.expandHexColor(this.metro[t]) : this.standard[t] ? this.expandHexColor(this.standard[t]) : "#" === t[0] ? this.expandHexColor(t) : 0 === t.indexOf("rgba") && 4 === e.length ? new r(e[0], e[1], e[2], e[3]) : 0 === t.indexOf("rgb") && 3 === e.length ? new h(e[0], e[1], e[2]) : 0 === t.indexOf("cmyk") && 4 === e.length ? new p(e[0], e[1], e[2], e[3]) : 0 === t.indexOf("hsv") && 3 === e.length ? new w(e[0], e[1], e[2]) : 0 === t.indexOf("hsla") && 4 === e.length ? new c(e[0], e[1], e[2], e[3]) : 0 === t.indexOf("hsl") && 3 === e.length ? new l(e[0], e[1], e[2]) : void 0
        },
        createColor: function (e, t) {
            var n;
            return e = e || "hex", "string" == typeof (t = t || "#000000") && (n = this.parse(t)), this.isColor(n) || (n = "#000000"), this.toColor(n, e.toLowerCase())
        },
        isDark: function (e) {
            if (this.isColor(e)) {
                e = this.toRGB(e);
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 < 128
            }
        },
        isLight: function (e) {
            return !this.isDark(e)
        },
        isHSV: function (e) {
            return e instanceof w
        },
        isHSL: function (e) {
            return e instanceof l
        },
        isHSLA: function (e) {
            return e instanceof c
        },
        isRGB: function (e) {
            return e instanceof h
        },
        isRGBA: function (e) {
            return e instanceof r
        },
        isCMYK: function (e) {
            return e instanceof p
        },
        isHEX: function (e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
        },
        isColor: function (e) {
            e = "string" == typeof e ? this.parse(e) : e;
            return !!e && (this.isHEX(e) || this.isRGB(e) || this.isRGBA(e) || this.isHSV(e) || this.isHSL(e) || this.isHSLA(e) || this.isCMYK(e))
        },
        check: function (e, t) {
            if (!this["is" + t.toUpperCase()](e)) throw new Error("Value is not a " + t + " color type!")
        },
        colorType: function (e) {
            return this.isHEX(e) ? i : this.isRGB(e) ? t : this.isRGBA(e) ? d : this.isHSV(e) ? n : this.isHSL(e) ? s : this.isHSLA(e) ? u : this.isCMYK(e) ? a : o
        },
        equal: function (e, t) {
            return !(!this.isColor(e) || !this.isColor(t)) && this.toHEX(e) === this.toHEX(t)
        },
        colorToString: function (e) {
            return e.toString()
        },
        hex2rgb: function (e) {
            if ("string" != typeof e) throw new Error("Value is not a string!");
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.expandHexColor(e)),
                e = [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
            return t ? new h(e[0], e[1], e[2]) : null
        },
        rgb2hex: function (e) {
            return this.check(e, "rgb"), "#" + ((1 << 24) + (e.r << 16) + (e.g << 8) + e.b).toString(16).slice(1)
        },
        rgb2hsv: function (e) {
            this.check(e, "rgb");
            var t = new w, n = e.r / 255, i = e.g / 255, s = e.b / 255, a = Math.max(n, i, s), o = Math.min(n, i, s),
                r = a - o, l = a, e = 0 === a ? 0 : 1 - o / a,
                r = a === o ? 0 : a === n && s <= i ? (i - s) / r * 60 : a === n && i < s ? (i - s) / r * 60 + 360 : a === i ? (s - n) / r * 60 + 120 : a === s ? (n - i) / r * 60 + 240 : 0;
            return t.h = r, t.s = e, t.v = l, t
        },
        hsv2rgb: function (e) {
            var t, n, i;
            this.check(e, "hsv");
            var s = e.h, a = 100 * e.s, o = 100 * e.v, r = (100 - a) * o / 100, a = s % 60 / 60 * (o - r), l = r + a,
                c = o - a;
            switch (Math.floor(s / 60)) {
                case 0:
                    t = o, n = l, i = r;
                    break;
                case 1:
                    t = c, n = o, i = r;
                    break;
                case 2:
                    t = r, n = o, i = l;
                    break;
                case 3:
                    t = r, n = c, i = o;
                    break;
                case 4:
                    t = l, n = r, i = o;
                    break;
                case 5:
                    t = o, n = r, i = c
            }
            return new h(Math.round(255 * t / 100), Math.round(255 * n / 100), Math.round(255 * i / 100))
        },
        hsv2hex: function (e) {
            return this.check(e, "hsv"), this.rgb2hex(this.hsv2rgb(e))
        },
        hex2hsv: function (e) {
            return this.check(e, "hex"), this.rgb2hsv(this.hex2rgb(e))
        },
        rgb2cmyk: function (e) {
            this.check(e, "rgb");
            var t = new p, n = e.r / 255, i = e.g / 255, e = e.b / 255;
            return t.k = Math.min(1 - n, 1 - i, 1 - e), t.c = 1 - t.k == 0 ? 0 : (1 - n - t.k) / (1 - t.k), t.m = 1 - t.k == 0 ? 0 : (1 - i - t.k) / (1 - t.k), t.y = 1 - t.k == 0 ? 0 : (1 - e - t.k) / (1 - t.k), t.c = Math.round(100 * t.c), t.m = Math.round(100 * t.m), t.y = Math.round(100 * t.y), t.k = Math.round(100 * t.k), t
        },
        cmyk2rgb: function (e) {
            return this.check(e, "cmyk"), new h(Math.floor(255 * (1 - e.c / 100) * (1 - e.k / 100)), Math.ceil(255 * (1 - e.m / 100) * (1 - e.k / 100)), Math.ceil(255 * (1 - e.y / 100) * (1 - e.k / 100)))
        },
        hsv2hsl: function (e) {
            var t, n, i;
            return this.check(e, "hsv"), t = e.h, n = (2 - e.s) * e.v, e = e.s * e.v, 0 === n || 0 === (i = n <= 1 ? n : 2 - n) ? e = 0 : e /= i, new l(t, e, n /= 2)
        },
        hsl2hsv: function (e) {
            var t, n, i;
            return this.check(e, "hsl"), t = e.h, e = ((i = 2 * e.l) + (n = e.s * (i <= 1 ? i : 2 - i))) / 2, new w(t, n = i + n === 0 ? 0 : 2 * n / (i + n), e)
        },
        rgb2websafe: function (e) {
            return this.check(e, "rgb"), new h(51 * Math.round(e.r / 51), 51 * Math.round(e.g / 51), 51 * Math.round(e.b / 51))
        },
        rgba2websafe: function (e) {
            this.check(e, "rgba");
            var t = this.rgb2websafe(e);
            return new r(t.r, t.g, t.b, e.a)
        },
        hex2websafe: function (e) {
            return this.check(e, "hex"), this.rgb2hex(this.rgb2websafe(this.hex2rgb(e)))
        },
        hsv2websafe: function (e) {
            return this.check(e, "hsv"), this.rgb2hsv(this.rgb2websafe(this.toRGB(e)))
        },
        hsl2websafe: function (e) {
            return this.check(e, "hsl"), this.hsv2hsl(this.rgb2hsv(this.rgb2websafe(this.toRGB(e))))
        },
        cmyk2websafe: function (e) {
            return this.check(e, "cmyk"), this.rgb2cmyk(this.rgb2websafe(this.cmyk2rgb(e)))
        },
        websafe: function (e) {
            return this.isHEX(e) ? this.hex2websafe(e) : this.isRGB(e) ? this.rgb2websafe(e) : this.isRGBA(e) ? this.rgba2websafe(e) : this.isHSV(e) ? this.hsv2websafe(e) : this.isHSL(e) ? this.hsl2websafe(e) : this.isCMYK(e) ? this.cmyk2websafe(e) : e
        },
        toColor: function (e, t, n) {
            var i;
            switch (t.toLowerCase()) {
                case"hex":
                    i = this.toHEX(e);
                    break;
                case"rgb":
                    i = this.toRGB(e);
                    break;
                case"rgba":
                    i = this.toRGBA(e, n);
                    break;
                case"hsl":
                    i = this.toHSL(e);
                    break;
                case"hsla":
                    i = this.toHSLA(e, n);
                    break;
                case"hsv":
                    i = this.toHSV(e);
                    break;
                case"cmyk":
                    i = this.toCMYK(e);
                    break;
                default:
                    i = e
            }
            return i
        },
        toHEX: function (e) {
            e = "string" == typeof e ? this.parse(e) : e;
            if (!e) throw new Error("Unknown color format!");
            return "string" == typeof e ? e : this.rgb2hex(this.toRGB(e))
        },
        toRGB: function (e) {
            e = "string" == typeof e ? this.parse(e) : e;
            if (this.isRGB(e)) return e;
            if (this.isRGBA(e)) return new h(e.r, e.g, e.b);
            if (this.isHSV(e)) return this.hsv2rgb(e);
            if (this.isHSL(e)) return this.hsv2rgb(this.hsl2hsv(e));
            if (this.isHSLA(e)) return this.hsv2rgb(this.hsl2hsv(e));
            if (this.isHEX(e)) return this.hex2rgb(e);
            if (this.isCMYK(e)) return this.cmyk2rgb(e);
            throw new Error("Unknown color format!")
        },
        toRGBA: function (e, t) {
            if (this.isRGBA(e)) return t && (e.a = t), e;
            e = this.toRGB(e);
            return new r(e.r, e.g, e.b, t)
        },
        toHSV: function (e) {
            return this.rgb2hsv(this.toRGB(e))
        },
        toHSL: function (e) {
            return this.hsv2hsl(this.rgb2hsv(this.toRGB(e)))
        },
        toHSLA: function (e, t) {
            if (this.isHSLA(e)) return t && (e.a = t), e;
            e = this.hsv2hsl(this.rgb2hsv(this.toRGB(e)));
            return e.a = t, new c(e.h, e.s, e.l, e.a)
        },
        toCMYK: function (e) {
            return this.rgb2cmyk(this.toRGB(e))
        },
        grayscale: function (e) {
            var t = this.toRGB(e), e = this.colorType(e).toLowerCase(),
                t = Math.round(.2125 * t.r + .7154 * t.g + .0721 * t.b), t = new h(t, t, t);
            return this.toColor(t, e)
        },
        darken: function (e, t) {
            return t = t || 10, this.lighten(e, -1 * Math.abs(t))
        },
        lighten: function (e, t) {
            var n, i, s, a, o, r, l = "string" == typeof e ? this.parse(e) : e, c = 0 < (t = t || 10),
                e = this.colorType(l).toLowerCase();
            for (e !== d && e !== u || (i = l.a); s = this.toHEX(l), a = t, r = o = void 0, o = s.slice(1), r = parseInt(o, 16), 255 < (s = (r >> 16) + a) ? s = 255 : s < 0 && (s = 0), 255 < (o = (r >> 8 & 255) + a) ? o = 255 : o < 0 && (o = 0), 255 < (a = (255 & r) + a) ? a = 255 : a < 0 && (a = 0), n = "#" + (a | o << 8 | s << 16).toString(16), c ? t-- : t++, n.length < 7;) ;
            return this.toColor(n, e, i)
        },
        hueShift: function (e, t, n, i) {
            var s, a = this.toHSV(e), o = this.colorType(e).toLowerCase(), r = a.h, n = n || 0, i = i || 0;
            for (r += t || 0; 360 <= r;) r -= 360;
            for (; r < 0;) r += 360;
            return a.h = r, a.s += n, 1 < a.s && (a.s = 1), a.s < 0 && (a.s = 0), a.v += i, 1 < a.v && (a.v = 1), a.v < 0 && (a.v = 0), o !== d && o !== u || (s = e.a), this.toColor(a, o, s)
        },
        createScheme: function (e, t, n, i) {
            var s, a, o = v.extend({}, g, i), r = [], l = this, c = this.toHSV(e), d = c.h, u = c.s, h = c.v;
            if (!1 === this.isHSV(c)) return console.warn("The value is a not supported color format!"), !1;

            function p(e, t, n) {
                return Math.max(t, Math.min(e, n))
            }

            function f(e, t, n) {
                return e < t ? t : n < e ? n : e
            }

            function m(e, t) {
                for (e += t; 360 <= e;) e -= 360;
                for (; e < 0;) e += 360;
                return e
            }

            switch (t) {
                case"monochromatic":
                case"mono":
                    if (1 === o.algorithm) (a = this.hsv2rgb(c)).r = f(Math.round(a.r + (255 - a.r) * o.tint1), 0, 255), a.g = f(Math.round(a.g + (255 - a.g) * o.tint1), 0, 255), a.b = f(Math.round(a.b + (255 - a.b) * o.tint1), 0, 255), r.push(this.rgb2hsv(a)), (a = this.hsv2rgb(c)).r = f(Math.round(a.r + (255 - a.r) * o.tint2), 0, 255), a.g = f(Math.round(a.g + (255 - a.g) * o.tint2), 0, 255), a.b = f(Math.round(a.b + (255 - a.b) * o.tint2), 0, 255), r.push(this.rgb2hsv(a)), r.push(c), (a = this.hsv2rgb(c)).r = f(Math.round(a.r * o.shade1), 0, 255), a.g = f(Math.round(a.g * o.shade1), 0, 255), a.b = f(Math.round(a.b * o.shade1), 0, 255), r.push(this.rgb2hsv(a)), (a = this.hsv2rgb(c)).r = f(Math.round(a.r * o.shade2), 0, 255), a.g = f(Math.round(a.g * o.shade2), 0, 255), a.b = f(Math.round(a.b * o.shade2), 0, 255), r.push(this.rgb2hsv(a)); else if (2 === o.algorithm) for (r.push(c), s = 1; s <= o.distance; s++) h = p(h - o.step, 0, 1), u = p(u - o.step, 0, 1), r.push(new w(d, u, h)); else if (3 === o.algorithm) for (r.push(c), s = 1; s <= o.distance; s++) h = p(h - o.step, 0, 1), r.push(new w(d, u, h)); else h = p(c.v + 2 * o.step, 0, 1), r.push(new w(d, u, h)), h = p(c.v + o.step, 0, 1), r.push(new w(d, u, h)), r.push(c), u = c.s, h = c.v, h = p(c.v - o.step, 0, 1), r.push(new w(d, u, h)), h = p(c.v - 2 * o.step, 0, 1), r.push(new w(d, u, h));
                    break;
                case"complementary":
                case"complement":
                case"comp":
                    r.push(c), d = m(c.h, 180), r.push(new w(d, u, h));
                    break;
                case"double-complementary":
                case"double-complement":
                case"double":
                    r.push(c), d = m(d, 180), r.push(new w(d, u, h)), d = m(d, o.angle), r.push(new w(d, u, h)), d = m(d, 180), r.push(new w(d, u, h));
                    break;
                case"analogous":
                case"analog":
                    d = m(d, o.angle), r.push(new w(d, u, h)), r.push(c), d = m(c.h, 0 - o.angle), r.push(new w(d, u, h));
                    break;
                case"triadic":
                case"triad":
                    for (r.push(c), s = 1; s < 3; s++) d = m(d, 120), r.push(new w(d, u, h));
                    break;
                case"tetradic":
                case"tetra":
                    r.push(c), d = m(c.h, 180), r.push(new w(d, u, h)), d = m(c.h, -1 * o.angle), r.push(new w(d, u, h)), d = m(d, 180), r.push(new w(d, u, h));
                    break;
                case"square":
                    for (r.push(c), s = 1; s < 4; s++) d = m(d, 90), r.push(new w(d, u, h));
                    break;
                case"split-complementary":
                case"split-complement":
                case"split":
                    d = m(d, 180 - o.angle), r.push(new w(d, u, h)), r.push(c), d = m(c.h, 180 + o.angle), r.push(new w(d, u, h));
                    break;
                default:
                    console.warn("Unknown scheme name")
            }
            return function (e, t) {
                var n;
                switch (t) {
                    case"hex":
                        n = e.map(function (e) {
                            return l.toHEX(e)
                        });
                        break;
                    case"rgb":
                        n = e.map(function (e) {
                            return l.toRGB(e)
                        });
                        break;
                    case"rgba":
                        n = e.map(function (e) {
                            return l.toRGBA(e, o.alpha)
                        });
                        break;
                    case"hsl":
                        n = e.map(function (e) {
                            return l.toHSL(e)
                        });
                        break;
                    case"hsla":
                        n = e.map(function (e) {
                            return l.toHSLA(e, o.alpha)
                        });
                        break;
                    case"cmyk":
                        n = e.map(function (e) {
                            return l.toCMYK(e)
                        });
                        break;
                    default:
                        n = e
                }
                return n
            }(r, n)
        },
        getScheme: function () {
            return this.createScheme.apply(this, arguments)
        },
        mix: function (e, t, n) {
            var i = "string" == typeof e ? this.parse(e) : e, e = "string" == typeof t ? this.parse(t) : t,
                t = this.toRGBA(i), i = this.toRGBA(e), e = new r, n = ("" + n).toLowerCase() || "hex";
            return e.r = Math.round((t.r + i.r) / 2), e.g = Math.round((t.g + i.g) / 2), e.b = Math.round((t.b + i.b) / 2), e.a = Math.round((t.a + i.a) / 2), this["to" + n.toUpperCase()](e)
        }
    };
    f.prototype = {
        _setValue: function (e) {
            e = "string" == typeof e ? m.parse(e) : e;
            m.isColor(e) || (e = "#000000"), this._value = e, this._type = m.colorType(this._value)
        }, _setOptions: function (e) {
            e = "object" == typeof e ? e : {}, this._options = v.extend({}, g, e)
        }, getOptions: function () {
            return this._options
        }, setOptions: function (e) {
            this._setOptions(e)
        }, setValue: function (e) {
            this._setValue(e)
        }, getValue: function () {
            return this._value
        }, channel: function (e, t) {
            var n = this._type.toUpperCase();
            return -1 < ["red", "green", "blue"].indexOf(e) && (this.toRGB(), this._value[e[0]] = t, this["to" + n]()), "alpha" === e && this._value.a && (this._value.a = t), -1 < ["hue", "saturation", "value"].indexOf(e) && (this.toHSV(), this._value[e[0]] = t, this["to" + n]()), -1 < ["lightness"].indexOf(e) && (this.toHSL(), this._value[e[0]] = t, this["to" + n]()), -1 < ["cyan", "magenta", "yellow", "black"].indexOf(e) && (this.toCMYK(), this._value[e[0]] = t, this["to" + n]()), this
        }, channels: function (e) {
            var n = this;
            return v.each(e, function (e, t) {
                n.channel(e, t)
            }), this
        }, toRGB: function () {
            return this._value = m.toRGB(this._value), this._type = t, this
        }, rgb: function () {
            return this._value ? new f(m.toRGB(this._value)) : void 0
        }, toRGBA: function (e) {
            return m.isRGBA(this._value) && !e || (this._value = m.toRGBA(this._value, e)), this._type = d, this
        }, rgba: function (e) {
            return this._value ? new f(m.toRGBA(this._value, e)) : void 0
        }, toHEX: function () {
            return this._value = m.toHEX(this._value), this._type = i, this
        }, hex: function () {
            return this._value ? new f(m.toHEX(this._value)) : void 0
        }, toHSV: function () {
            return this._value = m.toHSV(this._value), this._type = n, this
        }, hsv: function () {
            return this._value ? new f(m.toHSV(this._value)) : void 0
        }, toHSL: function () {
            return this._value = m.toHSL(this._value), this._type = s, this
        }, hsl: function () {
            return this._value ? new f(m.toHSL(this._value)) : void 0
        }, toHSLA: function (e) {
            return m.isHSLA(this._value) && !e || (this._value = m.toHSLA(this._value, e)), this._type = u, this
        }, hsla: function (e) {
            return this._value ? new f(m.toHSLA(this._value, e)) : void 0
        }, toCMYK: function () {
            return this._value = m.toCMYK(this._value), this._type = a, this
        }, cmyk: function () {
            return this._value ? new f(m.toCMYK(this._value)) : void 0
        }, toWebsafe: function () {
            return this._value = m.websafe(this._value), this._type = m.colorType(this._value), this
        }, websafe: function () {
            return this._value ? new f(m.websafe(this._value)) : void 0
        }, toString: function () {
            return this._value ? m.colorToString(this._value) : "undefined"
        }, toDarken: function (e) {
            return this._value = m.darken(this._value, e), this
        }, darken: function (e) {
            return new f(m.darken(this._value, e))
        }, toLighten: function (e) {
            return this._value = m.lighten(this._value, e), this
        }, lighten: function (e) {
            return new f(m.lighten(this._value, e))
        }, isDark: function () {
            return this._value ? m.isDark(this._value) : void 0
        }, isLight: function () {
            return this._value ? m.isLight(this._value) : void 0
        }, toHueShift: function (e, t, n) {
            return this._value = m.hueShift(this._value, e, t, n), this
        }, hueShift: function (e, t, n) {
            return new f(m.hueShift(this._value, e, t, n))
        }, toGrayscale: function () {
            return this._value = m.grayscale(this._value, this._type), this
        }, grayscale: function () {
            return new f(m.grayscale(this._value, this._type))
        }, type: function () {
            return m.colorType(this._value)
        }, createScheme: function (e, t, n) {
            return this._value ? m.createScheme(this._value, e, t, n) : void 0
        }, getScheme: function () {
            return this.createScheme.apply(this, arguments)
        }, equal: function (e) {
            return m.equal(this._value, e)
        }, toMix: function (e) {
            return this._value = m.mix(this._value, e, this._type), this
        }, mix: function (e) {
            return new f(m.mix(this._value, e, this._type))
        }
    }, e.colors = m.init(), window.Color = e.Color = f, window.ColorPrimitive = e.colorPrimitive = {
        RGB: h,
        RGBA: r,
        HSV: w,
        HSL: l,
        HSLA: c,
        CMYK: p
    }, !0 === window.METRO_GLOBAL_COMMON && (window.Colors = e.colors)
}(Metro, m4q), function (a, o) {
    "use strict";
    var r = a.utils, i = {
        name: "cookies_accepted",
        template: null,
        templateSource: null,
        acceptButton: ".cookie-accept-button",
        cancelButton: ".cookie-cancel-button",
        message: "Our website uses cookies to monitor traffic on our website and ensure that we can provide our customers with the best online experience possible.",
        duration: "30days",
        clsContainer: "",
        clsMessage: "",
        clsButtons: "",
        clsAcceptButton: "alert",
        clsCancelButton: "",
        onAccept: a.noop,
        onDecline: a.noop
    };
    a.cookieDisclaimer = {
        init: function (e) {
            var t = this, n = a.cookie;
            this.options = o.extend({}, i, e), this.disclaimer = o("<div>"), n.getCookie(this.options.name) || (this.options.template ? o.get(this.options.template).then(function (e) {
                t.create(e)
            }) : this.options.templateSource ? this.create(o(this.options.templateSource)) : this.create())
        }, create: function (e) {
            var n = a.cookie, i = this.options, s = this.disclaimer;
            s.addClass("cookie-disclaimer-block").addClass(i.clsContainer), e ? e instanceof o ? s.append(e) : s.html(e) : (e = o("<div>").addClass("cookie-disclaimer-actions").addClass(i.clsButtons).append(o("<button>").addClass("button cookie-accept-button").addClass(i.clsAcceptButton).html("Accept")).append(o("<button>").addClass("button cookie-cancel-button").addClass(i.clsCancelButton).html("Cancel")), s.html(o("<div>").addClass(i.clsMessage).html(i.message)).append(o("<hr>").addClass("thin")).append(e)), s.appendTo(o("body")), s.on(a.events.click, i.acceptButton, function () {
                var t = 0, e = ("" + i.duration).toArray(" ");
                o.each(e, function () {
                    var e = "" + this;
                    e.includes("day") ? t += 24 * parseInt(e) * 60 * 60 * 1e3 : e.includes("hour") ? t += 60 * parseInt(e) * 60 * 1e3 : e.includes("min") ? t += 60 * parseInt(e) * 1e3 : e.includes("sec") ? t += 1e3 * parseInt(e) : t += parseInt(e)
                }), n.setCookie(i.name, !0, t), r.exec(i.onAccept), s.remove()
            }), s.on(a.events.click, i.cancelButton, function () {
                r.exec(i.onDecline), s.remove()
            })
        }
    }
}(Metro, m4q), function (e, a) {
    "use strict";
    var o = {path: "/", expires: null, maxAge: null, domain: null, secure: !1, samesite: null};
    e.cookieSetup = function (e) {
        o = a.extend({}, o, e)
    }, window.metroCookieSetup, e.cookieSetup(window.metroCookieSetup), e.cookie = {
        getCookies: function () {
            var e = document.cookie.toArray(";"), t = {};
            return a.each(e, function () {
                var e = this.split("=");
                t[e[0]] = e[1]
            }), t
        }, getCookie: function (e) {
            for (var t, n = encodeURIComponent(e) + "=", i = document.cookie.toArray(";"), s = 0; s < i.length; s++) {
                for (t = i[s]; " " === t.charAt(0);) t = t.substring(1, t.length);
                if (0 === t.indexOf(n)) return decodeURIComponent(t.substring(n.length, t.length))
            }
            return null
        }, setCookie: function (e, t, n) {
            var i = encodeURIComponent(e), e = encodeURIComponent(t), s = [],
                n = n && "object" != typeof n ? ((t = new Date).setTime(t.getTime() + parseInt(n)), a.extend({}, o, {expires: t.toUTCString()})) : a.extend({}, o, n);
            a.each(n, function (e, t) {
                "secure" !== e && t && s.push(a.dashedName(e) + "=" + t), "secure" === e && !0 === t && s.push("secure")
            }), document.cookie = i + "=" + e + "; " + s.join("; ")
        }, delCookie: function (e) {
            this.setCookie(e, !1, {maxAge: -1})
        }
    }
}(Metro, m4q), function (s, _) {
    "use strict";
    var o = s.utils, n = {
        countdownDeferred: 0,
        stopOnBlur: !0,
        animate: "none",
        animationFunc: "linear",
        inputFormat: null,
        locale: METRO_LOCALE,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        date: null,
        start: !0,
        clsCountdown: "",
        clsPart: "",
        clsZero: "",
        clsAlarm: "",
        clsDays: "",
        clsHours: "",
        clsMinutes: "",
        clsSeconds: "",
        onAlarm: s.noop,
        onTick: s.noop,
        onZero: s.noop,
        onBlink: s.noop,
        onCountdownCreate: s.noop
    };
    s.countdownSetup = function (e) {
        n = _.extend({}, n, e)
    }, window.metroCountdownSetup, s.countdownSetup(window.metroCountdownSetup), s.Component("countdown", {
        init: function (e, t) {
            return this._super(t, e, n, {
                locale: s.locales["en-US"],
                breakpoint: (new Date).getTime(),
                blinkInterval: null,
                tickInterval: null,
                zeroDaysFired: !1,
                zeroHoursFired: !1,
                zeroMinutesFired: !1,
                zeroSecondsFired: !1,
                fontSize: parseInt(o.getStyleOne(t, "font-size")),
                current: {d: 0, h: 0, m: 0, s: 0},
                inactiveTab: !1,
                id: o.elementId("countdown")
            }), this
        }, _create: function () {
            var e = this.options;
            this.locale = void 0 !== s.locales[e.locale] ? s.locales[e.locale] : s.locales["en-US"], this._build(), this._createEvents()
        }, _setBreakpoint: function () {
            var e = this.options;
            this.breakpoint = (new Date).getTime(), o.isValue(e.date) && o.isDate(e.date, e.inputFormat) && (this.breakpoint = (o.isValue(e.inputFormat) ? e.date.toDate(e.inputFormat) : new Date(e.date)).getTime()), 0 < parseInt(e.days) && (this.breakpoint += 864e5 * parseInt(e.days)), 0 < parseInt(e.hours) && (this.breakpoint += 36e5 * parseInt(e.hours)), 0 < parseInt(e.minutes) && (this.breakpoint += 6e4 * parseInt(e.minutes)), 0 < parseInt(e.seconds) && (this.breakpoint += 1e3 * parseInt(e.seconds))
        }, _build: function () {
            var n, i = this, s = this.element, a = this.options, e = (new Date).getTime();
            s.attr("id") || s.attr("id", o.elementId("countdown")), o.isValue(s.attr("id")) || s.attr("id", o.elementId("countdown")), s.addClass("countdown").addClass(a.clsCountdown), this._setBreakpoint(), n = Math.round((i.breakpoint - e) / 864e5), _.each(["days", "hours", "minutes", "seconds"], function () {
                var e = _("<div>").addClass("part " + this).addClass(a.clsPart).attr("data-label", i.locale.calendar.time[this]).appendTo(s);
                if ("days" === this && e.addClass(a.clsDays), "hours" === this && e.addClass(a.clsHours), "minutes" === this && e.addClass(a.clsMinutes), "seconds" === this && e.addClass(a.clsSeconds), _("<div>").addClass("digit").appendTo(e), _("<div>").addClass("digit").appendTo(e), "days" === this && 100 <= n) for (var t = 0; t < String(Math.round(n / 100)).length; t++) _("<div>").addClass("digit").appendTo(e)
            }), (e = s.find(".digit")).append(_("<span class='digit-placeholder'>").html("0")), e.append(_("<span class='digit-value'>").html("0")), this._fireEvent("countdown-create", {element: s}), !0 === a.start ? this.start() : this.tick()
        }, _createEvents: function () {
            var e = this;
            _(document).on("visibilitychange", function () {
                document.hidden ? e.pause() : e.resume()
            }, {ns: this.id})
        }, blink: function () {
            this.element.toggleClass("blink"), this._fireEvent("blink", {time: this.current})
        }, tick: function () {
            var e = this.element, t = this.options, n = (new Date).getTime(), i = e.find(".days"), s = e.find(".hours"),
                a = e.find(".minutes"), o = e.find(".seconds"), r = Math.floor((this.breakpoint - n) / 1e3);
            if (r <= -1) return this.stop(), e.addClass(t.clsAlarm), void this._fireEvent("alarm", {time: n});
            r -= 86400 * (n = Math.floor(r / 86400)), this.current.d !== n && (this.current.d = n, this.draw("days", n)), 0 === n && !1 === this.zeroDaysFired && (this.zeroDaysFired = !0, i.addClass(t.clsZero), this._fireEvent("zero", {
                part: "days",
                value: i
            })), r -= 3600 * (i = Math.floor(r / 3600)), this.current.h !== i && (this.current.h = i, this.draw("hours", i)), 0 === n && 0 === i && !1 === this.zeroHoursFired && (this.zeroHoursFired = !0, s.addClass(t.clsZero), this._fireEvent("zero", {
                part: "hours",
                value: s
            })), r -= 60 * (s = Math.floor(r / 60)), this.current.m !== s && (this.current.m = s, this.draw("minutes", s)), 0 === n && 0 === i && 0 === s && !1 === this.zeroMinutesFired && (this.zeroMinutesFired = !0, a.addClass(t.clsZero), this._fireEvent("zero", {
                part: "minutes",
                value: a
            })), r = Math.floor(r), this.current.s !== r && (this.current.s = r, this.draw("seconds", r)), 0 === n && 0 === i && 0 === s && 0 === r && !1 === this.zeroSecondsFired && (this.zeroSecondsFired = !0, o.addClass(t.clsZero), this._fireEvent("zero", {
                part: "seconds",
                value: o
            })), this._fireEvent("tick", {days: n, hours: i, minutes: s, seconds: r})
        }, draw: function (e, t) {
            var n, i, s, a, o, r, l, c, d, u, h, p, f, m, v, g, w, b, C = this.element, y = this.options;
            for (1 === (t = "" + t).length && (t = "0" + t), o = t.length, i = (n = C.find("." + e + " .digit:not(-old-digit)")).length, r = 0; r < o; r++) if (a = n.eq(i - 1).find(".digit-value"), s = Math.floor(parseInt(t) / Math.pow(10, r)) % 10, i--, parseInt(a.text()) !== s) switch (("" + y.animate).toLowerCase()) {
                case"slide":
                    g = s, b = w = void 0, b = (v = a).height(), v.siblings("-old-digit").remove(), (w = v.clone().appendTo(v.parent())).css({top: -1 * b + "px"}), v.addClass("-old-digit").animate({
                        draw: {
                            top: b,
                            opacity: 0
                        }, dur: 900, ease: y.animationFunc, onDone: function () {
                            _(this).remove()
                        }
                    }), w.html(g).animate({draw: {top: 0, opacity: 1}, dur: 900, ease: y.animationFunc});
                    break;
                case"fade":
                    f = s, m = void 0, (p = a).siblings("-old-digit").remove(), (m = p.clone().appendTo(p.parent())).css({opacity: 0}), p.addClass("-old-digit").animate({
                        draw: {opacity: 0},
                        dur: 450,
                        ease: y.animationFunc,
                        onDone: function () {
                            _(this).remove()
                        }
                    }), m.html(f).animate({draw: {opacity: 1}, dur: 900, ease: y.animationFunc});
                    break;
                case"zoom":
                    c = s, h = u = d = void 0, u = (l = a).height(), h = parseInt(l.style("font-size")), l.siblings("-old-digit").remove(), (d = l.clone().appendTo(l.parent())).css({
                        top: 0,
                        left: 0,
                        opacity: 1
                    }), l.addClass("-old-digit").animate({
                        draw: {top: u, opacity: 0, fontSize: 0},
                        dur: 900,
                        ease: y.animationFunc,
                        onDone: function () {
                            _(this).remove()
                        }
                    }), d.html(c).animate({
                        draw: {top: 0, opacity: 1, fontSize: [0, h]},
                        dur: 900,
                        ease: y.animationFunc
                    });
                    break;
                default:
                    a.html(s)
            }
        }, start: function () {
            var e = this, t = this.element;
            !1 !== t.data("paused") && (clearInterval(this.blinkInterval), clearInterval(this.tickInterval), t.data("paused", !1), this._setBreakpoint(), this.tick(), this.blinkInterval = setInterval(function () {
                e.blink()
            }, 500), this.tickInterval = setInterval(function () {
                e.tick()
            }, 1e3))
        }, stop: function () {
            var e = this.element;
            clearInterval(this.blinkInterval), clearInterval(this.tickInterval), e.data("paused", !0), e.find(".digit").html("0"), this.current = {
                d: 0,
                h: 0,
                m: 0,
                s: 0
            }
        }, pause: function () {
            clearInterval(this.blinkInterval), clearInterval(this.tickInterval), this.element.data("paused", !0)
        }, resume: function () {
            var e = this;
            this.element.data("paused", !1), this.blinkInterval = setInterval(function () {
                e.blink()
            }, 500), this.tickInterval = setInterval(function () {
                e.tick()
            }, 1e3)
        }, reset: function () {
            var e = this, t = this.element, n = this.options;
            clearInterval(this.blinkInterval), clearInterval(this.tickInterval), t.find(".part").removeClass(n.clsZero), t.find(".digit").html("0"), this._setBreakpoint(), t.data("paused", !1), this.tick(), this.blinkInterval = setInterval(function () {
                e.blink()
            }, 500), this.tickInterval = setInterval(function () {
                e.tick()
            }, 1e3)
        }, togglePlay: function () {
            !0 === this.element.attr("data-pause") ? this.pause() : this.start()
        }, isPaused: function () {
            return this.element.data("paused")
        }, getBreakpoint: function (e) {
            return !0 === e ? new Date(this.breakpoint) : this.breakpoint
        }, getLeft: function () {
            var e = (new Date).getTime(), e = Math.floor(this.breakpoint - e);
            return {
                days: Math.round(e / 864e5),
                hours: Math.round(e / 36e5),
                minutes: Math.round(e / 6e4),
                seconds: Math.round(e / 1e3)
            }
        }, i18n: function (e) {
            var t = this, n = this.element, i = this.options;
            return void 0 === e ? i.locale : void 0 !== s.locales[e] && (i.locale = e, this.locale = s.locales[i.locale], void _.each(["days", "hours", "minutes", "seconds"], function () {
                var e = ".part." + this;
                n.find(e).attr("data-label", t.locale.calendar.time[this])
            }))
        }, changeAttrLocale: function () {
            var e = this.element.attr("data-locale");
            this.i18n(e)
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-pause":
                    this.togglePlay();
                    break;
                case"data-locale":
                    this.changeAttrLocale()
            }
        }, destroy: function () {
            return clearInterval(this.blinkInterval), clearInterval(this.tickInterval), _(document).off("visibilitychange", {ns: this.id}), this.element
        }
    })
}(Metro, m4q), function (e, i) {
    "use strict";
    var a = e.utils, n = {
        startOnViewport: !0,
        counterDeferred: 0,
        duration: 2e3,
        value: 0,
        from: 0,
        timeout: 0,
        delimiter: ",",
        prefix: "",
        suffix: "",
        onStart: e.noop,
        onStop: e.noop,
        onTick: e.noop,
        onCounterCreate: e.noop
    };
    e.counterSetup = function (e) {
        n = i.extend({}, n, e)
    }, window.metroCounterSetup, e.counterSetup(window.metroCounterSetup), e.Component("counter", {
        init: function (e, t) {
            return this._super(t, e, n, {numbers: [], html: i(t).html(), started: !1, id: a.elementId("counter")}), this
        }, _create: function () {
            this._createEvents(), this._fireEvent("counter-create"), this._run()
        }, _createEvents: function () {
            var e = this, t = this.element, n = this.options;
            i.window().on("scroll", function () {
                !0 === n.startOnViewport && a.inViewport(t[0]) && !e.started && e.start()
            }, {ns: this.id})
        }, _run: function () {
            var e = this.element, t = this.options;
            !(this.started = !1) === t.startOnViewport && !a.inViewport(e[0]) || this.start()
        }, startInViewport: function (e, t) {
            var n = this.options;
            a.isValue(t) && (n.from = +t), a.isValue(e) && (n.value = +e), this._run()
        }, start: function (e, t) {
            var n = this, i = this.element, s = this.options;
            a.isValue(t) && (s.from = +t), a.isValue(e) && (s.value = +e), this.started = !0, this._fireEvent("start"), i.animate({
                draw: {innerHTML: [s.from, s.value]},
                defer: s.timeout,
                dur: s.duration,
                onFrame: function () {
                    n._fireEvent("tick", {value: +this.innerHTML}), this.innerHTML = s.prefix + Number(this.innerHTML).format(0, 0, s.delimiter) + s.suffix
                },
                onDone: function () {
                    n._fireEvent("stop")
                }
            })
        }, reset: function () {
            this.started = !1, this.element.html(this.html)
        }, changeAttribute: function (e, t) {
            var n = this.options;
            "data-value" === e && (n.value = +t), "data-from" === e && (n.from = +t)
        }, destroy: function () {
            return i.window().off("scroll", {ns: this.id}), this.element
        }
    })
}(Metro, m4q), function (l, c) {
    "use strict";
    var d = l.utils, n = {
        cubeDeferred: 0,
        rules: null,
        color: null,
        flashColor: null,
        flashInterval: 1e3,
        numbers: !1,
        offBefore: !0,
        attenuation: .3,
        stopOnBlur: !1,
        cells: 4,
        margin: 8,
        showAxis: !1,
        axisStyle: "arrow",
        cellClick: !1,
        autoRestart: 5e3,
        clsCube: "",
        clsCell: "",
        clsSide: "",
        clsSideLeft: "",
        clsSideRight: "",
        clsSideTop: "",
        clsSideLeftCell: "",
        clsSideRightCell: "",
        clsSideTopCell: "",
        clsAxis: "",
        clsAxisX: "",
        clsAxisY: "",
        clsAxisZ: "",
        custom: l.noop,
        onTick: l.noop,
        onCubeCreate: l.noop
    };
    l.cubeSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroCubeSetup, l.cubeSetup(window.metroCubeSetup), l.cubeDefaultRules = [{
        on: {
            top: [16],
            left: [4],
            right: [1]
        }, off: {top: [13, 4], left: [1, 16], right: [13, 4]}
    }, {
        on: {top: [12, 15], left: [3, 8], right: [2, 5]},
        off: {top: [9, 6, 3], left: [5, 10, 15], right: [14, 11, 8]}
    }, {
        on: {top: [11], left: [7], right: [6]},
        off: {top: [1, 2, 5], left: [9, 13, 14], right: [15, 12, 16]}
    }, {on: {top: [8, 14], left: [2, 12], right: [9, 3]}, off: {top: [16], left: [4], right: [1]}}, {
        on: {
            top: [10, 7],
            left: [6, 11],
            right: [10, 7]
        }, off: {top: [12, 15], left: [3, 8], right: [2, 5]}
    }, {
        on: {top: [13, 4], left: [1, 16], right: [13, 4]},
        off: {top: [11], left: [7], right: [6]}
    }, {
        on: {top: [9, 6, 3], left: [5, 10, 15], right: [14, 11, 8]},
        off: {top: [8, 14], left: [2, 12], right: [9, 3]}
    }, {
        on: {top: [1, 2, 5], left: [9, 13, 14], right: [15, 12, 16]},
        off: {top: [10, 7], left: [6, 11], right: [10, 7]}
    }], l.Component("cube", {
        init: function (e, t) {
            return this._super(t, e, n, {
                id: d.elementId("cube"),
                rules: null,
                interval: !1,
                ruleInterval: !1,
                running: !1,
                intervals: []
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            null === t.rules ? this.rules = l.cubeDefaultRules : this._parseRules(t.rules), this._createCube(), this._createEvents(), this._fireEvent("cube-create", {element: e})
        }, _parseRules: function (e) {
            if (null == e) return !1;
            if (d.isObject(e)) return this.rules = d.isObject(e), !0;
            try {
                return this.rules = JSON.parse(e), !0
            } catch (e) {
                return console.warn("Unknown or empty rules for cell flashing!"), !1
            }
        }, _createCube: function () {
            var i = this.element, s = this.options, e = d.elementId("cube"), a = Math.pow(s.cells, 2);
            i.addClass("cube").addClass(s.clsCube), i.attr("id") || i.attr("id", e), this.id = i.attr("id"), this._createCssForFlashColor(), this._createCssForCellSize(), c.each(["left", "right", "top"], function () {
                var e, t, n = c("<div>").addClass("side " + this + "-side").addClass(s.clsSide).appendTo(i);
                for ("left" === this && n.addClass(s.clsSideLeft), "right" === this && n.addClass(s.clsSideRight), "top" === this && n.addClass(s.clsSideTop), t = 0; t < a; t++) (e = c("<div>").addClass("cube-cell").addClass("cell-id-" + (t + 1)).addClass(s.clsCell)).data("id", t + 1).data("side", this), e.appendTo(n), !0 === s.numbers && e.html(t + 1)
            });
            e = i.find(".cube-cell");
            null !== s.color && (l.colors.isColor(s.color) ? e.css({
                backgroundColor: s.color,
                borderColor: s.color
            }) : e.addClass(s.color));
            c.each(["x", "y", "z"], function () {
                var e = c("<div>").addClass("axis " + s.axisStyle).addClass("axis-" + this).addClass(s.clsAxis);
                "x" === this && e.addClass(s.clsAxisX), "y" === this && e.addClass(s.clsAxisY), "z" === this && e.addClass(s.clsAxisZ), e.appendTo(i)
            }), !1 === s.showAxis && i.find(".axis").hide(), this._run()
        }, _run: function () {
            var e, t = this, n = this.element, i = this.options;
            clearInterval(this.interval), n.find(".cube-cell").removeClass("light"), i.custom !== l.noop ? d.exec(i.custom, [n]) : (n.find(".cube-cell").removeClass("light"), t._start(), e = d.isObject(this.rules) ? d.objectLength(this.rules) : 0, this.interval = setInterval(function () {
                t._start()
            }, e * i.flashInterval))
        }, _createCssForCellSize: function () {
            var e, t = this.element, n = this.options, i = l.sheet;
            8 === n.margin && 4 === n.cells || (e = parseInt(d.getStyleOne(t, "width")), e = Math.ceil((e / 2 - n.margin * n.cells * 2) / n.cells), d.addCssRule(i, "#" + t.attr("id") + " .side .cube-cell", "width: " + e + "px!important; height: " + e + "px!important; margin: " + n.margin + "px!important;"))
        }, _createCssForFlashColor: function () {
            var e, t, n, i = this.element, s = this.options, a = l.sheet, o = [], r = [];
            if (null !== s.flashColor) {
                for (e = "0 0 10px " + l.colors.toRGBA(s.flashColor, 1), t = "0 0 10px " + l.colors.toRGBA(s.flashColor, s.attenuation), n = 0; n < 3; n++) o.push(e), r.push(t);
                d.addCssRule(a, "@keyframes pulsar-cell-" + i.attr("id"), "0%, 100% { box-shadow: " + o.join(",") + "} 50% { box-shadow: " + r.join(",") + " }"), d.addCssRule(a, "#" + i.attr("id") + " .side .cube-cell.light", "animation: pulsar-cell-" + i.attr("id") + " 2.5s 0s ease-out infinite; background-color: " + s.flashColor + "!important; border-color: " + s.flashColor + "!important;")
            }
        }, _createEvents: function () {
            var e = this, t = this.element, n = this.options;
            c(window).on(l.events.blur, function () {
                !0 === n.stopOnBlur && !0 === e.running && e._stop()
            }, {ns: t.attr("id")}), c(window).on(l.events.focus, function () {
                !0 === n.stopOnBlur && !1 === e.running && e._start()
            }, {ns: t.attr("id")}), t.on(l.events.click, ".cube-cell", function () {
                !0 === n.cellClick && c(this).toggleClass("light")
            })
        }, _start: function () {
            var n = this;
            this.element.find(".cube-cell").removeClass("light"), this.running = !0, c.each(this.rules, function (e, t) {
                n._execRule(e, t)
            })
        }, _stop: function () {
            this.running = !1, clearInterval(this.interval), c.each(this.intervals, function () {
                clearInterval(this)
            })
        }, _tick: function (e, t) {
            var n = this, i = this.options;
            void 0 === t && (t = i.flashInterval * e);
            var s = setTimeout(function () {
                n._fireEvent("tick", {index: e}), clearInterval(s), d.arrayDelete(n.intervals, s)
            }, t);
            this.intervals.push(s)
        }, _toggle: function (e, t, n, i) {
            var s = this;
            void 0 === i && (i = this.options.flashInterval * n);
            var a = setTimeout(function () {
                e["on" === t ? "addClass" : "removeClass"]("light"), clearInterval(a), d.arrayDelete(s.intervals, a)
            }, i);
            this.intervals.push(a)
        }, start: function () {
            this._start()
        }, stop: function () {
            this._stop()
        }, toRule: function (e, t) {
            var n = this, i = this.element, s = this.options, a = this.rules;
            if (null != a && void 0 !== a[e]) {
                clearInterval(this.ruleInterval), this.ruleInterval = !1, this.stop(), i.find(".cube-cell").removeClass("light");
                for (var o = 0; o <= e; o++) this._execRule(o, a[o], t);
                d.isInt(s.autoRestart) && 0 < s.autoRestart && (this.ruleInterval = setTimeout(function () {
                    n._run()
                }, s.autoRestart))
            }
        }, _execRule: function (i, s, a) {
            var o = this, r = this.element;
            this._tick(i, a), c.each(["left", "right", "top"], function () {
                var t = "." + this + "-side", e = void 0 !== s.on && void 0 !== s.on[this] && s.on[this],
                    n = void 0 !== s.off && void 0 !== s.off[this] && s.off[this];
                !1 !== e && c.each(e, function () {
                    var e = r.find(t + " .cell-id-" + this);
                    o._toggle(e, "on", i, a)
                }), !1 !== n && c.each(n, function () {
                    var e = r.find(t + " .cell-id-" + this);
                    o._toggle(e, "off", i, a)
                })
            })
        }, rule: function (e) {
            if (void 0 === e) return this.rules;
            !0 === this._parseRules(e) && (this.options.rules = e, this.stop(), this.element.find(".cube-cell").removeClass("light"), this._run())
        }, axis: function (e) {
            e = !0 === e ? "show" : "hide";
            this.element.find(".axis")[e]()
        }, changeRules: function () {
            var e = this.element, t = this.options, n = e.attr("data-rules");
            !0 === this._parseRules(n) && (this.stop(), e.find(".cube-cell").removeClass("light"), t.rules = n, this._run())
        }, changeAxisVisibility: function () {
            var e = this.element, t = !0 === JSON.parse(e.attr("data-show-axis")) ? "show" : "hide";
            e.find(".axis")[t]()
        }, changeAxisStyle: function () {
            var e = this.element, t = e.attr("data-axis-style");
            e.find(".axis").removeClass("arrow line no-style").addClass(t)
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-rules":
                    this.changeRules();
                    break;
                case"data-show-axis":
                    this.changeAxisVisibility();
                    break;
                case"data-axis-style":
                    this.changeAxisStyle()
            }
        }, destroy: function () {
            var e = this.element;
            return clearInterval(this.interval), this.interval = null, c(window).off(l.events.blur, {ns: e.attr("id")}), c(window).off(l.events.focus, {ns: e.attr("id")}), e.off(l.events.click, ".cube-cell"), e
        }
    })
}(Metro, m4q), function (r, d) {
    "use strict";
    var u = r.utils, n = {
        label: "",
        datepickerDeferred: 0,
        gmt: 0,
        format: "%Y-%m-%d",
        inputFormat: null,
        locale: METRO_LOCALE,
        value: null,
        distance: 3,
        month: !0,
        day: !0,
        year: !0,
        minYear: null,
        maxYear: null,
        scrollSpeed: 4,
        copyInlineStyles: !1,
        clsPicker: "",
        clsPart: "",
        clsMonth: "",
        clsDay: "",
        clsYear: "",
        clsLabel: "",
        clsButton: "",
        clsOkButton: "",
        clsCancelButton: "",
        okButtonIcon: "<span class='default-icon-check'></span>",
        cancelButtonIcon: "<span class='default-icon-cross'></span>",
        onSet: r.noop,
        onOpen: r.noop,
        onClose: r.noop,
        onScroll: r.noop,
        onDatePickerCreate: r.noop
    };
    r.datePickerSetup = function (e) {
        n = d.extend({}, n, e)
    }, window.metroDatePickerSetup, r.datePickerSetup(window.metroDatePickerSetup), r.Component("date-picker", {
        init: function (e, t) {
            return this._super(t, e, n, {
                picker: null,
                isOpen: !1,
                value: new Date,
                locale: null,
                offset: (new Date).getTimezoneOffset() / 60 + 1,
                listTimer: {day: null, month: null, year: null}
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            t.distance < 1 && (t.distance = 1), u.isValue(e.val()) && (t.value = e.val()), u.isValue(t.value) && (u.isValue(t.inputFormat) ? this.value = ("" + t.value).toDate(t.inputFormat) : u.isDate(t.value) && (this.value = new Date(t.value))), void 0 === r.locales[t.locale] && (t.locale = METRO_LOCALE), this.locale = r.locales[t.locale].calendar, null === t.minYear && (t.minYear = (new Date).getFullYear() - 100), null === t.maxYear && (t.maxYear = (new Date).getFullYear() + 100), this._createStructure(), this._createEvents(), this._set(), this._fireEvent("datepicker-create", {element: e})
        }, _createStructure: function () {
            var e, t, n, i, s, a, o = this.element, r = this.options, l = u.elementId("datepicker"),
                c = d("<div>").attr("id", l).addClass("wheel-picker date-picker " + o[0].className).addClass(r.clsPicker);
            if (c.insertBefore(o), o.appendTo(c), r.label && (a = d("<label>").addClass("label-for-input").addClass(r.clsLabel).html(r.label).insertBefore(c), o.attr("id") && a.attr("for", o.attr("id")), "rtl" === o.attr("dir") && a.addClass("rtl")), l = d("<div>").addClass("date-wrapper").appendTo(c), !0 === r.month && (e = d("<div>").addClass("month").addClass(r.clsPart).addClass(r.clsMonth).appendTo(l)), !0 === r.day && (t = d("<div>").addClass("day").addClass(r.clsPart).addClass(r.clsDay).appendTo(l)), !0 === r.year && (n = d("<div>").addClass("year").addClass(r.clsPart).addClass(r.clsYear).appendTo(l)), a = d("<div>").addClass("select-wrapper").appendTo(c), l = d("<div>").addClass("select-block").appendTo(a), !0 === r.month) {
                for (e = d("<ul>").addClass("sel-month").appendTo(l), i = 0; i < r.distance; i++) d("<li>").html("&nbsp;").data("value", -1).appendTo(e);
                for (i = 0; i < 12; i++) d("<li>").addClass("js-month-" + i + " js-month-real-" + this.locale.months[i].toLowerCase()).html(this.locale.months[i]).data("value", i).appendTo(e);
                for (i = 0; i < r.distance; i++) d("<li>").html("&nbsp;").data("value", -1).appendTo(e)
            }
            if (!0 === r.day) {
                for (t = d("<ul>").addClass("sel-day").appendTo(l), i = 0; i < r.distance; i++) d("<li>").html("&nbsp;").data("value", -1).appendTo(t);
                for (i = 0; i < 31; i++) d("<li>").addClass("js-day-" + i + " js-day-real-" + (i + 1)).html(i + 1).data("value", i + 1).appendTo(t);
                for (i = 0; i < r.distance; i++) d("<li>").html("&nbsp;").data("value", -1).appendTo(t)
            }
            if (!0 === r.year) {
                for (n = d("<ul>").addClass("sel-year").appendTo(l), i = 0; i < r.distance; i++) d("<li>").html("&nbsp;").data("value", -1).appendTo(n);
                for (i = r.minYear, s = 0; i <= r.maxYear; i++, s++) d("<li>").addClass("js-year-" + s + " js-year-real-" + i).html(i).data("value", i).appendTo(n);
                for (i = 0; i < r.distance; i++) d("<li>").html("&nbsp;").data("value", -1).appendTo(n)
            }
            if (l.height(40 * (2 * r.distance + 1)), a = d("<div>").addClass("action-block").appendTo(a), d("<button>").attr("type", "button").addClass("button action-ok").addClass(r.clsButton).addClass(r.clsOkButton).html(r.okButtonIcon).appendTo(a), d("<button>").attr("type", "button").addClass("button action-cancel").addClass(r.clsButton).addClass(r.clsCancelButton).html(r.cancelButtonIcon).appendTo(a), !(o[0].className = "") === r.copyInlineStyles) for (i = 0; i < o[0].style.length; i++) c.css(o[0].style[i], o.css(o[0].style[i]));
            o.prop("disabled") && c.addClass("disabled"), this.picker = c
        }, _createEvents: function () {
            var s = this, a = this.options, o = this.picker;
            o.on(r.events.start, ".select-block ul", function (e) {
                var t, n;
                e.changedTouches || (t = this, n = u.pageXY(e).y, d(document).on(r.events.move, function (e) {
                    t.scrollTop -= a.scrollSpeed * (n > u.pageXY(e).y ? -1 : 1), n = u.pageXY(e).y
                }, {ns: o.attr("id")}), d(document).on(r.events.stop, function () {
                    d(document).off(r.events.move, {ns: o.attr("id")}), d(document).off(r.events.stop, {ns: o.attr("id")})
                }, {ns: o.attr("id")}))
            }), o.on(r.events.click, function (e) {
                !1 === s.isOpen && s.open(), e.stopPropagation()
            }), o.on(r.events.click, ".action-ok", function (e) {
                var t = o.find(".sel-month li.active"), n = o.find(".sel-day li.active"),
                    i = o.find(".sel-year li.active"), t = 0 === t.length ? s.value.getMonth() : t.data("value"),
                    n = 0 === n.length ? s.value.getDate() : n.data("value"),
                    i = 0 === i.length ? s.value.getFullYear() : i.data("value");
                s.value = new Date(i, t, n), s._correct(), s._set(), s.close(), e.stopPropagation()
            }), o.on(r.events.click, ".action-cancel", function (e) {
                s.close(), e.stopPropagation()
            });
            d.each(["month", "day", "year"], function () {
                var n = this, i = o.find(".sel-" + n);
                i.on("scroll", function () {
                    s.isOpen && (s.listTimer[n] && (clearTimeout(s.listTimer[n]), s.listTimer[n] = null), s.listTimer[n] || (s.listTimer[n] = setTimeout(function () {
                        var e, t;
                        s.listTimer[n] = null, t = Math.round(Math.ceil(i.scrollTop()) / 40), t = (e = i.find(".js-" + n + "-" + t)).position().top - 40 * a.distance, i.find(".active").removeClass("active"), i[0].scrollTop = t, e.addClass("active"), u.exec(a.onScroll, [e, i, o], i[0])
                    }, 150)))
                })
            })
        }, _correct: function () {
            var e = this.value.getMonth(), t = this.value.getDate(), n = this.value.getFullYear();
            this.value = new Date(n, e, t)
        }, _set: function () {
            var e = this.element, t = this.options, n = this.picker, i = this.locale.months[this.value.getMonth()],
                s = this.value.getDate(), a = this.value.getFullYear();
            !0 === t.month && n.find(".month").html(i), !0 === t.day && n.find(".day").html(s), !0 === t.year && n.find(".year").html(a), e.val(this.value.format(t.format, t.locale)).trigger("change"), this._fireEvent("set", {
                value: this.value,
                elementValue: e.val(),
                picker: n
            })
        }, open: function () {
            var e, t, n = this.options, i = this.picker, s = this.value.getMonth(), a = this.value.getDate() - 1,
                o = this.value.getFullYear(), r = i.find(".select-wrapper");
            r.parent().removeClass("for-top for-bottom"), r.show(0), i.find("li").removeClass("active"), e = u.inViewport(r[0]), t = u.rect(r[0]), !e && 0 < t.top && r.parent().addClass("for-bottom"), !e && t.top < 0 && r.parent().addClass("for-top"), !0 === n.month && (r = i.find(".sel-month")).scrollTop(0).animate({
                draw: {scrollTop: r.find("li.js-month-" + s).addClass("active").position().top - 40 * n.distance},
                dur: 100
            }), !0 === n.day && (s = i.find(".sel-day")).scrollTop(0).animate({
                draw: {scrollTop: s.find("li.js-day-" + a).addClass("active").position().top - 40 * n.distance},
                dur: 100
            }), !0 === n.year && (a = i.find(".sel-year")).scrollTop(0).animate({
                draw: {scrollTop: a.find("li.js-year-real-" + o).addClass("active").position().top - 40 * n.distance},
                dur: 100
            }), this.isOpen = !0, this._fireEvent("open", {value: this.value, picker: i})
        }, close: function () {
            var e = this.picker;
            e.find(".select-wrapper").hide(0), this.isOpen = !1, this._fireEvent("close", {
                value: this.value,
                picker: e
            })
        }, val: function (e) {
            var t = this.options;
            if (!u.isValue(e)) return this.element.val();
            u.isValue(t.inputFormat) ? this.value = ("" + e).toDate(t.inputFormat) : this.value = new Date(e), this._set()
        }, date: function (e) {
            if (void 0 === e) return this.value;
            try {
                this.value = new Date(e.format("%Y-%m-%d")), this._set()
            } catch (e) {
                return !1
            }
        }, i18n: function (e) {
            var t, n, i = this.element, s = this.options;
            if (s.locale = e || i.attr("data-locale"), this.locale = r.locales[s.locale].calendar, !0 === s.month) {
                for (t = i.closest(".date-picker").find(".sel-month").html(""), n = 0; n < s.distance; n++) d("<li>").html("&nbsp;").data("value", -1).appendTo(t);
                for (n = 0; n < 12; n++) d("<li>").addClass("js-month-" + n + " js-month-real-" + this.locale.months[n].toLowerCase()).html(this.locale.months[n]).data("value", n).appendTo(t);
                for (n = 0; n < s.distance; n++) d("<li>").html("&nbsp;").data("value", -1).appendTo(t)
            }
            this._set()
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e, t) {
            switch (e) {
                case"disabled":
                    this.toggleState();
                    break;
                case"data-value":
                    this.val(t);
                    break;
                case"data-locale":
                    this.i18n(t);
                    break;
                case"data-format":
                    this.options.format = t, this._set()
            }
        }, destroy: function () {
            var e = this.element, t = this.picker;
            return d.each(["moth", "day", "year"], function () {
                t.find(".sel-" + this).off("scroll")
            }), t.off(r.events.start, ".select-block ul"), t.off(r.events.click), t.off(r.events.click, ".action-ok"), t.off(r.events.click, ".action-cancel"), e
        }
    }), d(document).on(r.events.click, function () {
        d.each(d(".date-picker"), function () {
            d(this).find("input").each(function () {
                r.getPlugin(this, "datepicker").close()
            })
        })
    })
}(Metro, m4q), function (r, l) {
    "use strict";
    var c = r.utils, n = {
        dialogDeferred: 0,
        closeButton: !1,
        leaveOverlayOnClose: !1,
        toTop: !1,
        toBottom: !1,
        locale: METRO_LOCALE,
        title: "",
        content: "",
        actions: {},
        actionsAlign: "right",
        defaultAction: !0,
        overlay: !0,
        overlayColor: "#000000",
        overlayAlpha: .5,
        overlayClickClose: !1,
        width: "480",
        height: "auto",
        shadow: !0,
        closeAction: !0,
        clsDialog: "",
        clsTitle: "",
        clsContent: "",
        clsAction: "",
        clsDefaultAction: "",
        clsOverlay: "",
        autoHide: 0,
        removeOnClose: !1,
        show: !1,
        _runtime: !1,
        onShow: r.noop,
        onHide: r.noop,
        onOpen: r.noop,
        onClose: r.noop,
        onDialogCreate: r.noop
    };
    r.dialogSetup = function (e) {
        n = l.extend({}, n, e)
    }, window.metroDialogSetup, r.dialogSetup(window.metroDialogSetup), r.Component("dialog", {
        _counter: 0, init: function (e, t) {
            return this._super(t, e, n, {interval: null, overlay: null, id: c.elementId("dialog")}), this
        }, _create: function () {
            var e = this.options;
            this.locale = void 0 !== r.locales[e.locale] ? r.locales[e.locale] : r.locales["en-US"], this._build()
        }, _build: function () {
            var t, n, e = this, i = this.element, s = this.options, a = l("body");
            i.addClass("dialog"), !0 === s.shadow && i.addClass("shadow-on"), "" !== s.title && this.setTitle(s.title), "" !== s.content && this.setContent(s.content), (!0 === s.defaultAction || !1 !== s.actions && "object" == typeof s.actions && 0 < c.objectLength(s.actions)) && (0 === (t = i.find(".dialog-actions")).length && (t = l("<div>").addClass("dialog-actions").addClass("text-" + s.actionsAlign).appendTo(i)), !0 === s.defaultAction && 0 === c.objectLength(s.actions) && 0 === i.find(".dialog-actions > *").length && (n = l("<button>").addClass("button js-dialog-close").addClass(s.clsDefaultAction).html(this.locale.buttons.ok)).appendTo(t), c.isObject(s.actions) && l.each(c.isObject(s.actions), function () {
                var e = this;
                n = l("<button>").addClass("button").addClass(e.cls).html(e.caption), void 0 !== e.onclick && n.on(r.events.click, function () {
                    c.exec(e.onclick, [i])
                }), n.appendTo(t)
            })), !0 === s.overlay && (o = this._overlay(), this.overlay = o), !0 === s.closeAction && i.on(r.events.click, ".js-dialog-close", function () {
                e.close()
            });
            var o = i.find("closer");
            0 === o.length && (o = l("<span>").addClass("button square closer js-dialog-close")).appendTo(i), !0 !== s.closeButton && o.hide(), i.css({
                width: s.width,
                height: s.height,
                visibility: "hidden",
                top: "100%",
                left: (l(window).width() - i.outerWidth()) / 2
            }), i.addClass(s.clsDialog), i.find(".dialog-title").addClass(s.clsTitle), i.find(".dialog-content").addClass(s.clsContent), i.find(".dialog-actions").addClass(s.clsAction), i.appendTo(a), s.show && this.open(), l(window).on(r.events.resize, function () {
                e.setPosition()
            }, {ns: this.id}), this._fireEvent("dialog-create", {element: i})
        }, _overlay: function () {
            var e = this.options, t = l("<div>");
            return t.addClass("overlay").addClass(e.clsOverlay), "transparent" === e.overlayColor ? t.addClass("transparent") : t.css({background: r.colors.toRGBA(e.overlayColor, e.overlayAlpha)}), t
        }, hide: function (e) {
            var t = this.element, n = 0;
            this.options.onHide !== r.noop && (n = 500, this._fireEvent("hide")), setTimeout(function () {
                c.exec(e, null, t[0]), t.css({visibility: "hidden", top: "100%"})
            }, n)
        }, show: function (e) {
            var t = this.element;
            this.setPosition(), t.css({visibility: "visible"}), this._fireEvent("show"), c.exec(e, null, t[0])
        }, setPosition: function () {
            var e, t, n = this.element, i = this.options;
            !0 !== i.toTop && !0 !== i.toBottom ? ((e = (l(window).height() - n.outerHeight()) / 2) < 0 && (e = 0), t = "auto") : (!0 === i.toTop && (e = 0, t = "auto"), !0 !== i.toTop && !0 === i.toBottom && (t = 0, e = "auto")), n.css({
                top: e,
                bottom: t,
                left: (l(window).width() - n.outerWidth()) / 2
            })
        }, setContent: function (e) {
            var t = this.element, n = t.find(".dialog-content");
            0 === n.length && (n = l("<div>").addClass("dialog-content")).appendTo(t), !c.isQ(e) && c.isFunc(e) && (e = c.exec(e)), c.isQ(e) ? e.appendTo(n) : n.html(e)
        }, setTitle: function (e) {
            var t = this.element, n = t.find(".dialog-title");
            0 === n.length && (n = l("<div>").addClass("dialog-title")).appendTo(t), n.html(e)
        }, close: function () {
            var e = this, t = this.element, n = this.options;
            c.bool(n.leaveOverlayOnClose) || l("body").find(".overlay").remove(), this.hide(function () {
                t.data("open", !1), e._fireEvent("close"), !0 === n.removeOnClose && t.remove()
            })
        }, open: function () {
            var e = this, t = this.element, n = this.options;
            !0 === n.overlay && 0 === l(".overlay").length && (this.overlay.appendTo(l("body")), !0 === n.overlayClickClose && this.overlay.on(r.events.click, function () {
                e.close()
            })), this.show(function () {
                e._fireEvent("open"), t.data("open", !0), 0 < parseInt(n.autoHide) && setTimeout(function () {
                    e.close()
                }, parseInt(n.autoHide))
            })
        }, toggle: function () {
            this.element.data("open") ? this.close() : this.open()
        }, isOpen: function () {
            return !0 === this.element.data("open")
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element;
            return e.off(r.events.click, ".js-dialog-close"), e.find(".button").off(r.events.click), l(window).off(r.events.resize, {ns: this.id}), e
        }
    }), r.dialog = {
        isDialog: function (e) {
            return c.isMetroObject(e, "dialog")
        }, open: function (e, t, n) {
            if (!this.isDialog(e)) return !1;
            e = r.getPlugin(e, "dialog");
            void 0 !== n && e.setTitle(n), void 0 !== t && e.setContent(t), e.open()
        }, close: function (e) {
            if (!this.isDialog(e)) return !1;
            r.getPlugin(l(e)[0], "dialog").close()
        }, toggle: function (e) {
            if (!this.isDialog(e)) return !1;
            r.getPlugin(l(e)[0], "dialog").toggle()
        }, isOpen: function (e) {
            if (!this.isDialog(e)) return !1;
            r.getPlugin(l(e)[0], "dialog").isOpen()
        }, remove: function (e) {
            if (!this.isDialog(e)) return !1;
            e = r.getPlugin(l(e)[0], "dialog");
            e.options.removeOnClose = !0, e.close()
        }, create: function (e) {
            var t = l("<div>").appendTo(l("body")),
                e = l.extend({}, {show: !0, closeAction: !0, removeOnClose: !0}, void 0 !== e ? e : {});
            return e._runtime = !0, r.makePlugin(t, "dialog", e)
        }
    }
}(Metro, m4q), function (e, l) {
    "use strict";
    var c = e.utils, n = {
        donutDeferred: 0,
        size: 100,
        radius: 50,
        hole: .8,
        value: 0,
        background: "#ffffff",
        color: "",
        stroke: "#d1d8e7",
        fill: "#49649f",
        fontSize: 24,
        total: 100,
        cap: "%",
        showText: !0,
        showValue: !1,
        animate: 0,
        onChange: e.noop,
        onDonutCreate: e.noop
    };
    e.donutSetup = function (e) {
        n = l.extend({}, n, e)
    }, window.metroDonutSetup, e.donutSetup(window.metroDonutSetup), e.Component("donut", {
        init: function (e, t) {
            return this._super(t, e, n, {value: 0, animation_change_interval: null}), this
        }, _create: function () {
            var e = this.element, t = this.options, n = "", i = t.radius * (1 - (1 - t.hole) / 2),
                s = t.radius * (1 - t.hole), a = "rotate(-90 " + t.radius + "," + t.radius + ")", o = i * t.hole * .6;
            e.addClass("donut"), e.css({
                width: t.size,
                height: t.size,
                background: t.background
            }), n += "<svg>", n += "   <circle class='donut-back' r='" + i + "px' cx='" + t.radius + "px' cy='" + t.radius + "px' transform='" + a + "' fill='none' stroke='" + t.stroke + "' stroke-width='" + s + "'/>", n += "   <circle class='donut-fill' r='" + i + "px' cx='" + t.radius + "px' cy='" + t.radius + "px' transform='" + a + "' fill='none' stroke='" + t.fill + "' stroke-width='" + s + "'/>", !0 === t.showText && (n += "   <text   class='donut-title' x='" + t.radius + "px' y='" + t.radius + "px' dy='" + o / 3 + "px' text-anchor='middle' fill='" + ("" !== t.color ? t.color : t.fill) + "' font-size='" + o + "px'>0" + t.cap + "</text>"), n += "</svg>", e.html(n), this.val(t.value), this._fireEvent("donut-create", {element: e})
        }, _setValue: function (e) {
            var t = this.element, n = this.options, i = t.find(".donut-fill"), s = t.find(".donut-title"),
                t = n.radius * (1 - (1 - n.hole) / 2), a = Math.round(2 * Math.PI * t),
                t = n.showValue ? e : c.percent(n.total, e, !0), e = Math.round(+e * a / n.total),
                o = i.attr("stroke-dasharray"), r = e - (o = void 0 === o ? 0 : +o.split(" ")[0]);
            i.animate({
                draw: function (e, t) {
                    l(this).attr("stroke-dasharray", o + r * t + " " + a)
                }, dur: n.animate
            }), s.animate({
                draw: {innerHTML: t}, dur: n.animate, onFrame: function () {
                    this.innerHTML += n.cap
                }
            })
        }, val: function (e) {
            var t = this.options;
            return void 0 === e ? this.value : !(parseInt(e) < 0 || parseInt(e) > t.total) && (this._setValue(e), this.value = e, void this._fireEvent("change", {value: this.value}))
        }, changeValue: function () {
            this.val(this.element.attr("data-value"))
        }, changeAttribute: function (e) {
            "data-value" === e && this.changeValue()
        }, destroy: function () {
            return this.element
        }
    })
}(Metro, m4q), function (u, h) {
    "use strict";
    var l = u.utils, n = {
        doublesliderDeferred: 0,
        roundValue: !0,
        min: 0,
        max: 100,
        accuracy: 0,
        showMinMax: !1,
        minMaxPosition: u.position.TOP,
        valueMin: null,
        valueMax: null,
        hint: !1,
        hintAlways: !1,
        hintPositionMin: u.position.TOP,
        hintPositionMax: u.position.TOP,
        hintMaskMin: "$1",
        hintMaskMax: "$1",
        target: null,
        size: 0,
        clsSlider: "",
        clsBackside: "",
        clsComplete: "",
        clsMarker: "",
        clsMarkerMin: "",
        clsMarkerMax: "",
        clsHint: "",
        clsHintMin: "",
        clsHintMax: "",
        clsMinMax: "",
        clsMin: "",
        clsMax: "",
        onStart: u.noop,
        onStop: u.noop,
        onMove: u.noop,
        onChange: u.noop,
        onChangeValue: u.noop,
        onFocus: u.noop,
        onBlur: u.noop,
        onDoubleSliderCreate: u.noop
    };
    u.doubleSliderSetup = function (e) {
        n = h.extend({}, n, e)
    }, window.metroDoubleSliderSetup, u.doubleSliderSetup(window.metroDoubleSliderSetup), u.Component("double-slider", {
        init: function (e, t) {
            return this._super(t, e, n, {
                slider: null,
                valueMin: null,
                valueMax: null,
                keyInterval: !1,
                id: l.elementId("slider")
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            this.valueMin = l.isValue(t.valueMin) ? +t.valueMin : +t.min, this.valueMax = l.isValue(t.valueMax) ? +t.valueMax : +t.max, this._createSlider(), this._createEvents(), this.val(this.valueMin, this.valueMax), this._fireEvent("double-slider-create", {element: e})
        }, _createSlider: function () {
            var e, t = this.element, n = this.options, i = h("<div>").addClass("slider-wrapper"),
                s = h("<div>").addClass("slider").addClass(n.clsSlider).addClass(this.elem.className),
                a = h("<div>").addClass("backside").addClass(n.clsBackside),
                o = h("<div>").addClass("complete").addClass(n.clsComplete),
                r = h("<button>").attr("type", "button").addClass("marker marker-min").addClass(n.clsMarker).addClass(n.clsMarkerMin),
                l = h("<button>").attr("type", "button").addClass("marker marker-max").addClass(n.clsMarker).addClass(n.clsMarkerMax),
                c = h("<div>").addClass("hint hint-min").addClass(n.hintPositionMin + "-side").addClass(n.clsHint).addClass(n.clsHintMin),
                d = h("<div>").addClass("hint hint-max").addClass(n.hintPositionMax + "-side").addClass(n.clsHint).addClass(n.clsHintMax);
            if (0 < n.size && s.outerWidth(n.size), s.insertBefore(t), t.appendTo(s), i.insertBefore(s), s.appendTo(i), a.appendTo(s), o.appendTo(s), r.appendTo(s), l.appendTo(s), c.appendTo(r), d.appendTo(l), !0 === n.hintAlways && h([c, d]).css({display: "block"}).addClass("permanent-hint"), !0 === n.showMinMax && (d = h("<div>").addClass("slider-min-max").addClass(n.clsMinMax), h("<span>").addClass("slider-text-min").addClass(n.clsMin).html(n.min).appendTo(d), h("<span>").addClass("slider-text-max").addClass(n.clsMax).html(n.max).appendTo(d), n.minMaxPosition === u.position.TOP ? d.insertBefore(s) : d.insertAfter(s)), !(t[0].className = "") === n.copyInlineStyles) for (e = 0; e < t[0].style.length; e++) s.css(t[0].style[e], t.css(t[0].style[e]));
            t.is(":disabled") ? this.disable() : this.enable(), this.slider = s
        }, _createEvents: function () {
            var t = this, e = this.slider, n = this.options, e = e.find(".marker");
            e.on(u.events.startAll, function () {
                var e = h(this).find(".hint");
                !0 === n.hint && !0 !== n.hintAlways && e.fadeIn(300), h(document).on(u.events.moveAll, function (e) {
                    t._move(e), t._fireEvent("move", {min: t.valueMin, max: t.valueMax})
                }, {ns: t.id}), h(document).on(u.events.stopAll, function () {
                    h(document).off(u.events.moveAll, {ns: t.id}), h(document).off(u.events.stopAll, {ns: t.id}), !0 !== n.hintAlways && e.fadeOut(300), t._fireEvent("stop", {
                        min: t.valueMin,
                        max: t.valueMax
                    })
                }, {ns: t.id}), t._fireEvent("start", {min: t.valueMin, max: t.valueMax})
            }), e.on(u.events.focus, function () {
                t._fireEvent("focus", {min: t.valueMin, max: t.valueMax})
            }), e.on(u.events.blur, function () {
                t._fireEvent("blur", {min: t.valueMin, max: t.valueMax})
            }), h(window).on(u.events.resize, function () {
                t.val(t.valueMin, t.valueMax)
            }, {ns: t.id})
        }, _convert: function (e, t) {
            var n = this.slider, i = this.options, s = n.outerWidth() - n.find(".marker").outerWidth();
            switch (t) {
                case"pix2prc":
                    return 100 * e / s;
                case"pix2val":
                    return this._convert(e, "pix2prc") * ((i.max - i.min) / 100) + i.min;
                case"val2prc":
                    return (e - i.min) / ((i.max - i.min) / 100);
                case"prc2pix":
                    return e / (100 / s);
                case"val2pix":
                    return this._convert(this._convert(e, "val2prc"), "prc2pix")
            }
            return 0
        }, _correct: function (e) {
            var t, n = e, i = this.options.accuracy, s = this.options.min, a = this.options.max;
            return 0 === i || isNaN(i) ? n : ((n = Math.round(e / i) * i) < s && (n = s), a < n && (n = a), n.toFixed((t = i) % 1 == 0 ? 0 : t.toString().split(".")[1].length))
        }, _move: function (e) {
            var t, n = h(e.target).closest(".marker").hasClass("marker-min"), i = this.slider, s = i.offset(),
                a = i.find(".marker").outerWidth(), o = i.find(".marker-min"), r = i.find(".marker-max"),
                i = i.outerWidth(), s = l.pageXY(e).x - s.left - a / 2,
                a = n ? (t = 0, parseInt(r.css("left")) - a) : (t = parseInt(o.css("left")) + a, i - a);
            s < t || a < s || (this[n ? "valueMin" : "valueMax"] = this._correct(this._convert(s, "pix2val")), this._redraw())
        }, _hint: function () {
            var i = this, s = this.options;
            this.slider.find(".hint").each(function () {
                var e = h(this), t = e.hasClass("hint-min"), n = t ? s.hintMaskMin : s.hintMaskMax,
                    t = +(t ? i.valueMin : i.valueMax) || 0;
                e.text(n.replace("$1", t.toFixed(l.decCount(s.accuracy))))
            })
        }, _value: function () {
            var t, e = this.element, n = this.options, i = +this.valueMin || 0, s = +this.valueMax || 0;
            n.roundValue && (i = i.toFixed(l.decCount(n.accuracy)), s = s.toFixed(l.decCount(n.accuracy))), t = [i, s].join(", "), "INPUT" === e[0].tagName && e.val(t), null === n.target || 0 !== (n = h(n.target)).length && h.each(n, function () {
                var e = h(this);
                "INPUT" === this.tagName ? e.val(t) : e.text(t), e.trigger("change")
            }), this._fireEvent("change-value", {val: t}), this._fireEvent("change", {val: t})
        }, _marker: function () {
            var e = this.slider, t = e.find(".marker-min"), n = e.find(".marker-max"), i = e.find(".complete"),
                s = parseInt(l.getStyleOne(t, "width")), e = l.isVisible(e);
            e && h([t, n]).css({
                "margin-top": 0,
                "margin-left": 0
            }), e ? (t.css("left", this._convert(this.valueMin, "val2pix")), n.css("left", this._convert(this.valueMax, "val2pix"))) : (t.css({
                left: this._convert(this.valueMin, "val2prc") + "%",
                "margin-top": 0 === this._convert(this.valueMin, "val2prc") ? 0 : -1 * s / 2
            }), n.css({
                left: this._convert(this.valueMax, "val2prc") + "%",
                "margin-top": 0 === this._convert(this.valueMax, "val2prc") ? 0 : -1 * s / 2
            })), i.css({
                left: this._convert(this.valueMin, "val2pix"),
                width: this._convert(this.valueMax, "val2pix") - this._convert(this.valueMin, "val2pix")
            })
        }, _redraw: function () {
            this._marker(), this._value(), this._hint()
        }, val: function (e, t) {
            var n = this.options;
            if (!l.isValue(e) && !l.isValue(t)) return [this.valueMin, this.valueMax];
            e < n.min && (e = n.min), t < n.min && (t = n.min), e > n.max && (e = n.max), t > n.max && (t = n.max), this.valueMin = this._correct(e), this.valueMax = this._correct(t), this._redraw()
        }, changeValue: function () {
            var e = this.element, t = +e.attr("data-value-min"), e = +e.attr("data-value-max");
            this.val(t, e)
        }, disable: function () {
            var e = this.element;
            e.data("disabled", !0), e.parent().addClass("disabled")
        }, enable: function () {
            var e = this.element;
            e.data("disabled", !1), e.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-value-min":
                case"data-value-max":
                    this.changeValue();
                    break;
                case"disabled":
                    this.toggleState()
            }
        }, destroy: function () {
            var e = this.element, t = this.slider, n = t.find(".marker");
            return n.off(u.events.startAll), n.off(u.events.focus), n.off(u.events.blur), n.off(u.events.keydown), n.off(u.events.keyup), t.off(u.events.click), h(window).off(u.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q), function (u, h) {
    "use strict";
    var p = u.utils, n = {
        dragitemsDeferred: 0,
        target: null,
        dragItem: "li",
        dragMarker: ".drag-item-marker",
        drawDragMarker: !1,
        clsDragItemAvatar: "",
        clsDragItem: "",
        canDrag: !0,
        onDragStartItem: u.noop,
        onDragMoveItem: u.noop,
        onDragDropItem: u.noop,
        onTarget: u.noop,
        onTargetIn: u.noop,
        onTargetOut: u.noop,
        onDragItemsCreate: u.noop
    };
    u.dragItemsSetup = function (e) {
        n = h.extend({}, n, e)
    }, window.metroDragItemsSetup, u.dragItemsSetup(window.metroDragItemsSetup), u.Component("drag-items", {
        init: function (e, t) {
            return this._super(t, e, n, {id: p.elementId("dragItems"), canDrag: !1}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("drag-items-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options;
            e.addClass("drag-items-target"), !0 === t.drawDragMarker && e.find(t.dragItem).each(function () {
                h("<span>").addClass("drag-item-marker").appendTo(this)
            }), t.canDrag ? this.on() : this.off()
        }, _createEvents: function () {
            var i, s, a, r = this, e = this.element, l = this.options, o = h.document(), c = h.body(),
                d = {top: 0, left: 0};
            e.on(u.events.startAll, l.drawDragMarker ? l.dragMarker : l.dragItem, function (e) {
                var t, n = h(e.target).closest(l.dragItem);
                p.isRightMouse(e) || !0 === r.canDrag && (n.addClass("dragged-item").addClass(l.clsDragItem), t = h("<div>").addClass("dragged-item-avatar").addClass(l.clsDragItemAvatar), i = n.offset(), s = n.width(), a = n.height(), d.top = p.pageXY(e).y - i.top, d.left = p.pageXY(e).x - i.left, t.css({
                    top: i.top,
                    left: i.left,
                    width: s,
                    height: a
                }).appendTo(c), r._fireEvent("drag-start-item", {
                    dragItem: n[0],
                    avatar: t[0]
                }), o.on(u.events.moveAll, function (e) {
                    !function (e, t, n) {
                        var i = p.pageXY(e).x, s = p.pageXY(e).y, a = s - d.top, o = i - d.left;
                        t.css({top: a, left: o});
                        e = document.elementsFromPoint(i, s).filter(function (e) {
                            return h(e).hasClass("drag-items-target")
                        });
                        0 !== e.length && (r._fireEvent("target", {target: e}), t = document.elementsFromPoint(i, s).filter(function (e) {
                            var t = h(e);
                            return h.matches(e, l.dragItem) && !t.hasClass("dragged-item-avatar")
                        })[0], p.isValue(t) ? (s = s - (o = (a = h(t)).offset()).top, t = i - o.left, i = a.width(), o = a.height(), s = t < i / 3 && (s < o / 2 || o / 2 < s) ? "left" : 2 * i / 3 < t && (s < o / 2 || o / 2 < s) ? "right" : i / 3 < t && t < 2 * i / 3 && o / 2 < s ? "bottom" : "top", a.hasClass("dragged-item") || ("top" === s || "left" === s ? n.insertBefore(a) : n.insertAfter(a))) : n.appendTo(e))
                    }(e, t, n), r._fireEvent("drag-move-item", {dragItem: n[0], avatar: t[0]}), e.preventDefault()
                }, {ns: r.id, passive: !1}), o.on(u.events.stopAll, function () {
                    r._fireEvent("drag-drop-item", {
                        dragItem: n[0],
                        avatar: t[0]
                    }), n.removeClass("dragged-item").removeClass(l.clsDragItem), t.remove(), o.off(u.events.moveAll, {ns: r.id}), o.off(u.events.stopAll, {ns: r.id})
                }, {ns: r.id}), l.drawDragMarker && (e.preventDefault(), e.stopPropagation()))
            })
        }, on: function () {
            this.canDrag = !0, this.element.find(".drag-item-marker").show()
        }, off: function () {
            this.canDrag = !1, this.element.find(".drag-item-marker").hide()
        }, toggle: function () {
            this.canDrag = this.canDrag ? this.off() : this.on()
        }, changeAttribute: function (e) {
            var t = this, n = this.element, i = this.options;
            "data-can-drag" === e && (i.canDtag = JSON.parse(n.attr("data-can-drag")), i.canDtag ? t.on() : t.off())
        }, destroy: function () {
            var e = this.element, t = this.options;
            return e.off(u.events.startAll, t.drawDragMarker ? t.dragMarker : t.dragItem), e
        }
    })
}(Metro, m4q), function (c, d) {
    "use strict";
    var u = c.utils, n = {
        dragContext: null,
        draggableDeferred: 0,
        dragElement: "self",
        dragArea: "parent",
        timeout: 0,
        boundaryRestriction: !0,
        onCanDrag: c.noop_true,
        onDragStart: c.noop,
        onDragStop: c.noop,
        onDragMove: c.noop,
        onDraggableCreate: c.noop
    };
    c.draggableSetup = function (e) {
        n = d.extend({}, n, e)
    }, window.metroDraggableSetup, c.draggableSetup(window.metroDraggableSetup), c.Component("draggable", {
        init: function (e, t) {
            return this._super(t, e, n, {
                drag: !1,
                move: !1,
                backup: {cursor: "default", zIndex: "0"},
                dragArea: null,
                dragElement: null,
                id: u.elementId("draggable")
            }), this
        }, _create: function () {
            this._createStructure(), this._createEvents(), this._fireEvent("draggable-create", {element: this.element})
        }, _createStructure: function () {
            var e = this, t = this.element, n = this.options, i = t.offset(),
                s = "self" !== n.dragElement ? t.find(n.dragElement) : t;
            t.data("canDrag", !0), (this.dragElement = s)[0].ondragstart = function () {
                return !1
            }, t.css("position", "absolute"), "document" !== n.dragArea && "window" !== n.dragArea || (n.dragArea = "body"), setImmediate(function () {
                e.dragArea = "parent" === n.dragArea ? t.parent() : d(n.dragArea), "parent" !== n.dragArea && (t.appendTo(e.dragArea), t.css({
                    top: i.top,
                    left: i.left
                }))
            }), t.attr("id") || t.attr("id", u.elementId("draggable"))
        }, _createEvents: function () {
            var a = this, o = this.element, r = this.options, l = {x: 0, y: 0};
            this.dragElement.on(c.events.startAll, function (e) {
                function t(e) {
                    var t = u.pageXY(e).y - s, e = u.pageXY(e).x - i;
                    r.boundaryRestriction && (t < 0 && (t = 0), e < 0 && (e = 0), t > a.dragArea.outerHeight() - o.outerHeight() && (t = a.dragArea.outerHeight() - o.outerHeight()), e > a.dragArea.outerWidth() - o.outerWidth() && (e = a.dragArea.outerWidth() - o.outerWidth())), l.y = t, l.x = e, o.css({
                        left: e,
                        top: t
                    })
                }

                var n = "parent" !== r.dragArea ? o.offset() : o.position(), i = u.pageXY(e).x - n.left,
                    s = u.pageXY(e).y - n.top;
                !1 !== o.data("canDrag") && !0 === u.exec(r.onCanDrag, [o]) && (!1 === c.isTouchable && 1 !== e.which || (a.drag = !0, a.backup.cursor = o.css("cursor"), a.backup.zIndex = o.css("z-index"), o.addClass("draggable"), t(e), a._fireEvent("drag-start", {
                    position: l,
                    context: r.dragContext
                }), d(document).on(c.events.moveAll, function (e) {
                    e.preventDefault(), t(e), a._fireEvent("drag-move", {position: l, context: r.dragContext})
                }, {ns: a.id, passive: !1}), d(document).on(c.events.stopAll, function () {
                    o.css({
                        cursor: a.backup.cursor,
                        zIndex: a.backup.zIndex
                    }).removeClass("draggable"), a.drag && (d(document).off(c.events.moveAll, {ns: a.id}), d(document).off(c.events.stopAll, {ns: a.id})), a.drag = !1, a.move = !1, a._fireEvent("drag-stop", {
                        position: l,
                        context: r.dragContext
                    })
                }, {ns: a.id})))
            })
        }, off: function () {
            this.element.data("canDrag", !1)
        }, on: function () {
            this.element.data("canDrag", !0)
        }, changeAttribute: function (e, t) {
        }, destroy: function () {
            var e = this.element;
            return this.dragElement.off(c.events.startAll), e
        }
    })
}(Metro, m4q), function (o, r) {
    "use strict";
    var l = o.utils, n = {
        dropdownDeferred: 0,
        dropFilter: null,
        toggleElement: null,
        noClose: !1,
        duration: 50,
        checkDropUp: !1,
        dropUp: !1,
        onDrop: o.noop,
        onUp: o.noop,
        onDropdownCreate: o.noop
    };
    o.dropdownSetup = function (e) {
        n = r.extend({}, n, e)
    }, window.metroDropdownSetup, o.dropdownSetup(window.metroDropdownSetup), o.Component("dropdown", {
        init: function (e, t) {
            return this._super(t, e, n, {_toggle: null, displayOrigin: null, isOpen: !1}), this
        }, _create: function () {
            var e = this, t = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("dropdown-create", {element: t}), t.hasClass("open") && (t.removeClass("open"), setTimeout(function () {
                e.open(!0)
            }, 0))
        }, _createStructure: function () {
            var e = this.element, t = this.options;
            t.dropUp && e.addClass("drop-up"), t = null !== t.toggleElement ? r(t.toggleElement) : 0 < e.siblings(".dropdown-toggle").length ? e.siblings(".dropdown-toggle") : e.prev(), this.displayOrigin = l.getStyleOne(e, "display"), e.hasClass("v-menu") && e.addClass("for-dropdown"), e.css("display", "none"), this._toggle = t
        }, _createEvents: function () {
            var n = this, i = this.element, s = this.options, e = this._toggle, a = i.parent();
            e.on(o.events.click, function (e) {
                var t;
                a.siblings(a[0].tagName).removeClass("active-container"), r(".active-container").removeClass("active-container"), "none" === i.css("display") || i.hasClass("keep-open") ? (r("[data-role=dropdown]").each(function (e, t) {
                    i.parents("[data-role=dropdown]").is(t) || r(t).hasClass("keep-open") || "none" === r(t).css("display") || (!l.isValue(s.dropFilter) || 0 < r(t).closest(s.dropFilter).length) && n._close(t)
                }), i.hasClass("horizontal") && (i.css({
                    visibility: "hidden",
                    display: "block"
                }), t = 0, r.each(i.children("li"), function () {
                    t += r(this).outerWidth(!0)
                }), i.css({
                    visibility: "visible",
                    display: "none"
                }), i.css("width", t)), n._open(i), a.addClass("active-container")) : n._close(i), e.preventDefault(), e.stopPropagation()
            }), !0 === s.noClose && i.addClass("keep-open").on(o.events.click, function (e) {
                e.stopPropagation()
            }), r(i).find("li.disabled a").on(o.events.click, function (e) {
                e.preventDefault()
            })
        }, _close: function (e, t) {
            e = r(e);
            var n = o.getPlugin(e, "dropdown"), i = n._toggle, s = n.options, a = "slideUp";
            i.removeClass("active-toggle").removeClass("active-control"), n.element.parent().removeClass("active-container"), t && (a = "hide"), e[a](t ? 0 : s.duration, function () {
                n._fireEvent("close"), n._fireEvent("up"), !s.dropUp && s.checkDropUp && n.element.removeClass("drop-up")
            }), this.isOpen = !1
        }, _open: function (e, t) {
            e = r(e);
            var n = o.getPlugin(e, "dropdown"), i = n._toggle, s = n.options;
            i.addClass("active-toggle").addClass("active-control"), e.slideDown(t ? 0 : s.duration, function () {
                !s.dropUp && s.checkDropUp && (l.inViewport(n.element[0]) || n.element.addClass("drop-up")), n._fireEvent("open"), n._fireEvent("drop")
            }), this.isOpen = !0
        }, close: function (e) {
            this._close(this.element, e)
        }, open: function (e) {
            this._open(this.element, e)
        }, toggle: function () {
            this.isOpen ? this.close() : this.open()
        }, changeAttribute: function () {
        }, destroy: function () {
            this._toggle.off(o.events.click)
        }
    }), r(document).on(o.events.click, function () {
        r("[data-role*=dropdown]").each(function () {
            var e = r(this);
            "none" === e.css("display") || e.hasClass("keep-open") || e.hasClass("stay-open") || e.hasClass("ignore-document-click") || o.getPlugin(e, "dropdown").close()
        })
    })
}(Metro, m4q), function (e, u) {
    "use strict";
    var h = e.utils, t = {
        init: function () {
            return this
        }, options: {csvDelimiter: "\t", csvNewLine: "\r\n", includeHeader: !0}, setup: function (e) {
            return this.options = u.extend({}, this.options, e), this
        }, base64: function (e) {
            return window.btoa(unescape(encodeURIComponent(e)))
        }, b64toBlob: function (e, t, n) {
            t = t || "", n = n || 512;
            for (var i = window.atob(e), s = [], a = 0; a < i.length; a += n) {
                for (var o = i.slice(a, a + n), r = new Array(o.length), l = 0; l < o.length; l += 1) r[l] = o.charCodeAt(l);
                var c = new window.Uint8Array(r);
                s.push(c)
            }
            return new Blob(s, {type: t})
        }, tableToCSV: function (e, t, n) {
            var i, s, a, o, r, l, c = "", d = u.extend({}, this.options, n);
            if (e = u(e)[0], h.bool(d.includeHeader)) for (s = e.querySelectorAll("thead")[0], a = 0; a < s.rows.length; a++) {
                for (r = s.rows[a], o = 0; o < r.cells.length; o++) l = r.cells[o], c += (o ? d.csvDelimiter : "") + l.textContent.trim();
                c += d.csvNewLine
            }
            for (i = e.querySelectorAll("tbody")[0], a = 0; a < i.rows.length; a++) {
                for (r = i.rows[a], o = 0; o < r.cells.length; o++) l = r.cells[o], c += (o ? d.csvDelimiter : "") + l.textContent.trim();
                c += d.csvNewLine
            }
            return h.isValue(t) ? this.createDownload(this.base64("\ufeff" + c), "application/csv", t) : c
        }, createDownload: function (e, t, n) {
            var i = document.createElement("a");
            return i.style.display = "none", document.body.appendChild(i), t = this.b64toBlob(e, t), t = window.URL.createObjectURL(t), i.href = t, i.download = n || h.elementId("download"), i.click(), window.URL.revokeObjectURL(t), document.body.removeChild(i), !0
        }, arrayToCsv: function (e, t, n) {
            for (var i, s = "", a = u.extend({}, this.options, n), o = 0; o < e.length; o++) "object" != typeof (i = e[o]) ? s += i + a.csvNewLine : (u.each(i, function (e, t) {
                s += (e ? a.csvDelimiter : "") + t.toString()
            }), s += a.csvNewLine);
            return h.isValue(t) ? this.createDownload(this.base64("\ufeff" + s), "application/csv", t) : s
        }
    };
    e.export = t.init(), !0 === window.METRO_GLOBAL_COMMON && (window.Export = e.export)
}(Metro, m4q), function (r, c) {
    "use strict";
    var n = {
        fileDeferred: 0,
        label: "",
        mode: "input",
        buttonTitle: "Choose file(s)",
        filesTitle: "file(s) selected",
        dropTitle: "<strong>Choose a file(s)</strong> or drop it here",
        dropIcon: "<span class='default-icon-upload'></span>",
        prepend: "",
        clsComponent: "",
        clsPrepend: "",
        clsButton: "",
        clsCaption: "",
        clsLabel: "",
        copyInlineStyles: !1,
        onSelect: r.noop,
        onFileCreate: r.noop
    };
    r.fileSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroFileSetup, r.fileSetup(window.metroFileSetup), r.Component("file", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("file-create", {element: e})
        }, _createStructure: function () {
            var e, t, n = this.element, i = this.options,
                s = c("<label>").addClass(("input" === i.mode ? " file " : "button" === i.mode ? " file-button " : " drop-zone ") + n[0].className).addClass(i.clsComponent),
                a = c("<span>").addClass("caption").addClass(i.clsCaption),
                o = c("<span>").addClass("files").addClass(i.clsCaption);
            if (s.insertBefore(n), n.appendTo(s), "drop" === i.mode || "dropzone" === i.mode ? (e = c(i.dropIcon).addClass("icon").appendTo(s), a.html(i.dropTitle).insertAfter(e), o.html("0 " + i.filesTitle).insertAfter(a)) : "button" === i.mode ? ((t = c("<span>").addClass("button").attr("tabindex", -1).html(i.buttonTitle)).appendTo(s), t.addClass(i.clsButton)) : (a.insertBefore(n), (t = c("<span>").addClass("button").attr("tabindex", -1).html(i.buttonTitle)).appendTo(s), t.addClass(i.clsButton), "rtl" === n.attr("dir") && s.addClass("rtl"), "" !== i.prepend && c("<div>").html(i.prepend).addClass("prepend").addClass(i.clsPrepend).appendTo(s)), !(n[0].className = "") === i.copyInlineStyles) for (var r = 0, l = n[0].style.length; r < l; r++) s.css(n[0].style[r], n.css(n[0].style[r]));
            i.label && (i = c("<label>").addClass("label-for-input").addClass(i.clsLabel).html(i.label).insertBefore(s), n.attr("id") && i.attr("for", n.attr("id")), "rtl" === n.attr("dir") && i.addClass("rtl")), n.is(":disabled") ? this.disable() : this.enable()
        }, _createEvents: function () {
            var n = this, i = this.element, s = this.options, t = i.closest("label"), a = t.find(".caption"),
                o = t.find(".files"), e = i.closest("form");
            e.length && e.on("reset", function () {
                n.clear()
            }), t.on(r.events.click, "button", function () {
                i[0].click()
            }), i.on(r.events.change, function () {
                var e, t = [];
                Array.from(this.files).forEach(function (e) {
                    t.push(e.name)
                }), "input" === s.mode ? (e = t.join(", "), a.html(e), a.attr("title", e)) : o.html(i[0].files.length + " " + s.filesTitle), n._fireEvent("select", {files: this.files})
            }), i.on(r.events.focus, function () {
                t.addClass("focused")
            }), i.on(r.events.blur, function () {
                t.removeClass("focused")
            }), "input" !== s.mode && (t.on("drag dragstart dragend dragover dragenter dragleave drop", function (e) {
                e.preventDefault()
            }), t.on("dragenter dragover", function () {
                t.addClass("drop-on")
            }), t.on("dragleave", function () {
                t.removeClass("drop-on")
            }), t.on("drop", function (e) {
                i[0].files = e.dataTransfer.files, o.html(i[0].files.length + " " + s.filesTitle), t.removeClass("drop-on"), i.trigger("change")
            }))
        }, clear: function () {
            var e = this.element, t = this.options;
            "input" === t.mode ? e.siblings(".caption").html("") : (e.siblings(".caption").html(t.dropTitle), e.siblings(".files").html("0 " + t.filesTitle)), e.val("")
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, toggleDir: function () {
            "rtl" === this.element.attr("dir") ? this.element.parent().addClass("rtl") : this.element.parent().removeClass("rtl")
        }, changeAttribute: function (e) {
            switch (e) {
                case"disabled":
                    this.toggleState();
                    break;
                case"dir":
                    this.toggleDir()
            }
        }, destroy: function () {
            var e = this.element, t = e.parent();
            return e.off(r.events.change), t.off(r.events.click, "button"), e
        }
    })
}(Metro, m4q), function (e, t) {
    "use strict";
    var n = e.utils, i = {
        gradientType: "linear",
        gradientShape: "",
        gradientPosition: "",
        gradientSize: "",
        gradientColors: "#000, #fff",
        gradientRepeat: !1,
        onGradientBoxCreate: e.noop
    };
    e.gradientBoxSetup = function (e) {
        i = t.extend({}, i, e)
    }, window.metroGradientBoxSetup, e.gradientBoxSetup(window.metroGradientBoxSetup), e.Component("gradient-box", {
        init: function (e, t) {
            return this._super(t, e, i, {
                colors: [],
                shape: "",
                size: "",
                position: "",
                type: "linear",
                func: "linear-gradient",
                repeat: !1
            }), this
        }, _create: function () {
            var e = this.options;
            this.colors = e.gradientColors.toArray(","), this.type = e.gradientType.toLowerCase(), this.shape = e.gradientShape.toLowerCase(), this.size = e.gradientSize.toLowerCase(), this.repeat = e.gradientRepeat, this.func = (this.repeat ? "repeating-" : "") + this.type + "-gradient", "linear" === this.type ? e.gradientPosition ? (this.position = !1 === isNaN(e.gradientPosition) ? e.gradientPosition + "deg" : e.gradientPosition, -1 === this.position.indexOf("deg") && -1 === this.position.indexOf("to ") && (this.position = "to " + this.position)) : this.position = "to bottom" : (this.position = e.gradientPosition.toLowerCase(), this.position && -1 === this.position.indexOf("at ") && (this.position = "at " + this.position)), this._createStructure(), this._setGradient(), this._fireEvent("gradient-box-create")
        }, _createStructure: function () {
            this.element.addClass("gradient-box")
        }, _setGradient: function () {
            var e = this.element, t = [];
            "radial" === this.type && this.shape && t.push(this.shape), "radial" === this.type && this.size && t.push(this.size), this.position && t.push(this.position), t = this.func + "(" + (t.length ? t.join(" ") + ", " : "") + this.colors.join(", ") + ")", e.css({background: t})
        }, changeAttribute: function (e, t) {
            if (-1 !== e.indexOf("data-gradient-")) {
                switch (e) {
                    case"data-gradient-type":
                        this.type = t, this.func = t.toLowerCase() + "-gradient";
                        break;
                    case"data-gradient-colors":
                        this.colors = t ? t.toArray(",") : ["#fff", "#000"];
                        break;
                    case"data-gradient-shape":
                        this.shape = t.toLowerCase();
                        break;
                    case"data-gradient-size":
                        this.size = t.toLowerCase();
                        break;
                    case"data-gradient-position":
                        this.position = t.toLowerCase();
                        break;
                    case"data-gradient-repeat":
                        this.repeat = n.bool(t)
                }
                this._setGradient()
            }
        }, destroy: function () {
            return this.element
        }
    })
}(Metro, m4q), function (i, a) {
    "use strict";
    var n = {gravatarDeferred: 0, email: "", size: 80, default: "mp", onGravatarCreate: i.noop};
    i.gravatarSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroGravatarSetup, i.gravatarSetup(window.metroGravatarSetup), i.Component("gravatar", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e = this.element;
            this.get(), this._fireEvent("gravatar-create", {element: e})
        }, getImage: function (e, t, n, i) {
            var s = a("<img>").attr("alt", e);
            return s.attr("src", this.getImageSrc(e, t)), !0 === i ? s : s[0]
        }, getImageSrc: function (e, t, n) {
            return void 0 === e || "" === e.trim() ? "" : (t = t || 80, n = i.utils.encodeURI(n) || "404", "//www.gravatar.com/avatar/" + i.md5(e.toLowerCase().trim()) + "?size=" + t + "&d=" + n)
        }, get: function () {
            var e = this.element, t = this.options, e = "IMG" === e[0].tagName ? e : e.find("img");
            if (0 !== e.length) return e.attr("src", this.getImageSrc(t.email, t.size, t.default)), this
        }, resize: function (e) {
            this.options.size = void 0 !== e ? e : this.element.attr("data-size"), this.get()
        }, email: function (e) {
            this.options.email = void 0 !== e ? e : this.element.attr("data-email"), this.get()
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-size":
                    this.resize();
                    break;
                case"data-email":
                    this.email()
            }
        }, destroy: function () {
            return this.element
        }
    })
}(Metro, m4q), function (s, a) {
    "use strict";
    var i = s.utils, n = {
        hintDeferred: 0,
        hintHide: 5e3,
        clsHint: "",
        hintText: "",
        hintPosition: s.position.TOP,
        hintOffset: 4,
        onHintShow: s.noop,
        onHintHide: s.noop,
        onHintCreate: s.noop
    };
    s.hintSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroHintSetup, s.hintSetup(window.metroHintSetup), s.Component("hint", {
        init: function (e, t) {
            return this._super(t, e, n, {hint: null, hint_size: {width: 0, height: 0}, id: i.elementId("hint")}), this
        }, _create: function () {
            this._createEvents(), this._fireEvent("hint-create", {element: this.element})
        }, _createEvents: function () {
            var e = this, t = this.element, n = this.options;
            t.on(s.events.enter, function () {
                e.createHint(), 0 < +n.hintHide && setTimeout(function () {
                    e.removeHint()
                }, n.hintHide)
            }), t.on(s.events.leave, function () {
                e.removeHint()
            }), a(window).on(s.events.scroll + " " + s.events.resize, function () {
                null !== e.hint && e.setPosition()
            }, {ns: this.id})
        }, createHint: function () {
            var e = this.elem, t = this.element, n = this.options,
                n = a("<div>").addClass("hint").addClass(n.clsHint).html(n.hintText);
            this.hint = n, this.hint_size = i.hiddenElementSize(n), a(".hint:not(.permanent-hint)").remove(), "TD" !== e.tagName && "TH" !== e.tagName || (e = a("<div/>").css("display", "inline-block").html(t.html()), t.html(e), this.element = e), this.setPosition(), n.appendTo(a("body")), this._fireEvent("hint-show", {hint: n[0]})
        }, setPosition: function () {
            var e = this.hint, t = this.hint_size, n = this.options, i = this.element;
            n.hintPosition === s.position.BOTTOM ? (e.addClass("bottom"), e.css({
                top: i.offset().top - a(window).scrollTop() + i.outerHeight() + n.hintOffset,
                left: i.offset().left + i.outerWidth() / 2 - t.width / 2 - a(window).scrollLeft()
            })) : n.hintPosition === s.position.RIGHT ? (e.addClass("right"), e.css({
                top: i.offset().top + i.outerHeight() / 2 - t.height / 2 - a(window).scrollTop(),
                left: i.offset().left + i.outerWidth() - a(window).scrollLeft() + n.hintOffset
            })) : n.hintPosition === s.position.LEFT ? (e.addClass("left"), e.css({
                top: i.offset().top + i.outerHeight() / 2 - t.height / 2 - a(window).scrollTop(),
                left: i.offset().left - t.width - a(window).scrollLeft() - n.hintOffset
            })) : (e.addClass("top"), e.css({
                top: i.offset().top - a(window).scrollTop() - t.height - n.hintOffset,
                left: i.offset().left - a(window).scrollLeft() + i.outerWidth() / 2 - t.width / 2
            }))
        }, removeHint: function () {
            var e = this, t = this.hint, n = this.options.onHintHide === s.noop ? 0 : 300;
            null !== t && (this._fireEvent("hint-hide", {hint: t[0]}), setTimeout(function () {
                t.hide(0, function () {
                    t.remove(), e.hint = null
                })
            }, n))
        }, changeText: function () {
            this.options.hintText = this.element.attr("data-hint-text")
        }, changeAttribute: function (e) {
            "data-hint-text" === e && this.changeText()
        }, destroy: function () {
            var e = this.element;
            this.removeHint(), e.off(s.events.enter + "-hint"), e.off(s.events.leave + "-hint"), a(window).off(s.events.scroll + "-hint")
        }
    })
}(Metro, m4q), function (i, o) {
    "use strict";
    var r = i.utils, l = {
        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            188: ",",
            190: ".",
            191: "/",
            224: "meta"
        },
        shiftNums: {
            "~": "`",
            "!": "1",
            "@": "2",
            "#": "3",
            $: "4",
            "%": "5",
            "^": "6",
            "&": "7",
            "*": "8",
            "(": "9",
            ")": "0",
            _: "-",
            "+": "=",
            ":": ";",
            '"': "'",
            "<": ",",
            ">": ".",
            "?": "/",
            "|": "\\"
        },
        shiftNumsInverse: {
            "`": "~",
            1: "!",
            2: "@",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "*",
            9: "(",
            0: ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        },
        textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],
        getKey: function (e) {
            var t = e.keyCode, n = String.fromCharCode(t).toLowerCase(),
                t = e.shiftKey ? l.shiftNums[n] || n : void 0 === l.specialKeys[t] ? n : l.specialKeys[t];
            return l.getModifier(e).length ? l.getModifier(e).join("+") + "+" + t : t
        },
        getModifier: function (e) {
            var t = [];
            return e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.shiftKey && t.push("shift"), t
        }
    };

    function e(s, a) {
        return this.each(function () {
            o(this).on(i.events.keyup + ".hotkey-method-" + s, function (e) {
                var t = l.getKey(e), n = o(this), i = "" + n.attr("href");
                s === t && (n.is("a") && i && "#" !== i.trim() && (window.location.href = i), r.exec(a, [e, t, s], this))
            })
        })
    }

    o.fn.hotkey = e, window.METRO_JQUERY && window.jquery_present && (jQuery.fn.hotkey = e), o(document).on(i.events.keyup + ".hotkey-data", function (e) {
        var t, n;
        METRO_HOTKEYS_FILTER_INPUT_ACCEPTING_ELEMENTS && /textarea|input|select/i.test(e.target.nodeName) || METRO_HOTKEYS_FILTER_CONTENT_EDITABLE && o(e.target).attr("contenteditable") || METRO_HOTKEYS_FILTER_TEXT_INPUTS && -1 < l.textAcceptingInputTypes.indexOf(e.target.type) || (n = l.getKey(e), r.keyInObject(i.hotkeys, n) && (t = o(i.hotkeys[n][0]), e = i.hotkeys[n][1], n = ("" + t.attr("href")).trim(), e ? r.exec(e) : t.is("a") && n && 0 < n.length && "#" !== n.trim() ? window.location.href = n : t.click()))
    })
}(Metro, m4q), function (e, a) {
    "use strict";
    var r = e.utils, n = {
        htmlcontainerDeferred: 0,
        method: "get",
        htmlSource: null,
        requestData: null,
        requestOptions: null,
        insertMode: "default",
        onHtmlLoad: e.noop,
        onHtmlLoadFail: e.noop,
        onHtmlLoadDone: e.noop,
        onHtmlContainerCreate: e.noop
    };
    e.htmlContainerSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroHtmlContainerSetup, e.htmlContainerSetup(window.metroHtmlContainerSetup), e.Component("html-container", {
        init: function (e, t) {
            return this._super(t, e, n, {data: {}, opt: {}, htmlSource: ""}), this
        }, _create: function () {
            var e = this.element, t = this.options;
            "string" == typeof t.requestData && (t.requestData = JSON.parse(t.requestData)), r.isObject(t.requestData) && (this.data = r.isObject(t.requestData)), "string" == typeof t.requestOptions && (t.requestOptions = JSON.parse(t.requestOptions)), r.isObject(t.requestOptions) && (this.opt = r.isObject(t.requestOptions)), t.method = t.method.toLowerCase(), r.isValue(t.htmlSource) && (this.htmlSource = t.htmlSource, this._load()), this._fireEvent("html-container-create", {element: e})
        }, _load: function () {
            var n = this, i = this.element, s = this.options;
            a[s.method](this.htmlSource, this.data, this.opt).then(function (e) {
                var t = a(e);
                switch (0 === t.length && (t = a("<div>").html(e)), s.insertMode.toLowerCase()) {
                    case"prepend":
                        i.prepend(t);
                        break;
                    case"append":
                        i.append(t);
                        break;
                    case"replace":
                        t.insertBefore(i).script(), i.remove();
                        break;
                    default:
                        i.html(t)
                }
                n._fireEvent("html-load", {data: e, source: s.htmlSource, requestData: n.data, requestOptions: n.opt})
            }, function (e) {
                n._fireEvent("html-load-fail", {xhr: e})
            })
        }, load: function (e, t, n) {
            e && (this.htmlSource = e), t && (this.data = r.isObject(t)), n && (this.opt = r.isObject(n)), this._load()
        }, changeAttribute: function (e) {
            var t, n, i, s = this, a = this.element, o = this.options;
            switch (e) {
                case"data-html-source":
                    i = a.attr("data-html-source"), r.isNull(i) || ("" === i.trim() && a.html(""), o.htmlSource = i, s._load());
                    break;
                case"data-insert-mode":
                    n = a.attr("data-insert-mode"), r.isValue(n) && (o.insertMode = n);
                    break;
                case"data-request-data":
                    t = a.attr("data-request-data"), s.load(o.htmlSource, t)
            }
        }, destroy: function () {
        }
    })
}(Metro, m4q), function (e, t) {
    "use strict";
    var n = {
        image: null,
        size: "cover",
        repeat: !1,
        color: "transparent",
        attachment: "scroll",
        origin: "border",
        onImageBoxCreate: e.noop
    };
    e.imageBoxSetup = function (e) {
        n = t.extend({}, n, e)
    }, window.metroImageBoxSetup, e.imageBoxSetup(window.metroImageBoxSetup), e.Component("image-box", {
        init: function (e, t) {
            return this._super(t, e, n, {}), this
        }, _create: function () {
            this._createStructure(), this._fireEvent("image-box-create")
        }, _createStructure: function () {
            this.element.addClass("image-box"), this._drawImage()
        }, _drawImage: function () {
            var e, t = this.element, n = this.options, i = new Image;
            t.attr("data-original") || t.attr("data-original", n.image), t.css({
                backgroundImage: "url(" + n.image + ")",
                backgroundSize: n.size,
                backgroundRepeat: n.repeat ? "repeat" : "no-repeat",
                backgroundColor: n.color,
                backgroundAttachment: n.attachment,
                backgroundOrigin: n.origin
            }), i.src = n.image, i.onload = function () {
                e = this.height >= this.width, t.removeClass("image-box__portrait image-box__landscape").addClass("image-box__" + (e ? "portrait" : "landscape"))
            }
        }, changeAttribute: function (e, t) {
            e = e.replace("data-", "");
            -1 < ["image", "size", "repeat", "color", "attachment", "origin"].indexOf(e) && (this.options[e] = t, this._drawImage())
        }, destroy: function () {
            return this.element
        }
    })
}(Metro, m4q), function (t, r) {
    "use strict";
    var l = t.utils, n = {
        imagecompareDeferred: 0,
        width: "100%",
        height: "auto",
        onSliderMove: t.noop,
        onImageCompareCreate: t.noop
    };
    t.imageCompareSetup = function (e) {
        n = r.extend({}, n, e)
    }, window.metroImageCompareSetup, t.imageCompareSetup(window.metroImageCompareSetup), t.Component("image-compare", {
        init: function (e, t) {
            return this._super(t, e, n, {id: l.elementId("image-compare")}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("image-compare-create", {element: e})
        }, _createStructure: function () {
            var n, i, e, s, a, t = this.element, o = this.options;
            switch (l.isValue(t.attr("id")) || t.attr("id", l.elementId("image-compare")), t.addClass("image-compare").css({width: o.width}), s = t.width(), o.height) {
                case"16/9":
                case"21/9":
                case"4/3":
                    a = l.aspectRatioH(s, o.height);
                    break;
                case"auto":
                    a = l.aspectRatioH(s, "16/9");
                    break;
                default:
                    a = o.height
            }
            t.css({height: a}), n = r("<div>").addClass("image-container").appendTo(t), i = r("<div>").addClass("image-container-overlay").appendTo(t).css({width: s / 2}), (e = r("<div>").addClass("image-slider").appendTo(t)).css({
                top: a / 2 - e.height() / 2,
                left: s / 2 - e.width() / 2
            }), t = t.find("img"), r.each(t, function (e) {
                var t = r("<div>").addClass("image-wrapper");
                t.css({width: s, height: a, backgroundImage: "url(" + this.src + ")"}), t.appendTo(0 === e ? n : i)
            })
        }, _createEvents: function () {
            var i = this, s = this.element, n = this.options, a = s.find(".image-container-overlay"),
                o = s.find(".image-slider");
            o.on(t.events.startAll, function () {
                var n = s.width();
                r(document).on(t.events.moveAll, function (e) {
                    var t = l.getCursorPositionX(s[0], e);
                    t < 0 && (t = 0), n < t && (t = n), a.css({width: t}), e = t - o.width() / 2, o.css({left: e}), i._fireEvent("slider-move", {
                        x: t,
                        l: e
                    })
                }, {ns: i.id}), r(document).on(t.events.stopAll, function () {
                    r(document).off(t.events.moveAll, {ns: i.id}), r(document).off(t.events.stopAll, {ns: i.id})
                }, {ns: i.id})
            }), r(window).on(t.events.resize, function () {
                var e, t = s.width();
                if ("100%" === n.width) {
                    switch (n.height) {
                        case"16/9":
                        case"21/9":
                        case"4/3":
                            e = l.aspectRatioH(t, n.height);
                            break;
                        case"auto":
                            e = l.aspectRatioH(t, "16/9");
                            break;
                        default:
                            e = n.height
                    }
                    s.css({height: e}), r.each(s.find(".image-wrapper"), function () {
                        r(this).css({width: t, height: e})
                    }), s.find(".image-container-overlay").css({width: t / 2}), o.css({
                        top: e / 2 - o.height() / 2,
                        left: t / 2 - o.width() / 2
                    })
                }
            }, {ns: this.id})
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element;
            return e.off(t.events.start), r(window).off(t.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q), function (t, r) {
    "use strict";
    var i = t.utils, n = {
        useBackground: !1,
        backgroundSize: "cover",
        backgroundPosition: "top left",
        clsImageGrid: "",
        clsImageGridItem: "",
        clsImageGridImage: "",
        onItemClick: t.noop,
        onDrawItem: t.noop,
        onImageGridCreate: t.noop
    };
    t.imageGridSetup = function (e) {
        n = r.extend({}, n, e)
    }, window.metroImageGridSetup, t.imageGridSetup(window.metroImageGridSetup), t.Component("image-grid", {
        init: function (e, t) {
            return this._super(t, e, n, {items: []}), this
        }, _create: function () {
            this.items = this.element.children("img"), this._createStructure(), this._createEvents(), this._fireEvent("image-grid-create")
        }, _createStructure: function () {
            var e = this.element, t = this.options;
            e.addClass("image-grid").addClass(t.clsImageGrid), this._createItems()
        }, _createEvents: function () {
            var e = this;
            this.element.on(t.events.click, ".image-grid__item", function () {
                e._fireEvent("item-click", {item: this})
            })
        }, _createItems: function () {
            var s = this, a = this.element, o = this.options, e = this.items;
            a.clear(), e.each(function () {
                var t = r(this), n = this.src,
                    i = r("<div>").addClass("image-grid__item").addClass(o.clsImageGridItem).appendTo(a), e = new Image;
                e.src = n, e.onload = function () {
                    var e = this.height >= this.width;
                    i.addClass(e ? "image-grid__item-portrait" : "image-grid__item-landscape"), t.addClass(o.clsImageGridImage).appendTo(i), o.useBackground && (i.css({
                        background: "url(" + n + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: o.backgroundSize,
                        backgroundPosition: o.backgroundPosition
                    }).attr("data-original", t.attr("data-original") || n).attr("data-title", t.attr("alt") || t.attr("data-title") || ""), t.visible(!1)), s._fireEvent("draw-item", {
                        item: i[0],
                        image: t[0]
                    })
                }
            })
        }, changeAttribute: function (e, t) {
            var n = this.options;
            "data-use-background" === e && (n.useBackground = i.bool(t), this._createItems()), "data-background-size" === e && (n.backgroundSize = t, this._createItems()), "data-background-position" === e && (n.backgroundPosition = t, this._createItems())
        }, destroy: function () {
            this.element.remove()
        }
    })
}(Metro, m4q), function (t, h) {
    "use strict";
    var p = t.utils, n = {
        imagemagnifierDeferred: 0,
        width: "100%",
        height: "auto",
        lensSize: 100,
        lensType: "square",
        magnifierZoom: 2,
        magnifierMode: "glass",
        magnifierZoomElement: null,
        clsMagnifier: "",
        clsLens: "",
        clsZoom: "",
        onMagnifierMove: t.noop,
        onImageMagnifierCreate: t.noop
    };
    t.imageMagnifierSetup = function (e) {
        n = h.extend({}, n, e)
    }, window.metroImageMagnifierSetup, t.imageMagnifierSetup(window.metroImageMagnifierSetup), t.Component("image-magnifier", {
        init: function (e, t) {
            return this._super(t, e, n, {zoomElement: null, id: p.elementId("image-magnifier")}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("image-magnifier-create", {element: e})
        }, _createStructure: function () {
            var e, t, n = this.element, i = this.options, s = n.find("img");
            if (0 === s.length) throw new Error("Image not defined");
            switch (p.isValue(n.attr("id")) || n.attr("id", p.elementId("image-magnifier")), n.addClass("image-magnifier").css({width: i.width}).addClass(i.clsMagnifier), e = n.width(), i.height) {
                case"16/9":
                case"21/9":
                case"4/3":
                    t = p.aspectRatioH(e, i.height);
                    break;
                case"auto":
                    t = p.aspectRatioH(e, "16/9");
                    break;
                default:
                    t = i.height
            }
            n.css({height: t});
            var a, o, r, l = e / 2 - i.lensSize / 2, c = t / 2 - i.lensSize / 2;
            "glass" === i.magnifierMode ? (r = h("<div>").addClass("image-magnifier-glass").appendTo(n)).css({
                width: i.lensSize,
                height: i.lensSize,
                borderRadius: "circle" !== i.lensType ? 0 : "50%",
                top: c,
                left: l,
                backgroundImage: "url(" + s[0].src + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "-" + (l * i.magnifierZoom - i.lensSize / 4 + 4) + "px -" + (c * i.magnifierZoom - i.lensSize / 4 + 4) + "px",
                backgroundSize: s[0].width * i.magnifierZoom + "px " + s[0].height * i.magnifierZoom + "px"
            }).addClass(i.clsLens) : ((r = h("<div>").addClass("image-magnifier-glass").appendTo(n)).css({
                width: i.lensSize,
                height: i.lensSize,
                borderRadius: 0,
                borderWidth: 1,
                top: c,
                left: l
            }).addClass(i.clsLens), p.isValue(i.magnifierZoomElement) && 0 !== h(i.magnifierZoomElement).length ? this.zoomElement = h(i.magnifierZoomElement) : this.zoomElement = h("<div>").insertAfter(n), a = r[0].offsetWidth * i.magnifierZoom, o = r[0].offsetHeight * i.magnifierZoom, n = a / i.lensSize, r = o / i.lensSize, this.zoomElement.css({
                width: a,
                height: o,
                backgroundImage: "url(" + s[0].src + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "-" + l * n + "px -" + c * r + "px",
                backgroundSize: s[0].width * n + "px " + s[0].height * r + "px"
            }).addClass(i.clsZoom))
        }, _createEvents: function () {
            var s, a, n = this, i = this.element, o = this.options, r = i.find(".image-magnifier-glass"),
                l = r[0].offsetWidth / 2, c = i.find("img")[0], d = this.zoomElement;
            h(window).on(t.events.resize, function () {
                var e = i.width() / 2 - o.lensSize / 2, t = i.height() / 2 - o.lensSize / 2;
                "glass" === o.magnifierMode && r.css({
                    backgroundPosition: "-" + (e * o.magnifierZoom - o.lensSize / 4 + 4) + "px -" + (t * o.magnifierZoom - o.lensSize / 4 + 4) + "px",
                    backgroundSize: c.width * o.magnifierZoom + "px " + c.height * o.magnifierZoom + "px"
                })
            }, {ns: this.id}), "glass" !== o.magnifierMode && (s = d[0].offsetWidth / l / 2, a = d[0].offsetHeight / l / 2, d.css({backgroundSize: c.width * s + "px " + c.height * a + "px"}));

            function u(e) {
                var t, n, i = parseInt(o.magnifierZoom);
                "glass" === o.magnifierMode ? (t = e.x, n = e.y, t > c.width - l / i && (t = c.width - l / i), t < l / i && (t = l / i), n > c.height - l / i && (n = c.height - l / i), n < l / i && (n = l / i), r.css({
                    top: n - l,
                    left: t - l,
                    backgroundPosition: "-" + (t * i - l + 4) + "px -" + (n * i - l + 4) + "px"
                })) : (t = e.x - l, n = e.y - l, t > c.width - 2 * l && (t = c.width - 2 * l), t < 0 && (t = 0), n > c.height - 2 * l && (n = c.height - 2 * l), n < 0 && (n = 0), r.css({
                    top: n,
                    left: t
                }), d.css({backgroundPosition: "-" + t * s + "px -" + n * a + "px"}))
            }

            i.on(t.events.move, function (e) {
                var t = p.getCursorPosition(c, e);
                u(t), n._fireEvent("magnifier-move", {
                    pos: t,
                    glass: r[0],
                    zoomElement: d ? d[0] : void 0
                }), e.preventDefault()
            }), i.on(t.events.leave, function () {
                var e = i.width() / 2 - o.lensSize / 2, t = i.height() / 2 - o.lensSize / 2;
                r.animate({draw: {top: t, left: e}}), u({x: e + o.lensSize / 2, y: t + o.lensSize / 2})
            })
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element;
            return e.off(t.events.move), e.off(t.events.leave), e
        }
    })
}(Metro, m4q), function (e, t) {
    "use strict";
    var n = {
        size: "100x100",
        width: null,
        height: null,
        color: "#f8f8f8",
        textColor: "#292929",
        font: "12px sans-serif",
        text: "",
        showText: !0,
        onImagePlaceholderCreate: e.noop
    };
    e.imagePlaceholderSetup = function (e) {
        n = t.extend({}, n, e)
    }, window.metroImagePlaceholderSetup, e.imagePlaceholderSetup(window.metroImagePlaceholderSetup), e.Component("image-placeholder", {
        init: function (e, t) {
            return this._super(t, e, n, {width: 0, height: 0}), this
        }, _create: function () {
            this._createStructure(), this._createEvents(), this._fireEvent("image-placeholder-create")
        }, _createStructure: function () {
            var e = this.element, t = this.options, n = t.size.toArray("x");
            this.width = t.width || n[0], this.height = t.height || n[1], e.attr("src", this._createPlaceholder())
        }, _createEvents: function () {
        }, _createPlaceholder: function () {
            var e = this.options, t = document.createElement("canvas"), n = t.getContext("2d"), i = this.width,
                s = this.height;
            return t.width = parseInt(i), t.height = parseInt(s), n.clearRect(0, 0, i, s), n.fillStyle = e.color, n.fillRect(0, 0, i, s), n.fillStyle = e.textColor, n.font = e.font, n.translate(i / 2, s / 2), n.textAlign = "center", n.textBaseline = "middle", e.showText && n.fillText(e.text || i + " × " + s, 0, 0), t.toDataURL()
        }, destroy: function () {
            this.element.remove()
        }
    })
}(Metro, m4q), function (o, i) {
    "use strict";
    var r = o.utils, n = {
        infoboxDeferred: 0,
        type: "",
        width: 480,
        height: "auto",
        overlay: !0,
        overlayColor: "#000000",
        overlayAlpha: .5,
        autoHide: 0,
        removeOnClose: !1,
        closeButton: !0,
        clsBox: "",
        clsBoxContent: "",
        clsOverlay: "",
        onOpen: o.noop,
        onClose: o.noop,
        onInfoBoxCreate: o.noop
    };
    o.infoBoxSetup = function (e) {
        n = i.extend({}, n, e)
    }, window.metroInfoBoxSetup, o.infoBoxSetup(window.metroInfoBoxSetup), o.Component("info-box", {
        init: function (e, t) {
            return this._super(t, e, n, {overlay: null, id: r.elementId("info-box")}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("info-box-create", {element: e})
        }, _overlay: function () {
            var e = this.options, t = i("<div>");
            return t.addClass("overlay").addClass(e.clsOverlay), "transparent" === e.overlayColor ? t.addClass("transparent") : t.css({background: o.colors.toRGBA(e.overlayColor, e.overlayAlpha)}), t
        }, _createStructure: function () {
            var e, t = this.element, n = this.options;
            !0 === n.overlay && (this.overlay = this._overlay()), t.addClass("info-box").addClass(n.type).addClass(n.clsBox), 0 === (e = t.find("closer")).length && (e = i("<span>").addClass("button square closer")).appendTo(t), !0 !== n.closeButton && e.hide(), 0 < (e = t.find(".info-box-content")).length && e.addClass(n.clsBoxContent), t.css({
                width: n.width,
                height: n.height,
                visibility: "hidden",
                top: "100%",
                left: (i(window).width() - t.outerWidth()) / 2
            }), t.appendTo(i("body"))
        }, _createEvents: function () {
            var e = this, t = this.element;
            t.on(o.events.click, ".closer", function () {
                e.close()
            }), t.on(o.events.click, ".js-dialog-close", function () {
                e.close()
            }), i(window).on(o.events.resize, function () {
                e.reposition()
            }, {ns: this.id})
        }, _setPosition: function () {
            var e = this.element;
            e.css({top: (i(window).height() - e.outerHeight()) / 2, left: (i(window).width() - e.outerWidth()) / 2})
        }, reposition: function () {
            this._setPosition()
        }, setContent: function (e) {
            var t = this.element.find(".info-box-content");
            0 !== t.length && (t.html(e), this.reposition())
        }, setType: function (e) {
            this.element.removeClass("success info alert warning").addClass(e)
        }, open: function () {
            var e = this, t = this.element, n = this.options;
            !0 === n.overlay && this.overlay.appendTo(i("body")), this._setPosition(), t.css({visibility: "visible"}), this._fireEvent("open"), t.data("open", !0), 0 < parseInt(n.autoHide) && setTimeout(function () {
                e.close()
            }, parseInt(n.autoHide))
        }, close: function () {
            var e = this.element, t = this.options;
            !0 === t.overlay && i("body").find(".overlay").remove(), e.css({
                visibility: "hidden",
                top: "100%"
            }), this._fireEvent("close"), e.data("open", !1), !0 === t.removeOnClose && (this.destroy(), e.remove())
        }, isOpen: function () {
            return !0 === this.element.data("open")
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element;
            return e.off("all"), i(window).off(o.events.resize, {ns: this.id}), e
        }
    }), o.infobox = {
        isInfoBox: function (e) {
            return r.isMetroObject(e, "infobox")
        }, open: function (e, t, n) {
            if (!this.isInfoBox(e)) return !1;
            e = o.getPlugin(e, "infobox");
            void 0 !== t && e.setContent(t), void 0 !== n && e.setType(n), e.open()
        }, close: function (e) {
            if (!this.isInfoBox(e)) return !1;
            o.getPlugin(e, "infobox").close()
        }, setContent: function (e, t) {
            if (!this.isInfoBox(e)) return !1;
            void 0 === t && (t = "");
            e = o.getPlugin(e, "infobox");
            e.setContent(t), e.reposition()
        }, setType: function (e, t) {
            if (!this.isInfoBox(e)) return !1;
            e = o.getPlugin(e, "infobox");
            e.setType(t), e.reposition()
        }, isOpen: function (e) {
            return !!this.isInfoBox(e) && o.getPlugin(e, "infobox").isOpen()
        }, create: function (e, t, n, i) {
            var s = r.$(), a = void 0 !== t ? t : "", t = s("<div>").appendTo(s("body"));
            s("<div>").addClass("info-box-content").appendTo(t);
            var n = s.extend({}, {removeOnClose: !0, type: a}, void 0 !== n ? n : {});
            return n._runtime = !0, t.infobox(n), (n = o.getPlugin(t, "infobox")).setContent(e), !1 !== i && n.open(), t
        }
    }
}(Metro, m4q), function (u, a) {
    "use strict";
    var h = u.utils, n = {
        maskPattern: ".",
        mask: null,
        maskPlaceholder: "_",
        maskEditableStart: 0,
        thresholdInterval: 300,
        onChar: u.noop,
        onInputMaskCreate: u.noop
    };
    u.inputMaskSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroInputMaskSetup, u.inputMaskSetup(window.metroInputMaskSetup), u.Component("input-mask", {
        init: function (e, t) {
            return a.device ? (t.setAttribute && t.setAttribute("placeholder", e.mask), void console.warn("The component input-mask can't be initialized, because you run it on a mobile device!")) : (this._super(t, e, n, {
                pattern: null,
                mask: "",
                maskArray: [],
                placeholder: "",
                length: 0,
                thresholdTimer: null,
                id: h.elementId("input-mask")
            }), this)
        }, _create: function () {
            this._createStructure(), this._createEvents(), this._fireEvent("input-mask-create")
        }, _createStructure: function () {
            var e = this.options;
            if (!e.mask) throw new Error("You must provide a pattern for masked input.");
            if ("string" != typeof e.maskPlaceholder || 1 < e.maskPlaceholder.length) throw new Error("Mask placeholder should be a single character or an empty string.");
            this.placeholder = e.maskPlaceholder, this.mask = "" + e.mask, this.maskArray = this.mask.split(""), this.pattern = new RegExp("^" + e.maskPattern + "+$"), this.length = this.mask.length, this._showValue()
        }, _createEvents: function () {
            function a(e) {
                return e < r.mask.length && r.mask.charAt(e) === r.placeholder
            }

            function o(e) {
                for (var t = r.maskArray, n = e; n <= t.length; n++) if (t[n] === r.placeholder) return n;
                return e
            }

            function t() {
                clearInterval(r.thresholdTimer), r.thresholdTimer = null
            }

            var r = this, e = this.element, l = this.options, c = l.maskEditableStart, n = this.id, d = function (e) {
                r.elem.setSelectionRange(e, e)
            };
            e.on("change", function () {
                "" === this.value && (this.value = r.mask, d(c))
            }, {ns: n}), e.on("focus click", function () {
                this.selectionStart < c && d(c), d(o(this.selectionStart))
            }, {ns: n}), e.on("keydown", function (e) {
                var t = this.selectionStart, n = this.value, i = e.code, s = e.key;
                if ("ArrowRight" === i || "End" === i) return !0;
                t >= r.length && -1 === ["Backspace", "Home", "ArrowLeft", "ArrowUp"].indexOf(i) ? e.preventDefault() : "Home" === i || "ArrowUp" === i ? (e.preventDefault(), d(c)) : "ArrowLeft" === i ? t - 1 < c && e.preventDefault() : "Backspace" === i ? (e.preventDefault(), c <= t - 1 && (a(t - 1) && this.value.charAt(t - 1) !== r.placeholder && (this.value = n.substr(0, t - 1) + r.placeholder + n.substr(t)), d(t - 1))) : "Space" === i ? (e.preventDefault(), d(t + 1)) : r.pattern.test(s) ? (e.preventDefault(), a(t) && (this.value = n.substr(0, t) + (l.onChar === u.noop ? s : h.exec(l.onChar, [s], this)) + n.substr(t + 1), d(o(t + 1)))) : e.preventDefault()
            }, {ns: n}), e.on("keyup", function () {
                var e = this;
                t(), r.thresholdTimer = setInterval(function () {
                    t(), d(o(e.selectionStart))
                }, l.thresholdInterval)
            }, {ns: n})
        }, _showValue: function () {
            var n, i = this, e = this.elem, s = new Array(this.length);
            e.value ? (n = e.value, a.each(this.maskArray, function (e, t) {
                n[e] === t || i.pattern.test(n[e]) ? s[e] = n[e] : s[e] = i.placeholder
            }), this.elem.value = s.join("")) : e.value = this.mask
        }, destroy: function () {
            var e = this.element, t = this.id;
            return e.off("change", {ns: t}), e.off("focus", {ns: t}), e.off("click", {ns: t}), e.off("keydown", {ns: t}), e.off("keyup", {ns: t}), e
        }
    })
}(Metro, m4q), function (e, i) {
    "use strict";
    var s = e.utils, n = {
        materialinputDeferred: 0,
        label: "",
        informer: "",
        icon: "",
        permanentLabel: !1,
        clsComponent: "",
        clsInput: "",
        clsLabel: "",
        clsInformer: "",
        clsIcon: "",
        clsLine: "",
        onInputCreate: e.noop
    };
    e.materialInputSetup = function (e) {
        n = i.extend({}, n, e)
    }, window.metroMaterialInputSetup, e.materialInputSetup(window.metroMaterialInputSetup), e.Component("material-input", {
        init: function (e, t) {
            return this._super(t, e, n, {history: [], historyIndex: -1}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("input-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options, n = i("<div>").addClass("input-material " + e[0].className);
            e[0].className = "", e.attr("autocomplete", "nope"), void 0 === e.attr("type") && e.attr("type", "text"), n.insertBefore(e), e.appendTo(n), s.isValue(t.label) && i("<span>").html(t.label).addClass("label").addClass(t.clsLabel).insertAfter(e), s.isValue(t.informer) && i("<span>").html(t.informer).addClass("informer").addClass(t.clsInformer).insertAfter(e), s.isValue(t.icon) && (n.addClass("with-icon"), i("<span>").html(t.icon).addClass("icon").addClass(t.clsIcon).insertAfter(e)), n.append(i("<hr>").addClass(t.clsLine)), !0 === t.permanentLabel && n.addClass("permanent-label"), n.addClass(t.clsComponent), e.addClass(t.clsInput), e.is(":disabled") ? this.disable() : this.enable()
        }, _createEvents: function () {
        }, clear: function () {
            this.element.val("")
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e) {
            "disabled" === e && this.toggleState()
        }, destroy: function () {
            return this.element
        }
    })
}(Metro, m4q), function (o, l) {
    "use strict";
    var c = o.utils, n = {
        inputDeferred: 0,
        label: "",
        autocomplete: null,
        autocompleteDivider: ",",
        autocompleteListHeight: 200,
        history: !1,
        historyPreset: "",
        historyDivider: "|",
        preventSubmit: !1,
        defaultValue: "",
        size: "default",
        prepend: "",
        append: "",
        copyInlineStyles: !1,
        searchButton: !1,
        clearButton: !0,
        revealButton: !0,
        clearButtonIcon: "<span class='default-icon-cross'></span>",
        revealButtonIcon: "<span class='default-icon-eye'></span>",
        searchButtonIcon: "<span class='default-icon-search'></span>",
        customButtons: [],
        searchButtonClick: "submit",
        clsComponent: "",
        clsInput: "",
        clsPrepend: "",
        clsAppend: "",
        clsClearButton: "",
        clsRevealButton: "",
        clsCustomButton: "",
        clsSearchButton: "",
        clsLabel: "",
        onAutocompleteSelect: o.noop,
        onHistoryChange: o.noop,
        onHistoryUp: o.noop,
        onHistoryDown: o.noop,
        onClearClick: o.noop,
        onRevealClick: o.noop,
        onSearchButtonClick: o.noop,
        onEnterClick: o.noop,
        onInputCreate: o.noop
    };
    o.inputSetup = function (e) {
        n = l.extend({}, n, e)
    }, window.metroInputSetup, o.inputSetup(window.metroInputSetup), o.Component("input", {
        init: function (e, t) {
            return this._super(t, e, n, {history: [], historyIndex: -1, autocomplete: []}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("input-create", {element: e})
        }, _createStructure: function () {
            var e, t = this, n = this.element, i = this.options, s = l("<div>").addClass("input " + n[0].className),
                a = l("<div>").addClass("button-group");
            if (c.isValue(i.historyPreset) && (l.each(i.historyPreset.toArray(i.historyDivider), function () {
                t.history.push(this)
            }), t.historyIndex = t.history.length - 1), void 0 === n.attr("type") && n.attr("type", "text"), s.insertBefore(n), n.appendTo(s), a.appendTo(s), c.isValue(n.val().trim()) || n.val(i.defaultValue), !0 !== i.clearButton || n[0].readOnly || l("<button>").addClass("button input-clear-button").addClass(i.clsClearButton).attr("tabindex", -1).attr("type", "button").html(i.clearButtonIcon).appendTo(a), "password" === n.attr("type") && !0 === i.revealButton && l("<button>").addClass("button input-reveal-button").addClass(i.clsRevealButton).attr("tabindex", -1).attr("type", "button").html(i.revealButtonIcon).appendTo(a), !0 === i.searchButton && l("<button>").addClass("button input-search-button").addClass(i.clsSearchButton).attr("tabindex", -1).attr("type", "submit" === i.searchButtonClick ? "submit" : "button").html(i.searchButtonIcon).appendTo(a), c.isValue(i.prepend) && l("<div>").html(i.prepend).addClass("prepend").addClass(i.clsPrepend).appendTo(s), c.isValue(i.append) && l("<div>").html(i.append).addClass("append").addClass(i.clsAppend).appendTo(s), "string" == typeof i.customButtons && (i.customButtons = c.isObject(i.customButtons)), "object" == typeof i.customButtons && 0 < c.objectLength(i.customButtons) && l.each(i.customButtons, function () {
                var e = this, n = l("<button>");
                n.addClass("button input-custom-button").addClass(i.clsCustomButton).addClass(e.cls).attr("tabindex", -1).attr("type", "button").html(e.html), e.attr && "object" == typeof e.attr && l.each(e.attr, function (e, t) {
                    n.attr(l.dashedName(e), t)
                }), n.data("action", e.onclick), n.appendTo(a)
            }), c.isValue(n.attr("data-exclaim")) && s.attr("data-exclaim", n.attr("data-exclaim")), "rtl" === n.attr("dir") && s.addClass("rtl").attr("dir", "rtl"), !(n[0].className = "") === i.copyInlineStyles) for (var o = 0, r = n[0].style.length; o < r; o++) s.css(n[0].style[o], n.css(n[0].style[o]));
            s.addClass(i.clsComponent), n.addClass(i.clsInput), "default" !== i.size && s.css({width: i.size}), c.isNull(i.autocomplete) || (e = c.isObject(i.autocomplete), this.autocomplete = !1 !== e ? e : i.autocomplete.toArray(i.autocompleteDivider), l("<div>").addClass("autocomplete-list").css({
                maxHeight: i.autocompleteListHeight,
                display: "none"
            }).appendTo(s)), i.label && (e = l("<label>").addClass("label-for-input").addClass(i.clsLabel).html(i.label).insertBefore(s), n.attr("id") && e.attr("for", n.attr("id")), "rtl" === n.attr("dir") && e.addClass("rtl")), n.is(":disabled") ? this.disable() : this.enable()
        }, _createEvents: function () {
            var n = this, i = this.element, s = this.options, e = i.closest(".input"), a = e.find(".autocomplete-list");
            e.on(o.events.click, ".input-clear-button", function () {
                var e = i.val();
                i.val(c.isValue(s.defaultValue) ? s.defaultValue : "").fire("clear").fire("change").fire("keyup").focus(), 0 < a.length && a.css({display: "none"}), n._fireEvent("clear-click", {
                    prev: e,
                    val: i.val()
                })
            }), e.on(o.events.click, ".input-reveal-button", function () {
                "password" === i.attr("type") ? i.attr("type", "text") : i.attr("type", "password"), n._fireEvent("reveal-click", {val: i.val()})
            }), e.on(o.events.click, ".input-search-button", function () {
                "submit" !== s.searchButtonClick ? n._fireEvent("search-button-click", {
                    val: i.val(),
                    button: this
                }) : this.form.submit()
            }), e.on(o.events.click, ".input-custom-button", function () {
                var e = l(this), t = e.data("action");
                c.exec(t, [i.val(), e], this)
            }), i.on(o.events.keyup, function (e) {
                var t = i.val().trim();
                s.history && e.keyCode === o.keyCode.ENTER && "" !== t && (i.val(""), n.history.push(t), n.historyIndex = n.history.length - 1, n._fireEvent("history-change", {
                    val: t,
                    history: n.history,
                    historyIndex: n.historyIndex
                }), !0 === s.preventSubmit && e.preventDefault()), s.history && e.keyCode === o.keyCode.UP_ARROW && (n.historyIndex--, 0 <= n.historyIndex ? (i.val(""), i.val(n.history[n.historyIndex]), n._fireEvent("history-down", {
                    val: i.val(),
                    history: n.history,
                    historyIndex: n.historyIndex
                })) : n.historyIndex = 0, e.preventDefault()), s.history && e.keyCode === o.keyCode.DOWN_ARROW && (n.historyIndex++, n.historyIndex < n.history.length ? (i.val(""), i.val(n.history[n.historyIndex]), n._fireEvent("history-up", {
                    val: i.val(),
                    history: n.history,
                    historyIndex: n.historyIndex
                })) : n.historyIndex = n.history.length - 1, e.preventDefault())
            }), i.on(o.events.keydown, function (e) {
                e.keyCode === o.keyCode.ENTER && n._fireEvent("enter-click", {val: i.val()})
            }), i.on(o.events.blur, function () {
                e.removeClass("focused")
            }), i.on(o.events.focus, function () {
                e.addClass("focused")
            }), i.on(o.events.input, function () {
                var e, s = this.value.toLowerCase();
                0 !== a.length && (a.html(""), e = n.autocomplete.filter(function (e) {
                    return -1 < e.toLowerCase().indexOf(s)
                }), a.css({display: 0 < e.length ? "block" : "none"}), l.each(e, function (e, t) {
                    var n = t.toLowerCase().indexOf(s),
                        i = l("<div>").addClass("item").attr("data-autocomplete-value", t),
                        n = 0 === n ? "<strong>" + t.substr(0, s.length) + "</strong>" + t.substr(s.length) : t.substr(0, n) + "<strong>" + t.substr(n, s.length) + "</strong>" + t.substr(n + s.length);
                    i.html(n).appendTo(a)
                }))
            }), e.on(o.events.click, ".autocomplete-list .item", function () {
                var e = l(this).attr("data-autocomplete-value");
                i.val(e), a.css({display: "none"}), i.trigger("change"), n._fireEvent("autocomplete-select", {value: e})
            })
        }, getHistory: function () {
            return this.history
        }, getHistoryIndex: function () {
            return this.historyIndex
        }, setHistoryIndex: function (e) {
            this.historyIndex = e >= this.history.length ? this.history.length - 1 : e
        }, setHistory: function (e, t) {
            var n = this, i = this.options;
            c.isNull(e) || (Array.isArray(e) || "string" != typeof e || (e = e.toArray(i.historyDivider)), !0 === t ? l.each(e, function () {
                n.history.push(this)
            }) : this.history = e, this.historyIndex = this.history.length - 1)
        }, clear: function () {
            this.element.val("")
        }, toDefault: function () {
            this.element.val(c.isValue(this.options.defaultValue) ? this.options.defaultValue : "")
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, setAutocompleteList: function (e) {
            var t = c.isObject(e);
            !1 !== t ? this.autocomplete = t : "string" == typeof e && (this.autocomplete = e.toArray(this.options.autocompleteDivider))
        }, changeAttribute: function (e) {
            "disabled" === e && this.toggleState()
        }, destroy: function () {
            var e = this.element, t = e.parent(), n = t.find(".input-clear-button"), i = t.find(".input-reveal-button"),
                t = t.find(".input-custom-button");
            return 0 < n.length && n.off(o.events.click), 0 < i.length && (i.off(o.events.start), i.off(o.events.stop)), 0 < t.length && n.off(o.events.click), e.off(o.events.blur), e.off(o.events.focus), e
        }
    }), l(document).on(o.events.click, function () {
        l(".input .autocomplete-list").hide()
    })
}(Metro, m4q), function (o, r) {
    "use strict";
    var a = o.utils, n = {
        keypadDeferred: 0,
        label: "",
        keySize: 48,
        keys: "1, 2, 3, 4, 5, 6, 7, 8, 9, 0",
        copyInlineStyles: !1,
        target: null,
        keyLength: 0,
        shuffle: !1,
        shuffleCount: 3,
        position: o.position.BOTTOM_LEFT,
        dynamicPosition: !1,
        serviceButtons: !0,
        showValue: !0,
        open: !1,
        sizeAsKeys: !1,
        clsKeypad: "",
        clsInput: "",
        clsKeys: "",
        clsKey: "",
        clsServiceKey: "",
        clsBackspace: "",
        clsClear: "",
        clsLabel: "",
        onChange: o.noop,
        onClear: o.noop,
        onBackspace: o.noop,
        onShuffle: o.noop,
        onKey: o.noop,
        onKeypadCreate: o.noop
    };
    o.keypadSetup = function (e) {
        n = r.extend({}, n, e)
    }, window.metroKeypadSetup, o.keypadSetup(window.metroKeypadSetup), o.Component("keypad", {
        init: function (e, t) {
            return this._super(t, e, n, {
                value: "INPUT" === t.tagName ? t.value : t.innerText,
                positions: ["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"],
                keypad: null,
                keys: [],
                keys_to_work: []
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            this.keys = t.keys.toArray(","), this.keys_to_work = this.keys, this._createKeypad(), !0 === t.shuffle && this.shuffle(), this._createKeys(), this._createEvents(), this._fireEvent("keypad-create", {element: e})
        }, _createKeypad: function () {
            var e = this.element, t = this.options, n = e.parent(),
                i = n.hasClass("input") ? n : r("<div>").addClass("input").addClass(e[0].className);
            if (i.addClass("keypad"), "static" !== i.css("position") && "" !== i.css("position") || i.css({position: "relative"}), void 0 === e.attr("type") && e.attr("type", "text"), i.insertBefore(e), e.attr("readonly", !0), e.appendTo(i), (n = r("<div>").addClass("keys").addClass(t.clsKeys)).appendTo(i), this._setKeysPosition(), !0 === t.open && n.addClass("open keep-open"), !(e[0].className = "") === t.copyInlineStyles) for (var s = 0, a = e[0].style.length; s < a; s++) i.css(e[0].style[s], e.css(e[0].style[s]));
            e.addClass(t.clsInput), i.addClass(t.clsKeypad), e.on(o.events.blur, function () {
                i.removeClass("focused")
            }), e.on(o.events.focus, function () {
                i.addClass("focused")
            }), t.label && (n = r("<label>").addClass("label-for-input").addClass(t.clsLabel).html(t.label).insertBefore(i), e.attr("id") && n.attr("for", e.attr("id")), "rtl" === e.attr("dir") && n.addClass("rtl")), !0 === t.disabled || e.is(":disabled") ? this.disable() : this.enable(), this.keypad = i
        }, _setKeysPosition: function () {
            var e = this.element, t = this.options;
            e.parent().find(".keys").removeClass(this.positions.join(" ")).addClass(t.position)
        }, _createKeys: function () {
            var e, t = this.element, n = this.options, i = t.parent(), s = i.find(".keys"),
                a = Math.round(Math.sqrt(this.keys.length + 2)), t = n.keySize;
            s.html(""), r.each(this.keys_to_work, function () {
                (e = r("<span>").addClass("key").addClass(n.clsKey).html(this)).data("key", this), e.css({
                    width: n.keySize,
                    height: n.keySize,
                    lineHeight: n.keySize - 4
                }).appendTo(s)
            }), !0 === n.serviceButtons && r.each(["&larr;", "&times;"], function () {
                e = r("<span>").addClass("key service-key").addClass(n.clsKey).addClass(n.clsServiceKey).html(this), "&larr;" === this && e.addClass(n.clsBackspace), "&times;" === this && e.addClass(n.clsClear), e.data("key", this), e.css({
                    width: n.keySize,
                    height: n.keySize,
                    lineHeight: n.keySize - 4
                }).appendTo(s)
            }), t = a * (t + 2) - 6, s.outerWidth(t), !0 === n.sizeAsKeys && -1 !== ["top-left", "top", "top-right", "bottom-left", "bottom", "bottom-right"].indexOf(n.position) && i.outerWidth(s.outerWidth())
        }, _createEvents: function () {
            var n = this, i = this.element, s = this.options, e = i.parent(), t = e.find(".keys");
            t.on(o.events.click, ".key", function (e) {
                var t = r(this);
                if ("&larr;" !== t.data("key") && "&times;" !== t.data("key")) {
                    if (0 < s.keyLength && String(n.value).length === s.keyLength) return !1;
                    n.value = n.value + "" + t.data("key"), !0 === s.shuffle && (n.shuffle(), n._createKeys()), !0 === s.dynamicPosition && (s.position = n.positions[r.random(0, n.positions.length - 1)], n._setKeysPosition()), n._fireEvent("key", {
                        key: t.data("key"),
                        val: n.value
                    })
                } else "&times;" === t.data("key") && (n.value = "", n._fireEvent("clear")), "&larr;" === t.data("key") && (n.value = n.value.substring(0, n.value.length - 1), n._fireEvent("backspace", {val: n.value}));
                !0 === s.showValue && ("INPUT" === i[0].tagName ? i.val(n.value) : i.text(n.value)), i.trigger("change"), a.exec(s.onChange, [n.value], i[0]), e.preventDefault(), e.stopPropagation()
            }), e.on(o.events.click, function (e) {
                !0 !== s.open && (!0 === t.hasClass("open") ? t.removeClass("open") : t.addClass("open"), e.preventDefault(), e.stopPropagation())
            }), null !== s.target && i.on(o.events.change, function () {
                var e = r(s.target);
                0 !== e.length && ("INPUT" === e[0].tagName ? e.val(n.value) : e.text(n.value))
            })
        }, shuffle: function () {
            for (var e = this.options, t = 0; t < e.shuffleCount; t++) this.keys_to_work = this.keys_to_work.shuffle();
            this._fireEvent("shuffle", {keysToWork: this.keys_to_work, keys: this.keys})
        }, shuffleKeys: function (e) {
            void 0 === e && (e = this.options.shuffleCount);
            for (var t = 0; t < e; t++) this.keys_to_work = this.keys_to_work.shuffle();
            this._createKeys()
        }, val: function (e) {
            return void 0 === e ? this.value : (this.value = e, "INPUT" === this.element[0].tagName ? this.element.val(e) : this.element.text(e), this)
        }, open: function () {
            this.element.parent().find(".keys").addClass("open")
        }, close: function () {
            this.element.parent().find(".keys").removeClass("open")
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, setPosition: function (e) {
            e = void 0 !== e ? e : this.element.attr("data-position");
            -1 !== this.positions.indexOf(e) && (this.options.position = e, this._setKeysPosition())
        }, changeAttribute: function (e) {
            switch (e) {
                case"disabled":
                    this.toggleState();
                    break;
                case"data-position":
                    this.setPosition()
            }
        }, destroy: function () {
            var e = this.element, t = this.keypad, n = t.find(".keys");
            return t.off(o.events.click), n.off(o.events.click, ".key"), e.off(o.events.change), e
        }
    }), r(document).on(o.events.click, function () {
        var e = r(".keypad .keys");
        r.each(e, function () {
            r(this).hasClass("keep-open") || r(this).removeClass("open")
        })
    })
}(Metro, m4q), function (l, c) {
    "use strict";
    var n = {
        loop: !0,
        source: "img",
        iconClose: "<span class='default-icon-cross'>",
        iconPrev: "<span class='default-icon-chevron-left'>",
        iconNext: "<span class='default-icon-chevron-right'>",
        clsNext: "",
        clsPrev: "",
        clsClose: "",
        clsImage: "",
        clsImageContainer: "",
        clsImageWrapper: "",
        clsLightbox: "",
        onDrawImage: l.noop,
        onLightboxCreate: l.noop
    };
    l.lightboxSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroLightboxSetup, l.lightboxSetup(window.metroLightboxSetup), l.Component("lightbox", {
        init: function (e, t) {
            return this._super(t, e, n, {overlay: null, lightbox: null, current: null, items: []}), this
        }, _create: function () {
            var e = this.options;
            e.source || (e.source = "img"), this._createStructure(), this._createEvents(), this._fireEvent("lightbox-create")
        }, _createStructure: function () {
            var e, t = this.options, n = c(".lightbox-overlay");
            0 === n.length && (n = c("<div>").addClass("lightbox-overlay").appendTo("body").hide()), e = c("<div>").addClass("lightbox").addClass(t.clsLightbox).appendTo("body").hide(), c("<span>").addClass("lightbox__prev").addClass(t.clsPrev).html(t.iconPrev).appendTo(e), c("<span>").addClass("lightbox__next").addClass(t.clsNext).html(t.iconNext).appendTo(e), c("<span>").addClass("lightbox__closer").addClass(t.clsClose).html(t.iconClose).appendTo(e), c("<div>").addClass("lightbox__image").addClass(t.clsImageContainer).appendTo(e), this.component = e[0], this.lightbox = e, this.overlay = n
        }, _createEvents: function () {
            var e = this, t = this.element, n = this.options, i = c(this.component);
            t.on(l.events.click, n.source, function () {
                e.open(this)
            }), i.on(l.events.click, ".lightbox__closer", function () {
                e.close()
            }), i.on(l.events.click, ".lightbox__prev", function () {
                e.prev()
            }), i.on(l.events.click, ".lightbox__next", function () {
                e.next()
            })
        }, _setupItems: function () {
            var e = this.element, t = this.options, t = e.find(t.source);
            0 !== t.length && (this.items = t)
        }, _goto: function (e) {
            var t, n, i = this, s = this.options, a = c(e), o = c("<img>"), r = this.lightbox.find(".lightbox__image");
            r.find(".lightbox__image-wrapper").remove(), t = c("<div>").addClass("lightbox__image-wrapper").addClass(s.clsImageWrapper).attr("data-title", a.attr("alt") || a.attr("data-title") || "").appendTo(r), n = c("<div>").appendTo(t), l.makePlugin(n, "activity", {
                type: "cycle",
                style: "color"
            }), "IMG" !== (this.current = e).tagName && "DIV" !== e.tagName || (e = a.attr("data-original") || a.attr("src"), o.attr("src", e), o[0].onload = function () {
                var e = this.height > this.width;
                o.addClass(e ? "lightbox__image-portrait" : "lightbox__image-landscape").addClass(s.clsImage), o.attr("alt", a.attr("alt")), o.appendTo(t), n.remove(), i._fireEvent("draw-image", {
                    image: o[0],
                    item: t[0]
                })
            })
        }, _index: function (t) {
            var n = -1;
            return this.items.each(function (e) {
                this === t && (n = e)
            }), n
        }, next: function () {
            var e = this.current, e = this._index(e);
            if (e + 1 >= this.items.length) {
                if (!this.options.loop) return;
                e = -1
            }
            this._goto(this.items[e + 1])
        }, prev: function () {
            var e = this.current, e = this._index(e);
            if (e - 1 < 0) {
                if (!this.options.loop) return;
                e = this.items.length
            }
            this._goto(this.items[e - 1])
        }, open: function (e) {
            return this._setupItems(), this._goto(e), this.overlay.show(), this.lightbox.show(), this
        }, close: function () {
            this.overlay.hide(), this.lightbox.hide()
        }, changeAttribute: function () {
        }, destroy: function () {
            this.element.remove()
        }
    })
}(Metro, m4q), function (s, c) {
    "use strict";
    var d = s.utils, n = {
        listDeferred: 0,
        templateBeginToken: "<%",
        templateEndToken: "%>",
        paginationDistance: 5,
        paginationShortMode: !0,
        thousandSeparator: ",",
        decimalSeparator: ",",
        sortTarget: "li",
        sortClass: null,
        sortDir: "asc",
        sortInitial: !0,
        filterClass: null,
        filter: null,
        filterString: "",
        filters: null,
        source: null,
        showItemsSteps: !1,
        showSearch: !1,
        showListInfo: !1,
        showPagination: !1,
        showActivity: !0,
        muteList: !0,
        items: -1,
        itemsSteps: "all, 10,25,50,100",
        itemsAllTitle: "Show all",
        listItemsCountTitle: "Show entries:",
        listSearchTitle: "Search:",
        listInfoTitle: "Showing $1 to $2 of $3 entries",
        paginationPrevTitle: "Prev",
        paginationNextTitle: "Next",
        activityType: "cycle",
        activityStyle: "color",
        activityTimeout: 100,
        searchWrapper: null,
        rowsWrapper: null,
        infoWrapper: null,
        paginationWrapper: null,
        clsComponent: "",
        clsList: "",
        clsListItem: "",
        clsListTop: "",
        clsItemsCount: "",
        clsSearch: "",
        clsListBottom: "",
        clsListInfo: "",
        clsListPagination: "",
        clsPagination: "",
        onDraw: s.noop,
        onDrawItem: s.noop,
        onSortStart: s.noop,
        onSortStop: s.noop,
        onSortItemSwitch: s.noop,
        onSearch: s.noop,
        onRowsCountChange: s.noop,
        onDataLoad: s.noop,
        onDataLoaded: s.noop,
        onDataLoadError: s.noop,
        onFilterItemAccepted: s.noop,
        onFilterItemDeclined: s.noop,
        onListCreate: s.noop
    };
    s.listSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroListSetup, s.listSetup(window.metroListSetup), s.Component("list", {
        init: function (e, t) {
            return this._super(t, e, n, {
                currentPage: 1,
                pagesCount: 1,
                filterString: "",
                data: null,
                activity: null,
                busy: !1,
                filters: [],
                wrapperInfo: null,
                wrapperSearch: null,
                wrapperRows: null,
                wrapperPagination: null,
                filterIndex: null,
                filtersIndexes: [],
                itemTemplate: null,
                sort: {dir: "asc", colIndex: 0},
                header: null,
                items: []
            }), this
        }, _create: function () {
            var t = this, n = this.options;
            n.source ? (t._fireEvent("data-load", {source: n.source}), c.json(n.source).then(function (e) {
                t._fireEvent("data-loaded", {source: n.source, data: e}), t._build(e)
            }, function (e) {
                t._fireEvent("data-load-error", {source: n.source, xhr: e})
            })) : t._build()
        }, _build: function (e) {
            d.isValue(e) ? this._createItemsFromJSON(e) : this._createItemsFromHTML(), this._createStructure(), this._createEvents(), this._fireEvent("list-create")
        }, _createItemsFromHTML: function () {
            var e = this, t = this.element, n = this.options;
            this.items = [], c.each(t.children(n.sortTarget), function () {
                e.items.push(this)
            })
        }, _createItemsFromJSON: function (e) {
            var n = this, i = this.options;
            this.items = [], d.isValue(e.template) && (this.itemTemplate = e.template), d.isValue(e.header) && (this.header = e.header), d.isValue(e.data) && c.each(e.data, function () {
                var e, t = document.createElement("li");
                d.isValue(n.itemTemplate) && (e = s.template(n.itemTemplate, this, {
                    beginToken: i.templateBeginToken,
                    endToken: i.templateEndToken
                }), t.innerHTML = e, n.items.push(t))
            })
        }, _createTopBlock: function () {
            var t, n = this, e = this.element, i = this.options,
                s = c("<div>").addClass("list-top").addClass(i.clsListTop).insertBefore(e),
                e = d.isValue(this.wrapperSearch) ? this.wrapperSearch : c("<div>").addClass("list-search-block").addClass(i.clsSearch).appendTo(s);
            return c("<input>").attr("type", "text").appendTo(e).input({prepend: i.listSearchTitle}), !0 !== i.showSearch && e.hide(), e = d.isValue(this.wrapperRows) ? this.wrapperRows : c("<div>").addClass("list-rows-block").addClass(i.clsItemsCount).appendTo(s), t = c("<select>").appendTo(e), c.each(i.itemsSteps.toArray(), function () {
                var e = c("<option>").attr("value", "all" === this ? -1 : this).text("all" === this ? i.itemsAllTitle : this).appendTo(t);
                parseInt(this) === parseInt(i.items) && e.attr("selected", "selected")
            }), t.select({
                filter: !1, prepend: i.listItemsCountTitle, onChange: function (e) {
                    parseInt(e) !== parseInt(i.items) && (i.items = parseInt(e), n.currentPage = 1, n._draw(), n._fireEvent("rows-count-change", {val: e}))
                }
            }), !0 !== i.showItemsSteps && e.hide(), s
        }, _createBottomBlock: function () {
            var e = this.element, t = this.options,
                n = c("<div>").addClass("list-bottom").addClass(t.clsListBottom).insertAfter(e),
                e = c("<div>").addClass("list-info").addClass(t.clsListInfo).appendTo(n);
            return !0 !== t.showListInfo && e.hide(), e = c("<div>").addClass("list-pagination").addClass(t.clsListPagination).appendTo(n), !0 !== t.showPagination && e.hide(), n
        }, _createStructure: function () {
            var e, t, n = this, i = this.element, s = this.options, a = c(s.searchWrapper), o = c(s.infoWrapper),
                r = c(s.rowsWrapper), l = c(s.paginationWrapper);
            0 < a.length && (this.wrapperSearch = a), 0 < o.length && (this.wrapperInfo = o), 0 < r.length && (this.wrapperRows = r), 0 < l.length && (this.wrapperPagination = l), i.parent().hasClass("list-component") ? e = i.parent() : (e = c("<div>").addClass("list-component").insertBefore(i), i.appendTo(e)), e.addClass(s.clsComponent), this.activity = c("<div>").addClass("list-progress").appendTo(e), c("<div>").activity({
                type: s.activityType,
                style: s.activityStyle
            }).appendTo(this.activity), !0 !== s.showActivity && this.activity.css({visibility: "hidden"}), i.addClass(s.clsList), this._createTopBlock(), this._createBottomBlock(), d.isValue(s.filterString) && (this.filterString = s.filterString), d.isValue(s.filter) && (!1 === (t = d.isFunc(s.filter)) && (t = d.func(s.filter)), n.filterIndex = n.addFilter(t)), d.isValue(s.filters) && "string" == typeof s.filters && c.each(s.filters.toArray(), function () {
                !1 !== (t = d.isFunc(this)) && n.filtersIndexes.push(n.addFilter(t))
            }), !(this.currentPage = 1) !== s.sortInitial ? this.sorting(s.sortClass, s.sortDir, !0) : this.draw()
        }, _createEvents: function () {
            var e, n = this, t = this.element.parent();

            function i(e) {
                var t = c(e), e = t.parent();
                e.hasClass("active") || (e.hasClass("service") ? "prev" === t.data("page") ? (n.currentPage--, 0 === n.currentPage && (n.currentPage = 1)) : (n.currentPage++, n.currentPage > n.pagesCount && (n.currentPage = n.pagesCount)) : n.currentPage = t.data("page"), n._draw())
            }

            t.find(".list-search-block input").on(s.events.inputchange, function () {
                n.filterString = this.value.trim().toLowerCase(), ":" !== n.filterString[n.filterString.length - 1] && (n.currentPage = 1, n._draw())
            }), d.isValue(this.wrapperSearch) && 0 < (e = this.wrapperSearch.find("input")).length && e.on(s.events.inputchange, function () {
                n.filterString = this.value.trim().toLowerCase(), ":" !== n.filterString[n.filterString.length - 1] && (n.currentPage = 1, n._draw())
            }), t.on(s.events.click, ".pagination .page-link", function () {
                i(this)
            }), d.isValue(this.wrapperPagination) && this.wrapperPagination.on(s.events.click, ".pagination .page-link", function () {
                i(this)
            })
        }, _info: function (e, t, n) {
            var i = this.element, s = this.options, i = i.parent(),
                i = d.isValue(this.wrapperInfo) ? this.wrapperInfo : i.find(".list-info");
            0 !== i.length && (n < t && (t = n), 0 === this.items.length && (e = t = n = 0), s = (s = (s = (s = s.listInfoTitle).replace("$1", e)).replace("$2", t)).replace("$3", n), i.html(s))
        }, _paging: function (e) {
            var t = this.element, n = this.options, t = t.parent();
            this.pagesCount = Math.ceil(e / n.items), s.pagination({
                length: e,
                rows: n.items,
                current: this.currentPage,
                target: d.isValue(this.wrapperPagination) ? this.wrapperPagination : t.find(".list-pagination"),
                claPagination: n.clsPagination,
                prevTitle: n.paginationPrevTitle,
                nextTitle: n.paginationNextTitle,
                distance: !0 === n.paginationShortMode ? n.paginationDistance : 0
            })
        }, _filter: function () {
            var e, t, n, i, s, a, o = this, r = this.options;
            return d.isValue(this.filterString) || 0 < this.filters.length ? (e = this.items.filter(function (e) {
                if (n = "", d.isValue(r.filterClass)) {
                    if (0 < (i = e.getElementsByClassName(r.filterClass)).length) for (t = 0; t < i.length; t++) n += i[t].textContent
                } else n = e.textContent;
                if (s = n.replace(/[\n\r]+|[\s]{2,}/g, " ").trim().toLowerCase(), !0 === (a = !d.isValue(o.filterString) || -1 < s.indexOf(o.filterString)) && 0 < o.filters.length) for (t = 0; t < o.filters.length; t++) if (!0 !== d.exec(o.filters[t], [e])) {
                    a = !1;
                    break
                }
                return a ? o._fireEvent("filter-item-accepted", {item: e}) : o._fireEvent("filter-item-declined", {item: e}), a
            }), o._fireEvent("search", {search: o.filterString, items: e})) : e = this.items, e
        }, _draw: function (e) {
            var t, n = this.element, i = this.options, s = -1 === i.items ? 0 : i.items * (this.currentPage - 1),
                a = -1 === i.items ? this.items.length - 1 : s + i.items - 1, o = this._filter();
            for (n.children(i.sortTarget).remove(), t = s; t <= a; t++) d.isValue(o[t]) && c(o[t]).addClass(i.clsListItem).appendTo(n), this._fireEvent("draw-item", {item: o[t]});
            this._info(1 + s, 1 + a, o.length), this._paging(o.length), this.activity.hide(), this._fireEvent("draw"), void 0 !== e && d.exec(e, [n], n[0])
        }, _getItemContent: function (e) {
            var t, n, i, s, a = this.options, o = c(e),
                r = d.isValue(o.data("formatMask")) ? o.data("formatMask") : null;
            if (d.isValue(a.sortClass)) {
                if (i = "", 0 < (n = c(e).find("." + a.sortClass)).length) for (t = 0; t < n.length; t++) i += n[t].textContent;
                s = 0 < n.length ? n[0].getAttribute("data-format") : ""
            } else i = e.textContent, s = e.getAttribute("data-format");
            if (i = ("" + i).toLowerCase().replace(/[\n\r]+|[\s]{2,}/g, " ").trim(), d.isValue(s)) switch (-1 === ["number", "int", "integer", "float", "money"].indexOf(s) || "," === a.thousandSeparator && "." === a.decimalSeparator || (i = d.parseNumber(i, a.thousandSeparator, a.decimalSeparator)), s) {
                case"date":
                    i = d.isValue(r) ? i.toDate(r) : new Date(i);
                    break;
                case"number":
                    i = Number(i);
                    break;
                case"int":
                case"integer":
                    i = parseInt(i);
                    break;
                case"float":
                    i = parseFloat(i);
                    break;
                case"money":
                    i = d.parseMoney(i);
                    break;
                case"card":
                    i = d.parseCard(i);
                    break;
                case"phone":
                    i = d.parsePhone(i)
            }
            return i
        }, deleteItem: function (e) {
            for (var t, n = [], i = d.isFunc(e), s = 0; s < this.items.length; s++) t = this.items[s], i ? d.exec(e, [t]) && n.push(s) : t.textContent.contains(e) && n.push(s);
            return this.items = d.arrayDeleteByMultipleKeys(this.items, n), this
        }, draw: function () {
            return this._draw()
        }, sorting: function (e, t, n) {
            var a = this, o = this.options;
            return d.isValue(e) && (o.sortClass = e), d.isValue(t) && -1 < ["asc", "desc"].indexOf(t) && (o.sortDir = t), this._fireEvent("sort-start", {items: this.items}), this.items.sort(function (e, t) {
                var n = a._getItemContent(e), i = a._getItemContent(t), s = 0;
                return n < i && (s = "asc" === o.sortDir ? -1 : 1), i < n && (s = "asc" === o.sortDir ? 1 : -1), 0 !== s && a._fireEvent("sort-item-switch", {
                    a: e,
                    b: t,
                    result: s
                }), s
            }), this._fireEvent("sort-stop", {items: this.items}), !0 === n && this._draw(), this
        }, filter: function (e) {
            this.filterString = e.trim().toLowerCase(), this.currentPage = 1, this._draw()
        }, loadData: function (e) {
            var n = this, i = this.element, s = this.options;
            !0 === d.isValue(e) && (s.source = e, this._fireEvent("data-load", {source: s.source}), c.json(s.source).then(function (e) {
                var t;
                n._fireEvent("data-loaded", {
                    source: s.source,
                    data: e
                }), n._createItemsFromJSON(e), i.html(""), d.isValue(s.filterString) && (n.filterString = s.filterString), d.isValue(s.filter) && (!1 === (t = d.isFunc(s.filter)) && (t = d.func(s.filter)), n.filterIndex = n.addFilter(t)), d.isValue(s.filters) && "string" == typeof s.filters && c.each(s.filters.toArray(), function () {
                    !1 !== (t = d.isFunc(this)) && n.filtersIndexes.push(n.addFilter(t))
                }), n.currentPage = 1, n.sorting(s.sortClass, s.sortDir, !0)
            }, function (e) {
                n._fireEvent("data-load-error", {source: s.source, xhr: e})
            }))
        }, next: function () {
            0 !== this.items.length && (this.currentPage++, this.currentPage > this.pagesCount ? this.currentPage = this.pagesCount : this._draw())
        }, prev: function () {
            0 !== this.items.length && (this.currentPage--, 0 !== this.currentPage ? this._draw() : this.currentPage = 1)
        }, first: function () {
            0 !== this.items.length && (this.currentPage = 1, this._draw())
        }, last: function () {
            0 !== this.items.length && (this.currentPage = this.pagesCount, this._draw())
        }, page: function (e) {
            e <= 0 && (e = 1), e > this.pagesCount && (e = this.pagesCount), this.currentPage = e, this._draw()
        }, addFilter: function (e, t) {
            e = d.isFunc(e);
            if (!1 !== e) return this.filters.push(e), !0 === t && (this.currentPage = 1, this.draw()), this.filters.length - 1
        }, removeFilter: function (e, t) {
            return d.arrayDeleteByKey(this.filters, e), !0 === t && (this.currentPage = 1, this.draw()), this
        }, removeFilters: function (e) {
            this.filters = [], !0 === e && (this.currentPage = 1, this.draw())
        }, getFilters: function () {
            return this.filters
        }, getFilterIndex: function () {
            return this.filterIndex
        }, getFiltersIndexes: function () {
            return this.filtersIndexes
        }, changeAttribute: function (e) {
            var t, n, i, s = this, a = this.element, o = this.options;
            switch (e) {
                case"data-sort-dir":
                    i = a.attr("data-sort-dir"), d.isValue(i) && (o.sortDir = i, s.sorting(o.sortClass, o.sortDir, !0));
                    break;
                case"data-sort-source":
                    n = a.attr("data-sort-source"), d.isValue(n) && (o.sortClass = n, s.sorting(o.sortClass, o.sortDir, !0));
                    break;
                case"data-filter-string":
                    t = a.attr("data-filter-string"), d.isValue(t) && (o.filterString = t, s.filter(o.filterString))
            }
        }, destroy: function () {
            var e, t = this.element, n = t.parent();
            return n.find(".list-search-block input").off(s.events.inputchange), d.isValue(this.wrapperSearch) && 0 < (e = this.wrapperSearch.find("input")).length && e.off(s.events.inputchange), n.off(s.events.click, ".pagination .page-link"), d.isValue(this.wrapperPagination) && this.wrapperPagination.off(s.events.click, ".pagination .page-link"), t
        }
    })
}(Metro, m4q), function (a, o) {
    "use strict";
    var r = a.utils, n = {
        listviewDeferred: 0,
        selectable: !1,
        checkStyle: 1,
        duration: 100,
        view: a.listView.LIST,
        selectCurrent: !0,
        structure: {},
        onNodeInsert: a.noop,
        onNodeDelete: a.noop,
        onNodeClean: a.noop,
        onCollapseNode: a.noop,
        onExpandNode: a.noop,
        onGroupNodeClick: a.noop,
        onNodeClick: a.noop,
        onNodeDblclick: a.noop,
        onListViewCreate: a.noop
    };
    a.listViewSetup = function (e) {
        n = o.extend({}, n, e)
    }, window.metroListViewSetup, a.listViewSetup(window.metroListViewSetup), a.Component("listview", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e = this.element;
            this._createView(), this._createEvents(), this._fireEvent("listview-create", {element: e})
        }, _createIcon: function (e) {
            var t = r.isTag(e) ? o(e) : o("<img>").attr("src", e), e = o("<span>").addClass("icon");
            return e.html(t.outerHTML()), e
        }, _createCaption: function (e) {
            return o("<div>").addClass("caption").html(e)
        }, _createContent: function (e) {
            return o("<div>").addClass("content").html(e)
        }, _createToggle: function () {
            return o("<span>").addClass("node-toggle")
        }, _createNode: function (n) {
            var e, t = this.options, i = o("<li>");
            return void 0 === n.caption && void 0 === n.content || (e = o("<div>").addClass("data"), i.prepend(e), void 0 !== n.caption && e.append(this._createCaption(n.caption)), void 0 !== n.content && e.append(this._createContent(n.content))), void 0 !== n.icon && i.prepend(this._createIcon(n.icon)), 0 < r.objectLength(t.structure) && o.each(t.structure, function (e, t) {
                void 0 !== n[e] && o("<div>").addClass("node-data item-data-" + e).addClass(n[t]).html(n[e]).appendTo(i)
            }), i
        }, _createView: function () {
            var n = this, e = this.element, i = this.options, t = e.find("li"), s = r.objectLength(i.structure);
            e.addClass("listview"), e.find("ul").addClass("listview"), o.each(t, function () {
                var e, t = o(this);
                void 0 === t.data("caption") && void 0 === t.data("content") || (e = o("<div>").addClass("data"), t.prepend(e), void 0 !== t.data("caption") && e.append(n._createCaption(t.data("caption"))), void 0 !== t.data("content") && e.append(n._createContent(t.data("content")))), void 0 !== t.data("icon") && t.prepend(n._createIcon(t.data("icon"))), 0 < t.children("ul").length ? (t.addClass("node-group"), t.append(n._createToggle()), !0 !== t.data("collapsed") && t.addClass("expanded")) : t.addClass("node"), t.hasClass("node") && ((e = o("<input type='checkbox' data-role='checkbox' data-style='" + i.checkStyle + "'>")).data("node", t), t.prepend(e)), 0 < s && o.each(i.structure, function (e) {
                    void 0 !== t.data(e) && o("<div>").addClass("node-data item-data-" + e).addClass(t.data(e)).html(t.data(e)).appendTo(t)
                })
            }), this.toggleSelectable(), this.view(i.view)
        }, _createEvents: function () {
            var t = this, n = this.element, i = this.options;
            n.on(a.events.dblclick, ".node", function () {
                var e = o(this);
                t._fireEvent("node-dblclick", {node: e})
            }), n.on(a.events.click, ".node", function () {
                var e = o(this);
                n.find(".node").removeClass("current"), e.toggleClass("current"), !0 === i.selectCurrent && (n.find(".node").removeClass("current-select"), e.toggleClass("current-select")), t._fireEvent("node-click", {node: e})
            }), n.on(a.events.click, ".node-toggle", function () {
                var e = o(this).closest("li");
                t.toggleNode(e)
            }), n.on(a.events.click, ".node-group > .data > .caption", function () {
                var e = o(this).closest("li");
                n.find(".node-group").removeClass("current-group"), e.addClass("current-group"), t._fireEvent("group-node-click", {node: e})
            }), n.on(a.events.dblclick, ".node-group > .data > .caption", function () {
                var e = o(this).closest("li");
                t.toggleNode(e), t._fireEvent("node-dbl-click", {node: e})
            })
        }, view: function (e) {
            var n = this.element, t = this.options;
            if (void 0 === e) return t.view;
            t.view = e, o.each(a.listView, function (e, t) {
                n.removeClass("view-" + t), n.find("ul").removeClass("view-" + t)
            }), n.addClass("view-" + t.view), n.find("ul").addClass("view-" + t.view)
        }, toggleNode: function (e) {
            var t, n = this.options;
            (e = o(e)).hasClass("node-group") && (e.toggleClass("expanded"), t = !0 !== e.hasClass("expanded") ? "slideUp" : "slideDown", this._fireEvent("collapse-node", {node: e}), e.children("ul")[t](n.duration))
        }, toggleSelectable: function () {
            var e = this.element, t = !0 === this.options.selectable ? "addClass" : "removeClass";
            e[t]("selectable"), e.find("ul")[t]("selectable")
        }, add: function (e, t) {
            var n, i = this.element, s = this.options;
            if (null === e) n = i; else {
                if (!(e = o(e)).hasClass("node-group")) return;
                0 === (n = e.children("ul")).length && (n = o("<ul>").addClass("listview").addClass("view-" + s.view).appendTo(e), this._createToggle().appendTo(e), e.addClass("expanded"))
            }
            (s = this._createNode(t)).addClass("node").appendTo(n);
            t = o("<input type='checkbox'>");
            return t.data("node", s), s.prepend(t), a.makePlugin(t, "checkbox", {}), this._fireEvent("node-insert", {
                newNode: s,
                parentNode: e,
                list: n
            }), s
        }, addGroup: function (e) {
            var t = this.element, n = this.options;
            return delete e.icon, (e = this._createNode(e)).addClass("node-group").appendTo(t), e.append(this._createToggle()), e.addClass("expanded"), e.append(o("<ul>").addClass("listview").addClass("view-" + n.view)), this._fireEvent("node-insert", {
                newNode: e,
                parentNode: null,
                list: t
            }), e
        }, insertBefore: function (e, t) {
            var n;
            if ((e = o(e)).length) return (n = this._createNode(t)).addClass("node").insertBefore(e), t = n.closest(".node"), e = n.closest("ul"), this._fireEvent("node-insert", {
                newNode: n,
                parentNode: t,
                list: e
            }), n
        }, insertAfter: function (e, t) {
            var n;
            if ((e = o(e)).length) return (n = this._createNode(t)).addClass("node").insertAfter(e), t = n.closest(".node"), e = n.closest("ul"), this._fireEvent("node-insert", {
                newNode: n,
                parentNode: t,
                list: e
            }), n
        }, del: function (e) {
            var t, n, i = this.element;
            (e = o(e)).length && (n = (t = e.closest("ul")).closest("li"), e.remove(), 0 !== t.children().length || t.is(i) || (t.remove(), n.removeClass("expanded"), n.children(".node-toggle").remove()), this._fireEvent("node-delete", {node: e}))
        }, clean: function (e) {
            (e = o(e)).length && (e.children("ul").remove(), e.removeClass("expanded"), e.children(".node-toggle").remove(), this._fireEvent("node-clean", {node: e}))
        }, getSelected: function () {
            var e = this.element, t = [];
            return o.each(e.find(":checked"), function () {
                var e = o(this);
                t.push(e.closest(".node")[0])
            }), t
        }, clearSelected: function () {
            this.element.find(":checked").prop("checked", !1), this.element.trigger("change")
        }, selectAll: function (e) {
            this.element.find(".node > .checkbox input").prop("checked", !1 !== e), this.element.trigger("change")
        }, selectByAttribute: function (e, t, n) {
            !1 !== n && (n = !0), this.element.find("li[" + e + '="' + t + '"] > .checkbox input').prop("checked", n), this.element.trigger("change")
        }, changeAttribute: function (e) {
            var t, n = this, i = this.element, s = this.options;
            switch (e) {
                case"data-view":
                    t = "view-" + i.attr("data-view"), n.view(t);
                    break;
                case"data-selectable":
                    s.selectable = !0 === JSON.parse(i.attr("data-selectable")), n.toggleSelectable()
            }
        }, destroy: function () {
            var e = this.element;
            return e.off(a.events.click, ".node"), e.off(a.events.click, ".node-toggle"), e.off(a.events.click, ".node-group > .data > .caption"), e.off(a.events.dblclick, ".node-group > .data > .caption"), e
        }
    })
}(Metro, m4q), function (i, a) {
    "use strict";
    var s = i.utils, n = {
        masterDeferred: 0,
        effect: "slide",
        effectFunc: "linear",
        duration: METRO_ANIMATION_DURATION,
        controlPrev: "<span class='default-icon-left-arrow'></span>",
        controlNext: "<span class='default-icon-right-arrow'></span>",
        controlTitle: "Master, page $1 of $2",
        backgroundImage: "",
        clsMaster: "",
        clsControls: "",
        clsControlPrev: "",
        clsControlNext: "",
        clsControlTitle: "",
        clsPages: "",
        clsPage: "",
        onBeforePage: i.noop_true,
        onBeforeNext: i.noop_true,
        onBeforePrev: i.noop_true,
        onNextPage: i.noop,
        onPrevPage: i.noop,
        onMasterCreate: i.noop
    };
    i.masterSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroMasterSetup, i.masterSetup(window.metroMasterSetup), i.Component("master", {
        init: function (e, t) {
            return this._super(t, e, n, {pages: [], currentIndex: 0, isAnimate: !1, id: s.elementId("master")}), this
        }, _create: function () {
            var e = this.element, t = this.options;
            e.addClass("master").addClass(t.clsMaster), e.css({backgroundImage: "url(" + t.backgroundImage + ")"}), this._createControls(), this._createPages(), this._createEvents(), this._fireEvent("master-create", {element: e})
        }, _createControls: function () {
            var e, t = this.element, n = this.options, i = t.find(".page"),
                s = String(n.controlTitle).replace("$1", "1");
            s = String(s).replace("$2", i.length), a.each(["top", "bottom"], function () {
                e = a("<div>").addClass("controls controls-" + this).addClass(n.clsControls).appendTo(t), a("<span>").addClass("prev").addClass(n.clsControlPrev).html(n.controlPrev).appendTo(e), a("<span>").addClass("next").addClass(n.clsControlNext).html(n.controlNext).appendTo(e), a("<span>").addClass("title").addClass(n.clsControlTitle).html(s).appendTo(e)
            }), this._enableControl("prev", !1)
        }, _enableControl: function (e, t) {
            e = this.element.find(".controls ." + e);
            !0 === t ? e.removeClass("disabled") : e.addClass("disabled")
        }, _setTitle: function () {
            var e = this.element.find(".controls .title"),
                t = (t = this.options.controlTitle.replace("$1", this.currentIndex + 1)).replace("$2", String(this.pages.length));
            e.html(t)
        }, _createPages: function () {
            var t = this, n = this.element, i = this.options, e = n.find(".pages"), s = n.find(".page");
            0 === e.length && (e = a("<div>").addClass("pages").appendTo(n)), e.addClass(i.clsPages), a.each(s, function () {
                var e = a(this);
                void 0 !== e.data("cover") ? n.css({backgroundImage: "url(" + e.data("cover") + ")"}) : n.css({backgroundImage: "url(" + i.backgroundImage + ")"}), e.css({left: "100%"}), e.addClass(i.clsPage).hide(0), t.pages.push(e)
            }), s.appendTo(e), void (this.currentIndex = 0) !== this.pages[this.currentIndex] && (void 0 !== this.pages[this.currentIndex].data("cover") && n.css({backgroundImage: "url(" + this.pages[this.currentIndex].data("cover") + ")"}), this.pages[this.currentIndex].css("left", "0").show(0), setTimeout(function () {
                e.css({height: t.pages[0].outerHeight(!0) + 2})
            }, 0))
        }, _createEvents: function () {
            var e = this, t = this.element, n = this.options;
            t.on(i.events.click, ".controls .prev", function () {
                !0 !== e.isAnimate && !0 === s.exec(n.onBeforePrev, [e.currentIndex, e.pages[e.currentIndex], t]) && !0 === s.exec(n.onBeforePage, ["prev", e.currentIndex, e.pages[e.currentIndex], t]) && e.prev()
            }), t.on(i.events.click, ".controls .next", function () {
                !0 !== e.isAnimate && !0 === s.exec(n.onBeforeNext, [e.currentIndex, e.pages[e.currentIndex], t]) && !0 === s.exec(n.onBeforePage, ["next", e.currentIndex, e.pages[e.currentIndex], t]) && e.next()
            }), a(window).on(i.events.resize, function () {
                t.find(".pages").height(e.pages[e.currentIndex].outerHeight(!0) + 2)
            }, {ns: this.id})
        }, _slideToPage: function (e) {
            var t, n, i;
            void 0 !== this.pages[e] && this.currentIndex !== e && (i = e > this.currentIndex ? "next" : "prev", t = this.pages[this.currentIndex], n = this.pages[e], this.currentIndex = e, this._effect(t, n, i))
        }, _slideTo: function (e) {
            var t, n = "next" === e.toLowerCase(), i = this.pages[this.currentIndex];
            if (n) {
                if (this.currentIndex + 1 >= this.pages.length) return;
                this.currentIndex++
            } else {
                if (this.currentIndex - 1 < 0) return;
                this.currentIndex--
            }
            t = this.pages[this.currentIndex], this._fireEvent(n ? "next-page" : "prev-page", {
                current: i,
                next: t,
                forward: n
            }), this._effect(i, t, e)
        }, _effect: function (e, t, n) {
            var i = this, s = this.element, a = this.options, o = s.width(), r = s.find(".pages");

            function l() {
                void 0 !== t.data("cover") ? s.css({backgroundImage: "url(" + t.data("cover") + ")"}) : s.css({backgroundImage: "url(" + a.backgroundImage + ")"}), r.css("overflow", "initial"), i.isAnimate = !1
            }

            switch (this._setTitle(), this.currentIndex === this.pages.length - 1 ? this._enableControl("next", !1) : this._enableControl("next", !0), 0 === this.currentIndex ? this._enableControl("prev", !1) : this._enableControl("prev", !0), this.isAnimate = !0, setTimeout(function () {
                r.animate({draw: {height: t.outerHeight(!0) + 2}})
            }, 0), r.css("overflow", "hidden"), a.effect) {
                case"fade":
                    e.fadeOut(a.duration), t.css({
                        top: 0,
                        left: 0,
                        opacity: 0
                    }).fadeIn(a.duration, "linear", function () {
                        l()
                    });
                    break;
                case"switch":
                    e.hide(), t.css({top: 0, left: 0, opacity: 0}).show(function () {
                        l()
                    });
                    break;
                default:
                    e.stop(!0).animate({
                        draw: {left: "next" === n ? -o : o},
                        dur: a.duration,
                        ease: a.effectFunc,
                        onDone: function () {
                            e.hide(0)
                        }
                    }), t.stop(!0).css({left: "next" === n ? o : -o}).show(0).animate({
                        draw: {left: 0},
                        dur: a.duration,
                        ease: a.effectFunc,
                        onDone: function () {
                            l()
                        }
                    })
            }
        }, toPage: function (e) {
            this._slideToPage(e)
        }, next: function () {
            this._slideTo("next")
        }, prev: function () {
            this._slideTo("prev")
        }, changeEffect: function () {
            this.options.effect = this.element.attr("data-effect")
        }, changeEffectFunc: function () {
            this.options.effectFunc = this.element.attr("data-effect-func")
        }, changeEffectDuration: function () {
            this.options.duration = this.element.attr("data-duration")
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-effect":
                    this.changeEffect();
                    break;
                case"data-effect-func":
                    this.changeEffectFunc();
                    break;
                case"data-duration":
                    this.changeEffectDuration()
            }
        }, destroy: function () {
            var e = this.element;
            return e.off(i.events.click, ".controls .prev"), e.off(i.events.click, ".controls .next"), a(window).off(i.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q), function (e) {
    "use strict";
    e.md5 = function (e) {
        function l(e, t) {
            return e << t | e >>> 32 - t
        }

        function c(e, t) {
            var n = 2147483648 & e, i = 2147483648 & t, s = 1073741824 & e, a = 1073741824 & t,
                t = (1073741823 & e) + (1073741823 & t);
            return s & a ? 2147483648 ^ t ^ n ^ i : s | a ? 1073741824 & t ? 3221225472 ^ t ^ n ^ i : 1073741824 ^ t ^ n ^ i : t ^ n ^ i
        }

        function t(e, t, n, i, s, a, o) {
            var r;
            return e = c(e, c(c((r = t) & n | ~r & i, s), o)), c(l(e, a), t)
        }

        function n(e, t, n, i, s, a, o) {
            return e = c(e, c(c(t & (i = i) | n & ~i, s), o)), c(l(e, a), t)
        }

        function i(e, t, n, i, s, a, o) {
            return e = c(e, c(c(t ^ n ^ i, s), o)), c(l(e, a), t)
        }

        function s(e, t, n, i, s, a, o) {
            return e = c(e, c(c(n ^ (t | ~i), s), o)), c(l(e, a), t)
        }

        function a(e) {
            for (var t = "", n = "", i = 0; i <= 3; i++) t += (n = "0" + (e >>> 8 * i & 255).toString(16)).substr(n.length - 2, 2);
            return t
        }

        for (var o, r, d, u, h = function (e) {
            for (var t, n = e.length, i = 16 * (1 + ((i = n + 8) - i % 64) / 64), s = Array(i - 1), a = 0, o = 0; o < n;) a = o % 4 * 8, s[t = (o - o % 4) / 4] = s[t] | e.charCodeAt(o) << a, o++;
            return a = o % 4 * 8, s[t = (o - o % 4) / 4] = s[t] | 128 << a, s[i - 2] = n << 3, s[i - 1] = n >>> 29, s
        }(e = function (e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n);
                i < 128 ? t += String.fromCharCode(i) : (127 < i && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128)), t += String.fromCharCode(63 & i | 128))
            }
            return t
        }(e)), p = 1732584193, f = 4023233417, m = 2562383102, v = 271733878, g = 0; g < h.length; g += 16) p = t(o = p, r = f, d = m, u = v, h[g], 7, 3614090360), v = t(v, p, f, m, h[g + 1], 12, 3905402710), m = t(m, v, p, f, h[g + 2], 17, 606105819), f = t(f, m, v, p, h[g + 3], 22, 3250441966), p = t(p, f, m, v, h[g + 4], 7, 4118548399), v = t(v, p, f, m, h[g + 5], 12, 1200080426), m = t(m, v, p, f, h[g + 6], 17, 2821735955), f = t(f, m, v, p, h[g + 7], 22, 4249261313), p = t(p, f, m, v, h[g + 8], 7, 1770035416), v = t(v, p, f, m, h[g + 9], 12, 2336552879), m = t(m, v, p, f, h[g + 10], 17, 4294925233), f = t(f, m, v, p, h[g + 11], 22, 2304563134), p = t(p, f, m, v, h[g + 12], 7, 1804603682), v = t(v, p, f, m, h[g + 13], 12, 4254626195), m = t(m, v, p, f, h[g + 14], 17, 2792965006), p = n(p, f = t(f, m, v, p, h[g + 15], 22, 1236535329), m, v, h[g + 1], 5, 4129170786), v = n(v, p, f, m, h[g + 6], 9, 3225465664), m = n(m, v, p, f, h[g + 11], 14, 643717713), f = n(f, m, v, p, h[g], 20, 3921069994), p = n(p, f, m, v, h[g + 5], 5, 3593408605), v = n(v, p, f, m, h[g + 10], 9, 38016083), m = n(m, v, p, f, h[g + 15], 14, 3634488961), f = n(f, m, v, p, h[g + 4], 20, 3889429448), p = n(p, f, m, v, h[g + 9], 5, 568446438), v = n(v, p, f, m, h[g + 14], 9, 3275163606), m = n(m, v, p, f, h[g + 3], 14, 4107603335), f = n(f, m, v, p, h[g + 8], 20, 1163531501), p = n(p, f, m, v, h[g + 13], 5, 2850285829), v = n(v, p, f, m, h[g + 2], 9, 4243563512), m = n(m, v, p, f, h[g + 7], 14, 1735328473), p = i(p, f = n(f, m, v, p, h[g + 12], 20, 2368359562), m, v, h[g + 5], 4, 4294588738), v = i(v, p, f, m, h[g + 8], 11, 2272392833), m = i(m, v, p, f, h[g + 11], 16, 1839030562), f = i(f, m, v, p, h[g + 14], 23, 4259657740), p = i(p, f, m, v, h[g + 1], 4, 2763975236), v = i(v, p, f, m, h[g + 4], 11, 1272893353), m = i(m, v, p, f, h[g + 7], 16, 4139469664), f = i(f, m, v, p, h[g + 10], 23, 3200236656), p = i(p, f, m, v, h[g + 13], 4, 681279174), v = i(v, p, f, m, h[g], 11, 3936430074), m = i(m, v, p, f, h[g + 3], 16, 3572445317), f = i(f, m, v, p, h[g + 6], 23, 76029189), p = i(p, f, m, v, h[g + 9], 4, 3654602809), v = i(v, p, f, m, h[g + 12], 11, 3873151461), m = i(m, v, p, f, h[g + 15], 16, 530742520), p = s(p, f = i(f, m, v, p, h[g + 2], 23, 3299628645), m, v, h[g], 6, 4096336452), v = s(v, p, f, m, h[g + 7], 10, 1126891415), m = s(m, v, p, f, h[g + 14], 15, 2878612391), f = s(f, m, v, p, h[g + 5], 21, 4237533241), p = s(p, f, m, v, h[g + 12], 6, 1700485571), v = s(v, p, f, m, h[g + 3], 10, 2399980690), m = s(m, v, p, f, h[g + 10], 15, 4293915773), f = s(f, m, v, p, h[g + 1], 21, 2240044497), p = s(p, f, m, v, h[g + 8], 6, 1873313359), v = s(v, p, f, m, h[g + 15], 10, 4264355552), m = s(m, v, p, f, h[g + 6], 15, 2734768916), f = s(f, m, v, p, h[g + 13], 21, 1309151649), p = s(p, f, m, v, h[g + 4], 6, 4149444226), v = s(v, p, f, m, h[g + 11], 10, 3174756917), m = s(m, v, p, f, h[g + 2], 15, 718787259), f = s(f, m, v, p, h[g + 9], 21, 3951481745), p = c(p, o), f = c(f, r), m = c(m, d), v = c(v, u);
        return (a(p) + a(f) + a(m) + a(v)).toLowerCase()
    }, !0 === window.METRO_GLOBAL_COMMON && (window.md5 = e.md5)
}(Metro, m4q), function (l, c) {
    "use strict";
    var d = l.utils, n = {
        navviewDeferred: 0,
        compact: "md",
        expand: "lg",
        toggle: null,
        activeState: !1,
        onMenuItemClick: l.noop,
        onNavviewCreate: l.noop
    };
    l.navViewSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroNavViewSetup, l.navViewSetup(window.metroNavViewSetup), l.Component("nav-view", {
        init: function (e, t) {
            return this._super(t, e, n, {
                pane: null,
                content: null,
                paneToggle: null,
                id: d.elementId("navview"),
                menuScrollDistance: 0,
                menuScrollStep: 0
            }), this
        }, _create: function () {
            this._createStructure(), this._createEvents(), this._fireEvent("navview-create")
        }, _calcMenuHeight: function () {
            var e, t = this.element, n = 0, t = t.children(".navview-pane");
            0 !== t.length && 0 !== (e = t.children(".navview-menu-container")).length && (c.each(e.prevAll(), function () {
                n += c(this).outerHeight(!0)
            }), c.each(e.nextAll(), function () {
                n += c(this).outerHeight(!0)
            }), e.css({height: "calc(100% - " + n + "px)"}), this.menuScrollStep = 48, this.menuScrollDistance = d.nearest(e[0].scrollHeight - e.height(), 48))
        }, _recalc: function () {
            var e = this, t = this.element;
            setTimeout(function () {
                48 === e.pane.width() ? t.addClass("js-compact") : t.removeClass("js-compact"), e._calcMenuHeight()
            }, 200)
        }, _createStructure: function () {
            var e, t, n = this.element, i = this.options;
            n.addClass("navview").addClass(!1 !== i.compact ? "navview-compact-" + i.compact : "").addClass(!1 !== i.expand ? "navview-expand-" + i.expand : ""), e = n.children(".navview-pane"), t = n.children(".navview-content"), n = c(i.toggle), (i = e.children(".navview-menu")).length && (i.prevAll().reverse().wrapAll(c("<div>").addClass("navview-container")), i.wrap(c("<div>").addClass("navview-menu-container"))), this.pane = 0 < e.length ? e : null, this.content = 0 < t.length ? t : null, this.paneToggle = 0 < n.length ? n : null, this._recalc()
        }, _createEvents: function () {
            var a = this, o = this.element, s = this.options, e = o.find(".navview-menu-container"),
                r = e.children(".navview-menu");
            e.on("mousewheel", function (e) {
                var t = o.find(".navview-pane").width(), n = 0 < e.deltaY ? -1 : 1, i = a.menuScrollStep,
                    s = a.menuScrollDistance, e = parseInt(r.css("top"));
                if (48 < t) return !1;
                -1 == n && Math.abs(e) <= s && r.css("top", parseInt(r.css("top")) + i * n), 1 == n && e <= -i && r.css("top", parseInt(r.css("top")) + i * n)
            }), o.on(l.events.click, ".pull-button, .holder", function () {
                a.pullClick(this)
            }), o.on(l.events.click, ".navview-menu li", function () {
                !0 === s.activeState && (o.find(".navview-menu li").removeClass("active"), c(this).toggleClass("active"))
            }), o.on(l.events.click, ".navview-menu li > a", function () {
                a._fireEvent("menu-item-click", {item: this})
            }), null !== this.paneToggle && this.paneToggle.on(l.events.click, function () {
                a.pane.toggleClass("open")
            }), c(window).on(l.events.resize, function () {
                var e, t, n, i = o.children(".navview-menu-container");
                a.pane.hasClass("open") || (o.removeClass("expanded"), a.pane.removeClass("open"), c(this).width() <= l.media_sizes[("" + s.compact).toUpperCase()] && o.removeClass("compacted"), i.length && (n = i.children(".navview-menu"), setTimeout(function () {
                    e = n.height(), t = i.height(), a.menuScrollStep = n.children(":not(.item-separator), :not(.item-header)")[0].clientHeight, a.menuScrollDistance = t < e ? d.nearest(e - t, a.menuScrollStep) : 0
                }, 0))), a._recalc()
            }, {ns: this.id})
        }, _togglePaneMode: function () {
            var e = this.element, t = this.pane.width() < 280;
            !t && !e.hasClass("expanded") || e.hasClass("compacted") ? !e.hasClass("compacted") && t || e.toggleClass("compacted") : e.toggleClass("expanded")
        }, pullClick: function (e) {
            var t, e = c(e);
            return e && e.hasClass("holder") && (t = e.parent().find("input"), setTimeout(function () {
                t.focus()
            }, 200)), this.pane.hasClass("open") ? this.close() : this._togglePaneMode(), this._recalc(), !0
        }, open: function () {
            this.pane.addClass("open")
        }, close: function () {
            this.pane.removeClass("open")
        }, toggle: function () {
            var e = this.pane;
            e.hasClass("open") ? e.removeClass("open") : e.addClass("open")
        }, toggleMode: function () {
            this._togglePaneMode()
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element;
            return e.off(l.events.click, ".pull-button, .holder"), e.off(l.events.click, ".navview-menu li"), e.off(l.events.click, ".navview-menu li > a"), null !== this.paneToggle && this.paneToggle.off(l.events.click), c(window).off(l.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q), function (r, l) {
    "use strict";
    var c = r.utils, t = {
        container: null,
        width: 220,
        timeout: METRO_TIMEOUT,
        duration: METRO_ANIMATION_DURATION,
        distance: "max",
        animation: "linear",
        onClick: r.noop,
        onClose: r.noop,
        onShow: r.noop,
        onAppend: r.noop,
        onNotifyCreate: r.noop
    };
    r.notifySetup = function (e) {
        t = l.extend({}, t, e)
    }, window.metroNotifySetup, r.notifySetup(window.metroNotifySetup);
    var d = {
        container: null, options: {}, notifies: [], setup: function (e) {
            return this.options = l.extend({}, t, e), this
        }, reset: function () {
            var e = {
                width: 220,
                timeout: METRO_TIMEOUT,
                duration: METRO_ANIMATION_DURATION,
                distance: "max",
                animation: "linear"
            };
            this.options = l.extend({}, t, e)
        }, _createContainer: function () {
            var e = l("<div>").addClass("notify-container");
            return l("body").prepend(e), e
        }, create: function (e, t, i) {
            var s, a = this, o = this.options, n = c.elementId("notify");
            if (c.isNull(i) && (i = {}), !c.isValue(e)) return !1;
            (s = l("<div>").addClass("notify").attr("id", n)).css({width: o.width}), t && (t = l("<div>").addClass("notify-title").html(t), s.prepend(t)), l("<div>").addClass("notify-message").html(e).appendTo(s), void 0 !== i && (void 0 !== i.cls && s.addClass(i.cls), void 0 !== i.width && s.css({width: i.width})), s.on(r.events.click, function () {
                c.exec((c.isValue(i.onClick) ? i : o).onClick, null, this), a.kill(l(this).closest(".notify"), (c.isValue(i.onClose) ? i : o).onClose)
            }), null === d.container && (d.container = d._createContainer()), s.appendTo(d.container), s.hide(function () {
                c.exec((c.isValue(i.onAppend) ? i : o).onAppend, null, s[0]);
                var e = (c.isValue(i.duration) ? i : o).duration, t = (c.isValue(i.animation) ? i : o).animation,
                    n = (c.isValue(i.distance) ? i : o).distance;
                "max" !== n && !isNaN(n) || (n = l(window).height()), s.show().animate({
                    draw: {
                        marginTop: [n, 4],
                        opacity: [0, 1]
                    }, dur: e, ease: t, onDone: function () {
                        c.exec(o.onNotifyCreate, null, this), void 0 !== i && !0 === i.keepOpen || setTimeout(function () {
                            a.kill(s, (c.isValue(i.onClose) ? i : o).onClose)
                        }, o.timeout), c.exec((c.isValue(i.onShow) ? i : o).onShow, null, s[0])
                    }
                })
            })
        }, kill: function (e, t) {
            var n = this, i = this.options;
            e.off(r.events.click), e.fadeOut(i.duration, "linear", function () {
                c.exec(c.isValue(t) ? t : n.options.onClose, null, e[0]), e.remove()
            })
        }, killAll: function () {
            var e = this, t = l(".notify");
            l.each(t, function () {
                e.kill(l(this))
            })
        }
    };
    r.notify = d.setup()
}(Metro, m4q), function (e, r) {
    "use strict";
    e.pagination = function (e) {
        var t, n, i = r.extend({}, {
            length: 0,
            rows: 0,
            current: 0,
            target: "body",
            clsPagination: "",
            prevTitle: "Prev",
            nextTitle: "Next",
            distance: 5
        }, e), s = parseInt(i.distance), a = r(i.target);
        if (a.html(""), t = r("<ul>").addClass("pagination").addClass(i.clsPagination).appendTo(a), 0 !== i.length && -1 !== i.rows) {
            i.pages = Math.ceil(i.length / i.rows);
            var o = function (e, t, n) {
                t = r("<li>").addClass("page-item").addClass(t), e = r("<a>").addClass("page-link").html(e);
                return e.data("page", n), e.appendTo(t), t
            }, e = o(i.prevTitle, "service prev-page", "prev");
            if (t.append(e), t.append(o(1, 1 === i.current ? "active" : "", 1)), 0 === s || i.pages <= 7) for (n = 2; n < i.pages; n++) t.append(o(n, n === i.current ? "active" : "", n)); else if (i.current < s) {
                for (n = 2; n <= s; n++) t.append(o(n, n === i.current ? "active" : "", n));
                i.pages > s && t.append(o("...", "no-link", null))
            } else if (i.current <= i.pages && i.current > i.pages - s + 1) for (i.pages > s && t.append(o("...", "no-link", null)), n = i.pages - s + 1; n < i.pages; n++) t.append(o(n, n === i.current ? "active" : "", n)); else t.append(o("...", "no-link", null)), t.append(o(i.current - 1, "", i.current - 1)), t.append(o(i.current, "active", i.current)), t.append(o(i.current + 1, "", i.current + 1)), t.append(o("...", "no-link", null));
            return (1 < i.pages || i.current < i.pages) && t.append(o(i.pages, i.current === i.pages ? "active" : "", i.pages)), a = o(i.nextTitle, "service next-page", "next"), t.append(a), 1 === i.current && e.addClass("disabled"), i.current === i.pages && a.addClass("disabled"), 0 === i.length && (t.addClass("disabled"), t.children().addClass("disabled")), t
        }
    }
}(Metro, m4q), function (o, r) {
    "use strict";
    var l = o.utils, n = {
        panelDeferred: 0,
        id: null,
        titleCaption: "",
        titleIcon: "",
        collapsible: !1,
        collapsed: !1,
        collapseDuration: METRO_ANIMATION_DURATION,
        width: "auto",
        height: "auto",
        draggable: !1,
        customButtons: null,
        clsCustomButton: "",
        clsPanel: "",
        clsTitle: "",
        clsTitleCaption: "",
        clsTitleIcon: "",
        clsContent: "",
        clsCollapseToggle: "",
        onCollapse: o.noop,
        onExpand: o.noop,
        onDragStart: o.noop,
        onDragStop: o.noop,
        onDragMove: o.noop,
        onPanelCreate: o.noop
    };
    o.panelSetup = function (e) {
        n = r.extend({}, n, e)
    }, window.metroPanelSetup, o.panelSetup(window.metroPanelSetup), o.Component("panel", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _addCustomButtons: function (e) {
            var t, n = this.element, i = this.options, s = n.closest(".panel").find(".panel-title"), n = [];
            if ("string" == typeof e && -1 < e.indexOf("{")) n = JSON.parse(e); else if ("string" == typeof e && l.isObject(e)) n = l.isObject(e); else {
                if (!("object" == typeof e && 0 < l.objectLength(e))) return void console.warn("Unknown format for custom buttons", e);
                n = e
            }
            if (0 !== s.length) return 0 === (t = s.find(".custom-buttons")).length ? t = r("<div>").addClass("custom-buttons").appendTo(s) : (t.find(".btn-custom").off(o.events.click), t.html("")), r.each(n, function () {
                var n = r("<span>");
                n.addClass("button btn-custom").addClass(i.clsCustomButton).addClass(this.cls).attr("tabindex", -1).html(this.html), this.attr && "object" == typeof this.attr && r.each(this.attr, function (e, t) {
                    n.attr(r.dashedName(e), t)
                }), n.data("action", this.onclick), t.prepend(n)
            }), s.on(o.events.click, ".btn-custom", function (e) {
                var t;
                l.isRightMouse(e) || (e = (t = r(this)).data("action"), l.exec(e, [t], this))
            }), this;
            console.warn("No place for custom buttons")
        }, _create: function () {
            var e, t = this.element, n = this.options, i = r("<div>").addClass("panel").addClass(n.clsPanel),
                s = n.id || l.elementId("panel"), a = t[0].className;
            i.attr("id", s).addClass(a), i.insertBefore(t), t.appendTo(i), t[0].className = "", t.addClass("panel-content").addClass(n.clsContent).appendTo(i), "" === n.titleCaption && "" === n.titleIcon && !0 !== n.collapsible || (e = r("<div>").addClass("panel-title").addClass(n.clsTitle), "" !== n.titleCaption && r("<span>").addClass("caption").addClass(n.clsTitleCaption).html(n.titleCaption).appendTo(e), "" !== n.titleIcon && r(n.titleIcon).addClass("icon").addClass(n.clsTitleIcon).appendTo(e), !0 === n.collapsible && (a = r("<span>").addClass("dropdown-toggle marker-center active-toggle").addClass(n.clsCollapseToggle).appendTo(e), o.makePlugin(t, "collapse", {
                toggleElement: a,
                duration: n.collapseDuration,
                onCollapse: n.onCollapse,
                onExpand: n.onExpand
            }), !0 === n.collapsed && this.collapse()), e.appendTo(i)), e && l.isValue(n.customButtons) && this._addCustomButtons(n.customButtons), !0 === n.draggable && (e = e ? e.find(".caption, .icon") : i, o.makePlugin(i, "draggable", {
                dragContext: i[0],
                dragElement: e,
                onDragStart: n.onDragStart,
                onDragStop: n.onDragStop,
                onDragMove: n.onDragMove
            })), "auto" !== n.width && 0 <= parseInt(n.width) && i.outerWidth(parseInt(n.width)), "auto" !== n.height && 0 <= parseInt(n.height) && (i.outerHeight(parseInt(n.height)), t.css({overflow: "auto"})), this.panel = i, this._fireEvent("panel-create", {
                element: t,
                panel: i
            })
        }, customButtons: function (e) {
            return this._addCustomButtons(e)
        }, collapse: function () {
            var e = this.element;
            !1 !== l.isMetroObject(e, "collapse") && o.getPlugin(e, "collapse").collapse()
        }, open: function () {
            this.expand()
        }, close: function () {
            this.collapse()
        }, expand: function () {
            var e = this.element;
            !1 !== l.isMetroObject(e, "collapse") && o.getPlugin(e, "collapse").expand()
        }, changeAttribute: function (e) {
        }, destroy: function () {
            var e = this.element, t = this.options;
            return !0 === t.collapsible && o.getPlugin(e, "collapse").destroy(), !0 === t.draggable && o.getPlugin(e, "draggable").destroy(), e
        }
    })
}(Metro, m4q), function (r, l) {
    "use strict";
    var c = r.utils, n = {
        popoverDeferred: 0,
        popoverText: "",
        popoverHide: 3e3,
        popoverTimeout: 10,
        popoverOffset: 10,
        popoverTrigger: r.popoverEvents.HOVER,
        popoverPosition: r.position.TOP,
        hideOnLeave: !1,
        closeButton: !0,
        clsPopover: "",
        clsPopoverContent: "",
        onPopoverShow: r.noop,
        onPopoverHide: r.noop,
        onPopoverCreate: r.noop
    };
    r.popoverSetup = function (e) {
        n = l.extend({}, n, e)
    }, window.metroPopoverSetup, r.popoverSetup(window.metroPopoverSetup), r.Component("popover", {
        init: function (e, t) {
            return this._super(t, e, n, {
                popover: null,
                popovered: !1,
                size: {width: 0, height: 0},
                id: c.elementId("popover")
            }), this
        }, _create: function () {
            this._createEvents(), this._fireEvent("popover-create", {element: this.element})
        }, _createEvents: function () {
            var e, t = this, n = this.element, i = this.options;
            switch (i.popoverTrigger) {
                case r.popoverEvents.CLICK:
                    e = r.events.click;
                    break;
                case r.popoverEvents.FOCUS:
                    e = r.events.focus;
                    break;
                default:
                    e = r.events.enter
            }
            n.on(e, function () {
                null === t.popover && !0 !== t.popovered && setTimeout(function () {
                    t.createPopover(), t._fireEvent("popover-show", {popover: t.popover}), 0 < i.popoverHide && setTimeout(function () {
                        t.removePopover()
                    }, i.popoverHide)
                }, i.popoverTimeout)
            }), !0 === i.hideOnLeave && n.on(r.events.leave, function () {
                t.removePopover()
            }), l(window).on(r.events.scroll, function () {
                null !== t.popover && t.setPosition()
            }, {ns: this.id})
        }, setPosition: function () {
            var e = this.popover, t = this.size, n = this.options, i = this.element;
            n.popoverPosition === r.position.BOTTOM ? (e.addClass("bottom"), e.css({
                top: i.offset().top - l(window).scrollTop() + i.outerHeight() + n.popoverOffset,
                left: i.offset().left + i.outerWidth() / 2 - t.width / 2 - l(window).scrollLeft()
            })) : n.popoverPosition === r.position.RIGHT ? (e.addClass("right"), e.css({
                top: i.offset().top + i.outerHeight() / 2 - t.height / 2 - l(window).scrollTop(),
                left: i.offset().left + i.outerWidth() - l(window).scrollLeft() + n.popoverOffset
            })) : n.popoverPosition === r.position.LEFT ? (e.addClass("left"), e.css({
                top: i.offset().top + i.outerHeight() / 2 - t.height / 2 - l(window).scrollTop(),
                left: i.offset().left - t.width - l(window).scrollLeft() - n.popoverOffset
            })) : (e.addClass("top"), e.css({
                top: i.offset().top - l(window).scrollTop() - t.height - n.popoverOffset,
                left: i.offset().left + i.outerWidth() / 2 - t.width / 2 - l(window).scrollLeft()
            }))
        }, createPopover: function () {
            var e, t, n = this, i = this.elem, s = this.element, a = this.options, o = c.elementId("popover");
            if (!this.popovered) {
                switch ((e = l("<div>").addClass("popover neb").addClass(a.clsPopover)).attr("id", o), l("<div>").addClass("popover-content").addClass(a.clsPopoverContent).html(a.popoverText).appendTo(e), 0 === a.popoverHide && !0 === a.closeButton && l("<button>").addClass("button square small popover-close-button bg-white").html("&times;").appendTo(e).on(r.events.click, function () {
                    n.removePopover()
                }), a.popoverPosition) {
                    case r.position.TOP:
                        t = "neb-s";
                        break;
                    case r.position.BOTTOM:
                        t = "neb-n";
                        break;
                    case r.position.RIGHT:
                        t = "neb-w";
                        break;
                    case r.position.LEFT:
                        t = "neb-e"
                }
                e.addClass(t), !0 !== a.closeButton && e.on(r.events.click, function () {
                    n.removePopover()
                }), this.popover = e, this.size = c.hiddenElementSize(e), "TD" !== i.tagName && "TH" !== i.tagName || (i = l("<div/>").css("display", "inline-block").html(s.html()), s.html(i), s = i), this.setPosition(), e.appendTo(l("body")), this.popovered = !0, this._fireEvent("popover-create", {popover: e})
            }
        }, removePopover: function () {
            var e = this, t = this.options.onPopoverHide === r.noop ? 0 : 300, n = this.popover;
            this.popovered && (this._fireEvent("popover-hide", {popover: n}), setTimeout(function () {
                n.hide(0, function () {
                    n.remove(), e.popover = null, e.popovered = !1
                })
            }, t))
        }, show: function () {
            var e = this, t = this.options;
            !0 !== this.popovered && setTimeout(function () {
                e.createPopover(), e._fireEvent("popover-show", {popover: e.popover}), 0 < t.popoverHide && setTimeout(function () {
                    e.removePopover()
                }, t.popoverHide)
            }, t.popoverTimeout)
        }, hide: function () {
            this.removePopover()
        }, changeAttribute: function (e) {
            var t = this, n = this.element, i = this.options;
            switch (e) {
                case"data-popover-text":
                    i.popoverText = n.attr("data-popover-text"), t.popover && (t.popover.find(".popover-content").html(i.popoverText), t.setPosition());
                    break;
                case"data-popover-position":
                    i.popoverPosition = n.attr("data-popover-position"), t.setPosition()
            }
        }, destroy: function () {
            var e, t = this.element, n = this.options;
            switch (n.popoverTrigger) {
                case r.popoverEvents.CLICK:
                    e = r.events.click;
                    break;
                case r.popoverEvents.FOCUS:
                    e = r.events.focus;
                    break;
                default:
                    e = r.events.enter
            }
            return t.off(e), !0 === n.hideOnLeave && t.off(r.events.leave), l(window).off(r.events.scroll, {ns: this.id}), t
        }
    })
}(Metro, m4q), function (e, i) {
    "use strict";
    var n = {
        progressDeferred: 0,
        showValue: !1,
        valuePosition: "free",
        showLabel: !1,
        labelPosition: "before",
        labelTemplate: "",
        value: 0,
        buffer: 0,
        type: "bar",
        small: !1,
        clsBack: "",
        clsBar: "",
        clsBuffer: "",
        clsValue: "",
        clsLabel: "",
        onValueChange: e.noop,
        onBufferChange: e.noop,
        onComplete: e.noop,
        onBuffered: e.noop,
        onProgressCreate: e.noop
    };
    e.progressSetup = function (e) {
        n = i.extend({}, n, e)
    }, window.metroProgressSetup, e.progressSetup(window.metroProgressSetup), e.Component("progress", {
        init: function (e, t) {
            return this._super(t, e, n, {value: 0, buffer: 0}), this
        }, _create: function () {
            var e, t = this.element, n = this.options;
            switch ("string" == typeof n.type && (n.type = n.type.toLowerCase()), t.html("").addClass("progress"), n.type) {
                case"buffer":
                    i("<div>").addClass("bar").appendTo(t), i("<div>").addClass("buffer").appendTo(t);
                    break;
                case"load":
                    t.addClass("with-load"), i("<div>").addClass("bar").appendTo(t), i("<div>").addClass("buffer").appendTo(t), i("<div>").addClass("load").appendTo(t);
                    break;
                case"line":
                    t.addClass("line");
                    break;
                default:
                    i("<div>").addClass("bar").appendTo(t)
            }
            "line" !== n.type && (e = i("<span>").addClass("value").addClass(n.clsValue).appendTo(t), "center" === n.valuePosition && e.addClass("centered"), !1 === n.showValue && e.hide()), !0 === n.small && t.addClass("small"), t.addClass(n.clsBack), t.find(".bar").addClass(n.clsBar), t.find(".buffer").addClass(n.clsBuffer), !0 === n.showLabel && (e = i("<span>").addClass("progress-label").addClass(n.clsLabel).html("" === n.labelTemplate ? n.value + "%" : n.labelTemplate.replace("%VAL%", n.value)), "before" === n.labelPosition ? e.insertBefore(t) : e.insertAfter(t)), this.val(n.value), this.buff(n.buffer), this._fireEvent("progress-create", {element: t})
        }, val: function (e) {
            var t = this.element, n = this.options, i = t.find(".value");
            if (void 0 === e) return this.value;
            var s = t.find(".bar");
            if (0 === s.length) return !1;
            this.value = parseInt(e, 10), s.css("width", this.value + "%"), i.html(this.value + "%");
            s = t.width() - s.width(), e = i.width() > s ? {left: "auto", right: s + "px"} : {left: e + "%"};
            "free" === n.valuePosition && i.css(e), !0 !== n.showLabel || (t = t["before" === n.labelPosition ? "prev" : "next"](".progress-label")).length && t.html("" === n.labelTemplate ? n.value + "%" : n.labelTemplate.replace("%VAL%", n.value)), this._fireEvent("value-change", {val: this.value}), 100 === this.value && this._fireEvent("complete", {val: this.value})
        }, buff: function (e) {
            var t = this.element;
            if (void 0 === e) return this.buffer;
            t = t.find(".buffer");
            if (0 === t.length) return !1;
            this.buffer = parseInt(e, 10), t.css("width", this.buffer + "%"), this._fireEvent("buffer-change", {val: this.buffer}), 100 === this.buffer && this._fireEvent("buffered", {val: this.buffer})
        }, changeValue: function () {
            this.val(this.element.attr("data-value"))
        }, changeBuffer: function () {
            this.buff(this.element.attr("data-buffer"))
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-value":
                    this.changeValue();
                    break;
                case"data-buffer":
                    this.changeBuffer()
            }
        }, destroy: function () {
            return this.element
        }
    })
}(Metro, m4q), function (e, a) {
    "use strict";
    var o = e.utils, n = {
        radioDeferred: 0,
        transition: !0,
        style: 1,
        caption: "",
        captionPosition: "right",
        clsRadio: "",
        clsCheck: "",
        clsCaption: "",
        onRadioCreate: e.noop
    };
    e.radioSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroRadioSetup, e.radioSetup(window.metroRadioSetup), e.Component("radio", {
        init: function (e, t) {
            return this._super(t, e, n, {origin: {className: ""}}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("radio-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options,
                n = a("<label>").addClass("radio " + e[0].className).addClass(2 === t.style ? "style2" : ""),
                i = a("<span>").addClass("check"), s = a("<span>").addClass("caption").html(t.caption);
            e.attr("type", "radio"), n.insertBefore(e), e.appendTo(n), i.appendTo(n), s.appendTo(n), !0 === t.transition && n.addClass("transition-on"), "left" === t.captionPosition && n.addClass("caption-left"), this.origin.className = e[0].className, e[0].className = "", n.addClass(t.clsRadio), s.addClass(t.clsCaption), i.addClass(t.clsCheck), e.is(":disabled") ? this.disable() : this.enable()
        }, _createEvents: function () {
            var e = this.element, t = e.siblings(".check");
            e.on("focus", function () {
                t.addClass("focused")
            }), e.on("blur", function () {
                t.removeClass("focused")
            })
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e) {
            var t, n = this.element, i = this.options, s = n.parent();
            switch (e) {
                case"disabled":
                    this.toggleState();
                    break;
                case"data-style":
                    t = parseInt(n.attr("data-style")), o.isInt(t) && (i.style = t, s.removeClass("style1 style2").addClass("style" + t))
            }
        }, destroy: function () {
            return this.element
        }
    })
}(Metro, m4q), function (d, u) {
    "use strict";
    var h = d.utils, n = {
        ratingDeferred: 0,
        label: "",
        static: !1,
        title: null,
        value: 0,
        values: null,
        message: "",
        stars: 5,
        starColor: null,
        staredColor: null,
        roundFunc: "round",
        half: !0,
        clsRating: "",
        clsTitle: "",
        clsStars: "",
        clsResult: "",
        clsLabel: "",
        onStarClick: d.noop,
        onRatingCreate: d.noop
    };
    d.ratingSetup = function (e) {
        n = u.extend({}, n, e)
    }, window.metroRatingSetup, d.ratingSetup(window.metroRatingSetup), d.Component("rating", {
        init: function (e, t) {
            return this._super(t, e, n, {value: 0, originValue: 0, values: [], rate: 0, rating: null}), this
        }, _create: function () {
            var e, t = this.element, n = this.options;
            if (isNaN(n.value) ? n.value = 0 : n.value = parseFloat(n.value).toFixed(1), null !== n.values) Array.isArray(n.values) ? this.values = n.values : "string" == typeof n.values && (this.values = n.values.toArray()); else for (e = 1; e <= n.stars; e++) this.values.push(e);
            this.originValue = n.value, this.value = 0 < n.value ? Math[n.roundFunc](n.value) : 0, this._createRating(), this._createEvents(), this._fireEvent("rating-create", {element: t})
        }, _createRating: function () {
            var e, t, n, i, s = this.element, a = this.options, o = h.elementId("rating"),
                r = u("<div>").addClass("rating " + String(s[0].className).replace("d-block", "d-flex")).addClass(a.clsRating),
                l = d.sheet, c = a.static ? Math.floor(this.originValue) : this.value;
            for (s.val(this.value), r.attr("id", o), r.insertBefore(s), s.appendTo(r), t = u("<ul>").addClass("stars").addClass(a.clsStars).appendTo(r), e = 1; e <= a.stars; e++) n = u("<li>").data("value", this.values[e - 1]).appendTo(t), e <= c && n.addClass("on");
            if (u("<span>").addClass("result").addClass(a.clsResult).appendTo(r).html(a.message), null !== a.starColor && d.colors.isColor(a.starColor) && h.addCssRule(l, "#" + o + " .stars:hover li", "color: " + a.starColor + ";"), null !== a.staredColor && d.colors.isColor(a.staredColor) && (h.addCssRule(l, "#" + o + " .stars li.on", "color: " + a.staredColor + ";"), h.addCssRule(l, "#" + o + " .stars li.half::after", "color: " + a.staredColor + ";")), null !== a.title && (o = u("<span>").addClass("title").addClass(a.clsTitle).html(a.title), r.prepend(o)), !0 === a.static && (r.addClass("static"), !0 !== a.half || 0 < (i = Math.round(this.originValue % 1 * 10)) && i <= 9 && r.find(".stars li.on").last().next("li").addClass("half half-" + 10 * i)), !(s[0].className = "") === a.copyInlineStyles) for (e = 0; e < s[0].style.length; e++) r.css(s[0].style[e], s.css(s[0].style[e]));
            a.label && (i = u("<label>").addClass("label-for-input").addClass(a.clsLabel).html(a.label).insertBefore(r), s.attr("id") && i.attr("for", s.attr("id")), "rtl" === s.attr("dir") && i.addClass("rtl")), s.is(":disabled") ? this.disable() : this.enable(), this.rating = r
        }, _createEvents: function () {
            var n = this, i = this.element, s = this.options;
            this.rating.on(d.events.click, ".stars li", function () {
                var e, t;
                !0 !== s.static && (t = (e = u(this)).data("value"), e.addClass("scale"), setTimeout(function () {
                    e.removeClass("scale")
                }, 300), i.val(t).trigger("change"), e.addClass("on"), e.prevAll().addClass("on"), e.nextAll().removeClass("on"), n._fireEvent("star-click", {
                    value: t,
                    star: e[0]
                }))
            })
        }, val: function (e) {
            var t = this, n = this.element, i = this.options, s = this.rating;
            if (void 0 === e) return this.value;
            this.value = 0 < e ? Math[i.roundFunc](e) : 0, n.val(this.value).trigger("change");
            s = s.find(".stars li").removeClass("on");
            return u.each(s, function () {
                var e = u(this);
                e.data("value") <= t.value && e.addClass("on")
            }), this
        }, msg: function (e) {
            var t = this.rating;
            if (void 0 !== e) return t.find(".result").html(e), this
        }, static: function (e) {
            var t = this.options, n = this.rating;
            !0 === (t.static = e) ? n.addClass("static") : n.removeClass("static")
        }, changeAttributeValue: function (e) {
            var t = this.element, t = "value" === e ? t.val() : t.attr("data-value");
            this.val(t)
        }, changeAttributeMessage: function () {
            var e = this.element.attr("data-message");
            this.msg(e)
        }, changeAttributeStatic: function () {
            var e = this.element, e = !0 === JSON.parse(e.attr("data-static"));
            this.static(e)
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e) {
            switch (e) {
                case"value":
                case"data-value":
                    this.changeAttributeValue(e);
                    break;
                case"disabled":
                    this.toggleState();
                    break;
                case"data-message":
                    this.changeAttributeMessage();
                    break;
                case"data-static":
                    this.changeAttributeStatic()
            }
        }, destroy: function () {
            var e = this.element;
            return this.rating.off(d.events.click, ".stars li"), e
        }
    })
}(Metro, m4q), function (l, c) {
    "use strict";
    var d = l.utils, n = {
        resizableDeferred: 0,
        canResize: !0,
        resizeElement: ".resize-element",
        minWidth: 0,
        minHeight: 0,
        maxWidth: 0,
        maxHeight: 0,
        preserveRatio: !1,
        onResizeStart: l.noop,
        onResizeStop: l.noop,
        onResize: l.noop,
        onResizableCreate: l.noop
    };
    l.resizableSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroResizableSetup, l.resizableSetup(window.metroResizableSetup), l.Component("resizable", {
        init: function (e, t) {
            return this._super(t, e, n, {resizer: null, id: d.elementId("resizable")}), this
        }, _create: function () {
            this._createStructure(), this._createEvents(), this._fireEvent("resizable-create")
        }, _createStructure: function () {
            var e = this.element, t = this.options;
            e.data("canResize", !0), e.addClass("resizable-element"), d.isValue(t.resizeElement) && 0 < e.find(t.resizeElement).length ? this.resizer = e.find(t.resizeElement) : this.resizer = c("<span>").addClass("resize-element").appendTo(e), e.data("canResize", t.canResize)
        }, _createEvents: function () {
            var a = this, o = this.element, r = this.options;
            this.resizer.on(l.events.start, function (e) {
                var t, n, i, s;
                !1 !== o.data("canResize") && (t = d.pageXY(e), n = parseInt(o.outerWidth()), i = parseInt(o.outerHeight()), s = {
                    width: n,
                    height: i
                }, o.addClass("stop-pointer"), a._fireEvent("resize-start", {size: s}), c(document).on(l.events.move, function (e) {
                    e = d.pageXY(e), e = {width: n + e.x - t.x, height: i + e.y - t.y};
                    return 0 < r.maxWidth && e.width > r.maxWidth || (0 < r.minWidth && e.width < r.minWidth || (0 < r.maxHeight && e.height > r.maxHeight || (0 < r.minHeight && e.height < r.minHeight || (o.css(e), void a._fireEvent("resize", {size: e})))))
                }, {ns: a.id}), c(document).on(l.events.stop, function () {
                    o.removeClass("stop-pointer"), c(document).off(l.events.move, {ns: a.id}), c(document).off(l.events.stop, {ns: a.id});
                    var e = {width: parseInt(o.outerWidth()), height: parseInt(o.outerHeight())};
                    a._fireEvent("resize-stop", {size: e})
                }, {ns: a.id}), e.preventDefault(), e.stopPropagation())
            })
        }, off: function () {
            this.element.data("canResize", !1)
        }, on: function () {
            this.element.data("canResize", !0)
        }, changeAttribute: function (e) {
            var t = this.element, n = this.options;
            "data-can-resize" === e && (n.canResize = !0 === JSON.parse(t.attr("data-can-resize")))
        }, destroy: function () {
            return this.resizer.off(l.events.start), this.element
        }
    })
}(Metro, m4q), function (e, t) {
    "use strict";
    var n = e.utils, i = {
        resizerDeferred: 0,
        onMediaPoint: e.noop,
        onMediaPointEnter: e.noop,
        onMediaPointLeave: e.noop,
        onWindowResize: e.noop,
        onElementResize: e.noop,
        onResizerCreate: e.noop
    };
    e.resizerSetup = function (e) {
        i = t.extend({}, i, e)
    }, window.metroResizerSetup, e.resizerSetup(window.metroResizerSetup), e.Component("resizer", {
        init: function (e, t) {
            return this._super(t, e, i, {
                size: {width: 0, height: 0},
                media: window.METRO_MEDIA,
                id: n.elementId("resizer")
            }), this
        }, _create: function () {
            var e = this.element;
            this.size = {
                width: e.width(),
                height: e.height()
            }, this._createStructure(), this._createEvents(), this._fireEvent("resizer-create", {element: e})
        }, _createStructure: function () {
        }, _createEvents: function () {
            var o = this, r = this.element, l = t.window();
            l.on("resize", function () {
                var e, t = l.width(), n = l.height(), i = r.width(), s = r.height(), a = o.size;
                o._fireEvent("window-resize", {
                    width: t,
                    height: n,
                    media: window.METRO_MEDIA
                }), o.size.width === i && o.size.height === s || (o.size = {
                    width: i,
                    height: s
                }, o._fireEvent("element-resize", {
                    width: i,
                    height: s,
                    oldSize: a,
                    media: window.METRO_MEDIA
                })), o.media.length !== window.METRO_MEDIA.length && (o.media.length > window.METRO_MEDIA.length ? (e = o.media.filter(function (e) {
                    return !window.METRO_MEDIA.contains(e)
                }), o._fireEvent("media-point-leave", {
                    point: e,
                    media: window.METRO_MEDIA
                })) : (e = window.METRO_MEDIA.filter(function (e) {
                    return !o.media.contains(e)
                }), o._fireEvent("media-point-enter", {
                    point: e,
                    media: window.METRO_MEDIA
                })), o.media = window.METRO_MEDIA, o._fireEvent("media-point", {point: e, media: window.METRO_MEDIA}))
            }, {ns: this.id})
        }, changeAttribute: function () {
        }, destroy: function () {
            t(window).off("resize", {ns: this.id})
        }
    })
}(Metro, m4q), function (o, r) {
    "use strict";
    var l = o.utils, n = {
        ribbonmenuDeferred: 0,
        onStatic: o.noop,
        onBeforeTab: o.noop_true,
        onTab: o.noop,
        onRibbonMenuCreate: o.noop
    };
    o.ribbonMenuSetup = function (e) {
        n = r.extend({}, n, e)
    }, window.metroRibbonMenuSetup, o.ribbonMenuSetup(window.metroRibbonMenuSetup), o.Component("ribbon-menu", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("ribbon-menu-create", {element: e})
        }, _createStructure: function () {
            var e = this.element;
            e.addClass("ribbon-menu");
            var t = e.find(".tabs-holder li:not(.static)"), n = e.find(".tabs-holder li.active");
            0 < n.length ? this.open(r(n[0])) : 0 < t.length && this.open(r(t[0]));
            e = e.find(".ribbon-toggle-group");
            r.each(e, function () {
                var e = r(this);
                e.buttongroup({clsActive: "active"});
                var t = 0, n = e.find(".ribbon-icon-button");
                r.each(n, function () {
                    var e = r(this).outerWidth(!0);
                    t < e && (t = e)
                }), e.css("width", t * Math.ceil(n.length / 3) + 4)
            })
        }, _createEvents: function () {
            var i = this, s = this.element, a = this.options;
            s.on(o.events.click, ".tabs-holder li a", function (e) {
                var t = r(this), n = r(this).parent("li");
                n.hasClass("static") ? a.onStatic === o.noop && void 0 !== t.attr("href") ? document.location.href = t.attr("href") : i._fireEvent("static", {tab: n[0]}) : !0 === l.exec(a.onBeforeTab, [n[0]], s[0]) && i.open(n[0]), e.preventDefault()
            })
        }, open: function (e) {
            var t = this.element, n = r(e), i = t.find(".tabs-holder li"), s = t.find(".content-holder .section"),
                e = n.children("a").attr("href"), e = "#" !== e ? t.find(e) : null;
            i.removeClass("active"), n.addClass("active"), s.removeClass("active"), e && e.addClass("active"), this._fireEvent("tab", {tab: n[0]})
        }, changeAttribute: function () {
        }, destroy: function () {
            var e = this.element;
            return e.off(o.events.click, ".tabs-holder li a"), e
        }
    })
}(Metro, m4q), function (c, d) {
    "use strict";
    var u = c.utils,
        n = {rippleDeferred: 0, rippleColor: "#fff", rippleAlpha: .4, rippleTarget: "default", onRippleCreate: c.noop};
    c.rippleSetup = function (e) {
        n = d.extend({}, n, e)
    }, window.metroRippleSetup, c.rippleSetup(window.metroRippleSetup);

    function i(e, t, n, i) {
        var s, a, o = d(e), r = u.rect(o[0]), l = c.colors;
        0 !== o.length && (u.isValue(t) || (t = "#fff"), u.isValue(n) || (n = .4), "static" === o.css("position") && o.css("position", "relative"), o.css({overflow: "hidden"}), d(".ripple").remove(), e = Math.max(o.outerWidth(), o.outerHeight()), a = d("<span class='ripple'></span>").css({
            width: e,
            height: e
        }), o.prepend(a), r = i ? (s = i.pageX - o.offset().left - a.width() / 2, i.pageY - o.offset().top - a.height() / 2) : (s = r.width / 2 - a.width() / 2, r.height / 2 - a.height() / 2), a.css({
            background: l.toRGBA(t, n),
            width: e,
            height: e,
            top: r + "px",
            left: s + "px"
        }).addClass("rippleEffect"), setTimeout(function () {
            a.remove()
        }, 400))
    }

    c.Component("ripple", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e = this.element, t = this.options, n = "default" === t.rippleTarget ? null : t.rippleTarget;
            e.on(c.events.click, n, function (e) {
                i(this, t.rippleColor, t.rippleAlpha, e)
            }), this._fireEvent("riopple-create", {element: e})
        }, changeAttribute: function (e) {
            var t, n, i = this.element, s = this.options;
            switch (e) {
                case"data-ripple-color":
                    n = i.attr("data-ripple-color"), c.colors.isColor(n) && (s.rippleColor = n);
                    break;
                case"data-ripple-alpha":
                    t = +i.attr("data-ripple-alpha"), isNaN(t) || (s.rippleColor = t)
            }
        }, destroy: function () {
            var e = this.element, t = this.options, t = "default" === t.rippleTarget ? null : t.rippleTarget;
            e.off(c.events.click, t)
        }
    }), c.ripple = i
}(Metro, m4q), function (m, v) {
    "use strict";
    var g = m.utils, n = {
        label: "",
        size: "normal",
        selectDeferred: 0,
        clearButton: !1,
        clearButtonIcon: "<span class='default-icon-cross'></span>",
        usePlaceholder: !1,
        placeholder: "",
        addEmptyValue: !1,
        emptyValue: "",
        duration: 0,
        prepend: "",
        append: "",
        filterPlaceholder: "Search...",
        filter: !0,
        copyInlineStyles: !1,
        dropHeight: 200,
        checkDropUp: !0,
        dropUp: !1,
        showGroupName: !1,
        shortTag: !0,
        clsSelect: "",
        clsSelectInput: "",
        clsPrepend: "",
        clsAppend: "",
        clsOption: "",
        clsOptionActive: "",
        clsOptionGroup: "",
        clsDropList: "",
        clsDropContainer: "",
        clsSelectedItem: "",
        clsSelectedItemRemover: "",
        clsLabel: "",
        onChange: m.noop,
        onUp: m.noop,
        onDrop: m.noop,
        onItemSelect: m.noop,
        onItemDeselect: m.noop,
        onSelectCreate: m.noop
    };
    m.selectSetup = function (e) {
        n = v.extend({}, n, e)
    }, window.metroSelectSetup, m.selectSetup(window.metroSelectSetup), m.Component("select", {
        init: function (e, t) {
            return this._super(t, e, n, {list: null, placeholder: null}), this
        }, _create: function () {
            var e = this.element;
            this._createSelect(), this._createEvents(), this._fireEvent("select-create", {element: e})
        }, _setPlaceholder: function () {
            var e = this.element, t = this.options, n = e.siblings(".select-input");
            !0 !== t.usePlaceholder || g.isValue(e.val()) && e.val() != t.emptyValue || n.html(this.placeholder)
        }, _addTag: function (e, t) {
            var n, i = this.element, s = this.options, i = i.closest(".select"),
                t = v("<div>").addClass("tag").addClass(s.shortTag ? "short-tag" : "").addClass(s.clsSelectedItem).html("<span class='title'>" + e + "</span>").data("option", t);
            return v("<span>").addClass("remover").addClass(s.clsSelectedItemRemover).html("&times;").appendTo(t), i.hasClass("input-large") ? n = "large" : i.hasClass("input-small") && (n = "small"), t.addClass(n), t
        }, _addOption: function (e, t, n, i, s) {
            var a = v(e), o = this.element, r = this.options,
                l = g.isValue(a.attr("data-template")) ? a.attr("data-template").replace("$1", e.text) : e.text,
                c = v("<li>").addClass(r.clsOption).data("option", e).attr("data-text", e.text).attr("data-value", e.value || ""),
                d = v("<a>").html(l);
            c.addClass(e.className), c.data("group", s), a.is(":disabled") && c.addClass("disabled"), a.is(":selected") && (r.showGroupName && s && (l += "&nbsp;<span class='selected-item__group-name'>" + s + "</span>"), i ? (c.addClass("d-none"), n.append(this._addTag(l, c))) : (o.val(e.value), n.html(l), o.fire("change", {val: e.value}), c.addClass("active"))), c.append(d).appendTo(t)
        }, _addOptionGroup: function (e, t, n, i) {
            var s = this, a = this.options, o = v(e);
            v("<li>").html(e.label).addClass("group-title").addClass(a.clsOptionGroup).appendTo(t), v.each(o.children(), function () {
                s._addOption(this, t, n, i, e.label)
            })
        }, _createOptions: function () {
            var e = this, t = this.element, n = this.options, i = t.parent().find("ul").empty(),
                s = 0 < t.find("option[selected]").length, a = t[0].multiple, o = t.siblings(".select-input");
            t.siblings(".select-input").empty(), !0 === n.addEmptyValue && t.prepend(v("<option " + (s ? "" : "selected") + " value='" + n.emptyValue + "' class='d-none'></option>")), v.each(t.children(), function () {
                "OPTION" === this.tagName ? e._addOption(this, i, o, a, null) : "OPTGROUP" === this.tagName && e._addOptionGroup(this, i, o, a)
            })
        }, _createSelect: function () {
            var t, n, i, s, a = this, e = this.element, o = this.options,
                r = v("<label>").addClass("select " + e[0].className).addClass(o.clsSelect), l = e[0].multiple,
                c = g.elementId("select"), d = v("<div>").addClass("button-group"),
                u = g.elementId("select-focus-trigger"),
                h = v("<input type='checkbox'>").addClass("select-focus-trigger").attr("id", u);
            if (this.placeholder = v("<span>").addClass("placeholder").html(o.placeholder), r.attr("id", c).attr("for", u), r.addClass("input-" + o.size), (s = v("<span>").addClass("dropdown-toggle")).appendTo(r), l && r.addClass("multiple"), r.insertBefore(e), e.appendTo(r), d.appendTo(r), h.appendTo(r), h = v("<div>").addClass("select-input").addClass(o.clsSelectInput).attr("name", "__" + c + "__"), t = v("<div>").addClass("drop-container").addClass(o.clsDropContainer), c = v("<div>").appendTo(t), n = v("<ul>").addClass("option-list").addClass(o.clsDropList).css({"max-height": o.dropHeight}), i = v("<input type='text' data-role='input'>").attr("placeholder", o.filterPlaceholder).appendTo(c), r.append(h), r.append(t), t.append(c), !0 !== o.filter && c.hide(), t.append(n), this._createOptions(), this._setPlaceholder(), m.makePlugin(t, "dropdown", {
                dropFilter: ".select",
                duration: o.duration,
                toggleElement: [r],
                checkDropUp: o.checkDropUp,
                dropUp: o.dropUp,
                onDrop: function () {
                    var e;
                    s.addClass("active-toggle"), e = v(".select .drop-container"), v.each(e, function () {
                        var e = v(this);
                        e.is(t) || (e = m.getPlugin(e, "dropdown")) && e.close && e.close()
                    }), i.val("").trigger(m.events.keyup), void 0 !== (e = 0 < n.find("li.active").length ? v(n.find("li.active")[0]) : void 0) && (n[0].scrollTop = e.position().top - (n.height() - e.height()) / 2), a._fireEvent("drop", {list: n[0]})
                },
                onUp: function () {
                    s.removeClass("active-toggle"), a._fireEvent("up", {list: n[0]})
                }
            }), this.list = n, !0 !== o.clearButton || e[0].readOnly ? d.addClass("d-none") : v("<button>").addClass("button input-clear-button").addClass(o.clsClearButton).attr("tabindex", -1).attr("type", "button").html(o.clearButtonIcon).appendTo(d), "" === o.prepend || l || v("<div>").html(o.prepend).addClass("prepend").addClass(o.clsPrepend).appendTo(r), "" === o.append || l || v("<div>").html(o.append).addClass("append").addClass(o.clsAppend).appendTo(r), !0 === o.copyInlineStyles) for (var p = 0, f = e[0].style.length; p < f; p++) r.css(e[0].style[p], e.css(e[0].style[p]));
            "rtl" === e.attr("dir") && r.addClass("rtl").attr("dir", "rtl"), o.label && (o = v("<label>").addClass("label-for-input").addClass(o.clsLabel).html(o.label).insertBefore(r), e.attr("id") && o.attr("for", e.attr("id")), "rtl" === e.attr("dir") && o.addClass("rtl")), e.is(":disabled") ? this.disable() : this.enable()
        }, _createEvents: function () {
            var o = this, r = this.element, l = this.options, e = r.closest(".select"), c = e.find(".drop-container"),
                d = r.siblings(".select-input"), t = c.find("input"), u = c.find("ul"),
                n = e.find(".input-clear-button"), i = e.find(".select-focus-trigger");
            i.on("focus", function () {
                e.addClass("focused")
            }), i.on("blur", function () {
                e.removeClass("focused")
            }), n.on(m.events.click, function (e) {
                r.val(l.emptyValue), r[0].multiple && (u.find("li").removeClass("d-none"), d.clear()), o._setPlaceholder(), e.preventDefault(), e.stopPropagation()
            }), r.on(m.events.change, function () {
                o._setPlaceholder()
            }), e.on(m.events.click, function () {
                v(".focused").removeClass("focused"), e.addClass("focused")
            }), d.on(m.events.click, function () {
                v(".focused").removeClass("focused"), e.addClass("focused")
            }), u.on(m.events.click, "li", function (e) {
                if (v(this).hasClass("group-title")) return e.preventDefault(), void e.stopPropagation();
                var t = v(this), n = t.data("value"), i = t.data("group"), s = t.children("a").html(),
                    a = t.data("option"), e = r.find("option");
                l.showGroupName && i && (s += "&nbsp;<span class='selected-item__group-name'>" + i + "</span>"), r[0].multiple ? (t.addClass("d-none"), d.append(o._addTag(s, t))) : (u.find("li.active").removeClass("active").removeClass(l.clsOptionActive), t.addClass("active").addClass(l.clsOptionActive), d.html(s), m.getPlugin(c, "dropdown").close()), v.each(e, function () {
                    this === a && (this.selected = !0)
                }), o._fireEvent("item-select", {
                    val: n,
                    option: a,
                    leaf: t[0]
                }), t = o.getSelected(), o._fireEvent("change", {selected: t})
            }), d.on("click", ".tag .remover", function (e) {
                var t = v(this).closest(".tag"), n = t.data("option"), i = n.data("option");
                n.removeClass("d-none"), v.each(r.find("option"), function () {
                    this === i && (this.selected = !1)
                }), t.remove(), o._fireEvent("item-deselect", {option: i}), t = o.getSelected(), o._fireEvent("change", {selected: t}), e.preventDefault(), e.stopPropagation()
            }), t.on(m.events.keyup, function () {
                for (var e = this.value.toUpperCase(), t = u.find("li"), n = 0; n < t.length; n++) v(t[n]).hasClass("group-title") || (-1 < t[n].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(e) ? t[n].style.display = "" : t[n].style.display = "none")
            }), t.on(m.events.click, function (e) {
                e.preventDefault(), e.stopPropagation()
            }), c.on(m.events.click, function (e) {
                e.preventDefault(), e.stopPropagation()
            })
        }, disable: function () {
            this.element.data("disabled", !0), this.element.closest(".select").addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.closest(".select").removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, reset: function (e) {
            var t = this.element, n = t.find("option"), t = t.closest(".select");
            v.each(n, function () {
                this.selected = !g.isNull(e) && this.defaultSelected
            }), this.list.find("li").remove(), t.find(".select-input").html(""), this._createOptions(), t = this.getSelected(), this._fireEvent("change", {selected: t})
        }, getSelected: function () {
            var e = this.element, t = [];
            return e.find("option").each(function () {
                this.selected && t.push(this.value)
            }), t
        }, val: function (e) {
            var t, n, i, s, a, o = this, r = this.element, l = this.options, c = r.siblings(".select-input"),
                d = r.find("option"), u = this.list.find("li"), h = [], p = void 0 !== r.attr("multiple");
            if (g.isNull(e)) return v.each(d, function () {
                this.selected && h.push(this.value)
            }), p ? h : h[0];
            v.each(d, function () {
                this.selected = !1
            }), u.removeClass("active").removeClass(l.clsOptionActive), c.html(""), !1 === Array.isArray(e) && (e = [e]), v.each(e, function () {
                for (n = 0; n < d.length; n++) if (t = d[n], i = g.isValue(t.getAttribute("data-template")) ? t.getAttribute("data-template").replace("$1", t.text) : t.text, "" + t.value == "" + this) {
                    t.selected = !0;
                    break
                }
                for (n = 0; n < u.length; n++) if (s = v(u[n]), a = s.data("group"), "" + s.attr("data-value") == "" + this) {
                    l.showGroupName && a && (i += "&nbsp;<span class='selected-item__group-name'>" + a + "</span>"), p ? (s.addClass("d-none"), c.append(o._addTag(i, s))) : (s.addClass("active").addClass(l.clsOptionActive), c.html(i));
                    break
                }
            }), e = this.getSelected(), this._fireEvent("change", {selected: e})
        }, options: function (e, t, n) {
            return this.data(e, t, n)
        }, data: function (e, t, n) {
            var i, s = this.element, n = n || ",", a = "string" == typeof t ? t.toArray(n).map(function (e) {
                return +e
            }) : Array.isArray(t) ? t.slice().map(function (e) {
                return +e
            }) : [];
            s.empty(), "string" == typeof e ? s.html(e) : g.isObject(e) && v.each(e, function (e, t) {
                g.isObject(t) ? (i = v("<optgroup label=''>").attr("label", e).appendTo(s), v.each(t, function (e, t) {
                    t = v("<option>").attr("value", e).text(t).appendTo(i);
                    -1 < a.indexOf(+e) && t.prop("selected", !0)
                })) : (t = v("<option>").attr("value", e).text(t).appendTo(s), -1 < a.indexOf(+e) && t.prop("selected", !0))
            }), this._createOptions()
        }, changeAttribute: function (e) {
            "disabled" === e && this.toggleState()
        }, destroy: function () {
            var e = this.element, t = e.closest(".select"), n = t.find(".drop-container"),
                i = e.siblings(".select-input"), s = n.find("input"), a = n.find("ul"),
                o = t.find(".input-clear-button");
            return t.off(m.events.click), t.off(m.events.click, ".input-clear-button"), i.off(m.events.click), s.off(m.events.blur), s.off(m.events.focus), a.off(m.events.click, "li"), s.off(m.events.keyup), n.off(m.events.click), o.off(m.events.click), n.data("dropdown").destroy(), e
        }
    }), v(document).on(m.events.click, function () {
        v(".select").removeClass("focused")
    }, {ns: "blur-select-elements"})
}(Metro, m4q), function (a, o) {
    "use strict";
    var r = a.utils, n = {
        menuScrollbar: !1,
        sidebarDeferred: 0,
        shadow: !0,
        position: "left",
        size: 290,
        shift: null,
        staticShift: null,
        toggle: null,
        duration: METRO_ANIMATION_DURATION,
        static: null,
        menuItemClick: !0,
        onOpen: a.noop,
        onClose: a.noop,
        onToggle: a.noop,
        onStaticSet: a.noop,
        onStaticLoss: a.noop,
        onSidebarCreate: a.noop
    };
    a.sidebarSetup = function (e) {
        n = o.extend({}, n, e)
    }, window.metroSidebarSetup, a.sidebarSetup(window.metroSidebarSetup), a.Component("sidebar", {
        init: function (e, t) {
            return this._super(t, e, n, {toggle_element: null, id: r.elementId("sidebar")}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), o(window).resize(), this._checkStatic(), this._fireEvent("sidebar-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options, n = e.find(".sidebar-header"), i = a.sheet,
                s = e.find(".sidebar-menu");
            e.addClass("sidebar").addClass("on-" + t.position), !1 === t.menuScrollbar && s.addClass("hide-scroll"), 290 !== t.size && (r.addCssRule(i, ".sidebar", "width: " + t.size + "px;"), "left" === t.position ? r.addCssRule(i, ".sidebar.on-left", "left: " + -t.size + "px;") : r.addCssRule(i, ".sidebar.on-right", "right: " + -t.size + "px;")), !0 === t.shadow && e.addClass("sidebar-shadow"), null !== t.toggle && 0 < o(t.toggle).length && (this.toggle_element = o(t.toggle)), 0 < n.length && void 0 !== n.data("image") && n.css({backgroundImage: "url(" + n.data("image") + ")"}), null !== t.static && null !== t.staticShift && ("left" === t.position ? r.addCssRule(i, "@media screen and " + a.media_queries[t.static.toUpperCase()], t.staticShift + "{margin-left: " + t.size + "px; width: calc(100% - " + t.size + "px);}") : r.addCssRule(i, "@media screen and " + a.media_queries[t.static.toUpperCase()], t.staticShift + "{margin-right: " + t.size + "px; width: calc(100% - " + t.size + "px);}"))
        }, _createEvents: function () {
            var t = this, e = this.element, n = this.options, i = this.toggle_element;
            null !== i ? i.on(a.events.click, function (e) {
                t.toggle(), e.stopPropagation()
            }) : n.toggle && o.document().on("click", n.toggle, function (e) {
                t.toggle(), e.stopPropagation()
            }), null !== n.static && -1 < ["fs", "sm", "md", "lg", "xl", "xxl"].indexOf(n.static) && o(window).on(a.events.resize, function () {
                t._checkStatic()
            }, {ns: this.id}), !0 === n.menuItemClick && e.on(a.events.click, ".sidebar-menu li > a", function (e) {
                t.close(), e.stopPropagation()
            }), e.on(a.events.click, ".sidebar-menu .js-sidebar-close", function (e) {
                t.close(), e.stopPropagation()
            }), e.on(a.events.click, function (e) {
                e.stopPropagation()
            })
        }, _checkStatic: function () {
            var e = this.element, t = this.options;
            r.mediaExist(t.static) && !e.hasClass("static") && (e.addClass("static"), e.data("opened", !1).removeClass("open"), null !== t.shift && o.each(t.shift.split(","), function () {
                o(this).animate({draw: {left: 0}, dur: t.duration})
            }), this._fireEvent("static-set")), r.mediaExist(t.static) || (e.removeClass("static"), this._fireEvent("static-loss"))
        }, isOpen: function () {
            return !0 === this.element.data("opened")
        }, open: function () {
            var e = this.element, t = this.options;
            e.hasClass("static") || (e.data("opened", !0).addClass("open"), null !== t.shift && o(t.shift).animate({
                draw: {left: e.outerWidth()},
                dur: t.duration
            }), this._fireEvent("open"))
        }, close: function () {
            var e = this.element, t = this.options;
            e.hasClass("static") || (e.data("opened", !1).removeClass("open"), null !== t.shift && o(t.shift).animate({
                draw: {left: 0},
                dur: t.duration
            }), this._fireEvent("close"))
        }, toggle: function () {
            this.isOpen() ? this.close() : this.open(), this._fireEvent("toggle")
        }, changeAttribute: function () {
        }, destroy: function () {
            var e = this.element, t = this.options, n = this.toggle_element;
            return null !== n && n.off(a.events.click), null !== t.static && -1 < ["fs", "sm", "md", "lg", "xl", "xxl"].indexOf(t.static) && o(window).off(a.events.resize, {ns: this.id}), !0 === t.menuItemClick && e.off(a.events.click, ".sidebar-menu li > a"), e.off(a.events.click, ".sidebar-menu .js-sidebar-close"), e
        }
    }), a.sidebar = {
        isSidebar: function (e) {
            return r.isMetroObject(e, "sidebar")
        }, open: function (e) {
            this.isSidebar(e) && a.getPlugin(e, "sidebar").open()
        }, close: function (e) {
            this.isSidebar(e) && a.getPlugin(e, "sidebar").close()
        }, toggle: function (e) {
            this.isSidebar(e) && a.getPlugin(e, "sidebar").toggle()
        }, isOpen: function (e) {
            if (this.isSidebar(e)) return a.getPlugin(e, "sidebar").isOpen()
        }
    }
}(Metro, m4q), function (u, h) {
    "use strict";
    var o = u.utils, n = {
        sliderDeferred: 0,
        roundValue: !0,
        min: 0,
        max: 100,
        accuracy: 0,
        showMinMax: !1,
        minMaxPosition: u.position.TOP,
        value: 0,
        buffer: 0,
        hint: !1,
        hintAlways: !1,
        hintPosition: u.position.TOP,
        hintMask: "$1",
        vertical: !1,
        target: null,
        returnType: "value",
        size: 0,
        clsSlider: "",
        clsBackside: "",
        clsComplete: "",
        clsBuffer: "",
        clsMarker: "",
        clsHint: "",
        clsMinMax: "",
        clsMin: "",
        clsMax: "",
        onStart: u.noop,
        onStop: u.noop,
        onMove: u.noop,
        onSliderClick: u.noop,
        onChange: u.noop,
        onChangeValue: u.noop,
        onChangeBuffer: u.noop,
        onFocus: u.noop,
        onBlur: u.noop,
        onSliderCreate: u.noop
    };
    u.sliderSetup = function (e) {
        n = h.extend({}, n, e)
    }, window.metroSliderSetup, u.sliderSetup(window.metroSliderSetup), u.Component("slider", {
        init: function (e, t) {
            return this._super(t, e, n, {
                slider: null,
                value: 0,
                percent: 0,
                pixel: 0,
                buffer: 0,
                keyInterval: !1,
                id: o.elementId("slider")
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            this._createSlider(), this._createEvents(), this.buff(t.buffer), this.val(t.value), this._fireEvent("slider-create", {element: e})
        }, _createSlider: function () {
            var e, t = this.element, n = this.options, i = t.prev(), s = t.parent(),
                a = h("<div>").addClass("slider " + t[0].className).addClass(n.clsSlider),
                o = h("<div>").addClass("backside").addClass(n.clsBackside),
                r = h("<div>").addClass("complete").addClass(n.clsComplete),
                l = h("<div>").addClass("buffer").addClass(n.clsBuffer),
                c = h("<button>").attr("type", "button").addClass("marker").addClass(n.clsMarker),
                d = h("<div>").addClass("hint").addClass(n.hintPosition + "-side").addClass(n.clsHint);
            if (0 < n.size && (!0 === n.vertical ? a.outerHeight(n.size) : a.outerWidth(n.size)), !0 === n.vertical && a.addClass("vertical-slider"), 0 === i.length ? s.prepend(a) : a.insertAfter(i), !0 === n.hintAlways && d.css({display: "block"}).addClass("permanent-hint"), t.appendTo(a), o.appendTo(a), r.appendTo(a), l.appendTo(a), c.appendTo(a), d.appendTo(c), !0 === n.showMinMax && (c = h("<div>").addClass("slider-min-max").addClass(n.clsMinMax), h("<span>").addClass("slider-text-min").addClass(n.clsMin).html(n.min).appendTo(c), h("<span>").addClass("slider-text-max").addClass(n.clsMax).html(n.max).appendTo(c), n.minMaxPosition === u.position.TOP ? c.insertBefore(a) : c.insertAfter(a)), !(t[0].className = "") === n.copyInlineStyles) for (e = 0; e < t[0].style.length; e++) a.css(t[0].style[e], t.css(t[0].style[e]));
            t.is(":disabled") ? this.disable() : this.enable(), this.slider = a
        }, _createEvents: function () {
            var i = this, e = this.slider, s = this.options, t = e.find(".marker"), n = e.find(".hint");
            t.on(u.events.startAll, function () {
                !0 === s.hint && !0 !== s.hintAlways && n.fadeIn(300), h(document).on(u.events.moveAll, function (e) {
                    i._move(e), i._fireEvent("move", {val: i.value, percent: i.percent})
                }, {ns: i.id, passive: !1}), h(document).on(u.events.stopAll, function () {
                    h(document).off(u.events.moveAll, {ns: i.id}), h(document).off(u.events.stopAll, {ns: i.id}), !0 !== s.hintAlways && n.fadeOut(300), i._fireEvent("stop", {
                        val: i.value,
                        percent: i.percent
                    })
                }, {ns: i.id}), i._fireEvent("start", {val: i.value, percent: i.percent})
            }), t.on(u.events.focus, function () {
                i._fireEvent("focus", {val: i.value, percent: i.percent})
            }), t.on(u.events.blur, function () {
                i._fireEvent("blur", {val: i.value, percent: i.percent})
            }), t.on(u.events.keydown, function (t) {
                var n, e = t.keyCode || t.which;
                -1 !== [37, 38, 39, 40].indexOf(e) && (n = 0 === s.accuracy ? 1 : s.accuracy, i.keyInterval || (i.keyInterval = setInterval(function () {
                    var e = i.value;
                    37 !== t.keyCode && 40 !== t.keyCode || (e - n < s.min ? e = s.min : e -= n), 38 !== t.keyCode && 39 !== t.keyCode || (e + n > s.max ? e = s.max : e += n), i.value = i._correct(e), i.percent = i._convert(i.value, "val2prc"), i.pixel = i._convert(i.percent, "prc2pix"), i._redraw()
                }, 100), t.preventDefault()))
            }), t.on(u.events.keyup, function () {
                clearInterval(i.keyInterval), i.keyInterval = !1
            }), e.on(u.events.click, function (e) {
                i._move(e), i._fireEvent("slider-click", {
                    val: i.value,
                    percent: i.percent
                }), i._fireEvent("stop", {val: i.value, percent: i.percent})
            }), h(window).on(u.events.resize, function () {
                i.val(i.value), i.buff(i.buffer)
            }, {ns: i.id})
        }, _convert: function (e, t) {
            var n = this.slider, i = this.options,
                s = (!0 === i.vertical ? n.outerHeight() : n.outerWidth()) - n.find(".marker").outerWidth();
            switch (t) {
                case"pix2prc":
                    return 100 * e / s;
                case"pix2val":
                    return this._convert(e, "pix2prc") * ((i.max - i.min) / 100) + i.min;
                case"val2prc":
                    return (e - i.min) / ((i.max - i.min) / 100);
                case"prc2pix":
                    return e / (100 / s);
                case"val2pix":
                    return this._convert(this._convert(e, "val2prc"), "prc2pix")
            }
            return 0
        }, _correct: function (e) {
            var t = e, n = this.options.accuracy, i = this.options.min, s = this.options.max;
            return 0 === n || isNaN(n) ? t : ((t = Math.round(e / n) * n) < i && (t = i), s < t && (t = s), t.toFixed(o.decCount(n)))
        }, _move: function (e) {
            var t = this.slider, n = this.options, i = t.offset(), s = t.find(".marker").outerWidth(),
                a = !0 === n.vertical ? t.outerHeight() : t.outerWidth(), t = a - s,
                i = !0 === n.vertical ? o.pageXY(e).y - i.top : o.pageXY(e).x - i.left,
                s = !0 === n.vertical ? a - i - s / 2 : i - s / 2;
            s < 0 || t < s || (this.value = this._correct(this._convert(s, "pix2val")), this.percent = this._convert(this.value, "val2prc"), this.pixel = this._convert(this.percent, "prc2pix"), this._redraw())
        }, _hint: function () {
            var e = this.options, t = this.slider.find(".hint"), n = +this.value || 0, i = +this.percent || 0;
            e.roundValue && (n = (o.isValue(n) ? +n : 0).toFixed(o.decCount(e.accuracy)), i = (o.isValue(i) ? +i : 0).toFixed(o.decCount(e.accuracy))), t.text(e.hintMask.replace("$1", n).replace("$2", i))
        }, _value: function () {
            var e = this.element, t = this.options, n = "value" === t.returnType ? this.value : this.percent,
                i = this.percent, s = this.buffer;
            t.roundValue && (n = (o.isValue(n) ? +n : 0).toFixed(o.decCount(t.accuracy)), i = (o.isValue(i) ? +i : 0).toFixed(o.decCount(t.accuracy)), s = (o.isValue(s) ? +s : 0).toFixed(o.decCount(t.accuracy))), "INPUT" === e[0].tagName && e.val(n), null === t.target || 0 !== (t = h(t.target)).length && h.each(t, function () {
                var e = h(this);
                "INPUT" === this.tagName ? e.val(n) : e.text(n), e.trigger("change")
            }), this._fireEvent("change-value", {val: n}), this._fireEvent("change", {val: n, percent: i, buffer: s})
        }, _marker: function () {
            var e = this.slider, t = this.options, n = e.find(".marker"), i = e.find(".complete"),
                s = !0 === t.vertical ? e.outerHeight() : e.outerWidth(), a = parseInt(o.getStyleOne(n, "width")),
                e = o.isVisible(e);
            e && n.css({
                "margin-top": 0,
                "margin-left": 0
            }), !0 === t.vertical ? (e ? n.css("top", s - this.pixel) : (n.css("top", 100 - this.percent + "%"), n.css("margin-top", a / 2)), i.css("height", this.percent + "%")) : (e ? n.css("left", this.pixel) : (n.css("left", this.percent + "%"), n.css("margin-left", 0 === this.percent ? 0 : -1 * a / 2)), i.css("width", this.percent + "%"))
        }, _redraw: function () {
            this._marker(), this._value(), this._hint()
        }, _buffer: function () {
            var e = this.element, t = this.options, n = this.slider.find(".buffer");
            !0 === t.vertical ? n.css("height", this.buffer + "%") : n.css("width", this.buffer + "%"), this._fireEvent("change-buffer", {val: this.buffer}), this._fireEvent("change", {
                val: e.val(),
                percent: this.percent,
                buffer: this.buffer
            })
        }, val: function (e) {
            var t = this.options;
            if (void 0 === e || isNaN(e)) return this.value;
            e < t.min && (e = t.min), e > t.max && (e = t.max), this.value = this._correct(e), this.percent = this._convert(this.value, "val2prc"), this.pixel = this._convert(this.percent, "prc2pix"), this._redraw()
        }, buff: function (e) {
            var t = this.slider.find(".buffer");
            return void 0 === e || isNaN(e) ? this.buffer : 0 !== t.length && (100 < (e = parseInt(e)) && (e = 100), e < 0 && (e = 0), this.buffer = e, void this._buffer())
        }, changeValue: function () {
            var e = this.element, t = this.options, e = e.attr("data-value");
            e < t.min && (e = t.min), e > t.max && (e = t.max), this.val(e)
        }, changeBuffer: function () {
            var e = this.element, e = parseInt(e.attr("data-buffer"));
            e < 0 && (e = 0), 100 < e && (e = 100), this.buff(e)
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-value":
                    this.changeValue();
                    break;
                case"data-buffer":
                    this.changeBuffer();
                    break;
                case"disabled":
                    this.toggleState()
            }
        }, destroy: function () {
            var e = this.element, t = this.slider, n = t.find(".marker");
            return n.off(u.events.startAll), n.off(u.events.focus), n.off(u.events.blur), n.off(u.events.keydown), n.off(u.events.keyup), t.off(u.events.click), h(window).off(u.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q), function (n, o) {
    "use strict";
    var r = n.utils, i = {
        sorterDeferred: 0,
        thousandSeparator: ",",
        decimalSeparator: ",",
        sortTarget: null,
        sortSource: null,
        sortDir: "asc",
        sortStart: !0,
        saveInitial: !0,
        onSortStart: n.noop,
        onSortStop: n.noop,
        onSortItemSwitch: n.noop,
        onSorterCreate: n.noop
    };
    n.sorterSetup = function (e) {
        i = o.extend({}, i, e)
    }, window.metroSorterSetup, n.sorterSetup(window.metroSorterSetup), n.Component("sorter", {
        init: function (e, t) {
            return this._super(t, e, i, {initial: []}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._fireEvent("sorter-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options;
            null === t.sortTarget && (t.sortTarget = e.children()[0].tagName), this.initial = e.find(t.sortTarget).get(), !0 === t.sortStart && this.sort(t.sortDir)
        }, _getItemContent: function (e) {
            var t, n, i, s, a = this.options;
            if (r.isValue(a.sortSource)) {
                if (t = "", 0 < (n = e.getElementsByClassName(a.sortSource)).length) for (i = 0; i < n.length; i++) t += n[i].textContent;
                s = n[0].dataset.format
            } else t = e.textContent, s = e.dataset.format;
            if (t = ("" + t).toLowerCase().replace(/[\n\r]+|[\s]{2,}/g, " ").trim(), r.isValue(s)) switch (-1 === ["number", "int", "float", "money"].indexOf(s) || "," === a.thousandSeparator && "." === a.decimalSeparator || (t = r.parseNumber(t, a.thousandSeparator, a.decimalSeparator)), s) {
                case"date":
                    t = r.isDate(t) ? new Date(t) : "";
                    break;
                case"number":
                    t = Number(t);
                    break;
                case"int":
                    t = parseInt(t);
                    break;
                case"float":
                    t = parseFloat(t);
                    break;
                case"money":
                    t = r.parseMoney(t);
                    break;
                case"card":
                    t = r.parseCard(t);
                    break;
                case"phone":
                    t = r.parsePhone(t)
            }
            return t
        }, sort: function (e) {
            var t, s = this, n = this.element, i = this.options, a = r.elementId("temp");
            void 0 !== e && (i.sortDir = e), 0 !== (e = n.find(i.sortTarget).get()).length && (t = o("<div>").attr("id", a).insertBefore(o(n.find(i.sortTarget)[0])), this._fireEvent("sort-start", {items: e}), e.sort(function (e, t) {
                var n = s._getItemContent(e), i = s._getItemContent(t), i = i < n ? 1 : n < i ? -1 : 0;
                return 0 !== i && s._fireEvent("sort-item-switch", {a: e, b: t, result: i}), i
            }), "desc" === i.sortDir && e.reverse(), n.find(i.sortTarget).remove(), o.each(e, function () {
                var e = o(this);
                e.insertAfter(t), t = e
            }), o("#" + a).remove(), this._fireEvent("sort-stop", {items: e}))
        }, reset: function () {
            var t, e = this.element, n = this.options, i = r.elementId("sorter"), s = this.initial;
            0 !== s.length && (t = o("<div>").attr("id", i).insertBefore(o(e.find(n.sortTarget)[0])), e.find(n.sortTarget).remove(), o.each(s, function () {
                var e = o(this);
                e.insertAfter(t), t = e
            }), o("#" + i).remove())
        }, changeAttribute: function (e) {
            var t, n, i = this, s = this.element, a = this.options;
            switch (e) {
                case"data-sort-dir":
                    "" !== (n = s.attr("data-sort-dir").trim()) && (a.sortDir = n, i.sort());
                    break;
                case"data-sort-content":
                    "" !== (t = s.attr("data-sort-content").trim()) && (a.sortContent = t, i.sort())
            }
        }, destroy: function () {
            return this.element
        }
    }), n.sorter = {
        create: function (e, t) {
            return r.$()(e).sorter(t)
        }, isSorter: function (e) {
            return r.isMetroObject(e, "sorter")
        }, sort: function (e, t) {
            if (!this.isSorter(e)) return !1;
            void 0 === t && (t = "asc"), n.getPlugin(e, "sorter").sort(t)
        }, reset: function (e) {
            if (!this.isSorter(e)) return !1;
            n.getPlugin(e, "sorter").reset()
        }
    }
}(Metro, m4q), function (i, c) {
    "use strict";
    var o = i.utils, n = {
        spinnerDeferred: 0,
        label: "",
        step: 1,
        plusIcon: "<span class='default-icon-plus'></span>",
        minusIcon: "<span class='default-icon-minus'></span>",
        buttonsPosition: "default",
        defaultValue: 0,
        minValue: null,
        maxValue: null,
        fixed: 0,
        repeatThreshold: 1e3,
        hideCursor: !1,
        clsSpinner: "",
        clsSpinnerInput: "",
        clsSpinnerButton: "",
        clsSpinnerButtonPlus: "",
        clsSpinnerButtonMinus: "",
        clsLabel: "",
        onBeforeChange: i.noop_true,
        onChange: i.noop,
        onPlusClick: i.noop,
        onMinusClick: i.noop,
        onArrowUp: i.noop,
        onArrowDown: i.noop,
        onButtonClick: i.noop,
        onArrowClick: i.noop,
        onSpinnerCreate: i.noop
    };
    i.spinnerSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroSpinnerSetup, i.spinnerSetup(window.metroSpinnerSetup), i.Component("spinner", {
        init: function (e, t) {
            return this._super(t, e, n, {repeat_timer: !1}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("spinner-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options,
                n = c("<div>").addClass("spinner").addClass("buttons-" + t.buttonsPosition).addClass(e[0].className).addClass(t.clsSpinner),
                i = c("<button>").attr("type", "button").addClass("button spinner-button spinner-button-plus").addClass(t.clsSpinnerButton + " " + t.clsSpinnerButtonPlus).html(t.plusIcon),
                s = c("<button>").attr("type", "button").addClass("button spinner-button spinner-button-minus").addClass(t.clsSpinnerButton + " " + t.clsSpinnerButtonMinus).html(t.minusIcon),
                a = e.val().trim();
            o.isValue(a) || e.val(0), e[0].className = "", n.insertBefore(e), e.appendTo(n).addClass(t.clsSpinnerInput), e.addClass("original-input"), i.appendTo(n), s.appendTo(n), !0 === t.hideCursor && n.addClass("hide-cursor"), t.label && (n = c("<label>").addClass("label-for-input").addClass(t.clsLabel).html(t.label).insertBefore(n), e.attr("id") && n.attr("for", e.attr("id")), "rtl" === e.attr("dir") && n.addClass("rtl")), !0 === t.disabled || e.is(":disabled") ? this.disable() : this.enable()
        }, _createEvents: function () {
            var a = this, o = this.element, r = this.options, t = o.closest(".spinner"), e = t.find(".spinner-button"),
                l = function (e, t) {
                    var n = o.val(), i = Number(o.val()), s = Number(r.step);
                    e ? i += s : i -= s, a._setValue(i.toFixed(r.fixed), !0), a._fireEvent(e ? "plus-click" : "minus-click", {
                        curr: n,
                        val: i,
                        elementVal: o.val()
                    }), a._fireEvent(e ? "arrow-up" : "arrow-down", {
                        curr: n,
                        val: i,
                        elementVal: o.val()
                    }), a._fireEvent("button-click", {
                        curr: n,
                        val: i,
                        elementVal: o.val(),
                        button: e ? "plus" : "minus"
                    }), a._fireEvent("arrow-click", {
                        curr: n,
                        val: i,
                        elementVal: o.val(),
                        button: e ? "plus" : "minus"
                    }), setTimeout(function () {
                        a.repeat_timer && l(e, 100)
                    }, t)
                };
            t.on(i.events.click, function (e) {
                c(".focused").removeClass("focused"), t.addClass("focused"), e.preventDefault(), e.stopPropagation()
            }), e.on(i.events.start, function (e) {
                var t = c(this).closest(".spinner-button").hasClass("spinner-button-plus");
                e.preventDefault(), a.repeat_timer = !0, l(t, r.repeatThreshold)
            }), e.on(i.events.stop, function () {
                a.repeat_timer = !1
            }), o.on(i.events.keydown, function (e) {
                e.keyCode !== i.keyCode.UP_ARROW && e.keyCode !== i.keyCode.DOWN_ARROW || (a.repeat_timer = !0, l(e.keyCode === i.keyCode.UP_ARROW, r.repeatThreshold))
            }), t.on(i.events.keyup, function () {
                a.repeat_timer = !1
            })
        }, _setValue: function (e, t) {
            var n = this.element, i = this.options;
            !0 === o.exec(i.onBeforeChange, [e], n[0]) && (o.isValue(i.maxValue) && e > Number(i.maxValue) && (e = Number(i.maxValue)), o.isValue(i.minValue) && e < Number(i.minValue) && (e = Number(i.minValue)), n.val(e), this._fireEvent("change", {val: e}, !1, !0), !0 === t && n.fire("change", {val: e}))
        }, val: function (e) {
            var t = this.element, n = this.options;
            if (!o.isValue(e)) return t.val();
            this._setValue(e.toFixed(n.fixed), !0)
        }, toDefault: function () {
            var e = this.options, t = o.isValue(e.defaultValue) ? Number(e.defaultValue) : 0;
            this._setValue(t.toFixed(e.fixed), !0), this._fireEvent("change", {val: t})
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e) {
            var t, n = this, i = this.element;
            switch (e) {
                case"disabled":
                    this.toggleState();
                    break;
                case"value":
                    t = i.attr("value").trim(), o.isValue(t) && n._setValue(Number(t), !1)
            }
        }, destroy: function () {
            var e = this.element, t = e.closest(".spinner"), n = t.find(".spinner-button");
            return t.off(i.events.click), n.off(i.events.start), n.off(i.events.stop), e.off(i.events.keydown), t.off(i.events.keyup), e
        }
    }), c(document).on(i.events.click, function () {
        c(".spinner").removeClass("focused")
    })
}(Metro, m4q), function (t, p) {
    "use strict";
    var f = t.utils, n = t.storage, i = {
        splitterDeferred: 0,
        splitMode: "horizontal",
        splitSizes: null,
        gutterSize: 4,
        minSizes: null,
        children: "*",
        gutterClick: "expand",
        saveState: !1,
        onResizeStart: t.noop,
        onResizeStop: t.noop,
        onResizeSplit: t.noop,
        onResizeWindow: t.noop,
        onSplitterCreate: t.noop
    };
    t.splitterSetup = function (e) {
        i = p.extend({}, i, e)
    }, window.metroSplitterSetup, t.splitterSetup(window.metroSplitterSetup), t.Component("splitter", {
        init: function (e, t) {
            return this._super(t, e, i, {
                storage: f.isValue(n) ? n : null,
                storageKey: "SPLITTER:",
                id: f.elementId("splitter")
            }), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("splitter-create", {element: e})
        }, _createStructure: function () {
            var e, t, n = this.element, i = this.options, s = n.children(i.children).addClass("split-block"),
                a = "horizontal" === i.splitMode ? "width" : "height";
            for (n.addClass("splitter"), "vertical" === i.splitMode.toLowerCase() && n.addClass("vertical"), e = 0; e < s.length - 1; e++) p("<div>").addClass("gutter").css(a, i.gutterSize).insertAfter(p(s[e]));
            if (this._setSize(), f.isValue(i.minSizes)) if (String(i.minSizes).contains(",")) for (t = i.minSizes.toArray(), e = 0; e < t.length; e++) p(s[e]).data("min-size", t[e]), s[e].style.setProperty("min-" + a, String(t[e]).contains("%") ? t[e] : String(t[e]).replace("px", "") + "px", "important"); else p.each(s, function () {
                this.style.setProperty("min-" + a, String(i.minSizes).contains("%") ? i.minSizes : String(i.minSizes).replace("px", "") + "px", "important")
            });
            i.saveState && null !== this.storage && this._getSize()
        }, _setSize: function () {
            var e, t, n = this.element, i = this.options, s = n.children(".split-block"), a = n.children(".gutter");
            if (f.isValue(i.splitSizes)) for (e = i.splitSizes.toArray(), t = 0; t < e.length; t++) p(s[t]).css({flexBasis: "calc(" + e[t] + "% - " + a.length * i.gutterSize + "px)"}); else s.css({flexBasis: "calc(" + 100 / s.length + "% - " + a.length * i.gutterSize + "px)"})
        }, _createEvents: function () {
            var c = this, d = this.element, u = this.options, h = d.children(".gutter");
            h.on(t.events.startAll, function (e) {
                var n = "horizontal" === u.splitMode ? d.width() : d.height(), i = p(this), s = i.prev(".split-block"),
                    a = i.next(".split-block"),
                    o = 100 * ("horizontal" === u.splitMode ? s.outerWidth(!0) : s.outerHeight(!0)) / n,
                    r = 100 * ("horizontal" === u.splitMode ? a.outerWidth(!0) : a.outerHeight(!0)) / n,
                    l = f.getCursorPosition(d[0], e);
                i.addClass("active"), s.addClass("stop-pointer"), a.addClass("stop-pointer"), c._fireEvent("resize-start", {
                    pos: l,
                    gutter: i[0],
                    prevBlock: s[0],
                    nextBlock: a[0]
                }), p(window).on(t.events.moveAll, function (e) {
                    var t = f.getCursorPosition(d[0], e),
                        e = "horizontal" === u.splitMode ? 100 * t.x / n - 100 * l.x / n : 100 * t.y / n - 100 * l.y / n;
                    s.css("flex-basis", "calc(" + (o + e) + "% - " + h.length * u.gutterSize + "px)"), a.css("flex-basis", "calc(" + (r - e) + "% - " + h.length * u.gutterSize + "px)"), c._fireEvent("resize-split", {
                        pos: t,
                        gutter: i[0],
                        prevBlock: s[0],
                        nextBlock: a[0]
                    })
                }, {ns: c.id}), p(window).on(t.events.stopAll, function (e) {
                    s.removeClass("stop-pointer"), a.removeClass("stop-pointer"), c._saveSize(), i.removeClass("active"), p(window).off(t.events.moveAll, {ns: c.id}), p(window).off(t.events.stopAll, {ns: c.id}), e = f.getCursorPosition(d[0], e), c._fireEvent("resize-stop", {
                        pos: e,
                        gutter: i[0],
                        prevBlock: s[0],
                        nextBlock: a[0]
                    })
                }, {ns: c.id})
            }), p(window).on(t.events.resize, function () {
                var e = d.children(".gutter"), t = e.prev(".split-block"), e = e.next(".split-block");
                c._fireEvent("resize-window", {prevBlock: t[0], nextBlock: e[0]})
            }, {ns: c.id})
        }, _saveSize: function () {
            var e = this.element, t = this.options, n = this.storage, i = [], s = e.attr("id") || this.id;
            !0 === t.saveState && null !== n && (p.each(e.children(".split-block"), function () {
                var e = p(this);
                i.push(e.css("flex-basis"))
            }), n && n.setItem(this.storageKey + s, i))
        }, _getSize: function () {
            var n, e = this.element, t = this.options, i = this.storage, s = e.attr("id") || this.id;
            !0 === t.saveState && null !== i && (n = i.getItem(this.storageKey + s), p.each(e.children(".split-block"), function (e, t) {
                t = p(t);
                f.isValue(n) && f.isValue(n[e]) && t.css("flex-basis", n[e])
            }))
        }, size: function (e) {
            var t = this.options;
            return f.isValue(e) && (t.splitSizes = e, this._setSize()), this
        }, changeAttribute: function (e) {
            var t, n = this, i = this.element;
            "data-split-sizes" === e && (t = i.attr("data-split-sizes"), n.size(t))
        }, destroy: function () {
            var e = this.element;
            return e.children(".gutter").off(t.events.start), e
        }
    })
}(Metro, m4q), function (i, a) {
    "use strict";
    var n = {
        stepperDeferred: 0,
        view: i.stepperView.SQUARE,
        steps: 3,
        step: 1,
        stepClick: !1,
        clsStepper: "",
        clsStep: "",
        clsComplete: "",
        clsCurrent: "",
        onStep: i.noop,
        onStepClick: i.noop,
        onStepperCreate: i.noop
    };
    i.stepperSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroStepperSetup, i.stepperSetup(window.metroStepperSetup), i.Component("stepper", {
        init: function (e, t) {
            return this._super(t, e, n, {current: 0}), this
        }, _create: function () {
            var e = this.element, t = this.options;
            t.step <= 0 && (t.step = 1), this._createStepper(), this._createEvents(), this._fireEvent("stepper-create", {element: e})
        }, _createStepper: function () {
            var e, t = this.element, n = this.options;
            for (t.addClass("stepper").addClass(n.view).addClass(n.clsStepper), e = 1; e <= n.steps; e++) a("<span>").addClass("step").addClass(n.clsStep).data("step", e).html("<span>" + e + "</span>").appendTo(t);
            this.current = 1, this.toStep(n.step)
        }, _createEvents: function () {
            var t = this, e = this.element, n = this.options;
            e.on(i.events.click, ".step", function () {
                var e = a(this).data("step");
                !0 === n.stepClick && (t.toStep(e), t._fireEvent("step-click", {step: e}))
            })
        }, next: function () {
            var e = this.element.find(".step");
            this.current + 1 > e.length || (this.current++, this.toStep(this.current))
        }, prev: function () {
            this.current - 1 != 0 && (this.current--, this.toStep(this.current))
        }, last: function () {
            var e = this.element;
            this.toStep(e.find(".step").length)
        }, first: function () {
            this.toStep(1)
        }, toStep: function (e) {
            var t = this.element, n = this.options, i = a(t.find(".step").get(e - 1)), s = this.current;
            0 !== i.length && (this.current = e, t.find(".step").removeClass("complete current").removeClass(n.clsCurrent).removeClass(n.clsComplete), i.addClass("current").addClass(n.clsCurrent), i.prevAll().addClass("complete").addClass(n.clsComplete), this._fireEvent("step", {
                step: this.current,
                prev: s
            }))
        }, changeAttribute: function () {
        }, destroy: function () {
            var e = this.element;
            return e.off(i.events.click, ".step"), e
        }
    })
}(Metro, m4q), function (e) {
    "use strict";
    var a = e.utils, t = function (e) {
        return new t.init(e)
    };
    t.prototype = {
        setKey: function (e) {
            this.key = e
        }, getKey: function () {
            return this.key
        }, setItem: function (e, t) {
            this.storage.setItem(this.key + ":" + e, JSON.stringify(t))
        }, getItem: function (e, t, n) {
            var i, s = this.storage.getItem(this.key + ":" + e);
            try {
                i = JSON.parse(s, n)
            } catch (e) {
                i = null
            }
            return a.nvl(i, t)
        }, getItemPart: function (e, t, n, i) {
            var s, a = this.getItem(e, n, i);
            for (t = t.split("->"), s = 0; s < t.length; s++) a = a[t[s]];
            return a
        }, delItem: function (e) {
            this.storage.removeItem(this.key + ":" + e)
        }, size: function (e) {
            var t;
            switch (e) {
                case"m":
                case"M":
                    t = 1048576;
                    break;
                case"k":
                case"K":
                    t = 1024;
                    break;
                default:
                    t = 1
            }
            return JSON.stringify(this.storage).length / t
        }
    }, t.init = function (e) {
        return this.key = "", this.storage = e || window.localStorage, this
    }, t.init.prototype = t.prototype, e.storage = t(window.localStorage), e.session = t(window.sessionStorage)
}(Metro), function (x, E) {
    "use strict";
    var I = x.utils, n = {
        streamerDeferred: 0,
        wheel: !0,
        wheelStep: 20,
        duration: METRO_ANIMATION_DURATION,
        defaultClosedIcon: "",
        defaultOpenIcon: "",
        changeUri: !0,
        encodeLink: !0,
        closed: !1,
        chromeNotice: !1,
        startFrom: null,
        slideToStart: !0,
        startSlideSleep: 1e3,
        source: null,
        data: null,
        eventClick: "select",
        selectGlobal: !0,
        streamSelect: !1,
        excludeSelectElement: null,
        excludeClickElement: null,
        excludeElement: null,
        excludeSelectClass: "",
        excludeClickClass: "",
        excludeClass: "",
        onDataLoad: x.noop,
        onDataLoaded: x.noop,
        onDataLoadError: x.noop,
        onDrawEvent: x.noop,
        onDrawGlobalEvent: x.noop,
        onDrawStream: x.noop,
        onStreamClick: x.noop,
        onStreamSelect: x.noop,
        onEventClick: x.noop,
        onEventSelect: x.noop,
        onEventsScroll: x.noop,
        onStreamerCreate: x.noop
    };
    x.streamerSetup = function (e) {
        n = E.extend({}, n, e)
    }, window.metroStreamerSetup, x.streamerSetup(window.metroStreamerSetup), x.Component("streamer", {
        init: function (e, t) {
            return this._super(t, e, n, {data: null, scroll: 0, scrollDir: "left", events: null}), this
        }, _create: function () {
            var t = this, e = this.element, n = this.options;
            if (e.addClass("streamer"), void 0 === e.attr("id") && e.attr("id", I.elementId("streamer")), null === n.source && null === n.data) return !1;
            E("<div>").addClass("streams").appendTo(e), E("<div>").addClass("events-area").appendTo(e), null !== n.source ? (this._fireEvent("data-load", {source: n.source}), E.json(n.source).then(function (e) {
                t._fireEvent("data-loaded", {source: n.source, data: e}), t.data = e, t.build()
            }, function (e) {
                t._fireEvent("data-load-error", {source: n.source, xhr: e})
            })) : (this.data = n.data, this.build()), !0 === n.chromeNotice && !0 === I.detectChrome() && !1 === E.touchable && E("<p>").addClass("text-small text-muted").html("*) In Chrome browser please press and hold Shift and turn the mouse wheel.").insertAfter(e)
        }, build: function () {
            var e, m = this, v = this.element, g = this.options, t = this.data, n = v.find(".streams").html(""),
                i = v.find(".events-area").html(""), w = E("<ul>").addClass("streamer-timeline").html("").appendTo(i),
                s = E("<div>").addClass("streamer-events").appendTo(i),
                a = E("<div>").addClass("event-group").appendTo(s), o = I.getURIParameter(null, "StreamerIDS");
            null !== o && !0 === g.encodeLink && (o = atob(o));
            var r, b = o ? o.split("|")[0] : null, C = o ? o.split("|")[1].split(",") : [];
            void 0 !== t.actions && (r = E("<div>").addClass("streamer-actions").appendTo(n), E.each(t.actions, function () {
                var e = this, t = E("<button>").addClass("streamer-action").addClass(e.cls).html(e.html);
                void 0 !== e.onclick && t.on(x.events.click, function () {
                    I.exec(e.onclick, [v])
                }), t.appendTo(r)
            })), w.html(""), void 0 === t.timeline && (t.timeline = {start: "09:00", stop: "18:00", step: 20});
            var l, c, d, u, h, p, f, y, _, S = new Date, T = new Date,
                i = t.timeline.start ? t.timeline.start.split(":") : [9, 0],
                o = t.timeline.stop ? t.timeline.stop.split(":") : [18, 0],
                k = t.timeline.step ? 60 * parseInt(t.timeline.step) : 1200;
            for (S.setHours(i[0]), S.setMinutes(i[1]), S.setSeconds(0), T.setHours(o[0]), T.setMinutes(o[1]), T.setSeconds(0), l = S.getTime() / 1e3; l <= T.getTime() / 1e3; l += k) for (d = ((c = (f = new Date(1e3 * l)).getHours()) < 10 ? "0" + c : c) + ":" + ((u = f.getMinutes()) < 10 ? "0" + u : u), y = (f = E("<li>").data("time", d).addClass("js-time-point-" + d.replace(":", "-")).html("<em>" + d + "</em>").appendTo(w)).width() / parseInt(t.timeline.step), e = E("<ul>").addClass("streamer-fake-timeline").html("").appendTo(f), h = 0; h < parseInt(t.timeline.step); h++) d = (c < 10 ? "0" + c : c) + ":" + ((p = u + h) < 10 ? "0" + p : p), E("<li>").data("time", d).addClass("js-fake-time-point-" + d.replace(":", "-")).html("|").appendTo(e).css({width: y});
            void 0 !== t.streams && E.each(t.streams, function (d) {
                var u = 0, e = E("<div>").addClass("stream").addClass(this.cls).appendTo(n);
                e.addClass(this.cls).data("one", !1).data("data", this.data), E("<div>").addClass("stream-title").html(this.title).appendTo(e), E("<div>").addClass("stream-secondary").html(this.secondary).appendTo(e), E(this.icon).addClass("stream-icon").appendTo(e);
                var t, h = x.colors.toHEX(I.getStyleOne(e, "background-color")),
                    p = x.colors.toHEX(I.getStyleOne(e, "color")),
                    f = E("<div>").addClass("stream-events").data("background-color", h).data("text-color", p).appendTo(a);
                void 0 !== this.events && (E.each(this.events, function (e) {
                    var t, n, i, s = this, a = void 0 === s.row ? 1 : parseInt(s.row), o = d + ":" + e,
                        r = void 0 !== s.custom ? s.custom : "", l = void 0 !== s.custom_open ? s.custom_open : "",
                        c = void 0 !== s.custom_close ? s.custom_close : "";
                    void 0 !== s.skip && I.bool(s.skip) || (n = E("<div>").data("origin", s).data("sid", o).data("data", s.data).data("time", s.time).data("target", s.target).addClass("stream-event").addClass("size-" + s.size + (["half", "one-third"].contains(s.size) ? "" : "x")).addClass(s.cls).appendTo(f), i = w.find(".js-fake-time-point-" + this.time.replace(":", "-")).offset().left - f.offset().left, e = 75 * (a - 1), u < a && (u = a), n.css({
                        position: "absolute",
                        left: i,
                        top: e
                    }), I.isNull(s.html) ? (a = E("<div>").addClass("stream-event-slide").appendTo(n), i = E("<div>").addClass("slide-logo").appendTo(a), e = E("<div>").addClass("slide-data").appendTo(a), void 0 !== s.icon && (I.isTag(s.icon) ? E(s.icon).addClass("icon") : E("<img>").addClass("icon").attr("src", s.icon)).appendTo(i), E("<span>").addClass("time").css({
                        backgroundColor: h,
                        color: p
                    }).html(s.time).appendTo(i), E("<div>").addClass("title").html(s.title).appendTo(e), E("<div>").addClass("subtitle").html(s.subtitle).appendTo(e), E("<div>").addClass("desc").html(s.desc).appendTo(e), (!1 === g.closed && v.attr("id") === b && -1 !== C.indexOf(o) || !0 === s.selected || 1 === parseInt(s.selected)) && n.addClass("selected"), !0 === g.closed || !0 === s.closed || 1 === parseInt(s.closed) ? (t = void 0 !== s.closedIcon ? I.isTag(s.closedIcon) ? s.closedIcon : "<span>" + s.closedIcon + "</span>" : I.isTag(g.defaultClosedIcon) ? g.defaultClosedIcon : "<span>" + g.defaultClosedIcon + "</span>", E(t).addClass("state-icon").addClass(s.clsClosedIcon).appendTo(a), n.data("closed", !0).data("target", s.target), n.append(l)) : (t = void 0 !== s.openIcon ? I.isTag(s.openIcon) ? s.openIcon : "<span>" + s.openIcon + "</span>" : I.isTag(g.defaultOpenIcon) ? g.defaultOpenIcon : "<span>" + g.defaultOpenIcon + "</span>", E(t).addClass("state-icon").addClass(s.clsOpenIcon).appendTo(a), n.data("closed", !1), n.append(c)), n.append(r)) : n.html(s.html), m._fireEvent("draw-event", {event: n[0]}))
                }), 0 < (t = f.find(".stream-event").last()).length && f.outerWidth(t[0].offsetLeft + t.outerWidth())), f.css({height: 75 * u}), v.find(".stream").eq(f.index()).css({height: 75 * u}), m._fireEvent("draw-stream", {stream: e[0]})
            }), void 0 !== t.global && (_ = s.offset().left, E.each(["before", "after"], function () {
                void 0 !== t.global[this] && E.each(t.global[this], function () {
                    var e = E("<div>").addClass("event-group").addClass("size-" + this.size + (["half", "one-third"].contains(this.size) ? "" : "x")),
                        t = E("<div>").addClass("stream-events global-stream").appendTo(e),
                        n = E("<div>").addClass("stream-event").appendTo(t);
                    n.addClass("global-event").addClass(this.cls).data("time", this.time).data("origin", this).data("data", this.data), E("<div>").addClass("event-title").html(this.title).appendTo(n), E("<div>").addClass("event-subtitle").html(this.subtitle).appendTo(n), E("<div>").addClass("event-html").html(this.html).appendTo(n);
                    var i, t = w.find(".js-fake-time-point-" + this.time.replace(":", "-"));
                    0 < t.length && (i = t.offset().left - _), e.css({
                        position: "absolute",
                        left: i,
                        height: "100%"
                    }).appendTo(s), m._fireEvent("draw-global-event", {event: n[0]})
                })
            })), v.data("stream", -1), v.find(".events-area").scrollLeft(0), this.events = v.find(".stream-event"), this._createEvents(), null !== g.startFrom && !0 === g.slideToStart && setTimeout(function () {
                m.slideTo(g.startFrom)
            }, g.startSlideSleep), this._fireEvent("streamer-create"), this._fireScroll()
        }, _fireScroll: function () {
            var e = this.element.find(".events-area"), t = this.scroll;
            0 !== e.length && (this.scrollDir = this.scroll < e[0].scrollLeft ? "left" : "right", this.scroll = e[0].scrollLeft, this._fireEvent("events-scroll", {
                scrollLeft: e[0].scrollLeft,
                oldScroll: t,
                scrollDir: this.scrollDir,
                events: E.toArray(this.events)
            }))
        }, _createEvents: function () {
            var n = this, i = this.element, s = this.options;
            i.off(x.events.click, ".stream-event").on(x.events.click, ".stream-event", function (e) {
                var t = E(this);
                "" !== s.excludeClass && t.hasClass(s.excludeClass) || null !== s.excludeElement && E(e.target).is(s.excludeElement) || (!1 === s.closed && !0 !== t.data("closed") && "select" === s.eventClick ? "" !== s.excludeSelectClass && t.hasClass(s.excludeSelectClass) || null !== s.excludeSelectElement && E(e.target).is(s.excludeSelectElement) || (t.hasClass("global-event") && !0 !== s.selectGlobal || t.toggleClass("selected"), !0 === s.changeUri && n._changeURI(), n._fireEvent("event-select", {
                    event: t[0],
                    selected: t.hasClass("selected")
                })) : "" !== s.excludeClickClass && t.hasClass(s.excludeClickClass) || null !== s.excludeClickElement && E(e.target).is(s.excludeClickElement) || (n._fireEvent("event-click", {event: t[0]}), !0 !== s.closed && !0 !== t.data("closed") || (t = t.data("target")) && (window.location.href = t)))
            }), i.off(x.events.click, ".stream").on(x.events.click, ".stream", function () {
                var e = E(this), t = e.index();
                !1 !== s.streamSelect && (i.data("stream") === t ? (i.find(".stream-event").removeClass("disabled"), i.data("stream", -1)) : (i.data("stream", t), i.find(".stream-event").addClass("disabled"), n.enableStream(e), n._fireEvent("stream-select", {stream: e})), n._fireEvent("stream-click", {stream: e}))
            }), !0 === s.wheel && (i.find(".events-area").off(x.events.mousewheel).on(x.events.mousewheel, function (e) {
                var t, n;
                void 0 !== e.deltaY && (t = E(this), n = 0 < e.deltaY ? -1 : 1, e = s.wheelStep, e = t.scrollLeft() - n * e, t.scrollLeft(e))
            }), i.find(".events-area").off("mouseenter").on("mouseenter", function () {
                var e, t;
                e = window.pageYOffset || document.documentElement.scrollTop, t = window.pageXOffset || document.documentElement.scrollLeft, window.onscroll = function () {
                    window.scrollTo(t, e)
                }
            }), i.find(".events-area").off("mouseleave").on("mouseleave", function () {
                window.onscroll = function () {
                }
            })), i.find(".events-area").last().off("scroll").on("scroll", function () {
                n._fireScroll()
            }), !0 === E.touchable && i.off(x.events.click, ".stream").on(x.events.click, ".stream", function () {
                var e = E(this);
                e.toggleClass("focused"), E.each(i.find(".stream"), function () {
                    E(this).is(e) || E(this).removeClass("focused")
                })
            })
        }, _changeURI: function () {
            var e = this.getLink();
            history.pushState({}, document.title, e)
        }, slideTo: function (e) {
            var t = this.element, n = this.options,
                e = E((void 0 === e ? t.find(".streamer-timeline li") : t.find(".streamer-timeline .js-time-point-" + e.replace(":", "-")))[0]);
            t.find(".events-area").animate({
                draw: {scrollLeft: e[0].offsetLeft - t.find(".streams .stream").outerWidth()},
                dur: n.duration
            })
        }, enableStream: function (e) {
            var t = this.element, n = e.index() - 1;
            e.removeClass("disabled").data("streamDisabled", !1), t.find(".stream-events").eq(n).find(".stream-event").removeClass("disabled")
        }, disableStream: function (e) {
            var t = this.element, n = e.index() - 1;
            e.addClass("disabled").data("streamDisabled", !0), t.find(".stream-events").eq(n).find(".stream-event").addClass("disabled")
        }, toggleStream: function (e) {
            !0 === e.data("streamDisabled") ? this.enableStream(e) : this.disableStream(e)
        }, getLink: function () {
            var e = this.element, t = this.options, n = e.find(".stream-event"), i = [], s = window.location.href;
            return E.each(n, function () {
                var e = E(this);
                void 0 !== e.data("sid") && e.hasClass("selected") && i.push(e.data("sid"))
            }), e = e.attr("id") + "|" + i.join(","), !0 === t.encodeLink && (e = btoa(e)), I.updateURIParameter(s, "StreamerIDS", e)
        }, getTimes: function () {
            var e = this.element.find(".streamer-timeline > li"), t = [];
            return E.each(e, function () {
                t.push(E(this).data("time"))
            }), t
        }, getEvents: function (e, t) {
            var n, i = this.element, s = [];
            switch (e) {
                case"selected":
                    n = i.find(".stream-event.selected");
                    break;
                case"non-selected":
                    n = i.find(".stream-event:not(.selected)");
                    break;
                default:
                    n = i.find(".stream-event")
            }
            return E.each(n, function () {
                var e = E(this);
                !0 !== t && e.parent().hasClass("global-stream") || (e = e.data("origin"), s.push(e))
            }), s
        }, source: function (e) {
            var t = this.element;
            if (void 0 === e) return this.options.source;
            t.attr("data-source", e), this.options.source = e, this.changeSource()
        }, dataSet: function (e) {
            if (void 0 === e) return this.options.data;
            this.options.data = e, this.changeData(e)
        }, getStreamerData: function () {
            return this.data
        }, toggleEvent: function (e) {
            var t = this.options;
            (e = E(e)).hasClass("global-event") && !0 !== t.selectGlobal || (e.hasClass("selected") ? this.selectEvent(e, !1) : this.selectEvent(e, !0))
        }, selectEvent: function (e, t) {
            var n = this.options;
            void 0 === t && (t = !0), (e = E(e)).hasClass("global-event") && !0 !== n.selectGlobal || (!0 === t ? e.addClass("selected") : e.removeClass("selected"), !0 === n.changeUri && this._changeURI(), this._fireEvent("event-select", {
                event: e[0],
                selected: t
            }))
        }, changeSource: function () {
            var t = this, e = this.element, n = this.options, e = e.attr("data-source");
            "" !== String(e).trim() && (n.source = e, this._fireEvent("data-load", {source: n.source}), E.json(n.source).then(function (e) {
                t._fireEvent("data-loaded", {source: n.source, data: e}), t.data = e, t.build()
            }, function (e) {
                t._fireEvent("data-load-error", {source: n.source, xhr: e})
            }), this._fireEvent("source-change"))
        }, changeData: function (e) {
            var t = this.element, n = this.options, i = this.data;
            n.data = "object" == typeof e ? e : JSON.parse(t.attr("data-data")), this.data = n.data, this.build(), this._fireEvent("data-change", {
                oldData: i,
                newData: n.data
            })
        }, changeStreamSelectOption: function () {
            var e = this.element;
            this.options.streamSelect = "true" === e.attr("data-stream-select").toLowerCase()
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-source":
                    this.changeSource();
                    break;
                case"data-data":
                    this.changeData();
                    break;
                case"data-stream-select":
                    this.changeStreamSelectOption()
            }
        }, destroy: function () {
            var e = this.element;
            return e.off(x.events.click, ".stream-event"), e.off(x.events.click, ".stream"), e.find(".events-area").off(x.events.mousewheel), e.find(".events-area").last().off("scroll"), e
        }
    })
}(Metro, m4q), function (e, a) {
    "use strict";
    var n = e.utils, i = {
        switchDeferred: 0,
        material: !1,
        transition: !0,
        caption: "",
        captionPosition: "right",
        clsSwitch: "",
        clsCheck: "",
        clsCaption: "",
        onSwitchCreate: e.noop
    };
    e.switchSetup = function (e) {
        i = a.extend({}, i, e)
    }, window.metroSwitchSetup, e.switchSetup(window.metroSwitchSetup), e.Component("switch", {
        init: function (e, t) {
            return this._super(t, e, i), this
        }, _create: function () {
            var e, t = this.element, n = this.options, i = a("<span>").addClass("check"),
                s = a("<span>").addClass("caption").html(n.caption);
            t.attr("type", "checkbox"), void 0 !== t.attr("readonly") && t.on("click", function (e) {
                e.preventDefault()
            }), e = t.wrap(a("<label>").addClass((!0 === n.material ? " switch-material " : " switch ") + t[0].className)), i.appendTo(e), s.appendTo(e), t.attr("data-on") && i.attr("data-on", t.attr("data-on")), t.attr("data-off") && i.attr("data-off", t.attr("data-off")), !0 === n.transition && e.addClass("transition-on"), "left" === n.captionPosition && e.addClass("caption-left"), t[0].className = "", e.addClass(n.clsSwitch), s.addClass(n.clsCaption), i.addClass(n.clsCheck), t.is(":disabled") ? this.disable() : this.enable(), this._fireEvent("switch-create")
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, toggle: function (e) {
            var t = this.element;
            return n.isValue(e) ? t.prop("checked", 1 === e) : t.prop("checked", !n.bool(t.prop("checked"))), this
        }, changeAttribute: function (e) {
            "disabled" === e && this.toggleState()
        }, destroy: function () {
            return this.element
        }
    })
}(Metro, m4q), function (b, C) {
    "use strict";
    var y = b.utils, n = {
        tableDeferred: 0,
        emptyTableTitle: "Nothing to show",
        templateBeginToken: "<%",
        templateEndToken: "%>",
        paginationDistance: 5,
        locale: METRO_LOCALE,
        horizontalScroll: !1,
        horizontalScrollStop: null,
        check: !1,
        checkType: "checkbox",
        checkStyle: 1,
        checkColIndex: 0,
        checkName: null,
        checkStoreKey: "TABLE:$1:KEYS",
        rownum: !1,
        rownumTitle: "#",
        filters: null,
        filtersOperator: "and",
        head: null,
        body: null,
        static: !1,
        source: null,
        searchMinLength: 1,
        searchThreshold: 500,
        searchFields: null,
        showRowsSteps: !0,
        showSearch: !0,
        showTableInfo: !0,
        showPagination: !0,
        paginationShortMode: !0,
        showActivity: !0,
        muteTable: !0,
        showSkip: !1,
        rows: 10,
        rowsSteps: "10,25,50,100",
        staticView: !1,
        viewSaveMode: "client",
        viewSavePath: "TABLE:$1:OPTIONS",
        sortDir: "asc",
        decimalSeparator: ".",
        thousandSeparator: ",",
        tableRowsCountTitle: "Show entries:",
        tableSearchTitle: "Search:",
        tableInfoTitle: "Showing $1 to $2 of $3 entries",
        paginationPrevTitle: "Prev",
        paginationNextTitle: "Next",
        allRecordsTitle: "All",
        inspectorTitle: "Inspector",
        tableSkipTitle: "Go to page",
        activityType: "cycle",
        activityStyle: "color",
        activityTimeout: 100,
        searchWrapper: null,
        rowsWrapper: null,
        infoWrapper: null,
        paginationWrapper: null,
        skipWrapper: null,
        cellWrapper: !1,
        clsComponent: "",
        clsTableContainer: "",
        clsTable: "",
        clsHead: "",
        clsHeadRow: "",
        clsHeadCell: "",
        clsBody: "",
        clsBodyRow: "",
        clsBodyCell: "",
        clsCellWrapper: "",
        clsFooter: "",
        clsFooterRow: "",
        clsFooterCell: "",
        clsTableTop: "",
        clsRowsCount: "",
        clsSearch: "",
        clsTableBottom: "",
        clsTableInfo: "",
        clsTablePagination: "",
        clsPagination: "",
        clsTableSkip: "",
        clsTableSkipInput: "",
        clsTableSkipButton: "",
        clsEvenRow: "",
        clsOddRow: "",
        clsRow: "",
        clsEmptyTableTitle: "",
        onDraw: b.noop,
        onDrawRow: b.noop,
        onDrawCell: b.noop,
        onAppendRow: b.noop,
        onAppendCell: b.noop,
        onSortStart: b.noop,
        onSortStop: b.noop,
        onSortItemSwitch: b.noop,
        onSearch: b.noop,
        onRowsCountChange: b.noop,
        onDataLoad: b.noop,
        onDataLoadError: b.noop,
        onDataLoaded: b.noop,
        onDataSaveError: b.noop,
        onFilterRowAccepted: b.noop,
        onFilterRowDeclined: b.noop,
        onCheckClick: b.noop,
        onCheckClickAll: b.noop,
        onCheckDraw: b.noop,
        onViewSave: b.noop,
        onViewGet: b.noop,
        onViewCreated: b.noop,
        onTableCreate: b.noop,
        onSkip: b.noop
    };
    b.tableSetup = function (e) {
        n = C.extend({}, n, e)
    }, window.metroTableSetup, b.tableSetup(window.metroTableSetup), b.Component("table", {
        init: function (e, t) {
            return this._super(t, e, n, {
                currentPage: 1,
                pagesCount: 1,
                searchString: "",
                data: null,
                activity: null,
                loadActivity: null,
                busy: !1,
                filters: [],
                wrapperInfo: null,
                wrapperSearch: null,
                wrapperRows: null,
                wrapperPagination: null,
                wrapperSkip: null,
                filterIndex: null,
                filtersIndexes: [],
                component: null,
                inspector: null,
                view: {},
                viewDefault: {},
                locale: b.locales["en-US"],
                input_interval: null,
                searchFields: [],
                id: y.elementId("table"),
                sort: {dir: "asc", colIndex: 0},
                service: [],
                heads: [],
                items: [],
                foots: [],
                filteredItems: [],
                index: {}
            }), this
        }, _create: function () {
            var e, t, n = this, i = this.element, s = this.options, a = y.elementId("table");
            y.isValue(i.attr("id")) || i.attr("id", a), y.isValue(b.locales[s.locale]) && (this.locale = b.locales[s.locale]), y.isValue(s.searchFields) && (this.searchFields = s.searchFields.toArray()), y.isValue(s.head) && (t = s.head, s.head = y.isObject(s.head), s.head || (console.warn("Head " + t + " defined but not exists!"), s.head = null)), y.isValue(s.body) && (e = s.body, s.body = y.isObject(s.body), s.body || (console.warn("Body " + e + " defined but not exists!"), s.body = null)), !0 === s.static && (s.showPagination = !1, s.showRowsSteps = !1, s.showSearch = !1, s.showTableInfo = !1, s.showSkip = !1, s.rows = -1), (t = C("<div>").addClass("table-component")).insertBefore(i), e = C("<div>").addClass("table-container").addClass(s.clsTableContainer).appendTo(t), i.appendTo(e), !0 === s.horizontalScroll && e.addClass("horizontal-scroll"), !y.isNull(s.horizontalScrollStop) && y.mediaExist(s.horizontalScrollStop) && e.removeClass("horizontal-scroll"), t.addClass(s.clsComponent), this.activity = C("<div>").addClass("table-progress").appendTo(t), e = C("<div>").appendTo(this.activity), b.makePlugin(e, "activity", {
                type: s.activityType,
                style: s.activityStyle
            }), !0 !== s.showActivity && this.activity.css({visibility: "hidden"}), this.component = t[0], null !== s.source ? (this._fireEvent("data-load", {source: s.source}), !1 !== (t = y.isObject(s.source)) && C.isPlainObject(t) ? n._build(t) : this.activity.show(function () {
                C.json(s.source).then(function (e) {
                    if (n.activity.hide(), "object" != typeof e) throw new Error("Data for table is not a object");
                    n._fireEvent("data-loaded", {source: s.source, data: e}), n._build(e)
                }, function (e) {
                    n.activity.hide(), n._fireEvent("data-load-error", {source: s.source, xhr: e})
                })
            })) : n._build()
        }, _createIndex: function () {
            var n = this, i = this.options.checkColIndex;
            setImmediate(function () {
                n.items.forEach(function (e, t) {
                    n.index[e[i]] = t
                })
            })
        }, _build: function (e) {
            var t, n = this, i = this.element, s = this.options, a = i.attr("id");
            s.rows = parseInt(s.rows), this.items = [], this.heads = [], this.foots = [], Array.isArray(s.head) && (this.heads = s.head), Array.isArray(s.body) && (this.items = s.body), y.isValue(e) ? this._createItemsFromJSON(e) : this._createItemsFromHTML(), this._createIndex(), this.view = this._createView(), this.viewDefault = y.objectClone(this.view), t = s.viewSavePath.replace("$1", a), "client" === s.viewSaveMode.toLowerCase() ? (e = b.storage.getItem(t), y.isValue(e) && y.objectLength(e) === y.objectLength(this.view) && (this.view = e, this._fireEvent("view-get", {
                source: "client",
                view: e
            })), this._final()) : C.json(t, t !== s.viewSavePath ? null : {id: a}).then(function (e) {
                y.isValue(e) && y.objectLength(e) === y.objectLength(n.view) && (n.view = e, n._fireEvent("view-get", {
                    source: "server",
                    view: e
                })), n._final()
            }, function () {
                n._final(), console.warn("Warning! Error loading view for table " + i.attr("id") + " ")
            })
        }, _final: function () {
            var e = this.element, t = this.options, n = e.attr("id");
            b.storage.delItem(t.checkStoreKey.replace("$1", n)), this._service(), this._createStructure(), this._createInspector(), this._createEvents(), this._fireEvent("table-create", {element: e})
        }, _service: function () {
            var e = this.options;
            this.service = [{
                title: e.rownumTitle,
                format: void 0,
                name: void 0,
                sortable: !1,
                sortDir: void 0,
                clsColumn: "rownum-cell " + (!0 !== e.rownum ? "d-none" : ""),
                cls: "rownum-cell " + (!0 !== e.rownum ? "d-none" : ""),
                colspan: void 0,
                type: "rownum"
            }, {
                title: "checkbox" === e.checkType ? "<input type='checkbox' data-role='checkbox' class='table-service-check-all' data-style='" + e.checkStyle + "'>" : "",
                format: void 0,
                name: void 0,
                sortable: !1,
                sortDir: void 0,
                clsColumn: "check-cell " + (!0 !== e.check ? "d-none" : ""),
                cls: "check-cell " + (!0 !== e.check ? "d-none" : ""),
                colspan: void 0,
                type: "rowcheck"
            }]
        }, _createView: function () {
            var t = {};
            return C.each(this.heads, function (e) {
                y.isValue(this.cls) && (this.cls = this.cls.replace("hidden", "")), y.isValue(this.clsColumn) && (this.clsColumn = this.clsColumn.replace("hidden", "")), t[e] = {
                    index: e,
                    "index-view": e,
                    show: !y.isValue(this.show) || this.show,
                    size: y.isValue(this.size) ? this.size : ""
                }
            }), this._fireEvent("view-created", {view: t}), t
        }, _createInspectorItems: function (e) {
            var t, n, i = this, s = this.options, a = [], o = this.heads;
            for (e.html(""), t = 0; t < o.length; t++) a[t] = null;
            for (C.each(o, function (e) {
                (n = C("<tr>")).data("index", e), n.data("index-view", e), C("<td>").html("<input type='checkbox' data-style='" + s.checkStyle + "' data-role='checkbox' name='column_show_check[]' value='" + e + "' " + (y.bool(i.view[e].show) ? "checked" : "") + ">").appendTo(n), C("<td>").html(this.title).appendTo(n), C("<td>").html("<input type='number' data-role='spinner' name='column_size' value='" + i.view[e].size + "' data-index='" + e + "'>").appendTo(n), C("<td>").html("<button class='button square js-table-inspector-field-up' type='button'><span class='mif-arrow-up'></span></button><button class='button square js-table-inspector-field-down' type='button'><span class='mif-arrow-down'></span></button>").appendTo(n), a[i.view[e]["index-view"]] = n
            }), t = 0; t < o.length; t++) a[t].appendTo(e)
        }, _createInspector: function () {
            var e, t, n = this.options,
                i = C("<div data-role='draggable' data-drag-element='.table-inspector-header' data-drag-area='body'>").addClass("table-inspector");
            i.attr("for", this.element.attr("id")), C("<div class='table-inspector-header'>" + n.inspectorTitle + "</div>").appendTo(i), e = C("<div>").addClass("table-wrap").appendTo(i), t = C("<table>").addClass("table subcompact"), n = C("<tbody>").appendTo(t), t.appendTo(e), this._createInspectorItems(n), n = C("<div class='table-inspector-actions'>").appendTo(i), C("<button class='button primary js-table-inspector-save' type='button'>").html(this.locale.buttons.save).appendTo(n), C("<button class='button secondary js-table-inspector-reset ml-2 mr-2' type='button'>").html(this.locale.buttons.reset).appendTo(n), C("<button class='button link js-table-inspector-cancel place-right' type='button'>").html(this.locale.buttons.cancel).appendTo(n), i.data("open", !1), this.inspector = i, C("body").append(i), this._createInspectorEvents()
        }, _resetInspector: function () {
            var e = this.inspector.find("table tbody");
            this._createInspectorItems(e), this._createInspectorEvents()
        }, _createHeadsFromHTML: function () {
            var i = this, e = this.element.find("thead");
            0 < e.length && C.each(e.find("tr > *"), function () {
                var e = C(this),
                    t = y.isValue(e.data("sort-dir")) ? e.data("sort-dir") : e.hasClass("sort-asc") ? "asc" : e.hasClass("sort-desc") ? "desc" : void 0,
                    n = e[0].className.replace("sortable-column", "");
                n = (n = (n = n.replace("sort-asc", "")).replace("sort-desc", "")).replace("hidden", ""), e = {
                    type: "data",
                    title: e.html(),
                    name: y.isValue(e.data("name")) ? e.data("name") : e.text().replace(" ", "_"),
                    sortable: e.hasClass("sortable-column") || y.isValue(e.data("sortable")) && JSON.parse(!0 === e.data("sortable")),
                    sortDir: t,
                    format: y.isValue(e.data("format")) ? e.data("format") : "string",
                    formatMask: y.isValue(e.data("format-mask")) ? e.data("format-mask") : null,
                    clsColumn: y.isValue(e.data("cls-column")) ? e.data("cls-column") : "",
                    cls: n,
                    colspan: e.attr("colspan"),
                    size: y.isValue(e.data("size")) ? e.data("size") : "",
                    show: !(e.hasClass("hidden") || y.isValue(e.data("show")) && !1 === JSON.parse(e.data("show"))),
                    required: !!y.isValue(e.data("required")) && !0 === JSON.parse(e.data("required")),
                    field: y.isValue(e.data("field")) ? e.data("field") : "input",
                    fieldType: y.isValue(e.data("field-type")) ? e.data("field-type") : "text",
                    validator: y.isValue(e.data("validator")) ? e.data("validator") : null,
                    template: y.isValue(e.data("template")) ? e.data("template") : null
                }, i.heads.push(e)
            })
        }, _createFootsFromHTML: function () {
            var t = this, e = this.element.find("tfoot");
            0 < e.length && C.each(e.find("tr > *"), function () {
                var e = C(this), e = {
                    title: e.html(),
                    name: !!y.isValue(e.data("name")) && e.data("name"),
                    cls: e[0].className,
                    colspan: e.attr("colspan")
                };
                t.foots.push(e)
            })
        }, _createItemsFromHTML: function () {
            var n = this, e = this.element.find("tbody");
            0 < e.length && C.each(e.find("tr"), function () {
                var e = C(this), t = [];
                C.each(e.children("td"), function () {
                    var e = C(this);
                    t.push(e.html())
                }), n.items.push(t)
            }), this._createHeadsFromHTML(), this._createFootsFromHTML()
        }, _createItemsFromJSON: function (e) {
            var t = this;
            "string" == typeof e && (e = JSON.parse(e)), void 0 !== e.header ? t.heads = e.header : this._createHeadsFromHTML(), void 0 !== e.data && C.each(e.data, function () {
                var e = [];
                C.each(this, function () {
                    e.push(this)
                }), t.items.push(e)
            }), void 0 !== e.footer ? this.foots = e.footer : this._createFootsFromHTML()
        }, _createTableHeader: function () {
            var t, i, e, n, s = this.element, a = this.options, o = C("<thead>").html(""), r = [],
                l = a.staticView ? this._createView() : this.view;
            if (s.find("thead").remove(), o.addClass(a.clsHead), 0 === this.heads.length) return o;
            for (t = C("<tr>").addClass(a.clsHeadRow).appendTo(o), C.each(this.service, function () {
                var e = [];
                i = C("<th>").appendTo(t), y.isValue(this.title) && i.html(this.title), y.isValue(this.size) && i.css({width: this.size}), y.isValue(this.cls) && e.push(this.cls), e.push(a.clsHeadCell), i.addClass(e.join(" "))
            }), n = this.heads, e = 0; e < n.length; e++) r[e] = null;
            for (C.each(n, function (e) {
                var t = this, n = [];
                (i = C("<th>")).data("index", e), y.isValue(t.title) && i.html(t.title), y.isValue(t.format) && i.attr("data-format", t.format), y.isValue(t.name) && i.attr("data-name", t.name), y.isValue(t.colspan) && i.attr("colspan", t.colspan), y.isValue(l[e].size) && i.css({width: l[e].size}), !0 === t.sortable && (n.push("sortable-column"), y.isValue(t.sortDir) && n.push("sort-" + t.sortDir)), y.isValue(t.cls) && C.each(t.cls.toArray(), function () {
                    n.push(this)
                }), !1 === y.bool(l[e].show) && -1 === n.indexOf("hidden") && n.push("hidden"), n.push(a.clsHeadCell), y.bool(l[e].show) && y.arrayDelete(n, "hidden"), i.addClass(n.join(" ")), r[l[e]["index-view"]] = i
            }), e = 0; e < n.length; e++) r[e].appendTo(t);
            s.prepend(o)
        }, _createTableBody: function () {
            var e = this.element, t = e.find("thead");
            e.find("tbody").remove(), C("<tbody>").addClass(this.options.clsBody).insertAfter(t)
        }, _createTableFooter: function () {
            var e, t, n = this.element, i = this.options, s = C("<tfoot>").addClass(i.clsFooter);
            n.find("tfoot").remove(), 0 !== this.foots.length && (e = C("<tr>").addClass(i.clsHeadRow).appendTo(s), C.each(this.foots, function () {
                t = C("<th>").appendTo(e), void 0 !== this.title && t.html(this.title), void 0 !== this.name && t.addClass("foot-column-name-" + this.name), void 0 !== this.cls && t.addClass(this.cls), y.isValue(this.colspan) && t.attr("colspan", this.colspan), t.appendTo(e)
            })), n.append(s)
        }, _createTopBlock: function () {
            var n, t = this, e = this.element, i = this.options,
                s = C("<div>").addClass("table-top").addClass(i.clsTableTop).insertBefore(e.parent()),
                a = y.isValue(this.wrapperSearch) ? this.wrapperSearch : C("<div>").addClass("table-search-block").addClass(i.clsSearch).appendTo(s);
            return a.addClass(i.clsSearch), e = C("<input>").attr("type", "text").appendTo(a), b.makePlugin(e, "input", {prepend: i.tableSearchTitle}), !0 !== i.showSearch && a.hide(), (a = y.isValue(this.wrapperRows) ? this.wrapperRows : C("<div>").addClass("table-rows-block").appendTo(s)).addClass(i.clsRowsCount), n = C("<select>").appendTo(a), C.each(i.rowsSteps.toArray(), function () {
                var e = parseInt(this),
                    t = C("<option>").attr("value", e).text(-1 === e ? i.allRecordsTitle : e).appendTo(n);
                e === parseInt(i.rows) && t.attr("selected", "selected")
            }), b.makePlugin(n, "select", {
                filter: !1, prepend: i.tableRowsCountTitle, onChange: function (e) {
                    (e = parseInt(e)) !== parseInt(i.rows) && (i.rows = e, t.currentPage = 1, t._draw(), t._fireEvent("rows-count-change", {val: e}))
                }
            }), !0 !== i.showRowsSteps && a.hide(), s
        }, _createBottomBlock: function () {
            var e = this.element, t = this.options,
                n = C("<div>").addClass("table-bottom").addClass(t.clsTableBottom).insertAfter(e.parent()),
                e = y.isValue(this.wrapperInfo) ? this.wrapperInfo : C("<div>").addClass("table-info").appendTo(n);
            return e.addClass(t.clsTableInfo), !0 !== t.showTableInfo && e.hide(), (e = y.isValue(this.wrapperPagination) ? this.wrapperPagination : C("<div>").addClass("table-pagination").appendTo(n)).addClass(t.clsTablePagination), !0 !== t.showPagination && e.hide(), (e = y.isValue(this.wrapperSkip) ? this.wrapperSkip : C("<div>").addClass("table-skip").appendTo(n)).addClass(t.clsTableSkip), C("<input type='text'>").addClass("input table-skip-input").addClass(t.clsTableSkipInput).appendTo(e), C("<button>").addClass("button table-skip-button").addClass(t.clsTableSkipButton).html(t.tableSkipTitle).appendTo(e), !0 !== t.showSkip && e.hide(), n
        }, _createStructure: function () {
            var t = this, e = this.element, n = this.options, i = C(n.searchWrapper), s = C(n.infoWrapper),
                a = C(n.rowsWrapper), o = C(n.paginationWrapper), r = C(n.skipWrapper);
            0 < i.length && (this.wrapperSearch = i), 0 < s.length && (this.wrapperInfo = s), 0 < a.length && (this.wrapperRows = a), 0 < o.length && (this.wrapperPagination = o), 0 < r.length && (this.wrapperSkip = r), e.html("").addClass(n.clsTable), this._createTableHeader(), this._createTableBody(), this._createTableFooter(), this._createTopBlock(), this._createBottomBlock();
            var l, c = !1;
            0 < this.heads.length && C.each(this.heads, function (e) {
                !c && -1 < ["asc", "desc"].indexOf(this.sortDir) && (c = !0, t.sort.colIndex = e, t.sort.dir = this.sortDir)
            }), c && (e = e.find("thead th"), this._resetSortClass(e), C(e.get(this.sort.colIndex + t.service.length)).addClass("sort-" + this.sort.dir), this.sorting()), y.isValue(n.filters) && "string" == typeof n.filters && C.each(n.filters.toArray(), function () {
                !1 !== (l = y.isFunc(this)) && t.filtersIndexes.push(t.addFilter(l))
            }), this.currentPage = 1, this._draw()
        }, _resetSortClass: function (e) {
            C(e).removeClass("sort-asc sort-desc")
        }, _createEvents: function () {
            var e, o = this, t = this.element, r = this.options, n = t.closest(".table-component"),
                i = n.find(".table-container"), s = n.find(".table-search-block input"),
                a = (r.skipWrapper ? C(r.skipWrapper) : n).find(".table-skip-button"),
                l = (r.skipWrapper ? C(r.skipWrapper) : n).find(".table-skip-input"), c = t.attr("id");
            a.on(b.events.click, function () {
                var e = parseInt(l.val().trim());
                if (isNaN(e) || e <= 0 || e > o.pagesCount) return l.val(""), !1;
                l.val(""), o._fireEvent("skip", {skipTo: e, skipFrom: o.currentPage}), o.page(e)
            }), C(window).on(b.events.resize, function () {
                !0 === r.horizontalScroll && (!y.isNull(r.horizontalScrollStop) && y.mediaExist(r.horizontalScrollStop) ? i.removeClass("horizontal-scroll") : i.addClass("horizontal-scroll"))
            }, {ns: this.id}), t.on(b.events.click, ".sortable-column", function () {
                if (!0 === r.muteTable && t.addClass("disabled"), o.busy) return !1;
                o.busy = !0;
                var e = C(this);
                o.activity.show(function () {
                    setImmediate(function () {
                        o.currentPage = 1, o.sort.colIndex = e.data("index"), e.hasClass("sort-asc") || e.hasClass("sort-desc") ? e.hasClass("sort-asc") ? o.sort.dir = "desc" : o.sort.dir = "asc" : o.sort.dir = r.sortDir, o._resetSortClass(t.find(".sortable-column")), e.addClass("sort-" + o.sort.dir), o.sorting(), o._draw(function () {
                            !(o.busy = !1) === r.muteTable && t.removeClass("disabled")
                        })
                    })
                })
            }), t.on(b.events.click, ".table-service-check input", function () {
                var e = C(this), t = e.is(":checked"), n = "" + e.val(), i = r.checkStoreKey.replace("$1", c),
                    s = b.storage, a = s.getItem(i);
                "radio" === e.attr("type") && (a = []), t ? y.isValue(a) ? -1 === Array(a).indexOf(n) && a.push(n) : a = [n] : y.isValue(a) ? y.arrayDelete(a, n) : a = [], s.setItem(i, a), o._fireEvent("check-click", {
                    check: this,
                    status: t,
                    data: a
                })
            }), t.on(b.events.click, ".table-service-check-all input", function () {
                var e = C(this).is(":checked"), t = r.checkStoreKey.replace("$1", c), n = [], i = b.storage;
                e ? C.each(o.filteredItems, function () {
                    -1 === n.indexOf(this[r.checkColIndex]) && n.push("" + this[r.checkColIndex])
                }) : n = [], i.setItem(t, n), o._draw(), o._fireEvent("check-click-all", {
                    check: this,
                    status: e,
                    data: n
                })
            });
            a = function () {
                o.searchString = this.value.trim().toLowerCase(), clearInterval(o.input_interval), o.input_interval = !1, o.input_interval || (o.input_interval = setTimeout(function () {
                    o.currentPage = 1, o._draw(), clearInterval(o.input_interval), o.input_interval = !1
                }, r.searchThreshold))
            };

            function d(e) {
                var t = C(e), e = t.parent();
                0 !== o.filteredItems.length && (e.hasClass("active") || (e.hasClass("service") ? "prev" === t.data("page") ? (o.currentPage--, 0 === o.currentPage && (o.currentPage = 1)) : (o.currentPage++, o.currentPage > o.pagesCount && (o.currentPage = o.pagesCount)) : o.currentPage = t.data("page"), o._draw()))
            }

            s.on(b.events.inputchange, a), y.isValue(this.wrapperSearch) && 0 < (e = this.wrapperSearch.find("input")).length && e.on(b.events.inputchange, a), n.on(b.events.click, ".pagination .page-link", function () {
                d(this)
            }), y.isValue(this.wrapperPagination) && this.wrapperPagination.on(b.events.click, ".pagination .page-link", function () {
                d(this)
            }), this._createInspectorEvents(), t.on(b.events.click, ".js-table-crud-button", function () {
            })
        }, _createInspectorEvents: function () {
            var s = this, e = this.inspector;
            this._removeInspectorEvents(), e.on(b.events.click, ".js-table-inspector-field-up", function () {
                var t, e = C(this).closest("tr"), n = e.prev("tr"), i = e.data("index");
                0 !== n.length && (e.insertBefore(n), e.addClass("flash"), setTimeout(function () {
                    e.removeClass("flash")
                }, 1e3), t = e.index(), e.data("index-view", t), s.view[i]["index-view"] = t, C.each(e.nextAll(), function () {
                    var e = C(this);
                    t++, e.data("index-view", t), s.view[e.data("index")]["index-view"] = t
                }), s._createTableHeader(), s._draw())
            }), e.on(b.events.click, ".js-table-inspector-field-down", function () {
                var t, e = C(this).closest("tr"), n = e.next("tr"), i = e.data("index");
                0 !== n.length && (e.insertAfter(n), e.addClass("flash"), setTimeout(function () {
                    e.removeClass("flash")
                }, 1e3), t = e.index(), e.data("index-view", t), s.view[i]["index-view"] = t, C.each(e.prevAll(), function () {
                    var e = C(this);
                    t--, e.data("index-view", t), s.view[e.data("index")]["index-view"] = t
                }), s._createTableHeader(), s._draw())
            }), e.on(b.events.click, "input[type=checkbox]", function () {
                var e = C(this), t = e.is(":checked"), n = e.val(), e = ["cls", "clsColumn"];
                t ? C.each(e, function () {
                    var e = y.isValue(s.heads[n][this]) ? s.heads[n][this].toArray(" ") : [];
                    y.arrayDelete(e, "hidden"), s.heads[n][this] = e.join(" "), s.view[n].show = !0
                }) : C.each(e, function () {
                    var e = y.isValue(s.heads[n][this]) ? s.heads[n][this].toArray(" ") : [];
                    -1 === e.indexOf("hidden") && e.push("hidden"), s.heads[n][this] = e.join(" "), s.view[n].show = !1
                }), s._createTableHeader(), s._draw()
            }), e.find("input[type=number]").on(b.events.inputchange, function () {
                var e = C(this), t = e.attr("data-index"), e = parseInt(e.val());
                s.view[t].size = 0 === e ? "" : e, s._createTableHeader()
            }), e.on(b.events.click, ".js-table-inspector-save", function () {
                s._saveTableView(), s.openInspector(!1)
            }), e.on(b.events.click, ".js-table-inspector-cancel", function () {
                s.openInspector(!1)
            }), e.on(b.events.click, ".js-table-inspector-reset", function () {
                s.resetView()
            })
        }, _removeInspectorEvents: function () {
            var e = this.inspector;
            e.off(b.events.click, ".js-table-inspector-field-up"), e.off(b.events.click, ".js-table-inspector-field-down"), e.off(b.events.click, "input[type=checkbox]"), e.off(b.events.click, ".js-table-inspector-save"), e.off(b.events.click, ".js-table-inspector-cancel"), e.off(b.events.click, ".js-table-inspector-reset"), e.find("input[type=number]").off(b.events.inputchange)
        }, _saveTableView: function () {
            var t, n = this, e = this.element, i = this.options, s = this.view, a = e.attr("id"),
                o = i.viewSavePath.replace("$1", a), a = b.storage;
            "client" === i.viewSaveMode.toLowerCase() ? (a.setItem(o, s), this._fireEvent("view-save", {
                target: "client",
                path: i.viewSavePath,
                view: s
            })) : (t = {id: e.attr("id"), view: s}, C.post(o, t).then(function (e) {
                n._fireEvent("view-save", {target: "server", path: i.viewSavePath, view: s, post_data: t, response: e})
            }, function (e) {
                n._fireEvent("data-save-error", {source: i.viewSavePath, xhr: e, post_data: t})
            }))
        }, _info: function (e, t, n) {
            var i = this.element, s = this.options, i = i.closest(".table-component"),
                i = y.isValue(this.wrapperInfo) ? this.wrapperInfo : i.find(".table-info");
            0 !== i.length && (n < t && (t = n), 0 === this.items.length && (e = t = n = 0), s = (s = (s = (s = s.tableInfoTitle).replace("$1", e)).replace("$2", t)).replace("$3", n), i.html(s))
        }, _paging: function (e) {
            var t = this.element, n = this.options, t = t.closest(".table-component");
            this.pagesCount = Math.ceil(e / n.rows), b.pagination({
                length: e,
                rows: n.rows,
                current: this.currentPage,
                target: y.isValue(this.wrapperPagination) ? this.wrapperPagination : t.find(".table-pagination"),
                claPagination: n.clsPagination,
                prevTitle: n.paginationPrevTitle,
                nextTitle: n.paginationNextTitle,
                distance: !0 === n.paginationShortMode ? n.paginationDistance : 0
            })
        }, _filter: function () {
            var o = this, r = this.options,
                e = y.isValue(this.searchString) && o.searchString.length >= r.searchMinLength || 0 < this.filters.length ? this.items.filter(function (n) {
                    var e, t, i, s = "", a = 0;
                    if (0 < o.filters.length) {
                        for (e = "and" === r.filtersOperator.toLowerCase(), i = 0; i < o.filters.length; i++) y.isNull(o.filters[i]) || (a++, e = "and" === r.filtersOperator.toLowerCase() ? e && y.exec(o.filters[i], [n, o.heads]) : e || y.exec(o.filters[i], [n, o.heads]));
                        0 === a && (e = !0)
                    } else e = !0;
                    return 0 < o.searchFields.length ? C.each(o.heads, function (e, t) {
                        -1 < o.searchFields.indexOf(t.name) && (s += "•" + n[e])
                    }) : s = n.join("•"), s = s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim().toLowerCase(), t = !(y.isValue(o.searchString) && o.searchString.length >= r.searchMinLength) || ~s.indexOf(o.searchString), (e = e && t) ? o._fireEvent("filter-row-accepted", {row: n}) : o._fireEvent("filter-row-declined", {row: n}), e
                }) : this.items;
            return this._fireEvent("search", {search: o.searchString, items: e}), this.filteredItems = e
        }, _draw: function (e) {
            var t, n, i, s, a, o, r, l, c, d = this, u = this.element, h = this.options, p = u.find("tbody"),
                f = -1 === parseInt(h.rows) ? 0 : h.rows * (this.currentPage - 1),
                m = -1 === parseInt(h.rows) ? this.items.length - 1 : f + h.rows - 1,
                v = b.storage.getItem(h.checkStoreKey.replace("$1", u.attr("id"))),
                g = h.staticView ? this.viewDefault : this.view;
            if (p.html(""), this.heads.length) {
                if (0 < (c = this._filter()).length) {
                    for (t = f; t <= m; t++) if (o = c[t], r = [], y.isValue(o)) {
                        for ((i = C("<tr>").addClass(h.clsBodyRow)).data("original", o), l = t % 2 == 0, s = C("<td>").html(t + 1), void 0 !== d.service[0].clsColumn && s.addClass(d.service[0].clsColumn), s.appendTo(i), s = C("<td>"), a = "checkbox" === h.checkType ? C("<input type='checkbox' data-style='" + h.checkStyle + "' data-role='checkbox' name='" + (y.isValue(h.checkName) ? h.checkName : "table_row_check") + "[]' value='" + c[t][h.checkColIndex] + "'>") : C("<input type='radio' data-style='" + h.checkStyle + "' data-role='radio' name='" + (y.isValue(h.checkName) ? h.checkName : "table_row_check") + "' value='" + c[t][h.checkColIndex] + "'>"), y.isValue(v) && Array.isArray(v) && -1 < v.indexOf("" + c[t][h.checkColIndex]) && a.prop("checked", !0), a.addClass("table-service-check"), this._fireEvent("check-draw", {check: a}), a.appendTo(s), void 0 !== d.service[1].clsColumn && s.addClass(d.service[1].clsColumn), s.appendTo(i), n = 0; n < o.length; n++) r[n] = null;
                        for (C.each(o, function (e) {
                            var t = this, n = C("<td>");
                            y.isValue(d.heads[e].template) && (t = d.heads[e].template.replace(/%VAL%/g, t)), n.html(t), n.addClass(h.clsBodyCell), y.isValue(d.heads[e].clsColumn) && n.addClass(d.heads[e].clsColumn), !1 === y.bool(g[e].show) && n.addClass("hidden"), y.bool(g[e].show) && n.removeClass("hidden"), n.data("original", this), r[g[e]["index-view"]] = n, d._fireEvent("draw-cell", {
                                td: n,
                                val: t,
                                cellIndex: e,
                                head: d.heads[e],
                                items: o
                            }), !0 === h.cellWrapper && (t = C("<div>").addClass("data-wrapper").addClass(h.clsCellWrapper).html(n.html()), n.html("").append(t))
                        }), n = 0; n < o.length; n++) r[n].appendTo(i), d._fireEvent("append-cell", {
                            td: r[n],
                            tr: i,
                            index: n
                        });
                        d._fireEvent("draw-row", {
                            tr: i,
                            view: d.view,
                            heads: d.heads,
                            items: o
                        }), i.addClass(h.clsRow).addClass(l ? h.clsEvenRow : h.clsOddRow).appendTo(p), d._fireEvent("append-row", {tr: i})
                    }
                } else n = 0, C.each(g, function () {
                    this.show && n++
                }), !0 === h.check && n++, !0 === h.rownum && n++, i = C("<tr>").addClass(h.clsBodyRow).appendTo(p), (s = C("<td>").attr("colspan", n).addClass("text-center").html(C("<span>").addClass(h.clsEmptyTableTitle).html(h.emptyTableTitle))).appendTo(i);
                this._info(1 + f, 1 + m, c.length), this._paging(c.length), this.activity && this.activity.hide(), this._fireEvent("draw"), void 0 !== e && y.exec(e, null, u[0])
            } else console.warn("Heads is not defined for table ID " + u.attr("id"))
        }, _getItemContent: function (e) {
            var t = this.options, n = e[this.sort.colIndex], i = this.heads[this.sort.colIndex].format,
                s = y.isNull(this.heads) || y.isNull(this.heads[this.sort.colIndex]) || !y.isValue(this.heads[this.sort.colIndex].formatMask) ? "%Y-%m-%d" : this.heads[this.sort.colIndex].formatMask,
                e = (this.heads && this.heads[this.sort.colIndex] && this.heads[this.sort.colIndex].thousandSeparator ? this.heads[this.sort.colIndex] : t).thousandSeparator,
                t = (this.heads && this.heads[this.sort.colIndex] && this.heads[this.sort.colIndex].decimalSeparator ? this.heads[this.sort.colIndex] : t).decimalSeparator,
                a = ("" + n).toLowerCase().replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
            if (y.isValue(a) && y.isValue(i)) switch (-1 !== ["number", "int", "float", "money"].indexOf(i) && (a = y.parseNumber(a, e, t)), i) {
                case"date":
                    a = y.isValue(s) ? a.toDate(s) : new Date(a);
                    break;
                case"number":
                    a = Number(a);
                    break;
                case"int":
                    a = parseInt(a);
                    break;
                case"float":
                    a = parseFloat(a);
                    break;
                case"money":
                    a = y.parseMoney(a);
                    break;
                case"card":
                    a = y.parseCard(a);
                    break;
                case"phone":
                    a = y.parsePhone(a)
            }
            return a
        }, addItem: function (e, t) {
            if (!Array.isArray(e)) return console.warn("Item is not an array and can't be added"), this;
            this.items.push(e), !1 !== t && this.draw()
        }, addItems: function (e, t) {
            if (!Array.isArray(e)) return console.warn("Items is not an array and can't be added"), this;
            e.forEach(function (e) {
                Array.isArray(e) && this.items.push(e, !1)
            }), this.draw(), !1 !== t && this.draw()
        }, updateItem: function (e, n, t) {
            var i = this.items[this.index[e]], s = null;
            return y.isNull(i) ? (console.warn("Item is undefined for update"), this) : (isNaN(n) && this.heads.forEach(function (e, t) {
                e.name === n && (s = t)
            }), y.isNull(s) ? console.warn("Item is undefined for update. Field " + n + " not found in data structure") : (i[s] = t, this.items[this.index[e]] = i), this)
        }, getItem: function (e) {
            return this.items[this.index[e]]
        }, deleteItem: function (e, t) {
            for (var n = [], i = y.isFunc(t), s = 0; s < this.items.length; s++) i ? y.exec(t, [this.items[s][e]]) && n.push(s) : this.items[s][e] === t && n.push(s);
            return this.items = y.arrayDeleteByMultipleKeys(this.items, n), this
        }, deleteItemByName: function (e, t) {
            for (var n, i = [], s = y.isFunc(t), a = 0; a < this.heads.length; a++) if (this.heads[a].name === e) {
                n = a;
                break
            }
            for (a = 0; a < this.items.length; a++) s ? y.exec(t, [this.items[a][n]]) && i.push(a) : this.items[a][n] === t && i.push(a);
            return this.items = y.arrayDeleteByMultipleKeys(this.items, i), this
        }, draw: function () {
            return this._draw(), this
        }, sorting: function (e) {
            var a = this;
            return y.isValue(e) && (this.sort.dir = e), this._fireEvent("sort-start", {items: this.items}), this.items.sort(function (e, t) {
                var n = a._getItemContent(e), i = a._getItemContent(t), s = 0;
                return n < i && (s = "asc" === a.sort.dir ? -1 : 1), i < n && (s = "asc" === a.sort.dir ? 1 : -1), 0 !== s && a._fireEvent("sort-item-switch", {
                    a: e,
                    b: t,
                    result: s
                }), s
            }), this._fireEvent("sort-stop", {items: this.items}), this
        }, search: function (e) {
            return this.searchString = e.trim().toLowerCase(), this.currentPage = 1, this._draw(), this
        }, _rebuild: function (e) {
            var t = this, n = this.element, i = !1;
            this._createIndex(), !0 === e && (this.view = this._createView()), this._createTableHeader(), this._createTableBody(), this._createTableFooter(), 0 < this.heads.length && C.each(this.heads, function (e) {
                !i && -1 < ["asc", "desc"].indexOf(this.sortDir) && (i = !0, t.sort.colIndex = e, t.sort.dir = this.sortDir)
            }), i && (n = n.find(".sortable-column"), this._resetSortClass(n), C(n.get(t.sort.colIndex)).addClass("sort-" + t.sort.dir), this.sorting()), t.currentPage = 1, t._draw()
        }, setHeads: function (e) {
            return this.heads = e, this
        }, setHeadItem: function (e, t) {
            for (var n, i = 0; i < this.heads.length; i++) if (this.heads[i].name === e) {
                n = i;
                break
            }
            return this.heads[n] = t, this
        }, setItems: function (e) {
            return this.items = e, this
        }, setData: function (e) {
            var t = this.options;
            return this.items = [], this.heads = [], this.foots = [], Array.isArray(t.head) && (this.heads = t.head), Array.isArray(t.body) && (this.items = t.body), this._createItemsFromJSON(e), this._rebuild(!0), this
        }, loadData: function (e, t) {
            var n = this, i = this.element, s = this.options;
            y.isValue(t) || (t = !0), i.html(""), y.isValue(e) ? (s.source = e, this._fireEvent("data-load", {source: s.source}), n.activity.show(function () {
                C.json(s.source).then(function (e) {
                    n.activity.hide(), n.items = [], n.heads = [], n.foots = [], n._fireEvent("data-loaded", {
                        source: s.source,
                        data: e
                    }), Array.isArray(s.head) && (n.heads = s.head), Array.isArray(s.body) && (n.items = s.body), n._createItemsFromJSON(e), n._rebuild(t)
                }, function (e) {
                    n.activity.hide(), n._fireEvent("data-load-error", {source: s.source, xhr: e})
                })
            })) : this._rebuild(t)
        }, reload: function (e) {
            this.loadData(this.options.source, e)
        }, clear: function () {
            return this.items = [], this.draw()
        }, next: function () {
            if (0 !== this.items.length) {
                if (this.currentPage++, !(this.currentPage > this.pagesCount)) return this._draw(), this;
                this.currentPage = this.pagesCount
            }
        }, prev: function () {
            if (0 !== this.items.length) {
                if (this.currentPage--, 0 !== this.currentPage) return this._draw(), this;
                this.currentPage = 1
            }
        }, first: function () {
            if (0 !== this.items.length) return this.currentPage = 1, this._draw(), this
        }, last: function () {
            if (0 !== this.items.length) return this.currentPage = this.pagesCount, this._draw(), this
        }, page: function (e) {
            return e <= 0 && (e = 1), e > this.pagesCount && (e = this.pagesCount), this.currentPage = e, this._draw(), this
        }, addFilter: function (e, t) {
            var n, i = null, s = y.isFunc(e);
            if (!1 !== s) {
                for (n = 0; n < this.filters.length; n++) if (y.isNull(this.filters[n])) {
                    i = n, this.filters[n] = s;
                    break
                }
                return y.isNull(i) && (this.filters.push(s), i = this.filters.length - 1), !0 === t && (this.currentPage = 1, this.draw()), i
            }
        }, removeFilter: function (e, t) {
            return !(this.filters[e] = null) === t && (this.currentPage = 1, this.draw()), this
        }, removeFilters: function (e) {
            return this.filters = [], !0 === e && (this.currentPage = 1, this.draw()), this
        }, getItems: function () {
            return this.items
        }, getHeads: function () {
            return this.heads
        }, getView: function () {
            return this.view
        }, getFilteredItems: function () {
            return 0 < this.filteredItems.length ? this.filteredItems : this.items
        }, getSelectedItems: function () {
            var e = this.element, t = this.options, n = b.storage.getItem(t.checkStoreKey.replace("$1", e.attr("id"))),
                i = [];
            return y.isValue(n) ? (C.each(this.items, function () {
                -1 !== n.indexOf("" + this[t.checkColIndex]) && i.push(this)
            }), i) : []
        }, getStoredKeys: function () {
            var e = this.element, t = this.options;
            return b.storage.getItem(t.checkStoreKey.replace("$1", e.attr("id")), [])
        }, clearSelected: function (e) {
            var t = this.element, n = this.options;
            b.storage.setItem(n.checkStoreKey.replace("$1", t.attr("id")), []), t.find("table-service-check-all input").prop("checked", !1), !0 === e && this._draw()
        }, getFilters: function () {
            return this.filters
        }, getFiltersIndexes: function () {
            return this.filtersIndexes
        }, openInspector: function (e) {
            var t = this.inspector;
            e ? t.show(0, function () {
                t.css({
                    top: (C(window).height() - t.outerHeight(!0)) / 2 + pageYOffset,
                    left: (C(window).width() - t.outerWidth(!0)) / 2 + pageXOffset
                }).data("open", !0)
            }) : t.hide().data("open", !1)
        }, closeInspector: function () {
            this.openInspector(!1)
        }, toggleInspector: function () {
            this.openInspector(!this.inspector.data("open"))
        }, resetView: function () {
            this.view = this._createView(), this._createTableHeader(), this._createTableFooter(), this._draw(), this._resetInspector(), this._saveTableView()
        }, rebuildIndex: function () {
            this._createIndex()
        }, getIndex: function () {
            return this.index
        }, export: function (e, t, n, i) {
            var s, a, o, r, l, c, d, u, h = b.export, p = this, f = this.options, m = document.createElement("table"),
                v = C("<thead>").appendTo(m), g = C("<tbody>").appendTo(m), w = [];
            if ("function" == typeof h.tableToCSV) {
                for (t = y.isValue(t) ? t.toLowerCase() : "all-filtered", n = y.isValue(n) ? n : y.elementId("table") + "-export.csv", l = C("<tr>"), o = this.heads, a = 0; a < o.length; a++) w[a] = null;
                for (C.each(o, function (e) {
                    !1 !== y.bool(p.view[e].show) && (c = C("<th>"), y.isValue(this.title) && c.html(this.title), w[p.view[e]["index-view"]] = c)
                }), a = 0; a < o.length; a++) y.isValue(w[a]) && w[a].appendTo(l);
                for (l.appendTo(v), u = "checked" === t ? (d = 0, (r = this.getSelectedItems()).length - 1) : "view" === t ? (r = this._filter(), d = -1 === parseInt(f.rows) ? 0 : f.rows * (this.currentPage - 1), -1 === parseInt(f.rows) ? r.length - 1 : d + f.rows - 1) : "all" === t ? (d = 0, (r = this.items).length - 1) : (d = 0, (r = this._filter()).length - 1), s = d; s <= u; s++) if (y.isValue(r[s])) {
                    for (l = C("<tr>"), o = r[s], a = 0; a < o.length; a++) w[a] = null;
                    for (C.each(o, function (e) {
                        !1 !== y.bool(p.view[e].show) && (c = C("<td>").html(this), w[p.view[e]["index-view"]] = c)
                    }), a = 0; a < o.length; a++) y.isValue(w[a]) && w[a].appendTo(l);
                    l.appendTo(g)
                }
                h.tableToCSV(m, n, i), m.remove()
            }
        }, changeAttribute: function (e) {
            var t = this, n = this.element, i = this.options;
            switch (e) {
                case"data-check":
                    i.check = y.bool(n.attr("data-check")), t._service(), t._createTableHeader(), t._draw();
                    break;
                case"data-rownum":
                    i.rownum = y.bool(n.attr("data-rownum")), t._service(), t._createTableHeader(), t._draw()
            }
        }, destroy: function () {
            var e = this.element, t = e.closest(".table-component"), n = t.find("input"), i = t.find("select");
            return n.data("input").destroy(), i.data("select").destroy(), C(window).off(b.events.resize, {ns: this.id}), e.off(b.events.click, ".sortable-column"), e.off(b.events.click, ".table-service-check input"), e.off(b.events.click, ".table-service-check-all input"), n.off(b.events.inputchange), !y.isValue(this.wrapperSearch) || 0 < (n = this.wrapperSearch.find("input")).length && n.off(b.events.inputchange), t.off(b.events.click, ".pagination .page-link"), y.isValue(this.wrapperPagination) && this.wrapperPagination.off(b.events.click, ".pagination .page-link"), e.off(b.events.click, ".js-table-crud-button"), this._removeInspectorEvents(), e
        }
    })
}(Metro, m4q), function (t, d) {
    "use strict";
    var u = t.utils, n = {
        materialtabsDeferred: 0,
        deep: !1,
        fixedTabs: !1,
        duration: 300,
        appBar: !1,
        clsComponent: "",
        clsTabs: "",
        clsTab: "",
        clsTabActive: "",
        clsMarker: "",
        onBeforeTabOpen: t.noop_true,
        onTabOpen: t.noop,
        onTabsScroll: t.noop,
        onTabsCreate: t.noop
    };
    t.materialTabsSetup = function (e) {
        n = d.extend({}, n, e)
    }, window.metroMaterialTabsSetup, t.materialTabsSetup(window.metroMaterialTabsSetup), t.Component("material-tabs", {
        init: function (e, t) {
            return this._super(t, e, n, {marker: null, scroll: 0, scrollDir: "left"}), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("tabs-create", {element: e})
        }, _createStructure: function () {
            var e = this.element, t = this.options, n = e.find("li"), i = e.find("li.active"),
                s = d("<div>").addClass("tabs-material-wrapper").addClass(t.clsComponent).insertBefore(e);
            !0 === t.appBar && s.addClass("app-bar-present"), "more" === t.appBar && s.addClass("app-bar-present-more"), e.appendTo(s), e.addClass("tabs-material").addClass(t.clsTabs), n.addClass(t.clsTab), !0 === t.deep && e.addClass("deep"), !0 === t.fixedTabs && e.addClass("fixed-tabs"), this.marker = e.find(".tab-marker"), 0 === this.marker.length && (this.marker = d("<span>").addClass("tab-marker").addClass(t.clsMarker).appendTo(e)), this.openTab((0 === i.length ? n : i)[0])
        }, _createEvents: function () {
            var s = this, a = this.element, o = this.options;
            a.on(t.events.click, "li", function (e) {
                var t = d(this), n = a.find("li.active"), i = t.index() > n.index(), n = t.children("a").attr("href");
                u.isValue(n) && "#" === n[0] && (t.hasClass("active") || t.hasClass("disabled") || !1 !== u.exec(o.onBeforeTabOpen, [t, n, i], this) && (s.openTab(t, i), e.preventDefault()))
            }), a.on(t.events.scroll, function () {
                var e = s.scroll;
                s.scrollDir = s.scroll < a[0].scrollLeft ? "left" : "right", s.scroll = a[0].scrollLeft, s._fireEvent("tabs-scroll", {
                    scrollLeft: a[0].scrollLeft,
                    oldScroll: e,
                    scrollDir: s.scrollDir
                })
            })
        }, openTab: function (e, t) {
            var n, i, s, a, o, r = this.element, l = this.options, c = r.find("li");
            e = d(e), d.each(c, function () {
                var e = d(this).find("a").attr("href");
                u.isValue(e) && "#" === e[0] && 1 < e.length && d(e).hide()
            }), i = r.width(), o = r.scrollLeft(), n = (a = e.position().left) + (s = e.width()), c.removeClass("active").removeClass(l.clsTabActive), e.addClass("active").addClass(l.clsTabActive), o = i + o < n + 52 ? o + 104 : a < o ? a - 104 : o, r.animate({
                draw: {scrollLeft: o},
                dur: l.duration
            }), this.marker.animate({
                draw: {left: a, width: s},
                dur: l.duration
            }), l = e.find("a").attr("href"), u.isValue(l) && "#" === l[0] && 1 < l.length && d(l).show(), this._fireEvent("tab-open", {
                tab: e[0],
                target: l,
                tab_next: t
            })
        }, open: function (e) {
            var t = this.element, n = t.find("li"), t = t.find("li.active"), e = n.eq(e - 1),
                t = n.index(e) > n.index(t);
            this.openTab(e, t)
        }, changeAttribute: function () {
        }, destroy: function () {
            var e = this.element;
            return e.off(t.events.click, "li"), e.off(t.events.scroll), e
        }
    })
}(Metro, m4q), function (r, l) {
    "use strict";
    var c = r.utils, n = {
        tabsDeferred: 0,
        expand: !1,
        expandPoint: null,
        tabsPosition: "top",
        tabsType: "default",
        clsTabs: "",
        clsTabsList: "",
        clsTabsListItem: "",
        clsTabsListItemActive: "",
        onTab: r.noop,
        onBeforeTab: r.noop_true,
        onTabsCreate: r.noop
    };
    r.tabsSetup = function (e) {
        n = l.extend({}, n, e)
    }, window.metroTabsSetup, r.tabsSetup(window.metroTabsSetup), r.Component("tabs", {
        init: function (e, t) {
            return this._super(t, e, n, {_targets: [], id: c.elementId("tabs")}), this
        }, _create: function () {
            var e = this.element, t = 0 < e.find(".active").length ? l(e.find(".active")[0]) : void 0;
            this._createStructure(), this._createEvents(), this._open(t), this._fireEvent("tabs-create", {element: e})
        }, _createStructure: function () {
            var e, t = this.element, n = this.options, i = t.parent(), s = i.hasClass("tabs"),
                i = s ? i : l("<div>").addClass("tabs tabs-wrapper");
            if (i.addClass(n.tabsPosition.replace(["-", "_", "+"], " ")), t.addClass("tabs-list"), "default" !== n.tabsType && t.addClass("tabs-" + n.tabsType), s || (i.insertBefore(t), t.appendTo(i)), t.data("expanded", !1), s = l("<div>").addClass("expand-title"), i.prepend(s), 0 === (e = i.find(".hamburger")).length) {
                e = l("<button>").attr("type", "button").addClass("hamburger menu-down").appendTo(i);
                for (var a = 0; a < 3; a++) l("<span>").addClass("line").appendTo(e);
                !0 === r.colors.isLight(c.getStyleOne(i, "background-color")) && e.addClass("dark")
            }
            i.addClass(n.clsTabs), t.addClass(n.clsTabsList), t.children("li").addClass(n.clsTabsListItem), (!0 === n.expand && !n.tabsPosition.contains("vertical") || c.isValue(n.expandPoint) && c.mediaExist(n.expandPoint) && !n.tabsPosition.contains("vertical")) && i.addClass("tabs-expand"), n.tabsPosition.contains("vertical") && i.addClass("tabs-expand")
        }, _createEvents: function () {
            var i = this, s = this.element, a = this.options, o = s.parent();
            l(window).on(r.events.resize, function () {
                a.tabsPosition.contains("vertical") || (!0 !== a.expand || a.tabsPosition.contains("vertical") ? c.isValue(a.expandPoint) && c.mediaExist(a.expandPoint) && !a.tabsPosition.contains("vertical") ? o.hasClass("tabs-expand") || o.addClass("tabs-expand") : o.hasClass("tabs-expand") && o.removeClass("tabs-expand") : o.addClass("tabs-expand"))
            }, {ns: this.id}), o.on(r.events.click, ".hamburger, .expand-title", function () {
                !1 === s.data("expanded") ? (s.addClass("expand"), s.data("expanded", !0), o.find(".hamburger").addClass("active")) : (s.removeClass("expand"), s.data("expanded", !1), o.find(".hamburger").removeClass("active"))
            }), s.on(r.events.click, "a", function (e) {
                var t = l(this), n = t.attr("href").trim(), t = t.parent("li");
                if (t.hasClass("active") && e.preventDefault(), !0 === s.data("expanded") && (s.removeClass("expand"), s.data("expanded", !1), o.find(".hamburger").removeClass("active")), !0 !== c.exec(a.onBeforeTab, [t, s], t[0])) return !1;
                c.isValue(n) && "#" === n[0] && (i._open(t), e.preventDefault())
            })
        }, _collectTargets: function () {
            var t = this, e = this.element.find("li");
            this._targets = [], l.each(e, function () {
                var e = l(this).find("a").attr("href").trim();
                1 < e.length && "#" === e[0] && t._targets.push(e)
            })
        }, _open: function (e) {
            var t = this.element, n = this.options, i = t.find("li"), s = t.siblings(".expand-title");
            0 !== i.length && (this._collectTargets(), void 0 === e && (e = l(i[0])), void 0 !== (t = e.find("a").attr("href")) && (i.removeClass("active").removeClass(n.clsTabsListItemActive), (e.parent().hasClass("d-menu") ? e.parent().parent() : e).addClass("active"), l.each(this._targets, function () {
                var e = l(this);
                0 < e.length && e.hide()
            }), "#" !== t && "#" === t[0] && l(t).show(), s.html(e.find("a").html()), e.addClass(n.clsTabsListItemActive), this._fireEvent("tab", {tab: e[0]})))
        }, next: function () {
            var e = this.element.find("li.active").next("li");
            0 < e.length && this._open(e)
        }, prev: function () {
            var e = this.element.find("li.active").prev("li");
            0 < e.length && this._open(e)
        }, open: function (e) {
            var t = this.element.find("li");
            c.isValue(e) || (e = 1), c.isInt(e) ? c.isValue(t[e - 1]) && this._open(l(t[e - 1])) : this._open(l(e))
        }, changeAttribute: function () {
        }, destroy: function () {
            var e = this.element, t = e.parent();
            return l(window).off(r.events.resize, {ns: this.id}), t.off(r.events.click, ".hamburger, .expand-title"), e.off(r.events.click, "a"), e
        }
    })
}(Metro, m4q), function (l, c) {
    "use strict";
    var d = l.utils, n = {
        label: "",
        size: "normal",
        taginputDeferred: 0,
        static: !1,
        clearButton: !0,
        clearButtonIcon: "<span class='default-icon-cross'></span>",
        randomColor: !1,
        maxTags: 0,
        tagSeparator: ",",
        tagTrigger: "Enter, Space, Comma",
        backspace: !0,
        clsComponent: "",
        clsInput: "",
        clsClearButton: "",
        clsTag: "",
        clsTagTitle: "",
        clsTagRemover: "",
        clsLabel: "",
        onBeforeTagAdd: l.noop_true,
        onTagAdd: l.noop,
        onBeforeTagRemove: l.noop_true,
        onTagRemove: l.noop,
        onTag: l.noop,
        onClear: l.noop,
        onTagTrigger: l.noop,
        onTagInputCreate: l.noop
    };
    l.tagInputSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroTagInputSetup, l.tagInputSetup(window.metroTagInputSetup), l.Component("tag-input", {
        init: function (e, t) {
            return this._super(t, e, n, {values: [], triggers: []}), this
        }, _create: function () {
            this.triggers = ("" + this.options.tagTrigger).toArray(","), (this.triggers.contains("Space") || this.triggers.contains("Spacebar")) && (this.triggers.push(" "), this.triggers.push("Spacebar")), this.triggers.contains("Comma") && this.triggers.push(","), this._createStructure(), this._createEvents(), this._fireEvent("tag-input-create", {element: this.element})
        }, _createStructure: function () {
            var e = this, t = this.element, n = this.options, i = t.val().trim(),
                s = c("<div>").addClass("tag-input " + t[0].className).addClass(n.clsComponent).insertBefore(t);
            t.appendTo(s), s.addClass("input-" + n.size), t[0].className = "", t.addClass("original-input"), c("<input type='text'>").addClass("input-wrapper").addClass(n.clsInput).attr("size", 1).appendTo(s), !1 === n.clearButton || t[0].readOnly || (s.addClass("padding-for-clear"), c("<button>").addClass("button input-clear-button").attr("tabindex", -1).attr("type", "button").html(n.clearButtonIcon).appendTo(s)), d.isValue(i) && c.each(i.toArray(n.tagSeparator), function () {
                e._addTag(this)
            }), n.label && (i = c("<label>").addClass("label-for-input").addClass(n.clsLabel).html(n.label).insertBefore(s), t.attr("id") && i.attr("for", t.attr("id")), "rtl" === t.attr("dir") && i.addClass("rtl")), t.is(":disabled") ? this.disable() : this.enable(), !0 !== n.static && void 0 === t.attr("readonly") || s.addClass("static-mode")
        }, _createEvents: function () {
            var i = this, s = this.element, a = this.options, e = s.closest(".tag-input"), o = e.find(".input-wrapper");
            o.on(l.events.focus, function () {
                e.addClass("focused")
            }), o.on(l.events.blur, function () {
                e.removeClass("focused")
            }), o.on(l.events.inputchange, function () {
                o.attr("size", Math.ceil(o.val().length / 2) + 2)
            }), o.on(l.events.keydown, function (e) {
                var t = o.val().trim(), n = e.key;
                "Enter" === n && e.preventDefault(), !0 !== a.backspace || "Backspace" !== n || 0 !== t.length ? "" !== t && i.triggers.contains(n) && (i._fireEvent("tag-trigger", {key: n}), o.val(""), i._addTag(t), o.attr("size", 1)) : 0 < i.values.length && (i.values.splice(-1, 1), s.siblings(".tag").last().remove(), s.val(i.values.join(a.tagSeparator)))
            }), o.on(l.events.keyup, function (e) {
                var t = o.val(), e = e.key;
                i.triggers.contains(e) && t[t.length - 1] === e && o.val(t.slice(0, -1))
            }), e.on(l.events.click, ".tag .remover", function () {
                var e = c(this).closest(".tag");
                i._delTag(e)
            }), e.on(l.events.click, function () {
                o.focus()
            }), e.on(l.events.click, ".input-clear-button", function () {
                var e = s.val();
                i.clear(), i._fireEvent("clear", {val: e})
            })
        }, _addTag: function (e) {
            var t, n, i, s = this.element, a = this.options, o = s.closest(".tag-input"), r = o.find(".input-wrapper");
            o.hasClass("input-large") ? t = "large" : o.hasClass("input-small") && (t = "small"), 0 < a.maxTags && this.values.length === a.maxTags || "" !== ("" + e).trim() && d.exec(a.onBeforeTagAdd, [e, this.values], s[0]) && ((i = c("<span>").addClass("tag").addClass(t).addClass(a.clsTag).insertBefore(r)).data("value", e), (a.static || o.hasClass("static-mode") || s.readonly || s.disabled || o.hasClass("disabled")) && i.addClass("static"), n = c("<span>").addClass("title").addClass(a.clsTagTitle).html(e), t = c("<span>").addClass("remover").addClass(a.clsTagRemover).html("&times;"), n.appendTo(i), t.appendTo(i), !0 === a.randomColor && (o = (r = l.colors.colors(l.colors.PALETTES.ALL))[c.random(0, r.length - 1)], n = l.colors.darken(o, 15), r = l.colors.isDark(o) ? "#ffffff" : "#000000", i.css({
                backgroundColor: o,
                color: r
            }), t.css({
                backgroundColor: n,
                color: r
            })), this.values.push(e), s.val(this.values.join(a.tagSeparator)), this._fireEvent("tag-add", {
                tag: i[0],
                val: e,
                values: this.values
            }), this._fireEvent("tag", {tag: i[0], val: e, values: this.values}))
        }, _delTag: function (e) {
            var t = this.element, n = this.options, i = e.data("value");
            d.exec(n.onBeforeTagRemove, [e, i, this.values], t[0]) && (d.arrayDelete(this.values, i), t.val(this.values.join(n.tagSeparator)), this._fireEvent("tag-remove", {
                tag: e[0],
                val: i,
                values: this.values
            }), this._fireEvent("tag", {tag: e[0], val: i, values: this.values}), e.remove())
        }, tags: function () {
            return this.values
        }, val: function (e) {
            var t = this, n = this.element, i = this.options, s = n.closest(".tag-input"), n = [];
            return d.isValue(e) ? (this.values = [], s.find(".tag").remove(), "string" == typeof e ? n = ("" + e).toArray(i.tagSeparator) : Array.isArray(e) && (n = e), c.each(n, function () {
                t._addTag(this)
            }), this) : this.tags()
        }, append: function (e) {
            var t = this, n = this.options, i = this.values;
            return "string" == typeof e ? i = ("" + e).toArray(n.tagSeparator) : Array.isArray(e) && (i = e), c.each(i, function () {
                t._addTag(this)
            }), this
        }, clear: function () {
            var e = this.element, t = e.closest(".tag-input");
            return this.values = [], e.val("").trigger("change"), t.find(".tag").remove(), this
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, toggleStatic: function (e) {
            var t = this.element.closest(".tag-input"), e = d.isValue(e) ? d.bool(e) : !t.hasClass("static-mode");
            e ? t.addClass("static-mode") : t.removeClass("static-mode")
        }, changeAttribute: function (e) {
            var t, n = this, i = this.element, s = this.options;
            switch (e) {
                case"value":
                    t = i.attr("value").trim(), n.clear(), d.isValue(t) && n.val(t.toArray(s.tagSeparator));
                    break;
                case"disabled":
                    this.toggleState();
                    break;
                case"static":
                    this.toggleStatic()
            }
        }, destroy: function () {
            var e = this.element, t = e.closest(".tag-input"), n = t.find(".input-wrapper");
            return n.off(l.events.focus), n.off(l.events.blur), n.off(l.events.keydown), t.off(l.events.click, ".tag .remover"), t.off(l.events.click), e
        }
    })
}(Metro, m4q), function (e, u) {
    "use strict";

    function i(e, t, n) {
        var i, s, a, o = "<%(.+?)%>", r = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
            l = "with(obj) { var r=[];\n", c = 0, d = function (e, t) {
                return l += t ? e.match(r) ? e + "\n" : "r.push(" + e + ");\n" : "" !== e ? 'r.push("' + e.replace(/"/g, '\\"') + '");\n' : "", d
            };
        for (h.isValue(n) && (u.hasProp(n, "beginToken") && (o = o.replace("<%", n.beginToken)), u.hasProp(n, "endToken") && (o = o.replace("%>", n.endToken))), a = (i = new RegExp(o, "g")).exec(e); a;) d(e.slice(c, a.index))(a[1], !0), c = a.index + a[0].length, a = i.exec(e);
        d(e.substr(c, e.length - c)), l = (l + 'return r.join(""); }').replace(/[\r\t\n]/g, " ");
        try {
            s = new Function("obj", l).apply(t, [t])
        } catch (e) {
            console.error("'" + e.message + "'", " in \n\nCode:\n", l, "\n")
        }
        return s
    }

    var h = e.utils, n = {templateData: null, onTemplateCompile: e.noop, onTemplateCreate: e.noop};
    e.templateSetup = function (e) {
        n = u.extend({}, n, e)
    }, window.metroTemplateSetup, e.templateSetup(window.metroTemplateSetup), e.Component("template", {
        init: function (e, t) {
            return this._super(t, e, n, {template: null, data: {}}), this
        }, _compile: function () {
            var e = this.element,
                t = this.template.replace(/(&lt;%)/gm, "<%").replace(/(%&gt;)/gm, "%>").replace(/(&lt;)/gm, "<").replace(/(&gt;)/gm, ">"),
                n = i(t, this.data);
            e.html(n), this._fireEvent("template-compile", {template: t, compiled: n, element: e})
        }, _create: function () {
            var e = this.element, t = this.options;
            this.template = e.html(), this.data = h.isObject(t.templateData) || {}, this._compile(), this._fireEvent("template-create", {element: e})
        }, buildWith: function (e) {
            e = h.isObject(e);
            e && (this.data = e, this._compile())
        }, changeAttribute: function (e, t) {
            "data-template-data" === e && (this.options.templateData = t, this.data = h.isObject(t) || {}, this._compile())
        }, destroy: function () {
            return this.element
        }
    }), e.template = i
}(Metro, m4q),function (o, d) {
    "use strict";
    var u = o.utils, n = {
        label: "",
        textareaDeferred: 0,
        charsCounter: null,
        charsCounterTemplate: "$1",
        defaultValue: "",
        prepend: "",
        append: "",
        copyInlineStyles: !1,
        clearButton: !0,
        clearButtonIcon: "<span class='default-icon-cross'></span>",
        autoSize: !0,
        maxHeight: 0,
        clsPrepend: "",
        clsAppend: "",
        clsComponent: "",
        clsTextarea: "",
        clsLabel: "",
        onChange: o.noop,
        onTextareaCreate: o.noop
    };
    o.textareaSetup = function (e) {
        n = d.extend({}, n, e)
    }, window.metroTextareaSetup, o.textareaSetup(window.metroTextareaSetup), o.Component("textarea", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e = this.element;
            this._createStructure(), this._createEvents(), this._fireEvent("textarea-create", {element: e})
        }, _createStructure: function () {
            var e, t, n = this, i = this.element, s = this.elem, a = this.options,
                o = d("<div>").addClass("textarea " + i[0].className), r = d("<textarea>").addClass("fake-textarea");
            if (o.insertBefore(i), i.appendTo(o), r.appendTo(o), !1 === a.clearButton || i[0].readOnly || (e = d("<button>").addClass("button input-clear-button").attr("tabindex", -1).attr("type", "button").html(a.clearButtonIcon)).appendTo(o), "rtl" === i.attr("dir") && o.addClass("rtl").attr("dir", "rtl"), "" !== a.prepend && d("<div>").html(a.prepend).addClass("prepend").addClass(a.clsPrepend).appendTo(o), "" !== a.append && ((t = d("<div>").html(a.append)).addClass("append").addClass(a.clsAppend).appendTo(o), e.css({right: t.outerWidth() + 4})), !(s.className = "") === a.copyInlineStyles) for (var l = 0, c = s.style.length; l < c; l++) o.css(s.style[l], i.css(s.style[l]));
            u.isValue(a.defaultValue) && "" === i.val().trim() && i.val(a.defaultValue), o.addClass(a.clsComponent), i.addClass(a.clsTextarea), a.label && (t = d("<label>").addClass("label-for-input").addClass(a.clsLabel).html(a.label).insertBefore(o), i.attr("id") && t.attr("for", i.attr("id")), "rtl" === i.attr("dir") && t.addClass("rtl")), i.is(":disabled") ? this.disable() : this.enable(), r.val(i.val()), !0 === a.autoSize && (o.addClass("autosize no-scroll-vertical"), setTimeout(function () {
                n.resize()
            }, 100))
        }, _createEvents: function () {
            var e = this, t = this.element, n = this.options, i = t.closest(".textarea"), s = i.find(".fake-textarea"),
                a = d(n.charsCounter);
            i.on(o.events.click, ".input-clear-button", function () {
                t.val(u.isValue(n.defaultValue) ? n.defaultValue : "").trigger("change").trigger("keyup").focus()
            }), n.autoSize && t.on(o.events.inputchange + " " + o.events.keyup, function () {
                s.val(this.value), e.resize()
            }), t.on(o.events.blur, function () {
                i.removeClass("focused")
            }), t.on(o.events.focus, function () {
                i.addClass("focused")
            }), t.on(o.events.keyup, function () {
                u.isValue(n.charsCounter) && 0 < a.length && ("INPUT" === a[0].tagName ? a.val(e.length()) : a.html(n.charsCounterTemplate.replace("$1", e.length()))), e._fireEvent("change", {
                    val: t.val(),
                    length: e.length()
                })
            })
        }, resize: function () {
            var e = this.element, t = this.options, n = e.closest(".textarea"), i = n.find(".fake-textarea"),
                s = i[0].scrollHeight;
            t.maxHeight && s >= t.maxHeight ? n.removeClass("no-scroll-vertical") : (t.maxHeight && s < t.maxHeight && n.addClass("no-scroll-vertical"), i[0].style.cssText = "height:auto;", i[0].style.cssText = "height:" + i[0].scrollHeight + "px", e[0].style.cssText = "height:" + i[0].scrollHeight + "px")
        }, clear: function () {
            this.element.val("").trigger("change").trigger("keyup").focus()
        }, toDefault: function () {
            this.element.val(u.isValue(this.options.defaultValue) ? this.options.defaultValue : "").trigger("change").trigger("keyup").focus()
        }, length: function () {
            return this.elem.value.split("").length
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e) {
            "disabled" === e && this.toggleState()
        }, destroy: function () {
            var e = this.element, t = this.options;
            return e.closest(".textarea").off(o.events.click, ".input-clear-button"), t.autoSize && e.off(o.events.inputchange + " " + o.events.keyup), e.off(o.events.blur), e.off(o.events.focus), e.off(o.events.keyup), e
        }
    })
}(Metro, m4q),function (d, u) {
    "use strict";
    var c = d.utils, h = ["slide-up", "slide-down", "slide-left", "slide-right", "fade", "zoom", "swirl", "switch"],
        n = {
            tileDeferred: 0,
            size: "medium",
            cover: "",
            coverPosition: "center",
            effect: "",
            effectInterval: 3e3,
            effectDuration: 500,
            target: null,
            canTransform: !0,
            onTileClick: d.noop,
            onTileCreate: d.noop
        };
    d.tileSetup = function (e) {
        n = u.extend({}, n, e)
    }, window.metroTileSetup, d.tileSetup(window.metroTileSetup), d.Component("tile", {
        init: function (e, t) {
            return this._super(t, e, n, {
                effectInterval: !1,
                images: [],
                slides: [],
                currentSlide: -1,
                unload: !1
            }), this
        }, _create: function () {
            var e = this.element;
            this._createTile(), this._createEvents(), this._fireEvent("tile-create", {element: e})
        }, _createTile: function () {
            var s = this, a = this.element, n = this.options, e = a.find(".slide"),
                t = a.find(".slide-front, .slide-back");
            if (a.addClass("tile-" + n.size), -1 < n.effect.indexOf("hover-") && (a.addClass("effect-" + n.effect), u.each(t, function () {
                var e = u(this);
                void 0 !== e.data("cover") && s._setCover(e, e.data("cover"), e.data("cover-position"))
            })), h.includes(n.effect) && 1 < e.length && (u.each(e, function (e) {
                var t = u(this);
                s.slides.push(this), void 0 !== t.data("cover") && s._setCover(t, t.data("cover"), t.data("cover-position")), 0 < e && (-1 < ["slide-up", "slide-down"].indexOf(n.effect) && t.css("top", "100%"), -1 < ["slide-left", "slide-right"].indexOf(n.effect) && t.css("left", "100%"), -1 < ["fade", "zoom", "swirl", "switch"].indexOf(n.effect) && t.css("opacity", 0))
            }), this.currentSlide = 0, this._runEffects()), "" !== n.cover && this._setCover(a, n.cover), "image-set" === n.effect) {
                a.addClass("image-set"), u.each(a.children("img"), function () {
                    s.images.push(this), u(this).remove()
                });
                for (var i = this.images.slice(), o = 0; o < 5; o++) {
                    var r = u.random(0, i.length - 1),
                        l = u("<div>").addClass("img -js-img-" + o).css("background-image", "url(" + i[r].src + ")");
                    a.prepend(l), i.splice(r, 1)
                }
                var c = [0, 1, 4, 3, 2];
                u.setInterval(function () {
                    var e = s.images.slice(), t = d.colors.random();
                    a.css("background-color", t);
                    for (var n = 0; n < c.length; n++) {
                        var i = u.random(0, e.length - 1);
                        !function (e, t, n) {
                            u.setTimeout(function () {
                                e.fadeOut(500, function () {
                                    e.css("background-image", "url(" + t + ")"), e.fadeIn()
                                })
                            }, 300 * n)
                        }(a.find(".-js-img-" + c[n]), e[i].src, n), e.splice(i, 1)
                    }
                    c = c.reverse()
                }, 5e3)
            }
        }, _runEffects: function () {
            var n = this, i = this.options;
            !1 === this.effectInterval && (this.effectInterval = u.setInterval(function () {
                var e, t = u(n.slides[n.currentSlide]);
                n.currentSlide++, n.currentSlide === n.slides.length && (n.currentSlide = 0), e = n.slides[n.currentSlide], h.includes(i.effect) && d.animations[i.effect.camelCase()](u(t), u(e), {duration: i.effectDuration})
            }, i.effectInterval))
        }, _stopEffects: function () {
            u.clearInterval(this.effectInterval), this.effectInterval = !1
        }, _setCover: function (e, t, n) {
            c.isValue(n) || (n = this.options.coverPosition), e.css({
                backgroundImage: "url(" + t + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: n
            })
        }, _createEvents: function () {
            var o = this, r = this.element, l = this.options;
            r.on(d.events.startAll, function (e) {
                var t = u(this), n = r.width(), i = r.height(), s = c.pageXY(e).x - t.offset().left,
                    a = c.pageXY(e).y - t.offset().top;
                !1 === c.isRightMouse(e) && (a = s < +n / 3 && (a < +i / 2 || +i / 2 < a) ? "left" : 2 * n / 3 < s && (a < +i / 2 || +i / 2 < a) ? "right" : +n / 3 < s && s < 2 * n / 3 && i / 2 < a ? "bottom" : "top", !0 === l.canTransform && t.addClass("transform-" + a), null !== l.target && setTimeout(function () {
                    document.location.href = l.target
                }, 100), o._fireEvent("tile-click", {side: a}))
            }), r.on([d.events.stopAll, d.events.leave].join(" "), function () {
                u(this).removeClass("transform-left").removeClass("transform-right").removeClass("transform-top").removeClass("transform-bottom")
            })
        }, changeAttribute: function () {
        }, destroy: function () {
            var e = this.element;
            return e.off(d.events.startAll), e.off([d.events.stopAll, d.events.leave].join(" ")), e
        }
    })
}(Metro, m4q),function (i, c) {
    "use strict";
    var d = i.utils, n = {
        label: "",
        timepickerDeferred: 0,
        hoursStep: 1,
        minutesStep: 1,
        secondsStep: 1,
        value: null,
        locale: METRO_LOCALE,
        distance: 3,
        hours: !0,
        minutes: !0,
        seconds: !0,
        showLabels: !0,
        scrollSpeed: 4,
        copyInlineStyles: !1,
        clsPicker: "",
        clsPart: "",
        clsHours: "",
        clsMinutes: "",
        clsSeconds: "",
        clsLabel: "",
        clsButton: "",
        clsOkButton: "",
        clsCancelButton: "",
        okButtonIcon: "<span class='default-icon-check'></span>",
        cancelButtonIcon: "<span class='default-icon-cross'></span>",
        onSet: i.noop,
        onOpen: i.noop,
        onClose: i.noop,
        onScroll: i.noop,
        onTimePickerCreate: i.noop
    };
    i.timePickerSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroTimePickerSetup, i.timePickerSetup(window.metroTimePickerSetup), i.Component("time-picker", {
        init: function (e, t) {
            return this._super(t, e, n, {
                picker: null,
                isOpen: !1,
                value: [],
                locale: i.locales[METRO_LOCALE].calendar,
                listTimer: {hours: null, minutes: null, seconds: null}
            }), this
        }, _create: function () {
            var e, t = this.element, n = this.options;
            for (n.distance < 1 && (n.distance = 1), n.hoursStep < 1 && (n.hoursStep = 1), 23 < n.hoursStep && (n.hoursStep = 23), n.minutesStep < 1 && (n.minutesStep = 1), 59 < n.minutesStep && (n.minutesStep = 59), n.secondsStep < 1 && (n.secondsStep = 1), 59 < n.secondsStep && (n.secondsStep = 59), "" !== t.val() || d.isValue(n.value) || (n.value = (new Date).format("%H:%M:%S")), this.value = ("" !== t.val() ? t.val() : "" + n.value).toArray(":"), e = 0; e < 3; e++) void 0 === this.value[e] || null === this.value[e] ? this.value[e] = 0 : this.value[e] = parseInt(this.value[e]);
            this._normalizeValue(), void 0 === i.locales[n.locale] && (n.locale = METRO_LOCALE), this.locale = i.locales[n.locale].calendar, this._createStructure(), this._createEvents(), this._set(), this._fireEvent("time-picker-create", {element: t})
        }, _normalizeValue: function () {
            var e = this.options;
            1 < e.hoursStep && (this.value[0] = d.nearest(this.value[0], e.hoursStep, !0)), 1 < e.minutesStep && (this.value[1] = d.nearest(this.value[1], e.minutesStep, !0)), 1 < e.minutesStep && (this.value[2] = d.nearest(this.value[2], e.secondsStep, !0))
        }, _createStructure: function () {
            var e, t, n, i, s, a = this.element, o = this.options, r = d.elementId("time-picker"),
                l = c("<div>").attr("id", r).addClass("wheel-picker time-picker " + a[0].className).addClass(o.clsPicker);
            if (l.insertBefore(a), a.attr("readonly", !0).appendTo(l), o.label && (s = c("<label>").addClass("label-for-input").addClass(o.clsLabel).html(o.label).insertBefore(l), a.attr("id") && s.attr("for", a.attr("id")), "rtl" === a.attr("dir") && s.addClass("rtl")), r = c("<div>").addClass("time-wrapper").appendTo(l), !0 === o.hours && (e = c("<div>").attr("data-title", this.locale.time.hours).addClass("hours").addClass(o.clsPart).addClass(o.clsHours).appendTo(r)), !0 === o.minutes && (t = c("<div>").attr("data-title", this.locale.time.minutes).addClass("minutes").addClass(o.clsPart).addClass(o.clsMinutes).appendTo(r)), !0 === o.seconds && (n = c("<div>").attr("data-title", this.locale.time.seconds).addClass("seconds").addClass(o.clsPart).addClass(o.clsSeconds).appendTo(r)), s = c("<div>").addClass("select-wrapper").appendTo(l), r = c("<div>").addClass("select-block").appendTo(s), !0 === o.hours) {
                for (e = c("<ul>").addClass("sel-hours").appendTo(r), i = 0; i < o.distance; i++) c("<li>").html("&nbsp;").data("value", -1).appendTo(e);
                for (i = 0; i < 24; i += o.hoursStep) c("<li>").addClass("js-hours-" + i).html(i < 10 ? "0" + i : i).data("value", i).appendTo(e);
                for (i = 0; i < o.distance; i++) c("<li>").html("&nbsp;").data("value", -1).appendTo(e)
            }
            if (!0 === o.minutes) {
                for (t = c("<ul>").addClass("sel-minutes").appendTo(r), i = 0; i < o.distance; i++) c("<li>").html("&nbsp;").data("value", -1).appendTo(t);
                for (i = 0; i < 60; i += o.minutesStep) c("<li>").addClass("js-minutes-" + i).html(i < 10 ? "0" + i : i).data("value", i).appendTo(t);
                for (i = 0; i < o.distance; i++) c("<li>").html("&nbsp;").data("value", -1).appendTo(t)
            }
            if (!0 === o.seconds) {
                for (n = c("<ul>").addClass("sel-seconds").appendTo(r), i = 0; i < o.distance; i++) c("<li>").html("&nbsp;").data("value", -1).appendTo(n);
                for (i = 0; i < 60; i += o.secondsStep) c("<li>").addClass("js-seconds-" + i).html(i < 10 ? "0" + i : i).data("value", i).appendTo(n);
                for (i = 0; i < o.distance; i++) c("<li>").html("&nbsp;").data("value", -1).appendTo(n)
            }
            if (r.height(40 * (2 * o.distance + 1)), s = c("<div>").addClass("action-block").appendTo(s), c("<button>").attr("type", "button").addClass("button action-ok").addClass(o.clsButton).addClass(o.clsOkButton).html(o.okButtonIcon).appendTo(s), c("<button>").attr("type", "button").addClass("button action-cancel").addClass(o.clsButton).addClass(o.clsCancelButton).html(o.cancelButtonIcon).appendTo(s), !(a[0].className = "") === o.copyInlineStyles) for (i = 0; i < a[0].style.length; i++) l.css(a[0].style[i], a.css(a[0].style[i]));
            !0 === o.showLabels && l.addClass("show-labels"), a.prop("disabled") && l.addClass("disabled"), this.picker = l
        }, _createEvents: function () {
            var s = this, a = this.options, o = this.picker;
            o.on(i.events.start, ".select-block ul", function (e) {
                var t, n;
                e.changedTouches || (t = this, n = d.pageXY(e).y, c(document).on(i.events.move, function (e) {
                    t.scrollTop -= a.scrollSpeed * (n > d.pageXY(e).y ? -1 : 1), n = d.pageXY(e).y
                }, {ns: o.attr("id")}), c(document).on(i.events.stop, function () {
                    c(document).off(i.events.move, {ns: o.attr("id")}), c(document).off(i.events.stop, {ns: o.attr("id")})
                }, {ns: o.attr("id")}))
            }), o.on(i.events.click, function (e) {
                !1 === s.isOpen && s.open(), e.stopPropagation()
            }), o.on(i.events.click, ".action-ok", function (e) {
                var t = o.find(".sel-hours li.active"), n = o.find(".sel-minutes li.active"),
                    i = o.find(".sel-seconds li.active"), t = 0 === t.length ? 0 : t.data("value"),
                    n = 0 === n.length ? 0 : n.data("value"), i = 0 === i.length ? 0 : i.data("value");
                s.value = [t, n, i], s._normalizeValue(), s._set(), s.close(), e.stopPropagation()
            }), o.on(i.events.click, ".action-cancel", function (e) {
                s.close(), e.stopPropagation()
            });
            c.each(["hours", "minutes", "seconds"], function () {
                var n = this, i = o.find(".sel-" + n);
                i.on("scroll", function () {
                    s.isOpen && (s.listTimer[n] && (clearTimeout(s.listTimer[n]), s.listTimer[n] = null), s.listTimer[n] || (s.listTimer[n] = setTimeout(function () {
                        var e, t;
                        s.listTimer[n] = null, t = Math.round(Math.ceil(i.scrollTop()) / 40), t = (e = i.find(".js-" + n + "-" + t)).position().top - 40 * a.distance, i.find(".active").removeClass("active"), i[0].scrollTop = t, e.addClass("active"), d.exec(a.onScroll, [e, i, o], i[0])
                    }, 150)))
                })
            })
        }, _set: function () {
            var e = this.element, t = this.options, n = this.picker, i = "00", s = "00", a = "00";
            !0 === t.hours && ((i = parseInt(this.value[0])) < 10 && (i = "0" + i), n.find(".hours").html(i)), !0 === t.minutes && ((s = parseInt(this.value[1])) < 10 && (s = "0" + s), n.find(".minutes").html(s)), !0 === t.seconds && ((a = parseInt(this.value[2])) < 10 && (a = "0" + a), n.find(".seconds").html(a)), e.val([i, s, a].join(":")).trigger("change"), this._fireEvent("set", {
                val: this.value,
                elementVal: e.val()
            })
        }, open: function () {
            var e, t, n, i = this.options, s = this.picker, a = s.find("li"), o = s.find(".select-wrapper");
            o.parent().removeClass("for-top for-bottom"), o.show(0), a.removeClass("active"), e = d.inViewport(o[0]), a = d.rect(o[0]), !e && 0 < a.top && o.parent().addClass("for-bottom"), !e && a.top < 0 && o.parent().addClass("for-top");
            a = function (e, t) {
                e.scrollTop(0).animate({
                    draw: {scrollTop: t.position().top - 40 * i.distance + e.scrollTop()},
                    dur: 100
                })
            };
            !0 === i.hours && (t = parseInt(this.value[0]), t = (o = s.find(".sel-hours")).find("li.js-hours-" + t).addClass("active"), a(o, t)), !0 === i.minutes && (n = parseInt(this.value[1]), n = (t = s.find(".sel-minutes")).find("li.js-minutes-" + n).addClass("active"), a(t, n)), !0 === i.seconds && (n = parseInt(this.value[2]), n = (s = s.find(".sel-seconds")).find("li.js-seconds-" + n).addClass("active"), a(s, n)), this.isOpen = !0, this._fireEvent("open", {val: this.value})
        }, close: function () {
            this.picker.find(".select-wrapper").hide(0), this.isOpen = !1, this._fireEvent("close", {val: this.value})
        }, _convert: function (e) {
            e = Array.isArray(e) ? e : "function" == typeof e.getMonth ? [e.getHours(), e.getMinutes(), e.getSeconds()] : d.isObject(e) ? [e.h, e.m, e.s] : e.toArray(":");
            return e
        }, val: function (e) {
            if (void 0 === e) return this.element.val();
            this.value = this._convert(e), this._normalizeValue(), this._set()
        }, time: function (e) {
            if (void 0 === e) return {h: this.value[0], m: this.value[1], s: this.value[2]};
            this.value = this._convert(e), this._normalizeValue(), this._set()
        }, date: function (e) {
            if (void 0 === e || "function" != typeof e.getMonth) {
                var t = new Date;
                return t.setHours(this.value[0]), t.setMinutes(this.value[1]), t.setSeconds(this.value[2]), t.setMilliseconds(0), t
            }
            this.value = this._convert(e), this._normalizeValue(), this._set()
        }, disable: function () {
            this.element.data("disabled", !0), this.element.parent().addClass("disabled")
        }, enable: function () {
            this.element.data("disabled", !1), this.element.parent().removeClass("disabled")
        }, toggleState: function () {
            this.elem.disabled ? this.disable() : this.enable()
        }, changeAttribute: function (e, t) {
            switch (e) {
                case"data-value":
                    this.val(t);
                    break;
                case"disabled":
                    this.toggleState()
            }
        }, destroy: function () {
            var e = this.element, t = this.picker;
            return c.each(["hours", "minutes", "seconds"], function () {
                t.find(".sel-" + this).off("scroll")
            }), t.off(i.events.start, ".select-block ul"), t.off(i.events.click), t.off(i.events.click, ".action-ok"), t.off(i.events.click, ".action-cancel"), e
        }
    }), c(document).on(i.events.click, function () {
        c.each(c(".time-picker"), function () {
            c(this).find("input").each(function () {
                i.getPlugin(this, "timepicker").close()
            })
        })
    })
}(Metro, m4q),function (e, r) {
    "use strict";
    var n = e.utils, l = {callback: e.noop, timeout: METRO_TIMEOUT, distance: 20, showTop: !1, clsToast: ""};
    e.toastSetup = function (e) {
        l = r.extend({}, l, e)
    }, window.metroToastSetup, e.toastSetup(window.metroToastSetup);
    var c = {
        create: function (e, t) {
            var n, i, s, a, o = Array.from(arguments);
            r.isPlainObject(t) || (t = o[4], s = o[1], i = o[2], a = o[3]), t = r.extend({}, l, t), e = (n = r("<div>").addClass("toast").html(e).appendTo(r("body"))).outerWidth(), n.hide(), i = i || t.timeout, s = s || t.callback, a = a || t.clsToast, !0 === t.showTop ? n.addClass("show-top").css({top: t.distance}) : n.css({bottom: t.distance}), n.css({
                left: "50%",
                "margin-left": -e / 2
            }).addClass(t.clsToast).addClass(a).fadeIn(METRO_ANIMATION_DURATION, function () {
                setTimeout(function () {
                    c.remove(n, s)
                }, i)
            })
        }, remove: function (e, t) {
            e && e.fadeOut(METRO_ANIMATION_DURATION, function () {
                e.remove(), n.exec(t, null, e[0])
            })
        }
    };
    e.toast = c, e.createToast = c.create
}(Metro, m4q),function (e, r) {
    "use strict";
    var n = {
        textToTokenize: "",
        spaceSymbol: "",
        spaceClass: "space",
        tokenClass: "",
        splitter: "",
        tokenElement: "span",
        useTokenSymbol: !0,
        useTokenIndex: !0,
        clsTokenizer: "",
        clsToken: "",
        clsTokenOdd: "",
        clsTokenEven: "",
        onTokenCreate: e.noop,
        onTokenize: e.noop,
        onTokenizerCreate: e.noop
    };
    e.tokenizerSetup = function (e) {
        n = r.extend({}, n, e)
    }, window.metroTokenizerSetup, e.tokenizerSetup(window.metroTokenizerSetup), e.Component("tokenizer", {
        init: function (e, t) {
            return this._super(t, e, n, {originalText: ""}), this
        }, _create: function () {
            var e = this.element, t = this.options;
            this.originalText = t.textToTokenize ? t.textToTokenize.trim() : e.text().trim().replace(/[\r\n\t]/gi, "").replace(/\s\s+/g, " "), this._createStructure(), this._fireEvent("tokenizer-create")
        }, _tokenize: function () {
            var n, i = this, s = this.element, a = this.options, o = 0;
            s.clear().attr("aria-label", this.originalText), r.each(this.originalText.split(a.splitter), function (e) {
                var t = " " === this,
                    e = r("<" + a.tokenElement + ">").html(t ? a.spaceSymbol : this).attr("aria-hidden", !0).addClass(t ? a.spaceClass : "").addClass(t && a.useTokenSymbol ? "" : "ts-" + this.replace(" ", "_")).addClass(t && a.useTokenIndex ? "" : "ti-" + (e + 1)).addClass(a.tokenClass || "").addClass(t ? "" : a.clsToken);
                t || (o++, e.addClass(o % 2 == 0 ? "te-even" : "te-odd"), e.addClass(o % 2 == 0 ? a.clsTokenEven : a.clsTokenOdd)), a.prepend && (n = r.isSelector(a.prepend) ? r(a.prepend) : r("<span>").html(a.prepend), e.prepend(n)), a.append && (n = r.isSelector(a.append) ? r(a.append) : r("<span>").html(a.append), e.append(n)), s.append(e), i._fireEvent("token-create", {token: e[0]})
            }), i._fireEvent("tokenize", {tokens: s.children().items(), originalText: this.originalText})
        }, _createStructure: function () {
            var e = this.element, t = this.options;
            e.addClass(t.clsTokenizer), this._tokenize()
        }, tokenize: function (e) {
            this.originalText = e, this._tokenize()
        }, destroy: function () {
            this.element.remove()
        }
    })
}(Metro, m4q),function (r, l) {
    "use strict";
    var c = r.utils, d = {
        LEFT: "left",
        RIGHT: "right",
        UP: "up",
        DOWN: "down",
        IN: "in",
        OUT: "out",
        NONE: "none",
        AUTO: "auto",
        SWIPE: "swipe",
        PINCH: "pinch",
        TAP: "tap",
        DOUBLE_TAP: "doubletap",
        LONG_TAP: "longtap",
        HOLD: "hold",
        HORIZONTAL: "horizontal",
        VERTICAL: "vertical",
        ALL_FINGERS: "all",
        DOUBLE_TAP_THRESHOLD: 10,
        PHASE_START: "start",
        PHASE_MOVE: "move",
        PHASE_END: "end",
        PHASE_CANCEL: "cancel",
        SUPPORTS_TOUCH: "ontouchstart" in window,
        SUPPORTS_POINTER_IE10: window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !("ontouchstart" in window),
        SUPPORTS_POINTER: (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !("ontouchstart" in window),
        IN_TOUCH: "intouch"
    }, n = {
        touchDeferred: 0,
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".no-swipe",
        preventDefaultEvents: !0,
        onSwipe: r.noop,
        onSwipeLeft: r.noop,
        onSwipeRight: r.noop,
        onSwipeUp: r.noop,
        onSwipeDown: r.noop,
        onSwipeStatus: r.noop_true,
        onPinchIn: r.noop,
        onPinchOut: r.noop,
        onPinchStatus: r.noop_true,
        onTap: r.noop,
        onDoubleTap: r.noop,
        onLongTap: r.noop,
        onHold: r.noop,
        onTouchCreate: r.noop
    };
    r.touchSetup = function (e) {
        n = l.extend({}, n, e)
    }, window.metroTouchSetup, r.touchSetup(window.metroTouchSetup), r.Component("touch", {
        init: function (e, t) {
            return this._super(t, e, n, {
                useTouchEvents: null,
                START_EV: null,
                MOVE_EV: null,
                END_EV: null,
                LEAVE_EV: null,
                CANCEL_EV: null,
                distance: 0,
                direction: null,
                currentDirection: null,
                duration: 0,
                startTouchesDistance: 0,
                endTouchesDistance: 0,
                pinchZoom: 1,
                pinchDistance: 0,
                pinchDirection: 0,
                maximumsMap: null,
                phase: "start",
                fingerCount: 0,
                fingerData: {},
                startTime: 0,
                endTime: 0,
                previousTouchEndTime: 0,
                fingerCountAtRelease: 0,
                doubleTapStartTime: 0,
                singleTapTimeout: null,
                holdTimeout: null
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            this.useTouchEvents = d.SUPPORTS_TOUCH || d.SUPPORTS_POINTER || !this.options.fallbackToMouseEvents, this.START_EV = this.useTouchEvents ? d.SUPPORTS_POINTER ? d.SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", this.MOVE_EV = this.useTouchEvents ? d.SUPPORTS_POINTER ? d.SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", this.END_EV = this.useTouchEvents ? d.SUPPORTS_POINTER ? d.SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", this.LEAVE_EV = !this.useTouchEvents || d.SUPPORTS_POINTER ? "mouseleave" : null, this.CANCEL_EV = d.SUPPORTS_POINTER ? d.SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel", void 0 !== t.allowPageScroll || t.onSwipe === r.noop && t.onSwipeStatus === r.noop || (t.allowPageScroll = d.NONE);
            try {
                e.on(this.START_EV, l.proxy(this.touchStart, this)), e.on(this.CANCEL_EV, l.proxy(this.touchCancel, this))
            } catch (e) {
                throw new Error("Events not supported " + this.START_EV + "," + this.CANCEL_EV + " on Swipe")
            }
            this._fireEvent("touch-create", {element: e})
        }, touchStart: function (e) {
            var t = this.element, n = this.options;
            if (!(this.getTouchInProgress() || 0 < l(e.target).closest(n.excludedElements).length)) {
                var i, s = e, a = s.touches, o = a ? a[0] : s;
                return (this.phase = d.PHASE_START, a ? this.fingerCount = a.length : !1 !== n.preventDefaultEvents && e.preventDefault(), this.distance = 0, this.direction = null, this.currentDirection = null, this.pinchDirection = null, this.duration = 0, this.startTouchesDistance = 0, this.endTouchesDistance = 0, this.pinchZoom = 1, this.pinchDistance = 0, this.maximumsMap = this.createMaximumsData(), this.cancelMultiFingerRelease(), this.createFingerData(0, o), !a || this.fingerCount === n.fingers || n.fingers === d.ALL_FINGERS || this.hasPinches() ? (this.startTime = this.getTimeStamp(), 2 === this.fingerCount && (this.createFingerData(1, a[1]), this.startTouchesDistance = this.endTouchesDistance = this.calculateTouchesDistance(this.fingerData[0].start, this.fingerData[1].start)), n.onSwipeStatus === r.noop && n.onPinchStatus === r.noop || (i = this.triggerHandler(s, this.phase))) : i = !1, !1 === i) ? (this.phase = d.PHASE_CANCEL, this.triggerHandler(s, this.phase), i) : (n.onHold !== r.noop && (this.holdTimeout = setTimeout(l.proxy(function () {
                    t.trigger("hold", [s.target]), n.onHold !== r.noop && (i = c.exec(n.onHold, [s, s.target], t[0]), t.fire("hold", {
                        event: s,
                        target: s.target
                    }))
                }, this), n.longTapThreshold)), this.setTouchInProgress(!0), null)
            }
        }, touchMove: function (e) {
            var t, n, i, s = e;
            this.phase === d.PHASE_END || this.phase === d.PHASE_CANCEL || this.inMultiFingerRelease() || (n = (i = s.touches) ? i[0] : s, n = this.updateFingerData(n), this.endTime = this.getTimeStamp(), i && (this.fingerCount = i.length), this.options.onHold !== r.noop && clearTimeout(this.holdTimeout), this.phase = d.PHASE_MOVE, 2 === this.fingerCount && (0 === this.startTouchesDistance ? (this.createFingerData(1, i[1]), this.startTouchesDistance = this.endTouchesDistance = this.calculateTouchesDistance(this.fingerData[0].start, this.fingerData[1].start)) : (this.updateFingerData(i[1]), this.endTouchesDistance = this.calculateTouchesDistance(this.fingerData[0].end, this.fingerData[1].end), this.pinchDirection = this.calculatePinchDirection(this.fingerData[0].end, this.fingerData[1].end)), this.pinchZoom = this.calculatePinchZoom(this.startTouchesDistance, this.endTouchesDistance), this.pinchDistance = Math.abs(this.startTouchesDistance - this.endTouchesDistance)), this.fingerCount === this.options.fingers || this.options.fingers === d.ALL_FINGERS || !i || this.hasPinches() ? (this.direction = this.calculateDirection(n.start, n.end), this.currentDirection = this.calculateDirection(n.last, n.end), this.validateDefaultEvent(e, this.currentDirection), this.distance = this.calculateDistance(n.start, n.end), this.duration = this.calculateDuration(), this.setMaxDistance(this.direction, this.distance), t = this.triggerHandler(s, this.phase), this.options.triggerOnTouchEnd && !this.options.triggerOnTouchLeave || (i = !0, this.options.triggerOnTouchLeave && (e = this.getBounds(this), i = this.isInBounds(n.end, e)), !this.options.triggerOnTouchEnd && i ? this.phase = this.getNextPhase(d.PHASE_MOVE) : this.options.triggerOnTouchLeave && !i && (this.phase = this.getNextPhase(d.PHASE_END)), this.phase !== d.PHASE_CANCEL && this.phase !== d.PHASE_END || this.triggerHandler(s, this.phase))) : (this.phase = d.PHASE_CANCEL, this.triggerHandler(s, this.phase)), !1 === t && (this.phase = d.PHASE_CANCEL, this.triggerHandler(s, this.phase)))
        }, touchEnd: function (e) {
            var t = e, n = t.touches;
            if (n) {
                if (n.length && !this.inMultiFingerRelease()) return this.startMultiFingerRelease(t), !0;
                if (n.length && this.inMultiFingerRelease()) return !0
            }
            return this.inMultiFingerRelease() && (this.fingerCount = this.fingerCountAtRelease), this.endTime = this.getTimeStamp(), this.duration = this.calculateDuration(), this.didSwipeBackToCancel() || !this.validateSwipeDistance() ? (this.phase = d.PHASE_CANCEL, this.triggerHandler(t, this.phase)) : this.options.triggerOnTouchEnd || !1 === this.options.triggerOnTouchEnd && this.phase === d.PHASE_MOVE ? (!1 !== this.options.preventDefaultEvents && e.preventDefault(), this.phase = d.PHASE_END, this.triggerHandler(t, this.phase)) : !this.options.triggerOnTouchEnd && this.hasTap() ? (this.phase = d.PHASE_END, this.triggerHandlerForGesture(t, this.phase, d.TAP)) : this.phase === d.PHASE_MOVE && (this.phase = d.PHASE_CANCEL, this.triggerHandler(t, this.phase)), this.setTouchInProgress(!1), null
        }, touchCancel: function () {
            this.fingerCount = 0, this.endTime = 0, this.startTime = 0, this.startTouchesDistance = 0, this.endTouchesDistance = 0, this.pinchZoom = 1, this.cancelMultiFingerRelease(), this.setTouchInProgress(!1)
        }, touchLeave: function (e) {
            this.options.triggerOnTouchLeave && (this.phase = this.getNextPhase(d.PHASE_END), this.triggerHandler(e, this.phase))
        }, getNextPhase: function (e) {
            var t = this.options, n = e, i = this.validateSwipeTime(), s = this.validateSwipeDistance(),
                a = this.didSwipeBackToCancel();
            return !i || a ? n = d.PHASE_CANCEL : !s || e !== d.PHASE_MOVE || t.triggerOnTouchEnd && !t.triggerOnTouchLeave ? !s && e === d.PHASE_END && t.triggerOnTouchLeave && (n = d.PHASE_CANCEL) : n = d.PHASE_END, n
        }, triggerHandler: function (e, t) {
            var n, i = e.touches;
            return (this.didSwipe() || this.hasSwipes()) && (n = this.triggerHandlerForGesture(e, t, d.SWIPE)), (this.didPinch() || this.hasPinches()) && !1 !== n && (n = this.triggerHandlerForGesture(e, t, d.PINCH)), this.didDoubleTap() && !1 !== n ? n = this.triggerHandlerForGesture(e, t, d.DOUBLE_TAP) : this.didLongTap() && !1 !== n ? n = this.triggerHandlerForGesture(e, t, d.LONG_TAP) : this.didTap() && !1 !== n && (n = this.triggerHandlerForGesture(e, t, d.TAP)), t === d.PHASE_CANCEL && this.touchCancel(e), t === d.PHASE_END && (i && i.length || this.touchCancel(e)), n
        }, triggerHandlerForGesture: function (e, t, n) {
            var i, s = this.element, a = this.options;
            if (n === d.SWIPE) {
                if (s.trigger("swipeStatus", [t, this.direction || null, this.distance || 0, this.duration || 0, this.fingerCount, this.fingerData, this.currentDirection]), i = c.exec(a.onSwipeStatus, [e, t, this.direction || null, this.distance || 0, this.duration || 0, this.fingerCount, this.fingerData, this.currentDirection], s[0]), s.fire("swipestatus", {
                    event: e,
                    phase: t,
                    direction: this.direction,
                    distance: this.distance,
                    duration: this.duration,
                    fingerCount: this.fingerCount,
                    fingerData: this.fingerData,
                    currentDirection: this.currentDirection
                }), !1 === i) return !1;
                if (t === d.PHASE_END && this.validateSwipe()) {
                    if (clearTimeout(this.singleTapTimeout), clearTimeout(this.holdTimeout), s.trigger("swipe", [this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection]), i = c.exec(a.onSwipe, [e, this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection], s[0]), s.fire("swipe", {
                        event: e,
                        direction: this.direction,
                        distance: this.distance,
                        duration: this.duration,
                        fingerCount: this.fingerCount,
                        fingerData: this.fingerData,
                        currentDirection: this.currentDirection
                    }), !1 === i) return !1;
                    switch (this.direction) {
                        case d.LEFT:
                            s.trigger("swipeLeft", [this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection]), i = c.exec(a.onSwipeLeft, [e, this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection], s[0]), s.fire("swipeleft", {
                                event: e,
                                direction: this.direction,
                                distance: this.distance,
                                duration: this.duration,
                                fingerCount: this.fingerCount,
                                fingerData: this.fingerData,
                                currentDirection: this.currentDirection
                            });
                            break;
                        case d.RIGHT:
                            s.trigger("swipeRight", [this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection]), i = c.exec(a.onSwipeRight, [e, this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection], s[0]), s.fire("swiperight", {
                                event: e,
                                direction: this.direction,
                                distance: this.distance,
                                duration: this.duration,
                                fingerCount: this.fingerCount,
                                fingerData: this.fingerData,
                                currentDirection: this.currentDirection
                            });
                            break;
                        case d.UP:
                            s.trigger("swipeUp", [this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection]), i = c.exec(a.onSwipeUp, [e, this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection], s[0]), s.fire("swipeup", {
                                event: e,
                                direction: this.direction,
                                distance: this.distance,
                                duration: this.duration,
                                fingerCount: this.fingerCount,
                                fingerData: this.fingerData,
                                currentDirection: this.currentDirection
                            });
                            break;
                        case d.DOWN:
                            s.trigger("swipeDown", [this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection]), i = c.exec(a.onSwipeDown, [e, this.direction, this.distance, this.duration, this.fingerCount, this.fingerData, this.currentDirection], s[0]), s.fire("swipedown", {
                                event: e,
                                direction: this.direction,
                                distance: this.distance,
                                duration: this.duration,
                                fingerCount: this.fingerCount,
                                fingerData: this.fingerData,
                                currentDirection: this.currentDirection
                            })
                    }
                }
            }
            if (n === d.PINCH) {
                if (s.trigger("pinchStatus", [t, this.pinchDirection || null, this.pinchDistance || 0, this.duration || 0, this.fingerCount, this.fingerData, this.pinchZoom]), i = c.exec(a.onPinchStatus, [e, t, this.pinchDirection || null, this.pinchDistance || 0, this.duration || 0, this.fingerCount, this.fingerData, this.pinchZoom], s[0]), s.fire("pinchstatus", {
                    event: e,
                    phase: t,
                    direction: this.pinchDirection,
                    distance: this.pinchDistance,
                    duration: this.duration,
                    fingerCount: this.fingerCount,
                    fingerData: this.fingerData,
                    zoom: this.pinchZoom
                }), !1 === i) return !1;
                if (t === d.PHASE_END && this.validatePinch()) switch (this.pinchDirection) {
                    case d.IN:
                        s.trigger("pinchIn", [this.pinchDirection || null, this.pinchDistance || 0, this.duration || 0, this.fingerCount, this.fingerData, this.pinchZoom]), i = c.exec(a.onPinchIn, [e, this.pinchDirection || null, this.pinchDistance || 0, this.duration || 0, this.fingerCount, this.fingerData, this.pinchZoom], s[0]), s.fire("pinchin", {
                            event: e,
                            direction: this.pinchDirection,
                            distance: this.pinchDistance,
                            duration: this.duration,
                            fingerCount: this.fingerCount,
                            fingerData: this.fingerData,
                            zoom: this.pinchZoom
                        });
                        break;
                    case d.OUT:
                        s.trigger("pinchOut", [this.pinchDirection || null, this.pinchDistance || 0, this.duration || 0, this.fingerCount, this.fingerData, this.pinchZoom]), i = c.exec(a.onPinchOut, [e, this.pinchDirection || null, this.pinchDistance || 0, this.duration || 0, this.fingerCount, this.fingerData, this.pinchZoom], s[0]), s.fire("pinchout", {
                            event: e,
                            direction: this.pinchDirection,
                            distance: this.pinchDistance,
                            duration: this.duration,
                            fingerCount: this.fingerCount,
                            fingerData: this.fingerData,
                            zoom: this.pinchZoom
                        })
                }
            }
            return n === d.TAP ? t !== d.PHASE_CANCEL && t !== d.PHASE_END || (clearTimeout(this.singleTapTimeout), clearTimeout(this.holdTimeout), this.hasDoubleTap() && !this.inDoubleTap() ? (this.doubleTapStartTime = this.getTimeStamp(), this.singleTapTimeout = setTimeout(l.proxy(function () {
                this.doubleTapStartTime = null, i = c.exec(a.onTap, [e, e.target], s[0]), s.fire("tap", {
                    event: e,
                    target: e.target
                })
            }, this), a.doubleTapThreshold)) : (this.doubleTapStartTime = null, i = c.exec(a.onTap, [e, e.target], s[0]), s.fire("tap", {
                event: e,
                target: e.target
            }))) : n === d.DOUBLE_TAP ? t !== d.PHASE_CANCEL && t !== d.PHASE_END || (clearTimeout(this.singleTapTimeout), clearTimeout(this.holdTimeout), this.doubleTapStartTime = null, i = c.exec(a.onDoubleTap, [e, e.target], s[0]), s.fire("doubletap", {
                event: e,
                target: e.target
            })) : n === d.LONG_TAP && (t !== d.PHASE_CANCEL && t !== d.PHASE_END || (clearTimeout(this.singleTapTimeout), this.doubleTapStartTime = null, i = c.exec(a.onLongTap, [e, e.target], s[0]), s.fire("longtap", {
                event: e,
                target: e.target
            }))), i
        }, validateSwipeDistance: function () {
            var e = !0;
            return null !== this.options.threshold && (e = this.distance >= this.options.threshold), e
        }, didSwipeBackToCancel: function () {
            var e = this.options, t = !1;
            return null !== e.cancelThreshold && null !== this.direction && (t = this.getMaxDistance(this.direction) - this.distance >= e.cancelThreshold), t
        }, validatePinchDistance: function () {
            return null === this.options.pinchThreshold || this.pinchDistance >= this.options.pinchThreshold
        }, validateSwipeTime: function () {
            var e = this.options, e = !e.maxTimeThreshold || this.duration < e.maxTimeThreshold;
            return e
        }, validateDefaultEvent: function (e, t) {
            var n = this.options;
            if (!1 !== n.preventDefaultEvents) if (n.allowPageScroll === d.NONE) e.preventDefault(); else {
                var i = n.allowPageScroll === d.AUTO;
                switch (t) {
                    case d.LEFT:
                        (n.onSwipeLeft !== r.noop && i || !i && n.allowPageScroll.toLowerCase() !== d.HORIZONTAL) && e.preventDefault();
                        break;
                    case d.RIGHT:
                        (n.onSwipeRight !== r.noop && i || !i && n.allowPageScroll.toLowerCase() !== d.HORIZONTAL) && e.preventDefault();
                        break;
                    case d.UP:
                        (n.onSwipeUp !== r.noop && i || !i && n.allowPageScroll.toLowerCase() !== d.VERTICAL) && e.preventDefault();
                        break;
                    case d.DOWN:
                        (n.onSwipeDown !== r.noop && i || !i && n.allowPageScroll.toLowerCase() !== d.VERTICAL) && e.preventDefault()
                }
            }
        }, validatePinch: function () {
            var e = this.validateFingers(), t = this.validateEndPoint(), n = this.validatePinchDistance();
            return e && t && n
        }, hasPinches: function () {
            return !!(this.options.onPinchStatus || this.options.onPinchIn || this.options.onPinchOut)
        }, didPinch: function () {
            return !(!this.validatePinch() || !this.hasPinches())
        }, validateSwipe: function () {
            var e = this.validateSwipeTime(), t = this.validateSwipeDistance(), n = this.validateFingers(),
                i = this.validateEndPoint();
            return !this.didSwipeBackToCancel() && i && n && t && e
        }, hasSwipes: function () {
            var e = this.options;
            return !(e.onSwipe === r.noop && e.onSwipeStatus === r.noop && e.onSwipeLeft === r.noop && e.onSwipeRight === r.noop && e.onSwipeUp === r.noop && e.onSwipeDown === r.noop)
        }, didSwipe: function () {
            return !(!this.validateSwipe() || !this.hasSwipes())
        }, validateFingers: function () {
            return this.fingerCount === this.options.fingers || this.options.fingers === d.ALL_FINGERS || !d.SUPPORTS_TOUCH
        }, validateEndPoint: function () {
            return 0 !== this.fingerData[0].end.x
        }, hasTap: function () {
            return this.options.onTap !== r.noop
        }, hasDoubleTap: function () {
            return this.options.onDoubleTap !== r.noop
        }, hasLongTap: function () {
            return this.options.onLongTap !== r.noop
        }, validateDoubleTap: function () {
            if (null == this.doubleTapStartTime) return !1;
            var e = this.getTimeStamp();
            return this.hasDoubleTap() && e - this.doubleTapStartTime <= this.options.doubleTapThreshold
        }, inDoubleTap: function () {
            return this.validateDoubleTap()
        }, validateTap: function () {
            return (1 === this.fingerCount || !d.SUPPORTS_TOUCH) && (isNaN(this.distance) || this.distance < this.options.threshold)
        }, validateLongTap: function () {
            var e = this.options;
            return this.duration > e.longTapThreshold && this.distance < d.DOUBLE_TAP_THRESHOLD
        }, didTap: function () {
            return !(!this.validateTap() || !this.hasTap())
        }, didDoubleTap: function () {
            return !(!this.validateDoubleTap() || !this.hasDoubleTap())
        }, didLongTap: function () {
            return !(!this.validateLongTap() || !this.hasLongTap())
        }, startMultiFingerRelease: function (e) {
            this.previousTouchEndTime = this.getTimeStamp(), this.fingerCountAtRelease = e.touches.length + 1
        }, cancelMultiFingerRelease: function () {
            this.previousTouchEndTime = 0, this.fingerCountAtRelease = 0
        }, inMultiFingerRelease: function () {
            var e = !1;
            return this.previousTouchEndTime && this.getTimeStamp() - this.previousTouchEndTime <= this.options.fingerReleaseThreshold && (e = !0), e
        }, getTouchInProgress: function () {
            return !0 === this.element.data("intouch")
        }, setTouchInProgress: function (e) {
            var t = this.element;
            t && (!0 === e ? (t.on(this.MOVE_EV, l.proxy(this.touchMove, this)), t.on(this.END_EV, l.proxy(this.touchEnd, this)), this.LEAVE_EV && t.on(this.LEAVE_EV, l.proxy(this.touchLeave, this))) : (t.off(this.MOVE_EV), t.off(this.END_EV), this.LEAVE_EV && t.off(this.LEAVE_EV)), t.data("intouch", !0 === e))
        }, createFingerData: function (e, t) {
            var n = {start: {x: 0, y: 0}, last: {x: 0, y: 0}, end: {x: 0, y: 0}};
            return n.start.x = n.last.x = n.end.x = t.pageX || t.clientX, n.start.y = n.last.y = n.end.y = t.pageY || t.clientY, this.fingerData[e] = n
        }, updateFingerData: function (e) {
            var t = void 0 !== e.identifier ? e.identifier : 0, n = this.getFingerData(t);
            return null === n && (n = this.createFingerData(t, e)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
        }, getFingerData: function (e) {
            return this.fingerData[e] || null
        }, setMaxDistance: function (e, t) {
            e !== d.NONE && (t = Math.max(t, this.getMaxDistance(e)), this.maximumsMap[e].distance = t)
        }, getMaxDistance: function (e) {
            return this.maximumsMap[e] ? this.maximumsMap[e].distance : void 0
        }, createMaximumsData: function () {
            var e = {};
            return e[d.LEFT] = this.createMaximumVO(d.LEFT), e[d.RIGHT] = this.createMaximumVO(d.RIGHT), e[d.UP] = this.createMaximumVO(d.UP), e[d.DOWN] = this.createMaximumVO(d.DOWN), e
        }, createMaximumVO: function (e) {
            return {direction: e, distance: 0}
        }, calculateDuration: function () {
            return this.endTime - this.startTime
        }, calculateTouchesDistance: function (e, t) {
            var n = Math.abs(e.x - t.x), t = Math.abs(e.y - t.y);
            return Math.round(Math.sqrt(n * n + t * t))
        }, calculatePinchZoom: function (e, t) {
            return (t / e * 100).toFixed(2)
        }, calculatePinchDirection: function () {
            return this.pinchZoom < 1 ? d.OUT : d.IN
        }, calculateDistance: function (e, t) {
            return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
        }, calculateAngle: function (e, t) {
            var n = e.x - t.x, e = t.y - e.y, n = Math.atan2(e, n), n = Math.round(180 * n / Math.PI);
            return n < 0 && (n = 360 - Math.abs(n)), n
        }, calculateDirection: function (e, t) {
            if (this.comparePoints(e, t)) return d.NONE;
            t = this.calculateAngle(e, t);
            return t <= 45 && 0 <= t || t <= 360 && 315 <= t ? d.LEFT : 135 <= t && t <= 225 ? d.RIGHT : 45 < t && t < 135 ? d.DOWN : d.UP
        }, getTimeStamp: function () {
            return (new Date).getTime()
        }, getBounds: function (e) {
            var t = (e = l(e)).offset();
            return {left: t.left, right: t.left + e.outerWidth(), top: t.top, bottom: t.top + e.outerHeight()}
        }, isInBounds: function (e, t) {
            return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
        }, comparePoints: function (e, t) {
            return e.x === t.x && e.y === t.y
        }, removeListeners: function () {
            var e = this.element;
            e.off(this.START_EV), e.off(this.CANCEL_EV), e.off(this.MOVE_EV), e.off(this.END_EV), this.LEAVE_EV && e.off(this.LEAVE_EV), this.setTouchInProgress(!1)
        }, enable: function () {
            return this.disable(), this.element.on(this.START_EV, this.touchStart), this.element.on(this.CANCEL_EV, this.touchCancel), this.element
        }, disable: function () {
            return this.removeListeners(), this.element
        }, changeAttribute: function () {
        }, destroy: function () {
            this.removeListeners()
        }
    }), r.touch = d
}(Metro, m4q),function (t, a) {
    "use strict";
    var o = t.utils, n = {
        treeviewDeferred: 0,
        showChildCount: !1,
        duration: 100,
        onNodeClick: t.noop,
        onNodeDblClick: t.noop,
        onNodeDelete: t.noop,
        onNodeInsert: t.noop,
        onNodeClean: t.noop,
        onCheckClick: t.noop,
        onRadioClick: t.noop,
        onExpandNode: t.noop,
        onCollapseNode: t.noop,
        onTreeViewCreate: t.noop
    };
    t.treeViewSetup = function (e) {
        n = a.extend({}, n, e)
    }, window.metroTreeViewSetup, t.treeViewSetup(window.metroTreeViewSetup), t.Component("tree-view", {
        init: function (e, t) {
            return this._super(t, e, n), this
        }, _create: function () {
            var e = this, t = this.element;
            this._createTree(), this._createEvents(), a.each(t.find("input"), function () {
                a(this).is(":checked") && e._recheck(this)
            }), this._fireEvent("tree-view-create", {element: t})
        }, _createIcon: function (e) {
            var t = o.isTag(e) ? a(e) : a("<img src='' alt=''>").attr("src", e), e = a("<span>").addClass("icon");
            return e.html(t.outerHTML()), e
        }, _createCaption: function (e) {
            return a("<span>").addClass("caption").html(e)
        }, _createToggle: function () {
            return a("<span>").addClass("node-toggle")
        }, _createNode: function (e) {
            var t = a("<li>");
            return void 0 !== e.caption && t.prepend(this._createCaption(e.caption)), void 0 !== e.icon && t.prepend(this._createIcon(e.icon)), void 0 !== e.html && t.append(e.html), t
        }, _createTree: function () {
            var i = this, e = this.element, s = this.options, t = e.find("li");
            e.addClass("treeview"), a.each(t, function () {
                var e = a(this), t = e.data("caption"), n = e.data("icon");
                void 0 !== t && (0 < e.children("ul").length && !0 === s.showChildCount && (t += " (" + e.children("ul").children("li").length + ")"), e.prepend(i._createCaption(t))), void 0 !== n && e.prepend(i._createIcon(n)), 0 < e.children("ul").length && (e.addClass("tree-node"), e.append(i._createToggle()), !0 !== o.bool(e.attr("data-collapsed")) ? e.addClass("expanded") : e.children("ul").hide())
            })
        }, _createEvents: function () {
            var s = this, e = this.element;
            e.on(t.events.click, ".node-toggle", function (e) {
                var t = a(this).parent();
                s.toggleNode(t), e.preventDefault()
            }), e.on(t.events.click, "li > .caption", function (e) {
                var t = a(this).parent();
                s.current(t), s._fireEvent("node-click", {node: t[0]}), e.preventDefault()
            }), e.on(t.events.dblclick, "li > .caption", function (e) {
                var t = a(this).closest("li"), n = t.children(".node-toggle"), i = t.children("ul");
                (0 < n.length || 0 < i.length) && s.toggleNode(t), s._fireEvent("node-dbl-click", {node: t[0]}), e.preventDefault()
            }), e.on(t.events.click, "input[type=radio]", function () {
                var e = a(this), t = e.is(":checked"), n = e.closest("li");
                s.current(n), s._fireEvent("radio-click", {checked: t, check: e[0], node: n[0]})
            }), e.on(t.events.click, "input[type=checkbox]", function () {
                var e = a(this), t = e.is(":checked"), n = e.closest("li");
                s._recheck(e), s._fireEvent("check-click", {checked: t, check: e[0], node: n[0]})
            })
        }, _recheck: function (e) {
            var t, n = this.element, i = (e = a(e)).is(":checked"), s = e.closest("li");
            this.current(s), (e = e.closest("li").find("ul input[type=checkbox]")).attr("data-indeterminate", !1), e.prop("checked", i), e.trigger("change"), t = [], a.each(n.find("input[type=checkbox]"), function () {
                t.push(this)
            }), a.each(t.reverse(), function () {
                var e = a(this), t = e.closest("li").children("ul").find("input[type=checkbox]").length,
                    n = e.closest("li").children("ul").find("input[type=checkbox]").filter(function (e) {
                        return e.checked
                    }).length;
                0 < t && 0 === n && (e.attr("data-indeterminate", !1), e.prop("checked", !1), e.trigger("change")), 0 === n ? e.attr("data-indeterminate", !1) : 0 < n && n < t ? e.attr("data-indeterminate", !0) : t === n && (e.attr("data-indeterminate", !1), e.prop("checked", !0), e.trigger("change"))
            })
        }, current: function (e) {
            var t = this.element;
            if (void 0 === e) return t.find("li.current");
            t.find("li").removeClass("current"), e.addClass("current")
        }, toggleNode: function (e) {
            var t = a(e), n = this.options, i = !t.data("collapsed");
            t.toggleClass("expanded"), t.data("collapsed", i), e = !0 == i ? "slideUp" : "slideDown", i ? this._fireEvent("collapse-node", {node: t[0]}) : this._fireEvent("expand-node", {node: t[0]}), t.children("ul")[e](n.duration)
        }, addTo: function (e, t) {
            var n, i = this.element;
            return null === e ? n = i : 0 === (n = (e = a(e)).children("ul")).length && (n = a("<ul>").appendTo(e), this._createToggle().appendTo(e), e.addClass("expanded")), (t = this._createNode(t)).appendTo(n), this._fireEvent("node-insert", {
                node: t[0],
                parent: e ? e[0] : null
            }), t
        }, insertBefore: function (e, t) {
            var n = this._createNode(t);
            return o.isNull(e) ? this.addTo(e, t) : (e = a(e), n.insertBefore(e), this._fireEvent("node-insert", {
                node: n[0],
                parent: e ? e[0] : null
            }), n)
        }, insertAfter: function (e, t) {
            var n = this._createNode(t);
            return o.isNull(e) ? this.addTo(e, t) : (e = a(e), n.insertAfter(e), this._fireEvent("node-insert", {
                node: n[0],
                parent: e[0]
            }), n)
        }, del: function (e) {
            var t = this.element, n = (e = a(e)).closest("ul"), i = n.closest("li");
            this._fireEvent("node-delete", {node: e[0]}), e.remove(), 0 !== n.children().length || n.is(t) || (n.remove(), i.removeClass("expanded"), i.children(".node-toggle").remove())
        }, clean: function (e) {
            (e = a(e)).children("ul").remove(), e.removeClass("expanded"), e.children(".node-toggle").remove(), this._fireEvent("node-clean", {node: e[0]})
        }, changeAttribute: function () {
        }, destroy: function () {
            var e = this.element;
            return e.off(t.events.click, ".node-toggle"), e.off(t.events.click, "li > .caption"), e.off(t.events.dblclick, "li > .caption"), e.off(t.events.click, "input[type=radio]"), e.off(t.events.click, "input[type=checkbox]"), e
        }
    })
}(Metro, m4q),function (s, d) {
    "use strict";
    var u = s.utils, h = {
        required: function (e) {
            return Array.isArray(e) ? 0 < e.length && e : !!u.isValue(e) && e.trim()
        }, length: function (e, t) {
            return Array.isArray(e) ? e.length === parseInt(t) : !(!u.isValue(t) || isNaN(t) || t <= 0) && e.trim().length === parseInt(t)
        }, minlength: function (e, t) {
            return Array.isArray(e) ? e.length >= parseInt(t) : !(!u.isValue(t) || isNaN(t) || t <= 0) && e.trim().length >= parseInt(t)
        }, maxlength: function (e, t) {
            return Array.isArray(e) ? e.length <= parseInt(t) : !(!u.isValue(t) || isNaN(t) || t <= 0) && e.trim().length <= parseInt(t)
        }, min: function (e, t) {
            return !(!u.isValue(t) || isNaN(t)) && (!!this.number(e) && (!isNaN(e) && Number(e) >= Number(t)))
        }, max: function (e, t) {
            return !(!u.isValue(t) || isNaN(t)) && (!!this.number(e) && (!isNaN(e) && Number(e) <= Number(t)))
        }, email: function (e) {
            return /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i.test(e)
        }, domain: function (e) {
            return /^((xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(e)
        }, url: function (e) {
            return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
        }, date: function (e, t, n) {
            return u.isNull(t) ? "invalid date" !== String(new Date(e)).toLowerCase() : "invalid date" !== String(e.toDate(t, n)).toLowerCase()
        }, number: function (e) {
            return !isNaN(e)
        }, integer: function (e) {
            return u.isInt(e)
        }, float: function (e) {
            return u.isFloat(e)
        }, digits: function (e) {
            return /^\d+$/.test(e)
        }, hexcolor: function (e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
        }, color: function (e) {
            return !!u.isValue(e) && (!1 !== s.colors.color(e, s.colors.PALETTES.STANDARD) || s.colors.isColor(s.colors.parse(e)))
        }, pattern: function (e, t) {
            return !!u.isValue(e) && (!!u.isValue(t) && new RegExp(t).test(e))
        }, compare: function (e, t) {
            return e === t
        }, not: function (e, t) {
            return e !== t
        }, notequals: function (e, t) {
            return !u.isNull(e) && (!u.isNull(t) && e.trim() !== t.trim())
        }, equals: function (e, t) {
            return !u.isNull(e) && (!u.isNull(t) && e.trim() === t.trim())
        }, custom: function (e, t) {
            return !1 !== u.isFunc(t) && u.exec(t, [e])
        }, is_control: function (e) {
            return e.parent().hasClass("input") || e.parent().hasClass("select") || e.parent().hasClass("textarea") || e.parent().hasClass("checkbox") || e.parent().hasClass("switch") || e.parent().hasClass("radio") || e.parent().hasClass("spinner")
        }, reset_state: function (e) {
            e = d(e);
            (h.is_control(e) ? e.parent() : e).removeClass("invalid valid")
        }, set_valid_state: function (e) {
            e = d(e);
            (h.is_control(e) ? e.parent() : e).addClass("valid")
        }, set_invalid_state: function (e) {
            e = d(e);
            (h.is_control(e) ? e.parent() : e).addClass("invalid")
        }, reset: function (e) {
            var t = this;
            return d.each(d(e).find("[data-validate]"), function () {
                t.reset_state(this)
            }), this
        }, validate: function (e, i, t, n, s) {
            var a = !0, o = d(e),
                r = void 0 !== o.data("validate") ? String(o.data("validate")).split(" ").map(function (e) {
                    return e.trim()
                }) : [], l = [], c = 0 < o.closest("form").length;
            return 0 === r.length || (this.reset_state(o), o.attr("type") && "checkbox" === o.attr("type").toLowerCase() ? (!1 === (a = -1 === r.indexOf("required") || o.is(":checked")) && l.push("required"), void 0 !== i && (i.val += a ? 0 : 1)) : o.attr("type") && "radio" === o.attr("type").toLowerCase() ? (e = o.attr("name"), e = d("input[name=" + e.replace("[", "\\[").replace("]", "\\]") + "]:checked"), a = 0 < e.length, void 0 !== i && (i.val += a ? 0 : 1)) : d.each(r, function () {
                var e, t, n;
                !1 !== a && (n = (e = this.split("="))[0], e.shift(), e = e.join("="), -1 < ["compare", "equals", "notequals"].indexOf(n) && (e = c ? o[0].form.elements[e].value : d("[name=" + e + "]").val()), "date" === n && (e = o.attr("data-value-format"), t = o.attr("data-value-locale")), !1 === (a = !1 === u.isFunc(h[n]) || (!0 !== s && "required" !== n && "" === o.val().trim() || h[n](o.val(), e, t))) && l.push(n), void 0 !== i && (i.val += a ? 0 : 1))
            }), !1 === a ? (this.set_invalid_state(o), void 0 !== i && i.log.push({
                input: o[0],
                name: o.attr("name"),
                value: o.val(),
                funcs: r,
                errors: l
            }), void 0 !== n && u.exec(n, [o, o.val()], o[0])) : (this.set_valid_state(o), void 0 !== t && u.exec(t, [o, o.val()], o[0])), a)
        }
    };
    s.validator = h;
    var n = {
        validatorDeferred: 0,
        submitTimeout: 200,
        interactiveCheck: !1,
        clearInvalid: 0,
        requiredMode: !0,
        useRequiredClass: !0,
        onBeforeSubmit: s.noop_true,
        onSubmit: s.noop,
        onError: s.noop,
        onValidate: s.noop,
        onErrorForm: s.noop,
        onValidateForm: s.noop,
        onValidatorCreate: s.noop
    };
    s.validatorSetup = function (e) {
        n = d.extend({}, n, e)
    }, window.metroValidatorSetup, s.validatorSetup(window.metroValidatorSetup), s.Component("validator", {
        name: "Validator", init: function (e, t) {
            return this._super(t, e, n, {_onsubmit: null, _onreset: null, result: []}), this
        }, _create: function () {
            var e = this, t = this.element, n = this.options, i = t.find("[data-validate]");
            t.attr("novalidate", "novalidate"), d.each(i, function () {
                var e = d(this);
                -1 < e.data("validate").indexOf("required") && !0 === n.useRequiredClass && (h.is_control(e) ? e.parent() : e).addClass("required"), !0 === n.interactiveCheck && e.on(s.events.inputchange, function () {
                    h.validate(this, void 0, void 0, void 0, n.requiredMode)
                })
            }), this._onsubmit = null, (this._onreset = null) !== t[0].onsubmit && (this._onsubmit = t[0].onsubmit, t[0].onsubmit = null), null !== t[0].onreset && (this._onreset = t[0].onreset, t[0].onreset = null), t[0].onsubmit = function () {
                return e._submit()
            }, t[0].onreset = function () {
                return e._reset()
            }, this._fireEvent("validator-create", {element: t})
        }, _reset: function () {
            h.reset(this.element), null !== this._onsubmit && u.exec(this._onsubmit, null, this.element[0])
        }, _submit: function () {
            var e = this, t = this.element, n = this.options, i = this.elem, s = t.find("[data-validate]"),
                a = t.find("input[type=submit], button[type=submit]"), o = {val: 0, log: []}, r = d.serializeToArray(t);
            return 0 < a.length && a.attr("disabled", "disabled").addClass("disabled"), d.each(s, function () {
                h.validate(this, o, n.onValidate, n.onError, n.requiredMode)
            }), a.removeAttr("disabled").removeClass("disabled"), o.val += !1 === u.exec(n.onBeforeSubmit, [r], this.elem) ? 1 : 0, 0 === o.val ? (this._fireEvent("validate-form", {data: r}), setTimeout(function () {
                u.exec(n.onSubmit, [r], i), t.fire("formsubmit", {data: r}), null !== e._onsubmit && u.exec(e._onsubmit, null, i)
            }, n.submitTimeout)) : (this._fireEvent("error-form", {
                log: o.log,
                data: r
            }), 0 < n.clearInvalid && setTimeout(function () {
                d.each(s, function () {
                    var e = d(this);
                    (h.is_control(e) ? e.parent() : e).removeClass("invalid")
                })
            }, n.clearInvalid)), 0 === o.val
        }, changeAttribute: function () {
        }
    })
}(Metro, m4q),function (e, m) {
    "use strict";
    var a = e.utils, s = {
        duration: 4e3,
        animationDuration: null,
        transitionDuration: null,
        transition: "fade",
        animation: null,
        slides: [],
        shuffle: !1,
        align: "center",
        valign: "center",
        loop: !0,
        autoplay: !0,
        mute: !0,
        cover: !0,
        preload: !0,
        timer: !0,
        overlay: 2,
        color: null,
        volume: 1,
        onPlay: e.noop,
        onPause: e.noop,
        onEnd: e.noop,
        onWalk: e.noop,
        onNext: e.noop,
        onPrev: e.noop,
        onJump: e.noop,
        onVegasCreate: e.noop
    };
    e.vegasSetup = function (e) {
        s = m.extend({}, s, e)
    }, window.metroVegasSetup, e.vegasSetup(window.metroVegasSetup), e.Component("vegas", {
        videoCache: {}, init: function (e, t) {
            return this.transitions = ["fade", "fade2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsUp", "kenburnsDown", "kenburnsRight", "kenburnsLeft", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDownLeft", "kenburnsDownRight"], this.support = {
                objectFit: "objectFit" in document.body.style,
                video: !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
            }, this._super(t, e, s, {
                slide: 0,
                slides: null,
                total: 0,
                noshow: !1,
                paused: !1,
                ended: !1,
                timer: null,
                overlay: null,
                first: !0,
                timeout: !1
            }), this
        }, _create: function () {
            var e = this.element;
            this.slides = a.isObject(this.options.slides) || [], this.total = this.slides.length, this.noshow = this.total < 2, this.paused = !this.options.autoplay || this.noshow, this.options.shuffle && this.slides.shuffle(), this.options.preload && this._preload(), this._createStructure(), this._createEvents(), this._fireEvent("vegas-create", {element: e})
        }, _createStructure: function () {
            var e, t = this, n = this.element, i = this.options, s = "BODY" === n[0].tagName;
            s || (n.css("height", n.css("height")), e = m('<div class="vegas-wrapper">').css("overflow", n.css("overflow")).css("padding", n.css("padding")), n.css("padding") || e.css("padding-top", n.css("padding-top")).css("padding-bottom", n.css("padding-bottom")).css("padding-left", n.css("padding-left")).css("padding-right", n.css("padding-right")), n.children().appendTo(e), n.clear()), n.addClass("vegas-container"), s || n.append(e), i.timer && (this.timer = m('<div class="vegas-timer"><div class="vegas-timer-progress">'), n.append(this.timer)), i.overlay && (this.overlay = m('<div class="vegas-overlay">').addClass("overlay" + ("boolean" == typeof i.overlay || isNaN(i.overlay) ? 2 : +i.overlay)), n.append(this.overlay)), setTimeout(function () {
                a.exec(i.onPlay, null, n[0]), t._goto(t.slide)
            }, 1)
        }, _createEvents: function () {
        }, _preload: function () {
            for (var e = 0; e < this.slides.length; e++) {
                var t = this.slides[e];
                t.src && ((new Image).src = this.slides[e].src), t.video && (t.video instanceof Array ? this._video(t.video) : this._video(t.video.src))
            }
        }, _slideShow: function () {
            var e = this, t = this.options;
            1 < this.total && !this.ended && !this.paused && !this.noshow && (this.timeout = setTimeout(function () {
                e.next()
            }, t.duration))
        }, _timer: function (e) {
            var t = this, n = this.options;
            clearTimeout(this.timeout), this.timer && (this.timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.ended || this.paused || this.noshow || e && setTimeout(function () {
                t.timer.addClass("vegas-timer-running").find("div").css("transition-duration", +n.duration - 100 + "ms")
            }, 100))
        }, _fadeSoundIn: function (e, t) {
            var n = this.options;
            m.animate({el: e, draw: {volume: +n.volume}, dur: t})
        }, _fadeSoundOut: function (e, t) {
            m.animate({el: e, draw: {volume: 0}, dur: t})
        }, _video: function (e) {
            var t, n, i = e.toString();
            return this.videoCache[i] || (Array.isArray(e) || (e = [e]), (t = document.createElement("video")).preload = !0, e.forEach(function (e) {
                (n = document.createElement("source")).src = e, t.appendChild(n)
            }), this.videoCache[i] = t)
        }, _goto: function (e) {
            var t, n, i, s = this, a = this.element, o = this.options;
            void 0 === this.slides[e] && (e = 0), this.slide = e;
            var r, l, c, d, u = a.children(".vegas-slide"), h = this.slides[e], p = o.cover;

            function f() {
                s._timer(!0), setTimeout(function () {
                    u.css("transition", "all " + c + "ms").addClass("vegas-transition-" + r + "-out"), u.each(function () {
                        var e = u.find("video").get(0);
                        e && (e.volume = 1, s._fadeSoundOut(e, c))
                    }), t.css("transition", "all " + c + "ms").addClass("vegas-transition-" + r + "-in");
                    for (var e = 0; e < u.length - 1; e++) u.eq(e).remove();
                    s._fireEvent("walk", {slide: s.current(!0)}), s._slideShow()
                }, 100)
            }

            this.first && (this.first = !1), "repeat" !== p && (!0 === p ? p = "cover" : !1 === p && (p = "contain")), r = "random" === o.transition ? m.random(this.transitions) : o.transition || this.transitions[0], l = "random" === o.animation ? m.random(this.animations) : o.animation || this.animations[0], c = !o.transitionDuration || "auto" === o.transitionDuration || +o.transitionDuration > +o.duration ? +o.duration : +o.transitionDuration, d = !o.animationDuration || "auto" === o.animationDuration || +o.animationDuration > +o.duration ? +o.duration : +o.animationDuration, t = m("<div>").addClass("vegas-slide").addClass("vegas-transition-" + r), this.support.video && h.video ? ((n = h.video instanceof Array ? this._video(h.video) : this._video(h.video.src)).loop = h.video.loop || o.loop, n.muted = h.video.mute || o.mute, n.muted ? n.pause() : this._fadeSoundIn(n, c), e = m(n).addClass("vegas-video").css("background-color", o.color || "#000000"), this.support.objectFit ? e.css("object-position", o.align + " " + o.valign).css("object-fit", p).css("width", "100%").css("height", "100%") : "contain" === p && e.css("width", "100%").css("height", "100%"), t.append(e)) : (i = new Image, o = m("<div>").addClass("vegas-slide-inner").css({
                backgroundImage: 'url("' + h.src + '")',
                backgroundColor: o.color || "#000000",
                backgroundPosition: o.align + " " + o.valign
            }), "repeat" === p ? o.css("background-repeat", "repeat") : o.css("background-size", p), l && o.addClass("vegas-animation-" + l).css("animation-duration", d + "ms"), t.append(o)), u.length ? u.eq(u.length - 1).after(t) : a.prepend(t), u.css("transition", "all 0ms").each(function () {
                this.className = "vegas-slide", "VIDEO" === this.tagName && (this.className += " vegas-video"), r && (this.className += " vegas-transition-" + r, this.className += " vegas-transition-" + r + "-in")
            }), this._timer(!1), n ? (4 === n.readyState && (n.currentTime = 0), n.play(), f()) : (i.src = h.src, i.complete ? f() : i.onload = f)
        }, _end: function () {
            this.ended = this.options.autoplay, this._timer(!1), this._fireEvent("end", {slide: this.current(!0)})
        }, play: function () {
            this.paused && (this._fireEvent("play", {slide: this.current(!0)}), this.paused = !1, this.next())
        }, pause: function () {
            this._timer(!1), this.paused = !0, this._fireEvent("pause", {slide: this.current(!0)})
        }, toggle: function () {
            this.paused ? this.play() : this.pause()
        }, playing: function () {
            return !this.paused && !this.noshow
        }, current: function (e) {
            return e ? {slide: this.slide, data: this.slides[this.slide]} : this.slide
        }, jump: function (e) {
            if (e <= 0 || e > this.slides.length || e === this.slide + 1) return this;
            this.slide = e - 1, this._fireEvent("jump", {slide: this.current(!0)}), this._goto(this.slide)
        }, next: function () {
            var e = this.options;
            if (this.slide++, this.slide >= this.slides.length) {
                if (!e.loop) return this._end();
                this.slide = 0
            }
            this._fireEvent("next", {slide: this.current(!0)}), this._goto(this.slide)
        }, prev: function () {
            var e = this.options;
            if (this.slide--, this.slide < 0) {
                if (!e.loop) return this.slide++, this._end();
                this.slide = this.slides.length - 1
            }
            this._fireEvent("prev", {slide: this.current(!0)}), this._goto(this.slide)
        }, changeAttribute: function (e) {
            var t = this.element, n = this.options, i = m.camelCase(e.replace("data-", ""));
            "slides" === i ? (n.slides = t.attr("data-slides"), this.slides = a.isObject(n.slides) || [], this.total = this.slides.length, this.noshow = this.total < 2, this.paused = !this.options.autoplay || this.noshow) : void 0 !== s[i] && (n[i] = JSON.parse(t.attr(e)))
        }, destroy: function () {
            var e = this.element, t = this.options;
            return clearTimeout(this.timeout), e.removeClass("vegas-container"), e.find("> .vegas-slide").remove(), e.find("> .vegas-wrapper").children().appendTo(e), e.find("> .vegas-wrapper").remove(), t.timer && this.timer.remove(), t.overlay && this.overlay.remove(), e[0]
        }
    })
}(Metro, m4q),function (u, h) {
    "use strict";
    var o = u.utils, n = {
        videoDeferred: 0,
        src: null,
        poster: "",
        logo: "",
        logoHeight: 32,
        logoWidth: "auto",
        logoTarget: "",
        volume: .5,
        loop: !1,
        autoplay: !1,
        fullScreenMode: u.fullScreenMode.DESKTOP,
        aspectRatio: u.aspectRatio.HD,
        controlsHide: 3e3,
        showLoop: !0,
        showPlay: !0,
        showStop: !0,
        showMute: !0,
        showFull: !0,
        showStream: !0,
        showVolume: !0,
        showInfo: !0,
        loopIcon: "<span class='default-icon-loop'></span>",
        stopIcon: "<span class='default-icon-stop'></span>",
        playIcon: "<span class='default-icon-play'></span>",
        pauseIcon: "<span class='default-icon-pause'></span>",
        muteIcon: "<span class='default-icon-mute'></span>",
        volumeLowIcon: "<span class='default-icon-low-volume'></span>",
        volumeMediumIcon: "<span class='default-icon-medium-volume'></span>",
        volumeHighIcon: "<span class='default-icon-high-volume'></span>",
        screenMoreIcon: "<span class='default-icon-enlarge'></span>",
        screenLessIcon: "<span class='default-icon-shrink'></span>",
        onPlay: u.noop,
        onPause: u.noop,
        onStop: u.noop,
        onEnd: u.noop,
        onMetadata: u.noop,
        onTime: u.noop,
        onVideoPlayerCreate: u.noop
    };
    u.videoPlayerSetup = function (e) {
        n = h.extend({}, n, e)
    }, window.metroVideoPlayerSetup, u.videoPlayerSetup(window.metroVideoPlayerSetup), u.Component("video-player", {
        init: function (e, t) {
            return this._super(t, e, n, {
                fullscreen: !1,
                preloader: null,
                player: null,
                video: t,
                stream: null,
                volume: null,
                volumeBackup: 0,
                muted: !1,
                fullScreenInterval: !1,
                isPlaying: !1,
                id: o.elementId("video-player")
            }), this
        }, _create: function () {
            var e = this.element, t = this.options;
            !1 === u.fullScreenEnabled && (t.fullScreenMode = u.fullScreenMode.WINDOW), this._createPlayer(), this._createControls(), this._createEvents(), this._setAspectRatio(), !0 === t.autoplay && this.play(), this._fireEvent("video-player-create", {
                element: e,
                player: this.player
            })
        }, _createPlayer: function () {
            var e = this.element, t = this.options, n = this.video,
                i = h("<div>").addClass("media-player video-player " + e[0].className),
                s = h("<div>").addClass("preloader").appendTo(i),
                a = h("<a>").attr("href", t.logoTarget).addClass("logo").appendTo(i);
            i.insertBefore(e), e.appendTo(i), h.each(["muted", "autoplay", "controls", "height", "width", "loop", "poster", "preload"], function () {
                e.removeAttr(this)
            }), e.attr("preload", "auto"), "" !== t.poster && e.attr("poster", t.poster), n.volume = t.volume, s.activity({
                type: "cycle",
                style: "color"
            }), s.hide(), this.preloader = s, "" !== t.logo && h("<img>").css({
                height: t.logoHeight,
                width: t.logoWidth
            }).attr("src", t.logo).appendTo(a), null !== t.src && this._setSource(t.src), e[0].className = "", this.player = i
        }, _setSource: function (e) {
            var t = this.element;
            t.find("source").remove(), t.removeAttr("src"), Array.isArray(e) ? h.each(e, function () {
                void 0 !== this.src && h("<source>").attr("src", this.src).attr("type", void 0 !== this.type ? this.type : "").appendTo(t)
            }) : t.attr("src", e)
        }, _createControls: function () {
            var e, t = this, n = this.element, i = this.options, s = this.elem,
                a = h("<div>").addClass("controls").addClass(i.clsControls).insertAfter(n),
                o = h("<div>").addClass("stream").appendTo(a),
                r = h("<input>").addClass("stream-slider ultra-thin cycle-marker").appendTo(o),
                l = h("<div>").addClass("volume").appendTo(a),
                c = h("<input>").addClass("volume-slider ultra-thin cycle-marker").appendTo(l),
                d = h("<div>").addClass("info-box").appendTo(a);
            !0 !== i.showInfo && d.hide(), u.makePlugin(r, "slider", {
                clsMarker: "bg-red",
                clsHint: "bg-cyan fg-white",
                clsComplete: "bg-cyan",
                hint: !0,
                onStart: function () {
                    s.paused || s.pause()
                },
                onStop: function (e) {
                    0 < s.seekable.length && (s.currentTime = (t.duration * e / 100).toFixed(0)), s.paused && 0 < s.currentTime && s.play()
                }
            }), this.stream = r, !0 !== i.showStream && o.hide(), u.makePlugin(c, "slider", {
                clsMarker: "bg-red",
                clsHint: "bg-cyan fg-white",
                hint: !0,
                value: 100 * i.volume,
                onChangeValue: function (e) {
                    s.volume = e / 100
                }
            }), this.volume = c, !0 !== i.showVolume && l.hide(), !0 === i.showLoop && (e = h("<button>").attr("type", "button").addClass("button square loop").html(i.loopIcon).appendTo(a)), !0 === i.showPlay && h("<button>").attr("type", "button").addClass("button square play").html(i.playIcon).appendTo(a), !0 === i.showStop && h("<button>").attr("type", "button").addClass("button square stop").html(i.stopIcon).appendTo(a), !0 === i.showMute && h("<button>").attr("type", "button").addClass("button square mute").html(i.muteIcon).appendTo(a), !0 === i.showFull && h("<button>").attr("type", "button").addClass("button square full").html(i.screenMoreIcon).appendTo(a), !0 === i.loop && (e.addClass("active"), n.attr("loop", "loop")), this._setVolume(), i.muted && (t.volumeBackup = s.volume, u.getPlugin(t.volume, "slider").val(0), s.volume = 0), d.html("00:00 / 00:00")
        }, _createEvents: function () {
            var t = this, n = this.element, i = this.options, s = this.elem, a = this.player;
            n.on("loadstart", function () {
                t.preloader.show()
            }), n.on("loadedmetadata", function () {
                t.duration = s.duration.toFixed(0), t._setInfo(0, t.duration), o.exec(i.onMetadata, [s, a], n[0])
            }), n.on("canplay", function () {
                t._setBuffer(), t.preloader.hide()
            }), n.on("progress", function () {
                t._setBuffer()
            }), n.on("timeupdate", function () {
                var e = Math.round(100 * s.currentTime / t.duration);
                t._setInfo(s.currentTime, t.duration), u.getPlugin(t.stream, "slider").val(e), o.exec(i.onTime, [s.currentTime, t.duration, s, a], n[0])
            }), n.on("waiting", function () {
                t.preloader.show()
            }), n.on("loadeddata", function () {
            }), n.on("play", function () {
                a.find(".play").html(i.pauseIcon), o.exec(i.onPlay, [s, a], n[0]), t._onMouse()
            }), n.on("pause", function () {
                a.find(".play").html(i.playIcon), o.exec(i.onPause, [s, a], n[0]), t._offMouse()
            }), n.on("stop", function () {
                u.getPlugin(t.stream, "slider").val(0), o.exec(i.onStop, [s, a], n[0]), t._offMouse()
            }), n.on("ended", function () {
                u.getPlugin(t.stream, "slider").val(0), o.exec(i.onEnd, [s, a], n[0]), t._offMouse()
            }), n.on("volumechange", function () {
                t._setVolume()
            }), a.on(u.events.click, ".play", function () {
                s.paused ? t.play() : t.pause()
            }), a.on(u.events.click, ".stop", function () {
                t.stop()
            }), a.on(u.events.click, ".mute", function () {
                t._toggleMute()
            }), a.on(u.events.click, ".loop", function () {
                t._toggleLoop()
            }), a.on(u.events.click, ".full", function () {
                t.fullscreen = !t.fullscreen, a.find(".full").html(!0 === t.fullscreen ? i.screenLessIcon : i.screenMoreIcon), i.fullScreenMode === u.fullScreenMode.WINDOW ? !0 === t.fullscreen ? a.addClass("full-screen") : a.removeClass("full-screen") : !0 === t.fullscreen ? (u.requestFullScreen(s), !1 === t.fullScreenInterval && (t.fullScreenInterval = setInterval(function () {
                    !1 === u.inFullScreen() && (t.fullscreen = !1, clearInterval(t.fullScreenInterval), t.fullScreenInterval = !1, a.find(".full").html(i.screenMoreIcon))
                }, 1e3))) : u.exitFullScreen()
            }), h(window).on(u.events.keyup, function (e) {
                t.fullscreen && 27 === e.keyCode && a.find(".full").click()
            }, {ns: this.id}), h(window).on(u.events.resize, function () {
                t._setAspectRatio()
            }, {ns: this.id})
        }, _onMouse: function () {
            var t = this.options, n = this.player;
            n.on(u.events.enter, function () {
                var e = n.find(".controls");
                0 < t.controlsHide && "none" === e.style("display") && e.stop(!0).fadeIn(500, function () {
                    e.css("display", "flex")
                })
            }), n.on(u.events.leave, function () {
                var e = n.find(".controls");
                0 < t.controlsHide && 1 === parseInt(e.style("opacity")) && setTimeout(function () {
                    e.stop(!0).fadeOut(500)
                }, t.controlsHide)
            })
        }, _offMouse: function () {
            var e = this.player, t = this.options, n = e.find(".controls");
            e.off(u.events.enter), e.off(u.events.leave), 0 < t.controlsHide && "none" === n.style("display") && n.stop(!0).fadeIn(500, function () {
                n.css("display", "flex")
            })
        }, _toggleLoop: function () {
            var e = this.player.find(".loop");
            0 !== e.length && (e.toggleClass("active"), e.hasClass("active") ? this.element.attr("loop", "loop") : this.element.removeAttr("loop"))
        }, _toggleMute: function () {
            this.muted = !this.muted, !1 === this.muted ? this.video.volume = this.volumeBackup : (this.volumeBackup = this.video.volume, this.video.volume = 0), u.getPlugin(this.volume, "slider").val(!1 === this.muted ? 100 * this.volumeBackup : 0)
        }, _setInfo: function (e, t) {
            this.player.find(".info-box").html(o.secondsToFormattedString(Math.round(e)) + " / " + o.secondsToFormattedString(Math.round(t)))
        }, _setBuffer: function () {
            var e = this.video.buffered.length ? Math.round(Math.floor(this.video.buffered.end(0)) / Math.floor(this.video.duration) * 100) : 0;
            u.getPlugin(this.stream, "slider").buff(e)
        }, _setVolume: function () {
            var e = this.video, t = this.player, n = this.options, t = t.find(".mute"), e = 100 * e.volume;
            1 < e && e < 30 ? t.html(n.volumeLowIcon) : 30 <= e && e < 60 ? t.html(n.volumeMediumIcon) : 60 <= e && e <= 100 ? t.html(n.volumeHighIcon) : t.html(n.muteIcon)
        }, _setAspectRatio: function () {
            var e, t = this.player, n = this.options, i = t.outerWidth();
            switch (n.aspectRatio) {
                case u.aspectRatio.SD:
                    e = o.aspectRatioH(i, "4/3");
                    break;
                case u.aspectRatio.CINEMA:
                    e = o.aspectRatioH(i, "21/9");
                    break;
                default:
                    e = o.aspectRatioH(i, "16/9")
            }
            t.outerHeight(e)
        }, aspectRatio: function (e) {
            this.options.aspectRatio = e, this._setAspectRatio()
        }, play: function (e) {
            void 0 !== e && this._setSource(e), void 0 === this.element.attr("src") && 0 === this.element.find("source").length || (this.isPlaying = !0, this.video.play())
        }, pause: function () {
            this.isPlaying = !1, this.video.pause()
        }, resume: function () {
            this.video.paused && this.play()
        }, stop: function () {
            this.isPlaying = !1, this.video.pause(), this.video.currentTime = 0, u.getPlugin(this.stream, "slider").val(0), this._offMouse()
        }, setVolume: function (e) {
            if (void 0 === e) return this.video.volume;
            1 < e && (e /= 100), this.video.volume = e, u.getPlugin(this.volume[0], "slider").val(100 * e)
        }, loop: function () {
            this._toggleLoop()
        }, mute: function () {
            this._toggleMute()
        }, changeAspectRatio: function () {
            this.options.aspectRatio = this.element.attr("data-aspect-ratio"), this._setAspectRatio()
        }, changeSource: function () {
            var e = JSON.parse(this.element.attr("data-src"));
            this.play(e)
        }, changeVolume: function () {
            var e = this.element.attr("data-volume");
            this.setVolume(e)
        }, changeAttribute: function (e) {
            switch (e) {
                case"data-aspect-ratio":
                    this.changeAspectRatio();
                    break;
                case"data-src":
                    this.changeSource();
                    break;
                case"data-volume":
                    this.changeVolume()
            }
        }, destroy: function () {
            var e = this.element, t = this.player;
            return u.getPlugin(this.stream, "slider").destroy(), u.getPlugin(this.volume, "slider").destroy(), e.off("loadstart"), e.off("loadedmetadata"), e.off("canplay"), e.off("progress"), e.off("timeupdate"), e.off("waiting"), e.off("loadeddata"), e.off("play"), e.off("pause"), e.off("stop"), e.off("ended"), e.off("volumechange"), t.off(u.events.click, ".play"), t.off(u.events.click, ".stop"), t.off(u.events.click, ".mute"), t.off(u.events.click, ".loop"), t.off(u.events.click, ".full"), h(window).off(u.events.keyup, {ns: this.id}), h(window).off(u.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q),function (e, i) {
    "use strict";
    var s = e.utils,
        n = {onViewport: e.noop, onViewportEnter: e.noop, onViewportLeave: e.noop, onViewportCheckCreate: e.noop};
    e.viewportCheckSetup = function (e) {
        n = i.extend({}, n, e)
    }, window.metroViewportCheckSetup, e.viewportCheckSetup(window.metroViewportCheckSetup), e.Component("viewport-check", {
        init: function (e, t) {
            return this._super(t, e, n, {inViewport: !1, id: s.elementId("viewport-check")}), this
        }, _create: function () {
            this.inViewport = s.inViewport(this.elem), this._createEvents(), this._fireEvent("viewport-check-create")
        }, _createEvents: function () {
            var t = this, n = this.elem;
            i(window).on(e.events.scroll, function () {
                var e = t.inViewport;
                t.inViewport = s.inViewport(n), e !== t.inViewport && (t.inViewport ? t._fireEvent("viewport-enter") : t._fireEvent("viewport-leave")), t._fireEvent("viewport", {state: t.inViewport})
            }, {ns: t.id})
        }, state: function () {
            return this.inViewport
        }, destroy: function () {
            return i(window).off(e.events.scroll, {ns: this.id}), this.element
        }
    })
}(Metro, m4q),function (c, d) {
    "use strict";
    var u = c.utils, n = {
        windowDeferred: 0,
        hidden: !1,
        width: "auto",
        height: "auto",
        btnClose: !0,
        btnMin: !0,
        btnMax: !0,
        draggable: !0,
        dragElement: ".window-caption .icon, .window-caption .title",
        dragArea: "parent",
        shadow: !1,
        icon: "",
        title: "Window",
        content: null,
        resizable: !0,
        overlay: !1,
        overlayColor: "transparent",
        overlayAlpha: .5,
        modal: !1,
        position: "absolute",
        checkEmbed: !0,
        top: "auto",
        left: "auto",
        place: "auto",
        closeAction: c.actions.REMOVE,
        customButtons: null,
        clsCustomButton: "",
        clsCaption: "",
        clsContent: "",
        clsWindow: "",
        _runtime: !1,
        minWidth: 0,
        minHeight: 0,
        maxWidth: 0,
        maxHeight: 0,
        onDragStart: c.noop,
        onDragStop: c.noop,
        onDragMove: c.noop,
        onCaptionDblClick: c.noop,
        onCloseClick: c.noop,
        onMaxClick: c.noop,
        onMinClick: c.noop,
        onResizeStart: c.noop,
        onResizeStop: c.noop,
        onResize: c.noop,
        onWindowCreate: c.noop,
        onShow: c.noop,
        onWindowDestroy: c.noop,
        onCanClose: c.noop_true,
        onClose: c.noop
    };
    c.windowSetup = function (e) {
        n = d.extend({}, n, e)
    }, window.metroWindowSetup, c.windowSetup(window.metroWindowSetup), c.Component("window", {
        init: function (e, t) {
            return this._super(t, e, n, {
                win: null,
                overlay: null,
                position: {top: 0, left: 0},
                hidden: !1,
                content: null
            }), this
        }, _create: function () {
            var e, t = this, n = this.element, i = this.options,
                s = "parent" === i.dragArea ? n.parent() : d(i.dragArea);
            !0 === i.modal && (i.btnMax = !1, i.btnMin = !1, i.resizable = !1), u.isNull(i.content) || (u.isUrl(i.content) && u.isVideoUrl(i.content) ? (i.content = u.embedUrl(i.content), n.css({height: "100%"})) : !u.isQ(i.content) && u.isFunc(i.content) && (i.content = u.exec(i.content)), 0 === (e = d(i.content)).length ? n.appendText(i.content) : n.append(e)), i.content = n, !0 === i._runtime && this._runtime(n, "window"), (e = this._window(i)).addClass("no-visible"), s.append(e), !0 === i.overlay && ((s = this._overlay()).appendTo(e.parent()), this.overlay = s), this.win = e, this._fireEvent("window-create", {
                win: this.win[0],
                element: n
            }), setTimeout(function () {
                t._setPosition(), !0 !== i.hidden && t.win.removeClass("no-visible"), t._fireEvent("show", {
                    win: t.win[0],
                    element: n
                })
            }, 100)
        }, _setPosition: function () {
            var e, t, n, i, s = this.options, a = this.win, o = "parent" === s.dragArea ? a.parent() : d(s.dragArea),
                r = o.height() / 2 - a[0].offsetHeight / 2, l = o.width() / 2 - a[0].offsetWidth / 2;
            if ("auto" !== s.place) {
                switch (s.place.toLowerCase()) {
                    case"top-left":
                        t = e = 0, i = n = "auto";
                        break;
                    case"top-center":
                        e = 0, t = l, i = n = "auto";
                        break;
                    case"top-right":
                        n = e = 0, i = t = "auto";
                        break;
                    case"right-center":
                        e = r, n = 0, i = t = "auto";
                        break;
                    case"bottom-right":
                        n = i = 0, e = t = "auto";
                        break;
                    case"bottom-center":
                        i = 0, t = l, e = n = "auto";
                        break;
                    case"bottom-left":
                        t = i = 0, e = n = "auto";
                        break;
                    case"left-center":
                        e = r, t = 0, i = n = "auto";
                        break;
                    default:
                        e = r, t = l, n = i = "auto"
                }
                a.css({top: e, left: t, bottom: i, right: n})
            }
        }, _window: function (e) {
            var t, n, i, s, a = this, o = e.width, r = e.height, l = d("<div>").addClass("window");
            return !0 === e.modal && l.addClass("modal"), t = d("<div>").addClass("window-caption"), n = d("<div>").addClass("window-content"), l.append(t), l.append(n), !0 === e.status && (s = d("<div>").addClass("window-status"), l.append(s)), !0 === e.shadow && l.addClass("win-shadow"), u.isValue(e.icon) && d("<span>").addClass("icon").html(e.icon).appendTo(t), d("<span>").addClass("title").html(u.isValue(e.title) ? e.title : "&nbsp;").appendTo(t), u.isNull(e.content) || (u.isQ(e.content) ? e.content.appendTo(n) : n.html(e.content)), (i = d("<div>").addClass("buttons")).appendTo(t), !0 === e.btnMax && d("<span>").addClass("button btn-max sys-button").appendTo(i), !0 === e.btnMin && d("<span>").addClass("button btn-min sys-button").appendTo(i), !0 === e.btnClose && d("<span>").addClass("button btn-close sys-button").appendTo(i), u.isValue(e.customButtons) && (!(s = []) !== u.isObject(e.customButtons) && (e.customButtons = u.isObject(e.customButtons)), "string" == typeof e.customButtons && -1 < e.customButtons.indexOf("{") ? s = JSON.parse(e.customButtons) : "object" == typeof e.customButtons && 0 < u.objectLength(e.customButtons) ? s = e.customButtons : console.warn("Unknown format for custom buttons"), d.each(s, function () {
                var n = d("<span>");
                n.addClass("button btn-custom").addClass(e.clsCustomButton).addClass(this.cls).attr("tabindex", -1).html(this.html), this.attr && "object" == typeof this.attr && d.each(this.attr, function (e, t) {
                    n.attr(d.dashedName(e), t)
                }), n.data("action", this.onclick), i.prepend(n)
            })), t.on(c.events.stop, ".btn-custom", function (e) {
                var t;
                u.isRightMouse(e) || (e = (t = d(this)).data("action"), u.exec(e, [t], this))
            }), l.attr("id", void 0 === e.id ? u.elementId("window") : e.id), l.on(c.events.dblclick, ".window-caption", function (e) {
                a.maximized(e)
            }), t.on(c.events.click, ".btn-max, .btn-min, .btn-close", function (e) {
                var t;
                u.isRightMouse(e) || ((t = d(e.target)).hasClass("btn-max") && a.maximized(e), t.hasClass("btn-min") && a.minimized(e), t.hasClass("btn-close") && a.close(e))
            }), !0 === e.draggable && c.makePlugin(l, "draggable", {
                dragContext: l[0],
                dragElement: e.dragElement,
                dragArea: e.dragArea,
                onDragStart: e.onDragStart,
                onDragStop: e.onDragStop,
                onDragMove: e.onDragMove
            }), l.addClass(e.clsWindow), t.addClass(e.clsCaption), n.addClass(e.clsContent), 0 === e.minWidth && (e.minWidth = 34, d.each(i.children(".btn-custom"), function () {
                e.minWidth += u.hiddenElementSize(this).width
            }), e.btnMax && (e.minWidth += 34), e.btnMin && (e.minWidth += 34), e.btnClose && (e.minWidth += 34)), 0 < e.minWidth && !isNaN(e.width) && e.width < e.minWidth && (o = e.minWidth), 0 < e.minHeight && !isNaN(e.height) && e.height > e.minHeight && (r = e.minHeight), !0 === e.resizable && (d("<span>").addClass("resize-element").appendTo(l), l.addClass("resizable"), c.makePlugin(l, "resizable", {
                minWidth: e.minWidth,
                minHeight: e.minHeight,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                resizeElement: ".resize-element",
                onResizeStart: e.onResizeStart,
                onResizeStop: e.onResizeStop,
                onResize: e.onResize
            })), l.css({width: o, height: r, position: e.position, top: e.top, left: e.left}), l
        }, _overlay: function () {
            var e = this.options, t = d("<div>");
            return t.addClass("overlay"), "transparent" === e.overlayColor ? t.addClass("transparent") : t.css({background: c.colors.toRGBA(e.overlayColor, e.overlayAlpha)}), t
        }, width: function (e) {
            var t = this.win;
            return u.isValue(e) ? (t.css("width", parseInt(e)), this) : t.width()
        }, height: function (e) {
            var t = this.win;
            return u.isValue(e) ? (t.css("height", parseInt(e)), this) : t.height()
        }, maximized: function (e) {
            var t = this.win, n = this.options, e = d(e.currentTarget);
            n.btnMax && (t.removeClass("minimized"), t.toggleClass("maximized")), e.hasClass && e.hasClass("window-caption") ? this._fireEvent("caption-dbl-click", {win: t[0]}) : this._fireEvent("max-click", {win: t[0]})
        }, minimized: function () {
            var e = this.win;
            this.options.btnMin && (e.removeClass("maximized"), e.toggleClass("minimized")), this._fireEvent("min-click", {win: e[0]})
        }, close: function () {
            var e = this, t = this.win, n = this.options;
            if (!1 === u.exec(n.onCanClose, [t])) return !1;
            var i = 0;
            n.onClose !== c.noop && (i = 500), this._fireEvent("close", {win: t[0]}), setTimeout(function () {
                !0 === n.modal && t.siblings(".overlay").remove(), e._fireEvent("close-click", {win: t[0]}), n.closeAction === c.actions.REMOVE ? (e._fireEvent("window-destroy", {win: t[0]}), t.remove()) : e.hide()
            }, i)
        }, hide: function () {
            var e = this.win;
            e.css({display: "none"}), this._fireEvent("hide", {win: e[0]})
        }, show: function () {
            var e = this.win;
            e.removeClass("no-visible").css({display: "flex"}), this._fireEvent("show", {win: e[0]})
        }, toggle: function () {
            "none" === this.win.css("display") || this.win.hasClass("no-visible") ? this.show() : this.hide()
        }, isOpen: function () {
            return this.win.hasClass("no-visible")
        }, min: function (e) {
            e ? this.win.addClass("minimized") : this.win.removeClass("minimized")
        }, max: function (e) {
            e ? this.win.addClass("maximized") : this.win.removeClass("maximized")
        }, changeClass: function (e) {
            var t = this.element, n = this.win, i = this.options;
            "data-cls-window" === e && (n[0].className = "window " + (i.resizable ? " resizable " : " ") + t.attr("data-cls-window")), "data-cls-caption" === e && (n.find(".window-caption")[0].className = "window-caption " + t.attr("data-cls-caption")), "data-cls-content" === e && (n.find(".window-content")[0].className = "window-content " + t.attr("data-cls-content"))
        }, toggleShadow: function () {
            var e = this.element, t = this.win;
            !0 === JSON.parse(e.attr("data-shadow")) ? t.addClass("win-shadow") : t.removeClass("win-shadow")
        }, setContent: function (e) {
            var t = this.element, n = this.win, t = u.isValue(e) ? e : t.attr("data-content"),
                t = !u.isQ(t) && u.isFunc(t) ? u.exec(t) : u.isQ(t) ? t.html() : t;
            n.find(".window-content").html(t)
        }, setTitle: function (e) {
            var t = this.element, n = this.win, t = u.isValue(e) ? e : t.attr("data-title");
            n.find(".window-caption .title").html(t)
        }, setIcon: function (e) {
            var t = this.element, n = this.win, t = u.isValue(e) ? e : t.attr("data-icon");
            n.find(".window-caption .icon").html(t)
        }, getIcon: function () {
            return this.win.find(".window-caption .icon").html()
        }, getTitle: function () {
            return this.win.find(".window-caption .title").html()
        }, toggleDraggable: function (e) {
            var t = this.win, e = u.bool(e), t = c.getPlugin(t, "draggable");
            !0 === e ? t.on() : t.off()
        }, toggleResizable: function (e) {
            var t = this.win, n = u.bool(e), e = c.getPlugin(t, "resizable");
            !0 === n ? (e.on(), t.find(".resize-element").removeClass("resize-element-disabled")) : (e.off(), t.find(".resize-element").addClass("resize-element-disabled"))
        }, changePlace: function (e) {
            var t = this.element, n = this.win, t = u.isValue(e) ? e : t.attr("data-place");
            n.addClass(t)
        }, pos: function (e, t) {
            return this.win.css({top: e, left: t}), this
        }, top: function (e) {
            return this.win.css({top: e}), this
        }, left: function (e) {
            return this.win.css({left: e}), this
        }, changeAttribute: function (e, t) {
            switch (e) {
                case"data-btn-close":
                case"data-btn-min":
                case"data-btn-max":
                    !function (e, t) {
                        var n = this.win, i = n.find(".btn-close"), s = n.find(".btn-min"), a = n.find(".btn-max"),
                            o = u.bool(t) ? "show" : "hide";
                        switch (e) {
                            case"data-btn-close":
                                i[o]();
                                break;
                            case"data-btn-min":
                                s[o]();
                                break;
                            case"data-btn-max":
                                a[o]()
                        }
                    }(e, t);
                    break;
                case"data-width":
                case"data-height":
                    !function (e, t) {
                        var n = this.win;
                        "data-width" === e && n.css("width", +t), "data-height" === e && n.css("height", +t)
                    }(e, t);
                    break;
                case"data-cls-window":
                case"data-cls-caption":
                case"data-cls-content":
                    this.changeClass(e);
                    break;
                case"data-shadow":
                    this.toggleShadow();
                    break;
                case"data-icon":
                    this.setIcon();
                    break;
                case"data-title":
                    this.setTitle();
                    break;
                case"data-content":
                    this.setContent();
                    break;
                case"data-draggable":
                    this.toggleDraggable(t);
                    break;
                case"data-resizable":
                    this.toggleResizable(t);
                    break;
                case"data-top":
                case"data-left":
                    !function (e, t) {
                        var n, i = this.win;
                        if ("data-top" === e) {
                            if (n = parseInt(t), !isNaN(n)) return;
                            i.css("top", n)
                        }
                        "data-left" === e && (n = parseInt(t), isNaN(n) && i.css("left", n))
                    }(e, t);
                    break;
                case"data-place":
                    this.changePlace()
            }
        }, destroy: function () {
            return this.element
        }
    }), c.window = {
        isWindow: function (e) {
            return u.isMetroObject(e, "window")
        }, min: function (e, t) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").min(t)
        }, max: function (e, t) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").max(t)
        }, show: function (e) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").show()
        }, hide: function (e) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").hide()
        }, toggle: function (e) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").toggle()
        }, isOpen: function (e) {
            return !!this.isWindow(e) && c.getPlugin(e, "window").isOpen()
        }, close: function (e) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").close()
        }, pos: function (e, t, n) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").pos(t, n)
        }, top: function (e, t) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").top(t)
        }, left: function (e, t) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").left(t)
        }, width: function (e, t) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").width(t)
        }, height: function (e, t) {
            if (!this.isWindow(e)) return !1;
            c.getPlugin(e, "window").height(t)
        }, create: function (e, t) {
            t = d("<div>").appendTo(d(t || "body")), e = d.extend({_runtime: !0}, e || {});
            return c.makePlugin(t, "window", e)
        }
    }
}(Metro, m4q),function (i, c) {
    "use strict";
    var d = i.utils, n = {
        wizardDeferred: 0,
        start: 1,
        finish: 0,
        iconHelp: "<span class='default-icon-help'></span>",
        iconPrev: "<span class='default-icon-left-arrow'></span>",
        iconNext: "<span class='default-icon-right-arrow'></span>",
        iconFinish: "<span class='default-icon-check'></span>",
        buttonMode: "cycle",
        buttonOutline: !0,
        duration: 300,
        clsWizard: "",
        clsActions: "",
        clsHelp: "",
        clsPrev: "",
        clsNext: "",
        clsFinish: "",
        onPage: i.noop,
        onNextPage: i.noop,
        onPrevPage: i.noop,
        onFirstPage: i.noop,
        onLastPage: i.noop,
        onFinishPage: i.noop,
        onHelpClick: i.noop,
        onPrevClick: i.noop,
        onNextClick: i.noop,
        onFinishClick: i.noop,
        onBeforePrev: i.noop_true,
        onBeforeNext: i.noop_true,
        onWizardCreate: i.noop
    };
    i.wizardSetup = function (e) {
        n = c.extend({}, n, e)
    }, window.metroWizardSetup, i.wizardSetup(window.metroWizardSetup), i.Component("wizard", {
        init: function (e, t) {
            return this._super(t, e, n, {id: d.elementId("wizard")}), this
        }, _create: function () {
            var e = this.element;
            this._createWizard(), this._createEvents(), this._fireEvent("wizard-create", {element: e})
        }, _createWizard: function () {
            var e, t = this.element, n = this.options;
            t.addClass("wizard").addClass(n.view).addClass(n.clsWizard), e = c("<div>").addClass("action-bar").addClass(n.clsActions).appendTo(t);
            t = "button" === n.buttonMode ? "" : n.buttonMode;
            !0 === n.buttonOutline && (t += " outline"), !1 !== n.iconHelp && c("<button>").attr("type", "button").addClass("button wizard-btn-help").addClass(t).addClass(n.clsHelp).html(d.isTag(n.iconHelp) ? n.iconHelp : c("<img>").attr("src", n.iconHelp)).appendTo(e), !1 !== n.iconPrev && c("<button>").attr("type", "button").addClass("button wizard-btn-prev").addClass(t).addClass(n.clsPrev).html(d.isTag(n.iconPrev) ? n.iconPrev : c("<img>").attr("src", n.iconPrev)).appendTo(e), !1 !== n.iconNext && c("<button>").attr("type", "button").addClass("button wizard-btn-next").addClass(t).addClass(n.clsNext).html(d.isTag(n.iconNext) ? n.iconNext : c("<img>").attr("src", n.iconNext)).appendTo(e), !1 !== n.iconFinish && c("<button>").attr("type", "button").addClass("button wizard-btn-finish").addClass(t).addClass(n.clsFinish).html(d.isTag(n.iconFinish) ? n.iconFinish : c("<img>").attr("src", n.iconFinish)).appendTo(e), this.toPage(n.start), this._setHeight()
        }, _setHeight: function () {
            var e = this.element, t = e.children("section"), n = 0;
            t.children(".page-content").css("max-height", "none"), c.each(t, function () {
                var e = c(this).height();
                n < parseInt(e) && (n = e)
            }), e.height(n)
        }, _createEvents: function () {
            var t = this, n = this.element;
            n.on(i.events.click, ".wizard-btn-help", function () {
                var e = n.children("section").get(t.current - 1);
                t._fireEvent("help-click", {index: t.current, page: e})
            }), n.on(i.events.click, ".wizard-btn-prev", function () {
                t.prev();
                var e = n.children("section").get(t.current - 1);
                t._fireEvent("prev-click", {index: t.current, page: e})
            }), n.on(i.events.click, ".wizard-btn-next", function () {
                t.next();
                var e = n.children("section").get(t.current - 1);
                t._fireEvent("next-click", {index: t.current, page: e})
            }), n.on(i.events.click, ".wizard-btn-finish", function () {
                var e = n.children("section").get(t.current - 1);
                t._fireEvent("finish-click", {index: t.current, page: e})
            }), n.on(i.events.click, ".complete", function () {
                var e = c(this).index() + 1;
                t.toPage(e)
            }), c(window).on(i.events.resize, function () {
                t._setHeight()
            }, {ns: this.id})
        }, next: function () {
            var e = this.element, t = this.options, n = e.children("section"),
                i = c(e.children("section").get(this.current - 1));
            this.current + 1 > n.length || !1 === d.exec(t.onBeforeNext, [this.current, i, e]) || (this.current++, this.toPage(this.current), i = c(e.children("section").get(this.current - 1)), this._fireEvent("next-page", {
                index: this.current,
                page: i[0]
            }))
        }, prev: function () {
            var e = this.element, t = this.options, n = c(e.children("section").get(this.current - 1));
            this.current - 1 != 0 && !1 !== d.exec(t.onBeforePrev, [this.current, n, e]) && (this.current--, this.toPage(this.current), n = c(e.children("section").get(this.current - 1)), this._fireEvent("prev-page", {
                index: this.current,
                page: n[0]
            }))
        }, last: function () {
            var e = this.element;
            this.toPage(e.children("section").length), e = c(e.children("section").get(this.current - 1)), this._fireEvent("last-page", {
                index: this.current,
                page: e[0]
            })
        }, first: function () {
            var e = this.element;
            this.toPage(1), e = c(e.children("section").get(0)), this._fireEvent("first-page", {
                index: this.current,
                page: e[0]
            })
        }, toPage: function (e) {
            var t, n, i, s = this.element, a = this.options, o = c(s.children("section").get(e - 1)),
                r = s.children("section"), l = s.find(".action-bar");
            0 !== o.length && (t = s.find(".wizard-btn-finish").addClass("disabled"), n = s.find(".wizard-btn-next").addClass("disabled"), i = s.find(".wizard-btn-prev").addClass("disabled"), this.current = e, s.children("section").removeClass("complete current").removeClass(a.clsCurrent).removeClass(a.clsComplete), o.addClass("current").addClass(a.clsCurrent), o.prevAll().addClass("complete").addClass(a.clsComplete), e = 0 === s.children("section.complete").length ? 0 : parseInt(d.getStyleOne(s.children("section.complete")[0], "border-left-width")), l.animate({
                draw: {left: s.children("section.complete").length * e + 41},
                dur: a.duration
            }), (this.current === r.length || 0 < a.finish && this.current >= a.finish) && t.removeClass("disabled"), 0 < parseInt(a.finish) && this.current === parseInt(a.finish) && this._fireEvent("finish-page", {
                index: this.current,
                page: o[0]
            }), this.current < r.length && n.removeClass("disabled"), 1 < this.current && i.removeClass("disabled"), this._fireEvent("page", {
                index: this.current,
                page: o[0]
            }))
        }, changeAttribute: function () {
        }, destroy: function () {
            var e = this.element;
            return e.off(i.events.click, ".wizard-btn-help"), e.off(i.events.click, ".wizard-btn-prev"), e.off(i.events.click, ".wizard-btn-next"), e.off(i.events.click, ".wizard-btn-finish"), e.off(i.events.click, ".complete"), c(window).off(i.events.resize, {ns: this.id}), e
        }
    })
}(Metro, m4q);
//# sourceMappingURL=metro.min.js.map