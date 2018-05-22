import React from 'react';
import {
    map
} from 'ramda';

const Samples = ({samples}) => <ul>
    {map(sample => <li key={sample}>{sample}</li>, samples)}
</ul>

export default Samples;