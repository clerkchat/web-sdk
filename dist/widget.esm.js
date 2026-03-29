var Ee = Object.defineProperty;
var Ue = (t, e, n) => e in t ? Ee(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var U = (t, e, n) => Ue(t, typeof e != "symbol" ? e + "" : e, n);
var B, p, ve, $, _e, ge, ye, be, ee, G, Z, O = {}, I = [], He = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, z = Array.isArray;
function C(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function te(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Ne(t, e, n) {
  var _, i, o, s = {};
  for (o in e) o == "key" ? _ = e[o] : o == "ref" ? i = e[o] : s[o] = e[o];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? B.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) s[o] === void 0 && (s[o] = t.defaultProps[o]);
  return D(t, s, _, i, null);
}
function D(t, e, n, _, i) {
  var o = { type: t, props: e, key: n, ref: _, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++ve, __i: -1, __u: 0 };
  return i == null && p.vnode != null && p.vnode(o), o;
}
function q(t) {
  return t.children;
}
function j(t, e) {
  this.props = t, this.context = e;
}
function P(t, e) {
  if (e == null) return t.__ ? P(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? P(t) : null;
}
function Ae(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, _ = [], i = [], o = C({}, e);
    o.__v = e.__v + 1, p.vnode && p.vnode(o), ne(t.__P, o, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, _, n ?? P(e), !!(32 & e.__u), i), o.__v = e.__v, o.__.__k[o.__i] = o, Ce(_, o, i), e.__e = e.__ = null, o.__e != n && we(o);
  }
}
function we(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), we(t);
}
function ie(t) {
  (!t.__d && (t.__d = !0) && $.push(t) && !W.__r++ || _e != p.debounceRendering) && ((_e = p.debounceRendering) || ge)(W);
}
function W() {
  try {
    for (var t, e = 1; $.length; ) $.length > e && $.sort(ye), t = $.shift(), e = $.length, Ae(t);
  } finally {
    $.length = W.__r = 0;
  }
}
function xe(t, e, n, _, i, o, s, a, u, l, d) {
  var r, h, c, y, x, w, v, m = _ && _.__k || I, S = e.length;
  for (u = Fe(n, e, m, u, S), r = 0; r < S; r++) (c = n.__k[r]) != null && (h = c.__i != -1 && m[c.__i] || O, c.__i = r, w = ne(t, c, h, i, o, s, a, u, l, d), y = c.__e, c.ref && h.ref != c.ref && (h.ref && re(h.ref, null, c), d.push(c.ref, c.__c || y, c)), x == null && y != null && (x = y), (v = !!(4 & c.__u)) || h.__k === c.__k ? u = ke(c, u, t, v) : typeof c.type == "function" && w !== void 0 ? u = w : y && (u = y.nextSibling), c.__u &= -7);
  return n.__e = x, u;
}
function Fe(t, e, n, _, i) {
  var o, s, a, u, l, d = n.length, r = d, h = 0;
  for (t.__k = new Array(i), o = 0; o < i; o++) (s = e[o]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[o] = D(null, s, null, null, null) : z(s) ? s = t.__k[o] = D(q, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = t.__k[o] = D(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[o] = s, u = o + h, s.__ = t, s.__b = t.__b + 1, a = null, (l = s.__i = De(s, n, u, r)) != -1 && (r--, (a = n[l]) && (a.__u |= 2)), a == null || a.__v == null ? (l == -1 && (i > d ? h-- : i < d && h++), typeof s.type != "function" && (s.__u |= 4)) : l != u && (l == u - 1 ? h-- : l == u + 1 ? h++ : (l > u ? h-- : h++, s.__u |= 4))) : t.__k[o] = null;
  if (r) for (o = 0; o < d; o++) (a = n[o]) != null && (2 & a.__u) == 0 && (a.__e == _ && (_ = P(a)), $e(a, a));
  return _;
}
function ke(t, e, n, _) {
  var i, o;
  if (typeof t.type == "function") {
    for (i = t.__k, o = 0; i && o < i.length; o++) i[o] && (i[o].__ = t, e = ke(i[o], e, n, _));
    return e;
  }
  t.__e != e && (_ && (e && t.type && !e.parentNode && (e = P(t)), n.insertBefore(t.__e, e || null)), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function De(t, e, n, _) {
  var i, o, s, a = t.key, u = t.type, l = e[n], d = l != null && (2 & l.__u) == 0;
  if (l === null && a == null || d && a == l.key && u == l.type) return n;
  if (_ > (d ? 1 : 0)) {
    for (i = n - 1, o = n + 1; i >= 0 || o < e.length; ) if ((l = e[s = i >= 0 ? i-- : o++]) != null && (2 & l.__u) == 0 && a == l.key && u == l.type) return s;
  }
  return -1;
}
function le(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || He.test(e) ? n : n + "px";
}
function A(t, e, n, _, i) {
  var o, s;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof _ == "string" && (t.style.cssText = _ = ""), _) for (e in _) n && e in n || le(t.style, e, "");
    if (n) for (e in n) _ && n[e] == _[e] || le(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") o = e != (e = e.replace(be, "$1")), s = e.toLowerCase(), e = s in t || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? _ ? n.u = _.u : (n.u = ee, t.addEventListener(e, o ? Z : G, o)) : t.removeEventListener(e, o ? Z : G, o);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function se(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e.t == null) e.t = ee++;
      else if (e.t < n.u) return;
      return n(p.event ? p.event(e) : e);
    }
  };
}
function ne(t, e, n, _, i, o, s, a, u, l) {
  var d, r, h, c, y, x, w, v, m, S, M, E, oe, N, K, k = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (u = !!(32 & n.__u), o = [a = e.__e = n.__e]), (d = p.__b) && d(e);
  e: if (typeof k == "function") try {
    if (v = e.props, m = k.prototype && k.prototype.render, S = (d = k.contextType) && _[d.__c], M = d ? S ? S.props.value : d.__ : _, n.__c ? w = (r = e.__c = n.__c).__ = r.__E : (m ? e.__c = r = new k(v, M) : (e.__c = r = new j(v, M), r.constructor = k, r.render = Le), S && S.sub(r), r.state || (r.state = {}), r.__n = _, h = r.__d = !0, r.__h = [], r._sb = []), m && r.__s == null && (r.__s = r.state), m && k.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = C({}, r.__s)), C(r.__s, k.getDerivedStateFromProps(v, r.__s))), c = r.props, y = r.state, r.__v = e, h) m && k.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), m && r.componentDidMount != null && r.__h.push(r.componentDidMount);
    else {
      if (m && k.getDerivedStateFromProps == null && v !== c && r.componentWillReceiveProps != null && r.componentWillReceiveProps(v, M), e.__v == n.__v || !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(v, r.__s, M) === !1) {
        e.__v != n.__v && (r.props = v, r.state = r.__s, r.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(T) {
          T && (T.__ = e);
        }), I.push.apply(r.__h, r._sb), r._sb = [], r.__h.length && s.push(r);
        break e;
      }
      r.componentWillUpdate != null && r.componentWillUpdate(v, r.__s, M), m && r.componentDidUpdate != null && r.__h.push(function() {
        r.componentDidUpdate(c, y, x);
      });
    }
    if (r.context = M, r.props = v, r.__P = t, r.__e = !1, E = p.__r, oe = 0, m) r.state = r.__s, r.__d = !1, E && E(e), d = r.render(r.props, r.state, r.context), I.push.apply(r.__h, r._sb), r._sb = [];
    else do
      r.__d = !1, E && E(e), d = r.render(r.props, r.state, r.context), r.state = r.__s;
    while (r.__d && ++oe < 25);
    r.state = r.__s, r.getChildContext != null && (_ = C(C({}, _), r.getChildContext())), m && !h && r.getSnapshotBeforeUpdate != null && (x = r.getSnapshotBeforeUpdate(c, y)), N = d != null && d.type === q && d.key == null ? Se(d.props.children) : d, a = xe(t, z(N) ? N : [N], e, n, _, i, o, s, a, u, l), r.base = e.__e, e.__u &= -161, r.__h.length && s.push(r), w && (r.__E = r.__ = null);
  } catch (T) {
    if (e.__v = null, u || o != null) if (T.then) {
      for (e.__u |= u ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      o[o.indexOf(a)] = null, e.__e = a;
    } else {
      for (K = o.length; K--; ) te(o[K]);
      Q(e);
    }
    else e.__e = n.__e, e.__k = n.__k, T.then || Q(e);
    p.__e(T, e, n);
  }
  else o == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : a = e.__e = je(n.__e, e, n, _, i, o, s, u, l);
  return (d = p.diffed) && d(e), 128 & e.__u ? void 0 : a;
}
function Q(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Q));
}
function Ce(t, e, n) {
  for (var _ = 0; _ < n.length; _++) re(n[_], n[++_], n[++_]);
  p.__c && p.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      p.__e(o, i.__v);
    }
  });
}
function Se(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : z(t) ? t.map(Se) : C({}, t);
}
function je(t, e, n, _, i, o, s, a, u) {
  var l, d, r, h, c, y, x, w = n.props || O, v = e.props, m = e.type;
  if (m == "svg" ? i = "http://www.w3.org/2000/svg" : m == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), o != null) {
    for (l = 0; l < o.length; l++) if ((c = o[l]) && "setAttribute" in c == !!m && (m ? c.localName == m : c.nodeType == 3)) {
      t = c, o[l] = null;
      break;
    }
  }
  if (t == null) {
    if (m == null) return document.createTextNode(v);
    t = document.createElementNS(i, m, v.is && v), a && (p.__m && p.__m(e, o), a = !1), o = null;
  }
  if (m == null) w === v || a && t.data == v || (t.data = v);
  else {
    if (o = o && B.call(t.childNodes), !a && o != null) for (w = {}, l = 0; l < t.attributes.length; l++) w[(c = t.attributes[l]).name] = c.value;
    for (l in w) c = w[l], l == "dangerouslySetInnerHTML" ? r = c : l == "children" || l in v || l == "value" && "defaultValue" in v || l == "checked" && "defaultChecked" in v || A(t, l, null, c, i);
    for (l in v) c = v[l], l == "children" ? h = c : l == "dangerouslySetInnerHTML" ? d = c : l == "value" ? y = c : l == "checked" ? x = c : a && typeof c != "function" || w[l] === c || A(t, l, c, w[l], i);
    if (d) a || r && (d.__html == r.__html || d.__html == t.innerHTML) || (t.innerHTML = d.__html), e.__k = [];
    else if (r && (t.innerHTML = ""), xe(e.type == "template" ? t.content : t, z(h) ? h : [h], e, n, _, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, o, s, o ? o[0] : n.__k && P(n, 0), a, u), o != null) for (l = o.length; l--; ) te(o[l]);
    a || (l = "value", m == "progress" && y == null ? t.removeAttribute("value") : y != null && (y !== t[l] || m == "progress" && !y || m == "option" && y != w[l]) && A(t, l, y, w[l], i), l = "checked", x != null && x != t[l] && A(t, l, x, w[l], i));
  }
  return t;
}
function re(t, e, n) {
  try {
    if (typeof t == "function") {
      var _ = typeof t.__u == "function";
      _ && t.__u(), _ && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    p.__e(i, n);
  }
}
function $e(t, e, n) {
  var _, i;
  if (p.unmount && p.unmount(t), (_ = t.ref) && (_.current && _.current != t.__e || re(_, null, e)), (_ = t.__c) != null) {
    if (_.componentWillUnmount) try {
      _.componentWillUnmount();
    } catch (o) {
      p.__e(o, e);
    }
    _.base = _.__P = null;
  }
  if (_ = t.__k) for (i = 0; i < _.length; i++) _[i] && $e(_[i], e, n || typeof t.type != "function");
  n || te(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Le(t, e, n) {
  return this.constructor(t, n);
}
function Oe(t, e, n) {
  var _, i, o, s;
  e == document && (e = document.documentElement), p.__ && p.__(t, e), i = (_ = !1) ? null : e.__k, o = [], s = [], ne(e, t = e.__k = Ne(q, null, [t]), i || O, O, e.namespaceURI, i ? null : e.firstChild ? B.call(e.childNodes) : null, o, i ? i.__e : e.firstChild, _, s), Ce(o, t, s);
}
B = I.slice, p = { __e: function(t, e, n, _) {
  for (var i, o, s; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(t)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, _ || {}), s = i.__d), s) return i.__E = i;
  } catch (a) {
    t = a;
  }
  throw t;
} }, ve = 0, j.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = C({}, this.state), typeof t == "function" && (t = t(C({}, n), this.props)), t && C(n, t), t != null && this.__v && (e && this._sb.push(e), ie(this));
}, j.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ie(this));
}, j.prototype.render = q, $ = [], ge = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ye = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, W.__r = 0, be = /(PointerCapture)$|Capture$/i, ee = 0, G = se(!1), Z = se(!0);
var Ie = 0;
function f(t, e, n, _, i, o) {
  e || (e = {});
  var s, a, u = e;
  if ("ref" in u) for (a in u = {}, e) a == "ref" ? s = e[a] : u[a] = e[a];
  var l = { type: t, props: u, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ie, __i: -1, __u: 0, __source: i, __self: o };
  if (typeof t == "function" && (s = t.defaultProps)) for (a in s) u[a] === void 0 && (u[a] = s[a]);
  return p.vnode && p.vnode(l), l;
}
var R, g, V, ae, X = 0, Me = [], b = p, ce = b.__b, ue = b.__r, de = b.diffed, he = b.__c, fe = b.unmount, pe = b.__;
function Te(t, e) {
  b.__h && b.__h(g, t, X || e), X = 0;
  var n = g.__H || (g.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function F(t) {
  return X = 1, We(Pe, t);
}
function We(t, e, n) {
  var _ = Te(R++, 2);
  if (_.t = t, !_.__c && (_.__ = [Pe(void 0, e), function(a) {
    var u = _.__N ? _.__N[0] : _.__[0], l = _.t(u, a);
    u !== l && (_.__N = [l, _.__[1]], _.__c.setState({}));
  }], _.__c = g, !g.__f)) {
    var i = function(a, u, l) {
      if (!_.__c.__H) return !0;
      var d = _.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (d.every(function(h) {
        return !h.__N;
      })) return !o || o.call(this, a, u, l);
      var r = _.__c.props !== a;
      return d.some(function(h) {
        if (h.__N) {
          var c = h.__[0];
          h.__ = h.__N, h.__N = void 0, c !== h.__[0] && (r = !0);
        }
      }), o && o.call(this, a, u, l) || r;
    };
    g.__f = !0;
    var o = g.shouldComponentUpdate, s = g.componentWillUpdate;
    g.componentWillUpdate = function(a, u, l) {
      if (this.__e) {
        var d = o;
        o = void 0, i(a, u, l), o = d;
      }
      s && s.call(this, a, u, l);
    }, g.shouldComponentUpdate = i;
  }
  return _.__N || _.__;
}
function Re(t, e) {
  var n = Te(R++, 3);
  !b.__s && qe(n.__H, e) && (n.__ = t, n.u = e, g.__H.__h.push(n));
}
function Be() {
  for (var t; t = Me.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(L), e.__h.some(Y), e.__h = [];
    } catch (n) {
      e.__h = [], b.__e(n, t.__v);
    }
  }
}
b.__b = function(t) {
  g = null, ce && ce(t);
}, b.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), pe && pe(t, e);
}, b.__r = function(t) {
  ue && ue(t), R = 0;
  var e = (g = t.__c).__H;
  e && (V === g ? (e.__h = [], g.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(L), e.__h.some(Y), e.__h = [], R = 0)), V = g;
}, b.diffed = function(t) {
  de && de(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Me.push(e) !== 1 && ae === b.requestAnimationFrame || ((ae = b.requestAnimationFrame) || ze)(Be)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), V = g = null;
}, b.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(L), n.__h = n.__h.filter(function(_) {
        return !_.__ || Y(_);
      });
    } catch (_) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], b.__e(_, n.__v);
    }
  }), he && he(t, e);
}, b.unmount = function(t) {
  fe && fe(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(_) {
    try {
      L(_);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && b.__e(e, n.__v));
};
var me = typeof requestAnimationFrame == "function";
function ze(t) {
  var e, n = function() {
    clearTimeout(_), me && cancelAnimationFrame(e), setTimeout(t);
  }, _ = setTimeout(n, 35);
  me && (e = requestAnimationFrame(n));
}
function L(t) {
  var e = g, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), g = e;
}
function Y(t) {
  var e = g;
  t.__c = t.__(), g = e;
}
function qe(t, e) {
  return !t || t.length !== e.length || e.some(function(n, _) {
    return n !== t[_];
  });
}
function Pe(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const J = "@tailwind base;@tailwind components;@tailwind utilities;@layer base{:host{--background: 0 0% 100%;--foreground: 240 10% 3.9%;--card: 0 0% 100%;--card-foreground: 240 10% 3.9%;--popover: 0 0% 100%;--popover-foreground: 240 10% 3.9%;--primary: 240 5.9% 10%;--primary-foreground: 0 0% 98%;--secondary: 240 4.8% 95.9%;--secondary-foreground: 240 5.9% 10%;--muted: 240 4.8% 95.9%;--muted-foreground: 240 3.8% 46.1%;--accent: 240 4.8% 95.9%;--accent-foreground: 240 5.9% 10%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 240 5.9% 90%;--input: 240 5.9% 90%;--ring: 240 10% 3.9%;--radius: .75rem}}@layer base{*{@apply border-border;}body{@apply bg-background text-foreground;}}", Ke = "https://api.clerk.chat/v1/widget";
class Ve {
  constructor(e, n = Ke) {
    U(this, "publicKey");
    U(this, "baseUrl");
    U(this, "token", null);
    U(this, "listeners", /* @__PURE__ */ new Set());
    this.publicKey = e, this.baseUrl = n;
  }
  async initSession(e) {
    const n = await fetch(`${this.baseUrl}/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-widget-key": this.publicKey
      },
      body: JSON.stringify({ identity: e })
    });
    if (!n.ok)
      throw new Error(`Failed to init session: ${n.statusText}`);
    const _ = await n.json();
    return this.token = _.token, this.connectRealtime(), _;
  }
  async sendMessage(e) {
    if (!this.token) throw new Error("Session not initialized");
    const n = await fetch(`${this.baseUrl}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      },
      body: JSON.stringify({ body: e })
    });
    if (!n.ok)
      throw new Error(`Failed to send message: ${n.statusText}`);
    return n.json();
  }
  connectRealtime() {
    if (!this.token) return;
    const e = `${this.baseUrl}/stream?token=${this.token}`, n = new EventSource(e);
    n.onmessage = (_) => {
      try {
        const i = JSON.parse(_.data);
        i.type === "message.created" && this.notifyListeners(i.data);
      } catch (i) {
        console.error("Failed to parse realtime message", i);
      }
    }, n.onerror = (_) => {
      console.error("SSE Error:", _), n.close(), setTimeout(() => this.connectRealtime(), 5e3);
    };
  }
  onMessage(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  notifyListeners(e) {
    this.listeners.forEach((n) => n(e));
  }
}
const Je = "clerk-chat-widget-root";
let H = null;
function Ge({ publicKey: t, baseUrl: e }) {
  const [n, _] = F(!1), [i, o] = F([]), [s, a] = F(""), [u, l] = F(null);
  Re(() => {
    const r = new Ve(t, e);
    l(r), r.initSession().then((c) => o(c.messages || [])).catch((c) => console.error("Failed to init ClerkChat widget session:", c));
    const h = r.onMessage((c) => {
      o((y) => [...y, c]);
    });
    return () => h();
  }, [t, e]);
  const d = async (r) => {
    if (r.preventDefault(), !s.trim() || !u) return;
    const h = {
      id: Math.random().toString(36),
      body: s,
      sender: "contact",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    o((c) => [...c, h]), a("");
    try {
      await u.sendMessage(h.body);
    } catch (c) {
      console.error("Failed to send message", c);
    }
  };
  return /* @__PURE__ */ f("div", { class: "fixed bottom-6 right-6 z-[2147483647] font-sans text-slate-900 antialiased pointer-events-none", style: { colorScheme: "light" }, children: [
    n && /* @__PURE__ */ f("div", { class: "mb-4 flex flex-col h-[560px] w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ease-out origin-bottom-right pointer-events-auto", children: [
      /* @__PURE__ */ f("div", { class: "flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 shrink-0 shadow-sm z-10 relative", children: [
        /* @__PURE__ */ f("div", { class: "flex items-center gap-3", children: [
          /* @__PURE__ */ f("div", { class: "flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shrink-0", children: /* @__PURE__ */ f("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
            /* @__PURE__ */ f("path", { d: "M12 8V4H8" }),
            /* @__PURE__ */ f("rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }),
            /* @__PURE__ */ f("path", { d: "M2 14h2" }),
            /* @__PURE__ */ f("path", { d: "M20 14h2" }),
            /* @__PURE__ */ f("path", { d: "M15 13v2" }),
            /* @__PURE__ */ f("path", { d: "M9 13v2" })
          ] }) }),
          /* @__PURE__ */ f("div", { class: "flex flex-col", children: [
            /* @__PURE__ */ f("span", { class: "text-[15px] font-semibold text-slate-900 tracking-tight leading-none mb-0.5", children: "Clerk Chat" }),
            /* @__PURE__ */ f("span", { class: "text-xs font-medium text-emerald-500 leading-none", children: "We typically reply in minutes" })
          ] })
        ] }),
        /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            class: "rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors",
            onClick: () => _(!1),
            children: /* @__PURE__ */ f("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ f("path", { d: "M18 6 6 18" }),
              /* @__PURE__ */ f("path", { d: "m6 6 12 12" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ f("div", { class: "flex-1 flex flex-col gap-4 overflow-y-auto bg-slate-50 p-5 scroll-smooth", children: i.length === 0 ? /* @__PURE__ */ f("div", { class: "flex h-full flex-col items-center justify-center text-center opacity-80 mt-[-20px]", children: [
        /* @__PURE__ */ f("div", { class: "h-8 w-8 animate-spin rounded-full border-[3px] border-slate-900 border-t-transparent mb-4" }),
        /* @__PURE__ */ f("span", { class: "text-sm font-medium text-slate-600", children: "Connecting to team..." })
      ] }) : i.map((r) => /* @__PURE__ */ f(
        "div",
        {
          class: `flex flex-col max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300 ${r.sender === "contact" ? "self-end items-end" : "self-start items-start"}`,
          children: [
            /* @__PURE__ */ f(
              "div",
              {
                class: `px-4 py-[10px] text-[15px] leading-relaxed ${r.sender === "contact" ? "bg-slate-900 text-white rounded-[20px] rounded-br-[4px] shadow-sm" : "bg-white border border-slate-200 text-slate-800 shadow-sm rounded-[20px] rounded-bl-[4px]"}`,
                children: r.body
              }
            ),
            /* @__PURE__ */ f("span", { class: "text-[10px] mt-1.5 text-slate-400 px-1 font-medium", children: new Date(r.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
          ]
        },
        r.id
      )) }),
      /* @__PURE__ */ f("div", { class: "bg-white p-4 pt-3 shrink-0", children: /* @__PURE__ */ f(
        "form",
        {
          class: "relative flex items-center overflow-hidden rounded-[24px] border border-slate-200 bg-white focus-within:border-slate-900 focus-within:ring-1 focus-within:ring-slate-900 shadow-sm transition-all",
          onSubmit: d,
          children: [
            /* @__PURE__ */ f(
              "input",
              {
                type: "text",
                class: "w-full bg-transparent px-5 py-[14px] text-[15px] outline-none placeholder:text-slate-400 placeholder:font-normal font-medium",
                placeholder: "Ask us anything...",
                value: s,
                onInput: (r) => a(r.target.value)
              }
            ),
            /* @__PURE__ */ f(
              "button",
              {
                type: "submit",
                disabled: !s.trim(),
                class: "absolute right-1.5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-300",
                children: /* @__PURE__ */ f("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", class: "ml-0.5", children: [
                  /* @__PURE__ */ f("line", { x1: "22", x2: "11", y1: "2", y2: "13" }),
                  /* @__PURE__ */ f("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
                ] })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ f("div", { class: "bg-white pb-3 pt-0 text-center shrink-0", children: /* @__PURE__ */ f("a", { href: "https://clerk.chat", target: "_blank", rel: "noopener noreferrer", class: "text-[11px] font-semibold tracking-wide text-slate-400 hover:text-slate-600 transition-colors uppercase", children: "Powered by Clerk Chat" }) })
    ] }),
    /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: `flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition-all duration-300 pointer-events-auto hover:scale-110 hover:bg-slate-800 hover:shadow-2xl ${n ? "rotate-90 scale-0 opacity-0 absolute right-0 bottom-0" : "rotate-0 scale-100 opacity-100 relative"}`,
        onClick: () => _(!0),
        "aria-expanded": n,
        "aria-label": "Open chat widget",
        children: /* @__PURE__ */ f("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ f("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) })
      }
    )
  ] });
}
function Ze(t) {
  if (!(t != null && t.publicKey))
    throw new Error("ClerkChat.init requires a publicKey");
  if (!H) {
    const e = document.createElement("div");
    e.id = Je;
    const n = e.attachShadow({ mode: "open" }), _ = document.createElement("style");
    _.textContent = J;
    const i = document.createElement("div");
    n.append(_, i), document.body.appendChild(e), H = { host: e, mountPoint: i, styleEl: _ };
  }
  H.styleEl.textContent !== J && (H.styleEl.textContent = J), Oe(/* @__PURE__ */ f(Ge, { publicKey: t.publicKey, baseUrl: t.baseUrl }), H.mountPoint);
}
function Qe(t) {
  Ze(t);
}
const Xe = {
  init: Qe
};
typeof window < "u" && (window.ClerkChat = Xe);
export {
  Xe as default,
  Qe as init
};
