import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MenuContainer extends Component {
  state = {
    id: 0,
    prevId: null
  };

  isIds = (sliceId) => {
    const { id } = this.state;

    this.setState({ prevId: id }); 
    this.setState({ id: sliceId }); 
  };

  onArrowClick = (idx, slices) => {
    const { id: prevSlice } = this.state;
    let slice = prevSlice;
    
    if (prevSlice === 0 && idx < 0) {
      slice = slices;
    } 

    if (prevSlice === slices - 1 && idx > 0) {
      slice = 0;
    } else if (prevSlice === slices - 1 && idx < 0) {
      slice += idx;
    }

    // also work when work first case
    if (prevSlice >= 0 && prevSlice < slices - 1 ) {
      slice += idx;
    }

    this.isIds(slice); 
  };

  onDotClick = ({ target: { id: sliceId }}) => {
    this.isIds(+sliceId); 
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { id, prevId } = this.state;

    return (
      <Route {...rest} render={(routeProps) => (
        <Component
          {...routeProps}
          sliceId={id}
          prevId={prevId}
          onArrowClick={this.onArrowClick}
          onDotClick={this.onDotClick} /> 
      )} />
    );
  }

  static propTypes = {
    Component: PropTypes.func
  };
} 