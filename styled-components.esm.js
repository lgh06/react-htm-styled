// added by Daniel Liu
// https://cdn.jsdelivr.net/npm/styled-components@5.3.3/dist/styled-components.esm.js
let process = {env: {}};


// starts here
// react and react-is modified
import {typeOf as e, isElement as t, isValidElementType as n} from "https://cdn.jsdelivr.net/npm/@webest/es-react@0.0.1/react-is.js";
import r, {useState as o, useContext as s, useMemo as i, useEffect as a, useRef as c, createElement as u, useDebugValue as l} from "https://cdn.jsdelivr.net/npm/@webest/es-react@0.0.1/react.js";
import d from "shallowequal";
import h from "@emotion/stylis";
import p from "@emotion/unitless";
import f from "@emotion/is-prop-valid";
import m from "hoist-non-react-statics";
function y() {
    return (y = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ).apply(this, arguments)
}
var v = function(e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
        n.push(t[r], e[r + 1]);
    return n
}
  , g = function(t) {
    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !e(t)
}
  , S = Object.freeze([])
  , w = Object.freeze({});
function E(e) {
    return "function" == typeof e
}
function b(e) {
    return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component"
}
function _(e) {
    return e && "string" == typeof e.styledComponentId
}
var N = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled"
  , A = "5.3.3"
  , C = "undefined" != typeof window && "HTMLElement"in window
  , I = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV)
  , P = {}
  , O = "production" !== process.env.NODE_ENV ? {
    1: "Cannot create styled-component for component: %s.\n\n",
    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    9: "Missing document `<head>`\n\n",
    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
    14: 'ThemeProvider: "theme" prop is required.\n\n',
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
} : {};
function R() {
    for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1)
        t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t.forEach((function(t) {
        e = e.replace(/%[a-z]/, t)
    }
    )),
    e
}
function D(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    throw "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(R.apply(void 0, [O[e]].concat(n)).trim())
}
var j = function() {
    function e(e) {
        this.groupSizes = new Uint32Array(512),
        this.length = 512,
        this.tag = e
    }
    var t = e.prototype;
    return t.indexOfGroup = function(e) {
        for (var t = 0, n = 0; n < e; n++)
            t += this.groupSizes[n];
        return t
    }
    ,
    t.insertRules = function(e, t) {
        if (e >= this.groupSizes.length) {
            for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
                (o <<= 1) < 0 && D(16, "" + e);
            this.groupSizes = new Uint32Array(o),
            this.groupSizes.set(n),
            this.length = o;
            for (var s = r; s < o; s++)
                this.groupSizes[s] = 0
        }
        for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++)
            this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++,
            i++)
    }
    ,
    t.clearGroup = function(e) {
        if (e < this.length) {
            var t = this.groupSizes[e]
              , n = this.indexOfGroup(e)
              , r = n + t;
            this.groupSizes[e] = 0;
            for (var o = n; o < r; o++)
                this.tag.deleteRule(n)
        }
    }
    ,
    t.getGroup = function(e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e])
            return t;
        for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++)
            t += this.tag.getRule(s) + "/*!sc*/\n";
        return t
    }
    ,
    e
}()
  , T = new Map
  , x = new Map
  , k = 1
  , V = function(e) {
    if (T.has(e))
        return T.get(e);
    for (; x.has(k); )
        k++;
    var t = k++;
    return "production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > 1 << 30) && D(16, "" + t),
    T.set(e, t),
    x.set(t, e),
    t
}
  , z = function(e) {
    return x.get(e)
}
  , B = function(e, t) {
    t >= k && (k = t + 1),
    T.set(e, t),
    x.set(t, e)
}
  , M = "style[" + N + '][data-styled-version="5.3.3"]'
  , G = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  , L = function(e, t, n) {
    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++)
        (r = o[s]) && e.registerName(t, r)
}
  , F = function(e, t) {
    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
        var i = n[o].trim();
        if (i) {
            var a = i.match(G);
            if (a) {
                var c = 0 | parseInt(a[1], 10)
                  , u = a[2];
                0 !== c && (B(u, c),
                L(e, u, a[3]),
                e.getTag().insertRules(c, r)),
                r.length = 0
            } else
                r.push(i)
        }
    }
}
  , Y = function() {
    return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null
}
  , q = function(e) {
    var t = document.head
      , n = e || t
      , r = document.createElement("style")
      , o = function(e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
            var r = t[n];
            if (r && 1 === r.nodeType && r.hasAttribute(N))
                return r
        }
    }(n)
      , s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(N, "active"),
    r.setAttribute("data-styled-version", "5.3.3");
    var i = Y();
    return i && r.setAttribute("nonce", i),
    n.insertBefore(r, s),
    r
}
  , H = function() {
    function e(e) {
        var t = this.element = q(e);
        t.appendChild(document.createTextNode("")),
        this.sheet = function(e) {
            if (e.sheet)
                return e.sheet;
            for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                if (o.ownerNode === e)
                    return o
            }
            D(17)
        }(t),
        this.length = 0
    }
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        try {
            return this.sheet.insertRule(t, e),
            this.length++,
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    t.deleteRule = function(e) {
        this.sheet.deleteRule(e),
        this.length--
    }
    ,
    t.getRule = function(e) {
        var t = this.sheet.cssRules[e];
        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
    }
    ,
    e
}()
  , $ = function() {
    function e(e) {
        var t = this.element = q(e);
        this.nodes = t.childNodes,
        this.length = 0
    }
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t)
              , r = this.nodes[e];
            return this.element.insertBefore(n, r || null),
            this.length++,
            !0
        }
        return !1
    }
    ,
    t.deleteRule = function(e) {
        this.element.removeChild(this.nodes[e]),
        this.length--
    }
    ,
    t.getRule = function(e) {
        return e < this.length ? this.nodes[e].textContent : ""
    }
    ,
    e
}()
  , W = function() {
    function e(e) {
        this.rules = [],
        this.length = 0
    }
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t),
        this.length++,
        !0)
    }
    ,
    t.deleteRule = function(e) {
        this.rules.splice(e, 1),
        this.length--
    }
    ,
    t.getRule = function(e) {
        return e < this.length ? this.rules[e] : ""
    }
    ,
    e
}()
  , U = C
  , J = {
    isServer: !C,
    useCSSOMInjection: !I
}
  , X = function() {
    function e(e, t, n) {
        void 0 === e && (e = w),
        void 0 === t && (t = {}),
        this.options = y({}, J, {}, e),
        this.gs = t,
        this.names = new Map(n),
        this.server = !!e.isServer,
        !this.server && C && U && (U = !1,
        function(e) {
            for (var t = document.querySelectorAll(M), n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                o && "active" !== o.getAttribute(N) && (F(e, o),
                o.parentNode && o.parentNode.removeChild(o))
            }
        }(this))
    }
    e.registerId = function(e) {
        return V(e)
    }
    ;
    var t = e.prototype;
    return t.reconstructWithOptions = function(t, n) {
        return void 0 === n && (n = !0),
        new e(y({}, this.options, {}, t),this.gs,n && this.names || void 0)
    }
    ,
    t.allocateGSInstance = function(e) {
        return this.gs[e] = (this.gs[e] || 0) + 1
    }
    ,
    t.getTag = function() {
        return this.tag || (this.tag = (n = (t = this.options).isServer,
        r = t.useCSSOMInjection,
        o = t.target,
        e = n ? new W(o) : r ? new H(o) : new $(o),
        new j(e)));
        var e, t, n, r, o
    }
    ,
    t.hasNameForId = function(e, t) {
        return this.names.has(e) && this.names.get(e).has(t)
    }
    ,
    t.registerName = function(e, t) {
        if (V(e),
        this.names.has(e))
            this.names.get(e).add(t);
        else {
            var n = new Set;
            n.add(t),
            this.names.set(e, n)
        }
    }
    ,
    t.insertRules = function(e, t, n) {
        this.registerName(e, t),
        this.getTag().insertRules(V(e), n)
    }
    ,
    t.clearNames = function(e) {
        this.names.has(e) && this.names.get(e).clear()
    }
    ,
    t.clearRules = function(e) {
        this.getTag().clearGroup(V(e)),
        this.clearNames(e)
    }
    ,
    t.clearTag = function() {
        this.tag = void 0
    }
    ,
    t.toString = function() {
        return function(e) {
            for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
                var s = z(o);
                if (void 0 !== s) {
                    var i = e.names.get(s)
                      , a = t.getGroup(o);
                    if (i && a && i.size) {
                        var c = N + ".g" + o + '[id="' + s + '"]'
                          , u = "";
                        void 0 !== i && i.forEach((function(e) {
                            e.length > 0 && (u += e + ",")
                        }
                        )),
                        r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n'
                    }
                }
            }
            return r
        }(this)
    }
    ,
    e
}()
  , Z = /(a)(d)/gi
  , K = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97))
};
function Q(e) {
    var t, n = "";
    for (t = Math.abs(e); t > 52; t = t / 52 | 0)
        n = K(t % 52) + n;
    return (K(t % 52) + n).replace(Z, "$1-$2")
}
var ee = function(e, t) {
    for (var n = t.length; n; )
        e = 33 * e ^ t.charCodeAt(--n);
    return e
}
  , te = function(e) {
    return ee(5381, e)
};
function ne(e) {
    for (var t = 0; t < e.length; t += 1) {
        var n = e[t];
        if (E(n) && !_(n))
            return !1
    }
    return !0
}
var re = te("5.3.3")
  , oe = function() {
    function e(e, t, n) {
        this.rules = e,
        this.staticRulesId = "",
        this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n || n.isStatic) && ne(e),
        this.componentId = t,
        this.baseHash = ee(re, t),
        this.baseStyle = n,
        X.registerId(t)
    }
    return e.prototype.generateAndInjectStyles = function(e, t, n) {
        var r = this.componentId
          , o = [];
        if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
        this.isStatic && !n.hash)
            if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
                o.push(this.staticRulesId);
            else {
                var s = _e(this.rules, e, t, n).join("")
                  , i = Q(ee(this.baseHash, s) >>> 0);
                if (!t.hasNameForId(r, i)) {
                    var a = n(s, "." + i, void 0, r);
                    t.insertRules(r, i, a)
                }
                o.push(i),
                this.staticRulesId = i
            }
        else {
            for (var c = this.rules.length, u = ee(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
                var h = this.rules[d];
                if ("string" == typeof h)
                    l += h,
                    "production" !== process.env.NODE_ENV && (u = ee(u, h + d));
                else if (h) {
                    var p = _e(h, e, t, n)
                      , f = Array.isArray(p) ? p.join("") : p;
                    u = ee(u, f + d),
                    l += f
                }
            }
            if (l) {
                var m = Q(u >>> 0);
                if (!t.hasNameForId(r, m)) {
                    var y = n(l, "." + m, void 0, r);
                    t.insertRules(r, m, y)
                }
                o.push(m)
            }
        }
        return o.join(" ")
    }
    ,
    e
}()
  , se = /^\s*\/\/.*$/gm
  , ie = [":", "[", ".", "#"];
