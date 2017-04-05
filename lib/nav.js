'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactScroll = require('react-scroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement(
        'li',
        { style: liStyle },
        _react2.default.createElement(
            _reactScroll.Link,
            {
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
                delay: delay },
            item.label
        )
    );
};

Nav.propTypes = {
    index: _react2.default.PropTypes.number.isRequired,
    item: _react2.default.PropTypes.object.isRequired,
    offset: _react2.default.PropTypes.number,
    duration: _react2.default.PropTypes.number,
    delay: _react2.default.PropTypes.number,
    moveNavs: _react2.default.PropTypes.func,
    width: _react2.default.PropTypes.number,
    linkClass: _react2.default.PropTypes.string,
    activeLinkClass: _react2.default.PropTypes.string
};

exports.default = Nav;