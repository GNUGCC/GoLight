(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-a0ce5200"], {
        "6c81": function(e, t, l) {},
        bbf0: function(e, t, l) {
            "use strict";
            l.r(t);
            var o = l("7a23");
            const c = Object(o["i"])("註冊"),
                n = Object(o["i"])("　　姓名　　"),
                j = Object(o["i"])("　　性別　　"),
                a = Object(o["i"])("男"),
                b = Object(o["i"])("女"),
                d = Object(o["i"])("　　生日　　"),
                u = Object(o["i"])("　　地址　　"),
                i = Object(o["i"])("　　電話　　"),
                O = Object(o["i"])("　　密碼　　"),
                s = Object(o["i"])("　確認密碼　"),
                r = Object(o["i"])("送出");

            function m(e, t, l, m, f, p) {
                const I = Object(o["B"])("ion-back-button"),
                    H = Object(o["B"])("ion-buttons"),
                    _ = Object(o["B"])("ion-title"),
                    B = Object(o["B"])("ion-toolbar"),
                    h = Object(o["B"])("ion-header"),
                    V = Object(o["B"])("ion-label"),
                    w = Object(o["B"])("ion-input"),
                    g = Object(o["B"])("ion-item"),
                    y = Object(o["B"])("ion-col"),
                    k = Object(o["B"])("ion-select-option"),
                    z = Object(o["B"])("ion-select"),
                    M = Object(o["B"])("ion-datetime"),
                    U = Object(o["B"])("ion-button"),
                    v = Object(o["B"])("ion-row"),
                    C = Object(o["B"])("ion-grid"),
                    T = Object(o["B"])("ion-content"),
                    D = Object(o["B"])("ion-page");
                return Object(o["u"])(), Object(o["e"])(D, null, {
                    default: Object(o["H"])(() => [Object(o["j"])(h, null, {
                        default: Object(o["H"])(() => [Object(o["j"])(B, null, {
                            default: Object(o["H"])(() => [Object(o["j"])(H, {
                                slot: "start"
                            }, {
                                default: Object(o["H"])(() => [Object(o["j"])(I, {
                                    "default-href": "/home"
                                })]),
                                _: 1
                            }), Object(o["j"])(_, null, {
                                default: Object(o["H"])(() => [c]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }), Object(o["j"])(T, {
                        class: "register-form"
                    }, {
                        default: Object(o["H"])(() => [Object(o["j"])(C, null, {
                            default: Object(o["H"])(() => [Object(o["j"])(v, null, {
                                default: Object(o["H"])(() => [Object(o["j"])(y, {
                                    size: "12"
                                }, {
                                    default: Object(o["H"])(() => [Object(o["j"])(g, {
                                        class: "input"
                                    }, {
                                        default: Object(o["H"])(() => [Object(o["j"])(V, null, {
                                            default: Object(o["H"])(() => [n]),
                                            _: 1
                                        }), Object(o["j"])(w, {
                                            modelValue: f.name,
                                            "onUpdate:modelValue": t[0] || (t[0] = e => f.name = e),
                                            modelModifiers: {
                                                trim: !0
                                            }
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), Object(o["j"])(y, {
                                    size: "12"
                                }, {
                                    default: Object(o["H"])(() => [Object(o["j"])(g, {
                                        class: "input select"
                                    }, {
                                        default: Object(o["H"])(() => [Object(o["j"])(V, null, {
                                            default: Object(o["H"])(() => [j]),
                                            _: 1
                                        }), Object(o["j"])(z, {
                                            interface: "popover",
                                            placeholder: "請選擇",
                                            modelValue: f.gender,
                                            "onUpdate:modelValue": t[1] || (t[1] = e => f.gender = e)
                                        }, {
                                            default: Object(o["H"])(() => [Object(o["j"])(k, {
                                                value: "1"
                                            }, {
                                                default: Object(o["H"])(() => [a]),
                                                _: 1
                                            }), Object(o["j"])(k, {
                                                value: "2"
                                            }, {
                                                default: Object(o["H"])(() => [b]),
                                                _: 1
                                            })]),
                                            _: 1
                                        }, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), Object(o["j"])(y, {
                                    size: "12"
                                }, {
                                    default: Object(o["H"])(() => [Object(o["j"])(g, {
                                        class: "input select"
                                    }, {
                                        default: Object(o["H"])(() => [Object(o["j"])(V, null, {
                                            default: Object(o["H"])(() => [d]),
                                            _: 1
                                        }), Object(o["j"])(M, {
                                            displayFormat: "YYYY-MM-DD",
                                            placeholder: "請選擇",
                                            modelValue: f.birthday,
                                            "onUpdate:modelValue": t[2] || (t[2] = e => f.birthday = e)
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), Object(o["j"])(y, {
                                    size: "12"
                                }, {
                                    default: Object(o["H"])(() => [Object(o["j"])(g, {
                                        class: "input"
                                    }, {
                                        default: Object(o["H"])(() => [Object(o["j"])(V, null, {
                                            default: Object(o["H"])(() => [u]),
                                            _: 1
                                        }), Object(o["j"])(w, {
                                            modelValue: f.address,
                                            "onUpdate:modelValue": t[3] || (t[3] = e => f.address = e),
                                            modelModifiers: {
                                                trim: !0
                                            }
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), Object(o["j"])(y, {
                                    size: "12"
                                }, {
                                    default: Object(o["H"])(() => [Object(o["j"])(g, {
                                        class: "input"
                                    }, {
                                        default: Object(o["H"])(() => [Object(o["j"])(V, null, {
                                            default: Object(o["H"])(() => [i]),
                                            _: 1
                                        }), Object(o["j"])(w, {
                                            placeholder: "此為會員帳號",
                                            type: "tel",
                                            modelValue: f.username,
                                            "onUpdate:modelValue": t[4] || (t[4] = e => f.username = e),
                                            modelModifiers: {
                                                trim: !0
                                            }
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), Object(o["j"])(y, {
                                    size: "12"
                                }, {
                                    default: Object(o["H"])(() => [Object(o["j"])(g, {
                                        class: "input"
                                    }, {
                                        default: Object(o["H"])(() => [Object(o["j"])(V, null, {
                                            default: Object(o["H"])(() => [O]),
                                            _: 1
                                        }), Object(o["j"])(w, {
                                            type: "password",
                                            modelValue: f.password,
                                            "onUpdate:modelValue": t[5] || (t[5] = e => f.password = e),
                                            modelModifiers: {
                                                trim: !0
                                            }
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), Object(o["j"])(y, {
                                    size: "12"
                                }, {
                                    default: Object(o["H"])(() => [Object(o["j"])(g, {
                                        class: "input"
                                    }, {
                                        default: Object(o["H"])(() => [Object(o["j"])(V, null, {
                                            default: Object(o["H"])(() => [s]),
                                            _: 1
                                        }), Object(o["j"])(w, {
                                            type: "password",
                                            modelValue: f.confirm,
                                            "onUpdate:modelValue": t[6] || (t[6] = e => f.confirm = e),
                                            modelModifiers: {
                                                trim: !0
                                            }
                                        }, null, 8, ["modelValue"])]),
                                        _: 1
                                    })]),
                                    _: 1
                                }), Object(o["j"])(y, {
                                    size: "12"
                                }, {
                                    default: Object(o["H"])(() => [Object(o["j"])(U, {
                                        class: "button-3",
                                        onClick: p.submit
                                    }, {
                                        default: Object(o["H"])(() => [r]),
                                        _: 1
                                    }, 8, ["onClick"])]),
                                    _: 1
                                })]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })
            }
            var f = l("d722"),
                p = l("d867"),
                I = {
                    components: {
                        IonBackButton: p["IonBackButton"],
                        IonButton: p["IonButton"],
                        IonButtons: p["IonButtons"],
                        IonCol: p["IonCol"],
                        IonContent: p["IonContent"],
                        IonDatetime: p["IonDatetime"],
                        IonGrid: p["IonGrid"],
                        IonHeader: p["IonHeader"],
                        IonInput: p["IonInput"],
                        IonItem: p["IonItem"],
                        IonLabel: p["IonLabel"],
                        IonPage: p["IonPage"],
                        IonRow: p["IonRow"],
                        IonSelect: p["IonSelect"],
                        IonSelectOption: p["IonSelectOption"],
                        IonTitle: p["IonTitle"],
                        IonToolbar: p["IonToolbar"]
                    },
                    data() {
                        return {
                            name: "",
                            gender: "",
                            birthday: "",
                            address: "",
                            username: "",
                            password: "",
                            confirm: ""
                        }
                    },
                    methods: {
                        submit() {
                            Object(f["applyRegister"])({
                                name: this.name,
                                gender: this.gender,
                                birthday: this.birthday.split("T")[0],
                                address: this.address,
                                username: this.username,
                                password: this.password,
                                confirm: this.confirm
                            }, e => {
                                this.$router.replace({
                                    name: "VerifyRegisterForm",
                                    params: {
                                        token: e.token
                                    }
                                })
                            })
                        }
                    }
                },
                H = (l("dd49"), l("6b0d")),
                _ = l.n(H);
            const B = _()(I, [
                ["render", m],
                ["__scopeId", "data-v-42584e54"]
            ]);
            t["default"] = B
        },
        dd49: function(e, t, l) {
            "use strict";
            l("6c81")
        }
    }
]);
//# sourceMappingURL=chunk-a0ce5200.ed476420.js.map