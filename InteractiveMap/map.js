!
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t.YZWF = t.YZWF || {},
    t.YZWF.eorzeaMap = {}))
} (this,
function(t) {
    "use strict";
    var n = function(t, e) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        })(t, e)
    };
    function i(t, e) {
        function i() {
            this.constructor = t
        }
        n(t, e),
        t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    }
    function d(s, r, a, h) {
        return new(a || (a = Promise))(function(t, e) {
            function i(t) {
                try {
                    o(h.next(t))
                } catch(t) {
                    e(t)
                }
            }
            function n(t) {
                try {
                    o(h["throw"](t))
                } catch(t) {
                    e(t)
                }
            }
            function o(e) {
                e.done ? t(e.value) : new a(function(t) {
                    t(e.value)
                }).then(i, n)
            }
            o((h = h.apply(s, r || [])).next())
        })
    }
    function p(i, n) {
        var o, s, r, t, a = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            "throw": e(1),
            "return": e(2)
        },
        "function" == typeof Symbol && (t[Symbol.iterator] = function() {
            return this
        }),
        t;
        function e(e) {
            return function(t) {
                return function(e) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, s && (r = 2 & e[0] ? s["return"] : e[0] ? s["throw"] || ((r = s["return"]) && r.call(s), 0) : s.next) && !(r = r.call(s, e[1])).done) return r;
                        switch (s = 0, r && (e = [2 & e[0], r.value]), e[0]) {
                        case 0:
                        case 1:
                            r = e;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: e[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            s = e[1],
                            e = [0];
                            continue;
                        case 7:
                            e = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (! (r = 0 < (r = a.trys).length && r[r.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === e[0] && (!r || e[1] > r[0] && e[1] < r[3])) {
                                a.label = e[1];
                                break
                            }
                            if (6 === e[0] && a.label < r[1]) {
                                a.label = r[1],
                                r = e;
                                break
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2],
                                a.ops.push(e);
                                break
                            }
                            r[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        e = n.call(i, a)
                    } catch(t) {
                        e = [6, t],
                        s = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                } ([e, t])
            }
        }
    }
    var e, _ = (function(i, t) { !
        function(t) {
            var e, r = "function",
            a = "isNode",
            h = function(t, e) {
                return typeof t === e
            },
            u = function(e, t) {
                null !== t && (Array.isArray(t) ? t.map(function(t) {
                    return u(e, t)
                }) : (l[a](t) || (t = document.createTextNode(t)), e.appendChild(t)))
            };
            function l(t, e) {
                var i, n, o = arguments,
                s = 1;
                if (t = l.isElement(t) ? t: document.createElement(t), h(e, "object") && !l[a](e) && !Array.isArray(e)) for (i in s++, e) n = e[i],
                i = l.attrMap[i] || i,
                h(i, r) ? i(t, n) : h(n, r) ? t[i] = n: t.setAttribute(i, n);
                for (; s < o.length; s++) u(t, o[s]);
                return t
            }
            l.attrMap = {},
            l.isElement = function(t) {
                return t instanceof Element
            },
            l[a] = function(t) {
                return t instanceof Node
            },
            "undefined" != typeof Proxy && (l.proxy = new Proxy(l, {
                get: function(t, e) {
                    return ! (e in l) && (l[e] = l.bind(null, e)),
                    l[e]
                }
            })),
            e = l,
            i.exports = e
        } ()
    } (e = {
        exports: {}
    },
    e.exports), e.exports),
    o = Object.freeze;
    function h(t) {
        var e, i, n, o;
        for (i = 1, n = arguments.length; i < n; i++) for (e in o = arguments[i]) t[e] = o[e];
        return t
    }
    Object.freeze = function(t) {
        return t
    };
    var s = Object.create ||
    function() {
        function e() {}
        return function(t) {
            return e.prototype = t,
            new e
        }
    } ();
    function m(t, e) {
        var i = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
            return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
        }
    }
    var r = 0;
    function u(t) {
        return t._leaflet_id = t._leaflet_id || ++r,
        t._leaflet_id
    }
    function a(t, e, i) {
        var n, o, s, r;
        return r = function() {
            n = !1,
            o && (s.apply(i, o), o = !1)
        },
        s = function() {
            n ? o = arguments: (t.apply(i, arguments), setTimeout(r, e), n = !0)
        }
    }
    function l(t, e, i) {
        var n = e[1],
        o = e[0],
        s = n - o;
        return t === n && i ? t: ((t - o) % s + s) % s + o
    }
    function c() {
        return ! 1
    }
    function f(t, e) {
        var i = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * i) / i
    }
    function v(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }
    function g(t) {
        return v(t).split(/\s+/)
    }
    function y(t, e) {
        for (var i in t.hasOwnProperty("options") || (t.options = t.options ? s(t.options) : {}), e) t.options[i] = e[i];
        return t.options
    }
    function x(t, e, i) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (e && -1 !== e.indexOf("?") ? "&": "?") + n.join("&")
    }
    var w = /\{ *([\w_-]+) *\}/g;
    function b(t, n) {
        return t.replace(w,
        function(t, e) {
            var i = n[e];
            if (void 0 === i) throw new Error("No value provided for variable " + t);
            return "function" == typeof i && (i = i(n)),
            i
        })
    }
    var P = Array.isArray ||
    function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };
    function T(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
        return - 1
    }
    var z = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function M(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }
    var C = 0;
    function k(t) {
        var e = +new Date,
        i = Math.max(0, 16 - (e - C));
        return C = e + i,
        window.setTimeout(t, i)
    }
    var E = window.requestAnimationFrame || M("RequestAnimationFrame") || k,
    S = window.cancelAnimationFrame || M("CancelAnimationFrame") || M("CancelRequestAnimationFrame") ||
    function(t) {
        window.clearTimeout(t)
    };
    function Z(t, e, i) {
        if (!i || E !== k) return E.call(window, m(t, e));
        t.call(e)
    }
    function I(t) {
        t && S.call(window, t)
    }
    var O = (Object.freeze || Object)({
        freeze: o,
        extend: h,
        create: s,
        bind: m,
        lastId: r,
        stamp: u,
        throttle: a,
        wrapNum: l,
        falseFn: c,
        formatNum: f,
        trim: v,
        splitWords: g,
        setOptions: y,
        getParamString: x,
        template: b,
        isArray: P,
        indexOf: T,
        emptyImageUrl: z,
        requestFn: E,
        cancelFn: S,
        requestAnimFrame: Z,
        cancelAnimFrame: I
    });
    function A() {}
    A.extend = function(t) {
        var e = function() {
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks()
        },
        i = e.__super__ = this.prototype,
        n = s(i);
        for (var o in (n.constructor = e).prototype = n, this) this.hasOwnProperty(o) && "prototype" !== o && "__super__" !== o && (e[o] = this[o]);
        return t.statics && (h(e, t.statics), delete t.statics),
        t.includes && (!
        function(t) {
            if ("undefined" == typeof L || !L || !L.Mixin) return;
            t = P(t) ? t: [t];
            for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
        } (t.includes), h.apply(null, [n].concat(t.includes)), delete t.includes),
        n.options && (t.options = h(s(n.options), t.options)),
        h(n, t),
        n._initHooks = [],
        n.callInitHooks = function() {
            if (!this._initHooksCalled) {
                i.callInitHooks && i.callInitHooks.call(this),
                this._initHooksCalled = !0;
                for (var t = 0,
                e = n._initHooks.length; t < e; t++) n._initHooks[t].call(this)
            }
        },
        e
    },
    A.include = function(t) {
        return h(this.prototype, t),
        this
    },
    A.mergeOptions = function(t) {
        return h(this.prototype.options, t),
        this
    },
    A.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1),
        i = "function" == typeof t ? t: function() {
            this[t].apply(this, e)
        };
        return this.prototype._initHooks = this.prototype._initHooks || [],
        this.prototype._initHooks.push(i),
        this
    };
    var B = {
        on: function(t, e, i) {
            if ("object" == typeof t) for (var n in t) this._on(n, t[n], e);
            else for (var o = 0,
            s = (t = g(t)).length; o < s; o++) this._on(t[o], e, i);
            return this
        },
        off: function(t, e, i) {
            if (t) if ("object" == typeof t) for (var n in t) this._off(n, t[n], e);
            else for (var o = 0,
            s = (t = g(t)).length; o < s; o++) this._off(t[o], e, i);
            else delete this._events;
            return this
        },
        _on: function(t, e, i) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n),
            i === this && (i = void 0);
            for (var o = {
                fn: e,
                ctx: i
            },
            s = n, r = 0, a = s.length; r < a; r++) if (s[r].fn === e && s[r].ctx === i) return;
            s.push(o)
        },
        _off: function(t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t])) if (e) {
                if (i === this && (i = void 0), n) for (o = 0, s = n.length; o < s; o++) {
                    var r = n[o];
                    if (r.ctx === i && r.fn === e) return r.fn = c,
                    this._firingCount && (this._events[t] = n = n.slice()),
                    void n.splice(o, 1)
                }
            } else {
                for (o = 0, s = n.length; o < s; o++) n[o].fn = c;
                delete this._events[t]
            }
        },
        fire: function(t, e, i) {
            if (!this.listens(t, i)) return this;
            var n = h({},
            e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
            });
            if (this._events) {
                var o = this._events[t];
                if (o) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var s = 0,
                    r = o.length; s < r; s++) {
                        var a = o[s];
                        a.fn.call(a.ctx || this, n)
                    }
                    this._firingCount--
                }
            }
            return i && this._propagateEvent(n),
            this
        },
        listens: function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) return ! 0;
            if (e) for (var n in this._eventParents) if (this._eventParents[n].listens(t, e)) return ! 0;
            return ! 1
        },
        once: function(t, e, i) {
            if ("object" == typeof t) {
                for (var n in t) this.once(n, t[n], e);
                return this
            }
            var o = m(function() {
                this.off(t, e, i).off(t, o, i)
            },
            this);
            return this.on(t, e, i).on(t, o, i)
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {},
            this._eventParents[u(t)] = t,
            this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[u(t)],
            this
        },
        _propagateEvent: function(t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, h({
                layer: t.target,
                propagatedFrom: t.target
            },
            t), !0)
        }
    };
    B.addEventListener = B.on,
    B.removeEventListener = B.clearAllEventListeners = B.off,
    B.addOneTimeEventListener = B.once,
    B.fireEvent = B.fire,
    B.hasEventListeners = B.listens;
    var R = A.extend(B);
    function j(t, e, i) {
        this.x = i ? Math.round(t) : t,
        this.y = i ? Math.round(e) : e
    }
    var N = Math.trunc ||
    function(t) {
        return 0 < t ? Math.floor(t) : Math.ceil(t)
    };
    function D(t, e, i) {
        return t instanceof j ? t: P(t) ? new j(t[0], t[1]) : null == t ? t: "object" == typeof t && "x" in t && "y" in t ? new j(t.x, t.y) : new j(t, e, i)
    }
    function F(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }
    function U(t, e) {
        return ! t || t instanceof F ? t: new F(t, e)
    }
    function W(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }
    function H(t, e) {
        return t instanceof W ? t: new W(t, e)
    }
    function G(t, e, i) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t,
        this.lng = +e,
        void 0 !== i && (this.alt = +i)
    }
    function V(t, e, i) {
        return t instanceof G ? t: P(t) && "object" != typeof t[0] ? 3 === t.length ? new G(t[0], t[1], t[2]) : 2 === t.length ? new G(t[0], t[1]) : null: null == t ? t: "object" == typeof t && "lat" in t ? new G(t.lat, "lng" in t ? t.lng: t.lon, t.alt) : void 0 === e ? null: new G(t, e, i)
    }
    j.prototype = {
        clone: function() {
            return new j(this.x, this.y)
        },
        add: function(t) {
            return this.clone()._add(D(t))
        },
        _add: function(t) {
            return this.x += t.x,
            this.y += t.y,
            this
        },
        subtract: function(t) {
            return this.clone()._subtract(D(t))
        },
        _subtract: function(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t,
            this.y /= t,
            this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        scaleBy: function(t) {
            return new j(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function(t) {
            return new j(this.x / t.x, this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        trunc: function() {
            return this.clone()._trunc()
        },
        _trunc: function() {
            return this.x = N(this.x),
            this.y = N(this.y),
            this
        },
        distanceTo: function(t) {
            var e = (t = D(t)).x - this.x,
            i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        },
        equals: function(t) {
            return (t = D(t)).x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = D(t),
            Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + f(this.x) + ", " + f(this.y) + ")"
        }
    },
    F.prototype = {
        extend: function(t) {
            return t = D(t),
            this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()),
            this
        },
        getCenter: function(t) {
            return new j((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function() {
            return new j(this.min.x, this.max.y)
        },
        getTopRight: function() {
            return new j(this.max.x, this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, i;
            return (t = "number" == typeof t[0] || t instanceof j ? D(t) : U(t)) instanceof F ? (e = t.min, i = t.max) : e = i = t,
            e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        },
        intersects: function(t) {
            t = U(t);
            var e = this.min,
            i = this.max,
            n = t.min,
            o = t.max,
            s = o.x >= e.x && n.x <= i.x,
            r = o.y >= e.y && n.y <= i.y;
            return s && r
        },
        overlaps: function(t) {
            t = U(t);
            var e = this.min,
            i = this.max,
            n = t.min,
            o = t.max,
            s = o.x > e.x && n.x < i.x,
            r = o.y > e.y && n.y < i.y;
            return s && r
        },
        isValid: function() {
            return ! (!this.min || !this.max)
        }
    },
    W.prototype = {
        extend: function(t) {
            var e, i, n = this._southWest,
            o = this._northEast;
            if (t instanceof G) i = e = t;
            else {
                if (! (t instanceof W)) return t ? this.extend(V(t) || H(t)) : this;
                if (e = t._southWest, i = t._northEast, !e || !i) return this
            }
            return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new G(e.lat, e.lng), this._northEast = new G(i.lat, i.lng)),
            this
        },
        pad: function(t) {
            var e = this._southWest,
            i = this._northEast,
            n = Math.abs(e.lat - i.lat) * t,
            o = Math.abs(e.lng - i.lng) * t;
            return new W(new G(e.lat - n, e.lng - o), new G(i.lat + n, i.lng + o))
        },
        getCenter: function() {
            return new G((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new G(this.getNorth(), this.getWest())
        },
        getSouthEast: function() {
            return new G(this.getSouth(), this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = "number" == typeof t[0] || t instanceof G || "lat" in t ? V(t) : H(t);
            var e, i, n = this._southWest,
            o = this._northEast;
            return t instanceof W ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t,
            e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        },
        intersects: function(t) {
            t = H(t);
            var e = this._southWest,
            i = this._northEast,
            n = t.getSouthWest(),
            o = t.getNorthEast(),
            s = o.lat >= e.lat && n.lat <= i.lat,
            r = o.lng >= e.lng && n.lng <= i.lng;
            return s && r
        },
        overlaps: function(t) {
            t = H(t);
            var e = this._southWest,
            i = this._northEast,
            n = t.getSouthWest(),
            o = t.getNorthEast(),
            s = o.lat > e.lat && n.lat < i.lat,
            r = o.lng > e.lng && n.lng < i.lng;
            return s && r
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, e) {
            return !! t && (t = H(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        },
        isValid: function() {
            return ! (!this._southWest || !this._northEast)
        }
    };
    var K, q = {
        latLngToPoint: function(t, e) {
            var i = this.projection.project(t),
            n = this.scale(e);
            return this.transformation._transform(i, n)
        },
        pointToLatLng: function(t, e) {
            var i = this.scale(e),
            n = this.transformation.untransform(t, i);
            return this.projection.unproject(n)
        },
        project: function(t) {
            return this.projection.project(t)
        },
        unproject: function(t) {
            return this.projection.unproject(t)
        },
        scale: function(t) {
            return 256 * Math.pow(2, t)
        },
        zoom: function(t) {
            return Math.log(t / 256) / Math.LN2
        },
        getProjectedBounds: function(t) {
            if (this.infinite) return null;
            var e = this.projection.bounds,
            i = this.scale(t);
            return new F(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
        },
        infinite: !(G.prototype = {
            equals: function(t, e) {
                return !! t && (t = V(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9: e))
            },
            toString: function(t) {
                return "LatLng(" + f(this.lat, t) + ", " + f(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                return Y.distance(this, V(t))
            },
            wrap: function() {
                return Y.wrapLatLng(this)
            },
            toBounds: function(t) {
                var e = 180 * t / 40075017,
                i = e / Math.cos(Math.PI / 180 * this.lat);
                return H([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
            },
            clone: function() {
                return new G(this.lat, this.lng, this.alt)
            }
        }),
        wrapLatLng: function(t) {
            var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng;
            return new G(this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
        },
        wrapLatLngBounds: function(t) {
            var e = t.getCenter(),
            i = this.wrapLatLng(e),
            n = e.lat - i.lat,
            o = e.lng - i.lng;
            if (0 === n && 0 === o) return t;
            var s = t.getSouthWest(),
            r = t.getNorthEast();
            return new W(new G(s.lat - n, s.lng - o), new G(r.lat - n, r.lng - o))
        }
    },
    Y = h({},
    q, {
        wrapLng: [ - 180, 180],
        R: 6371e3,
        distance: function(t, e) {
            var i = Math.PI / 180,
            n = t.lat * i,
            o = e.lat * i,
            s = Math.sin((e.lat - t.lat) * i / 2),
            r = Math.sin((e.lng - t.lng) * i / 2),
            a = s * s + Math.cos(n) * Math.cos(o) * r * r,
            h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * h
        }
    }),
    X = {
        R: 6378137,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
            var e = Math.PI / 180,
            i = this.MAX_LATITUDE,
            n = Math.max(Math.min(i, t.lat), -i),
            o = Math.sin(n * e);
            return new j(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
        },
        unproject: function(t) {
            var e = 180 / Math.PI;
            return new G((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
        },
        bounds: (K = 6378137 * Math.PI, new F([ - K, -K], [K, K]))
    };
    function J(t, e, i, n) {
        if (P(t)) return this._a = t[0],
        this._b = t[1],
        this._c = t[2],
        void(this._d = t[3]);
        this._a = t,
        this._b = e,
        this._c = i,
        this._d = n
    }
    function $(t, e, i, n) {
        return new J(t, e, i, n)
    }
    J.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return e = e || 1,
            t.x = e * (this._a * t.x + this._b),
            t.y = e * (this._c * t.y + this._d),
            t
        },
        untransform: function(t, e) {
            return e = e || 1,
            new j((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    };
    var Q, tt = h({},
    Y, {
        code: "EPSG:3857",
        projection: X,
        transformation: (Q = .5 / (Math.PI * X.R), $(Q, .5, -Q, .5))
    }),
    et = h({},
    tt, {
        code: "EPSG:900913"
    });
    function it(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }
    function nt(t, e) {
        var i, n, o, s, r, a, h = "";
        for (i = 0, o = t.length; i < o; i++) {
            for (n = 0, s = (r = t[i]).length; n < s; n++) h += (n ? "L": "M") + (a = r[n]).x + " " + a.y;
            h += e ? Ot ? "z": "x": ""
        }
        return h || "M0 0"
    }
    var ot = document.documentElement.style,
    st = "ActiveXObject" in window,
    rt = st && !document.addEventListener,
    at = "msLaunchUri" in navigator && !("documentMode" in document),
    ht = Bt("webkit"),
    ut = Bt("android"),
    lt = Bt("android 2") || Bt("android 3"),
    ct = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    dt = ut && Bt("Google") && ct < 537 && !("AudioNode" in window),
    pt = !!window.opera,
    _t = Bt("chrome"),
    mt = Bt("gecko") && !ht && !pt && !st,
    ft = !_t && Bt("safari"),
    vt = Bt("phantom"),
    gt = "OTransition" in ot,
    yt = 0 === navigator.platform.indexOf("Win"),
    xt = st && "transition" in ot,
    wt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !lt,
    bt = "MozPerspective" in ot,
    Lt = !window.L_DISABLE_3D && (xt || wt || bt) && !gt && !vt,
    Pt = "undefined" != typeof orientation || Bt("mobile"),
    Tt = Pt && ht,
    zt = Pt && wt,
    Mt = !window.PointerEvent && window.MSPointerEvent,
    Ct = !(!window.PointerEvent && !Mt),
    kt = !window.L_NO_TOUCH && (Ct || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    Et = Pt && pt,
    St = Pt && mt,
    Zt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
    It = !!document.createElement("canvas").getContext,
    Ot = !(!document.createElementNS || !it("svg").createSVGRect),
    At = !Ot &&
    function() {
        try {
            var t = document.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var e = t.firstChild;
            return e.style.behavior = "url(#default#VML)",
            e && "object" == typeof e.adj
        } catch(t) {
            return ! 1
        }
    } ();
    function Bt(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
    }
    var Rt = (Object.freeze || Object)({
        ie: st,
        ielt9: rt,
        edge: at,
        webkit: ht,
        android: ut,
        android23: lt,
        androidStock: dt,
        opera: pt,
        chrome: _t,
        gecko: mt,
        safari: ft,
        phantom: vt,
        opera12: gt,
        win: yt,
        ie3d: xt,
        webkit3d: wt,
        gecko3d: bt,
        any3d: Lt,
        mobile: Pt,
        mobileWebkit: Tt,
        mobileWebkit3d: zt,
        msPointer: Mt,
        pointer: Ct,
        touch: kt,
        mobileOpera: Et,
        mobileGecko: St,
        retina: Zt,
        canvas: It,
        svg: Ot,
        vml: At
    }),
    jt = Mt ? "MSPointerDown": "pointerdown",
    Nt = Mt ? "MSPointerMove": "pointermove",
    Dt = Mt ? "MSPointerUp": "pointerup",
    Ft = Mt ? "MSPointerCancel": "pointercancel",
    Ut = ["INPUT", "SELECT", "OPTION"],
    Wt = {},
    Ht = !1,
    Gt = 0;
    function Vt(t, e, i, n) {
        var o, s, r, a, h, u, l, c, d, p;
        return "touchstart" === e ? (l = t, c = i, d = n, p = m(function(t) {
            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (! (Ut.indexOf(t.target.tagName) < 0)) return;
                We(t)
            }
            Xt(t, c)
        }), l["_leaflet_touchstart" + d] = p, l.addEventListener(jt, p, !1), Ht || (document.documentElement.addEventListener(jt, Kt, !0), document.documentElement.addEventListener(Nt, qt, !0), document.documentElement.addEventListener(Dt, Yt, !0), document.documentElement.addEventListener(Ft, Yt, !0), Ht = !0)) : "touchmove" === e ? (h = i, u = function(t) { (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && Xt(t, h)
        },
        (a = t)["_leaflet_touchmove" + n] = u, a.addEventListener(Nt, u, !1)) : "touchend" === e && (s = i, r = function(t) {
            Xt(t, s)
        },
        (o = t)["_leaflet_touchend" + n] = r, o.addEventListener(Dt, r, !1), o.addEventListener(Ft, r, !1)),
        this
    }
    function Kt(t) {
        Wt[t.pointerId] = t,
        Gt++
    }
    function qt(t) {
        Wt[t.pointerId] && (Wt[t.pointerId] = t)
    }
    function Yt(t) {
        delete Wt[t.pointerId],
        Gt--
    }
    function Xt(t, e) {
        for (var i in t.touches = [], Wt) t.touches.push(Wt[i]);
        t.changedTouches = [t],
        e(t)
    }
    var Jt = Mt ? "MSPointerDown": Ct ? "pointerdown": "touchstart",
    $t = Mt ? "MSPointerUp": Ct ? "pointerup": "touchend",
    Qt = "_leaflet_";
    function te(t, o, e) {
        var s, r, a = !1;
        function i(t) {
            var e;
            if (Ct) {
                if (!at || "mouse" === t.pointerType) return;
                e = Gt
            } else e = t.touches.length;
            if (! (1 < e)) {
                var i = Date.now(),
                n = i - (s || i);
                r = t.touches ? t.touches[0] : t,
                a = 0 < n && n <= 250,
                s = i
            }
        }
        function n(t) {
            if (a && !r.cancelBubble) {
                if (Ct) {
                    if (!at || "mouse" === t.pointerType) return;
                    var e, i, n = {};
                    for (i in r) e = r[i],
                    n[i] = e && e.bind ? e.bind(r) : e;
                    r = n
                }
                r.type = "dblclick",
                o(r),
                s = null
            }
        }
        return t[Qt + Jt + e] = i,
        t[Qt + $t + e] = n,
        t[Qt + "dblclick" + e] = o,
        t.addEventListener(Jt, i, !1),
        t.addEventListener($t, n, !1),
        t.addEventListener("dblclick", o, !1),
        this
    }
    function ee(t, e) {
        var i = t[Qt + Jt + e],
        n = t[Qt + $t + e],
        o = t[Qt + "dblclick" + e];
        return t.removeEventListener(Jt, i, !1),
        t.removeEventListener($t, n, !1),
        at || t.removeEventListener("dblclick", o, !1),
        this
    }
    var ie, ne, oe, se, re, ae = Le(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
    he = Le(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
    ue = "webkitTransition" === he || "OTransition" === he ? he + "End": "transitionend";
    function le(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }
    function ce(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || "auto" === i) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            i = n ? n[e] : null
        }
        return "auto" === i ? null: i
    }
    function de(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "",
        i && i.appendChild(n),
        n
    }
    function pe(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }
    function _e(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }
    function me(t) {
        var e = t.parentNode;
        e.lastChild !== t && e.appendChild(t)
    }
    function fe(t) {
        var e = t.parentNode;
        e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }
    function ve(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);
        var i = we(t);
        return 0 < i.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
    }
    function ge(t, e) {
        if (void 0 !== t.classList) for (var i = g(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
        else if (!ve(t, e)) {
            var s = we(t);
            xe(t, (s ? s + " ": "") + e)
        }
    }
    function ye(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : xe(t, v((" " + we(t) + " ").replace(" " + e + " ", " ")))
    }
    function xe(t, e) {
        void 0 === t.className.baseVal ? t.className = e: t.className.baseVal = e
    }
    function we(t) {
        return void 0 === t.className.baseVal ? t.className: t.className.baseVal
    }
    function be(t, e) {
        "opacity" in t.style ? t.style.opacity = e: "filter" in t.style &&
        function(t, e) {
            var i = !1,
            n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n)
            } catch(t) {
                if (1 === e) return
            }
            e = Math.round(100 * e),
            i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
        } (t, e)
    }
    function Le(t) {
        for (var e = document.documentElement.style,
        i = 0; i < t.length; i++) if (t[i] in e) return t[i];
        return ! 1
    }
    function Pe(t, e, i) {
        var n = e || new j(0, 0);
        t.style[ae] = (xt ? "translate(" + n.x + "px," + n.y + "px)": "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")": "")
    }
    function Te(t, e) {
        t._leaflet_pos = e,
        Lt ? Pe(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
    }
    function ze(t) {
        return t._leaflet_pos || new j(0, 0)
    }
    if ("onselectstart" in document) ie = function() {
        Ae(window, "selectstart", We)
    },
    ne = function() {
        Re(window, "selectstart", We)
    };
    else {
        var Me = Le(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        ie = function() {
            if (Me) {
                var t = document.documentElement.style;
                oe = t[Me],
                t[Me] = "none"
            }
        },
        ne = function() {
            Me && (document.documentElement.style[Me] = oe, oe = void 0)
        }
    }
    function Ce() {
        Ae(window, "dragstart", We)
    }
    function ke() {
        Re(window, "dragstart", We)
    }
    function Ee(t) {
        for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (Se(), re = (se = t).style.outline, t.style.outline = "none", Ae(window, "keydown", Se))
    }
    function Se() {
        se && (se.style.outline = re, re = se = void 0, Re(window, "keydown", Se))
    }
    function Ze(t) {
        for (; ! ((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body););
        return t
    }
    function Ie(t) {
        var e = t.getBoundingClientRect();
        return {
            x: e.width / t.offsetWidth || 1,
            y: e.height / t.offsetHeight || 1,
            boundingClientRect: e
        }
    }
    var Oe = (Object.freeze || Object)({
        TRANSFORM: ae,
        TRANSITION: he,
        TRANSITION_END: ue,
        get: le,
        getStyle: ce,
        create: de,
        remove: pe,
        empty: _e,
        toFront: me,
        toBack: fe,
        hasClass: ve,
        addClass: ge,
        removeClass: ye,
        setClass: xe,
        getClass: we,
        setOpacity: be,
        testProp: Le,
        setTransform: Pe,
        setPosition: Te,
        getPosition: ze,
        disableTextSelection: ie,
        enableTextSelection: ne,
        disableImageDrag: Ce,
        enableImageDrag: ke,
        preventOutline: Ee,
        restoreOutline: Se,
        getSizedParentNode: Ze,
        getScale: Ie
    });
    function Ae(t, e, i, n) {
        if ("object" == typeof e) for (var o in e) je(t, o, e[o], i);
        else for (var s = 0,
        r = (e = g(e)).length; s < r; s++) je(t, e[s], i, n);
        return this
    }
    var Be = "_leaflet_events";
    function Re(t, e, i, n) {
        if ("object" == typeof e) for (var o in e) Ne(t, o, e[o], i);
        else if (e) for (var s = 0,
        r = (e = g(e)).length; s < r; s++) Ne(t, e[s], i, n);
        else {
            for (var a in t[Be]) Ne(t, a, t[Be][a]);
            delete t[Be]
        }
        return this
    }
    function je(e, t, i, n) {
        var o = t + u(i) + (n ? "_" + u(n) : "");
        if (e[Be] && e[Be][o]) return this;
        var s = function(t) {
            return i.call(n || e, t || window.event)
        },
        r = s;
        Ct && 0 === t.indexOf("touch") ? Vt(e, t, s, o) : !kt || "dblclick" !== t || Ct && _t ? "addEventListener" in e ? "mousewheel" === t ? e.addEventListener("onwheel" in e ? "wheel": "mousewheel", s, !1) : "mouseenter" === t || "mouseleave" === t ? (s = function(t) {
            t = t || window.event,
            $e(e, t) && r(t)
        },
        e.addEventListener("mouseenter" === t ? "mouseover": "mouseout", s, !1)) : ("click" === t && ut && (s = function(t) { !
            function(t, e) {
                var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                n = qe && i - qe;
                if (n && 100 < n && n < 500 || t.target._simulatedClick && !t._simulated) return He(t);
                qe = i,
                e(t)
            } (t, r)
        }), e.addEventListener(t, s, !1)) : "attachEvent" in e && e.attachEvent("on" + t, s) : te(e, s, o),
        e[Be] = e[Be] || {},
        e[Be][o] = s
    }
    function Ne(t, e, i, n) {
        var o, s, r, a = e + u(i) + (n ? "_" + u(n) : ""),
        h = t[Be] && t[Be][a];
        if (!h) return this;
        Ct && 0 === e.indexOf("touch") ? (r = (o = t)["_leaflet_" + (s = e) + a], "touchstart" === s ? o.removeEventListener(jt, r, !1) : "touchmove" === s ? o.removeEventListener(Nt, r, !1) : "touchend" === s && (o.removeEventListener(Dt, r, !1), o.removeEventListener(Ft, r, !1))) : !kt || "dblclick" !== e || Ct && _t ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel": "mousewheel", h, !1) : t.removeEventListener("mouseenter" === e ? "mouseover": "mouseleave" === e ? "mouseout": e, h, !1) : "detachEvent" in t && t.detachEvent("on" + e, h) : ee(t, a),
        t[Be][a] = null
    }
    function De(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
        Je(t),
        this
    }
    function Fe(t) {
        return je(t, "mousewheel", De),
        this
    }
    function Ue(t) {
        return Ae(t, "mousedown touchstart dblclick", De),
        je(t, "click", Xe),
        this
    }
    function We(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
        this
    }
    function He(t) {
        return We(t),
        De(t),
        this
    }
    function Ge(t, e) {
        if (!e) return new j(t.clientX, t.clientY);
        var i = Ie(e),
        n = i.boundingClientRect;
        return new j((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)
    }
    var Ve = yt && _t ? 2 * window.devicePixelRatio: mt ? window.devicePixelRatio: 1;
    function Ke(t) {
        return at ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Ve: t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY: t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY: t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail: t.detail ? t.detail / -32765 * 60 : 0
    }
    var qe, Ye = {};
    function Xe(t) {
        Ye[t.type] = !0
    }
    function Je(t) {
        var e = Ye[t.type];
        return Ye[t.type] = !1,
        e
    }
    function $e(t, e) {
        var i = e.relatedTarget;
        if (!i) return ! 0;
        try {
            for (; i && i !== t;) i = i.parentNode
        } catch(t) {
            return ! 1
        }
        return i !== t
    }
    var Qe = (Object.freeze || Object)({
        on: Ae,
        off: Re,
        stopPropagation: De,
        disableScrollPropagation: Fe,
        disableClickPropagation: Ue,
        preventDefault: We,
        stop: He,
        getMousePosition: Ge,
        getWheelDelta: Ke,
        fakeStop: Xe,
        skipped: Je,
        isExternalTarget: $e,
        addListener: Ae,
        removeListener: Re
    }),
    ti = R.extend({
        run: function(t, e, i, n) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._duration = i || .25,
            this._easeOutPower = 1 / Math.max(n || .5, .2),
            this._startPos = ze(t),
            this._offset = e.subtract(this._startPos),
            this._startTime = +new Date,
            this.fire("start"),
            this._animate()
        },
        stop: function() {
            this._inProgress && (this._step(!0), this._complete())
        },
        _animate: function() {
            this._animId = Z(this._animate, this),
            this._step()
        },
        _step: function(t) {
            var e = +new Date - this._startTime,
            i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
        },
        _runFrame: function(t, e) {
            var i = this._startPos.add(this._offset.multiplyBy(t));
            e && i._round(),
            Te(this._el, i),
            this.fire("step")
        },
        _complete: function() {
            I(this._animId),
            this._inProgress = !1,
            this.fire("end")
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }),
    ei = R.extend({
        options: {
            crs: tt,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0
        },
        initialize: function(t, e) {
            e = y(this, e),
            this._initContainer(t),
            this._initLayout(),
            this._onResize = m(this._onResize, this),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
            e.center && void 0 !== e.zoom && this.setView(V(e.center), e.zoom, {
                reset: !0
            }),
            this._handlers = [],
            this._layers = {},
            this._zoomBoundLayers = {},
            this._sizeChanged = !0,
            this.callInitHooks(),
            this._zoomAnimated = he && Lt && !Et && this.options.zoomAnimation,
            this._zoomAnimated && (this._createAnimProxy(), Ae(this._proxy, ue, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers)
        },
        setView: function(t, e, i) {
            if ((e = void 0 === e ? this._zoom: this._limitZoom(e), t = this._limitCenter(V(t), e, this.options.maxBounds), i = i || {},
            this._stop(), this._loaded && !i.reset && !0 !== i) && (void 0 !== i.animate && (i.zoom = h({
                animate: i.animate
            },
            i.zoom), i.pan = h({
                animate: i.animate,
                duration: i.duration
            },
            i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan))) return clearTimeout(this._sizeTimer),
            this;
            return this._resetView(t, e),
            this
        },
        setZoom: function(t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: e
            }) : (this._zoom = t, this)
        },
        zoomIn: function(t, e) {
            return t = t || (Lt ? this.options.zoomDelta: 1),
            this.setZoom(this._zoom + t, e)
        },
        zoomOut: function(t, e) {
            return t = t || (Lt ? this.options.zoomDelta: 1),
            this.setZoom(this._zoom - t, e)
        },
        setZoomAround: function(t, e, i) {
            var n = this.getZoomScale(e),
            o = this.getSize().divideBy(2),
            s = (t instanceof j ? t: this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
            r = this.containerPointToLatLng(o.add(s));
            return this.setView(r, e, {
                zoom: i
            })
        },
        _getBoundsCenterZoom: function(t, e) {
            e = e || {},
            t = t.getBounds ? t.getBounds() : H(t);
            var i = D(e.paddingTopLeft || e.padding || [0, 0]),
            n = D(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.getBoundsZoom(t, !1, i.add(n));
            if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
                center: t.getCenter(),
                zoom: o
            };
            var s = n.subtract(i).divideBy(2),
            r = this.project(t.getSouthWest(), o),
            a = this.project(t.getNorthEast(), o);
            return {
                center: this.unproject(r.add(a).divideBy(2).add(s), o),
                zoom: o
            }
        },
        fitBounds: function(t, e) {
            if (! (t = H(t)).isValid()) throw new Error("Bounds are not valid.");
            var i = this._getBoundsCenterZoom(t, e);
            return this.setView(i.center, i.zoom, e)
        },
        fitWorld: function(t) {
            return this.fitBounds([[ - 90, -180], [90, 180]], t)
        },
        panTo: function(t, e) {
            return this.setView(t, this._zoom, {
                pan: e
            })
        },
        panBy: function(t, e) {
            if (e = e || {},
            !(t = D(t).round()).x && !t.y) return this.fire("moveend");
            if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
            this;
            if (this._panAnim || (this._panAnim = new ti, this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            },
            this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                ge(this._mapPane, "leaflet-pan-anim");
                var i = this._getMapPanePos().subtract(t).round();
                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else this._rawPanBy(t),
            this.fire("move").fire("moveend");
            return this
        },
        flyTo: function(s, r, t) {
            if (!1 === (t = t || {}).animate || !Lt) return this.setView(s, r, t);
            this._stop();
            var a = this.project(this.getCenter()),
            h = this.project(s),
            e = this.getSize(),
            u = this._zoom;
            s = V(s),
            r = void 0 === r ? u: r;
            var l = Math.max(e.x, e.y),
            n = l * this.getZoomScale(u, r),
            c = h.distanceTo(a) || 1,
            d = 1.42,
            o = d * d;
            function i(t) {
                var e = (n * n - l * l + (t ? -1 : 1) * o * o * c * c) / (2 * (t ? n: l) * o * c),
                i = Math.sqrt(e * e + 1) - e;
                return i < 1e-9 ? -18 : Math.log(i)
            }
            function p(t) {
                return (Math.exp(t) - Math.exp( - t)) / 2
            }
            function _(t) {
                return (Math.exp(t) + Math.exp( - t)) / 2
            }
            var m = i(0);
            function f(t) {
                return l * (_(m) * (p(e = m + d * t) / _(e)) - p(m)) / o;
                var e
            }
            var v = Date.now(),
            g = (i(1) - m) / d,
            y = t.duration ? 1e3 * t.duration: 1e3 * g * .8;
            return this._moveStart(!0, t.noMoveStart),
            function t() {
                var e, i, n = (Date.now() - v) / y,
                o = (e = n, (1 - Math.pow(1 - e, 1.5)) * g);
                n <= 1 ? (this._flyToFrame = Z(t, this), this._move(this.unproject(a.add(h.subtract(a).multiplyBy(f(o) / c)), u), this.getScaleZoom(l / (i = o, l * (_(m) / _(m + d * i))), u), {
                    flyTo: !0
                })) : this._move(s, r)._moveEnd(!0)
            }.call(this),
            this
        },
        flyToBounds: function(t, e) {
            var i = this._getBoundsCenterZoom(t, e);
            return this.flyTo(i.center, i.zoom, e)
        },
        setMaxBounds: function(t) {
            return (t = H(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
        },
        setMinZoom: function(t) {
            var e = this.options.minZoom;
            return this.options.minZoom = t,
            this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
        },
        setMaxZoom: function(t) {
            var e = this.options.maxZoom;
            return this.options.maxZoom = t,
            this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
        },
        panInsideBounds: function(t, e) {
            this._enforcingBounds = !0;
            var i = this.getCenter(),
            n = this._limitCenter(i, this._zoom, H(t));
            return i.equals(n) || this.panTo(n, e),
            this._enforcingBounds = !1,
            this
        },
        invalidateSize: function(t) {
            if (!this._loaded) return this;
            t = h({
                animate: !1,
                pan: !0
            },
            !0 === t ? {
                animate: !0
            }: t);
            var e = this.getSize();
            this._sizeChanged = !0,
            this._lastCenter = null;
            var i = this.getSize(),
            n = e.divideBy(2).round(),
            o = i.divideBy(2).round(),
            s = n.subtract(o);
            return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(m(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        stop: function() {
            return this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
        },
        locate: function(t) {
            if (t = this._locateOptions = h({
                timeout: 1e4,
                watch: !1
            },
            t), !("geolocation" in navigator)) return this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            }),
            this;
            var e = m(this._handleGeolocationResponse, this),
            i = m(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t),
            this
        },
        stopLocate: function() {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
        },
        _handleGeolocationError: function(t) {
            var e = t.code,
            i = t.message || (1 === e ? "permission denied": 2 === e ? "position unavailable": "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + "."
            })
        },
        _handleGeolocationResponse: function(t) {
            var e = new G(t.coords.latitude, t.coords.longitude),
            i = e.toBounds(2 * t.coords.accuracy),
            n = this._locateOptions;
            if (n.setView) {
                var o = this.getBoundsZoom(i);
                this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o)
            }
            var s = {
                latlng: e,
                bounds: i,
                timestamp: t.timestamp
            };
            for (var r in t.coords)"number" == typeof t.coords[r] && (s[r] = t.coords[r]);
            this.fire("locationfound", s)
        },
        addHandler: function(t, e) {
            if (!e) return this;
            var i = this[t] = new e(this);
            return this._handlers.push(i),
            this.options[t] && i.enable(),
            this
        },
        remove: function() {
            if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
            try {
                delete this._container._leaflet_id,
                delete this._containerId
            } catch(t) {
                this._container._leaflet_id = void 0,
                this._containerId = void 0
            }
            var t;
            for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), pe(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (I(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
            for (t in this._panes) pe(this._panes[t]);
            return this._layers = [],
            this._panes = [],
            delete this._mapPane,
            delete this._renderer,
            this
        },
        createPane: function(t, e) {
            var i = de("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane": ""), e || this._mapPane);
            return t && (this._panes[t] = i),
            i
        },
        getCenter: function() {
            return this._checkIfLoaded(),
            this._lastCenter && !this._moved() ? this._lastCenter: this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function() {
            return this._zoom
        },
        getBounds: function() {
            var t = this.getPixelBounds();
            return new W(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
        },
        getMinZoom: function() {
            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
        },
        getMaxZoom: function() {
            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom: this.options.maxZoom
        },
        getBoundsZoom: function(t, e, i) {
            t = H(t),
            i = D(i || [0, 0]);
            var n = this.getZoom() || 0,
            o = this.getMinZoom(),
            s = this.getMaxZoom(),
            r = t.getNorthWest(),
            a = t.getSouthEast(),
            h = this.getSize().subtract(i),
            u = U(this.project(a, n), this.project(r, n)).getSize(),
            l = Lt ? this.options.zoomSnap: 1,
            c = h.x / u.x,
            d = h.y / u.y,
            p = e ? Math.max(c, d) : Math.min(c, d);
            return n = this.getScaleZoom(p, n),
            l && (n = Math.round(n / (l / 100)) * (l / 100), n = e ? Math.ceil(n / l) * l: Math.floor(n / l) * l),
            Math.max(o, Math.min(s, n))
        },
        getSize: function() {
            return this._size && !this._sizeChanged || (this._size = new j(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1),
            this._size.clone()
        },
        getPixelBounds: function(t, e) {
            var i = this._getTopLeftPoint(t, e);
            return new F(i, i.add(this.getSize()))
        },
        getPixelOrigin: function() {
            return this._checkIfLoaded(),
            this._pixelOrigin
        },
        getPixelWorldBounds: function(t) {
            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
        },
        getPane: function(t) {
            return "string" == typeof t ? this._panes[t] : t
        },
        getPanes: function() {
            return this._panes
        },
        getContainer: function() {
            return this._container
        },
        getZoomScale: function(t, e) {
            var i = this.options.crs;
            return e = void 0 === e ? this._zoom: e,
            i.scale(t) / i.scale(e)
        },
        getScaleZoom: function(t, e) {
            var i = this.options.crs;
            e = void 0 === e ? this._zoom: e;
            var n = i.zoom(t * i.scale(e));
            return isNaN(n) ? 1 / 0 : n
        },
        project: function(t, e) {
            return e = void 0 === e ? this._zoom: e,
            this.options.crs.latLngToPoint(V(t), e)
        },
        unproject: function(t, e) {
            return e = void 0 === e ? this._zoom: e,
            this.options.crs.pointToLatLng(D(t), e)
        },
        layerPointToLatLng: function(t) {
            var e = D(t).add(this.getPixelOrigin());
            return this.unproject(e)
        },
        latLngToLayerPoint: function(t) {
            return this.project(V(t))._round()._subtract(this.getPixelOrigin())
        },
        wrapLatLng: function(t) {
            return this.options.crs.wrapLatLng(V(t))
        },
        wrapLatLngBounds: function(t) {
            return this.options.crs.wrapLatLngBounds(H(t))
        },
        distance: function(t, e) {
            return this.options.crs.distance(V(t), V(e))
        },
        containerPointToLayerPoint: function(t) {
            return D(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function(t) {
            return D(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function(t) {
            var e = this.containerPointToLayerPoint(D(t));
            return this.layerPointToLatLng(e)
        },
        latLngToContainerPoint: function(t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(V(t)))
        },
        mouseEventToContainerPoint: function(t) {
            return Ge(t, this._container)
        },
        mouseEventToLayerPoint: function(t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function(t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function(t) {
            var e = this._container = le(t);
            if (!e) throw new Error("Map container not found.");
            if (e._leaflet_id) throw new Error("Map container is already initialized.");
            Ae(e, "scroll", this._onScroll, this),
            this._containerId = u(e)
        },
        _initLayout: function() {
            var t = this._container;
            this._fadeAnimated = this.options.fadeAnimation && Lt,
            ge(t, "leaflet-container" + (kt ? " leaflet-touch": "") + (Zt ? " leaflet-retina": "") + (rt ? " leaflet-oldie": "") + (ft ? " leaflet-safari": "") + (this._fadeAnimated ? " leaflet-fade-anim": ""));
            var e = ce(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos()
        },
        _initPanes: function() {
            var t = this._panes = {};
            this._paneRenderers = {},
            this._mapPane = this.createPane("mapPane", this._container),
            Te(this._mapPane, new j(0, 0)),
            this.createPane("tilePane"),
            this.createPane("shadowPane"),
            this.createPane("overlayPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation || (ge(t.markerPane, "leaflet-zoom-hide"), ge(t.shadowPane, "leaflet-zoom-hide"))
        },
        _resetView: function(t, e) {
            Te(this._mapPane, new j(0, 0));
            var i = !this._loaded;
            this._loaded = !0,
            e = this._limitZoom(e),
            this.fire("viewprereset");
            var n = this._zoom !== e;
            this._moveStart(n, !1)._move(t, e)._moveEnd(n),
            this.fire("viewreset"),
            i && this.fire("load")
        },
        _moveStart: function(t, e) {
            return t && this.fire("zoomstart"),
            e || this.fire("movestart"),
            this
        },
        _move: function(t, e, i) {
            void 0 === e && (e = this._zoom);
            var n = this._zoom !== e;
            return this._zoom = e,
            this._lastCenter = t,
            this._pixelOrigin = this._getNewPixelOrigin(t),
            (n || i && i.pinch) && this.fire("zoom", i),
            this.fire("move", i)
        },
        _moveEnd: function(t) {
            return t && this.fire("zoomend"),
            this.fire("moveend")
        },
        _stop: function() {
            return I(this._flyToFrame),
            this._panAnim && this._panAnim.stop(),
            this
        },
        _rawPanBy: function(t) {
            Te(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _panInsideMaxBounds: function() {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function() {
            if (!this._loaded) throw new Error("Set map center and zoom first.")
        },
        _initEvents: function(t) {
            this._targets = {};
            var e = t ? Re: Ae;
            e((this._targets[u(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this),
            this.options.trackResize && e(window, "resize", this._onResize, this),
            Lt && this.options.transform3DLimit && (t ? this.off: this.on).call(this, "moveend", this._onMoveEnd)
        },
        _onResize: function() {
            I(this._resizeRequest),
            this._resizeRequest = Z(function() {
                this.invalidateSize({
                    debounceMoveend: !0
                })
            },
            this)
        },
        _onScroll: function() {
            this._container.scrollTop = 0,
            this._container.scrollLeft = 0
        },
        _onMoveEnd: function() {
            var t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
        },
        _findEventTargets: function(t, e) {
            for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s;) {
                if ((i = this._targets[u(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                    r = !0;
                    break
                }
                if (i && i.listens(e, !0)) {
                    if (o && !$e(s, t)) break;
                    if (n.push(i), o) break
                }
                if (s === this._container) break;
                s = s.parentNode
            }
            return n.length || r || o || !$e(s, t) || (n = [this]),
            n
        },
        _handleDOMEvent: function(t) {
            if (this._loaded && !Je(t)) {
                var e = t.type;
                "mousedown" !== e && "keypress" !== e || Ee(t.target || t.srcElement),
                this._fireDOMEvent(t, e)
            }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
            if ("click" === t.type) {
                var n = h({},
                t);
                n.type = "preclick",
                this._fireDOMEvent(n, n.type, i)
            }
            if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                var o = i[0];
                "contextmenu" === e && o.listens(e, !0) && We(t);
                var s = {
                    originalEvent: t
                };
                if ("keypress" !== t.type) {
                    var r = o.getLatLng && (!o._radius || o._radius <= 10);
                    s.containerPoint = r ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t),
                    s.layerPoint = this.containerPointToLayerPoint(s.containerPoint),
                    s.latlng = r ? o.getLatLng() : this.layerPointToLatLng(s.layerPoint)
                }
                for (var a = 0; a < i.length; a++) if (i[a].fire(e, s, !0), s.originalEvent._stopped || !1 === i[a].options.bubblingMouseEvents && -1 !== T(this._mouseEvents, e)) return
            }
        },
        _draggableMoved: function(t) {
            return (t = t.dragging && t.dragging.enabled() ? t: this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
        },
        _clearHandlers: function() {
            for (var t = 0,
            e = this._handlers.length; t < e; t++) this._handlers[t].disable()
        },
        whenReady: function(t, e) {
            return this._loaded ? t.call(e || this, {
                target: this
            }) : this.on("load", t, e),
            this
        },
        _getMapPanePos: function() {
            return ze(this._mapPane) || new j(0, 0)
        },
        _moved: function() {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function(t, e) {
            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
        },
        _getNewPixelOrigin: function(t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
        },
        _latLngToNewLayerPoint: function(t, e, i) {
            var n = this._getNewPixelOrigin(i, e);
            return this.project(t, e)._subtract(n)
        },
        _latLngBoundsToNewLayerBounds: function(t, e, i) {
            var n = this._getNewPixelOrigin(i, e);
            return U([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
        },
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function(t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function(t, e, i) {
            if (!i) return t;
            var n = this.project(t, e),
            o = this.getSize().divideBy(2),
            s = new F(n.subtract(o), n.add(o)),
            r = this._getBoundsOffset(s, i, e);
            return r.round().equals([0, 0]) ? t: this.unproject(n.add(r), e)
        },
        _limitOffset: function(t, e) {
            if (!e) return t;
            var i = this.getPixelBounds(),
            n = new F(i.min.add(t), i.max.add(t));
            return t.add(this._getBoundsOffset(n, e))
        },
        _getBoundsOffset: function(t, e, i) {
            var n = U(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
            o = n.min.subtract(t.min),
            s = n.max.subtract(t.max);
            return new j(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
        },
        _rebound: function(t, e) {
            return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function(t) {
            var e = this.getMinZoom(),
            i = this.getMaxZoom(),
            n = Lt ? this.options.zoomSnap: 1;
            return n && (t = Math.round(t / n) * n),
            Math.max(e, Math.min(i, t))
        },
        _onPanTransitionStep: function() {
            this.fire("move")
        },
        _onPanTransitionEnd: function() {
            ye(this._mapPane, "leaflet-pan-anim"),
            this.fire("moveend")
        },
        _tryAnimatedPan: function(t, e) {
            var i = this._getCenterOffset(t)._trunc();
            return ! (!0 !== (e && e.animate) && !this.getSize().contains(i)) && (this.panBy(i, e), !0)
        },
        _createAnimProxy: function() {
            var t = this._proxy = de("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(t),
            this.on("zoomanim",
            function(t) {
                var e = ae,
                i = this._proxy.style[e];
                Pe(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
            },
            this),
            this.on("load moveend",
            function() {
                var t = this.getCenter(),
                e = this.getZoom();
                Pe(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
            },
            this),
            this._on("unload", this._destroyAnimProxy, this)
        },
        _destroyAnimProxy: function() {
            pe(this._proxy),
            delete this._proxy
        },
        _catchTransitionEnd: function(t) {
            this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function() {
            return ! this._container.getElementsByClassName("leaflet-zoom-animated").length
        },
        _tryAnimatedZoom: function(t, e, i) {
            if (this._animatingZoom) return ! 0;
            if (i = i || {},
            !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return ! 1;
            var n = this.getZoomScale(e),
            o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
            return ! (!0 !== i.animate && !this.getSize().contains(o)) && (Z(function() {
                this._moveStart(!0, !1)._animateZoom(t, e, !0)
            },
            this), !0)
        },
        _animateZoom: function(t, e, i, n) {
            this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, ge(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                center: t,
                zoom: e,
                noUpdate: n
            }), setTimeout(m(this._onZoomTransitionEnd, this), 250))
        },
        _onZoomTransitionEnd: function() {
            this._animatingZoom && (this._mapPane && ye(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), Z(function() {
                this._moveEnd(!0)
            },
            this))
        }
    });
    function ii(t, e) {
        return new ei(t, e)
    }
    var ni = A.extend({
        options: {
            position: "topright"
        },
        initialize: function(t) {
            y(this, t)
        },
        getPosition: function() {
            return this.options.position
        },
        setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this),
            this.options.position = t,
            e && e.addControl(this),
            this
        },
        getContainer: function() {
            return this._container
        },
        addTo: function(t) {
            this.remove(),
            this._map = t;
            var e = this._container = this.onAdd(t),
            i = this.getPosition(),
            n = t._controlCorners[i];
            return ge(e, "leaflet-control"),
            -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
            this
        },
        remove: function() {
            return this._map && (pe(this._container), this.onRemove && this.onRemove(this._map), this._map = null),
            this
        },
        _refocusOnMap: function(t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
        }
    }),
    oi = function(t) {
        return new ni(t)
    };
    ei.include({
        addControl: function(t) {
            return t.addTo(this),
            this
        },
        removeControl: function(t) {
            return t.remove(),
            this
        },
        _initControlPos: function() {
            var n = this._controlCorners = {},
            o = "leaflet-",
            s = this._controlContainer = de("div", o + "control-container", this._container);
            function t(t, e) {
                var i = o + t + " " + o + e;
                n[t + e] = de("div", i, s)
            }
            t("top", "left"),
            t("top", "right"),
            t("bottom", "left"),
            t("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners) pe(this._controlCorners[t]);
            pe(this._controlContainer),
            delete this._controlCorners,
            delete this._controlContainer
        }
    });
    var si = ni.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function(t, e, i, n) {
                return i < n ? -1 : n < i ? 1 : 0
            }
        },
        initialize: function(t, e, i) {
            for (var n in y(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
            for (n in e) this._addLayer(e[n], n, !0)
        },
        onAdd: function(t) {
            this._initLayout(),
            this._update(),
            (this._map = t).on("zoomend", this._checkDisabledLayers, this);
            for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
            return this._container
        },
        addTo: function(t) {
            return ni.prototype.addTo.call(this, t),
            this._expandIfNotCollapsed()
        },
        onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
        },
        addBaseLayer: function(t, e) {
            return this._addLayer(t, e),
            this._map ? this._update() : this
        },
        addOverlay: function(t, e) {
            return this._addLayer(t, e, !0),
            this._map ? this._update() : this
        },
        removeLayer: function(t) {
            t.off("add remove", this._onLayerChange, this);
            var e = this._getLayer(u(t));
            return e && this._layers.splice(this._layers.indexOf(e), 1),
            this._map ? this._update() : this
        },
        expand: function() {
            ge(this._container, "leaflet-control-layers-expanded"),
            this._form.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._form.clientHeight ? (ge(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : ye(this._form, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
        },
        collapse: function() {
            return ye(this._container, "leaflet-control-layers-expanded"),
            this
        },
        _initLayout: function() {
            var t = "leaflet-control-layers",
            e = this._container = de("div", t),
            i = this.options.collapsed;
            e.setAttribute("aria-haspopup", !0),
            Ue(e),
            Fe(e);
            var n = this._form = de("form", t + "-list");
            i && (this._map.on("click", this.collapse, this), ut || Ae(e, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            },
            this));
            var o = this._layersLink = de("a", t + "-toggle", e);
            o.href = "#",
            o.title = "Layers",
            kt ? (Ae(o, "click", He), Ae(o, "click", this.expand, this)) : Ae(o, "focus", this.expand, this),
            i || this.expand(),
            this._baseLayersList = de("div", t + "-base", n),
            this._separator = de("div", t + "-separator", n),
            this._overlaysList = de("div", t + "-overlays", n),
            e.appendChild(n)
        },
        _getLayer: function(t) {
            for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && u(this._layers[e].layer) === t) return this._layers[e]
        },
        _addLayer: function(t, e, i) {
            this._map && t.on("add remove", this._onLayerChange, this),
            this._layers.push({
                layer: t,
                name: e,
                overlay: i
            }),
            this.options.sortLayers && this._layers.sort(m(function(t, e) {
                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
            },
            this)),
            this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed()
        },
        _update: function() {
            if (!this._container) return this;
            _e(this._baseLayersList),
            _e(this._overlaysList),
            this._layerControlInputs = [];
            var t, e, i, n, o = 0;
            for (i = 0; i < this._layers.length; i++) n = this._layers[i],
            this._addItem(n),
            e = e || n.overlay,
            t = t || !n.overlay,
            o += n.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t = t && 1 < o, this._baseLayersList.style.display = t ? "": "none"),
            this._separator.style.display = e && t ? "": "none",
            this
        },
        _onLayerChange: function(t) {
            this._handlingClick || this._update();
            var e = this._getLayer(u(t.target)),
            i = e.overlay ? "add" === t.type ? "overlayadd": "overlayremove": "add" === t.type ? "baselayerchange": null;
            i && this._map.fire(i, e)
        },
        _createRadioElement: function(t, e) {
            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"': "") + "/>",
            n = document.createElement("div");
            return n.innerHTML = i,
            n.firstChild
        },
        _addItem: function(t) {
            var e, i = document.createElement("label"),
            n = this._map.hasLayer(t.layer);
            t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers", n),
            this._layerControlInputs.push(e),
            e.layerId = u(t.layer),
            Ae(e, "click", this._onInputClick, this);
            var o = document.createElement("span");
            o.innerHTML = " " + t.name;
            var s = document.createElement("div");
            return i.appendChild(s),
            s.appendChild(e),
            s.appendChild(o),
            (t.overlay ? this._overlaysList: this._baseLayersList).appendChild(i),
            this._checkDisabledLayers(),
            i
        },
        _onInputClick: function() {
            var t, e, i = this._layerControlInputs,
            n = [],
            o = [];
            this._handlingClick = !0;
            for (var s = i.length - 1; 0 <= s; s--) t = i[s],
            e = this._getLayer(t.layerId).layer,
            t.checked ? n.push(e) : t.checked || o.push(e);
            for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
            this._handlingClick = !1,
            this._refocusOnMap()
        },
        _checkDisabledLayers: function() {
            for (var t, e, i = this._layerControlInputs,
            n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--) t = i[o],
            e = this._getLayer(t.layerId).layer,
            t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
        },
        _expandIfNotCollapsed: function() {
            return this._map && !this.options.collapsed && this.expand(),
            this
        },
        _expand: function() {
            return this.expand()
        },
        _collapse: function() {
            return this.collapse()
        }
    }),
    ri = ni.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "&#x2212;",
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
            var e = "leaflet-control-zoom",
            i = de("div", e + " leaflet-bar"),
            n = this.options;
            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn),
            this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut),
            this._updateDisabled(),
            t.on("zoomend zoomlevelschange", this._updateDisabled, this),
            i
        },
        onRemove: function(t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        },
        disable: function() {
            return this._disabled = !0,
            this._updateDisabled(),
            this
        },
        enable: function() {
            return this._disabled = !1,
            this._updateDisabled(),
            this
        },
        _zoomIn: function(t) { ! this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        },
        _zoomOut: function(t) { ! this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        },
        _createButton: function(t, e, i, n, o) {
            var s = de("a", i, n);
            return s.innerHTML = t,
            s.href = "#",
            s.title = e,
            s.setAttribute("role", "button"),
            s.setAttribute("aria-label", e),
            Ue(s),
            Ae(s, "click", He),
            Ae(s, "click", o, this),
            Ae(s, "click", this._refocusOnMap, this),
            s
        },
        _updateDisabled: function() {
            var t = this._map,
            e = "leaflet-disabled";
            ye(this._zoomInButton, e),
            ye(this._zoomOutButton, e),
            (this._disabled || t._zoom === t.getMinZoom()) && ge(this._zoomOutButton, e),
            (this._disabled || t._zoom === t.getMaxZoom()) && ge(this._zoomInButton, e)
        }
    });
    ei.mergeOptions({
        zoomControl: !0
    }),
    ei.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new ri, this.addControl(this.zoomControl))
    });
    var ai = ni.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
        },
        onAdd: function(t) {
            var e = "leaflet-control-scale",
            i = de("div", e),
            n = this.options;
            return this._addScales(n, e + "-line", i),
            t.on(n.updateWhenIdle ? "moveend": "move", this._update, this),
            t.whenReady(this._update, this),
            i
        },
        onRemove: function(t) {
            t.off(this.options.updateWhenIdle ? "moveend": "move", this._update, this)
        },
        _addScales: function(t, e, i) {
            t.metric && (this._mScale = de("div", e, i)),
            t.imperial && (this._iScale = de("div", e, i))
        },
        _update: function() {
            var t = this._map,
            e = t.getSize().y / 2,
            i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(i)
        },
        _updateScales: function(t) {
            this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t)
        },
        _updateMetric: function(t) {
            var e = this._getRoundNum(t),
            i = e < 1e3 ? e + " m": e / 1e3 + " km";
            this._updateScale(this._mScale, i, e / t)
        },
        _updateImperial: function(t) {
            var e, i, n, o = 3.2808399 * t;
            5280 < o ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
        },
        _updateScale: function(t, e, i) {
            t.style.width = Math.round(this.options.maxWidth * i) + "px",
            t.innerHTML = e
        },
        _getRoundNum: function(t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
            i = t / e;
            return e * (i = 10 <= i ? 10 : 5 <= i ? 5 : 3 <= i ? 3 : 2 <= i ? 2 : 1)
        }
    }),
    hi = ni.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize: function(t) {
            y(this, t),
            this._attributions = {}
        },
        onAdd: function(t) {
            for (var e in (t.attributionControl = this)._container = de("div", "leaflet-control-attribution"), Ue(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(),
            this._container
        },
        setPrefix: function(t) {
            return this.options.prefix = t,
            this._update(),
            this
        },
        addAttribution: function(t) {
            return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()),
            this
        },
        removeAttribution: function(t) {
            return t && this._attributions[t] && (this._attributions[t]--, this._update()),
            this
        },
        _update: function() {
            if (this._map) {
                var t = [];
                for (var e in this._attributions) this._attributions[e] && t.push(e);
                var i = [];
                this.options.prefix && i.push(this.options.prefix),
                t.length && i.push(t.join(", ")),
                this._container.innerHTML = i.join(" | ")
            }
        }
    });
    ei.mergeOptions({
        attributionControl: !0
    }),
    ei.addInitHook(function() {
        this.options.attributionControl && (new hi).addTo(this)
    });
    ni.Layers = si,
    ni.Zoom = ri,
    ni.Scale = ai,
    ni.Attribution = hi,
    oi.layers = function(t, e, i) {
        return new si(t, e, i)
    },
    oi.zoom = function(t) {
        return new ri(t)
    },
    oi.scale = function(t) {
        return new ai(t)
    },
    oi.attribution = function(t) {
        return new hi(t)
    };
    var ui = A.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            return this._enabled || (this._enabled = !0, this.addHooks()),
            this
        },
        disable: function() {
            return this._enabled && (this._enabled = !1, this.removeHooks()),
            this
        },
        enabled: function() {
            return !! this._enabled
        }
    });
    ui.addTo = function(t, e) {
        return t.addHandler(e, this),
        this
    };
    var li, ci = {
        Events: B
    },
    di = kt ? "touchstart mousedown": "mousedown",
    pi = {
        mousedown: "mouseup",
        touchstart: "touchend",
        pointerdown: "touchend",
        MSPointerDown: "touchend"
    },
    _i = {
        mousedown: "mousemove",
        touchstart: "touchmove",
        pointerdown: "touchmove",
        MSPointerDown: "touchmove"
    },
    mi = R.extend({
        options: {
            clickTolerance: 3
        },
        initialize: function(t, e, i, n) {
            y(this, n),
            this._element = t,
            this._dragStartTarget = e || t,
            this._preventOutline = i
        },
        enable: function() {
            this._enabled || (Ae(this._dragStartTarget, di, this._onDown, this), this._enabled = !0)
        },
        disable: function() {
            this._enabled && (mi._dragging === this && this.finishDrag(), Re(this._dragStartTarget, di, this._onDown, this), this._enabled = !1, this._moved = !1)
        },
        _onDown: function(t) {
            if (!t._simulated && this._enabled && (this._moved = !1, !ve(this._element, "leaflet-zoom-anim") && !(mi._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((mi._dragging = this)._preventOutline && Ee(this._element), Ce(), ie(), this._moving)))) {
                this.fire("down");
                var e = t.touches ? t.touches[0] : t,
                i = Ze(this._element);
                this._startPoint = new j(e.clientX, e.clientY),
                this._parentScale = Ie(i),
                Ae(document, _i[t.type], this._onMove, this),
                Ae(document, pi[t.type], this._onUp, this)
            }
        },
        _onMove: function(t) {
            if (!t._simulated && this._enabled) if (t.touches && 1 < t.touches.length) this._moved = !0;
            else {
                var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                i = new j(e.clientX, e.clientY)._subtract(this._startPoint); (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, We(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ze(this._element).subtract(i), ge(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ge(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, I(this._animRequest), this._lastEvent = t, this._animRequest = Z(this._updatePosition, this, !0)))
            }
        },
        _updatePosition: function() {
            var t = {
                originalEvent: this._lastEvent
            };
            this.fire("predrag", t),
            Te(this._element, this._newPos),
            this.fire("drag", t)
        },
        _onUp: function(t) { ! t._simulated && this._enabled && this.finishDrag()
        },
        finishDrag: function() {
            for (var t in ye(document.body, "leaflet-dragging"), this._lastTarget && (ye(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), _i) Re(document, _i[t], this._onMove, this),
            Re(document, pi[t], this._onUp, this);
            ke(),
            ne(),
            this._moved && this._moving && (I(this._animRequest), this.fire("dragend", {
                distance: this._newPos.distanceTo(this._startPos)
            })),
            this._moving = !1,
            mi._dragging = !1
        }
    });
    function fi(t, e) {
        if (!e || !t.length) return t.slice();
        var i = e * e;
        return t = function(t, e) {
            var i = t.length,
            n = new(typeof Uint8Array != void 0 + "" ? Uint8Array: Array)(i);
            n[0] = n[i - 1] = 1,
            function t(e, i, n, o, s) {
                var r, a, h, u = 0;
                for (a = o + 1; a <= s - 1; a++) h = wi(e[a], e[o], e[s], !0),
                u < h && (r = a, u = h);
                n < u && (i[r] = 1, t(e, i, n, o, r), t(e, i, n, r, s))
            } (t, n, e, 0, i - 1);
            var o, s = [];
            for (o = 0; o < i; o++) n[o] && s.push(t[o]);
            return s
        } (t = function(t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) r = t[n],
            a = t[o],
            void 0,
            h = a.x - r.x,
            u = a.y - r.y,
            e < h * h + u * u && (i.push(t[n]), o = n);
            var r, a, h, u;
            o < s - 1 && i.push(t[s - 1]);
            return i
        } (t, i), i)
    }
    function vi(t, e, i) {
        return Math.sqrt(wi(t, e, i, !0))
    }
    function gi(t, e, i, n, o) {
        var s, r, a, h = n ? li: xi(t, i),
        u = xi(e, i);
        for (li = u;;) {
            if (! (h | u)) return [t, e];
            if (h & u) return ! 1;
            a = xi(r = yi(t, e, s = h || u, i, o), i),
            s === h ? (t = r, h = a) : (e = r, u = a)
        }
    }
    function yi(t, e, i, n, o) {
        var s, r, a = e.x - t.x,
        h = e.y - t.y,
        u = n.min,
        l = n.max;
        return 8 & i ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & i ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & i ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & i && (s = u.x, r = t.y + h * (u.x - t.x) / a),
        new j(s, r, o)
    }
    function xi(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
        t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
        i
    }
    function wi(t, e, i, n) {
        var o, s = e.x,
        r = e.y,
        a = i.x - s,
        h = i.y - r,
        u = a * a + h * h;
        return 0 < u && (1 < (o = ((t.x - s) * a + (t.y - r) * h) / u) ? (s = i.x, r = i.y) : 0 < o && (s += a * o, r += h * o)),
        a = t.x - s,
        h = t.y - r,
        n ? a * a + h * h: new j(s, r)
    }
    function bi(t) {
        return ! P(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }
    function Li(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
        bi(t)
    }
    var Pi = (Object.freeze || Object)({
        simplify: fi,
        pointToSegmentDistance: vi,
        closestPointOnSegment: function(t, e, i) {
            return wi(t, e, i)
        },
        clipSegment: gi,
        _getEdgeIntersection: yi,
        _getBitCode: xi,
        _sqClosestPointOnSegment: wi,
        isFlat: bi,
        _flat: Li
    });
    function Ti(t, e, i) {
        var n, o, s, r, a, h, u, l, c, d = [1, 4, 2, 8];
        for (o = 0, u = t.length; o < u; o++) t[o]._code = xi(t[o], e);
        for (r = 0; r < 4; r++) {
            for (l = d[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o],
            h = t[s],
            a._code & l ? h._code & l || ((c = yi(h, a, l, e, i))._code = xi(c, e), n.push(c)) : (h._code & l && ((c = yi(h, a, l, e, i))._code = xi(c, e), n.push(c)), n.push(a));
            t = n
        }
        return t
    }
    var zi, Mi = (Object.freeze || Object)({
        clipPolygon: Ti
    }),
    Ci = {
        project: function(t) {
            return new j(t.lng, t.lat)
        },
        unproject: function(t) {
            return new G(t.y, t.x)
        },
        bounds: new F([ - 180, -90], [180, 90])
    },
    ki = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new F([ - 20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
        project: function(t) {
            var e = Math.PI / 180,
            i = this.R,
            n = t.lat * e,
            o = this.R_MINOR / i,
            s = Math.sqrt(1 - o * o),
            r = s * Math.sin(n),
            a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
            return n = -i * Math.log(Math.max(a, 1e-10)),
            new j(t.lng * e * i, n)
        },
        unproject: function(t) {
            for (var e, i = 180 / Math.PI,
            n = this.R,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o), r = Math.exp( - t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && 1e-7 < Math.abs(u); h++) e = s * Math.sin(a),
            e = Math.pow((1 - e) / (1 + e), s / 2),
            a += u = Math.PI / 2 - 2 * Math.atan(r * e) - a;
            return new G(a * i, t.x * i / n)
        }
    },
    Ei = (Object.freeze || Object)({
        LonLat: Ci,
        Mercator: ki,
        SphericalMercator: X
    }),
    Si = h({},
    Y, {
        code: "EPSG:3395",
        projection: ki,
        transformation: (zi = .5 / (Math.PI * ki.R), $(zi, .5, -zi, .5))
    }),
    Zi = h({},
    Y, {
        code: "EPSG:4326",
        projection: Ci,
        transformation: $(1 / 180, 1, -1 / 180, .5)
    }),
    Ii = h({},
    q, {
        projection: Ci,
        transformation: $(1, 0, -1, 0),
        scale: function(t) {
            return Math.pow(2, t)
        },
        zoom: function(t) {
            return Math.log(t) / Math.LN2
        },
        distance: function(t, e) {
            var i = e.lng - t.lng,
            n = e.lat - t.lat;
            return Math.sqrt(i * i + n * n)
        },
        infinite: !0
    });
    q.Earth = Y,
    q.EPSG3395 = Si,
    q.EPSG3857 = tt,
    q.EPSG900913 = et,
    q.EPSG4326 = Zi,
    q.Simple = Ii;
    var Oi = R.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this),
            this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t: this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[u(t)] = this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[u(t)],
            this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var e = t.target;
            if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                    var i = this.getEvents();
                    e.on(i, this),
                    this.once("remove",
                    function() {
                        e.off(i, this)
                    },
                    this)
                }
                this.onAdd(e),
                this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()),
                this.fire("add"),
                e.fire("layeradd", {
                    layer: this
                })
            }
        }
    });
    ei.include({
        addLayer: function(t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var e = u(t);
            return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)),
            this
        },
        removeLayer: function(t) {
            var e = u(t);
            return this._layers[e] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null),
            this
        },
        hasLayer: function(t) {
            return !! t && u(t) in this._layers
        },
        eachLayer: function(t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        },
        _addLayers: function(t) {
            for (var e = 0,
            i = (t = t ? P(t) ? t: [t] : []).length; e < i; e++) this.addLayer(t[e])
        },
        _addZoomLimit: function(t) { ! isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[u(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            var e = u(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t = 1 / 0,
            e = -1 / 0,
            i = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t: Math.min(t, o.minZoom),
                e = void 0 === o.maxZoom ? e: Math.max(e, o.maxZoom)
            }
            this._layersMaxZoom = e === -1 / 0 ? void 0 : e,
            this._layersMinZoom = t === 1 / 0 ? void 0 : t,
            i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
            void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
            void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var Ai = Oi.extend({
        initialize: function(t, e) {
            var i, n;
            if (y(this, e), this._layers = {},
            t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i])
        },
        addLayer: function(t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t,
            this._map && this._map.addLayer(t),
            this
        },
        removeLayer: function(t) {
            var e = t in this._layers ? t: this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
            delete this._layers[e],
            this
        },
        hasLayer: function(t) {
            return !! t && (t in this._layers || this.getLayerId(t) in this._layers)
        },
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this)
        },
        invoke: function(t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n);
            return this
        },
        onAdd: function(t) {
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function(t) {
            this.eachLayer(t.removeLayer, t)
        },
        eachLayer: function(t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        },
        getLayer: function(t) {
            return this._layers[t]
        },
        getLayers: function() {
            var t = [];
            return this.eachLayer(t.push, t),
            t
        },
        setZIndex: function(t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: function(t) {
            return u(t)
        }
    }),
    Bi = Ai.extend({
        addLayer: function(t) {
            return this.hasLayer(t) ? this: (t.addEventParent(this), Ai.prototype.addLayer.call(this, t), this.fire("layeradd", {
                layer: t
            }))
        },
        removeLayer: function(t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ai.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                layer: t
            })) : this
        },
        setStyle: function(t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function() {
            return this.invoke("bringToFront")
        },
        bringToBack: function() {
            return this.invoke("bringToBack")
        },
        getBounds: function() {
            var t = new W;
            for (var e in this._layers) {
                var i = this._layers[e];
                t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
            }
            return t
        }
    }),
    Ri = A.extend({
        options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0]
        },
        initialize: function(t) {
            y(this, t)
        },
        createIcon: function(t) {
            return this._createIcon("icon", t)
        },
        createShadow: function(t) {
            return this._createIcon("shadow", t)
        },
        _createIcon: function(t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n = this._createImg(i, e && "IMG" === e.tagName ? e: null);
            return this._setIconStyles(n, t),
            n
        },
        _setIconStyles: function(t, e) {
            var i = this.options,
            n = i[e + "Size"];
            "number" == typeof n && (n = [n, n]);
            var o = D(n),
            s = D("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
            t.className = "leaflet-marker-" + e + " " + (i.className || ""),
            s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"),
            o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
        },
        _createImg: function(t, e) {
            return (e = e || document.createElement("img")).src = t,
            e
        },
        _getIconUrl: function(t) {
            return Zt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
        }
    });
    var ji = Ri.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
            return ji.imagePath || (ji.imagePath = this._detectIconPath()),
            (this.options.imagePath || ji.imagePath) + Ri.prototype._getIconUrl.call(this, t)
        },
        _detectIconPath: function() {
            var t = de("div", "leaflet-default-icon-path", document.body),
            e = ce(t, "background-image") || ce(t, "backgroundImage");
            return document.body.removeChild(t),
            e = null === e || 0 !== e.indexOf("url") ? "": e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
        }
    }),
    Ni = ui.extend({
        initialize: function(t) {
            this._marker = t
        },
        addHooks: function() {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new mi(t, t, !0)),
            this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            },
            this).enable(),
            ge(t, "leaflet-marker-draggable")
        },
        removeHooks: function() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            },
            this).disable(),
            this._marker._icon && ye(this._marker._icon, "leaflet-marker-draggable")
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        _adjustPan: function(t) {
            var e = this._marker,
            i = e._map,
            n = this._marker.options.autoPanSpeed,
            o = this._marker.options.autoPanPadding,
            s = ze(e._icon),
            r = i.getPixelBounds(),
            a = i.getPixelOrigin(),
            h = U(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
            if (!h.contains(s)) {
                var u = D((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
                i.panBy(u, {
                    animate: !1
                }),
                this._draggable._newPos._add(u),
                this._draggable._startPos._add(u),
                Te(e._icon, this._draggable._newPos),
                this._onDrag(t),
                this._panRequest = Z(this._adjustPan.bind(this, t))
            }
        },
        _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng(),
            this._marker.closePopup().fire("movestart").fire("dragstart")
        },
        _onPreDrag: function(t) {
            this._marker.options.autoPan && (I(this._panRequest), this._panRequest = Z(this._adjustPan.bind(this, t)))
        },
        _onDrag: function(t) {
            var e = this._marker,
            i = e._shadow,
            n = ze(e._icon),
            o = e._map.layerPointToLatLng(n);
            i && Te(i, n),
            e._latlng = o,
            t.latlng = o,
            t.oldLatLng = this._oldLatLng,
            e.fire("move", t).fire("drag", t)
        },
        _onDragEnd: function(t) {
            I(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", t)
        }
    }),
    Di = Oi.extend({
        options: {
            icon: new ji,
            interactive: !0,
            keyboard: !0,
            title: "",
            alt: "",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: "markerPane",
            bubblingMouseEvents: !1,
            draggable: !1,
            autoPan: !1,
            autoPanPadding: [50, 50],
            autoPanSpeed: 10
        },
        initialize: function(t, e) {
            y(this, e),
            this._latlng = V(t)
        },
        onAdd: function(t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
            this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update()
        },
        onRemove: function(t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow()
        },
        getEvents: function() {
            return {
                zoom: this.update,
                viewreset: this.update
            }
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            var e = this._latlng;
            return this._latlng = V(t),
            this.update(),
            this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
            })
        },
        setZIndexOffset: function(t) {
            return this.options.zIndexOffset = t,
            this.update()
        },
        setIcon: function(t) {
            return this.options.icon = t,
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
        },
        getElement: function() {
            return this._icon
        },
        update: function() {
            if (this._icon && this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t)
            }
            return this
        },
        _initIcon: function() {
            var t = this.options,
            e = "leaflet-zoom-" + (this._zoomAnimated ? "animated": "hide"),
            i = t.icon.createIcon(this._icon),
            n = !1;
            i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")),
            ge(i, e),
            t.keyboard && (i.tabIndex = "0"),
            this._icon = i,
            t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            var o = t.icon.createShadow(this._shadow),
            s = !1;
            o !== this._shadow && (this._removeShadow(), s = !0),
            o && (ge(o, e), o.alt = ""),
            this._shadow = o,
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            o && s && this.getPane("shadowPane").appendChild(this._shadow)
        },
        _removeIcon: function() {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }),
            pe(this._icon),
            this.removeInteractiveTarget(this._icon),
            this._icon = null
        },
        _removeShadow: function() {
            this._shadow && pe(this._shadow),
            this._shadow = null
        },
        _setPos: function(t) {
            Te(this._icon, t),
            this._shadow && Te(this._shadow, t),
            this._zIndex = t.y + this.options.zIndexOffset,
            this._resetZIndex()
        },
        _updateZIndex: function(t) {
            this._icon.style.zIndex = this._zIndex + t
        },
        _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(e)
        },
        _initInteraction: function() {
            if (this.options.interactive && (ge(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ni)) {
                var t = this.options.draggable;
                this.dragging && (t = this.dragging.enabled(), this.dragging.disable()),
                this.dragging = new Ni(this),
                t && this.dragging.enable()
            }
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this
        },
        _updateOpacity: function() {
            var t = this.options.opacity;
            be(this._icon, t),
            this._shadow && be(this._shadow, t)
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function() {
            this._updateZIndex(0)
        },
        _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor
        },
        _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor
        }
    });
    var Fi = Oi.extend({
        options: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0,
            bubblingMouseEvents: !0
        },
        beforeAdd: function(t) {
            this._renderer = t.getRenderer(this)
        },
        onAdd: function() {
            this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this)
        },
        onRemove: function() {
            this._renderer._removePath(this)
        },
        redraw: function() {
            return this._map && this._renderer._updatePath(this),
            this
        },
        setStyle: function(t) {
            return y(this, t),
            this._renderer && this._renderer._updateStyle(this),
            this
        },
        bringToFront: function() {
            return this._renderer && this._renderer._bringToFront(this),
            this
        },
        bringToBack: function() {
            return this._renderer && this._renderer._bringToBack(this),
            this
        },
        getElement: function() {
            return this._path
        },
        _reset: function() {
            this._project(),
            this._update()
        },
        _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
        }
    }),
    Ui = Fi.extend({
        options: {
            fill: !0,
            radius: 10
        },
        initialize: function(t, e) {
            y(this, e),
            this._latlng = V(t),
            this._radius = this.options.radius
        },
        setLatLng: function(t) {
            return this._latlng = V(t),
            this.redraw(),
            this.fire("move", {
                latlng: this._latlng
            })
        },
        getLatLng: function() {
            return this._latlng
        },
        setRadius: function(t) {
            return this.options.radius = this._radius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._radius
        },
        setStyle: function(t) {
            var e = t && t.radius || this._radius;
            return Fi.prototype.setStyle.call(this, t),
            this.setRadius(e),
            this
        },
        _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng),
            this._updateBounds()
        },
        _updateBounds: function() {
            var t = this._radius,
            e = this._radiusY || t,
            i = this._clickTolerance(),
            n = [t + i, e + i];
            this._pxBounds = new F(this._point.subtract(n), this._point.add(n))
        },
        _update: function() {
            this._map && this._updatePath()
        },
        _updatePath: function() {
            this._renderer._updateCircle(this)
        },
        _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        },
        _containsPoint: function(t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        }
    });
    var Wi = Ui.extend({
        initialize: function(t, e, i) {
            if ("number" == typeof e && (e = h({},
            i, {
                radius: e
            })), y(this, e), this._latlng = V(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius
        },
        setRadius: function(t) {
            return this._mRadius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._mRadius
        },
        getBounds: function() {
            var t = [this._radius, this._radiusY || this._radius];
            return new W(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
        },
        setStyle: Fi.prototype.setStyle,
        _project: function() {
            var t = this._latlng.lng,
            e = this._latlng.lat,
            i = this._map,
            n = i.options.crs;
            if (n.distance === Y.distance) {
                var o = Math.PI / 180,
                s = this._mRadius / Y.R / o,
                r = i.project([e + s, t]),
                a = i.project([e - s, t]),
                h = r.add(a).divideBy(2),
                u = i.unproject(h).lat,
                l = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(u * o)) / (Math.cos(e * o) * Math.cos(u * o))) / o; (isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * e)),
                this._point = h.subtract(i.getPixelOrigin()),
                this._radius = isNaN(l) ? 0 : h.x - i.project([u, t - l]).x,
                this._radiusY = h.y - r.y
            } else {
                var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                this._point = i.latLngToLayerPoint(this._latlng),
                this._radius = this._point.x - i.latLngToLayerPoint(c).x
            }
            this._updateBounds()
        }
    });
    var Hi = Fi.extend({
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        initialize: function(t, e) {
            y(this, e),
            this._setLatLngs(t)
        },
        getLatLngs: function() {
            return this._latlngs
        },
        setLatLngs: function(t) {
            return this._setLatLngs(t),
            this.redraw()
        },
        isEmpty: function() {
            return ! this._latlngs.length
        },
        closestLayerPoint: function(t) {
            for (var e, i, n = 1 / 0,
            o = null,
            s = wi,
            r = 0,
            a = this._parts.length; r < a; r++) for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
                var c = s(t, e = h[u - 1], i = h[u], !0);
                c < n && (n = c, o = s(t, e, i))
            }
            return o && (o.distance = Math.sqrt(n)),
            o
        },
        getCenter: function() {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, r, a = this._rings[0],
            h = a.length;
            if (!h) return null;
            for (e = t = 0; t < h - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
            if (0 === e) return this._map.layerPointToLatLng(a[0]);
            for (n = t = 0; t < h - 1; t++) if (o = a[t], s = a[t + 1], e < (n += i = o.distanceTo(s))) return r = (n - e) / i,
            this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
        },
        getBounds: function() {
            return this._bounds
        },
        addLatLng: function(t, e) {
            return e = e || this._defaultShape(),
            t = V(t),
            e.push(t),
            this._bounds.extend(t),
            this.redraw()
        },
        _setLatLngs: function(t) {
            this._bounds = new W,
            this._latlngs = this._convertLatLngs(t)
        },
        _defaultShape: function() {
            return bi(this._latlngs) ? this._latlngs: this._latlngs[0]
        },
        _convertLatLngs: function(t) {
            for (var e = [], i = bi(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = V(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
            return e
        },
        _project: function() {
            var t = new F;
            this._rings = [],
            this._projectLatlngs(this._latlngs, this._rings, t);
            var e = this._clickTolerance(),
            i = new j(e, e);
            this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t)
        },
        _projectLatlngs: function(t, e, i) {
            var n, o, s = t[0] instanceof G,
            r = t.length;
            if (s) {
                for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]),
                i.extend(o[n]);
                e.push(o)
            } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i)
        },
        _clipPoints: function() {
            var t = this._renderer._bounds;
            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;
            else {
                var e, i, n, o, s, r, a, h = this._parts;
                for (n = e = 0, o = this._rings.length; e < o; e++) for (i = 0, s = (a = this._rings[e]).length; i < s - 1; i++)(r = gi(a[i], a[i + 1], t, i, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[i + 1] && i !== s - 2 || (h[n].push(r[1]), n++))
            }
        },
        _simplifyPoints: function() {
            for (var t = this._parts,
            e = this.options.smoothFactor,
            i = 0,
            n = t.length; i < n; i++) t[i] = fi(t[i], e)
        },
        _update: function() {
            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
        },
        _updatePath: function() {
            this._renderer._updatePoly(this)
        },
        _containsPoint: function(t, e) {
            var i, n, o, s, r, a, h = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t)) return ! 1;
            for (i = 0, s = this._parts.length; i < s; i++) for (n = 0, o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++) if ((e || 0 !== n) && vi(t, a[o], a[n]) <= h) return ! 0;
            return ! 1
        }
    });
    Hi._flat = Li;
    var Gi = Hi.extend({
        options: {
            fill: !0
        },
        isEmpty: function() {
            return ! this._latlngs.length || !this._latlngs[0].length
        },
        getCenter: function() {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, r, a, h, u = this._rings[0],
            l = u.length;
            if (!l) return null;
            for (s = r = a = 0, t = 0, e = l - 1; t < l; e = t++) i = u[t],
            n = u[e],
            o = i.y * n.x - n.y * i.x,
            r += (i.x + n.x) * o,
            a += (i.y + n.y) * o,
            s += 3 * o;
            return h = 0 === s ? u[0] : [r / s, a / s],
            this._map.layerPointToLatLng(h)
        },
        _convertLatLngs: function(t) {
            var e = Hi.prototype._convertLatLngs.call(this, t),
            i = e.length;
            return 2 <= i && e[0] instanceof G && e[0].equals(e[i - 1]) && e.pop(),
            e
        },
        _setLatLngs: function(t) {
            Hi.prototype._setLatLngs.call(this, t),
            bi(this._latlngs) && (this._latlngs = [this._latlngs])
        },
        _defaultShape: function() {
            return bi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
        },
        _clipPoints: function() {
            var t = this._renderer._bounds,
            e = this.options.weight,
            i = new j(e, e);
            if (t = new F(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;
            else for (var n, o = 0,
            s = this._rings.length; o < s; o++)(n = Ti(this._rings[o], t, !0)).length && this._parts.push(n)
        },
        _updatePath: function() {
            this._renderer._updatePoly(this, !0)
        },
        _containsPoint: function(t) {
            var e, i, n, o, s, r, a, h, u = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t)) return ! 1;
            for (o = 0, a = this._parts.length; o < a; o++) for (s = 0, r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++) i = e[s],
            n = e[r],
            i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
            return u || Hi.prototype._containsPoint.call(this, t, !0)
        }
    });
    var Vi = Bi.extend({
        initialize: function(t, e) {
            y(this, e),
            this._layers = {},
            t && this.addData(t)
        },
        addData: function(t) {
            var e, i, n, o = P(t) ? t: t.features;
            if (o) {
                for (e = 0, i = o.length; e < i; e++)((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this
            }
            var s = this.options;
            if (s.filter && !s.filter(t)) return this;
            var r = Ki(t, s);
            return r ? (r.feature = Qi(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
        },
        resetStyle: function(t) {
            return t.options = h({},
            t.defaultOptions),
            this._setLayerStyle(t, this.options.style),
            this
        },
        setStyle: function(e) {
            return this.eachLayer(function(t) {
                this._setLayerStyle(t, e)
            },
            this)
        },
        _setLayerStyle: function(t, e) {
            "function" == typeof e && (e = e(t.feature)),
            t.setStyle && t.setStyle(e)
        }
    });
    function Ki(t, e) {
        var i, n, o, s, r = "Feature" === t.type ? t.geometry: t,
        a = r ? r.coordinates: null,
        h = [],
        u = e && e.pointToLayer,
        l = e && e.coordsToLatLng || qi;
        if (!a && !r) return null;
        switch (r.type) {
        case "Point":
            return i = l(a),
            u ? u(t, i) : new Di(i);
        case "MultiPoint":
            for (o = 0, s = a.length; o < s; o++) i = l(a[o]),
            h.push(u ? u(t, i) : new Di(i));
            return new Bi(h);
        case "LineString":
        case "MultiLineString":
            return n = Yi(a, "LineString" === r.type ? 0 : 1, l),
            new Hi(n, e);
        case "Polygon":
        case "MultiPolygon":
            return n = Yi(a, "Polygon" === r.type ? 1 : 2, l),
            new Gi(n, e);
        case "GeometryCollection":
            for (o = 0, s = r.geometries.length; o < s; o++) {
                var c = Ki({
                    geometry: r.geometries[o],
                    type: "Feature",
                    properties: t.properties
                },
                e);
                c && h.push(c)
            }
            return new Bi(h);
        default:
            throw new Error("Invalid GeoJSON object.")
        }
    }
    function qi(t) {
        return new G(t[1], t[0], t[2])
    }
    function Yi(t, e, i) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++) n = e ? Yi(t[s], e - 1, i) : (i || qi)(t[s]),
        o.push(n);
        return o
    }
    function Xi(t, e) {
        return e = "number" == typeof e ? e: 6,
        void 0 !== t.alt ? [f(t.lng, e), f(t.lat, e), f(t.alt, e)] : [f(t.lng, e), f(t.lat, e)]
    }
    function Ji(t, e, i, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? Ji(t[s], e - 1, i, n) : Xi(t[s], n));
        return ! e && i && o.push(o[0]),
        o
    }
    function $i(t, e) {
        return t.feature ? h({},
        t.feature, {
            geometry: e
        }) : Qi(e)
    }
    function Qi(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t: {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }
    var tn = {
        toGeoJSON: function(t) {
            return $i(this, {
                type: "Point",
                coordinates: Xi(this.getLatLng(), t)
            })
        }
    };
    function en(t, e) {
        return new Vi(t, e)
    }
    Di.include(tn),
    Wi.include(tn),
    Ui.include(tn),
    Hi.include({
        toGeoJSON: function(t) {
            var e = !bi(this._latlngs);
            return $i(this, {
                type: (e ? "Multi": "") + "LineString",
                coordinates: Ji(this._latlngs, e ? 1 : 0, !1, t)
            })
        }
    }),
    Gi.include({
        toGeoJSON: function(t) {
            var e = !bi(this._latlngs),
            i = e && !bi(this._latlngs[0]),
            n = Ji(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return e || (n = [n]),
            $i(this, {
                type: (i ? "Multi": "") + "Polygon",
                coordinates: n
            })
        }
    }),
    Ai.include({
        toMultiPoint: function(e) {
            var i = [];
            return this.eachLayer(function(t) {
                i.push(t.toGeoJSON(e).geometry.coordinates)
            }),
            $i(this, {
                type: "MultiPoint",
                coordinates: i
            })
        },
        toGeoJSON: function(n) {
            var t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t) return this.toMultiPoint(n);
            var o = "GeometryCollection" === t,
            s = [];
            return this.eachLayer(function(t) {
                if (t.toGeoJSON) {
                    var e = t.toGeoJSON(n);
                    if (o) s.push(e.geometry);
                    else {
                        var i = Qi(e);
                        "FeatureCollection" === i.type ? s.push.apply(s, i.features) : s.push(i)
                    }
                }
            }),
            o ? $i(this, {
                geometries: s,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: s
            }
        }
    });
    var nn = en,
    on = Oi.extend({
        options: {
            opacity: 1,
            alt: "",
            interactive: !1,
            crossOrigin: !1,
            errorOverlayUrl: "",
            zIndex: 1,
            className: ""
        },
        initialize: function(t, e, i) {
            this._url = t,
            this._bounds = H(e),
            y(this, i)
        },
        onAdd: function() {
            this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive && (ge(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset()
        },
        onRemove: function() {
            pe(this._image),
            this.options.interactive && this.removeInteractiveTarget(this._image)
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._image && this._updateOpacity(),
            this
        },
        setStyle: function(t) {
            return t.opacity && this.setOpacity(t.opacity),
            this
        },
        bringToFront: function() {
            return this._map && me(this._image),
            this
        },
        bringToBack: function() {
            return this._map && fe(this._image),
            this
        },
        setUrl: function(t) {
            return this._url = t,
            this._image && (this._image.src = t),
            this
        },
        setBounds: function(t) {
            return this._bounds = H(t),
            this._map && this._reset(),
            this
        },
        getEvents: function() {
            var t = {
                zoom: this._reset,
                viewreset: this._reset
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        getBounds: function() {
            return this._bounds
        },
        getElement: function() {
            return this._image
        },
        _initImage: function() {
            var t = "IMG" === this._url.tagName,
            e = this._image = t ? this._url: de("img");
            ge(e, "leaflet-image-layer"),
            this._zoomAnimated && ge(e, "leaflet-zoom-animated"),
            this.options.className && ge(e, this.options.className),
            e.onselectstart = c,
            e.onmousemove = c,
            e.onload = m(this.fire, this, "load"),
            e.onerror = m(this._overlayOnError, this, "error"),
            (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "": this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t ? this._url = e.src: (e.src = this._url, e.alt = this.options.alt)
        },
        _animateZoom: function(t) {
            var e = this._map.getZoomScale(t.zoom),
            i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            Pe(this._image, i, e)
        },
        _reset: function() {
            var t = this._image,
            e = new F(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
            i = e.getSize();
            Te(t, e.min),
            t.style.width = i.x + "px",
            t.style.height = i.y + "px"
        },
        _updateOpacity: function() {
            be(this._image, this.options.opacity)
        },
        _updateZIndex: function() {
            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
        },
        _overlayOnError: function() {
            this.fire("error");
            var t = this.options.errorOverlayUrl;
            t && this._url !== t && (this._url = t, this._image.src = t)
        }
    }),
    sn = function(t, e, i) {
        return new on(t, e, i)
    },
    rn = on.extend({
        options: {
            autoplay: !0,
            loop: !0
        },
        _initImage: function() {
            var t = "VIDEO" === this._url.tagName,
            e = this._image = t ? this._url: de("video");
            if (ge(e, "leaflet-image-layer"), this._zoomAnimated && ge(e, "leaflet-zoom-animated"), e.onselectstart = c, e.onmousemove = c, e.onloadeddata = m(this.fire, this, "load"), t) {
                for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
                this._url = 0 < i.length ? n: [e.src]
            } else {
                P(this._url) || (this._url = [this._url]),
                e.autoplay = !!this.options.autoplay,
                e.loop = !!this.options.loop;
                for (var s = 0; s < this._url.length; s++) {
                    var r = de("source");
                    r.src = this._url[s],
                    e.appendChild(r)
                }
            }
        }
    });
    var an = Oi.extend({
        options: {
            offset: [0, 7],
            className: "",
            pane: "popupPane"
        },
        initialize: function(t, e) {
            y(this, t),
            this._source = e
        },
        onAdd: function(t) {
            this._zoomAnimated = t._zoomAnimated,
            this._container || this._initLayout(),
            t._fadeAnimated && be(this._container, 0),
            clearTimeout(this._removeTimeout),
            this.getPane().appendChild(this._container),
            this.update(),
            t._fadeAnimated && be(this._container, 1),
            this.bringToFront()
        },
        onRemove: function(t) {
            t._fadeAnimated ? (be(this._container, 0), this._removeTimeout = setTimeout(m(pe, void 0, this._container), 200)) : pe(this._container)
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            return this._latlng = V(t),
            this._map && (this._updatePosition(), this._adjustPan()),
            this
        },
        getContent: function() {
            return this._content
        },
        setContent: function(t) {
            return this._content = t,
            this.update(),
            this
        },
        getElement: function() {
            return this._container
        },
        update: function() {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
        },
        getEvents: function() {
            var t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        isOpen: function() {
            return !! this._map && this._map.hasLayer(this)
        },
        bringToFront: function() {
            return this._map && me(this._container),
            this
        },
        bringToBack: function() {
            return this._map && fe(this._container),
            this
        },
        _updateContent: function() {
            if (this._content) {
                var t = this._contentNode,
                e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof e) t.innerHTML = e;
                else {
                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.appendChild(e)
                }
                this.fire("contentupdate")
            }
        },
        _updatePosition: function() {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                e = D(this.options.offset),
                i = this._getAnchor();
                this._zoomAnimated ? Te(this._container, t.add(i)) : e = e.add(t).add(i);
                var n = this._containerBottom = -e.y,
                o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                this._container.style.bottom = n + "px",
                this._container.style.left = o + "px"
            }
        },
        _getAnchor: function() {
            return [0, 0]
        }
    }),
    hn = an.extend({
        options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: ""
        },
        openOn: function(t) {
            return t.openPopup(this),
            this
        },
        onAdd: function(t) {
            an.prototype.onAdd.call(this, t),
            t.fire("popupopen", {
                popup: this
            }),
            this._source && (this._source.fire("popupopen", {
                popup: this
            },
            !0), this._source instanceof Fi || this._source.on("preclick", De))
        },
        onRemove: function(t) {
            an.prototype.onRemove.call(this, t),
            t.fire("popupclose", {
                popup: this
            }),
            this._source && (this._source.fire("popupclose", {
                popup: this
            },
            !0), this._source instanceof Fi || this._source.off("preclick", De))
        },
        getEvents: function() {
            var t = an.prototype.getEvents.call(this);
            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick: this._map.options.closePopupOnClick) && (t.preclick = this._close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
        },
        _close: function() {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function() {
            var t = "leaflet-popup",
            e = this._container = de("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
            i = this._wrapper = de("div", t + "-content-wrapper", e);
            if (this._contentNode = de("div", t + "-content", i), Ue(i), Fe(this._contentNode), Ae(i, "contextmenu", De), this._tipContainer = de("div", t + "-tip-container", e), this._tip = de("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                var n = this._closeButton = de("a", t + "-close-button", e);
                n.href = "#close",
                n.innerHTML = "&#215;",
                Ae(n, "click", this._onCloseButtonClick, this)
            }
        },
        _updateLayout: function() {
            var t = this._contentNode,
            e = t.style;
            e.width = "",
            e.whiteSpace = "nowrap";
            var i = t.offsetWidth;
            i = Math.min(i, this.options.maxWidth),
            i = Math.max(i, this.options.minWidth),
            e.width = i + 1 + "px",
            e.whiteSpace = "",
            e.height = "";
            var n = t.offsetHeight,
            o = this.options.maxHeight,
            s = "leaflet-popup-scrolled";
            o && o < n ? (e.height = o + "px", ge(t, s)) : ye(t, s),
            this._containerWidth = this._container.offsetWidth
        },
        _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
            i = this._getAnchor();
            Te(this._container, e.add(i))
        },
        _adjustPan: function() {
            if (! (!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                var t = this._map,
                e = parseInt(ce(this._container, "marginBottom"), 10) || 0,
                i = this._container.offsetHeight + e,
                n = this._containerWidth,
                o = new j(this._containerLeft, -i - this._containerBottom);
                o._add(ze(this._container));
                var s = t.layerPointToContainerPoint(o),
                r = D(this.options.autoPanPadding),
                a = D(this.options.autoPanPaddingTopLeft || r),
                h = D(this.options.autoPanPaddingBottomRight || r),
                u = t.getSize(),
                l = 0,
                c = 0;
                s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x),
                s.x - l - a.x < 0 && (l = s.x - a.x),
                s.y + i + h.y > u.y && (c = s.y + i - u.y + h.y),
                s.y - c - a.y < 0 && (c = s.y - a.y),
                (l || c) && t.fire("autopanstart").panBy([l, c])
            }
        },
        _onCloseButtonClick: function(t) {
            this._close(),
            He(t)
        },
        _getAnchor: function() {
            return D(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
        }
    });
    ei.mergeOptions({
        closePopupOnClick: !0
    }),
    ei.include({
        openPopup: function(t, e, i) {
            return t instanceof hn || (t = new hn(i).setContent(t)),
            e && t.setLatLng(e),
            this.hasLayer(t) ? this: (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null),
            t && this.removeLayer(t),
            this
        }
    }),
    Oi.include({
        bindPopup: function(t, e) {
            return t instanceof hn ? (y(t, e), (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new hn(e, this)), this._popup.setContent(t)),
            this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0),
            this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null),
            this
        },
        openPopup: function(t, e) {
            if (t instanceof Oi || (e = t, t = this), t instanceof Bi) for (var i in this._layers) {
                t = this._layers[i];
                break
            }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
            this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)),
            this
        },
        closePopup: function() {
            return this._popup && this._popup._close(),
            this
        },
        togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)),
            this
        },
        isPopupOpen: function() {
            return !! this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t),
            this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var e = t.layer || t.target;
            this._popup && this._map && (He(t), e instanceof Fi ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var un = an.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function(t) {
            an.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire("tooltipopen", {
                tooltip: this
            }),
            this._source && this._source.fire("tooltipopen", {
                tooltip: this
            },
            !0)
        },
        onRemove: function(t) {
            an.prototype.onRemove.call(this, t),
            t.fire("tooltipclose", {
                tooltip: this
            }),
            this._source && this._source.fire("tooltipclose", {
                tooltip: this
            },
            !0)
        },
        getEvents: function() {
            var t = an.prototype.getEvents.call(this);
            return kt && !this.options.permanent && (t.preclick = this._close),
            t
        },
        _close: function() {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function() {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated": "hide");
            this._contentNode = this._container = de("div", t)
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
            var e = this._map,
            i = this._container,
            n = e.latLngToContainerPoint(e.getCenter()),
            o = e.layerPointToContainerPoint(t),
            s = this.options.direction,
            r = i.offsetWidth,
            a = i.offsetHeight,
            h = D(this.options.offset),
            u = this._getAnchor();
            t = "top" === s ? t.add(D( - r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t.subtract(D(r / 2 - h.x, -h.y, !0)) : "center" === s ? t.subtract(D(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t.add(D(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t.subtract(D(r + u.x - h.x, a / 2 - u.y - h.y, !0))),
            ye(i, "leaflet-tooltip-right"),
            ye(i, "leaflet-tooltip-left"),
            ye(i, "leaflet-tooltip-top"),
            ye(i, "leaflet-tooltip-bottom"),
            ge(i, "leaflet-tooltip-" + s),
            Te(i, t)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t,
            this._container && be(this._container, t)
        },
        _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(e)
        },
        _getAnchor: function() {
            return D(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    ei.include({
        openTooltip: function(t, e, i) {
            return t instanceof un || (t = new un(i).setContent(t)),
            e && t.setLatLng(e),
            this.hasLayer(t) ? this: this.addLayer(t)
        },
        closeTooltip: function(t) {
            return t && this.removeLayer(t),
            this
        }
    }),
    Oi.include({
        bindTooltip: function(t, e) {
            return t instanceof un ? (y(t, e), (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new un(e, this)), this._tooltip.setContent(t)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
            this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null),
            this
        },
        _initTooltipInteractions: function(t) {
            if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off": "on",
                i = {
                    remove: this.closeTooltip,
                    move: this._moveTooltip
                };
                this._tooltip.options.permanent ? i.add = this._openTooltip: (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), kt && (i.click = this._openTooltip)),
                this[e](i),
                this._tooltipHandlersAdded = !t
            }
        },
        openTooltip: function(t, e) {
            if (t instanceof Oi || (e = t, t = this), t instanceof Bi) for (var i in this._layers) {
                t = this._layers[i];
                break
            }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
            this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (ge(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))),
            this
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (ye(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))),
            this
        },
        toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
            this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t),
            this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _openTooltip: function(t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng: void 0)
        },
        _moveTooltip: function(t) {
            var e, i, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)),
            this._tooltip.setLatLng(n)
        }
    });
    var ln = Ri.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var e = t && "DIV" === t.tagName ? t: document.createElement("div"),
            i = this.options;
            if (e.innerHTML = !1 !== i.html ? i.html: "", i.bgPos) {
                var n = D(i.bgPos);
                e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(e, "icon"),
            e
        },
        createShadow: function() {
            return null
        }
    });
    Ri.Default = ji;
    var cn = Oi.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: Pt,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        },
        initialize: function(t) {
            y(this, t)
        },
        onAdd: function() {
            this._initContainer(),
            this._levels = {},
            this._tiles = {},
            this._resetView(),
            this._update()
        },
        beforeAdd: function(t) {
            t._addZoomLimit(this)
        },
        onRemove: function(t) {
            this._removeAllTiles(),
            pe(this._container),
            t._removeZoomLimit(this),
            this._container = null,
            this._tileZoom = void 0
        },
        bringToFront: function() {
            return this._map && (me(this._container), this._setAutoZIndex(Math.max)),
            this
        },
        bringToBack: function() {
            return this._map && (fe(this._container), this._setAutoZIndex(Math.min)),
            this
        },
        getContainer: function() {
            return this._container
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._updateOpacity(),
            this
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        isLoading: function() {
            return this._loading
        },
        redraw: function() {
            return this._map && (this._removeAllTiles(), this._update()),
            this
        },
        getEvents: function() {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove),
            this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        createTile: function() {
            return document.createElement("div")
        },
        getTileSize: function() {
            var t = this.options.tileSize;
            return t instanceof j ? t: new j(t, t)
        },
        _updateZIndex: function() {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function(t) {
            for (var e, i = this.getPane().children, n = -t( - 1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex,
            i[o] !== this._container && e && (n = t(n, +e));
            isFinite(n) && (this.options.zIndex = n + t( - 1, 1), this._updateZIndex())
        },
        _updateOpacity: function() {
            if (this._map && !rt) {
                be(this._container, this.options.opacity);
                var t = +new Date,
                e = !1,
                i = !1;
                for (var n in this._tiles) {
                    var o = this._tiles[n];
                    if (o.current && o.loaded) {
                        var s = Math.min(1, (t - o.loaded) / 200);
                        be(o.el, s),
                        s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0)
                    }
                }
                i && !this._noPrune && this._pruneTiles(),
                e && (I(this._fadeFrame), this._fadeFrame = Z(this._updateOpacity, this))
            }
        },
        _onOpaqueTile: c,
        _initContainer: function() {
            this._container || (this._container = de("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
        },
        _updateLevels: function() {
            var t = this._tileZoom,
            e = this.options.maxZoom;
            if (void 0 !== t) {
                for (var i in this._levels) this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (pe(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                var n = this._levels[t],
                o = this._map;
                return n || ((n = this._levels[t] = {}).el = de("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)),
                this._level = n
            }
        },
        _onUpdateLevel: c,
        _onRemoveLevel: c,
        _onCreateLevel: c,
        _pruneTiles: function() {
            if (this._map) {
                var t, e, i = this._map.getZoom();
                if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
                else {
                    for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                    for (t in this._tiles) if ((e = this._tiles[t]).current && !e.active) {
                        var n = e.coords;
                        this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                    }
                    for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                }
            }
        },
        _removeTilesAtZoom: function(t) {
            for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
        },
        _removeAllTiles: function() {
            for (var t in this._tiles) this._removeTile(t)
        },
        _invalidateAll: function() {
            for (var t in this._levels) pe(this._levels[t].el),
            this._onRemoveLevel(t),
            delete this._levels[t];
            this._removeAllTiles(),
            this._tileZoom = void 0
        },
        _retainParent: function(t, e, i, n) {
            var o = Math.floor(t / 2),
            s = Math.floor(e / 2),
            r = i - 1,
            a = new j( + o, +s);
            a.z = +r;
            var h = this._tileCoordsToKey(a),
            u = this._tiles[h];
            return u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0), n < r && this._retainParent(o, s, r, n))
        },
        _retainChildren: function(t, e, i, n) {
            for (var o = 2 * t; o < 2 * t + 2; o++) for (var s = 2 * e; s < 2 * e + 2; s++) {
                var r = new j(o, s);
                r.z = i + 1;
                var a = this._tileCoordsToKey(r),
                h = this._tiles[a];
                h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n))
            }
        },
        _resetView: function(t) {
            var e = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
        },
        _animateZoom: function(t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        },
        _clampZoom: function(t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom: void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom: t
        },
        _setView: function(t, e, i, n) {
            var o = this._clampZoom(Math.round(e)); (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
            var s = this.options.updateWhenZooming && o !== this._tileZoom;
            n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i),
            this._setZoomTransforms(t, e)
        },
        _setZoomTransforms: function(t, e) {
            for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
        },
        _setZoomTransform: function(t, e, i) {
            var n = this._map.getZoomScale(i, t.zoom),
            o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
            Lt ? Pe(t.el, o, n) : Te(t.el, o)
        },
        _resetGrid: function() {
            var t = this._map,
            e = t.options.crs,
            i = this._tileSize = this.getTileSize(),
            n = this._tileZoom,
            o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
            this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)],
            this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
        },
        _onMoveEnd: function() {
            this._map && !this._map._animatingZoom && this._update()
        },
        _getTiledPixelBounds: function(t) {
            var e = this._map,
            i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
            n = e.getZoomScale(i, this._tileZoom),
            o = e.project(t, this._tileZoom).floor(),
            s = e.getSize().divideBy(2 * n);
            return new F(o.subtract(s), o.add(s))
        },
        _update: function(t) {
            var e = this._map;
            if (e) {
                var i = this._clampZoom(e.getZoom());
                if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                    var n = this._getTiledPixelBounds(t),
                    o = this._pxBoundsToTileRange(n),
                    s = o.getCenter(),
                    r = [],
                    a = this.options.keepBuffer,
                    h = new F(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                    if (! (isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                    for (var u in this._tiles) {
                        var l = this._tiles[u].coords;
                        l.z === this._tileZoom && h.contains(new j(l.x, l.y)) || (this._tiles[u].current = !1)
                    }
                    if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i);
                    else {
                        for (var c = o.min.y; c <= o.max.y; c++) for (var d = o.min.x; d <= o.max.x; d++) {
                            var p = new j(d, c);
                            if (p.z = this._tileZoom, this._isValidTile(p)) {
                                var _ = this._tiles[this._tileCoordsToKey(p)];
                                _ ? _.current = !0 : r.push(p)
                            }
                        }
                        if (r.sort(function(t, e) {
                            return t.distanceTo(s) - e.distanceTo(s)
                        }), 0 !== r.length) {
                            this._loading || (this._loading = !0, this.fire("loading"));
                            var m = document.createDocumentFragment();
                            for (d = 0; d < r.length; d++) this._addTile(r[d], m);
                            this._level.el.appendChild(m)
                        }
                    }
                }
            }
        },
        _isValidTile: function(t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
                var i = this._globalTileRange;
                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return ! 1
            }
            if (!this.options.bounds) return ! 0;
            var n = this._tileCoordsToBounds(t);
            return H(this.options.bounds).overlaps(n)
        },
        _keyToBounds: function(t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        },
        _tileCoordsToNwSe: function(t) {
            var e = this._map,
            i = this.getTileSize(),
            n = t.scaleBy(i),
            o = n.add(i);
            return [e.unproject(n, t.z), e.unproject(o, t.z)]
        },
        _tileCoordsToBounds: function(t) {
            var e = this._tileCoordsToNwSe(t),
            i = new W(e[0], e[1]);
            return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)),
            i
        },
        _tileCoordsToKey: function(t) {
            return t.x + ":" + t.y + ":" + t.z
        },
        _keyToTileCoords: function(t) {
            var e = t.split(":"),
            i = new j( + e[0], +e[1]);
            return i.z = +e[2],
            i
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            e && (pe(e.el), delete this._tiles[t], this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
            }))
        },
        _initTile: function(t) {
            ge(t, "leaflet-tile");
            var e = this.getTileSize();
            t.style.width = e.x + "px",
            t.style.height = e.y + "px",
            t.onselectstart = c,
            t.onmousemove = c,
            rt && this.options.opacity < 1 && be(t, this.options.opacity),
            ut && !lt && (t.style.WebkitBackfaceVisibility = "hidden")
        },
        _addTile: function(t, e) {
            var i = this._getTilePos(t),
            n = this._tileCoordsToKey(t),
            o = this.createTile(this._wrapCoords(t), m(this._tileReady, this, t));
            this._initTile(o),
            this.createTile.length < 2 && Z(m(this._tileReady, this, t, null, o)),
            Te(o, i),
            this._tiles[n] = {
                el: o,
                coords: t,
                current: !0
            },
            e.appendChild(o),
            this.fire("tileloadstart", {
                tile: o,
                coords: t
            })
        },
        _tileReady: function(t, e, i) {
            e && this.fire("tileerror", {
                error: e,
                tile: i,
                coords: t
            });
            var n = this._tileCoordsToKey(t); (i = this._tiles[n]) && (i.loaded = +new Date, this._map._fadeAnimated ? (be(i.el, 0), I(this._fadeFrame), this._fadeFrame = Z(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (ge(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                tile: i.el,
                coords: t
            })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), rt || !this._map._fadeAnimated ? Z(this._pruneTiles, this) : setTimeout(m(this._pruneTiles, this), 250)))
        },
        _getTilePos: function(t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        },
        _wrapCoords: function(t) {
            var e = new j(this._wrapX ? l(t.x, this._wrapX) : t.x, this._wrapY ? l(t.y, this._wrapY) : t.y);
            return e.z = t.z,
            e
        },
        _pxBoundsToTileRange: function(t) {
            var e = this.getTileSize();
            return new F(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
        },
        _noTilesToLoad: function() {
            for (var t in this._tiles) if (!this._tiles[t].loaded) return ! 1;
            return ! 0
        }
    });
    var dn = cn.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
        },
        initialize: function(t, e) {
            this._url = t,
            (e = y(this, e)).detectRetina && Zt && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)),
            "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
            ut || this.on("tileunload", this._onTileRemove)
        },
        setUrl: function(t, e) {
            return this._url = t,
            e || this.redraw(),
            this
        },
        createTile: function(t, e) {
            var i = document.createElement("img");
            return Ae(i, "load", m(this._tileOnLoad, this, e, i)),
            Ae(i, "error", m(this._tileOnError, this, e, i)),
            (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "": this.options.crossOrigin),
            i.alt = "",
            i.setAttribute("role", "presentation"),
            i.src = this.getTileUrl(t),
            i
        },
        getTileUrl: function(t) {
            var e = {
                r: Zt ? "@2x": "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
                var i = this._globalTileRange.max.y - t.y;
                this.options.tms && (e.y = i),
                e["-y"] = i
            }
            return b(this._url, h(e, this.options))
        },
        _tileOnLoad: function(t, e) {
            rt ? setTimeout(m(t, this, null, e), 0) : t(null, e)
        },
        _tileOnError: function(t, e, i) {
            var n = this.options.errorTileUrl;
            n && e.getAttribute("src") !== n && (e.src = n),
            t(i, e)
        },
        _onTileRemove: function(t) {
            t.tile.onload = null
        },
        _getZoomForUrl: function() {
            var t = this._tileZoom,
            e = this.options.maxZoom;
            return this.options.zoomReverse && (t = e - t),
            t + this.options.zoomOffset
        },
        _getSubdomain: function(t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e]
        },
        _abortLoading: function() {
            var t, e;
            for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = c, e.onerror = c, e.complete || (e.src = z, pe(e), delete this._tiles[t]))
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            if (e) return dt || e.el.setAttribute("src", z),
            cn.prototype._removeTile.call(this, t)
        },
        _tileReady: function(t, e, i) {
            if (this._map && (!i || i.getAttribute("src") !== z)) return cn.prototype._tileReady.call(this, t, e, i)
        }
    });
    function pn(t, e) {
        return new dn(t, e)
    }
    var _n = dn.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function(t, e) {
            this._url = t;
            var i = h({},
            this.defaultWmsParams);
            for (var n in e) n in this.options || (i[n] = e[n]);
            var o = (e = y(this, e)).detectRetina && Zt ? 2 : 1,
            s = this.getTileSize();
            i.width = s.x * o,
            i.height = s.y * o,
            this.wmsParams = i
        },
        onAdd: function(t) {
            this._crs = this.options.crs || t.options.crs,
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = 1.3 <= this._wmsVersion ? "crs": "srs";
            this.wmsParams[e] = this._crs.code,
            dn.prototype.onAdd.call(this, t)
        },
        getTileUrl: function(t) {
            var e = this._tileCoordsToNwSe(t),
            i = this._crs,
            n = U(i.project(e[0]), i.project(e[1])),
            o = n.min,
            s = n.max,
            r = (1.3 <= this._wmsVersion && this._crs === Zi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
            a = dn.prototype.getTileUrl.call(this, t);
            return a + x(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=": "&bbox=") + r
        },
        setParams: function(t, e) {
            return h(this.wmsParams, t),
            e || this.redraw(),
            this
        }
    });
    dn.WMS = _n,
    pn.wms = function(t, e) {
        return new _n(t, e)
    };
    var mn = Oi.extend({
        options: {
            padding: .1,
            tolerance: 0
        },
        initialize: function(t) {
            y(this, t),
            u(this),
            this._layers = this._layers || {}
        },
        onAdd: function() {
            this._container || (this._initContainer(), this._zoomAnimated && ge(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this)
        },
        onRemove: function() {
            this.off("update", this._updatePaths, this),
            this._destroyContainer()
        },
        getEvents: function() {
            var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
            t
        },
        _onAnimZoom: function(t) {
            this._updateTransform(t.center, t.zoom)
        },
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        },
        _updateTransform: function(t, e) {
            var i = this._map.getZoomScale(e, this._zoom),
            n = ze(this._container),
            o = this._map.getSize().multiplyBy(.5 + this.options.padding),
            s = this._map.project(this._center, e),
            r = this._map.project(t, e).subtract(s),
            a = o.multiplyBy( - i).add(n).add(o).subtract(r);
            Lt ? Pe(this._container, a, i) : Te(this._container, a)
        },
        _reset: function() {
            for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
        },
        _onZoomEnd: function() {
            for (var t in this._layers) this._layers[t]._project()
        },
        _updatePaths: function() {
            for (var t in this._layers) this._layers[t]._update()
        },
        _update: function() {
            var t = this.options.padding,
            e = this._map.getSize(),
            i = this._map.containerPointToLayerPoint(e.multiplyBy( - t)).round();
            this._bounds = new F(i, i.add(e.multiplyBy(1 + 2 * t)).round()),
            this._center = this._map.getCenter(),
            this._zoom = this._map.getZoom()
        }
    }),
    fn = mn.extend({
        getEvents: function() {
            var t = mn.prototype.getEvents.call(this);
            return t.viewprereset = this._onViewPreReset,
            t
        },
        _onViewPreReset: function() {
            this._postponeUpdatePaths = !0
        },
        onAdd: function() {
            mn.prototype.onAdd.call(this),
            this._draw()
        },
        _initContainer: function() {
            var t = this._container = document.createElement("canvas");
            Ae(t, "mousemove", a(this._onMouseMove, 32, this), this),
            Ae(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
            Ae(t, "mouseout", this._handleMouseOut, this),
            this._ctx = t.getContext("2d")
        },
        _destroyContainer: function() {
            I(this._redrawRequest),
            delete this._ctx,
            pe(this._container),
            Re(this._container),
            delete this._container
        },
        _updatePaths: function() {
            if (!this._postponeUpdatePaths) {
                for (var t in this._redrawBounds = null,
                this._layers) this._layers[t]._update();
                this._redraw()
            }
        },
        _update: function() {
            if (!this._map._animatingZoom || !this._bounds) {
                this._drawnLayers = {},
                mn.prototype._update.call(this);
                var t = this._bounds,
                e = this._container,
                i = t.getSize(),
                n = Zt ? 2 : 1;
                Te(e, t.min),
                e.width = n * i.x,
                e.height = n * i.y,
                e.style.width = i.x + "px",
                e.style.height = i.y + "px",
                Zt && this._ctx.scale(2, 2),
                this._ctx.translate( - t.min.x, -t.min.y),
                this.fire("update")
            }
        },
        _reset: function() {
            mn.prototype._reset.call(this),
            this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
        },
        _initPath: function(t) {
            this._updateDashArray(t);
            var e = (this._layers[u(t)] = t)._order = {
                layer: t,
                prev: this._drawLast,
                next: null
            };
            this._drawLast && (this._drawLast.next = e),
            this._drawLast = e,
            this._drawFirst = this._drawFirst || this._drawLast
        },
        _addPath: function(t) {
            this._requestRedraw(t)
        },
        _removePath: function(t) {
            var e = t._order,
            i = e.next,
            n = e.prev;
            i ? i.prev = n: this._drawLast = n,
            n ? n.next = i: this._drawFirst = i,
            delete this._drawnLayers[t._leaflet_id],
            delete t._order,
            delete this._layers[u(t)],
            this._requestRedraw(t)
        },
        _updatePath: function(t) {
            this._extendRedrawBounds(t),
            t._project(),
            t._update(),
            this._requestRedraw(t)
        },
        _updateStyle: function(t) {
            this._updateDashArray(t),
            this._requestRedraw(t)
        },
        _updateDashArray: function(t) {
            if ("string" == typeof t.options.dashArray) {
                var e, i = t.options.dashArray.split(/[, ]+/),
                n = [];
                for (e = 0; e < i.length; e++) n.push(Number(i[e]));
                t.options._dashArray = n
            } else t.options._dashArray = t.options.dashArray
        },
        _requestRedraw: function(t) {
            this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || Z(this._redraw, this))
        },
        _extendRedrawBounds: function(t) {
            if (t._pxBounds) {
                var e = (t.options.weight || 0) + 1;
                this._redrawBounds = this._redrawBounds || new F,
                this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
            }
        },
        _redraw: function() {
            this._redrawRequest = null,
            this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            this._redrawBounds = null
        },
        _clear: function() {
            var t = this._redrawBounds;
            if (t) {
                var e = t.getSize();
                this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
            } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
        },
        _draw: function() {
            var t, e = this._redrawBounds;
            if (this._ctx.save(), e) {
                var i = e.getSize();
                this._ctx.beginPath(),
                this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
                this._ctx.clip()
            }
            this._drawing = !0;
            for (var n = this._drawFirst; n; n = n.next) t = n.layer,
            (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
            this._drawing = !1,
            this._ctx.restore()
        },
        _updatePoly: function(t, e) {
            if (this._drawing) {
                var i, n, o, s, r = t._parts,
                a = r.length,
                h = this._ctx;
                if (a) {
                    for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), i = 0; i < a; i++) {
                        for (n = 0, o = r[i].length; n < o; n++) s = r[i][n],
                        h[n ? "lineTo": "moveTo"](s.x, s.y);
                        e && h.closePath()
                    }
                    this._fillStroke(h, t)
                }
            }
        },
        _updateCircle: function(t) {
            if (this._drawing && !t._empty()) {
                var e = t._point,
                i = this._ctx,
                n = Math.max(Math.round(t._radius), 1),
                o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                this._drawnLayers[t._leaflet_id] = t,
                1 !== o && (i.save(), i.scale(1, o)),
                i.beginPath(),
                i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
                1 !== o && i.restore(),
                this._fillStroke(i, t)
            }
        },
        _fillStroke: function(t, e) {
            var i = e.options;
            i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")),
            i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
        },
        _onClick: function(t) {
            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
            i && (Xe(t), this._fireEvent([i], t))
        },
        _onMouseMove: function(t) {
            if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                var e = this._map.mouseEventToLayerPoint(t);
                this._handleMouseHover(t, e)
            }
        },
        _handleMouseOut: function(t) {
            var e = this._hoveredLayer;
            e && (ye(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
        },
        _handleMouseHover: function(t, e) {
            for (var i, n, o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (ge(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)),
            this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
        },
        _fireEvent: function(t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t)
        },
        _bringToFront: function(t) {
            var e = t._order,
            i = e.next,
            n = e.prev;
            i && ((i.prev = n) ? n.next = i: i && (this._drawFirst = i), e.prev = this._drawLast, (this._drawLast.next = e).next = null, this._drawLast = e, this._requestRedraw(t))
        },
        _bringToBack: function(t) {
            var e = t._order,
            i = e.next,
            n = e.prev;
            n && ((n.next = i) ? i.prev = n: n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
        }
    });
    function vn(t) {
        return It ? new fn(t) : null
    }
    var gn = function() {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function(t) {
                return document.createElement("<lvml:" + t + ' class="lvml">')
            }
        } catch(t) {
            return function(t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    } (),
    yn = {
        _initContainer: function() {
            this._container = de("div", "leaflet-vml-container")
        },
        _update: function() {
            this._map._animatingZoom || (mn.prototype._update.call(this), this.fire("update"))
        },
        _initPath: function(t) {
            var e = t._container = gn("shape");
            ge(e, "leaflet-vml-shape " + (this.options.className || "")),
            e.coordsize = "1 1",
            t._path = gn("path"),
            e.appendChild(t._path),
            this._updateStyle(t),
            this._layers[u(t)] = t
        },
        _addPath: function(t) {
            var e = t._container;
            this._container.appendChild(e),
            t.options.interactive && t.addInteractiveTarget(e)
        },
        _removePath: function(t) {
            var e = t._container;
            pe(e),
            t.removeInteractiveTarget(e),
            delete this._layers[u(t)]
        },
        _updateStyle: function(t) {
            var e = t._stroke,
            i = t._fill,
            n = t.options,
            o = t._container;
            o.stroked = !!n.stroke,
            o.filled = !!n.fill,
            n.stroke ? (e || (e = t._stroke = gn("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = P(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null),
            n.fill ? (i || (i = t._fill = gn("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
        },
        _updateCircle: function(t) {
            var e = t._point.round(),
            i = Math.round(t._radius),
            n = Math.round(t._radiusY || i);
            this._setPath(t, t._empty() ? "M0 0": "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
        },
        _setPath: function(t, e) {
            t._path.v = e
        },
        _bringToFront: function(t) {
            me(t._container)
        },
        _bringToBack: function(t) {
            fe(t._container)
        }
    },
    xn = At ? gn: it,
    wn = mn.extend({
        getEvents: function() {
            var t = mn.prototype.getEvents.call(this);
            return t.zoomstart = this._onZoomStart,
            t
        },
        _initContainer: function() {
            this._container = xn("svg"),
            this._container.setAttribute("pointer-events", "none"),
            this._rootGroup = xn("g"),
            this._container.appendChild(this._rootGroup)
        },
        _destroyContainer: function() {
            pe(this._container),
            Re(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize
        },
        _onZoomStart: function() {
            this._update()
        },
        _update: function() {
            if (!this._map._animatingZoom || !this._bounds) {
                mn.prototype._update.call(this);
                var t = this._bounds,
                e = t.getSize(),
                i = this._container;
                this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)),
                Te(i, t.min),
                i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
                this.fire("update")
            }
        },
        _initPath: function(t) {
            var e = t._path = xn("path");
            t.options.className && ge(e, t.options.className),
            t.options.interactive && ge(e, "leaflet-interactive"),
            this._updateStyle(t),
            this._layers[u(t)] = t
        },
        _addPath: function(t) {
            this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path)
        },
        _removePath: function(t) {
            pe(t._path),
            t.removeInteractiveTarget(t._path),
            delete this._layers[u(t)]
        },
        _updatePath: function(t) {
            t._project(),
            t._update()
        },
        _updateStyle: function(t) {
            var e = t._path,
            i = t.options;
            e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
        },
        _updatePoly: function(t, e) {
            this._setPath(t, nt(t._parts, e))
        },
        _updateCircle: function(t) {
            var e = t._point,
            i = Math.max(Math.round(t._radius), 1),
            n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
            o = t._empty() ? "M0 0": "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
            this._setPath(t, o)
        },
        _setPath: function(t, e) {
            t._path.setAttribute("d", e)
        },
        _bringToFront: function(t) {
            me(t._path)
        },
        _bringToBack: function(t) {
            fe(t._path)
        }
    });
    function bn(t) {
        return Ot || At ? new wn(t) : null
    }
    At && wn.include(yn),
    ei.include({
        getRenderer: function(t) {
            var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return e || (e = this._renderer = this._createRenderer()),
            this.hasLayer(e) || this.addLayer(e),
            e
        },
        _getPaneRenderer: function(t) {
            if ("overlayPane" === t || void 0 === t) return ! 1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = this._createRenderer({
                pane: t
            }), this._paneRenderers[t] = e),
            e
        },
        _createRenderer: function(t) {
            return this.options.preferCanvas && vn(t) || bn(t)
        }
    });
    var Ln = Gi.extend({
        initialize: function(t, e) {
            Gi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return [(t = H(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    wn.create = xn,
    wn.pointsToPath = nt,
    Vi.geometryToLayer = Ki,
    Vi.coordsToLatLng = qi,
    Vi.coordsToLatLngs = Yi,
    Vi.latLngToCoords = Xi,
    Vi.latLngsToCoords = Ji,
    Vi.getFeature = $i,
    Vi.asFeature = Qi,
    ei.mergeOptions({
        boxZoom: !0
    });
    var Pn = ui.extend({
        initialize: function(t) {
            this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane,
            this._resetStateTimeout = 0,
            t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            Ae(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            Re(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            pe(this._pane),
            delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0,
            this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return ! 1;
            this._clearDeferredResetState(),
            this._resetState(),
            ie(),
            Ce(),
            this._startPoint = this._map.mouseEventToContainerPoint(t),
            Ae(document, {
                contextmenu: He,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            },
            this)
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0, this._box = de("div", "leaflet-zoom-box", this._container), ge(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")),
            this._point = this._map.mouseEventToContainerPoint(t);
            var e = new F(this._point, this._startPoint),
            i = e.getSize();
            Te(this._box, e.min),
            this._box.style.width = i.x + "px",
            this._box.style.height = i.y + "px"
        },
        _finish: function() {
            this._moved && (pe(this._box), ye(this._container, "leaflet-crosshair")),
            ne(),
            ke(),
            Re(document, {
                contextmenu: He,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            },
            this)
        },
        _onMouseUp: function(t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(),
                this._resetStateTimeout = setTimeout(m(this._resetState, this), 0);
                var e = new W(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(e).fire("boxzoomend", {
                    boxZoomBounds: e
                })
            }
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    });
    ei.addInitHook("addHandler", "boxZoom", Pn),
    ei.mergeOptions({
        doubleClickZoom: !0
    });
    var Tn = ui.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var e = this._map,
            i = e.getZoom(),
            n = e.options.zoomDelta,
            o = t.originalEvent.shiftKey ? i - n: i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
        }
    });
    ei.addInitHook("addHandler", "doubleClickZoom", Tn),
    ei.mergeOptions({
        dragging: !0,
        inertia: !lt,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var zn = ui.extend({
        addHooks: function() {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new mi(t._mapPane, t._container),
                this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                },
                this),
                this._draggable.on("predrag", this._onPreDragLimit, this),
                t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            ge(this._map._container, "leaflet-grab leaflet-touch-drag"),
            this._draggable.enable(),
            this._positions = [],
            this._times = []
        },
        removeHooks: function() {
            ye(this._map._container, "leaflet-grab"),
            ye(this._map._container, "leaflet-touch-drag"),
            this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var e = H(this._map.options.maxBounds);
                this._offsetLimit = U(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy( - 1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy( - 1).add(this._map.getSize())),
                this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"),
            t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function(t) {
            if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(i),
                this._times.push(e),
                this._prunePositions(e)
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function(t) {
            for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(),
            this._times.shift()
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2),
            e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x,
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function() {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth,
            e = Math.round(t / 2),
            i = this._initialWorldOffset,
            n = this._draggable._newPos.x,
            o = (n - e + i) % t + e - i,
            s = (n + e + i) % t - e - i,
            r = Math.abs(o + i) < Math.abs(s + i) ? o: s;
            this._draggable._absPos = this._draggable._newPos.clone(),
            this._draggable._newPos.x = r
        },
        _onDragEnd: function(t) {
            var e = this._map,
            i = e.options,
            n = !i.inertia || this._times.length < 2;
            if (e.fire("dragend", t), n) e.fire("moveend");
            else {
                this._prunePositions( + new Date);
                var o = this._lastPos.subtract(this._positions[0]),
                s = (this._lastTime - this._times[0]) / 1e3,
                r = i.easeLinearity,
                a = o.multiplyBy(r / s),
                h = a.distanceTo([0, 0]),
                u = Math.min(i.inertiaMaxSpeed, h),
                l = a.multiplyBy(u / h),
                c = u / (i.inertiaDeceleration * r),
                d = l.multiplyBy( - c / 2).round();
                d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds), Z(function() {
                    e.panBy(d, {
                        duration: c,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : e.fire("moveend")
            }
        }
    });
    ei.addInitHook("addHandler", "dragging", zn),
    ei.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var Mn = ui.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t,
            this._setPanDelta(t.options.keyboardPanDelta),
            this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"),
            Ae(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            },
            this),
            this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            },
            this)
        },
        removeHooks: function() {
            this._removeHooks(),
            Re(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            },
            this),
            this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            },
            this)
        },
        _onMouseDown: function() {
            if (!this._focused) {
                var t = document.body,
                e = document.documentElement,
                i = t.scrollTop || e.scrollTop,
                n = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(),
                window.scrollTo(n, i)
            }
        },
        _onFocus: function() {
            this._focused = !0,
            this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1,
            this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            var e, i, n = this._panKeys = {},
            o = this.keyCodes;
            for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [ - 1 * t, 0];
            for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
            for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
            for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            var e, i, n = this._zoomKeys = {},
            o = this.keyCodes;
            for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
            for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
        },
        _addHooks: function() {
            Ae(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            Re(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (! (t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i = t.keyCode,
                n = this._map;
                if (i in this._panKeys) n._panAnim && n._panAnim._inProgress || (e = this._panKeys[i], t.shiftKey && (e = D(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else {
                    if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup()
                }
                He(t)
            }
        }
    });
    ei.addInitHook("addHandler", "keyboard", Mn),
    ei.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var Cn = ui.extend({
        addHooks: function() {
            Ae(this._map._container, "mousewheel", this._onWheelScroll, this),
            this._delta = 0
        },
        removeHooks: function() {
            Re(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var e = Ke(t),
            i = this._map.options.wheelDebounceTime;
            this._delta += e,
            this._lastMousePos = this._map.mouseEventToContainerPoint(t),
            this._startTime || (this._startTime = +new Date);
            var n = Math.max(i - ( + new Date - this._startTime), 0);
            clearTimeout(this._timer),
            this._timer = setTimeout(m(this._performZoom, this), n),
            He(t)
        },
        _performZoom: function() {
            var t = this._map,
            e = t.getZoom(),
            i = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
            o = 4 * Math.log(2 / (1 + Math.exp( - Math.abs(n)))) / Math.LN2,
            s = i ? Math.ceil(o / i) * i: o,
            r = t._limitZoom(e + (0 < this._delta ? s: -s)) - e;
            this._delta = 0,
            this._startTime = null,
            r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r))
        }
    });
    ei.addInitHook("addHandler", "scrollWheelZoom", Cn),
    ei.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var kn = ui.extend({
        addHooks: function() {
            Ae(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            Re(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            if (t.touches) {
                if (We(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1,
                void clearTimeout(this._holdTimeout);
                var e = t.touches[0],
                i = e.target;
                this._startPos = this._newPos = new j(e.clientX, e.clientY),
                i.tagName && "a" === i.tagName.toLowerCase() && ge(i, "leaflet-active"),
                this._holdTimeout = setTimeout(m(function() {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                },
                this), 1e3),
                this._simulateEvent("mousedown", e),
                Ae(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                },
                this)
            }
        },
        _onUp: function(t) {
            if (clearTimeout(this._holdTimeout), Re(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            },
            this), this._fireClick && t && t.changedTouches) {
                var e = t.changedTouches[0],
                i = e.target;
                i && i.tagName && "a" === i.tagName.toLowerCase() && ye(i, "leaflet-active"),
                this._simulateEvent("mouseup", e),
                this._isTapValid() && this._simulateEvent("click", e)
            }
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            var e = t.touches[0];
            this._newPos = new j(e.clientX, e.clientY),
            this._simulateEvent("mousemove", e)
        },
        _simulateEvent: function(t, e) {
            var i = document.createEvent("MouseEvents");
            i._simulated = !0,
            e.target._simulatedClick = !0,
            i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
            e.target.dispatchEvent(i)
        }
    });
    kt && !Ct && ei.addInitHook("addHandler", "tap", kn),
    ei.mergeOptions({
        touchZoom: kt && !lt,
        bounceAtZoomLimits: !0
    });
    var En = ui.extend({
        addHooks: function() {
            ge(this._map._container, "leaflet-touch-zoom"),
            Ae(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            ye(this._map._container, "leaflet-touch-zoom"),
            Re(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var i = e.mouseEventToContainerPoint(t.touches[0]),
                n = e.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = e.getSize()._divideBy(2),
                this._startLatLng = e.containerPointToLatLng(this._centerPoint),
                "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))),
                this._startDist = i.distanceTo(n),
                this._startZoom = e.getZoom(),
                this._moved = !1,
                this._zooming = !0,
                e._stop(),
                Ae(document, "touchmove", this._onTouchMove, this),
                Ae(document, "touchend", this._onTouchEnd, this),
                We(t)
            }
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                i = e.mouseEventToContainerPoint(t.touches[0]),
                n = e.mouseEventToContainerPoint(t.touches[1]),
                o = i.distanceTo(n) / this._startDist;
                if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === o) return
                } else {
                    var s = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === o && 0 === s.x && 0 === s.y) return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1), this._moved = !0),
                I(this._animRequest);
                var r = m(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = Z(r, this, !0),
                We(t)
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = !1, I(this._animRequest), Re(document, "touchmove", this._onTouchMove), Re(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    ei.addInitHook("addHandler", "touchZoom", En),
    ei.BoxZoom = Pn,
    ei.DoubleClickZoom = Tn,
    ei.Drag = zn,
    ei.Keyboard = Mn,
    ei.ScrollWheelZoom = Cn,
    ei.Tap = kn,
    ei.TouchZoom = En,
    Object.freeze = o;
    var Sn = {
        version: "1.3.4",
        Control: ni,
        control: oi,
        Browser: Rt,
        Evented: R,
        Mixin: ci,
        Util: O,
        Class: A,
        Handler: ui,
        extend: h,
        bind: m,
        stamp: u,
        setOptions: y,
        DomEvent: Qe,
        DomUtil: Oe,
        PosAnimation: ti,
        Draggable: mi,
        LineUtil: Pi,
        PolyUtil: Mi,
        Point: j,
        point: D,
        Bounds: F,
        bounds: U,
        Transformation: J,
        transformation: $,
        Projection: Ei,
        LatLng: G,
        latLng: V,
        LatLngBounds: W,
        latLngBounds: H,
        CRS: q,
        GeoJSON: Vi,
        geoJSON: en,
        geoJson: nn,
        Layer: Oi,
        LayerGroup: Ai,
        layerGroup: function(t, e) {
            return new Ai(t, e)
        },
        FeatureGroup: Bi,
        featureGroup: function(t) {
            return new Bi(t)
        },
        ImageOverlay: on,
        imageOverlay: sn,
        VideoOverlay: rn,
        videoOverlay: function(t, e, i) {
            return new rn(t, e, i)
        },
        DivOverlay: an,
        Popup: hn,
        popup: function(t, e) {
            return new hn(t, e)
        },
        Tooltip: un,
        tooltip: function(t, e) {
            return new un(t, e)
        },
        Icon: Ri,
        icon: function(t) {
            return new Ri(t)
        },
        DivIcon: ln,
        divIcon: function(t) {
            return new ln(t)
        },
        Marker: Di,
        marker: function(t, e) {
            return new Di(t, e)
        },
        TileLayer: dn,
        tileLayer: pn,
        GridLayer: cn,
        gridLayer: function(t) {
            return new cn(t)
        },
        SVG: wn,
        svg: bn,
        Renderer: mn,
        Canvas: fn,
        canvas: vn,
        Path: Fi,
        CircleMarker: Ui,
        circleMarker: function(t, e) {
            return new Ui(t, e)
        },
        Circle: Wi,
        circle: function(t, e, i) {
            return new Wi(t, e, i)
        },
        Polyline: Hi,
        polyline: function(t, e) {
            return new Hi(t, e)
        },
        Polygon: Gi,
        polygon: function(t, e) {
            return new Gi(t, e)
        },
        Rectangle: Ln,
        rectangle: function(t, e) {
            return new Ln(t, e)
        },
        Map: ei,
        map: ii
    };
    function Zn(t, e, i) {
        return 41 / (e / 100) * ((t + i) / 2048) + 1
    }
    function In(t, e, i) {
        return (t - 1) / (4100 / e) * 2048
    }
    function On(t, e, i) {
        var n = e / 100;
        return 41 / n * (((t + i) * n + 1024) / 2048) + 1
    }
    function An(t, e, i) {
        return [Zn(e, t.sizeFactor, 0), Zn(i, t.sizeFactor, 0)]
    }
    function Bn(t, e, i) {
        return [In(e, t.sizeFactor, t["offset{X}"]), In(i, t.sizeFactor, t["offset{Y}"])]
    }
    var Rn = "object" == typeof global && global && global.Object === Object && global,
    jn = "object" == typeof self && self && self.Object === Object && self,
    Nn = Rn || jn || Function("return this")(),
    Dn = Nn.Symbol,
    Fn = Object.prototype,
    Un = Fn.hasOwnProperty,
    Wn = Fn.toString,
    Hn = Dn ? Dn.toStringTag: void 0;
    var Gn = Object.prototype.toString;
    var Vn = "[object Null]",
    Kn = "[object Undefined]",
    qn = Dn ? Dn.toStringTag: void 0;
    function Yn(t) {
        return null == t ? void 0 === t ? Kn: Vn: qn && qn in Object(t) ?
        function(t) {
            var e = Un.call(t, Hn),
            i = t[Hn];
            try {
                t[Hn] = void 0
            } catch(t) {}
            var n = Wn.call(t);
            return e ? t[Hn] = i: delete t[Hn],
            n
        } (t) : (e = t, Gn.call(e));
        var e
    }
    function Xn(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
    var Jn = "[object AsyncFunction]",
    $n = "[object Function]",
    Qn = "[object GeneratorFunction]",
    to = "[object Proxy]";
    var eo, io = Nn["__core-js_shared__"],
    no = (eo = /[^.]+$/.exec(io && io.keys && io.keys.IE_PROTO || "")) ? "Symbol(src)_1." + eo: "";
    var oo = Function.prototype.toString;
    var so = /^\[object .+?Constructor\]$/,
    ro = Function.prototype,
    ao = Object.prototype,
    ho = ro.toString,
    uo = ao.hasOwnProperty,
    lo = RegExp("^" + ho.call(uo).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function co(t) {
        return ! (!Xn(t) || (e = t, no && no in e)) && (function(t) {
            if (!Xn(t)) return ! 1;
            var e = Yn(t);
            return e == $n || e == Qn || e == Jn || e == to
        } (t) ? lo: so).test(function(t) {
            if (null != t) {
                try {
                    return oo.call(t)
                } catch(t) {}
                try {
                    return t + ""
                } catch(t) {}
            }
            return ""
        } (t));
        var e
    }
    function po(t, e) {
        var i, n, o = (n = e, null == (i = t) ? void 0 : i[n]);
        return co(o) ? o: void 0
    }
    var _o = po(Object, "create");
    var mo = Object.prototype.hasOwnProperty;
    var fo = Object.prototype.hasOwnProperty;
    function vo(t) {
        var e = -1,
        i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    function go(t, e) {
        for (var i, n, o = t.length; o--;) if ((i = t[o][0]) === (n = e) || i != i && n != n) return o;
        return - 1
    }
    vo.prototype.clear = function() {
        this.__data__ = _o ? _o(null) : {},
        this.size = 0
    },
    vo.prototype["delete"] = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0,
        e
    },
    vo.prototype.get = function(t) {
        var e = this.__data__;
        if (_o) {
            var i = e[t];
            return "__lodash_hash_undefined__" === i ? void 0 : i
        }
        return mo.call(e, t) ? e[t] : void 0
    },
    vo.prototype.has = function(t) {
        var e = this.__data__;
        return _o ? void 0 !== e[t] : fo.call(e, t)
    },
    vo.prototype.set = function(t, e) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1,
        i[t] = _o && void 0 === e ? "__lodash_hash_undefined__": e,
        this
    };
    var yo = Array.prototype.splice;
    function xo(t) {
        var e = -1,
        i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    xo.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
    },
    xo.prototype["delete"] = function(t) {
        var e = this.__data__,
        i = go(e, t);
        return ! (i < 0 || (i == e.length - 1 ? e.pop() : yo.call(e, i, 1), --this.size, 0))
    },
    xo.prototype.get = function(t) {
        var e = this.__data__,
        i = go(e, t);
        return i < 0 ? void 0 : e[i][1]
    },
    xo.prototype.has = function(t) {
        return - 1 < go(this.__data__, t)
    },
    xo.prototype.set = function(t, e) {
        var i = this.__data__,
        n = go(i, t);
        return n < 0 ? (++this.size, i.push([t, e])) : i[n][1] = e,
        this
    };
    var wo = po(Nn, "Map");
    function bo(t, e) {
        var i, n, o = t.__data__;
        return ("string" == (n = typeof(i = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i: null === i) ? o["string" == typeof e ? "string": "hash"] : o.map
    }
    function Lo(t) {
        var e = -1,
        i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Lo.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
            hash: new vo,
            map: new(wo || xo),
            string: new vo
        }
    },
    Lo.prototype["delete"] = function(t) {
        var e = bo(this, t)["delete"](t);
        return this.size -= e ? 1 : 0,
        e
    },
    Lo.prototype.get = function(t) {
        return bo(this, t).get(t)
    },
    Lo.prototype.has = function(t) {
        return bo(this, t).has(t)
    },
    Lo.prototype.set = function(t, e) {
        var i = bo(this, t),
        n = i.size;
        return i.set(t, e),
        this.size += i.size == n ? 0 : 1,
        this
    };
    var Po = "Expected a function";
    function To(o, s) {
        if ("function" != typeof o || null != s && "function" != typeof s) throw new TypeError(Po);
        var r = function() {
            var t = arguments,
            e = s ? s.apply(this, t) : t[0],
            i = r.cache;
            if (i.has(e)) return i.get(e);
            var n = o.apply(this, t);
            return r.cache = i.set(e, n) || i,
            n
        };
        return r.cache = new(To.Cache || Lo),
        r
    }
    To.Cache = Lo;
    var zo = "https://map-cdn.wakingsands.com/assets",
    Mo = "000000",
    Co = {},
    ko = zo;
    function Eo(t) {
        return Co.getTileUrl ? Co.getTileUrl() : ko + "/tiles/" + t.replace(/\//g, "_")
    }
    function So(t) {
        var e = Zo(t),
        i = e.id,
        n = e.group;
        return Co.getIconUrl ? Co.getIconUrl(t, i, n) : i === Mo ? null: "https://cafemaker.wakingsands.com/i/" + n + "/" + i + ".png"
    }
    function Zo(t) {
        if (!t) return {
            group: Mo,
            id: Mo
        };
        var e = ("" + t).match(/^ui\/icon\/(\d{6})\/(\d{6})\.tex/);
        return e ? {
            group: e[1],
            id: e[2]
        }: (console.warn("invalid icon url: ", t), {
            group: Mo,
            id: Mo
        })
    }
    function Io(t) {
        ko = t
    }
    var Oo = {
        CDN_SERVER: zo,
        NULL_ICON_GROUP: Mo,
        setUrlFunction: function(t, e) {
            Co[t] = e
        },
        getMapUrl: function(t) {
            return Co.getMapUrl ? Co.getMapUrl(t) : ko + "/maps/" + t.replace(/\//g, "_") + ".png"
        },
        getBgUrl: function() {
            return Co.getBgUrl ? Co.getBgUrl() : ko + "/files/bg.jpg"
        },
        getTileUrl: Eo,
        getIconUrl: So,
        parseIcon: Zo,
        setBaseUrl: Io
    },
    Ao = zo + "/data/";
    function Bo(t) {
        Ao = t
    }
    var Ro = {
        mode: "cors",
        credentials: "omit"
    };
    var jo = To(function() {
        return d(this, void 0, Promise,
        function() {
            return p(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return [4, Fo("map.json")];
                case 1:
                    return [2, t.sent()]
                }
            })
        })
    });
    var No = To(function() {
        return d(this, void 0, Promise,
        function() {
            return p(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return [4, Fo("mapMarker.json")];
                case 1:
                    return [2, t.sent()]
                }
            })
        })
    });
    var Do = To(function() {
        return d(this, void 0, Promise,
        function() {
            return p(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return [4, Fo("region.json")];
                case 1:
                    return [2, t.sent()]
                }
            })
        })
    });
    function Fo(n) {
        return d(this, void 0, void 0,
        function() {
            var e, i;
            return p(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return e = Ao + n,
                    -1 < Ao.indexOf("%s") && (e = Ao.replace(/%s/g, n)),
                    [4, fetch(e, Ro)];
                case 1:
                    return [4, t.sent().json()];
                case 2:
                    return (i = t.sent()).data ? [2, i.data] : [2, i]
                }
            })
        })
    }
    var Uo = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.getTileUrl = function(t) {
            return this._url.replace(/{x}/, t.x).replace(/{y}/, t.y).replace(/{z}/, t.z)
        },
        e
    } (dn),
    Wo = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.onSelectChange = function() {
                i.map.mapInfo["#"] !== i.select.value && i.map.loadMapKey(parseInt(i.select.value))
            },
            i.onUpdateInfo = function(t) {
                var e = t.placeName;
                t["placeName{Sub}"] && (e += "<br>" + t["placeName{Sub}"]),
                t.id.startsWith("region") && (e += "<br>区域地图显示信息可能有所缺失<br>可点击上面地名选择地图"),
                i.placeNameContainer.innerHTML = e,
                i.select.value = t["#"]
            },
            i.regions = t.regions,
            i
        }
        return i(t, e),
        t.prototype.onAdd = function(t) {
            this.map = t,
            this.map.onUpdateInfo(this.onUpdateInfo),
            this.rootContainer = _("nav", {
                "class": "eorzea-map-nav"
            },
            [_("div", {
                "class": "eorzea-map-bg"
            }), _("div", {
                "class": "eorzea-map-nav-aside"
            },
            [_("div", {
                "class": "eorzea-map-place-name",
                "for": "eroza-map-place-select"
            },
            "？？？？"), _("div", {
                "class": "eorzea-map-place-select-container"
            })])]),
            this.placeNameContainer = this.rootContainer.querySelector(".eorzea-map-place-name"),
            this.select = document.createElement("select"),
            this.select.id = "eroza-map-place-select",
            this.select.addEventListener("change", this.onSelectChange, {
                passive: !0
            });
            for (var e = 0,
            i = this.regions; e < i.length; e++) {
                var n = i[e],
                o = document.createElement("optgroup");
                o.label = n.regionName,
                this.select.appendChild(o);
                for (var s = 0,
                r = n.maps; s < r.length; s++) {
                    var a = r[s],
                    h = document.createElement("option");
                    h.value = "" + a.key,
                    h.text = "" + a.name,
                    a.subName && (h.text += " - " + a.subName),
                    o.appendChild(h)
                }
            }
            this.rootContainer.querySelector(".eorzea-map-place-select-container").appendChild(this.select);
            for (var u = 0,
            l = "mousedown pointerdown mouseup pointerup click mousemove pointermove dblclick".split(" "); u < l.length; u++) {
                var c = l[u];
                this.rootContainer.addEventListener(c,
                function(t) {
                    return t.stopPropagation()
                })
            }
            return this.rootContainer
        },
        t.prototype.onRemove = function(t) {
            this.map.offUpdateInfo(this.onUpdateInfo)
        },
        t
    } (ni),
    Ho = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.rangeLock = !1,
            e.onZoomEnd = function(t) {
                e.rangeLock || (e.rangeInput.value = "" + e.map.getZoom())
            },
            e.onButtonClick = function(t) {
                "world" === t && e.map.loadMapKey(92),
                "zoom-in" === t && e.map.zoomIn(),
                "zoom-out" === t && e.map.zoomOut()
            },
            e
        }
        return i(e, t),
        e.prototype.onAdd = function(t) {
            var i = this;
            this.map = t,
            this.map.on("zoomend", this.onZoomEnd),
            this.rootContainer = _("nav", {
                "class": "eorzea-map-nav eorzea-map-nav-upper"
            },
            [_("button", {
                "class": "eorza-map-nav-button eorza-map-world",
                "data-action": "world"
            }), _("button", {
                "class": "eorza-map-nav-button eorza-map-zoom-in",
                "data-action": "zoom-in"
            }), _("div", {
                "class": "eorzea-map-range-container"
            },
            [_("div", {
                "class": "eorzea-map-range-slider"
            }), _("input", {
                type: "range",
                min: "-3",
                max: "4",
                step: "1",
                value: "-1"
            })]), _("button", {
                "class": "eorza-map-nav-button eorza-map-zoom-out",
                "data-action": "zoom-out"
            })]),
            this.rangeInput = this.rootContainer.querySelector("input[type=range]"),
            this.rangeInput.addEventListener("input",
            function() {
                i.rangeLock = !0,
                i.map.setZoom(i.rangeInput.value)
            }),
            this.rangeInput.addEventListener("change",
            function() {
                i.rangeLock = !1
            });
            for (var e = 0,
            n = "mousedown pointerdown mouseup pointerup click mousemove pointermove dblclick".split(" "); e < n.length; e++) {
                var o = n[e];
                this.rootContainer.addEventListener(o,
                function(t) {
                    return t.stopPropagation()
                })
            }
            return this.rootContainer.addEventListener("click",
            function(t) {
                for (var e = t.target; e && e !== i.rootContainer; e = e.parentNode) e.classList && e.classList.contains("eorza-map-nav-button") && i.onButtonClick(e.dataset.action)
            }),
            this.rootContainer
        },
        e.prototype.onRemove = function(t) {
            this.map.off("zoomend", this.onZoomEnd)
        },
        e
    } (ni); !
    function(n) {
        function t(t, e, i) {
            return n.call(this, 2048 - e, t, i) || this
        }
        i(t, n)
    } (j);
    function Go(t, e) {
        var i = e ? t: t[0];
        return [2048 - (e || t[1]), i]
    }
    var Vo = function(e) {
        function t(t) {
            var h = e.call(this, t) || this;
            return h.onUpdateInfo = function(t) {
                h.setScaleFactor(t.sizeFactor)
            },
            h.onMouseMoveEvent = function(t) {
                var e, i, n, o, s = (e = t, i = h.map, o = [(n = i.containerPointToLatLng(Qe.getMousePosition(e, i._container))).lng, 2048 - n.lat], An.apply(void 0, [i.mapInfo].concat(o))),
                r = s[0],
                a = s[1];
                h.rootContainer.innerHTML = ['<span class="eorzea-map-letter">X: </span>', '<span class="eorzea-map-int">' + Math.floor(r) + "</span>", '.<span class="eorzea-map-demical">' + r.toFixed(2).split(".")[1] + "</span>", ' <span class="eorzea-map-letter">Y: </span>', '<span class="eorzea-map-int">' + Math.floor(a) + "</span>", '.<span class="eorzea-map-demical">' + a.toFixed(2).split(".")[1] + "</span>"].join("")
            },
            h.onMouseLeaveEvent = function() {
                h.rootContainer.innerHTML = ""
            },
            h.rootContainer = document.createElement("section"),
            h.rootContainer.classList.add("eorzea-map-pos"),
            h.rootContainer.classList.add("eorzea-map-text"),
            h.scaleFactor = t.scaleFactor || 100,
            h
        }
        return i(t, e),
        t.prototype.setScaleFactor = function(t) {
            this.scaleFactor = t
        },
        t.prototype.onAdd = function(t) {
            return this.map = t,
            this.mapContainer = t._container,
            this.mapContainer.addEventListener("mousemove", this.onMouseMoveEvent, {
                passive: !1
            }),
            this.mapContainer.addEventListener("mouseleave", this.onMouseLeaveEvent),
            this.map.onUpdateInfo(this.onUpdateInfo),
            this.rootContainer
        },
        t.prototype.onRemove = function(t) {
            this.mapContainer.removeEventListener("mousemove", this.onMouseMoveEvent),
            this.mapContainer.removeEventListener("mouseleave", this.onMouseLeaveEvent),
            this.map.offUpdateInfo(this.onUpdateInfo)
        },
        t
    } (ni),
    Ko = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype._addItem = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var i = ni.Layers.prototype._addItem.apply(this, t);
            return i.children[0].appendChild(i.children[0].children[0]),
            i.children[0].appendChild(_("i", {
                "class": "input-after"
            })),
            i
        },
        e
    } (ni.Layers),
    qo = new Map;
    function Yo(t) {
        if (qo.has(t)) return qo.get(t);
        var e, i = (e = t / 2, '\n<svg width="' + os + 'px" height="' + os + 'px" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <pattern id="grid" width="' + e + 'px" height="' + e + 'px" patternUnits="userSpaceOnUse">\n    <path d="M ' + e + " 0 L 0 0 0 " + e + '" fill="none" stroke="rgba(0, 0, 0, 0.5)" stroke-width="1"/>\n    </pattern>\n  </defs>\n  <rect width="100%" height="100%" fill="url(#grid)" />\n</svg>\n  ').trim().replace(/\n\s*/, ""),
        n = "data:image/svg+xml," + encodeURIComponent(i);
        return qo.set(t, n),
        n
    }
    var Xo = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.createTile = function(t, e) {
            var i = document.createElement("div");
            return i.textContent = "(" + t.x + ", " + t.y + ") @ " + t.z,
            i.style.border = "1px solid rgba(255, 0, 0, 0.4)",
            i.style.boxSizing = "border-box",
            i.style.textShadow = "0 0 8px black, 0 0 6px black, 0 0 4px black, 0 0 2px black",
            i.style.fontSize = "14px",
            i.style.fontFamily = "monospace",
            setTimeout(function() {
                e(null, i)
            },
            200),
            i
        },
        e
    } (cn),
    Jo = new Map;
    function $o(t) {
        var e = Zo(t).id,
        i = parseInt(e);
        return 63200 < i && i < 63900
    }
    var Qo = {
        1 : "left",
        2 : "right",
        3 : "bottom",
        4 : "top"
    },
    ts = {
        0 : "normal",
        1 : "travel",
        3 : "aetheryte",
        4 : "tooltip"
    },
    es = new ln({
        iconSize: new j(0, 0)
    });
    function is(i) {
        if (0 !== i.subtextOrientation) {
            var t = function(t) {
                if (Jo.has(t)) return Jo.get(t);
                if (Zo(t).group === Mo) return Jo.set(t, null),
                null;
                if ($o(t)) return null;
                var e = new j(32, 32),
                i = So(t),
                n = new Ri({
                    iconSize: e,
                    iconUrl: i
                });
                return Jo.set(t, n),
                n
            } (i.icon),
            e = [],
            n = ts[i["data{Type}"]] || "unkown";
            1 === i.type && (n = "area");
            var o = "tooltip" === n ? i["data{Key}"] : i["placeName{Subtext}"];
            if (!t && !o) return null;
            var s = Qo[i.subtextOrientation] || "auto";
            t || (t = es, s = "center", e.push("no-icon"));
            var r = o.replace(/\n/g, "<br>"),
            a = new Di(Go(i.x, i.y), {
                icon: t,
                interactive: "aetheryte" === n || "travel" === n || !!i["data{Key}"]
            });
            if (a.on("add",
            function() {
                var t = a.getElement();
                t.dataset.dataKey = i["data{Key}"],
                t.dataset.dataType = "" + i["data{Type}"]
            }), a.on("tooltipopen",
            function(t) {
                var e = t.tooltip.getElement();
                e.dataset.dataKey = i["data{Key}"],
                e.dataset.dataType = "" + i["data{Type}"]
            }), !r) return a;
            var h = [n, s].concat(e).map(function(t) {
                return "eorzea-map-label-" + t
            }).concat(["eorzea-map-label"]).join(" ");
            return a.bindTooltip(r, {
                permanent: "tooltip" !== n,
                className: h,
                direction: "tooltip" === n ? "auto": s,
                interactive: "aetheryte" === n || "travel" === n
            }),
            "tooltip" !== n && a.openTooltip(),
            a
        }
    }
    var ns = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
        e.prototype.init = function(t, e) {
            this.el = e,
            this.markers = [],
            this.overlays = [],
            this.updateInfoHandlers = new Map,
            this.setMaxBounds([[ - 1024, -1024], [3072, 3072]]),
            this.fitBounds(ss),
            this.setZoom( - 1),
            this.on("zoomend", this.onZoomEnd),
            this.onZoomEnd(),
            new Vo({
                position: "topright",
                scaleFactor: 100
            }).addTo(this),
            new Wo({
                position: "topleft",
                regions: t
            }).addTo(this),
            new Ho({
                position: "topleft"
            }).addTo(this),
            this.gridOverlay = sn(Yo(100), ss, {
                opacity: .3
            }).addTo(this)
        },
        e.prototype.onZoomEnd = function() {
            var e = this,
            t = this.getZoom(),
            i = ["eorzea-map-zoom-s", "eorzea-map-zoom-m", "eorzea-map-zoom-l"],
            n = t <= -3 ? i[0] : t <= -2 ? i[1] : i[2];
            i.map(function(t) {
                return e.el.classList.remove(t)
            }),
            this.el.classList.add(n)
        },
        e.prototype.loadMapLayer = function(t) {
            var e = {
                bounds: ss,
                minZoom: -3,
                maxNativeZoom: 0
            },
            i = Eo(t.id);
            return this.tileLayer = new Uo(i + "/{z}_{x}_{y}.jpg", e),
            this.tileLayer.addTo(this),
            this.debugLayer = new Xo(e),
            this.gridOverlay.setUrl(Yo(t.sizeFactor)),
            this.layersControl.addOverlay(this.gridOverlay, "网格"),
            this
        },
        e.prototype.loadMapInfo = function(c) {
            return d(this, void 0, void 0,
            function() {
                var e, i, n, o, s, r, a, h, u, l;
                return p(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.mapInfo = c,
                        0 < this.markers.length && (this.markers.map(function(t) {
                            return t.remove()
                        }), this.markers = []),
                        0 < this.overlays.length && (this.overlays.map(function(t) {
                            return t.remove()
                        }), this.overlays = []),
                        this.tileLayer && (this.tileLayer.remove(), this.tileLayer = null),
                        this.debugLayer && (this.debugLayer.remove(), this.debugLayer = null),
                        this.layersControl && (this.layersControl.remove(), this.layersControl = null),
                        this.markersLayerGroup && (this.markersLayerGroup.remove(), this.markersLayerGroup = null),
                        this.tooltipsLayerGroup && (this.tooltipsLayerGroup.remove(), this.tooltipsLayerGroup = null),
                        this.layersControl = new Ko({},
                        {},
                        {
                            collapsed: !1,
                            position: "topright"
                        }),
                        this.loadMapLayer(c),
                        this.markersLayerGroup = new Ai,
                        this.tooltipsLayerGroup = new Ai,
                        this.markersLayerGroup.addTo(this),
                        this.tooltipsLayerGroup.addTo(this),
                        this.layersControl.addTo(this),
                        this.layersControl.addOverlay(this.markersLayerGroup, "标记"),
                        this.layersControl.addOverlay(this.tooltipsLayerGroup, "文本"),
                        [4,
                        function(e) {
                            return d(this, void 0, Promise,
                            function() {
                                return p(this,
                                function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, No()];
                                    case 1:
                                        return [2, t.sent().filter(function(t) {
                                            return t["#"].startsWith(e.mapMarkerRange + ".")
                                        }).reverse()]
                                    }
                                })
                            })
                        } (c)];
                    case 1:
                        for (e = t.sent(), i = this.previousMapInfo && this.previousMapInfo.id, n = Go(os / 2, os / 2), o = 0, s = e; o < s.length; o++) r = s[o],
                        (a = is(r)) && (this.markers.push(a), this.markersLayerGroup.addLayer(a), (h = a.getTooltip()) && h.isOpen() && this.tooltipsLayerGroup.addLayer(h), 1 === r["data{Type}"] && r["data{Key}"] === i && (n = Go(r.x, r.y), a.getElement().classList.add("eorzeamap-label-current"))),
                        r.icon && $o(r.icon) && (u = So(r.icon), l = sn(u, [Go(r.x - 512, r.y - 512), Go(r.x + 512, r.y + 512)], {
                            interactive: !0,
                            opacity: .5
                        }), this.overlays.push(l), l.addTo(this));
                        return this.panTo(n),
                        this.previousMapInfo = c,
                        this.fire("updateInfo", {
                            mapInfo: c
                        }),
                        [2, this]
                    }
                })
            })
        },
        e.prototype.loadMapKey = function(i) {
            return d(this, void 0, void 0,
            function() {
                var e;
                return p(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4,
                        function(e) {
                            return d(this, void 0, Promise,
                            function() {
                                return p(this,
                                function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, jo()];
                                    case 1:
                                        return [2, t.sent()[e]]
                                    }
                                })
                            })
                        } (i)];
                    case 1:
                        return e = t.sent(),
                        this.fire("loadMapKey", {
                            mapKey: i
                        }),
                        [2, this.loadMapInfo(e)]
                    }
                })
            })
        },
        e.prototype.loadMapId = function(i) {
            return d(this, void 0, void 0,
            function() {
                var e;
                return p(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4,
                        function(n) {
                            return d(this, void 0, Promise,
                            function() {
                                var e, i;
                                return p(this,
                                function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, jo()];
                                    case 1:
                                        return e = t.sent(),
                                        (i = e.find(function(t) {
                                            return t.id === n
                                        })) ? [2, parseInt(i["#"])] : [2, null]
                                    }
                                })
                            })
                        } (i)];
                    case 1:
                        return e = t.sent(),
                        [2, this.loadMapKey(e)]
                    }
                })
            })
        },
        e.prototype.addMaker = function(t) {
            return console.warn("[Deprecated] map.addMaker is a misspell, you should use map.addMarker instead."),
            this.addMarker(t)
        },
        e.prototype.addMarker = function(t) {
            return t.addTo(this),
            this.markers.push(t),
            t
        },
        e.prototype.onUpdateInfo = function(e) {
            this.offUpdateInfo(e);
            var t = function(t) {
                e(t.mapInfo)
            };
            this.on("updateInfo", t),
            this.updateInfoHandlers.set(e, t)
        },
        e.prototype.offUpdateInfo = function(t) {
            this.updateInfoHandlers.has(t) && this.off("updateInfo", this.updateInfoHandlers.get(t))
        },
        e.prototype.toMapXY2D = function(t, e) {
            return An(this.mapInfo, t, e)
        },
        e.prototype.mapToLatLng2D = function(t, e) {
            return Go(this.fromMapXY2D(t, e))
        },
        e.prototype.toMapXY3D = function(t, e) {
            return i = this.mapInfo,
            n = e,
            [On(t, i.sizeFactor, i["offset{X}"]), On(n, i.sizeFactor, i["offset{Y}"])];
            var i, n
        }, e.prototype.fromMapXY2D = function(t, e) {
            return Bn(this.mapInfo, t, e)
        },
        e.prototype.from3D = function(t, e) {
            return this.fromMapXY2D.apply(this, this.toMapXY3D(t, e))
        },
        e
    } (ei);
    var os = 2048,
    ss = [[0, 0], [os, os]];
    var rs = Ri,
    as = Di,
    hs = j;
    function us(i) {
        return d(this, void 0, void 0,
        function() {
            var e;
            return p(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return i.innerHTML = "",
                    [4,
                    function(o) {
                        return d(this, void 0, void 0,
                        function() {
                            var e, i, n;
                            return p(this,
                            function(t) {
                                switch (t.label) {
                                case 0:
                                    return e = ii(o, {
                                        crs: q.Simple,
                                        minZoom: -3,
                                        maxZoom: 4,
                                        attributionControl: !1,
                                        zoomControl: !1,
                                        inertiaMaxSpeed: 5e3
                                    }),
                                    i = Object.setPrototypeOf(e, ns.prototype),
                                    [4, Do()];
                                case 1:
                                    return n = t.sent(),
                                    i.init(n, o),
                                    [2, i]
                                }
                            })
                        })
                    } (i)];
                case 1:
                    return e = t.sent(),
                    function(t, n) {
                        var o = this;
                        t.addEventListener("click",
                        function(t) {
                            for (var e = t.target; e && e !== o; e = e.parentNode) if (e.dataset && "1" === e.dataset.dataType) {
                                var i = e.dataset.dataKey;
                                n.loadMapId(i);
                                break
                            }
                        })
                    } (i, e),
                    [2, e]
                }
            })
        })
    }
    function ls(o) {
        return d(this, void 0, void 0,
        function() {
            var e, i, n;
            return p(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return e = location.hash.slice(1),
                    "area" === (i = e.split("&").map(function(t) {
                        return t.split("=")
                    }).map(function(t) {
                        return t.map(decodeURIComponent)
                    }).reduce(function(t, e) {
                        return t[e[0]] = e[1],
                        t
                    },
                    {})).f && i.id ? (console.log(i.id), parseInt(i.id) === ds.currentMapKey ? [2] : [4, o.loadMapKey(parseInt(i.id))]) : [3, 2];
                case 1:
                    return t.sent(),
                    [2, !0];
                case 2:
                    return "mark" === i.f && i.id && i.x && i.y ? [4, o.loadMapKey(parseInt(i.id))] : [3, 4];
                case 3:
                    return t.sent(),
                    n = cs(i.x, i.y, So("ui/icon/060000/060561.tex"), o.mapInfo),
                    o.addMarker(n),
                    setTimeout(function() {
                        o.setView(o.mapToLatLng2D(i.x, i.y), 0)
                    },
                    100),
                    [2, !0];
                case 4:
                    return [2]
                }
            })
        })
    }
    function cs(t, e, i, n) {
        var o = new rs({
            iconSize: new hs(32, 32),
            iconUrl: i
        });
        return new as(Go(Bn(n, t, e)), {
            icon: o,
            zIndexOffset: 1e3,
            pane: "popupPane"
        })
    }
    var ds = window;
    ds.YZWF = ds.YZWF || {};
    ds.standaloneEorzeaMap &&
    function() {
        return d(this, void 0, void 0,
        function() {
            var e;
            return p(this,
            function(t) {
                switch (t.label) {
                case 0:
                    return ds.currentMapKey = 92,
                    [4, us(document.querySelector("section.map"))];
                case 1:
                    return (e = t.sent()).on("loadMapKey",
                    function(t) {
                        ds.currentMapKey = t.mapKey,
                        location.hash.toString().indexOf("f=mark") < 0 && history.replaceState("", "", "#f=area&id=" + t.mapKey)
                    }),
                    [4, ls(e)];
                case 2:
                    return t.sent() ? [3, 4] : [4, e.loadMapKey(ds.currentMapKey)];
                case 3:
                    t.sent(),
                    t.label = 4;
                case 4:
                    return window.addEventListener("hashchange",
                    function(t) {
                        ls(e)
                    }),
                    [2]
                }
            })
        })
    } ()["catch"](function(t) {
        return console.error(t)
    }),
    t.create = us,
    t.xy = Go,
    t.L = Sn,
    t.simpleMarker = cs,
    t.setApiUrl = Bo,
    t.AdvancedTileLayer = Uo,
    t.loader = Oo,
    t.getRegion = Do,
    t.setCdnUrl = function(t) {
        Bo(t + "/data/"),
        Io(t)
    },
    t.version = "1.1.0",
    t.crel = _,
    t.iconMarker = function(t, e, i, n, o, s, r) {
        void 0 === o && (o = "map"),
        void 0 === s && (s = 32),
        void 0 === r && (r = 32);
        var a = new Ri({
            iconSize: new j(s, r),
            iconUrl: i
        });
        if ("3d" === o) {
            var h = An(n, t, e);
            t = h[0],
            e = h[1]
        }
        return new Di(Go(Bn(n, t, e)), {
            icon: a,
            zIndexOffset: 1e3,
            pane: "popupPane"
        })
    },
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});