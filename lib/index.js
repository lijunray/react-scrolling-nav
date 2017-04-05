'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ElementsWrapper = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactScroll = require('react-scroll');

var _navs = require('./navs');

var _navs2 = _interopRequireDefault(_navs);

var _elementsWrapper = require('./elements-wrapper');

var _elementsWrapper2 = _interopRequireDefault(_elementsWrapper);

require('./styles/nav.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return _react2.default.createElement(
        'div',
        { style: navbarStyle },
        _react2.default.createElement(_navs2.default, { items: items, offset: offset, duration: duration, delay: delay,
            coverWidth: coverWidth, navWidth: navWidth,
            linkClass: linkClass ? linkClass : "link",
            activeLinkClass: activeLinkClass ? activeLinkClass : "active_link" }),
        children
    );
};

Navbar.propTypes = {
    items: _react2.default.PropTypes.array.isRequired,
    offset: _react2.default.PropTypes.number,
    duration: _react2.default.PropTypes.number,
    delay: _react2.default.PropTypes.number,
    navbarStyle: _react2.default.PropTypes.object,
    height: _react2.default.PropTypes.number,
    backgroundColor: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    coverWidth: _react2.default.PropTypes.number,
    navWidth: _react2.default.PropTypes.number
};

exports.default = Navbar;
exports.ElementsWrapper = _elementsWrapper2.default;