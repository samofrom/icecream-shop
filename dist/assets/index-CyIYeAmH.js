var Vp = Object.defineProperty;
var Jp = (e, t, n) =>
  t in e
    ? Vp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ao = (e, t, n) => Jp(e, typeof t != 'symbol' ? t + '' : t, n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });

  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }

  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();

function Kp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}

var Fc = { exports: {} },
  xi = {},
  Mc = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zr = Symbol.for('react.element'),
  Qp = Symbol.for('react.portal'),
  Yp = Symbol.for('react.fragment'),
  bp = Symbol.for('react.strict_mode'),
  qp = Symbol.for('react.profiler'),
  Xp = Symbol.for('react.provider'),
  Zp = Symbol.for('react.context'),
  em = Symbol.for('react.forward_ref'),
  tm = Symbol.for('react.suspense'),
  nm = Symbol.for('react.memo'),
  rm = Symbol.for('react.lazy'),
  Zu = Symbol.iterator;

function om(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Zu && e[Zu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}

var Uc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jc = Object.assign,
  zc = {};

function Zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zc),
    (this.updater = n || Uc);
}

Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};

function $c() {}

$c.prototype = Zn.prototype;

function Yl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zc),
    (this.updater = n || Uc);
}

var bl = (Yl.prototype = new $c());
bl.constructor = Yl;
jc(bl, Zn.prototype);
bl.isPureReactComponent = !0;
var ea = Array.isArray,
  Bc = Object.prototype.hasOwnProperty,
  ql = { current: null },
  Wc = { key: !0, ref: !0, __self: !0, __source: !0 };

function Hc(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Bc.call(t, r) && !Wc.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Zr,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: ql.current,
  };
}

function im(e, t) {
  return {
    $$typeof: Zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}

function Xl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zr;
}

function sm(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}

var ta = /\/+/g;

function ts(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? sm('' + e.key)
    : t.toString(36);
}

function No(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Zr:
          case Qp:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + ts(s, 0) : r),
      ea(o)
        ? ((n = ''),
          e != null && (n = e.replace(ta, '$&/') + '/'),
          No(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (Xl(o) &&
            (o = im(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(ta, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), ea(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var u = r + ts(i, l);
      s += No(i, t, n, u, o);
    }
  else if (((u = om(e)), typeof u == 'function'))
    for (e = u.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + ts(i, l++)), (s += No(i, t, n, u, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}

function co(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    No(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}

function lm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}

var Se = { current: null },
  Ao = { transition: null },
  um = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Ao,
    ReactCurrentOwner: ql,
  };

function Gc() {
  throw Error('act(...) is not supported in production builds of React.');
}

M.Children = {
  map: co,
  forEach: function (e, t, n) {
    co(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      co(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      co(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xl(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
M.Component = Zn;
M.Fragment = Yp;
M.Profiler = qp;
M.PureComponent = Yl;
M.StrictMode = bp;
M.Suspense = tm;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = um;
M.act = Gc;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = jc({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = ql.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Bc.call(t, u) &&
        !Wc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: Zr, type: e.type, key: o, ref: i, props: r, _owner: s };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Xp, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Hc;
M.createFactory = function (e) {
  var t = Hc.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: em, render: e };
};
M.isValidElement = Xl;
M.lazy = function (e) {
  return { $$typeof: rm, _payload: { _status: -1, _result: e }, _init: lm };
};
M.memo = function (e, t) {
  return { $$typeof: nm, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Ao.transition;
  Ao.transition = {};
  try {
    e();
  } finally {
    Ao.transition = t;
  }
};
M.unstable_act = Gc;
M.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
M.useContext = function (e) {
  return Se.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
M.useId = function () {
  return Se.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return Se.current.useRef(e);
};
M.useState = function (e) {
  return Se.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return Se.current.useTransition();
};
M.version = '18.3.1';
Mc.exports = M;
var L = Mc.exports;
const be = Kp(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var am = L,
  cm = Symbol.for('react.element'),
  fm = Symbol.for('react.fragment'),
  dm = Object.prototype.hasOwnProperty,
  pm = am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  mm = { key: !0, ref: !0, __self: !0, __source: !0 };

function Vc(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) dm.call(t, r) && !mm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: cm,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: pm.current,
  };
}

xi.Fragment = fm;
xi.jsx = Vc;
xi.jsxs = Vc;
Fc.exports = xi;
var O = Fc.exports,
  Jc = { exports: {} },
  Me = {},
  Kc = { exports: {} },
  Qc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, N) {
    var A = x.length;
    x.push(N);
    e: for (; 0 < A; ) {
      var W = (A - 1) >>> 1,
        H = x[W];
      if (0 < o(H, N)) (x[W] = N), (x[A] = H), (A = W);
      else break e;
    }
  }

  function n(x) {
    return x.length === 0 ? null : x[0];
  }

  function r(x) {
    if (x.length === 0) return null;
    var N = x[0],
      A = x.pop();
    if (A !== N) {
      x[0] = A;
      e: for (var W = 0, H = x.length, bt = H >>> 1; W < bt; ) {
        var Ve = 2 * (W + 1) - 1,
          _t = x[Ve],
          Oe = Ve + 1,
          at = x[Oe];
        if (0 > o(_t, A))
          Oe < H && 0 > o(at, _t)
            ? ((x[W] = at), (x[Oe] = A), (W = Oe))
            : ((x[W] = _t), (x[Ve] = A), (W = Ve));
        else if (Oe < H && 0 > o(at, A)) (x[W] = at), (x[Oe] = A), (W = Oe);
        else break e;
      }
    }
    return N;
  }

  function o(x, N) {
    var A = x.sortIndex - N.sortIndex;
    return A !== 0 ? A : x.id - N.id;
  }

  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    a = [],
    f = 1,
    m = null,
    h = 3,
    S = !1,
    g = !1,
    v = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function p(x) {
    for (var N = n(a); N !== null; ) {
      if (N.callback === null) r(a);
      else if (N.startTime <= x)
        r(a), (N.sortIndex = N.expirationTime), t(u, N);
      else break;
      N = n(a);
    }
  }

  function w(x) {
    if (((v = !1), p(x), !g))
      if (n(u) !== null) (g = !0), ir(C);
      else {
        var N = n(a);
        N !== null && Yt(w, N.startTime - x);
      }
  }

  function C(x, N) {
    (g = !1), v && ((v = !1), d(T), (T = -1)), (S = !0);
    var A = h;
    try {
      for (
        p(N), m = n(u);
        m !== null && (!(m.expirationTime > N) || (x && !Te()));

      ) {
        var W = m.callback;
        if (typeof W == 'function') {
          (m.callback = null), (h = m.priorityLevel);
          var H = W(m.expirationTime <= N);
          (N = e.unstable_now()),
            typeof H == 'function' ? (m.callback = H) : m === n(u) && r(u),
            p(N);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var bt = !0;
      else {
        var Ve = n(a);
        Ve !== null && Yt(w, Ve.startTime - N), (bt = !1);
      }
      return bt;
    } finally {
      (m = null), (h = A), (S = !1);
    }
  }

  var P = !1,
    _ = null,
    T = -1,
    $ = 5,
    F = -1;

  function Te() {
    return !(e.unstable_now() - F < $);
  }

  function Kt() {
    if (_ !== null) {
      var x = e.unstable_now();
      F = x;
      var N = !0;
      try {
        N = _(!0, x);
      } finally {
        N ? Qt() : ((P = !1), (_ = null));
      }
    } else P = !1;
  }

  var Qt;
  if (typeof c == 'function')
    Qt = function () {
      c(Kt);
    };
  else if (typeof MessageChannel < 'u') {
    var lo = new MessageChannel(),
      Zi = lo.port2;
    (lo.port1.onmessage = Kt),
      (Qt = function () {
        Zi.postMessage(null);
      });
  } else
    Qt = function () {
      k(Kt, 0);
    };

  function ir(x) {
    (_ = x), P || ((P = !0), Qt());
  }

  function Yt(x, N) {
    T = k(function () {
      x(e.unstable_now());
    }, N);
  }

  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || S || ((g = !0), ir(C));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : ($ = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (x) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var A = h;
      h = N;
      try {
        return x();
      } finally {
        h = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, N) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var A = h;
      h = x;
      try {
        return N();
      } finally {
        h = A;
      }
    }),
    (e.unstable_scheduleCallback = function (x, N, A) {
      var W = e.unstable_now();
      switch (
        (typeof A == 'object' && A !== null
          ? ((A = A.delay), (A = typeof A == 'number' && 0 < A ? W + A : W))
          : (A = W),
        x)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = A + H),
        (x = {
          id: f++,
          callback: N,
          priorityLevel: x,
          startTime: A,
          expirationTime: H,
          sortIndex: -1,
        }),
        A > W
          ? ((x.sortIndex = A),
            t(a, x),
            n(u) === null &&
              x === n(a) &&
              (v ? (d(T), (T = -1)) : (v = !0), Yt(w, A - W)))
          : ((x.sortIndex = H), t(u, x), g || S || ((g = !0), ir(C))),
        x
      );
    }),
    (e.unstable_shouldYield = Te),
    (e.unstable_wrapCallback = function (x) {
      var N = h;
      return function () {
        var A = h;
        h = N;
        try {
          return x.apply(this, arguments);
        } finally {
          h = A;
        }
      };
    });
})(Qc);
Kc.exports = Qc;
var hm = Kc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gm = L,
  Fe = hm;

function E(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}

var Yc = new Set(),
  Ar = {};

function vn(e, t) {
  Wn(e, t), Wn(e + 'Capture', t);
}

function Wn(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) Yc.add(t[e]);
}

var gt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ms = Object.prototype.hasOwnProperty,
  ym =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  na = {},
  ra = {};

function vm(e) {
  return Ms.call(ra, e)
    ? !0
    : Ms.call(na, e)
      ? !1
      : ym.test(e)
        ? (ra[e] = !0)
        : ((na[e] = !0), !1);
}

function Sm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}

function wm(e, t, n, r) {
  if (t === null || typeof t > 'u' || Sm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}

function we(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}

var fe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  fe[e] = new we(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  fe[e] = new we(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  fe[e] = new we(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  fe[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zl = /[\-:]([a-z])/g;

function eu(e) {
  return e[1].toUpperCase();
}

'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zl, eu);
    fe[t] = new we(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zl, eu);
    fe[t] = new we(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Zl, eu);
  fe[t] = new we(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new we(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});

function tu(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (wm(t, n, o, r) && (n = null),
    r || o === null
      ? vm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}

var wt = gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fo = Symbol.for('react.element'),
  Cn = Symbol.for('react.portal'),
  Pn = Symbol.for('react.fragment'),
  nu = Symbol.for('react.strict_mode'),
  Us = Symbol.for('react.profiler'),
  bc = Symbol.for('react.provider'),
  qc = Symbol.for('react.context'),
  ru = Symbol.for('react.forward_ref'),
  js = Symbol.for('react.suspense'),
  zs = Symbol.for('react.suspense_list'),
  ou = Symbol.for('react.memo'),
  xt = Symbol.for('react.lazy'),
  Xc = Symbol.for('react.offscreen'),
  oa = Symbol.iterator;

function lr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (oa && e[oa]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}

var q = Object.assign,
  ns;

function gr(e) {
  if (ns === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ns = (t && t[1]) || '';
    }
  return (
    `
` +
    ns +
    e
  );
}

var rs = !1;

function os(e, t) {
  if (!e || rs) return '';
  rs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var u =
                  `
` + o[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (rs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? gr(e) : '';
}

function _m(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr('Lazy');
    case 13:
      return gr('Suspense');
    case 19:
      return gr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = os(e.type, !1)), e;
    case 11:
      return (e = os(e.type.render, !1)), e;
    case 1:
      return (e = os(e.type, !0)), e;
    default:
      return '';
  }
}

function $s(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Pn:
      return 'Fragment';
    case Cn:
      return 'Portal';
    case Us:
      return 'Profiler';
    case nu:
      return 'StrictMode';
    case js:
      return 'Suspense';
    case zs:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case qc:
        return (e.displayName || 'Context') + '.Consumer';
      case bc:
        return (e._context.displayName || 'Context') + '.Provider';
      case ru:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ou:
        return (
          (t = e.displayName || null), t !== null ? t : $s(e.type) || 'Memo'
        );
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return $s(e(t));
        } catch {}
    }
  return null;
}

function Cm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return $s(t);
    case 8:
      return t === nu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}

function Wt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}

function Zc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}

function Pm(e) {
  var t = Zc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = '' + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}

function po(e) {
  e._valueTracker || (e._valueTracker = Pm(e));
}

function ef(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Zc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}

function Yo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}

function Bs(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}

function ia(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}

function tf(e, t) {
  (t = t.checked), t != null && tu(e, 'checked', t, !1);
}

function Ws(e, t) {
  tf(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Hs(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Hs(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}

function sa(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}

function Hs(e, t, n) {
  (t !== 'number' || Yo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}

var yr = Array.isArray;

function Mn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Wt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}

function Gs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}

function la(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (yr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Wt(n) };
}

function nf(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}

function ua(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}

function rf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}

function Vs(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? rf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}

var mo,
  of = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        mo = mo || document.createElement('div'),
          mo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = mo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });

function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}

var _r = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Em = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(_r).forEach(function (e) {
  Em.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_r[t] = _r[e]);
  });
});

function sf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (_r.hasOwnProperty(e) && _r[e])
      ? ('' + t).trim()
      : t + 'px';
}

function lf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = sf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}

var km = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);

function Js(e, t) {
  if (t) {
    if (km[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(E(62));
  }
}

function Ks(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}

var Qs = null;

function iu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}

var Ys = null,
  Un = null,
  jn = null;

function aa(e) {
  if ((e = no(e))) {
    if (typeof Ys != 'function') throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Ai(t)), Ys(e.stateNode, e.type, t));
  }
}

function uf(e) {
  Un ? (jn ? jn.push(e) : (jn = [e])) : (Un = e);
}

function af() {
  if (Un) {
    var e = Un,
      t = jn;
    if (((jn = Un = null), aa(e), t)) for (e = 0; e < t.length; e++) aa(t[e]);
  }
}

function cf(e, t) {
  return e(t);
}

function ff() {}

var is = !1;

function df(e, t, n) {
  if (is) return e(t, n);
  is = !0;
  try {
    return cf(e, t, n);
  } finally {
    (is = !1), (Un !== null || jn !== null) && (ff(), af());
  }
}

function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ai(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(E(231, t, typeof n));
  return n;
}

var bs = !1;
if (gt)
  try {
    var ur = {};
    Object.defineProperty(ur, 'passive', {
      get: function () {
        bs = !0;
      },
    }),
      window.addEventListener('test', ur, ur),
      window.removeEventListener('test', ur, ur);
  } catch {
    bs = !1;
  }

function xm(e, t, n, r, o, i, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}

var Cr = !1,
  bo = null,
  qo = !1,
  qs = null,
  Rm = {
    onError: function (e) {
      (Cr = !0), (bo = e);
    },
  };

function Tm(e, t, n, r, o, i, s, l, u) {
  (Cr = !1), (bo = null), xm.apply(Rm, arguments);
}

function Om(e, t, n, r, o, i, s, l, u) {
  if ((Tm.apply(this, arguments), Cr)) {
    if (Cr) {
      var a = bo;
      (Cr = !1), (bo = null);
    } else throw Error(E(198));
    qo || ((qo = !0), (qs = a));
  }
}

function Sn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}

function pf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}

function ca(e) {
  if (Sn(e) !== e) throw Error(E(188));
}

function Nm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ca(o), e;
        if (i === r) return ca(o), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}

function mf(e) {
  return (e = Nm(e)), e !== null ? hf(e) : null;
}

function hf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}

var gf = Fe.unstable_scheduleCallback,
  fa = Fe.unstable_cancelCallback,
  Am = Fe.unstable_shouldYield,
  Dm = Fe.unstable_requestPaint,
  Z = Fe.unstable_now,
  Im = Fe.unstable_getCurrentPriorityLevel,
  su = Fe.unstable_ImmediatePriority,
  yf = Fe.unstable_UserBlockingPriority,
  Xo = Fe.unstable_NormalPriority,
  Lm = Fe.unstable_LowPriority,
  vf = Fe.unstable_IdlePriority,
  Ri = null,
  lt = null;

function Fm(e) {
  if (lt && typeof lt.onCommitFiberRoot == 'function')
    try {
      lt.onCommitFiberRoot(Ri, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}

var qe = Math.clz32 ? Math.clz32 : jm,
  Mm = Math.log,
  Um = Math.LN2;

function jm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mm(e) / Um) | 0)) | 0;
}

var ho = 64,
  go = 4194304;

function vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}

function Zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = vr(l)) : ((i &= s), i !== 0 && (r = vr(i)));
  } else (s = n & ~o), s !== 0 ? (r = vr(s)) : i !== 0 && (r = vr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}

function zm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}

function $m(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - qe(i),
      l = 1 << s,
      u = o[s];
    u === -1
      ? (!(l & n) || l & r) && (o[s] = zm(l, t))
      : u <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}

function Xs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}

function Sf() {
  var e = ho;
  return (ho <<= 1), !(ho & 4194240) && (ho = 64), e;
}

function ss(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}

function eo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}

function Bm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - qe(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}

function lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}

var B = 0;

function wf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}

var _f,
  uu,
  Cf,
  Pf,
  Ef,
  Zs = !1,
  yo = [],
  It = null,
  Lt = null,
  Ft = null,
  Lr = new Map(),
  Fr = new Map(),
  Ot = [],
  Wm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );

function da(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      It = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Lt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Ft = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Lr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Fr.delete(t.pointerId);
  }
}

function ar(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = no(t)), t !== null && uu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}

function Hm(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (It = ar(It, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Lt = ar(Lt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Ft = ar(Ft, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Lr.set(i, ar(Lr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Fr.set(i, ar(Fr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}

function kf(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pf(n)), t !== null)) {
          (e.blockedOn = t),
            Ef(e.priority, function () {
              Cf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}

function Do(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = el(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Qs = r), n.target.dispatchEvent(r), (Qs = null);
    } else return (t = no(n)), t !== null && uu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}

function pa(e, t, n) {
  Do(e) && n.delete(t);
}

function Gm() {
  (Zs = !1),
    It !== null && Do(It) && (It = null),
    Lt !== null && Do(Lt) && (Lt = null),
    Ft !== null && Do(Ft) && (Ft = null),
    Lr.forEach(pa),
    Fr.forEach(pa);
}

function cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zs ||
      ((Zs = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Gm)));
}

function Mr(e) {
  function t(o) {
    return cr(o, e);
  }

  if (0 < yo.length) {
    cr(yo[0], e);
    for (var n = 1; n < yo.length; n++) {
      var r = yo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && cr(It, e),
      Lt !== null && cr(Lt, e),
      Ft !== null && cr(Ft, e),
      Lr.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < Ot.length;
    n++
  )
    (r = Ot[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
    kf(n), n.blockedOn === null && Ot.shift();
}

var zn = wt.ReactCurrentBatchConfig,
  ei = !0;

function Vm(e, t, n, r) {
  var o = B,
    i = zn.transition;
  zn.transition = null;
  try {
    (B = 1), au(e, t, n, r);
  } finally {
    (B = o), (zn.transition = i);
  }
}

function Jm(e, t, n, r) {
  var o = B,
    i = zn.transition;
  zn.transition = null;
  try {
    (B = 4), au(e, t, n, r);
  } finally {
    (B = o), (zn.transition = i);
  }
}

function au(e, t, n, r) {
  if (ei) {
    var o = el(e, t, n, r);
    if (o === null) gs(e, t, r, ti, n), da(e, r);
    else if (Hm(o, e, t, n, r)) r.stopPropagation();
    else if ((da(e, r), t & 4 && -1 < Wm.indexOf(e))) {
      for (; o !== null; ) {
        var i = no(o);
        if (
          (i !== null && _f(i),
          (i = el(e, t, n, r)),
          i === null && gs(e, t, r, ti, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else gs(e, t, r, null, n);
  }
}

var ti = null;

function el(e, t, n, r) {
  if (((ti = null), (e = iu(r)), (e = en(e)), e !== null))
    if (((t = Sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ti = e), null;
}

function xf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Im()) {
        case su:
          return 1;
        case yf:
          return 4;
        case Xo:
        case Lm:
          return 16;
        case vf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}

var At = null,
  cu = null,
  Io = null;

function Rf() {
  if (Io) return Io;
  var e,
    t = cu,
    n = t.length,
    r,
    o = 'value' in At ? At.value : At.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Io = o.slice(e, 1 < r ? 1 - r : void 0));
}

function Lo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}

function vo() {
  return !0;
}

function ma() {
  return !1;
}

function Ue(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? vo
        : ma),
      (this.isPropagationStopped = ma),
      this
    );
  }

  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = vo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = vo));
      },
      persist: function () {},
      isPersistent: vo,
    }),
    t
  );
}

var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fu = Ue(er),
  to = q({}, er, { view: 0, detail: 0 }),
  Km = Ue(to),
  ls,
  us,
  fr,
  Ti = q({}, to, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: du,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== fr &&
            (fr && e.type === 'mousemove'
              ? ((ls = e.screenX - fr.screenX), (us = e.screenY - fr.screenY))
              : (us = ls = 0),
            (fr = e)),
          ls);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : us;
    },
  }),
  ha = Ue(Ti),
  Qm = q({}, Ti, { dataTransfer: 0 }),
  Ym = Ue(Qm),
  bm = q({}, to, { relatedTarget: 0 }),
  as = Ue(bm),
  qm = q({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xm = Ue(qm),
  Zm = q({}, er, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  eh = Ue(Zm),
  th = q({}, er, { data: 0 }),
  ga = Ue(th),
  nh = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  rh = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  oh = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };

function ih(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = oh[e]) ? !!t[e] : !1;
}

function du() {
  return ih;
}

var sh = q({}, to, {
    key: function (e) {
      if (e.key) {
        var t = nh[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Lo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? rh[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: du,
    charCode: function (e) {
      return e.type === 'keypress' ? Lo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Lo(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  lh = Ue(sh),
  uh = q({}, Ti, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ya = Ue(uh),
  ah = q({}, to, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: du,
  }),
  ch = Ue(ah),
  fh = q({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dh = Ue(fh),
  ph = q({}, Ti, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mh = Ue(ph),
  hh = [9, 13, 27, 32],
  pu = gt && 'CompositionEvent' in window,
  Pr = null;
gt && 'documentMode' in document && (Pr = document.documentMode);
var gh = gt && 'TextEvent' in window && !Pr,
  Tf = gt && (!pu || (Pr && 8 < Pr && 11 >= Pr)),
  va = ' ',
  Sa = !1;

function Of(e, t) {
  switch (e) {
    case 'keyup':
      return hh.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}

function Nf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}

var En = !1;

function yh(e, t) {
  switch (e) {
    case 'compositionend':
      return Nf(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Sa = !0), va);
    case 'textInput':
      return (e = t.data), e === va && Sa ? null : e;
    default:
      return null;
  }
}

function vh(e, t) {
  if (En)
    return e === 'compositionend' || (!pu && Of(e, t))
      ? ((e = Rf()), (Io = cu = At = null), (En = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Tf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}

var Sh = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};

function wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Sh[e.type] : t === 'textarea';
}

function Af(e, t, n, r) {
  uf(r),
    (t = ni(t, 'onChange')),
    0 < t.length &&
      ((n = new fu('onChange', 'change', null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}

var Er = null,
  Ur = null;

function wh(e) {
  Wf(e, 0);
}

function Oi(e) {
  var t = Rn(e);
  if (ef(t)) return e;
}

function _h(e, t) {
  if (e === 'change') return t;
}

var Df = !1;
if (gt) {
  var cs;
  if (gt) {
    var fs = 'oninput' in document;
    if (!fs) {
      var _a = document.createElement('div');
      _a.setAttribute('oninput', 'return;'),
        (fs = typeof _a.oninput == 'function');
    }
    cs = fs;
  } else cs = !1;
  Df = cs && (!document.documentMode || 9 < document.documentMode);
}

function Ca() {
  Er && (Er.detachEvent('onpropertychange', If), (Ur = Er = null));
}

function If(e) {
  if (e.propertyName === 'value' && Oi(Ur)) {
    var t = [];
    Af(t, Ur, e, iu(e)), df(wh, t);
  }
}

function Ch(e, t, n) {
  e === 'focusin'
    ? (Ca(), (Er = t), (Ur = n), Er.attachEvent('onpropertychange', If))
    : e === 'focusout' && Ca();
}

function Ph(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Oi(Ur);
}

function Eh(e, t) {
  if (e === 'click') return Oi(t);
}

function kh(e, t) {
  if (e === 'input' || e === 'change') return Oi(t);
}

function xh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}

var et = typeof Object.is == 'function' ? Object.is : xh;

function jr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ms.call(t, o) || !et(e[o], t[o])) return !1;
  }
  return !0;
}

function Pa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}

function Ea(e, t) {
  var n = Pa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Pa(n);
  }
}

function Lf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Lf(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}

function Ff() {
  for (var e = window, t = Yo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yo(e.document);
  }
  return t;
}

function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}

function Rh(e) {
  var t = Ff(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && mu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ea(n, i));
        var s = Ea(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}

var Th = gt && 'documentMode' in document && 11 >= document.documentMode,
  kn = null,
  tl = null,
  kr = null,
  nl = !1;

function ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nl ||
    kn == null ||
    kn !== Yo(r) ||
    ((r = kn),
    'selectionStart' in r && mu(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (kr && jr(kr, r)) ||
      ((kr = r),
      (r = ni(tl, 'onSelect')),
      0 < r.length &&
        ((t = new fu('onSelect', 'select', null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = kn))));
}

function So(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}

var xn = {
    animationend: So('Animation', 'AnimationEnd'),
    animationiteration: So('Animation', 'AnimationIteration'),
    animationstart: So('Animation', 'AnimationStart'),
    transitionend: So('Transition', 'TransitionEnd'),
  },
  ds = {},
  Mf = {};
gt &&
  ((Mf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete xn.animationend.animation,
    delete xn.animationiteration.animation,
    delete xn.animationstart.animation),
  'TransitionEvent' in window || delete xn.transitionend.transition);

function Ni(e) {
  if (ds[e]) return ds[e];
  if (!xn[e]) return e;
  var t = xn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mf) return (ds[e] = t[n]);
  return e;
}

var Uf = Ni('animationend'),
  jf = Ni('animationiteration'),
  zf = Ni('animationstart'),
  $f = Ni('transitionend'),
  Bf = new Map(),
  xa =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );

function Gt(e, t) {
  Bf.set(e, t), vn(t, [e]);
}

for (var ps = 0; ps < xa.length; ps++) {
  var ms = xa[ps],
    Oh = ms.toLowerCase(),
    Nh = ms[0].toUpperCase() + ms.slice(1);
  Gt(Oh, 'on' + Nh);
}
Gt(Uf, 'onAnimationEnd');
Gt(jf, 'onAnimationIteration');
Gt(zf, 'onAnimationStart');
Gt('dblclick', 'onDoubleClick');
Gt('focusin', 'onFocus');
Gt('focusout', 'onBlur');
Gt($f, 'onTransitionEnd');
Wn('onMouseEnter', ['mouseout', 'mouseover']);
Wn('onMouseLeave', ['mouseout', 'mouseover']);
Wn('onPointerEnter', ['pointerout', 'pointerover']);
Wn('onPointerLeave', ['pointerout', 'pointerover']);
vn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
vn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
vn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
vn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
vn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
vn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Sr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Ah = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Sr));

function Ra(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Om(r, t, void 0, e), (e.currentTarget = null);
}

function Wf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), u !== i && o.isPropagationStopped())) break e;
          Ra(o, l, a), (i = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          Ra(o, l, a), (i = u);
        }
    }
  }
  if (qo) throw ((e = qs), (qo = !1), (qs = null), e);
}

