import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import styles from '../stylesheets/components/Samples.scss';

// If two samples have the same value, an error will occur:
const makeKey = key => `${key}-${Math.random()}`;

const Samples = ({ samples }) => (
  <ul className={styles.list}>
    {map(sample => <li key={makeKey(sample)}>{sample}</li>, samples)}
  </ul>);
Samples.propTypes = {
  samples: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Samples.displayName = 'Samples';

export default Samples;
