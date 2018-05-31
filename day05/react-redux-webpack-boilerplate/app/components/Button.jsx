import React from 'react';
import PropTypes from 'prop-types';
import styles from '../stylesheets/components/Buttons.scss';

const Button = ({ action, children }) => (
  <button className={styles.button} onClick={action}>
    {children}
  </button>);
Button.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
Button.displayName = 'Button';

export default Button;
