import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './menu-slider.module.scss';
import Dots from './components/dots';

const cx = classNames.bind(styles);

export default class MenuSlider extends Component {
  state = {
    id: 0,
    prevId: null,
    amountSlice: null
  };

  onDotClick = ({ target: { id: sliceId }}) => {
    const { id } = this.state;
    this.setState({ prevId: id }); 
    this.setState({ id: +sliceId }); 
  };

  componentDidMount() {
    const { menu } = this.props;
    let amountSlice = 1;

    if (typeof menu[0] !== 'string') {
      amountSlice = 0;

      for (let i = 0; i < menu.length; i++) {
        amountSlice++;
      }
    }

    this.setState({ amountSlice });
  }

  render () {
    const { menu } = this.props;
    const { id, prevId, amountSlice } = this.state;

    const menuItems = menu.map((item, idx) => {
      if (typeof item !== 'string') {
        const { lunch, dinner } = item;
      
        const lunchMenu = lunch.map((item, idx) => {
          return <p key={idx}>{item}</p>;
        });

        const dinnerMenu = dinner.map((item, idx) => {
          return <p key={idx}>{item}</p>;
        });

        const classes = cx(
          'menuContainer',
          { 'menuContainerVisible': idx === id,
            'animation': idx === id && prevId !== null }
        );

        return (
          <div key={idx} className={classes}>
            <h1 className={styles.mainTitle}>Day {idx + 1}</h1>
            <div className={styles.content}>
              <div className={styles.menu}>
                <h1>Lunch</h1>
                { lunchMenu }
              </div>
              <div className={styles.menu}>
                <h1>Dinner</h1>
                { dinnerMenu }
              </div>
            </div>
          </div>
        );
      }

      return <div className={styles.menuContainer}>
        <h1 className={styles.mainTitle}>Menu</h1>
      </div>;
    });

    return (
      <div className={styles.menuSlider}>
        { menuItems }
        <div className={styles.slideDots}>
          { amountSlice !== null &&
            <Dots sliceId={id}
              prevId={prevId}
              amountSlice={amountSlice}
              onDotClick={this.onDotClick} />}
        </div>
      </div>
    );
  }

  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object)
  };
}