import React from 'react';

import Nav from './nav';

let currIndex;
let nextIndex = 0;
const DEFAULT_NAV_WIDTH = 86;
let navsNode;

const moveNavs = (newIndex, navWidth) => {
    currIndex = nextIndex;
    nextIndex = newIndex;
    let currLeft = Number.parseInt(navsNode.style.left);
    const indexOffset = nextIndex - currIndex;
    navsNode.style.left = currLeft - indexOffset * navWidth + "px";
}

const Navs = ({ items, offset, duration, delay, coverWidth, navWidth, linkClass, activeLinkClass }) => {
    navWidth = navWidth ? navWidth : DEFAULT_NAV_WIDTH;
    coverWidth = coverWidth ? coverWidth : items.length * navWidth;
    const coverStyle = {
        width: coverWidth,
        height: "100%",
        overflow: "hidden",
        WebkitMaskBoxImage: "-webkit-linear-gradient(left, transparent, white 50%, transparent)"
    }
    const navsStyle = {
        margin: 0,
        left: coverWidth / 2 - 43,
        paddingLeft: 0,
        position: "relative",
        height: "100%",
        display: "flex",
        listStyle: "none"
    }
    return (
        <div style={coverStyle}>
            <ul style={navsStyle} ref={navs => { navsNode = navs; }}>
                {items.map((item, i) => (
                    <Nav key={i} index={i} item={item} offset={offset} duration={duration} 
                        delay={delay} moveNavs={moveNavs} width={navWidth} linkClass={linkClass} 
                        activeLinkClass={activeLinkClass} />
                ))}
            </ul>
        </div>
    );
};

Navs.propTypes = {
    items: React.PropTypes.array.isRequired,
    offset: React.PropTypes.number,
    duration: React.PropTypes.number,
    delay: React.PropTypes.number,
    coverWidth: React.PropTypes.number,
    navWidth: React.PropTypes.number
}

export default Navs;