import React from 'react';
import { animateScroll } from 'react-scroll';

import Navs from './navs';
import ElementsWrapper from './elements-wrapper';

const Navbar = ({ items, offset, duration, delay, navbarStyle, navsContainerStyle, children }) => (
    <div style={navbarStyle}>
        <Navs items={items} offset={offset} duration={duration} delay={delay} style={navsContainerStyle} />
        {children}
    </div>
);

Navbar.propTypes = {
    items: React.PropTypes.array.isRequired,
    offset: React.PropTypes.number,
    duration: React.PropTypes.number,
    delay: React.PropTypes.number,
    navbarStyle: navsContainerStyle,
    navsContainerStyle: navsContainerStyle,
    children: React.PropTypes.node
}

export default Navbar;

export { ElementsWrapper };