function ae(e) {
    var t, n, r, o, s = void 0 === e ? w : e, i = s.options, a = void 0 === i ? w : i, c = s.plugins, u = void 0 === c ? S : c, l = new h(a), d = [], p = function(e) {
        function t(t) {
            if (t)
                try {
                    e(t + "}")
                } catch (e) {}
        }
        return function(n, r, o, s, i, a, c, u, l, d) {
            switch (n) {
            case 1:
                if (0 === l && 64 === r.charCodeAt(0))
                    return e(r + ";"),
                    "";
                break;
            case 2:
                if (0 === u)
                    return r + "/*|*/";
                break;
            case 3:
                switch (u) {
                case 102:
                case 112:
                    return e(o[0] + r),
                    "";
                default:
                    return r + (0 === d ? "/*|*/" : "")
                }
            case -2:
                r.split("/*|*/}").forEach(t)
            }
        }
    }((function(e) {
        d.push(e)
    }
    )), f = function(e, r, s) {
        return 0 === r && -1 !== ie.indexOf(s[n.length]) || s.match(o) ? e : "." + t
    };
    function m(e, s, i, a) {
        void 0 === a && (a = "&");
        var c = e.replace(se, "")
          , u = s && i ? i + " " + s + " { " + c + " }" : c;
        return t = a,
        n = s,
        r = new RegExp("\\" + n + "\\b","g"),
        o = new RegExp("(\\" + n + "\\b){2,}"),
        l(i || !s ? "" : s, u)
    }
    return l.use([].concat(u, [function(e, t, o) {
        2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f))
    }
    , p, function(e) {
        if (-2 === e) {
            var t = d;
            return d = [],
            t
        }
    }
    ])),
    m.hash = u.length ? u.reduce((function(e, t) {
        return t.name || D(15),
        ee(e, t.name)
    }
    ), 5381).toString() : "",
    m
}
var ce = r.createContext()
  , ue = ce.Consumer
  , le = r.createContext()
  , de = (le.Consumer,
new X)
  , he = ae();
