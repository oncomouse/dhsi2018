import React from 'react';
import PropTypes from 'prop-types';
import styles from '../stylesheets/components/Samples.scss';

const Samples = ({samples}) => <ul className={styles.list}>
    {samples.map(sample => <li key={sample}>{sample}</li>)}
</ul>
Samples.propTypes = {
    samples: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Samples;