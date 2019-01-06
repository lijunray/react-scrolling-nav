"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ElementsWrapper", {
  enumerable: true,
  get: function get() {
    return _elementsWrapper.default;
  }
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _navs = _interopRequireDefault(require("./navs"));

var _elementsWrapper = _interopRequireDefault(require("./elements-wrapper"));

require("./styles/nav.css");

var Navbar = function Navbar(_ref) {
  var items = _ref.items,
      offset = _ref.offset,
      duration = _ref.duration,
      delay = _ref.delay,
      height = _ref.height,
      backgroundColor = _ref.backgroundColor,
      children = _ref.children,
      coverWidth = _ref.coverWidth,
      navWidth = _ref.navWidth,
      linkClass = _ref.linkClass,
      activeLinkClass = _ref.activeLinkClass;
  var navbarStyle = {
    height: height ? height : 70,
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    backgroundColor: backgroundColor ? backgroundColor : "#222",
    display: "flex",
    justifyContent: "center"
  };
  offset = offset ? offset : -80;
  duration = duration ? duration : 500;
  delay = delay ? delay : 0;
  return _react.default.createElement("div", {
    style: navbarStyle
  }, _react.default.createElement(_navs.default, {
    items: items,
    offset: offset,
    duration: duration,
    delay: delay,
    coverWidth: coverWidth,
    navWidth: navWidth,
    linkClass: linkClass ? linkClass : "link",
    activeLinkClass: activeLinkClass ? activeLinkClass : "active_link"
  }), children);
};

Navbar.propTypes = {
  items: _propTypes.default.array.isRequired,
  offset: _propTypes.default.number,
  duration: _propTypes.default.number,
  delay: _propTypes.default.number,
  navbarStyle: _propTypes.default.object,
  height: _propTypes.default.number,
  backgroundColor: _propTypes.default.string,
  children: _propTypes.default.node,
  coverWidth: _propTypes.default.number,
  navWidth: _propTypes.default.number
};
var _default = Navbar;
exports.default = _default;