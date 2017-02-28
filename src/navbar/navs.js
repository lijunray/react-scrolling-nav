import React from 'react';

import Nav from './nav';

let currIndex;
let nextIndex = 0;
const NAV_WIDTH = 86;

const moveNavs = newIndex => {
    currIndex = nextIndex;
    nextIndex = newIndex;
    const navs = document.getElementById("navs");
    let currLeft = Number.parseInt(navs.style.left);
    const indexOffset = nextIndex - currIndex;
    navs.style.left = currLeft - indexOffset * NAV_WIDTH + "px";
}

const Navs = ({ items, offset, duration, delay, style, coverStyle }) => (
    <div style={coverStyle}>
        <ul id={"navs"} style={style}>
            {items.map((item, i) => (
                <Nav key={i} index={i} item={item} offset={offset} duration={duration} delay={delay} moveNavs={moveNavs} />
            ))}
        </ul>
    </div>
);

Navs.propTypes = {
    items: React.PropTypes.array.isRequired,
    offset: React.PropTypes.number,
    duration: React.PropTypes.number,
    delay: React.PropTypes.number,
    hide: React.PropTypes.func,
    show: React.PropTypes.func,
    style: React.PropTypes.object,
    coverStyle: React.PropTypes.object
}

export default Navs;