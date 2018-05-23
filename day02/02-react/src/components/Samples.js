import React from 'react';

const Samples = ({samples}) => <ul>
    {samples.map(sample => <li key={sample}>{sample}</li>)}
</ul>

export default Samples;