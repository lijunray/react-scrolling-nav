import React, { PropTypes } from 'react';
import { Element } from 'react-scroll';

const ElementsWrapper = ({ children, items, style, className }) => (
    <div>
        {children.map((child, i) => (
            <Element style={style} className={className} name={items[i].target} key={i} >{child}</Element>
        ))}
    </div>
);

ElementsWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    navItems: PropTypes.array.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
}

export default ElementsWrapper;