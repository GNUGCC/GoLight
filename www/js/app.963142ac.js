(function(e) {
    function n(n) {
        for (var t, a, r = n[0], d = n[1], i = n[2], f = 0, h = []; f < r.length; f++) a = r[f], Object.prototype.hasOwnProperty.call(u, a) && u[a] && h.push(u[a][0]), u[a] = 0;
        for (t in d) Object.prototype.hasOwnProperty.call(d, t) && (e[t] = d[t]);
        s && s(n);
        while (h.length) h.shift()();
        return o.push.apply(o, i || []), c()
    }

    function c() {
        for (var e, n = 0; n < o.length; n++) {
            for (var c = o[n], t = !0, a = 1; a < c.length; a++) {
                var r = c[a];
                0 !== u[r] && (t = !1)
            }
            t && (o.splice(n--, 1), e = d(d.s = c[0]))
        }
        return e
    }
    var t = {},
        a = {
            app: 0
        },
        u = {
            app: 0
        },
        o = [];

    function r(e) {
        return d.p + "js/" + ({
            "polyfills-core-js": "polyfills-core-js",
            "polyfills-dom": "polyfills-dom"
        } [e] || e) + "." + {
            "chunk-02c995b5": "abd30e43",
            "chunk-035e0838": "bec973ef",
            "chunk-070cde5b": "31dea67a",
            "chunk-09155df3": "1a591661",
            "chunk-09162720": "cec80ade",
            "chunk-097e0872": "4798a567",
            "chunk-0e93a01c": "17983e58",
            "chunk-106fab1a": "f86f7b33",
            "chunk-1bff95de": "e4604467",
            "chunk-1dbc15a2": "50a152e8",
            "chunk-21a76241": "55870259",
            "chunk-237e4d24": "45089e70",
            "chunk-25d83ca8": "d6579266",
            "chunk-264ec364": "ff4d1153",
            "chunk-2d0a463b": "c37a9e9d",
            "chunk-2d0abc10": "445bd32c",
            "chunk-2d0c073f": "50e276e1",
            "chunk-2d0c1783": "35fe41f4",
            "chunk-2d0d43da": "271250f0",
            "chunk-2d0da04a": "50e3fbb9",
            "chunk-2d0e5812": "c5dde327",
            "chunk-2d213189": "37da8e05",
            "chunk-2d217e6a": "9d5e5387",
            "chunk-2d218068": "253cf4b6",
            "chunk-2d21da73": "e37dab6d",
            "chunk-2d2214f1": "3ae3d0b4",
            "chunk-2d2304d2": "e5c3a3b9",
            "chunk-2d230c96": "4030f8b9",
            "chunk-2d237b00": "6874ec20",
            "chunk-30dd9750": "27311335",
            "chunk-3639ba33": "1b7eddf2",
            "chunk-37f2300e": "e929a390",
            "chunk-3ed29de3": "1a246f6b",
            "chunk-41c0f7a4": "b42aaa5d",
            "chunk-462c869e": "27cb2d19",
            "chunk-46dc6002": "6bf089c1",
            "chunk-47245a33": "8d343925",
            "chunk-4739acd0": "7e3d25a8",
            "chunk-485adc83": "860f18be",
            "chunk-497f9f07": "510dd150",
            "chunk-4ce1ffa8": "9517a6c4",
            "chunk-65b93946": "466db3df",
            "chunk-53b1137a": "1a3a7fdd",
            "chunk-541ea42d": "d7671b77",
            "chunk-54bbd082": "d551e7c8",
            "chunk-56e9c90e": "db0d5781",
            "chunk-59d4c87c": "c7d76e1a",
            "chunk-5a58789b": "d52723bb",
            "chunk-5a8ac886": "ffb23fac",
            "chunk-5ff96a24": "915f02a1",
            "chunk-62082fed": "50895f5a",
            "chunk-63f6baef": "cd3a91d0",
            "chunk-69eb8776": "8c2d62f8",
            "chunk-6d375f34": "dc5a622f",
            "chunk-70ec04d5": "71709cea",
            "chunk-719de42d": "cdaaf76d",
            "chunk-7548ca2d": "f370f9d8",
            "chunk-76c4106e": "4c2bee6e",
            "chunk-11a4ebc2": "008d65a8",
            "chunk-9c3bc91c": "f324fb7a",
            "chunk-79f1dac7": "dd60bd2b",
            "chunk-858cd918": "51f7e88a",
            "chunk-8bb7f81e": "cfaee476",
            "chunk-93d29f9c": "c52b8055",
            "chunk-9f3966b6": "99d714be",
            "chunk-a0ce5200": "ed476420",
            "chunk-a9395c36": "969e4f3f",
            "chunk-a9998396": "027268ec",
            "chunk-c7cfe512": "ee8933be",
            "chunk-c84aa04e": "d8020901",
            "chunk-cff142d8": "ff9b62be",
            "chunk-d0e8aa0a": "310918bc",
            "chunk-d8413eac": "79be0460",
            "chunk-e5275ddc": "9644086a",
            "chunk-eaa2b130": "9f2098f7",
            "polyfills-core-js": "12be3461",
            "polyfills-dom": "662760da",
            "chunk-2d2297f7": "3f21d6d7",
            "chunk-2d2073d6": "9e36930f",
            "chunk-2d0b33e3": "2e69defc",
            "chunk-2d0b9280": "6e52c23e",
            "chunk-2d0baac9": "ecbd8a2b",
            "chunk-2d21a589": "501003d3",
            "chunk-2d2376e6": "a05b70ee"
        } [e] + ".js"
    }

    function d(n) {
        if (t[n]) return t[n].exports;
        var c = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(c.exports, c, c.exports, d), c.l = !0, c.exports
    }
    d.e = function(e) {
        var n = [],
            c = {
                "chunk-035e0838": 1,
                "chunk-070cde5b": 1,
                "chunk-237e4d24": 1,
                "chunk-264ec364": 1,
                "chunk-3639ba33": 1,
                "chunk-46dc6002": 1,
                "chunk-497f9f07": 1,
                "chunk-4ce1ffa8": 1,
                "chunk-65b93946": 1,
                "chunk-56e9c90e": 1,
                "chunk-5a58789b": 1,
                "chunk-62082fed": 1,
                "chunk-63f6baef": 1,
                "chunk-70ec04d5": 1,
                "chunk-719de42d": 1,
                "chunk-76c4106e": 1,
                "chunk-11a4ebc2": 1,
                "chunk-9c3bc91c": 1,
                "chunk-93d29f9c": 1,
                "chunk-9f3966b6": 1,
                "chunk-a0ce5200": 1,
                "chunk-a9998396": 1,
                "chunk-c7cfe512": 1,
                "chunk-c84aa04e": 1,
                "chunk-cff142d8": 1
            };
        a[e] ? n.push(a[e]) : 0 !== a[e] && c[e] && n.push(a[e] = new Promise((function(n, c) {
            for (var t = "css/" + ({
                    "polyfills-core-js": "polyfills-core-js",
                    "polyfills-dom": "polyfills-dom"
                } [e] || e) + "." + {
                    "chunk-02c995b5": "31d6cfe0",
                    "chunk-035e0838": "f53cfe30",
                    "chunk-070cde5b": "2c30bf13",
                    "chunk-09155df3": "31d6cfe0",
                    "chunk-09162720": "31d6cfe0",
                    "chunk-097e0872": "31d6cfe0",
                    "chunk-0e93a01c": "31d6cfe0",
                    "chunk-106fab1a": "31d6cfe0",
                    "chunk-1bff95de": "31d6cfe0",
                    "chunk-1dbc15a2": "31d6cfe0",
                    "chunk-21a76241": "31d6cfe0",
                    "chunk-237e4d24": "28da31c5",
                    "chunk-25d83ca8": "31d6cfe0",
                    "chunk-264ec364": "c9703a52",
                    "chunk-2d0a463b": "31d6cfe0",
                    "chunk-2d0abc10": "31d6cfe0",
                    "chunk-2d0c073f": "31d6cfe0",
                    "chunk-2d0c1783": "31d6cfe0",
                    "chunk-2d0d43da": "31d6cfe0",
                    "chunk-2d0da04a": "31d6cfe0",
                    "chunk-2d0e5812": "31d6cfe0",
                    "chunk-2d213189": "31d6cfe0",
                    "chunk-2d217e6a": "31d6cfe0",
                    "chunk-2d218068": "31d6cfe0",
                    "chunk-2d21da73": "31d6cfe0",
                    "chunk-2d2214f1": "31d6cfe0",
                    "chunk-2d2304d2": "31d6cfe0",
                    "chunk-2d230c96": "31d6cfe0",
                    "chunk-2d237b00": "31d6cfe0",
                    "chunk-30dd9750": "31d6cfe0",
                    "chunk-3639ba33": "8528678c",
                    "chunk-37f2300e": "31d6cfe0",
                    "chunk-3ed29de3": "31d6cfe0",
                    "chunk-41c0f7a4": "31d6cfe0",
                    "chunk-462c869e": "31d6cfe0",
                    "chunk-46dc6002": "b0029e70",
                    "chunk-47245a33": "31d6cfe0",
                    "chunk-4739acd0": "31d6cfe0",
                    "chunk-485adc83": "31d6cfe0",
                    "chunk-497f9f07": "6e7089bc",
                    "chunk-4ce1ffa8": "ddc0af67",
                    "chunk-65b93946": "ce62fdc6",
                    "chunk-53b1137a": "31d6cfe0",
                    "chunk-541ea42d": "31d6cfe0",
                    "chunk-54bbd082": "31d6cfe0",
                    "chunk-56e9c90e": "9aed69e1",
                    "chunk-59d4c87c": "31d6cfe0",
                    "chunk-5a58789b": "9eed59a2",
                    "chunk-5a8ac886": "31d6cfe0",
                    "chunk-5ff96a24": "31d6cfe0",
                    "chunk-62082fed": "12e6eb99",
                    "chunk-63f6baef": "1c60ebef",
                    "chunk-69eb8776": "31d6cfe0",
                    "chunk-6d375f34": "31d6cfe0",
                    "chunk-70ec04d5": "f6110511",
                    "chunk-719de42d": "be6d8a10",
                    "chunk-7548ca2d": "31d6cfe0",
                    "chunk-76c4106e": "6e7089bc",
                    "chunk-11a4ebc2": "14637962",
                    "chunk-9c3bc91c": "cf9a85d8",
                    "chunk-79f1dac7": "31d6cfe0",
                    "chunk-858cd918": "31d6cfe0",
                    "chunk-8bb7f81e": "31d6cfe0",
                    "chunk-93d29f9c": "2dad4eee",
                    "chunk-9f3966b6": "1b182a4d",
                    "chunk-a0ce5200": "752eedf0",
                    "chunk-a9395c36": "31d6cfe0",
                    "chunk-a9998396": "6d7241f4",
                    "chunk-c7cfe512": "8fea7b3c",
                    "chunk-c84aa04e": "fde8eeed",
                    "chunk-cff142d8": "9fd337ff",
                    "chunk-d0e8aa0a": "31d6cfe0",
                    "chunk-d8413eac": "31d6cfe0",
                    "chunk-e5275ddc": "31d6cfe0",
                    "chunk-eaa2b130": "31d6cfe0",
                    "polyfills-core-js": "31d6cfe0",
                    "polyfills-dom": "31d6cfe0",
                    "chunk-2d2297f7": "31d6cfe0",
                    "chunk-2d2073d6": "31d6cfe0",
                    "chunk-2d0b33e3": "31d6cfe0",
                    "chunk-2d0b9280": "31d6cfe0",
                    "chunk-2d0baac9": "31d6cfe0",
                    "chunk-2d21a589": "31d6cfe0",
                    "chunk-2d2376e6": "31d6cfe0"
                } [e] + ".css", u = d.p + t, o = document.getElementsByTagName("link"), r = 0; r < o.length; r++) {
                var i = o[r],
                    f = i.getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (f === t || f === u)) return n()
            }
            var h = document.getElementsByTagName("style");
            for (r = 0; r < h.length; r++) {
                i = h[r], f = i.getAttribute("data-href");
                if (f === t || f === u) return n()
            }
            var s = document.createElement("link");
            s.rel = "stylesheet", s.type = "text/css", s.onload = n, s.onerror = function(n) {
                var t = n && n.target && n.target.src || u,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = t, delete a[e], s.parentNode.removeChild(s), c(o)
            }, s.href = u;
            var l = document.getElementsByTagName("head")[0];
            l.appendChild(s)
        })).then((function() {
            a[e] = 0
        })));
        var t = u[e];
        if (0 !== t)
            if (t) n.push(t[2]);
            else {
                var o = new Promise((function(n, c) {
                    t = u[e] = [n, c]
                }));
                n.push(t[2] = o);
                var i, f = document.createElement("script");
                f.charset = "utf-8", f.timeout = 120, d.nc && f.setAttribute("nonce", d.nc), f.src = r(e);
                var h = new Error;
                i = function(n) {
                    f.onerror = f.onload = null, clearTimeout(s);
                    var c = u[e];
                    if (0 !== c) {
                        if (c) {
                            var t = n && ("load" === n.type ? "missing" : n.type),
                                a = n && n.target && n.target.src;
                            h.message = "Loading chunk " + e + " failed.\n(" + t + ": " + a + ")", h.name = "ChunkLoadError", h.type = t, h.request = a, c[1](h)
                        }
                        u[e] = void 0
                    }
                };
                var s = setTimeout((function() {
                    i({
                        type: "timeout",
                        target: f
                    })
                }), 12e4);
                f.onerror = f.onload = i, document.head.appendChild(f)
            } return Promise.all(n)
    }, d.m = e, d.c = t, d.d = function(e, n, c) {
        d.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: c
        })
    }, d.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, d.t = function(e, n) {
        if (1 & n && (e = d(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var c = Object.create(null);
        if (d.r(c), Object.defineProperty(c, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var t in e) d.d(c, t, function(n) {
                return e[n]
            }.bind(null, t));
        return c
    }, d.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return d.d(n, "a", n), n
    }, d.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, d.p = "/", d.oe = function(e) {
        throw console.error(e), e
    };
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        f = i.push.bind(i);
    i.push = n, i = i.slice();
    for (var h = 0; h < i.length; h++) n(i[h]);
    var s = f;
    o.push([0, "chunk-vendors"]), c()
})({
    0: function(e, n, c) {
        e.exports = c("56d7")
    },
    "08a6": function(e, n, c) {
        const {
            Geolocation: t
        } = c("69af");
        async function a(e) {
            const n = await t.getCurrentPosition();
            e({
                accuracy: n.coords.accuracy,
                latitude: n.coords.latitude,
                longitude: n.coords.longitude
            })
        }

        function u(e, n, c, t) {
            if (!e || !n || !c || !t) return Number.MAX_VALUE;
            let a = e - c,
                u = Math.PI * a / 180,
                o = Math.PI * n / 180,
                r = Math.PI * t / 180,
                d = Math.sin(o) * Math.sin(r) + Math.cos(o) * Math.cos(r) * Math.cos(u);
            d = Math.acos(d), d = 180 * d / Math.PI;
            let i = 60 * d * 1.1515,
                f = 1.609344 * i;
            return Math.round(1e3 * f) / 1e3
        }
        e.exports = {
            getDistance: u,
            getLocation: a
        }
    },
    "3ac8": function(e, n, c) {},
    "45b3": function(e, n, c) {
        var t = {
            "./ion-icon.entry.js": ["ec64", "chunk-2d2304d2"]
        };

        function a(e) {
            if (!c.o(t, e)) return Promise.resolve().then((function() {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }));
            var n = t[e],
                a = n[0];
            return c.e(n[1]).then((function() {
                return c(a)
            }))
        }
        a.keys = function() {
            return Object.keys(t)
        }, a.id = "45b3", e.exports = a
    },
    "56d7": function(e, n, c) {
        "use strict";
        c.r(n);
        var t = c("d867"),
            a = c("7a23");

        function u(e, n, c, t, u, o) {
            const r = Object(a["B"])("ion-router-outlet"),
                d = Object(a["B"])("ion-app");
            return Object(a["u"])(), Object(a["e"])(d, null, {
                default: Object(a["H"])(() => [Object(a["j"])(r)]),
                _: 1
            })
        }
        var o = c("1547"),
            r = c("b0e6"),
            d = c("6c02"),
            i = c("5502"),
            f = c("d722"),
            h = c("08a6"),
            s = {
                components: {
                    IonApp: t["IonApp"],
                    IonRouterOutlet: t["IonRouterOutlet"]
                },
                setup() {
                    const e = Object(d["h"])(),
                        n = Object(i["b"])();
                    let c = [],
                        a = [];
                    async function u(e) {
                        await r["a"].initialize(), await r["a"].requestLEScan({}, n => {
                            let c = n.device.deviceId.toUpperCase();
                            e.forEach(e => {
                                e.token === c && Object(f["reportLocation"])({
                                    monitor_id: e.id
                                })
                            })
                        }), setTimeout(async () => {
                            await r["a"].stopLEScan()
                        }, 5e3)
                    }

                    function s() {
                        c.length ? n.state.token ? (Object(h["getLocation"])(e => {
                            n.commit("setCoords", e), c.forEach(n => {
                                let c = Object(h["getDistance"])(n.longitude, n.latitude, e.longitude, e.latitude);
                                c < .5 && Object(f["reportLocation"])({
                                    id: n.id,
                                    distance: c
                                })
                            }), setTimeout(s, 18e4)
                        }), a.length && u(a)) : setTimeout(s, 6e4) : Object(f["queryLocationInfo"])(e => {
                            c = e.temples, a = e.monitors
                        }, !0).then(() => {
                            setTimeout(s, c.length ? 1e3 : 6e4)
                        })
                    }
                    Object(t["useBackButton"])(-1, () => {
                        "Home" === e.name && o["b"].App.exitApp()
                    }), setTimeout(s, 1e3)
                }
            },
            l = c("6b0d"),
            k = c.n(l);
        const p = k()(s, [
            ["render", u]
        ]);
        var b = p,
            m = c("bec5");
        const y = [{
            path: "/",
            redirect: "/home"
        }, {
            name: "Attraction",
            path: "/attraction/:id",
            component: () => c.e("chunk-56e9c90e").then(c.bind(null, "c08f"))
        }, {
            name: "AttractionList",
            path: "/attraction-list/:id",
            component: () => c.e("chunk-9f3966b6").then(c.bind(null, "b814"))
        }, {
            name: "CompletedItem",
            path: "/completed-item/:order_id/:id",
            meta: {
                requiresAuth: !0
            },
            component: () => c.e("chunk-035e0838").then(c.bind(null, "a3b9"))
        }, {
            name: "CouponList",
            path: "/coupon-list/:id",
            meta: {
                requiresAuth: !0
            },
            component: () => c.e("chunk-719de42d").then(c.bind(null, "93c1"))
        }, {
            name: "Family",
            path: "/family/:id",
            meta: {
                requiresAuth: !0
            },
            component: () => Promise.all([c.e("chunk-76c4106e"), c.e("chunk-11a4ebc2")]).then(c.bind(null, "96c8"))
        }, {
            name: "FamilyList",
            path: "/family-list",
            meta: {
                requiresAuth: !0
            },
            component: () => c.e("chunk-3639ba33").then(c.bind(null, "2e9f"))
        }, {
            name: "ForgotForm",
            path: "/forgot-form",
            component: () => c.e("chunk-c7cfe512").then(c.bind(null, "ce85"))
        }, {
            name: "Home",
            path: "/home",
            component: () => c.e("chunk-070cde5b").then(c.bind(null, "bb51"))
        }, {
            name: "LoginForm",
            path: "/login-form",
            component: () => c.e("chunk-a9998396").then(c.bind(null, "5987"))
        }, {
            name: "MemberInfo",
            path: "/member-info",
            meta: {
                requiresAuth: !0
            },
            component: () => c.e("chunk-5a58789b").then(c.bind(null, "17d4"))
        }, {
            name: "NewFamily",
            path: "/new-family",
            meta: {
                requiresAuth: !0
            },
            component: () => Promise.all([c.e("chunk-76c4106e"), c.e("chunk-9c3bc91c")]).then(c.bind(null, "e382"))
        }, {
            name: "NewOrder",
            path: "/new-order/:id",
            meta: {
                requiresAuth: !0
            },
            component: () => Promise.all([c.e("chunk-497f9f07"), c.e("chunk-4ce1ffa8")]).then(c.bind(null, "bb41"))
        }, {
            name: "NewOrderItem",
            path: "/new-order-item/:id/:timestamp?",
            meta: {
                requiresAuth: !0
            },
            component: () => c.e("chunk-264ec364").then(c.bind(null, "514d"))
        }, {
            name: "News",
            path: "/news/:id",
            component: () => c.e("chunk-cff142d8").then(c.bind(null, "a2f9"))
        }, {
            name: "NewsList",
            path: "/news-list/:id",
            component: () => c.e("chunk-c84aa04e").then(c.bind(null, "c005"))
        }, {
            name: "Order",
            path: "/order/:id",
            meta: {
                requiresAuth: !0
            },
            component: () => Promise.all([c.e("chunk-497f9f07"), c.e("chunk-65b93946")]).then(c.bind(null, "cf2a"))
        }, {
            name: "OrderCompleted",
            path: "/order-completed/:id",
            meta: {
                requiresAuth: !0
            },
            component: () => c.e("chunk-63f6baef").then(c.bind(null, "6f13"))
        }, {
            name: "OrderList",
            path: "/order-list",
            meta: {
                requiresAuth: !0
            },
            component: () => c.e("chunk-62082fed").then(c.bind(null, "bf4b"))
        }, {
            name: "RegisterForm",
            path: "/register-form",
            component: () => c.e("chunk-a0ce5200").then(c.bind(null, "bbf0"))
        }, {
            name: "Temple",
            path: "/temple/:id",
            component: () => c.e("chunk-237e4d24").then(c.bind(null, "83e3"))
        }, {
            name: "TempleList",
            path: "/temple-list/:keyword?",
            component: () => c.e("chunk-70ec04d5").then(c.bind(null, "cd05"))
        }, {
            name: "VerifyForgotForm",
            path: "/verify-forgot-form/:token",
            component: () => c.e("chunk-93d29f9c").then(c.bind(null, "0f3e"))
        }, {
            name: "VerifyRegisterForm",
            path: "/verify-register-form/:token",
            component: () => c.e("chunk-46dc6002").then(c.bind(null, "3047"))
        }];
        var g = Object(m["b"])({
                history: Object(m["a"])("/"),
                routes: y
            }),
            j = Object(i["a"])({
                mutations: {
                    add(e, n) {
                        let c = e.items.filter(e => e.temple_id === n.temple_id && e.timestamp != n.timestamp);
                        c.push(n), e.items = c
                    },
                    addCoupon(e, n) {
                        let c = e.coupons.filter(e => e.code !== n.code);
                        c.push(n), e.coupons = c
                    },
                    logout(e) {
                        e.token = null
                    },
                    purge(e) {
                        e.coupons = e.coupons.filter(e => !e.checked), e.items = []
                    },
                    setCoords(e, n) {
                        e.coords = n
                    },
                    remove(state, itemToRemove) {
                        state.items = state.items.filter(item => item.timestamp !== itemToRemove.timestamp);
                    },
                    setToken(state, newToken) {
                        state.token = newToken;
                    },
                     login(state, token) {
                        state.token = token;
                    },
                },
                plugins: [e => {
                    e.subscribe((e, n) => {
                        localStorage.setItem("data", JSON.stringify(n))
                    })
                }],
                state() {
                    let e = localStorage.getItem("data"),
                        n = {
                            coords: {},
                            coupons: [],
                            items: [],
                            token: null
                        };
                    return e ? Object.assign(n, JSON.parse(e)) : n
                }
            });
        c("4b63"), c("4041"), c("51ef"), c("a237"), c("e09e"), c("46e5"), c("98b6"), c("2d22"), c("66b0"), c("ce1f"), c("8c28"), c("3ac8"), c("dee1");
        const v = Object(a["d"])(b).use(t["IonicVue"]).use(g).use(j);
        g.beforeEach(e => !(!j.state.token && e.matched.some(e => e.meta.requiresAuth)) || {
            name: "LoginForm"
        }), g.isReady().then(() => {
            v.mount("#app")
        }), window.screen.orientation.lock("portrait")
    },
    "8c28": function(e, n, c) {},
    aa55: function(e, n, c) {
        var t = {
            "./ion-action-sheet.entry.js": ["6618", "chunk-485adc83"],
            "./ion-alert.entry.js": ["f06c", "chunk-106fab1a"],
            "./ion-app_8.entry.js": ["c215", "chunk-53b1137a"],
            "./ion-avatar_3.entry.js": ["cf12", "chunk-59d4c87c"],
            "./ion-back-button.entry.js": ["4b35", "chunk-69eb8776"],
            "./ion-backdrop.entry.js": ["429d", "chunk-2d0c073f"],
            "./ion-button_2.entry.js": ["4453", "chunk-25d83ca8"],
            "./ion-card_5.entry.js": ["070b", "chunk-541ea42d"],
            "./ion-checkbox.entry.js": ["dfd8", "chunk-09162720"],
            "./ion-chip.entry.js": ["430d", "chunk-09155df3"],
            "./ion-col_3.entry.js": ["6a8a", "chunk-2d0da04a"],
            "./ion-datetime_3.entry.js": ["c15b", "chunk-21a76241"],
            "./ion-fab_3.entry.js": ["dd47", "chunk-3ed29de3"],
            "./ion-img.entry.js": ["9588", "chunk-2d0e5812"],
            "./ion-infinite-scroll_2.entry.js": ["d1e5", "chunk-2d21da73"],
            "./ion-input.entry.js": ["d111", "chunk-37f2300e"],
            "./ion-item-option_3.entry.js": ["1bb3", "chunk-5ff96a24"],
            "./ion-item_8.entry.js": ["69da", "chunk-5a8ac886"],
            "./ion-loading.entry.js": ["53a5", "chunk-6d375f34"],
            "./ion-menu_3.entry.js": ["cb00", "chunk-097e0872"],
            "./ion-modal.entry.js": ["1ad0", "chunk-1bff95de"],
            "./ion-nav_2.entry.js": ["e44f", "chunk-4739acd0"],
            "./ion-popover.entry.js": ["4285", "chunk-e5275ddc"],
            "./ion-progress-bar.entry.js": ["9b72", "chunk-1dbc15a2"],
            "./ion-radio_2.entry.js": ["beb3", "chunk-0e93a01c"],
            "./ion-range.entry.js": ["719f", "chunk-54bbd082"],
            "./ion-refresher_2.entry.js": ["0a47", "chunk-d8413eac"],
            "./ion-reorder_2.entry.js": ["6672", "chunk-d0e8aa0a"],
            "./ion-ripple-effect.entry.js": ["c8da", "chunk-2d218068"],
            "./ion-route_4.entry.js": ["10e8", "chunk-858cd918"],
            "./ion-searchbar.entry.js": ["8625", "chunk-a9395c36"],
            "./ion-segment_2.entry.js": ["0c02", "chunk-462c869e"],
            "./ion-select_3.entry.js": ["d25f", "chunk-79f1dac7"],
            "./ion-slide_2.entry.js": ["05dd", "chunk-2d0a463b"],
            "./ion-spinner.entry.js": ["e11b", "chunk-8bb7f81e"],
            "./ion-split-pane.entry.js": ["aae8", "chunk-2d213189"],
            "./ion-tab-bar_2.entry.js": ["a2bb", "chunk-02c995b5"],
            "./ion-tab_2.entry.js": ["6725", "chunk-47245a33"],
            "./ion-text.entry.js": ["ed3b", "chunk-30dd9750"],
            "./ion-textarea.entry.js": ["8798", "chunk-eaa2b130"],
            "./ion-toast.entry.js": ["c1a5", "chunk-41c0f7a4"],
            "./ion-toggle.entry.js": ["bef2", "chunk-7548ca2d"],
            "./ion-virtual-scroll.entry.js": ["5fd7", "chunk-2d0d43da"]
        };

        function a(e) {
            if (!c.o(t, e)) return Promise.resolve().then((function() {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }));
            var n = t[e],
                a = n[0];
            return c.e(n[1]).then((function() {
                return c(a)
            }))
        }
        a.keys = function() {
            return Object.keys(t)
        }, a.id = "aa55", e.exports = a
    },
    d722: function(e, n, c) {
        const t = c("bc3a"),
            {
                isPlatform: a,
                loadingController: u
            } = c("d867"),
            {
                Http: o
            } = c("766c"),
            {
                Network: r
            } = c("c8ec");
        let d, i = "https://light.go-free.tw",
            f = t.create({
                baseURL: i,
                withCredentials: !0
            }),
            h = {
                address: "地址",
                birthday: "生日",
                gender: "性別",
                name: "姓名",
                password: "密碼",
                username: "電話"
            };
        async function s(e, n, c, t) {
            if (t) return l(e, n, c);
            let s = await r.getStatus();
            if (!s.connected) return void alert("網路未連線");
            if (d) return;
            d = !0;
            let k, p = function(e) {
                    let n = e.data;
                    if (n.success) c && c(n);
                    else if ("validation" === n.type) {
                        let e = n.errors[0],
                            c = h[e.name] || e.name;
                        alert(`${c}: ${e.message}`)
                    } else alert(n.message || n.error)
                },
                b = await u.create();
            return await b.present(), k = a("desktop") ? f.post(e, n).then(p).catch((function(e) {
                e.response && 401 === e.response.status ? alert("LoginForm") : alert(e.message)
            })) : o.post({
                data: n,
                headers: {
                    "Content-type": "application/json"
                },
                url: i + e
            }).then((function(e) {
                switch (e.status) {
                    case 200:
                        p(e);
                        break;
                    case 401:
                        alert("LoginForm");
                        break;
                    default:
                        alert(e.status)
                }
            })).catch((function() {
                alert("網路連線失敗")
            })), k.then((function() {
                d = !1, b.dismiss()
            }))
        }
        async function l(e, n, c) {
            let t = await r.getStatus();
            if (!t.connected) return;
            let u, d = function(e) {
                let n = e.data;
                n.success && c && c(n)
            };
            return u = a("desktop") ? f.post(e, n).then(d) : o.post({
                data: n,
                headers: {
                    "Content-type": "application/json"
                },
                url: i + e
            }).then((function(e) {
                switch (e.status) {
                    case 200:
                        d(e);
                        break
                }
            })), u
        }

        function k(e, n) {
            s("/api/apply-forgot", e, n)
        }

        function p(e, n) {
            s("/api/apply-register", e, n)
        }

        function b(e, n) {
            s("/api/create-order", e, n)
        }

        function m(e, n) {
            return s("/api/execute-payment", {
                id: e
            }, n)
        }

        function y(e, n) {
            s("/api/forgot-sms", e, n)
        }

        function g(e, n) {
            s("/api/login", e, n)
        }

        function j(e) {
            s("/api/logout", {}, e)
        }

        function v(e, n) {
            return s("/api/get-attraction", {
                id: e
            }, n)
        }

        function O(e, n) {
            return s("/api/attraction-list", {
                temple_id: e
            }, n)
        }

        function w(e, n) {
            return s("/api/get-family", {
                id: e
            }, n)
        }

        function _(e) {
            return s("/api/family-list", {}, e)
        }

        function L(e) {
            s("/api/get-info", {}, e)
        }

        function q(e, n) {
            return s("/api/light-list", {
                temple_id: e
            }, n)
        }

        function A(e) {
            return s("/api/light-record-list", {}, e)
        }

        function P(e) {
            return s("/api/location-info", {}, e)
        }

        function C(e, n) {
            return s("/api/get-news", {
                id: e
            }, n)
        }

        function F(e, n) {
            return s("/api/news-list", {
                temple_id: e
            }, n)
        }

        function I(e, n) {
            s("/api/get-order", {
                id: e
            }, n)
        }

        function N(e, n) {
            s("/api/get-order-item", {
                id: e
            }, n)
        }

        function S(e) {
            s("/api/order-list", {}, e)
        }

        function E(e, n) {
            return s("/api/get-temple", {
                id: e
            }, n)
        }

        function M(e, n, c) {
            return s("/api/temple-list", e, n, c)
        }

        function x(e, n) {
            s("/api/register-sms", e, n)
        }

        function T(e, n) {
            return s("/api/remove-family", {
                id: e
            }, n)
        }

        function R(e) {
            return s("/api/report-location", e, !1, !0)
        }

        function U(e, n) {
            s("/api/save-family", e, n)
        }

        function D(e, n) {
            s("/api/save-info", e, n)
        }

        function B(e, n) {
            s("/api/search-light", e, n)
        }

        function H(e, n) {
            s("/api/verify-coupon", {
                code: e
            }, n)
        }

        function J(e, n) {
            s("/api/verify-forgot", e, n)
        }

        function V(e, n) {
            s("/api/verify-register", e, n)
        }

        function $(e, n) {
            s("/payment/passpay", e, n)
        }

        function z(e) {
            let n = "";
            return n = -1 !== e.indexOf("base64") ? e : i + "/files/" + e, n
        }
        e.exports = {
            applyForgot: k,
            applyRegister: p,
            baseUrl: i,
            createOrder: b,
            executePayment: m,
            forgotSms: y,
            login: g,
            logout: j,
            queryAttraction: v,
            queryAttractionList: O,
            queryFamily: w,
            queryFamilyList: _,
            queryInfo: L,
            queryLightList: q,
            queryLightRecordList: A,
            queryLocationInfo: P,
            queryNews: C,
            queryNewsList: F,
            queryOrder: I,
            queryOrderItem: N,
            queryOrderList: S,
            queryTemple: E,
            queryTempleList: M,
            registerSms: x,
            removeFamily: T,
            reportLocation: R,
            saveFamily: U,
            saveInfo: D,
            searchLight: B,
            verifyCoupon: H,
            verifyForgot: J,
            verifyRegister: V,
            getImgSrc: z,
            passpay: $
        }
    }
});
//# sourceMappingURL=app.963142ac.js.map