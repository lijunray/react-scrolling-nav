"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactScroll = require("react-scroll");

var ElementsWrapper = function ElementsWrapper(_ref) {
  var children = _ref.children,
      items = _ref.items,
      style = _ref.style,
      className = _ref.className;
  return _react.default.createElement("div", null, children.map(function (child, i) {
    return _react.default.createElement(_reactScroll.Element, {
      style: style,
      className: className,
      name: items[i].target,
      key: i
    }, child);
  }));
};

ElementsWrapper.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element)]).isRequired,
  items: _propTypes.default.array.isRequired,
  style: _propTypes.default.object,
  className: _propTypes.default.string
};
var _default = ElementsWrapper;
exports.default = _default;