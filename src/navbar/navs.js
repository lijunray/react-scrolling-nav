import PropTypes from 'prop-types';
import React from 'react';

import Nav from './nav';

let currIndex = null;
let nextIndex = 0;
const DEFAULT_NAV_WIDTH = 86;

const Navs = ({ items, offset, duration, delay, coverWidth, navWidth, linkClass, activeLinkClass }) => {
    navWidth = navWidth ? navWidth : DEFAULT_NAV_WIDTH;
    coverWidth = coverWidth ? coverWidth : items.length * navWidth;
    const coverStyle = {
        width: coverWidth,
        height: "100%",
        overflow: "hidden",
        WebkitMaskBoxImage: "-webkit-linear-gradient(left, transparent, white 50%, transparent)"
    };
    const navsStyle = {
        margin: 0,
        left: coverWidth / 2 - 43,
        paddingLeft: 0,
        position: "relative",
        height: "100%",
        display: "flex",
        listStyle: "none"
    };
    var navsNode = React.createRef();
    const moveNavs = (newIndex, navWidth) => {
        currIndex = nextIndex;
        nextIndex = newIndex;
        if (navsNode.current) {
            let currLeft = Number.parseInt(navsNode.current.style.left);
            const indexOffset = nextIndex - currIndex;
            navsNode.current.style.left = currLeft - indexOffset * navWidth + "px";
        }
    };
    return (
        <div style={coverStyle}>
            <ul style={navsStyle} ref={navsNode}>
                {items.map((item, i) => (
                    <Nav
                        key={i}
                        index={i}
                        item={item}
                        offset={offset}
                        duration={duration} 
                        delay={delay}
                        moveNavs={moveNavs}
                        width={navWidth}
                        linkClass={linkClass} 
                        activeLinkClass={activeLinkClass} />
                ))}
            </ul>
        </div>
    );
};

Navs.propTypes = {
    items: PropTypes.array.isRequired,
    offset: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    coverWidth: PropTypes.number,
    navWidth: PropTypes.number
}

export default Navs;