function V(e, t) {
  var n = t[ll];
  n === void 0 && (n = t[ll] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Hf(t, e, 2, !1), n.add(r));
}

function hs(e, t, n) {
  var r = 0;
  t && (r |= 4), Hf(n, e, r, t);
}

var wo = '_reactListening' + Math.random().toString(36).slice(2);

function zr(e) {
  if (!e[wo]) {
    (e[wo] = !0),
      Yc.forEach(function (n) {
        n !== 'selectionchange' && (Ah.has(n) || hs(n, !1, e), hs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wo] || ((t[wo] = !0), hs('selectionchange', !1, t));
  }
}

function Hf(e, t, n, r) {
  switch (xf(t)) {
    case 1:
      var o = Vm;
      break;
    case 4:
      o = Jm;
      break;
    default:
      o = au;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !bs ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: o,
          })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}

function gs(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = en(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  df(function () {
    var a = i,
      f = iu(n),
      m = [];
    e: {
      var h = Bf.get(e);
      if (h !== void 0) {
        var S = fu,
          g = e;
        switch (e) {
          case 'keypress':
            if (Lo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = lh;
            break;
          case 'focusin':
            (g = 'focus'), (S = as);
            break;
          case 'focusout':
            (g = 'blur'), (S = as);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = as;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            S = ha;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = Ym;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = ch;
            break;
          case Uf:
          case jf:
          case zf:
            S = Xm;
            break;
          case $f:
            S = dh;
            break;
          case 'scroll':
            S = Km;
            break;
          case 'wheel':
            S = mh;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = eh;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = ya;
        }
        var v = (t & 4) !== 0,
          k = !v && e === 'scroll',
          d = v ? (h !== null ? h + 'Capture' : null) : h;
        v = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              d !== null && ((w = Ir(c, d)), w != null && v.push($r(c, w, p)))),
            k)
          )
            break;
          c = c.return;
        }
        0 < v.length &&
          ((h = new S(h, g, null, n, f)), m.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== Qs &&
            (g = n.relatedTarget || n.fromElement) &&
            (en(g) || g[yt]))
        )
          break e;
        if (
          (S || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          S
            ? ((g = n.relatedTarget || n.toElement),
              (S = a),
              (g = g ? en(g) : null),
              g !== null &&
                ((k = Sn(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((S = null), (g = a)),
          S !== g)
        ) {
          if (
            ((v = ha),
            (w = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = ya),
              (w = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (k = S == null ? h : Rn(S)),
            (p = g == null ? h : Rn(g)),
            (h = new v(w, c + 'leave', S, n, f)),
            (h.target = k),
            (h.relatedTarget = p),
            (w = null),
            en(f) === a &&
              ((v = new v(d, c + 'enter', g, n, f)),
              (v.target = p),
              (v.relatedTarget = k),
              (w = v)),
            (k = w),
            S && g)
          )
            t: {
              for (v = S, d = g, c = 0, p = v; p; p = wn(p)) c++;
              for (p = 0, w = d; w; w = wn(w)) p++;
              for (; 0 < c - p; ) (v = wn(v)), c--;
              for (; 0 < p - c; ) (d = wn(d)), p--;
              for (; c--; ) {
                if (v === d || (d !== null && v === d.alternate)) break t;
                (v = wn(v)), (d = wn(d));
              }
              v = null;
            }
          else v = null;
          S !== null && Ta(m, h, S, v, !1),
            g !== null && k !== null && Ta(m, k, g, v, !0);
        }
      }
      e: {
        if (
          ((h = a ? Rn(a) : window),
          (S = h.nodeName && h.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && h.type === 'file'))
        )
          var C = _h;
        else if (wa(h))
          if (Df) C = kh;
          else {
            C = Ph;
            var P = Ch;
          }
        else
          (S = h.nodeName) &&
            S.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (C = Eh);
        if (C && (C = C(e, a))) {
          Af(m, C, n, f);
          break e;
        }
        P && P(e, h, a),
          e === 'focusout' &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === 'number' &&
            Hs(h, 'number', h.value);
      }
      switch (((P = a ? Rn(a) : window), e)) {
        case 'focusin':
          (wa(P) || P.contentEditable === 'true') &&
            ((kn = P), (tl = a), (kr = null));
          break;
        case 'focusout':
          kr = tl = kn = null;
          break;
        case 'mousedown':
          nl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (nl = !1), ka(m, n, f);
          break;
        case 'selectionchange':
          if (Th) break;
        case 'keydown':
        case 'keyup':
          ka(m, n, f);
      }
      var _;
      if (pu)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        En
          ? Of(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Tf &&
          n.locale !== 'ko' &&
          (En || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && En && (_ = Rf())
            : ((At = f),
              (cu = 'value' in At ? At.value : At.textContent),
              (En = !0))),
        (P = ni(a, T)),
        0 < P.length &&
          ((T = new ga(T, e, null, n, f)),
          m.push({
            event: T,
            listeners: P,
          }),
          _ ? (T.data = _) : ((_ = Nf(n)), _ !== null && (T.data = _)))),
        (_ = gh ? yh(e, n) : vh(e, n)) &&
          ((a = ni(a, 'onBeforeInput')),
          0 < a.length &&
            ((f = new ga('onBeforeInput', 'beforeinput', null, n, f)),
            m.push({
              event: f,
              listeners: a,
            }),
            (f.data = _)));
    }
    Wf(m, t);
  });
}

function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}

function ni(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ir(e, n)),
      i != null && r.unshift($r(e, i, o)),
      (i = Ir(e, t)),
      i != null && r.push($r(e, i, o))),
      (e = e.return);
  }
  return r;
}

function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}

function Ta(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      o
        ? ((u = Ir(n, i)), u != null && s.unshift($r(n, u, l)))
        : o || ((u = Ir(n, i)), u != null && s.push($r(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}

var Dh = /\r\n?/g,
  Ih = /\u0000|\uFFFD/g;

function Oa(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Dh,
      `
`
    )
    .replace(Ih, '');
}

function _o(e, t, n) {
  if (((t = Oa(t)), Oa(e) !== t && n)) throw Error(E(425));
}

function ri() {}

var rl = null,
  ol = null;

function il(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}

var sl = typeof setTimeout == 'function' ? setTimeout : void 0,
  Lh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Na = typeof Promise == 'function' ? Promise : void 0,
  Fh =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Na < 'u'
        ? function (e) {
            return Na.resolve(null).then(e).catch(Mh);
          }
        : sl;

function Mh(e) {
  setTimeout(function () {
    throw e;
  });
}

function ys(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Mr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Mr(t);
}

function Mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}

function Aa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}

var tr = Math.random().toString(36).slice(2),
  st = '__reactFiber$' + tr,
  Br = '__reactProps$' + tr,
  yt = '__reactContainer$' + tr,
  ll = '__reactEvents$' + tr,
  Uh = '__reactListeners$' + tr,
  jh = '__reactHandles$' + tr;

function en(e) {
  var t = e[st];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yt] || n[st])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Aa(e); e !== null; ) {
          if ((n = e[st])) return n;
          e = Aa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}

function no(e) {
  return (
    (e = e[st] || e[yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}

function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}

function Ai(e) {
  return e[Br] || null;
}

var ul = [],
  Tn = -1;

function Vt(e) {
  return { current: e };
}

function K(e) {
  0 > Tn || ((e.current = ul[Tn]), (ul[Tn] = null), Tn--);
}

function G(e, t) {
  Tn++, (ul[Tn] = e.current), (e.current = t);
}

var Ht = {},
  ge = Vt(Ht),
  Pe = Vt(!1),
  cn = Ht;

function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}

function Ee(e) {
  return (e = e.childContextTypes), e != null;
}

function oi() {
  K(Pe), K(ge);
}

function Da(e, t, n) {
  if (ge.current !== Ht) throw Error(E(168));
  G(ge, t), G(Pe, n);
}

function Gf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, Cm(e) || 'Unknown', o));
  return q({}, n, r);
}

function ii(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (cn = ge.current),
    G(ge, e),
    G(Pe, Pe.current),
    !0
  );
}

function Ia(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Gf(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Pe),
      K(ge),
      G(ge, e))
    : K(Pe),
    G(Pe, n);
}

var dt = null,
  Di = !1,
  vs = !1;

function Vf(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}

function zh(e) {
  (Di = !0), Vf(e);
}

function Jt() {
  if (!vs && dt !== null) {
    vs = !0;
    var e = 0,
      t = B;
    try {
      var n = dt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dt = null), (Di = !1);
    } catch (o) {
      throw (dt !== null && (dt = dt.slice(e + 1)), gf(su, Jt), o);
    } finally {
      (B = t), (vs = !1);
    }
  }
  return null;
}

var On = [],
  Nn = 0,
  si = null,
  li = 0,
  je = [],
  ze = 0,
  fn = null,
  pt = 1,
  mt = '';

function Xt(e, t) {
  (On[Nn++] = li), (On[Nn++] = si), (si = e), (li = t);
}

function Jf(e, t, n) {
  (je[ze++] = pt), (je[ze++] = mt), (je[ze++] = fn), (fn = e);
  var r = pt;
  e = mt;
  var o = 32 - qe(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - qe(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (pt = (1 << (32 - qe(t) + o)) | (n << o) | r),
      (mt = i + e);
  } else (pt = (1 << i) | (n << o) | r), (mt = e);
}

function hu(e) {
  e.return !== null && (Xt(e, 1), Jf(e, 1, 0));
}

function gu(e) {
  for (; e === si; )
    (si = On[--Nn]), (On[Nn] = null), (li = On[--Nn]), (On[Nn] = null);
  for (; e === fn; )
    (fn = je[--ze]),
      (je[ze] = null),
      (mt = je[--ze]),
      (je[ze] = null),
      (pt = je[--ze]),
      (je[ze] = null);
}

var Ie = null,
  De = null,
  Q = !1,
  Ye = null;

function Kf(e, t) {
  var n = $e(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}

function La(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (De = Mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              fn !== null
                ? {
                    id: pt,
                    overflow: mt,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}

function al(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}

function cl(e) {
  if (Q) {
    var t = De;
    if (t) {
      var n = t;
      if (!La(e, t)) {
        if (al(e)) throw Error(E(418));
        t = Mt(n.nextSibling);
        var r = Ie;
        t && La(e, t)
          ? Kf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ie = e));
      }
    } else {
      if (al(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Ie = e);
    }
  }
}

function Fa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}

function Co(e) {
  if (e !== Ie) return !1;
  if (!Q) return Fa(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !il(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (al(e)) throw (Qf(), Error(E(418)));
    for (; t; ) Kf(e, t), (t = Mt(t.nextSibling));
  }
  if ((Fa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              De = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Ie ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}

function Qf() {
  for (var e = De; e; ) e = Mt(e.nextSibling);
}

function Gn() {
  (De = Ie = null), (Q = !1);
}

function yu(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}

var $h = wt.ReactCurrentBatchConfig;

function dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}

function Po(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}

function Ma(e) {
  var t = e._init;
  return t(e._payload);
}

function Yf(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
    }
  }

  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }

  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }

  function o(d, c) {
    return (d = $t(d, c)), (d.index = 0), (d.sibling = null), d;
  }

  function i(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }

  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }

  function l(d, c, p, w) {
    return c === null || c.tag !== 6
      ? ((c = ks(p, d.mode, w)), (c.return = d), c)
      : ((c = o(c, p)), (c.return = d), c);
  }

  function u(d, c, p, w) {
    var C = p.type;
    return C === Pn
      ? f(d, c, p.props.children, w, p.key)
      : c !== null &&
          (c.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === xt &&
              Ma(C) === c.type))
        ? ((w = o(c, p.props)), (w.ref = dr(d, c, p)), (w.return = d), w)
        : ((w = Bo(p.type, p.key, p.props, null, d.mode, w)),
          (w.ref = dr(d, c, p)),
          (w.return = d),
          w);
  }

  function a(d, c, p, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = xs(p, d.mode, w)), (c.return = d), c)
      : ((c = o(c, p.children || [])), (c.return = d), c);
  }

  function f(d, c, p, w, C) {
    return c === null || c.tag !== 7
      ? ((c = ln(p, d.mode, w, C)), (c.return = d), c)
      : ((c = o(c, p)), (c.return = d), c);
  }

  function m(d, c, p) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = ks('' + c, d.mode, p)), (c.return = d), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case fo:
          return (
            (p = Bo(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = dr(d, null, c)),
            (p.return = d),
            p
          );
        case Cn:
          return (c = xs(c, d.mode, p)), (c.return = d), c;
        case xt:
          var w = c._init;
          return m(d, w(c._payload), p);
      }
      if (yr(c) || lr(c))
        return (c = ln(c, d.mode, p, null)), (c.return = d), c;
      Po(d, c);
    }
    return null;
  }

  function h(d, c, p, w) {
    var C = c !== null ? c.key : null;
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return C !== null ? null : l(d, c, '' + p, w);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case fo:
          return p.key === C ? u(d, c, p, w) : null;
        case Cn:
          return p.key === C ? a(d, c, p, w) : null;
        case xt:
          return (C = p._init), h(d, c, C(p._payload), w);
      }
      if (yr(p) || lr(p)) return C !== null ? null : f(d, c, p, w, null);
      Po(d, p);
    }
    return null;
  }

  function S(d, c, p, w, C) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (d = d.get(p) || null), l(c, d, '' + w, C);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case fo:
          return (d = d.get(w.key === null ? p : w.key) || null), u(c, d, w, C);
        case Cn:
          return (d = d.get(w.key === null ? p : w.key) || null), a(c, d, w, C);
        case xt:
          var P = w._init;
          return S(d, c, p, P(w._payload), C);
      }
      if (yr(w) || lr(w)) return (d = d.get(p) || null), f(c, d, w, C, null);
      Po(c, w);
    }
    return null;
  }

  function g(d, c, p, w) {
    for (
      var C = null, P = null, _ = c, T = (c = 0), $ = null;
      _ !== null && T < p.length;
      T++
    ) {
      _.index > T ? (($ = _), (_ = null)) : ($ = _.sibling);
      var F = h(d, _, p[T], w);
      if (F === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && F.alternate === null && t(d, _),
        (c = i(F, c, T)),
        P === null ? (C = F) : (P.sibling = F),
        (P = F),
        (_ = $);
    }
    if (T === p.length) return n(d, _), Q && Xt(d, T), C;
    if (_ === null) {
      for (; T < p.length; T++)
        (_ = m(d, p[T], w)),
          _ !== null &&
            ((c = i(_, c, T)), P === null ? (C = _) : (P.sibling = _), (P = _));
      return Q && Xt(d, T), C;
    }
    for (_ = r(d, _); T < p.length; T++)
      ($ = S(_, d, T, p[T], w)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? T : $.key),
          (c = i($, c, T)),
          P === null ? (C = $) : (P.sibling = $),
          (P = $));
    return (
      e &&
        _.forEach(function (Te) {
          return t(d, Te);
        }),
      Q && Xt(d, T),
      C
    );
  }

  function v(d, c, p, w) {
    var C = lr(p);
    if (typeof C != 'function') throw Error(E(150));
    if (((p = C.call(p)), p == null)) throw Error(E(151));
    for (
      var P = (C = null), _ = c, T = (c = 0), $ = null, F = p.next();
      _ !== null && !F.done;
      T++, F = p.next()
    ) {
      _.index > T ? (($ = _), (_ = null)) : ($ = _.sibling);
      var Te = h(d, _, F.value, w);
      if (Te === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && Te.alternate === null && t(d, _),
        (c = i(Te, c, T)),
        P === null ? (C = Te) : (P.sibling = Te),
        (P = Te),
        (_ = $);
    }
    if (F.done) return n(d, _), Q && Xt(d, T), C;
    if (_ === null) {
      for (; !F.done; T++, F = p.next())
        (F = m(d, F.value, w)),
          F !== null &&
            ((c = i(F, c, T)), P === null ? (C = F) : (P.sibling = F), (P = F));
      return Q && Xt(d, T), C;
    }
    for (_ = r(d, _); !F.done; T++, F = p.next())
      (F = S(_, d, T, F.value, w)),
        F !== null &&
          (e && F.alternate !== null && _.delete(F.key === null ? T : F.key),
          (c = i(F, c, T)),
          P === null ? (C = F) : (P.sibling = F),
          (P = F));
    return (
      e &&
        _.forEach(function (Kt) {
          return t(d, Kt);
        }),
      Q && Xt(d, T),
      C
    );
  }

  function k(d, c, p, w) {
    if (
      (typeof p == 'object' &&
        p !== null &&
        p.type === Pn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case fo:
          e: {
            for (var C = p.key, P = c; P !== null; ) {
              if (P.key === C) {
                if (((C = p.type), C === Pn)) {
                  if (P.tag === 7) {
                    n(d, P.sibling),
                      (c = o(P, p.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === xt &&
                    Ma(C) === P.type)
                ) {
                  n(d, P.sibling),
                    (c = o(P, p.props)),
                    (c.ref = dr(d, P, p)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            p.type === Pn
              ? ((c = ln(p.props.children, d.mode, w, p.key)),
                (c.return = d),
                (d = c))
              : ((w = Bo(p.type, p.key, p.props, null, d.mode, w)),
                (w.ref = dr(d, c, p)),
                (w.return = d),
                (d = w));
          }
          return s(d);
        case Cn:
          e: {
            for (P = p.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, p.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = xs(p, d.mode, w)), (c.return = d), (d = c);
          }
          return s(d);
        case xt:
          return (P = p._init), k(d, c, P(p._payload), w);
      }
      if (yr(p)) return g(d, c, p, w);
      if (lr(p)) return v(d, c, p, w);
      Po(d, p);
    }
    return (typeof p == 'string' && p !== '') || typeof p == 'number'
      ? ((p = '' + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = ks(p, d.mode, w)), (c.return = d), (d = c)),
        s(d))
      : n(d, c);
  }

  return k;
}

var Vn = Yf(!0),
  bf = Yf(!1),
  ui = Vt(null),
  ai = null,
  An = null,
  vu = null;

function Su() {
  vu = An = ai = null;
}

function wu(e) {
  var t = ui.current;
  K(ui), (e._currentValue = t);
}

function fl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}

function $n(e, t) {
  (ai = e),
    (vu = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}

function We(e) {
  var t = e._currentValue;
  if (vu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (ai === null) throw Error(E(308));
      (An = e), (ai.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}

var tn = null;

function _u(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}

function qf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), _u(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    vt(e, r)
  );
}

function vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}

var Rt = !1;

function Cu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}

function Xf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}

function ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}

function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      vt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), _u(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    vt(e, n)
  );
}

function Fo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}

function Ua(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}

function ci(e, t, n, r) {
  var o = e.updateQueue;
  Rt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var u = l,
      a = u.next;
    (u.next = null), s === null ? (i = a) : (s.next = a), (s = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== s &&
        (l === null ? (f.firstBaseUpdate = a) : (l.next = a),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var m = o.baseState;
    (s = 0), (f = a = u = null), (l = i);
    do {
      var h = l.lane,
        S = l.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: S,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            v = l;
          switch (((h = t), (S = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == 'function')) {
                m = g.call(S, m, h);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (h = typeof g == 'function' ? g.call(S, m, h) : g),
                h == null)
              )
                break e;
              m = q({}, m, h);
              break e;
            case 2:
              Rt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (S = {
          eventTime: S,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((a = f = S), (u = m)) : (f = f.next = S),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = m),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (pn |= s), (e.lanes = s), (e.memoizedState = m);
  }
}

function ja(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}

var ro = {},
  ut = Vt(ro),
  Wr = Vt(ro),
  Hr = Vt(ro);

function nn(e) {
  if (e === ro) throw Error(E(174));
  return e;
}

function Pu(e, t) {
  switch ((G(Hr, t), G(Wr, e), G(ut, ro), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vs(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vs(t, e));
  }
  K(ut), G(ut, t);
}

function Jn() {
  K(ut), K(Wr), K(Hr);
}

function Zf(e) {
  nn(Hr.current);
  var t = nn(ut.current),
    n = Vs(t, e.type);
  t !== n && (G(Wr, e), G(ut, n));
}

function Eu(e) {
  Wr.current === e && (K(ut), K(Wr));
}

var Y = Vt(0);

function fi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}

var Ss = [];

function ku() {
  for (var e = 0; e < Ss.length; e++)
    Ss[e]._workInProgressVersionPrimary = null;
  Ss.length = 0;
}

var Mo = wt.ReactCurrentDispatcher,
  ws = wt.ReactCurrentBatchConfig,
  dn = 0,
  b = null,
  re = null,
  ie = null,
  di = !1,
  xr = !1,
  Gr = 0,
  Bh = 0;

function de() {
  throw Error(E(321));
}

function xu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}

function Ru(e, t, n, r, o, i) {
  if (
    ((dn = i),
    (b = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mo.current = e === null || e.memoizedState === null ? Vh : Jh),
    (e = n(r, o)),
    xr)
  ) {
    i = 0;
    do {
      if (((xr = !1), (Gr = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (ie = re = null),
        (t.updateQueue = null),
        (Mo.current = Kh),
        (e = n(r, o));
    } while (xr);
  }
  if (
    ((Mo.current = pi),
    (t = re !== null && re.next !== null),
    (dn = 0),
    (ie = re = b = null),
    (di = !1),
    t)
  )
    throw Error(E(300));
  return e;
}

function Tu() {
  var e = Gr !== 0;
  return (Gr = 0), e;
}

function rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (b.memoizedState = ie = e) : (ie = ie.next = e), ie;
}

function He() {
  if (re === null) {
    var e = b.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = ie === null ? b.memoizedState : ie.next;
  if (t !== null) (ie = t), (re = e);
  else {
    if (e === null) throw Error(E(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      ie === null ? (b.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}

function Vr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}

function _s(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = re,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      a = i;
    do {
      var f = a.lane;
      if ((dn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((l = u = m), (s = r)) : (u = u.next = m),
          (b.lanes |= f),
          (pn |= f);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (s = r) : (u.next = l),
      et(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (b.lanes |= i), (pn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}

function Cs(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    et(i, t.memoizedState) || (Ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}

function ed() {}

function td(e, t) {
  var n = b,
    r = He(),
    o = t(),
    i = !et(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ce = !0)),
    (r = r.queue),
    Ou(od.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jr(9, rd.bind(null, n, r, o, t), void 0, null),
      ue === null)
    )
      throw Error(E(349));
    dn & 30 || nd(n, t, o);
  }
  return o;
}

function nd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = b.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (b.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}

function rd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), id(t) && sd(e);
}

function od(e, t, n) {
  return n(function () {
    id(t) && sd(e);
  });
}

function id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}

function sd(e) {
  var t = vt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}

function za(e) {
  var t = rt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Gh.bind(null, b, e)),
    [t.memoizedState, e]
  );
}

function Jr(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = b.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (b.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}

function ld() {
  return He().memoizedState;
}

function Uo(e, t, n, r) {
  var o = rt();
  (b.flags |= e),
    (o.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r));
}

function Ii(e, t, n, r) {
  var o = He();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (((i = s.destroy), r !== null && xu(r, s.deps))) {
      o.memoizedState = Jr(t, n, i, r);
      return;
    }
  }
  (b.flags |= e), (o.memoizedState = Jr(1 | t, n, i, r));
}

function $a(e, t) {
  return Uo(8390656, 8, e, t);
}

function Ou(e, t) {
  return Ii(2048, 8, e, t);
}

function ud(e, t) {
  return Ii(4, 2, e, t);
}

function ad(e, t) {
  return Ii(4, 4, e, t);
}

function cd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}

function fd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ii(4, 4, cd.bind(null, t, e), n)
  );
}

function Nu() {}

function dd(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}

function pd(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}

function md(e, t, n) {
  return dn & 21
    ? (et(n, t) || ((n = Sf()), (b.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}

function Wh(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ws.transition;
  ws.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (ws.transition = r);
  }
}

function hd() {
  return He().memoizedState;
}

function Hh(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gd(e))
  )
    yd(t, n);
  else if (((n = qf(e, t, n, r)), n !== null)) {
    var o = ve();
    Xe(n, e, r, o), vd(n, t, r);
  }
}

function Gh(e, t, n) {
  var r = zt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gd(e)) yd(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), et(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), _u(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = qf(e, t, o, r)),
      n !== null && ((o = ve()), Xe(n, e, r, o), vd(n, t, r));
  }
}

