'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currIndex = void 0;
var nextIndex = 0;
var DEFAULT_NAV_WIDTH = 86;
var navsNode = void 0;

var moveNavs = function moveNavs(newIndex, navWidth) {
    currIndex = nextIndex;
    nextIndex = newIndex;
    var currLeft = Number.parseInt(navsNode.style.left);
    var indexOffset = nextIndex - currIndex;
    navsNode.style.left = currLeft - indexOffset * navWidth + "px";
};

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
    return _react2.default.createElement(
        'div',
        { style: coverStyle },
        _react2.default.createElement(
            'ul',
            { style: navsStyle, ref: function ref(navs) {
                    navsNode = navs;
                } },
            items.map(function (item, i) {
                return _react2.default.createElement(_nav2.default, { key: i, index: i, item: item, offset: offset, duration: duration,
                    delay: delay, moveNavs: moveNavs, width: navWidth, linkClass: linkClass,
                    activeLinkClass: activeLinkClass });
            })
        )
    );
};

Navs.propTypes = {
    items: _react2.default.PropTypes.array.isRequired,
    offset: _react2.default.PropTypes.number,
    duration: _react2.default.PropTypes.number,
    delay: _react2.default.PropTypes.number,
    coverWidth: _react2.default.PropTypes.number,
    navWidth: _react2.default.PropTypes.number
};

exports.default = Navs;