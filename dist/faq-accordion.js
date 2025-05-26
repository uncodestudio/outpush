function gt(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function Fi(u, t) {
  u.prototype = Object.create(t.prototype), u.prototype.constructor = u, u.__proto__ = t;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var rt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, $t = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Je, X, R, ct = 1e8, G = 1 / ct, Ne = Math.PI * 2, zr = Ne / 4, Fr = 0, Li = Math.sqrt, Lr = Math.cos, Ir = Math.sin, U = function(t) {
  return typeof t == "string";
}, F = function(t) {
  return typeof t == "function";
}, xt = function(t) {
  return typeof t == "number";
}, ti = function(t) {
  return typeof t > "u";
}, dt = function(t) {
  return typeof t == "object";
}, Q = function(t) {
  return t !== !1;
}, ei = function() {
  return typeof window < "u";
}, me = function(t) {
  return F(t) || U(t);
}, Ii = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, $ = Array.isArray, qe = /(?:-?\.?\d|\.)+/gi, Ni = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ut = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, De = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, qi = /[+-]=-?[.\d]+/, Bi = /[^,'"\[\]\s]+/gi, Nr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, E, ht, Be, ii, nt = {}, ve = {}, Vi, Ui = function(t) {
  return (ve = Kt(t, nt)) && J;
}, ri = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, oe = function(t, e) {
  return !e && console.warn(t);
}, Yi = function(t, e) {
  return t && (nt[t] = e) && ve && (ve[t] = e) || nt;
}, ue = function() {
  return 0;
}, qr = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ge = {
  suppressEvents: !0,
  kill: !1
}, Br = {
  suppressEvents: !0
}, ni = {}, Pt = [], Ve = {}, Xi, tt = {}, Ae = {}, yi = 30, ye = [], si = "", ai = function(t) {
  var e = t[0], i, r;
  if (dt(e) || F(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = ye.length; r-- && !ye[r].targetTest(e); )
      ;
    i = ye[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new dr(t[r], i))) || t.splice(r, 1);
  return t;
}, Ft = function(t) {
  return t._gsap || ai(ot(t))[0]._gsap;
}, Wi = function(t, e, i) {
  return (i = t[e]) && F(i) ? t[e]() : ti(i) && t.getAttribute && t.getAttribute(e) || i;
}, Z = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, L = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, q = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Xt = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, Vr = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, Te = function() {
  var t = Pt.length, e = Pt.slice(0), i, r;
  for (Ve = {}, Pt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, oi = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Gi = function(t, e, i, r) {
  Pt.length && !X && Te(), t.render(e, i, !!(X && e < 0 && oi(t))), Pt.length && !X && Te();
}, $i = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Bi).length < 2 ? e : U(t) ? t.trim() : t;
}, Ki = function(t) {
  return t;
}, st = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Ur = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, Kt = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, xi = function u(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = dt(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, be = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, ne = function(t) {
  var e = t.parent || E, i = t.keyframes ? Ur($(t.keyframes)) : st;
  if (Q(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Yr = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Qi = function(t, e, i, r, n) {
  var s = t[r], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, ke = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Ot = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Lt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, Xr = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ue = function(t, e, i, r) {
  return t._startAt && (X ? t._startAt.revert(ge) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Wr = function u(t) {
  return !t || t._ts && u(t.parent);
}, vi = function(t) {
  return t._repeat ? Qt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Qt = function(t, e) {
  var i = Math.floor(t = q(t / e));
  return t && i === t ? i - 1 : i;
}, we = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Ce = function(t) {
  return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || G) || 0));
}, Me = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = q(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ce(t), i._dirty || Lt(i, t)), t;
}, Zi = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = we(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), i) - e._tTime > G) && e.render(i, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -1e-8;
  }
}, _t = function(t, e, i, r) {
  return e.parent && Ot(e), e._start = q((xt(i) ? i : i || t !== E ? at(t, i, e) : t._time) + e._delay), e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Qi(t, e, "_first", "_last", t._sort ? "_start" : 0), Ye(e) || (t._recent = e), r || Zi(t, e), t._ts < 0 && Me(t, t._tTime), t;
}, ji = function(t, e) {
  return (nt.ScrollTrigger || ri("scrollTrigger", e)) && nt.ScrollTrigger.create(e, t);
}, Hi = function(t, e, i, r, n) {
  if (fi(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !X && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Xi !== et.frame)
    return Pt.push(t), t._lazy = [n, r], 1;
}, Gr = function u(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e));
}, Ye = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, $r = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Gr(t) && !(!t._initted && Ye(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ye(t)) ? 0 : 1, a = t._rDelay, o = 0, f, h, l;
  if (a && t._repeat && (o = de(0, t._tDur, e), h = Qt(o, a), t._yoyo && h & 1 && (s = 1 - s), h !== Qt(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || X || r || t._zTime === G || !e && t._zTime) {
    if (!t._initted && Hi(t, e, r, i, o))
      return;
    for (l = t._zTime, t._zTime = e || (i ? G : 0), i || (i = e && !l), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, f = t._pt; f; )
      f.r(s, f.d), f = f._next;
    e < 0 && Ue(t, e, i, !0), t._onUpdate && !i && it(t, "onUpdate"), o && t._repeat && !i && t.parent && it(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Ot(t, 1), !i && !X && (it(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Kr = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, Zt = function(t, e, i, r) {
  var n = t._repeat, s = q(e) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && Me(t, t._tTime = t._tDur * a), t.parent && Ce(t), i || Lt(t.parent, t), t;
}, Ti = function(t) {
  return t instanceof K ? Lt(t) : Zt(t, t._dur);
}, Qr = {
  _start: 0,
  endTime: ue,
  totalDuration: ue
}, at = function u(t, e, i) {
  var r = t.labels, n = t._recent || Qr, s = t.duration() >= ct ? n.endTime(!1) : t._dur, a, o, f;
  return U(e) && (isNaN(e) || e in r) ? (o = e.charAt(0), f = e.substr(-1) === "%", a = e.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s), r[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), f && i && (o = o / 100 * ($(i) ? i[0] : i).totalDuration()), a > 1 ? u(t, e.substr(0, a - 1), i) + o : s + o)) : e == null ? s : +e;
}, se = function(t, e, i) {
  var r = xt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (a = s, o = i; o && !("immediateRender" in a); )
      a = o.vars.defaults || {}, o = Q(o.vars.inherit) && o.parent;
    s.immediateRender = Q(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new N(e[0], s, e[n + 1]);
}, Ct = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, de = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, W = function(t, e) {
  return !U(t) || !(e = Nr.exec(t)) ? "" : e[1];
}, Zr = function(t, e, i) {
  return Ct(i, function(r) {
    return de(t, e, r);
  });
}, Xe = [].slice, Ji = function(t, e) {
  return t && dt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && dt(t[0])) && !t.nodeType && t !== ht;
}, jr = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return U(r) && !e || Ji(r, 1) ? (n = i).push.apply(n, ot(r)) : i.push(r);
  }) || i;
}, ot = function(t, e, i) {
  return R && !e && R.selector ? R.selector(t) : U(t) && !i && (Be || !jt()) ? Xe.call((e || ii).querySelectorAll(t), 0) : $(t) ? jr(t, i) : Ji(t) ? Xe.call(t, 0) : t ? [t] : [];
}, We = function(t) {
  return t = ot(t)[0] || oe("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return ot(e, i.querySelectorAll ? i : i === t ? oe("Invalid scope") || ii.createElement("div") : t);
  };
}, tr = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, er = function(t) {
  if (F(t))
    return t;
  var e = dt(t) ? t : {
    each: t
  }, i = It(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = r > 0 && r < 1, o = isNaN(r) || a, f = e.axis, h = r, l = r;
  return U(r) ? h = l = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && o && (h = r[0], l = r[1]), function(c, d, p) {
    var _ = (p || e).length, m = s[_], y, x, v, T, g, w, P, S, b;
    if (!m) {
      if (b = e.grid === "auto" ? 0 : (e.grid || [1, ct])[1], !b) {
        for (P = -1e8; P < (P = p[b++].getBoundingClientRect().left) && b < _; )
          ;
        b < _ && b--;
      }
      for (m = s[_] = [], y = o ? Math.min(b, _) * h - 0.5 : r % b, x = b === ct ? 0 : o ? _ * l / b - 0.5 : r / b | 0, P = 0, S = ct, w = 0; w < _; w++)
        v = w % b - y, T = x - (w / b | 0), m[w] = g = f ? Math.abs(f === "y" ? T : v) : Li(v * v + T * T), g > P && (P = g), g < S && (S = g);
      r === "random" && tr(m), m.max = P - S, m.min = S, m.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : f ? f === "y" ? _ / b : b : Math.max(b, _ / b)) || 0) * (r === "edges" ? -1 : 1), m.b = _ < 0 ? n - _ : n, m.u = W(e.amount || e.each) || 0, i = i && _ < 0 ? _r(i) : i;
    }
    return _ = (m[c] - m.min) / m.max || 0, q(m.b + (i ? i(_) : _) * m.v) + m.u;
  };
}, Ge = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = q(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (xt(i) ? 0 : W(i));
  };
}, ir = function(t, e) {
  var i = $(t), r, n;
  return !i && dt(t) && (r = i = t.radius || ct, t.values ? (t = ot(t.values), (n = !xt(t[0])) && (r *= r)) : t = Ge(t.increment)), Ct(e, i ? F(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), f = ct, h = 0, l = t.length, c, d; l--; )
      n ? (c = t[l].x - a, d = t[l].y - o, c = c * c + d * d) : c = Math.abs(t[l] - a), c < f && (f = c, h = l);
    return h = !r || f <= r ? t[h] : s, n || h === s || xt(s) ? h : h + W(s);
  } : Ge(t));
}, rr = function(t, e, i, r) {
  return Ct($(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return $(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, Hr = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, Jr = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || W(i));
  };
}, tn = function(t, e, i) {
  return sr(t, e, 0, 1, i);
}, nr = function(t, e, i) {
  return Ct(i, function(r) {
    return t[~~e(r)];
  });
}, en = function u(t, e, i) {
  var r = e - t;
  return $(t) ? nr(t, u(0, t.length), e) : Ct(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, rn = function u(t, e, i) {
  var r = e - t, n = r * 2;
  return $(t) ? nr(t, u(0, t.length - 1), e) : Ct(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, fe = function(t) {
  for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
    s = t.indexOf(")", r), a = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(a ? Bi : qe), i += t.substr(e, r - e) + rr(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return i + t.substr(e, t.length - e);
}, sr = function(t, e, i, r, n) {
  var s = e - t, a = r - i;
  return Ct(n, function(o) {
    return i + ((o - t) / s * a || 0);
  });
}, nn = function u(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = U(t), a = {}, o, f, h, l, c;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if ($(t) && !$(e)) {
      for (h = [], l = t.length, c = l - 2, f = 1; f < l; f++)
        h.push(u(t[f - 1], t[f]));
      l--, n = function(p) {
        p *= l;
        var _ = Math.min(c, ~~p);
        return h[_](p - _);
      }, i = e;
    } else r || (t = Kt($(t) ? [] : {}, t));
    if (!h) {
      for (o in e)
        ui.call(a, t, o, "get", e[o]);
      n = function(p) {
        return li(p, a) || (s ? t.p : t);
      };
    }
  }
  return Ct(i, n);
}, bi = function(t, e, i) {
  var r = t.labels, n = ct, s, a, o;
  for (s in r)
    a = r[s] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s, n = a);
  return o;
}, it = function(t, e, i) {
  var r = t.vars, n = r[e], s = R, a = t._ctx, o, f, h;
  if (n)
    return o = r[e + "Params"], f = r.callbackScope || t, i && Pt.length && Te(), a && (R = a), h = o ? n.apply(f, o) : n.call(f), R = s, h;
}, ie = function(t) {
  return Ot(t), t.scrollTrigger && t.scrollTrigger.kill(!!X), t.progress() < 1 && it(t, "onInterrupt"), t;
}, Yt, ar = [], or = function(t) {
  if (t)
    if (t = !t.name && t.default || t, ei() || t.headless) {
      var e = t.name, i = F(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: ue,
        render: li,
        add: ui,
        kill: vn,
        modifier: xn,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: _i,
        aliases: {},
        register: 0
      };
      if (jt(), t !== r) {
        if (tt[e])
          return;
        st(r, st(be(t, n), s)), Kt(r.prototype, Kt(n, be(t, s))), tt[r.prop = e] = r, t.targetTest && (ye.push(r), ni[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Yi(e, r), t.register && t.register(J, r, j);
    } else
      ar.push(t);
}, C = 255, re = {
  aqua: [0, C, C],
  lime: [0, C, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, C],
  navy: [0, 0, 128],
  white: [C, C, C],
  olive: [128, 128, 0],
  yellow: [C, C, 0],
  orange: [C, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [C, 0, 0],
  pink: [C, 192, 203],
  cyan: [0, C, C],
  transparent: [C, C, C, 0]
}, Re = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * C + 0.5 | 0;
}, ur = function(t, e, i) {
  var r = t ? xt(t) ? [t >> 16, t >> 8 & C, t & C] : 0 : re.black, n, s, a, o, f, h, l, c, d, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), re[t])
      r = re[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & C, r & C, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & C, t & C];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(qe), !e)
        o = +r[0] % 360 / 360, f = +r[1] / 100, h = +r[2] / 100, s = h <= 0.5 ? h * (f + 1) : h + f - h * f, n = h * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Re(o + 1 / 3, n, s), r[1] = Re(o, n, s), r[2] = Re(o - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(Ni), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(qe) || re.transparent;
    r = r.map(Number);
  }
  return e && !p && (n = r[0] / C, s = r[1] / C, a = r[2] / C, l = Math.max(n, s, a), c = Math.min(n, s, a), h = (l + c) / 2, l === c ? o = f = 0 : (d = l - c, f = h > 0.5 ? d / (2 - l - c) : d / (l + c), o = l === n ? (s - a) / d + (s < a ? 6 : 0) : l === s ? (a - n) / d + 2 : (n - s) / d + 4, o *= 60), r[0] = ~~(o + 0.5), r[1] = ~~(f * 100 + 0.5), r[2] = ~~(h * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, fr = function(t) {
  var e = [], i = [], r = -1;
  return t.split(St).forEach(function(n) {
    var s = n.match(Ut) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, wi = function(t, e, i) {
  var r = "", n = (t + r).match(St), s = e ? "hsla(" : "rgba(", a = 0, o, f, h, l;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = ur(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (h = fr(t), o = i.c, o.join(r) !== h.c.join(r)))
    for (f = t.replace(St, "1").split(Ut), l = f.length - 1; a < l; a++)
      r += f[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
  if (!f)
    for (f = t.split(St), l = f.length - 1; a < l; a++)
      r += f[a] + n[a];
  return r + f[l];
}, St = function() {
  var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in re)
    u += "|" + t + "\\b";
  return new RegExp(u + ")", "gi");
}(), sn = /hsl[a]?\(/, hr = function(t) {
  var e = t.join(" "), i;
  if (St.lastIndex = 0, St.test(e))
    return i = sn.test(e), t[1] = wi(t[1], i), t[0] = wi(t[0], i, fr(t[1])), !0;
}, he, et = function() {
  var u = Date.now, t = 500, e = 33, i = u(), r = i, n = 1e3 / 240, s = n, a = [], o, f, h, l, c, d, p = function _(m) {
    var y = u() - r, x = m === !0, v, T, g, w;
    if ((y > t || y < 0) && (i += y - e), r += y, g = r - i, v = g - s, (v > 0 || x) && (w = ++l.frame, c = g - l.time * 1e3, l.time = g = g / 1e3, s += v + (v >= n ? 4 : n - v), T = 1), x || (o = f(_)), T)
      for (d = 0; d < a.length; d++)
        a[d](g, c, w, m);
  };
  return l = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return c / (1e3 / (m || 60));
    },
    wake: function() {
      Vi && (!Be && ei() && (ht = Be = window, ii = ht.document || {}, nt.gsap = J, (ht.gsapVersions || (ht.gsapVersions = [])).push(J.version), Ui(ve || ht.GreenSockGlobals || !ht.gsap && ht || {}), ar.forEach(or)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, o && l.sleep(), f = h || function(m) {
        return setTimeout(m, s - l.time * 1e3 + 1 | 0);
      }, he = 1, p(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(o), he = 0, f = ue;
    },
    lagSmoothing: function(m, y) {
      t = m || 1 / 0, e = Math.min(y || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = l.time * 1e3 + n;
    },
    add: function(m, y, x) {
      var v = y ? function(T, g, w, P) {
        m(T, g, w, P), l.remove(v);
      } : m;
      return l.remove(m), a[x ? "unshift" : "push"](v), jt(), v;
    },
    remove: function(m, y) {
      ~(y = a.indexOf(m)) && a.splice(y, 1) && d >= y && d--;
    },
    _listeners: a
  }, l;
}(), jt = function() {
  return !he && et.wake();
}, O = {}, an = /^[\d.\-M][\d.\-,\s]/, on = /["']/g, un = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o, f; n < s; n++)
    o = i[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, f = o.substr(0, a), e[r] = isNaN(f) ? f.replace(on, "").trim() : +f, r = o.substr(a + 1).trim();
  return e;
}, fn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, hn = function(t) {
  var e = (t + "").split("("), i = O[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [un(e[1])] : fn(t).split(",").map($i)) : O._CE && an.test(t) ? O._CE("", t) : i;
}, _r = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, lr = function u(t, e) {
  for (var i = t._first, r; i; )
    i instanceof K ? u(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? u(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, It = function(t, e) {
  return t && (F(t) ? t : O[t] || hn(t)) || e;
}, Bt = function(t, e, i, r) {
  i === void 0 && (i = function(o) {
    return 1 - e(1 - o);
  }), r === void 0 && (r = function(o) {
    return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, s;
  return Z(t, function(a) {
    O[a] = nt[a] = n, O[s = a.toLowerCase()] = i;
    for (var o in n)
      O[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = O[a + "." + o] = n[o];
  }), n;
}, cr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ee = function u(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Ne * (Math.asin(1 / r) || 0), a = function(h) {
    return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Ir((h - s) * n) + 1;
  }, o = t === "out" ? a : t === "in" ? function(f) {
    return 1 - a(1 - f);
  } : cr(a);
  return n = Ne / n, o.config = function(f, h) {
    return u(t, f, h);
  }, o;
}, ze = function u(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : cr(i);
  return r.config = function(n) {
    return u(t, n);
  }, r;
};
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function(u, t) {
  var e = t < 5 ? t + 1 : t;
  Bt(u + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Bt("Elastic", Ee("in"), Ee("out"), Ee());
(function(u, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(a) {
    return a < e ? u * a * a : a < i ? u * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? u * (a -= 2.25 / t) * a + 0.9375 : u * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Bt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Bt("Expo", function(u) {
  return Math.pow(2, 10 * (u - 1)) * u + u * u * u * u * u * u * (1 - u);
});
Bt("Circ", function(u) {
  return -(Li(1 - u * u) - 1);
});
Bt("Sine", function(u) {
  return u === 1 ? 1 : -Lr(u * zr) + 1;
});
Bt("Back", ze("in"), ze("out"), ze());
O.SteppedEase = O.steps = nt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - G;
    return function(a) {
      return ((r * de(0, s, a) | 0) + n) * i;
    };
  }
};
$t.ease = O["quad.out"];
Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u) {
  return si += u + "," + u + "Params,";
});
var dr = function(t, e) {
  this.id = Fr++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Wi, this.set = e ? e.getSetter : _i;
}, _e = /* @__PURE__ */ function() {
  function u(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Zt(this, +e.duration, 1, 1), this.data = e.data, R && (this._ctx = R, R.data.push(this)), he || et.wake();
  }
  var t = u.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Zt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (jt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Me(this, i), !n._dp || n.parent || Zi(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _t(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === G || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Gi(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + vi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + vi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Qt(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -1e-8 ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? we(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -1e-8 ? 0 : this._rts, this.totalTime(de(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Ce(this), Xr(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (jt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== G && (this._tTime -= G)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && _t(r, this, i - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (Q(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? we(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Br);
    var r = X;
    return X = i, oi(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), X = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Ti(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, Ti(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(at(this, i), Q(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, Q(r)), this._dur || (this._zTime = -1e-8), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -1e-8 : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -1e-8, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - G);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this;
    return new Promise(function(n) {
      var s = F(i) ? i : Ki, a = function() {
        var f = r.then;
        r.then = null, F(s) && (s = s(r)) && (s.then || s === r) && (r.then = f), n(s), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a;
    });
  }, t.kill = function() {
    ie(this);
  }, u;
}();
st(_e.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var K = /* @__PURE__ */ function(u) {
  Fi(t, u);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = u.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = Q(i.sortChildren), E && _t(i.parent || E, gt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && ji(gt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return se(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return se(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, a) {
    return se(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, ne(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new N(r, n, at(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return _t(this, N.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, a, o, f, h) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = f, s.onCompleteParams = h, s.parent = this, new N(r, s, at(this, o)), this;
  }, e.staggerFrom = function(r, n, s, a, o, f, h) {
    return s.runBackwards = 1, ne(s).immediateRender = Q(s.immediateRender), this.staggerTo(r, n, s, a, o, f, h);
  }, e.staggerFromTo = function(r, n, s, a, o, f, h, l) {
    return a.startAt = s, ne(a).immediateRender = Q(a.immediateRender), this.staggerTo(r, n, a, o, f, h, l);
  }, e.render = function(r, n, s) {
    var a = this._time, o = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, h = r <= 0 ? 0 : q(r), l = this._zTime < 0 != r < 0 && (this._initted || !f), c, d, p, _, m, y, x, v, T, g, w, P;
    if (this !== E && h > o && r >= 0 && (h = o), h !== this._tTime || s || l) {
      if (a !== this._time && f && (h += this._time - a, r += this._time - a), c = h, T = this._start, v = this._ts, y = !v, l && (f || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (w = this._yoyo, m = f + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, n, s);
        if (c = q(h % m), h === o ? (_ = this._repeat, c = f) : (g = q(h / m), _ = ~~g, _ && _ === g && (c = f, _--), c > f && (c = f)), g = Qt(this._tTime, m), !a && this._tTime && g !== _ && this._tTime - g * m - this._dur <= 0 && (g = _), w && _ & 1 && (c = f - c, P = 1), _ !== g && !this._lock) {
          var S = w && g & 1, b = S === (w && _ & 1);
          if (_ < g && (S = !S), a = S ? 0 : h % f ? f : h, this._lock = 1, this.render(a || (P ? 0 : q(_ * m)), n, !f)._lock = 0, this._tTime = h, !n && this.parent && it(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, o = this._tDur, b && (this._lock = 2, a = S ? f : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          lr(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = Kr(this, q(a), q(c)), x && (h -= c - (c = x._start))), this._tTime = h, this._time = c, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && h && !n && !g && (it(this, "onStart"), this._tTime !== h))
        return this;
      if (c >= a && r >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || c >= d._start) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !y) {
              x = 0, p && (h += this._zTime = -1e-8);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var k = r < 0 ? r : c; d; ) {
          if (p = d._prev, (d._act || k <= d._end) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (k - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (k - d._start) * d._ts, n, s || X && oi(d)), c !== this._time || !this._ts && !y) {
              x = 0, p && (h += this._zTime = k ? -1e-8 : G);
              break;
            }
          }
          d = p;
        }
      }
      if (x && !n && (this.pause(), x.render(c >= a ? 0 : -1e-8)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = T, Ce(this), this.render(r, n, s);
      this._onUpdate && !n && it(this, "onUpdate", !0), (h === o && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (h === o && this._ts > 0 || !h && this._ts < 0) && Ot(this, 1), !n && !(r < 0 && !a) && (h || a || !o) && (it(this, h === o && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < o && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (xt(n) || (n = at(this, n, r)), !(r instanceof _e)) {
      if ($(r))
        return r.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (U(r))
        return this.addLabel(r, n);
      if (F(r))
        r = N.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? _t(this, r, n) : this;
  }, e.getChildren = function(r, n, s, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -1e8);
    for (var o = [], f = this._first; f; )
      f._start >= a && (f instanceof N ? n && o.push(f) : (s && o.push(f), r && o.push.apply(o, f.getChildren(!0, n, s)))), f = f._next;
    return o;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return U(r) ? this.removeLabel(r) : F(r) ? this.killTweensOf(r) : (r.parent === this && ke(this, r), r === this._recent && (this._recent = this._last), Lt(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = q(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), u.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = at(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var a = N.delayedCall(0, n || ue, s);
    return a.data = "isPause", this._hasPause = 1, _t(this, a, at(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = at(this, r); n; )
      n._start === r && n.data === "isPause" && Ot(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var a = this.getTweensOf(r, s), o = a.length; o--; )
      Tt !== a[o] && a[o].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], a = ot(r), o = this._first, f = xt(n), h; o; )
      o instanceof N ? Vr(o._targets, a) && (f ? (!Tt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h), o = o._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, a = at(s, r), o = n, f = o.startAt, h = o.onStart, l = o.onStartParams, c = o.immediateRender, d, p = N.to(s, st({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || G,
      onStart: function() {
        if (s.pause(), !d) {
          var m = n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          p._dur !== m && Zt(p, m, 0, 1).render(p._time, !0, !0), d = 1;
        }
        h && h.apply(p, l || []);
      }
    }, n));
    return c ? p.render(0) : p;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, st({
      startAt: {
        time: at(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), bi(this, at(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), bi(this, at(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + G);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, o = this.labels, f; a; )
      a._start >= s && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (f in o)
        o[f] >= s && (o[f] += r);
    return Lt(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return u.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Lt(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, a = s._last, o = ct, f, h, l;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (l = s.parent; a; )
        f = a._prev, a._dirty && a.totalDuration(), h = a._start, h > o && s._sort && a._ts && !s._lock ? (s._lock = 1, _t(s, a, h - a._delay, 1)._lock = 0) : o = h, h < 0 && a._ts && (n -= h, (!l && !s._dp || l && l.smoothChildTiming) && (s._start += h / s._ts, s._time -= h, s._tTime -= h), s.shiftChildren(-h, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = f;
      Zt(s, s === E && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (E._ts && (Gi(E, we(r, E)), Xi = et.frame), et.frame >= yi) {
      yi += rt.autoSleep || 120;
      var n = E._first;
      if ((!n || !n._ts) && rt.autoSleep && et._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || et.sleep();
      }
    }
  }, t;
}(_e);
st(K.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _n = function(t, e, i, r, n, s, a) {
  var o = new j(this._pt, t, e, 0, 1, vr, null, n), f = 0, h = 0, l, c, d, p, _, m, y, x;
  for (o.b = i, o.e = r, i += "", r += "", (y = ~r.indexOf("random(")) && (r = fe(r)), s && (x = [i, r], s(x, t, e), i = x[0], r = x[1]), c = i.match(De) || []; l = De.exec(r); )
    p = l[0], _ = r.substring(f, l.index), d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1), p !== c[h++] && (m = parseFloat(c[h - 1]) || 0, o._pt = {
      _next: o._pt,
      p: _ || h === 1 ? _ : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? Xt(m, p) - m : parseFloat(p) - m,
      m: d && d < 4 ? Math.round : 0
    }, f = De.lastIndex);
  return o.c = f < r.length ? r.substring(f, r.length) : "", o.fp = a, (qi.test(r) || y) && (o.e = 0), this._pt = o, o;
}, ui = function(t, e, i, r, n, s, a, o, f, h) {
  F(r) && (r = r(n || 0, t, s));
  var l = t[e], c = i !== "get" ? i : F(l) ? f ? t[e.indexOf("set") || !F(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : l, d = F(l) ? f ? mn : yr : hi, p;
  if (U(r) && (~r.indexOf("random(") && (r = fe(r)), r.charAt(1) === "=" && (p = Xt(c, r) + (W(c) || 0), (p || p === 0) && (r = p))), !h || c !== r || $e)
    return !isNaN(c * r) && r !== "" ? (p = new j(this._pt, t, e, +c || 0, r - (c || 0), typeof l == "boolean" ? yn : xr, 0, d), f && (p.fp = f), a && p.modifier(a, this, t), this._pt = p) : (!l && !(e in t) && ri(e, r), _n.call(this, t, e, c, r, d, o || rt.stringFilter, f));
}, ln = function(t, e, i, r, n) {
  if (F(t) && (t = ae(t, n, e, i, r)), !dt(t) || t.style && t.nodeType || $(t) || Ii(t))
    return U(t) ? ae(t, n, e, i, r) : t;
  var s = {}, a;
  for (a in t)
    s[a] = ae(t[a], n, e, i, r);
  return s;
}, pr = function(t, e, i, r, n, s) {
  var a, o, f, h;
  if (tt[t] && (a = new tt[t]()).init(n, a.rawVars ? e[t] : ln(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new j(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Yt))
    for (f = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; )
      f[a._props[h]] = o;
  return a;
}, Tt, $e, fi = function u(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, o = r.lazy, f = r.onUpdate, h = r.runBackwards, l = r.yoyoEase, c = r.keyframes, d = r.autoRevert, p = t._dur, _ = t._startAt, m = t._targets, y = t.parent, x = y && y.data === "nested" ? y.vars.targets : m, v = t._overwrite === "auto" && !Je, T = t.timeline, g, w, P, S, b, k, A, M, D, Y, B, I, V;
  if (T && (!c || !n) && (n = "none"), t._ease = It(n, $t.ease), t._yEase = l ? _r(It(l === !0 ? n : l, $t.ease)) : 0, l && t._yoyo && !t._repeat && (l = t._yEase, t._yEase = t._ease, t._ease = l), t._from = !T && !!r.runBackwards, !T || c && !r.stagger) {
    if (M = m[0] ? Ft(m[0]).harness : 0, I = M && r[M.prop], g = be(r, ni), _ && (_._zTime < 0 && _.progress(1), e < 0 && h && a && !d ? _.render(-1, !0) : _.revert(h && p ? ge : qr), _._lazy = 0), s) {
      if (Ot(t._startAt = N.set(m, st({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !_ && Q(o),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return it(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (X || !a && !d) && t._startAt.revert(ge), a && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (h && p && !_) {
      if (e && (a = !1), P = st({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !_ && Q(o),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, g), I && (P[M.prop] = I), Ot(t._startAt = N.set(m, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (X ? t._startAt.revert(ge) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        u(t._startAt, G, G);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, o = p && Q(o) || o && !p, w = 0; w < m.length; w++) {
      if (b = m[w], A = b._gsap || ai(m)[w]._gsap, t._ptLookup[w] = Y = {}, Ve[A.id] && Pt.length && Te(), B = x === m ? w : x.indexOf(b), M && (D = new M()).init(b, I || g, t, B, x) !== !1 && (t._pt = S = new j(t._pt, b, D.name, 0, 1, D.render, D, 0, D.priority), D._props.forEach(function(ft) {
        Y[ft] = S;
      }), D.priority && (k = 1)), !M || I)
        for (P in g)
          tt[P] && (D = pr(P, g, t, B, b, x)) ? D.priority && (k = 1) : Y[P] = S = ui.call(t, b, P, "get", g[P], B, x, 0, r.stringFilter);
      t._op && t._op[w] && t.kill(b, t._op[w]), v && t._pt && (Tt = t, E.killTweensOf(b, Y, t.globalTime(e)), V = !t.parent, Tt = 0), t._pt && o && (Ve[A.id] = 1);
    }
    k && Tr(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !V, c && e <= 0 && T.render(ct, !0, !0);
}, cn = function(t, e, i, r, n, s, a, o) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, l, c, d;
  if (!f)
    for (f = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length; d--; ) {
      if (h = c[d][e], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== e && h.fp !== e; )
          h = h._next;
      if (!h)
        return $e = 1, t.vars[e] = "+=0", fi(t, a), $e = 0, o ? oe(e + " not eligible for reset") : 1;
      f.push(h);
    }
  for (d = f.length; d--; )
    l = f[d], h = l._pt || l, h.s = (r || r === 0) && !n ? r : h.s + (r || 0) + s * h.c, h.c = i - h.s, l.e && (l.e = L(i) + W(l.e)), l.b && (l.b = h.s + W(l.b));
}, dn = function(t, e) {
  var i = t[0] ? Ft(t[0]).harness : 0, r = i && i.aliases, n, s, a, o;
  if (!r)
    return e;
  n = Kt({}, e);
  for (s in r)
    if (s in n)
      for (o = r[s].split(","), a = o.length; a--; )
        n[o[a]] = n[s];
  return n;
}, pn = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, a;
  if ($(e))
    a = i[t] || (i[t] = []), e.forEach(function(o, f) {
      return a.push({
        t: f / (e.length - 1) * 100,
        v: o,
        e: n
      });
    });
  else
    for (s in e)
      a = i[s] || (i[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, ae = function(t, e, i, r, n) {
  return F(t) ? t.call(e, i, r, n) : U(t) && ~t.indexOf("random(") ? fe(t) : t;
}, mr = si + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", gr = {};
Z(mr + ",id,stagger,delay,duration,paused,scrollTrigger", function(u) {
  return gr[u] = 1;
});
var N = /* @__PURE__ */ function(u) {
  Fi(t, u);
  function t(i, r, n, s) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = u.call(this, s ? r : ne(r)) || this;
    var o = a.vars, f = o.duration, h = o.delay, l = o.immediateRender, c = o.stagger, d = o.overwrite, p = o.keyframes, _ = o.defaults, m = o.scrollTrigger, y = o.yoyoEase, x = r.parent || E, v = ($(i) || Ii(i) ? xt(i[0]) : "length" in r) ? [i] : ot(i), T, g, w, P, S, b, k, A;
    if (a._targets = v.length ? ai(v) : oe("GSAP target " + i + " not found. https://gsap.com", !rt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || c || me(f) || me(h)) {
      if (r = a.vars, T = a.timeline = new K({
        data: "nested",
        defaults: _ || {},
        targets: x && x.data === "nested" ? x.vars.targets : v
      }), T.kill(), T.parent = T._dp = gt(a), T._start = 0, c || me(f) || me(h)) {
        if (P = v.length, k = c && er(c), dt(c))
          for (S in c)
            ~mr.indexOf(S) && (A || (A = {}), A[S] = c[S]);
        for (g = 0; g < P; g++)
          w = be(r, gr), w.stagger = 0, y && (w.yoyoEase = y), A && Kt(w, A), b = v[g], w.duration = +ae(f, gt(a), g, b, v), w.delay = (+ae(h, gt(a), g, b, v) || 0) - a._delay, !c && P === 1 && w.delay && (a._delay = h = w.delay, a._start += h, w.delay = 0), T.to(b, w, k ? k(g, b, v) : 0), T._ease = O.none;
        T.duration() ? f = h = 0 : a.timeline = 0;
      } else if (p) {
        ne(st(T.vars.defaults, {
          ease: "none"
        })), T._ease = It(p.ease || r.ease || "none");
        var M = 0, D, Y, B;
        if ($(p))
          p.forEach(function(I) {
            return T.to(v, I, ">");
          }), T.duration();
        else {
          w = {};
          for (S in p)
            S === "ease" || S === "easeEach" || pn(S, p[S], w, p.easeEach);
          for (S in w)
            for (D = w[S].sort(function(I, V) {
              return I.t - V.t;
            }), M = 0, g = 0; g < D.length; g++)
              Y = D[g], B = {
                ease: Y.e,
                duration: (Y.t - (g ? D[g - 1].t : 0)) / 100 * f
              }, B[S] = Y.v, T.to(v, B, M), M += B.duration;
          T.duration() < f && T.to({}, {
            duration: f - T.duration()
          });
        }
      }
      f || a.duration(f = T.duration());
    } else
      a.timeline = 0;
    return d === !0 && !Je && (Tt = gt(a), E.killTweensOf(v), Tt = 0), _t(x, gt(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (l || !f && !p && a._start === q(x._time) && Q(l) && Wr(gt(a)) && x.data !== "nested") && (a._tTime = -1e-8, a.render(Math.max(0, -h) || 0)), m && ji(gt(a), m), a;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var a = this._time, o = this._tDur, f = this._dur, h = r < 0, l = r > o - G && !h ? o : r < G ? 0 : r, c, d, p, _, m, y, x, v, T;
    if (!f)
      $r(this, r, n, s);
    else if (l !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h || this._lazy) {
      if (c = l, v = this.timeline, this._repeat) {
        if (_ = f + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(_ * 100 + r, n, s);
        if (c = q(l % _), l === o ? (p = this._repeat, c = f) : (m = q(l / _), p = ~~m, p && p === m ? (c = f, p--) : c > f && (c = f)), y = this._yoyo && p & 1, y && (T = this._yEase, c = f - c), m = Qt(this._tTime, _), c === a && !s && this._initted && p === m)
          return this._tTime = l, this;
        p !== m && (v && this._yEase && lr(v, y), this.vars.repeatRefresh && !y && !this._lock && c !== _ && this._initted && (this._lock = s = 1, this.render(q(_ * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Hi(this, h ? r : c, s, n, l))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (f !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = l, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (T || this._ease)(c / f), this._from && (this.ratio = x = 1 - x), !a && l && !n && !m && (it(this, "onStart"), this._tTime !== l))
        return this;
      for (d = this._pt; d; )
        d.r(x, d.d), d = d._next;
      v && v.render(r < 0 ? r : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (h && Ue(this, r, n, s), it(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && it(this, "onRepeat"), (l === this._tDur || !l) && this._tTime === l && (h && !this._onUpdate && Ue(this, r, !0, !0), (r || !f) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && Ot(this, 1), !n && !(h && !a) && (l || a || y) && (it(this, l === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < o && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), u.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, a, o) {
    he || et.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || fi(this, f), h = this._ease(f / this._dur), cn(this, r, n, s, a, h, f, o) ? this.resetTo(r, n, s, a, 1) : (Me(this, 0), this.parent || Qi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ie(this) : this.scrollTrigger && this.scrollTrigger.kill(!!X), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, Tt && Tt.vars.overwrite !== !0)._first || ie(this), this.parent && s !== this.timeline.totalDuration() && Zt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, o = r ? ot(r) : a, f = this._ptLookup, h = this._pt, l, c, d, p, _, m, y;
    if ((!n || n === "all") && Yr(a, o))
      return n === "all" && (this._pt = 0), ie(this);
    for (l = this._op = this._op || [], n !== "all" && (U(n) && (_ = {}, Z(n, function(x) {
      return _[x] = 1;
    }), n = _), n = dn(a, n)), y = a.length; y--; )
      if (~o.indexOf(a[y])) {
        c = f[y], n === "all" ? (l[y] = n, p = c, d = {}) : (d = l[y] = l[y] || {}, p = n);
        for (_ in p)
          m = c && c[_], m && ((!("kill" in m.d) || m.d.kill(_) === !0) && ke(this, m, "_pt"), delete c[_]), d !== "all" && (d[_] = 1);
      }
    return this._initted && !this._pt && h && ie(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return se(1, arguments);
  }, t.delayedCall = function(r, n, s, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, t.fromTo = function(r, n, s) {
    return se(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return E.killTweensOf(r, n, s);
  }, t;
}(_e);
st(N.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Z("staggerTo,staggerFrom,staggerFromTo", function(u) {
  N[u] = function() {
    var t = new K(), e = Xe.call(arguments, 0);
    return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), t[u].apply(t, e);
  };
});
var hi = function(t, e, i) {
  return t[e] = i;
}, yr = function(t, e, i) {
  return t[e](i);
}, mn = function(t, e, i, r) {
  return t[e](r.fp, i);
}, gn = function(t, e, i) {
  return t.setAttribute(e, i);
}, _i = function(t, e) {
  return F(t[e]) ? yr : ti(t[e]) && t.setAttribute ? gn : hi;
}, xr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, yn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, vr = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, li = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, xn = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, vn = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? ke(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, Tn = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, Tr = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, j = /* @__PURE__ */ function() {
  function u(e, i, r, n, s, a, o, f, h) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || xr, this.d = o || this, this.set = f || hi, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = u.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = Tn, this.m = i, this.mt = n, this.tween = r;
  }, u;
}();
Z(si + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u) {
  return ni[u] = 1;
});
nt.TweenMax = nt.TweenLite = N;
nt.TimelineLite = nt.TimelineMax = K;
E = new K({
  sortChildren: !1,
  defaults: $t,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
rt.stringFilter = hr;
var Nt = [], xe = {}, bn = [], Pi = 0, wn = 0, Fe = function(t) {
  return (xe[t] || bn).map(function(e) {
    return e();
  });
}, Ke = function() {
  var t = Date.now(), e = [];
  t - Pi > 2 && (Fe("matchMediaInit"), Nt.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, a, o, f;
    for (a in r)
      s = ht.matchMedia(r[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, f = 1);
    f && (i.revert(), o && e.push(i));
  }), Fe("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Pi = t, Fe("matchMedia"));
}, br = /* @__PURE__ */ function() {
  function u(e, i) {
    this.selector = i && We(i), this.data = [], this._r = [], this.isReverted = !1, this.id = wn++, e && this.add(e);
  }
  var t = u.prototype;
  return t.add = function(i, r, n) {
    F(i) && (n = r, r = i, i = F);
    var s = this, a = function() {
      var f = R, h = s.selector, l;
      return f && f !== s && f.data.push(s), n && (s.selector = We(n)), R = s, l = r.apply(s, arguments), F(l) && s._r.push(l), R = f, s.selector = h, s.isReverted = !1, l;
    };
    return s.last = a, i === F ? a(s, function(o) {
      return s.add(null, o);
    }) : i ? s[i] = a : a;
  }, t.ignore = function(i) {
    var r = R;
    R = null, i(this), R = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof u ? i.push.apply(i, r.getTweens()) : r instanceof N && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? function() {
      for (var a = n.getTweens(), o = n.data.length, f; o--; )
        f = n.data[o], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(h) {
          return a.splice(a.indexOf(h), 1);
        }));
      for (a.map(function(h) {
        return {
          g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
          t: h
        };
      }).sort(function(h, l) {
        return l.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(i);
      }), o = n.data.length; o--; )
        f = n.data[o], f instanceof K ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof N) && f.revert && f.revert(i);
      n._r.forEach(function(h) {
        return h(i, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var s = Nt.length; s--; )
        Nt[s].id === this.id && Nt.splice(s, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, u;
}(), Pn = /* @__PURE__ */ function() {
  function u(e) {
    this.contexts = [], this.scope = e, R && R.data.push(this);
  }
  var t = u.prototype;
  return t.add = function(i, r, n) {
    dt(i) || (i = {
      matches: i
    });
    var s = new br(0, n || this.scope), a = s.conditions = {}, o, f, h;
    R && !s.selector && (s.selector = R.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (f in i)
      f === "all" ? h = 1 : (o = ht.matchMedia(i[f]), o && (Nt.indexOf(s) < 0 && Nt.push(s), (a[f] = o.matches) && (h = 1), o.addListener ? o.addListener(Ke) : o.addEventListener("change", Ke)));
    return h && r(s, function(l) {
      return s.add(null, l);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, u;
}(), Pe = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return or(r);
    });
  },
  timeline: function(t) {
    return new K(t);
  },
  getTweensOf: function(t, e) {
    return E.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    U(t) && (t = ot(t)[0]);
    var n = Ft(t || {}).get, s = i ? Ki : $i;
    return i === "native" && (i = ""), t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(a, o, f) {
      return s((tt[a] && tt[a].get || n)(t, a, o, f));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = ot(t), t.length > 1) {
      var r = t.map(function(h) {
        return J.quickSetter(h, e, i);
      }), n = r.length;
      return function(h) {
        for (var l = n; l--; )
          r[l](h);
      };
    }
    t = t[0] || {};
    var s = tt[e], a = Ft(t), o = a.harness && (a.harness.aliases || {})[e] || e, f = s ? function(h) {
      var l = new s();
      Yt._pt = 0, l.init(t, i ? h + i : h, Yt, 0, [t]), l.render(1, l), Yt._pt && li(1, Yt);
    } : a.set(t, o);
    return s ? f : function(h) {
      return f(t, o, i ? h + i : h, a, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = J.to(t, st((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), s = function(o, f, h) {
      return n.resetTo(e, o, f, h);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return E.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = It(t.ease, $t.ease)), xi($t, t || {});
  },
  config: function(t) {
    return xi(rt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !tt[a] && !nt[a] && oe(e + " effect requires " + a + " plugin.");
    }), Ae[e] = function(a, o, f) {
      return i(ot(a), st(o || {}, n), f);
    }, s && (K.prototype[e] = function(a, o, f) {
      return this.add(Ae[e](a, dt(o) ? o : (f = o) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    O[t] = It(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? It(t, e) : O;
  },
  getById: function(t) {
    return E.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new K(t), r, n;
    for (i.smoothChildTiming = Q(t.smoothChildTiming), E.remove(i), i._dp = 0, i._time = i._tTime = E._time, r = E._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof N && r.vars.onComplete === r._targets[0])) && _t(i, r, r._start - r._delay), r = n;
    return _t(E, i, 0), i;
  },
  context: function(t, e) {
    return t ? new br(t, e) : R;
  },
  matchMedia: function(t) {
    return new Pn(t);
  },
  matchMediaRefresh: function() {
    return Nt.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || Ke();
  },
  addEventListener: function(t, e) {
    var i = xe[t] || (xe[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = xe[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: en,
    wrapYoyo: rn,
    distribute: er,
    random: rr,
    snap: ir,
    normalize: tn,
    getUnit: W,
    clamp: Zr,
    splitColor: ur,
    toArray: ot,
    selector: We,
    mapRange: sr,
    pipe: Hr,
    unitize: Jr,
    interpolate: nn,
    shuffle: tr
  },
  install: Ui,
  effects: Ae,
  ticker: et,
  updateRoot: K.updateRoot,
  plugins: tt,
  globalTimeline: E,
  core: {
    PropTween: j,
    globals: Yi,
    Tween: N,
    Timeline: K,
    Animation: _e,
    getCache: Ft,
    _removeLinkedListItem: ke,
    reverting: function() {
      return X;
    },
    context: function(t) {
      return t && R && (R.data.push(t), t._ctx = R), R;
    },
    suppressOverwrites: function(t) {
      return Je = t;
    }
  }
};
Z("to,from,fromTo,delayedCall,set,killTweensOf", function(u) {
  return Pe[u] = N[u];
});
et.add(K.updateRoot);
Yt = Pe.to({}, {
  duration: 0
});
var Sn = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, On = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Sn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
}, Le = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(a) {
        var o, f;
        if (U(n) && (o = {}, Z(n, function(h) {
          return o[h] = 1;
        }), n = o), e) {
          o = {};
          for (f in n)
            o[f] = e(n[f]);
          n = o;
        }
        On(a, n);
      };
    }
  };
}, J = Pe.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, a, o;
    this.tween = i;
    for (s in e)
      o = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      X ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Le("roundProps", Ge), Le("modifiers"), Le("snap", ir)) || Pe;
N.version = K.version = J.version = "3.13.0";
Vi = 1;
ei() && jt();
O.Power0;
O.Power1;
O.Power2;
O.Power3;
O.Power4;
O.Linear;
O.Quad;
O.Cubic;
O.Quart;
O.Quint;
O.Strong;
O.Elastic;
O.Back;
O.SteppedEase;
O.Bounce;
O.Sine;
O.Expo;
O.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Si, bt, Wt, ci, zt, Oi, di, kn = function() {
  return typeof window < "u";
}, vt = {}, Et = 180 / Math.PI, Gt = Math.PI / 180, Vt = Math.atan2, ki = 1e8, pi = /([A-Z])/g, Cn = /(left|right|width|margin|padding|x)/i, Mn = /[\s,\(]\S/, lt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Qe = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Dn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, An = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Rn = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, wr = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Pr = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, En = function(t, e, i) {
  return t.style[e] = i;
}, zn = function(t, e, i) {
  return t.style.setProperty(e, i);
}, Fn = function(t, e, i) {
  return t._gsap[e] = i;
}, Ln = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, In = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, Nn = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, z = "transform", H = z + "Origin", qn = function u(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = lt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return i.tfm[a] = yt(r, a);
      }) : this.tfm[t] = s.x ? s[t] : yt(r, t), t === H && (this.tfm.zOrigin = s.zOrigin);
    else
      return lt.transform.split(",").forEach(function(a) {
        return u.call(i, a, e);
      });
    if (this.props.indexOf(z) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(H, e, "")), t = z;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Sr = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Bn = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(pi, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = di(), (!n || !n.isStart) && !i[z] && (Sr(i), r.zOrigin && i[H] && (i[H] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Or = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: Bn,
    save: qn
  };
  return t._gsap || J.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, kr, Ze = function(t, e) {
  var i = bt.createElementNS ? bt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : bt.createElement(t);
  return i && i.style ? i : bt.createElement(t);
}, ut = function u(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(pi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && u(t, Ht(e) || e, 1) || "";
}, Ci = "O,Moz,ms,Ms,Webkit".split(","), Ht = function(t, e, i) {
  var r = e || zt, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Ci[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Ci[s] : "") + t;
}, je = function() {
  kn() && window.document && (Si = window, bt = Si.document, Wt = bt.documentElement, zt = Ze("div") || {
    style: {}
  }, Ze("div"), z = Ht(z), H = z + "Origin", zt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kr = !!Ht("perspective"), di = J.core.reverting, ci = 1);
}, Mi = function(t) {
  var e = t.ownerSVGElement, i = Ze("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), Wt.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), Wt.removeChild(i), n;
}, Di = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Cr = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = Mi(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = Mi(t)), e && !e.width && !e.x && !e.y ? {
    x: +Di(t, ["x", "cx", "x1"]) || 0,
    y: +Di(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Mr = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Cr(t));
}, qt = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in vt && e !== H && (e = z), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(pi, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, wt = function(t, e, i, r, n, s) {
  var a = new j(t._pt, e, i, 0, 1, s ? Pr : wr);
  return t._pt = a, a.b = r, a.e = n, t._props.push(i), a;
}, Ai = {
  deg: 1,
  rad: 1,
  turn: 1
}, Vn = {
  grid: 1,
  flex: 1
}, kt = function u(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", a = zt.style, o = Cn.test(e), f = t.tagName.toLowerCase() === "svg", h = (f ? "client" : "offset") + (o ? "Width" : "Height"), l = 100, c = r === "px", d = r === "%", p, _, m, y;
  if (r === s || !n || Ai[r] || Ai[s])
    return n;
  if (s !== "px" && !c && (n = u(t, e, i, "px")), y = t.getCTM && Mr(t), (d || s === "%") && (vt[e] || ~e.indexOf("adius")))
    return p = y ? t.getBBox()[o ? "width" : "height"] : t[h], L(d ? n / p * l : n / 100 * p);
  if (a[o ? "width" : "height"] = l + (c ? s : r), _ = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode, y && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === bt || !_.appendChild) && (_ = bt.body), m = _._gsap, m && d && m.width && o && m.time === et.time && !m.uncache)
    return L(n / m.width * l);
  if (d && (e === "height" || e === "width")) {
    var x = t.style[e];
    t.style[e] = l + r, p = t[h], x ? t.style[e] = x : qt(t, e);
  } else
    (d || s === "%") && !Vn[ut(_, "display")] && (a.position = ut(t, "position")), _ === t && (a.position = "static"), _.appendChild(zt), p = zt[h], _.removeChild(zt), a.position = "absolute";
  return o && d && (m = Ft(_), m.time = et.time, m.width = _[h]), L(c ? p * n / l : p && n ? l / p * n : 0);
}, yt = function(t, e, i, r) {
  var n;
  return ci || je(), e in lt && e !== "transform" && (e = lt[e], ~e.indexOf(",") && (e = e.split(",")[0])), vt[e] && e !== "transform" ? (n = ce(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Oe(ut(t, H)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Se[e] && Se[e](t, e, i) || ut(t, e) || Wi(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? kt(t, e, n, i) + i : n;
}, Un = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = Ht(e, t, 1), s = n && ut(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = ut(t, "borderTopColor"));
  }
  var a = new j(this._pt, t.style, e, 0, 1, vr), o = 0, f = 0, h, l, c, d, p, _, m, y, x, v, T, g;
  if (a.b = i, a.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = ut(t, r.substring(4, r.indexOf(")")))), r === "auto" && (_ = t.style[e], t.style[e] = r, r = ut(t, e) || r, _ ? t.style[e] = _ : qt(t, e)), h = [i, r], hr(h), i = h[0], r = h[1], c = i.match(Ut) || [], g = r.match(Ut) || [], g.length) {
    for (; l = Ut.exec(r); )
      m = l[0], x = r.substring(o, l.index), p ? p = (p + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1), m !== (_ = c[f++] || "") && (d = parseFloat(_) || 0, T = _.substr((d + "").length), m.charAt(1) === "=" && (m = Xt(d, m) + T), y = parseFloat(m), v = m.substr((y + "").length), o = Ut.lastIndex - v.length, v || (v = v || rt.units[e] || T, o === r.length && (r += v, a.e += v)), T !== v && (d = kt(t, e, _, v) || 0), a._pt = {
        _next: a._pt,
        p: x || f === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: y - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = o < r.length ? r.substring(o, r.length) : "";
  } else
    a.r = e === "display" && r === "none" ? Pr : wr;
  return qi.test(r) && (a.e = 0), this._pt = a, a;
}, Ri = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Yn = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Ri[i] || i, e[1] = Ri[r] || r, e.join(" ");
}, Xn = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, a, o, f;
    if (n === "all" || n === !0)
      r.cssText = "", o = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        a = n[f], vt[a] && (o = 1, a = a === "transformOrigin" ? H : z), qt(i, a);
    o && (qt(i, z), s && (s.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ce(i, 1), s.uncache = 1, Sr(r)));
  }
}, Se = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new j(t._pt, e, i, 0, 0, Xn);
      return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, le = [1, 0, 0, 1, 0, 0], Dr = {}, Ar = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Ei = function(t) {
  var e = ut(t, z);
  return Ar(e) ? le : e.substr(7).match(Ni).map(L);
}, mi = function(t, e) {
  var i = t._gsap || Ft(t), r = t.style, n = Ei(t), s, a, o, f;
  return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? le : n) : (n === le && !t.offsetParent && t !== Wt && !i.svg && (o = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (f = 1, a = t.nextElementSibling, Wt.appendChild(t)), n = Ei(t), o ? r.display = o : qt(t, "display"), f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Wt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, He = function(t, e, i, r, n, s) {
  var a = t._gsap, o = n || mi(t, !0), f = a.xOrigin || 0, h = a.yOrigin || 0, l = a.xOffset || 0, c = a.yOffset || 0, d = o[0], p = o[1], _ = o[2], m = o[3], y = o[4], x = o[5], v = e.split(" "), T = parseFloat(v[0]) || 0, g = parseFloat(v[1]) || 0, w, P, S, b;
  i ? o !== le && (P = d * m - p * _) && (S = T * (m / P) + g * (-_ / P) + (_ * x - m * y) / P, b = T * (-p / P) + g * (d / P) - (d * x - p * y) / P, T = S, g = b) : (w = Cr(t), T = w.x + (~v[0].indexOf("%") ? T / 100 * w.width : T), g = w.y + (~(v[1] || v[0]).indexOf("%") ? g / 100 * w.height : g)), r || r !== !1 && a.smooth ? (y = T - f, x = g - h, a.xOffset = l + (y * d + x * _) - y, a.yOffset = c + (y * p + x * m) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = g, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[H] = "0px 0px", s && (wt(s, a, "xOrigin", f, T), wt(s, a, "yOrigin", h, g), wt(s, a, "xOffset", l, a.xOffset), wt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + g);
}, ce = function(t, e) {
  var i = t._gsap || new dr(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", a = "deg", o = getComputedStyle(t), f = ut(t, H) || "0", h, l, c, d, p, _, m, y, x, v, T, g, w, P, S, b, k, A, M, D, Y, B, I, V, ft, pe, Jt, te, Mt, gi, pt, Dt;
  return h = l = c = _ = m = y = x = v = T = 0, d = p = 1, i.svg = !!(t.getCTM && Mr(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[z] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[z] !== "none" ? o[z] : "")), r.scale = r.rotate = r.translate = "none"), P = mi(t, i.svg), i.svg && (i.uncache ? (ft = t.getBBox(), f = i.xOrigin - ft.x + "px " + (i.yOrigin - ft.y) + "px", V = "") : V = !e && t.getAttribute("data-svg-origin"), He(t, V || f, !!V || i.originIsAbsolute, i.smooth !== !1, P)), g = i.xOrigin || 0, w = i.yOrigin || 0, P !== le && (A = P[0], M = P[1], D = P[2], Y = P[3], h = B = P[4], l = I = P[5], P.length === 6 ? (d = Math.sqrt(A * A + M * M), p = Math.sqrt(Y * Y + D * D), _ = A || M ? Vt(M, A) * Et : 0, x = D || Y ? Vt(D, Y) * Et + _ : 0, x && (p *= Math.abs(Math.cos(x * Gt))), i.svg && (h -= g - (g * A + w * D), l -= w - (g * M + w * Y))) : (Dt = P[6], gi = P[7], Jt = P[8], te = P[9], Mt = P[10], pt = P[11], h = P[12], l = P[13], c = P[14], S = Vt(Dt, Mt), m = S * Et, S && (b = Math.cos(-S), k = Math.sin(-S), V = B * b + Jt * k, ft = I * b + te * k, pe = Dt * b + Mt * k, Jt = B * -k + Jt * b, te = I * -k + te * b, Mt = Dt * -k + Mt * b, pt = gi * -k + pt * b, B = V, I = ft, Dt = pe), S = Vt(-D, Mt), y = S * Et, S && (b = Math.cos(-S), k = Math.sin(-S), V = A * b - Jt * k, ft = M * b - te * k, pe = D * b - Mt * k, pt = Y * k + pt * b, A = V, M = ft, D = pe), S = Vt(M, A), _ = S * Et, S && (b = Math.cos(S), k = Math.sin(S), V = A * b + M * k, ft = B * b + I * k, M = M * b - A * k, I = I * b - B * k, A = V, B = ft), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, y = 180 - y), d = L(Math.sqrt(A * A + M * M + D * D)), p = L(Math.sqrt(I * I + Dt * Dt)), S = Vt(B, I), x = Math.abs(S) > 2e-4 ? S * Et : 0, T = pt ? 1 / (pt < 0 ? -pt : pt) : 0), i.svg && (V = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Ar(ut(t, z)), V && t.setAttribute("transform", V))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (d *= -1, x += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (p *= -1, x += x <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = l - ((i.yPercent = l && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = L(d), i.scaleY = L(p), i.rotation = L(_) + a, i.rotationX = L(m) + a, i.rotationY = L(y) + a, i.skewX = x + a, i.skewY = v + a, i.transformPerspective = T + s, (i.zOrigin = parseFloat(f.split(" ")[2]) || !e && i.zOrigin || 0) && (r[H] = Oe(f)), i.xOffset = i.yOffset = 0, i.force3D = rt.force3D, i.renderTransform = i.svg ? Gn : kr ? Rr : Wn, i.uncache = 0, i;
}, Oe = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ie = function(t, e, i) {
  var r = W(e);
  return L(parseFloat(e) + parseFloat(kt(t, "x", i + "px", r))) + r;
}, Wn = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Rr(t, e);
}, At = "0deg", ee = "0px", Rt = ") ", Rr = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o = i.z, f = i.rotation, h = i.rotationY, l = i.rotationX, c = i.skewX, d = i.skewY, p = i.scaleX, _ = i.scaleY, m = i.transformPerspective, y = i.force3D, x = i.target, v = i.zOrigin, T = "", g = y === "auto" && t && t !== 1 || y === !0;
  if (v && (l !== At || h !== At)) {
    var w = parseFloat(h) * Gt, P = Math.sin(w), S = Math.cos(w), b;
    w = parseFloat(l) * Gt, b = Math.cos(w), s = Ie(x, s, P * b * -v), a = Ie(x, a, -Math.sin(w) * -v), o = Ie(x, o, S * b * -v + v);
  }
  m !== ee && (T += "perspective(" + m + Rt), (r || n) && (T += "translate(" + r + "%, " + n + "%) "), (g || s !== ee || a !== ee || o !== ee) && (T += o !== ee || g ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Rt), f !== At && (T += "rotate(" + f + Rt), h !== At && (T += "rotateY(" + h + Rt), l !== At && (T += "rotateX(" + l + Rt), (c !== At || d !== At) && (T += "skew(" + c + ", " + d + Rt), (p !== 1 || _ !== 1) && (T += "scale(" + p + ", " + _ + Rt), x.style[z] = T || "translate(0, 0)";
}, Gn = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o = i.rotation, f = i.skewX, h = i.skewY, l = i.scaleX, c = i.scaleY, d = i.target, p = i.xOrigin, _ = i.yOrigin, m = i.xOffset, y = i.yOffset, x = i.forceCSS, v = parseFloat(s), T = parseFloat(a), g, w, P, S, b;
  o = parseFloat(o), f = parseFloat(f), h = parseFloat(h), h && (h = parseFloat(h), f += h, o += h), o || f ? (o *= Gt, f *= Gt, g = Math.cos(o) * l, w = Math.sin(o) * l, P = Math.sin(o - f) * -c, S = Math.cos(o - f) * c, f && (h *= Gt, b = Math.tan(f - h), b = Math.sqrt(1 + b * b), P *= b, S *= b, h && (b = Math.tan(h), b = Math.sqrt(1 + b * b), g *= b, w *= b)), g = L(g), w = L(w), P = L(P), S = L(S)) : (g = l, S = c, w = P = 0), (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = kt(d, "x", s, "px"), T = kt(d, "y", a, "px")), (p || _ || m || y) && (v = L(v + p - (p * g + _ * P) + m), T = L(T + _ - (p * w + _ * S) + y)), (r || n) && (b = d.getBBox(), v = L(v + r / 100 * b.width), T = L(T + n / 100 * b.height)), b = "matrix(" + g + "," + w + "," + P + "," + S + "," + v + "," + T + ")", d.setAttribute("transform", b), x && (d.style[z] = b);
}, $n = function(t, e, i, r, n) {
  var s = 360, a = U(n), o = parseFloat(n) * (a && ~n.indexOf("rad") ? Et : 1), f = o - r, h = r + f + "deg", l, c;
  return a && (l = n.split("_")[1], l === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -360)), l === "cw" && f < 0 ? f = (f + s * ki) % s - ~~(f / s) * s : l === "ccw" && f > 0 && (f = (f - s * ki) % s - ~~(f / s) * s)), t._pt = c = new j(t._pt, e, i, r, f, Dn), c.e = h, c.u = "deg", t._props.push(i), c;
}, zi = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Kn = function(t, e, i) {
  var r = zi({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, o, f, h, l, c, d, p;
  r.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), s[z] = e, a = ce(i, 1), qt(i, z), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[z], s[z] = e, a = ce(i, 1), s[z] = f);
  for (o in vt)
    f = r[o], h = a[o], f !== h && n.indexOf(o) < 0 && (d = W(f), p = W(h), l = d !== p ? kt(i, o, f, p) : parseFloat(f), c = parseFloat(h), t._pt = new j(t._pt, a, o, l, c - l, Qe), t._pt.u = p || 0, t._props.push(o));
  zi(a, r);
};
Z("padding,margin,Width,Radius", function(u, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
    return t < 2 ? u + a : "border" + a + u;
  });
  Se[t > 1 ? "border" + u : u] = function(a, o, f, h, l) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(p) {
        return yt(a, p, f);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (h + "").split(" "), d = {}, s.forEach(function(p, _) {
      return d[p] = c[_] = c[_] || c[(_ - 1) / 2 | 0];
    }), a.init(o, d, l);
  };
});
var Er = {
  name: "css",
  register: je,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, a = t.style, o = i.vars.startAt, f, h, l, c, d, p, _, m, y, x, v, T, g, w, P, S;
    ci || je(), this.styles = this.styles || Or(t), S = this.styles.props, this.tween = i;
    for (_ in e)
      if (_ !== "autoRound" && (h = e[_], !(tt[_] && pr(_, e, i, r, t, n)))) {
        if (d = typeof h, p = Se[_], d === "function" && (h = h.call(i, r, t, n), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = fe(h)), p)
          p(this, t, _, h, i) && (P = 1);
        else if (_.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(_) + "").trim(), h += "", St.lastIndex = 0, St.test(f) || (m = W(f), y = W(h)), y ? m !== y && (f = kt(t, _, f, y) + y) : m && (h += m), this.add(a, "setProperty", f, h, r, n, 0, 0, _), s.push(_), S.push(_, 0, a[_]);
        else if (d !== "undefined") {
          if (o && _ in o ? (f = typeof o[_] == "function" ? o[_].call(i, r, t, n) : o[_], U(f) && ~f.indexOf("random(") && (f = fe(f)), W(f + "") || f === "auto" || (f += rt.units[_] || W(yt(t, _)) || ""), (f + "").charAt(1) === "=" && (f = yt(t, _))) : f = yt(t, _), c = parseFloat(f), x = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), x && (h = h.substr(2)), l = parseFloat(h), _ in lt && (_ === "autoAlpha" && (c === 1 && yt(t, "visibility") === "hidden" && l && (c = 0), S.push("visibility", 0, a.visibility), wt(this, a, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), _ !== "scale" && _ !== "transform" && (_ = lt[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), v = _ in vt, v) {
            if (this.styles.save(_), d === "string" && h.substring(0, 6) === "var(--" && (h = ut(t, h.substring(4, h.indexOf(")"))), l = parseFloat(h)), T || (g = t._gsap, g.renderTransform && !e.parseTransform || ce(t, e.parseTransform), w = e.smoothOrigin !== !1 && g.smooth, T = this._pt = new j(this._pt, a, z, 0, 1, g.renderTransform, g, 0, -1), T.dep = 1), _ === "scale")
              this._pt = new j(this._pt, g, "scaleY", g.scaleY, (x ? Xt(g.scaleY, x + l) : l) - g.scaleY || 0, Qe), this._pt.u = 0, s.push("scaleY", _), _ += "X";
            else if (_ === "transformOrigin") {
              S.push(H, 0, a[H]), h = Yn(h), g.svg ? He(t, h, 0, w, 0, this) : (y = parseFloat(h.split(" ")[2]) || 0, y !== g.zOrigin && wt(this, g, "zOrigin", g.zOrigin, y), wt(this, a, _, Oe(f), Oe(h)));
              continue;
            } else if (_ === "svgOrigin") {
              He(t, h, 1, w, 0, this);
              continue;
            } else if (_ in Dr) {
              $n(this, g, _, c, x ? Xt(c, x + h) : h);
              continue;
            } else if (_ === "smoothOrigin") {
              wt(this, g, "smooth", g.smooth, h);
              continue;
            } else if (_ === "force3D") {
              g[_] = h;
              continue;
            } else if (_ === "transform") {
              Kn(this, h, t);
              continue;
            }
          } else _ in a || (_ = Ht(_) || _);
          if (v || (l || l === 0) && (c || c === 0) && !Mn.test(h) && _ in a)
            m = (f + "").substr((c + "").length), l || (l = 0), y = W(h) || (_ in rt.units ? rt.units[_] : m), m !== y && (c = kt(t, _, f, y)), this._pt = new j(this._pt, v ? g : a, _, c, (x ? Xt(c, x + l) : l) - c, !v && (y === "px" || _ === "zIndex") && e.autoRound !== !1 ? Rn : Qe), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = f, this._pt.r = An);
          else if (_ in a)
            Un.call(this, t, _, f, x ? x + h : h);
          else if (_ in t)
            this.add(t, _, f || t[_], x ? x + h : h, r, n);
          else if (_ !== "parseTransform") {
            ri(_, h);
            continue;
          }
          v || (_ in a ? S.push(_, 0, a[_]) : typeof t[_] == "function" ? S.push(_, 2, t[_]()) : S.push(_, 1, f || t[_])), s.push(_);
        }
      }
    P && Tr(this);
  },
  render: function(t, e) {
    if (e.tween._time || !di())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: yt,
  aliases: lt,
  getSetter: function(t, e, i) {
    var r = lt[e];
    return r && r.indexOf(",") < 0 && (e = r), e in vt && e !== H && (t._gsap.x || yt(t, "x")) ? i && Oi === i ? e === "scale" ? Ln : Fn : (Oi = i || {}) && (e === "scale" ? In : Nn) : t.style && !ti(t.style[e]) ? En : ~e.indexOf("-") ? zn : _i(t, e);
  },
  core: {
    _removeProperty: qt,
    _getMatrix: mi
  }
};
J.utils.checkPrefix = Ht;
J.core.getStyleSaver = Or;
(function(u, t, e, i) {
  var r = Z(u + "," + t + "," + e, function(n) {
    vt[n] = 1;
  });
  Z(t, function(n) {
    rt.units[n] = "deg", Dr[n] = 1;
  }), lt[r[13]] = u + "," + t, Z(i, function(n) {
    var s = n.split(":");
    lt[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u) {
  rt.units[u] = "px";
});
J.registerPlugin(Er);
var mt = J.registerPlugin(Er) || J;
mt.core.Tween;
function Qn() {
  const u = document.querySelectorAll(".faq_accordion");
  u.length && u.forEach((t) => {
    const e = t.querySelector(".faq_question"), i = t.querySelector(".faq_answer"), r = t.querySelector(".faq_icon");
    !e || !i || (mt.set(i, { height: 0, overflow: "hidden" }), mt.set(r, { rotate: 0 }), e.setAttribute("aria-expanded", "false"), i.setAttribute("aria-hidden", "true"), e.addEventListener("click", () => {
      const n = t.classList.contains("is-open");
      u.forEach((s) => {
        s !== t && (s.classList.remove("is-open"), mt.to(s.querySelector(".faq_answer"), { height: 0, duration: 0.3 }), mt.to(s.querySelector(".faq_icon"), { rotate: 0, duration: 0.3 }), s.querySelector(".faq_question").setAttribute("aria-expanded", "false"), s.querySelector(".faq_answer").setAttribute("aria-hidden", "true"));
      }), n ? (t.classList.remove("is-open"), mt.to(i, { height: 0, duration: 0.3 }), mt.to(r, { rotate: 0, duration: 0.3 }), e.setAttribute("aria-expanded", "false"), i.setAttribute("aria-hidden", "true")) : (t.classList.add("is-open"), mt.to(i, { height: "auto", duration: 0.4 }), mt.to(r, { rotate: -180, duration: 0.4 }), e.setAttribute("aria-expanded", "true"), i.setAttribute("aria-hidden", "false"));
    }));
  });
}
export {
  Qn as init
};
