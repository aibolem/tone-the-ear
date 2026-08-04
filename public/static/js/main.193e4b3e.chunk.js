(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1035: function(e, t, a) {},
        1046: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(1),
                i = a.n(n),
                r = a(38),
                s = a.n(r),
                o = (a(496), a(24)),
                l = a(20),
                c = a(40),
                u = a(39),
                m = a(41),
                p = a(1051),
                d = a(1050),
                h = a(52),
                f = a(284),
                g = a.n(f),
                b = a(487),
                E = a.n(b),
                _ = a(489),
                y = a(110),
                v = a(142),
                C = a(285),
                N = a.n(C),
                O = (a(1048), a(452)),
                w = a.n(O),
                S = (a(673), a(453)),
                x = a.n(S),
                k = a(454),
                P = a.n(k),
                A = a(25),
                j = a.n(A),
                T = a(141),
                D = a.n(T),
                R = a(455),
                M = a.n(R),
                z = a(63),
                I = a.n(z),
                B = a(456),
                F = a.n(B),
                L = a(30),
                G = a.n(L),
                K = a(1049),
                U = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (a = Object(c.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(i)))).state = {
                            auth: !0,
                            anchorEl: null
                        }, a.handleMenu = function(e) {
                            a.setState({
                                anchorEl: e.currentTarget
                            })
                        }, a.handleClose = function() {
                            a.setState({
                                anchorEl: null
                            })
                        }, a
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.classes,
                                t = this.state,
                                a = (t.auth, t.anchorEl),
                                n = Boolean(a);
                            return i.a.createElement("div", {
                                className: e.root
                            }, i.a.createElement(x.a, {
                                position: "static"
                            }, i.a.createElement(P.a, null, i.a.createElement(D.a, {
                                "aria-owns": n ? "menu-appbar" : void 0,
                                "aria-haspopup": "true",
                                onClick: this.handleMenu,
                                color: "inherit",
                                className: e.menuButton
                            }, i.a.createElement(M.a, null)), i.a.createElement(F.a, {
                                id: "menu-appbar",
                                anchorEl: a,
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                open: n,
                                onClose: this.handleClose
                            }, i.a.createElement(I.a, {
                                onClick: this.handleClose
                            }, i.a.createElement("a", {
                                href: "https://github.com/snowme34/tone-the-ear",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    "text-decoration": "none",
                                    color: "black"
                                }
                            }, "About")), i.a.createElement(I.a, {
                                onClick: this.handleClose
                            }, i.a.createElement("a", {
                                href: "https://contact.snowme34.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    "text-decoration": "none",
                                    color: "black"
                                }
                            }, "Contact"))), i.a.createElement(j.a, {
                                variant: "h6",
                                color: "inherit",
                                align: "left",
                                className: e.grow
                            }, "Tone the Ear"), i.a.createElement("div", null, i.a.createElement(G.a, {
                                "aria-owns": n ? "menu-appbar" : void 0,
                                "aria-haspopup": "true",
                                color: "inherit",
                                component: K.a,
                                to: "/"
                            }, "Home"), i.a.createElement(G.a, {
                                "aria-owns": n ? "menu-appbar" : void 0,
                                "aria-haspopup": "true",
                                color: "inherit",
                                component: K.a,
                                to: "/tone"
                            }, "Tone"), i.a.createElement(G.a, {
                                "aria-owns": n ? "menu-appbar" : void 0,
                                "aria-haspopup": "true",
                                color: "inherit",
                                component: K.a,
                                to: "/pitch"
                            }, "Pitch"), i.a.createElement(G.a, {
                                "aria-owns": n ? "menu-appbar" : void 0,
                                "aria-haspopup": "true",
                                color: "inherit",
                                component: K.a,
                                to: "/midi"
                            }, "Midi")))))
                        }
                    }]), t
                }(i.a.Component),
                W = Object(h.withStyles)({
                    root: {
                        flexGrow: 1,
                        height: "10vh"
                    },
                    grow: {
                        flexGrow: 1
                    },
                    menuButton: {
                        marginLeft: -12,
                        marginRight: 20
                    }
                })(U),
                J = a(21),
                V = a(75),
                q = a.n(V),
                H = a(458),
                Q = a.n(H),
                Y = a(91),
                X = a.n(Y),
                Z = a(92),
                $ = a.n(Z),
                ee = a(10),
                te = a.n(ee),
                ae = a(457),
                ne = a.n(ae),
                ie = a(194),
                re = a.n(ie),
                se = a(111),
                oe = a.n(se);
            var le = Object(h.withStyles)({
                card: {
                    margin: "auto",
                    "box-shadow": "none"
                },
                bullet: {
                    display: "inline-block",
                    margin: "0 2px",
                    transform: "scale(0.8)"
                },
                title: {
                    fontSize: 14
                },
                pos: {
                    marginBottom: 12
                }
            })(function(e) {
                var t = e.note;
                t.length || (t = ["_"]);
                var a = e.classes;
                return i.a.createElement(re.a, {
                    className: a.card
                }, i.a.createElement(oe.a, null, i.a.createElement(j.a, {
                    className: a.title,
                    color: "textSecondary",
                    gutterBottom: !0
                }), i.a.createElement(j.a, {
                    className: a.pos,
                    color: "textSecondary"
                }), i.a.createElement(j.a, {
                    component: "p"
                }, "The note being played is:"), i.a.createElement(j.a, {
                    variant: "h5",
                    component: "h2"
                }, t)))
            });
            var ce = function(e, t) {
                return "C1" === e && "C3" === t ? 0 : "C2" === e && "C4" === t ? 1 : "C3" === e && "C5" === t ? 2 : "C4" === e && "C6" === t ? 3 : "C5" === e && "C7" === t ? 4 : "C6" === e && "C8" === t ? 5 : 6
            };
            var ue = ["C1-C3", "C2-C4", "C3-C5", "C4-C6", "C5-C7"];
            a(798);

            function me(e) {
                var t = e.children;
                return i.a.createElement("div", {
                    className: "the-piano__piano-container",
                    onMouseDown: function(e) {
                        return e.preventDefault()
                    }
                }, t)
            }

            function pe(e) {
                switch (e) {
                    case "BACKSPACE":
                        return "\u232b";
                    case "ENTER":
                        return "\u23ce";
                    default:
                        return e
                }
            }

            function de(e) {
                var t = e.isPlaying,
                    a = e.text,
                    n = e.eventHandlers,
                    r = pe(a);
                return i.a.createElement("div", {
                    className: "the-piano__accidental-key__wrapper"
                }, i.a.createElement("button", Object.assign({
                    className: "the-piano__accidental-key ".concat(t ? "the-piano__accidental-key--playing" : "")
                }, n), i.a.createElement("div", {
                    className: "the-piano__text"
                }, r)))
            }

            function he(e) {
                var t = e.isPlaying,
                    a = e.text,
                    n = e.eventHandlers,
                    r = pe(a);
                return i.a.createElement("button", Object.assign({
                    className: "the-piano__natural-key ".concat(t ? "the-piano__natural-key--playing" : "")
                }, n), i.a.createElement("div", {
                    className: "the-piano__text"
                }, r))
            }
            var fe = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.startNote,
                                a = this.props.endNote,
                                n = function(t) {
                                    return e.props.handleNotePlay(t)
                                },
                                r = function(t) {
                                    return e.props.handleNoteStop(t)
                                },
                                s = function(e, t) {
                                    switch (ce(e, t)) {
                                        case 0:
                                            return {
                                                TAB: "C1", 1: "C#1", Q: "D1", 2: "D#1", W: "E1", E: "F1", 4: "F#1", R: "G1", 5: "G#1", T: "A1", 6: "A#1", Y: "B1", U: "C2", 8: "C#2", I: "D2", 9: "D#2", O: "E2", P: "F2", "-": "F#2", "[": "G2", "=": "G#2", "]": "A2", BACKSPACE: "A#2", "\\": "B2", ENTER: "C3"
                                            };
                                        case 1:
                                            return {
                                                TAB: "C2", 1: "C#2", Q: "D2", 2: "D#2", W: "E2", E: "F2", 4: "F#2", R: "G2", 5: "G#2", T: "A2", 6: "A#2", Y: "B2", U: "C3", 8: "C#3", I: "D3", 9: "D#3", O: "E3", P: "F3", "-": "F#3", "[": "G3", "=": "G#3", "]": "A3", BACKSPACE: "A#3", "\\": "B3", ENTER: "C4"
                                            };
                                        case 3:
                                            return {
                                                TAB: "C4", 1: "C#4", Q: "D4", 2: "D#4", W: "E4", E: "F4", 4: "F#4", R: "G4", 5: "G#4", T: "A4", 6: "A#4", Y: "B4", U: "C5", 8: "C#5", I: "D5", 9: "D#5", O: "E5", P: "F5", "-": "F#5", "[": "G5", "=": "G#5", "]": "A5", BACKSPACE: "A#5", "\\": "B5", ENTER: "C6"
                                            };
                                        case 4:
                                            return {
                                                TAB: "C5", 1: "C#5", Q: "D5", 2: "D#5", W: "E5", E: "F5", 4: "F#5", R: "G5", 5: "G#5", T: "A5", 6: "A#5", Y: "B5", U: "C6", 8: "C#6", I: "D6", 9: "D#6", O: "E6", P: "F6", "-": "F#6", "[": "G6", "=": "G#6", "]": "A6", BACKSPACE: "A#6", "\\": "B6", ENTER: "C7"
                                            };
                                        case 5:
                                            return {
                                                TAB: "C6", 1: "C#6", Q: "D6", 2: "D#6", W: "E6", E: "F6", 4: "F#6", R: "G6", 5: "G#6", T: "A6", 6: "A#6", Y: "B6", U: "C7", 8: "C#7", I: "D7", 9: "D#7", O: "E7", P: "F7", "-": "F#7", "[": "G7", "=": "G#7", "]": "A7", BACKSPACE: "A#7", "\\": "B7", ENTER: "C8"
                                            };
                                        default:
                                            return {
                                                TAB: "C3", 1: "C#3", Q: "D3", 2: "D#3", W: "E3", E: "F3", 4: "F#3", R: "G3", 5: "G#3", T: "A3", 6: "A#3", Y: "B3", U: "C4", 8: "C#4", I: "D4", 9: "D#4", O: "E4", P: "F4", "-": "F#4", "[": "G4", "=": "G#4", "]": "A4", BACKSPACE: "A#4", "\\": "B4", ENTER: "C5"
                                            }
                                    }
                                }(t, a);
                            return i.a.createElement(ne.a, {
                                startNote: this.props.startNote,
                                endNote: this.props.endNote,
                                keyboardMap: s,
                                renderPianoKey: function(e) {
                                    var t = e.note,
                                        a = e.isNoteAccidental,
                                        s = e.isNotePlaying,
                                        o = e.startPlayingNote,
                                        l = e.stopPlayingNote,
                                        c = e.keyboardShortcuts;

                                    function u() {
                                        n(t), o()
                                    }

                                    function m() {
                                        s && (r(t), l())
                                    }
                                    var p = a ? de : he,
                                        d = {
                                            onMouseDown: u,
                                            onMouseEnter: function(e) {
                                                e.buttons && (n(t), o())
                                            },
                                            onTouchStart: u,
                                            onMouseUp: m,
                                            onMouseOut: m,
                                            onTouchEnd: m
                                        };
                                    return i.a.createElement(p, {
                                        isPlaying: s,
                                        text: c.join(" / "),
                                        eventHandlers: d
                                    })
                                }
                            })
                        }
                    }]), t
                }(n.Component),
                ge = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).handleRangeChange = function(e) {
                            var t;
                            a.setState((t = {}, Object(J.a)(t, e.target.name, e.target.value), Object(J.a)(t, "startNote", e.target.value.substring(0, 2)), Object(J.a)(t, "endNote", e.target.value.substring(3)), t))
                        }, a.state = {
                            startNote: "C3",
                            endNote: "C5",
                            theNote: [],
                            range: "C3-C5"
                        }, a.RANGE_LIST = ue.map(function(e) {
                            return i.a.createElement(I.a, {
                                key: e[1],
                                value: e
                            }, e)
                        }), a
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "handleNotePlay",
                        value: function(e) {
                            var t = this.state.theNote;
                            t.push(e), this.setState({
                                theNote: t
                            })
                        }
                    }, {
                        key: "handleNoteStop",
                        value: function(e) {
                            var t = this.state.theNote,
                                a = t.indexOf(e); - 1 !== a && (t.splice(a, 1), this.setState({
                                theNote: t
                            }))
                        }
                    }, {
                        key: "renderNote",
                        value: function(e) {
                            return i.a.createElement(le, {
                                note: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return i.a.createElement(te.a, {
                                container: !0,
                                spacing: 8,
                                direction: "column",
                                alignItems: "center",
                                wrap: "nowrap",
                                style: {
                                    margin: "auto",
                                    height: "90vh",
                                    width: "100%"
                                }
                            }, i.a.createElement(te.a, {
                                item: !0
                            }, i.a.createElement("h1", null, "A Musical Keyboard"), i.a.createElement("h2", null, "Use it to practice your ears!")), i.a.createElement(te.a, {
                                item: !0
                            }, i.a.createElement("form", {
                                className: "tone-player-form",
                                autoComplete: "off"
                            }, i.a.createElement(X.a, {
                                className: "tone-player-range-form-control"
                            }, i.a.createElement($.a, {
                                value: this.state.range,
                                onChange: this.handleRangeChange,
                                displayEmpty: !0,
                                name: "range",
                                className: "tone-player-range-select"
                            }, this.RANGE_LIST), i.a.createElement(Q.a, null, "Select the first note and the last note")))), i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto",
                                sm: "auto"
                            }, this.renderNote(this.state.theNote)), i.a.createElement(te.a, {
                                item: !0
                            }, i.a.createElement(q.a, {
                                elevation: 1
                            }, i.a.createElement(me, null, i.a.createElement(fe, {
                                handleNotePlay: function(t) {
                                    return e.handleNotePlay(t)
                                },
                                handleNoteStop: function(t) {
                                    return e.handleNoteStop(t)
                                },
                                startNote: this.state.startNote,
                                endNote: this.state.endNote
                            })))))
                        }
                    }]), t
                }(n.Component),
                be = a(196),
                Ee = a.n(be),
                _e = a(195),
                ye = a.n(_e),
                ve = a(112),
                Ce = a.n(ve),
                Ne = a(144),
                Oe = a.n(Ne),
                we = a(197),
                Se = a.n(we),
                xe = a(198),
                ke = a.n(xe),
                Pe = a(463),
                Ae = a.n(Pe),
                je = a(464),
                Te = a.n(je),
                De = a(465),
                Re = a.n(De),
                Me = a(460),
                ze = a.n(Me),
                Ie = a(462),
                Be = a.n(Ie),
                Fe = a(42),
                Le = a.n(Fe),
                Ge = a(461),
                Ke = a.n(Ge),
                Ue = a(286),
                We = a.n(Ue),
                Je = a(459),
                Ve = a(292),
                qe = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
                He = [1, 2, 3, 4, 5, 6, 7];
            He.reduce(function(e, t) {
                var a = qe.map(function(e) {
                    return "".concat(e).concat(t)
                });
                return Object(Ve.a)(e).concat(Object(Ve.a)(a))
            }, []);

            function Qe(e) {
                for (var t, a, n = e.length; 0 !== n;) a = Math.floor(Math.random() * n), t = e[n -= 1], e[n] = e[a], e[a] = t;
                return e
            }
            a(829);

            function Ye(e) {
                return i.a.createElement(i.a.Fragment, null, i.a.createElement(ye.a, {
                    component: "legend"
                }, "Choose the notes to test, you can change anytime"), i.a.createElement(Ee.a, {
                    row: !0
                }, qe.map(function(t) {
                    return i.a.createElement(Ce.a, {
                        key: t,
                        control: i.a.createElement(Oe.a, {
                            checked: e.tones[qe.indexOf(t)],
                            onChange: e.handleSelection(t),
                            value: t
                        }),
                        label: t
                    })
                })))
            }

            function Xe(e) {
                var t = e.answers.map(function(t) {
                    return i.a.createElement(te.a, {
                        key: t,
                        item: !0,
                        xs: "auto"
                    }, i.a.createElement(G.a, {
                        key: t,
                        color: "default",
                        className: "pitch-trainer-button",
                        onClick: function() {
                            return e.handleGameAnswer(t)
                        }
                    }, t))
                });
                return i.a.createElement(te.a, {
                    container: !0,
                    spacing: 8,
                    direction: "row",
                    alignItems: "center"
                }, t)
            }

            function Ze(e) {
                return i.a.createElement(ze.a, {
                    className: "pitch-trainer-stat-table"
                }, i.a.createElement(Ke.a, null, i.a.createElement(We.a, null, i.a.createElement(Le.a, null, "Notes Tested"), i.a.createElement(Le.a, {
                    numeric: !0
                }, "Number of Questions"), i.a.createElement(Le.a, {
                    numeric: !0
                }, "Number of Skipped Questions"), i.a.createElement(Le.a, {
                    numeric: !0
                }, "Number of Attempts"), i.a.createElement(Le.a, {
                    numeric: !0
                }, "Average Times for Correct Attempt(s)"), i.a.createElement(Le.a, {
                    numeric: !0
                }, "Accuracy (#Correct/#Attempts)"))), i.a.createElement(Be.a, null, e.rows.map(function(e) {
                    return i.a.createElement(We.a, {
                        key: e.id
                    }, i.a.createElement(Le.a, {
                        component: "th",
                        scope: "row"
                    }, e.note), i.a.createElement(Le.a, {
                        numeric: !0
                    }, e.numQ), i.a.createElement(Le.a, {
                        numeric: !0
                    }, e.numS), i.a.createElement(Le.a, {
                        numeric: !0
                    }, e.numA), i.a.createElement(Le.a, {
                        numeric: !0
                    }, isNaN(e.averageCorrectTime) ? 0 : e.averageCorrectTime), i.a.createElement(Le.a, {
                        numeric: !0
                    }, isNaN(e.accuracy) ? 0 : e.accuracy))
                })))
            }
            var $e = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).handleSelection = function(e) {
                            return function(t) {
                                var n = a.state.tones;
                                n[qe.indexOf(e)] = t.target.checked, a.setState({
                                    tones: n
                                })
                            }
                        }, a.handleNumChoices = function(e) {
                            a.setState(Object(J.a)({}, e.target.name, e.target.value))
                        }, a.state = {
                            tones: [!0, !1, !0, !1, !1, !1, !1, !0, !1, !0, !1, !1],
                            isLoaded: !1,
                            isStarted: !1,
                            numChoices: 3,
                            tonePlaying: "C",
                            notePlaying: "C4",
                            gameStartTime: 0,
                            isCorrect: !1,
                            lastAnswer: -1,
                            answers: [],
                            isFirstGame: !0,
                            statQuestions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            statSkips: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            statTries: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            statTriesTime: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            statCorrect: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }, a.NUM_CHOICES_LIST = Array.apply(null, {
                            length: qe.length
                        }).map(Number.call, Number).map(function(e) {
                            return i.a.createElement(I.a, {
                                key: e,
                                value: e
                            }, e)
                        }).slice(3), a.ac = new AudioContext, Object(Je.instrument)(a.ac, "acoustic_grand_piano", {
                            soundfont: "MusyngKite"
                        }).then(function(e) {
                            a.somePiano = e, a.setState({
                                isLoaded: !0
                            })
                        }), a
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "handleGameStart",
                        value: function() {
                            var e = this,
                                t = this.getNextTone(),
                                a = this.getShuffledAnswers(this.state.tones, t, this.state.numChoices);
                            this.setState({
                                gameStartTime: performance.now(),
                                isStarted: !0,
                                tonePlaying: t,
                                notePlaying: this.getNextNote(t),
                                isCorrect: !1,
                                lastAnswer: -1,
                                answers: a
                            }, function() {
                                return e.handlePlayNote()
                            })
                        }
                    }, {
                        key: "handleGameStop",
                        value: function() {
                            var e = qe.indexOf(this.state.tonePlaying),
                                t = this.state.statQuestions;
                            t[e] += 1;
                            var a = this.state.statSkips;
                            this.state.isCorrect || (a[e] += 1), this.setState({
                                isStarted: !1,
                                isCorrect: !1,
                                isFirstGame: !1,
                                lastAnswer: -1,
                                gameStartTime: 0,
                                statQuestions: t,
                                statSkips: a
                            })
                        }
                    }, {
                        key: "getNextTone",
                        value: function() {
                            for (var e = [], t = 0; t < this.state.tones.length; ++t) this.state.tones[t] && e.push(qe[t]);
                            return e[Math.floor(Math.random() * e.length)]
                        }
                    }, {
                        key: "getNextNote",
                        value: function(e) {
                            return e + He[Math.floor(Math.random() * He.length)].toString()
                        }
                    }, {
                        key: "getShuffledAnswers",
                        value: function(e, t, a) {
                            for (var n, i = [t], r = [], s = 0; s < e.length; ++s) e[s] && qe[s] !== t && r.push(qe[s]);
                            for (n = Math.min(a - 1, r.length), r = Qe(r); n--;) i.push(r.pop());
                            return Qe(i)
                        }
                    }, {
                        key: "getStatRows",
                        value: function() {
                            for (var e, t = 0, a = [], n = 0; n < qe.length; ++n) this.state.statQuestions[n] && (e = qe[n], t += 1, a.push({
                                id: t,
                                note: e,
                                numQ: this.state.statQuestions[n],
                                numS: this.state.statSkips[n],
                                numA: this.state.statTries[n],
                                averageCorrectTime: (this.state.statTriesTime[n] / this.state.statCorrect[n] / 1e3).toFixed(4),
                                accuracy: (this.state.statCorrect[n] / this.state.statTries[n]).toFixed(4)
                            }));
                            return a
                        }
                    }, {
                        key: "handlePlayNote",
                        value: function() {
                            this.somePiano.play(this.state.notePlaying)
                        }
                    }, {
                        key: "handleNext",
                        value: function() {
                            var e = this,
                                t = qe.indexOf(this.state.tonePlaying),
                                a = this.state.statQuestions;
                            a[t] += 1;
                            var n = this.state.statSkips;
                            this.state.isCorrect || (n[t] += 1);
                            var i = this.getNextTone(),
                                r = this.getShuffledAnswers(this.state.tones, i, this.state.numChoices);
                            this.setState({
                                tonePlaying: i,
                                notePlaying: this.getNextNote(i),
                                answers: r,
                                gameStartTime: performance.now(),
                                lastAnswer: -1,
                                isCorrect: !1,
                                statQuestions: a,
                                statSkips: n
                            }, function() {
                                return e.handlePlayNote()
                            })
                        }
                    }, {
                        key: "handleGameAnswer",
                        value: function(e) {
                            var t = performance.now(),
                                a = qe.indexOf(this.state.tonePlaying);
                            if (!this.state.isCorrect) {
                                var n = this.state.statTries;
                                if (n[a] += 1, e === this.state.tonePlaying) {
                                    var i = this.state.statTriesTime;
                                    i[a] += t - this.state.gameStartTime;
                                    var r = this.state.statCorrect;
                                    r[a] += 1, this.setState({
                                        isCorrect: !0,
                                        lastAnswer: 1,
                                        statTries: n,
                                        statTriesTime: i,
                                        statCorrect: r
                                    })
                                } else this.setState({
                                    statTries: n,
                                    lastAnswer: 0
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return i.a.createElement(te.a, {
                                container: !0,
                                spacing: 32,
                                direction: "column",
                                alignItems: "center",
                                style: {
                                    minHeight: "90vh",
                                    width: "100%",
                                    margin: "auto"
                                }
                            }, i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement("h1", null, "Pitch Listening Practice"), i.a.createElement("h2", null, this.state.isStarted ? "Listen and select the note played" : "Customize the training")), i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement(Ye, {
                                tones: this.state.tones,
                                handleSelection: function(t) {
                                    return e.handleSelection(t)
                                }
                            })), this.state.isStarted ? i.a.createElement(te.a, {
                                item: !0,
                                xs: 6
                            }, i.a.createElement(te.a, {
                                container: !0,
                                spacing: 16,
                                direction: "row",
                                alignContent: "center"
                            }, i.a.createElement(te.a, {
                                item: !0,
                                xs: 6,
                                sm: 6
                            }, i.a.createElement(G.a, {
                                fullWidth: !0,
                                variant: "contained",
                                className: "button pitch-trainer-button",
                                onClick: function() {
                                    return e.handlePlayNote()
                                }
                            }, i.a.createElement(Ae.a, {
                                className: "leftIcon pitch-trainer-leftIcon"
                            }), "Play")), i.a.createElement(te.a, {
                                item: !0,
                                xs: 6,
                                sm: 6
                            }, i.a.createElement(G.a, {
                                fullWidth: !0,
                                variant: "contained",
                                className: "button pitch-trainer-button",
                                onClick: function() {
                                    return e.handleNext()
                                }
                            }, this.state.isCorrect ? i.a.createElement(Re.a, {
                                className: "leftIcon pitch-trainer-leftIcon"
                            }) : i.a.createElement(Te.a, {
                                className: "leftIcon pitch-trainer-leftIcon"
                            }), this.state.isCorrect ? "Next" : "Skip")))) : i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement("form", {
                                className: "pitch-trainer-num-choices-form",
                                autoComplete: "off"
                            }, i.a.createElement(ye.a, {
                                component: "legend"
                            }, " Choose the number of candidates for each question "), i.a.createElement(X.a, {
                                className: "pitch-trainer-num-choices-form-control"
                            }, i.a.createElement($.a, {
                                value: this.state.numChoices,
                                onChange: this.handleNumChoices,
                                displayEmpty: !0,
                                name: "numChoices",
                                className: "pitch-trainer-num-choices-select"
                            }, this.NUM_CHOICES_LIST)))), this.state.isStarted && i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement(Xe, {
                                answers: this.state.answers,
                                handleGameAnswer: function(t) {
                                    return e.handleGameAnswer(t)
                                }
                            })), this.state.isStarted && i.a.createElement(te.a, {
                                item: !0
                            }, i.a.createElement(j.a, {
                                variant: "h5"
                            }, -1 === this.state.lastAnswer ? "Make a choice" : 1 === this.state.lastAnswer ? "Correct! The note is: " + this.state.notePlaying : "Sorry, try again.")), this.state.isStarted ? i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement(G.a, {
                                variant: "contained",
                                color: "secondary",
                                className: "button pitch-trainer-button",
                                onClick: function() {
                                    return e.handleGameStop()
                                }
                            }, i.a.createElement(ke.a, {
                                className: "leftIcon pitch-trainer-leftIcon"
                            }), "End")) : i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement(G.a, {
                                disabled: !this.state.isLoaded,
                                variant: "contained",
                                color: "secondary",
                                className: "button pitch-trainer-button",
                                onClick: function() {
                                    return e.handleGameStart()
                                }
                            }, i.a.createElement(Se.a, {
                                className: "leftIcon pitch-trainer-leftIcon"
                            }), this.state.isLoaded ? "Start" : "Loading")), !this.state.isStarted && !this.state.isFirstGame && i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement("h5", null, "Statistics"), i.a.createElement(Ze, {
                                rows: this.getStatRows()
                            })))
                        }
                    }]), t
                }(n.Component),
                et = a(29),
                tt = a.n(et),
                at = a(55),
                nt = a(203),
                it = a(77),
                rt = a(109),
                st = a(140),
                ot = a(470),
                lt = a.n(ot),
                ct = a(113),
                ut = a(485),
                mt = a.n(ut),
                pt = a(290),
                dt = a.n(pt),
                ht = a(291),
                ft = a.n(ht),
                gt = a(483),
                bt = a.n(gt),
                Et = a(486),
                _t = a.n(Et),
                yt = a(484),
                vt = a.n(yt),
                Ct = a(479),
                Nt = a.n(Ct),
                Ot = a(482),
                wt = a.n(Ot),
                St = a(481),
                xt = a.n(St),
                kt = a(289),
                Pt = a.n(kt),
                At = a(480),
                jt = a.n(At),
                Tt = a(4),
                Dt = a.n(Tt),
                Rt = a(471),
                Mt = a.n(Rt),
                zt = a(473),
                It = a.n(zt),
                Bt = a(472),
                Ft = a.n(Bt),
                Lt = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (a = Object(c.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(i)))).state = {
                            expanded: !0
                        }, a.handleExpandClick = function() {
                            a.setState(function(e) {
                                return {
                                    expanded: !e.expanded
                                }
                            })
                        }, a
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "handleCanvasClick",
                        value: function() {
                            this.props.onCanvasClick && this.props.onCanvasClick()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.classes;
                            return i.a.createElement(re.a, {
                                className: t.card
                            }, i.a.createElement(Mt.a, {
                                title: this.props.title,
                                subheader: this.props.subheader,
                                action: i.a.createElement(D.a, {
                                    className: Dt()(t.expand, Object(J.a)({}, t.expandOpen, this.state.expanded)),
                                    onClick: this.handleExpandClick,
                                    "aria-expanded": this.state.expanded,
                                    "aria-label": "Show"
                                }, i.a.createElement(Ft.a, null))
                            }), i.a.createElement(It.a, {
                                in: this.state.expanded,
                                timeout: "auto"
                            }, this.props.noCanvas ? i.a.createElement(oe.a, {
                                className: t.cardCanvas
                            }, this.props.children) : i.a.createElement(oe.a, {
                                className: t.cardCanvas
                            }, i.a.createElement("canvas", {
                                id: this.props.canvasID,
                                ref: this.props.canvasRef,
                                onClick: function() {
                                    return e.handleCanvasClick()
                                }
                            }, " ")), i.a.createElement(oe.a, null, i.a.createElement(j.a, {
                                paragraph: !0
                            }, this.props.footText))))
                        }
                    }]), t
                }(i.a.Component),
                Gt = Object(nt.a)(function(e) {
                    return i.a.forwardRef(function(t, a) {
                        return i.a.createElement(e, Object.assign({}, t, {
                            canvasRef: a
                        }))
                    })
                }, Object(h.withStyles)(function(e) {
                    var t;
                    return {
                        card: (t = {}, Object(J.a)(t, e.breakpoints.down("sm"), {
                            width: "100%"
                        }), Object(J.a)(t, e.breakpoints.up("md"), {
                            width: "80%",
                            maxWidth: "80%"
                        }), Object(J.a)(t, e.breakpoints.up("lg"), {
                            width: "80%",
                            maxWidth: "80%"
                        }), Object(J.a)(t, "margin", "auto"), t),
                        cardCanvas: {
                            "overflow-x": "auto"
                        },
                        media: {
                            height: 0,
                            paddingTop: "56.25%"
                        },
                        actions: {
                            display: "flex"
                        },
                        expand: {
                            transform: "rotate(0deg)",
                            transition: e.transitions.create("transform", {
                                duration: e.transitions.duration.shortest
                            }),
                            marginLeft: "auto"
                        },
                        expandOpen: {
                            transform: "rotate(180deg)"
                        }
                    }
                }))(Lt),
                Kt = a(474),
                Ut = a(288),
                Wt = a(478),
                Jt = a.n(Wt),
                Vt = a(115),
                qt = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                        return (a = Object(c.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(r)))).getRowClassName = function(e) {
                            var t = e.index,
                                n = a.props,
                                i = n.classes,
                                r = n.rowClassName,
                                s = n.onRowClick;
                            return Dt()(i.tableRow, i.flexContainer, r, Object(J.a)({}, i.tableRowHover, -1 !== t && null != s))
                        }, a.cellRenderer = function(e) {
                            var t = e.cellData,
                                n = e.columnIndex,
                                r = void 0 === n ? null : n,
                                s = a.props,
                                o = s.columns,
                                l = s.classes,
                                c = s.rowHeight,
                                u = s.onRowClick;
                            return i.a.createElement(Le.a, {
                                component: "div",
                                className: Dt()(l.tableCell, l.flexContainer, Object(J.a)({}, l.noClick, null == u)),
                                variant: "body",
                                style: {
                                    height: c
                                },
                                align: null != r && o[r].numeric ? "right" : "left"
                            }, t)
                        }, a.headerRenderer = function(e) {
                            var t, n = e.label,
                                r = e.columnIndex,
                                s = e.dataKey,
                                o = e.sortBy,
                                l = e.sortDirection,
                                c = a.props,
                                u = c.headerHeight,
                                m = c.columns,
                                p = c.classes,
                                d = c.sort,
                                h = (t = {}, Object(J.a)(t, Vt.c.ASC, "asc"), Object(J.a)(t, Vt.c.DESC, "desc"), t),
                                f = m[r].disableSort || null == d ? n : i.a.createElement(Jt.a, {
                                    active: s === o,
                                    direction: h[l]
                                }, n);
                            return i.a.createElement(Le.a, {
                                component: "div",
                                className: Dt()(p.tableCell, p.flexContainer, p.noClick),
                                variant: "head",
                                style: {
                                    height: u
                                },
                                align: m[r].numeric ? "right" : "left"
                            }, f)
                        }, a
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.classes,
                                n = t.columns,
                                r = Object(Ut.a)(t, ["classes", "columns"]);
                            return i.a.createElement(Vt.a, null, function(t) {
                                var s = t.height,
                                    o = t.width;
                                return i.a.createElement(Vt.d, Object.assign({
                                    className: a.table,
                                    height: s,
                                    width: o
                                }, r, {
                                    rowClassName: e.getRowClassName
                                }), n.map(function(t, n) {
                                    var r, s = t.cellContentRenderer,
                                        o = void 0 === s ? null : s,
                                        l = t.className,
                                        c = t.dataKey,
                                        u = Object(Ut.a)(t, ["cellContentRenderer", "className", "dataKey"]);
                                    return r = null != o ? function(t) {
                                        return e.cellRenderer({
                                            cellData: o(t),
                                            columnIndex: n
                                        })
                                    } : e.cellRenderer, i.a.createElement(Vt.b, Object.assign({
                                        key: c,
                                        headerRenderer: function(t) {
                                            return e.headerRenderer(Object(Kt.a)({}, t, {
                                                columnIndex: n
                                            }))
                                        },
                                        className: Dt()(a.flexContainer, l),
                                        cellRenderer: r,
                                        dataKey: c
                                    }, u))
                                }))
                            })
                        }
                    }]), t
                }(i.a.PureComponent);
            qt.defaultProps = {
                headerHeight: 56,
                rowHeight: 56
            };
            var Ht = Object(h.withStyles)(function(e) {
                return {
                    table: {
                        fontFamily: e.typography.fontFamily
                    },
                    flexContainer: {
                        display: "flex",
                        alignItems: "center",
                        boxSizing: "border-box"
                    },
                    tableRow: {
                        cursor: "pointer"
                    },
                    tableRowHover: {
                        "&:hover": {
                            backgroundColor: e.palette.grey[200]
                        }
                    },
                    tableCell: {
                        flex: 1
                    },
                    noClick: {
                        cursor: "initial"
                    }
                }
            })(qt);
            var Qt = function(e) {
                    var t = e.rows,
                        a = e.cols;
                    return i.a.createElement(q.a, {
                        style: {
                            height: 400,
                            width: "100%"
                        }
                    }, i.a.createElement(Ht, {
                        rowCount: t.length,
                        rowGetter: function(e) {
                            var a = e.index;
                            return t[a]
                        },
                        columns: a
                    }))
                },
                Yt = {
                    "alb_esp1.mid": "alb_esp1(Espana Op. 165)",
                    "alb_esp2.mid": "alb_esp2(Espana Op. 165)",
                    "alb_esp3.mid": "alb_esp3(Espana Op. 165)",
                    "alb_esp4.mid": "alb_esp4(Espana Op. 165)",
                    "alb_esp5.mid": "alb_esp5(Espana Op. 165)",
                    "alb_esp6.mid": "alb_esp6(Espana Op. 165)",
                    "alb_se1.mid": "alb_se1(Suite espagnole)",
                    "alb_se2.mid": "alb_se2(Suite espagnole)",
                    "alb_se4.mid": "alb_se4(Suite espagnole)",
                    "alb_se7.mid": "alb_se7(Suite espagnole)",
                    "appass_2.mid": "appass_2(Sonate Nr. 23 Op. 57)",
                    "bach_846.mid": "bach_846(Das wohltemperierte Klavier I - Praeludium und Fuge 1 in C-Dur BWV 846)",
                    "bach_847.mid": "bach_847(Das wohltemperierte Klavier I - Praeludium und Fuge 2 in c-Moll BWV 847)",
                    "bach_850.mid": "bach_850(Pr\xe4ludium und Fuge in D-Dur, BWV 850)",
                    "beethoven_hammerklavier_2.mid": "beethoven_hammerklavier_2(Hammerklaviersonate 1. Satz - 2. Satz)",
                    "beethoven_opus10_2.mid": "beethoven_opus10_2(Sonate Op. 10 No. 1 2. Satz)",
                    "beethoven_opus22_2.mid": "beethoven_opus22_2(Grande Sonata Opus 22 2. movement)",
                    "beethoven_opus22_3.mid": "beethoven_opus22_3(Grande Sonata Opus 22 3. movement)",
                    "bk_xmas4.mid": "bk_xmas4(Christfreuden - Weihnachtsfantasie)",
                    "bor_ps1.mid": "bor_ps1(Petite Suite)",
                    "bor_ps2.mid": "bor_ps2(Petite Suite)",
                    "bor_ps3.mid": "bor_ps3(Petite Suite)",
                    "bor_ps4.mid": "bor_ps4(Petite Suite)",
                    "bor_ps5.mid": "bor_ps5(Petite Suite)",
                    "bor_ps6.mid": "bor_ps6(Petite Suite)",
                    "bor_ps7.mid": "bor_ps7(Petite Suite)",
                    "brahms_opus117_1.mid": "brahms_opus117_1(Intermezzo Opus 117 Nr. 1)",
                    "brahms_opus1_2.mid": "brahms_opus1_2(Sonate in C 2. Satz)",
                    "br_im2.mid": "br_im2(Pan's auf Standard am 18.1.98)",
                    "br_im5.mid": "br_im5(Intermezzo Nr. 5, Opus 116)",
                    "br_im6.mid": "br_im6(Fantasie Nr. 6, Opus 116)",
                    "burg_gewitter.mid": "burg_gewitter(Etueden Opus 109)",
                    "burg_perlen.mid": "burg_perlen(Etueden Opus 109)",
                    "burg_quelle.mid": "burg_quelle(Etueden Opus 109)",
                    "chpn-e01.mid": "chpn-e01(Etude Opus 10 No. 5)",
                    "chpn-e11.mid": "chpn-e11(Etude Opus 25, No. 11)",
                    "chpn-e12.mid": "chpn-e12(Opus 10 Nr. 12 Es-dur)",
                    "chpn-p1.mid": "chpn-p1(Chopin Prelude  No. 1, Opus 28)",
                    "chpn-p10.mid": "chpn-p10(Prelude No. 10)",
                    "chpn-p11.mid": "chpn-p11(Prelude No. 11)",
                    "chpn-p12.mid": "chpn-p12(Chopin Prelude  No. 12, Opus 28)",
                    "chpn-p13.mid": "chpn-p13(Chopin Prelude  No. 13, Opus 28)",
                    "chpn-p14.mid": "chpn-p14(Chopin Prelude  No. 14, Opus 28)",
                    "chpn-p15.mid": "chpn-p15(Chopin Prelude  No. 15, Opus 28)",
                    "chpn-p16.mid": "chpn-p16(Chopin Prelude  No. 16, Opus 28)",
                    "chpn-p17.mid": "chpn-p17(Chopin Prelude  No. 17, Opus 28)",
                    "chpn-p18.mid": "chpn-p18(Chopin Prelude  No. 18, Opus 28)",
                    "chpn-p19.mid": "chpn-p19(Chopin Prelude  No. 19, Opus 28)",
                    "chpn-p2.mid": "chpn-p2(Chopin Prelude  No. 2, Opus 28)",
                    "chpn-p20.mid": "chpn-p20(Chopin Prelude  No. 20, Opus 28)",
                    "chpn-p21.mid": "chpn-p21(Chopin Prelude  No. 21, Opus 28)",
                    "chpn-p22.mid": "chpn-p22(Chopin Prelude  No. 22, Opus 28)",
                    "chpn-p23.mid": "chpn-p23(Chopin Prelude  No. 23, Opus 28)",
                    "chpn-p24.mid": "chpn-p24(Chopin Prelude  No. 24, Opus 28)",
                    "chpn-p3.mid": "chpn-p3(Chopin Prelude  No. 3, Opus 28)",
                    "chpn-p4.mid": "chpn-p4(Chopin Prelude  No. 4, Opus 28)",
                    "chpn-p5.mid": "chpn-p5(Chopin Prelude  No. 5, Opus 28)",
                    "chpn-p6.mid": "chpn-p6(Chopin Prelude  No. 6, Opus 28)",
                    "chpn-p7.mid": "chpn-p7(Chopin Prelude No. 7)",
                    "chpn-p8.mid": "chpn-p8(Prelude No. 8)",
                    "chpn-p9.mid": "chpn-p9(Chopin Prelude No. 9)",
                    "chpn_op10_e01.mid": "chpn_op10_e01(Etude Opus 10 No. 5)",
                    "chpn_op10_e05.mid": "chpn_op10_e05(Etude Opus 10 No. 5)",
                    "chpn_op10_e12.mid": "chpn_op10_e12(Opus 10 Nr. 12 Es-dur)",
                    "chpn_op25_e11.mid": "chpn_op25_e11(Etude Opus 25, No. 11)",
                    "chpn_op25_e2.mid": "chpn_op25_e2(Chopin Etude  No. 2, Opus 25)",
                    "chpn_op25_e3.mid": "chpn_op25_e3(Chopin Etude  No. 3, Opus 25)",
                    "chpn_op25_e4.mid": "chpn_op25_e4(Chopin Etude  No. 4, Opus 25)",
                    "chpn_op27_1.mid": "chpn_op27_1(Chopin Nocturne Opus 27 Nr. 1)",
                    "chpn_op27_2.mid": "chpn_op27_2(Chopin Nocturne Opus 27 Nr. 2)",
                    "chpn_op33_.mid": "chpn_op33_(Chopin Nocturne Opus 33 Nr. 4)",
                    "chpn_op33_2.mid": "chpn_op33_2(Chopin Mazurka Opus 33 Nr. 2)",
                    "chpn_op33_4.mid": "chpn_op33_4(Chopin Nocturne Opus 33 Nr. 4)",
                    "chpn_op35_4.mid": "chpn_op35_4(Sonate opus 35, 4. Satz)",
                    "chpn_op7_1.mid": "chpn_op7_1(Chopin Mazurka Opus 7 No. 1)",
                    "chpn_op7_2.mid": "chpn_op7_2(Chopin Mazurka Opus 7 No. 2)",
                    "deb_clai.mid": "deb_clai(Suite bergamasque)",
                    "deb_menu.mid": "deb_menu(Suite bergamasque)",
                    "deb_pass.mid": "deb_pass(Suite bergamasque)",
                    "deb_prel.mid": "deb_prel(Suite bergamasque)",
                    "elise.mid": "elise(F\xfcr Elise)",
                    "god_alb_esp2.mid": "god_alb_esp2(Espana Op. 165)",
                    "god_chpn_op10_e01.mid": "god_chpn_op10_e01(Etude Opus 10 No. 5)",
                    "gra_esp_2.mid": "gra_esp_2(Danza Espanola No. 2)",
                    "gra_esp_3.mid": "gra_esp_3(Danza Espanola No. 3)",
                    "gra_esp_4.mid": "gra_esp_4(Danza Espanola No. 4)",
                    "grieg_butterfly.mid": "grieg_butterfly(Grieg: Lyrische St\xfccke Op. 43 No. 1 - Schmetterling)",
                    "grieg_elfentanz.mid": "grieg_elfentanz(Grieg: Lyrische St\xfccke Op. 12 Nr. 4 Elfentanz)",
                    "grieg_halling.mid": "grieg_halling(Grieg: Lyrische St\xfccke Book II Opus 38 Nr. 4 - Halling)",
                    "grieg_kobold.mid": "grieg_kobold(Kobold Op 71, No. 3)",
                    "grieg_voeglein.mid": "grieg_voeglein(V\xf6glein Op 43, No. 4)",
                    "grieg_waechter.mid": "grieg_waechter(Wachterlied Op12, No. 3)",
                    "grieg_walzer.mid": "grieg_walzer(Lyric Pieces Op. 12 No. 12 Valse)",
                    "grieg_wanderer.mid": "grieg_wanderer(Grieg: Lyrische St\xfccke Op. 43 Nr. 2 - Einsamer Wanderer)",
                    "grieg_zwerge.mid": "grieg_zwerge(Zug der Zwerge Op 54, No. 3)",
                    "haydn_35_2.mid": "haydn_35_2(Sonate XVI:35 1. Satz)",
                    "haydn_35_3.mid": "haydn_35_3(Sonate XVI:35 3. Satz)",
                    "hay_40_2.mid": "hay_40_2(Klaviersonate in G-Dur Hoboken XVI:40)",
                    "liz_et4.mid": "liz_et4(Etude No. 4 aus Grandes Etudes de Paganini)",
                    "liz_et5.mid": "liz_et5(Etude No. 5 aus Grandes Etudes de Paganini)",
                    "liz_liebestraum.mid": "liz_liebestraum(Liebestraum Nr. 3)",
                    "mendel_op30_1.mid": "mendel_op30_1(Lieder ohne Worte Op. 30 No. 1)",
                    "mendel_op53_5.mid": "mendel_op53_5(Lieder ohne Worte Op. 53 No. 5)",
                    "mendel_op62_3.mid": "mendel_op62_3(Lieder ohne Worte Op. 62 No. 3)",
                    "mendel_op62_4.mid": "mendel_op62_4(Lieder ohne Worte Op. 62 No. 4)",
                    "mendel_op62_5.mid": "mendel_op62_5(Lieder ohne Worte Op. 62 No. 5)",
                    "mond_1.mid": "mond_1(Sonata No.14 in cis-Moll, Op. 27/2 - 1. Satz)",
                    "mond_2.mid": "mond_2(Sonata No.14 in cis-Moll, Op. 27/2 - 2. Satz)",
                    "muss_1.mid": "muss_1(Bilder einer Ausstellung)",
                    "muss_2.mid": "muss_2(Bilder einer Ausstellung)",
                    "muss_3.mid": "muss_3(Bilder einer Ausstellung)",
                    "muss_4.mid": "muss_4(Bilder einer Ausstellung)",
                    "muss_5.mid": "muss_5(Bilder einer Ausstellung)",
                    "muss_6.mid": "muss_6(Bilder einer Ausstellung)",
                    "mz_311_2.mid": "mz_311_2(Klaviersonate Nr. 12 KV 331 1. Satz)",
                    "mz_330_2.mid": "mz_330_2(Klaviersonate C-Dur KV 330)",
                    "mz_332_2.mid": "mz_332_2(Klaviersonate Nr. 12 KV 332 2. Satz)",
                    "mz_545_2.mid": "mz_545_2(Klaviersonate KV 545 2. Satz)",
                    "mz_545_3.mid": "mz_545_3(Klaviersonate KV 545 3. Satz)",
                    "mz_570_2.mid": "mz_570_2(Klaviersonate KV 570 2.. Satz)",
                    "mz_570_3.mid": "mz_570_3(Sonate KV 570 3. Satz)",
                    "pathetique_2.mid": 'pathetique_2(Beethoven Sonata No. 8 in C minor "Pathetique")',
                    "schub_d960_2.mid": "schub_d960_2(Sonate D960, 2. Satz)",
                    "schumm-2.mid": "schumm-2(Sechs Moments Musicaux Opus 94 D 780)",
                    "schumm-3.mid": "schumm-3(Sechs Moments Musicaux Opus 94 D 780)",
                    "schumm-5.mid": "schumm-5(Sechs Moments Musicaux Opus 94 D 780)",
                    "schumm-6.mid": "schumm-6(Schubert: Moment Musical No.6 in Ab, Op. 94 - D 780)",
                    "schu_143_2.mid": "schu_143_2(Klaviersonate a-Moll, Opus 143 2. Satz)",
                    "scn15_1.mid": "scn15_1(Kinderszenen Opus 15)",
                    "scn15_10.mid": "scn15_10(Kinderszenen Opus 15)",
                    "scn15_11.mid": "scn15_11(Kinderszenen Opus 15)",
                    "scn15_12.mid": "scn15_12(Kinderszenen Opus 15)",
                    "scn15_13.mid": "scn15_13(Kinderszenen Opus 15)",
                    "scn15_2.mid": "scn15_2(Kinderszenen Opus 15)",
                    "scn15_3.mid": "scn15_3(Kinderszenen Opus 15)",
                    "scn15_4.mid": "scn15_4(Kinderszenen Opus 15)",
                    "scn15_5.mid": "scn15_5(Kinderszenen Opus 15)",
                    "scn15_6.mid": "scn15_6(Kinderszenen Opus 15)",
                    "scn15_7.mid": "scn15_7(Kinderszenen Opus 15)",
                    "scn15_8.mid": "scn15_8(Kinderszenen Opus 15)",
                    "scn15_9.mid": "scn15_9(Kinderszenen Opus 15)",
                    "scn16_1.mid": "scn16_1(Kreisleriana Nr. 1)",
                    "scn16_4.mid": "scn16_4(Kreisleriana No. 4)",
                    "scn16_5.mid": "scn16_5(Kreisleriana Teil 5)",
                    "scn16_6.mid": "scn16_6(Kreisleriana)",
                    "scn16_7.mid": "scn16_7(Kreisleriana No. 7)",
                    "scn16_8.mid": "scn16_8(Kreisleriana Teil 8)",
                    "scn68_10.mid": "scn68_10(Schumann: Fr\xf6hlicher Landmann, von der Arbeit zur\xfcckkehrend)",
                    "scn68_12.mid": "scn68_12(Schumann: Knecht Ruprecht aus  Album f\xfcr die Jugend Opus 68)",
                    "ty_april.mid": "ty_april(Die Jahreszeiten)",
                    "ty_februar.mid": "ty_februar(Die Jahreszeiten)",
                    "ty_januar.mid": "ty_januar(Die Jahreszeiten)",
                    "ty_juli.mid": "ty_juli(Die Jahreszeiten)",
                    "ty_juni.mid": "ty_juni(Die Jahreszeiten)",
                    "ty_maerz.mid": "ty_maerz(Die Jahreszeiten)",
                    "ty_mai.mid": "ty_mai(Die Jahreszeiten)",
                    "ty_november.mid": "ty_november(Die Jahreszeiten)",
                    "ty_oktober.mid": "ty_oktober(Die Jahreszeiten)",
                    "ty_september.mid": "ty_september(Die Jahreszeiten)",
                    "waldstein_2.mid": "waldstein_2(Beethoven Sonata No. 21 in C major)"
                },
                Xt = {
                    "Chopin-Nocturnes-Op.9-No.2.mp3": "Chopin Nocturnes Op.9 No.2 (len: 254s trans-time-cpu: 1410s)",
                    "Chopin-Nocturnes-Op.9-No.2-p0.mp3": "Chopin Nocturnes Op.9 No.2 p0 (len: 30.48s trans-time: 19.01s)",
                    "Chopin-Nocturnes-Op.9-No.2-p1.mp3": "Chopin Nocturnes Op.9 No.2 p1 (len: 54.36s trans-time: 21.00s)",
                    "Chopin-Nocturnes-Op.9-No.2-p2.mp3": "Chopin Nocturnes Op.9 No.2 p2 (len: 53.09s trans-time: 26.2s)",
                    "Chopin-Nocturnes-Op.9-No.2-p3.mp3": "Chopin Nocturnes Op.9 No.2 p3 (len: 119.39s trans-time: 61.2s)",
                    "Chopin-Raindrop-Prelude.mp3": "Chopin Raindrop Prelude (len: 300s trans-time-cpu: 2030s)",
                    "Chopin-Raindrop-Prelude-p0.mp3": "Chopin Raindrop Prelude p0 (len: 60.00s trans-time: 35.4s)",
                    "Chopin-Raindrop-Prelude-p1.mp3": "Chopin Raindrop Prelude p1 (len: 37.21s trans-time: 21.1s)",
                    "Chopin-Raindrop-Prelude-p2.mp3": "Chopin Raindrop Prelude p2 (len: 70.22s trans-time: 41.9s)",
                    "Chopin-Raindrop-Prelude-p3.mp3": "Chopin Raindrop Prelude p3 (len: 78.32s trans-time: 48.6s)",
                    "Chopin-Raindrop-Prelude-p4.mp3": "Chopin Raindrop Prelude p4 (len: 64.21s trans-time: 37.3s)"
                },
                Zt = (a(1035), Object.keys(Yt).map(function(e) {
                    return i.a.createElement(I.a, {
                        key: e,
                        value: e
                    }, Yt[e])
                })),
                $t = Object.keys(Xt).map(function(e) {
                    return i.a.createElement(I.a, {
                        key: e,
                        value: e
                    }, Xt[e])
                });

            function ea(e) {
                var t = e.classes;
                return i.a.createElement(i.a.Fragment, null, i.a.createElement(Nt.a, {
                    open: e.isExampleListDialogOpen,
                    onClose: e.handleExampleListDialogClose,
                    "aria-labelledby": "example-list-dialog-title"
                }, i.a.createElement(jt.a, {
                    id: "example-list-dialog-title"
                }, "Choose a song"), i.a.createElement(xt.a, null, i.a.createElement(Pt.a, null, "You can choose an example file from the ", i.a.createElement("b", null, "huge"), " lists below: ", i.a.createElement("br", null)), i.a.createElement("form", {
                    className: t.form,
                    noValidate: !0
                }, i.a.createElement(X.a, {
                    className: t.formControl
                }, i.a.createElement(dt.a, {
                    htmlFor: "fileMidiExample"
                }, "Midi File"), i.a.createElement($.a, {
                    value: e.fileMidiExample,
                    onChange: e.handleExampleFileSelection,
                    inputProps: {
                        name: "fileMidiExample",
                        id: "fileMidiExample"
                    }
                }, Zt))), i.a.createElement("form", {
                    className: t.form,
                    noValidate: !0
                }, i.a.createElement(X.a, {
                    className: t.formControl
                }, i.a.createElement(dt.a, {
                    htmlFor: "fileAudioExample"
                }, "Audio File"), i.a.createElement($.a, {
                    value: e.fileAudioExample,
                    onChange: e.handleExampleFileSelection,
                    inputProps: {
                        name: "fileAudioExample",
                        id: "fileAudioExample"
                    }
                }, $t))), i.a.createElement(Pt.a, {
                    style: {
                        align: "center"
                    }
                }, i.a.createElement("br", null), "(Midi files from ", i.a.createElement("a", {
                    href: "http://www.piano-midi.de/midi_files.htm"
                }, "www.piano-midi.de"), " by Bernd Krueger. All the information extracted from those files and playbacks are licensed under the ", i.a.createElement("a", {
                    href: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en"
                }, "cc-by-sa Germany License"), ". The sources of audio files can be found ", i.a.createElement("a", {
                    href: "https://github.com/snowme34/tone-the-ear/blob/master/audio-attributions.md"
                }, "here"), ")")), i.a.createElement(wt.a, null, i.a.createElement(G.a, {
                    onClick: e.handleExampleListDialogClose,
                    color: "primary"
                }, "Close"))))
            }
            var ta = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).handleExampleListDialogOpen = function() {
                            a.setState({
                                isExampleListDialogOpen: !0
                            })
                        }, a.handleExampleListDialogClose = function() {
                            a.setState({
                                isExampleListDialogOpen: !1
                            })
                        }, a.handleExampleFileSelection = function(e) {
                            var t, n = "fileAudioExample" === e.target.name ? 4 : 1,
                                i = "fileAudioExample" === e.target.name ? "fileMidiExample" : "fileAudioExample";
                            a.setState((t = {}, Object(J.a)(t, e.target.name, e.target.value), Object(J.a)(t, i, ""), Object(J.a)(t, "userDecision", n), t)), a.fileInput = null
                        }, a.handleMuteToggle = function(e) {
                            return function(t) {
                                if ("isPlayerMuted" === e) {
                                    var n = a.state.isPlayerMuted;
                                    st.Master.mute = !n, a.setState({
                                        isPlayerMuted: !n
                                    })
                                } else {
                                    var i = a.state.isOriginalMuted;
                                    a.wavesurfer.setMute(!i), a.setState({
                                        isOriginalMuted: !i
                                    })
                                }
                            }
                        }, a.state = {
                            userDecision: 0,
                            isPlayerLoaded: !1,
                            isExampleListDialogOpen: !1,
                            isUploading: !1,
                            isLoading: !1,
                            isTranscribing: !1,
                            isStarted: !1,
                            isModelLoaded: !1,
                            isPlaying: !1,
                            isPaused: !1,
                            isPlayerMuted: !1,
                            isOriginalMuted: !1,
                            tfBackend: "webgl",
                            fileMidiExample: "",
                            fileAudioExample: ""
                        }, a.initPlayer(), a.visualizer = null, a.wavesurfer = null, a.mmCanvasRef = i.a.createRef(), a.spCanvasRef = i.a.createRef(), a.nsCanvasRef = i.a.createRef(), a.fileInputRef = i.a.createRef(), a.fileInput = null, a.ns = null, a.midi = null, a.midiJSON = null, a.noteTableRows = null, a.model = null, a.fileReader = new FileReader, a.noteTableCols = [{
                            width: 200,
                            label: "Note Name",
                            dataKey: "name"
                        }, {
                            width: 200,
                            flexGrow: 1,
                            label: "Start Time",
                            dataKey: "time",
                            numeric: !0
                        }, {
                            width: 200,
                            flexGrow: 1,
                            label: "Duration",
                            dataKey: "duration",
                            numeric: !0
                        }, {
                            width: 200,
                            flexGrow: 1,
                            label: "Velocity",
                            dataKey: "velocity",
                            numeric: !0
                        }], a
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "initPlayer",
                        value: function() {
                            var e = Object(at.a)(tt.a.mark(function e() {
                                var t = this;
                                return tt.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, new Promise(function(e) {
                                                e(new it.SoundFontPlayer("https://storage.googleapis.com/magentadata/js/soundfonts/salamander"))
                                            });
                                        case 2:
                                            this.player = e.sent, this.player.callbackObject = {
                                                run: function(e) {
                                                    t.visualizer.redraw(e)
                                                },
                                                stop: function() {
                                                    t.setState({
                                                        isPlaying: !1
                                                    })
                                                }
                                            }, this.setState({
                                                isPlayerLoaded: !0
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "handleChangeTfBackend",
                        value: function() {
                            var e = "cpu" === this.state.tfBackend ? "webgl" : "cpu";
                            this.setState({
                                tfBackend: e
                            })
                        }
                    }, {
                        key: "handleUpload",
                        value: function() {
                            return this.fileInput = null, this.fileInputRef.current.files && this.fileInputRef.current.files[0] ? (this.fileInput = this.fileInputRef.current.files[0], -1 === this.fileInput.type.indexOf("audio") ? (this.fileInputRef.current.files = null, alert("Error, file uploaded is not legal audio file. Please check the file's MIME type")) : ("audio/mid" === this.fileInput.type ? (this.midi = this.fileInput, this.setState({
                                userDecision: 2
                            })) : this.setState({
                                userDecision: 3
                            }), void(this.fileInputRef.current.files = null))) : (this.fileInputRef.current.files = null, alert("Error, failed to upload the file. Uploaded file non-exists."))
                        }
                    }, {
                        key: "handleStart",
                        value: function() {
                            var e = Object(at.a)(tt.a.mark(function e() {
                                var t, a, n, i, r, s, o = this;
                                return tt.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.state.userDecision) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", alert("Please choose an input to proceed"));
                                        case 2:
                                            if (this.setState({
                                                    isLoading: !0
                                                }), 1 !== this.state.userDecision) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.prev = 4, e.next = 7, this.props.firebase.storage().ref("midi-samples/" + this.state.fileMidiExample).getDownloadURL();
                                        case 7:
                                            t = e.sent, (a = new XMLHttpRequest).responseType = "blob", a.onload = function() {
                                                var e = Object(at.a)(tt.a.mark(function e(t) {
                                                    return tt.a.wrap(function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                o.midi = a.response, o.fileReader.onload = Object(at.a)(tt.a.mark(function e() {
                                                                    return tt.a.wrap(function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                return e.next = 2, it.midiToSequenceProto(o.fileReader.result);
                                                                            case 2:
                                                                                return o.ns = e.sent, e.next = 5, Object(ct.parse)(o.fileReader.result);
                                                                            case 5:
                                                                                o.midiJSON = e.sent, o.setUpContent();
                                                                            case 7:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }, e, this)
                                                                })), o.fileReader.readAsBinaryString(a.response);
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }, e, this)
                                                }));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), a.open("GET", t), a.send(), e.next = 18;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(4), console.log(e.t0);
                                        case 18:
                                            e.next = 56;
                                            break;
                                        case 21:
                                            if (2 !== this.state.userDecision) {
                                                e.next = 27;
                                                break
                                            }
                                            this.midi = this.fileInput, this.fileReader.onload = Object(at.a)(tt.a.mark(function e() {
                                                return tt.a.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return o.ns = it.midiToSequenceProto(o.fileReader.result), e.next = 3, Object(ct.parse)(o.fileReader.result);
                                                        case 3:
                                                            o.midiJSON = e.sent, o.setUpContent();
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, this)
                                            })), this.fileReader.readAsBinaryString(this.fileInput), e.next = 56;
                                            break;
                                        case 27:
                                            if (3 !== this.state.userDecision) {
                                                e.next = 39;
                                                break
                                            }
                                            return this.setState({
                                                isTranscribing: !0
                                            }), e.next = 31, this.getNSFromTranscribeAudioFile();
                                        case 31:
                                            n = e.sent, i = it.sequenceProtoToMidi(n), this.ns = n, this.midi = new Blob([i]), this.fileReader.onload = Object(at.a)(tt.a.mark(function e() {
                                                return tt.a.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, Object(ct.parse)(o.fileReader.result);
                                                        case 2:
                                                            o.midiJSON = e.sent, o.setState({
                                                                isTranscribing: !1
                                                            }), o.setUpContent();
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, this)
                                            })), this.fileReader.readAsBinaryString(this.midi), e.next = 56;
                                            break;
                                        case 39:
                                            if (4 !== this.state.userDecision) {
                                                e.next = 56;
                                                break
                                            }
                                            return this.setState({
                                                isTranscribing: !0
                                            }), e.prev = 41, e.next = 44, this.props.firebase.storage().ref("audio-samples/" + this.state.fileAudioExample).getDownloadURL();
                                        case 44:
                                            r = e.sent, (s = new XMLHttpRequest).responseType = "blob", s.onload = function() {
                                                var e = Object(at.a)(tt.a.mark(function e(t) {
                                                    var a, n;
                                                    return tt.a.wrap(function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return o.fileInput = s.response, e.next = 3, o.getNSFromTranscribeAudioFile();
                                                            case 3:
                                                                a = e.sent, n = it.sequenceProtoToMidi(a), o.ns = a, o.midi = new Blob([n]), o.fileReader.onload = Object(at.a)(tt.a.mark(function e() {
                                                                    return tt.a.wrap(function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                return e.next = 2, Object(ct.parse)(o.fileReader.result);
                                                                            case 2:
                                                                                o.midiJSON = e.sent, o.setState({
                                                                                    isTranscribing: !1
                                                                                }), o.setUpContent();
                                                                            case 5:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }, e, this)
                                                                })), o.fileReader.readAsBinaryString(o.midi);
                                                            case 9:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }, e, this)
                                                }));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), s.open("GET", r), s.send(), e.next = 55;
                                            break;
                                        case 52:
                                            e.prev = 52, e.t1 = e.catch(41), console.log(e.t1);
                                        case 55:
                                        case 56:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [4, 15],
                                    [41, 52]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "handleAnew",
                        value: function() {
                            this.state.isModelLoaded && this.model.dispose(), this.player.isPlaying() && this.player.stop(), this.wavesurfer && this.wavesurfer.stop(), this.setState({
                                userDecision: 0,
                                isExampleListDialogOpen: !1,
                                isUploading: !1,
                                isLoading: !1,
                                isTranscribing: !1,
                                isStarted: !1,
                                isModelLoaded: !1,
                                isPlaying: !1,
                                isPaused: !1,
                                isPlayerMuted: !1,
                                isOriginalMuted: !1,
                                tfBackend: "webgl",
                                fileMidiExample: "",
                                fileAudioExample: ""
                            }), this.visualizer = null, this.wavesurfer = null, this.fileInput = null, this.ns = null, this.midi = null, this.midiJSON = null, this.noteTableRows = null
                        }
                    }, {
                        key: "handlePlayerStart",
                        value: function() {
                            this.setState({
                                isPlaying: !0,
                                isPaused: !1
                            }), this.player.start(this.ns), this.wavesurfer && this.wavesurfer.play()
                        }
                    }, {
                        key: "handlePlayerResumePause",
                        value: function() {
                            !this.state.isPlaying && this.state.isPaused ? (this.setState({
                                isPlaying: !0,
                                isPaused: !1
                            }), this.player.resume(), this.wavesurfer && this.wavesurfer.playPause()) : this.state.isPlaying && !this.state.isPaused && (this.setState({
                                isPlaying: !1,
                                isPaused: !0
                            }), this.player.pause(), this.wavesurfer && this.wavesurfer.playPause())
                        }
                    }, {
                        key: "handlePlayerStop",
                        value: function() {
                            (this.state.isPlaying || !this.state.isPlaying && this.state.isPaused) && (this.setState({
                                isPlaying: !1,
                                isPaused: !1
                            }), this.player.stop(), this.wavesurfer && this.wavesurfer.stop())
                        }
                    }, {
                        key: "getNSFromTranscribeAudioFile",
                        value: function() {
                            var e = Object(at.a)(tt.a.mark(function e() {
                                return tt.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.state.tfBackend !== rt.getBackend() && rt.setBackend(this.state.tfBackend), !this.state.isModelLoaded) {
                                                e.next = 5;
                                                break
                                            }
                                            this.model.dispose(), e.next = 8;
                                            break;
                                        case 5:
                                            return this.model = new it.OnsetsAndFrames("https://storage.googleapis.com/magentadata/js/checkpoints/transcription/onsets_frames_uni"), e.next = 8, this.model.initialize();
                                        case 8:
                                            return this.setState({
                                                isModelLoaded: !0
                                            }), e.abrupt("return", this.model.transcribeFromAudioFile(this.fileInput));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getNoteTableRows",
                        value: function() {
                            var e = Object(at.a)(tt.a.mark(function e() {
                                var t, a, n, i, r, s, o;
                                return tt.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            for (t = 0, a = [], i = this.midiJSON.tracks.length, r = 0; r < i; ++r)
                                                for (s = this.midiJSON.tracks[r].length, o = 0; o < s; ++o) n = this.midiJSON.tracks[r].notes[o], t += 1, a.push({
                                                    id: t,
                                                    name: n.name,
                                                    time: n.time,
                                                    duration: n.duration,
                                                    velocity: n.velocity
                                                });
                                            return e.abrupt("return", a);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setUpContent",
                        value: function() {
                            var e = Object(at.a)(tt.a.mark(function e() {
                                return tt.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getNoteTableRows();
                                        case 2:
                                            return this.noteTableRows = e.sent, this.setState({
                                                isStarted: !0
                                            }), e.next = 6, this.player.loadSamples(this.ns);
                                        case 6:
                                            this.visualizer = new it.Visualizer(this.ns, this.mmCanvasRef.current, {
                                                noteRGB: "66, 165, 245",
                                                activeNoteRGB: "236, 64, 122",
                                                pixelsPerTimeStep: window.innerWidth < 500 ? null : 80
                                            }), 3 !== this.state.userDecision && 4 !== this.state.userDecision || (this.wavesurfer = lt.a.create({
                                                container: "#sp-container",
                                                waveColor: "#64B5F6",
                                                progressColor: "#BA68C8"
                                            }), this.wavesurfer.loadBlob(this.fileInput), this.wavesurfer.toggleInteraction()), this.setState({
                                                isLoading: !1
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.classes;
                            return i.a.createElement("div", {
                                className: "midi-trainer"
                            }, i.a.createElement("h1", null, "Transcription Practice"), i.a.createElement("h2", null, "Use your favorite music to practice transcription skill!"), i.a.createElement(te.a, {
                                container: !0,
                                spacing: 32,
                                direction: "column",
                                alignItems: "center",
                                style: {
                                    margin: "auto",
                                    minHeight: "70vh",
                                    width: "100%"
                                }
                            }, i.a.createElement(te.a, {
                                item: !0
                            }, this.state.isStarted ? i.a.createElement(j.a, {
                                variant: "body1",
                                align: "center",
                                className: "midi-trainer-body"
                            }, "The file using is: ", i.a.createElement("br", null), ' "', 1 === this.state.userDecision ? this.state.fileMidiExample : 4 === this.state.userDecision ? this.state.fileAudioExample : this.fileInput.name, '"') : i.a.createElement(j.a, {
                                variant: "body1",
                                align: "center",
                                className: "midi-trainer-body"
                            }, "Upload an audio file or choose an example to begin")), this.state.isStarted ? i.a.createElement(i.a.Fragment, null, i.a.createElement(te.a, {
                                item: !0,
                                xs: 10,
                                sm: 10,
                                lg: 10
                            }, i.a.createElement(te.a, {
                                container: !0,
                                spacing: 16,
                                direction: "row",
                                align: "center",
                                justify: "center",
                                style: {
                                    margin: "auto",
                                    width: "100%"
                                }
                            }, i.a.createElement(te.a, {
                                item: !0,
                                xs: 4,
                                sm: 4
                            }, i.a.createElement(G.a, {
                                fullWidth: !0,
                                disabled: !this.state.isPlaying && !this.state.isPaused,
                                variant: "contained",
                                color: "primary",
                                className: "button midi-trainer-button",
                                onClick: function() {
                                    return e.handlePlayerStop()
                                }
                            }, i.a.createElement(ke.a, {
                                className: "leftIcon midi-trainer-leftIcon"
                            }), "Stop")), i.a.createElement(te.a, {
                                item: !0,
                                xs: 4,
                                sm: 4
                            }, i.a.createElement(G.a, {
                                disabled: this.state.isPlaying || !this.state.isPlaying && this.state.isPaused,
                                fullWidth: !0,
                                variant: "contained",
                                color: "primary",
                                className: "button midi-trainer-button",
                                onClick: function() {
                                    return e.handlePlayerStart()
                                }
                            }, i.a.createElement(ft.a, {
                                className: "leftIcon midi-trainer-leftIcon"
                            }), "Play")), i.a.createElement(te.a, {
                                item: !0,
                                xs: 4,
                                sm: 4
                            }, i.a.createElement(G.a, {
                                color: "primary",
                                fullWidth: !0,
                                disabled: !this.state.isPlaying && !this.state.isPaused,
                                variant: "contained",
                                className: "button midi-trainer-button",
                                onClick: function() {
                                    return e.handlePlayerResumePause()
                                }
                            }, this.state.isPaused ? i.a.createElement(ft.a, {
                                className: "leftIcon midi-trainer-leftIcon"
                            }) : i.a.createElement(bt.a, {
                                className: "leftIcon midi-trainer-leftIcon"
                            }), this.state.isPaused ? "Resume" : "Pause")))), i.a.createElement(te.a, {
                                item: !0,
                                xs: 10,
                                sm: 10,
                                lg: 10
                            }, i.a.createElement(Ee.a, {
                                row: !0
                            }, i.a.createElement(Ce.a, {
                                key: "isPlayerMuted",
                                control: i.a.createElement(Oe.a, {
                                    checked: this.state.isPlayerMuted,
                                    onChange: this.handleMuteToggle("isPlayerMuted"),
                                    value: "isPlayerMuted"
                                }),
                                label: 3 === this.state.userDecision || 4 === this.state.userDecision ? "Mute Transcription" : "Mute"
                            }), (3 === this.state.userDecision || 4 === this.state.userDecision) && i.a.createElement(Ce.a, {
                                key: "isOriginalMuted",
                                control: i.a.createElement(Oe.a, {
                                    checked: this.state.isOriginalMuted,
                                    onChange: this.handleMuteToggle("isOriginalMuted"),
                                    value: "isOriginalMuted"
                                }),
                                label: "Mute Original"
                            }))), (3 === this.state.userDecision || 4 === this.state.userDecision) && i.a.createElement(te.a, {
                                item: !0,
                                xs: 10,
                                sm: 10,
                                lg: 10,
                                className: t.CanvasCardGrid
                            }, i.a.createElement(Gt, {
                                className: t.CanvasCard,
                                title: "Spectrum of Original Audio",
                                subheader: "",
                                noCanvas: !0
                            }, i.a.createElement("div", {
                                id: "sp-container"
                            }, " "))), i.a.createElement(te.a, {
                                item: !0,
                                xs: 10,
                                sm: 10,
                                lg: 10,
                                className: t.CanvasCardGrid
                            }, i.a.createElement(Gt, {
                                className: t.CanvasCard,
                                title: "Visualization of Notes",
                                subheader: 3 === this.state.userDecision || 4 === this.state.userDecision ? "Transcription by Magenta.js" : "",
                                canvasID: "mm-canvas",
                                ref: this.mmCanvasRef,
                                footText: "Using the visualizer from Magenta.js"
                            })), i.a.createElement(te.a, {
                                item: !0,
                                xs: 10,
                                sm: 10,
                                lg: 10,
                                className: t.CanvasCardGrid
                            }, i.a.createElement(Gt, {
                                className: t.CanvasCard,
                                title: "Table of Notes",
                                subheader: 3 === this.state.userDecision || 4 === this.state.userDecision ? "Transcription by Magenta.js" : "",
                                noCanvas: !0
                            }, i.a.createElement(Qt, {
                                rows: this.noteTableRows,
                                cols: this.noteTableCols
                            })))) : i.a.createElement(i.a.Fragment, null, i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement(te.a, {
                                container: !0,
                                spacing: 16,
                                direction: "row",
                                alignContent: "center"
                            }, i.a.createElement(te.a, {
                                item: !0,
                                xs: 6,
                                sm: 6
                            }, i.a.createElement("input", {
                                accept: "audio/*",
                                className: t.input,
                                id: "audioInputFileButton",
                                multiple: !0,
                                type: "file",
                                ref: this.fileInputRef,
                                onChange: function() {
                                    return e.handleUpload()
                                }
                            }), i.a.createElement("label", {
                                htmlFor: "audioInputFileButton"
                            }, i.a.createElement(G.a, {
                                disabled: this.state.isUploading || this.state.isTranscribing,
                                fullWidth: !0,
                                color: "secondary",
                                variant: "contained",
                                component: "span",
                                className: t.button
                            }, this.state.isUploading ? "Uploading" : "Upload"))), i.a.createElement(te.a, {
                                item: !0,
                                xs: 6,
                                sm: 6
                            }, i.a.createElement(G.a, {
                                disabled: this.state.isTranscribing,
                                fullWidth: !0,
                                color: "secondary",
                                variant: "contained",
                                className: t.button,
                                onClick: function() {
                                    return e.handleExampleListDialogOpen()
                                }
                            }, "Examples"), i.a.createElement(ea, {
                                classes: t,
                                isExampleListDialogOpen: this.state.isExampleListDialogOpen,
                                fileMidiExample: this.state.fileMidiExample,
                                fileAudioExample: this.state.fileAudioExample,
                                handleExampleListDialogClose: function() {
                                    return e.handleExampleListDialogClose()
                                },
                                handleExampleFileSelection: this.handleExampleFileSelection
                            })))), i.a.createElement(te.a, {
                                item: !0,
                                xs: 6,
                                sm: 6,
                                lg: 6
                            }, i.a.createElement(j.a, null, "You can upload a midi file or other audio file. ", i.a.createElement("br", null), " ", i.a.createElement("br", null), "If you upload a non-midi audio file, this app will use a NN to transcribe the music for you. ", i.a.createElement("br", null), " ", i.a.createElement("br", null), "Currently the maximum duration supported stably is around 220 seconds. Will improve in the future. ", i.a.createElement("br", null), " ", i.a.createElement("br", null), "Note: This is a PWA. If you want to fully refresh this page, try to close all tabs and reopen.")), i.a.createElement(te.a, {
                                item: !0,
                                xs: 6,
                                sm: 6,
                                lg: 6
                            }, this.state.userDecision > 0 && i.a.createElement(j.a, {
                                variant: "body1",
                                align: "center",
                                className: "midi-trainer-body"
                            }, "The file chosen is: ", i.a.createElement("br", null), ' "', 1 === this.state.userDecision ? this.state.fileMidiExample : 4 === this.state.userDecision ? this.state.fileAudioExample : this.fileInput.name, '"'))), this.state.isStarted ? i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, i.a.createElement(G.a, {
                                variant: "contained",
                                color: "secondary",
                                className: "button midi-trainer-button",
                                onClick: function() {
                                    return e.handleAnew()
                                }
                            }, i.a.createElement(_t.a, {
                                className: "leftIcon midi-trainer-leftIcon"
                            }), "Restart")) : i.a.createElement(i.a.Fragment, null, i.a.createElement(te.a, {
                                item: !0,
                                xs: "auto"
                            }, this.state.isTranscribing ? i.a.createElement(G.a, {
                                disabled: !0,
                                variant: "contained",
                                color: "secondary",
                                className: "button midi-trainer-button"
                            }, i.a.createElement(vt.a, {
                                className: t.progress
                            }), "Transcribing") : i.a.createElement(G.a, {
                                disabled: !(this.state.userDecision && this.state.isPlayerLoaded) || this.state.isLoading,
                                variant: "contained",
                                color: "secondary",
                                className: "button midi-trainer-button",
                                onClick: function() {
                                    return e.handleStart()
                                }
                            }, i.a.createElement(Se.a, {
                                className: "leftIcon midi-trainer-leftIcon"
                            }), this.state.userDecision && this.state.isPlayerLoaded ? this.state.isLoading ? "Loading" : "Start" : this.state.isPlayerLoaded ? "Waiting" : "Loading")), 2 === this.state.userDecision && i.a.createElement(te.a, {
                                item: !0,
                                xs: 6,
                                sm: 6,
                                lg: 6
                            }, i.a.createElement(j.a, {
                                variant: "body1",
                                align: "center",
                                className: "midi-trainer-body"
                            }, "A midi file is detected. This app uses a piano soundfont to play the music. ", i.a.createElement("br", null), "It does not make sense to covert everything to piano. ", i.a.createElement("br", null), "So, the non-piano part of your midi file might not be properly played later. ", i.a.createElement("br", null), "But the analysis will work as usual.")), (3 === this.state.userDecision || 4 === this.state.userDecision) && i.a.createElement(te.a, {
                                item: !0,
                                xs: 6,
                                sm: 6,
                                lg: 6
                            }, i.a.createElement(Ce.a, {
                                control: i.a.createElement(mt.a, {
                                    disabled: this.state.isModelLoaded || this.state.isTranscribing || this.state.isStarted,
                                    checked: "cpu" === this.state.tfBackend,
                                    onChange: function() {
                                        return e.handleChangeTfBackend()
                                    },
                                    value: "tfBackend"
                                }),
                                label: "Use CPU as Tensorflow backend"
                            }), i.a.createElement(j.a, {
                                variant: "body1",
                                align: "center",
                                className: "midi-trainer-body"
                            }, "A non-midi audio file is detected. Transcription is done by a neural network model and will slow down the device. Use short recordings of piano to get better experience. ", i.a.createElement("br", null), "Use CPU if file longer than about 2 min or if this page crashes with default setting. ", i.a.createElement("br", null), "(But there is no guarantee that everything works properly for files longer than 3 min) ", i.a.createElement("br", null), " ", i.a.createElement("br", null)), i.a.createElement(j.a, {
                                variant: "body2",
                                align: "center",
                                className: "midi-trainer-body"
                            }, "Use the switch above to toggle tensorflow backend of the neural network model. CPU backend will be around 10 times slower. (It takes CPU backend around 700s to transcribe a 3 min mp3 file) ", i.a.createElement("a", {
                                href: "https://github.com/snowme34/tone-the-ear/issues/21"
                            }, "Why"), "?", i.a.createElement("br", null), "The accuracy may decrease if the file contains different instruments or is very complicated.  ", i.a.createElement("br", null), " ", i.a.createElement("br", null)), i.a.createElement(j.a, {
                                variant: "subtitle2",
                                align: "center",
                                className: "midi-trainer-body"
                            }, "All happens locally in your browser using ", i.a.createElement("a", {
                                href: "https://g.co/magenta"
                            }, "Magenta.js"), " and ", i.a.createElement("a", {
                                href: "https://js.tensorflow.org/"
                            }, "TensorFlow.js"), ".")))))
                        }
                    }]), t
                }(n.Component),
                aa = Object(nt.a)(Object(h.withStyles)(function(e) {
                    var t;
                    return {
                        button: {
                            margin: e.spacing.unit
                        },
                        input: {
                            display: "none"
                        },
                        appBar: {
                            position: "relative"
                        },
                        flex: {
                            flex: 1
                        },
                        progress: {
                            margin: 2 * e.spacing.unit
                        },
                        form: {
                            display: "flex",
                            flexDirection: "column",
                            margin: "auto",
                            width: "fit-content"
                        },
                        formControl: {
                            marginTop: 2 * e.spacing.unit,
                            minWidth: 120
                        },
                        formControlLabel: {
                            marginTop: e.spacing.unit
                        },
                        CanvasCardGrid: (t = {}, Object(J.a)(t, e.breakpoints.down("sm"), {
                            width: "100%"
                        }), Object(J.a)(t, e.breakpoints.up("md"), {
                            width: "80%"
                        }), Object(J.a)(t, e.breakpoints.up("lg"), {
                            width: "80%"
                        }), t)
                    }
                }), Object(v.firebaseConnect)())(ta);
            N.a.initializeApp({
                apiKey: "AIzaSyBR6Vv9bEqeg6Srr2m0CO-QU7fq_gqFj_8",
                authDomain: "fir-tone-the-ear.firebaseapp.com",
                databaseURL: "https://fir-tone-the-ear.firebaseio.com",
                projectId: "fir-tone-the-ear",
                storageBucket: "fir-tone-the-ear.appspot.com",
                messagingSenderId: "852693584093"
            });
            var na = Object(y.c)(Object(v.reactReduxFirebase)(N.a, {
                    userProfile: "users"
                }))(y.d)(Object(y.b)({
                    firebase: v.firebaseReducer
                }), {}),
                ia = Object(h.createMuiTheme)({
                    palette: {
                        primary: E.a,
                        secondary: g.a
                    },
                    typography: {
                        useNextVariants: !0
                    }
                }),
                ra = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            return i.a.createElement(_.a, {
                                store: na
                            }, i.a.createElement(h.MuiThemeProvider, {
                                theme: ia
                            }, i.a.createElement(p.a, null, i.a.createElement("div", {
                                className: "App"
                            }, i.a.createElement("div", {
                                id: "dashboard"
                            }, i.a.createElement(W, null), i.a.createElement("div", {
                                className: "content"
                            }, i.a.createElement(d.a, {
                                exact: !0,
                                path: "/",
                                component: sa
                            }), i.a.createElement(d.a, {
                                exact: !0,
                                path: "/Tone",
                                component: ge
                            }), i.a.createElement(d.a, {
                                exact: !0,
                                path: "/Pitch",
                                component: $e
                            }), i.a.createElement(d.a, {
                                exact: !0,
                                path: "/Midi",
                                component: aa
                            })))))))
                        }
                    }]), t
                }(n.Component),
                sa = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            return i.a.createElement("header", {
                                className: "App-header"
                            }, i.a.createElement("img", {
                                src: w.a,
                                className: "App-logo",
                                alt: "logo"
                            }), i.a.createElement("p", null, "This is a open source web app about ear training. ", i.a.createElement("br", null), "Select a page on top right corner to begin. ", i.a.createElement("br", null), " ", i.a.createElement("br", null), "Tone: a virtual piano. ", i.a.createElement("br", null), "Pitch: a perfect pitch practice. ", i.a.createElement("br", null), "Midi: a transcription practice. ", i.a.createElement("br", null), " ", i.a.createElement("br", null), i.a.createElement("a", {
                                href: "https://github.com/snowme34/tone-the-ear",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#64B5F6"
                                }
                            }, "Star Me")))
                        }
                    }]), t
                }(i.a.Component),
                oa = ra,
                la = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function ca(e, t) {
                navigator.serviceWorker.register(e).then(function(e) {
                    e.onupdatefound = function() {
                        var a = e.installing;
                        null != a && (a.onstatechange = function() {
                            "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                }).catch(function(e) {
                    console.error("Error during service worker registration:", e)
                })
            }
            s.a.render(i.a.createElement(oa, null), document.getElementById("root")),
                function(e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", function() {
                            var t = "".concat("", "/service-worker.js");
                            la ? (function(e, t) {
                                fetch(e).then(function(a) {
                                    var n = a.headers.get("content-type");
                                    404 === a.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then(function(e) {
                                        e.unregister().then(function() {
                                            window.location.reload()
                                        })
                                    }) : ca(e, t)
                                }).catch(function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                })
                            }(t, e), navigator.serviceWorker.ready.then(function() {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")
                            })) : ca(t, e)
                        })
                    }
                }()
        },
        452: function(e, t, a) {
            e.exports = a.p + "static/media/logo.abdb68f5.svg"
        },
        491: function(e, t, a) {
            e.exports = a(1046)
        },
        496: function(e, t, a) {},
        673: function(e, t, a) {},
        798: function(e, t, a) {},
        829: function(e, t, a) {},
        848: function(e, t) {},
        850: function(e, t) {},
        882: function(e, t) {},
        883: function(e, t) {}
    },
    [
        [491, 2, 1]
    ]
]);
//# sourceMappingURL=main.193e4b3e.chunk.js.map
