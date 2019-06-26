import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withTransition = (Wrapped) => {
  return class extends Component {
    CLOSE_TIME = 700;

    state = {
      animation: 'openPhoto'
    };

    onTogglePhoto = (currentId, toggleId) => {
      this.setState({ animation: 'closePhoto' },
        () => {
          setTimeout(() => {
            this.props.onTogglePhoto(currentId, toggleId);
            this.setState({ animation: 'openPhoto' });
          }, this.CLOSE_TIME);
        }
      );
    }

    render() {
      const { animation } = this.state;
      return <Wrapped {...this.props} className={animation} onTogglePhoto={this.onTogglePhoto} />
    }
  }
};

withTransition.defaultProps = {
  onTogglePhoto: () => {}
};

withTransition.propTypes = {
  onTogglePhoto: PropTypes.func
};

export default withTransition;