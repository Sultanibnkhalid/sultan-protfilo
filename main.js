"use strict";
// assigns the jQuery object to a variable named $
var $ = jQuery.noConflict();
//extends the jQuery easing object with new easing functions. Easing functions are used to control the speed and acceleration of animations.
// The code defines four easing functions:
$.extend($.easing, {
 
  def: "easeOutQuad",
  
  swing: function (t, e, i, a, n) {
    return $.easing[$.easing.def](t, e, i, a, n);
  },
 
  easeOutQuad: function (t, e, i, a, n) {
    return -a * (e /= n) * (e - 2) + i;
  },
 
  easeOutQuint: function (t, e, i, a, n) {
    return a * ((e = e / n - 1) * e * e * e * e + 1) + i;
  },
}),
  (window.MySite = {}),
  /**************************************************************** */
  (function (t) {
    //define variables
    var e, i, a, n, o, s, r;
    (MySite.$window = t(window)),
      (MySite.$body = t(document.body)),
      (MySite.status = ""),
      (MySite.isIE = navigator.userAgent.indexOf("Trident") >= 0),
      (MySite.isEdge = navigator.userAgent.indexOf("Edge") >= 0),
      (MySite.isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )),
      (MySite.call = function (t, e) {
        setTimeout(t, e);
      }),
      //pars the data option for the element as json object
      (MySite.parseOptions = function (t) {
        return "string" == typeof t
          ? JSON.parse(t.replace(/'/g, '"').replace(";", ""))
          : {};
      }),
      //pars the templet for the element
      (MySite.parseTemplate = function (t, e) {
        return t.replace(/\{\{(\w+)\}\}/g, function () {
          return e[arguments[1]];
        });
      }),
      //get the element by id
      (MySite.byId = function (t) {
        return document.getElementById(t);
      }),
      //get the element by tage
      (MySite.byTag = function (t, e) {
        return e ? e.getElementsByTagName(t) : document.getElementsByTagName(t);
      }),
      //get the element by class
      (MySite.byClass = function (t, e) {
        return e
          ? e.getElementsByClassName(t)
          : document.getElementsByClassName(t);
      }),
      
      //get the type of each element
      (MySite.$ = function (e) {
        return e instanceof jQuery ? e : t(e);
      }),
      //check if the  element is on screen
      (MySite.isOnScreen = function (t) {
        var e = window.pageXOffset,
          i = window.pageYOffset,
          a = t.getBoundingClientRect(),
          n = a.left + e,
          o = a.top + i;
        return (
          o + a.height >= i &&
          o <= i + window.innerHeight &&
          n + a.width >= e &&
          n <= e + window.innerWidth
        );
      }),
      //function apappear
      (MySite.appear = function (e, i, a) {
        return (
          a &&
            Object.keys(a).length &&
            t.extend(intersectionObserverOptions, a),
          new IntersectionObserver(
            function (e) {
              for (var a = 0; a < e.length; a++) {
                var n = e[a];
                if (n.intersectionRatio > 0)
                  if ("string" == typeof i)
                    Function("return " + functionName)();
                  else i.call(t(n.target));
              }
            },
            {
              rootMargin: "0px 0px 200px 0px",
              threshold: 0,
              alwaysObserve: !0,
            }
          ).observe(e),
          this
        );
      }),
      //initialize ScrollTopButton
      (MySite.initScrollTopButton = function () {
        var e = MySite.byId("scroll-top");
        e.addEventListener("click", function (e) {
          t("html, body").animate(
            {
              scrollTop: 0,
            },
            600
          ),
            e.preventDefault();
        });
        var i = function () {
          if (window.pageYOffset > 400) {
            e.classList.add("show");
            var i = t(document).height(),
              a = t(window).height(),
              n = (t(window).scrollTop() / (i - a)) * 214;
            t("#progress-indicator").length > 0 &&
              t("#progress-indicator").css("stroke-dasharray", n + ", 400");
          } else e.classList.remove("show");
        };
        MySite.call(i, 500),
          window.addEventListener("scroll", i, {
            passive: !0,
          });
      }),
     
      //variables to  contains the animation options
      (MySite.animationOptions = {
        name: "fadeIn",
        duration: "1.2s",
        delay: ".2s",
      }),
      //this function to handl or show the elemnts  that have the class the "appear-animate"
      (MySite.appearAnimate = function (e) {
        MySite.$(e).each(function () {
          var e = this;
          MySite.appear(e, function () {
            if (e.classList.contains("appear-animate")) {
              var i = t.extend(
                {},
                MySite.animationOptions,
                MySite.parseOptions(e.getAttribute("data-animation-options"))
              );
              setTimeout(
                function () {
                  (e.style["animation-duration"] = i.duration),
                    e.classList.add(i.name),
                    e.classList.add("appear-animation-visible");
                },
                i.delay ? 1e3 * Number(i.delay.slice(0, -1)) : 0
              );
            }
          });
        });
      }),
      //this function control  scroling event
      (MySite.scrollTo = function (e, i) {
        //void 0 is a way to represent undefined in JavaScript).
        var a = void 0 === i ? 0 : i;
        if ("number" == typeof e) o = e;
        else {
          var n = MySite.$(e);
          if (!n.length || "none" == n.css("display")) return;
          var o = n.offset().top,
            s = t("#wp-toolbar");
          window.innerWidth > 600 &&
            s.length &&
            (o -= s.parent().outerHeight()),
            t(".sticky-content.fix-top.fixed").each(function () {
              o -= this.offsetHeight;
            });
        }
        t("html,body").stop().animate(
          {
            scrollTop: o,
          },
          a
        );
      });
  })(jQuery), 
  (MySite.zoomImageOptions = {
    responsive: !0,
    borderSize: 0,
    zoomType: "inner",
    onZoomIn: !0,
    magnify: 1.1,
  }),
  //   This line initializes an empty array
  (MySite.zoomImageObjects = []),
  //   This line adds an event listener to the window object
  (MySite.zoomImage = function (e) {
    t.fn.zoom &&
      e &&
      ("string" == typeof e ? t(e) : e).find("img").each(function () {
        var e = t(this);
        (MySite.zoomImageOptions.target = e.parent()),
          (MySite.zoomImageOptions.url = e.attr("data-zoom-image")),
          e.zoom(MySite.zoomImageOptions),
          MySite.zoomImageObjects.push(e);
      });
  }),
  //fucnction to zoom images when resizing the screen
  (MySite.zoomImageOnResize = function () {
    MySite.zoomImageObjects.forEach(function (e) {
      e.each(function () {
        var e = t(this).data("zoom");
        e && e.refresh();
      });
    });
  }),
  //   This line adds an event listener to the window object
  //to load image lazy
  (MySite.lazyLoad = function (t, e) {
    function i() {
      this.setAttribute("src", this.getAttribute("data-src")),
        this.addEventListener("load", function () {
          (this.style["padding-top"] = ""),
            this.classList.remove("lazy-img");
        });
    }
    MySite.$(t)
      .find(".lazy-img")
      .each(function () {
        void 0 !== e && e ? i.call(this) : MySite.appear(this, i);
      });
  }),
  /****************************************************************
   * swiper
   * this anynoums functions to deal with  swiper an slider animation and events
   */
  (function (t) {
    function e(t, e) {
      return this.init(t, e);
    }
    var i = function (t) {
        var e = this.wrapperEl,
          i = e.getAttribute("class");
        if (
          (i.match(/row|gutter\-\w\w|cols\-\d|cols\-\w\w-\d/g) &&
            e.setAttribute(
              "class",
              i
                .replace(/row|gutter\-\w\w|cols\-\d|cols\-\w\w-\d/g, "")
                .replace(/\s+/, " ")
            ),
          e.classList.contains("animation-slider"))
        )
          for (var a = e.children, n = a.length, o = 0; o < n; ++o)
            a[o].setAttribute("data-index", o + 1);
      },
      a = function (t) {
        var e,
          i = this.firstElementChild.firstElementChild.children,
          a = i.length;
        for (e = 0; e < a; ++e)
          if (!i[e].classList.contains("active")) {
            var n,
              o = MySite.byClass("appear-animate", i[e]);
            for (n = o.length - 1; n >= 0; --n)
              o[n].classList.remove("appear-animate");
          }
      },
      n = function (e) {
        t(window).trigger("appear.check");
        var i = t(e.currentTarget),
          a = i.find(".swiper-slide.active video");
        i
          .find(".swiper-slide:not(.swiper-slide-active) video")
          .each(function () {
            this.paused || i.trigger("autoplayStart"),
              this.pause(),
              (this.currentTime = 0);
          }),
          a.length &&
            (!0 === i.data("slider").options.autoplay &&
              i.trigger("autoplayStop"),
            a.each(function () {
              this.paused && this.play();
            }));
      },
      o = function () {
        var e = this;
        t(this.wrapperEl)
          .find(".swiper-slide-active .slide-animate")
          .each(function () {
            var i = t(this),
              a = t.extend(
                !0,
                {},
                MySite.animationOptions,
                MySite.parseOptions(i.data("animation-options"))
              ),
              n = a.duration,
              o = a.delay,
              s = a.name;
            setTimeout(function () {
              if (
                (i.css("animation-duration", n),
                i.css("animation-delay", o),
                i.addClass(s),
                i.hasClass("maskLeft"))
              ) {
                i.css("width", "fit-content");
                var t = i.width();
                i
                  .css("width", 0)
                  .css(
                    "transition",
                    "width " + (n || "0.75s") + " linear " + (o || "0s")
                  ),
                  i.css("width", t);
              }
              n = n || "0.75s";
              var a = MySite.requestTimeout(
                function () {
                  i.addClass("show-content");
                },
                o ? 1e3 * Number(o.slice(0, -1)) + 200 : 200
              );
              e.timers.push(a);
            }, 300);
          });
      },
      s = function (e) {
        t(this.wrapperEl)
          .find(".swiper-slide-active .slide-animate")
          .each(function () {
            var e = t(this);
            e.addClass("show-content"), e.attr("style", "");
          });
      },
      r = function (e) {
        var i = this,
          a = t(this.wrapperEl);
        (i.translateFlag = 1),
          (i.prev = i.next),
          a.find(".swiper-slide .slide-animate").each(function () {
            var e = t(this),
              i = t.extend(
                !0,
                {},
                MySite.animationOptions,
                MySite.parseOptions(e.data("animation-options"))
              );
            e.removeClass(i.name);
          });
      },
      l = function (e) {
        var i = this,
          a = t(this.wrapperEl);
        if (1 == i.translateFlag) {
          if (
            ((i.next = this.slider.activeIndex),
            a.find(".show-content").removeClass("show-content"),
            i.prev != i.next)
          ) {
            if (
              (a.find(".show-content").removeClass("show-content"),
              a.hasClass("animation-slider"))
            ) {
              for (var n = 0; n < i.timers.length; n++)
                MySite.deleteTimeout(i.timers[n]);
              i.timers = [];
            }
            a.find(".swiper-slide-active .slide-animate").each(function () {
              var e = t(this),
                a = t.extend(
                  !0,
                  {},
                  MySite.animationOptions,
                  MySite.parseOptions(e.data("animation-options"))
                ),
                n = a.duration,
                o = a.delay,
                s = a.name;
              e.css("animation-duration", n),
                e.css("animation-delay", o),
                e.css("transition-property", "visibility, opacity"),
                e.css("transition-delay", o),
                e.css("transition-duration", n),
                e.addClass(s),
                (n = n || "0.75s");
              var r = MySite.requestTimeout(
                function () {
                  e.css("transition-property", ""),
                    e.css("transition-delay", ""),
                    e.css("transition-duration", ""),
                    e.addClass("show-content"),
                    i.timers.splice(i.timers.indexOf(r), 1);
                },
                o
                  ? 1e3 * Number(o.slice(0, -1)) + 500 * Number(n.slice(0, -1))
                  : 500 * Number(n.slice(0, -1))
              );
              i.timers.push(r);
            });
          } else
            a.find(".swiper-slide")
              .eq(this.slider.activeIndex)
              .find(".slide-animate")
              .addClass("show-content");
          i.translateFlag = 0;
        }
      };
    (e.defaults = {
      slidesPerView: 1,
      speed: 300,
    }),
      (e.presets = {
        "product-thumbs-wrap": {
          slidesPerView: 4,
          spaceBetween: 10,
          freeMode: !0,
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          freeModeSticky: !0,
        },
      }),
      (e.prototype.init = function (c, d) {
        (this.timers = []),
          (this.translateFlag = 0),
          (this.prev = 0),
          (this.next = 0),
          (this.container = c[0]),
          (this.wrapperEl = c.children()[0]);
        var p = c.children(".swiper-button-next"),
          u = c.children(".swiper-button-prev"),
          m = c.children(".swiper-pagination"),
          h = c.children(".custom-dots");
        if (!c.data("slider")) {
          MySite.lazyLoad(c, !0);
          var f = c.attr("class").split(" "),
            g = t.extend(!0, {}, e.defaults);
          f.forEach(function (i) {
            var a = e.presets[i];
            a && t.extend(!0, g, a);
          }),
            p.length &&
              t.extend(!0, g, {
                navigation: {
                  nextEl: p[0],
                },
              }),
            u.length &&
              t.extend(!0, g, {
                navigation: {
                  prevEl: u[0],
                },
              }),
            m.length &&
              t.extend(!0, g, {
                pagination: {
                  el: m[0],
                  clickable: !0,
                },
              }),
            c.find("video").each(function () {
              this.loop = !1;
            }),
            t.extend(
              !0,
              g,
              MySite.parseOptions(c.attr("data-swiper-options")),
              d
            ),
            i.call(this),
            (this.slider = new Swiper(this.container, g)),
            c.data("slider", this.slider),
            c.trigger("initialized.slider", this.slider),
            this.slider.on("afterInit", a).on("transitionEnd", n),
            c.hasClass("animation-slider") && o.call(this),
            c.hasClass("animation-slider") &&
              this.slider
                .on("resize", s)
                .on("transitionStart", r.bind(this))
                .on("transitionEnd", l.bind(this)),
            h.length &&
              (this.slider.on("transitionEnd", function () {
                var t = this.activeIndex;
                h.children("a:nth-child(" + ++t + ")")
                  .addClass("active")
                  .siblings()
                  .removeClass("active");
              }),
              h.children("a").on("click", function (e) {
                e.preventDefault();
                var i = t(this);
                if (!i.hasClass("active")) {
                  var a = i.index();
                  i.closest(".swiper-container").data("slider").slideTo(a),
                    i.addClass("active").siblings().removeClass("active");
                }
              }));
        }
      }),
      (MySite.slider = function (i, a = {}, n = !1) {
        MySite.$(i).each(function () {
          var i = t(this);
          n
            ? new e(i, a)
            : MySite.call(function () {
                new e(i, a);
              });
        });
      }),
      (MySite.slider.pgToggle = function () {
        t(".swiper-container:not([class*='pg-']) .swiper-pagination").each(
          function () {
            var e = t(this);
            e.find("*").length <= 1
              ? e.css("display", "none")
              : e.css("display", "block");
          }
        );
      });
  })(jQuery),
   
  //this property to intialize the elements to allow the document to
  //call th epreviuse properties functions
  (MySite.init = function () {
    //anitial the appearAnimate property with the class ".appear-animate"
    MySite.appearAnimate(".appear-animate"),
      //anitial initScrollTopButton property
      MySite.slider(".swiper-container"),
      MySite.initScrollTopButton()
  }),
  jQuery,
  (window.onload = function () {
    (MySite.canvasWidth = window.innerWidth),
      (MySite.resizeTimeStamp = 0),
      (MySite.resizeChanged = !1),
      (MySite.status = "loaded"),
      document.body.classList.add("loaded"),
      MySite.call(MySite.initLayout),
      MySite.call(MySite.init),
      (MySite.status = "complete"),
      MySite.$window.trigger("mysite_complete");
  });
