"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _nav = _interopRequireDefault(require("./nav"));

var currIndex = null;
var nextIndex = 0;
var DEFAULT_NAV_WIDTH = 86;

var Navs = function Navs(_ref) {
  var items = _ref.items,
      offset = _ref.offset,
      duration = _ref.duration,
      delay = _ref.delay,
      coverWidth = _ref.coverWidth,
      navWidth = _ref.navWidth,
      linkClass = _ref.linkClass,
      activeLinkClass = _ref.activeLinkClass;
  navWidth = navWidth ? navWidth : DEFAULT_NAV_WIDTH;
  coverWidth = coverWidth ? coverWidth : items.length * navWidth;
  var coverStyle = {
    width: coverWidth,
    height: "100%",
    overflow: "hidden",
    WebkitMaskBoxImage: "-webkit-linear-gradient(left, transparent, white 50%, transparent)"
  };
  var navsStyle = {
    margin: 0,
    left: coverWidth / 2 - 43,
    paddingLeft: 0,
    position: "relative",
    height: "100%",
    display: "flex",
    listStyle: "none"
  };

  var navsNode = _react.default.createRef();

  var moveNavs = function moveNavs(newIndex, navWidth) {
    currIndex = nextIndex;
    nextIndex = newIndex;

    if (navsNode.current) {
      var currLeft = Number.parseInt(navsNode.current.style.left);
      var indexOffset = nextIndex - currIndex;
      navsNode.current.style.left = currLeft - indexOffset * navWidth + "px";
    }
  };

  return _react.default.createElement("div", {
    style: coverStyle
  }, _react.default.createElement("ul", {
    style: navsStyle,
    ref: navsNode
  }, items.map(function (item, i) {
    return _react.default.createElement(_nav.default, {
      key: i,
      index: i,
      item: item,
      offset: offset,
      duration: duration,
      delay: delay,
      moveNavs: moveNavs,
      width: navWidth,
      linkClass: linkClass,
      activeLinkClass: activeLinkClass
    });
  })));
};

Navs.propTypes = {
  items: _propTypes.default.array.isRequired,
  offset: _propTypes.default.number,
  duration: _propTypes.default.number,
  delay: _propTypes.default.number,
  coverWidth: _propTypes.default.number,
  navWidth: _propTypes.default.number
};
var _default = Navs;
exports.default = _default;