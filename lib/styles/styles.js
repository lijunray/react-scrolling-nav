"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navs = exports.navbar = exports.cover = void 0;
var cover = {
  width: 600,
  height: '100%',
  overflow: 'hidden',
  WebkitMaskBoxImage: '-webkit-linear-gradient(left, transparent, white 50%, transparent)'
};
exports.cover = cover;
var navbar = {
  height: 70,
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  backgroundColor: '#222',
  display: 'flex',
  justifyContent: 'center'
};
exports.navbar = navbar;
var navs = {
  margin: 0,
  paddingLeft: 0,
  position: 'relative',
  height: '100%',
  display: 'flex',
  listStyle: 'none'
};
exports.navs = navs;