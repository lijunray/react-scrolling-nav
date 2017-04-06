'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactScroll = require('react-scroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ElementsWrapper = function ElementsWrapper(_ref) {
    var children = _ref.children,
        items = _ref.items,
        style = _ref.style,
        className = _ref.className;
    return _react2.default.createElement(
        'div',
        null,
        children.map(function (child, i) {
            return _react2.default.createElement(
                _reactScroll.Element,
                { style: style, className: className, name: items[i].target, key: i },
                child
            );
        })
    );
};

ElementsWrapper.propTypes = {
    children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.arrayOf(_react.PropTypes.element)]).isRequired,
    navItems: _react.PropTypes.array.isRequired,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string
};

exports.default = ElementsWrapper;