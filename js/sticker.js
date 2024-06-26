/**
 * Sticker.js: A Javascript library that allows you to create a Sticker Effect
 *
 * @project-site    http://stickerjs.cmiscm.com/
 * @repository		https://github.com/cmiscm/stickerjs
 * @author		    Jongmin Kim - cmiscm.com
 * @version 	    1.0 (2014/02/05)
 * @license		    MIT License
 */
(function () {
  var m,
    b = null,
    h = ['webkit', 'Moz', 'ms', 'O'],
    d = 'all 0.6s cubic-bezier(.23,1,.32,1)',
    j = 'all 0s',
    e = document.createElement('style');
  e.appendChild(
    document.createTextNode(
      '    .shadowL {background: -moz-linear-gradient(right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.01) 1%, rgba(0,0,0,0.7) 100%);background: -webkit-gradient(linear, right top, left top, color-stop(0%,rgba(0,0,0,0)), color-stop(1%,rgba(0,0,0,0.01)), color-stop(100%,rgba(0,0,0,0.7)));background: -webkit-linear-gradient(right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: -o-linear-gradient(right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: -ms-linear-gradient(right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: linear-gradient(to left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);}    .shadowR {background: -moz-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.01) 1%, rgba(0,0,0,0.7) 100%);background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(0,0,0,0)), color-stop(1%,rgba(0,0,0,0.01)), color-stop(100%,rgba(0,0,0,0.7)));background: -webkit-linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: -o-linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: -ms-linear-gradient(left, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);}    .shadowB {background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.01) 1%, rgba(0,0,0,0.7) 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(1%,rgba(0,0,0,0.01)), color-stop(100%,rgba(0,0,0,0.7)));background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);}    .shadowT {background: -moz-linear-gradient(bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.01) 1%, rgba(0,0,0,0.7) 100%);background: -webkit-gradient(linear, left bottom, left top, color-stop(0%,rgba(0,0,0,0)), color-stop(1%,rgba(0,0,0,0.01)), color-stop(100%,rgba(0,0,0,0.7)));background: -webkit-linear-gradient(bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: -o-linear-gradient(bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: -ms-linear-gradient(bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);background: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,0.7) 100%);}'
    )
  );
  document.head.appendChild(e);
  function o(u, v) {
    var t = u.style,
      q,
      r;
    v = v.charAt(0).toUpperCase() + v.slice(1);
    for (r = 0; r < h.length; r++) {
      q = h[r] + v;
      if (t[q] !== undefined) {
        return q;
      }
    }
    if (t[v] !== undefined) {
      return v;
    }
  }
  function i(q, s) {
    for (var r in s) {
      q.style[o(q, r) || r] = s[r];
    }
  }
  function g(q, s) {
    var r = document.createElement(q || 'div');
    i(r, s);
    return r;
  }
  function k(w, x, u) {
    var t = x.x,
      s = x.y,
      r = w.pageX - t,
      q = w.pageY - s,
      v;
    if (r < u) {
      v = 0;
    } else {
      if (r > u * 3) {
        v = 1;
      } else {
        if (q < u) {
          v = 2;
        } else {
          v = 3;
        }
      }
    }
    return v;
  }
  function n(v, z, C) {
    var r = z.x,
      q = z.y,
      t = v.pageX - r,
      s = v.pageY - q,
      B,
      A = C - t,
      y = C - s,
      x = t >> 1,
      w = s >> 1,
      v = A >> 1,
      u = y >> 1;
    if (m == 0) {
      B = {
        bx: -C,
        by: 0,
        sx: -1,
        sy: 1,
        bs: 'shadowL',
        bmx: -C + t,
        bmy: 0,
        bsw: t,
        bsh: C,
        bsx: A,
        bsy: 0,
        cw: C - x,
        ch: C,
        cx: x,
        cy: 0,
        dw: x,
        dh: C,
        dx: x - (x >> 1),
        dy: 0,
      };
    } else {
      if (m == 1) {
        B = {
          bx: C,
          by: 0,
          sx: -1,
          sy: 1,
          bs: 'shadowR',
          bmx: t,
          bmy: 0,
          bsw: A,
          bsh: C,
          bsx: 0,
          bsy: 0,
          cw: C - v,
          ch: C,
          cx: 0,
          cy: 0,
          dw: v,
          dh: C,
          dx: C - A + (v >> 1),
          dy: 0,
        };
      } else {
        if (m == 2) {
          B = {
            bx: 0,
            by: -C,
            sx: 1,
            sy: -1,
            bs: 'shadowT',
            bmx: 0,
            bmy: -C + s,
            bsw: C,
            bsh: s,
            bsx: 0,
            bsy: y,
            cw: C,
            ch: C - w,
            cx: 0,
            cy: w,
            dw: C,
            dh: w,
            dx: 0,
            dy: w - (w >> 1),
          };
        } else {
          B = {
            bx: 0,
            by: C,
            sx: 1,
            sy: -1,
            bs: 'shadowB',
            bmx: 0,
            bmy: s,
            bsw: C,
            bsh: y,
            bsx: 0,
            bsy: 0,
            cw: C,
            ch: C - u,
            cx: 0,
            cy: 0,
            dw: C,
            dh: u,
            dx: 0,
            dy: C - y + (u >> 1),
          };
        }
      }
    }
    return B;
  }
  function f(r, w) {
    var y = w.container.getBoundingClientRect(),
      q = {
        x: y.left + window.pageXOffset,
        y: y.top + window.pageYOffset,
      };
    m = k(r, q, w.sizeQ);
    b = n(r, q, w.size);
    b.pos = q;
    var t = b.bx,
      s = b.by,
      v = b.sx,
      u = b.sy,
      x = b.bs;
    w.backShadow.className = w.depth.className = 'sticker-shadow ' + x;
    i(w.mask, {
      transition: j,
      width: w.size + 'px',
      height: w.size + 'px',
      transform: 'translate(' + 0 + 'px, ' + 0 + 'px)',
    });
    i(w.move, {
      transition: j,
      transform: 'translate(' + 0 + 'px, ' + 0 + 'px)',
    });
    i(w.back, {
      transition: j,
      transform: 'translate(' + t + 'px, ' + s + 'px)',
    });
    i(w.backImg, {
      transform: 'scaleX(' + v + ') scaleY(' + u + ')',
    });
    i(w.depth, {
      transform: 'translate(' + -10000 + 'px, ' + -10000 + 'px)',
    });
  }
  function l(s, q) {
    if (b == null) {
      return;
    }
    var t = b.bx,
      r = b.by;
    i(q.mask, {
      transition: d,
      width: q.size + 'px',
      height: q.size + 'px',
      transform: 'translate(' + 0 + 'px, ' + 0 + 'px)',
    });
    i(q.move, {
      transition: d,
      transform: 'translate(' + 0 + 'px, ' + 0 + 'px)',
    });
    i(q.back, {
      transition: d,
      transform: 'translate(' + t + 'px, ' + r + 'px)',
    });
    i(q.depth, {
      transform: 'translate(' + -10000 + 'px, ' + -10000 + 'px)',
    });
    b = null;
  }
  function a(A, E) {
    if (b == null) {
      f(A, E);
      window.document.addEventListener(
        'mouseup',
        function (H) {
          this.removeEventListener('mouseup', arguments.callee, false);
          l(H, E);
        },
        false
      );
    }
    var C = n(A, b.pos, E.size),
      w = C.bmx,
      v = C.bmy,
      u = C.bsw,
      D = C.bsh,
      t = C.bsx,
      s = C.bsy,
      z = C.cw,
      r = C.ch,
      y = C.cx,
      x = C.cy,
      q = C.dw,
      B = C.dh,
      G = C.dx,
      F = C.dy;
    i(E.mask, {
      width: z + 'px',
      height: r + 'px',
      transform: 'translate(' + y + 'px, ' + x + 'px)',
    });
    i(E.move, {
      transform: 'translate(' + -y + 'px, ' + -x + 'px)',
    });
    i(E.back, {
      transform: 'translate(' + w + 'px, ' + v + 'px)',
    });
    i(E.backShadow, {
      width: u + 'px',
      height: D + 'px',
      transform: 'translate(' + t + 'px, ' + s + 'px)',
    });
    i(E.depth, {
      width: q + 'px',
      height: B + 'px',
      transform: 'translate(' + G + 'px, ' + F + 'px)',
    });
  }
  var c = {
    init: function p(t) {
      if (typeof t === 'string') {
        var D = document.querySelectorAll(t),
          w,
          A = D.length;
        for (w = 0; w < A; w++) {
          p(D[w]);
        }
        return;
      }
      var C,
        z = t.getBoundingClientRect(),
        F = z.width,
        x = F >> 2,
        q = g('div', {
          position: 'relative',
          width: F + 'px',
          height: F + 'px',
          overflow: 'hidden',
        }),
        E = g('div', {
          position: 'relative',
          width: F + 'px',
          height: F + 'px',
          overflow: 'hidden',
        }),
        s = g('div', {
          position: 'relative',
          borderRadius: '50%',
          width: F + 'px',
          height: F + 'px',
          overflow: 'hidden',
        }),
        r = g('div', {
          position: 'relative',
          borderRadius: '50%',
          width: F + 'px',
          height: F + 'px',
          zIndex: 1,
        }),
        v = g('div', {
          position: 'absolute',
          borderRadius: '50%',
          width: F + 'px',
          height: F + 'px',
          left: '0',
          top: '0',
          zIndex: 3,
          backgroundColor: '#ffffff',
          transform: 'translate(' + F + 'px, ' + 0 + 'px)',
          overflow: 'hidden',
        }),
        B = g('div', {
          position: 'relative',
          borderRadius: '50%',
          width: F + 'px',
          height: F + 'px',
          opacity: '0.4',
        }),
        y = g('div', {
          position: 'absolute',
          width: F + 'px',
          height: F + 'px',
          left: '0',
          top: '0',
          zIndex: 4,
        }),
        u = g('div', {
          position: 'absolute',
          width: F + 'px',
          height: F + 'px',
          left: '0',
          top: '0',
          zIndex: 1,
        });
      r.className = 'sticker-img sticker-front';
      B.className = 'sticker-img sticker-back';
      y.className = u.className = 'sticker-shadow';
      t.appendChild(q);
      q.appendChild(E);
      E.appendChild(s);
      s.appendChild(r);
      s.appendChild(u);
      s.appendChild(v);
      v.appendChild(B);
      v.appendChild(y);
      C = {
        container: q,
        size: F,
        sizeQ: x,
        mask: E,
        move: s,
        depth: u,
        back: v,
        backImg: B,
        backShadow: y,
      };
      t.addEventListener(
        'mouseenter',
        function (G) {
          f(G, C);
        },
        false
      );
      t.addEventListener(
        'mouseleave',
        function (G) {
          l(G, C);
        },
        false
      );
      t.addEventListener(
        'mousemove',
        function (G) {
          a(G, C);
        },
        false
      );
      return this;
    },
  };
  if (typeof exports == 'object') {
    module.exports = c;
  } else {
    if (typeof define == 'function' && define.amd) {
      define(function () {
        return c;
      });
    } else {
      this.Sticker = c;
    }
  }
})();
