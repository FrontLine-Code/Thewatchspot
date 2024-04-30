"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Swiper = /*#__PURE__*/function () {
  function Swiper(containerId) {
    _classCallCheck(this, Swiper);
    _defineProperty(this, "container", void 0);
    _defineProperty(this, "wrapper", void 0);
    _defineProperty(this, "slides", void 0);
    _defineProperty(this, "currentIndex", void 0);
    this.container = document.getElementById(containerId);
    this.wrapper = this.container.querySelector(".swiper-wrapper");
    this.slides = this.container.querySelectorAll(".swiper-slide");
    this.currentIndex = 0;
  }
  return _createClass(Swiper, [{
    key: "nextSlide",
    value: function nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
        this.moveWrapper();
      }
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.moveWrapper();
      }
    }
  }, {
    key: "moveWrapper",
    value: function moveWrapper() {
      var slideWidth = this.slides[0].offsetWidth;
      var newPosition = -this.currentIndex * slideWidth;
      this.wrapper.style.transform = "translateX(".concat(newPosition, "px)");
    }
  }]);
}();
var mySwiper = new Swiper("swiper-container");
document.getElementById("next").addEventListener("click", function () {
  mySwiper.nextSlide();
});
document.getElementById("prev").addEventListener("click", function () {
  mySwiper.prevSlide();
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    mySwiper.prevSlide();
  } else if (event.key === "ArrowRight") {
    mySwiper.nextSlide();
  }
});
//# sourceMappingURL=index.js.map