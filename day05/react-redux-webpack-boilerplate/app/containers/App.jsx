import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Samples from '../components/Samples';
import { addSampleAction, resetAction } from '../ducks/Samples';

const mapStateToProps = state => ({
  samples: state.Samples,
});
const mapDispatchToProps = dispatch => ({
  addSample: () => dispatch(addSampleAction()),
  resetSamples: () => dispatch(resetAction()),
});

class App extends React.Component {
    static propTypes = {
      samples: PropTypes.arrayOf(PropTypes.string).isRequired,
      addSample: PropTypes.func.isRequired,
      resetSamples: PropTypes.func.isRequired,
    }
    addSample = (ev) => {
      ev.preventDefault();
      this.props.addSample();
    }
    resetSamples = (ev) => {
      ev.preventDefault();
      this.props.resetSamples();
    }
    render() {
      return (
        <div>
          <Samples samples={this.props.samples} />
            <Button action={this.addSample}>Click Me</Button>
              <Button action={this.resetSamples}>Reset List</Button>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
