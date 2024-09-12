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

   
  //this property to intialize the elements to allow the document to
  //call th epreviuse properties functions
  (MySite.init = function () {
    //anitial the appearAnimate property with the class ".appear-animate"
    MySite.appearAnimate(".appear-animate"),
      //anitial initScrollTopButton property

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
