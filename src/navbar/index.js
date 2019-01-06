import PropTypes from 'prop-types';
import React from 'react';

import Navs from './navs';
import ElementsWrapper from './elements-wrapper';

import './styles/nav.css';

const Navbar = ({ 
    items, offset, duration, delay, height, 
    backgroundColor, children, coverWidth, navWidth, linkClass, activeLinkClass
}) => {
    const navbarStyle = {
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

    return (
        <div style={navbarStyle}>
            <Navs items={items} offset={offset} duration={duration} delay={delay} 
                coverWidth={coverWidth} navWidth={navWidth} 
                linkClass={linkClass ? linkClass : "link"}
                activeLinkClass={activeLinkClass ? activeLinkClass : "active_link"} />
            {children}
        </div>
    );
};

Navbar.propTypes = {
    items: PropTypes.array.isRequired,
    offset: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    navbarStyle: PropTypes.object,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    coverWidth: PropTypes.number,
    navWidth: PropTypes.number
}

export default Navbar;

export { ElementsWrapper };