import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withTransition = (Wrapped) => {
  return class extends Component {
    CLOSE_TIME = 700;

    state = {
      animation: 'openPhoto'
    };

    onToggleImage = (currentId, toggleId) => {
      this.setState({ animation: 'closePhoto' },
        () => {
          setTimeout(() => {
            this.props.onToggleImage(currentId, toggleId);
            this.setState({ animation: 'openPhoto' });
          }, this.CLOSE_TIME);
        }
      );
    }

    render() {
      const { animation } = this.state;
      return <Wrapped {...this.props} className={animation} onToggleImage={this.onToggleImage} />
    }
  }
};

withTransition.defaultProps = {
  onToggleImage: () => {}
};

withTransition.propTypes = {
  onToggleImage: PropTypes.func
};

export default withTransition;