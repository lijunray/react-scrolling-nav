import React from 'react';
import { Link } from 'react-scroll';

import '../styles/nav.css';

const Nav = ({ index, item, offset, duration, delay, moveNavs }) => (
    <li className="item">
        <Link
            className="link"
            activeClass="activeLink"
            onSetActive={() => {
                moveNavs(index);
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
);

Nav.propTypes = {
    index: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired,
    offset: React.PropTypes.number,
    duration: React.PropTypes.number,
    delay: React.PropTypes.number,
    onSetActive: React.PropTypes.func,
    moveNavs: React.PropTypes.func
}

export default Nav;