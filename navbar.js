function _classCallCheck(n, t) {
    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var
    _createClass = function() {
        function n(n, t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
            }
        }
        return function(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t
        }
    }(),
    Navigation = function() {
        function n() {
            _classCallCheck(this, n), this.header = document.getElementsByTagName("header")[0], this.toggler = document.querySelector(".navigation--toggler"), this.navigationSwitch = this.navigationSwitch.bind(this)
        }
        return _createClass(n, [{
            key: "init",
            value: function() {
                this.setEvent()
            }
        }, {
            key: "setEvent",
            value: function() {
                this.toggler.addEventListener("click", this.navigationSwitch)
            }
        }, {
            key: "navigationSwitch",
            value: function() {
                this.header.classList.contains("header--open") ? this.closeHeader() : this.openHeader()
            }
        }, {
            key: "openHeader",
            value: function() {
                this.header.classList.add("header--open")
            }
        }, {
            key: "closeHeader",
            value: function() {
                this.header.classList.remove("header--open")
            }
        }]), n
    }(),
    Nav = (new Navigation).init();