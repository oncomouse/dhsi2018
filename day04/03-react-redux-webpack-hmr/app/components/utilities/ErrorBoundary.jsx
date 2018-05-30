import React from 'react';
import PropTypes from 'prop-types';
import RedBox from 'redbox-react';
import { equals } from 'ramda';
import Noop from './Noop';

class ErrorBoundary extends React.Component {
    static propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]).isRequired,
    }
    state = {
      hasError: false,
      error: null,
    }
    // Because of HMR, we now need to reset component on hot:
    componentWillReceiveProps(nextProps) {
      if (!equals(this.props, nextProps)) {
        this.setState({
          hasError: false,
          error: null,
        });
      }
    }
    componentDidCatch(error) {
      this.setState({ hasError: true, error });
    }
    render() {
      if (this.state.hasError) {
        return <RedBox error={this.state.error} />;
      }
      return this.props.children;
    }
}

export default process.env.NODE_ENV !== 'production' ? ErrorBoundary : Noop;
