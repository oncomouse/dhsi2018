import React from 'react';
import PropTypes from 'prop-types';
import {
    map
} from 'ramda';

const Samples = ({samples}) => <ul>
    {map(sample => <li key={sample}>{sample}</li>, samples)}
</ul>
Samples.propTypes = {
    samples: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Samples;