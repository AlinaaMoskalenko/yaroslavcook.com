import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withClass = (Wrapped) => {
  return class extends Component {
    state = {
      dots: []
    };

    createDots = () => {
      const { sliceId, amountSlice }  = this.props;
      let dots = [];

      for (let i = 0; i < amountSlice; i++) {
        let className = null;

        if (i === sliceId) {
          className = 'dotActive';
        }

        dots.push(
          <Wrapped key={i} id={i} className={className} {...this.props} />
        );
      }

      this.setState({ dots });
    };

    componentDidMount() {
      if (this.props.amountSlice > 1) {
        this.createDots();
      }
    }

    componentDidUpdate(prevProps) {
      const { sliceId: oldId } = prevProps;
      if (this.props.sliceId !== oldId) {
        this.createDots();
      }
    }

    render() {
      const { dots } = this.state;
      return dots;
    }
  }
};

withClass.propTypes = {
  sliceId: PropTypes.number.isRequired,
  amountSlice: PropTypes.number.isRequired
};

export default withClass;