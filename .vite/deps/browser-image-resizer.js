import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/browser-image-resizer/dist/index.js
var require_dist = __commonJS({
  "node_modules/browser-image-resizer/dist/index.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("BrowserImageResizer", [], e) : "object" == typeof exports ? exports.BrowserImageResizer = e() : t.BrowserImageResizer = e();
    }(self, () => (() => {
      "use strict";
      var t = { d: (e2, a2) => {
        for (var i2 in a2)
          t.o(a2, i2) && !t.o(e2, i2) && Object.defineProperty(e2, i2, { enumerable: true, get: a2[i2] });
      }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      } }, e = {};
      function a() {
        return document.createElement("canvas");
      }
      function i(t2) {
        for (var e2 = atob(t2.split(",")[1]), a2 = t2.split(",")[0].split(":")[1].split(";")[0], i2 = new ArrayBuffer(e2.length), o2 = new Uint8Array(i2), r2 = 0; r2 < e2.length; r2++)
          o2[r2] = e2.charCodeAt(r2);
        return new Blob([i2], { type: a2 });
      }
      function o(t2, e2) {
        var a2 = e2.width / e2.height, i2 = Math.min(e2.width, t2.maxWidth, a2 * t2.maxHeight);
        return t2.maxSize > 0 && t2.maxSize < e2.width * e2.height / 1e3 && (i2 = Math.min(i2, Math.floor(1e3 * t2.maxSize / e2.height))), t2.scaleRatio && (i2 = Math.min(i2, Math.floor(t2.scaleRatio * e2.width))), t2.debug && (console.log("browser-image-resizer: original image size = " + e2.width + " px (width) X " + e2.height + " px (height)"), console.log("browser-image-resizer: scaled image size = " + i2 + " px (width) X " + Math.floor(i2 / a2) + " px (height)")), i2 <= 0 && (i2 = 1, console.warn("browser-image-resizer: image size is too small")), i2;
      }
      function r(t2, e2) {
        var a2 = document.createElement("canvas"), i2 = e2.outputWidth / t2.width;
        a2.width = t2.width * i2, a2.height = t2.height * i2;
        var o2 = t2.getContext("2d").getImageData(0, 0, t2.width, t2.height), r2 = a2.getContext("2d").createImageData(a2.width, a2.height);
        return function(t3, e3, a3) {
          function i3(t4, e4, a4, i4, o4, r4) {
            var n3 = 1 - o4, d3 = 1 - r4;
            return t4 * n3 * d3 + e4 * o4 * d3 + a4 * n3 * r4 + i4 * o4 * r4;
          }
          var o3, r3, n2, d2, h2, g, c, l, m, f, s, u, w, p, y, v, b, x, M;
          for (o3 = 0; o3 < e3.height; ++o3)
            for (n2 = o3 / a3, d2 = Math.floor(n2), h2 = Math.ceil(n2) > t3.height - 1 ? t3.height - 1 : Math.ceil(n2), r3 = 0; r3 < e3.width; ++r3)
              g = r3 / a3, c = Math.floor(g), l = Math.ceil(g) > t3.width - 1 ? t3.width - 1 : Math.ceil(g), m = 4 * (r3 + e3.width * o3), f = 4 * (c + t3.width * d2), s = 4 * (l + t3.width * d2), u = 4 * (c + t3.width * h2), w = 4 * (l + t3.width * h2), p = g - c, y = n2 - d2, v = i3(t3.data[f], t3.data[s], t3.data[u], t3.data[w], p, y), e3.data[m] = v, b = i3(t3.data[f + 1], t3.data[s + 1], t3.data[u + 1], t3.data[w + 1], p, y), e3.data[m + 1] = b, x = i3(t3.data[f + 2], t3.data[s + 2], t3.data[u + 2], t3.data[w + 2], p, y), e3.data[m + 2] = x, M = i3(t3.data[f + 3], t3.data[s + 3], t3.data[u + 3], t3.data[w + 3], p, y), e3.data[m + 3] = M;
        }(o2, r2, i2), a2.getContext("2d").putImageData(r2, 0, 0), a2;
      }
      function n(t2) {
        var e2 = document.createElement("canvas");
        return e2.width = t2.width / 2, e2.height = t2.height / 2, e2.getContext("2d").drawImage(t2, 0, 0, e2.width, e2.height), e2;
      }
      t.r(e), t.d(e, { readAndCompressImage: () => h });
      var d = { quality: 0.5, maxWidth: 800, maxHeight: 600, autoRotate: true, debug: false, mimeType: "image/jpeg" };
      function h(t2, e2) {
        return new Promise(function(h2, g) {
          var c = document.createElement("img"), l = new FileReader(), m = Object.assign({}, d, e2);
          l.onload = function(t3) {
            c.onerror = function() {
              g("cannot load image.");
            }, c.onload = function() {
              var t4 = { img: c, config: m };
              try {
                var e3 = function() {
                  var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e4 = t5.img, d2 = t5.config, h3 = (t5.orientation, a());
                  h3.width = e4.width, h3.height = e4.height;
                  var g2 = h3.getContext("2d");
                  "image/jpeg" === d2.mimeType && (g2.fillStyle = "#ffffff", g2.fillRect(0, 0, h3.width, h3.height), g2.save()), g2.drawImage(e4, 0, 0), g2.restore();
                  for (var c2 = o(d2, h3); h3.width >= 2 * c2; )
                    h3 = n(h3);
                  h3.width > c2 && (h3 = r(h3, Object.assign(d2, { outputWidth: c2 })));
                  var l2 = h3.toDataURL(d2.mimeType, d2.quality);
                  return "function" == typeof d2.onScale && d2.onScale(l2), i(l2);
                }(t4);
                h2(e3);
              } catch (t5) {
                g(t5);
              }
            }, c.src = t3.target.result;
          };
          try {
            l.onerror = function() {
              g("cannot read image file.");
            }, l.readAsDataURL(t2);
          } catch (t3) {
            g(t3);
          }
        });
      }
      return e;
    })());
  }
});
export default require_dist();
//# sourceMappingURL=browser-image-resizer.js.map
