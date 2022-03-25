"use strict";

(function() {
    var dropdownLists = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < dropdownLists.length; i++) {
        var dropdown = new bootstrap.Dropdown(dropdownLists[i], {
            popperConfig: function (defaultBsPopperConfig) {
                var container = dropdownLists[i].closest('.dropdown');
                console.log(container)
                if (container) {
                    var button = dropdown.getElementsByClassName('dropdown-toggle');
                    if (button.length) {
                        var popper = Popper.createPopper(button[0], dropdownLists[i], {
                            ...defaultBsPopperConfig,
                            strategy: 'fixed',
                        });

                        console.log(popper)
                        return popper;
                    }
                }
                return defaultBsPopperConfig;
            }
        })

        // console.log(dropdown)
    }
})();

window.$INSTANCES = {}, window.$EDelegatedEventHandlers = {};
var doc = document.documentElement;
var $E = function(e) {
    return {
        getUniqueId: function(e) {
            return e + Math.floor(Math.random() * (new Date).getTime())
        },

        hasClass: function(element, className) {
            if (element) return element.classList ? element.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(element.className)
        },

        addClass: function(element, className) {
            if (element && void 0 !== className) {
                var n = className.split(" ");
                if (element.classList)
                    for (var i = 0; i < n.length; i++) n[i] && n[i].length > 0 && element.classList.add($E.trim(n[i]));
                else if (!$E.hasClass(element, className))
                    for (var r = 0; r < n.length; r++) element.className += " " + $E.trim(n[r])
            }
        },

        removeClass: function(e, t) {
            if (e && void 0 !== t) {
                var n = t.split(" ");
                if (e.classList)
                    for (var i = 0; i < n.length; i++) e.classList.remove($E.trim(n[i]));
                else if ($E.hasClass(e, t))
                    for (var r = 0; r < n.length; r++) e.className = e.className.replace(new RegExp("\\b" + $E.trim(n[r]) + "\\b", "g"), "")
            }
        },

        toggleClass: function(element, className) {
            if (element && void 0 !== className) {
                $E.hasClass(element, className) ? $E.removeClass(element, className) : $E.addClass(element, className)
            }
        },

        getBody: function() {
            return document.getElementsByTagName("body")[0]
        },

        each: function(e, t) {
            return [].slice.call(e).map(t)
        },

        addEvent: function(element, event, callback, i) {
            null != element && element.addEventListener(event, callback)
        },

        on: function(element, selector, event, callback) {
            if (null !== element) {
                var r = $E.getUniqueId("event");
                return window.$EDelegatedEventHandlers[r] = function(n) {
                    for (var r = element.querySelectorAll(selector), o = n.target; o && o !== element;) {
                        for (var a = 0, l = r.length; a < l; a++) o === r[a] && callback.call(o, event);
                        o = o.parentNode
                    }
                }, $E.addEvent(element, event, window.$EDelegatedEventHandlers[r]), r
            }
        },

        remove: function(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        },

        find: function(e, t) {
            return null !== e ? e.querySelector(t) : null
        },

        onDOMContentLoaded: function(e) {
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
        },

        trim: function(e) {
            return e.trim()
        },

        getResponsiveValue: function(e, t) {
            var n, i = this.getViewPort().width;
            if ("object" == typeof(e = $E.parseJson(e))) {
                var r, o, a = -1;
                for (var l in e) {
                    o = 'default', r = i <= 992 ? o : 'lg', n = e[r] ? e[r] : e.default
                }
            } else n = e;
            return n
        },

        getViewPort: function() {
            var e = window,
                t = "inner";
            return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
                width: e[t + "Width"],
                height: e[t + "Height"]
            }
        },

        parseJson: function(e) {
            if ("string" == typeof e) {
                var t = (e = e.replace(/'/g, '"')).replace(/(\w+:)|(\w+ :)/g, (function(e) {
                    return '"' + e.substring(0, e.length - 1) + '":'
                }));
                try {
                    e = JSON.parse(t)
                } catch (e) {}
            }
            return e
        },

        visible: function(e) {
            return !(0 === e.offsetWidth && 0 === e.offsetHeight)
        },

        css: function(e, t, n, i) {
            if (e)
                if (void 0 !== n) !0 === i ? e.style.setProperty(t, n, "important") : e.style[t] = n;
                else {
                    var r = (e.ownerDocument || document).defaultView;
                    if (r && r.getComputedStyle) return t = t.replace(/([A-Z])/g, "-$1").toLowerCase(), r.getComputedStyle(e, null).getPropertyValue(t);
                    if (e.currentStyle) return t = t.replace(/\-(\w)/g, (function(e, t) {
                        return t.toUpperCase()
                    })), n = e.currentStyle[t], /^\d+(em|pt|%|ex)?$/i.test(n) ? function(t) {
                        var n = e.style.left,
                            i = e.runtimeStyle.left;
                        return e.runtimeStyle.left = e.currentStyle.left, e.style.left = t || 0, t = e.style.pixelLeft + "px", e.style.left = n, e.runtimeStyle.left = i, t
                    }(n) : n
                }
        },
    };
}();
"undefined" != typeof module && void 0 !== module.exports && (module.exports = $E);

