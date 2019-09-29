import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withClass = (Wrapped) => {
  return class extends Component {
    render() {
      const { id, sliceId, ...rest }  = this.props;
      const className = id === sliceId ? 'dotActive' : null;

      return <Wrapped id={id} className={className} {...rest} />;
    }
  }
};

withClass.propTypes = {
  id: PropTypes.number.isRequired,
  sliceId: PropTypes.number.isRequired
};

export default withClass;