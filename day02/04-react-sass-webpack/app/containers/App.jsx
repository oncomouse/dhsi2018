import React from 'react';
import Button from '../components/Button'
import Samples from '../components/Samples'

var SAMPLE_LENGTH = 36;
var STRING_LENGTH = 8;
function randomString() {
    return Math.random()
        .toString(SAMPLE_LENGTH)
        .replace(/[^a-z]+/g, '')
        .substr(0, STRING_LENGTH - 1);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            samples: []
        };
    }
    addSample = ev => {
        ev.preventDefault();
        this.setState({
            samples: [...this.state.samples, randomString()]
        });
    }
    resetSamples = ev => {
        ev.preventDefault();
        this.setState({
            samples: []
        });
    }
    render() {
        return (
            <div>
                <Samples samples={this.state.samples}/>
                <Button action={this.addSample}>Click Me</Button>
                <Button action={this.resetSamples}>Reset List</Button>
            </div>
        );
    }
}

export default App;