$E.onDOMContentLoaded(function() {

});

$E.onDOMContentLoaded(function() {
    var b = $E.getBody();

});

var SIDEBAR = {
    body: null,
    overlay: null,

    show: function(t) {
        $E.addClass(this.body, "menu-active");
        t === "lg" ? null : SIDEBAR.drawOverlay() ;
    },

    hide: function(t) {
        $E.removeClass(this.body, "menu-active");
        t === "lg" ? null : (SIDEBAR.overlay ? (SIDEBAR.overlay.remove(), SIDEBAR.overlay = null) : null) ;
    },

    initHandlers: function() {
        var menuToggler;
        (menuToggler = document.querySelectorAll("[data-toggle-menu]")) && menuToggler.length && $E.each(menuToggler, function(e) {
            $E.addEvent(e, "click", function(e) {
                var t = e.target.closest("[data-toggle-menu]").getAttribute("data-toggle-menu");
                $E.hasClass(SIDEBAR.body, 'menu-active') ? SIDEBAR.hide(t) : SIDEBAR.show(t);
            });
        });


    },

    drawOverlay: function() {
        this.overlay = document.createElement("div");
        this.overlay.className  = "popup-overlay";
        this.overlay = this.body.appendChild(this.overlay);
        $E.addEvent(this.overlay, "click", function() {
            SIDEBAR.hide("mobile");
        });
    },

    initWindowHandlers: function() {
        $E.addEvent(window, "resize", function() {
            var o;
            if (window.innerWidth < 992) {
                $E.hasClass(SIDEBAR.body, 'menu-active') && SIDEBAR.hide();
            } else {
                SIDEBAR.overlay ? (SIDEBAR.overlay.remove(), SIDEBAR.overlay = null) : null;
                !$E.hasClass(SIDEBAR.body, 'menu-active') && SIDEBAR.show('lg');
            }
        });
    },

    loadDefault: function() {
        window.innerWidth < 992 ? SIDEBAR.hide() : null
    },

    init: function() {
        this.body = $E.getBody();
        this.initHandlers();
        this.initWindowHandlers();
        this.loadDefault();
    }
};

var SCROLLMENU = {
    selector: '[data-sidebar-menu="true"]',
    element: null,

    loadInstance: function() {
        var menu;
        (menu = SCROLLMENU.getInstance()) && menu.length && $E.each(menu, function(e) {
            SCROLLMENU.init(e);
        });
    },

    getInstance: function() {
        return this.selector ? document.querySelectorAll(this.selector) : null;
    },

    getHeight: function() {
        var e, t = $E.getViewPort().height,
        i = this.getData("dependencies");
        if (null !== i && ((e = document.querySelectorAll(i)) && e.length > 0))
            for (var a = 0, l = e.length; a < l; a++) {
                var s = e[a];
                !1 !== $E.visible(s) && (t-= parseInt(s.offsetHeight), t-= parseInt($E.css(s, "margin-top")), t-= parseInt($E.css(s, "margin-bottom")))
            }

        return String(t) + "px";
    },

    getData: function(e) {
        if (!0 === this.element.hasAttribute("data-scroll-" + e)) {
            var t = this.element.getAttribute("data-scroll-" + e),
                i = $E.getResponsiveValue(t);
            return null !== i && "true" === String(i) ? i = !0 : null !== i && "false" === String(i) && (i = !1), i
        }
        var r = $E.snakeToCamel(e);
        return n.options[r] ? $E.getResponsiveValue(n.options[r]) : null
    },

    setHeight: function() {
         var height = this.getHeight();
        $E.css(this.element, 'height', height);
    },

    init: function(element) {
        this.element = element;
        this.setHeight();
    }
};

$E.onDOMContentLoaded(function() {
    SIDEBAR.init();

    SCROLLMENU.loadInstance();

    $E.addEvent(window, "resize", function() {
        var menu;
        (menu = SCROLLMENU.getInstance()) && menu.length && $E.each(menu, function(e) {
            SCROLLMENU.element = e;
            SCROLLMENU.setHeight(e);
        });
    });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

var preLoader = document.getElementsByClassName('pre-loader');

setTimeout(function() {
    $E.addClass(preLoader[0], 'd-none');
}, 1000);

var screenToggler = document.getElementsByClassName('btn-toggle-screen');
if (screenToggler.length) {
    $E.addEvent(screenToggler[0], 'click', function() {
        $E.toggleClass(this, 'open');
        if ($E.hasClass(this, 'open')) {
            if (doc.requestFullscreen) {
                doc.requestFullscreen();
            } else if (doc.webkitRequestFullscreen) { /* Safari */
                doc.webkitRequestFullscreen();
            } else if (doc.msRequestFullscreen) { /* IE11 */
                doc.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }
    });
}