function gd(e) {
  var t = e.alternate;
  return e === b || (t !== null && t === b);
}

function yd(e, t) {
  xr = di = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}

function vd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}

var pi = {
    readContext: We,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  Vh = {
    readContext: We,
    useCallback: function (e, t) {
      return (rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: $a,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Uo(4194308, 4, cd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Uo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Uo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Hh.bind(null, b, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: za,
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      return (rt().memoizedState = e);
    },
    useTransition: function () {
      var e = za(!1),
        t = e[0];
      return (e = Wh.bind(null, e[1])), (rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = b,
        o = rt();
      if (Q) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(E(349));
        dn & 30 || nd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        $a(od.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Jr(9, rd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rt(),
        t = ue.identifierPrefix;
      if (Q) {
        var n = mt,
          r = pt;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Gr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Bh++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jh = {
    readContext: We,
    useCallback: dd,
    useContext: We,
    useEffect: Ou,
    useImperativeHandle: fd,
    useInsertionEffect: ud,
    useLayoutEffect: ad,
    useMemo: pd,
    useReducer: _s,
    useRef: ld,
    useState: function () {
      return _s(Vr);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = He();
      return md(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = _s(Vr)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: ed,
    useSyncExternalStore: td,
    useId: hd,
    unstable_isNewReconciler: !1,
  },
  Kh = {
    readContext: We,
    useCallback: dd,
    useContext: We,
    useEffect: Ou,
    useImperativeHandle: fd,
    useInsertionEffect: ud,
    useLayoutEffect: ad,
    useMemo: pd,
    useReducer: Cs,
    useRef: ld,
    useState: function () {
      return Cs(Vr);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = He();
      return re === null ? (t.memoizedState = e) : md(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Cs(Vr)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: ed,
    useSyncExternalStore: td,
    useId: hd,
    unstable_isNewReconciler: !1,
  };

function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}

function dl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}

var Li = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      o = zt(e),
      i = ht(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ut(e, i, o)),
      t !== null && (Xe(t, e, o, r), Fo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      o = zt(e),
      i = ht(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ut(e, i, o)),
      t !== null && (Xe(t, e, o, r), Fo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = zt(e),
      o = ht(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ut(e, o, r)),
      t !== null && (Xe(t, e, r, n), Fo(t, e, r));
  },
};

function Ba(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !jr(n, r) || !jr(o, i)
        : !0
  );
}

function Sd(e, t, n) {
  var r = !1,
    o = Ht,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = We(i))
      : ((o = Ee(t) ? cn : ge.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Hn(e, o) : Ht)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Li),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}

function Wa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}

function pl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Cu(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = We(i))
    : ((i = Ee(t) ? cn : ge.current), (o.context = Hn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (dl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Li.enqueueReplaceState(o, o.state, null),
      ci(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}

function Kn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += _m(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}

function Ps(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}

function ml(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}

var Qh = typeof WeakMap == 'function' ? WeakMap : Map;

function wd(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hi || ((hi = !0), (El = r)), ml(e, t);
    }),
    n
  );
}

function _d(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ml(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        ml(e, t),
          typeof r != 'function' &&
            (jt === null ? (jt = new Set([this])) : jt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}

function Ha(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qh();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ug.bind(null, e, t, n)), t.then(e, e));
}

function Ga(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}

function Va(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ht(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}

var Yh = wt.ReactCurrentOwner,
  Ce = !1;

function ye(e, t, n, r) {
  t.child = e === null ? bf(t, null, n, r) : Vn(t, e.child, n, r);
}

function Ja(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    $n(t, o),
    (r = Ru(e, t, n, r, i, o)),
    (n = Tu()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        St(e, t, o))
      : (Q && n && hu(t), (t.flags |= 1), ye(e, t, r, o), t.child)
  );
}

function Ka(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !ju(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Cd(e, t, i, r, o))
      : ((e = Bo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : jr), n(s, r) && e.ref === t.ref)
    )
      return St(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = $t(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}

function Cd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (jr(i, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), St(e, t, o);
  }
  return hl(e, t, n, r, o);
}

function Pd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        G(In, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(In, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        G(In, Ae),
        (Ae |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(In, Ae),
      (Ae |= r);
  return ye(e, t, o, n), t.child;
}

function Ed(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}

function hl(e, t, n, r, o) {
  var i = Ee(n) ? cn : ge.current;
  return (
    (i = Hn(t, i)),
    $n(t, o),
    (n = Ru(e, t, n, r, i, o)),
    (r = Tu()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        St(e, t, o))
      : (Q && r && hu(t), (t.flags |= 1), ye(e, t, n, o), t.child)
  );
}

function Qa(e, t, n, r, o) {
  if (Ee(n)) {
    var i = !0;
    ii(t);
  } else i = !1;
  if (($n(t, o), t.stateNode === null))
    jo(e, t), Sd(t, n, r), pl(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = We(a))
      : ((a = Ee(n) ? cn : ge.current), (a = Hn(t, a)));
    var f = n.getDerivedStateFromProps,
      m =
        typeof f == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || u !== a) && Wa(t, s, r, a)),
      (Rt = !1);
    var h = t.memoizedState;
    (s.state = h),
      ci(t, r, s, o),
      (u = t.memoizedState),
      l !== r || h !== u || Pe.current || Rt
        ? (typeof f == 'function' && (dl(t, n, f, r), (u = t.memoizedState)),
          (l = Rt || Ba(t, n, l, r, h, u, a))
            ? (m ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = a),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Xf(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : Ke(t.type, l)),
      (s.props = a),
      (m = t.pendingProps),
      (h = s.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = We(u))
        : ((u = Ee(n) ? cn : ge.current), (u = Hn(t, u)));
    var S = n.getDerivedStateFromProps;
    (f =
      typeof S == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== m || h !== u) && Wa(t, s, r, u)),
      (Rt = !1),
      (h = t.memoizedState),
      (s.state = h),
      ci(t, r, s, o);
    var g = t.memoizedState;
    l !== m || h !== g || Pe.current || Rt
      ? (typeof S == 'function' && (dl(t, n, S, r), (g = t.memoizedState)),
        (a = Rt || Ba(t, n, a, r, h, g, u) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, g, u),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, g, u)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = u),
        (r = a))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gl(e, t, n, r, i, o);
}

function gl(e, t, n, r, o, i) {
  Ed(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Ia(t, n, !1), St(e, t, i);
  (r = t.stateNode), (Yh.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Vn(t, e.child, null, i)), (t.child = Vn(t, null, l, i)))
      : ye(e, t, l, i),
    (t.memoizedState = r.state),
    o && Ia(t, n, !0),
    t.child
  );
}

function kd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Da(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Da(e, t.context, !1),
    Pu(e, t.containerInfo);
}

function Ya(e, t, n, r, o) {
  return Gn(), yu(o), (t.flags |= 256), ye(e, t, n, r), t.child;
}

var yl = { dehydrated: null, treeContext: null, retryLane: 0 };

function vl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}

function xd(e, t, n) {
  var r = t.pendingProps,
    o = Y.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    G(Y, o & 1),
    e === null)
  )
    return (
      cl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = {
                mode: 'hidden',
                children: s,
              }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ui(s, r, 0, null)),
              (e = ln(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = vl(n)),
              (t.memoizedState = yl),
              e)
            : Au(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return bh(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = $t(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = $t(l, i)) : ((i = ln(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? vl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = yl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = $t(i, {
      mode: 'visible',
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}

function Au(e, t) {
  return (
    (t = Ui({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}

function Eo(e, t, n, r) {
  return (
    r !== null && yu(r),
    Vn(t, e.child, null, n),
    (e = Au(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}

function bh(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ps(Error(E(422)))), Eo(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ui(
            {
              mode: 'visible',
              children: r.children,
            },
            o,
            0,
            null
          )),
          (i = ln(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Vn(t, e.child, null, s),
          (t.child.memoizedState = vl(s)),
          (t.memoizedState = yl),
          i);
  if (!(t.mode & 1)) return Eo(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(E(419))), (r = Ps(i, r, void 0)), Eo(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ce || l)) {
    if (((r = ue), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), vt(e, o), Xe(r, e, o, -1));
    }
    return Uu(), (r = Ps(Error(E(421)))), Eo(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ag.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (De = Mt(o.nextSibling)),
      (Ie = t),
      (Q = !0),
      (Ye = null),
      e !== null &&
        ((je[ze++] = pt),
        (je[ze++] = mt),
        (je[ze++] = fn),
        (pt = e.id),
        (mt = e.overflow),
        (fn = t)),
      (t = Au(t, r.children)),
      (t.flags |= 4096),
      t);
}

function ba(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fl(e.return, t, n);
}

function Es(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}

function Rd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ye(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ba(e, n, t);
        else if (e.tag === 19) ba(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && fi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Es(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Es(t, !0, n, null, i);
        break;
      case 'together':
        Es(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}

function jo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}

function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = $t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}

function qh(e, t, n) {
  switch (t.tag) {
    case 3:
      kd(t), Gn();
      break;
    case 5:
      Zf(t);
      break;
    case 1:
      Ee(t.type) && ii(t);
      break;
    case 4:
      Pu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      G(ui, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? xd(e, t, n)
            : (G(Y, Y.current & 1),
              (e = St(e, t, n)),
              e !== null ? e.sibling : null);
      G(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        G(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Pd(e, t, n);
  }
  return St(e, t, n);
}

var Td, Sl, Od, Nd;
Td = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Sl = function () {};
Od = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), nn(ut.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Bs(e, o)), (r = Bs(e, r)), (i = []);
        break;
      case 'select':
        (o = q({}, o, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Gs(e, o)), (r = Gs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ri);
    }
    Js(n, r);
    var s;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var l = o[a];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Ar.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((l = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== l && (u != null || l != null))
      )
        if (a === 'style')
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (i = i || []).push(a, u))
            : a === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (i = i || []).push(a, '' + u)
              : a !== 'suppressContentEditableWarning' &&
                a !== 'suppressHydrationWarning' &&
                (Ar.hasOwnProperty(a)
                  ? (u != null && a === 'onScroll' && V('scroll', e),
                    i || l === u || (i = []))
                  : (i = i || []).push(a, u));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Nd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};

function pr(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}

function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}

function Xh(e, t, n) {
  var r = t.pendingProps;
  switch ((gu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Ee(t.type) && oi(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        K(Pe),
        K(ge),
        ku(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Co(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Rl(Ye), (Ye = null)))),
        Sl(e, t),
        pe(t),
        null
      );
    case 5:
      Eu(t);
      var o = nn(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Od(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return pe(t), null;
        }
        if (((e = nn(ut.current)), Co(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[st] = t), (r[Br] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              V('cancel', r), V('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              V('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Sr.length; o++) V(Sr[o], r);
              break;
            case 'source':
              V('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              V('error', r), V('load', r);
              break;
            case 'details':
              V('toggle', r);
              break;
            case 'input':
              ia(r, i), V('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                V('invalid', r);
              break;
            case 'textarea':
              la(r, i), V('invalid', r);
          }
          Js(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      _o(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      _o(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : Ar.hasOwnProperty(s) &&
                  l != null &&
                  s === 'onScroll' &&
                  V('scroll', r);
            }
          switch (n) {
            case 'input':
              po(r), sa(r, i, !0);
              break;
            case 'textarea':
              po(r), ua(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = ri);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = rf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[st] = t),
            (e[Br] = r),
            Td(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ks(n, r)), n)) {
              case 'dialog':
                V('cancel', e), V('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                V('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Sr.length; o++) V(Sr[o], e);
                o = r;
                break;
              case 'source':
                V('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                V('error', e), V('load', e), (o = r);
                break;
              case 'details':
                V('toggle', e), (o = r);
                break;
              case 'input':
                ia(e, r), (o = Bs(e, r)), V('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = q({}, r, { value: void 0 })),
                  V('invalid', e);
                break;
              case 'textarea':
                la(e, r), (o = Gs(e, r)), V('invalid', e);
                break;
              default:
                o = r;
            }
            Js(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var u = l[i];
                i === 'style'
                  ? lf(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && of(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && Dr(e, u)
                        : typeof u == 'number' && Dr(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Ar.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && V('scroll', e)
                          : u != null && tu(e, i, u, s));
              }
            switch (n) {
              case 'input':
                po(e), sa(e, r, !1);
                break;
              case 'textarea':
                po(e), ua(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Wt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Mn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Mn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = ri);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Nd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(E(166));
        if (((n = nn(Hr.current)), nn(ut.current), Co(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[st] = t),
            (i = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                _o(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _o(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[st] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (K(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && De !== null && t.mode & 1 && !(t.flags & 128))
          Qf(), Gn(), (t.flags |= 98560), (i = !1);
        else if (((i = Co(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[st] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (i = !1);
        } else Ye !== null && (Rl(Ye), (Ye = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? oe === 0 && (oe = 3) : Uu())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Jn(), Sl(e, t), e === null && zr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return wu(t.type._context), pe(t), null;
    case 17:
      return Ee(t.type) && oi(), pe(t), null;
    case 19:
      if ((K(Y), (i = t.memoizedState), i === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) pr(i, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = fi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    pr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Z() > Qn &&
            ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !Q)
            )
              return pe(t), null;
          } else
            2 * Z() - i.renderingStartTime > Qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Z()),
          (t.sibling = null),
          (n = Y.current),
          G(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Mu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}

function Zh(e, t) {
  switch ((gu(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && oi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jn(),
        K(Pe),
        K(ge),
        ku(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Eu(t), null;
    case 13:
      if ((K(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(Y), null;
    case 4:
      return Jn(), null;
    case 10:
      return wu(t.type._context), null;
    case 22:
    case 23:
      return Mu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}

var ko = !1,
  he = !1,
  eg = typeof WeakSet == 'function' ? WeakSet : Set,
  R = null;

function Dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}

function wl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}

var qa = !1;

function tg(e, t) {
  if (((rl = ei), (e = Ff()), mu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            a = 0,
            f = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var S;
              m !== n || (o !== 0 && m.nodeType !== 3) || (l = s + o),
                m !== i || (r !== 0 && m.nodeType !== 3) || (u = s + r),
                m.nodeType === 3 && (s += m.nodeValue.length),
                (S = m.firstChild) !== null;

            )
              (h = m), (m = S);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++a === o && (l = s),
                h === i && ++f === r && (u = s),
                (S = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = S;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    ol = {
      focusedElem: e,
      selectionRange: n,
    },
      ei = !1,
      R = t;
    R !== null;

  )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    k = g.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ke(t.type, v),
                      k
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = '')
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (w) {
          X(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (g = qa), (qa = !1), g;
}

function Rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && wl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}

function Fi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}

function _l(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}

function Ad(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ad(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[st], delete t[Br], delete t[ll], delete t[Uh], delete t[jh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}

function Dd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}

function Xa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}

function Cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ri));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cl(e, t, n), e = e.sibling; e !== null; ) Cl(e, t, n), (e = e.sibling);
}

function Pl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pl(e, t, n), e = e.sibling; e !== null; ) Pl(e, t, n), (e = e.sibling);
}

var ae = null,
  Qe = !1;

function Pt(e, t, n) {
  for (n = n.child; n !== null; ) Id(e, t, n), (n = n.sibling);
}

function Id(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == 'function')
    try {
      lt.onCommitFiberUnmount(Ri, n);
    } catch {}
  switch (n.tag) {
    case 5:
      he || Dn(n, t);
    case 6:
      var r = ae,
        o = Qe;
      (ae = null),
        Pt(e, t, n),
        (ae = r),
        (Qe = o),
        ae !== null &&
          (Qe
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Qe
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? ys(e.parentNode, n)
              : e.nodeType === 1 && ys(e, n),
            Mr(e))
          : ys(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (o = Qe),
        (ae = n.stateNode.containerInfo),
        (Qe = !0),
        Pt(e, t, n),
        (ae = r),
        (Qe = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && wl(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (
        !he &&
        (Dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), Pt(e, t, n), (he = r))
        : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}

function Za(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eg()),
      t.forEach(function (r) {
        var o = cg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}

function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Qe = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(E(160));
        Id(i, s, o), (ae = null), (Qe = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        X(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ld(t, e), (t = t.sibling);
}

function Ld(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), nt(e), r & 4)) {
        try {
          Rr(3, e, e.return), Fi(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          Rr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      Je(t, e), nt(e), r & 512 && n !== null && Dn(n, n.return);
      break;
    case 5:
      if (
        (Je(t, e),
        nt(e),
        r & 512 && n !== null && Dn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Dr(o, '');
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && tf(o, i),
              Ks(l, s);
            var a = Ks(l, i);
            for (s = 0; s < u.length; s += 2) {
              var f = u[s],
                m = u[s + 1];
              f === 'style'
                ? lf(o, m)
                : f === 'dangerouslySetInnerHTML'
                  ? of(o, m)
                  : f === 'children'
                    ? Dr(o, m)
                    : tu(o, f, m, a);
            }
            switch (l) {
              case 'input':
                Ws(o, i);
                break;
              case 'textarea':
                nf(o, i);
                break;
              case 'select':
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Mn(o, !!i.multiple, S, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Mn(o, !!i.multiple, i.defaultValue, !0)
                      : Mn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Br] = i;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Je(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mr(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      Je(t, e), nt(e);
      break;
    case 13:
      Je(t, e),
        nt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Lu = Z())),
        r & 4 && Za(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (a = he) || f), Je(t, e), (he = a)) : Je(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !f && e.mode & 1)
        )
          for (R = e, f = e.child; f !== null; ) {
            for (m = R = f; R !== null; ) {
              switch (((h = R), (S = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, h, h.return);
                  break;
                case 1:
                  Dn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Dn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    tc(m);
                    continue;
                  }
              }
              S !== null ? ((S.return = h), (R = S)) : tc(m);
            }
            f = f.sibling;
          }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                (o = m.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = m.stateNode),
                      (u = m.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (l.style.display = sf('display', s)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (f === null)
              try {
                m.stateNode.nodeValue = a ? '' : m.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            f === m && (f = null), (m = m.return);
          }
          f === m && (f = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Je(t, e), nt(e), r & 4 && Za(e);
      break;
    case 21:
      break;
    default:
      Je(t, e), nt(e);
  }
}

function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Dr(o, ''), (r.flags &= -33));
          var i = Xa(e);
          Pl(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Xa(e);
          Cl(e, l, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      X(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}

function ng(e, t, n) {
  (R = e), Fd(e);
}

function Fd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ko;
      if (!s) {
        var l = o.alternate,
          u = (l !== null && l.memoizedState !== null) || he;
        l = ko;
        var a = he;
        if (((ko = s), (he = u) && !a))
          for (R = o; R !== null; )
            (s = R),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? nc(o)
                : u !== null
                  ? ((u.return = s), (R = u))
                  : nc(o);
        for (; i !== null; ) (R = i), Fd(i), (i = i.sibling);
        (R = o), (ko = l), (he = a);
      }
      ec(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (R = i)) : ec(e);
  }
}

function ec(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Fi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ja(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ja(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var f = a.memoizedState;
                  if (f !== null) {
                    var m = f.dehydrated;
                    m !== null && Mr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        he || (t.flags & 512 && _l(t));
      } catch (h) {
        X(t, t.return, h);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}

function tc(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}

function nc(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fi(4, t);
          } catch (u) {
            X(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              X(t, o, u);
            }
          }
          var i = t.return;
          try {
            _l(t);
          } catch (u) {
            X(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _l(t);
          } catch (u) {
            X(t, s, u);
          }
      }
    } catch (u) {
      X(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (R = l);
      break;
    }
    R = t.return;
  }
}

var rg = Math.ceil,
  mi = wt.ReactCurrentDispatcher,
  Du = wt.ReactCurrentOwner,
  Be = wt.ReactCurrentBatchConfig,
  j = 0,
  ue = null,
  te = null,
  ce = 0,
  Ae = 0,
  In = Vt(0),
  oe = 0,
  Kr = null,
  pn = 0,
  Mi = 0,
  Iu = 0,
  Tr = null,
  _e = null,
  Lu = 0,
  Qn = 1 / 0,
  ct = null,
  hi = !1,
  El = null,
  jt = null,
  xo = !1,
  Dt = null,
  gi = 0,
  Or = 0,
  kl = null,
  zo = -1,
  $o = 0;

function ve() {
  return j & 6 ? Z() : zo !== -1 ? zo : (zo = Z());
}

function zt(e) {
  return e.mode & 1
    ? j & 2 && ce !== 0
      ? ce & -ce
      : $h.transition !== null
        ? ($o === 0 && ($o = Sf()), $o)
        : ((e = B),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xf(e.type))),
          e)
    : 1;
}

function Xe(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (kl = null), Error(E(185)));
  eo(e, n, r),
    (!(j & 2) || e !== ue) &&
      (e === ue && (!(j & 2) && (Mi |= n), oe === 4 && Nt(e, ce)),
      ke(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((Qn = Z() + 500), Di && Jt()));
}

function ke(e, t) {
  var n = e.callbackNode;
  $m(e, t);
  var r = Zo(e, e === ue ? ce : 0);
  if (r === 0)
    n !== null && fa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fa(n), t === 1))
      e.tag === 0 ? zh(rc.bind(null, e)) : Vf(rc.bind(null, e)),
        Fh(function () {
          !(j & 6) && Jt();
        }),
        (n = null);
    else {
      switch (wf(r)) {
        case 1:
          n = su;
          break;
        case 4:
          n = yf;
          break;
        case 16:
          n = Xo;
          break;
        case 536870912:
          n = vf;
          break;
        default:
          n = Xo;
      }
      n = Hd(n, Md.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}

function Md(e, t) {
  if (((zo = -1), ($o = 0), j & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Bn() && e.callbackNode !== n) return null;
  var r = Zo(e, e === ue ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yi(e, r);
  else {
    t = r;
    var o = j;
    j |= 2;
    var i = jd();
    (ue !== e || ce !== t) && ((ct = null), (Qn = Z() + 500), sn(e, t));
    do
      try {
        sg();
        break;
      } catch (l) {
        Ud(e, l);
      }
    while (!0);
    Su(),
      (mi.current = i),
      (j = o),
      te !== null ? (t = 0) : ((ue = null), (ce = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Xs(e)), o !== 0 && ((r = o), (t = xl(e, o)))), t === 1)
    )
      throw ((n = Kr), sn(e, 0), Nt(e, r), ke(e, Z()), n);
    if (t === 6) Nt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !og(o) &&
          ((t = yi(e, r)),
          t === 2 && ((i = Xs(e)), i !== 0 && ((r = i), (t = xl(e, i)))),
          t === 1))
      )
        throw ((n = Kr), sn(e, 0), Nt(e, r), ke(e, Z()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Zt(e, _e, ct);
          break;
        case 3:
          if (
            (Nt(e, r), (r & 130023424) === r && ((t = Lu + 500 - Z()), 10 < t))
          ) {
            if (Zo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = sl(Zt.bind(null, e, _e, ct), t);
            break;
          }
          Zt(e, _e, ct);
          break;
        case 4:
          if ((Nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - qe(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * rg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sl(Zt.bind(null, e, _e, ct), r);
            break;
          }
          Zt(e, _e, ct);
          break;
        case 5:
          Zt(e, _e, ct);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ke(e, Z()), e.callbackNode === n ? Md.bind(null, e) : null;
}

function xl(e, t) {
  var n = Tr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = yi(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && Rl(t)),
    e
  );
}

function Rl(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}

function og(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!et(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}

function Nt(e, t) {
  for (
    t &= ~Iu,
      t &= ~Mi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}

function rc(e) {
  if (j & 6) throw Error(E(327));
  Bn();
  var t = Zo(e, 0);
  if (!(t & 1)) return ke(e, Z()), null;
  var n = yi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xs(e);
    r !== 0 && ((t = r), (n = xl(e, r)));
  }
  if (n === 1) throw ((n = Kr), sn(e, 0), Nt(e, t), ke(e, Z()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, _e, ct),
    ke(e, Z()),
    null
  );
}

function Fu(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((Qn = Z() + 500), Di && Jt());
  }
}

function mn(e) {
  Dt !== null && Dt.tag === 0 && !(j & 6) && Bn();
  var t = j;
  j |= 1;
  var n = Be.transition,
    r = B;
  try {
    if (((Be.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Be.transition = n), (j = t), !(j & 6) && Jt();
  }
}

function Mu() {
  (Ae = In.current), K(In);
}

function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Lh(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((gu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oi();
          break;
        case 3:
          Jn(), K(Pe), K(ge), ku();
          break;
        case 5:
          Eu(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          K(Y);
          break;
        case 19:
          K(Y);
          break;
        case 10:
          wu(r.type._context);
          break;
        case 22:
        case 23:
          Mu();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (te = e = $t(e.current, null)),
    (ce = Ae = t),
    (oe = 0),
    (Kr = null),
    (Iu = Mi = pn = 0),
    (_e = Tr = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}

function Ud(e, t) {
  do {
    var n = te;
    try {
      if ((Su(), (Mo.current = pi), di)) {
        for (var r = b.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        di = !1;
      }
      if (
        ((dn = 0),
        (ie = re = b = null),
        (xr = !1),
        (Gr = 0),
        (Du.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (Kr = t), (te = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = ce),
          (l.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var a = u,
            f = l,
            m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = Ga(s);
          if (S !== null) {
            (S.flags &= -257),
              Va(S, s, l, i, t),
              S.mode & 1 && Ha(i, a, t),
              (t = S),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ha(i, a, t), Uu();
              break e;
            }
            u = Error(E(426));
          }
        } else if (Q && l.mode & 1) {
          var k = Ga(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Va(k, s, l, i, t),
              yu(Kn(u, l));
            break e;
          }
        }
        (i = u = Kn(u, l)),
          oe !== 4 && (oe = 2),
          Tr === null ? (Tr = [i]) : Tr.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = wd(i, u, t);
              Ua(i, d);
              break e;
            case 1:
              l = u;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (p !== null &&
                    typeof p.componentDidCatch == 'function' &&
                    (jt === null || !jt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = _d(i, l, t);
                Ua(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $d(n);
    } catch (C) {
      (t = C), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}

function jd() {
  var e = mi.current;
  return (mi.current = pi), e === null ? pi : e;
}

function Uu() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ue === null || (!(pn & 268435455) && !(Mi & 268435455)) || Nt(ue, ce);
}

function yi(e, t) {
  var n = j;
  j |= 2;
  var r = jd();
  (ue !== e || ce !== t) && ((ct = null), sn(e, t));
  do
    try {
      ig();
      break;
    } catch (o) {
      Ud(e, o);
    }
  while (!0);
  if ((Su(), (j = n), (mi.current = r), te !== null)) throw Error(E(261));
  return (ue = null), (ce = 0), oe;
}

function ig() {
  for (; te !== null; ) zd(te);
}

function sg() {
  for (; te !== null && !Am(); ) zd(te);
}

function zd(e) {
  var t = Wd(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? $d(e) : (te = t),
    (Du.current = null);
}

function $d(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zh(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (te = null);
        return;
      }
    } else if (((n = Xh(n, t, Ae)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}

function Zt(e, t, n) {
  var r = B,
    o = Be.transition;
  try {
    (Be.transition = null), (B = 1), lg(e, t, n, r);
  } finally {
    (Be.transition = o), (B = r);
  }
  return null;
}

function lg(e, t, n, r) {
  do Bn();
  while (Dt !== null);
  if (j & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Bm(e, i),
    e === ue && ((te = ue = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xo ||
      ((xo = !0),
      Hd(Xo, function () {
        return Bn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Be.transition), (Be.transition = null);
    var s = B;
    B = 1;
    var l = j;
    (j |= 4),
      (Du.current = null),
      tg(e, n),
      Ld(n, e),
      Rh(ol),
      (ei = !!rl),
      (ol = rl = null),
      (e.current = n),
      ng(n),
      Dm(),
      (j = l),
      (B = s),
      (Be.transition = i);
  } else e.current = n;
  if (
    (xo && ((xo = !1), (Dt = e), (gi = o)),
    (i = e.pendingLanes),
    i === 0 && (jt = null),
    Fm(n.stateNode),
    ke(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]),
        r(o.value, {
          componentStack: o.stack,
          digest: o.digest,
        });
  if (hi) throw ((hi = !1), (e = El), (El = null), e);
  return (
    gi & 1 && e.tag !== 0 && Bn(),
    (i = e.pendingLanes),
    i & 1 ? (e === kl ? Or++ : ((Or = 0), (kl = e))) : (Or = 0),
    Jt(),
    null
  );
}

function Bn() {
  if (Dt !== null) {
    var e = wf(gi),
      t = Be.transition,
      n = B;
    try {
      if (((Be.transition = null), (B = 16 > e ? 16 : e), Dt === null))
        var r = !1;
      else {
        if (((e = Dt), (Dt = null), (gi = 0), j & 6)) throw Error(E(331));
        var o = j;
        for (j |= 4, R = e.current; R !== null; ) {
          var i = R,
            s = i.child;
          if (R.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u];
                for (R = a; R !== null; ) {
                  var f = R;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, f, i);
                  }
                  var m = f.child;
                  if (m !== null) (m.return = f), (R = m);
                  else
                    for (; R !== null; ) {
                      f = R;
                      var h = f.sibling,
                        S = f.return;
                      if ((Ad(f), f === a)) {
                        R = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = S), (R = h);
                        break;
                      }
                      R = S;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (R = s);
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rr(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (R = d);
                break e;
              }
              R = i.return;
            }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          s = R;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (R = p);
          else
            e: for (s = c; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fi(9, l);
                  }
                } catch (C) {
                  X(l, l.return, C);
                }
              if (l === s) {
                R = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (R = w);
                break e;
              }
              R = l.return;
            }
        }
        if (
          ((j = o), Jt(), lt && typeof lt.onPostCommitFiberRoot == 'function')
        )
          try {
            lt.onPostCommitFiberRoot(Ri, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Be.transition = t);
    }
  }
  return !1;
}

function oc(e, t, n) {
  (t = Kn(n, t)),
    (t = wd(e, t, 1)),
    (e = Ut(e, t, 1)),
    (t = ve()),
    e !== null && (eo(e, 1, t), ke(e, t));
}

function X(e, t, n) {
  if (e.tag === 3) oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (jt === null || !jt.has(r)))
        ) {
          (e = Kn(n, e)),
            (e = _d(t, e, 1)),
            (t = Ut(t, e, 1)),
            (e = ve()),
            t !== null && (eo(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}

function ug(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (ce & n) === n &&
      (oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > Z() - Lu)
        ? sn(e, 0)
        : (Iu |= n)),
    ke(e, t);
}

function Bd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = go), (go <<= 1), !(go & 130023424) && (go = 4194304))
      : (t = 1));
  var n = ve();
  (e = vt(e, t)), e !== null && (eo(e, t, n), ke(e, n));
}

function ag(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bd(e, n);
}

function cg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Bd(e, n);
}

var Wd;
Wd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), qh(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), Q && t.flags & 1048576 && Jf(t, li, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jo(e, t), (e = t.pendingProps);
      var o = Hn(t, ge.current);
      $n(t, n), (o = Ru(null, t, r, e, o, n));
      var i = Tu();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((i = !0), ii(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Cu(t),
            (o.updater = Li),
            (t.stateNode = o),
            (o._reactInternals = t),
            pl(t, r, e, n),
            (t = gl(null, t, r, !0, i, n)))
          : ((t.tag = 0), Q && i && hu(t), ye(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (jo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = dg(r)),
          (e = Ke(r, e)),
          o)
        ) {
          case 0:
            t = hl(null, t, r, e, n);
            break e;
          case 1:
            t = Qa(null, t, r, e, n);
            break e;
          case 11:
            t = Ja(null, t, r, e, n);
            break e;
          case 14:
            t = Ka(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        hl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Qa(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((kd(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Xf(e, t),
          ci(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Kn(Error(E(423)), t)), (t = Ya(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Kn(Error(E(424)), t)), (t = Ya(e, t, r, n, o));
            break e;
          } else
            for (
              De = Mt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                Q = !0,
                Ye = null,
                n = bf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === o)) {
            t = St(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Zf(t),
        e === null && cl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        il(r, o) ? (s = null) : i !== null && il(r, i) && (t.flags |= 32),
        Ed(e, t),
        ye(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && cl(t), null;
    case 13:
      return xd(e, t, n);
    case 4:
      return (
        Pu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Ja(e, t, r, o, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          G(ui, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (et(i.value, s)) {
            if (i.children === o.children && !Pe.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = ht(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var f = a.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (a.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      fl(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(E(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  fl(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        ye(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (o = We(o)),
        (r = r(o)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ke(r, t.pendingProps)),
        (o = Ke(r.type, o)),
        Ka(e, t, r, o, n)
      );
    case 15:
      return Cd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        jo(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), ii(t)) : (e = !1),
        $n(t, n),
        Sd(t, r, o),
        pl(t, r, o, n),
        gl(null, t, r, !0, e, n)
      );
    case 19:
      return Rd(e, t, n);
    case 22:
      return Pd(e, t, n);
  }
  throw Error(E(156, t.tag));
};

function Hd(e, t) {
  return gf(e, t);
}

function fg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}

function $e(e, t, n, r) {
  return new fg(e, t, n, r);
}

function ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}

function dg(e) {
  if (typeof e == 'function') return ju(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ru)) return 11;
    if (e === ou) return 14;
  }
  return 2;
}

function $t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}

function Bo(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) ju(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case Pn:
        return ln(n.children, o, i, t);
      case nu:
        (s = 8), (o |= 8);
        break;
      case Us:
        return (
          (e = $e(12, n, t, o | 2)), (e.elementType = Us), (e.lanes = i), e
        );
      case js:
        return (e = $e(13, n, t, o)), (e.elementType = js), (e.lanes = i), e;
      case zs:
        return (e = $e(19, n, t, o)), (e.elementType = zs), (e.lanes = i), e;
      case Xc:
        return Ui(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case bc:
              s = 10;
              break e;
            case qc:
              s = 9;
              break e;
            case ru:
              s = 11;
              break e;
            case ou:
              s = 14;
              break e;
            case xt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = $e(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}

function ln(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e;
}

function Ui(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = Xc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}

function ks(e, t, n) {
  return (e = $e(6, e, null, t)), (e.lanes = n), e;
}

function xs(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}

function pg(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ss(0)),
    (this.expirationTimes = ss(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ss(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}

function zu(e, t, n, r, o, i, s, l, u) {
  return (
    (e = new pg(e, t, n, l, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = $e(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cu(i),
    e
  );
}

function mg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}

function Gd(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return Gf(e, n, t);
  }
  return t;
}

function Vd(e, t, n, r, o, i, s, l, u) {
  return (
    (e = zu(n, r, !0, e, o, i, s, l, u)),
    (e.context = Gd(null)),
    (n = e.current),
    (r = ve()),
    (o = zt(n)),
    (i = ht(r, o)),
    (i.callback = t ?? null),
    Ut(n, i, o),
    (e.current.lanes = o),
    eo(e, o, r),
    ke(e, r),
    e
  );
}

function ji(e, t, n, r) {
  var o = t.current,
    i = ve(),
    s = zt(o);
  return (
    (n = Gd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ht(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ut(o, t, s)),
    e !== null && (Xe(e, o, s, i), Fo(e, o, s)),
    s
  );
}

function vi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}

function ic(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}

function $u(e, t) {
  ic(e, t), (e = e.alternate) && ic(e, t);
}

function hg() {
  return null;
}

var Jd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };

function Bu(e) {
  this._internalRoot = e;
}

zi.prototype.render = Bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  ji(e, t, null, null);
};
zi.prototype.unmount = Bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      ji(null, e, null, null);
    }),
      (t[yt] = null);
  }
};

function zi(e) {
  this._internalRoot = e;
}

zi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
    Ot.splice(n, 0, e), n === 0 && kf(e);
  }
};

function Wu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}

function $i(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}

function sc() {}

function gg(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = vi(s);
        i.call(a);
      };
    }
    var s = Vd(t, r, e, 0, null, !1, !1, '', sc);
    return (
      (e._reactRootContainer = s),
      (e[yt] = s.current),
      zr(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var a = vi(u);
      l.call(a);
    };
  }
  var u = zu(e, 0, !1, null, null, !1, !1, '', sc);
  return (
    (e._reactRootContainer = u),
    (e[yt] = u.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      ji(t, u, n, r);
    }),
    u
  );
}

function Bi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var u = vi(s);
        l.call(u);
      };
    }
    ji(t, s, e, o);
  } else s = gg(n, t, e, o, r);
  return vi(s);
}

_f = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vr(t.pendingLanes);
        n !== 0 &&
          (lu(t, n | 1), ke(t, Z()), !(j & 6) && ((Qn = Z() + 500), Jt()));
      }
      break;
    case 13:
      mn(function () {
        var r = vt(e, 1);
        if (r !== null) {
          var o = ve();
          Xe(r, e, 1, o);
        }
      }),
        $u(e, 1);
  }
};
uu = function (e) {
  if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
      var n = ve();
      Xe(t, e, 134217728, n);
    }
    $u(e, 134217728);
  }
};
Cf = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = vt(e, t);
    if (n !== null) {
      var r = ve();
      Xe(n, e, t, r);
    }
    $u(e, t);
  }
};
Pf = function () {
  return B;
};
Ef = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Ys = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ws(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ai(r);
            if (!o) throw Error(E(90));
            ef(r), Ws(r, o);
          }
        }
      }
      break;
    case 'textarea':
      nf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Mn(e, !!n.multiple, t, !1);
  }
};
cf = Fu;
ff = mn;
var yg = { usingClientEntryPoint: !1, Events: [no, Rn, Ai, uf, af, Fu] },
  mr = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  vg = {
    bundleType: mr.bundleType,
    version: mr.version,
    rendererPackageName: mr.rendererPackageName,
    rendererConfig: mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = mf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: mr.findFiberByHostInstance || hg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber)
    try {
      (Ri = Ro.inject(vg)), (lt = Ro);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yg;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wu(t)) throw Error(E(200));
  return mg(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!Wu(e)) throw Error(E(299));
  var n = !1,
    r = '',
    o = Jd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = zu(e, 1, !1, null, null, n, !1, r, o)),
    (e[yt] = t.current),
    zr(e.nodeType === 8 ? e.parentNode : e),
    new Bu(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(E(188))
      : ((e = Object.keys(e).join(',')), Error(E(268, e)));
  return (e = mf(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return mn(e);
};
Me.hydrate = function (e, t, n) {
  if (!$i(t)) throw Error(E(200));
  return Bi(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!Wu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Jd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Vd(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[yt] = t.current),
    zr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zi(t);
};
Me.render = function (e, t, n) {
  if (!$i(t)) throw Error(E(200));
  return Bi(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!$i(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (mn(function () {
        Bi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[yt] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = Fu;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$i(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Bi(e, t, n, !1, r);
};
Me.version = '18.3.1-next-f1338f8080-20240426';

function Kd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kd);
    } catch (e) {
      console.error(e);
    }
}

Kd(), (Jc.exports = Me);
var Sg = Jc.exports,
  Qd,
  lc = Sg;
(Qd = lc.createRoot), lc.hydrateRoot;
var le = function () {
  return (
    (le =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    le.apply(this, arguments)
  );
};

function Qr(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}

var J = '-ms-',
  Nr = '-moz-',
  z = '-webkit-',
  Yd = 'comm',
  Wi = 'rule',
  Hu = 'decl',
  wg = '@import',
  bd = '@keyframes',
  _g = '@layer',
  qd = Math.abs,
  Gu = String.fromCharCode,
  Tl = Object.assign;

function Cg(e, t) {
  return se(e, 0) ^ 45
    ? (((((((t << 2) ^ se(e, 0)) << 2) ^ se(e, 1)) << 2) ^ se(e, 2)) << 2) ^
        se(e, 3)
    : 0;
}

function Xd(e) {
  return e.trim();
}

function ft(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}

function I(e, t, n) {
  return e.replace(t, n);
}

function Wo(e, t, n) {
  return e.indexOf(t, n);
}

function se(e, t) {
  return e.charCodeAt(t) | 0;
}

function Yn(e, t, n) {
  return e.slice(t, n);
}

function it(e) {
  return e.length;
}

function Zd(e) {
  return e.length;
}

function wr(e, t) {
  return t.push(e), e;
}

function Pg(e, t) {
  return e.map(t).join('');
}

function uc(e, t) {
  return e.filter(function (n) {
    return !ft(n, t);
  });
}

var Hi = 1,
  bn = 1,
  ep = 0,
  Ge = 0,
  ee = 0,
  nr = '';

function Gi(e, t, n, r, o, i, s, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Hi,
    column: bn,
    length: s,
    return: '',
    siblings: l,
  };
}

function kt(e, t) {
  return Tl(
    Gi('', null, null, '', null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}

function _n(e) {
  for (; e.root; ) e = kt(e.root, { children: [e] });
  wr(e, e.siblings);
}

function Eg() {
  return ee;
}

function kg() {
  return (
    (ee = Ge > 0 ? se(nr, --Ge) : 0), bn--, ee === 10 && ((bn = 1), Hi--), ee
  );
}

function Ze() {
  return (
    (ee = Ge < ep ? se(nr, Ge++) : 0), bn++, ee === 10 && ((bn = 1), Hi++), ee
  );
}

function un() {
  return se(nr, Ge);
}

function Ho() {
  return Ge;
}

function Vi(e, t) {
  return Yn(nr, e, t);
}

function Ol(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}

function xg(e) {
  return (Hi = bn = 1), (ep = it((nr = e))), (Ge = 0), [];
}

function Rg(e) {
  return (nr = ''), e;
}

function Rs(e) {
  return Xd(Vi(Ge - 1, Nl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}

function Tg(e) {
  for (; (ee = un()) && ee < 33; ) Ze();
  return Ol(e) > 2 || Ol(ee) > 3 ? '' : ' ';
}

function Og(e, t) {
  for (
    ;
    --t &&
    Ze() &&
    !(ee < 48 || ee > 102 || (ee > 57 && ee < 65) || (ee > 70 && ee < 97));

  );
  return Vi(e, Ho() + (t < 6 && un() == 32 && Ze() == 32));
}

function Nl(e) {
  for (; Ze(); )
    switch (ee) {
      case e:
        return Ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nl(ee);
        break;
      case 40:
        e === 41 && Nl(e);
        break;
      case 92:
        Ze();
        break;
    }
  return Ge;
}

function Ng(e, t) {
  for (; Ze() && e + ee !== 57; ) if (e + ee === 84 && un() === 47) break;
  return '/*' + Vi(t, Ge - 1) + '*' + Gu(e === 47 ? e : Ze());
}

function Ag(e) {
  for (; !Ol(un()); ) Ze();
  return Vi(e, Ge);
}

function Dg(e) {
  return Rg(Go('', null, null, null, [''], (e = xg(e)), 0, [0], e));
}

function Go(e, t, n, r, o, i, s, l, u) {
  for (
    var a = 0,
      f = 0,
      m = s,
      h = 0,
      S = 0,
      g = 0,
      v = 1,
      k = 1,
      d = 1,
      c = 0,
      p = '',
      w = o,
      C = i,
      P = r,
      _ = p;
    k;

  )
    switch (((g = c), (c = Ze()))) {
      case 40:
        if (g != 108 && se(_, m - 1) == 58) {
          Wo((_ += I(Rs(c), '&', '&\f')), '&\f', qd(a ? l[a - 1] : 0)) != -1 &&
            (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Rs(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Tg(g);
        break;
      case 92:
        _ += Og(Ho() - 1, 7);
        continue;
      case 47:
        switch (un()) {
          case 42:
          case 47:
            wr(Ig(Ng(Ze(), Ho()), t, n, u), u);
            break;
          default:
            _ += '/';
        }
        break;
      case 123 * v:
        l[a++] = it(_) * d;
      case 125 * v:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            k = 0;
          case 59 + f:
            d == -1 && (_ = I(_, /\f/g, '')),
              S > 0 &&
                it(_) - m &&
                wr(
                  S > 32
                    ? cc(_ + ';', r, n, m - 1, u)
                    : cc(I(_, ' ', '') + ';', r, n, m - 2, u),
                  u
                );
            break;
          case 59:
            _ += ';';
          default:
            if (
              (wr(
                (P = ac(_, t, n, a, f, o, l, p, (w = []), (C = []), m, i)),
                i
              ),
              c === 123)
            )
              if (f === 0) Go(_, t, P, P, w, i, m, l, C);
              else
                switch (h === 99 && se(_, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Go(
                      e,
                      P,
                      P,
                      r && wr(ac(e, P, P, 0, 0, o, l, p, o, (w = []), m, C), C),
                      o,
                      C,
                      m,
                      l,
                      r ? w : C
                    );
                    break;
                  default:
                    Go(_, P, P, P, [''], C, 0, l, C);
                }
        }
        (a = f = S = 0), (v = d = 1), (p = _ = ''), (m = s);
        break;
      case 58:
        (m = 1 + it(_)), (S = g);
      default:
        if (v < 1) {
          if (c == 123) --v;
          else if (c == 125 && v++ == 0 && kg() == 125) continue;
        }
        switch (((_ += Gu(c)), c * v)) {
          case 38:
            d = f > 0 ? 1 : ((_ += '\f'), -1);
            break;
          case 44:
            (l[a++] = (it(_) - 1) * d), (d = 1);
            break;
          case 64:
            un() === 45 && (_ += Rs(Ze())),
              (h = un()),
              (f = m = it((p = _ += Ag(Ho())))),
              c++;
            break;
          case 45:
            g === 45 && it(_) == 2 && (v = 0);
        }
    }
  return i;
}

function ac(e, t, n, r, o, i, s, l, u, a, f, m) {
  for (
    var h = o - 1, S = o === 0 ? i : [''], g = Zd(S), v = 0, k = 0, d = 0;
    v < r;
    ++v
  )
    for (var c = 0, p = Yn(e, h + 1, (h = qd((k = s[v])))), w = e; c < g; ++c)
      (w = Xd(k > 0 ? S[c] + ' ' + p : I(p, /&\f/g, S[c]))) && (u[d++] = w);
  return Gi(e, t, n, o === 0 ? Wi : l, u, a, f, m);
}

function Ig(e, t, n, r) {
  return Gi(e, t, n, Yd, Gu(Eg()), Yn(e, 2, -2), 0, r);
}

function cc(e, t, n, r, o) {
  return Gi(e, t, n, Hu, Yn(e, 0, r), Yn(e, r + 1, -1), r, o);
}

function tp(e, t, n) {
  switch (Cg(e, t)) {
    case 5103:
      return z + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return z + e + e;
    case 4789:
      return Nr + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return z + e + Nr + e + J + e + e;
    case 5936:
      switch (se(e, t + 11)) {
        case 114:
          return z + e + J + I(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return z + e + J + I(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return z + e + J + I(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return z + e + J + e + e;
    case 6165:
      return z + e + J + 'flex-' + e + e;
    case 5187:
      return (
        z + e + I(e, /(\w+).+(:[^]+)/, z + 'box-$1$2' + J + 'flex-$1$2') + e
      );
    case 5443:
      return (
        z +
        e +
        J +
        'flex-item-' +
        I(e, /flex-|-self/g, '') +
        (ft(e, /flex-|baseline/)
          ? ''
          : J + 'grid-row-' + I(e, /flex-|-self/g, '')) +
        e
      );
    case 4675:
      return (
        z +
        e +
        J +
        'flex-line-pack' +
        I(e, /align-content|flex-|-self/g, '') +
        e
      );
    case 5548:
      return z + e + J + I(e, 'shrink', 'negative') + e;
    case 5292:
      return z + e + J + I(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        z +
        'box-' +
        I(e, '-grow', '') +
        z +
        e +
        J +
        I(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return z + I(e, /([^-])(transform)/g, '$1' + z + '$2') + e;
    case 6187:
      return (
        I(I(I(e, /(zoom-|grab)/, z + '$1'), /(image-set)/, z + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, z + '$1$`$1');
    case 4968:
      return (
        I(
          I(e, /(.+:)(flex-)?(.*)/, z + 'box-pack:$3' + J + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        z +
        e +
        e
      );
    case 4200:
      if (!ft(e, /flex-|baseline/))
        return J + 'grid-column-align' + Yn(e, t) + e;
      break;
    case 2592:
    case 3360:
      return J + I(e, 'template-', '') + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), ft(r.props, /grid-\w+-end/);
        })
        ? ~Wo(e + (n = n[t].value), 'span', 0)
          ? e
          : J +
            I(e, '-start', '') +
            e +
            J +
            'grid-row-span:' +
            (~Wo(n, 'span', 0) ? ft(n, /\d+/) : +ft(n, /\d+/) - +ft(e, /\d+/)) +
            ';'
        : J + I(e, '-start', '') + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return ft(r.props, /grid-\w+-start/);
        })
        ? e
        : J + I(I(e, '-end', '-span'), 'span ', '') + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, z + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (it(e) - 1 - t > 6)
        switch (se(e, t + 1)) {
          case 109:
            if (se(e, t + 4) !== 45) break;
          case 102:
            return (
              I(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  z +
                  '$2-$3$1' +
                  Nr +
                  (se(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~Wo(e, 'stretch', 0)
              ? tp(I(e, 'stretch', 'fill-available'), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return I(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, s, l, u, a) {
          return (
            J +
            o +
            ':' +
            i +
            a +
            (s ? J + o + '-span:' + (l ? u : +u - +i) + a : '') +
            e
          );
        }
      );
    case 4949:
      if (se(e, t + 6) === 121) return I(e, ':', ':' + z) + e;
      break;
    case 6444:
      switch (se(e, se(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            I(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                z +
                (se(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                z +
                '$2$3$1' +
                J +
                '$2box$3'
            ) + e
          );
        case 100:
          return I(e, ':', ':' + J) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return I(e, 'scroll-', 'scroll-snap-') + e;
  }
  return e;
}

function Si(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}

function Lg(e, t, n, r) {
  switch (e.type) {
    case _g:
      if (e.children.length) break;
    case wg:
    case Hu:
      return (e.return = e.return || e.value);
    case Yd:
      return '';
    case bd:
      return (e.return = e.value + '{' + Si(e.children, r) + '}');
    case Wi:
      if (!it((e.value = e.props.join(',')))) return '';
  }
  return it((n = Si(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}

function Fg(e) {
  var t = Zd(e);
  return function (n, r, o, i) {
    for (var s = '', l = 0; l < t; l++) s += e[l](n, r, o, i) || '';
    return s;
  };
}

function Mg(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}

function Ug(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Hu:
        e.return = tp(e.value, e.length, n);
        return;
      case bd:
        return Si([kt(e, { value: I(e.value, '@', '@' + z) })], r);
      case Wi:
        if (e.length)
          return Pg((n = e.props), function (o) {
            switch (ft(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                _n(kt(e, { props: [I(o, /:(read-\w+)/, ':' + Nr + '$1')] })),
                  _n(kt(e, { props: [o] })),
                  Tl(e, { props: uc(n, r) });
                break;
              case '::placeholder':
                _n(
                  kt(e, { props: [I(o, /:(plac\w+)/, ':' + z + 'input-$1')] })
                ),
                  _n(kt(e, { props: [I(o, /:(plac\w+)/, ':' + Nr + '$1')] })),
                  _n(kt(e, { props: [I(o, /:(plac\w+)/, J + 'input-$1')] })),
                  _n(kt(e, { props: [o] })),
                  Tl(e, { props: uc(n, r) });
                break;
            }
            return '';
          });
    }
}

var jg = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ne = {
    API_BASE_URL: 'https://webapi.omoloko.ru/api/v1',
    ACLOCAL_PATH:
      'C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal',
    ALLUSERSPROFILE: 'C:\\ProgramData',
    APPDATA: 'C:\\Users\\PussyJuice\\AppData\\Roaming',
    COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
    'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
    CommonProgramW6432: 'C:\\Program Files\\Common Files',
    COMPUTERNAME: 'DESKTOP-131BB4R',
    COMSPEC: 'C:\\WINDOWS\\system32\\cmd.exe',
    CONFIG_SITE: 'C:/Program Files/Git/etc/config.site',
    DISPLAY: 'needs-to-be-defined',
    DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
    EXEPATH: 'C:\\Program Files\\Git\\bin',
    FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
    FPS_BROWSER_USER_PROFILE_STRING: 'Default',
    GOPATH: 'C:\\Users\\PussyJuice\\go',
    HOME: 'C:\\Users\\PussyJuice',
    HOMEDRIVE: 'C:',
    HOMEPATH: '\\Users\\PussyJuice',
    HOSTNAME: 'DESKTOP-131BB4R',
    IDEA_INITIAL_DIRECTORY: 'C:\\WINDOWS\\system32',
    INFOPATH:
      'C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info',
    INIT_CWD: 'C:\\samofrom\\icecream-shop',
    KMP_DUPLICATE_LIB_OK: 'TRUE',
    KOMPAS_SDK: 'C:\\Program Files\\ASCON\\KOMPAS-3D v20\\SDK\\',
    LANG: 'ru_RU.UTF-8',
    LOCALAPPDATA: 'C:\\Users\\PussyJuice\\AppData\\Local',
    LOGONSERVER: '\\\\DESKTOP-131BB4R',
    MANPATH:
      'C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man',
    MINGW_CHOST: 'x86_64-w64-mingw32',
    MINGW_PACKAGE_PREFIX: 'mingw-w64-x86_64',
    MINGW_PREFIX: 'C:/Program Files/Git/mingw64',
    MKL_SERIAL: 'YES',
    MOSQUITTO_DIR: 'C:\\Program Files\\mosquitto',
    MSYSTEM: 'MINGW64',
    MSYSTEM_CARCH: 'x86_64',
    MSYSTEM_CHOST: 'x86_64-w64-mingw32',
    MSYSTEM_PREFIX: 'C:/Program Files/Git/mingw64',
    NODE: 'C:\\Program Files\\nodejs\\node.exe',
    NODE_ENV: 'production',
    npm_config_argv:
      '{"remain":[],"cooked":["run","build"],"original":["build"]}',
    npm_config_bin_links: 'true',
    npm_config_ignore_optional: '',
    npm_config_ignore_scripts: '',
    npm_config_init_license: 'MIT',
    npm_config_init_version: '1.0.0',
    npm_config_registry: 'https://registry.yarnpkg.com',
    npm_config_save_prefix: '^',
    npm_config_strict_ssl: 'true',
    npm_config_user_agent: 'yarn/1.22.22 npm/? node/v20.10.0 win32 x64',
    npm_config_version_commit_hooks: 'true',
    npm_config_version_git_message: 'v%s',
    npm_config_version_git_sign: '',
    npm_config_version_git_tag: 'true',
    npm_config_version_tag_prefix: 'v',
    npm_execpath:
      'C:\\Users\\PussyJuice\\AppData\\Roaming\\npm\\node_modules\\yarn\\bin\\yarn.js',
    npm_lifecycle_event: 'build',
    npm_lifecycle_script: 'tsc -b && vite build',
    npm_node_execpath: 'C:\\Program Files\\nodejs\\node.exe',
    npm_package_dependencies_axios: '^1.7.7',
    npm_package_dependencies_react: '^18.3.1',
    npm_package_dependencies_react_dom: '^18.3.1',
    npm_package_dependencies_styled_components: '^6.1.13',
    npm_package_description:
      'This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.',
    npm_package_devDependencies_eslint: '^9.11.1',
    npm_package_devDependencies_eslint_plugin_react_hooks: '^5.1.0-rc.0',
    npm_package_devDependencies_eslint_plugin_react_refresh: '^0.4.12',
    npm_package_devDependencies_globals: '^15.9.0',
    npm_package_devDependencies_prettier: '^3.3.3',
    npm_package_devDependencies_typescript: '^5.5.3',
    npm_package_devDependencies_typescript_eslint: '^8.7.0',
    npm_package_devDependencies_vite: '^5.4.8',
    npm_package_devDependencies_vite_plugin_svgr: '^4.2.0',
    npm_package_devDependencies__eslint_js: '^9.11.1',
    npm_package_devDependencies__types_node: '^22.7.6',
    npm_package_devDependencies__types_react: '^18.3.10',
    npm_package_devDependencies__types_react_dom: '^18.3.0',
    npm_package_devDependencies__types_styled_components: '^5.1.34',
    npm_package_devDependencies__vitejs_plugin_react: '^4.3.2',
    npm_package_name: 'icecream-shop',
    npm_package_private: 'true',
    npm_package_readmeFilename: 'README.md',
    npm_package_scripts_build: 'tsc -b && vite build',
    npm_package_scripts_dev: 'vite',
    npm_package_scripts_lint: 'eslint .',
    npm_package_scripts_preview: 'vite preview',
    npm_package_type: 'module',
    npm_package_version: '0.0.0',
    NUMBER_OF_PROCESSORS: '6',
    NVM_HOME: 'C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm',
    NVM_SYMLINK: 'C:\\Program Files\\nodejs',
    OneDrive: 'C:\\Users\\PussyJuice\\OneDrive',
    ORIGINAL_PATH:
      'C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\PussyJuice\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\MATLAB R2009a\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\Cloudflare\\Cloudflare WARP;C:\\Program Files\\Go\\bin;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\dotnet;C:\\Program Files\\PuTTY;C:\\Program Files\\nodejs;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Python\\Python39\\Scripts;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Python\\Python39;C:\\Users\\PussyJuice\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\PussyJuice\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\PussyJuice\\AppData\\Local\\JetBrains\\Toolbox\\scripts;C:\\Users\\PussyJuice\\go\\bin;C:\\Program Files\\JetBrains\\WebStorm 2024.1.5\\bin;C:\\Users\\PussyJuice\\.dotnet\\tools;C:\\Users\\PussyJuice\\AppData\\Roaming\\npm;C:\\samofrom\\icecream-shop\\node_modules\\.bin',
    ORIGINAL_TEMP: 'C:/Users/PUSSYJ~1/AppData/Local/Temp',
    ORIGINAL_TMP: 'C:/Users/PUSSYJ~1/AppData/Local/Temp',
    OS: 'Windows_NT',
    PATH: 'C:\\Users\\PUSSYJ~1\\AppData\\Local\\Temp\\yarn--1729361916227-0.14832132370573525;C:\\samofrom\\icecream-shop\\node_modules\\.bin;C:\\Users\\PussyJuice\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Users\\PussyJuice\\AppData\\Local\\Yarn\\bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\PussyJuice\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\PussyJuice\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\MATLAB R2009a\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\Cloudflare\\Cloudflare WARP;C:\\Program Files\\Go\\bin;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\dotnet;C:\\Program Files\\PuTTY;C:\\Program Files\\nodejs;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Python\\Python39\\Scripts;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Python\\Python39;C:\\Users\\PussyJuice\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\PussyJuice\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\PussyJuice\\AppData\\Local\\JetBrains\\Toolbox\\scripts;C:\\Users\\PussyJuice\\go\\bin;C:\\Program Files\\JetBrains\\WebStorm 2024.1.5\\bin;C:\\Users\\PussyJuice\\.dotnet\\tools;C:\\Users\\PussyJuice\\AppData\\Roaming\\npm;C:\\samofrom\\icecream-shop\\node_modules\\.bin;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl',
    PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC',
    PKG_CONFIG_PATH:
      'C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig',
    PLINK_PROTOCOL: 'ssh',
    PROCESSOR_ARCHITECTURE: 'AMD64',
    PROCESSOR_IDENTIFIER:
      'Intel64 Family 6 Model 158 Stepping 10, GenuineIntel',
    PROCESSOR_LEVEL: '6',
    PROCESSOR_REVISION: '9e0a',
    ProgramData: 'C:\\ProgramData',
    PROGRAMFILES: 'C:\\Program Files',
    'ProgramFiles(x86)': 'C:\\Program Files (x86)',
    ProgramW6432: 'C:\\Program Files',
    PROMPT: '$P$G',
    PSModulePath:
      'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
    PT8HOME: 'C:\\Program Files\\Cisco Packet Tracer 8.2.1',
    PUBLIC: 'C:\\Users\\Public',
    PWD: 'C:/samofrom/icecream-shop',
    QML_DISABLE_DISK_CACHE: '1',
    QML_FORCE_DISK_CACHE: '0',
    QT_DISABLE_SHADER_DISK_CACHE: '1',
    SESSIONNAME: 'Console',
    SHELL: 'C:\\Program Files\\Git\\usr\\bin\\bash.exe',
    SHLVL: '1',
    SSH_ASKPASS: 'C:/Program Files/Git/mingw64/bin/git-askpass.exe',
    SYSTEMDRIVE: 'C:',
    SYSTEMROOT: 'C:\\WINDOWS',
    TEMP: 'C:\\Users\\PUSSYJ~1\\AppData\\Local\\Temp',
    TERM: 'xterm-256color',
    TERMINAL_EMULATOR: 'JetBrains-JediTerm',
    TERM_SESSION_ID: '79c437a6-fdbb-4db0-a087-8913e3250de8',
    TMP: 'C:\\Users\\PUSSYJ~1\\AppData\\Local\\Temp',
    TMPDIR: 'C:\\Users\\PUSSYJ~1\\AppData\\Local\\Temp',
    USERDOMAIN: 'DESKTOP-131BB4R',
    USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-131BB4R',
    USERNAME: 'PussyJuice',
    USERPROFILE: 'C:\\Users\\PussyJuice',
    VBOX_MSI_INSTALL_PATH: 'C:\\Program Files\\Oracle\\VirtualBox\\',
    WebStorm: 'C:\\Program Files\\JetBrains\\WebStorm 2024.1.5\\bin;',
    WINDIR: 'C:\\WINDOWS',
    YARN_WRAP_OUTPUT: 'false',
  },
  qn =
    (typeof process < 'u' &&
      Ne !== void 0 &&
      (Ne.REACT_APP_SC_ATTR || Ne.SC_ATTR)) ||
    'data-styled',
  np = 'active',
  rp = 'data-styled-version',
  Ji = '6.1.13',
  Vu = `/*!sc*/
`,
  wi = typeof window < 'u' && 'HTMLElement' in window,
  zg = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
        Ne !== void 0 &&
        Ne.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        Ne.REACT_APP_SC_DISABLE_SPEEDY !== ''
      ? Ne.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
        Ne.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < 'u' &&
        Ne !== void 0 &&
        Ne.SC_DISABLE_SPEEDY !== void 0 &&
        Ne.SC_DISABLE_SPEEDY !== '' &&
        Ne.SC_DISABLE_SPEEDY !== 'false' &&
        Ne.SC_DISABLE_SPEEDY),
  $g = {},
  Ki = Object.freeze([]),
  Xn = Object.freeze({});

function op(e, t, n) {
  return (
    n === void 0 && (n = Xn), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}

var ip = new Set([
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'u',
    'ul',
    'use',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]),
  Bg = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Wg = /(^-|-$)/g;

function fc(e) {
  return e.replace(Bg, '-').replace(Wg, '');
}

var Hg = /(a)(d)/gi,
  To = 52,
  dc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };

function Al(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > To; t = (t / To) | 0) n = dc(t % To) + n;
  return (dc(t % To) + n).replace(Hg, '$1-$2');
}

var Ts,
  sp = 5381,
  Ln = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  lp = function (e) {
    return Ln(sp, e);
  };

function up(e) {
  return Al(lp(e) >>> 0);
}

function Gg(e) {
  return e.displayName || e.name || 'Component';
}

function Os(e) {
  return typeof e == 'string' && !0;
}

var ap = typeof Symbol == 'function' && Symbol.for,
  cp = ap ? Symbol.for('react.memo') : 60115,
  Vg = ap ? Symbol.for('react.forward_ref') : 60112,
  Jg = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Kg = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  fp = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Qg =
    (((Ts = {})[Vg] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Ts[cp] = fp),
    Ts);

function pc(e) {
  return ('type' in (t = e) && t.type.$$typeof) === cp
    ? fp
    : '$$typeof' in e
      ? Qg[e.$$typeof]
      : Jg;
  var t;
}

var Yg = Object.defineProperty,
  bg = Object.getOwnPropertyNames,
  mc = Object.getOwnPropertySymbols,
  qg = Object.getOwnPropertyDescriptor,
  Xg = Object.getPrototypeOf,
  hc = Object.prototype;

function dp(e, t, n) {
  if (typeof t != 'string') {
    if (hc) {
      var r = Xg(t);
      r && r !== hc && dp(e, r, n);
    }
    var o = bg(t);
    mc && (o = o.concat(mc(t)));
    for (var i = pc(e), s = pc(t), l = 0; l < o.length; ++l) {
      var u = o[l];
      if (!(u in Kg || (n && n[u]) || (s && u in s) || (i && u in i))) {
        var a = qg(t, u);
        try {
          Yg(e, u, a);
        } catch {}
      }
    }
  }
  return e;
}

function hn(e) {
  return typeof e == 'function';
}

function Ju(e) {
  return typeof e == 'object' && 'styledComponentId' in e;
}

function rn(e, t) {
  return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
}

function Dl(e, t) {
  if (e.length === 0) return '';
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}

function Yr(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    e.constructor.name === Object.name &&
    !('props' in e && e.$$typeof)
  );
}

function Il(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Yr(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Il(e[r], t[r]);
  else if (Yr(t)) for (var r in t) e[r] = Il(e[r], t[r]);
  return e;
}

function Ku(e, t) {
  Object.defineProperty(e, 'toString', { value: t });
}

function gn(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
      .concat(e, ' for more information.')
      .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : '')
  );
}

var Zg = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }

    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw gn(16, ''.concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var s = o; s < i; s++) this.groupSizes[s] = 0;
        }
        for (
          var l = this.indexOfGroup(t + 1), u = ((s = 0), n.length);
          s < u;
          s++
        )
          this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = '';
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            s = o;
          s < i;
          s++
        )
          n += ''.concat(this.tag.getRule(s)).concat(Vu);
        return n;
      }),
      e
    );
  })(),
  Vo = new Map(),
  _i = new Map(),
  Jo = 1,
  Oo = function (e) {
    if (Vo.has(e)) return Vo.get(e);
    for (; _i.has(Jo); ) Jo++;
    var t = Jo++;
    return Vo.set(e, t), _i.set(t, e), t;
  },
  e1 = function (e, t) {
    (Jo = t + 1), Vo.set(e, t), _i.set(t, e);
  },
  t1 = 'style['.concat(qn, '][').concat(rp, '="').concat(Ji, '"]'),
  n1 = new RegExp(
    '^'.concat(qn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  r1 = function (e, t, n) {
    for (var r, o = n.split(','), i = 0, s = o.length; i < s; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  o1 = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : '').split(Vu),
        o = [],
        i = 0,
        s = r.length;
      i < s;
      i++
    ) {
      var l = r[i].trim();
      if (l) {
        var u = l.match(n1);
        if (u) {
          var a = 0 | parseInt(u[1], 10),
            f = u[2];
          a !== 0 && (e1(f, a), r1(e, f, u[3]), e.getTag().insertRules(a, o)),
            (o.length = 0);
        } else o.push(l);
      }
    }
  },
  gc = function (e) {
    for (
      var t = document.querySelectorAll(t1), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var o = t[n];
      o &&
        o.getAttribute(qn) !== np &&
        (o1(e, o), o.parentNode && o.parentNode.removeChild(o));
    }
  };

function i1() {
  return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
}

var pp = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      o = (function (l) {
        var u = Array.from(l.querySelectorAll('style['.concat(qn, ']')));
        return u[u.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(qn, np), r.setAttribute(rp, Ji);
    var s = i1();
    return s && r.setAttribute('nonce', s), n.insertBefore(r, i), r;
  },
  s1 = (function () {
    function e(t) {
      (this.element = pp(t)),
        this.element.appendChild(document.createTextNode('')),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var s = r[o];
            if (s.ownerNode === n) return s;
          }
          throw gn(17);
        })(this.element)),
        (this.length = 0);
    }

    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : '';
      }),
      e
    );
  })(),
  l1 = (function () {
    function e(t) {
      (this.element = pp(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }

    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : '';
      }),
      e
    );
  })(),
  u1 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }

    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : '';
      }),
      e
    );
  })(),
  yc = wi,
  a1 = { isServer: !wi, useCSSOMInjection: !zg },
  Ci = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Xn), n === void 0 && (n = {});
      var o = this;
      (this.options = le(le({}, a1), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && wi && yc && ((yc = !1), gc(this)),
        Ku(this, function () {
          return (function (i) {
            for (
              var s = i.getTag(),
                l = s.length,
                u = '',
                a = function (m) {
                  var h = (function (d) {
                    return _i.get(d);
                  })(m);
                  if (h === void 0) return 'continue';
                  var S = i.names.get(h),
                    g = s.getGroup(m);
                  if (S === void 0 || !S.size || g.length === 0)
                    return 'continue';
                  var v = ''
                      .concat(qn, '.g')
                      .concat(m, '[id="')
                      .concat(h, '"]'),
                    k = '';
                  S !== void 0 &&
                    S.forEach(function (d) {
                      d.length > 0 && (k += ''.concat(d, ','));
                    }),
                    (u += ''
                      .concat(g)
                      .concat(v, '{content:"')
                      .concat(k, '"}')
                      .concat(Vu));
                },
                f = 0;
              f < l;
              f++
            )
              a(f);
            return u;
          })(o);
        });
    }

    return (
      (e.registerId = function (t) {
        return Oo(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && wi && gc(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            le(le({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new u1(o) : r ? new s1(o) : new l1(o);
            })(this.options)),
            new Zg(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Oo(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Oo(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Oo(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  c1 = /&/g,
  f1 = /^\s*\/\/.*$/gm;

function mp(e, t) {
  return e.map(function (n) {
    return (
      n.type === 'rule' &&
        ((n.value = ''.concat(t, ' ').concat(n.value)),
        (n.value = n.value.replaceAll(',', ','.concat(t, ' '))),
        (n.props = n.props.map(function (r) {
          return ''.concat(t, ' ').concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== '@keyframes' &&
        (n.children = mp(n.children, t)),
      n
    );
  });
}

function d1(e) {
  var t,
    n,
    r,
    o = Xn,
    i = o.options,
    s = i === void 0 ? Xn : i,
    l = o.plugins,
    u = l === void 0 ? Ki : l,
    a = function (h, S, g) {
      return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, '').length > 0
        ? '.'.concat(t)
        : h;
    },
    f = u.slice();
  f.push(function (h) {
    h.type === Wi &&
      h.value.includes('&') &&
      (h.props[0] = h.props[0].replace(c1, n).replace(r, a));
  }),
    s.prefix && f.push(Ug),
    f.push(Lg);
  var m = function (h, S, g, v) {
    S === void 0 && (S = ''),
      g === void 0 && (g = ''),
      v === void 0 && (v = '&'),
      (t = v),
      (n = S),
      (r = new RegExp('\\'.concat(n, '\\b'), 'g'));
    var k = h.replace(f1, ''),
      d = Dg(g || S ? ''.concat(g, ' ').concat(S, ' { ').concat(k, ' }') : k);
    s.namespace && (d = mp(d, s.namespace));
    var c = [];
    return (
      Si(
        d,
        Fg(
          f.concat(
            Mg(function (p) {
              return c.push(p);
            })
          )
        )
      ),
      c
    );
  };
  return (
    (m.hash = u.length
      ? u
          .reduce(function (h, S) {
            return S.name || gn(15), Ln(h, S.name);
          }, sp)
          .toString()
      : ''),
    m
  );
}

var p1 = new Ci(),
  Ll = d1(),
  hp = be.createContext({
    shouldForwardProp: void 0,
    styleSheet: p1,
    stylis: Ll,
  });
hp.Consumer;
be.createContext(void 0);

function Fl() {
  return L.useContext(hp);
}

var m1 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Ll);
        var s = r.name + i.hash;
        o.hasNameForId(r.id, s) ||
          o.insertRules(r.id, s, i(r.rules, s, '@keyframes'));
      }),
        (this.name = t),
        (this.id = 'sc-keyframes-'.concat(t)),
        (this.rules = n),
        Ku(this, function () {
          throw gn(12, String(r.name));
        });
    }

    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Ll), this.name + t.hash;
      }),
      e
    );
  })(),
  h1 = function (e) {
    return e >= 'A' && e <= 'Z';
  };

function vc(e) {
  for (var t = '', n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === '-' && e[0] === '-') return e;
    h1(r) ? (t += '-' + r.toLowerCase()) : (t += r);
  }
  return t.startsWith('ms-') ? '-' + t : t;
}

var gp = function (e) {
    return e == null || e === !1 || e === '';
  },
  yp = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !gp(i) &&
        ((Array.isArray(i) && i.isCss) || hn(i)
          ? r.push(''.concat(vc(o), ':'), i, ';')
          : Yr(i)
            ? r.push.apply(
                r,
                Qr(Qr([''.concat(o, ' {')], yp(i), !1), ['}'], !1)
              )
            : r.push(
                ''
                  .concat(vc(o), ': ')
                  .concat(
                    ((t = o),
                    (n = i) == null || typeof n == 'boolean' || n === ''
                      ? ''
                      : typeof n != 'number' ||
                          n === 0 ||
                          t in jg ||
                          t.startsWith('--')
                        ? String(n).trim()
                        : ''.concat(n, 'px')),
                    ';'
                  )
              ));
    }
    return r;
  };

function Bt(e, t, n, r) {
  if (gp(e)) return [];
  if (Ju(e)) return ['.'.concat(e.styledComponentId)];
  if (hn(e)) {
    if (!hn((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return Bt(o, t, n, r);
  }
  var i;
  return e instanceof m1
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Yr(e)
      ? yp(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            Ki,
            e.map(function (s) {
              return Bt(s, t, n, r);
            })
          )
        : [e.toString()];
}

function vp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (hn(n) && !Ju(n)) return !1;
  }
  return !0;
}

var g1 = lp(Ji),
  y1 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && vp(t)),
        (this.componentId = n),
        (this.baseHash = Ln(g1, n)),
        (this.baseStyle = r),
        Ci.registerId(n);
    }

    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : '';
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = rn(o, this.staticRulesId);
          else {
            var i = Dl(Bt(this.rules, t, n, r)),
              s = Al(Ln(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var l = r(i, '.'.concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, l);
            }
            (o = rn(o, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var u = Ln(this.baseHash, r.hash), a = '', f = 0;
            f < this.rules.length;
            f++
          ) {
            var m = this.rules[f];
            if (typeof m == 'string') a += m;
            else if (m) {
              var h = Dl(Bt(m, t, n, r));
              (u = Ln(u, h + f)), (a += h);
            }
          }
          if (a) {
            var S = Al(u >>> 0);
            n.hasNameForId(this.componentId, S) ||
              n.insertRules(
                this.componentId,
                S,
                r(a, '.'.concat(S), void 0, this.componentId)
              ),
              (o = rn(o, S));
          }
        }
        return o;
      }),
      e
    );
  })(),
  br = be.createContext(void 0);
br.Consumer;

function v1(e) {
  var t = be.useContext(br),
    n = L.useMemo(
      function () {
        return (function (r, o) {
          if (!r) throw gn(14);
          if (hn(r)) {
            var i = r(o);
            return i;
          }
          if (Array.isArray(r) || typeof r != 'object') throw gn(8);
          return o ? le(le({}, o), r) : r;
        })(e.theme, t);
      },
      [e.theme, t]
    );
  return e.children
    ? be.createElement(br.Provider, { value: n }, e.children)
    : null;
}

var Ns = {};

function S1(e, t, n) {
  var r = Ju(e),
    o = e,
    i = !Os(e),
    s = t.attrs,
    l = s === void 0 ? Ki : s,
    u = t.componentId,
    a =
      u === void 0
        ? (function (w, C) {
            var P = typeof w != 'string' ? 'sc' : fc(w);
            Ns[P] = (Ns[P] || 0) + 1;
            var _ = ''.concat(P, '-').concat(up(Ji + P + Ns[P]));
            return C ? ''.concat(C, '-').concat(_) : _;
          })(t.displayName, t.parentComponentId)
        : u,
    f = t.displayName,
    m =
      f === void 0
        ? (function (w) {
            return Os(w) ? 'styled.'.concat(w) : 'Styled('.concat(Gg(w), ')');
          })(e)
        : f,
    h =
      t.displayName && t.componentId
        ? ''.concat(fc(t.displayName), '-').concat(t.componentId)
        : t.componentId || a,
    S = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l,
    g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var v = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      g = function (w, C) {
        return v(w, C) && k(w, C);
      };
    } else g = v;
  }
  var d = new y1(n, h, r ? o.componentStyle : void 0);

  function c(w, C) {
    return (function (P, _, T) {
      var $ = P.attrs,
        F = P.componentStyle,
        Te = P.defaultProps,
        Kt = P.foldedComponentIds,
        Qt = P.styledComponentId,
        lo = P.target,
        Zi = be.useContext(br),
        ir = Fl(),
        Yt = P.shouldForwardProp || ir.shouldForwardProp,
        x = op(_, Zi, Te) || Xn,
        N = (function (_t, Oe, at) {
          for (
            var sr,
              qt = le(le({}, Oe), { className: void 0, theme: at }),
              es = 0;
            es < _t.length;
            es += 1
          ) {
            var uo = hn((sr = _t[es])) ? sr(qt) : sr;
            for (var Ct in uo)
              qt[Ct] =
                Ct === 'className'
                  ? rn(qt[Ct], uo[Ct])
                  : Ct === 'style'
                    ? le(le({}, qt[Ct]), uo[Ct])
                    : uo[Ct];
          }
          return (
            Oe.className && (qt.className = rn(qt.className, Oe.className)), qt
          );
        })($, _, x),
        A = N.as || lo,
        W = {};
      for (var H in N)
        N[H] === void 0 ||
          H[0] === '$' ||
          H === 'as' ||
          (H === 'theme' && N.theme === x) ||
          (H === 'forwardedAs'
            ? (W.as = N.forwardedAs)
            : (Yt && !Yt(H, A)) || (W[H] = N[H]));
      var bt = (function (_t, Oe) {
          var at = Fl(),
            sr = _t.generateAndInjectStyles(Oe, at.styleSheet, at.stylis);
          return sr;
        })(F, N),
        Ve = rn(Kt, Qt);
      return (
        bt && (Ve += ' ' + bt),
        N.className && (Ve += ' ' + N.className),
        (W[Os(A) && !ip.has(A) ? 'class' : 'className'] = Ve),
        (W.ref = T),
        L.createElement(A, W)
      );
    })(p, w, C);
  }

  c.displayName = m;
  var p = be.forwardRef(c);
  return (
    (p.attrs = S),
    (p.componentStyle = d),
    (p.displayName = m),
    (p.shouldForwardProp = g),
    (p.foldedComponentIds = r
      ? rn(o.foldedComponentIds, o.styledComponentId)
      : ''),
    (p.styledComponentId = h),
    (p.target = r ? o.target : e),
    Object.defineProperty(p, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (w) {
        this._foldedDefaultProps = r
          ? (function (C) {
              for (var P = [], _ = 1; _ < arguments.length; _++)
                P[_ - 1] = arguments[_];
              for (var T = 0, $ = P; T < $.length; T++) Il(C, $[T], !0);
              return C;
            })({}, o.defaultProps, w)
          : w;
      },
    }),
    Ku(p, function () {
      return '.'.concat(p.styledComponentId);
    }),
    i &&
      dp(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}

function Sc(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}

var wc = function (e) {
  return Object.assign(e, { isCss: !0 });
};

function Tt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (hn(e) || Yr(e)) return wc(Bt(Sc(Ki, Qr([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == 'string'
    ? Bt(r)
    : wc(Bt(Sc(r, t)));
}

function Ml(e, t, n) {
  if ((n === void 0 && (n = Xn), !t)) throw gn(1, t);
  var r = function (o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, Tt.apply(void 0, Qr([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return Ml(
        e,
        t,
        le(le({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (o) {
      return Ml(e, t, le(le({}, n), o));
    }),
    r
  );
}

var Sp = function (e) {
    return Ml(S1, e);
  },
  U = Sp;
ip.forEach(function (e) {
  U[e] = Sp(e);
});
var w1 = (function () {
  function e(t, n) {
    (this.rules = t),
      (this.componentId = n),
      (this.isStatic = vp(t)),
      Ci.registerId(this.componentId + 1);
  }

  return (
    (e.prototype.createStyles = function (t, n, r, o) {
      var i = o(Dl(Bt(this.rules, n, r, o)), ''),
        s = this.componentId + t;
      r.insertRules(s, s, i);
    }),
    (e.prototype.removeStyles = function (t, n) {
      n.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, n, r, o) {
      t > 2 && Ci.registerId(this.componentId + t),
        this.removeStyles(t, r),
        this.createStyles(t, n, r, o);
    }),
    e
  );
})();

function _1(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Tt.apply(void 0, Qr([e], t, !1)),
    o = 'sc-global-'.concat(up(JSON.stringify(r))),
    i = new w1(r, o),
    s = function (u) {
      var a = Fl(),
        f = be.useContext(br),
        m = be.useRef(a.styleSheet.allocateGSInstance(o)).current;
      return (
        a.styleSheet.server && l(m, u, a.styleSheet, f, a.stylis),
        be.useLayoutEffect(
          function () {
            if (!a.styleSheet.server)
              return (
                l(m, u, a.styleSheet, f, a.stylis),
                function () {
                  return i.removeStyles(m, a.styleSheet);
                }
              );
          },
          [m, u, a.styleSheet, f, a.stylis]
        ),
        null
      );
    };

  function l(u, a, f, m, h) {
    if (i.isStatic) i.renderStyles(u, $g, f, h);
    else {
      var S = le(le({}, a), { theme: op(a, m, s.defaultProps) });
      i.renderStyles(u, S, f, h);
    }
  }

  return be.memo(s);
}

const C1 = _1`
  
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
  }

  body {
    line-height: normal;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    background-color: ${({ theme: e }) => e.color['bg/white']};
    margin: 0;
    padding: 0;
    min-height: 100%;
    text-rendering: optimizeSpeed;
  }
  
  #root {
    min-height: 100%;
  }
  
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  
  img {
   

  }
  
  h1, h2, h3,h4,h5,h6 {
    margin: 0;
  }
`,
  P1 = {
    color: {
      'text/primary': '#354053',
      'text/secondary': '#888888',
      'text/accent': '#2490E6',
      'text/white': '#ffffff',
      'bg/white': '#FFFFFF',
      'bg/black': '#000000',
      'bg/grey': '#fcfcfc',
      blue: '#2490E6',
      red: '#f64d4d',
      green: '#16c75d',
      orange: '#ffb842',
      buttonContained: '#2490E6',
      buttonContainedHover: '#1d80dd',
      cartBackground: '#ebf6fb',
    },
    shadow: {
      'shadow/1': '0 2px 13px rgba(48, 48, 48, .25)',
      'shadow/2': '0 4px 10px hsla(0, 0%, 64.3%, .1)',
    },
    stroke: { 'stroke/1': '1px solid #eaeaea' },
    typography: {
      h1: Tt`
      font-size: 40px;
      font-weight: 700;
      line-height: 38px;
    `,
      h2: Tt`
      font-size: 18px;
      font-weight: 700;
      line-height: 17px;
    `,
      bodyM: Tt`
      font-size: 15px;
      font-weight: 500;
      line-height: 20px;
    `,
      body: Tt`
      font-size: 15px;
      font-weight: 400;
      line-height: 14px;
    `,
      bodyS: Tt`
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    `,
      button: Tt`
      font-size: 15px;
      font-weight: 600;
      line-height: 14px;
    `,
    },
    breakpoint: { sm: '(max-width: 625px)' },
  };
var Fn;
((e) => {
  (e.Page = U.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
  `),
    (e.Header = U.header`
    position: fixed;

    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px 32px;

    background-color: ${({ theme: t }) => t.color['bg/white']};
    box-shadow: ${({ theme: t }) => t.shadow['shadow/2']};

    z-index: 1000;
  `),
    (e.Content = U.main`
    display: flex;
    justify-content: center;
    padding: 95px 32px 16px;
    flex: 1;
  `),
    (e.Footer = U.footer`
    padding: 16px 32px;
    background-color: ${({ theme: t }) => t.color['bg/grey']};
  `);
})(Fn || (Fn = {}));
const E1 = ({ Header: e, Content: t, Footer: n }) =>
  O.jsxs(Fn.Page, {
    children: [
      O.jsx(Fn.Header, { children: e }),
      O.jsx(Fn.Content, { children: t }),
      O.jsx(Fn.Footer, { children: n }),
    ],
  });
var Ul;
((e) => {
  e.Logo = U.a`
    display: inline-flex;
    align-items: center;

    gap: 8px;

    svg {
      width: 40px;
      height: 40px;
    }
  `;
})(Ul || (Ul = {}));
const k1 = (e) =>
    L.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        xmlnsXlink: 'http://www.w3.org/1999/xlink',
        id: 'Layer_1',
        viewBox: '0 0 290.627 290.627',
        xmlSpace: 'preserve',
        ...e,
      },
      L.createElement(
        'g',
        null,
        L.createElement(
          'g',
          null,
          L.createElement(
            'g',
            null,
            L.createElement('rect', {
              x: 123.458,
              y: 98.438,
              style: { fill: '#F9BA48' },
              width: 9.375,
              height: 93.75,
            })
          ),
          L.createElement(
            'g',
            null,
            L.createElement('rect', {
              x: 160.958,
              y: 98.438,
              style: { fill: '#F9BA48' },
              width: 9.375,
              height: 93.75,
            })
          ),
          L.createElement(
            'g',
            null,
            L.createElement('rect', {
              x: 198.458,
              y: 98.438,
              style: { fill: '#F9BA48' },
              width: 9.375,
              height: 93.75,
            })
          ),
          L.createElement(
            'g',
            null,
            L.createElement('path', {
              style: { fill: '#333333' },
              d: 'M67.208,220.313h10.359h8.391h162.909l40.176-140.625h-11.048     c-1.463-29.447-16.589-32.813-23.292-32.813c-6.075,0-10.641,2.348-14.062,5.517v-5.517c0-7.753,6.309-14.063,14.062-14.063     v-9.375c-12.923,0-23.437,10.514-23.437,23.438v5.517c-3.417-3.169-7.983-5.517-14.058-5.517c-4.059,0-11.198,1.247-16.542,8.733     l6.422-27.291c1.622-6.891,0.033-14.03-4.364-19.58S191.742,0,184.663,0c-10.589,0-19.781,7.177-22.35,17.452l-6.478,25.912     c-8.33-17.302-25.987-29.302-46.439-29.302c-28.43,0-51.562,23.133-51.562,51.563c0,4.8,0.717,9.497,2.02,14.063h-6.131     L38.099,14.063H1.583v9.375h29.109l44.644,187.5h-8.128c-12.923,0-23.437,10.514-23.437,23.438s10.514,23.438,23.437,23.438     h0.422c-0.258,1.528-0.422,3.089-0.422,4.688c0,15.511,12.614,28.125,28.125,28.125s28.125-12.614,28.125-28.125     c0-1.598-0.164-3.159-0.422-4.688h66.469c-0.258,1.528-0.422,3.089-0.422,4.688c0,15.511,12.614,28.125,28.125,28.125     s28.125-12.614,28.125-28.125s-12.614-28.125-28.125-28.125c-10.383,0-19.448,5.672-24.319,14.063h-73.237     c-4.87-8.391-13.936-14.063-24.319-14.063s-19.448,5.672-24.319,14.063h-3.806c-7.753,0-14.062-6.309-14.062-14.063     S59.455,220.313,67.208,220.313z M217.208,56.25c10.809,0,14.133,14.888,14.161,15.023c0.45,2.166,2.363,3.727,4.575,3.727     c0.005,0,0.014,0,0.014,0c2.208,0,4.12-1.552,4.584-3.713c0.033-0.15,3.356-15.037,14.166-15.037     c10.552,0,13.355,13.092,13.931,23.438h-65.362C203.854,69.347,206.656,56.25,217.208,56.25z M160.817,62.077l10.589-42.352     c1.523-6.094,6.975-10.35,13.256-10.35c4.2,0,8.105,1.889,10.716,5.18c2.606,3.291,3.548,7.523,2.587,11.616L185.37,79.688     h-26.428c1.298-4.566,2.016-9.262,2.016-14.063c0-1.2-0.098-2.381-0.178-3.563L160.817,62.077z M151.583,65.625     c0,4.828-0.862,9.539-2.47,14.063h-13.805c-1.613-4.514-2.475-9.225-2.475-14.063c0-9.755,3.314-18.975,9.375-26.456     C148.059,46.411,151.583,55.613,151.583,65.625z M135.496,32.545c-7.791,9.267-12.037,20.831-12.037,33.08     c0,4.805,0.713,9.502,2.016,14.063H93.317c1.303-4.561,2.016-9.258,2.016-14.063c0-12.248-4.247-23.813-12.037-33.08     c7.191-5.686,16.247-9.108,26.1-9.108S128.305,26.859,135.496,32.545z M67.208,65.625c0-10.012,3.525-19.214,9.375-26.456     c6.061,7.481,9.375,16.702,9.375,26.456c0,4.838-0.862,9.548-2.47,14.063H69.683C68.071,75.164,67.208,70.453,67.208,65.625z      M55.958,89.063h220.664l-34.823,121.875H85.958h-0.984L55.958,89.063z M217.208,243.75c10.341,0,18.75,8.409,18.75,18.75     s-8.409,18.75-18.75,18.75s-18.75-8.409-18.75-18.75S206.867,243.75,217.208,243.75z M95.333,243.75     c10.341,0,18.75,8.409,18.75,18.75s-8.409,18.75-18.75,18.75s-18.75-8.409-18.75-18.75S84.993,243.75,95.333,243.75z',
            }),
            L.createElement('circle', {
              style: { fill: '#333333' },
              cx: 217.208,
              cy: 262.5,
              r: 4.688,
            }),
            L.createElement('circle', {
              style: { fill: '#333333' },
              cx: 95.333,
              cy: 262.5,
              r: 4.688,
            }),
            L.createElement('rect', {
              x: 85.958,
              y: 112.5,
              style: { fill: '#333333' },
              width: 164.062,
              height: 9.375,
            }),
            L.createElement('rect', {
              x: 90.646,
              y: 140.625,
              style: { fill: '#333333' },
              width: 150,
              height: 9.375,
            }),
            L.createElement('rect', {
              x: 95.333,
              y: 168.75,
              style: { fill: '#333333' },
              width: 135.937,
              height: 9.375,
            }),
            L.createElement('rect', {
              x: 175.014,
              y: 34.867,
              transform:
                'matrix(0.2425 -0.9701 0.9701 0.2425 92.9218 208.0676)',
              style: { fill: '#333333' },
              width: 9.375,
              height: 19.325,
            }),
            L.createElement('rect', {
              x: 170.327,
              y: 53.616,
              transform: 'matrix(0.2425 -0.9701 0.9701 0.2425 71.182 217.7223)',
              style: { fill: '#333333' },
              width: 9.375,
              height: 19.325,
            })
          )
        )
      )
    ),
  x1 = (e, t) => {
    switch (t) {
      case 'primary':
        return e.color['text/primary'];
      case 'secondary':
        return e.color['text/secondary'];
      case 'accent':
        return e.color['text/accent'];
      default:
        return 'inherit';
    }
  },
  oo = U.span`
  text-align: ${(e) => (e.$centerAlign ? 'center' : 'unset')};
  color: ${({ theme: e, $color: t }) => x1(e, t)};
  font-weight: ${({ $bold: e }) => (e ? '600' : 'normal')};
`,
  R1 = U(oo).attrs({ as: 'h1' })`
  ${({ theme: e }) => e.typography.h1};
  letter-spacing: -1.6px;
`,
  T1 = U(oo).attrs({ as: 'h2' })`
  ${({ theme: e }) => e.typography.h2};
`,
  O1 = U(oo).attrs({ as: 'p' })`
  ${({ theme: e }) => e.typography.bodyM};
`,
  N1 = U(oo).attrs({ as: 'p' })`
  ${({ theme: e }) => e.typography.body};
`,
  A1 = U(oo).attrs({ as: 'p' })`
  ${({ theme: e }) => e.typography.bodyS};
`,
  D1 = { h1: R1, h2: T1, bodyM: O1, body: N1, bodyS: A1 },
  ot = ({
    children: e,
    variant: t = 'body',
    centerAlign: n = !1,
    color: r,
    bold: o = !1,
  }) => {
    const i = D1[t];
    return O.jsx(i, { $centerAlign: n, $color: r, $bold: o, children: e });
  },
  I1 = ({ companyName: e }) =>
    O.jsxs(Ul.Logo, {
      href: '/',
      children: [O.jsx(k1, {}), O.jsx(ot, { variant: 'h2', children: e })],
    });
var jl;
((e) => {
  e.ProductList = U.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
})(jl || (jl = {}));

function wp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}

const { toString: L1 } = Object.prototype,
  { getPrototypeOf: Qu } = Object,
  Qi = ((e) => (t) => {
    const n = L1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  tt = (e) => ((e = e.toLowerCase()), (t) => Qi(t) === e),
  Yi = (e) => (t) => typeof t === e,
  { isArray: rr } = Array,
  qr = Yi('undefined');

function F1(e) {
  return (
    e !== null &&
    !qr(e) &&
    e.constructor !== null &&
    !qr(e.constructor) &&
    Le(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}

const _p = tt('ArrayBuffer');

function M1(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _p(e.buffer)),
    t
  );
}

const U1 = Yi('string'),
  Le = Yi('function'),
  Cp = Yi('number'),
  bi = (e) => e !== null && typeof e == 'object',
  j1 = (e) => e === !0 || e === !1,
  Ko = (e) => {
    if (Qi(e) !== 'object') return !1;
    const t = Qu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  z1 = tt('Date'),
  $1 = tt('File'),
  B1 = tt('Blob'),
  W1 = tt('FileList'),
  H1 = (e) => bi(e) && Le(e.pipe),
  G1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Le(e.append) &&
          ((t = Qi(e)) === 'formdata' ||
            (t === 'object' &&
              Le(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  V1 = tt('URLSearchParams'),
  [J1, K1, Q1, Y1] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    tt
  ),
  b1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

function io(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), rr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let l;
    for (r = 0; r < s; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}

function Pp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}

const on =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Ep = (e) => !qr(e) && e !== on;

function zl() {
  const { caseless: e } = (Ep(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Pp(t, o)) || o;
      Ko(t[i]) && Ko(r)
        ? (t[i] = zl(t[i], r))
        : Ko(r)
          ? (t[i] = zl({}, r))
          : rr(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && io(arguments[r], n);
  return t;
}

const q1 = (e, t, n, { allOwnKeys: r } = {}) => (
    io(
      t,
      (o, i) => {
        n && Le(o) ? (e[i] = wp(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  X1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Z1 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  e0 = (e, t, n, r) => {
    let o, i, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && Qu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  t0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  n0 = (e) => {
    if (!e) return null;
    if (rr(e)) return e;
    let t = e.length;
    if (!Cp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  r0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Qu(Uint8Array)),
  o0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  i0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  s0 = tt('HTMLFormElement'),
  l0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  _c = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  u0 = tt('RegExp'),
  kp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    io(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  a0 = (e) => {
    kp(e, (t, n) => {
      if (Le(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Le(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  c0 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return rr(e) ? r(e) : r(String(e).split(t)), n;
  },
  f0 = () => {},
  d0 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  As = 'abcdefghijklmnopqrstuvwxyz',
  Cc = '0123456789',
  xp = { DIGIT: Cc, ALPHA: As, ALPHA_DIGIT: As + As.toUpperCase() + Cc },
  p0 = (e = 16, t = xp.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };

function m0(e) {
  return !!(
    e &&
    Le(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}

const h0 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (bi(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = rr(r) ? [] : {};
            return (
              io(r, (s, l) => {
                const u = n(s, o + 1);
                !qr(u) && (i[l] = u);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  g0 = tt('AsyncFunction'),
  y0 = (e) => e && (bi(e) || Le(e)) && Le(e.then) && Le(e.catch),
  Rp = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            on.addEventListener(
              'message',
              ({ source: o, data: i }) => {
                o === on && i === n && r.length && r.shift()();
              },
              !1
            ),
            (o) => {
              r.push(o), on.postMessage(n, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == 'function',
    Le(on.postMessage)
  ),
  v0 =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(on)
      : (typeof process < 'u' && process.nextTick) || Rp,
  y = {
    isArray: rr,
    isArrayBuffer: _p,
    isBuffer: F1,
    isFormData: G1,
    isArrayBufferView: M1,
    isString: U1,
    isNumber: Cp,
    isBoolean: j1,
    isObject: bi,
    isPlainObject: Ko,
    isReadableStream: J1,
    isRequest: K1,
    isResponse: Q1,
    isHeaders: Y1,
    isUndefined: qr,
    isDate: z1,
    isFile: $1,
    isBlob: B1,
    isRegExp: u0,
    isFunction: Le,
    isStream: H1,
    isURLSearchParams: V1,
    isTypedArray: r0,
    isFileList: W1,
    forEach: io,
    merge: zl,
    extend: q1,
    trim: b1,
    stripBOM: X1,
    inherits: Z1,
    toFlatObject: e0,
    kindOf: Qi,
    kindOfTest: tt,
    endsWith: t0,
    toArray: n0,
    forEachEntry: o0,
    matchAll: i0,
    isHTMLForm: s0,
    hasOwnProperty: _c,
    hasOwnProp: _c,
    reduceDescriptors: kp,
    freezeMethods: a0,
    toObjectSet: c0,
    toCamelCase: l0,
    noop: f0,
    toFiniteNumber: d0,
    findKey: Pp,
    global: on,
    isContextDefined: Ep,
    ALPHABET: xp,
    generateString: p0,
    isSpecCompliantForm: m0,
    toJSONObject: h0,
    isAsyncFn: g0,
    isThenable: y0,
    setImmediate: Rp,
    asap: v0,
  };

function D(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}

y.inherits(D, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Tp = D.prototype,
  Op = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Op[e] = { value: e };
});
Object.defineProperties(D, Op);
Object.defineProperty(Tp, 'isAxiosError', { value: !0 });
D.from = (e, t, n, r, o, i) => {
  const s = Object.create(Tp);
  return (
    y.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== 'isAxiosError'
    ),
    D.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const S0 = null;

function $l(e) {
  return y.isPlainObject(e) || y.isArray(e);
}

function Np(e) {
  return y.endsWith(e, '[]') ? e.slice(0, -2) : e;
}

function Pc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Np(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}

function w0(e) {
  return y.isArray(e) && !e.some($l);
}

const _0 = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});

function qi(e, t, n) {
  if (!y.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = y.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, k) {
        return !y.isUndefined(k[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < 'u' && Blob)) && y.isSpecCompliantForm(t);
  if (!y.isFunction(o)) throw new TypeError('visitor must be a function');

  function a(g) {
    if (g === null) return '';
    if (y.isDate(g)) return g.toISOString();
    if (!u && y.isBlob(g))
      throw new D('Blob is not supported. Use a Buffer instead.');
    return y.isArrayBuffer(g) || y.isTypedArray(g)
      ? u && typeof Blob == 'function'
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }

  function f(g, v, k) {
    let d = g;
    if (g && !k && typeof g == 'object') {
      if (y.endsWith(v, '{}'))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (y.isArray(g) && w0(g)) ||
        ((y.isFileList(g) || y.endsWith(v, '[]')) && (d = y.toArray(g)))
      )
        return (
          (v = Np(v)),
          d.forEach(function (p, w) {
            !(y.isUndefined(p) || p === null) &&
              t.append(
                s === !0 ? Pc([v], w, i) : s === null ? v : v + '[]',
                a(p)
              );
          }),
          !1
        );
    }
    return $l(g) ? !0 : (t.append(Pc(k, v, i), a(g)), !1);
  }

  const m = [],
    h = Object.assign(_0, {
      defaultVisitor: f,
      convertValue: a,
      isVisitable: $l,
    });

  function S(g, v) {
    if (!y.isUndefined(g)) {
      if (m.indexOf(g) !== -1)
        throw Error('Circular reference detected in ' + v.join('.'));
      m.push(g),
        y.forEach(g, function (d, c) {
          (!(y.isUndefined(d) || d === null) &&
            o.call(t, d, y.isString(c) ? c.trim() : c, v, h)) === !0 &&
            S(d, v ? v.concat(c) : [c]);
        }),
        m.pop();
    }
  }

  if (!y.isObject(e)) throw new TypeError('data must be an object');
  return S(e), t;
}

function Ec(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}

function Yu(e, t) {
  (this._pairs = []), e && qi(e, this, t);
}

const Ap = Yu.prototype;
Ap.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ap.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ec);
      }
    : Ec;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};

function C0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}

function Dp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || C0,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = y.isURLSearchParams(t) ? t.toString() : new Yu(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}

class kc {
  constructor() {
    this.handlers = [];
  }

  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }

  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }

  clear() {
    this.handlers && (this.handlers = []);
  }

  forEach(t) {
    y.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}

const Ip = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  P0 = typeof URLSearchParams < 'u' ? URLSearchParams : Yu,
  E0 = typeof FormData < 'u' ? FormData : null,
  k0 = typeof Blob < 'u' ? Blob : null,
  x0 = {
    isBrowser: !0,
    classes: { URLSearchParams: P0, FormData: E0, Blob: k0 },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  bu = typeof window < 'u' && typeof document < 'u',
  Bl = (typeof navigator == 'object' && navigator) || void 0,
  R0 =
    bu &&
    (!Bl || ['ReactNative', 'NativeScript', 'NS'].indexOf(Bl.product) < 0),
  T0 =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  O0 = (bu && window.location.href) || 'http://localhost',
  N0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: bu,
        hasStandardBrowserEnv: R0,
        hasStandardBrowserWebWorkerEnv: T0,
        navigator: Bl,
        origin: O0,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  xe = { ...N0, ...x0 };

function A0(e, t) {
  return qi(
    e,
    new xe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return xe.isNode && y.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}

function D0(e) {
  return y
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}

function I0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}

function Lp(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === '__proto__') return !0;
    const l = Number.isFinite(+s),
      u = i >= n.length;
    return (
      (s = !s && y.isArray(o) ? o.length : s),
      u
        ? (y.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !l)
        : ((!o[s] || !y.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && y.isArray(o[s]) && (o[s] = I0(o[s])),
          !l)
    );
  }

  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return (
      y.forEachEntry(e, (r, o) => {
        t(D0(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}

function L0(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}

const so = {
  transitional: Ip,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = y.isObject(t);
      if ((i && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return o ? JSON.stringify(Lp(t)) : t;
      if (
        y.isArrayBuffer(t) ||
        y.isBuffer(t) ||
        y.isStream(t) ||
        y.isFile(t) ||
        y.isBlob(t) ||
        y.isReadableStream(t)
      )
        return t;
      if (y.isArrayBufferView(t)) return t.buffer;
      if (y.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return A0(t, this.formSerializer).toString();
        if ((l = y.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData;
          return qi(
            l ? { 'files[]': t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), L0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || so.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (y.isResponse(t) || y.isReadableStream(t)) return t;
      if (t && y.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === 'SyntaxError'
              ? D.from(l, D.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: xe.classes.FormData, Blob: xe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  so.headers[e] = {};
});
const F0 = y.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  M0 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(':')),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && F0[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  xc = Symbol('internals');

function hr(e) {
  return e && String(e).trim().toLowerCase();
}

function Qo(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Qo) : String(e);
}

function U0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}

const j0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function Ds(e, t, n, r, o) {
  if (y.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!y.isString(t))) {
    if (y.isString(r)) return t.indexOf(r) !== -1;
    if (y.isRegExp(r)) return r.test(t);
  }
}

function z0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}

function $0(e, t) {
  const n = y.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}

class Re {
  constructor(t) {
    t && this.set(t);
  }

  set(t, n, r) {
    const o = this;

    function i(l, u, a) {
      const f = hr(u);
      if (!f) throw new Error('header name must be a non-empty string');
      const m = y.findKey(o, f);
      (!m || o[m] === void 0 || a === !0 || (a === void 0 && o[m] !== !1)) &&
        (o[m || u] = Qo(l));
    }

    const s = (l, u) => y.forEach(l, (a, f) => i(a, f, u));
    if (y.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (y.isString(t) && (t = t.trim()) && !j0(t)) s(M0(t), n);
    else if (y.isHeaders(t)) for (const [l, u] of t.entries()) i(u, l, r);
    else t != null && i(n, t, r);
    return this;
  }

  get(t, n) {
    if (((t = hr(t)), t)) {
      const r = y.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return U0(o);
        if (y.isFunction(n)) return n.call(this, o, r);
        if (y.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(t, n) {
    if (((t = hr(t)), t)) {
      const r = y.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ds(this, this[r], r, n)));
    }
    return !1;
  }

  delete(t, n) {
    const r = this;
    let o = !1;

    function i(s) {
      if (((s = hr(s)), s)) {
        const l = y.findKey(r, s);
        l && (!n || Ds(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }

    return y.isArray(t) ? t.forEach(i) : i(t), o;
  }

  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ds(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }

  normalize(t) {
    const n = this,
      r = {};
    return (
      y.forEach(this, (o, i) => {
        const s = y.findKey(r, i);
        if (s) {
          (n[s] = Qo(o)), delete n[i];
          return;
        }
        const l = t ? z0(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Qo(o)), (r[l] = !0);
      }),
      this
    );
  }

  concat(...t) {
    return this.constructor.concat(this, ...t);
  }

  toJSON(t) {
    const n = Object.create(null);
    return (
      y.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && y.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(t) {
    return t instanceof this ? t : new this(t);
  }

  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }

  static accessor(t) {
    const r = (this[xc] = this[xc] = { accessors: {} }).accessors,
      o = this.prototype;

    function i(s) {
      const l = hr(s);
      r[l] || ($0(o, s), (r[l] = !0));
    }

    return y.isArray(t) ? t.forEach(i) : i(t), this;
  }
}

Re.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
y.reduceDescriptors(Re.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
y.freezeMethods(Re);

function Is(e, t) {
  const n = this || so,
    r = t || n,
    o = Re.from(r.headers);
  let i = r.data;
  return (
    y.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}

function Fp(e) {
  return !!(e && e.__CANCEL__);
}

function or(e, t, n) {
  D.call(this, e ?? 'canceled', D.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}

y.inherits(or, D, { __CANCEL__: !0 });

function Mp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new D(
          'Request failed with status code ' + n.status,
          [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}

function B0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}

function W0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        f = r[i];
      s || (s = a), (n[o] = u), (r[o] = a);
      let m = i,
        h = 0;
      for (; m !== o; ) (h += n[m++]), (m = m % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - s < t)) return;
      const S = f && a - f;
      return S ? Math.round((h * 1e3) / S) : void 0;
    }
  );
}

function H0(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const s = (a, f = Date.now()) => {
    (n = f), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, a);
  };
  return [
    (...a) => {
      const f = Date.now(),
        m = f - n;
      m >= r
        ? s(a, f)
        : ((o = a),
          i ||
            (i = setTimeout(() => {
              (i = null), s(o);
            }, r - m)));
    },
    () => o && s(o),
  ];
}

const Pi = (e, t, n = 3) => {
    let r = 0;
    const o = W0(50, 250);
    return H0((i) => {
      const s = i.loaded,
        l = i.lengthComputable ? i.total : void 0,
        u = s - r,
        a = o(u),
        f = s <= l;
      r = s;
      const m = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && l && f ? (l - s) / a : void 0,
        event: i,
        lengthComputable: l != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(m);
    }, n);
  },
  Rc = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Tc =
    (e) =>
    (...t) =>
      y.asap(() => e(...t)),
  G0 = xe.hasStandardBrowserEnv
    ? (function () {
        const t =
            xe.navigator && /(msie|trident)/i.test(xe.navigator.userAgent),
          n = document.createElement('a');
        let r;

        function o(i) {
          let s = i;
          return (
            t && (n.setAttribute('href', s), (s = n.href)),
            n.setAttribute('href', s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
            }
          );
        }

        return (
          (r = o(window.location.href)),
          function (s) {
            const l = y.isString(s) ? o(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  V0 = xe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const s = [e + '=' + encodeURIComponent(t)];
          y.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
            y.isString(r) && s.push('path=' + r),
            y.isString(o) && s.push('domain=' + o),
            i === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };

function J0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}

function K0(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}

function Up(e, t) {
  return e && !J0(t) ? K0(e, t) : t;
}

const Oc = (e) => (e instanceof Re ? { ...e } : e);

function yn(e, t) {
  t = t || {};
  const n = {};

  function r(a, f, m) {
    return y.isPlainObject(a) && y.isPlainObject(f)
      ? y.merge.call({ caseless: m }, a, f)
      : y.isPlainObject(f)
        ? y.merge({}, f)
        : y.isArray(f)
          ? f.slice()
          : f;
  }

  function o(a, f, m) {
    if (y.isUndefined(f)) {
      if (!y.isUndefined(a)) return r(void 0, a, m);
    } else return r(a, f, m);
  }

  function i(a, f) {
    if (!y.isUndefined(f)) return r(void 0, f);
  }

  function s(a, f) {
    if (y.isUndefined(f)) {
      if (!y.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, f);
  }

  function l(a, f, m) {
    if (m in t) return r(a, f);
    if (m in e) return r(void 0, a);
  }

  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (a, f) => o(Oc(a), Oc(f), !0),
  };
  return (
    y.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const m = u[f] || o,
        h = m(e[f], t[f], f);
      (y.isUndefined(h) && m !== l) || (n[f] = h);
    }),
    n
  );
}

const jp = (e) => {
    const t = yn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: s,
      auth: l,
    } = t;
    (t.headers = s = Re.from(s)),
      (t.url = Dp(Up(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        s.set(
          'Authorization',
          'Basic ' +
            btoa(
              (l.username || '') +
                ':' +
                (l.password ? unescape(encodeURIComponent(l.password)) : '')
            )
        );
    let u;
    if (y.isFormData(n)) {
      if (xe.hasStandardBrowserEnv || xe.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((u = s.getContentType()) !== !1) {
        const [a, ...f] = u
          ? u
              .split(';')
              .map((m) => m.trim())
              .filter(Boolean)
          : [];
        s.setContentType([a || 'multipart/form-data', ...f].join('; '));
      }
    }
    if (
      xe.hasStandardBrowserEnv &&
      (r && y.isFunction(r) && (r = r(t)), r || (r !== !1 && G0(t.url)))
    ) {
      const a = o && i && V0.read(i);
      a && s.set(o, a);
    }
    return t;
  },
  Q0 = typeof XMLHttpRequest < 'u',
  Y0 =
    Q0 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = jp(e);
        let i = o.data;
        const s = Re.from(o.headers).normalize();
        let { responseType: l, onUploadProgress: u, onDownloadProgress: a } = o,
          f,
          m,
          h,
          S,
          g;

        function v() {
          S && S(),
            g && g(),
            o.cancelToken && o.cancelToken.unsubscribe(f),
            o.signal && o.signal.removeEventListener('abort', f);
        }

        let k = new XMLHttpRequest();
        k.open(o.method.toUpperCase(), o.url, !0), (k.timeout = o.timeout);

        function d() {
          if (!k) return;
          const p = Re.from(
              'getAllResponseHeaders' in k && k.getAllResponseHeaders()
            ),
            C = {
              data:
                !l || l === 'text' || l === 'json'
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: p,
              config: e,
              request: k,
            };
          Mp(
            function (_) {
              n(_), v();
            },
            function (_) {
              r(_), v();
            },
            C
          ),
            (k = null);
        }

        'onloadend' in k
          ? (k.onloadend = d)
          : (k.onreadystatechange = function () {
              !k ||
                k.readyState !== 4 ||
                (k.status === 0 &&
                  !(k.responseURL && k.responseURL.indexOf('file:') === 0)) ||
                setTimeout(d);
            }),
          (k.onabort = function () {
            k &&
              (r(new D('Request aborted', D.ECONNABORTED, e, k)), (k = null));
          }),
          (k.onerror = function () {
            r(new D('Network Error', D.ERR_NETWORK, e, k)), (k = null);
          }),
          (k.ontimeout = function () {
            let w = o.timeout
              ? 'timeout of ' + o.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const C = o.transitional || Ip;
            o.timeoutErrorMessage && (w = o.timeoutErrorMessage),
              r(
                new D(
                  w,
                  C.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                  e,
                  k
                )
              ),
              (k = null);
          }),
          i === void 0 && s.setContentType(null),
          'setRequestHeader' in k &&
            y.forEach(s.toJSON(), function (w, C) {
              k.setRequestHeader(C, w);
            }),
          y.isUndefined(o.withCredentials) ||
            (k.withCredentials = !!o.withCredentials),
          l && l !== 'json' && (k.responseType = o.responseType),
          a && (([h, g] = Pi(a, !0)), k.addEventListener('progress', h)),
          u &&
            k.upload &&
            (([m, S] = Pi(u)),
            k.upload.addEventListener('progress', m),
            k.upload.addEventListener('loadend', S)),
          (o.cancelToken || o.signal) &&
            ((f = (p) => {
              k &&
                (r(!p || p.type ? new or(null, e, k) : p),
                k.abort(),
                (k = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(f),
            o.signal &&
              (o.signal.aborted ? f() : o.signal.addEventListener('abort', f)));
        const c = B0(o.url);
        if (c && xe.protocols.indexOf(c) === -1) {
          r(new D('Unsupported protocol ' + c + ':', D.ERR_BAD_REQUEST, e));
          return;
        }
        k.send(i || null);
      });
    },
  b0 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const i = function (a) {
        if (!o) {
          (o = !0), l();
          const f = a instanceof Error ? a : this.reason;
          r.abort(
            f instanceof D ? f : new or(f instanceof Error ? f.message : f)
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), i(new D(`timeout ${t} of ms exceeded`, D.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((a) => {
            a.unsubscribe
              ? a.unsubscribe(i)
              : a.removeEventListener('abort', i);
          }),
          (e = null));
      };
      e.forEach((a) => a.addEventListener('abort', i));
      const { signal: u } = r;
      return (u.unsubscribe = () => y.asap(l)), u;
    }
  },
  q0 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  X0 = async function* (e, t) {
    for await (const n of Z0(e)) yield* q0(n, t);
  },
  Z0 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Nc = (e, t, n, r) => {
    const o = X0(e, t);
    let i = 0,
      s,
      l = (u) => {
        s || ((s = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: a, value: f } = await o.next();
            if (a) {
              l(), u.close();
              return;
            }
            let m = f.byteLength;
            if (n) {
              let h = (i += m);
              n(h);
            }
            u.enqueue(new Uint8Array(f));
          } catch (a) {
            throw (l(a), a);
          }
        },
        cancel(u) {
          return l(u), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Xi =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  zp = Xi && typeof ReadableStream == 'function',
  ey =
    Xi &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  $p = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  ty =
    zp &&
    $p(() => {
      let e = !1;
      const t = new Request(xe.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  Ac = 64 * 1024,
  Wl = zp && $p(() => y.isReadableStream(new Response('').body)),
  Ei = { stream: Wl && ((e) => e.body) };
Xi &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Ei[t] &&
        (Ei[t] = y.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new D(
                `Response type '${t}' is not supported`,
                D.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const ny = async (e) => {
    if (e == null) return 0;
    if (y.isBlob(e)) return e.size;
    if (y.isSpecCompliantForm(e))
      return (
        await new Request(xe.origin, {
          method: 'POST',
          body: e,
        }).arrayBuffer()
      ).byteLength;
    if (y.isArrayBufferView(e) || y.isArrayBuffer(e)) return e.byteLength;
    if ((y.isURLSearchParams(e) && (e = e + ''), y.isString(e)))
      return (await ey(e)).byteLength;
  },
  ry = async (e, t) => {
    const n = y.toFiniteNumber(e.getContentLength());
    return n ?? ny(t);
  },
  oy =
    Xi &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: u,
        responseType: a,
        headers: f,
        withCredentials: m = 'same-origin',
        fetchOptions: h,
      } = jp(e);
      a = a ? (a + '').toLowerCase() : 'text';
      let S = b0([o, i && i.toAbortSignal()], s),
        g;
      const v =
        S &&
        S.unsubscribe &&
        (() => {
          S.unsubscribe();
        });
      let k;
      try {
        if (
          u &&
          ty &&
          n !== 'get' &&
          n !== 'head' &&
          (k = await ry(f, r)) !== 0
        ) {
          let C = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            P;
          if (
            (y.isFormData(r) &&
              (P = C.headers.get('content-type')) &&
              f.setContentType(P),
            C.body)
          ) {
            const [_, T] = Rc(k, Pi(Tc(u)));
            r = Nc(C.body, Ac, _, T);
          }
        }
        y.isString(m) || (m = m ? 'include' : 'omit');
        const d = 'credentials' in Request.prototype;
        g = new Request(t, {
          ...h,
          signal: S,
          method: n.toUpperCase(),
          headers: f.normalize().toJSON(),
          body: r,
          duplex: 'half',
          credentials: d ? m : void 0,
        });
        let c = await fetch(g);
        const p = Wl && (a === 'stream' || a === 'response');
        if (Wl && (l || (p && v))) {
          const C = {};
          ['status', 'statusText', 'headers'].forEach(($) => {
            C[$] = c[$];
          });
          const P = y.toFiniteNumber(c.headers.get('content-length')),
            [_, T] = (l && Rc(P, Pi(Tc(l), !0))) || [];
          c = new Response(
            Nc(c.body, Ac, _, () => {
              T && T(), v && v();
            }),
            C
          );
        }
        a = a || 'text';
        let w = await Ei[y.findKey(Ei, a) || 'text'](c, e);
        return (
          !p && v && v(),
          await new Promise((C, P) => {
            Mp(C, P, {
              data: w,
              headers: Re.from(c.headers),
              status: c.status,
              statusText: c.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (d) {
        throw (
          (v && v(),
          d && d.name === 'TypeError' && /fetch/i.test(d.message)
            ? Object.assign(new D('Network Error', D.ERR_NETWORK, e, g), {
                cause: d.cause || d,
              })
            : D.from(d, d && d.code, e, g))
        );
      }
    }),
  Hl = { http: S0, xhr: Y0, fetch: oy };
y.forEach(Hl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Dc = (e) => `- ${e}`,
  iy = (e) => y.isFunction(e) || e === null || e === !1,
  Bp = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !iy(n) && ((r = Hl[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new D(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || '#' + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(Dc).join(`
`)
            : ' ' + Dc(i[0])
          : 'as no adapter specified';
        throw new D(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT'
        );
      }
      return r;
    },
    adapters: Hl,
  };

function Ls(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new or(null, e);
}

function Ic(e) {
  return (
    Ls(e),
    (e.headers = Re.from(e.headers)),
    (e.data = Is.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Bp.getAdapter(e.adapter || so.adapter)(e).then(
      function (r) {
        return (
          Ls(e),
          (r.data = Is.call(e, e.transformResponse, r)),
          (r.headers = Re.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Fp(r) ||
            (Ls(e),
            r &&
              r.response &&
              ((r.response.data = Is.call(e, e.transformResponse, r.response)),
              (r.response.headers = Re.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}

const Wp = '1.7.7',
  qu = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    qu[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const Lc = {};
qu.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      '[Axios v' +
      Wp +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? '. ' + r : '')
    );
  }

  return (i, s, l) => {
    if (t === !1)
      throw new D(
        o(s, ' has been removed' + (n ? ' in ' + n : '')),
        D.ERR_DEPRECATED
      );
    return (
      n &&
        !Lc[s] &&
        ((Lc[s] = !0),
        console.warn(
          o(
            s,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, s, l) : !0
    );
  };
};

function sy(e, t, n) {
  if (typeof e != 'object')
    throw new D('options must be an object', D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const l = e[i],
        u = l === void 0 || s(l, i, e);
      if (u !== !0)
        throw new D('option ' + i + ' must be ' + u, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new D('Unknown option ' + i, D.ERR_BAD_OPTION);
  }
}

const Gl = { assertOptions: sy, validators: qu },
  Et = Gl.validators;

class an {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new kc(), response: new kc() });
  }

  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }

  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = yn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Gl.assertOptions(
        r,
        {
          silentJSONParsing: Et.transitional(Et.boolean),
          forcedJSONParsing: Et.transitional(Et.boolean),
          clarifyTimeoutError: Et.transitional(Et.boolean),
        },
        !1
      ),
      o != null &&
        (y.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Gl.assertOptions(
              o,
              {
                encode: Et.function,
                serialize: Et.function,
              },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let s = i && y.merge(i.common, i[n.method]);
    i &&
      y.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (g) => {
          delete i[g];
        }
      ),
      (n.headers = Re.concat(s, i));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
        ((u = u && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let f,
      m = 0,
      h;
    if (!u) {
      const g = [Ic.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, a),
          h = g.length,
          f = Promise.resolve(n);
        m < h;

      )
        f = f.then(g[m++], g[m++]);
      return f;
    }
    h = l.length;
    let S = n;
    for (m = 0; m < h; ) {
      const g = l[m++],
        v = l[m++];
      try {
        S = g(S);
      } catch (k) {
        v.call(this, k);
        break;
      }
    }
    try {
      f = Ic.call(this, S);
    } catch (g) {
      return Promise.reject(g);
    }
    for (m = 0, h = a.length; m < h; ) f = f.then(a[m++], a[m++]);
    return f;
  }

  getUri(t) {
    t = yn(this.defaults, t);
    const n = Up(t.baseURL, t.url);
    return Dp(n, t.params, t.paramsSerializer);
  }
}

y.forEach(['delete', 'get', 'head', 'options'], function (t) {
  an.prototype[t] = function (n, r) {
    return this.request(
      yn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
y.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, s, l) {
      return this.request(
        yn(l || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: s,
        })
      );
    };
  }

  (an.prototype[t] = n()), (an.prototype[t + 'Form'] = n(!0));
});

class Xu {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, l) {
        r.reason || ((r.reason = new or(i, s, l)), n(r.reason));
      });
  }

  throwIfRequested() {
    if (this.reason) throw this.reason;
  }

  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }

  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }

  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }

  static source() {
    let t;
    return {
      token: new Xu(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}

function ly(e) {
  return function (n) {
    return e.apply(null, n);
  };
}

function uy(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}

const Vl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Vl).forEach(([e, t]) => {
  Vl[t] = e;
});

function Hp(e) {
  const t = new an(e),
    n = wp(an.prototype.request, t);
  return (
    y.extend(n, an.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Hp(yn(e, o));
    }),
    n
  );
}

const ne = Hp(so);
ne.Axios = an;
ne.CanceledError = or;
ne.CancelToken = Xu;
ne.isCancel = Fp;
ne.VERSION = Wp;
ne.toFormData = qi;
ne.AxiosError = D;
ne.Cancel = ne.CanceledError;
ne.all = function (t) {
  return Promise.all(t);
};
ne.spread = ly;
ne.isAxiosError = uy;
ne.mergeConfig = yn;
ne.AxiosHeaders = Re;
ne.formToJSON = (e) => Lp(y.isHTMLForm(e) ? new FormData(e) : e);
ne.getAdapter = Bp.getAdapter;
ne.HttpStatusCode = Vl;
ne.default = ne;

class ay {
  constructor(t) {
    ao(this, 'axiosInstance');
    (this.axiosInstance = ne.create({
      baseURL: t,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })),
      this.axiosInstance.interceptors.request.use((n) => n),
      this.axiosInstance.interceptors.response.use(
        (n) => n,
        this.addErrorHandler
      );
  }

  async get(t, n) {
    return this.axiosInstance.get(t, n);
  }

  async post(t, n, r) {
    return this.axiosInstance.post(t, n, r);
  }

  async put(t, n, r) {
    return this.axiosInstance.put(t, n, r);
  }

  async delete(t, n) {
    return this.axiosInstance.delete(t, n);
  }

  async addErrorHandler(t) {
    var n;
    return Promise.reject({
      message:
        ((n = t.response) == null ? void 0 : n.data.message) || t.message,
    });
  }
}

class cy {
  constructor(t) {
    ao(this, 'baseUrl', '/products');
    ao(this, 'getProducts', async () => {
      const t = `${this.baseUrl}`,
        { data: n } = await this.baseApi.get(t);
      return n;
    });
    this.baseApi = t;
  }
}

var fy = {
  API_BASE_URL: 'https://webapi.omoloko.ru/api/v1',
  ACLOCAL_PATH:
    'C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal',
  ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\PussyJuice\\AppData\\Roaming',
  COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'DESKTOP-131BB4R',
  COMSPEC: 'C:\\WINDOWS\\system32\\cmd.exe',
  CONFIG_SITE: 'C:/Program Files/Git/etc/config.site',
  DISPLAY: 'needs-to-be-defined',
  DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
  EXEPATH: 'C:\\Program Files\\Git\\bin',
  FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
  FPS_BROWSER_USER_PROFILE_STRING: 'Default',
  GOPATH: 'C:\\Users\\PussyJuice\\go',
  HOME: 'C:\\Users\\PussyJuice',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\PussyJuice',
  HOSTNAME: 'DESKTOP-131BB4R',
  IDEA_INITIAL_DIRECTORY: 'C:\\WINDOWS\\system32',
  INFOPATH:
    'C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info',
  INIT_CWD: 'C:\\samofrom\\icecream-shop',
  KMP_DUPLICATE_LIB_OK: 'TRUE',
  KOMPAS_SDK: 'C:\\Program Files\\ASCON\\KOMPAS-3D v20\\SDK\\',
  LANG: 'ru_RU.UTF-8',
  LOCALAPPDATA: 'C:\\Users\\PussyJuice\\AppData\\Local',
  LOGONSERVER: '\\\\DESKTOP-131BB4R',
  MANPATH:
    'C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man',
  MINGW_CHOST: 'x86_64-w64-mingw32',
  MINGW_PACKAGE_PREFIX: 'mingw-w64-x86_64',
  MINGW_PREFIX: 'C:/Program Files/Git/mingw64',
  MKL_SERIAL: 'YES',
  MOSQUITTO_DIR: 'C:\\Program Files\\mosquitto',
  MSYSTEM: 'MINGW64',
  MSYSTEM_CARCH: 'x86_64',
  MSYSTEM_CHOST: 'x86_64-w64-mingw32',
  MSYSTEM_PREFIX: 'C:/Program Files/Git/mingw64',
  NODE: 'C:\\Program Files\\nodejs\\node.exe',
  NODE_ENV: 'production',
  npm_config_argv:
    '{"remain":[],"cooked":["run","build"],"original":["build"]}',
  npm_config_bin_links: 'true',
  npm_config_ignore_optional: '',
  npm_config_ignore_scripts: '',
  npm_config_init_license: 'MIT',
  npm_config_init_version: '1.0.0',
  npm_config_registry: 'https://registry.yarnpkg.com',
  npm_config_save_prefix: '^',
  npm_config_strict_ssl: 'true',
  npm_config_user_agent: 'yarn/1.22.22 npm/? node/v20.10.0 win32 x64',
  npm_config_version_commit_hooks: 'true',
  npm_config_version_git_message: 'v%s',
  npm_config_version_git_sign: '',
  npm_config_version_git_tag: 'true',
  npm_config_version_tag_prefix: 'v',
  npm_execpath:
    'C:\\Users\\PussyJuice\\AppData\\Roaming\\npm\\node_modules\\yarn\\bin\\yarn.js',
  npm_lifecycle_event: 'build',
  npm_lifecycle_script: 'tsc -b && vite build',
  npm_node_execpath: 'C:\\Program Files\\nodejs\\node.exe',
  npm_package_dependencies_axios: '^1.7.7',
  npm_package_dependencies_react: '^18.3.1',
  npm_package_dependencies_react_dom: '^18.3.1',
  npm_package_dependencies_styled_components: '^6.1.13',
  npm_package_description:
    'This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.',
  npm_package_devDependencies_eslint: '^9.11.1',
  npm_package_devDependencies_eslint_plugin_react_hooks: '^5.1.0-rc.0',
  npm_package_devDependencies_eslint_plugin_react_refresh: '^0.4.12',
  npm_package_devDependencies_globals: '^15.9.0',
  npm_package_devDependencies_prettier: '^3.3.3',
  npm_package_devDependencies_typescript: '^5.5.3',
  npm_package_devDependencies_typescript_eslint: '^8.7.0',
  npm_package_devDependencies_vite: '^5.4.8',
  npm_package_devDependencies_vite_plugin_svgr: '^4.2.0',
  npm_package_devDependencies__eslint_js: '^9.11.1',
  npm_package_devDependencies__types_node: '^22.7.6',
  npm_package_devDependencies__types_react: '^18.3.10',
  npm_package_devDependencies__types_react_dom: '^18.3.0',
  npm_package_devDependencies__types_styled_components: '^5.1.34',
  npm_package_devDependencies__vitejs_plugin_react: '^4.3.2',
  npm_package_name: 'icecream-shop',
  npm_package_private: 'true',
  npm_package_readmeFilename: 'README.md',
  npm_package_scripts_build: 'tsc -b && vite build',
  npm_package_scripts_dev: 'vite',
  npm_package_scripts_lint: 'eslint .',
  npm_package_scripts_preview: 'vite preview',
  npm_package_type: 'module',
  npm_package_version: '0.0.0',
  NUMBER_OF_PROCESSORS: '6',
  NVM_HOME: 'C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm',
  NVM_SYMLINK: 'C:\\Program Files\\nodejs',
  OneDrive: 'C:\\Users\\PussyJuice\\OneDrive',
  ORIGINAL_PATH:
    'C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\PussyJuice\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\MATLAB R2009a\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\Cloudflare\\Cloudflare WARP;C:\\Program Files\\Go\\bin;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\dotnet;C:\\Program Files\\PuTTY;C:\\Program Files\\nodejs;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Python\\Python39\\Scripts;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Python\\Python39;C:\\Users\\PussyJuice\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\PussyJuice\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\PussyJuice\\AppData\\Local\\JetBrains\\Toolbox\\scripts;C:\\Users\\PussyJuice\\go\\bin;C:\\Program Files\\JetBrains\\WebStorm 2024.1.5\\bin;C:\\Users\\PussyJuice\\.dotnet\\tools;C:\\Users\\PussyJuice\\AppData\\Roaming\\npm;C:\\samofrom\\icecream-shop\\node_modules\\.bin',
  ORIGINAL_TEMP: 'C:/Users/PUSSYJ~1/AppData/Local/Temp',
  ORIGINAL_TMP: 'C:/Users/PUSSYJ~1/AppData/Local/Temp',
  OS: 'Windows_NT',
  PATH: 'C:\\Users\\PUSSYJ~1\\AppData\\Local\\Temp\\yarn--1729361916227-0.14832132370573525;C:\\samofrom\\icecream-shop\\node_modules\\.bin;C:\\Users\\PussyJuice\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Users\\PussyJuice\\AppData\\Local\\Yarn\\bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\PussyJuice\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\PussyJuice\\bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\MATLAB R2009a\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\Cloudflare\\Cloudflare WARP;C:\\Program Files\\Go\\bin;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\dotnet;C:\\Program Files\\PuTTY;C:\\Program Files\\nodejs;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Python\\Python39\\Scripts;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Python\\Python39;C:\\Users\\PussyJuice\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\PussyJuice\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\PussyJuice\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\PussyJuice\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\PussyJuice\\AppData\\Local\\JetBrains\\Toolbox\\scripts;C:\\Users\\PussyJuice\\go\\bin;C:\\Program Files\\JetBrains\\WebStorm 2024.1.5\\bin;C:\\Users\\PussyJuice\\.dotnet\\tools;C:\\Users\\PussyJuice\\AppData\\Roaming\\npm;C:\\samofrom\\icecream-shop\\node_modules\\.bin;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC',
  PKG_CONFIG_PATH:
    'C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig',
  PLINK_PROTOCOL: 'ssh',
  PROCESSOR_ARCHITECTURE: 'AMD64',
  PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 158 Stepping 10, GenuineIntel',
  PROCESSOR_LEVEL: '6',
  PROCESSOR_REVISION: '9e0a',
  ProgramData: 'C:\\ProgramData',
  PROGRAMFILES: 'C:\\Program Files',
  'ProgramFiles(x86)': 'C:\\Program Files (x86)',
  ProgramW6432: 'C:\\Program Files',
  PROMPT: '$P$G',
  PSModulePath:
    'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
  PT8HOME: 'C:\\Program Files\\Cisco Packet Tracer 8.2.1',
  PUBLIC: 'C:\\Users\\Public',
  PWD: 'C:/samofrom/icecream-shop',
  QML_DISABLE_DISK_CACHE: '1',
  QML_FORCE_DISK_CACHE: '0',
  QT_DISABLE_SHADER_DISK_CACHE: '1',
  SESSIONNAME: 'Console',
  SHELL: 'C:\\Program Files\\Git\\usr\\bin\\bash.exe',
  SHLVL: '1',
  SSH_ASKPASS: 'C:/Program Files/Git/mingw64/bin/git-askpass.exe',
  SYSTEMDRIVE: 'C:',
  SYSTEMROOT: 'C:\\WINDOWS',
  TEMP: 'C:\\Users\\PUSSYJ~1\\AppData\\Local\\Temp',
  TERM: 'xterm-256color',
  TERMINAL_EMULATOR: 'JetBrains-JediTerm',
  TERM_SESSION_ID: '79c437a6-fdbb-4db0-a087-8913e3250de8',
  TMP: 'C:\\Users\\PUSSYJ~1\\AppData\\Local\\Temp',
  TMPDIR: 'C:\\Users\\PUSSYJ~1\\AppData\\Local\\Temp',
  USERDOMAIN: 'DESKTOP-131BB4R',
  USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-131BB4R',
  USERNAME: 'PussyJuice',
  USERPROFILE: 'C:\\Users\\PussyJuice',
  VBOX_MSI_INSTALL_PATH: 'C:\\Program Files\\Oracle\\VirtualBox\\',
  WebStorm: 'C:\\Program Files\\JetBrains\\WebStorm 2024.1.5\\bin;',
  WINDIR: 'C:\\WINDOWS',
  YARN_WRAP_OUTPUT: 'false',
};

function dy() {
  const e = new ay(`${fy.API_BASE_URL}`);
  return { products: new cy(e) };
}

function py(e) {
  const [t, n] = L.useState('idle'),
    [r, o] = L.useState(null),
    [i, s] = L.useState(null);
  return {
    makeRequest: async (u) => {
      n('pending'), o(null);
      try {
        const a = await e(u);
        s(a), n('success');
      } catch (a) {
        const { message: f } = a;
        n('failed'), o(f);
      }
    },
    response: i,
    error: r,
    status: t,
    isLoading: t === 'pending',
  };
}

function my() {
  const { products: e } = dy(),
    { response: t, makeRequest: n, ...r } = py(e.getProducts);
  return { response: t, getProducts: n, ...r };
}

var me;
((e) => {
  (e.Product = U.article`
    width: 270px;

    border-bottom: ${({ theme: t }) => t.stroke['stroke/1']};

    @media ${({ theme: t }) => t.breakpoint.sm} {
      width: 100%;
    }
  `),
    (e.ProductWrapper = U.div`
    position: relative;

    display: flex;
    flex-direction: column;

    height: 100%;

    padding: 20px;
    border-radius: 12px;

    &:hover {
      box-shadow: ${({ theme: t }) => t.shadow['shadow/1']};
    }

    @media ${({ theme: t }) => t.breakpoint.sm} {
      flex-direction: row;
    }
  `),
    (e.Header = U.header`
    width: 230px;
    height: 230px;
  `),
    (e.Tags = U.div`
    position: absolute;

    display: flex;
    gap: 8px;
  `),
    (e.ImageWrapper = U.a``),
    (e.Image = U.img`
    width: 100%;
    height: auto;
  `),
    (e.Main = U.main`
    display: flex;
    flex-direction: column;

    flex: 1;

    @media ${({ theme: t }) => t.breakpoint.sm} {
      flex: 0;
    }
  `),
    (e.Link = U.a`
    display: flex;
    flex-direction: column;

    flex: 1;
  `),
    (e.Title = U.div`
    margin-bottom: 4px;
    flex: 1;
  `),
    (e.Description = U.div`
    margin-bottom: 16px;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `),
    (e.CostContainer = U.div`
    display: flex;
    gap: 16px;
  `),
    (e.Cost = U.div`
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
    }
  `),
    (e.Footer = U.footer`
    margin-top: 16px;
    text-align: center;
  `);
})(me || (me = {}));
const hy = (e, t) => {
  switch (t) {
    case 'blue':
      return e.color.blue;
    case 'red':
      return e.color.red;
    case 'green':
      return e.color.green;
  }
};
var Jl;
((e) => {
  e.Tag = U.span`
    display: inline-flex;
    align-items: center;

    padding: 4px 16px;
    border-radius: 64px;

    color: ${({ theme: t }) => t.color['text/white']};
    background-color: ${({ theme: t, $color: n }) => hy(t, n)};
  `;
})(Jl || (Jl = {}));
const Fs = ({ label: e, color: t }) =>
    O.jsx(Jl.Tag, { $color: t, children: O.jsx(ot, { children: e }) }),
  Kl = (e) => (e % 1 ? e.toFixed(2) : e),
  gy = ({
    image: e,
    title: t,
    subtitle: n,
    vendorCode: r,
    costByCard: o,
    cost: i,
    hit: s,
    isLowCalories: l,
    Button: u,
    ...a
  }) =>
    O.jsx(me.Product, {
      children: O.jsxs(me.ProductWrapper, {
        children: [
          O.jsx(me.Header, {
            children: O.jsxs(me.ImageWrapper, {
              href: '#',
              children: [
                O.jsxs(me.Tags, {
                  children: [
                    s &&
                      O.jsx(Fs, {
                        label: 'Хит',
                        color: 'blue',
                      }),
                    l && O.jsx(Fs, { label: 'ЗОЖ', color: 'green' }),
                    a.new && O.jsx(Fs, { label: 'Новинка', color: 'red' }),
                  ],
                }),
                O.jsx(me.Image, { src: e, alt: n }),
              ],
            }),
          }),
          O.jsxs(me.Main, {
            children: [
              O.jsxs(ot, {
                variant: 'bodyS',
                color: 'secondary',
                children: ['Артикул: ', r],
              }),
              O.jsxs(me.Link, {
                href: '#',
                title: n,
                children: [
                  O.jsx(me.Title, {
                    children: O.jsx(ot, {
                      variant: 'bodyM',
                      children: t,
                    }),
                  }),
                  O.jsx(me.Description, {
                    children: O.jsx(ot, {
                      variant: 'bodyS',
                      color: 'secondary',
                      children: n,
                    }),
                  }),
                ],
              }),
              O.jsxs(me.CostContainer, {
                children: [
                  O.jsxs(me.Cost, {
                    children: [
                      O.jsxs(ot, {
                        variant: 'body',
                        color: 'secondary',
                        bold: !0,
                        children: [Kl(o), O.jsx('span', { children: '₽' })],
                      }),
                      O.jsx(ot, {
                        variant: 'bodyS',
                        color: 'secondary',
                        children: 'по карте',
                      }),
                    ],
                  }),
                  O.jsxs(me.Cost, {
                    children: [
                      O.jsxs(ot, {
                        variant: 'body',
                        color: 'accent',
                        bold: !0,
                        children: [Kl(i), O.jsx('span', { children: '₽' })],
                      }),
                      O.jsx(ot, {
                        variant: 'bodyS',
                        color: 'accent',
                        bold: !0,
                        children: 'без карты',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          O.jsx(me.Footer, { children: u }),
        ],
      }),
    });
var Ql;
((e) => {
  e.Button = U.button`
    ${({ theme: t }) => t.typography.button}
    background: none;
    border: none;
    cursor: pointer;
    user-select: none;

    padding: 12px 24px;
    border-radius: 20px;

    color: ${({ theme: t }) => t.color['text/white']};
    background-color: ${({ theme: t }) => t.color.buttonContained};

    &:hover {
      background-color: ${({ theme: t }) => t.color.buttonContainedHover};
    }
  `;
})(Ql || (Ql = {}));
const yy = ({ label: e, onClick: t }) =>
  O.jsx(Ql.Button, { onClick: t, children: e });

function Gp(e, t) {
  const n = L.useCallback(
      () => JSON.parse(localStorage.getItem(e) || '[]') || t,
      [e, t]
    ),
    [r, o] = L.useState(n());
  return (
    L.useEffect(() => {
      const s = () => {
        o(n());
      };
      return (
        window.addEventListener('storage', s),
        () => window.removeEventListener('storage', s)
      );
    }, [n]),
    {
      value: r,
      setItem: (s) => {
        localStorage.setItem(e, JSON.stringify(s)),
          o(s),
          dispatchEvent(new Event('storage', {}));
      },
    }
  );
}

const vy = () => {
  const { response: e, getProducts: t } = my(),
    { value: n, setItem: r } = Gp('productCart', []);
  return (
    L.useEffect(() => {
      (async () => await t())();
    }, []),
    O.jsx(jl.ProductList, {
      children:
        e &&
        e.products.map((o) =>
          O.jsx(
            gy,
            {
              ...o,
              Button: O.jsx(yy, {
                label: 'В корзину',
                onClick: () => r([...n, o]),
              }),
            },
            o.id
          )
        ),
    })
  );
};
var Xr;
((e) => {
  (e.Cart = U.div`
    display: flex;
    align-items: center;

    gap: 8px;

    span {
      font-weight: normal;
      font-size: 12px;
    }
  `),
    (e.CartContainer = U.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px;
    background-color: ${({ theme: t }) => t.color.cartBackground};
    border-radius: 50%;

    cursor: pointer;
  `),
    (e.ItemCount = U.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 16px;
    color: ${({ theme: t }) => t.color['text/white']};
    background-color: ${({ theme: t }) => t.color.orange};
    border-radius: 50%;

    font-size: 11px;
    font-weight: 600;
    text-align: center;
  `);
})(Xr || (Xr = {}));
const Sy = (e) =>
    L.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 22,
        height: 22,
        viewBox: '0 0 26 22',
        fill: 'none',
        ...e,
      },
      L.createElement(
        'g',
        { clipPath: 'url(#clip0)' },
        L.createElement('path', {
          d: 'M15.8407 8.20588L19.8711 1.5',
          stroke: '#2490E6',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        L.createElement('path', {
          d: 'M22.4569 8.20588H23.984C24.7395 8.20588 25.2634 8.97706 25.0058 9.70576L22.8416 15.8271C21.8579 18.6045 18.909 20.5 15.5688 20.5H10.5036C7.16337 20.5 4.21337 18.6045 3.23077 15.8271L1.06663 9.70576C0.809026 8.97706 1.33294 8.20588 2.08837 8.20588H8.96011L13.3079 1.5',
          stroke: '#2490E6',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        })
      ),
      L.createElement(
        'defs',
        null,
        L.createElement(
          'clipPath',
          { id: 'clip0' },
          L.createElement('rect', {
            width: 26,
            height: 22,
            fill: 'white',
          })
        )
      )
    ),
  wy = Xr.ItemCount,
  _y = ({ totalPrice: e, itemCount: t, onClick: n }) =>
    O.jsxs(Xr.Cart, {
      children: [
        !!e &&
          O.jsxs(ot, {
            variant: 'bodyM',
            children: [Kl(e), ' ', O.jsx('span', { children: '₽' })],
          }),
        O.jsxs(Xr.CartContainer, {
          onClick: n,
          children: [O.jsx(Sy, {}), !!t && O.jsx(wy, { children: t })],
        }),
      ],
    }),
  Cy = () => {
    const { value: e, setItem: t } = Gp('productCart', []),
      n = e.reduce((r, o) => r + o.cost, 0);
    return O.jsx(_y, {
      totalPrice: n,
      itemCount: e.length,
      onClick: () => t([]),
    });
  };
var ki;
((e) => {
  (e.PoweredBy = U.div`
    font-family: monospace;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 4px;
  `),
    (e.Link = U.a`
    color: ${({ theme: t }) => t.color.blue};
    text-decoration: underline;
  `);
})(ki || (ki = {}));
const Py = () =>
    O.jsxs(ki.PoweredBy, {
      children: [
        'Developed with ❤️ in 2024 by',
        ' ',
        O.jsx(ki.Link, {
          href: 'https://github.com/samofrom',
          target: '_blank',
          children: '@samofrom',
        }),
      ],
    }),
  Ey = () =>
    O.jsx(E1, {
      Header: O.jsxs(O.Fragment, {
        children: [O.jsx(I1, { companyName: 'ProductStore' }), O.jsx(Cy, {})],
      }),
      Content: O.jsx(vy, {}),
      Footer: O.jsx(Py, {}),
    });
Qd(document.getElementById('root')).render(
  O.jsxs(v1, { theme: P1, children: [O.jsx(C1, {}), O.jsx(Ey, {})] })
);
