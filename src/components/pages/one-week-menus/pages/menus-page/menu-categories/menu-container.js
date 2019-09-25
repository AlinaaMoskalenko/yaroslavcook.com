import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MenuContainer extends Component {
  state = {
    id: 0,
    prevId: null
  };

  onDotClick = ({ target: { id: sliceId }}) => {
    const { id } = this.state;
    this.setState({ prevId: id }); 
    this.setState({ id: +sliceId }); 
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
          onDotClick={this.onDotClick} /> 
      )} />
    );
  }

  static propTypes = {
    Component: PropTypes.func
  };
} 