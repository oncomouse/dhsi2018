import React from 'react';

const Samples = ({samples}) => <ul>
    {samples.map(sample => <li key={sample}>{sample}</li>)}
</ul>
Samples.propTypes = {
    samples: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Samples;