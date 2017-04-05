import React from 'react';
import { Link } from 'react-scroll';

const Nav = ({ index, item, offset, duration, delay, moveNavs, width, linkClass, activeLinkClass }) => {
    const liStyle = {
        width: width,
        height: "100%"
    };
    return (
        <li style={liStyle}>
            <Link
                className={linkClass}
                activeClass={activeLinkClass}
                onSetActive={() => {
                    moveNavs(index, width);
                }}
                to={item.target}
                spy={true}
                smooth={true}
                offset={offset}
                duration={duration}
                isDynamic={true}
                delay={delay}>
                {item.label}
            </Link>
        </li>
    )
};

Nav.propTypes = {
    index: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired,
    offset: React.PropTypes.number,
    duration: React.PropTypes.number,
    delay: React.PropTypes.number,
    moveNavs: React.PropTypes.func,
    width: React.PropTypes.number,
    linkClass: React.PropTypes.string, 
    activeLinkClass: React.PropTypes.string
}

export default Nav;