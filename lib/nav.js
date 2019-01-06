"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactScroll = require("react-scroll");

var Nav = function Nav(_ref) {
  var index = _ref.index,
      item = _ref.item,
      offset = _ref.offset,
      duration = _ref.duration,
      delay = _ref.delay,
      moveNavs = _ref.moveNavs,
      width = _ref.width,
      linkClass = _ref.linkClass,
      activeLinkClass = _ref.activeLinkClass;
  var liStyle = {
    width: width,
    height: "100%"
  };
  return _react.default.createElement("li", {
    style: liStyle
  }, _react.default.createElement(_reactScroll.Link, {
    className: linkClass,
    activeClass: activeLinkClass,
    onSetActive: function onSetActive() {
      moveNavs(index, width);
    },
    to: item.target,
    spy: true,
    smooth: true,
    offset: offset,
    duration: duration,
    isDynamic: true,
    delay: delay
  }, item.label));
};

Nav.propTypes = {
  index: _propTypes.default.number.isRequired,
  item: _propTypes.default.object.isRequired,
  offset: _propTypes.default.number,
  duration: _propTypes.default.number,
  delay: _propTypes.default.number,
  moveNavs: _propTypes.default.func,
  width: _propTypes.default.number,
  linkClass: _propTypes.default.string,
  activeLinkClass: _propTypes.default.string
};
var _default = Nav;
exports.default = _default;