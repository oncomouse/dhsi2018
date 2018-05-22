import React from 'react';
import PropTypes from 'prop-types';

const Button = ({action, children}) => <button onClick={action}>
    {children}
</button>
Button.propTypes = {
    action: PropTypes.func.isRequired
    , children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node)
        , PropTypes.node
    ]).isRequired
}

export default Button;