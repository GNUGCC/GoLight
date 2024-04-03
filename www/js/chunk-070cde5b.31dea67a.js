(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-070cde5b"], {
        "1f70": function(e, t, c) {},
        "448a": function(e, t, c) {
            "use strict";
            var n = c("7a23");

            function o(e, t, c, o, s, j) {
                const r = Object(n["B"])("ion-img");
                return Object(n["u"])(), Object(n["e"])(r, {
                    src: j.url
                }, null, 8, ["src"])
            }
            var s = c("d722"),
                j = c("d867"),
                r = {
                    components: {
                        IonImg: j["IonImg"]
                    },
                    computed: {
                        url() {
                            return `${s["baseUrl"]}/files/${this.path}`
                        }
                    },
                    data() {
                        return {}
                    },
                    props: {
                        path: String
                    }
                },
                b = c("6b0d"),
                i = c.n(b);
            const a = i()(r, [
                ["render", o]
            ]);
            t["a"] = a
        },
        bb51: function(e, t, c) {
            "use strict";
            c.r(t);
            var n = c("7a23");

            function o(e, t, c, o, s, j) {
                const r = Object(n["B"])("ion-img"),
                    b = Object(n["B"])("ion-col"),
                    i = Object(n["B"])("ion-row"),
                    a = Object(n["B"])("ion-text"),
                    l = Object(n["B"])("remote-img"),
                    u = Object(n["B"])("ion-grid"),
                    O = Object(n["B"])("ion-content"),
                    d = Object(n["B"])("ion-page");
                return Object(n["u"])(), Object(n["e"])(d, null, {
                    default: Object(n["H"])(() => [Object(n["j"])(O, {
                        class: Object(n["p"])(s.records.length ? "home2" : "home")
                    }, {
                        default: Object(n["H"])(() => [j.token ? (Object(n["u"])(), Object(n["e"])(u, {
                            key: 0
                        }, {
                            default: Object(n["H"])(() => [Object(n["j"])(i, null, {
                                default: Object(n["H"])(() => [Object(n["j"])(b, {
                                    class: "ion-padding",
                                    offset: "1",
                                    size: "5"
                                }, {
                                    default: Object(n["H"])(() => [Object(n["j"])(r, {
                                        src: "/assets/images/btn2-1.png",
                                        "router-link": "/member-info"
                                    })]),
                                    _: 1
                                }), Object(n["j"])(b, {
                                    class: "ion-padding",
                                    size: "5"
                                }, {
                                    default: Object(n["H"])(() => [Object(n["j"])(r, {
                                        src: "/assets/images/btn2-2.png",
                                        "router-link": "/temple-list"
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            }), Object(n["j"])(i, null, {
                                default: Object(n["H"])(() => [Object(n["j"])(b, {
                                    class: "ion-padding",
                                    offset: "1",
                                    size: "5"
                                }, {
                                    default: Object(n["H"])(() => [Object(n["j"])(r, {
                                        src: "/assets/images/btn2-3.png",
                                        "router-link": "/order-list"
                                    })]),
                                    _: 1
                                }), Object(n["j"])(b, {
                                    class: "ion-padding",
                                    size: "5"
                                }, {
                                    default: Object(n["H"])(() => [Object(n["j"])(r, {
                                        onClick: j.logout,
                                        src: "/assets/images/btn2-4.png"
                                    }, null, 8, ["onClick"])]),
                                    _: 1
                                })]),
                                _: 1
                            }), Object(n["I"])(Object(n["j"])(i, {
                                class: "ion-justify-content-around",
                                style: {
                                    margin: "0 30px"
                                }
                            }, {
                                default: Object(n["H"])(() => [(Object(n["u"])(!0), Object(n["g"])(n["a"], null, Object(n["A"])(s.records, e => (Object(n["u"])(), Object(n["e"])(b, {
                                    class: "ion-text-center",
                                    key: e.id,
                                    size: "4"
                                }, {
                                    default: Object(n["H"])(() => [Object(n["j"])(a, null, {
                                        default: Object(n["H"])(() => [Object(n["i"])(Object(n["D"])(e.name), 1)]),
                                        _: 2
                                    }, 1024), Object(n["j"])(l, {
                                        path: e.pet_image && "" !== e.pet_image ? e.pet_image : e.icon
                                    }, null, 8, ["path"])]),
                                    _: 2
                                }, 1024))), 128))]),
                                _: 1
                            }, 512), [
                                [n["F"], s.records.length]
                            ])]),
                            _: 1
                        })) : (Object(n["u"])(), Object(n["e"])(u, {
                            key: 1
                        }, {
                            default: Object(n["H"])(() => [Object(n["j"])(i, null, {
                                default: Object(n["H"])(() => [Object(n["j"])(b, {
                                    offset: "4",
                                    size: "4"
                                }, {
                                    default: Object(n["H"])(() => [Object(n["j"])(r, {
                                        src: "/assets/images/btn1-1.png",
                                        "router-link": "/temple-list"
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            }), Object(n["j"])(i, null, {
                                default: Object(n["H"])(() => [Object(n["j"])(b, {
                                    offset: "4",
                                    size: "4"
                                }, {
                                    default: Object(n["H"])(() => [Object(n["j"])(r, {
                                        src: "/assets/images/btn1-2.png",
                                        "router-link": "/login-form"
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            }), Object(n["j"])(i, null, {
                                default: Object(n["H"])(() => [Object(n["j"])(b, {
                                    offset: "4",
                                    size: "4"
                                }, {
                                    default: Object(n["H"])(() => [Object(n["j"])(r, {
                                        src: "/assets/images/btn1-3.png",
                                        "router-link": "/register-form"
                                    })]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        }))]),
                        _: 1
                    }, 8, ["class"])]),
                    _: 1
                })
            }
            var s = c("d722"),
                j = c("d867"),
                r = c("448a"),
                b = {
                    components: {
                        IonCol: j["IonCol"],
                        IonContent: j["IonContent"],
                        IonGrid: j["IonGrid"],
                        IonImg: j["IonImg"],
                        IonPage: j["IonPage"],
                        IonRow: j["IonRow"],
                        IonText: j["IonText"],
                        RemoteImg: r["a"]
                    },
                   computed: {
                        token() {
                            return this.$store.state.token;
                        },
                        isLoggedIn() {
                            return !!localStorage.getItem('token');
                        }
                    },
                    data() {
                        return {
                            records: []
                        }
                    },
                    methods: {
                        logout() {
                            Object(s["logout"])(() => {
                                this.$store.commit("logout"), this.records = []
                            })
                        },
                        query() {
                            this.token ? Object(s["queryLightRecordList"])(e => {
                                this.records = e.records
                            }) : this.records = []
                        }
                    },
                    mounted() {
                        this.query()
                    },
                    watch: {
                        $route(e) {
                            "Home" === e.name && this.query()
                        }
                    }
                },
                i = (c("e24c"), c("6b0d")),
                a = c.n(i);
            const l = a()(b, [
                ["render", o],
                ["__scopeId", "data-v-5a83239b"]
            ]);
            t["default"] = l
        },
        e24c: function(e, t, c) {
            "use strict";
            c("1f70")
        }
    }
]);
//# sourceMappingURL=chunk-070cde5b.c6691caa.js.map