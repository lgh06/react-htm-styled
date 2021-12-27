/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b = 60103,
    c = 60106,
    d = 60107,
    e = 60108,
    f = 60114,
    g = 60109,
    h = 60110,
    k = 60112,
    l = 60113,
    m = 60120,
    n = 60115,
    p = 60116,
    q = 60121,
    r = 60122,
    u = 60117,
    v = 60129,
    w = 60131;

if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}

function y(a) {
  if ("object" === typeof a && null !== a) {
    var t = a.$$typeof;

    switch (t) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;

              default:
                return t;
            }

        }

      case c:
        return t;
    }
  }
}

var z = g,
    A = b,
    B = k,
    C = d,
    D = p,
    E = n,
    F = c,
    G = f,
    H = e,
    I = l;
var ContextConsumer = h;
var ContextProvider = z;
var Element = A;
var ForwardRef = B;
var Fragment = C;
var Lazy = D;
var Memo = E;
var Portal = F;
var Profiler = G;
var StrictMode = H;
var Suspense = I;

var isAsyncMode = function () {
  return !1;
};

var isConcurrentMode = function () {
  return !1;
};

var isContextConsumer = function (a) {
  return y(a) === h;
};

var isContextProvider = function (a) {
  return y(a) === g;
};

var isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};

var isForwardRef = function (a) {
  return y(a) === k;
};

var isFragment = function (a) {
  return y(a) === d;
};

var isLazy = function (a) {
  return y(a) === p;
};

var isMemo = function (a) {
  return y(a) === n;
};

var isPortal = function (a) {
  return y(a) === c;
};

var isProfiler = function (a) {
  return y(a) === f;
};

var isStrictMode = function (a) {
  return y(a) === e;
};

var isSuspense = function (a) {
  return y(a) === l;
};

var isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? !0 : !1;
};

var typeOf = y;

var reactIs_production_min = {
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};const {
  ContextConsumer: ContextConsumer$1,
  ContextProvider: ContextProvider$1,
  Element: Element$1,
  ForwardRef: ForwardRef$1,
  Fragment: Fragment$1,
  Lazy: Lazy$1,
  Memo: Memo$1,
  Portal: Portal$1,
  Profiler: Profiler$1,
  StrictMode: StrictMode$1,
  Suspense: Suspense$1,
  isAsyncMode: isAsyncMode$1,
  isConcurrentMode: isConcurrentMode$1,
  isContextConsumer: isContextConsumer$1,
  isContextProvider: isContextProvider$1,
  isElement: isElement$1,
  isForwardRef: isForwardRef$1,
  isFragment: isFragment$1,
  isLazy: isLazy$1,
  isMemo: isMemo$1,
  isPortal: isPortal$1,
  isProfiler: isProfiler$1,
  isStrictMode: isStrictMode$1,
  isSuspense: isSuspense$1,
  isValidElementType: isValidElementType$1,
  typeOf: typeOf$1
} = reactIs_production_min;export default reactIs_production_min;export{ContextConsumer$1 as ContextConsumer,ContextProvider$1 as ContextProvider,Element$1 as Element,ForwardRef$1 as ForwardRef,Fragment$1 as Fragment,Lazy$1 as Lazy,Memo$1 as Memo,Portal$1 as Portal,Profiler$1 as Profiler,StrictMode$1 as StrictMode,Suspense$1 as Suspense,isAsyncMode$1 as isAsyncMode,isConcurrentMode$1 as isConcurrentMode,isContextConsumer$1 as isContextConsumer,isContextProvider$1 as isContextProvider,isElement$1 as isElement,isForwardRef$1 as isForwardRef,isFragment$1 as isFragment,isLazy$1 as isLazy,isMemo$1 as isMemo,isPortal$1 as isPortal,isProfiler$1 as isProfiler,isStrictMode$1 as isStrictMode,isSuspense$1 as isSuspense,isValidElementType$1 as isValidElementType,typeOf$1 as typeOf};