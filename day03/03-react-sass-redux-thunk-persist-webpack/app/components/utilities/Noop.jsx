import React from 'react';
import PropTypes from 'prop-types';

const Noop = ({ children }) => (<span>{children}</span>);
Noop.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node)
        , PropTypes.node
    ]).isRequired
};

export default Noop;