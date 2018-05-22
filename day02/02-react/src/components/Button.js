import React from 'react';

const Button = ({action, children}) => <button onClick={action}>
    {children}
</button>

export default Button;