function pe() {
    return s(ce) || de
}
function fe() {
    return s(le) || he
}
function me(e) {
    var t = o(e.stylisPlugins)
      , n = t[0]
      , s = t[1]
      , c = pe()
      , u = i((function() {
        var t = c;
        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
            target: e.target
        }, !1)),
        e.disableCSSOMInjection && (t = t.reconstructWithOptions({
            useCSSOMInjection: !1
        })),
        t
    }
    ), [e.disableCSSOMInjection, e.sheet, e.target])
      , l = i((function() {
        return ae({
            options: {
                prefix: !e.disableVendorPrefixes
            },
            plugins: n
        })
    }
    ), [e.disableVendorPrefixes, n]);
    return a((function() {
        d(n, e.stylisPlugins) || s(e.stylisPlugins)
    }
    ), [e.stylisPlugins]),
    r.createElement(ce.Provider, {
        value: u
    }, r.createElement(le.Provider, {
        value: l
    }, "production" !== process.env.NODE_ENV ? r.Children.only(e.children) : e.children))
}
var ye = function() {
    function e(e, t) {
        var n = this;
        this.inject = function(e, t) {
            void 0 === t && (t = he);
            var r = n.name + t.hash;
            e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
        }
        ,
        this.toString = function() {
            return D(12, String(n.name))
        }
        ,
        this.name = e,
        this.id = "sc-keyframes-" + e,
        this.rules = t
    }
    return e.prototype.getName = function(e) {
        return void 0 === e && (e = he),
        this.name + e.hash
    }
    ,
    e
}()
  , ve = /([A-Z])/
  , ge = /([A-Z])/g
  , Se = /^ms-/
  , we = function(e) {
    return "-" + e.toLowerCase()
};
function Ee(e) {
    return ve.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e
}
var be = function(e) {
    return null == e || !1 === e || "" === e
};
function _e(e, n, r, o) {
    if (Array.isArray(e)) {
        for (var s, i = [], a = 0, c = e.length; a < c; a += 1)
            "" !== (s = _e(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
        return i
    }
    if (be(e))
        return "";
    if (_(e))
        return "." + e.styledComponentId;
    if (E(e)) {
        if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n)
            return e;
        var u = e(n);
        return "production" !== process.env.NODE_ENV && t(u) && console.warn(b(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),
        _e(u, n, r, o)
    }
    var l;
    return e instanceof ye ? r ? (e.inject(r, o),
    e.getName(o)) : e : g(e) ? function e(t, n) {
        var r, o, s = [];
        for (var i in t)
            t.hasOwnProperty(i) && !be(t[i]) && (Array.isArray(t[i]) && t[i].isCss || E(t[i]) ? s.push(Ee(i) + ":", t[i], ";") : g(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(Ee(i) + ": " + (r = i,
            null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in p ? String(o).trim() : o + "px") + ";"));
        return n ? [n + " {"].concat(s, ["}"]) : s
    }(e) : e.toString()
}
var Ne = function(e) {
    return Array.isArray(e) && (e.isCss = !0),
    e
};
function Ae(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    return E(e) || g(e) ? Ne(_e(v(S, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ne(_e(v(e, n)))
}
var Ce = /invalid hook call/i
  , Ie = new Set
  , Pe = function(e, t) {
    if ("production" !== process.env.NODE_ENV) {
        var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component."
          , r = console.error;
        try {
            var o = !0;
            console.error = function(e) {
                if (Ce.test(e))
                    o = !1,
                    Ie.delete(n);
                else {
                    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        s[i - 1] = arguments[i];
                    r.apply(void 0, [e].concat(s))
                }
            }
            ,
            c(),
            o && !Ie.has(n) && (console.warn(n),
            Ie.add(n))
        } catch (e) {
            Ce.test(e.message) && Ie.delete(n)
        } finally {
            console.error = r
        }
    }
}
  , Oe = function(e, t, n) {
    return void 0 === n && (n = w),
    e.theme !== n.theme && e.theme || t || n.theme
}
  , Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
  , De = /(^-|-$)/g;
function je(e) {
    return e.replace(Re, "-").replace(De, "")
}
var Te = function(e) {
    return Q(te(e) >>> 0)
};
function xe(e) {
    return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase())
}
var ke = function(e) {
    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
}
  , Ve = function(e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e
};
function ze(e, t, n) {
    var r = e[n];
    ke(t) && ke(r) ? Be(r, t) : e[n] = t
}
function Be(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    for (var o = 0, s = n; o < s.length; o++) {
        var i = s[o];
        if (ke(i))
            for (var a in i)
                Ve(a) && ze(e, i[a], a)
    }
    return e
}
var Me = r.createContext()
  , Ge = Me.Consumer;
function Le(e) {
    var t = s(Me)
      , n = i((function() {
        return function(e, t) {
            if (!e)
                return D(14);
            if (E(e)) {
                var n = e(t);
                return "production" === process.env.NODE_ENV || null !== n && !Array.isArray(n) && "object" == typeof n ? n : D(7)
            }
            return Array.isArray(e) || "object" != typeof e ? D(8) : t ? y({}, t, {}, e) : e
        }(e.theme, t)
    }
    ), [e.theme, t]);
    return e.children ? r.createElement(Me.Provider, {
        value: n
    }, e.children) : null
}
var Fe = {};
function Ye(e, t, n) {
    var o = _(e)
      , i = !xe(e)
      , a = t.attrs
      , c = void 0 === a ? S : a
      , d = t.componentId
      , h = void 0 === d ? function(e, t) {
        var n = "string" != typeof e ? "sc" : je(e);
        Fe[n] = (Fe[n] || 0) + 1;
        var r = n + "-" + Te("5.3.3" + n + Fe[n]);
        return t ? t + "-" + r : r
    }(t.displayName, t.parentComponentId) : d
      , p = t.displayName
      , v = void 0 === p ? function(e) {
        return xe(e) ? "styled." + e : "Styled(" + b(e) + ")"
    }(e) : p
      , g = t.displayName && t.componentId ? je(t.displayName) + "-" + t.componentId : t.componentId || h
      , N = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c
      , A = t.shouldForwardProp;
    o && e.shouldForwardProp && (A = t.shouldForwardProp ? function(n, r, o) {
        return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o)
    }
    : e.shouldForwardProp);
    var C, I = new oe(n,g,o ? e.componentStyle : void 0), P = I.isStatic && 0 === c.length, O = function(e, t) {
        return function(e, t, n, r) {
            var o = e.attrs
              , i = e.componentStyle
              , a = e.defaultProps
              , c = e.foldedComponentIds
              , d = e.shouldForwardProp
              , h = e.styledComponentId
              , p = e.target;
            "production" !== process.env.NODE_ENV && l(h);
            var m = function(e, t, n) {
                void 0 === e && (e = w);
                var r = y({}, t, {
                    theme: e
                })
                  , o = {};
                return n.forEach((function(e) {
                    var t, n, s, i = e;
                    for (t in E(i) && (i = i(r)),
                    i)
                        r[t] = o[t] = "className" === t ? (n = o[t],
                        s = i[t],
                        n && s ? n + " " + s : n || s) : i[t]
                }
                )),
                [r, o]
            }(Oe(t, s(Me), a) || w, t, o)
              , v = m[0]
              , g = m[1]
              , S = function(e, t, n, r) {
                var o = pe()
                  , s = fe()
                  , i = t ? e.generateAndInjectStyles(w, o, s) : e.generateAndInjectStyles(n, o, s);
                return "production" !== process.env.NODE_ENV && l(i),
                "production" !== process.env.NODE_ENV && !t && r && r(i),
                i
            }(i, r, v, "production" !== process.env.NODE_ENV ? e.warnTooManyClasses : void 0)
              , b = n
              , _ = g.$as || t.$as || g.as || t.as || p
              , N = xe(_)
              , A = g !== t ? y({}, t, {}, g) : t
              , C = {};
            for (var I in A)
                "$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, f, _) : !N || f(I)) && (C[I] = A[I]));
            return t.style && g.style !== t.style && (C.style = y({}, t.style, {}, g.style)),
            C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "),
            C.ref = b,
            u(_, C)
        }(C, e, t, P)
    };
    return O.displayName = v,
    (C = r.forwardRef(O)).attrs = N,
    C.componentStyle = I,
    C.displayName = v,
    C.shouldForwardProp = A,
    C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : S,
    C.styledComponentId = g,
    C.target = o ? e.target : e,
    C.withComponent = function(e) {
        var r = t.componentId
          , o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, s = Object.keys(e);
            for (r = 0; r < s.length; r++)
                n = s[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(t, ["componentId"])
          , s = r && r + "-" + (xe(e) ? e : je(b(e)));
        return Ye(e, y({}, o, {
            attrs: N,
            componentId: s
        }), n)
    }
    ,
    Object.defineProperty(C, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(t) {
            this._foldedDefaultProps = o ? Be({}, e.defaultProps, t) : t
        }
    }),
    "production" !== process.env.NODE_ENV && (Pe(v, g),
    C.warnTooManyClasses = function(e, t) {
        var n = {}
          , r = !1;
        return function(o) {
            if (!r && (n[o] = !0,
            Object.keys(n).length >= 200)) {
                var s = t ? ' with the id of "' + t + '"' : "";
                console.warn("Over 200 classes were generated for component " + e + s + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),
                r = !0,
                n = {}
            }
        }
    }(v, g)),
    C.toString = function() {
        return "." + C.styledComponentId
    }
    ,
    i && m(C, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }),
    C
}
var qe = function(e) {
    return function e(t, r, o) {
        if (void 0 === o && (o = w),
        !n(r))
            return D(1, String(r));
        var s = function() {
            return t(r, o, Ae.apply(void 0, arguments))
        };
        return s.withConfig = function(n) {
            return e(t, r, y({}, o, {}, n))
        }
        ,
        s.attrs = function(n) {
            return e(t, r, y({}, o, {
                attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
            }))
        }
        ,
        s
    }(Ye, e)
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
    qe[e] = qe(e)
}
));
var He = function() {
    function e(e, t) {
        this.rules = e,
        this.componentId = t,
        this.isStatic = ne(e),
        X.registerId(this.componentId + 1)
    }
    var t = e.prototype;
    return t.createStyles = function(e, t, n, r) {
        var o = r(_e(this.rules, t, n, r).join(""), "")
          , s = this.componentId + e;
        n.insertRules(s, s, o)
    }
    ,
    t.removeStyles = function(e, t) {
        t.clearRules(this.componentId + e)
    }
    ,
    t.renderStyles = function(e, t, n, r) {
        e > 2 && X.registerId(this.componentId + e),
        this.removeStyles(e, n),
        this.createStyles(e, t, n, r)
    }
    ,
    e
}();
function $e(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
        n[o - 1] = arguments[o];
    var i = Ae.apply(void 0, [e].concat(n))
      , a = "sc-global-" + Te(JSON.stringify(i))
      , u = new He(i,a);
    function l(e) {
        var t = pe()
          , n = fe()
          , o = s(Me)
          , u = c(t.allocateGSInstance(a)).current;
        return "production" !== process.env.NODE_ENV && r.Children.count(e.children) && console.warn("The global style component " + a + " was given child JSX. createGlobalStyle does not render children."),
        "production" !== process.env.NODE_ENV && i.some((function(e) {
            return "string" == typeof e && -1 !== e.indexOf("@import")
        }
        )) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),
        t.server && d(u, e, t, o, n),
        null
    }
    function d(e, t, n, r, o) {
        if (u.isStatic)
            u.renderStyles(e, P, n, o);
        else {
            var s = y({}, t, {
                theme: Oe(t, r, l.defaultProps)
            });
            u.renderStyles(e, s, n, o)
        }
    }
    return "production" !== process.env.NODE_ENV && Pe(a),
    r.memo(l)
}
function We(e) {
    "production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    var o = Ae.apply(void 0, [e].concat(n)).join("")
      , s = Te(o);
    return new ye(s,o)
}
var Ue = /^\s*<\/[a-z]/i
  , Je = function() {
    function e() {
        var e = this;
        this._emitSheetCSS = function() {
            var t = e.instance.toString();
            if (!t)
                return "";
            var n = Y();
            return "<style " + [n && 'nonce="' + n + '"', N + '="true"', 'data-styled-version="5.3.3"'].filter(Boolean).join(" ") + ">" + t + "</style>"
        }
        ,
        this.getStyleTags = function() {
            return e.sealed ? D(2) : e._emitSheetCSS()
        }
        ,
        this.getStyleElement = function() {
            var t;
            if (e.sealed)
                return D(2);
            var n = ((t = {})[N] = "",
            t["data-styled-version"] = "5.3.3",
            t.dangerouslySetInnerHTML = {
                __html: e.instance.toString()
            },
            t)
              , o = Y();
            return o && (n.nonce = o),
            [r.createElement("style", y({}, n, {
                key: "sc-0-0"
            }))]
        }
        ,
        this.seal = function() {
            e.sealed = !0
        }
        ,
        this.instance = new X({
            isServer: !0
        }),
        this.sealed = !1
    }
    var t = e.prototype;
    return t.collectStyles = function(e) {
        return this.sealed ? D(2) : r.createElement(me, {
            sheet: this.instance
        }, e)
    }
    ,
    t.interleaveWithNodeStream = function(e) {
        if (C)
            return D(3);
        if (this.sealed)
            return D(2);
        this.seal();
        var t = require("stream")
          , n = (t.Readable,
        t.Transform)
          , r = e
          , o = this.instance
          , s = this._emitSheetCSS
          , i = new n({
            transform: function(e, t, n) {
                var r = e.toString()
                  , i = s();
                if (o.clearTag(),
                Ue.test(r)) {
                    var a = r.indexOf(">") + 1
                      , c = r.slice(0, a)
                      , u = r.slice(a);
                    this.push(c + i + u)
                } else
                    this.push(i + r);
                n()
            }
        });
        return r.on("error", (function(e) {
            i.emit("error", e)
        }
        )),
        r.pipe(i)
    }
    ,
    e
}()
  , Xe = function(e) {
    var t = r.forwardRef((function(t, n) {
        var o = s(Me)
          , i = e.defaultProps
          , a = Oe(t, o, i);
        return "production" !== process.env.NODE_ENV && void 0 === a && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + b(e) + '"'),
        r.createElement(e, y({}, t, {
            theme: a,
            ref: n
        }))
    }
    ));
    return m(t, e),
    t.displayName = "WithTheme(" + b(e) + ")",
    t
}
  , Ze = function() {
    return s(Me)
}
  , Ke = {
    StyleSheet: X,
    masterSheet: de
};
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0,
1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),
window["__styled-components-init__"] += 1);
export default qe;
export {Je as ServerStyleSheet, ue as StyleSheetConsumer, ce as StyleSheetContext, me as StyleSheetManager, Ge as ThemeConsumer, Me as ThemeContext, Le as ThemeProvider, Ke as __PRIVATE__, $e as createGlobalStyle, Ae as css, _ as isStyledComponent, We as keyframes, Ze as useTheme, A as version, Xe as withTheme};
