import React from 'react';
import PropTypes from 'prop-types';
import {
    map
} from 'ramda';
import styles from '../stylesheets/components/Samples.scss';

const Samples = ({samples}) => <ul className={styles.list}>
    {map(sample => <li key={sample}>{sample}</li>, samples)}
</ul>
Samples.propTypes = {
    samples: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Samples;